n.d(t, {
    R: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    o = n(979554),
    i = n(481060),
    l = n(1585),
    c = n(125988),
    d = n(998502),
    u = n(689938),
    f = n(446563);
let g = d.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
    p = (e) => {
        let { item: t, user: n, isHighlighted: a = !1, isPurchased: d = !1, avatarSize: p = i.AvatarSizes.SIZE_152, avatarPlaceholderSrc: v } = e,
            C = (0, l.y9)(p),
            {
                avatarDecorationSrc: m,
                eventHandlers: E,
                avatarPlaceholderSrc: h
            } = (0, c.Z)({
                user: n,
                avatarDecorationOverride: (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION ? t : void 0,
                size: C,
                onlyAnimateOnHover: !a
            });
        return (0, r.jsx)(g, {
            ...E,
            avatarDecoration: m,
            src: a ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != v ? v : h,
            imageClassName: a ? f.fadeInAvatarImg : void 0,
            className: s()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
            'aria-label': u.Z.Messages.USER_SETTINGS_AVATAR
        });
    };
