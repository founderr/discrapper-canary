n.d(t, {
    x: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    s = n.n(l),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    C = n(807163),
    d = n(74538),
    u = n(987209),
    c = n(563132),
    p = n(409813),
    x = n(614223),
    _ = n(388032),
    f = n(475536);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, o.ZP)(),
        { activeSubscription: h, selectedSkuId: j, setSelectedPlanId: m, startedPaymentFlowWithPaymentSourcesRef: L } = (0, c.usePaymentContext)(),
        { isGift: E } = (0, u.wD)(),
        S = null != h ? (0, d.Af)(h) : null,
        g = null != S ? (0, d.gq)(S.planId) : null,
        I = null != S ? (0, d.Rd)(S.planId) : null,
        M = (0, x.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        s()(null != I, 'Expected premium type'),
        (0, i.jsx)(C.Z, {
            premiumType: I,
            titleText: _.intl.string(_.t['7VcWW1']),
            subtitleText: _.intl.format(_.t.Qk34Ii, { subscriptionName: g }),
            footer: (0, i.jsxs)('div', {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, i.jsx)(a.Button, {
                        onClick: () => {
                            M ? (m((0, x.nA)(j, h)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: _.intl.string(_.t['3PatS0'])
                    }),
                    (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: (0, r.wj)(l) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
                        onClick: n,
                        children: _.intl.string(_.t.h9tkAA)
                    })
                ]
            }),
            onClose: n,
            isDowngrade: !0
        })
    );
}
