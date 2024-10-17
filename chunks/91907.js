n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(735250),
    r = n(470079),
    s = n(793030),
    i = n(256139),
    o = n(866040);
function l(e) {
    let { user: t, text: n, channel: l, textClassName: c, onPopoutClosed: d } = e,
        u = (0, r.useMemo)(() => [t], [t]);
    return (0, a.jsx)(o.Z, {
        participants: u,
        channel: l,
        onPopoutClosed: d,
        children: (e) =>
            (0, a.jsx)(i.Z, {
                ...e,
                tag: 'span',
                children: (0, a.jsx)(s.xv, {
                    className: c,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n
                })
            })
    });
}
