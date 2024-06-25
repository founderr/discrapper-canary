n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(360629),
  r = n(626135),
  o = n(288552),
  c = n(981631),
  u = n(689938);

function d(e) {
  let {
    type: t,
    onClick: n
  } = e, [d, _] = i.useState(!1), I = (0, a.sv)(), T = () => {
    n(), r.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: !0,
      num_unread_channels_remaining: 0
    })
  }, m = e => {
    e.shiftKey ? T() : _(!0)
  };
  return (0, s.jsxs)(s.Fragment, {
    children: [d ? (0, s.jsx)(E, {
      confirm: T,
      cancel: () => _(!1)
    }) : null, "bottom-floating" === t ? (0, s.jsx)(o.a, {
      text: u.Z.Messages.MARK_ALL_AS_READ,
      icon: l.DoubleCheckmarkLargeIcon,
      onClick: m
    }) : (0, s.jsx)(l.CircleIconButton, {
      tooltip: I ? u.Z.Messages.MARK_ALL_AS_READ : u.Z.Messages.UNREADS_MARK_READ,
      color: l.CircleIconButtonColors.SECONDARY,
      icon: (0, s.jsx)(l.DoubleCheckmarkLargeIcon, {
        size: "xs",
        color: "currentColor"
      }),
      onClick: m
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
    header: u.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
    confirmText: u.Z.Messages.MARK_AS_READ,
    cancelText: u.Z.Messages.CANCEL,
    confirmButtonColor: l.Button.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, s.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: u.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
    })
  })
}