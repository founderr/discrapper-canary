t.d(a, {
    Z: function () {
        return T;
    }
}),
    t(47120),
    t(411104);
var n = t(200651),
    s = t(192379),
    r = t(734530),
    l = t(120356),
    o = t.n(l),
    i = t(846519),
    c = t(481060),
    u = t(609194),
    d = t(881052),
    E = t(128069),
    _ = t(598),
    A = t(409813);
t(51499), t(614277);
var m = t(122289),
    N = t(70956),
    p = t(981631),
    h = t(689938),
    C = t(896769);
let I = new Set([A.h8.SKU_SELECT, A.h8.AWAITING_AUTHENTICATION, A.h8.AWAITING_PURCHASE_TOKEN_AUTH, A.h8.CONFIRM]);
function T(e) {
    let { steps: a, currentStep: t, body: l, paymentError: T, header: P, footer: S, isGift: R = !1, giftMessage: f = h.Z.Messages.PREMIUM_PAYMENT_IS_GIFT, hideBreadcrumbs: M = !1, isLoading: O = !1, purchaseError: b, purchaseErrorBlockRef: y, planError: g, onScroll: L, scrollerClassName: D, hasCurrencies: v = !1 } = e,
        Z = null;
    null != T && null == (0, A.ly)(T) ? (Z = T) : null != b ? (Z = b) : null != g && (Z = g);
    let x = null != Z ? Z.message : '';
    null != Z && Z instanceof d.HF && (Z.code === E.SM.CARD_DECLINED && v && (x += ' '.concat(h.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), Z.code === E.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (x = h.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), Z.code === p.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (x = h.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
    let { stripe: Y } = (0, _.usePaymentContext)();
    O = O || null == Y;
    let U = s.useRef(new i.V7());
    s.useEffect(() => {
        let e = U.current;
        return (
            null != Y || e.isStarted()
                ? null != Y && e.stop()
                : e.start(10 * N.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, m.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [Y]);
    let B = a.includes(A.h8.PAYMENT_TYPE) ? A.h8.PAYMENT_TYPE : A.h8.ADD_PAYMENT_STEPS;
    return (0, n.jsxs)(r.Elements, {
        options: p.OBo,
        stripe: Y,
        children: [
            P,
            (0, n.jsxs)('div', {
                className: o()('paymentModalContent', C.content),
                children: [
                    R && t !== A.h8.CONFIRM
                        ? (0, n.jsx)(u.Z, {
                              className: C.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.GiftIcon,
                              color: null == f ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: f
                          })
                        : null,
                    M
                        ? null
                        : (0, n.jsx)('div', {
                              className: C.breadcrumbsWrapper,
                              children: (0, n.jsx)(c.Breadcrumbs, {
                                  activeId: A.Ck.has(t) ? B : t,
                                  breadcrumbs: a
                                      .filter((e) => !A.Ck.has(e) && !I.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, A.DJ)(e)
                                      }))
                              })
                          }),
                    (0, n.jsxs)('div', {
                        className: C.bodyWrapper,
                        children: [
                            null == Z
                                ? null
                                : (0, n.jsx)('div', {
                                      className: C.errorBlockWrapper,
                                      children: (0, n.jsx)(c.FormErrorBlock, {
                                          ref: y,
                                          children: x
                                      })
                                  }),
                            O
                                ? (0, n.jsx)(c.Spinner, { className: C.loadingBlock })
                                : (0, n.jsx)(c.Sequencer, {
                                      className: C.sequencer,
                                      staticClassName: C.sequencerStatic,
                                      animatedNodeClassName: C.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: t,
                                      steps: a,
                                      sideMargin: 20,
                                      children: (0, n.jsx)(c.AdvancedScrollerThin, {
                                          onScroll: L,
                                          className: o()(C.scroller, D),
                                          children: l
                                      })
                                  })
                        ]
                    })
                ]
            }),
            S
        ]
    });
}
