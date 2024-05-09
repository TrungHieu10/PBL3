document.addEventListener("DOMContentLoaded", function() {
    // Các ID của nút và URL tương ứng
    const navigationLinks = {
        'nav-link-dashboard': 'userdashboard.html',
        'nav-link-profile': 'userprofile.html',
        'nav-link-plan': 'userplan.html',
        'nav-link-coaches': 'usercoaches.html'
    };

    // Thêm sự kiện click cho mỗi nút
    for (let id in navigationLinks) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', function() {
                window.location.href = navigationLinks[id];
            });
        }
    }
});

