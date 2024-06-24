i.d(n, {
  Z: function() {
    return o
  }
});
var r = i(735250);
i(470079);
var s = i(442837),
  a = i(481060),
  t = i(493683),
  l = i(592125),
  d = i(594174),
  u = i(689938);

function o(e, n) {
  let i = (0, s.e7)([d.default], () => d.default.getCurrentUser(), []),
    o = (0, s.e7)([l.Z], () => l.Z.getChannel(n), [n]);
  return null == o || o.isOwner(e) || null == i || !o.isOwner(i.id) ? null : (0, r.jsx)(a.MenuItem, {
    id: "remove",
    label: u.Z.Messages.REMOVE_FROM_GROUP,
    action: () => t.Z.removeRecipient(n, e),
    color: "danger"
  })
}