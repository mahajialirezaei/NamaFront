const savedVideos = [
    { title: "Two-factor auth & JWT best practices", channel: "SecureCode", views: "5.1K", date: "Saved 2 days ago", thumb: "assets/images/two-factor.jpg" },
    { title: "Modern UI Design: beyond YouTube clones", channel: "Creative Studio", views: "8.2K", date: "Saved 5 days ago", thumb: "assets/images/modern-ui.png" },
    { title: "Public, Private, Test‑Net & Special IPv4", channel: "NetNinja", views: "4.3K", date: "Saved 1 week ago", thumb: "assets/images/private-public-ipv4.png" },
    { title: "RESTful API design for video platforms", channel: "Backend Mastery", views: "9.7K", date: "Saved 3 days ago", thumb: "assets/images/restful-api.png" }
];

const playlists = [
    { title: "☁️ Cloud Computing Series", videos: "8 videos", thumb: "assets/images/K8s-orchestrasation.jpg" },
    { title: "🌐 Networking for Developers", videos: "12 videos", thumb: "assets/images/Subnetting.jpg" },
    { title: "🎨 UI/UX Masterclass", videos: "5 videos", thumb: "assets/images/modern-ui.png" }
];

const libraryGrid = document.getElementById('libraryGrid');
savedVideos.forEach(v => {
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
    libraryGrid.appendChild(card);
});

const playlistGrid = document.getElementById('playlistGrid');
playlists.forEach(p => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.style.cursor = 'pointer';
    card.onclick = () => alert(`📁 Playlist: ${p.title}\n${p.videos} (static demo)`);
    card.innerHTML = `
            <div class="thumbnail" style="background-image: url('${p.thumb}'); background-size: cover;"></div>
            <div class="video-info">
                <div class="video-title">${p.title}</div>
                <div class="video-stats">${p.videos}</div>
            </div>
        `;
    playlistGrid.appendChild(card);
});