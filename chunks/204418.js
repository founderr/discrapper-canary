var r = n(200651);
n(192379);
var i = n(481060),
    a = n(518950),
    s = n(998502),
    o = n(388032);
let l = s.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;
t.Z = (e) => {
    let { user: t, guildId: n, avatarDecorationOverride: s, status: u, avatarSize: c = i.AvatarSizes.SIZE_120, 'aria-hidden': d = !1, className: f, animateOnHover: _ = !1 } = e,
        {
            avatarDecorationSrc: h,
            avatarSrc: p,
            eventHandlers: m
        } = (0, a.Z)({
            user: t,
            guildId: n,
            size: c,
            showPending: !0,
            avatarDecorationOverride: s,
            animateOnHover: _
        });
    return (0, r.jsx)(l, {
        avatarDecoration: h,
        src: p,
        size: c,
        status: u,
        'aria-label': d ? void 0 : o.intl.string(o.t.lqaIxM),
        'aria-hidden': d,
        className: f,
        ...m
    });
};
