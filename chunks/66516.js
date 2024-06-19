t.d(s, {
  Z: function() {
    return v
  }
});
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(230711),
  d = t(497321),
  _ = t(100527),
  T = t(367907),
  S = t(906732),
  u = t(414666),
  I = t(589266),
  N = t(296810),
  A = t(621853),
  C = t(246946),
  O = t(594174),
  m = t(626135),
  h = t(63063),
  g = t(74538),
  R = t(18438),
  M = t(778825),
  x = t(856607),
  D = t(594496),
  p = t(856768),
  L = t(981631),
  P = t(689938);

function Z() {
  m.default.track(L.rMx.PREMIUM_PROMOTION_OPENED, {
    location_page: L.ZY5.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: L.qAy.BADGE
  }), (0, R.jR)(), E.Z.open(L.oAB.PREMIUM)
}

function f(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: s
    } = await t.e("84509").then(t.bind(t, 933696));
    return t => (0, n.jsx)(s, {
      source: {
        ...e,
        page: L.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
      },
      ...t
    })
  })
}

function v(e) {
  let {
    selectedGuild: s
  } = e, {
    analyticsLocations: t
  } = (0, S.ZP)(_.Z.GUILD_PROFILE), a = (0, r.e7)([O.default], () => {
    let e = O.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), E = (0, r.e7)([A.Z], () => !A.Z.isFetchingProfile(a.id)), m = (0, r.e7)([C.Z], () => C.Z.hidePersonalInformation), {
    pendingAvatar: v,
    pendingAvatarDecoration: j,
    pendingProfileEffectId: U,
    pendingNickname: B,
    pendingBanner: b,
    pendingBio: G,
    pendingPronouns: F,
    pendingThemeColors: V,
    source: y
  } = (0, r.cj)([M.Z], () => ({
    ...M.Z.getAllPending(),
    source: M.Z.getSource()
  }));
  if (i.useEffect(() => () => c.Z.wait(R.W3), []), i.useEffect(() => {
      null != y && T.ZP.trackWithMetadata(L.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        destination_pane: L.jXE.SETTINGS_CUSTOMIZE_PROFILE,
        source: y
      })
    }, [y]), m) return (0, n.jsx)(d.Z, {});
  if (!E) return (0, n.jsx)(o.Spinner, {});
  let Y = g.ZP.canUsePremiumProfileCustomization(a),
    H = {
      user: a,
      guild: s,
      canUsePremiumCustomization: Y,
      onAvatarChange: R.I5,
      onBannerChange: R.g_,
      onUpsellClick: f,
      pendingAvatar: v,
      pendingAvatarDecoration: j,
      pendingProfileEffectId: U,
      pendingBanner: b,
      pendingBio: G,
      pendingPronouns: F,
      pendingNickname: B,
      activityName: P.Z.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: u.m.PHIBI,
      openPremiumSettings: Z
    };
  return (0, n.jsxs)(S.Gt, {
    value: t,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: P.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: h.Z.getArticleURL(L.BhN.GUILD_PROFILES)
      })
    }), null != s ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(p.Z, {
        guildId: s.id,
        onChange: e => {
          null != e && (0, R.HP)(e)
        }
      }), (0, n.jsx)(N.Z, {
        previewTitle: P.Z.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == s ? void 0 : s.name
        }),
        profilePreview: (0, n.jsx)(I.Z, {
          ...H,
          location: "GuildIdentitySettingsPage",
          pendingThemeColors: V
        }),
        children: (0, n.jsx)(D.Z, {})
      })]
    }) : (0, n.jsx)(x.Z, {})]
  })
}