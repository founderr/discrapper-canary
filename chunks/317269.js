n.d(s, {
  TB: function() {
    return j
  },
  VY: function() {
    return T
  },
  ZP: function() {
    return N
  }
}), n(47120), n(411104);
var t = n(735250),
  i = n(470079),
  l = n(512722),
  r = n.n(l),
  C = n(442837),
  a = n(481060),
  o = n(16084),
  d = n(987209),
  _ = n(179118),
  u = n(912788),
  c = n(509545),
  p = n(55563),
  x = n(74538),
  L = n(741245),
  I = n(474936),
  E = n(981631),
  h = n(689938),
  f = n(268279);

function M(e) {
  var s, n;
  let i, {
      planId: l,
      startingPremiumSubscriptionPlanId: a,
      paymentSourceType: o
    } = e,
    [d, _] = (0, C.Wu)([c.Z], () => [c.Z.get(a), c.Z.get(l)]);
  if (r()(null != d && null != _, "Missing startingPlan or newPlan"), s = a, n = l, I.Y1.indexOf(s) < I.Y1.indexOf(n)) switch (l) {
      case I.Xh.PREMIUM_MONTH_TIER_1:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) && (i = h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case I.Xh.PREMIUM_MONTH_TIER_2:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) && (i = h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case I.Xh.PREMIUM_YEAR_TIER_1:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) && (i = h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case I.Xh.PREMIUM_YEAR_TIER_2:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: I.cb
        }), E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) && (i = h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: I.cb
        }));
        break;
      case I.Xh.PREMIUM_3_MONTH_TIER_2:
      case I.Xh.PREMIUM_6_MONTH_TIER_2:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case I.Xh.PREMIUM_MONTH_TIER_0:
      case I.Xh.PREMIUM_YEAR_TIER_0:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(l))
    } else if (d.skuId === I.Si.TIER_2 && _.skuId === I.Si.TIER_1) i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (_.skuId) {
      case I.Si.TIER_0:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case I.Si.TIER_1:
        i = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case I.Si.TIER_2:
        i = 1 !== d.intervalCount ? h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(_.skuId))
    }
  return (0, t.jsx)("div", {
    className: f.text,
    children: i
  })
}

function N(e) {
  let s, n, {
      planId: l,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: _,
      onClose: u,
      followupSKUInfo: N,
      isDowngrade: j,
      hideClose: T,
      postSuccessGuild: A,
      paymentSourceType: S
    } = e,
    {
      theme: g
    } = (0, a.useThemeContext)(),
    R = (0, C.e7)([p.Z], () => null != N ? p.Z.get(N.id) : null);
  i.useEffect(() => {
    if (null == N || null != R) return;
    let {
      applicationId: e,
      id: s
    } = N;
    (0, o.$N)(e, s).catch(E.VqG)
  }, [N, R]);
  let m = e => {
    if (e.skuId === I.Si.TIER_0) return E.X7u.has(null != S ? S : E.HeQ.UNKNOWN) ? h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === I.Si.TIER_1) return E.X7u.has(null != S ? S : E.HeQ.UNKNOWN) ? h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return E.X7u.has(null != S ? S : E.HeQ.UNKNOWN) ? h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != R) s = (0, t.jsx)("div", {
    className: f.text,
    children: h.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: R.name
    })
  });
  else if (null != _) s = (0, t.jsx)(M, {
    planId: l,
    startingPremiumSubscriptionPlanId: _
  });
  else if (null != A) {
    let e = c.Z.get(l);
    r()(null != e, "Missing plan"), s = (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)("div", {
        className: f.text,
        children: m(e)
      }), (0, t.jsx)("div", {
        className: f.text,
        children: h.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: A.name
        })
      })]
    })
  } else {
    let e = c.Z.get(l);
    r()(null != e, "Missing plan"), s = (0, t.jsx)("div", {
      className: f.text,
      children: m(e)
    })
  }
  let P = x.ZP.getPremiumType(l);
  return r()(null != P, "premium type should not be null in purchase confirmation"), n = null != R ? h.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: R.name
  }) : j ? h.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != A ? h.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : h.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, t.jsxs)("div", {
    className: f.confirmation,
    children: [(0, t.jsx)(L.C, {
      className: f.banner,
      theme: g,
      premiumType: P,
      type: E.X7u.has(null != S ? S : E.HeQ.UNKNOWN) ? L.C.Types.PREMIUM_PAYMENT_STARTED : null != _ ? L.C.Types.PREMIUM_UPDATED : L.C.Types.PREMIUM_ACTIVATED
    }), s, T ? null : (0, t.jsx)(a.Button, {
      onClick: u,
      children: n
    })]
  })
}

function j(e) {
  let {
    planId: s,
    onClose: n
  } = e, {
    giftRecipient: i,
    selectedGiftStyle: l,
    hasSentMessage: a,
    giftMessageError: o,
    isSendingMessage: p
  } = (0, d.wD)(), x = (0, C.e7)([c.Z], () => c.Z.get(s));
  r()(null != x, "Missing plan");
  let L = (0, C.e7)([u.Z], () => u.Z.getGiftCode(x.skuId));
  return (0, t.jsx)(_.Z, {
    giftCode: L,
    subscriptionPlan: x,
    onClose: n,
    selectedGiftStyle: l,
    hasSentMessage: a,
    giftRecipient: i,
    giftMessageError: o,
    isSendingMessage: p
  })
}

function T() {
  return (0, t.jsxs)("div", {
    className: f.redirectConfirmation,
    children: [(0, t.jsx)(a.Heading, {
      variant: "heading-xl/bold",
      children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
    }), (0, t.jsxs)("div", {
      className: f.redirectBody,
      children: [(0, t.jsx)(a.Text, {
        variant: "text-md/normal",
        children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
      }), (0, t.jsx)("br", {}), (0, t.jsx)(a.Text, {
        variant: "text-md/normal",
        children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
      })]
    })]
  })
}