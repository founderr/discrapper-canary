"use strict";
s.r(t), s.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return a
  },
  useGuildMemberModViewExperiment: function() {
    return n
  }
});
var E = s("100527");
let _ = (0, s("818083").createExperiment)({
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
  a = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: s = !1,
      location: a = E.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: n
    } = _.getCurrentConfig({
      guildId: e,
      location: a
    }, {
      autoTrackExposure: t,
      disable: s
    });
    return n
  },
  n = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: s = !1,
      location: a = E.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: n
    } = _.useExperiment({
      guildId: null != e ? e : void 0,
      location: a
    }, {
      autoTrackExposure: t,
      disable: s
    });
    return n
  }