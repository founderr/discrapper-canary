t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(793030),
    r = t(256139),
    o = t(866040);
function s(e) {
    let { user: n, text: t, channel: s, textClassName: c, onPopoutClosed: u } = e,
        d = (0, i.useMemo)(() => [n], [n]);
    return (0, l.jsx)(o.Z, {
        participants: d,
        channel: s,
        onPopoutClosed: u,
        children: (e) =>
            (0, l.jsx)(r.Z, {
                ...e,
                tag: 'span',
                children: (0, l.jsx)(a.x, {
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
