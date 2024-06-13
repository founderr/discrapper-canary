"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("360629"),
  r = n("568570"),
  o = n("626135"),
  u = n("288552"),
  d = n("981631"),
  c = n("689938");

function f(e) {
  let {
    type: t,
    onClick: n
  } = e, [f, _] = a.useState(!1), T = (0, i.useInDesktopNotificationCenterExperiment)(), m = () => {
    n(), o.default.track(d.AnalyticEvents.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: !0,
      num_unread_channels_remaining: 0
    })
  }, I = e => {
    e.shiftKey ? m() : _(!0)
  };
  return (0, s.jsxs)(s.Fragment, {
    children: [f ? (0, s.jsx)(E, {
      confirm: m,
      cancel: () => _(!1)
    }) : null, "bottom-floating" === t ? (0, s.jsx)(u.FloatingActionButton, {
      text: c.default.Messages.MARK_ALL_AS_READ,
      icon: r.default,
      onClick: I
    }) : (0, s.jsx)(l.CircleIconButton, {
      tooltip: T ? c.default.Messages.MARK_ALL_AS_READ : c.default.Messages.UNREADS_MARK_READ,
      color: l.CircleIconButtonColors.SECONDARY,
      icon: (0, s.jsx)(r.default, {}),
      onClick: I
    })]
  })
}

function E(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, s.jsx)(l.DeclarativeConfirmModal, {
    dismissable: !0,
    header: c.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
    confirmText: c.default.Messages.MARK_AS_READ,
    cancelText: c.default.Messages.CANCEL,
    confirmButtonColor: l.Button.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, s.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: c.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
    })
  })
}