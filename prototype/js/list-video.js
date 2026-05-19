document.querySelectorAll('.playlist-card').forEach(card => {
    card.addEventListener('click', () => {
        const playlistName = card.getAttribute('data-playlist') || card.querySelector('.video-title')?.innerText || 'this playlist';
        alert(`📁 Playlist: ${playlistName}\nThis is a static prototype. Playlist content would be shown here.`);
    });
});