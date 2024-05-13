"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  d = l("481060"),
  s = l("194359"),
  r = l("699516"),
  i = l("594174"),
  o = l("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
    {
      id: l,
      username: f,
      bot: c
    } = e,
    E = (0, u.useStateFromStores)([i.default], () => {
      var e;
      return (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === l
    }, [l]),
    [m, M] = (0, u.useStateFromStoresArray)([r.default], () => [r.default.isFriend(l), r.default.isBlocked(l)], [l]),
    [S, _] = n.useState(!1);
  return c || E ? null : m ? (0, a.jsx)(d.MenuItem, {
    id: "remove-friend",
    label: o.default.Messages.REMOVE_FRIEND,
    action: function() {
      (0, d.openModal)(e => (0, a.jsx)(d.ConfirmModal, {
        header: o.default.Messages.REMOVE_FRIEND_TITLE.format({
          name: f
        }),
        confirmText: o.default.Messages.REMOVE_FRIEND,
        cancelText: o.default.Messages.CANCEL,
        onConfirm: () => {
          s.default.removeFriend(l, {
            location: t
          }), _(!1)
        },
        ...e,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/normal",
          children: o.default.Messages.REMOVE_FRIEND_BODY.format({
            name: f
          })
        })
      }))
    }
  }) : (0, a.jsx)(d.MenuItem, {
    id: "add-friend",
    label: S ? o.default.Messages.ADD_FRIEND_BUTTON_AFTER : o.default.Messages.ADD_FRIEND,
    action: () => {
      !S && (s.default.addRelationship({
        userId: l,
        context: {
          location: t
        }
      }), _(!0))
    },
    disabled: M || S && !m
  })
}