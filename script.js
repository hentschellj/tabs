$(document).ready(function() {
  $('.tabs-body .tab1').show().siblings().hide();
  $('.tabs-list a').on('click', function() {
    let tabVal = '.' + $(this).data('tabs');
    $(tabVal).show().siblings().hide();
  });
});