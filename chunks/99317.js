"use strict";
n.r(t), n.d(t, {
  getNavYouBarExperiment: function() {
    return o
  }
});
var i = n("868493"),
  r = n("133337"),
  s = n("21121");
let a = (0, i.default)({
  kind: "user",
  id: "2024-02_navi_bar",
  label: "Mobile Redesign - Nav Experiment: You Bar",
  defaultConfig: {
    showYouBar: !1,
    showMessagesButton: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      showYouBar: !1,
      showMessagesButton: !1
    }
  }, {
    id: 1,
    label: "You Bar (2c)",
    config: {
      showYouBar: !0,
      showMessagesButton: !1
    }
  }, {
    id: 2,
    label: "You Bar (2c) with messages button",
    config: {
      showYouBar: !0,
      showMessagesButton: !0
    }
  }]
});

function o(e, t) {
  var n;
  let i = !(0, s.isInMainTabsExperiment)();
  return (0, r.getMergedExperimentConfigs)(a.existingUsers, a.newUsers, e, {
    ...t,
    disable: !!i || (null == t ? void 0 : t.disable),
    autoTrackExposure: !i && (null === (n = null == t ? void 0 : t.autoTrackExposure) || void 0 === n || n)
  })
}