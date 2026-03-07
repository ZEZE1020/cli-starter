// app.js — main application entry point

function greet(name) {
  return `Hello, ${name}! Welcome to the CLI Starter app.`;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// TODO: add multiply and divide functions

function fetchUser(id) {
  // Simulated async fetch
  return fetch(`/api/users/${id}`)
    .then(response => response.json())
    .catch(error => {
      console.error('fetchUser failed:', error);
      throw error;
    });
}

function renderApp() {
  const message = greet('World');
  console.log(message);
  console.log('Sum of 2 + 3 =', add(2, 3));
}

// TODO: wire up renderApp to a DOM ready event

renderApp();
