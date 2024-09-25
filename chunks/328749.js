n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(834129),
    o = n(689938),
    s = n(861111);
function l(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: s.icon
        }),
        timestamp: t.timestamp,
        compact: n,
        children: o.Z.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
    });
}
