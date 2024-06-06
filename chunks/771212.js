"use strict";
a.r(t), a.d(t, {
  staffOnlyGuildSettingsAccess: function() {
    return u
  },
  useGuildAccessRateInsightExperiment: function() {
    return r
  }
});
var l = a("470079"),
  n = a("818083"),
  i = a("594174"),
  s = a("981631");
let d = (0, n.createExperiment)({
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
  return (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && d.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return l.useEffect(() => {
    !t && null != e && d.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, t]), d.useExperiment({
    guildId: null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: t || null == e
  })
}