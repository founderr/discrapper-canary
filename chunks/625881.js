"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  r = s.n(i),
  l = s("544891"),
  u = s("780384"),
  o = s("481060"),
  d = s("410030"),
  c = s("63063"),
  p = s("74538"),
  f = s("937615"),
  E = s("230916"),
  m = s("798769"),
  _ = s("474936"),
  S = s("981631"),
  I = s("689938"),
  N = s("100628"),
  P = s("982404"),
  C = s("299156");
t.default = function(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: i,
    onConfirm: T,
    userDiscountOffer: h
  } = e, [A, R] = n.useState(!1), [M, y] = n.useState(!1), g = async e => {
    try {
      y(!0), R(!1), await l.HTTP.post({
        url: S.Endpoints.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        }
      }), T()
    } catch (e) {
      R(!0)
    }
    y(!1)
  }, L = (0, d.default)(), x = (0, u.isThemeDark)(L) ? P : C, D = (0, E.useChurnDiscountedPrice)(t, _.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h), b = (0, p.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2), U = (0, f.formatPrice)(b.amount, b.currency);
  return null == h ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(m.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(o.ModalContent, {
      className: N.body,
      children: (0, a.jsxs)("div", {
        className: N.confirmDiscountContent,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
            percent: h.discount.amount
          })
        }), (0, a.jsxs)("div", {
          className: N.confirmDiscountDescription,
          children: [(0, a.jsx)("img", {
            alt: "",
            src: x,
            className: N.confirmDiscountIcon
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
              percent: h.discount.amount,
              numMonths: h.discount.user_usage_limit,
              price: U
            })
          })]
        }), (0, a.jsx)("div", {
          className: N.confirmDiscountLegalese,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: N.confirmDiscountLegaleseText,
            children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: D,
              billingPeriod: (0, p.getDiscountIntervalString)(h.discount.user_usage_limit_interval),
              numMonths: h.discount.user_usage_limit,
              fullPrice: U,
              helpdeskArticle: c.default.getArticleURL(S.HelpdeskArticles.PAID_TERMS)
            })
          })
        }), A && (0, a.jsx)("div", {
          className: N.redemptionFailedMessage,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: N.redemptionFailedMessageCopy,
            children: I.default.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }), (0, a.jsxs)("div", {
          className: r()(N.confirmDiscountButtons, {
            [N.confrimDiscountsButtonsError]: A,
            [N.confrimDiscountsButtonsNoError]: !A
          }),
          children: [(0, a.jsx)(o.Button, {
            look: o.ButtonLooks.LINK,
            onClick: () => i(),
            children: I.default.Messages.CHURN_DISCOUNT_NEVERMIND
          }), (0, a.jsx)(o.Button, {
            size: o.ButtonSizes.SMALL,
            submitting: M,
            onClick: () => g(h.id),
            children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
          })]
        })]
      })
    })]
  })
}