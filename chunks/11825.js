n.d(t, {
  z: function() {
    return c
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(833592),
  r = n(689938);
let o = e => {
    let {
      item: t,
      closePopout: n
    } = e;
    return (0, s.jsx)(l.Menu, {
      navId: "notification-actions",
      onClose: n,
      onSelect: n,
      "aria-label": r.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      children: (0, s.jsx)(l.MenuItem, {
        id: "delete",
        label: r.Z.Messages.DELETE,
        icon: l.TrashIcon,
        action: async () => {
          await (0, a.g3)(t)
        }
      })
    })
  },
  c = i.memo(function(e) {
    let {
      item: t
    } = e;
    return (0, s.jsx)(l.Popout, {
      renderPopout: e => (0, s.jsx)(o, {
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
          tooltip: r.Z.Messages.MORE,
          color: l.CircleIconButtonColors.TERTIARY,
          icon: (0, s.jsx)(l.MoreHorizontalIcon, {
            size: "xs",
            color: "currentColor"
          }),
          onClick: e => {
            e.stopPropagation(), t(e)
          },
          "aria-haspopup": "menu"
        })
      }
    })
  })