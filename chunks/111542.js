"use strict";
n.r(t), n.d(t, {
  updateStageMusicMuted: function() {
    return a
  },
  updateStageMusicShouldPlay: function() {
    return s
  }
});
var l = n("913144");

function a(e) {
  l.default.dispatch({
    type: "STAGE_MUSIC_MUTE",
    muted: e
  })
}

function s(e) {
  l.default.dispatch({
    type: "STAGE_MUSIC_PLAY",
    play: e
  })
}