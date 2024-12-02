n.d(r, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var l = n(200651),
    o = n(192379),
    t = n(734530),
    s = n(120356),
    c = n.n(s),
    a = n(846519),
    i = n(481060),
    d = n(609194),
    u = n(881052),
    p = n(128069),
    m = n(563132),
    f = n(409813);
n(51499), n(614277);
var h = n(122289),
    x = n(70956),
    N = n(981631),
    _ = n(388032),
    y = n(719919);
let b = new Set([f.h8.SKU_SELECT, f.h8.AWAITING_AUTHENTICATION, f.h8.AWAITING_PURCHASE_TOKEN_AUTH, f.h8.CONFIRM]);
function g(e) {
    let { steps: r, currentStep: n, body: s, paymentError: g, header: v, footer: j, isGift: C = !1, giftMessage: S = _.intl.string(_.t.DrgnS0), hideBreadcrumbs: E = !1, isLoading: I = !1, purchaseError: k, purchaseErrorBlockRef: P, planError: A, onScroll: T, scrollerClassName: B, hasCurrencies: R = !1 } = e,
        D = null;
    null != g && null == (0, f.ly)(g) ? (D = g) : null != k ? (D = k) : null != A && (D = A);
    let M = null != D ? D.message : '';
    null != D && D instanceof u.HF && (D.code === p.SM.CARD_DECLINED && R && (M += ' '.concat(_.intl.string(_.t.iWvwQU))), D.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = _.intl.string(_.t.ypuSd3)), D.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = _.intl.string(_.t.mXMmWF)));
    let { stripe: L } = (0, m.usePaymentContext)();
    I = I || null == L;
    let w = o.useRef(new a.V7());
    o.useEffect(() => {
        let e = w.current;
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
    let U = r.includes(f.h8.PAYMENT_TYPE) ? f.h8.PAYMENT_TYPE : f.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(t.Elements, {
        options: N.OBo,
        stripe: L,
        children: [
            v,
            (0, l.jsxs)('div', {
                className: c()('paymentModalContent', y.content),
                children: [
                    C && n !== f.h8.CONFIRM
                        ? (0, l.jsx)(d.Z, {
                              className: y.paymentNote,
                              iconSize: d.Z.Sizes.SMALL,
                              icon: i.GiftIcon,
                              color: null == S ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                              children: S
                          })
                        : null,
                    E
                        ? null
                        : (0, l.jsx)('div', {
                              className: y.breadcrumbsWrapper,
                              children: (0, l.jsx)(i.Breadcrumbs, {
                                  activeId: f.Ck.has(n) ? U : n,
                                  breadcrumbs: r
                                      .filter((e) => !f.Ck.has(e) && !b.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, f.DJ)(e)
                                      }))
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: y.bodyWrapper,
                        children: [
                            null == D
                                ? null
                                : (0, l.jsx)('div', {
                                      className: y.errorBlockWrapper,
                                      children: (0, l.jsx)(i.FormErrorBlock, {
                                          ref: P,
                                          children: M
                                      })
                                  }),
                            I
                                ? (0, l.jsx)(i.Spinner, { className: y.loadingBlock })
                                : (0, l.jsx)(i.Sequencer, {
                                      className: y.sequencer,
                                      staticClassName: y.sequencerStatic,
                                      animatedNodeClassName: y.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: r,
                                      sideMargin: 20,
                                      children: (0, l.jsx)(i.AdvancedScrollerThin, {
                                          onScroll: T,
                                          className: c()(y.scroller, B),
                                          children: s
                                      })
                                  })
                        ]
                    })
                ]
            }),
            j
        ]
    });
}
