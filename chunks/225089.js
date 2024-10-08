a.d(n, {
    Z: function () {
        return A;
    }
});
var i = a(735250);
a(470079);
var s = a(481060),
    r = a(81245),
    o = a(867176),
    l = a(654904),
    t = a(486324),
    c = a(228168),
    u = a(689938),
    d = a(892532);
function A(e) {
    let { user: n, displayProfile: a, guildId: A, canUsePremiumCustomization: E, pendingBanner: _, isTryItOutFlow: I, disabledInputs: p, onUpsellClick: P } = e,
        v = E || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || !1,
        m = v ? s.PencilIcon : s.NitroWheelIcon,
        N = (0, r.Mu)('ProfileCustomizationPreviewBanner', v);
    return (0, i.jsx)(o.Z, {
        user: n,
        displayProfile: a,
        guildId: A,
        profileType: c.y0.BITE_SIZE,
        pendingBanner: _,
        canUsePremiumProfileCustomization: E,
        children:
            !p &&
            (0, i.jsxs)(s.Clickable, {
                onClick: () => {
                    if (!v && !N) {
                        null == P || P();
                        return;
                    }
                    (0, l.$r)(t.pC.BANNER, A, I);
                },
                className: d.clickable,
                children: [
                    (0, i.jsx)(m, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, i.jsx)(s.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: v || N ? u.Z.Messages.CHANGE_BANNER : u.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                    })
                ]
            })
    });
}
