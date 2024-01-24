"use strict";
n.r(t), n.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return s
  },
  useGuildMemberModViewExperiment: function() {
    return o
  }
});
var l = n("812204"),
  i = n("862205");
let r = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-08_guild_member_mod_view",
    label: "Guild Member Mod View",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Guild Member Mod View",
      config: {
        enabled: !0
      }
    }]
  }),
  s = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: i = l.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: s
    } = r.getCurrentConfig({
      guildId: e,
      location: i
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return s
  },
  o = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: i = l.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: s
    } = r.useExperiment({
      guildId: e,
      location: i
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return s
  }