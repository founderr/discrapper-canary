"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983");
n("884691");
var a = n("819855"),
  l = n("77078"),
  i = n("841098"),
  r = n("701909"),
  u = n("719923"),
  o = n("153160"),
  c = n("478968"),
  d = n("510928"),
  _ = n("646718"),
  f = n("49111"),
  m = n("782340"),
  I = n("893643"),
  E = n("940420"),
  C = n("591726"),
  N = function(e) {
    let {
      premiumSubscription: t,
      premiumType: n,
      onClose: N,
      onConfirm: M,
      userDiscountOffer: p
    } = e, T = (0, i.default)(), R = (0, a.isThemeDark)(T) ? E : C, P = (0, c.useChurnDiscountedPrice)(t, _.SubscriptionPlans.PREMIUM_MONTH_TIER_2, p), S = (0, u.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2), A = (0, o.formatPrice)(S.amount, S.currency);
    return null == p ? null : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.default, {
        premiumType: n,
        onClose: N
      }), (0, s.jsx)(l.ModalContent, {
        className: I.body,
        children: (0, s.jsxs)("div", {
          className: I.confirmDiscountContent,
          children: [(0, s.jsx)(l.Heading, {
            variant: "heading-xl/bold",
            children: m.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
              percent: p.discount.amount
            })
          }), (0, s.jsxs)("div", {
            className: I.confirmDiscountDescription,
            children: [(0, s.jsx)("img", {
              alt: "",
              src: R,
              className: I.confirmDiscountIcon
            }), (0, s.jsx)(l.Text, {
              variant: "text-sm/medium",
              children: m.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
                percent: p.discount.amount,
                numMonths: p.discount.user_usage_limit,
                price: A
              })
            })]
          }), (0, s.jsx)("div", {
            className: I.confirmDiscountLegalese,
            children: (0, s.jsx)(l.Text, {
              variant: "text-xs/semibold",
              className: I.confirmDiscountLegaleseText,
              children: m.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
                discountedPrice: P,
                billingPeriod: (0, u.getDiscountIntervalString)(p.discount.user_usage_limit_interval),
                numMonths: p.discount.user_usage_limit,
                fullPrice: A,
                helpdeskArticle: r.default.getArticleURL(f.HelpdeskArticles.PAID_TERMS)
              })
            })
          }), (0, s.jsxs)("div", {
            className: I.confirmDiscountButtons,
            children: [(0, s.jsx)(l.Button, {
              look: l.ButtonLooks.LINK,
              onClick: () => N(),
              children: m.default.Messages.CHURN_DISCOUNT_NEVERMIND
            }), (0, s.jsx)(l.Button, {
              size: l.ButtonSizes.SMALL,
              onClick: () => M(),
              children: m.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
            })]
          })]
        })
      })]
    })
  }