n.d(i, {
  Z: function() {
    return x
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(706898),
  r = n(481060),
  a = n(246946),
  d = n(543595),
  u = n(785717),
  c = n(100849),
  I = n(487922),
  E = n(944546),
  Z = n(470900),
  _ = n(988246),
  f = n(834534),
  S = n(228168),
  v = n(784204);

function m(e) {
  let {
    section: i,
    subsection: n,
    user: l,
    currentUser: t,
    displayProfile: o,
    onClose: r
  } = e;
  return i === S.oh.ACTIVITY ? (0, s.jsx)(c.Z, {
    showActions: (null == t ? void 0 : t.id) !== l.id,
    user: l,
    type: d.Y.SIMPLIFIED_PROFILE,
    onClose: r
  }) : i === S.oh.MUTUAL_FRIENDS ? (0, s.jsx)(E.Z, {
    user: l,
    onClose: r
  }) : i === S.oh.MUTUAL_GUILDS ? (0, s.jsx)(Z.Z, {
    user: l,
    onClose: r
  }) : i === S.oh.BOT_DATA_ACCESS ? (0, s.jsx)(I.Z, {
    user: l
  }) : (0, s.jsx)(f.Z, {
    user: l,
    currentUser: t,
    displayProfile: o,
    subsection: n,
    onClose: r
  })
}

function x(e) {
  var i, n;
  let {
    user: d,
    currentUser: c,
    displayProfile: I,
    items: E,
    initialSection: Z = S.oh.USER_INFO,
    initialSubsection: f,
    onClose: x
  } = e, {
    trackUserProfileAction: N
  } = (0, u.KZ)(), h = (0, t.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: g,
    subsection: T
  }, C] = l.useState({
    section: null !== (n = null === (i = E.find(e => {
      let {
        section: i
      } = e;
      return i === Z
    })) || void 0 === i ? void 0 : i.section) && void 0 !== n ? n : S.oh.USER_INFO,
    subsection: f
  }), A = l.useCallback(e => {
    N({
      action: "PRESS_SECTION",
      section: e
    }), C({
      section: e,
      subsection: void 0
    })
  }, [N, C]);
  return h ? (0, s.jsx)("div", {
    className: v.container,
    children: (0, s.jsx)(_.Z, {})
  }) : (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)(o.n, {
      className: v.tabBar,
      type: "top",
      selectedItem: g,
      onItemSelect: A,
      children: E.map(e => {
        let {
          section: i,
          text: n
        } = e;
        return (0, s.jsx)(o.n.Item, {
          className: v.tabBarItem,
          id: i,
          "aria-label": n,
          children: (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, i)
      })
    }), (0, s.jsx)(m, {
      items: E,
      section: g,
      subsection: T,
      user: d,
      currentUser: c,
      displayProfile: I,
      onClose: x
    })]
  })
}