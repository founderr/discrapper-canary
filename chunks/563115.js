t.d(l, {
  Z: function() {
    return r
  },
  h: function() {
    return i
  }
});
var n = t(735250);
t(470079);
var s = t(442837),
  a = t(430824),
  o = t(512508);

function i(e, l, t) {
  return (0, s.Wu)([a.Z], () => Object.values(a.Z.getRoles(e)).filter(e => !l.has(e.id)).filter(l => !t || l.id !== e).map(e => (0, o.WG)(e).row), [t, e, l])
}

function r(e) {
  let {
    guildId: l,
    selectedRoleIds: t,
    onChange: s,
    placeholder: a,
    disableEveryoneRole: r,
    helperText: C,
    className: c
  } = e, d = i(l, t, r);
  return (0, n.jsx)(o.ZP, {
    roleRows: d,
    guildId: l,
    selectedRoleIds: t,
    onChange: (e, l) => s(l),
    placeholder: a,
    helperText: C,
    className: c
  })
}