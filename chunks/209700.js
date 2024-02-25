"use strict";
n.r(t), n.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return a
  },
  useGuildMemberModViewExperiment: function() {
    return r
  }
});
var i = n("812204"),
  l = n("862205");
let u = (0, l.createExperiment)({
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
      disable: n = !1,
      location: l = i.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: a
    } = u.getCurrentConfig({
      guildId: e,
      location: l
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return a
  },
  r = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: l = i.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: a
    } = u.useExperiment({
      guildId: null != e ? e : void 0,
      location: l
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return a
  }