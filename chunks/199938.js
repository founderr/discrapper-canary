"use strict";
n.r(t), n.d(t, {
  staffOnlyGuildSettingsAccess: function() {
    return l
  },
  useGuildAccessRateInsightExperiment: function() {
    return o
  }
});
var i = n("884691"),
  r = n("862205"),
  u = n("697218"),
  a = n("49111");
let s = (0, r.createExperiment)({
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

function l(e) {
  var t;
  let n = null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
  return n && s.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return i.useEffect(() => {
    !t && null != e && s.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, t]), s.useExperiment({
    guildId: null != e ? e : a.EMPTY_STRING_GUILD_ID,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: t || null == e
  })
}