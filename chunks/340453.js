n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(200651);
n(192379);
var a = n(481060),
    r = n(518950),
    i = n(998502),
    l = n(631885),
    o = n(329242),
    c = n(539559);
let _ = i.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function d(e) {
    let { otherUser: t, status: n } = e,
        i = (0, l.j_)(t.id, n),
        {
            avatarSrc: d,
            avatarDecorationSrc: E,
            eventHandlers: u
        } = (0, r.Z)({
            user: t,
            size: a.AvatarSizes.SIZE_40,
            animateOnHover: !0
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', {
                ...u,
                children: (0, s.jsx)(_, {
                    className: c.avatar,
                    src: d,
                    avatarDecoration: E,
                    size: a.AvatarSizes.SIZE_40,
                    'aria-label': t.username
                })
            }),
            (0, s.jsxs)('div', {
                className: c.userPreview,
                children: [
                    (0, s.jsx)('div', {
                        className: c.userContainerWithTimestamp,
                        children: (0, s.jsx)(o.Z, { user: t })
                    }),
                    (0, s.jsx)(a.Text, {
                        className: c.__invalid_timestamp,
                        color: 'text-muted',
                        variant: 'text-xs/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
