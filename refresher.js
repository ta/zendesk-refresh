$(document).ready(function() {

  if (window.top === window) {

    var zendeskRefreshTimerId = window.setInterval(zendeskRefreshTimerMethod, 60 * 1000);

    function zendeskRefreshTimerMethod() {
      $('.icon-refresh').parent().click();
      console.log("Zendesk Refresh: Refresh triggered");
    }

    function zendeskRefreshTimerToggle() {
      if (!document.hidden) {
        console.log("Zendesk Refresh: Document changed state to visible - start refresh timer");
        zendeskRefreshTimerId = window.setInterval(zendeskRefreshTimerMethod, 60 * 1000);
        zendeskRefreshTimerMethod();
      } else {
        console.log("Zendesk Refresh: Document changed state to hidden - stop refresh timer");
        window.clearInterval(zendeskRefreshTimerId);
      }
    }

    if(document.addEventListener) document.addEventListener("visibilitychange", zendeskRefreshTimerToggle);

  }

});
