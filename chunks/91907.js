l.d(n, {
    Z: function () {
        return u;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(793030),
    a = l(256139),
    s = l(866040);
function u(e) {
    let { user: n, text: l, channel: u, textClassName: o } = e,
        c = (0, r.useMemo)(() => [n], [n]);
    return (0, t.jsx)(s.Z, {
        participants: c,
        channel: u,
        children: (e) =>
            (0, t.jsx)(a.Z, {
                ...e,
                tag: 'span',
                children: (0, t.jsx)(i.x, {
                    className: o,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: l
                })
            })
    });
}
