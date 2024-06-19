s.d(_, {
  TB: function() {
    return P
  },
  VY: function() {
    return S
  },
  ZP: function() {
    return A
  }
}), s(47120), s(411104);
var n = s(735250),
  I = s(470079),
  t = s(512722),
  l = s.n(t),
  a = s(442837),
  i = s(481060),
  r = s(16084),
  N = s(987209),
  o = s(179118),
  E = s(912788),
  u = s(509545),
  T = s(55563),
  R = s(74538),
  c = s(741245),
  M = s(474936),
  O = s(981631),
  d = s(689938),
  L = s(268279);

function C(e) {
  var _, s;
  let I, {
      planId: t,
      startingPremiumSubscriptionPlanId: i,
      paymentSourceType: r
    } = e,
    [N, o] = (0, a.Wu)([u.Z], () => [u.Z.get(i), u.Z.get(t)]);
  if (l()(null != N && null != o, "Missing startingPlan or newPlan"), _ = i, s = t, M.Y1.indexOf(_) < M.Y1.indexOf(s)) switch (t) {
      case M.Xh.PREMIUM_MONTH_TIER_1:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, O.X7u.has(null != r ? r : O.HeQ.UNKNOWN) && (I = d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case M.Xh.PREMIUM_MONTH_TIER_2:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, O.X7u.has(null != r ? r : O.HeQ.UNKNOWN) && (I = d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case M.Xh.PREMIUM_YEAR_TIER_1:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, O.X7u.has(null != r ? r : O.HeQ.UNKNOWN) && (I = d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case M.Xh.PREMIUM_YEAR_TIER_2:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: M.cb
        }), O.X7u.has(null != r ? r : O.HeQ.UNKNOWN) && (I = d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: M.cb
        }));
        break;
      case M.Xh.PREMIUM_3_MONTH_TIER_2:
      case M.Xh.PREMIUM_6_MONTH_TIER_2:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case M.Xh.PREMIUM_MONTH_TIER_0:
      case M.Xh.PREMIUM_YEAR_TIER_0:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(t))
    } else if (N.skuId === M.Si.TIER_2 && o.skuId === M.Si.TIER_1) I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (o.skuId) {
      case M.Si.TIER_0:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case M.Si.TIER_1:
        I = d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case M.Si.TIER_2:
        I = 1 !== N.intervalCount ? d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(o.skuId))
    }
  return (0, n.jsx)("div", {
    className: L.text,
    children: I
  })
}

function A(e) {
  let _, s, {
      planId: t,
      enableNoPaymentTrial: N,
      startingPremiumSubscriptionPlanId: o,
      onClose: E,
      followupSKUInfo: A,
      isDowngrade: P,
      hideClose: S,
      postSuccessGuild: U,
      paymentSourceType: Z
    } = e,
    {
      theme: m
    } = (0, i.useThemeContext)(),
    f = (0, a.e7)([T.Z], () => null != A ? T.Z.get(A.id) : null);
  I.useEffect(() => {
    if (null == A || null != f) return;
    let {
      applicationId: e,
      id: _
    } = A;
    (0, r.$N)(e, _).catch(O.VqG)
  }, [A, f]);
  let g = e => {
    if (e.skuId === M.Si.TIER_0) return O.X7u.has(null != Z ? Z : O.HeQ.UNKNOWN) ? d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === M.Si.TIER_1) return O.X7u.has(null != Z ? Z : O.HeQ.UNKNOWN) ? d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return O.X7u.has(null != Z ? Z : O.HeQ.UNKNOWN) ? d.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : N ? d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : d.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != f) _ = (0, n.jsx)("div", {
    className: L.text,
    children: d.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: f.name
    })
  });
  else if (null != o) _ = (0, n.jsx)(C, {
    planId: t,
    startingPremiumSubscriptionPlanId: o
  });
  else if (null != U) {
    let e = u.Z.get(t);
    l()(null != e, "Missing plan"), _ = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: L.text,
        children: g(e)
      }), (0, n.jsx)("div", {
        className: L.text,
        children: d.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: U.name
        })
      })]
    })
  } else {
    let e = u.Z.get(t);
    l()(null != e, "Missing plan"), _ = (0, n.jsx)("div", {
      className: L.text,
      children: g(e)
    })
  }
  let G = R.ZP.getPremiumType(t);
  return l()(null != G, "premium type should not be null in purchase confirmation"), s = null != f ? d.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: f.name
  }) : P ? d.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != U ? d.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : d.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, n.jsxs)("div", {
    className: L.confirmation,
    children: [(0, n.jsx)(c.C, {
      className: L.banner,
      theme: m,
      premiumType: G,
      type: O.X7u.has(null != Z ? Z : O.HeQ.UNKNOWN) ? c.C.Types.PREMIUM_PAYMENT_STARTED : null != o ? c.C.Types.PREMIUM_UPDATED : c.C.Types.PREMIUM_ACTIVATED
    }), _, S ? null : (0, n.jsx)(i.Button, {
      onClick: E,
      children: s
    })]
  })
}

function P(e) {
  let {
    planId: _,
    onClose: s
  } = e, {
    giftRecipient: I,
    selectedGiftStyle: t,
    hasSentMessage: i,
    giftMessageError: r,
    isSendingMessage: T
  } = (0, N.wD)(), R = (0, a.e7)([u.Z], () => u.Z.get(_));
  l()(null != R, "Missing plan");
  let c = (0, a.e7)([E.Z], () => E.Z.getGiftCode(R.skuId));
  return (0, n.jsx)(o.Z, {
    giftCode: c,
    subscriptionPlan: R,
    onClose: s,
    selectedGiftStyle: t,
    hasSentMessage: i,
    giftRecipient: I,
    giftMessageError: r,
    isSendingMessage: T
  })
}

function S() {
  return (0, n.jsxs)("div", {
    className: L.redirectConfirmation,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xl/bold",
      children: d.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
    }), (0, n.jsxs)("div", {
      className: L.redirectBody,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: d.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
      }), (0, n.jsx)("br", {}), (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: d.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
      })]
    })]
  })
}