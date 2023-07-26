window.onload = () => {
    const body = document.body;
    body.style.backgroundColor = 'white';
};

const changeStyles = () => {
    // Get the body element
    const body = document.body;
  
    // Check if the current background color is the desired color (e.g., white)
    if (body.style.backgroundColor === 'white') {
      // Change the background color to a different color when clicked (e.g., lightblue)
      body.style.backgroundColor = '#3E90FC';
      // Change the h1 text color to white when clicked
      document.querySelector('h1.title').style.color = 'white';
      document.querySelector('a.telegram-username').style.color = 'white';
    } else {
      // If the current background color is not the desired color, change it back to the original color
      body.style.backgroundColor = 'white';
      // Change the h1 text color to blue when the background is white
      document.querySelector('h1.title').style.color = '#3E90FC';
      document.querySelector('a.telegram-username').style.color = '#3E90FC';
    }
  }