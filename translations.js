const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.start": "Get Started",
        "nav.status": "My Status",
        
        // Hero Section
        "hero.title": "Control powering your home. We'll guide you through it.",
        "hero.subtitle": "We handle the bureaucracy, grants, and installer matchmake so you can switch to solar energy without any headaches.",
        "hero.btn.start": "Start Assessment",
        "hero.btn.why": "Why Solar?",

        // Welcome Back Box
        "welcome.title": "Welcome back!",
        "welcome.text": "We saved your progress. You are currently at step:",
        "welcome.btn": "Continue Application",

        // Cards
        "card.bur.title": "Bureaucracy Shield",
        "card.bur.text": "Confused by Polish energy laws? We auto-fill the forms and guide you through the government grant process (Mój Prąd).",
        "card.bur.btn": "Learn More",

        "card.grant.title": "Maximize Grants",
        "card.grant.text": "Don't leave money on the table. Our system identifies every subsidy you are eligible for based on your location.",
        "card.grant.warn": "This only works if you allow access to your location inside of your browser, which we kindly ask you to do.",
        "card.grant.btn": "See how you can do that",

        "card.track.title": "Track Progress",
        "card.track.text": "No more guessing. Log in to your personal dashboard to see exactly where your application stands.",
        "card.track.btn": "Try Demo",

        "card.emit.title": "Reduce Emissions",
        "card.emit.text": "Join thousands of Polish households reducing smog. Clean air starts with your roof.",
        "card.emit.btn": "See Animated Statistics",

        // CTA Section (Bottom)
        "cta.title": "Ready to make a change?",
        "cta.text": "Treat yourself to clean energy today!",
        "cta.btn": "Start Now",

        // Assessment Form (Keep these for the assessment page)
        "assess.title": "Solar Assessment",
        "step.1": "Location & Contact",
        "step.2": "Property Details",
        "step.3": "Energy Consumption",
        "btn.next": "Next Step",
        "btn.submit": "Submit Assessment"
    },
    pl: {
        // Navigation
        "nav.home": "Strona Główna",
        "nav.learn": "Wiedza",
        "nav.start": "Rozpocznij",
        "nav.status": "Mój Status",

        // Hero Section
        "hero.title": "Zasilaj Dom. Chroń Nasze Bieguny.",
        "hero.subtitle": "Zajmujemy się biurokracją, dotacjami i dopasowaniem instalatorów, abyś mógł przejść na energię słoneczną bez bólu głowy.",
        "hero.btn.start": "Rozpocznij Ocenę",
        "hero.btn.why": "Dlaczego Solar?",

        // Welcome Back Box
        "welcome.title": "Witaj ponownie!",
        "welcome.text": "Zapisaliśmy Twój postęp. Jesteś obecnie na kroku:",
        "welcome.btn": "Kontynuuj Wniosek",

        // Cards
        "card.bur.title": "Tarcza Biurokracyjna",
        "card.bur.text": "Gubisz się w polskich przepisach? Automatycznie wypełniamy formularze i prowadzimy Cię przez proces dotacji (Mój Prąd).",
        "card.bur.btn": "Dowiedz się więcej",

        "card.grant.title": "Maksymalizuj Dotacje",
        "card.grant.text": "Nie trać pieniędzy. Nasz system identyfikuje każdą dotację, do której się kwalifikujesz na podstawie lokalizacji.",
        "card.grant.warn": "Działa to tylko, jeśli zezwolisz na dostęp do lokalizacji w przeglądarce, o co uprzejmie prosimy.",
        "card.grant.btn": "Zobacz jak to zrobić",

        "card.track.title": "Śledź Postęp",
        "card.track.text": "Koniec zgadywania. Zaloguj się do osobistego panelu, aby zobaczyć, na jakim etapie jest Twój wniosek.",
        "card.track.btn": "Wypróbuj Demo",

        "card.emit.title": "Redukuj Emisję",
        "card.emit.text": "Dołącz do tysięcy polskich gospodarstw redukujących smog. Czyste powietrze zaczyna się od Twojego dachu.",
        "card.emit.btn": "Zobacz Animowane Statystyki",

        // CTA Section
        "cta.title": "Gotowy na zmianę?",
        "cta.text": "Dołącz do rewolucji solarnej już dziś.",
        "cta.btn": "Zacznij Teraz",

        // Assessment Form
        "assess.title": "Ocena Solarna",
        "step.1": "Lokalizacja i Kontakt",
        "step.2": "Szczegóły Nieruchomości",
        "step.3": "Zużycie Energii",
        "btn.next": "Następny Krok",
        "btn.submit": "Wyślij Wniosek"
    }
};

function setLanguage(lang) {
    localStorage.setItem('polar_lang', lang);
    
    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has an icon inside (like navbar)
            const icon = element.querySelector('i');
            if(icon) {
                 // If there is an icon, update only the text node next to it
                 // This is a bit complex, simpler is to wrap text in <span> in HTML
            } 
            
            // Safer approach: update innerText
            element.innerText = translations[lang][key];
        }
    });

    // Update Buttons Active State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Auto-load saved language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('polar_lang') || 'en';
    setLanguage(savedLang);
});