"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("110255"),
  i = n("64247"),
  r = n("808602"),
  o = n("981631"),
  u = n("689938");

function d(e) {
  let {
    channel: t
  } = e;
  return (0, s.jsx)(a.Popout, {
    align: "right",
    animation: a.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => t.isThread() ? (0, s.jsx)(i.default, {
      ...e,
      channel: t,
      navId: "recents-thread-notifications",
      label: u.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
    }) : (0, s.jsx)(l.default, {
      ...e,
      channel: t,
      navId: "recents-notifications",
      label: u.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      location: {
        section: o.AnalyticsSections.INBOX
      },
      includeGuildMute: !0
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, s.jsx)(a.CircleIconButton, {
        tooltip: u.default.Messages.NOTIFICATION_SETTINGS,
        color: a.CircleIconButtonColors.TERTIARY,
        icon: (0, s.jsx)(r.default, {
          width: 16,
          height: 16
        }),
        onClick: t
      })
    }
  })
}