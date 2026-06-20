document.addEventListener('DOMContentLoaded', () => {
    const videosGrid = document.getElementById('channelVideosGrid');
    const playlistsGrid = document.getElementById('channelPlaylistsGrid');

    if (videosGrid) {
        videosGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading channel videos...</p>';
        fetch('/api/channel/videos')
            .then(res => {
                if(!res.ok) throw new Error('Network error');
                return res.json();
            })
            .then(data => {
                videosGrid.innerHTML = '';
                if(data.length === 0) {
                    videosGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No videos uploaded yet.</p>';
                    return;
                }
                data.forEach(v => {
                    const card = document.createElement('div');
                    card.className = 'video-card';
                    card.setAttribute('data-title', v.title);
                    card.setAttribute('data-channel', v.channel);
                    card.setAttribute('data-views', v.views);
                    card.setAttribute('data-date', v.date);
                    card.setAttribute('data-thumb', v.thumb);

                    card.innerHTML = `
                        <div class="thumbnail" style="background-image: url('${v.thumb}'); background-size: cover;"></div>
                        <div class="video-info">
                            <div class="video-title">${v.title}</div>
                            <div class="channel-name">${v.channel}</div>
                            <div class="video-stats">${v.views} views • ${v.date}</div>
                        </div>
                    `;

                    card.addEventListener('click', () => {
                        const title = encodeURIComponent(card.dataset.title);
                        const channel = encodeURIComponent(card.dataset.channel);
                        const views = encodeURIComponent(card.dataset.views);
                        const date = encodeURIComponent(card.dataset.date);
                        const thumb = encodeURIComponent(card.dataset.thumb);
                        window.location.href = `watch.html?title=${title}&channel=${channel}&views=${views}&date=${date}&thumb=${thumb}`;
                    });
                    videosGrid.appendChild(card);
                });
            })
            .catch(err => {
                console.error(err);
                videosGrid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load channel videos.</p>';
            });
    }

    if (playlistsGrid) {
        playlistsGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading playlists...</p>';
        fetch('/api/channel/playlists')
            .then(res => {
                if(!res.ok) throw new Error('Network error');
                return res.json();
            })
            .then(data => {
                playlistsGrid.innerHTML = '';
                if(data.length === 0) {
                    playlistsGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No playlists created.</p>';
                    return;
                }
                data.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'playlist-card';
                    card.style.cursor = 'pointer';
                    card.onclick = () => alert(`📁 Playlist: ${p.title}\n${p.videos} (Dynamic fetch demo)`);

                    card.innerHTML = `
                        <div class="thumbnail" style="background-image: url('${p.thumb}'); background-size: cover;"></div>
                        <div class="video-info">
                            <div class="video-title">${p.title}</div>
                            <div class="video-stats">${p.videos}</div>
                        </div>
                    `;
                    playlistsGrid.appendChild(card);
                });
            })
            .catch(err => {
                console.error(err);
                playlistsGrid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load playlists.</p>';
            });
    }
});