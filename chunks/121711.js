var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(948789),
  o = n(481060),
  c = n(100527),
  u = n(252618),
  d = n(984370),
  E = n(792125),
  h = n(709158),
  _ = n(678935),
  I = n(563442),
  m = n(981631),
  g = n(689938),
  p = n(154549);
t.Z = function(e) {
  let {} = e, t = (0, h.Z)(c.Z.QUEST_HOME_PAGE);
  s.useEffect(() => {
    !t && (0, r.uL)(m.Z5c.FRIENDS)
  }, [t]), s.useEffect(() => {}, []), (0, u.Tt)({
    location: g.Z.Messages.QUESTS
  });
  let n = (0, E.Q)("dark");
  return t ? (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsxs)(d.Z, {
      toolbar: !0,
      transparent: !0,
      className: a()(n),
      children: [(0, i.jsx)(d.Z.Icon, {
        icon: o.QuestsIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(d.Z.Title, {
        children: g.Z.Messages.QUESTS
      }), (0, i.jsx)(d.Z.Divider, {})]
    }), (0, i.jsx)(o.ScrollerNone, {
      className: p.scroller,
      fade: !0,
      children: (0, i.jsx)(I.Z, {
        children: (0, i.jsx)(_.Z, {})
      })
    })]
  }) : null
}