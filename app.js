// Spotify API Configuration
const clientId = 'b1b4276f0ccb4fda85f4e355709cf0e0'; // Replace with your Spotify Client ID
const redirectUri = window.location.origin + window.location.pathname;
const scope = 'user-top-read';

// DOM Elements
const loginSection = document.getElementById('login');
const tracksContainer = document.getElementById('tracks-container');
const tracksGrid = document.getElementById('tracks-grid');
const loadingElement = document.getElementById('loading');
const errorContainer = document.getElementById('error-container');
const errorMessage = document.getElementById('error-message');
const loginButton = document.getElementById('login-button');
const retryButton = document.getElementById('retry-button');
const timeButtons = document.querySelectorAll('.time-btn');

// App State
let currentTimeRange = 'short_term'; // Default: last month

// Initialize the application
function init() {
    // Check if returning from Spotify auth
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');
    
    if (accessToken) {
        // Save token and hide hash from URL
        localStorage.setItem('spotify_access_token', accessToken);
        window.history.replaceState({}, document.title, redirectUri);
        showTracksSection();
        fetchTopTracks(currentTimeRange);
    } else if (localStorage.getItem('spotify_access_token')) {
        // Use existing token
        showTracksSection();
        fetchTopTracks(currentTimeRange);
    } else {
        // Show login
        showLoginSection();
    }
    
    // Setup event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    loginButton.addEventListener('click', handleLogin);
    retryButton.addEventListener('click', handleRetry);
    
    // Time range buttons
    timeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                currentTimeRange = this.dataset.range;
                
                // Update active button
                timeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Fetch new data
                showLoading();
                fetchTopTracks(currentTimeRange);
            }
        });
    });
}


function handleLogin() {
  
    const state = generateRandomString(16);
    localStorage.setItem('spotify_auth_state', state);
    
  
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('response_type', 'token');
    authUrl.searchParams.append('client_id', clientId);
    authUrl.searchParams.append('scope', scope);
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('state', state);
    
   
    window.location.href = authUrl.toString();
}


function handleRetry() {
    hideError();
    showLoading();
    fetchTopTracks(currentTimeRange);
}


function generateRandomString(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return text;
}

// Fetch top tracks from Spotify API
async function fetchTopTracks(timeRange) {
    try {
        const accessToken = localStorage.getItem('spotify_access_token');
        
        if (!accessToken) {
            throw new Error('No access token available');
        }
        
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=${timeRange}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
       
        if (response.status === 401) {
            localStorage.removeItem('spotify_access_token');
            showError('Your session has expired. Please log in again.');
            showLoginSection();
            return;
        }
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        displayTracks(data.items);
    } catch (error) {
        console.error('Error fetching top tracks:', error);
        showError('Failed to fetch your top tracks. Please try again.');
    }
}


function displayTracks(tracks) {
   
    tracksGrid.innerHTML = '';
    
 
    tracks.forEach((track, index) => {
        const card = createTrackCard(track, index + 1);
        tracksGrid.appendChild(card);
    });
    
    hideLoading();
}


function createTrackCard(track, rank) {
    const card = document.createElement('div');
    card.className = 'track-card';
    
    
    const albumImage = track.album.images[0]?.url || 'placeholder.jpg';
    
    card.innerHTML = `
        <div class="track-image-container">
            <div class="track-rank">${rank}</div>
            <img src="${albumImage}" alt="${track.name}" class="track-image">
        </div>
        <div class="track-info">
            <h3 class="track-name">${track.name}</h3>
            <p class="track-artist">${track.artists.map(artist => artist.name).join(', ')}</p>
        </div>
    `;
    
   
    card.addEventListener('click', () => {
        window.open(track.external_urls.spotify, '_blank');
    });
    
    return card;
}


function showLoginSection() {
    loginSection.style.display = 'block';
    tracksContainer.style.display = 'none';
    errorContainer.style.display = 'none';
}

function showTracksSection() {
    loginSection.style.display = 'none';
    tracksContainer.style.display = 'block';
    errorContainer.style.display = 'none';
}

function showLoading() {
    loadingElement.style.display = 'block';
    tracksGrid.style.display = 'none';
}

function hideLoading() {
    loadingElement.style.display = 'none';
    tracksGrid.style.display = 'grid';
}

function showError(message) {
    errorContainer.style.display = 'block';
    errorMessage.textContent = message;
    loadingElement.style.display = 'none';
}

function hideError() {
    errorContainer.style.display = 'none';
}


window.addEventListener('DOMContentLoaded', init);