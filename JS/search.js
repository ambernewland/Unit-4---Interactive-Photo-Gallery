
//** key the search bar **//
$(".gallery-search").keyup(function() {

    //** variable for the search value **//
    var $search = $(this).val();

    //** loop each image.. **//
    $(".gallery-item").each(function() {
       
        //** get alt text **//
        var $altText = $(this).find("img").attr("alt");
        
        //** if search value matches alt show image(s) **//
        if($altText.toLowerCase().search($search.toLowerCase()) > -1) {
          
            //** show images matching **//
            $(this).show();
            //** fade out if image does not match **//
        } else {
            $(this).fadeOut(300);
        }
    });
});