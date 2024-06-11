"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
  r = s("503089"),
  o = s("906732"),
  d = s("254901"),
  u = s("18438"),
  c = s("778825"),
  S = s("66516"),
  E = s("484459"),
  T = s("216045"),
  _ = s("839469"),
  I = s("25990"),
  N = s("594174"),
  g = s("585483"),
  f = s("16703"),
  m = s("785145"),
  A = s("981631"),
  C = s("526761"),
  O = s("726985"),
  h = s("689938"),
  R = s("347620");

function p() {
  d.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, i.useStateFromStores)([c.default], () => c.default.getGuild()),
    t = (0, f.default)(),
    s = (0, i.useStateFromStores)([c.default, I.default], () => c.default.showNotice() || I.default.showNotice()),
    p = null != e ? e : t,
    M = (0, i.useStateFromStores)([N.default], () => N.default.getCurrentUser()),
    {
      subsection: D,
      setSubsection: x
    } = (0, m.default)(),
    {
      analyticsLocations: L
    } = (0, o.default)(),
    {
      hasSearchResults: P,
      searchResults: b
    } = (0, _.useSettingSearchResults)();

  function v(t) {
    if (D !== t) {
      if (s) {
        g.ComponentDispatch.dispatch(A.ComponentActions.SHAKE_APP, {
          duration: 300,
          intensity: r.SHAKE_INTENSITY_DEFAULT
        }), g.ComponentDispatch.dispatch(A.ComponentActions.EMPHASIZE_NOTICE);
        return
      }
      t === C.ProfileCustomizationSubsection.GUILD && null == e && null != p && (0, u.initGuildIdentitySettings)(p, L), x(t)
    }
  }
  n.useEffect(() => {
    null != M && (0, E.default)(M.id, M.getAvatarURL(null == p ? void 0 : p.id, 80), {
      guildId: null == p ? void 0 : p.id
    })
  }, [null == p ? void 0 : p.id, M]);
  let U = !0,
    j = !0;
  return P && 1 === b.length && (b.includes(O.WebSetting.PROFILE_SERVER_PROFILES) ? (v(C.ProfileCustomizationSubsection.GUILD), j = !1) : b.includes(O.WebSetting.PROFILE_USER_PROFILE) && (v(C.ProfileCustomizationSubsection.USER_PROFILE), U = !1)), (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: L,
    children: (0, a.jsxs)(l.HeadingLevel, {
      component: (0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: h.default.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, a.jsxs)(l.TabBar, {
        className: R.tabBar,
        type: "top",
        look: "brand",
        selectedItem: D,
        onItemSelect: v,
        children: [j ? (0, a.jsx)(l.TabBar.Item, {
          className: R.tabBarItem,
          id: C.ProfileCustomizationSubsection.USER_PROFILE,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, C.ProfileCustomizationSubsection.USER_PROFILE) : null, U ? (0, a.jsx)(l.TabBar.Item, {
          className: R.tabBarItem,
          id: C.ProfileCustomizationSubsection.GUILD,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, C.ProfileCustomizationSubsection.GUILD) : null]
      }), D === C.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
        selectedGuild: p
      }) : (0, a.jsx)(T.default, {})]
    })
  })
}