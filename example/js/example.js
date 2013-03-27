$(document).ready(function() {
  //**** OPTIONAL ****
    // Example of a custom ajax insert function
    (function($) {
      $.fn.fadeInsert = function(options) {
        console.log(options);
        //the option is an array : {html:the ajax html, scripts: the scripts that already are in the html, customData:any data you associated to this state during navigate} 
        var that = $(this);
        that.fadeOut(300, function(){
          that.html(options.html);
          that.fadeIn(300, function(){
            that.trigger({type:"finishrefreshinsert"});
          });
        });
        return this;
      };
    })(jQuery); 

    //show you the events of navigate
    $("html")
    .on('donerefresh', "body", function(){
      $("#info").html(document.location.href+" loaded");
    })
    .on('startrefresh', "body", function(){
      $("#info").html('loading....');
    })
    .on('failrefresh', "body", function(){
      $("#info").html('Error loading....');
    });
  //**** /OPTIONAL ****
  
  //THIS IS THE ONLY NEEDED LINE
  //Just init navigate and any link without target="_blank" will become an ajax link
  $.navigate.init();
});  