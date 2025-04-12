$(document).ready(function() {
  $('.btn-select').click(function() {
    $('.theme-card').removeClass('selected');
    $('.btn-select').removeClass('btn-success').addClass('btn-outline-primary').text('Apply');

    const card = $(this).closest('.theme-card');
    card.addClass('selected');
    $(this).removeClass('btn-outline-primary').addClass('btn-success').text('Selected');
  });
});