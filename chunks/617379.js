n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(110255),
  a = n(64247),
  r = n(981631),
  o = n(689938);

function c(e) {
  let {
    channel: t
  } = e;
  return (0, s.jsx)(i.Popout, {
    align: "right",
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => t.isThread() ? (0, s.jsx)(a.Z, {
      ...e,
      channel: t,
      navId: "recents-thread-notifications",
      label: o.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
    }) : (0, s.jsx)(l.Z, {
      ...e,
      channel: t,
      navId: "recents-notifications",
      label: o.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      location: {
        section: r.jXE.INBOX
      },
      includeGuildMute: !0
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, s.jsx)(i.CircleIconButton, {
        tooltip: o.Z.Messages.NOTIFICATION_SETTINGS,
        color: i.CircleIconButtonColors.TERTIARY,
        icon: (0, s.jsx)(i.BellIcon, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: t
      })
    }
  })
}