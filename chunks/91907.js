a.d(n, {
    Z: function () {
        return l;
    }
});
var t = a(735250),
    r = a(470079),
    s = a(793030),
    i = a(256139),
    o = a(866040);
function l(e) {
    let { user: n, text: a, channel: l, textClassName: c, onPopoutClosed: d } = e,
        u = (0, r.useMemo)(() => [n], [n]);
    return (0, t.jsx)(o.Z, {
        participants: u,
        channel: l,
        onPopoutClosed: d,
        children: (e) =>
            (0, t.jsx)(i.Z, {
                ...e,
                tag: 'span',
                children: (0, t.jsx)(s.xv, {
                    className: c,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: a
                })
            })
    });
}
