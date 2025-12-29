// File: public/js/designs.js

// Sample data for designs
const designsData = [
  {
    name: 'Modern Logo',
    label: 'Recent',
    image: 'https://via.placeholder.com/500x300',
    description: 'This is a modern logo design created for a tech startup.'
  },
  {
    name: 'Website Mockup',
    label: 'Old',
    image: 'https://via.placeholder.com/500x300',
    description: 'A complete website mockup showcasing UI/UX design skills.'
  },
  {
    name: 'Poster Design',
    label: 'Recent',
    image: 'https://via.placeholder.com/500x300',
    description: 'Promotional poster created for an online campaign.'
  }
];

const designContainer = document.getElementById('design-cards');

// Function to create design cards
function createCard(design) {
  const card = document.createElement('div');
  card.className = 'card';

  const label = document.createElement('span');
  label.className = 'label';
  label.textContent = design.label;
  card.appendChild(label);

  const img = document.createElement('img');
  img.src = design.image;
  card.appendChild(img);

  const name = document.createElement('h3');
  name.textContent = design.name;
  card.appendChild(name);

  // Click event to show pop-up details
  card.addEventListener('click', () => {
    alert(`${design.name}\n\n${design.description}`);
  });

  designContainer.appendChild(card);
}

// Render all cards
designsData.forEach(design => createCard(design));
