$('.modal-link').on('click', function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 0.50
  });
});