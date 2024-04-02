"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}(r("270905"));
t.default = {
  pauseVideo: {
    acceptableStates: [n.default.ENDED, n.default.PAUSED],
    stateChangeRequired: !1
  },
  playVideo: {
    acceptableStates: [n.default.ENDED, n.default.PLAYING],
    stateChangeRequired: !1
  },
  seekTo: {
    acceptableStates: [n.default.ENDED, n.default.PLAYING, n.default.PAUSED],
    stateChangeRequired: !0,
    timeout: 3e3
  }
}, e.exports = t.default