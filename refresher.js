//Injected function
if (window.top === window) {
  function timerMethod() {
    $('.icon-refresh').parent().click();
    console.log("Zendesk Refresh Triggered");
  }
  //Refresh every 60 seconds
  var timerId = setInterval(timerMethod, 60 * 1000);
}
