n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(442837),
    l = n(481060),
    o = n(906732),
    c = n(1585),
    d = n(158776),
    _ = n(998502),
    E = n(445924),
    u = n(654904),
    T = n(486324),
    I = n(529934);
let R = _.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function g(e) {
    let { user: t, guild: n, displayProfile: a, canUsePremiumCustomization: _, previewAvatar: g, previewAvatarDecoration: N, previewTheme: C, previewPrimaryColor: m, className: f, disabledInputs: A, isTryItOutFlow: p, onUpsellClick: M } = e,
        { analyticsLocations: S } = (0, o.ZP)(),
        h = (0, i.e7)([d.Z], () => d.Z.getStatus(t.id)),
        b = null == n || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || _,
        x = (0, s.jsx)(R, {
            src: g,
            avatarDecoration: N,
            imageClassName: r()(f, { [I.overlay]: !A }),
            size: l.AvatarSizes.SIZE_80,
            'aria-label': t.username,
            status: h,
            statusTooltip: !1,
            statusBackdropColor: null != m ? (0, l.getStatusBackdropColor)(C) : void 0
        });
    return A
        ? (0, s.jsx)('div', {
              className: I.avatar,
              children: x
          })
        : b
          ? (0, s.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, s.jsx)(E.Z, {
                        className: I.menu,
                        onClose: t,
                        onChangeAvatar: () => (0, u.$r)(T.pC.AVATAR, null == n ? void 0 : n.id, p),
                        onChangeAvatarDecoration: () => {
                            (0, c.ps)({
                                guild: null == n ? void 0 : n,
                                analyticsLocations: S,
                                isTryItOutFlow: p
                            });
                        }
                    });
                },
                children: (e) =>
                    (0, s.jsxs)(l.Clickable, {
                        ...e,
                        className: r()(I.avatar, I.clickable),
                        children: [
                            x,
                            (0, s.jsx)(l.PencilIcon, {
                                size: 'custom',
                                className: I.overlayIcon,
                                width: 20,
                                height: 20,
                                color: 'white'
                            })
                        ]
                    })
            })
          : (0, s.jsxs)(l.Clickable, {
                onClick: M,
                className: r()(I.avatar, I.clickable),
                children: [
                    x,
                    (0, s.jsx)(l.NitroWheelIcon, {
                        size: 'custom',
                        className: I.overlayIcon,
                        width: 20,
                        height: 20,
                        color: 'white'
                    })
                ]
            });
}
