"use strict";
n.r(t), n.d(t, {
  staffOnlyGuildSettingsAccess: function() {
    return o
  },
  useGuildAccessRateInsightExperiment: function() {
    return d
  }
});
var a = n("470079"),
  l = n("818083"),
  s = n("594174"),
  i = n("981631");
let r = (0, l.createExperiment)({
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

function o(e) {
  var t;
  return (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && r.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return a.useEffect(() => {
    !t && null != e && r.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, t]), r.useExperiment({
    guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: t || null == e
  })
}