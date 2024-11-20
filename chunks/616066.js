n.d(e, {
    R: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(979554),
    o = n(481060),
    l = n(1585),
    c = n(125988),
    d = n(998502),
    u = n(388032),
    f = n(446563);
let g = d.ZP.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar,
    p = (t) => {
        let { item: e, user: n, isHighlighted: i = !1, isPurchased: d = !1, avatarSize: p = o.AvatarSizes.SIZE_152, avatarPlaceholderSrc: v } = t,
            h = (0, l.y9)(p),
            {
                avatarDecorationSrc: b,
                eventHandlers: m,
                avatarPlaceholderSrc: S
            } = (0, c.Z)({
                user: n,
                avatarDecorationOverride: (null == e ? void 0 : e.type) === s.Z.AVATAR_DECORATION ? e : void 0,
                size: h,
                onlyAnimateOnHover: !i
            });
        return (0, r.jsx)(g, {
            ...m,
            avatarDecoration: b,
            src: i ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != v ? v : S,
            imageClassName: i ? f.fadeInAvatarImg : void 0,
            className: a()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
            'aria-label': u.intl.string(u.t.lqaIxM)
        });
    };
