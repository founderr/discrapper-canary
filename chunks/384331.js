l.r(n),
    l.d(n, {
        FailedChannelRow: function () {
            return p;
        },
        FailedGroupDMRow: function () {
            return A;
        },
        FailedUserRow: function () {
            return L;
        },
        ForwardFailedAlertModal: function () {
            return C;
        }
    });
var i = l(735250),
    t = l(470079),
    a = l(442837),
    r = l(481060),
    s = l(700582),
    o = l(933557),
    c = l(266076),
    u = l(810123),
    d = l(592125),
    f = l(430824),
    h = l(158776),
    m = l(699516),
    x = l(594174),
    _ = l(51144),
    g = l(912332),
    Z = l(689938),
    j = l(703523);
function S(e) {
    let { icon: n, label: l } = e;
    return (0, i.jsxs)('div', {
        className: j.failedRow,
        children: [
            n,
            (0, i.jsx)(r.Text, {
                className: j.label,
                variant: 'text-md/medium',
                lineClamp: 1,
                children: l
            })
        ]
    });
}
function A(e) {
    let { channel: n } = e,
        l = (0, o.ZP)(n);
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(c.Z, {
            'aria-hidden': !0,
            size: r.AvatarSizes.SIZE_32,
            channel: n,
            experimentLocation: 'forward-failed-retry-modal'
        }),
        label: l
    });
}
function L(e) {
    let { user: n } = e,
        l = _.ZP.useName(n),
        t = (0, a.e7)([m.Z], () => m.Z.getNickname(n.id)),
        o = (0, a.e7)([h.Z], () => h.Z.getStatus(n.id));
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(s.Z, {
            'aria-hidden': !0,
            size: r.AvatarSizes.SIZE_32,
            user: n,
            status: o
        }),
        label: null != t ? t : l
    });
}
function p(e) {
    let { channel: n } = e,
        l = (0, a.e7)([f.Z], () => f.Z.getGuild(null == n ? void 0 : n.guild_id)),
        t = (0, o.ZP)(n);
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(u.Z, {
            size: u.E.SMALL_32,
            guild: l,
            channel: n
        }),
        label: t
    });
}
function v(e) {
    let { destination: n } = e,
        { channel: l, user: t } = (0, a.cj)([d.Z, x.default], () => ({
            channel: 'channel' === n.type ? d.Z.getChannel(n.id) : null,
            user: 'user' === n.type ? x.default.getUser(n.id) : null
        }));
    if (null == l ? void 0 : l.isGroupDM()) return (0, i.jsx)(A, { channel: l });
    if (null != t) return (0, i.jsx)(L, { user: t });
    if (null != l) return (0, i.jsx)(p, { channel: l });
    return null;
}
function C(e) {
    let { messageId: n, channelId: l, failedDestinations: a, forwardOptions: s, ...o } = e,
        c = t.useCallback(() => {
            (0, g.l8)({
                messageId: n,
                channelId: l,
                source: 'retry-modal',
                initialSelectedDestinations: a,
                forwardOptions: s
            });
        }, [l, a, n, s]);
    return (0, i.jsxs)(r.ConfirmModal, {
        header: Z.Z.Messages.MESSAGE_FORWARD_FAILED,
        confirmText: Z.Z.Messages.RETRY,
        cancelText: Z.Z.Messages.CANCEL,
        confirmButtonColor: r.Button.Colors.BRAND,
        onConfirm: c,
        ...o,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-md/medium',
                children: Z.Z.Messages.MESSAGE_FORWARD_FAILED_BODY.format({ count: a.length })
            }),
            (0, i.jsx)('div', {
                className: j.failedDestinations,
                children: a.map((e, n) => (0, i.jsx)(v, { destination: e }, n))
            })
        ]
    });
}
