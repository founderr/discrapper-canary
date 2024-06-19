n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(451478),
  a = n(727258),
  o = n(325257),
  u = n(981631);

function c(e) {
  let {
    guild: t,
    invite: n
  } = e, c = i.useMemo(() => (0, a.Mg)(t.id), [t.id]), d = (0, s.e7)([r.Z], () => r.Z.isFocused());
  return null == t ? null : (0, l.jsx)(o.Z, {
    guildNode: c,
    guild: t,
    animatable: d,
    draggable: !1,
    contextMenu: () => {},
    selected: !0,
    route: u.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
  })
}