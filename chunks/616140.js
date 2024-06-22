s.d(i, {
  Z: function() {
    return x
  }
}), s(47120);
var n = s(735250),
  l = s(470079),
  t = s(442837),
  o = s(706898),
  r = s(481060),
  a = s(246946),
  d = s(543595),
  c = s(785717),
  u = s(100849),
  I = s(487922),
  E = s(944546),
  Z = s(470900),
  f = s(988246),
  _ = s(834534),
  S = s(228168),
  v = s(784204);

function m(e) {
  let {
    section: i,
    subsection: s,
    user: l,
    currentUser: t,
    displayProfile: o,
    onClose: r
  } = e;
  return i === S.oh.ACTIVITY ? (0, n.jsx)(u.Z, {
    showActions: (null == t ? void 0 : t.id) !== l.id,
    user: l,
    type: d.Y.SIMPLIFIED_PROFILE,
    onClose: r
  }) : i === S.oh.MUTUAL_FRIENDS ? (0, n.jsx)(E.Z, {
    user: l,
    onClose: r
  }) : i === S.oh.MUTUAL_GUILDS ? (0, n.jsx)(Z.Z, {
    user: l,
    onClose: r
  }) : i === S.oh.BOT_DATA_ACCESS ? (0, n.jsx)(I.Z, {
    user: l
  }) : (0, n.jsx)(_.Z, {
    user: l,
    currentUser: t,
    displayProfile: o,
    subsection: s,
    onClose: r
  })
}

function x(e) {
  var i, s;
  let {
    user: d,
    currentUser: u,
    displayProfile: I,
    items: E,
    initialSection: Z = S.oh.USER_INFO,
    initialSubsection: _,
    onClose: x
  } = e, {
    trackUserProfileAction: h
  } = (0, c.KZ)(), N = (0, t.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: g,
    subsection: T
  }, C] = l.useState({
    section: null !== (s = null === (i = E.find(e => {
      let {
        section: i
      } = e;
      return i === Z
    })) || void 0 === i ? void 0 : i.section) && void 0 !== s ? s : S.oh.USER_INFO,
    subsection: _
  }), R = l.useCallback(e => {
    h({
      action: "PRESS_SECTION",
      section: e
    }), C({
      section: e,
      subsection: void 0
    })
  }, [h, C]);
  return N ? (0, n.jsx)("div", {
    className: v.container,
    children: (0, n.jsx)(f.Z, {})
  }) : (0, n.jsxs)("div", {
    className: v.container,
    children: [(0, n.jsx)(o.n, {
      className: v.tabBar,
      type: "top",
      selectedItem: g,
      onItemSelect: R,
      children: E.map(e => {
        let {
          section: i,
          text: s
        } = e;
        return (0, n.jsx)(o.n.Item, {
          className: v.tabBarItem,
          id: i,
          "aria-label": s,
          children: (0, n.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: s
          })
        }, i)
      })
    }), (0, n.jsx)(m, {
      items: E,
      section: g,
      subsection: T,
      user: d,
      currentUser: u,
      displayProfile: I,
      onClose: x
    })]
  })
}