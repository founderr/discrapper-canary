"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("626135"),
  u = n("981631");

function i(e, t) {
  a.default.track(u.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
    location: t,
    soundpack: e
  })
}