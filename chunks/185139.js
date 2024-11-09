n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(734530),
    i = n(120356),
    s = n.n(i),
    o = n(846519),
    c = n(481060),
    u = n(609194),
    d = n(881052),
    m = n(128069),
    p = n(563132),
    h = n(409813);
n(51499), n(614277);
var A = n(122289),
    E = n(70956),
    f = n(981631),
    N = n(388032),
    b = n(896769);
let _ = new Set([h.h8.SKU_SELECT, h.h8.AWAITING_AUTHENTICATION, h.h8.AWAITING_PURCHASE_TOKEN_AUTH, h.h8.CONFIRM]);
function y(e) {
    let { steps: t, currentStep: n, body: i, paymentError: y, header: P, footer: g, isGift: C = !1, giftMessage: T = N.intl.string(N.t.DrgnS0), hideBreadcrumbs: I = !1, isLoading: S = !1, purchaseError: v, purchaseErrorBlockRef: x, planError: L, onScroll: R, scrollerClassName: O, hasCurrencies: M = !1 } = e,
        w = null;
    null != y && null == (0, h.ly)(y) ? (w = y) : null != v ? (w = v) : null != L && (w = L);
    let D = null != w ? w.message : '';
    null != w && w instanceof d.HF && (w.code === m.SM.CARD_DECLINED && M && (D += ' '.concat(N.intl.string(N.t.iWvwQU))), w.code === m.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (D = N.intl.string(N.t.ypuSd3)), w.code === f.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (D = N.intl.string(N.t.mXMmWF)));
    let { stripe: Z } = (0, p.usePaymentContext)();
    S = S || null == Z;
    let j = r.useRef(new o.V7());
    r.useEffect(() => {
        let e = j.current;
        return (
            null != Z || e.isStarted()
                ? null != Z && e.stop()
                : e.start(10 * E.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, A.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [Z]);
    let k = t.includes(h.h8.PAYMENT_TYPE) ? h.h8.PAYMENT_TYPE : h.h8.ADD_PAYMENT_STEPS;
    return (0, a.jsxs)(l.Elements, {
        options: f.OBo,
        stripe: Z,
        children: [
            P,
            (0, a.jsxs)('div', {
                className: s()('paymentModalContent', b.content),
                children: [
                    C && n !== h.h8.CONFIRM
                        ? (0, a.jsx)(u.Z, {
                              className: b.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.GiftIcon,
                              color: null == T ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: T
                          })
                        : null,
                    I
                        ? null
                        : (0, a.jsx)('div', {
                              className: b.breadcrumbsWrapper,
                              children: (0, a.jsx)(c.Breadcrumbs, {
                                  activeId: h.Ck.has(n) ? k : n,
                                  breadcrumbs: t
                                      .filter((e) => !h.Ck.has(e) && !_.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, h.DJ)(e)
                                      }))
                              })
                          }),
                    (0, a.jsxs)('div', {
                        className: b.bodyWrapper,
                        children: [
                            null == w
                                ? null
                                : (0, a.jsx)('div', {
                                      className: b.errorBlockWrapper,
                                      children: (0, a.jsx)(c.FormErrorBlock, {
                                          ref: x,
                                          children: D
                                      })
                                  }),
                            S
                                ? (0, a.jsx)(c.Spinner, { className: b.loadingBlock })
                                : (0, a.jsx)(c.Sequencer, {
                                      className: b.sequencer,
                                      staticClassName: b.sequencerStatic,
                                      animatedNodeClassName: b.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, a.jsx)(c.AdvancedScrollerThin, {
                                          onScroll: R,
                                          className: s()(b.scroller, O),
                                          children: i
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
