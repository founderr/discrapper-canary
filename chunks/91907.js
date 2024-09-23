t.d(n, {
    Z: function () {
        return i;
    }
});
var a = t(735250),
    r = t(470079),
    s = t(793030),
    o = t(256139),
    l = t(866040);
function i(e) {
    let { user: n, text: t, channel: i, textClassName: c, onPopoutClosed: d } = e,
        u = (0, r.useMemo)(() => [n], [n]);
    return (0, a.jsx)(l.Z, {
        participants: u,
        channel: i,
        onPopoutClosed: d,
        children: (e) =>
            (0, a.jsx)(o.Z, {
                ...e,
                tag: 'span',
                children: (0, a.jsx)(s.x, {
                    className: c,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: t
                })
            })
    });
}
