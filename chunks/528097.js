"use strict";
n.r(t), n.d(t, {
  daysSinceYouBarFirstSeen: function() {
    return p
  },
  getNavYouBarExperiment: function() {
    return h
  }
}), n("470079"), n("902704");
var i = n("433517"),
  r = n("159626"),
  a = n("893638"),
  l = n("828695"),
  u = n("70956"),
  o = n("278147");
let s = {
    showYouBar: !1,
    showMessagesButton: !1
  },
  d = !1,
  c = s,
  f = (0, r.default)({
    kind: "user",
    id: "2024-02_navi_bar",
    label: "Mobile Redesign - Nav Experiment: You Bar",
    defaultConfig: s,
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

function h(e, t) {
  var n, r;
  let u = !(0, o.isInMainTabsExperiment)(),
    h = !!u || (null == t ? void 0 : t.disable);
  return l.default.hasLoadedExperiments || h ? (0, a.getMergedExperimentConfigs)(f.existingUsers, f.newUsers, e, {
    ...t,
    disable: h,
    autoTrackExposure: !u && (null === (r = null == t ? void 0 : t.autoTrackExposure) || void 0 === r || r)
  }) : (!d && (c = null !== (n = i.Storage.get("--you-bar-experiment-cached-config")) && void 0 !== n ? n : s, d = !0), c)
}

function p() {
  let e = i.Storage.get("--you-bar-experiment-first-seen");
  return null == e ? -1 : Math.floor((Date.now() - e) / u.default.Millis.DAY)
}