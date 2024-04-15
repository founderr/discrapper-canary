"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("110255"),
  i = n("64247"),
  r = n("836946"),
  o = n("808602"),
  u = n("981631"),
  d = n("689938");

function c(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsx)(l.Popout, {
    align: "right",
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => t.isThread() ? (0, a.jsx)(i.default, {
      ...e,
      channel: t,
      navId: "recents-thread-notifications",
      label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
    }) : (0, a.jsx)(s.default, {
      ...e,
      channel: t,
      navId: "recents-notifications",
      label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      location: {
        section: u.AnalyticsSections.INBOX
      },
      includeGuildMute: !0
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsx)(r.default, {
        tooltip: d.default.Messages.NOTIFICATION_SETTINGS,
        color: r.CircleIconButtonColors.TERTIARY,
        icon: (0, a.jsx)(o.default, {
          width: 16,
          height: 16
        }),
        onClick: t
      })
    }
  })
}