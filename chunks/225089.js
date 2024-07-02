t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), r = t(78675), o = t(654904), s = t(486324), l = t(228168), c = t(689938), d = t(591745);
function u(e) {
    let {
            user: n,
            displayProfile: t,
            guildId: u,
            canUsePremiumCustomization: f,
            pendingBanner: p,
            hasProfileEffect: _,
            isTryItOutFlow: m,
            disabledInputs: C,
            onUpsellClick: b
        } = e, g = f || (null == t ? void 0 : t.canUsePremiumProfileCustomization) || !1, v = g ? a.PencilIcon : a.NitroWheelIcon;
    return (0, i.jsx)(r.Z, {
        user: n,
        displayProfile: t,
        guildId: u,
        profileType: l.y0.BITE_SIZE,
        pendingBanner: p,
        hasProfileEffect: _,
        canUsePremiumCustomization: f,
        children: !C && (0, i.jsxs)(a.Clickable, {
            onClick: () => {
                if (!g) {
                    null == b || b();
                    return;
                }
                (0, o.$r)(s.pC.BANNER, u, m);
            },
            className: d.clickable,
            children: [
                (0, i.jsx)(v, {
                    size: 'xs',
                    color: 'white'
                }),
                (0, i.jsx)(a.Heading, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: g ? c.Z.Messages.CHANGE_BANNER : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                })
            ]
        })
    });
}
