const button = document.getElementById('print-button');
if (button) { button.hidden = false; button.addEventListener('click', () => window.print()); }
