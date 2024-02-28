"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return i
  }
});
var a = n("884691"),
  u = n("446674"),
  r = n("764828"),
  s = n("13427");

function i(e, t, n) {
  let i = (0, u.useStateFromStores)([r.default], () => r.default.getChannelSafetyWarnings(e), [e]),
    l = i.filter(e => e.type === t);
  return a.useEffect(() => {
    t === r.SafetyWarningTypes.STRANGER_DANGER && l.length > 0 && s.StrangerDangerTeensExperiment.trackExposure({
      location: n
    })
  }, [t, l.length, n]), l.find(e => null == e.dismiss_timestamp)
}