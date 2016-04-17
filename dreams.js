$(document).ready(function() {
    $('nav ul li:last-child').addClass('active');
    $('.spongebob').click(function(event) {
      $('.happy').show('slow');
      $(this).remove();
      $('.clickme').remove();
    });
});
