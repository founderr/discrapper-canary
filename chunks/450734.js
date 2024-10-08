a.d(n, {
    Z: function () {
        return P;
    }
});
var i = a(735250);
a(470079);
var s = a(120356),
    r = a.n(s),
    o = a(442837),
    l = a(481060),
    t = a(906732),
    c = a(1585),
    u = a(158776),
    d = a(998502),
    A = a(445924),
    E = a(654904),
    _ = a(486324),
    I = a(529934);
let p = d.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function P(e) {
    let { user: n, guild: a, displayProfile: s, canUsePremiumCustomization: d, previewAvatar: P, previewAvatarDecoration: v, previewTheme: m, previewPrimaryColor: N, className: C, disabledInputs: T, isTryItOutFlow: f, onUpsellClick: L } = e,
        { analyticsLocations: R } = (0, t.ZP)(),
        M = (0, o.e7)([u.Z], () => u.Z.getStatus(n.id)),
        S = null == a || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || d,
        Z = (0, i.jsx)(p, {
            src: P,
            avatarDecoration: v,
            imageClassName: r()(C, { [I.overlay]: !T }),
            size: l.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: M,
            statusTooltip: !1,
            statusBackdropColor: null != N ? (0, l.getStatusBackdropColor)(m) : void 0
        });
    return T
        ? (0, i.jsx)('div', {
              className: I.avatar,
              children: Z
          })
        : S
          ? (0, i.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(A.Z, {
                        className: I.menu,
                        onClose: n,
                        onChangeAvatar: () => (0, E.$r)(_.pC.AVATAR, null == a ? void 0 : a.id, f),
                        onChangeAvatarDecoration: () => {
                            (0, c.ps)({
                                guild: null == a ? void 0 : a,
                                analyticsLocations: R,
                                isTryItOutFlow: f
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, i.jsxs)(l.Clickable, {
                        ...e,
                        className: r()(I.avatar, I.clickable),
                        children: [
                            Z,
                            (0, i.jsx)(l.PencilIcon, {
                                size: 'custom',
                                className: I.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, i.jsxs)(l.Clickable, {
                onClick: L,
                className: r()(I.avatar, I.clickable),
                children: [
                    Z,
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'custom',
                        className: I.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
