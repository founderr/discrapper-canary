"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("230711"),
  c = s("497321"),
  S = s("100527"),
  E = s("367907"),
  T = s("906732"),
  _ = s("414666"),
  f = s("962746"),
  m = s("296810"),
  g = s("621853"),
  I = s("246946"),
  N = s("594174"),
  h = s("626135"),
  C = s("63063"),
  A = s("74538"),
  p = s("18438"),
  O = s("778825"),
  R = s("856607"),
  x = s("594496"),
  M = s("856768"),
  v = s("981631"),
  L = s("689938");

function D() {
  h.default.track(v.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: v.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: v.AnalyticsObjects.BADGE
  }), (0, p.closeGuildIdentitySettings)(), u.default.open(v.UserSettingsSections.PREMIUM)
}

function P(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.e("84509").then(s.bind(s, "933696"));
    return s => (0, a.jsx)(t, {
      source: {
        ...e,
        page: v.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS
      },
      ...s
    })
  })
}

function b(e) {
  let {
    selectedGuild: t
  } = e, {
    analyticsLocations: s
  } = (0, T.default)(S.default.GUILD_PROFILE), l = (0, r.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return i()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), u = (0, r.useStateFromStores)([g.default], () => !g.default.isFetchingProfile(l.id)), h = (0, r.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), {
    pendingAvatar: b,
    pendingAvatarDecoration: j,
    pendingProfileEffectId: U,
    pendingNickname: y,
    pendingBanner: G,
    pendingBio: F,
    pendingPronouns: B,
    pendingThemeColors: k,
    source: w
  } = (0, r.useStateFromStoresObject)([O.default], () => ({
    ...O.default.getAllPending(),
    source: O.default.getSource()
  }));
  if (n.useEffect(() => () => d.default.wait(p.resetAllPending), []), n.useEffect(() => {
      null != w && E.default.trackWithMetadata(v.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        destination_pane: v.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        source: w
      })
    }, [w]), h) return (0, a.jsx)(c.default, {});
  if (!u) return (0, a.jsx)(o.Spinner, {});
  let H = A.default.canUsePremiumProfileCustomization(l),
    Y = {
      user: l,
      guild: t,
      canUsePremiumCustomization: H,
      onAvatarChange: p.setPendingAvatar,
      onBannerChange: p.setPendingBanner,
      onUpsellClick: P,
      pendingAvatar: b,
      pendingAvatarDecoration: j,
      pendingProfileEffectId: U,
      pendingBanner: G,
      pendingBio: F,
      pendingPronouns: B,
      pendingNickname: y,
      activityName: L.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: _.FakeActivityCharacter.PHIBI,
      openPremiumSettings: D
    };
  return (0, a.jsxs)(T.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: L.default.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: C.default.getArticleURL(v.HelpdeskArticles.GUILD_PROFILES)
      })
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, p.setCurrentGuild)(e)
        }
      }), (0, a.jsx)(m.default, {
        previewTitle: L.default.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, a.jsx)(f.default, {
          ...Y,
          pendingThemeColors: k
        }),
        children: (0, a.jsx)(x.default, {})
      })]
    }) : (0, a.jsx)(R.default, {})]
  })
}