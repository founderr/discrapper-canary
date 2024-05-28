"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
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
  I = s("981631"),
  g = s("526761"),
  N = s("726985"),
  h = s("689938"),
  C = s("347620");

function O() {
  o.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, n.useStateFromStores)([u.default], () => u.default.getGuild()),
    t = (0, f.default)(),
    s = (0, n.useStateFromStores)([u.default, T.default], () => u.default.showNotice() || T.default.showNotice()),
    O = null != e ? e : t,
    {
      subsection: A,
      setSubsection: p
    } = (0, m.default)(),
    {
      analyticsLocations: R
    } = (0, r.default)(),
    {
      hasSearchResults: x,
      searchResults: M
    } = (0, E.useSettingSearchResults)();

  function L(t) {
    if (A !== t) {
      if (s) {
        _.ComponentDispatch.dispatch(I.ComponentActions.SHAKE_APP, {
          duration: 300,
          intensity: i.SHAKE_INTENSITY_DEFAULT
        }), _.ComponentDispatch.dispatch(I.ComponentActions.EMPHASIZE_NOTICE);
        return
      }
      t === g.ProfileCustomizationSubsection.GUILD && null == e && null != O && (0, d.initGuildIdentitySettings)(O, R), p(t)
    }
  }
  let D = !0;
  return x && M.includes(N.WebSetting.PROFILE_SERVER_PROFILES) && 1 === M.length && (L(g.ProfileCustomizationSubsection.GUILD), D = !1), (0, a.jsx)(r.AnalyticsLocationProvider, {
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
        selectedItem: A,
        onItemSelect: L,
        children: [D ? (0, a.jsx)(l.TabBar.Item, {
          className: C.tabBarItem,
          id: g.ProfileCustomizationSubsection.USER_PROFILE,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, g.ProfileCustomizationSubsection.USER_PROFILE) : null, (0, a.jsx)(l.TabBar.Item, {
          className: C.tabBarItem,
          id: g.ProfileCustomizationSubsection.GUILD,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, g.ProfileCustomizationSubsection.GUILD)]
      }), A === g.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(c.default, {
        selectedGuild: O
      }) : (0, a.jsx)(S.default, {})]
    })
  })
}