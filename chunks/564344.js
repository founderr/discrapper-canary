"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("503089"),
  r = s("906732"),
  o = s("254901"),
  d = s("18438"),
  u = s("778825"),
  c = s("66516"),
  S = s("216045"),
  E = s("839469"),
  T = s("25990"),
  _ = s("585483"),
  f = s("16703"),
  m = s("785145"),
  g = s("981631"),
  I = s("526761"),
  N = s("726985"),
  h = s("689938"),
  C = s("347620");

function A() {
  o.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, n.useStateFromStores)([u.default], () => u.default.getGuild()),
    t = (0, f.default)(),
    s = (0, n.useStateFromStores)([u.default, T.default], () => u.default.showNotice() || T.default.showNotice()),
    A = null != e ? e : t,
    {
      subsection: p,
      setSubsection: O
    } = (0, m.default)(),
    {
      analyticsLocations: R
    } = (0, r.default)(),
    {
      hasSearchResults: x,
      searchResults: M
    } = (0, E.useSettingSearchResults)();

  function v(t) {
    if (p !== t) {
      if (s) {
        _.ComponentDispatch.dispatch(g.ComponentActions.SHAKE_APP, {
          duration: 300,
          intensity: i.SHAKE_INTENSITY_DEFAULT
        }), _.ComponentDispatch.dispatch(g.ComponentActions.EMPHASIZE_NOTICE);
        return
      }
      t === I.ProfileCustomizationSubsection.GUILD && null == e && null != A && (0, d.initGuildIdentitySettings)(A, R), O(t)
    }
  }
  let L = !0;
  return x && M.includes(N.WebSetting.PROFILE_SERVER_PROFILES) && 1 === M.length && (v(I.ProfileCustomizationSubsection.GUILD), L = !1), (0, a.jsx)(r.AnalyticsLocationProvider, {
    value: R,
    children: (0, a.jsxs)(l.HeadingLevel, {
      component: (0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: h.default.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, a.jsxs)(l.TabBar, {
        className: C.tabBar,
        type: "top",
        look: "brand",
        selectedItem: p,
        onItemSelect: v,
        children: [L ? (0, a.jsx)(l.TabBar.Item, {
          className: C.tabBarItem,
          id: I.ProfileCustomizationSubsection.USER_PROFILE,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, I.ProfileCustomizationSubsection.USER_PROFILE) : null, (0, a.jsx)(l.TabBar.Item, {
          className: C.tabBarItem,
          id: I.ProfileCustomizationSubsection.GUILD,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, I.ProfileCustomizationSubsection.GUILD)]
      }), p === I.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(c.default, {
        selectedGuild: A
      }) : (0, a.jsx)(S.default, {})]
    })
  })
}