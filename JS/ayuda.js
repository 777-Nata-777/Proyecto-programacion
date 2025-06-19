document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');

            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('visible'));
            document.querySelectorAll('.toggle-icon').forEach(i => i.textContent = '+');

            if (!isActive) {
                question.classList.add('active');
                question.nextElementSibling.classList.add('visible');
                question.querySelector('.toggle-icon').textContent = '-';
            }
        });
    });
});
