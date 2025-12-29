// File: js/announcements.js

// Dynamically load announcements from content folder (via CMS or JSON)
const announcementsData = [
  {
    title: 'New Workshop Available',
    date: '2025-12-30',
    content: 'We are launching a new design workshop covering modern UI/UX techniques.',
    image: 'https://via.placeholder.com/500x300'
  },
  {
    title: 'Holiday Schedule',
    date: '2025-12-20',
    content: 'We will be closed during the holidays from Dec 24th to Jan 1st.',
    image: 'https://via.placeholder.com/500x300'
  }
];

const announcementsContainer = document.getElementById('announcements');

announcementsData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = item.image;
  card.appendChild(img);

  const title = document.createElement('h3');
  title.textContent = item.title;
  card.appendChild(title);

  const date = document.createElement('p');
  date.style.fontSize = '12px';
  date.style.opacity = '0.8';
  date.textContent = item.date;
  card.appendChild(date);

  const content = document.createElement('p');
  content.textContent = item.content;
  card.appendChild(content);

  announcementsContainer.appendChild(card);
});
