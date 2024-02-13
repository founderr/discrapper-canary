"use strict";
e.r(t), e.d(t, {
  playVibingWumpusMusic: function() {
    return i
  },
  stopVibingWumpusMusic: function() {
    return a
  }
});
var n = e("913144");

function i() {
  n.default.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function a() {
  n.default.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}