
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
   
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    
    const savedTheme = localStorage.getItem('theme');
    
   
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeIcon.setAttribute('title', 'Cambiar a modo claro');
        } else {
            themeIcon.textContent = '🌙';
            themeIcon.setAttribute('title', 'Cambiar a modo oscuro');
        }
    }
    

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        
        if (systemPrefersDark.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    

    systemPrefersDark.addEventListener('change', (e) => {
        
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    

    themeToggle.setAttribute('title', 'Cambiar entre modo claro y oscuro');
});