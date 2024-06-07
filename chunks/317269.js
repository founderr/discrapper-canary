"use strict";
s.r(t), s.d(t, {
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return P
  },
  default: function() {
    return h
  }
}), s("47120"), s("411104");
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("442837"),
  o = s("481060"),
  u = s("16084"),
  C = s("987209"),
  d = s("179118"),
  c = s("912788"),
  p = s("509545"),
  _ = s("55563"),
  f = s("74538"),
  x = s("741245"),
  E = s("474936"),
  L = s("981631"),
  S = s("689938"),
  m = s("889158");

function I(e) {
  var t, s;
  let i, {
      planId: r,
      startingPremiumSubscriptionPlanId: o,
      paymentSourceType: u
    } = e,
    [C, d] = (0, a.useStateFromStoresArray)([p.default], () => [p.default.get(o), p.default.get(r)]);
  if (l()(null != C && null != d, "Missing startingPlan or newPlan"), t = o, s = r, E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s)) switch (r) {
      case E.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (i = S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case E.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (i = S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case E.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (i = S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case E.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: E.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (i = S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: E.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case E.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case E.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case E.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case E.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(r))
    } else if (C.skuId === E.PremiumSubscriptionSKUs.TIER_2 && d.skuId === E.PremiumSubscriptionSKUs.TIER_1) i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (d.skuId) {
      case E.PremiumSubscriptionSKUs.TIER_0:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case E.PremiumSubscriptionSKUs.TIER_1:
        i = S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case E.PremiumSubscriptionSKUs.TIER_2:
        i = 1 !== C.intervalCount ? S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(d.skuId))
    }
  return (0, n.jsx)("div", {
    className: m.text,
    children: i
  })
}

function h(e) {
  let t, s, {
      planId: r,
      enableNoPaymentTrial: C,
      startingPremiumSubscriptionPlanId: d,
      onClose: c,
      followupSKUInfo: h,
      isDowngrade: P,
      hideClose: T,
      postSuccessGuild: M,
      paymentSourceType: N
    } = e,
    {
      theme: j
    } = (0, o.useThemeContext)(),
    A = (0, a.useStateFromStores)([_.default], () => null != h ? _.default.get(h.id) : null);
  i.useEffect(() => {
    if (null == h || null != A) return;
    let {
      applicationId: e,
      id: t
    } = h;
    (0, u.fetchPublishedSKU)(e, t).catch(L.NOOP_NULL)
  }, [h, A]);
  let R = e => {
    if (e.skuId === E.PremiumSubscriptionSKUs.TIER_0) return L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === E.PremiumSubscriptionSKUs.TIER_1) return L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? S.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : C ? S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : S.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != A) t = (0, n.jsx)("div", {
    className: m.text,
    children: S.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: A.name
    })
  });
  else if (null != d) t = (0, n.jsx)(I, {
    planId: r,
    startingPremiumSubscriptionPlanId: d
  });
  else if (null != M) {
    let e = p.default.get(r);
    l()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: m.text,
        children: R(e)
      }), (0, n.jsx)("div", {
        className: m.text,
        children: S.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: M.name
        })
      })]
    })
  } else {
    let e = p.default.get(r);
    l()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: m.text,
      children: R(e)
    })
  }
  let g = f.default.getPremiumType(r);
  return l()(null != g, "premium type should not be null in purchase confirmation"), s = null != A ? S.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: A.name
  }) : P ? S.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != M ? S.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : S.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, n.jsxs)("div", {
    className: m.confirmation,
    children: [(0, n.jsx)(x.default, {
      className: m.banner,
      theme: j,
      premiumType: g,
      type: L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? x.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? x.default.Types.PREMIUM_UPDATED : x.default.Types.PREMIUM_ACTIVATED
    }), t, T ? null : (0, n.jsx)(o.Button, {
      onClick: c,
      children: s
    })]
  })
}

function P(e) {
  let {
    planId: t,
    onClose: s
  } = e, {
    giftRecipient: i,
    selectedGiftStyle: r,
    hasSentMessage: o,
    giftMessageError: u,
    isSendingMessage: _
  } = (0, C.useGiftContext)(), f = (0, a.useStateFromStores)([p.default], () => p.default.get(t));
  l()(null != f, "Missing plan");
  let x = (0, a.useStateFromStores)([c.default], () => c.default.getGiftCode(f.skuId));
  return (0, n.jsx)(d.default, {
    giftCode: x,
    subscriptionPlan: f,
    onClose: s,
    selectedGiftStyle: r,
    hasSentMessage: o,
    giftRecipient: i,
    giftMessageError: u,
    isSendingMessage: _
  })
}