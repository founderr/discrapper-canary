"use strict";
n.r(t), n.d(t, {
  MoreButton: function() {
    return c
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("808268"),
  r = n("740727"),
  o = n("833592"),
  u = n("689938");
let d = e => {
    let {
      item: t,
      closePopout: n
    } = e;
    return (0, s.jsx)(l.Menu, {
      navId: "notification-actions",
      onClose: n,
      onSelect: n,
      "aria-label": u.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      children: (0, s.jsx)(l.MenuItem, {
        id: "delete",
        label: u.default.Messages.DELETE,
        icon: r.default,
        action: async () => {
          await (0, o.deleteNotificationCenterItem)(t)
        }
      })
    })
  },
  c = a.memo(function(e) {
    let {
      item: t
    } = e;
    return (0, s.jsx)(l.Popout, {
      renderPopout: e => (0, s.jsx)(d, {
        ...e,
        item: t
      }),
      position: "bottom",
      align: "right",
      animation: l.Popout.Animation.NONE,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, s.jsx)(l.CircleIconButton, {
          tooltip: u.default.Messages.MORE,
          color: l.CircleIconButtonColors.TERTIARY,
          icon: (0, s.jsx)(i.default, {
            height: 16,
            width: 16
          }),
          onClick: e => {
            e.stopPropagation(), t(e)
          },
          "aria-haspopup": "menu"
        })
      }
    })
  })