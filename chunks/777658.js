"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
}), i("47120");
var a = i("735250"),
  n = i("470079"),
  l = i("442837"),
  d = i("481060"),
  u = i("194359"),
  s = i("699516"),
  o = i("594174"),
  r = i("689938");

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
    {
      id: i,
      username: c,
      bot: f
    } = e,
    I = (0, l.useStateFromStores)([o.default], () => {
      var e;
      return (null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i
    }, [i]),
    [p, A] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.isFriend(i), s.default.isBlocked(i)], [i]),
    [T, S] = n.useState(!1);
  return f || I ? null : p ? (0, a.jsx)(d.MenuItem, {
    id: "remove-friend",
    label: r.default.Messages.REMOVE_FRIEND,
    action: function() {
      (0, d.openModal)(e => (0, a.jsx)(d.ConfirmModal, {
        header: r.default.Messages.REMOVE_FRIEND_TITLE.format({
          name: c
        }),
        confirmText: r.default.Messages.REMOVE_FRIEND,
        cancelText: r.default.Messages.CANCEL,
        onConfirm: () => {
          u.default.removeFriend(i, {
            location: t
          }), S(!1)
        },
        ...e,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/normal",
          children: r.default.Messages.REMOVE_FRIEND_BODY.format({
            name: c
          })
        })
      }))
    }
  }) : (0, a.jsx)(d.MenuItem, {
    id: "add-friend",
    label: T ? r.default.Messages.ADD_FRIEND_BUTTON_AFTER : r.default.Messages.ADD_FRIEND,
    action: () => {
      !T && (u.default.addRelationship({
        userId: i,
        context: {
          location: t
        }
      }), S(!0))
    },
    disabled: A || T && !p
  })
}