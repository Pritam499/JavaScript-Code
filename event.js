// Adding a click event listener
document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button was clicked!');
  });
  
  // Adding a keyup event listener
  document.getElementById('textInput').addEventListener('keyup', (event) => {
    console.log('Key pressed:', event.key); // Logs the key pressed
  });
  


  // Event delegation: Attach a single event listener to the parent <ul> element
document.getElementById('itemList').addEventListener('click', (event) => {
    // Check if the clicked element is a <li> element
    if (event.target.tagName === 'LI') {
      alert(`Item clicked: ${event.target.textContent}`);
    }
  });
  