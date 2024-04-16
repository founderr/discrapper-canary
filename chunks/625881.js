"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("544891"),
  o = s("780384"),
  u = s("481060"),
  d = s("410030"),
  c = s("63063"),
  p = s("74538"),
  f = s("937615"),
  E = s("230916"),
  m = s("798769"),
  _ = s("474936"),
  S = s("981631"),
  I = s("689938"),
  N = s("248928"),
  P = s("982404"),
  C = s("299156");
t.default = function(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: i,
    onConfirm: T,
    userDiscountOffer: h
  } = e, [A, R] = n.useState(!1), [y, M] = n.useState(!1), g = async e => {
    try {
      M(!0), R(!1), await r.HTTP.post({
        url: S.Endpoints.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        }
      }), T()
    } catch (e) {
      R(!0)
    }
    M(!1)
  }, L = (0, d.default)(), x = (0, o.isThemeDark)(L) ? P : C, D = (0, E.useChurnDiscountedPrice)(t, _.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h), U = (0, p.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2), b = (0, f.formatPrice)(U.amount, U.currency);
  return null == h ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(m.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(u.ModalContent, {
      className: N.body,
      children: (0, a.jsxs)("div", {
        className: N.confirmDiscountContent,
        children: [(0, a.jsx)(u.Heading, {
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
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
              percent: h.discount.amount,
              numMonths: h.discount.user_usage_limit,
              price: b
            })
          })]
        }), (0, a.jsx)("div", {
          className: N.confirmDiscountLegalese,
          children: (0, a.jsx)(u.Text, {
            variant: "text-xs/semibold",
            className: N.confirmDiscountLegaleseText,
            children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: D,
              billingPeriod: (0, p.getDiscountIntervalString)(h.discount.user_usage_limit_interval),
              numMonths: h.discount.user_usage_limit,
              fullPrice: b,
              helpdeskArticle: c.default.getArticleURL(S.HelpdeskArticles.PAID_TERMS)
            })
          })
        }), A && (0, a.jsx)("div", {
          className: N.redemptionFailedMessage,
          children: (0, a.jsx)(u.Text, {
            variant: "text-xs/semibold",
            className: N.redemptionFailedMessageCopy,
            children: I.default.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }), (0, a.jsxs)("div", {
          className: l()(N.confirmDiscountButtons, {
            [N.confrimDiscountsButtonsError]: A,
            [N.confrimDiscountsButtonsNoError]: !A
          }),
          children: [(0, a.jsx)(u.Button, {
            look: u.ButtonLooks.LINK,
            onClick: () => i(),
            children: I.default.Messages.CHURN_DISCOUNT_NEVERMIND
          }), (0, a.jsx)(u.Button, {
            size: u.ButtonSizes.SMALL,
            submitting: y,
            onClick: () => g(h.id),
            children: I.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
          })]
        })]
      })
    })]
  })
}