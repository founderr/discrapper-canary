"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}(r("215039"));
t.default = function(e) {
  return new Promise(function(t) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      t(window.YT);
      return
    }
    var r = "http:" === window.location.protocol ? "http:" : "https:";
    (0, n.default)(r + "//www.youtube.com/iframe_api", function(t) {
      t && e.trigger("error", t)
    });
    var o = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function() {
      o && o(), t(window.YT)
    }
  })
}, e.exports = t.default