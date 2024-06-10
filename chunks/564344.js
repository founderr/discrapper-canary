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
  g = s("585483"),
  f = s("16703"),
  m = s("785145"),
  C = s("981631"),
  A = s("526761"),
  O = s("726985"),
  h = s("689938"),
  p = s("347620");

function R() {
  d.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getGuild()),
    t = (0, f.default)(),
    s = (0, l.useStateFromStores)([c.default, I.default], () => c.default.showNotice() || I.default.showNotice()),
    R = null != e ? e : t,
    M = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()),
    {
      subsection: x,
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
    if (x !== t) {
      if (s) {
        g.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
          duration: 300,
          intensity: r.SHAKE_INTENSITY_DEFAULT
        }), g.ComponentDispatch.dispatch(C.ComponentActions.EMPHASIZE_NOTICE);
        return
      }
      t === A.ProfileCustomizationSubsection.GUILD && null == e && null != R && (0, u.initGuildIdentitySettings)(R, L), D(t)
    }
  }
  n.useEffect(() => {
    null != M && (0, E.default)(M.id, M.getAvatarURL(null == R ? void 0 : R.id, 80), {
      guildId: null == R ? void 0 : R.id
    })
  }, [null == R ? void 0 : R.id, M]);
  let U = !0,
    j = !0;
  return P && 1 === b.length && (b.includes(O.WebSetting.PROFILE_SERVER_PROFILES) ? (v(A.ProfileCustomizationSubsection.GUILD), j = !1) : b.includes(O.WebSetting.PROFILE_USER_PROFILE) && (v(A.ProfileCustomizationSubsection.USER_PROFILE), U = !1)), (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: L,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: h.default.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, a.jsxs)(i.TabBar, {
        className: p.tabBar,
        type: "top",
        look: "brand",
        selectedItem: x,
        onItemSelect: v,
        children: [j ? (0, a.jsx)(i.TabBar.Item, {
          className: p.tabBarItem,
          id: A.ProfileCustomizationSubsection.USER_PROFILE,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, A.ProfileCustomizationSubsection.USER_PROFILE) : null, U ? (0, a.jsx)(i.TabBar.Item, {
          className: p.tabBarItem,
          id: A.ProfileCustomizationSubsection.GUILD,
          children: h.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, A.ProfileCustomizationSubsection.GUILD) : null]
      }), x === A.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
        selectedGuild: R
      }) : (0, a.jsx)(T.default, {})]
    })
  })
}