n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(692547),
    o = n(481060),
    s = n(375954),
    l = n(876338),
    u = n(912332),
    c = n(245216),
    d = n(689938);
function _(e) {
    let { className: t, channelId: n, messageId: _, targetKind: E, embedIndex: f } = e,
        h = i.useCallback(() => {
            let e = s.Z.getMessage(n, _);
            if (null == e) return;
            let t = (0, l.j)(e, {
                targetKind: E,
                embedIndex: f
            });
            (0, u.l8)({
                channelId: n,
                messageId: _,
                source: 'message-actions',
                forwardOptions: t
            });
        }, [n, f, _, E]);
    return (0, r.jsx)(o.CircleIconButton, {
        className: t,
        tooltip: d.Z.Messages.MESSAGE_ACTION_FORWARD,
        color: o.CircleIconButtonColors.SECONDARY,
        icon: (0, r.jsx)(c.Z, {
            size: 'xs',
            color: a.Z.colors.INTERACTIVE_NORMAL
        }),
        onClick: h
    });
}
