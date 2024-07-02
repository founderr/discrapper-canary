t.d(n, {
    Z: function () {
        return b;
    }
});
var i = t(735250);
t(470079);
var a = t(120356), r = t.n(a), o = t(442837), s = t(481060), l = t(906732), c = t(1585), d = t(158776), u = t(998502), f = t(445924), p = t(654904), _ = t(486324), m = t(373205);
let C = u.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function b(e) {
    let {
            user: n,
            guild: t,
            displayProfile: a,
            canUsePremiumCustomization: u,
            previewAvatar: b,
            previewAvatarDecoration: g,
            previewTheme: v,
            previewPrimaryColor: x,
            className: h,
            disabledInputs: E,
            isTryItOutFlow: T,
            onUpsellClick: I
        } = e, {analyticsLocations: S} = (0, l.ZP)(), A = (0, o.e7)([d.Z], () => d.Z.getStatus(n.id)), N = null == t || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || u, y = (0, i.jsx)(C, {
            src: b,
            avatarDecoration: g,
            imageClassName: r()(h, { [m.overlay]: !E }),
            size: s.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: A,
            statusTooltip: !1,
            statusBackdropColor: null != x ? (0, s.getStatusBackdropColor)(v) : void 0
        });
    return E ? (0, i.jsx)('div', {
        className: m.avatar,
        children: y
    }) : N ? (0, i.jsx)(s.Popout, {
        renderPopout: e => {
            let {closePopout: n} = e;
            return (0, i.jsx)(f.Z, {
                className: m.menu,
                onClose: n,
                onChangeAvatar: () => (0, p.$r)(_.pC.AVATAR, null == t ? void 0 : t.id, T),
                onChangeAvatarDecoration: () => {
                    (0, c.ps)({
                        guild: null == t ? void 0 : t,
                        analyticsLocations: S,
                        isTryItOutFlow: T
                    });
                }
            });
        },
        children: e => (0, i.jsxs)(s.Clickable, {
            ...e,
            className: r()(m.avatar, m.clickable),
            children: [
                y,
                (0, i.jsx)(s.PencilIcon, {
                    size: 'custom',
                    className: m.overlayIcon,
                    width: 20,
                    height: 20,
                    color: 'white'
                })
            ]
        })
    }) : (0, i.jsxs)(s.Clickable, {
        onClick: I,
        className: r()(m.avatar, m.clickable),
        children: [
            y,
            (0, i.jsx)(s.NitroWheelIcon, {
                size: 'custom',
                className: m.overlayIcon,
                width: 20,
                height: 20,
                color: 'white'
            })
        ]
    });
}
