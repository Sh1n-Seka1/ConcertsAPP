const concertsData = [
    { artist: 'Tiakola', venue: 'Paris', date: 'Lundi-12-Janvier-2024', image: 'https://img.lemde.fr/2023/02/09/0/0/3508/4680/664/0/75/0/2974418_1675948381389-07-04-2022-070422-tiakola-0748copy.jpg' },
    { artist: 'Gazo', venue: 'Paris', date: 'Samedi-12-Décembre-2023', image: 'https://rosefestival.fr/wp-content/uploads/GAZO-ROSE-FESTIVAL-TOULOUSE-1000x962.jpg' },
    { artist: 'Niska', venue: 'Londre', date: 'Mardi-11-Janvier-2024', image: 'https://papillonsdenuit.com/wp-content/uploads/2022/11/niska-1.png' },
    { artist: '21 Savage', venue: 'Paris', date: 'Jeudi-01-Février-2024', image: 'https://www.booska-p.com/wp-content/uploads/2023/07/21-savage-news-visu-1024x750.jpg' },
    { artist: 'Leto', venue: 'Nice', date: 'Mercredi-01-Mai-2024', image: 'https://i.scdn.co/image/ab6761610000e5eb5d10bbdae4fcb62a7a132966' },
];

function displayConcerts(concerts) {
    const concertList = document.getElementById('concertList');
    concertList.innerHTML = '';

    concerts.forEach(concert => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = concert.image;
        img.alt = concert.artist;

        const details = document.createElement('div');
        details.innerHTML = `<h2>${concert.artist}</h2>
                            <p>${concert.venue}</p>
                            <p>Date: ${concert.date}</p>`;

        card.appendChild(img);
        card.appendChild(details);
        concertList.appendChild(card);
    });
}
function filterConcerts() {
    const venueFilter = document.getElementById('venueFilter');
    const selectedVenue = venueFilter.value;

    if (selectedVenue === 'all') {
        displayConcerts(concertsData);
    } else {
        const filteredConcerts = concertsData.filter(concert => concert.venue === selectedVenue);
        displayConcerts(filteredConcerts);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    displayConcerts(concertsData);
});