let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// Copyright Date
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;

// Today's Date
const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

// Hamburger Menu

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

let day = date.getDay();

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';

    document.querySelector(".banner-button").addEventListener("click", function () {
        banner.style.display = 'none';
      });
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}

const images = document.querySelectorAll('img');
const options = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };

const preloadImage = (img) => {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}

const io = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            io.unobserve(entry.target);
        }
    });
}, options);

images.forEach(image => {
    io.observe(image);
});
// change color
const btn = document.getElementById("btn");

let randomNum = () => {
    return Math.floor(Math.random() * 256);
};
let changeColor = () => {
    let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);

// this is diretoryfile

        // Sample data
        const featuredItems = [
            {
                title: 'Item 1',
                description: 'Description 1',
                image: 'image1.jpg',
                link: '#'
            },
            // ...
        ];

        // Function to create a list item
        function createListItem(item) {
            const listItem = document.createElement('div');
            listItem.classList.add('featured-item');

            const h3 = document.createElement('h3');
            h3.textContent = item.title;
            listItem.appendChild(h3);

            const p = document.createElement('p');
            p.textContent = item.description;
            listItem.appendChild(p);

            const a = document.createElement('a');
            a.textContent = 'Read More';
            a.href = item.link;
            listItem.appendChild(a);

            return listItem;
        }

        // Function to create a grid item
        function createGridItem(item) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('featured-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            gridItem.appendChild(img);

            const h3 = document.createElement('h3');
            h3.textContent = item.title;
            gridItem.appendChild(h3);

            const p = document.createElement('p');
            p.textContent = item.description;
            gridItem.appendChild(p);

            const a = document.createElement('a');
            a.textContent = 'Read More';
            a.href = item.link;
            gridItem.appendChild(a);

            return gridItem;
        }

        // Function to toggle between list and grid views
        function toggleViews() {
            const listView = document.getElementById('list-view');
            const gridView = document.getElementById('grid-view');

            if (listView.style.display === 'none') {
                listView.style.display = 'block';
                gridView.style.display = 'none';
            } else {
                listView.style.display = 'none';
                gridView.style.display = 'block';
            }
        }

        // Create the list view items
        featuredItems.forEach(item => {
            const listItem = createListItem(item);
            document.getElementById('list-view').appendChild(listItem);
        });

        // Create the grid view items
        featuredItems.forEach(item => {
            const gridItem = createGridItem(item);
            document.getElementById('grid-view').appendChild(gridItem);
        });

        // Toggle the views when a button is clicked
        document.addEventListener('click', event => {
            if (event.target.id === 'toggle-views') {
                toggleViews();
            }
        });
   
