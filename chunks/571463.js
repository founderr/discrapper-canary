"use strict";
n.r(t), n.d(t, {
  useIsUserSecureFramesVerified: function() {
    return i
  }
});
var s = n("470079"),
  r = n("442837"),
  l = n("470956"),
  a = n("592125"),
  o = n("979651"),
  u = n("436592");

function i(e, t) {
  var n, i;
  let c = function(e) {
    let t = (0, r.useStateFromStores)([o.default], () => o.default.getVoiceStatesForChannel(e)),
      n = s.useMemo(() => Object.keys(t), [t]);
    return (0, l.useEnsureSyncedUserIds)(e, n)
  }(t);
  return function(e) {
    let t = (0, u.useIsSecureFramesUIEnabled)(e),
      n = (0, r.useStateFromStores)([a.default], () => {
        var t;
        return (null === (t = a.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice()) === !0
      });
    return t && !n
  }(t) && c.has(e) && (n = 0, i = 0, !1)
}