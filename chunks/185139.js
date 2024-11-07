n.d(r, {
    Z: function () {
        return b;
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
    g = n(609917);
let v = new Set([f.h8.SKU_SELECT, f.h8.AWAITING_AUTHENTICATION, f.h8.AWAITING_PURCHASE_TOKEN_AUTH, f.h8.CONFIRM]);
function b(e) {
    let { steps: r, currentStep: n, body: s, paymentError: b, header: j, footer: C, isGift: y = !1, giftMessage: S = _.intl.string(_.t.DrgnS0), hideBreadcrumbs: E = !1, isLoading: I = !1, purchaseError: k, purchaseErrorBlockRef: P, planError: A, onScroll: T, scrollerClassName: R, hasCurrencies: B = !1 } = e,
        M = null;
    null != b && null == (0, f.ly)(b) ? (M = b) : null != k ? (M = k) : null != A && (M = A);
    let L = null != M ? M.message : '';
    null != M && M instanceof u.HF && (M.code === p.SM.CARD_DECLINED && B && (L += ' '.concat(_.intl.string(_.t.iWvwQU))), M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (L = _.intl.string(_.t.ypuSd3)), M.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (L = _.intl.string(_.t.mXMmWF)));
    let { stripe: D } = (0, m.usePaymentContext)();
    I = I || null == D;
    let w = o.useRef(new a.V7());
    o.useEffect(() => {
        let e = w.current;
        return (
            null != D || e.isStarted()
                ? null != D && e.stop()
                : e.start(10 * x.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, h.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [D]);
    let U = r.includes(f.h8.PAYMENT_TYPE) ? f.h8.PAYMENT_TYPE : f.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(t.Elements, {
        options: N.OBo,
        stripe: D,
        children: [
            j,
            (0, l.jsxs)('div', {
                className: c()('paymentModalContent', g.content),
                children: [
                    y && n !== f.h8.CONFIRM
                        ? (0, l.jsx)(d.Z, {
                              className: g.paymentNote,
                              iconSize: d.Z.Sizes.SMALL,
                              icon: i.GiftIcon,
                              color: null == S ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                              children: S
                          })
                        : null,
                    E
                        ? null
                        : (0, l.jsx)('div', {
                              className: g.breadcrumbsWrapper,
                              children: (0, l.jsx)(i.Breadcrumbs, {
                                  activeId: f.Ck.has(n) ? U : n,
                                  breadcrumbs: r
                                      .filter((e) => !f.Ck.has(e) && !v.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, f.DJ)(e)
                                      }))
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: g.bodyWrapper,
                        children: [
                            null == M
                                ? null
                                : (0, l.jsx)('div', {
                                      className: g.errorBlockWrapper,
                                      children: (0, l.jsx)(i.FormErrorBlock, {
                                          ref: P,
                                          children: L
                                      })
                                  }),
                            I
                                ? (0, l.jsx)(i.Spinner, { className: g.loadingBlock })
                                : (0, l.jsx)(i.Sequencer, {
                                      className: g.sequencer,
                                      staticClassName: g.sequencerStatic,
                                      animatedNodeClassName: g.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: r,
                                      sideMargin: 20,
                                      children: (0, l.jsx)(i.AdvancedScrollerThin, {
                                          onScroll: T,
                                          className: c()(g.scroller, R),
                                          children: s
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
