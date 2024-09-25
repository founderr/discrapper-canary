n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(626135),
    l = n(288552),
    u = n(981631),
    c = n(689938),
    d = n(811304);
function _(e) {
    let { type: t, onClick: n } = e,
        [r, _] = a.useState(!1),
        f = () => {
            n(),
                s.default.track(u.rMx.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0
                });
        },
        h = (e) => {
            e.shiftKey ? f() : _(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r
                ? (0, i.jsx)(E, {
                      confirm: f,
                      cancel: () => _(!1)
                  })
                : null,
            'bottom-floating' === t
                ? (0, i.jsx)(l.a, {
                      text: c.Z.Messages.MARK_ALL_AS_READ,
                      icon: o.DoubleCheckmarkIcon,
                      onClick: h
                  })
                : (0, i.jsx)(o.CircleIconButton, {
                      tooltip: c.Z.Messages.MARK_ALL_AS_READ,
                      color: o.CircleIconButtonColors.TERTIARY,
                      icon: (0, i.jsx)(o.DoubleCheckmarkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                      className: d.controlButton,
                      onClick: h
                  })
        ]
    });
}
function E(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(o.DeclarativeConfirmModal, {
        dismissable: !0,
        header: c.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
        confirmText: c.Z.Messages.MARK_AS_READ,
        cancelText: c.Z.Messages.CANCEL,
        confirmButtonColor: o.Button.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(o.Text, {
            color: 'text-normal',
            variant: 'text-sm/normal',
            children: c.Z.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
        })
    });
}
