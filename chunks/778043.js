"use strict";
s.r(t), s.d(t, {
  deepLinkRouteIfLanded: function() {
    return o
  },
  deepLinkRouteIfLandedAndNotAuthed: function() {
    return u
  }
});
var a = s("43982"),
  i = s("393414"),
  n = s("271938"),
  r = s("773336"),
  l = s("49111");
let o = r.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!(0, i.hasNavigated)()) return a.default.request(l.RPCCommands.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  u = r.isPlatformEmbedded ? l.NOOP : (e, t) => {
    if (!n.default.isAuthenticated()) return o(e, {
      ...t || {},
      fingerprint: n.default.getFingerprint()
    })
  }