n.d(s, {
    x: function () {
        return I;
    }
});
var t = n(735250);
n(470079);
var l = n(512722),
    i = n.n(l),
    C = n(780384),
    r = n(481060),
    a = n(410030),
    o = n(973159),
    _ = n(74538),
    d = n(987209),
    u = n(598),
    c = n(409813),
    p = n(614223),
    x = n(689938),
    L = n(117787);
function I(e) {
    let { handleStepChange: s, handleClose: n } = e,
        l = (0, a.ZP)(),
        { activeSubscription: I, selectedSkuId: E, setSelectedPlanId: h, startedPaymentFlowWithPaymentSourcesRef: f } = (0, u.usePaymentContext)(),
        { isGift: M } = (0, d.wD)(),
        T = null != I ? (0, _.Af)(I) : null,
        N = null != T ? (0, _.gq)(T.planId) : null,
        j = null != T ? (0, _.Rd)(T.planId) : null,
        A = (0, p.Kp)({
            isTrial: !1,
            isGift: M,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: f.current
        });
    return (
        i()(null != j, 'Expected premium type'),
        (0, t.jsx)(o.Z, {
            premiumType: j,
            titleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({ subscriptionName: N }),
            footer: (0, t.jsxs)('div', {
                className: L.whatYouLoseButtonContainer,
                children: [
                    (0, t.jsx)(r.Button, {
                        onClick: () => {
                            A ? (h((0, p.nA)(E, I)), s(c.h8.REVIEW)) : s(c.h8.PLAN_SELECT);
                        },
                        children: x.Z.Messages.CONTINUE
                    }),
                    (0, t.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        color: (0, C.wj)(l) ? r.Button.Colors.WHITE : r.Button.Colors.PRIMARY,
                        onClick: n,
                        children: x.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                    })
                ]
            }),
            onClose: n,
            isDowngrade: !0
        })
    );
}
