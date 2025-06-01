document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.2)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});
