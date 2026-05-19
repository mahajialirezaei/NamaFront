document.addEventListener('DOMContentLoaded', function() {
    const pageMap = {
        'index.html': { url: 'index.html', menuText: 'Home' },
        'channel.html': { url: 'channel.html', menuText: 'My Channel' },
        'admin.html': { url: 'admin.html', menuText: 'Admin panel' },
        'history.html': { url: 'history.html', menuText: 'History' },
        'trending.html': { url: 'trending.html', menuText: 'Trending' },
        'subscriptions.html': { url: 'subscriptions.html', menuText: 'Subscriptions' },
        'library.html': { url: 'library.html', menuText: 'Library' }
    };

    let currentFile = window.location.pathname.split('/').pop();
    if (currentFile === '' || currentFile === 'index.html') currentFile = 'index.html';

    const sidebarItems = document.querySelectorAll('.sidebar ul li');

    function highlightMenuItem(menuText) {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
            const itemText = item.innerText.trim();
            const cleanText = itemText.replace(/[^\w\s]/g, '').trim();
            if (cleanText === menuText) {
                item.classList.add('active');
            }
        });
    }

    function setupNavigation() {
        sidebarItems.forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemText = item.innerText.trim();
                const cleanText = itemText.replace(/[^\w\s]/g, '').trim();

                let destination = null;
                if (cleanText === 'Home') destination = 'index.html';
                else if (cleanText === 'My Channel') destination = 'channel.html';
                else if (cleanText === 'Admin panel') destination = 'admin.html';
                else if (cleanText === 'Trending') destination = 'trending.html';
                else if (cleanText === 'Subscriptions') destination = 'subscriptions.html';
                else if (cleanText === 'Library') destination = 'library.html';
                else if (cleanText === 'History') destination = 'history.html';

                if (destination) {
                    if (window.location.pathname.includes(destination)) return;
                    window.location.href = destination;
                } else {
                    alert(`"${itemText}" page is under construction (static prototype).`);
                }
            });
        });
    }

    function setHighlightFromCurrentPage() {
        if (currentFile === 'index.html') highlightMenuItem('Home');
        else if (currentFile === 'channel.html') highlightMenuItem('My Channel');
        else if (currentFile === 'admin.html') highlightMenuItem('Admin panel');
        else if (currentFile === 'history.html') highlightMenuItem('History');
        else if (currentFile === 'trending.html') highlightMenuItem('Trending');
        else if (currentFile === 'subscriptions.html') highlightMenuItem('Subscriptions');
        else if (currentFile === 'library.html') highlightMenuItem('Library');
        else {
            highlightMenuItem('Home');
        }
    }

    setupNavigation();
    setHighlightFromCurrentPage();
});