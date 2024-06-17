"use strict";
n.r(t), n.d(t, {
  useIsUserSecureFramesVerified: function() {
    return i
  }
});
var r = n("470079"),
  s = n("442837"),
  a = n("470956"),
  u = n("592125"),
  l = n("979651"),
  o = n("436592");

function i(e, t) {
  var n, i;
  let c = function(e) {
    let t = (0, s.useStateFromStores)([l.default], () => l.default.getVoiceStatesForChannel(e)),
      n = r.useMemo(() => Object.keys(t), [t]);
    return (0, a.useEnsureSyncedUserIds)(e, n)
  }(t);
  return function(e) {
    let t = (0, o.useIsSecureFramesUIEnabled)(e),
      n = (0, s.useStateFromStores)([u.default], () => {
        var t;
        return (null === (t = u.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice()) === !0
      });
    return t && !n
  }(t) && c.has(e) && (n = 0, i = 0, !1)
}