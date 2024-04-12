"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("360629"),
  r = n("836946"),
  o = n("568570"),
  u = n("626135"),
  d = n("288552"),
  c = n("981631"),
  f = n("689938");

function h(e) {
  let {
    type: t,
    onClick: n
  } = e, [s, h] = l.useState(!1), m = (0, i.useInDesktopNotificationCenterExperiment)(), p = () => {
    n(), u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: !0,
      num_unread_channels_remaining: 0
    })
  }, S = e => {
    e.shiftKey ? p() : h(!0)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(E, {
      confirm: p,
      cancel: () => h(!1)
    }) : null, "bottom-floating" === t ? (0, a.jsx)(d.FloatingActionButton, {
      text: f.default.Messages.MARK_ALL_AS_READ,
      icon: o.default,
      onClick: S
    }) : (0, a.jsx)(r.default, {
      tooltip: m ? f.default.Messages.MARK_ALL_AS_READ : f.default.Messages.UNREADS_MARK_READ,
      color: r.CircleIconButtonColors.SECONDARY,
      icon: (0, a.jsx)(o.default, {}),
      onClick: S
    })]
  })
}

function E(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, a.jsx)(s.DeclarativeConfirmModal, {
    dismissable: !0,
    header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
    confirmText: f.default.Messages.MARK_AS_READ,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: s.Button.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, a.jsx)(s.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
    })
  })
}