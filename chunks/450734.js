t.d(n, {
    Z: function () {
        return b;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(442837),
    l = t(481060),
    s = t(906732),
    d = t(1585),
    c = t(158776),
    u = t(998502),
    f = t(445924),
    p = t(654904),
    m = t(486324),
    g = t(563431);
let _ = u.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function b(e) {
    let { user: n, guild: t, displayProfile: a, canUsePremiumCustomization: u, previewAvatar: b, previewAvatarDecoration: h, previewTheme: x, previewPrimaryColor: C, className: v, disabledInputs: S, isTryItOutFlow: I, onUpsellClick: j } = e,
        { analyticsLocations: T } = (0, s.ZP)(),
        y = (0, o.e7)([c.Z], () => c.Z.getStatus(n.id)),
        E = null == t || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || u,
        N = (0, i.jsx)(_, {
            src: b,
            avatarDecoration: h,
            imageClassName: r()(v, { [g.overlay]: !S }),
            size: l.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: y,
            statusTooltip: !1,
            statusBackdropColor: null != C ? (0, l.getStatusBackdropColor)(x) : void 0
        });
    return S
        ? (0, i.jsx)('div', {
              className: g.avatar,
              children: N
          })
        : E
          ? (0, i.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(f.Z, {
                        className: g.menu,
                        onClose: n,
                        onChangeAvatar: () => (0, p.$r)(m.pC.AVATAR, null == t ? void 0 : t.id, I),
                        onChangeAvatarDecoration: () => {
                            (0, d.ps)({
                                guild: null == t ? void 0 : t,
                                analyticsLocations: T,
                                isTryItOutFlow: I
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, i.jsxs)(l.Clickable, {
                        ...e,
                        className: r()(g.avatar, g.clickable),
                        children: [
                            N,
                            (0, i.jsx)(l.PencilIcon, {
                                size: 'custom',
                                className: g.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, i.jsxs)(l.Clickable, {
                onClick: j,
                className: r()(g.avatar, g.clickable),
                children: [
                    N,
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'custom',
                        className: g.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
