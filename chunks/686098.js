"use strict";
n.r(t), n.d(t, {
  useIsEligibleForQuests: function() {
    return r
  },
  useHandleClaimQuestsReward: function() {
    return o
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("374023");

function r(e) {
  return l.default.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}

function o(e) {
  return s.useCallback(() => {
    (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("36170").then(n.bind(n, "36170"));
      return n => (0, a.jsx)(t, {
        ...n,
        quest: e
      })
    })
  }, [e])
}