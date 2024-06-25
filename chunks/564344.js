t.d(s, {
  Z: function() {
    return x
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(503089),
  o = t(906732),
  c = t(254901),
  E = t(18438),
  d = t(778825),
  _ = t(66516),
  T = t(484459),
  S = t(216045),
  u = t(839469),
  I = t(25990),
  N = t(594174),
  A = t(585483),
  C = t(16703),
  O = t(785145),
  m = t(981631),
  h = t(526761),
  g = t(726985),
  R = t(689938),
  M = t(103532);

function x() {
  c.Z.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, a.e7)([d.Z], () => d.Z.getGuild()),
    s = (0, C.Z)(),
    t = (0, a.e7)([d.Z, I.Z], () => d.Z.showNotice() || I.Z.showNotice()),
    x = null != e ? e : s,
    D = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
    {
      subsection: p,
      setSubsection: L
    } = (0, O.Z)(),
    {
      analyticsLocations: P
    } = (0, o.ZP)(),
    {
      hasSearchResults: Z,
      searchResults: f
    } = (0, u.E)();

  function v(s) {
    if (p !== s) {
      if (t) {
        A.S.dispatch(m.CkL.SHAKE_APP, {
          duration: 300,
          intensity: r.$x
        }), A.S.dispatch(m.CkL.EMPHASIZE_NOTICE);
        return
      }
      s === h.NB.GUILD && null == e && null != x && (0, E.Fq)(x, P), L(s)
    }
  }
  i.useEffect(() => {
    null != D && (0, T.Z)(D.id, D.getAvatarURL(null == x ? void 0 : x.id, 80), {
      guildId: null == x ? void 0 : x.id
    })
  }, [null == x ? void 0 : x.id, D]);
  let j = !0,
    U = !0;
  return Z && 1 === f.length && (f.includes(g.s6.PROFILE_SERVER_PROFILES) ? (v(h.NB.GUILD), U = !1) : f.includes(g.s6.PROFILE_USER_PROFILE) && (v(h.NB.USER_PROFILE), j = !1)), (0, n.jsx)(o.Gt, {
    value: P,
    children: (0, n.jsxs)(l.HeadingLevel, {
      component: (0, n.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: R.Z.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, n.jsxs)(l.TabBar, {
        className: M.tabBar,
        type: "top",
        look: "brand",
        selectedItem: p,
        onItemSelect: v,
        children: [U ? (0, n.jsx)(l.TabBar.Item, {
          className: M.tabBarItem,
          id: h.NB.USER_PROFILE,
          children: R.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, h.NB.USER_PROFILE) : null, j ? (0, n.jsx)(l.TabBar.Item, {
          className: M.tabBarItem,
          id: h.NB.GUILD,
          children: R.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, h.NB.GUILD) : null]
      }), p === h.NB.GUILD ? (0, n.jsx)(_.Z, {
        selectedGuild: x
      }) : (0, n.jsx)(S.Z, {})]
    })
  })
}