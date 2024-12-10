n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(924628),
    s = n(230711),
    c = n(630186),
    d = n(187819),
    u = n(981631),
    h = n(921944),
    m = n(388032),
    p = n(271249);
function g(e) {
    let { className: t, markAsDismissed: n } = e,
        r = (0, d._p)({ location: 'consent-card' });
    return (0, i.jsxs)(c.Z, {
        className: l()(p.card, t),
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-md/semibold',
                className: p.header,
                children: m.intl.string(m.t.HcbnMD)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: m.intl.format(m.t.NkFrzM, {
                    onPrivacyClick: () => {
                        r ? s.Z.open(u.oAB.DATA_AND_PRIVACY) : s.Z.open(u.oAB.PRIVACY_AND_SAFETY);
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        onClick: () => (0, o.g)([u.pjP.PERSONALIZATION], []),
                        children: m.intl.string(m.t.ebojgI)
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: () => n(h.L.DISMISS),
                        look: a.Button.Looks.LINK,
                        children: m.intl.string(m.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
