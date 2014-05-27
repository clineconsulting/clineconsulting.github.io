/*
 Image Adjust
*/

(function($) {
  
  // ================================================================
  // Bivee Cline behaviors
  // ================================================================

  var cline = { // namespace setup

    setFluidTileImage : function(el) {
      el.each(function() {
        var $el = $(this);
        var $img = $el.find("img");
        var src = $img.attr("src");
        $el.css("background-image", "url('" + src + "')");
        $img.css("display", "none");
        console.log("src: " + src);
      });
      
    }
    
  };

  $(window).load(function() {
    // cline.init();
    cline.setFluidTileImage($(".center_image"));
  });

})(jQuery);