document.addEventListener('DOMContentLoaded', function() {
    const pageMap = {
        'index.html': { url: 'index.html', menuText: 'Home' },
        'channel.html': { url: 'channel.html', menuText: 'My Channel' },
        'admin.html': { url: 'admin.html', menuText: 'Admin panel' },
        'trending': { url: null, menuText: 'Trending', notReady: true },
        'subscriptions': { url: null, menuText: 'Subscriptions', notReady: true },
        'library': { url: null, menuText: 'Library', notReady: true },
        'history': { url: null, menuText: 'History', notReady: true }
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
                else if (cleanText === 'Trending') destination = null;
                else if (cleanText === 'Subscriptions') destination = null;
                else if (cleanText === 'Library') destination = null;
                else if (cleanText === 'History') destination = null;

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
        else {
            highlightMenuItem('Home');
        }
    }

    setupNavigation();
    setHighlightFromCurrentPage();
});