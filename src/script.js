// SlideShow
// Function to initialize a slideshow for a specific container
function initializeSlideshow(containerId) {
    let slideIndex = 0;
    const slides = document.querySelectorAll(`#${containerId} .slide-fade`);

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');

        // Increment slide index
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Show the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Set a timer to show the next slide
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    showSlides();
}

// Initialize slideshows for each container
document.addEventListener('DOMContentLoaded', () => {
    initializeSlideshow('violao-slideshow');
    initializeSlideshow('violino-slideshow');
    initializeSlideshow('piano-slideshow');

    // Theme change functionality
    const btnColor = document.getElementById('btn-color');
    if (btnColor) {
        btnColor.addEventListener('click', changeBackground);
    }
});

// Mudança de Tema
const btnColor = document.getElementById('btn-color');
if (btnColor) {
    btnColor.addEventListener('click', changeBackground);
}
let indexButton = 0;

const colorsOne = ['#4f321c', '#7e6753', '#b08554', '#f8f1e2']; // Tema escuro
const colorsTwo = ['#0a1f44', '#163a69', '#2e5984', '#76d6ff']; // Tema azul escuro

function changeBackground() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const links = document.querySelectorAll('nav ul li a');
    const btnColor = document.getElementById('btn-color');
    
    if (indexButton === 0) {
        // Mudar para o tema azul escuro
        body.style.background = colorsOne[0];
        header.style.background = colorsOne[1];
        body.style.color = colorsOne[2];
        links.forEach(link => {
            link.style.color = colorsOne[3];
            link.style.backgroundColor = "";
            link.style.borderColor = colorsOne[1]; // Ajustar cor da borda para combinar com o cabeçalho
        });
        btnColor.style.background = colorsOne[3];
        btnColor.style.color = colorsOne[2];
        btnColor.style.border = `2px solid ${colorsOne[2]}`;
        indexButton = 1; // Definir indexButton para 1 para o tema azul escuro
    } else if (indexButton === 1) {
        // Mudar para o tema rosa escuro
        body.style.background = colorsTwo[0];
        header.style.background = colorsTwo[1];
        body.style.color = colorsTwo[2];
        links.forEach(link => {
            link.style.color = colorsTwo[3];
            link.style.backgroundColor = "";
            link.style.borderColor = colorsTwo[1]; // Ajustar cor da borda para combinar com o cabeçalho
        });
        btnColor.style.background = colorsTwo[3];
        btnColor.style.color = colorsTwo[2];
        btnColor.style.border = `2px solid ${colorsTwo[2]}`;
        indexButton = 2; // Definir indexButton para 2 para o tema rosa escuro
    } else {
        // Voltar para o tema padrão
        body.style.background = "linear-gradient(to bottom, #f8f1e2, #4f321c)";
        header.style.background = "#fdf8f3";
        body.style.color = "#181818";
        links.forEach(link => {
            link.style.color = "#4f321c";
            link.style.backgroundColor = "";
            link.style.borderColor = "#7e6753"; // Ajustar cor da borda para combinar com o cabeçalho padrão
        });
        btnColor.style.background = "#fdf8f3";
        btnColor.style.color = "#181818";
        btnColor.style.border = `2px solid #7e6753`;
        indexButton = 0; // Definir indexButton para 0 para o tema padrão
    }
}

// Event Listener para o botão de mudança de tema
document.addEventListener('DOMContentLoaded', () => {
    const btnColor = document.getElementById('btn-color');
    if (btnColor) {
        btnColor.addEventListener('click', changeBackground);
    }
});

// Quiz
function showResults(event) {
    event.preventDefault();
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results-container');
    const formData = new FormData(quizForm);
    const userAnswers = Object.fromEntries(formData);
    const correctAnswers = {
        q1: "Piano",
        q2: "Violoncelo",
        q3: "Flauta",
        q4: "Pandeiro",
        q5: "Violino"
    };

    let score = 0;
    let totalQuestions = 5;
    let resultsHTML = '<h2>Resultados do Quiz</h2><ol>';

    for (let question in correctAnswers) {
        let userAnswer = userAnswers[question];
        let correctAnswer = correctAnswers[question];
        let isCorrect = userAnswer === correctAnswer;
        if (isCorrect) {
            score++;
        }
        resultsHTML += `<li>${question.replace('q', 'Pergunta ')}: Você respondeu "${userAnswer}". Resposta correta: "${correctAnswer}". ${isCorrect ? '<span style="color:green;">Correto</span>' : '<span style="color:red;">Incorreto</span>'}</li>`;
    }

    resultsHTML += `</ol><p>Você acertou ${score} de ${totalQuestions} perguntas!</p>`;
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.style.display = 'block';
}

// Event Listener para o formulário do quiz
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', showResults);
    }
});
