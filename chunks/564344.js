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
  I = s("25990"),
  N = s("594174"),
  f = s("585483"),
  g = s("16703"),
  m = s("785145"),
  C = s("981631"),
  A = s("526761"),
  h = s("726985"),
  O = s("689938"),
  p = s("347620");

function R() {
  d.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getGuild()),
    t = (0, g.default)(),
    s = (0, l.useStateFromStores)([c.default, I.default], () => c.default.showNotice() || I.default.showNotice()),
    R = null != e ? e : t,
    x = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()),
    {
      subsection: M,
      setSubsection: D
    } = (0, m.default)(),
    {
      analyticsLocations: L
    } = (0, o.default)(),
    {
      hasSearchResults: P,
      searchResults: b
    } = (0, _.useSettingSearchResults)();

  function v(t) {
    if (M !== t) {
      if (s) {
        f.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
          duration: 300,
          intensity: r.SHAKE_INTENSITY_DEFAULT
        }), f.ComponentDispatch.dispatch(C.ComponentActions.EMPHASIZE_NOTICE);
        return
      }
      t === A.ProfileCustomizationSubsection.GUILD && null == e && null != R && (0, u.initGuildIdentitySettings)(R, L), D(t)
    }
  }
  n.useEffect(() => {
    null != x && (0, E.default)(x.id, x.getAvatarURL(null == R ? void 0 : R.id, 80), {
      guildId: null == R ? void 0 : R.id
    })
  }, [null == R ? void 0 : R.id, x]);
  let U = !0;
  return P && b.includes(h.WebSetting.PROFILE_SERVER_PROFILES) && 1 === b.length && (v(A.ProfileCustomizationSubsection.GUILD), U = !1), (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: L,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: O.default.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, a.jsxs)(i.TabBar, {
        className: p.tabBar,
        type: "top",
        look: "brand",
        selectedItem: M,
        onItemSelect: v,
        children: [U ? (0, a.jsx)(i.TabBar.Item, {
          className: p.tabBarItem,
          id: A.ProfileCustomizationSubsection.USER_PROFILE,
          children: O.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, A.ProfileCustomizationSubsection.USER_PROFILE) : null, (0, a.jsx)(i.TabBar.Item, {
          className: p.tabBarItem,
          id: A.ProfileCustomizationSubsection.GUILD,
          children: O.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, A.ProfileCustomizationSubsection.GUILD)]
      }), M === A.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
        selectedGuild: R
      }) : (0, a.jsx)(T.default, {})]
    })
  })
}