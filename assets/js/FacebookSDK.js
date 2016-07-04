/* global FB */
/* global window */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-var*/
/* eslint-disable one-var*/
window.fbAsyncInit = function() {
  FB.init({
      appId      : '1059943614082627',
      xfbml      : true,
      version    : 'v2.6'
  })
  FB.Event.subscribe(
    "ad.loaded",
    function(placementId) {
      console.log("Audience Network ad loaded")
      document.getElementById("ad_root").style.display = "block"
    }
  )
  FB.Event.subscribe(
    "ad.error",
    function(errorCode, errorMessage, placementId) {
      console.log("Audience Network error (" + errorCode + ") " + errorMessage)
    }
  )
};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.6&appId=1059943614082627"
  fjs.parentNode.insertBefore(js, fjs)
}(document, "script", "facebook-jssdk"))
