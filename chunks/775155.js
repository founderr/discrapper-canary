"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  },
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return O
  }
}), s("222007"), s("70102");
var a = s("37983"),
  _ = s("884691"),
  l = s("627445"),
  n = s.n(l),
  u = s("446674"),
  I = s("77078"),
  r = s("465527"),
  i = s("635357"),
  N = s("891865"),
  o = s("353365"),
  E = s("10514"),
  c = s("552712"),
  d = s("719923"),
  T = s("977934"),
  f = s("646718"),
  R = s("49111"),
  M = s("782340"),
  L = s("766593");

function P(e) {
  var t, s;
  let _, {
      planId: l,
      startingPremiumSubscriptionPlanId: I,
      paymentSourceType: r
    } = e,
    [i, N] = (0, u.useStateFromStoresArray)([E.default], () => [E.default.get(I), E.default.get(l)]);
  if (n(null != i && null != N, "Missing startingPlan or newPlan"), t = I, s = l, f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s)) switch (l) {
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
        throw Error("Unexpected planId: ".concat(l))
    } else if (i.skuId === f.PremiumSubscriptionSKUs.TIER_2 && N.skuId === f.PremiumSubscriptionSKUs.TIER_1) _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (N.skuId) {
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
        throw Error("Unexpected skuId: ".concat(N.skuId))
    }
  return (0, a.jsx)("div", {
    className: L.text,
    children: _
  })
}

function S(e) {
  let t, s, {
      planId: l,
      enableNoPaymentTrial: i,
      startingPremiumSubscriptionPlanId: N,
      onClose: o,
      followupSKUInfo: S,
      isDowngrade: O,
      hideClose: A,
      postSuccessGuild: C,
      paymentSourceType: m
    } = e,
    {
      theme: U
    } = (0, I.useThemeContext)(),
    p = (0, u.useStateFromStores)([c.default], () => null != S ? c.default.get(S.id) : null);
  _.useEffect(() => {
    if (null == S || null != p) return;
    let {
      applicationId: e,
      id: t
    } = S;
    (0, r.fetchSKU)(e, t).catch(R.NOOP_NULL)
  }, [S, p]);
  let g = e => {
    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_0) return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_1) return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : i ? M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != p) t = (0, a.jsx)("div", {
    className: L.text,
    children: M.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: p.name
    })
  });
  else if (null != N) t = (0, a.jsx)(P, {
    planId: l,
    startingPremiumSubscriptionPlanId: N
  });
  else if (null != C) {
    let e = E.default.get(l);
    n(null != e, "Missing plan"), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: L.text,
        children: g(e)
      }), (0, a.jsx)("div", {
        className: L.text,
        children: M.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: C.name
        })
      })]
    })
  } else {
    let e = E.default.get(l);
    n(null != e, "Missing plan"), t = (0, a.jsx)("div", {
      className: L.text,
      children: g(e)
    })
  }
  let G = d.default.getPremiumType(l);
  return n(null != G, "premium type should not be null in purchase confirmation"), s = null != p ? M.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: p.name
  }) : O ? M.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != C ? M.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : M.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
    className: L.confirmation,
    children: [(0, a.jsx)(T.default, {
      className: L.banner,
      theme: U,
      premiumType: G,
      type: R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? T.default.Types.PREMIUM_PAYMENT_STARTED : null != N ? T.default.Types.PREMIUM_UPDATED : T.default.Types.PREMIUM_ACTIVATED
    }), t, A ? null : (0, a.jsx)(I.Button, {
      onClick: o,
      children: s
    })]
  })
}

function O(e) {
  let {
    planId: t,
    onClose: s
  } = e, {
    giftRecipient: _,
    selectedGiftStyle: l,
    hasSentMessage: I,
    giftMessageError: r,
    isSendingMessage: c
  } = (0, i.useGiftContext)(), d = (0, u.useStateFromStores)([E.default], () => E.default.get(t));
  n(null != d, "Missing plan");
  let T = (0, u.useStateFromStores)([o.default], () => o.default.getGiftCode(d.skuId));
  return (0, a.jsx)(N.default, {
    giftCode: T,
    subscriptionPlan: d,
    onClose: s,
    selectedGiftStyle: l,
    hasSentMessage: I,
    giftRecipient: _,
    giftMessageError: r,
    isSendingMessage: c
  })
}