n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(834129),
    l = n(689938),
    r = n(861111);
function o(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(s.Z, {
        iconNode: (0, i.jsx)(a.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: r.icon
        }),
        timestamp: t.timestamp,
        compact: n,
        children: l.Z.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
    });
}
