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
  f = s("589266"),
  I = s("296810"),
  m = s("621853"),
  N = s("246946"),
  g = s("594174"),
  h = s("626135"),
  C = s("63063"),
  A = s("74538"),
  O = s("18438"),
  p = s("778825"),
  R = s("856607"),
  x = s("594496"),
  M = s("856768"),
  D = s("981631"),
  L = s("689938");

function v() {
  h.default.track(D.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: D.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: D.AnalyticsObjects.BADGE
  }), (0, O.closeGuildIdentitySettings)(), u.default.open(D.UserSettingsSections.PREMIUM)
}

function P(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.e("84509").then(s.bind(s, "933696"));
    return s => (0, a.jsx)(t, {
      source: {
        ...e,
        page: D.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS
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
  } = (0, T.default)(S.default.GUILD_PROFILE), l = (0, r.useStateFromStores)([g.default], () => {
    let e = g.default.getCurrentUser();
    return i()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), u = (0, r.useStateFromStores)([m.default], () => !m.default.isFetchingProfile(l.id)), h = (0, r.useStateFromStores)([N.default], () => N.default.hidePersonalInformation), {
    pendingAvatar: b,
    pendingAvatarDecoration: U,
    pendingProfileEffectId: j,
    pendingNickname: F,
    pendingBanner: G,
    pendingBio: y,
    pendingPronouns: B,
    pendingThemeColors: k,
    source: H
  } = (0, r.useStateFromStoresObject)([p.default], () => ({
    ...p.default.getAllPending(),
    source: p.default.getSource()
  }));
  if (n.useEffect(() => () => d.default.wait(O.resetAllPending), []), n.useEffect(() => {
      null != H && E.default.trackWithMetadata(D.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        destination_pane: D.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        source: H
      })
    }, [H]), h) return (0, a.jsx)(c.default, {});
  if (!u) return (0, a.jsx)(o.Spinner, {});
  let w = A.default.canUsePremiumProfileCustomization(l),
    V = {
      user: l,
      guild: t,
      canUsePremiumCustomization: w,
      onAvatarChange: O.setPendingAvatar,
      onBannerChange: O.setPendingBanner,
      onUpsellClick: P,
      pendingAvatar: b,
      pendingAvatarDecoration: U,
      pendingProfileEffectId: j,
      pendingBanner: G,
      pendingBio: y,
      pendingPronouns: B,
      pendingNickname: F,
      activityName: L.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: _.FakeActivityCharacter.PHIBI,
      openPremiumSettings: v
    };
  return (0, a.jsxs)(T.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: L.default.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: C.default.getArticleURL(D.HelpdeskArticles.GUILD_PROFILES)
      })
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, O.setCurrentGuild)(e)
        }
      }), (0, a.jsx)(I.default, {
        previewTitle: L.default.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, a.jsx)(f.default, {
          ...V,
          location: "GuildIdentitySettingsPage",
          pendingThemeColors: k
        }),
        children: (0, a.jsx)(x.default, {})
      })]
    }) : (0, a.jsx)(R.default, {})]
  })
}