n.d(r, {
    Z: function () {
        return y;
    }
}),
    n(47120),
    n(411104);
var l = n(200651),
    o = n(192379),
    t = n(734530),
    s = n(120356),
    a = n.n(s),
    c = n(846519),
    i = n(481060),
    d = n(609194),
    u = n(881052),
    p = n(128069),
    m = n(563132),
    f = n(409813);
n(51499), n(614277);
var h = n(122289),
    x = n(70956),
    _ = n(981631),
    N = n(388032),
    b = n(719919);
let v = new Set([f.h8.SKU_SELECT, f.h8.AWAITING_AUTHENTICATION, f.h8.AWAITING_PURCHASE_TOKEN_AUTH, f.h8.CONFIRM]);
function y(e) {
    let { steps: r, currentStep: n, body: s, paymentError: y, header: C, footer: g, isGift: j = !1, giftMessage: S = N.intl.string(N.t.DrgnS0), hideBreadcrumbs: E = !1, isLoading: I = !1, purchaseError: k, purchaseErrorBlockRef: P, planError: A, onScroll: T, scrollerClassName: B, hasCurrencies: R = !1 } = e,
        D = null;
    null != y && null == (0, f.ly)(y) ? (D = y) : null != k ? (D = k) : null != A && (D = A);
    let M = null != D ? D.message : '';
    null != D && D instanceof u.HF && (D.code === p.SM.CARD_DECLINED && R && (M += ' '.concat(N.intl.string(N.t.iWvwQU))), D.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = N.intl.string(N.t.ypuSd3)), D.code === _.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = N.intl.string(N.t.mXMmWF)));
    let { stripe: L } = (0, m.usePaymentContext)();
    I = I || null == L;
    let O = o.useRef(new c.V7());
    o.useEffect(() => {
        let e = O.current;
        return (
            null != L || e.isStarted()
                ? null != L && e.stop()
                : e.start(10 * x.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, h.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [L]);
    let w = r.includes(f.h8.PAYMENT_TYPE) ? f.h8.PAYMENT_TYPE : f.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(t.Elements, {
        options: _.OBo,
        stripe: L,
        children: [
            C,
            (0, l.jsxs)('div', {
                className: a()('paymentModalContent', b.content),
                children: [
                    j && n !== f.h8.CONFIRM
                        ? (0, l.jsx)(d.Z, {
                              className: b.paymentNote,
                              iconSize: d.Z.Sizes.SMALL,
                              icon: i.GiftIcon,
                              color: null == S ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                              children: S
                          })
                        : null,
                    E
                        ? null
                        : (0, l.jsx)('div', {
                              className: b.breadcrumbsWrapper,
                              children: (0, l.jsx)(i.Breadcrumbs, {
                                  activeId: f.Ck.has(n) ? w : n,
                                  breadcrumbs: r
                                      .filter((e) => !f.Ck.has(e) && !v.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, f.DJ)(e)
                                      }))
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: b.bodyWrapper,
                        children: [
                            null == D
                                ? null
                                : (0, l.jsx)('div', {
                                      className: b.errorBlockWrapper,
                                      children: (0, l.jsx)(i.FormErrorBlock, {
                                          ref: P,
                                          children: M
                                      })
                                  }),
                            I
                                ? (0, l.jsx)(i.Spinner, { className: b.loadingBlock })
                                : (0, l.jsx)(i.Sequencer, {
                                      className: b.sequencer,
                                      staticClassName: b.sequencerStatic,
                                      animatedNodeClassName: b.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: r,
                                      sideMargin: 20,
                                      children: (0, l.jsx)(i.AdvancedScrollerThin, {
                                          onScroll: T,
                                          className: a()(b.scroller, B),
                                          children: s
                                      })
                                  })
                        ]
                    })
                ]
            }),
            g
        ]
    });
}
