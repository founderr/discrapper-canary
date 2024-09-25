n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(793030),
    o = n(256139),
    s = n(866040);
function l(e) {
    let { user: t, text: n, channel: l, textClassName: u, onPopoutClosed: c } = e,
        d = (0, i.useMemo)(() => [t], [t]);
    return (0, r.jsx)(s.Z, {
        participants: d,
        channel: l,
        onPopoutClosed: c,
        children: (e) =>
            (0, r.jsx)(o.Z, {
                ...e,
                tag: 'span',
                children: (0, r.jsx)(a.xv, {
                    className: u,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n
                })
            })
    });
}
