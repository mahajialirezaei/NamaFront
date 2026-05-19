const tabs = document.querySelectorAll('.tab-channel');
const contents = {
    videos: document.getElementById('videosTab'),
    playlists: document.getElementById('playlistsTab'),
    about: document.getElementById('aboutTab')
};
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        Object.values(contents).forEach(content => {
            if(content) content.style.display = 'none';
        });
        if(contents[target]) contents[target].style.display = 'block';
    });
});