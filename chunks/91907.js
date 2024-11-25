t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(793030),
    a = t(256139),
    o = t(866040);
function s(e) {
    let { user: n, text: t, channel: s, textClassName: c, onPopoutClosed: u } = e,
        d = (0, i.useMemo)(() => [n], [n]);
    return (0, l.jsx)(o.Z, {
        participants: d,
        channel: s,
        onPopoutClosed: u,
        children: (e) =>
            (0, l.jsx)(a.Z, {
                ...e,
                tag: 'span',
                children: (0, l.jsx)(r.xv, {
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
