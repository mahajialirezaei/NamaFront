document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('trendingGrid');

    if (!grid) return;

    grid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading trending videos...</p>';

    fetch('/api/videos/trending')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            grid.innerHTML = '';

            if (data.length === 0) {
                grid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No trending videos found.</p>';
                return;
            }

            data.forEach(v => {
                const card = document.createElement('div');
                card.className = 'video-card';
                card.setAttribute('data-title', v.title);
                card.setAttribute('data-channel', v.channel);
                card.setAttribute('data-views', v.views.split(' ')[0]);
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

                grid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching trending videos:', error);
            grid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load trending videos. Please try again later.</p>';
        });
});