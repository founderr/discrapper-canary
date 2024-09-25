n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(468706),
    l = n(774863),
    u = n(689938);
function c(e) {
    let { messageId: t, channelId: n } = e,
        c = (0, a.e7)([l.Z], () => l.Z.canSubmitFpReport(t)),
        d = i.useCallback(() => {
            (0, s.e)(n, t);
        }, [n, t]);
    return (0, r.jsx)(o.Button, {
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.PRIMARY,
        onClick: d,
        disabled: !c,
        children: u.Z.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
    });
}
