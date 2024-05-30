document.addEventListener('DOMContentLoaded', () => {
    // Добавление анимации при прокрутке
    const elements = document.querySelectorAll('.container, .feature, .tech-details, .review, form');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
