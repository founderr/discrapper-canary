i.d(n, {
  Z: function() {
    return x
  }
}), i(47120);
var t = i(735250),
  s = i(470079),
  o = i(442837),
  l = i(706898),
  a = i(481060),
  r = i(246946),
  d = i(543595),
  c = i(785717),
  u = i(100849),
  I = i(487922),
  f = i(944546),
  E = i(470900),
  _ = i(988246),
  Z = i(834534),
  S = i(228168),
  m = i(784204);

function v(e) {
  let {
    section: n,
    subsection: i,
    user: s,
    currentUser: o,
    displayProfile: l,
    onClose: a
  } = e;
  return n === S.oh.ACTIVITY ? (0, t.jsx)(u.Z, {
    showActions: (null == o ? void 0 : o.id) !== s.id,
    user: s,
    type: d.Y.SIMPLIFIED_PROFILE,
    onClose: a
  }) : n === S.oh.MUTUAL_FRIENDS ? (0, t.jsx)(f.Z, {
    user: s,
    onClose: a
  }) : n === S.oh.MUTUAL_GUILDS ? (0, t.jsx)(E.Z, {
    user: s,
    onClose: a
  }) : n === S.oh.BOT_DATA_ACCESS ? (0, t.jsx)(I.Z, {
    user: s
  }) : (0, t.jsx)(Z.Z, {
    user: s,
    currentUser: o,
    displayProfile: l,
    subsection: i,
    onClose: a
  })
}

function x(e) {
  var n, i;
  let {
    user: d,
    currentUser: u,
    displayProfile: I,
    items: f,
    initialSection: E = S.oh.USER_INFO,
    initialSubsection: Z,
    onClose: x
  } = e, {
    trackUserProfileAction: h
  } = (0, c.KZ)(), g = (0, o.e7)([r.Z], () => r.Z.hidePersonalInformation), [{
    section: N,
    subsection: p
  }, T] = s.useState({
    section: null !== (i = null === (n = f.find(e => {
      let {
        section: n
      } = e;
      return n === E
    })) || void 0 === n ? void 0 : n.section) && void 0 !== i ? i : S.oh.USER_INFO,
    subsection: Z
  }), C = s.useCallback(e => {
    h({
      action: "PRESS_SECTION",
      section: e
    }), T({
      section: e,
      subsection: void 0
    })
  }, [h, T]);
  return g ? (0, t.jsx)("div", {
    className: m.container,
    children: (0, t.jsx)(_.Z, {})
  }) : (0, t.jsxs)("div", {
    className: m.container,
    children: [(0, t.jsx)(l.n, {
      className: m.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: C,
      children: f.map(e => {
        let {
          section: n,
          text: i
        } = e;
        return (0, t.jsx)(l.n.Item, {
          className: m.tabBarItem,
          id: n,
          "aria-label": i,
          children: (0, t.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: i
          })
        }, n)
      })
    }), (0, t.jsx)(v, {
      items: f,
      section: N,
      subsection: p,
      user: d,
      currentUser: u,
      displayProfile: I,
      onClose: x
    })]
  })
}