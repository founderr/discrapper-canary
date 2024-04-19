"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("544891"),
  u = s("780384"),
  o = s("481060"),
  d = s("410030"),
  c = s("63063"),
  p = s("74538"),
  m = s("937615"),
  f = s("230916"),
  E = s("798769"),
  _ = s("474936"),
  I = s("981631"),
  S = s("689938"),
  N = s("248928"),
  P = s("982404"),
  C = s("299156");
t.default = function(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: i,
    onConfirm: h,
    userDiscountOffer: T
  } = e, [A, R] = n.useState(!1), [y, M] = n.useState(!1), L = async e => {
    try {
      M(!0), R(!1), await r.HTTP.post({
        url: I.Endpoints.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        }
      }), h()
    } catch (e) {
      R(!0)
    }
    M(!1)
  }, g = (0, d.default)(), x = (0, u.isThemeDark)(g) ? P : C, D = (0, f.useChurnDiscountedPrice)(t, _.SubscriptionPlans.PREMIUM_MONTH_TIER_2, T), U = (0, p.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2), b = (0, m.formatPrice)(U.amount, U.currency);
  return null == T ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(o.ModalContent, {
      className: N.body,
      children: (0, a.jsxs)("div", {
        className: N.confirmDiscountContent,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          children: S.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
            percent: T.discount.amount
          })
        }), (0, a.jsxs)("div", {
          className: N.confirmDiscountDescription,
          children: [(0, a.jsx)("img", {
            alt: "",
            src: x,
            className: N.confirmDiscountIcon
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: S.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
              percent: T.discount.amount,
              numMonths: T.discount.user_usage_limit,
              price: b
            })
          })]
        }), (0, a.jsx)("div", {
          className: N.confirmDiscountLegalese,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: N.confirmDiscountLegaleseText,
            children: S.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: D,
              billingPeriod: (0, p.getDiscountIntervalString)(T.discount.user_usage_limit_interval),
              numMonths: T.discount.user_usage_limit,
              fullPrice: b,
              helpdeskArticle: c.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
            })
          })
        }), A && (0, a.jsx)("div", {
          className: N.redemptionFailedMessage,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: N.redemptionFailedMessageCopy,
            children: S.default.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }), (0, a.jsxs)("div", {
          className: l()(N.confirmDiscountButtons, {
            [N.confrimDiscountsButtonsError]: A,
            [N.confrimDiscountsButtonsNoError]: !A
          }),
          children: [(0, a.jsx)(o.Button, {
            look: o.ButtonLooks.LINK,
            onClick: () => i(),
            children: S.default.Messages.CHURN_DISCOUNT_NEVERMIND
          }), (0, a.jsx)(o.Button, {
            size: o.ButtonSizes.SMALL,
            submitting: y,
            onClick: () => L(T.id),
            children: S.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
          })]
        })]
      })
    })]
  })
}