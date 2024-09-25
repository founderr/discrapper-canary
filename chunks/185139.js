n.d(r, {
    Z: function () {
        return T;
    }
}),
    n(47120),
    n(411104);
var o = n(735250),
    l = n(470079),
    s = n(160612),
    c = n(120356),
    a = n.n(c),
    t = n(846519),
    i = n(481060),
    d = n(609194),
    u = n(881052),
    p = n(128069),
    _ = n(598),
    m = n(409813);
n(51499), n(614277);
var E = n(122289),
    N = n(70956),
    h = n(981631),
    f = n(689938),
    I = n(896769);
let x = new Set([m.h8.SKU_SELECT, m.h8.AWAITING_AUTHENTICATION, m.h8.AWAITING_PURCHASE_TOKEN_AUTH, m.h8.CONFIRM]);
function T(e) {
    let { steps: r, currentStep: n, body: c, paymentError: T, header: S, footer: C, isGift: M = !1, giftMessage: A = f.Z.Messages.PREMIUM_PAYMENT_IS_GIFT, hideBreadcrumbs: g = !1, isLoading: R = !1, purchaseError: j, purchaseErrorBlockRef: P, planError: L, onScroll: b, scrollerClassName: k, hasCurrencies: D = !1 } = e,
        v = null;
    null != T && null == (0, m.ly)(T) ? (v = T) : null != j ? (v = j) : null != L && (v = L);
    let y = null != v ? v.message : '';
    null != v && v instanceof u.HF && (v.code === p.SM.CARD_DECLINED && D && (y += ' '.concat(f.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), v.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = f.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), v.code === h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = f.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
    let { stripe: B } = (0, _.usePaymentContext)();
    R = R || null == B;
    let O = l.useRef(new t.V7());
    l.useEffect(() => {
        let e = O.current;
        return (
            null != B || e.isStarted()
                ? null != B && e.stop()
                : e.start(10 * N.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, E.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [B]);
    let U = r.includes(m.h8.PAYMENT_TYPE) ? m.h8.PAYMENT_TYPE : m.h8.ADD_PAYMENT_STEPS;
    return (0, o.jsxs)(s.Elements, {
        options: h.OBo,
        stripe: B,
        children: [
            S,
            (0, o.jsxs)('div', {
                className: a()('paymentModalContent', I.content),
                children: [
                    M && n !== m.h8.CONFIRM
                        ? (0, o.jsx)(d.Z, {
                              className: I.paymentNote,
                              iconSize: d.Z.Sizes.SMALL,
                              icon: i.GiftIcon,
                              color: null == A ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                              children: A
                          })
                        : null,
                    g
                        ? null
                        : (0, o.jsx)('div', {
                              className: I.breadcrumbsWrapper,
                              children: (0, o.jsx)(i.Breadcrumbs, {
                                  activeId: m.Ck.has(n) ? U : n,
                                  breadcrumbs: r
                                      .filter((e) => !m.Ck.has(e) && !x.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, m.DJ)(e)
                                      }))
                              })
                          }),
                    (0, o.jsxs)('div', {
                        className: I.bodyWrapper,
                        children: [
                            null == v
                                ? null
                                : (0, o.jsx)('div', {
                                      className: I.errorBlockWrapper,
                                      children: (0, o.jsx)(i.FormErrorBlock, {
                                          ref: P,
                                          children: y
                                      })
                                  }),
                            R
                                ? (0, o.jsx)(i.Spinner, { className: I.loadingBlock })
                                : (0, o.jsx)(i.Sequencer, {
                                      className: I.sequencer,
                                      staticClassName: I.sequencerStatic,
                                      animatedNodeClassName: I.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: r,
                                      sideMargin: 20,
                                      children: (0, o.jsx)(i.AdvancedScrollerThin, {
                                          onScroll: b,
                                          className: a()(I.scroller, k),
                                          children: c
                                      })
                                  })
                        ]
                    })
                ]
            }),
            C
        ]
    });
}
