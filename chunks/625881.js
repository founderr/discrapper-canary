n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  r = n(544891),
  l = n(780384),
  c = n(481060),
  d = n(410030),
  u = n(63063),
  _ = n(74538),
  p = n(937615),
  m = n(230916),
  f = n(798769),
  E = n(474936),
  I = n(981631),
  C = n(689938),
  h = n(481798),
  N = n(982404),
  P = n(299156);
t.Z = function(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: i,
    onConfirm: g,
    userDiscountOffer: T
  } = e, [S, R] = a.useState(!1), [A, b] = a.useState(!1), x = async e => {
    try {
      b(!0), R(!1), await r.tn.post({
        url: I.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        }
      }), g()
    } catch (e) {
      R(!0)
    }
    b(!1)
  }, M = (0, d.ZP)(), L = (0, l.wj)(M) ? N : P, y = (0, m._)(t, E.Xh.PREMIUM_MONTH_TIER_2, T), B = (0, _.aS)(E.Xh.PREMIUM_MONTH_TIER_2), D = (0, p.T4)(B.amount, B.currency);
  return null == T ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(f.Z, {
      premiumType: n,
      onClose: i
    }), (0, s.jsx)(c.ModalContent, {
      className: h.body,
      children: (0, s.jsxs)("div", {
        className: h.confirmDiscountContent,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
            percent: T.discount.amount
          })
        }), (0, s.jsxs)("div", {
          className: h.confirmDiscountDescription,
          children: [(0, s.jsx)("img", {
            alt: "",
            src: L,
            className: h.confirmDiscountIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
              percent: T.discount.amount,
              numMonths: T.discount.user_usage_limit,
              price: D
            })
          })]
        }), (0, s.jsx)("div", {
          className: h.confirmDiscountLegalese,
          children: (0, s.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: h.confirmDiscountLegaleseText,
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: y,
              billingPeriod: (0, _.JP)(T.discount.user_usage_limit_interval),
              numMonths: T.discount.user_usage_limit,
              fullPrice: D,
              helpdeskArticle: u.Z.getArticleURL(I.BhN.PAID_TERMS)
            })
          })
        }), S && (0, s.jsx)("div", {
          className: h.redemptionFailedMessage,
          children: (0, s.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: h.redemptionFailedMessageCopy,
            children: C.Z.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }), (0, s.jsxs)("div", {
          className: o()(h.confirmDiscountButtons, {
            [h.confrimDiscountsButtonsError]: S,
            [h.confrimDiscountsButtonsNoError]: !S
          }),
          children: [(0, s.jsx)(c.Button, {
            look: c.ButtonLooks.LINK,
            onClick: () => i(),
            children: C.Z.Messages.CHURN_DISCOUNT_NEVERMIND
          }), (0, s.jsx)(c.Button, {
            size: c.ButtonSizes.SMALL,
            submitting: A,
            onClick: () => x(T.id),
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
          })]
        })]
      })
    })]
  })
}