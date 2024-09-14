// Dynamically add list items
const itemList = document.getElementById('itemList');
const items = ['Item 1', 'Item 2', 'Item 3'];

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  itemList.appendChild(li);
});

// Event delegation: Handle clicks on list items
itemList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    alert(`Item clicked: ${event.target.textContent}`);
  }
});
