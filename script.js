// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Trang web Học Viện Rồng đã tải xong!");

    // Ví dụ: Xử lý nút Đăng nhập
    const loginButton = document.querySelector('.btn-login');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('Chức năng Đăng Nhập đang được phát triển!');
        });
    }

    // Ví dụ: Xử lý nút Đăng ký
    const signupButton = document.querySelector('.btn-signup');
    if (signupButton) {
        signupButton.addEventListener('click', function() {
            alert('Chức năng Đăng Ký đang được phát triển!');
        });
    }
    
    // Ví dụ: Xử lý nút Tìm kiếm trong menu
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn form submit theo cách truyền thống
            const searchTerm = searchForm.querySelector('input[type="search"]').value;
            if (searchTerm.trim() !== "") {
                alert(`Bạn đang tìm kiếm: ${searchTerm}`);
                // Ở đây bạn có thể chuyển hướng đến trang kết quả tìm kiếm
                // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            } else {
                alert('Vui lòng nhập từ khóa tìm kiếm.');
            }
        });
    }

    // Ví dụ: Xử lý nút Call to Action trong Hero section
    const ctaButton = document.querySelector('.hero-section .btn-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Bắt đầu hành trình học tập của bạn!');
            // Có thể chuyển hướng đến trang danh sách khóa học
            // window.location.href = '/courses';
        });
    }

});