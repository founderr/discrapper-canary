a.d(n, {
    Z: function () {
        return p;
    }
});
var i = a(735250);
a(470079);
var s = a(120356),
    r = a.n(s),
    o = a(442837),
    l = a(481060),
    t = a(906732),
    u = a(1585),
    c = a(158776),
    d = a(998502),
    A = a(445924),
    E = a(654904),
    _ = a(486324),
    I = a(529934);
let P = d.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function p(e) {
    let { user: n, guild: a, displayProfile: s, canUsePremiumCustomization: d, previewAvatar: p, previewAvatarDecoration: v, previewTheme: N, previewPrimaryColor: m, className: C, disabledInputs: L, isTryItOutFlow: T, onUpsellClick: R } = e,
        { analyticsLocations: f } = (0, t.ZP)(),
        M = (0, o.e7)([c.Z], () => c.Z.getStatus(n.id)),
        S = null == a || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || d,
        Z = (0, i.jsx)(P, {
            src: p,
            avatarDecoration: v,
            imageClassName: r()(C, { [I.overlay]: !L }),
            size: l.AvatarSizes.SIZE_80,
            'aria-label': n.username,
            status: M,
            statusTooltip: !1,
            statusBackdropColor: null != m ? (0, l.getStatusBackdropColor)(N) : void 0
        });
    return L
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
                        onChangeAvatar: () => (0, E.$r)(_.pC.AVATAR, null == a ? void 0 : a.id, T),
                        onChangeAvatarDecoration: () => {
                            (0, u.ps)({
                                guild: null == a ? void 0 : a,
                                analyticsLocations: f,
                                isTryItOutFlow: T
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
                onClick: R,
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
