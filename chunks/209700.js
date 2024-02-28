"use strict";
E.r(t), E.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return T
  },
  useGuildMemberModViewExperiment: function() {
    return n
  }
});
var _ = E("812204"),
  s = E("862205");
let a = (0, s.createExperiment)({
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
  T = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: E = !1,
      location: s = _.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: T
    } = a.getCurrentConfig({
      guildId: e,
      location: s
    }, {
      autoTrackExposure: t,
      disable: E
    });
    return T
  },
  n = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: E = !1,
      location: s = _.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: T
    } = a.useExperiment({
      guildId: null != e ? e : void 0,
      location: s
    }, {
      autoTrackExposure: t,
      disable: E
    });
    return T
  }