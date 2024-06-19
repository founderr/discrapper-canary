n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(905423),
  a = n(430824),
  o = n(451478),
  u = n(727258),
  c = n(61634),
  d = n(325257);

function h(e) {
  let {
    guildId: t
  } = e, n = i.useMemo(() => (0, u.Mg)(t), [t]), h = (0, s.e7)([a.Z], () => a.Z.getGuild(t)), g = (0, s.e7)([o.Z], () => o.Z.isFocused()), p = t === (0, r.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), m = (0, c.Z)(t);
  return null == h ? null : (0, l.jsx)(d.Z, {
    guildNode: n,
    guild: h,
    animatable: g,
    selected: p,
    draggable: !1,
    mediaState: m
  })
}