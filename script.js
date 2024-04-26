// Example JavaScript to dynamically add guitar listings
document.addEventListener('DOMContentLoaded', function() {
    const guitarList = document.getElementById('guitar-list');

    // Example guitar data
    const guitars = [
        {name: "Guitar 1", price: "$500", description: "A beautiful acoustic guitar."},
        {name: "Guitar 2", price: "$600", description: "A stunning electric guitar."},
        // Add more guitars as needed
    ];

    guitars.forEach(guitar => {
        const guitarElement = document.createElement('div');
        guitarElement.className = 'guitar';
        guitarElement.innerHTML = `
            <h2>${guitar.name}</h2>
            <p>Price: ${guitar.price}</p>
            <p>${guitar.description}</p>
        `;
        guitarList.appendChild(guitarElement);
    });
});
