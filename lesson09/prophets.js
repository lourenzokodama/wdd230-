document.addEventListener('DOMContentLoaded', function() {
    var prophetsList = [
        {
            name: 'Joseph Smith',
            img: 'images/joseph-smith.jpg',
            info: 'First President of the Church of Jesus Christ of Latter-day Saints, established the Church, and translated the Book of Mormon.',
        },
        // Add more prophets here
    ];

    var listContainer = document.getElementById('prophets-list');

    prophetsList.forEach(function(prophet) {
        var card = document.createElement('div');
        card.className = 'card';

        var img = document.createElement('img');
        img.src = prophet.img;
        card.appendChild(img);

        var h2 = document.createElement('h2');
        h2.textContent = prophet.name;
        card.appendChild(h2);

        var p = document.createElement('p');
        p.textContent = prophet.info;
        card.appendChild(p);

        listContainer.appendChild(card);
    });
});
