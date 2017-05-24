$(document).ready(function () {

  // Hamburger button

  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap'),
      $sidebarArrow = $('.menu-sidebar .sidebar-menu-arrow');
        //$menuParentItem = $('.menu-sidebar .menu-item-has-children');

  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
  });

//fancybox
  $(".fancybox").fancybox({
   'infobar':true,
   'buttons':false
  });

  //mask for phone
   $(".form-phone").mask("+7 (999) 999-9999");



});