"use strict";
a.r(t), a.d(t, {
  useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
    return u
  },
  useIsMassMentionsDefaultDisabledExperiment: function() {
    return o
  }
});
var n = a("442837"),
  s = a("818083"),
  l = a("496675"),
  i = a("981631");
let r = (0, s.createExperiment)({
  kind: "guild",
  id: "2022-11_default_disable_mass_mention",
  label: "Disable mass mentions for communities by default",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  return r.useExperiment({
    guildId: e,
    location: "dd4beb_1"
  }, {
    autoTrackExposure: !0
  })
}

function u(e) {
  var t;
  let a = (0, n.useStateFromStores)([l.default], () => l.default.can(i.Permissions.MANAGE_GUILD, e)),
    {
      enabled: s
    } = r.useExperiment({
      guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : i.EMPTY_STRING_SNOWFLAKE_ID,
      location: "dd4beb_3"
    }, {
      autoTrackExposure: !0
    });
  if (null == e) return !1;
  let o = e.hasFeature(i.GuildFeatures.COMMUNITY);
  return a && o && s
}