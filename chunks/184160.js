t.d(n, {
    x: function () {
        return x;
    }
});
var r = t(735250);
t(470079);
var a = t(512722),
    i = t.n(a),
    s = t(780384),
    o = t(481060),
    l = t(410030),
    C = t(973159),
    d = t(74538),
    c = t(987209),
    u = t(598),
    _ = t(409813),
    p = t(614223),
    f = t(689938),
    h = t(117787);
function x(e) {
    let { handleStepChange: n, handleClose: t } = e,
        a = (0, l.ZP)(),
        { activeSubscription: x, selectedSkuId: L, setSelectedPlanId: I, startedPaymentFlowWithPaymentSourcesRef: g } = (0, u.usePaymentContext)(),
        { isGift: E } = (0, c.wD)(),
        m = null != x ? (0, d.Af)(x) : null,
        M = null != m ? (0, d.gq)(m.planId) : null,
        T = null != m ? (0, d.Rd)(m.planId) : null,
        N = (0, p.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: L,
            startedPaymentFlowWithPaymentSources: g.current
        });
    return (
        i()(null != T, 'Expected premium type'),
        (0, r.jsx)(C.Z, {
            premiumType: T,
            titleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({ subscriptionName: M }),
            footer: (0, r.jsxs)('div', {
                className: h.whatYouLoseButtonContainer,
                children: [
                    (0, r.jsx)(o.Button, {
                        onClick: () => {
                            N ? (I((0, p.nA)(L, x)), n(_.h8.REVIEW)) : n(_.h8.PLAN_SELECT);
                        },
                        children: f.Z.Messages.CONTINUE
                    }),
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: (0, s.wj)(a) ? o.Button.Colors.WHITE : o.Button.Colors.PRIMARY,
                        onClick: t,
                        children: f.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                    })
                ]
            }),
            onClose: t,
            isDowngrade: !0
        })
    );
}
