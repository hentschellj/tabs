$(document).ready(function() {
  $('.tabs-body .tab1').show().siblings().hide();
  $('.tabs-list a').on('click', function() {
    let tabVal = '.tabs .' + $(this).data('tabs');
    $(tabVal).slideDown().siblings().slideUp();
  });
});