var flkty = new Flickity( '.testimonials-slider', {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  prevNextButtons: true,
  pageDots: false,
  autoPlay: true,
  autoPlay: 5000,
});

var flkty = new Flickity( '.image-carousels-slider', {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  prevNextButtons: true,
  pageDots: false,
  autoPlay: true,
  autoPlay: 5000,
});
 

var flkty = new Flickity( '.ace-club-carousels-slider', {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  prevNextButtons: true,
  pageDots: false,
  autoPlay: true,
  autoPlay: 5000,
});

$(window).scroll(function () {
    var currentScrollPosition = $(this).scrollTop();
    if (currentScrollPosition > 0) {
       $('body').addClass('scrolled');
    }else {
        $('body').removeClass('scrolled');
    }
});


// if ( window.location.pathname == '/' ){
//     // Index (home) page
//      console.log(window.location.pathname);
//    $('.header-wrapper').addClass('inline-menu_home');
// } else {
//     // Other page
//     console.log(window.location.pathname);
//      $('.header-wrapper').removeClass('inline-menu_home');
// }


// // Curve Text

// new CircleType(document.getElementById('curve-text'))
//   .radius(584);




 $.each($('.shopify-product-form'), function(){
        var thisForm = $(this);

        $(thisForm).change(function(){
          	var selectedVariantInput = $(thisForm).find('input[type="radio"]:checked');  
          
            
            var parentBox = $(selectedVariantInput).closest('.radio-box');
            var variantLabel = $(selectedVariantInput).data('varaint_label');
            var variantPrice = $(selectedVariantInput).data('variant_price');
            var quantity = $(thisForm).find('input[name="quantity"]').val();

            var noVariantProdPrice = $(thisForm).find('.prod-price').data('single_item_price');

            if(typeof variantPrice == 'undefined') {
                variantPrice = noVariantProdPrice;
            }

            if (selectedVariantInput.length > 0) {
                $(thisForm).find('input[name="id"]').val($(selectedVariantInput).val());
            }

            $(parentBox).siblings('.active').removeClass('active');
            $(parentBox).addClass('active'); 
            
            $(thisForm).find('.variant-label').text(variantLabel);

            var parentRow = $(thisForm).closest('.prod-row');
            var prodImagesWrapper = $(parentRow).find('.prod-image');

            $(prodImagesWrapper).find('.active').removeClass('active');
            $(prodImagesWrapper).find('img.' + variantLabel).addClass('active');

            $(thisForm).find('.prod-price').text(theme.Currency.formatMoney(variantPrice * quantity, theme.moneyFormat));
         });    
    }); 

/* 
 alert('Website Maintenance')
  var password = prompt("Enter in the password");
        if (password=="q1p0w2o9e3i8") {
            
          
        }
        else 
        {

         alert('Password Incorrect Please Come Back Later')
          location.href = "https://www.google.com";
        }
*/
