document.addEventListener('DOMContentLoaded', () => {
    const homeGrid = document.getElementById('homeGrid');
    if (!homeGrid) return;

    homeGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading home videos...</p>';

    fetch('/api/videos/home')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            homeGrid.innerHTML = '';

            if (data.length === 0) {
                homeGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No videos available.</p>';
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

                homeGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching home videos:', error);
            homeGrid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load home videos.</p>';
        });
});