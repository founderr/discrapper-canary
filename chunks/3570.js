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
  a = n("314897"),
  s = n("358085"),
  l = n("981631");
let u = s.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!(0, i.hasNavigated)()) return r.default.request(l.RPCCommands.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  o = s.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!a.default.isAuthenticated()) return u(e, {
      ...t || {},
      fingerprint: a.default.getFingerprint()
    })
  }