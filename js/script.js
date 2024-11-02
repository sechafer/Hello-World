document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const changeBtn = document.getElementById('changeBtn');
    const messages = [
        "Hello World!",
        "¡Hola Mundo!",
        "Bonjour le Monde!",
        "Ciao Mondo!",
        "Hallo Welt!"
    ];
    let currentIndex = 0;

    // Add animation classes after a small delay
    setTimeout(() => {
        greeting.style.opacity = '1';
        greeting.style.transform = 'translateY(0)';
        changeBtn.style.opacity = '1';
        changeBtn.style.transform = 'translateY(0)';
    }, 100);

    changeBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % messages.length;
        
        greeting.style.opacity = '0';
        greeting.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            greeting.textContent = messages[currentIndex];
            greeting.style.opacity = '1';
            greeting.style.transform = 'translateY(0)';
        }, 300);
    });
});