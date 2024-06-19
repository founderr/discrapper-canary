a.r(n), a.d(n, {
  default: function() {
    return E
  }
});
var l = a(735250);
a(470079);
var t = a(481060),
  i = a(239091),
  s = a(984933),
  u = a(904483),
  r = a(522762),
  d = a(466330),
  o = a(981631),
  c = a(689938);

function E(e) {
  let {
    guild: n,
    onSelect: a
  } = e, E = s.ZP.getDefaultChannel(n.id, !0, o.Plq.CREATE_INSTANT_INVITE), _ = (0, r.Z)(n.id), p = (0, u.Z)(n), I = (0, d.Z)({
    guild: n,
    source: o.t4x.GUILD_CONTEXT_MENU,
    channel: E
  });
  return (0, l.jsxs)(t.Menu, {
    navId: "guild-context",
    "aria-label": c.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
    onClose: i.Zy,
    onSelect: a,
    children: [(0, l.jsx)(t.MenuGroup, {
      children: _
    }), (0, l.jsxs)(t.MenuGroup, {
      children: [p, I]
    })]
  })
}