"use strict";
n.r(t), n.d(t, {
  deepLinkRouteIfLanded: function() {
    return u
  },
  deepLinkRouteIfLandedAndNotAuthed: function() {
    return o
  }
});
var r = n("536285"),
  i = n("703656"),
  s = n("314897"),
  a = n("358085"),
  l = n("981631");
let u = a.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!(0, i.hasNavigated)()) return r.default.request(l.RPCCommands.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  o = a.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!s.default.isAuthenticated()) return u(e, {
      ...t || {},
      fingerprint: s.default.getFingerprint()
    })
  }