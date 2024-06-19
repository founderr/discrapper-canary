t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(544891),
  o = t(780384),
  c = t(481060),
  u = t(410030),
  d = t(63063),
  E = t(74538),
  _ = t(937615),
  p = t(230916),
  I = t(798769),
  m = t(474936),
  N = t(981631),
  C = t(689938),
  h = t(481798),
  P = t(982404),
  T = t(299156);
s.Z = function(e) {
  let {
    premiumSubscription: s,
    premiumType: t,
    onClose: i,
    onConfirm: A,
    userDiscountOffer: R
  } = e, [S, M] = a.useState(!1), [f, g] = a.useState(!1), L = async e => {
    try {
      g(!0), M(!1), await r.tn.post({
        url: N.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        }
      }), A()
    } catch (e) {
      M(!0)
    }
    g(!1)
  }, x = (0, u.ZP)(), O = (0, o.wj)(x) ? P : T, D = (0, p._)(s, m.Xh.PREMIUM_MONTH_TIER_2, R), y = (0, E.aS)(m.Xh.PREMIUM_MONTH_TIER_2), U = (0, _.T4)(y.amount, y.currency);
  return null == R ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(I.Z, {
      premiumType: t,
      onClose: i
    }), (0, n.jsx)(c.ModalContent, {
      className: h.body,
      children: (0, n.jsxs)("div", {
        className: h.confirmDiscountContent,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
            percent: R.discount.amount
          })
        }), (0, n.jsxs)("div", {
          className: h.confirmDiscountDescription,
          children: [(0, n.jsx)("img", {
            alt: "",
            src: O,
            className: h.confirmDiscountIcon
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
              percent: R.discount.amount,
              numMonths: R.discount.user_usage_limit,
              price: U
            })
          })]
        }), (0, n.jsx)("div", {
          className: h.confirmDiscountLegalese,
          children: (0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: h.confirmDiscountLegaleseText,
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: D,
              billingPeriod: (0, E.JP)(R.discount.user_usage_limit_interval),
              numMonths: R.discount.user_usage_limit,
              fullPrice: U,
              helpdeskArticle: d.Z.getArticleURL(N.BhN.PAID_TERMS)
            })
          })
        }), S && (0, n.jsx)("div", {
          className: h.redemptionFailedMessage,
          children: (0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: h.redemptionFailedMessageCopy,
            children: C.Z.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }), (0, n.jsxs)("div", {
          className: l()(h.confirmDiscountButtons, {
            [h.confrimDiscountsButtonsError]: S,
            [h.confrimDiscountsButtonsNoError]: !S
          }),
          children: [(0, n.jsx)(c.Button, {
            look: c.ButtonLooks.LINK,
            onClick: () => i(),
            children: C.Z.Messages.CHURN_DISCOUNT_NEVERMIND
          }), (0, n.jsx)(c.Button, {
            size: c.ButtonSizes.SMALL,
            submitting: f,
            onClick: () => L(R.id),
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
          })]
        })]
      })
    })]
  })
}