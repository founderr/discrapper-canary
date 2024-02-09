"use strict";
n.r(t), n.d(t, {
  useEligibleForGameRecommendations: function() {
    return o
  }
});
var l = n("446674"),
  a = n("350522");
n("926787");
var s = n("305961"),
  i = n("568307");
n("599110"), n("444497");
var r = n("895042"),
  u = n("49111");

function o() {
  let e = (0, l.useStateFromStores)([s.default], () => s.default.getGuildCount()),
    t = (0, l.useStateFromStores)([i.default], () => i.default.getGamesSeen(!1).filter(e => (0, i.gameInDatabase)(e)).length, []),
    n = (0, l.useStateFromStores)([a.default], () => a.default.hasConsented(u.Consents.PERSONALIZATION)),
    {
      showRecs: o
    } = r.default.useExperiment({
      location: "e7214b_1"
    }, {
      autoTrackExposure: !1
    });
  return n && o && e < 4 && t >= 2
}
n("447621")