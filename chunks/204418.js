var i = r(200651);
r(192379);
var a = r(481060),
    s = r(518950),
    o = r(998502),
    l = r(388032);
let u = o.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar,
    c = (e) => {
        let { user: n, guildId: r, avatarDecorationOverride: o, status: c, avatarSize: d = a.AvatarSizes.SIZE_120, 'aria-hidden': f = !1, className: _, animateOnHover: h = !1 } = e,
            {
                avatarDecorationSrc: p,
                avatarSrc: m,
                eventHandlers: g
            } = (0, s.Z)({
                user: n,
                guildId: r,
                size: d,
                showPending: !0,
                avatarDecorationOverride: o,
                animateOnHover: h
            });
        return (0, i.jsx)(u, {
            avatarDecoration: p,
            src: m,
            size: d,
            status: c,
            'aria-label': f ? void 0 : l.intl.string(l.t.lqaIxM),
            'aria-hidden': f,
            className: _,
            ...g
        });
    };
n.Z = c;
