l.d(n, {
  Z: function() {
    return S
  }
}), l(47120), l(411104);
var r = l(735250),
  s = l(470079),
  t = l(160612),
  o = l(120356),
  a = l.n(o),
  i = l(846519),
  c = l(481060),
  d = l(609194),
  u = l(881052),
  m = l(128069),
  E = l(598),
  N = l(409813);
l(51499), l(614277);
var p = l(122289),
  h = l(70956),
  x = l(981631),
  _ = l(689938),
  I = l(40230);
let C = new Set([N.h8.SKU_SELECT, N.h8.AWAITING_AUTHENTICATION, N.h8.AWAITING_PURCHASE_TOKEN_AUTH, N.h8.CONFIRM]);

function S(e) {
  let {
    steps: n,
    currentStep: l,
    body: o,
    paymentError: S,
    header: f,
    footer: j,
    isGift: v = !1,
    giftMessage: T = _.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: M = !1,
    isLoading: P = !1,
    purchaseError: A,
    purchaseErrorBlockRef: R,
    planError: L,
    onScroll: g,
    scrollerClassName: b,
    hasCurrencies: y = !1
  } = e, D = null;
  null != S && null == (0, N.ly)(S) ? D = S : null != A ? D = A : null != L && (D = L);
  let k = null != D ? D.message : "";
  null != D && D instanceof u.HF && (D.code === m.SM.CARD_DECLINED && y && (k += " ".concat(_.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), D.code === m.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = _.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), D.code === x.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = _.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: O
  } = (0, E.usePaymentContext)();
  P = P || null == O;
  let U = s.useRef(new i.V7);
  s.useEffect(() => {
    let e = U.current;
    return null != O || e.isStarted() ? null != O && e.stop() : e.start(10 * h.Z.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, p.q2)(e)
    }), () => {
      e.stop()
    }
  }, [O]);
  let B = n.includes(N.h8.PAYMENT_TYPE) ? N.h8.PAYMENT_TYPE : N.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(t.Elements, {
    options: x.OBo,
    stripe: O,
    children: [f, (0, r.jsxs)("div", {
      className: a()("paymentModalContent", I.content),
      children: [v && l !== N.h8.CONFIRM ? (0, r.jsx)(d.Z, {
        className: I.paymentNote,
        iconSize: d.Z.Sizes.SMALL,
        icon: c.GiftIcon,
        color: null == T ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
        children: T
      }) : null, M ? null : (0, r.jsx)("div", {
        className: I.breadcrumbsWrapper,
        children: (0, r.jsx)(c.Breadcrumbs, {
          activeId: N.Ck.has(l) ? B : l,
          breadcrumbs: n.filter(e => !N.Ck.has(e) && !C.has(e)).map(e => ({
            id: e,
            label: (0, N.DJ)(e)
          }))
        })
      }), (0, r.jsxs)("div", {
        className: I.bodyWrapper,
        children: [null == D ? null : (0, r.jsx)("div", {
          className: I.errorBlockWrapper,
          children: (0, r.jsx)(c.FormErrorBlock, {
            ref: R,
            children: k
          })
        }), P ? (0, r.jsx)(c.Spinner, {
          className: I.loadingBlock
        }) : (0, r.jsx)(c.Sequencer, {
          className: I.sequencer,
          staticClassName: I.sequencerStatic,
          animatedNodeClassName: I.sequencerAnimatedNode,
          fillParent: !0,
          step: l,
          steps: n,
          sideMargin: 20,
          children: (0, r.jsx)(c.AdvancedScrollerThin, {
            onScroll: g,
            className: a()(I.scroller, b),
            children: o
          })
        })]
      })]
    }), j]
  })
}