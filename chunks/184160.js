n.d(t, {
    x: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    s = n.n(l),
    r = n(780384),
    C = n(481060),
    a = n(410030),
    o = n(807163),
    d = n(74538),
    u = n(987209),
    c = n(563132),
    p = n(409813),
    x = n(614223),
    _ = n(388032),
    h = n(194778);
function f(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, a.ZP)(),
        { activeSubscription: f, selectedSkuId: j, setSelectedPlanId: L, startedPaymentFlowWithPaymentSourcesRef: m } = (0, c.usePaymentContext)(),
        { isGift: g } = (0, u.wD)(),
        E = null != f ? (0, d.Af)(f) : null,
        S = null != E ? (0, d.gq)(E.planId) : null,
        y = null != E ? (0, d.Rd)(E.planId) : null,
        M = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: m.current
        });
    return (
        s()(null != y, 'Expected premium type'),
        (0, i.jsx)(o.Z, {
            premiumType: y,
            titleText: _.intl.string(_.t['7VcWW1']),
            subtitleText: _.intl.format(_.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, i.jsxs)('div', {
                className: h.whatYouLoseButtonContainer,
                children: [
                    (0, i.jsx)(C.Button, {
                        onClick: () => {
                            M ? (L((0, x.nA)(j, f)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: _.intl.string(_.t['3PatS0'])
                    }),
                    (0, i.jsx)(C.Button, {
                        look: C.Button.Looks.LINK,
                        color: (0, r.wj)(l) ? C.Button.Colors.WHITE : C.Button.Colors.PRIMARY,
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
