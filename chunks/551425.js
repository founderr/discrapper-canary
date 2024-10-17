var i = s(735250);
s(470079);
var l = s(979554),
    n = s(442837),
    a = s(481060),
    r = s(1585),
    o = s(125988),
    d = s(876917),
    u = s(594174),
    c = s(597688),
    h = s(464029);
let p = a.AvatarSizes.SIZE_152,
    f = (0, r.y9)(p),
    m = (e) => {
        let { item: t } = e,
            s = (0, n.e7)([u.default], () => u.default.getCurrentUser()),
            {
                avatarDecorationSrc: l,
                avatarPlaceholderSrc: r,
                eventHandlers: d
            } = (0, o.Z)({
                user: s,
                avatarDecorationOverride: t,
                size: f
            });
        return (0, i.jsx)('div', {
            className: h.avatarDecorationPreview,
            children: (0, i.jsx)(a.Avatar, {
                ...d,
                'aria-label': t.label,
                src: r,
                avatarDecoration: l,
                size: p
            })
        });
    },
    g = (e) => {
        let { item: t } = e;
        return (0, i.jsx)('div', {
            className: h.profileEffectPreview,
            children: (0, i.jsx)(d.Z, {
                isHovering: !0,
                profileEffectId: null == t ? void 0 : t.id
            })
        });
    };
t.Z = (e) => {
    let { giftCode: t } = e,
        s = (0, n.e7)([c.Z], () => c.Z.getProduct(t.skuId)),
        a = null == s ? void 0 : s.items[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [(null == a ? void 0 : a.type) === l.Z.AVATAR_DECORATION && (0, i.jsx)(m, { item: a }), (null == a ? void 0 : a.type) === l.Z.PROFILE_EFFECT && (0, i.jsx)(g, { item: a })]
    });
};
