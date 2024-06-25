var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(948789),
  o = n(481060),
  c = n(100527),
  d = n(252618),
  u = n(984370),
  _ = n(792125),
  E = n(709158),
  h = n(678935),
  I = n(563442),
  m = n(981631),
  p = n(689938),
  g = n(154549);
t.Z = function(e) {
  let {} = e, t = (0, E.Z)(c.Z.QUEST_HOME_PAGE);
  s.useEffect(() => {
    !t && (0, l.uL)(m.Z5c.FRIENDS)
  }, [t]), s.useEffect(() => {}, []), (0, d.Tt)({
    location: p.Z.Messages.QUESTS
  });
  let n = (0, _.Q)("dark");
  return t ? (0, i.jsxs)("div", {
    className: g.container,
    children: [(0, i.jsxs)(u.Z, {
      toolbar: !0,
      transparent: !0,
      className: r()(n),
      children: [(0, i.jsx)(u.Z.Icon, {
        icon: o.QuestsIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(u.Z.Title, {
        children: p.Z.Messages.QUESTS
      }), (0, i.jsx)(u.Z.Divider, {})]
    }), (0, i.jsx)(o.ScrollerNone, {
      className: g.scroller,
      fade: !0,
      children: (0, i.jsx)(I.Z, {
        children: (0, i.jsx)(h.Z, {})
      })
    })]
  }) : null
}