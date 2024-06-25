t.d(s, {
  Z: function() {
    return L
  }
});
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(497321),
  d = t(100527),
  _ = t(367907),
  T = t(906732),
  S = t(296810),
  u = t(25373),
  I = t(621853),
  N = t(246946),
  A = t(594174),
  C = t(63063),
  O = t(74538),
  m = t(18438),
  h = t(778825),
  g = t(856607),
  R = t(594496),
  M = t(856768),
  x = t(981631),
  D = t(689938);

function p(e) {
  (0, o.openModalLazy)(async () => {
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

function L(e) {
  let {
    selectedGuild: s
  } = e, {
    analyticsLocations: t
  } = (0, T.ZP)(d.Z.GUILD_PROFILE), a = (0, r.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), L = (0, r.e7)([I.Z], () => !I.Z.isFetchingProfile(a.id)), P = (0, r.e7)([N.Z], () => N.Z.hidePersonalInformation), {
    source: Z,
    ...f
  } = (0, r.cj)([h.Z], () => ({
    ...h.Z.getAllPending(),
    source: h.Z.getSource()
  }));
  return (i.useEffect(() => () => c.Z.wait(m.W3), []), i.useEffect(() => {
    null != Z && _.ZP.trackWithMetadata(x.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: x.jXE.SETTINGS_CUSTOMIZE_PROFILE,
      source: Z
    })
  }, [Z]), P) ? (0, n.jsx)(E.Z, {}) : L ? (0, n.jsxs)(T.Gt, {
    value: t,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: D.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: C.Z.getArticleURL(x.BhN.GUILD_PROFILES)
      })
    }), null != s ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(M.Z, {
        guildId: s.id,
        onChange: e => {
          null != e && (0, m.HP)(e)
        }
      }), (0, n.jsx)(S.Z, {
        previewTitle: D.Z.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == s ? void 0 : s.name
        }),
        profilePreview: (0, n.jsx)(u.Z, {
          user: a,
          guild: s,
          canUsePremiumCustomization: O.ZP.canUsePremiumProfileCustomization(a),
          onUpsellClick: p,
          ...f
        }),
        children: (0, n.jsx)(R.Z, {})
      })]
    }) : (0, n.jsx)(g.Z, {})]
  }) : (0, n.jsx)(o.Spinner, {})
}