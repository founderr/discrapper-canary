n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(904245),
  l = n(257559),
  o = n(665906),
  c = n(496675),
  u = n(594174),
  d = n(981631),
  _ = n(689938);

function E(e, t) {
  let n = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
E = (0, o.$R)(t),
I = (0, a.e7)([c.Z], () => c.Z.can(d.Plq.MANAGE_MESSAGES, t), [t]),
m = I || null != n && e.canDeleteOwnMessage(n.id);
  return e.state === d.yb.SENDING || !m || d.V$x.UNDELETABLE.has(e.type) || !E ? null : (0, i.jsx)(s.MenuItem, {
id: 'delete',
label: _.Z.Messages.DELETE_MESSAGE,
action: function(n) {
  e.state === d.yb.SEND_FAILED ? r.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? r.Z.deleteMessage(t.id, e.id) : l.Z.confirmDelete(t, e, !0);
},
color: 'danger',
icon: s.TrashIcon
  });
}