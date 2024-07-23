i.d(n, {
  Z: function() {
return c;
  }
}), i(47120);
var t = i(735250),
  l = i(470079),
  s = i(442837),
  o = i(481060),
  a = i(194359),
  u = i(699516),
  d = i(594174),
  r = i(689938);

function c(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu',
{
  id: i,
  username: c,
  bot: Z
} = e,
M = (0, s.e7)([d.default], () => {
  var e;
  return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i;
}, [i]),
[E, f] = (0, s.Wu)([u.Z], () => [
  u.Z.isFriend(i),
  u.Z.isBlocked(i)
], [i]),
[_, A] = l.useState(!1);
  return Z || M ? null : E ? (0, t.jsx)(o.MenuItem, {
id: 'remove-friend',
label: r.Z.Messages.REMOVE_FRIEND,
action: function() {
  (0, o.openModal)(e => (0, t.jsx)(o.ConfirmModal, {
    header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({
      name: c
    }),
    confirmText: r.Z.Messages.REMOVE_FRIEND,
    cancelText: r.Z.Messages.CANCEL,
    onConfirm: () => {
      a.Z.removeFriend(i, {
        location: n
      }), A(!1);
    },
    ...e,
    children: (0, t.jsx)(o.Text, {
      variant: 'text-md/normal',
      children: r.Z.Messages.REMOVE_FRIEND_BODY.format({
        name: c
      })
    })
  }));
}
  }) : (0, t.jsx)(o.MenuItem, {
id: 'add-friend',
label: _ ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER : r.Z.Messages.ADD_FRIEND,
action: () => {
  !_ && (a.Z.addRelationship({
    userId: i,
    context: {
      location: n
    }
  }), A(!0));
},
disabled: f || _ && !E
  });
}