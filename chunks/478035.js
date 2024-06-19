t.d(n, {
  Z: function() {
    return d
  }
});
var a = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  r = t(703656),
  s = t(914010),
  u = t(981631),
  o = t(689938);

function d(e) {
  let n = (0, i.e7)([s.Z], () => s.Z.getGuildId());
  return __OVERLAY__ || n !== u.I_8 ? null : (0, a.jsx)(l.MenuItem, {
    id: "go-to-original-guild",
    label: o.Z.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
    action: function() {
      (0, r.XU)(e.guild_id, e.id)
    }
  })
}