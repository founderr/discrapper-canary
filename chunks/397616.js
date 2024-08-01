n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  s = n(493683),
  o = n(592125),
  d = n(594174),
  I = n(689938);

function c(e, t) {
  let n = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
c = (0, r.e7)([o.Z], () => o.Z.getChannel(t), [t]);
  return null == c || c.isOwner(e) || null == n || !c.isOwner(n.id) ? null : (0, i.jsx)(a.MenuItem, {
id: 'remove',
label: I.Z.Messages.REMOVE_FROM_GROUP,
action: () => s.Z.removeRecipient(t, e),
color: 'danger'
  });
}