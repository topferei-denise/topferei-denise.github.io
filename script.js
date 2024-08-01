// Funktion zum Anzeigen der ausgewählten Sektion und Verstecken der anderen
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Funktion, die beim Laden der Seite nur die Startseite zeigt
window.onload = function() {
    showSection('startseite');
};
