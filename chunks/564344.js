t.d(s, {
  Z: function() {
    return x
  }
});
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(503089),
  l = t(906732),
  c = t(254901),
  d = t(18438),
  _ = t(778825),
  E = t(66516),
  u = t(484459),
  T = t(216045),
  S = t(839469),
  I = t(25990),
  N = t(594174),
  C = t(585483),
  A = t(16703),
  m = t(785145),
  O = t(981631),
  g = t(526761),
  h = t(726985),
  R = t(689938),
  p = t(103532);

function x() {
  c.Z.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, i.e7)([_.Z], () => _.Z.getGuild()),
    s = (0, A.Z)(),
    t = (0, i.e7)([_.Z, I.Z], () => _.Z.showNotice() || I.Z.showNotice()),
    x = null != e ? e : s,
    M = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
    {
      subsection: D,
      setSubsection: f
    } = (0, m.Z)(),
    {
      analyticsLocations: L
    } = (0, l.ZP)(),
    {
      hasSearchResults: P,
      searchResults: Z
    } = (0, S.E)();

  function v(s) {
    if (D !== s) {
      if (t) {
        C.S.dispatch(O.CkL.SHAKE_APP, {
          duration: 300,
          intensity: o.$x
        }), C.S.dispatch(O.CkL.EMPHASIZE_NOTICE);
        return
      }
      s === g.NB.GUILD && null == e && null != x && (0, d.Fq)(x, L), f(s)
    }
  }
  a.useEffect(() => {
    null != M && (0, u.Z)(M.id, M.getAvatarURL(null == x ? void 0 : x.id, 80), {
      guildId: null == x ? void 0 : x.id
    })
  }, [null == x ? void 0 : x.id, M]);
  let b = !0,
    j = !0;
  return P && 1 === Z.length && (Z.includes(h.s6.PROFILE_SERVER_PROFILES) ? (v(g.NB.GUILD), j = !1) : Z.includes(h.s6.PROFILE_USER_PROFILE) && (v(g.NB.USER_PROFILE), b = !1)), (0, n.jsx)(l.Gt, {
    value: L,
    children: (0, n.jsxs)(r.HeadingLevel, {
      component: (0, n.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: R.Z.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, n.jsxs)(r.TabBar, {
        className: p.tabBar,
        type: "top",
        look: "brand",
        selectedItem: D,
        onItemSelect: v,
        children: [j ? (0, n.jsx)(r.TabBar.Item, {
          className: p.tabBarItem,
          id: g.NB.USER_PROFILE,
          children: R.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, g.NB.USER_PROFILE) : null, b ? (0, n.jsx)(r.TabBar.Item, {
          className: p.tabBarItem,
          id: g.NB.GUILD,
          children: R.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, g.NB.GUILD) : null]
      }), D === g.NB.GUILD ? (0, n.jsx)(E.Z, {
        selectedGuild: x
      }) : (0, n.jsx)(T.Z, {})]
    })
  })
}