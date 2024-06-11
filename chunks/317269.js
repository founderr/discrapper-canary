"use strict";
s.r(t), s.d(t, {
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return L
  },
  PremiumSubscriptionHandoffPurchaseConfirmation: function() {
    return A
  },
  default: function() {
    return P
  }
}), s("47120"), s("411104");
var a = s("735250"),
  _ = s("470079"),
  n = s("512722"),
  l = s.n(n),
  u = s("442837"),
  I = s("481060"),
  r = s("16084"),
  i = s("987209"),
  o = s("179118"),
  N = s("912788"),
  d = s("509545"),
  E = s("55563"),
  c = s("74538"),
  T = s("741245"),
  f = s("474936"),
  R = s("981631"),
  M = s("689938"),
  S = s("889158");

function O(e) {
  var t, s;
  let _, {
      planId: n,
      startingPremiumSubscriptionPlanId: I,
      paymentSourceType: r
    } = e,
    [i, o] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.get(I), d.default.get(n)]);
  if (l()(null != i && null != o, "Missing startingPlan or newPlan"), t = I, s = n, f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s)) switch (n) {
      case f.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case f.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case f.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case f.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case f.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case f.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case f.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case f.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (i.skuId === f.PremiumSubscriptionSKUs.TIER_2 && o.skuId === f.PremiumSubscriptionSKUs.TIER_1) _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (o.skuId) {
      case f.PremiumSubscriptionSKUs.TIER_0:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case f.PremiumSubscriptionSKUs.TIER_1:
        _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case f.PremiumSubscriptionSKUs.TIER_2:
        _ = 1 !== i.intervalCount ? M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(o.skuId))
    }
  return (0, a.jsx)("div", {
    className: S.text,
    children: _
  })
}

function P(e) {
  let t, s, {
      planId: n,
      enableNoPaymentTrial: i,
      startingPremiumSubscriptionPlanId: o,
      onClose: N,
      followupSKUInfo: P,
      isDowngrade: L,
      hideClose: A,
      postSuccessGuild: C,
      paymentSourceType: m
    } = e,
    {
      theme: U
    } = (0, I.useThemeContext)(),
    p = (0, u.useStateFromStores)([E.default], () => null != P ? E.default.get(P.id) : null);
  _.useEffect(() => {
    if (null == P || null != p) return;
    let {
      applicationId: e,
      id: t
    } = P;
    (0, r.fetchPublishedSKU)(e, t).catch(R.NOOP_NULL)
  }, [P, p]);
  let g = e => {
    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_0) return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_1) return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : i ? M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != p) t = (0, a.jsx)("div", {
    className: S.text,
    children: M.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: p.name
    })
  });
  else if (null != o) t = (0, a.jsx)(O, {
    planId: n,
    startingPremiumSubscriptionPlanId: o
  });
  else if (null != C) {
    let e = d.default.get(n);
    l()(null != e, "Missing plan"), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: S.text,
        children: g(e)
      }), (0, a.jsx)("div", {
        className: S.text,
        children: M.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: C.name
        })
      })]
    })
  } else {
    let e = d.default.get(n);
    l()(null != e, "Missing plan"), t = (0, a.jsx)("div", {
      className: S.text,
      children: g(e)
    })
  }
  let D = c.default.getPremiumType(n);
  return l()(null != D, "premium type should not be null in purchase confirmation"), s = null != p ? M.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: p.name
  }) : L ? M.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != C ? M.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : M.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
    className: S.confirmation,
    children: [(0, a.jsx)(T.default, {
      className: S.banner,
      theme: U,
      premiumType: D,
      type: R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? T.default.Types.PREMIUM_PAYMENT_STARTED : null != o ? T.default.Types.PREMIUM_UPDATED : T.default.Types.PREMIUM_ACTIVATED
    }), t, A ? null : (0, a.jsx)(I.Button, {
      onClick: N,
      children: s
    })]
  })
}

function L(e) {
  let {
    planId: t,
    onClose: s
  } = e, {
    giftRecipient: _,
    selectedGiftStyle: n,
    hasSentMessage: I,
    giftMessageError: r,
    isSendingMessage: E
  } = (0, i.useGiftContext)(), c = (0, u.useStateFromStores)([d.default], () => d.default.get(t));
  l()(null != c, "Missing plan");
  let T = (0, u.useStateFromStores)([N.default], () => N.default.getGiftCode(c.skuId));
  return (0, a.jsx)(o.default, {
    giftCode: T,
    subscriptionPlan: c,
    onClose: s,
    selectedGiftStyle: n,
    hasSentMessage: I,
    giftRecipient: _,
    giftMessageError: r,
    isSendingMessage: E
  })
}

function A() {
  return (0, a.jsxs)("div", {
    className: S.redirectConfirmation,
    children: [(0, a.jsx)(I.Heading, {
      variant: "heading-xl/bold",
      children: M.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
    }), (0, a.jsxs)("div", {
      className: S.redirectBody,
      children: [(0, a.jsx)(I.Text, {
        variant: "text-md/normal",
        children: M.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
      }), (0, a.jsx)("br", {}), (0, a.jsx)(I.Text, {
        variant: "text-md/normal",
        children: M.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
      })]
    })]
  })
}