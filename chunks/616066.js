n.d(t, {
    R: function () {
        return p;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(979554),
    l = n(481060),
    i = n(1585),
    c = n(125988),
    d = n(998502),
    u = n(689938),
    f = n(777381);
let g = d.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar,
    p = (e) => {
        let { item: t, user: n, isHighlighted: r = !1, isPurchased: d = !1, avatarSize: p = l.AvatarSizes.SIZE_152, avatarPlaceholderSrc: C } = e,
            m = (0, i.y9)(p),
            {
                avatarDecorationSrc: E,
                eventHandlers: v,
                avatarPlaceholderSrc: h
            } = (0, c.Z)({
                user: n,
                avatarDecorationOverride: (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION ? t : void 0,
                size: m,
                onlyAnimateOnHover: !r
            });
        return (0, a.jsx)(g, {
            ...v,
            avatarDecoration: E,
            src: r ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != C ? C : h,
            imageClassName: r ? f.fadeInAvatarImg : void 0,
            className: s()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
            'aria-label': u.Z.Messages.USER_SETTINGS_AVATAR
        });
    };
