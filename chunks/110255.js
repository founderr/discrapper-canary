n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(776568),
  r = n(218035),
  o = n(775666),
  c = n(858822),
  u = n(423589),
  d = n(131704),
  E = n(430824);

function _(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: _,
    navId: I,
    label: T,
    location: m,
    includeGuildMute: N
  } = e, h = (0, r.c)(t), C = (0, o.EQ)(t), S = (0, i.e7)([E.Z], () => E.Z.getGuild(t.guild_id)), A = (0, c.Z)(S), g = (0, u.Mn)("ChannelNotificationSettingsPopoutMenu") && d.$N.has(t.type);
  return (0, s.jsxs)(l.Menu, {
    navId: I,
    onClose: n,
    "aria-label": T,
    onSelect: _,
    children: [(0, s.jsx)(l.MenuGroup, {
      children: (0, a.ZP)(t, m)
    }), N ? (0, s.jsx)(l.MenuGroup, {
      children: A
    }) : null, g ? C : (0, s.jsx)(l.MenuGroup, {
      children: h
    })]
  })
}