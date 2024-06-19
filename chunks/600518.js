n.d(t, {
  v: function() {
    return i
  },
  z: function() {
    return s
  }
});
var l = n(570140);

function i(e) {
  l.Z.dispatch({
    type: "STAGE_MUSIC_MUTE",
    muted: e
  })
}

function s(e) {
  l.Z.dispatch({
    type: "STAGE_MUSIC_PLAY",
    play: e
  })
}