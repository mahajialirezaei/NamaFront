const historyVideos = [
    {
        title: "Microservices Architecture in Cloud",
        channel: "DevMind Academy",
        views: "24K",
        date: "Watched 2 hours ago",
        thumb: "assets/images/micro-service.png"
    },
    {
        title: "Subnetting, NAT & DHCP – Deep Dive",
        channel: "NetPro Engineering",
        views: "12K",
        date: "Watched yesterday",
        thumb: "assets/images/Subnetting.jpg"
    },
    {
        title: "Modern UI Design: beyond YouTube clones",
        channel: "Creative Studio",
        views: "8.2K",
        date: "Watched 3 days ago",
        thumb: "assets/images/modern-ui.png"
    },
    {
        title: "Two-factor auth & JWT best practices",
        channel: "SecureCode",
        views: "5.1K",
        date: "Watched 5 days ago",
        thumb: "assets/images/two-factor.jpg"
    },
    {
        title: "Containers vs VMs: cloud scalability",
        channel: "CloudNative Hub",
        views: "19K",
        date: "Watched 1 week ago",
        thumb: "assets/images/containers-vms.png"
    },
    {
        title: "Designing REST APIs for video platforms",
        channel: "Backend Mastery",
        views: "9.7K",
        date: "Watched 2 weeks ago",
        thumb: "assets/images/restful-api.png"
    }
];

const historyGrid = document.getElementById('historyGrid');
if (historyGrid) {
    historyVideos.forEach(vid => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.setAttribute('data-title', vid.title);
        card.setAttribute('data-channel', vid.channel);
        card.setAttribute('data-views', vid.views);
        card.setAttribute('data-date', vid.date);
        card.setAttribute('data-thumb', vid.thumb);

        card.innerHTML = `
                <div class="thumbnail" style="background-image: url('${vid.thumb}'); background-size: cover;"></div>
                <div class="video-info">
                    <div class="video-title">${vid.title}</div>
                    <div class="channel-name">${vid.channel}</div>
                    <div class="video-stats">${vid.views} views • ${vid.date}</div>
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
        historyGrid.appendChild(card);
    });
}