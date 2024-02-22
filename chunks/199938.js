"use strict";
n.r(t), n.d(t, {
  staffOnlyGuildSettingsAccess: function() {
    return u
  },
  useGuildAccessRateInsightExperiment: function() {
    return o
  }
});
var i = n("884691"),
  r = n("862205"),
  s = n("697218"),
  l = n("49111");
let a = (0, r.createExperiment)({
  kind: "guild",
  id: "2022-03_guild_access_rate_insight_experiment",
  label: "Guild Access Rate Insight Experiment",
  defaultConfig: {
    showAccessRate: !1
  },
  treatments: [{
    id: 1,
    label: "Show guild access rate in insights",
    config: {
      showAccessRate: !0
    }
  }]
});

function u(e) {
  var t;
  let n = null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
  return n && a.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return i.useEffect(() => {
    !t && null != e && a.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, t]), a.useExperiment({
    guildId: null != e ? e : l.EMPTY_STRING_GUILD_ID,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: t || null == e
  })
}