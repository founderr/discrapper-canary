t.d(e, {
    Z: function () {
        return u;
    }
});
var i = t(735250),
    l = t(470079),
    r = t(793030),
    o = t(256139),
    a = t(866040);
function u(n) {
    let { user: e, text: t, channel: u, textClassName: c } = n,
        d = (0, l.useMemo)(() => [e], [e]);
    return (0, i.jsx)(a.Z, {
        participants: d,
        channel: u,
        children: (n) =>
            (0, i.jsx)(o.Z, {
                ...n,
                tag: 'span',
                children: (0, i.jsx)(r.x, {
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
