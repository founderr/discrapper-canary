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
  I = s("621853"),
  g = s("246946"),
  N = s("594174"),
  h = s("626135"),
  C = s("63063"),
  O = s("74538"),
  A = s("18438"),
  p = s("778825"),
  R = s("856607"),
  x = s("594496"),
  M = s("856768"),
  L = s("981631"),
  D = s("689938");

function P() {
  h.default.track(L.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: L.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: L.AnalyticsObjects.BADGE
  }), (0, A.closeGuildIdentitySettings)(), u.default.open(L.UserSettingsSections.PREMIUM)
}

function v(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.e("84509").then(s.bind(s, "933696"));
    return s => (0, a.jsx)(t, {
      source: {
        ...e,
        page: L.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS
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
  }), u = (0, r.useStateFromStores)([I.default], () => !I.default.isFetchingProfile(l.id)), h = (0, r.useStateFromStores)([g.default], () => g.default.hidePersonalInformation), {
    pendingAvatar: b,
    pendingAvatarDecoration: j,
    pendingProfileEffectId: U,
    pendingNickname: G,
    pendingBanner: F,
    pendingBio: B,
    pendingPronouns: y,
    pendingThemeColors: k,
    source: V
  } = (0, r.useStateFromStoresObject)([p.default], () => ({
    ...p.default.getAllPending(),
    source: p.default.getSource()
  }));
  if (n.useEffect(() => () => d.default.wait(A.resetAllPending), []), n.useEffect(() => {
      null != V && E.default.trackWithMetadata(L.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        destination_pane: L.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        source: V
      })
    }, [V]), h) return (0, a.jsx)(c.default, {});
  if (!u) return (0, a.jsx)(o.Spinner, {});
  let H = O.default.canUsePremiumProfileCustomization(l),
    w = {
      user: l,
      guild: t,
      canUsePremiumCustomization: H,
      onAvatarChange: A.setPendingAvatar,
      onBannerChange: A.setPendingBanner,
      onUpsellClick: v,
      pendingAvatar: b,
      pendingAvatarDecoration: j,
      pendingProfileEffectId: U,
      pendingBanner: F,
      pendingBio: B,
      pendingPronouns: y,
      pendingNickname: G,
      activityName: D.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: _.FakeActivityCharacter.PHIBI,
      openPremiumSettings: P
    };
  return (0, a.jsxs)(T.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: D.default.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: C.default.getArticleURL(L.HelpdeskArticles.GUILD_PROFILES)
      })
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, A.setCurrentGuild)(e)
        }
      }), (0, a.jsx)(m.default, {
        previewTitle: D.default.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, a.jsx)(f.default, {
          ...w,
          pendingThemeColors: k
        }),
        children: (0, a.jsx)(x.default, {})
      })]
    }) : (0, a.jsx)(R.default, {})]
  })
}