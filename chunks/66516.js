t.d(s, {
  Z: function() {
    return f
  }
});
var n = t(735250),
  a = t(470079),
  i = t(512722),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(570140),
  d = t(497321),
  _ = t(100527),
  E = t(367907),
  u = t(906732),
  T = t(296810),
  S = t(921813),
  I = t(621853),
  N = t(246946),
  C = t(594174),
  A = t(63063),
  m = t(74538),
  O = t(18438),
  g = t(778825),
  h = t(856607),
  R = t(594496),
  p = t(856768),
  x = t(981631),
  M = t(689938);

function D(e) {
  (0, l.openModalLazy)(async () => {
    let {
      default: s
    } = await t.e("84509").then(t.bind(t, 933696));
    return t => (0, n.jsx)(s, {
      source: {
        ...e,
        page: x.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
      },
      ...t
    })
  })
}

function f(e) {
  let {
    selectedGuild: s
  } = e, {
    analyticsLocations: t
  } = (0, u.ZP)(_.Z.GUILD_PROFILE), i = (0, o.e7)([C.default], () => {
    let e = C.default.getCurrentUser();
    return r()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), f = (0, o.e7)([I.Z], () => !I.Z.isFetchingProfile(i.id)), L = (0, o.e7)([N.Z], () => N.Z.hidePersonalInformation), {
    source: P,
    ...Z
  } = (0, o.cj)([g.Z], () => ({
    ...g.Z.getAllPending(),
    source: g.Z.getSource()
  }));
  return (a.useEffect(() => () => c.Z.wait(O.W3), []), a.useEffect(() => {
    null != P && E.ZP.trackWithMetadata(x.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: x.jXE.SETTINGS_CUSTOMIZE_PROFILE,
      source: P
    })
  }, [P]), L) ? (0, n.jsx)(d.Z, {}) : f ? (0, n.jsxs)(u.Gt, {
    value: t,
    children: [(0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: M.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: A.Z.getArticleURL(x.BhN.GUILD_PROFILES)
      })
    }), null != s ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(p.Z, {
        guildId: s.id,
        onChange: e => {
          null != e && (0, O.HP)(e)
        }
      }), (0, n.jsx)(T.Z, {
        previewTitle: M.Z.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == s ? void 0 : s.name
        }),
        profilePreview: (0, n.jsx)(S.Z, {
          user: i,
          guild: s,
          canUsePremiumCustomization: m.ZP.canUsePremiumProfileCustomization(i),
          onUpsellClick: D,
          ...Z
        }),
        children: (0, n.jsx)(R.Z, {})
      })]
    }) : (0, n.jsx)(h.Z, {})]
  }) : (0, n.jsx)(l.Spinner, {})
}