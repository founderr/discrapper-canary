a.d(n, {
  Z: function() {
    return d
  }
});
var l = a(735250);
a(470079);
var t = a(442837),
  i = a(481060),
  s = a(5036),
  u = a(9156),
  r = a(689938);

function d(e) {
  let n = (0, t.e7)([u.ZP], () => u.ZP.isGuildCollapsed(e), [e]);
  return (0, l.jsx)(i.MenuCheckboxItem, {
    id: "hide-muted-channels",
    label: r.Z.Messages.HIDE_MUTED_CHANNELS,
    action: () => s.Z.toggleCollapseGuild(e),
    checked: n
  })
}