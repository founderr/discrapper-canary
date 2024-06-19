t.d(i, {
  K: function() {
    return I
  }
}), t(47120);
var s = t(470079),
  n = t(442837),
  l = t(172337),
  a = t(101492),
  u = t(710091),
  d = t(496675),
  r = t(689938);
let o = {
    "server-subscriptions-onboarding": u.Z,
    "server-subscriptions-finish-setting-up": a.Z,
    "server-subscriptions-create-tier-from-template": l.Z
  },
  c = {
    title: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_TITLE,
    description: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_DESCRIPTION,
    selectGuildCta: () => r.Z.Messages.GET_STARTED,
    createGuildDescription: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_CREATE_DESCRIPTION,
    createGuildCta: () => r.Z.Messages.CREATE_SERVER_BUTTON_CTA,
    canCreateGuild: !0,
    useIsGuildSupported: () => (0, n.e7)([d.Z], () => e => d.Z.canAccessGuildSettings(e), [], n.pF)
  };

function I(e) {
  var i;
  let [t] = s.useState(null == e ? void 0 : o[e]), n = c.useIsGuildSupported(), l = null == t ? void 0 : null === (i = t.useIsGuildSupported) || void 0 === i ? void 0 : i.call(t), a = {
    ...c,
    ...null != t ? t : {}
  };
  return {
    title: a.title(),
    description: a.description(),
    selectGuildCta: a.selectGuildCta(),
    createGuildDescription: a.createGuildDescription(),
    createGuildCta: a.createGuildCta(),
    canCreateGuild: a.canCreateGuild,
    isGuildSupported: (e, i) => n(e, i) && (null == l ? void 0 : l(e, i)) !== !1
  }
}