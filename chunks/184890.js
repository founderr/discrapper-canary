"use strict";
s.r(t), s.d(t, {
  useGuildAuditLogV2Enabled: function() {
    return i
  }
});
var a = s("862205");
let l = (0, a.createExperiment)({
    kind: "user",
    id: "2022-02_guild_audit_log_user",
    label: "Guild Audit Log - User Feature Flag",
    defaultConfig: {
      enableForUser: !1
    },
    treatments: [{
      id: 1,
      label: "Show Guild Audit Log 2.0 for user",
      config: {
        enableForUser: !0
      }
    }]
  }),
  n = (0, a.createExperiment)({
    kind: "guild",
    id: "2022-02_guild_audit_log_guild",
    label: "Guild Audit Log - Guild Feature Flag",
    defaultConfig: {
      enableForGuild: !1
    },
    treatments: [{
      id: 1,
      label: "Show Guild Audit Log 2.0 for guild",
      config: {
        enableForGuild: !0
      }
    }]
  });

function i(e) {
  let {
    enableForGuild: t
  } = n.useExperiment({
    guildId: null != e ? e : "",
    location: "da2d90_1"
  }), {
    enableForUser: s
  } = l.useExperiment({
    location: "da2d90_2"
  }, {
    autoTrackExposure: !1
  });
  return s && t
}