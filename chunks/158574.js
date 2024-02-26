"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var a = l("866227"),
  n = l.n(a),
  i = l("851387"),
  u = {
    async setCommunicationDisabledDuration(e, t, l, a, u) {
      let d = null != l ? n().add(l, "s").toISOString() : null;
      await i.default.setCommunicationDisabledUntil({
        guildId: e,
        userId: t,
        communicationDisabledUntilTimestamp: d,
        duration: l,
        reason: a,
        location: u
      })
    }
  }