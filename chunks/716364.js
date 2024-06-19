t.d(s, {
  c: function() {
    return r
  }
});
var n = t(570140),
  i = t(626135),
  a = t(474873),
  l = t(981631);

function r(e) {
  i.default.track(l.rMx.SOUNDPACK_UPDATED, {
    soundpack: e,
    previous_soundpack: a.Z.getSoundpack()
  }), n.Z.dispatch({
    type: "SET_SOUNDPACK",
    soundpack: e
  })
}