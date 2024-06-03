"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("503089"),
  o = s("906732"),
  d = s("254901"),
  u = s("18438"),
  c = s("778825"),
  S = s("66516"),
  E = s("484459"),
  T = s("216045"),
  _ = s("839469"),
  f = s("25990"),
  m = s("594174"),
  g = s("585483"),
  I = s("16703"),
  N = s("785145"),
  h = s("981631"),
  C = s("526761"),
  A = s("726985"),
  p = s("689938"),
  O = s("347620");

function R() {
  d.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getGuild()),
    t = (0, I.default)(),
    s = (0, l.useStateFromStores)([c.default, f.default], () => c.default.showNotice() || f.default.showNotice()),
    R = null != e ? e : t,
    x = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
    {
      subsection: M,
      setSubsection: v
    } = (0, N.default)(),
    {
      analyticsLocations: L
    } = (0, o.default)(),
    {
      hasSearchResults: D,
      searchResults: P
    } = (0, _.useSettingSearchResults)();

  function b(t) {
    if (M !== t) {
      if (s) {
        g.ComponentDispatch.dispatch(h.ComponentActions.SHAKE_APP, {
          duration: 300,
          intensity: r.SHAKE_INTENSITY_DEFAULT
        }), g.ComponentDispatch.dispatch(h.ComponentActions.EMPHASIZE_NOTICE);
        return
      }
      t === C.ProfileCustomizationSubsection.GUILD && null == e && null != R && (0, u.initGuildIdentitySettings)(R, L), v(t)
    }
  }
  n.useEffect(() => {
    null != x && (0, E.default)(x.id, x.getAvatarURL(null == R ? void 0 : R.id, 80), {
      guildId: null == R ? void 0 : R.id
    })
  }, [null == R ? void 0 : R.id, x]);
  let j = !0;
  return D && P.includes(A.WebSetting.PROFILE_SERVER_PROFILES) && 1 === P.length && (b(C.ProfileCustomizationSubsection.GUILD), j = !1), (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: L,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: p.default.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, a.jsxs)(i.TabBar, {
        className: O.tabBar,
        type: "top",
        look: "brand",
        selectedItem: M,
        onItemSelect: b,
        children: [j ? (0, a.jsx)(i.TabBar.Item, {
          className: O.tabBarItem,
          id: C.ProfileCustomizationSubsection.USER_PROFILE,
          children: p.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, C.ProfileCustomizationSubsection.USER_PROFILE) : null, (0, a.jsx)(i.TabBar.Item, {
          className: O.tabBarItem,
          id: C.ProfileCustomizationSubsection.GUILD,
          children: p.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, C.ProfileCustomizationSubsection.GUILD)]
      }), M === C.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
        selectedGuild: R
      }) : (0, a.jsx)(T.default, {})]
    })
  })
}