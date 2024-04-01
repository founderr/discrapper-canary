"use strict";
s.r(t), s.d(t, {
  deepLinkRouteIfLanded: function() {
    return o
  },
  deepLinkRouteIfLandedAndNotAuthed: function() {
    return u
  }
});
var a = s("536285"),
  i = s("703656"),
  r = s("314897"),
  n = s("358085"),
  l = s("981631");
let o = n.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!(0, i.hasNavigated)()) return a.default.request(l.RPCCommands.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  u = n.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!r.default.isAuthenticated()) return o(e, {
      ...t || {},
      fingerprint: r.default.getFingerprint()
    })
  }