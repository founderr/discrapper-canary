a.d(n, {
    Z: function () {
        return L;
    }
});
var t = a(735250);
a(470079);
var s = a(120356),
    c = a.n(s),
    o = a(442837),
    i = a(481060),
    r = a(906732),
    d = a(1585),
    l = a(158776),
    u = a(998502),
    A = a(445924),
    f = a(654904),
    p = a(486324),
    E = a(529934);
let _ = u.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;
function L(e) {
    let { user: n, guild: a, displayProfile: s, canUsePremiumCustomization: u, previewAvatar: L, previewAvatarDecoration: I, previewTheme: P, previewPrimaryColor: R, className: b, disabledInputs: Z, isTryItOutFlow: N, onUpsellClick: m } = e,
        { analyticsLocations: T } = (0, r.ZP)(),
        v = (0, o.e7)([l.Z], () => l.Z.getStatus(n.id)),
        M = null == a || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || u,
        C = (0, t.jsx)(_, {
            src: L,
            avatarDecoration: I,
            imageClassName: c()(b, { [E.overlay]: !Z }),
            size: i.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: v,
            statusTooltip: !1,
            statusBackdropColor: null != R ? (0, i.getStatusBackdropColor)(P) : void 0
        });
    return Z
        ? (0, t.jsx)('div', {
              className: E.avatar,
              children: C
          })
        : M
          ? (0, t.jsx)(i.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, t.jsx)(A.Z, {
                        className: E.menu,
                        onClose: n,
                        onChangeAvatar: () => (0, f.$r)(p.pC.AVATAR, null == a ? void 0 : a.id, N),
                        onChangeAvatarDecoration: () => {
                            (0, d.ps)({
                                guild: null == a ? void 0 : a,
                                analyticsLocations: T,
                                isTryItOutFlow: N
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, t.jsxs)(i.Clickable, {
                        ...e,
                        className: c()(E.avatar, E.clickable),
                        children: [
                            C,
                            (0, t.jsx)(i.PencilIcon, {
                                size: 'custom',
                                className: E.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, t.jsxs)(i.Clickable, {
                onClick: m,
                className: c()(E.avatar, E.clickable),
                children: [
                    C,
                    (0, t.jsx)(i.NitroWheelIcon, {
                        size: 'custom',
                        className: E.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
