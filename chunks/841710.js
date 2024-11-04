n.d(t, {
    Y: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    s = n(129861),
    o = n(604457);
function c(e) {
    let { user: t, status: n, isFocused: r, guildId: a } = e;
    return (0, i.jsxs)('div', {
        className: o.memberItem,
        children: [
            (0, i.jsx)(l.Avatar, {
                src: t.getAvatarURL(a, 24),
                className: o.avatar,
                'aria-label': t.username,
                size: l.AvatarSizes.SIZE_24,
                status: n,
                statusColor: r ? 'currentColor' : void 0
            }),
            (0, i.jsx)(s.Z, {
                user: t,
                hideDiscriminator: !0
            })
        ]
    });
}
function d(e) {
    let { label: t } = e;
    return (0, i.jsxs)('div', {
        className: o.memberItem,
        children: [(0, i.jsx)('div', { className: a()(o.avatar, o.unknown) }), (0, i.jsx)('div', { children: t })]
    });
}
