$(function() {
  var scroller = $("#scroller div.innerScrollArea");
  var scrollerContent = scroller.children("ol");
  //Зургуудыг дахин харуулах

  scrollerContent
    .children()
    .clone()
    .appendTo(scrollerContent);
  //Зургуудыг x тэнхлэгийн дагуу цувуулан байрлуулах

  var curX = 0;
  scrollerContent.children().each(function() {
    var $this = $(this);
    $this.css("left", curX);
    curX += $this.outerWidth(true);
    console.log(curX);
  });
  var fullW = curX / 2;
  var viewportW = scroller.width();
  //Автоматаар гүйлгэх
  scroller.css("overflow-x", "auto");
  var controller = {
    curSpeed: 0,
    fullSpeed: 2
  };
  var $controller = $(controller);
  var tweenToNewSpeed = function(newSpeed, duration) {
    if (duration === undefined) duration = 600;
    $controller.stop(true).animate(
      {
        curSpeed: newSpeed
      },
      duration
    );
  };

  // Pause on hover
  scroller.hover(
    function() {
      tweenToNewSpeed(0);
    },
    function() {
      tweenToNewSpeed(controller.fullSpeed);
    }
  );

  // Scrolling management; start the automatical scrolling
  var doScroll = function() {
    var curX = scroller.scrollLeft();
    var newX = curX + controller.curSpeed;
    if (newX > fullW * 2 - viewportW) newX -= fullW;
    scroller.scrollLeft(newX);
  };
  setInterval(doScroll, 20);
  tweenToNewSpeed(controller.fullSpeed);
});
