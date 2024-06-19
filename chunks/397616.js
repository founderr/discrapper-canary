r.d(n, {
  Z: function() {
    return o
  }
});
var i = r(735250);
r(470079);
var t = r(442837),
  s = r(481060),
  a = r(493683),
  l = r(592125),
  u = r(594174),
  d = r(689938);

function o(e, n) {
  let r = (0, t.e7)([u.default], () => u.default.getCurrentUser(), []),
    o = (0, t.e7)([l.Z], () => l.Z.getChannel(n), [n]);
  return null == o || o.isOwner(e) || null == r || !o.isOwner(r.id) ? null : (0, i.jsx)(s.MenuItem, {
    id: "remove",
    label: d.Z.Messages.REMOVE_FROM_GROUP,
    action: () => a.Z.removeRecipient(n, e),
    color: "danger"
  })
}