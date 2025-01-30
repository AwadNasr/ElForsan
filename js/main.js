document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, // التكرار
        autoplay: {
            delay: 2000, // تغيير البطاقة كل 3 ثواني
            disableOnInteraction: false, // استمرار التشغيل التلقائي بعد التفاعل
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1, // عرض بطاقة واحدة في الموبايل
        spaceBetween: 20, // المسافة بين البطاقات
        breakpoints: {
            768: { slidesPerView: 2 }, // في التابلت يعرض بطاقتين
            1024: { slidesPerView: 3 }, // في الديسكتوب يعرض 3 بطاقات
        }
    });
});


