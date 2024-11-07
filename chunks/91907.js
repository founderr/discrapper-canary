l.d(n, {
    Z: function () {
        return o;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(793030),
    a = l(256139),
    s = l(866040);
function o(e) {
    let { user: n, text: l, channel: o, textClassName: u, onPopoutClosed: c } = e,
        d = (0, i.useMemo)(() => [n], [n]);
    return (0, t.jsx)(s.Z, {
        participants: d,
        channel: o,
        onPopoutClosed: c,
        children: (e) =>
            (0, t.jsx)(a.Z, {
                ...e,
                tag: 'span',
                children: (0, t.jsx)(r.xv, {
                    className: u,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: l
                })
            })
    });
}
