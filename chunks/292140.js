"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("626135"),
  r = a("144145"),
  o = a("555927"),
  u = a("738762"),
  d = a("244080"),
  c = a("247530"),
  f = a("260889"),
  E = a("981631"),
  h = a("674563"),
  _ = a("689938");

function C(e) {
  let {
    party: t,
    close: a,
    onSelect: C
  } = e, m = (0, u.default)(t), S = (0, f.default)(t), p = (0, c.default)(t), I = (0, d.default)(t), g = (0, r.default)(t), T = (0, o.default)(t);
  return s.useEffect(() => {
    let e = t.currentActivities.filter(e => {
      var t, a;
      return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (a = e.game) || void 0 === a ? void 0 : a.type) === h.ApplicationTypes.GAME
    }).map(e => e.game.name);
    i.default.track(E.AnalyticEvents.OPEN_POPOUT, {
      type: "Now Playing Card Popout",
      games_detected: e
    })
  }, []), (0, n.jsxs)(l.Menu, {
    navId: "now-playing-menu",
    onClose: a,
    "aria-label": _.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onSelect: C,
    children: [m, (0, n.jsxs)(l.MenuGroup, {
      children: [S, p]
    }), (0, n.jsx)(l.MenuGroup, {
      children: I
    }), (0, n.jsx)(l.MenuGroup, {
      children: g
    }), T]
  })
}