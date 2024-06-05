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
  l = s("470079"),
  r = s("512722"),
  i = s.n(r),
  a = s("442837"),
  o = s("481060"),
  u = s("16084"),
  C = s("987209"),
  d = s("179118"),
  c = s("912788"),
  p = s("509545"),
  _ = s("55563"),
  f = s("74538"),
  E = s("741245"),
  x = s("474936"),
  L = s("981631"),
  m = s("689938"),
  S = s("889158");

function I(e) {
  var t, s;
  let l, {
      planId: r,
      startingPremiumSubscriptionPlanId: o,
      paymentSourceType: u
    } = e,
    [C, d] = (0, a.useStateFromStoresArray)([p.default], () => [p.default.get(o), p.default.get(r)]);
  if (i()(null != C && null != d, "Missing startingPlan or newPlan"), t = o, s = r, x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s)) switch (r) {
      case x.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (l = m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case x.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (l = m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case x.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (l = m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case x.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), L.DELAYED_PAYMENTS.has(null != u ? u : L.PaymentSourceTypes.UNKNOWN) && (l = m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case x.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case x.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case x.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case x.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(r))
    } else if (C.skuId === x.PremiumSubscriptionSKUs.TIER_2 && d.skuId === x.PremiumSubscriptionSKUs.TIER_1) l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (d.skuId) {
      case x.PremiumSubscriptionSKUs.TIER_0:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case x.PremiumSubscriptionSKUs.TIER_1:
        l = m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case x.PremiumSubscriptionSKUs.TIER_2:
        l = 1 !== C.intervalCount ? m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(d.skuId))
    }
  return (0, n.jsx)("div", {
    className: S.text,
    children: l
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
      hideClose: M,
      postSuccessGuild: N,
      paymentSourceType: T
    } = e,
    {
      theme: A
    } = (0, o.useThemeContext)(),
    j = (0, a.useStateFromStores)([_.default], () => null != h ? _.default.get(h.id) : null);
  l.useEffect(() => {
    if (null == h || null != j) return;
    let {
      applicationId: e,
      id: t
    } = h;
    (0, u.fetchPublishedSKU)(e, t).catch(L.NOOP_NULL)
  }, [h, j]);
  let R = e => {
    if (e.skuId === x.PremiumSubscriptionSKUs.TIER_0) return L.DELAYED_PAYMENTS.has(null != T ? T : L.PaymentSourceTypes.UNKNOWN) ? m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === x.PremiumSubscriptionSKUs.TIER_1) return L.DELAYED_PAYMENTS.has(null != T ? T : L.PaymentSourceTypes.UNKNOWN) ? m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return L.DELAYED_PAYMENTS.has(null != T ? T : L.PaymentSourceTypes.UNKNOWN) ? m.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : C ? m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : m.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != j) t = (0, n.jsx)("div", {
    className: S.text,
    children: m.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: j.name
    })
  });
  else if (null != d) t = (0, n.jsx)(I, {
    planId: r,
    startingPremiumSubscriptionPlanId: d
  });
  else if (null != N) {
    let e = p.default.get(r);
    i()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: S.text,
        children: R(e)
      }), (0, n.jsx)("div", {
        className: S.text,
        children: m.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: N.name
        })
      })]
    })
  } else {
    let e = p.default.get(r);
    i()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: S.text,
      children: R(e)
    })
  }
  let g = f.default.getPremiumType(r);
  return i()(null != g, "premium type should not be null in purchase confirmation"), s = null != j ? m.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: j.name
  }) : P ? m.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != N ? m.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : m.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, n.jsxs)("div", {
    className: S.confirmation,
    children: [(0, n.jsx)(E.default, {
      className: S.banner,
      theme: A,
      premiumType: g,
      type: L.DELAYED_PAYMENTS.has(null != T ? T : L.PaymentSourceTypes.UNKNOWN) ? E.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? E.default.Types.PREMIUM_UPDATED : E.default.Types.PREMIUM_ACTIVATED
    }), t, M ? null : (0, n.jsx)(o.Button, {
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
    giftRecipient: l,
    selectedGiftStyle: r,
    hasSentMessage: o,
    giftMessageError: u,
    isSendingMessage: _
  } = (0, C.useGiftContext)(), f = (0, a.useStateFromStores)([p.default], () => p.default.get(t));
  i()(null != f, "Missing plan");
  let E = (0, a.useStateFromStores)([c.default], () => c.default.getGiftCode(f.skuId));
  return (0, n.jsx)(d.default, {
    giftCode: E,
    subscriptionPlan: f,
    onClose: s,
    selectedGiftStyle: r,
    hasSentMessage: o,
    giftRecipient: l,
    giftMessageError: u,
    isSendingMessage: _
  })
}