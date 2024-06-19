t.r(n), t.d(n, {
  default: function() {
    return c
  },
  useHasGuildRoleItems: function() {
    return o
  }
});
var i = t(735250);
t(470079);
var s = t(481060),
  l = t(239091),
  a = t(241635),
  r = t(689938);

function o(e, n) {
  return (0, a.Z)(e, n).length > 0
}

function c(e) {
  let {
    role: n,
    guild: t,
    onSelect: o
  } = e, c = (0, a.Z)(t, n);
  return 0 === c.length ? null : (0, i.jsx)(s.Menu, {
    navId: "guild-settings-role-context",
    "aria-label": r.Z.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
    onClose: l.Zy,
    onSelect: o,
    children: c
  })
}