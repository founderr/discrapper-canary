n.d(t, {
    Z: function () {
        return E;
    }
});
var s = n(735250);
n(470079);
var a = n(481060),
    r = n(81245),
    i = n(867176),
    l = n(654904),
    o = n(486324),
    c = n(228168),
    d = n(689938),
    _ = n(892532);
function E(e) {
    let { user: t, displayProfile: n, guildId: E, canUsePremiumCustomization: u, pendingBanner: T, isTryItOutFlow: I, disabledInputs: R, onUpsellClick: g } = e,
        N = u || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1,
        C = N ? a.PencilIcon : a.NitroWheelIcon,
        m = (0, r.Mu)('ProfileCustomizationPreviewBanner', N);
    return (0, s.jsx)(i.Z, {
        user: t,
        displayProfile: n,
        guildId: E,
        profileType: c.y0.BITE_SIZE,
        pendingBanner: T,
        canUsePremiumProfileCustomization: u,
        children:
            !R &&
            (0, s.jsxs)(a.Clickable, {
                onClick: () => {
                    if (!N && !m) {
                        null == g || g();
                        return;
                    }
                    (0, l.$r)(o.pC.BANNER, E, I);
                },
                className: _.clickable,
                children: [
                    (0, s.jsx)(C, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, s.jsx)(a.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: N || m ? d.Z.Messages.CHANGE_BANNER : d.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                    })
                ]
            })
    });
}
