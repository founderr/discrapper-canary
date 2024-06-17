"use strict";
n.r(e), n.d(e, {
  useIsSecureFramesUIEnabled: function() {
    return u
  }
});
var i = n("442837"),
  a = n("19780"),
  r = n("229502");

function u(t) {
  let {
    enabled: e
  } = r.SecureFramesUIExperiment.useExperiment({
    location: "useIsSecureFramesUIEnabled"
  }), n = (0, i.useStateFromStores)([a.default], () => {
    var e;
    if (a.default.getChannelId() !== t) return !1;
    let n = null === (e = a.default.getSecureFramesState()) || void 0 === e ? void 0 : e.version;
    return null != n && n > 100
  });
  return e && n
}