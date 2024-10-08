a.d(n, {
    Z: function () {
        return A;
    }
});
var t = a(735250);
a(470079);
var s = a(481060),
    c = a(81245),
    o = a(867176),
    i = a(654904),
    r = a(486324),
    d = a(228168),
    l = a(689938),
    u = a(892532);
function A(e) {
    let { user: n, displayProfile: a, guildId: A, canUsePremiumCustomization: f, pendingBanner: p, isTryItOutFlow: E, disabledInputs: _, onUpsellClick: L } = e,
        I = f || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || !1,
        P = I ? s.PencilIcon : s.NitroWheelIcon,
        R = (0, c.Mu)('ProfileCustomizationPreviewBanner', I);
    return (0, t.jsx)(o.Z, {
        user: n,
        displayProfile: a,
        guildId: A,
        profileType: d.y0.BITE_SIZE,
        pendingBanner: p,
        canUsePremiumProfileCustomization: f,
        children:
            !_ &&
            (0, t.jsxs)(s.Clickable, {
                onClick: () => {
                    if (!I && !R) {
                        null == L || L();
                        return;
                    }
                    (0, i.$r)(r.pC.BANNER, A, E);
                },
                className: u.clickable,
                children: [
                    (0, t.jsx)(P, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, t.jsx)(s.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: I || R ? l.Z.Messages.CHANGE_BANNER : l.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                    })
                ]
            })
    });
}
