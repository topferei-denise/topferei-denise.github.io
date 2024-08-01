document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery-container');
    const detailContainer = document.getElementById('detail-container');

    // Beispiel-Daten für die Galerie (hier sollten echte Bild-URLs und IDs verwendet werden)
    const galleryItems = [
        { src: 'bild1.jpg', alt: 'Bild 1', title: 'Pflanzenkugel', id: '1', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild2.jpg', alt: 'Bild 2', title: 'Pflanzenkugel', id: '2', description: 'Eine Kleine Kugel die ich persönlich für "Stein" arbeit empfehlen würde' },
        { src: 'bild3.jpg', alt: 'Bild 3', title: 'Pflanzenkugel', id: '3', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild4.jpg', alt: 'Bild 4', title: 'Pflanzturm', id: '4', description: 'Auf einer Gewindestange' },
        { src: 'bild5.jpg', alt: 'Bild 5', title: 'Lichterkugel', id: '5', description: 'Innen mit einer hübschen Lichterkette ausgestattet' },
        { src: 'bild6.jpg', alt: 'Bild 6', title: 'Pflanzenkugel', id: '6', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild7.jpg', alt: 'Bild 7', title: 'Pflanzenkugel', id: '7', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild8.jpg', alt: 'Bild 8', title: 'Pflanzenkugel', id: '8', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten8' },
        { src: 'bild9.jpg', alt: 'Bild 9', title: 'Kräutertopf', id: '9', description: 'Zum Ernten von Kräutern' },
        { src: 'bild10.jpg', alt: 'Bild 10', title: 'Pflanzenkugel', id: '10', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild12.jpg', alt: 'Bild 12', title: 'Pflanzenkugel', id: '12', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild13.jpg', alt: 'Bild 13', title: 'Pflanzenkugel', id: '13', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild14.jpg', alt: 'Bild 14', title: 'Pflanzenkugel', id: '14', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild15.jpg', alt: 'Bild 15', title: 'Pflanzenkugel', id: '15', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild16.jpg', alt: 'Bild 16', title: 'Pflanzenkugel', id: '16', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild17.jpg', alt: 'Bild 17', title: 'Pflanzenkugel', id: '17', description: 'Eine Kleine aber nützliche Kugel wenn es darum geht Pflanzen ein neues zuhause zu bieten' },
        { src: 'bild18.jpg', alt: 'Bild 18', title: 'Pflanzenturm', id: '18', description: '3 verschiedene Größen' },
        { src: 'bild19.jpg', alt: 'Bild 19', title: 'Pflanzenturm', id: '19', description: '3 verschiedene Größen' }
    ];

    // Funktion zum Erstellen von Galerieelementen
    function createGalleryItem(item) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.id = item.id;

        const title = document.createElement('p');
        title.textContent = item.title;

        const button = document.createElement('button');
        button.textContent = 'Mehr erfahren';
        button.addEventListener('click', () => showDetail(item));

        galleryItem.appendChild(img);
        galleryItem.appendChild(title);
        galleryItem.appendChild(button);

        return galleryItem;
    }

    // Funktion zum Anzeigen der Detailansicht
    function showDetail(item) {
        detailContainer.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.src}" alt="${item.alt}" id="${item.id}">
            <p>${item.description}</p>
            <button onclick="hideDetail()">Schließen</button>
        `;
        detailContainer.style.display = 'block';
    }

    // Funktion zum Verbergen der Detailansicht
    window.hideDetail = function() {
        detailContainer.style.display = 'none';
    };

    // Füge die Galerieelemente zum Container hinzu
    galleryItems.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryContainer.appendChild(galleryItem);
    });
});
