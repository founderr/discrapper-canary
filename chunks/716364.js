"use strict";
s.r(t), s.d(t, {
  setSoundpack: function() {
    return r
  }
});
var a = s("570140"),
  n = s("626135"),
  i = s("474873"),
  l = s("981631");

function r(e) {
  n.default.track(l.AnalyticEvents.SOUNDPACK_UPDATED, {
    soundpack: e,
    previous_soundpack: i.default.getSoundpack()
  }), a.default.dispatch({
    type: "SET_SOUNDPACK",
    soundpack: e
  })
}