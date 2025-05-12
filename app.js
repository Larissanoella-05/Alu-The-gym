// Spotify API Configuration
const clientId = 'b1b4276f0ccb4fda85f4e355709cf0e0'; // Your Spotify Client ID
const redirectUri = 'http://127.0.0.1:5500/index.html';
const scope = 'user-top-read';

// Spotify API endpoints
const authorizeEndpoint = 'https://accounts.spotify.com/authorize';
const topTracksEndpoint = 'https://api.spotify.com/v1/me/top/tracks';

// DOM elements
const loginButton = document.getElementById('login-button');
const loginContainer = document.getElementById('login');
const tracksContainer = document.getElementById('tracks-container');
const tracksGrid = document.getElementById('tracks-grid');
const loading = document.getElementById('loading');
const errorContainer = document.getElementById('error-container');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-button');
const timeButtons = document.querySelectorAll('.time-btn');

// State variables
let currentTimeRange = 'short_term';
let accessToken = null;
let tokenExpirationTimer = null;

// Initialize app
function init() {
    tracksContainer.style.display = 'none';
    errorContainer.style.display = 'none';

    const savedToken = localStorage.getItem('spotify_access_token');
    const tokenExpiration = localStorage.getItem('spotify_token_expiration');

    if (savedToken && tokenExpiration && Date.now() < parseInt(tokenExpiration, 10)) {
        accessToken = savedToken;

        loginContainer.style.display = 'none';
        tracksContainer.style.display = 'block';

        fetchTopTracks(currentTimeRange);
        return; // Skip auth hash logic
    }

    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');

    if (errorParam) {
        showError(`Authentication error: ${errorParam}. Please try again.`);
        return;
    }
}
    // Check if we're returning from auth with a token
    const hash = window.location.hash;
    if (hash) {
        try {
            const params = new URLSearchParams(hash.substring(1));
            accessToken = params.get('access_token');
            const expiresIn = parseInt(params.get('expires_in'), 10);
            const receivedState = params.get('state');
            const storedState = localStorage.getItem('spotify_auth_state');

            if (receivedState !== storedState) {
                showError('State mismatch. Potential CSRF attack.');
                return;
            }

            localStorage.removeItem('spotify_auth_state');

            if (accessToken && expiresIn) {
                // Clear hash from URL
                history.replaceState(null, null, ' ');
                

                // Set token expiration timer
                tokenExpirationTimer = setTimeout(() => {
                    accessToken = null;
                    showError('Session expired. Please log in again.');
                    loginContainer.style.display = 'block';
                    tracksContainer.style.display = 'none';
                }, expiresIn * 1000);

                // Show tracks container and hide login
                loginContainer.style.display = 'none';
                tracksContainer.style.display = 'block';

                // Fetch top tracks
                fetchTopTracks(currentTimeRange);
            } else {
                // No access token found in URL
                console.error('No access token received');
                showError('Failed to authenticate with Spotify. Please try again.');
            }
        } catch (error) {
            console.error('Error parsing URL hash', error);
            showError('Something went wrong during authentication. Please try again.');
        }
    }

    // Setup event listeners
    loginButton.addEventListener('click', authorizeWithSpotify);
    retryButton.addEventListener('click', handleRetry);

    // Setup time range buttons
    timeButtons.forEach(button => {
        button.addEventListener('click', handleTimeRangeChange);
    });
}

// Generate a random string for state parameter
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Authorize with Spotify
function authorizeWithSpotify() {
    try {
        const state = generateRandomString(16);
        localStorage.setItem('spotify_auth_state', state);

        const params = new URLSearchParams({
            client_id: clientId,
            response_type: 'token',
            redirect_uri: redirectUri,
            scope: scope,
            state: state,
            show_dialog: true
        });

        console.log(`Redirecting to Spotify authorization: ${authorizeEndpoint}?${params.toString()}`);
        window.location.href = `${authorizeEndpoint}?${params.toString()}`;
    } catch (error) {
        console.error('Error during authorization redirect:', error);
        showError('Failed to redirect to Spotify. Please try again.');
    }
}

// Fetch top tracks from Spotify API
async function fetchTopTracks(timeRange) {
    // Show loading state
    loading.style.display = 'flex';
    tracksGrid.innerHTML = '';
    errorContainer.style.display = 'none';

    try {
        const params = new URLSearchParams({
            limit: 20,
            time_range: timeRange
        });

        console.log(`Fetching ${timeRange} top tracks...`);

        const response = await fetch(`${topTracksEndpoint}?${params.toString()}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API Error:', response.status, errorData);

            switch (response.status) {
                case 401:
                    throw new Error('Unauthorized. Please log in again.');
                case 429:
                    throw new Error('Rate limit exceeded. Please try again later.');
                default:
                    throw new Error(`Error ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
            }
        }

        const data = await response.json();
        console.log(`Received ${data.items?.length || 0} tracks`);

        if (!data.items || data.items.length === 0) {
            showError('No tracks found for this time period. Try another time range or check your Spotify listening history.');
            return;
        }

        renderTracks(data.items);
    } catch (error) {
        console.error('Error fetching tracks:', error);

        // If token is expired or invalid, prompt for relogin
        if (error.message.includes('expired') || error.message.includes('401')) {
            accessToken = null;
            showError('Your session has expired. Please log in again.');
        } else {
            showError(`Failed to fetch your top tracks: ${error.message}`);
        }
    } finally {
        loading.style.display = 'none';
    }
}

// Render tracks to the grid
function renderTracks(tracks) {
    tracksGrid.innerHTML = '';

    tracks.forEach((track, index) => {
        // Get album image with fallback
        const albumImage = track.album.images[1]?.url ||
                          track.album.images[0]?.url ||
                          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzI4MjgyOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IndoaXRlIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';

        const artists = track.artists.map(artist => artist.name).join(', ');

        const trackElement = document.createElement('div');
        trackElement.className = 'track-item';
        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-image">
                <img src="${albumImage}" alt="${track.name} by ${artists}">
                <div class="play-overlay">
                    <a href="${track.external_urls.spotify}" target="_blank" class="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="track-info">
                <h3 class="track-name" title="${track.name}">${track.name}</h3>
                <p class="track-artist" title="${artists}">${artists}</p>
            </div>
        `;

        tracksGrid.appendChild(trackElement);
    });
}

// Handle time range button clicks
function handleTimeRangeChange(event) {
    const selectedRange = event.target.dataset.range;

    if (selectedRange !== currentTimeRange) {
        currentTimeRange = selectedRange;

        // Update active button
        timeButtons.forEach(button => {
            button.classList.remove('active');
        });
        event.target.classList.add('active');

        // Fetch new tracks if we have a token
        if (accessToken) {
            fetchTopTracks(currentTimeRange);
        }
    }
}

// Show error message
function showError(message) {
    console.error('Error:', message);
    errorMessage.textContent = message;
    errorContainer.style.display = 'block';
}

// Handle retry button click
function handleRetry() {
    errorContainer.style.display = 'none';

    if (accessToken) {
        fetchTopTracks(currentTimeRange);
    } else {
        authorizeWithSpotify();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
