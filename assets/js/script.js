document.addEventListener("DOMContentLoaded", function () {

    // 1. HIỆU ỨNG TỰ ĐỘNG TRIGGER HOẠT HỌA KHI CUỘN TRANG (SCROLL ANIMATION DETECTOR)
    const fadeElements = document.querySelectorAll(".feature-card, .ecosystem-box");
    
    const observerOptions = {
        root: null,
        threshold: 0.1, // Chạy hiệu ứng khi 10% cấu thành lọt vào khung hình
        rootMargin: "0px 0px -40px 0px"
    };

    const appearanceObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                appearanceObserver.unobserve(entry.target); // Chạy hiệu ứng 1 lần duy nhất
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        // Gắn class fade-in ban đầu để kích hoạt lắng nghe cuộn trang
        appearanceObserver.observe(element);
    });
});