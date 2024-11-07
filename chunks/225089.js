t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    r = t(81245),
    o = t(867176),
    l = t(654904),
    s = t(486324),
    d = t(228168),
    c = t(388032),
    u = t(90592);
function f(e) {
    let { user: n, displayProfile: t, guildId: f, canUsePremiumCustomization: p, pendingBanner: m, isTryItOutFlow: g, disabledInputs: _, onUpsellClick: b } = e,
        h = p || (null == t ? void 0 : t.canUsePremiumProfileCustomization) || !1,
        x = h ? a.PencilIcon : a.NitroWheelIcon,
        C = (0, r.Mu)('ProfileCustomizationPreviewBanner', h);
    return (0, i.jsx)(o.Z, {
        user: n,
        displayProfile: t,
        guildId: f,
        profileType: d.y0.BITE_SIZE,
        pendingBanner: m,
        canUsePremiumProfileCustomization: p,
        children:
            !_ &&
            (0, i.jsxs)(a.Clickable, {
                onClick: () => {
                    if (!h && !C) {
                        null == b || b();
                        return;
                    }
                    (0, l.$r)(s.pC.BANNER, f, g);
                },
                className: u.clickable,
                children: [
                    (0, i.jsx)(x, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: h || C ? c.intl.string(c.t.N0bC3N) : c.intl.string(c.t.O1sT5u)
                    })
                ]
            })
    });
}
