"use strict";
s.r(t), s.d(t, {
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return P
  },
  PremiumSubscriptionHandoffPurchaseConfirmation: function() {
    return M
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
  C = s("16084"),
  u = s("987209"),
  d = s("179118"),
  c = s("912788"),
  p = s("509545"),
  _ = s("55563"),
  f = s("74538"),
  x = s("741245"),
  m = s("474936"),
  L = s("981631"),
  E = s("689938"),
  S = s("889158");

function I(e) {
  var t, s;
  let i, {
      planId: r,
      startingPremiumSubscriptionPlanId: o,
      paymentSourceType: C
    } = e,
    [u, d] = (0, a.useStateFromStoresArray)([p.default], () => [p.default.get(o), p.default.get(r)]);
  if (l()(null != u && null != d, "Missing startingPlan or newPlan"), t = o, s = r, m.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < m.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s)) switch (r) {
      case m.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, L.DELAYED_PAYMENTS.has(null != C ? C : L.PaymentSourceTypes.UNKNOWN) && (i = E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case m.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, L.DELAYED_PAYMENTS.has(null != C ? C : L.PaymentSourceTypes.UNKNOWN) && (i = E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case m.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, L.DELAYED_PAYMENTS.has(null != C ? C : L.PaymentSourceTypes.UNKNOWN) && (i = E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case m.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: m.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), L.DELAYED_PAYMENTS.has(null != C ? C : L.PaymentSourceTypes.UNKNOWN) && (i = E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: m.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case m.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case m.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case m.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case m.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(r))
    } else if (u.skuId === m.PremiumSubscriptionSKUs.TIER_2 && d.skuId === m.PremiumSubscriptionSKUs.TIER_1) i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (d.skuId) {
      case m.PremiumSubscriptionSKUs.TIER_0:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case m.PremiumSubscriptionSKUs.TIER_1:
        i = E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case m.PremiumSubscriptionSKUs.TIER_2:
        i = 1 !== u.intervalCount ? E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(d.skuId))
    }
  return (0, n.jsx)("div", {
    className: S.text,
    children: i
  })
}

function h(e) {
  let t, s, {
      planId: r,
      enableNoPaymentTrial: u,
      startingPremiumSubscriptionPlanId: d,
      onClose: c,
      followupSKUInfo: h,
      isDowngrade: P,
      hideClose: M,
      postSuccessGuild: T,
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
    (0, C.fetchPublishedSKU)(e, t).catch(L.NOOP_NULL)
  }, [h, A]);
  let R = e => {
    if (e.skuId === m.PremiumSubscriptionSKUs.TIER_0) return L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === m.PremiumSubscriptionSKUs.TIER_1) return L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? E.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : u ? E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : E.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != A) t = (0, n.jsx)("div", {
    className: S.text,
    children: E.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: A.name
    })
  });
  else if (null != d) t = (0, n.jsx)(I, {
    planId: r,
    startingPremiumSubscriptionPlanId: d
  });
  else if (null != T) {
    let e = p.default.get(r);
    l()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: S.text,
        children: R(e)
      }), (0, n.jsx)("div", {
        className: S.text,
        children: E.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: T.name
        })
      })]
    })
  } else {
    let e = p.default.get(r);
    l()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: S.text,
      children: R(e)
    })
  }
  let g = f.default.getPremiumType(r);
  return l()(null != g, "premium type should not be null in purchase confirmation"), s = null != A ? E.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: A.name
  }) : P ? E.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != T ? E.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : E.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, n.jsxs)("div", {
    className: S.confirmation,
    children: [(0, n.jsx)(x.default, {
      className: S.banner,
      theme: j,
      premiumType: g,
      type: L.DELAYED_PAYMENTS.has(null != N ? N : L.PaymentSourceTypes.UNKNOWN) ? x.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? x.default.Types.PREMIUM_UPDATED : x.default.Types.PREMIUM_ACTIVATED
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
    giftRecipient: i,
    selectedGiftStyle: r,
    hasSentMessage: o,
    giftMessageError: C,
    isSendingMessage: _
  } = (0, u.useGiftContext)(), f = (0, a.useStateFromStores)([p.default], () => p.default.get(t));
  l()(null != f, "Missing plan");
  let x = (0, a.useStateFromStores)([c.default], () => c.default.getGiftCode(f.skuId));
  return (0, n.jsx)(d.default, {
    giftCode: x,
    subscriptionPlan: f,
    onClose: s,
    selectedGiftStyle: r,
    hasSentMessage: o,
    giftRecipient: i,
    giftMessageError: C,
    isSendingMessage: _
  })
}

function M() {
  return (0, n.jsxs)("div", {
    className: S.redirectConfirmation,
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xl/bold",
      children: E.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
    }), (0, n.jsxs)("div", {
      className: S.redirectBody,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: E.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
      }), (0, n.jsx)("br", {}), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: E.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
      })]
    })]
  })
}