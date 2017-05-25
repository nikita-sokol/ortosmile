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


   //menu-mobile
   $('.menu-mobile-link').on('click', function (e) {
    e.preventDefault();

    var  item = $(this).closest(".menu-mobile-item"),
         list = $(this).closest(".menu-mobile-list"),
         items = list.find(".menu-mobile-item"),
         content = item.find(".menu-mobile-list-in"),
         otherContent = list.find(".menu-mobile-list-in"),
         duration = 300;

    if   (!item.hasClass('active')) {
         items.removeClass('active');
         item.addClass('active');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);
    } else {
      item.removeClass('active');

      content.stop(true, true).slideUp(duration);
    }
  });


   //main-menu
   $('.main-menu-link').on('click', function (e) {
    e.preventDefault();

    var  item = $(this).closest(".main-menu-item"),
         list = $(this).closest(".main-menu-list"),
         items = list.find(".main-menu-item"),
         content = item.find(".main-menu-list-in"),
         otherContent = list.find(".main-menu-list-in"),
         duration = 100;

    if   (!item.hasClass('active')) {
         items.removeClass('active');
         item.addClass('active');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);
    } else {
      item.removeClass('active');

      content.stop(true, true).slideUp(duration);
    }
  });

   $(document).mouseup(function (e){

       var  item = $(".main-menu-item"),
            list = $(".main-menu-list-in"),
            link = $(".main-menu-link"),
            duration = 100;

      if (!list.is(e.target) &&
          !link.is(e.target) &&
           list.has(e.target).length === 0) { 
         
         item.removeClass('active');
         list.slideUp(duration); 
      }
   });
    

    //m-results
    $('.results-name-link').on('click', function (e) {
    e.preventDefault();

    var  $this = $(this),
         item = $this.closest(".results-name-item"),
         list = $(".results-name-list"),
         links = list.find(".results-name-link");

    if   (!$this.hasClass('active')) {

         links.removeClass('active');
         $this.addClass('active');
    } 

    var  diagnosisText = $('.results-diagnosis-text'), 
         contentItem = $('.results-diagnosis-item'),
         itemPosition = $this.data('results'),
         itemFilter = contentItem.filter('.results-item-'+itemPosition),
         textItem = itemFilter.html();

         diagnosisText.html("<strong>Диагноз: </strong>" + textItem);

    var  worksText = $('.results-works-text'), 
         contentWorksItem = $('.results-works-item'),
         itemWorksFilter = contentWorksItem.filter('.results-works-'+itemPosition),
         textWorksItem = itemWorksFilter.html();

         worksText.html(textWorksItem);

    var  itemResults = $(".results-img-item");

         itemResults.filter('.results-img-'+itemPosition)
         .addClass('active')
         .siblings()
         .removeClass('active');
  });


    //2gis map
    var  map;

         DG.then(function () {
             map = DG.map('map', {
                 center: [55.66453963191137, 37.75214331054688],
                 zoom: 16
             });

             DG.marker([55.66453963191137, 37.75214331054688]).addTo(map);

         });



});
