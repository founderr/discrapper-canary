"use strict";
n.r(t), n.d(t, {
  PremiumPillAndSparklesColorOptions: function() {
    return s
  },
  PremiumPillWithSparkles: function() {
    return ea
  },
  Tier0Card: function() {
    return ef
  },
  Tier2FeatureSet: function() {
    return u
  },
  Tier2FeatureItems: function() {
    return em
  },
  Tier2Card: function() {
    return e_
  },
  PremiumTierCardsVariant: function() {
    return d
  },
  default: function() {
    return eE
  }
});
var i, r, l, a, s, o, u, d, c = n("37983");
n("884691");
var f = n("414456"),
  m = n.n(f),
  _ = n("866227"),
  E = n.n(_),
  T = n("446674"),
  I = n("669491"),
  C = n("819855"),
  p = n("77078"),
  P = n("841098"),
  S = n("812204"),
  R = n("685665"),
  O = n("441413"),
  M = n("915639"),
  L = n("697218"),
  g = n("521012"),
  h = n("594098"),
  x = n("491614"),
  N = n("716589"),
  A = n("46829"),
  v = n("118503"),
  U = n("41250"),
  b = n("379863"),
  y = n("216422"),
  D = n("619911"),
  j = n("698015"),
  F = n("75196"),
  B = n("240481"),
  w = n("719923"),
  H = n("309318"),
  G = n("446488"),
  k = n("182650"),
  K = n("154889"),
  V = n("917247"),
  W = n("478968"),
  Z = n("641078"),
  z = n("992118"),
  Y = n("332291"),
  X = n("646718"),
  J = n("719347"),
  q = n("782340"),
  Q = n("350872"),
  $ = n("939784"),
  ee = n("769015");
let et = "premium_new_tier_2_gradient",
  en = "premium_old_tier_2_gradient";

function ei(e) {
  let {
    width: t = 14,
    height: n = 13,
    color: i = "white",
    foreground: r,
    ...l
  } = e;
  return (0, c.jsxs)("svg", {
    ...(0, F.default)({
      ...l
    }),
    preserveAspectRatio: "none",
    width: t,
    height: n,
    viewBox: "0 0 14 13",
    className: r,
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, c.jsxs)("defs", {
      children: [(0, c.jsxs)("linearGradient", {
        id: et,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        children: [(0, c.jsx)("stop", {
          offset: "0%",
          stopColor: "#8547C6"
        }), (0, c.jsx)("stop", {
          offset: "50%",
          stopColor: "#B845C1"
        }), (0, c.jsx)("stop", {
          offset: "100%",
          stopColor: "#AB5D8A"
        })]
      }), (0, c.jsxs)("linearGradient", {
        id: en,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        children: [(0, c.jsx)("stop", {
          offset: "0%",
          stopColor: "#B473F5"
        }), (0, c.jsx)("stop", {
          offset: "100%",
          stopColor: "#E292AA"
        })]
      })]
    }), (0, c.jsx)("path", {
      d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
      fill: i
    })]
  })
}

function er(e) {
  let {
    tier: t = X.PremiumTypes.TIER_2
  } = e, n = (0, P.default)(), i = (0, C.isThemeLight)(n);
  return (0, c.jsxs)(c.Fragment, {
    children: [!i && (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)("div", {
        className: m(Q.rimGlowVertical, {
          [Q.rimGlowVerticalTier0]: t === X.PremiumTypes.TIER_0,
          [Q.rimGlowVerticalTier2]: t === X.PremiumTypes.TIER_2
        })
      }), (0, c.jsx)(ei, {
        foreground: Q.buttonSparkleStar1
      })]
    }), (0, c.jsx)(ei, {
      foreground: Q.buttonSparkleStar2
    }), (0, c.jsx)(ei, {
      foreground: Q.buttonSparkleStar3
    }), (0, c.jsx)(ei, {
      foreground: Q.buttonSparkleStar4
    }), (0, c.jsx)(ei, {
      foreground: Q.buttonSparkleStar5
    })]
  })
}

function el(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, c.jsx)("div", {
    className: m(n, Q.freeTrialPill, {
      [Q.freeTrialPillTier0GradientFill]: 1 === i,
      [Q.freeTrialPillTier2GradientFill]: 3 === i,
      [Q.freeTrialPillTier2OldGradientFill]: 4 === i
    }),
    children: (0, c.jsx)(p.Text, {
      variant: "text-xs/bold",
      className: m(Q.freeTrialPillText, {
        [Q.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [Q.freeTrialPillTextTier0]: 0 === i,
        [Q.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function ea(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: r = 2,
    isPillOnBorder: l = !0
  } = e;
  switch (r) {
    case 1:
      t = I.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(et, ")");
      break;
    case 4:
      t = "url(#".concat(en, ")");
      break;
    default:
      t = "white"
  }
  return l ? (0, c.jsxs)("div", {
    className: m(i, Q.freeTrialPillWithSparkles),
    children: [(0, c.jsx)(ei, {
      foreground: Q.sparkleStar1,
      color: t
    }), (0, c.jsx)(ei, {
      foreground: Q.sparkleStar2,
      color: t
    }), (0, c.jsx)(ei, {
      foreground: Q.sparkleStar3,
      color: t
    }), (0, c.jsx)(el, {
      text: n,
      colorOptions: r
    }), (0, c.jsx)(ei, {
      foreground: Q.sparkleStar4,
      color: t
    }), (0, c.jsx)(ei, {
      foreground: Q.sparkleStar5,
      color: t
    })]
  }) : (0, c.jsxs)("div", {
    className: m(i, Q.freeTrialPillWithSparkles),
    children: [(0, c.jsx)(el, {
      text: n,
      colorOptions: r
    }), (0, c.jsx)(ei, {
      foreground: Q.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, c.jsx)(ei, {
      foreground: Q.sparkleStar2,
      color: t
    })]
  })
}

function es(e) {
  let {
    width: t = 83,
    height: n = 82,
    ...i
  } = e;
  return (0, c.jsxs)("svg", {
    ...(0, F.default)({
      ...i
    }),
    width: t,
    height: n,
    viewBox: "0 0 83 82",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, c.jsx)("g", {
      clipPath: "url(#clip0_1691_113820)",
      children: (0, c.jsx)("path", {
        d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
        fill: "currentColor"
      })
    }), (0, c.jsx)("path", {
      d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
      fill: "#5865F2"
    }), (0, c.jsx)("path", {
      d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
      fill: "#5865F2"
    }), (0, c.jsx)("path", {
      d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
      fill: "#5865F2"
    }), (0, c.jsx)("defs", {
      children: (0, c.jsx)("clipPath", {
        id: "clip0_1691_113820",
        children: (0, c.jsx)("rect", {
          width: "70.3636",
          height: "70.3636",
          fill: "white",
          transform: "translate(10.915 0.5) rotate(8)"
        })
      })
    })]
  })
}

function eo(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1
  } = e;
  return (0, c.jsxs)("div", {
    className: Q.item,
    children: [(0, c.jsx)(t, {
      className: Q.icon
    }), (0, c.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, c.jsx)(O.default, {
      className: Q.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function eu(e) {
  let {
    defaultPriceString: t,
    subscriptionPlan: n
  } = e, i = (0, W.useDiscountedPrice)(n);
  return (0, c.jsx)(c.Fragment, {
    children: q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
      discountedPrice: i,
      regularPrice: t
    })
  })
}

function ed(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: r,
    showYearlyPrice: l
  } = e, a = (0, T.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), s = (0, T.useStateFromStores)([L.default], () => L.default.getCurrentUser()), o = (0, k.useHasDiscountApplied)(), u = n === X.PremiumTypes.TIER_0 ? X.PremiumSubscriptionSKUs.TIER_0 : X.PremiumSubscriptionSKUs.TIER_2, d = (null == a ? void 0 : a.trialId) != null ? null == s ? void 0 : s.premiumType : o ? X.PremiumTypes.TIER_2 : null, f = (0, V.usePremiumTrialOffer)(), m = null == f ? void 0 : f.subscription_trial;
  if (!t && null != d && n === d && null != a && null != a.planIdFromItems) {
    let e = null != a.trialEndsAt ? E(null == a ? void 0 : a.trialEndsAt).diff(E(), "d") : 0,
      t = X.SubscriptionPlanInfo[a.planIdFromItems],
      n = w.default.formatPriceString(w.default.getDefaultPrice(t.id), t.interval);
    return (0, c.jsx)(c.Fragment, {
      children: (0, c.jsx)(p.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: Q.trialHeader,
        children: 0 === r ? q.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
          remainingTime: e,
          price: n
        }) : q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
          percent: 30,
          regularPrice: n
        })
      })
    })
  }
  if (!t && i) {
    var _, I, C, P;
    let e = w.default.formatPriceString(w.default.getDefaultPrice(n === X.PremiumTypes.TIER_0 ? X.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : X.SubscriptionPlans.PREMIUM_MONTH_TIER_2), X.SubscriptionIntervalTypes.MONTH);
    return (0, c.jsx)(p.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: Q.trialHeader,
      children: 0 === r ? q.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
        planName: (0, w.getTierDisplayName)(null !== (I = X.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (_ = null == m ? void 0 : m.sku_id) && void 0 !== _ ? _ : X.PremiumSubscriptionSKUs.NONE]) && void 0 !== I ? I : X.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
        duration: (0, w.formatIntervalDuration)({
          intervalType: null !== (C = null == m ? void 0 : m.interval) && void 0 !== C ? C : X.SubscriptionIntervalTypes.DAY,
          intervalCount: null !== (P = null == m ? void 0 : m.interval_count) && void 0 !== P ? P : 30,
          capitalize: !1
        }),
        price: e
      }) : (0, c.jsx)(eu, {
        defaultPriceString: e,
        subscriptionPlan: X.SubscriptionPlans.PREMIUM_MONTH_TIER_2
      })
    })
  }
  return (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(z.default, {
      subscriptionTier: u,
      isGift: t,
      className: Q.price
    }), l && (0, c.jsx)(z.default, {
      subscriptionTier: u,
      interval: X.SubscriptionIntervalTypes.YEAR,
      isGift: t,
      className: Q.price
    })]
  })
}

function ec() {
  return (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(eo, {
      Icon: j.default,
      text: q.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(X.PremiumTypes.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, c.jsx)(eo, {
      Icon: A.default,
      text: q.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, c.jsx)(eo, {
      Icon: x.default,
      text: q.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, c.jsx)(eo, {
      Icon: y.default,
      text: q.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function ef(e) {
  var t;
  let {
    showWumpus: n,
    showBadge: i,
    ctaButton: r,
    showYearlyPrice: l,
    className: a,
    isGift: s = !1,
    variant: o = 0
  } = e, u = (0, T.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), d = (0, T.useStateFromStores)([L.default], () => L.default.getCurrentUser()), f = (0, V.usePremiumTrialOffer)(), _ = null == f ? void 0 : null === (t = f.subscription_trial) || void 0 === t ? void 0 : t.sku_id, E = (null == u ? void 0 : u.trialId) != null, I = (null == u ? void 0 : u.trialId) != null ? null == d ? void 0 : d.premiumType : null, C = null != _ || E, p = 1 === o;
  return (0, c.jsxs)("div", {
    className: m(Q.tier0, Q.card, a, {
      [Q.withTier0Rim]: !s && C,
      [Q.withCardHover]: !s && C
    }),
    children: [_ === X.PremiumSubscriptionSKUs.TIER_0 ? (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: q.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: Q.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier0
      })]
    }) : null, i && (0, c.jsx)(es, {
      className: Q.newCircleIcon
    }), n ? (0, c.jsx)("div", {
      className: Q.wumpusImageContainer,
      children: (0, c.jsx)(h.default, {
        src: $,
        mediaLayoutType: J.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, s || _ !== X.PremiumSubscriptionSKUs.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: q.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: Q.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier0
      })]
    }), s || I !== X.PremiumTypes.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: q.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: Q.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier0
      })]
    }), (0, c.jsxs)("div", {
      className: m({
        [Q.body]: p
      }),
      children: [(0, c.jsxs)("div", {
        className: m({
          [Q.subscriptionPlanInfo]: p
        }),
        children: [(0, c.jsx)("div", {
          className: Q.tier0LogoContainer,
          children: (0, c.jsx)(b.default, {
            className: m(Q.tier0Title, Q.title)
          })
        }), (0, c.jsx)(ed, {
          isGift: s,
          premiumTier: X.PremiumTypes.TIER_0,
          offerType: 0,
          offerTierMatchesCard: _ === X.PremiumSubscriptionSKUs.TIER_0,
          showYearlyPrice: l
        })]
      }), (0, c.jsx)("div", {
        children: (0, c.jsx)(ec, {})
      })]
    }), r, s || _ !== X.PremiumSubscriptionSKUs.TIER_0 ? null : (0, c.jsx)(er, {
      tier: X.PremiumTypes.TIER_0
    })]
  })
}

function em(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, T.useStateFromStores)([M.default], () => M.default.locale), l = (0, T.useStateFromStores)([G.default], () => G.default.affinities), {
    planSelectionEnabled: a
  } = H.default.useExperiment({
    location: "planSelection"
  }, {
    autoTrackExposure: !1
  }), s = n && !i && l.length > 0;
  s && H.default.trackExposure({
    location: "planSelection"
  });
  if (1 === t) return (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(eo, {
      Icon: v.default,
      text: q.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
        numBoosts: X.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        percentageOff: (0, B.formatPercent)(r, X.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, c.jsx)(eo, {
      Icon: j.default,
      text: q.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(X.PremiumTypes.TIER_2, {
          useSpace: !1
        })
      })
    }), (0, c.jsx)(eo, {
      Icon: A.default,
      text: q.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, c.jsx)(eo, {
      Icon: D.default,
      text: q.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
    }), (0, c.jsx)(eo, {
      Icon: N.default,
      text: q.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
    })]
  });
  return (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(eo, {
      Icon: j.default,
      text: q.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(X.PremiumTypes.TIER_2, {
          useSpace: !1
        })
      })
    }), (0, c.jsx)(eo, {
      Icon: A.default,
      text: q.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, c.jsx)(eo, {
      Icon: x.default,
      text: q.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, c.jsx)(eo, {
      Icon: D.default,
      text: q.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
    }), (0, c.jsx)(eo, {
      Icon: v.default,
      text: q.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
    }), (0, c.jsx)(eo, {
      Icon: N.default,
      text: q.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
    }), a && s && (0, c.jsx)(Y.default, {})]
  })
}

function e_(e) {
  var t;
  let {
    showWumpus: n,
    ctaButton: i,
    showYearlyPrice: r,
    featureSet: l = 0,
    className: a,
    isGift: s = !1,
    isModal: o = !1,
    variant: u = 0
  } = e, d = (0, T.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), f = (0, T.useStateFromStores)([L.default], () => L.default.getCurrentUser()), _ = (0, V.usePremiumTrialOffer)(), E = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id, I = (null == d ? void 0 : d.trialId) != null ? null == f ? void 0 : f.premiumType : null, C = (0, k.useIsInPremiumOfferExperience)(), P = (0, K.usePremiumDiscountOffer)(), S = (0, k.useHasDiscountApplied)(), R = null != E || null != I ? 0 : null != P || S ? 1 : null, O = 1 === u, M = (0, Z.useIsEligibleForBogoPromotion)(), x = (0, Z.getBOGOPillCopy)();
  return (0, c.jsxs)("div", {
    className: m(Q.tier2, Q.card, a, {
      [Q.withTier2Rim]: !s && C,
      [Q.withCardHover]: !s && C
    }),
    children: [!s && null != P && (0, K.discountOfferHasTier)(P, X.PremiumSubscriptionSKUs.TIER_2) && void 0 !== P.discount.amount ? (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: S ? q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : q.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: P.discount.amount
        }),
        className: Q.topRimPill,
        colorOptions: 2
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier2
      })]
    }) : null, s || E !== X.PremiumSubscriptionSKUs.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: q.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: Q.topRimPill,
        colorOptions: 2
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier2
      })]
    }), s || I !== X.PremiumTypes.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: q.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: Q.topRimPill,
        colorOptions: 2
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier2
      })]
    }), !s && S && (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(ea, {
        text: q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: Q.topRimPill,
        colorOptions: 2
      }), (0, c.jsx)("div", {
        className: Q.rimGlowTier2
      })]
    }), n ? (0, c.jsx)("div", {
      className: Q.wumpusImageContainer,
      children: (0, c.jsx)(h.default, {
        src: ee,
        mediaLayoutType: J.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, c.jsxs)("div", {
      className: m({
        [Q.body]: O
      }),
      children: [(0, c.jsxs)("div", {
        className: m({
          [Q.subscriptionPlanInfo]: O
        }),
        children: [(0, c.jsx)(U.default, {
          className: m(Q.tier2Title, Q.title)
        }), !s && E !== X.PremiumSubscriptionSKUs.TIER_2 && M && (0, c.jsx)(p.Text, {
          variant: "text-xs/bold",
          className: Q.freeTrialPillInline,
          children: x
        }), (0, c.jsx)(ed, {
          isGift: s,
          premiumTier: X.PremiumTypes.TIER_2,
          offerType: R,
          offerTierMatchesCard: E === X.PremiumSubscriptionSKUs.TIER_2 || (0, K.discountOfferHasTier)(P, X.PremiumSubscriptionSKUs.TIER_2),
          showYearlyPrice: r
        })]
      }), (0, c.jsx)("div", {
        children: (0, c.jsx)(em, {
          featureSet: l,
          isModal: o,
          isGift: s
        })
      })]
    }), i, s || E !== X.PremiumSubscriptionSKUs.TIER_2 && null == P ? null : (0, c.jsx)(er, {
      tier: X.PremiumTypes.TIER_2
    })]
  })
}

function eE(e) {
  let {
    showWumpus: t,
    showBadge: n,
    tier0CTAButton: i,
    tier2CTAButton: r,
    className: l,
    variant: a = 0,
    selectedPremiumType: s
  } = e, {
    AnalyticsLocationProvider: o
  } = (0, R.default)(S.default.PREMIUM_MARKETING_TIER_CARD), u = 1 === a, d = s === X.PremiumTypes.TIER_0;
  return (0, c.jsx)(o, {
    children: (0, c.jsxs)("div", {
      className: m({
        [Q.premiumCards]: !u,
        [Q.premiumCardsStackedVariant]: u
      }, l),
      children: [(0, c.jsx)(ef, {
        className: m({
          [Q.tierCardFocused]: u && d,
          [Q.tierCardHidden]: u && !d
        }),
        showWumpus: t,
        showBadge: n,
        ctaButton: i,
        variant: a
      }), (0, c.jsx)(e_, {
        className: m({
          [Q.tierCardFocused]: u && !d,
          [Q.tierCardHidden]: u && d
        }),
        showWumpus: t,
        ctaButton: r,
        variant: a
      })]
    })
  })
}(i = s || (s = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", (r = o || (o = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = u || (u = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING", (a = d || (d = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.STACKED = 1] = "STACKED"