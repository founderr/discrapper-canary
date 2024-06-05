"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
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
  I = s("589266"),
  N = s("296810"),
  f = s("621853"),
  g = s("246946"),
  m = s("594174"),
  C = s("626135"),
  A = s("63063"),
  h = s("74538"),
  O = s("18438"),
  p = s("778825"),
  R = s("856607"),
  x = s("594496"),
  M = s("856768"),
  D = s("981631"),
  L = s("689938");

function P() {
  C.default.track(D.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: D.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: D.AnalyticsObjects.BADGE
  }), (0, O.closeGuildIdentitySettings)(), u.default.open(D.UserSettingsSections.PREMIUM)
}

function b(e) {
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

function v(e) {
  let {
    selectedGuild: t
  } = e, {
    analyticsLocations: s
  } = (0, T.default)(S.default.GUILD_PROFILE), l = (0, r.useStateFromStores)([m.default], () => {
    let e = m.default.getCurrentUser();
    return i()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), u = (0, r.useStateFromStores)([f.default], () => !f.default.isFetchingProfile(l.id)), C = (0, r.useStateFromStores)([g.default], () => g.default.hidePersonalInformation), {
    pendingAvatar: v,
    pendingAvatarDecoration: U,
    pendingProfileEffectId: j,
    pendingNickname: G,
    pendingBanner: F,
    pendingBio: B,
    pendingPronouns: y,
    pendingThemeColors: V,
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
    }, [H]), C) return (0, a.jsx)(c.default, {});
  if (!u) return (0, a.jsx)(o.Spinner, {});
  let k = h.default.canUsePremiumProfileCustomization(l),
    Y = {
      user: l,
      guild: t,
      canUsePremiumCustomization: k,
      onAvatarChange: O.setPendingAvatar,
      onBannerChange: O.setPendingBanner,
      onUpsellClick: b,
      pendingAvatar: v,
      pendingAvatarDecoration: U,
      pendingProfileEffectId: j,
      pendingBanner: F,
      pendingBio: B,
      pendingPronouns: y,
      pendingNickname: G,
      activityName: L.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: _.FakeActivityCharacter.PHIBI,
      openPremiumSettings: P
    };
  return (0, a.jsxs)(T.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: L.default.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: A.default.getArticleURL(D.HelpdeskArticles.GUILD_PROFILES)
      })
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, O.setCurrentGuild)(e)
        }
      }), (0, a.jsx)(N.default, {
        previewTitle: L.default.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, a.jsx)(I.default, {
          ...Y,
          location: "GuildIdentitySettingsPage",
          pendingThemeColors: V
        }),
        children: (0, a.jsx)(x.default, {})
      })]
    }) : (0, a.jsx)(R.default, {})]
  })
}