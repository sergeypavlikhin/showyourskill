 function FrontBackSlider() {

     var CONTAINER = ".background";
     var BACK_IMAGE = ".back";
     var FRONT_IMAGE = ".front";
     var SHELL_CLASSNAME = "shell";
     var SHELL = "." + SHELL_CLASSNAME;

     var mWidth = 0;
     var mHeight = 0;

     this.init = function () {
//        loadImages();
        addShell();
        setHandlers();
        resizeHandler();
     };

     function loadImages(callback){
         var img = new Image();
         img.src = '../imgs/back.jpg'
         img.onload = () => {
             callback();
         };
     }
     
     function setHandlers() {
         $(window).resize(() => {
             resizeHandler();
         });

         $(document).on('mousemove', (event) => {
             mousemoveHandler(event);       
         });
     }

     function addShell() {
         var shell = document.createElement('DIV');
         $(shell).addClass(SHELL_CLASSNAME);
         $(FRONT_IMAGE).append(shell);
     }

     function mousemoveHandler(event) {
         event = event || window.event;
         var pageX = event.originalEvent.pageX;
         var middleVertical = mWidth / 2;
         var diffBack = -(pageX - middleVertical) / 19;
         $(BACK_IMAGE).css("background-position", diffBack - 50 + "px");
         $(FRONT_IMAGE).css("background-position", diffBack - 50 + "px");
     };

     function resizeHandler() {
         var width = $('body').width();
         var height = $('body').height();

         var correct = 50;

         mWidth = width;
         mHeight = height;

         $(CONTAINER).css('height', mHeight);

         $(BACK_IMAGE).css('background-size', 'auto ' + height + 'px ');
         $(FRONT_IMAGE).css('background-size', 'auto ' + height + 'px ')
     }
     

 }