n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(668781),
  l = n(79390),
  o = n(222677),
  c = n(665906),
  u = n(496675),
  d = n(981631),
  _ = n(689938);

function E(e, t) {
  let n = (0, c.$R)(t),
E = (0, s.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [
  t,
  n
]);
  return !E || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, l.eQ)(e) ? null : (0, i.jsx)(a.MenuItem, {
id: 'remove-reactions',
label: _.Z.Messages.REMOVE_ALL_REACTIONS,
action: function(n) {
  n.shiftKey ? (0, o.wX)(t.id, e.id) : r.Z.show({
    title: _.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
    body: _.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
    confirmText: _.Z.Messages.YES_TEXT,
    cancelText: _.Z.Messages.NO_TEXT,
    onConfirm: () => {
      (0, o.wX)(t.id, e.id);
    }
  });
},
color: 'danger'
  });
}