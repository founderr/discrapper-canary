"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("872717"),
  u = s("819855"),
  o = s("77078"),
  c = s("841098"),
  d = s("701909"),
  _ = s("719923"),
  f = s("153160"),
  m = s("478968"),
  E = s("510928"),
  I = s("646718"),
  C = s("49111"),
  N = s("782340"),
  M = s("893643"),
  p = s("940420"),
  T = s("591726"),
  R = function(e) {
    let {
      premiumSubscription: t,
      premiumType: s,
      onClose: i,
      onConfirm: R,
      userDiscountOffer: P
    } = e, [S, A] = a.useState(!1), [L, g] = a.useState(!1), O = async e => {
      try {
        g(!0), A(!1), await r.default.post({
          url: C.Endpoints.USER_OFFER_REDEEM,
          body: {
            user_discount_offer_id: e
          }
        }), R()
      } catch (e) {
        A(!0)
      }
      g(!1)
    }, x = (0, c.default)(), h = (0, u.isThemeDark)(x) ? p : T, y = (0, m.useChurnDiscountedPrice)(t, I.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P), D = (0, _.getPrice)(I.SubscriptionPlans.PREMIUM_MONTH_TIER_2), v = (0, f.formatPrice)(D.amount, D.currency);
    return null == P ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(E.default, {
        premiumType: s,
        onClose: i
      }), (0, n.jsx)(o.ModalContent, {
        className: M.body,
        children: (0, n.jsxs)("div", {
          className: M.confirmDiscountContent,
          children: [(0, n.jsx)(o.Heading, {
            variant: "heading-xl/bold",
            children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
              percent: P.discount.amount
            })
          }), (0, n.jsxs)("div", {
            className: M.confirmDiscountDescription,
            children: [(0, n.jsx)("img", {
              alt: "",
              src: h,
              className: M.confirmDiscountIcon
            }), (0, n.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
                percent: P.discount.amount,
                numMonths: P.discount.user_usage_limit,
                price: v
              })
            })]
          }), (0, n.jsx)("div", {
            className: M.confirmDiscountLegalese,
            children: (0, n.jsx)(o.Text, {
              variant: "text-xs/semibold",
              className: M.confirmDiscountLegaleseText,
              children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
                discountedPrice: y,
                billingPeriod: (0, _.getDiscountIntervalString)(P.discount.user_usage_limit_interval),
                numMonths: P.discount.user_usage_limit,
                fullPrice: v,
                helpdeskArticle: d.default.getArticleURL(C.HelpdeskArticles.PAID_TERMS)
              })
            })
          }), S && (0, n.jsx)("div", {
            className: M.redemptionFailedMessage,
            children: (0, n.jsx)(o.Text, {
              variant: "text-xs/semibold",
              className: M.redemptionFailedMessageCopy,
              children: N.default.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
            })
          }), (0, n.jsxs)("div", {
            className: l(M.confirmDiscountButtons, {
              [M.confrimDiscountsButtonsError]: S,
              [M.confrimDiscountsButtonsNoError]: !S
            }),
            children: [(0, n.jsx)(o.Button, {
              look: o.ButtonLooks.LINK,
              onClick: () => i(),
              children: N.default.Messages.CHURN_DISCOUNT_NEVERMIND
            }), (0, n.jsx)(o.Button, {
              size: o.ButtonSizes.SMALL,
              submitting: L,
              onClick: () => O(P.id),
              children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
            })]
          })]
        })
      })]
    })
  }