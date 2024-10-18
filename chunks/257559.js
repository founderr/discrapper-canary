t(789020), t(47120);
var i = t(735250),
    a = t(470079),
    s = t(120356),
    l = t.n(s),
    r = t(481060),
    o = t(332148),
    u = t(904245),
    d = t(933557),
    c = t(951844),
    E = t(372900),
    M = t(726521),
    g = t(294218),
    f = t(699516),
    m = t(594174),
    I = t(630388),
    _ = t(970257),
    Z = t(981631),
    S = t(689938),
    h = t(262704);
function A(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class N extends a.PureComponent {
    render() {
        let e, n;
        let { report: t } = this.state,
            { channel: a, message: s, showContextMenuHint: l, ...o } = this.props,
            u = a.type === Z.d4z.GUILD_ANNOUNCEMENT && (0, I.yE)(s.flags, Z.iLy.CROSSPOSTED);
        return (
            l &&
                (e = (0, i.jsx)(c.Z, {
                    className: h.spacingTop,
                    children: S.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                })),
            (0, _.vc)(s) &&
                (n = (0, i.jsx)(r.FormSwitch, {
                    value: t,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: h.spacingTop,
                    children: S.Z.Messages.DELETE_MESSAGE_REPORT
                })),
            (0, i.jsx)(E.Z.Provider, {
                value: a.guild_id,
                children: (0, i.jsxs)(r.ConfirmModal, {
                    header: u ? S.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : S.Z.Messages.DELETE_MESSAGE_TITLE,
                    confirmText: S.Z.Messages.DELETE,
                    cancelText: S.Z.Messages.CANCEL,
                    onConfirm: this.handleDelete,
                    ...o,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: h.spacing,
                            children: u ? S.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : S.Z.Messages.DELETE_MESSAGE_BODY
                        }),
                        (0, i.jsx)('div', {
                            className: h.message,
                            children: (0, i.jsx)(g.Z, {
                                channel: a,
                                message: s,
                                disableInteraction: !0
                            })
                        }),
                        n,
                        e
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', { report: !1 }),
            A(this, 'handleDelete', () => {
                let { report: e } = this.state,
                    { channel: n, message: t } = this.props;
                e ? (0, M.ak)(t, 'message_delete_alert', () => u.Z.deleteMessage(n.id, t.id)) : u.Z.deleteMessage(n.id, t.id);
            }),
            A(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            });
    }
}
n.Z = {
    confirmPin: function (e, n) {
        (0, r.openModal)((t) => {
            let a;
            let s = (0, d.F6)(e, m.default, f.Z);
            return (
                (a = e.isPrivate() ? S.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : S.Z.Messages.PIN_MESSAGE_BODY.format({ channelName: s })),
                (0, i.jsx)(E.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(r.ConfirmModal, {
                        header: S.Z.Messages.PIN_MESSAGE_TITLE,
                        confirmText: S.Z.Messages.PIN_CONFIRM,
                        cancelText: S.Z.Messages.CANCEL,
                        confirmButtonColor: r.Button.Colors.BRAND,
                        onConfirm: () => o.Z.pinMessage(e, n.id),
                        ...t,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: h.spacing,
                                children: a
                            }),
                            (0, i.jsx)('div', {
                                className: h.message,
                                children: (0, i.jsx)(g.Z, {
                                    channel: e,
                                    message: n,
                                    animateAvatar: !1,
                                    disableInteraction: !0
                                })
                            })
                        ]
                    })
                })
            );
        });
    },
    confirmUnpin: function (e, n) {
        (0, r.openModal)((t) =>
            (0, i.jsx)(E.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(r.ConfirmModal, {
                    header: S.Z.Messages.UNPIN_MESSAGE_TITLE,
                    confirmText: S.Z.Messages.UNPIN_CONFIRM,
                    cancelText: S.Z.Messages.CANCEL,
                    onConfirm: () => o.Z.unpinMessage(e, n.id),
                    ...t,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: h.spacing,
                            children: S.Z.Messages.UNPIN_MESSAGE_BODY
                        }),
                        (0, i.jsx)('div', {
                            className: l()(h.message, h.spacing),
                            children: (0, i.jsx)(g.Z, {
                                channel: e,
                                message: n,
                                disableInteraction: !0
                            })
                        }),
                        (0, i.jsx)(c.Z, { children: S.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format() })
                    ]
                })
            })
        );
    },
    confirmDelete: function (e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, r.openModal)((a) =>
            (0, i.jsx)(N, {
                channel: e,
                message: n,
                showContextMenuHint: t,
                ...a
            })
        );
    },
    confirmEdit: function (e, n, t) {
        (0, r.openModal)((a) =>
            (0, i.jsx)(r.ConfirmModal, {
                header: S.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                confirmText: S.Z.Messages.CONFIRM,
                cancelText: S.Z.Messages.CANCEL,
                confirmButtonColor: r.Button.Colors.BRAND,
                onConfirm: () => u.Z.editMessage(e, n, { content: t }),
                ...a,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: h.spacing,
                    children: S.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
                })
            })
        );
    }
};
