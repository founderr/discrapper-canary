n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(626135),
  r = n(144145),
  o = n(555927),
  c = n(738762),
  u = n(244080),
  d = n(247530),
  E = n(260889),
  h = n(981631),
  _ = n(674563),
  I = n(689938);

function m(e) {
  let {
    party: t,
    close: n,
    onSelect: m
  } = e, T = (0, c.Z)(t), g = (0, E.Z)(t), p = (0, d.Z)(t), N = (0, u.Z)(t), S = (0, r.Z)(t), C = (0, o.Z)(t);
  return i.useEffect(() => {
    let e = t.currentActivities.filter(e => {
      var t, n;
      return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === _.wW.GAME
    }).map(e => e.game.name);
    a.default.track(h.rMx.OPEN_POPOUT, {
      type: "Now Playing Card Popout",
      games_detected: e
    })
  }, []), (0, s.jsxs)(l.Menu, {
    navId: "now-playing-menu",
    onClose: n,
    "aria-label": I.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onSelect: m,
    children: [T, (0, s.jsxs)(l.MenuGroup, {
      children: [g, p]
    }), (0, s.jsx)(l.MenuGroup, {
      children: N
    }), (0, s.jsx)(l.MenuGroup, {
      children: S
    }), C]
  })
}