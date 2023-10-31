document.addEventListener('DOMContentLoaded', () => {
    const findSongsBtn = document.getElementById('findSongsBtn');
    const videoContainer = document.getElementById('video-container');

    findSongsBtn.addEventListener('click', () => {
        const mood = document.getElementById('mood').value;
        const apiKey = 'AIzaSyAiVhxfUKODto5XjOqXI6qGZlsN0RO9F8I'; 
        const playlists = {
            happy: 'PL_DAORNW41fWdT7PNC_TZ3pf8Rxy1yCaT',
            energitic: 'PLsqptldB5nDUPAJ51sAda-ZtE3oVjE5YL',
            chill: 'PLQ_PIlf6OzqJnAvH-6nuaHsK7jz7GCySj'
        };

        const playlistId = playlists[mood];
        if (playlistId) {
            const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&part=snippet&maxResults=50&playlistId=${playlistId}`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const embeddableVideos = filterEmbeddableVideos(data.items);
                    if (embeddableVideos.length > 0) {
                        const randomVideo = getRandomVideo(embeddableVideos);
                        const videoId = randomVideo.snippet.resourceId.videoId;
                        const videoPlayer = createVideoPlayer(videoId);
                        videoContainer.innerHTML = '';
                        videoContainer.appendChild(videoPlayer);
                    } else {
                        videoContainer.innerHTML = 'No embeddable videos found for the selected mood.';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    videoContainer.innerHTML = 'Failed to fetch videos. Please try again later.';
                });
        } else {
            videoContainer.innerHTML = 'Invalid mood selection.';
        }
    });
});

function filterEmbeddableVideos(videos) {
    return videos.filter(video => video.snippet.title && video.snippet.resourceId && video.snippet.resourceId.videoId);
}

function getRandomVideo(videos) {
    return videos[Math.floor(Math.random() * videos.length)];
}

function createVideoPlayer(videoId) {
    const player = document.createElement('iframe');
    player.src = `https://www.youtube.com/embed/${videoId}`;
    player.width = '560';
    player.height = '315';
    player.allowfullscreen = true;
    player.style.border = 'none';
    return player;
}
