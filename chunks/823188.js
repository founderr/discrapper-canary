"use strict";
n.r(t), n.d(t, {
  PremiumPillAndSparklesColorOptions: function() {
    return o
  },
  PremiumPillWithSparkles: function() {
    return ei
  },
  Tier0Card: function() {
    return el
  },
  Tier2Card: function() {
    return ed
  },
  Tier2FeatureItems: function() {
    return eu
  },
  Tier2FeatureSet: function() {
    return u
  },
  default: function() {
    return e_
  }
});
var i, r, s, a, o, l, u, d, _ = n("735250");
n("470079");
var c = n("120356"),
  E = n.n(c),
  I = n("913527"),
  T = n.n(I),
  f = n("442837"),
  S = n("692547"),
  h = n("780384"),
  A = n("481060"),
  m = n("410030"),
  N = n("100527"),
  p = n("906732"),
  O = n("535322"),
  C = n("706454"),
  R = n("594174"),
  g = n("78839"),
  L = n("332475"),
  v = n("533496"),
  D = n("771357"),
  M = n("642113"),
  y = n("709586"),
  P = n("483444"),
  U = n("599250"),
  b = n("466111"),
  G = n("761374"),
  w = n("363138"),
  k = n("930153"),
  B = n("74538"),
  V = n("357355"),
  x = n("140465"),
  F = n("424082"),
  H = n("650032"),
  Y = n("104494"),
  j = n("639119"),
  W = n("230916"),
  K = n("248042"),
  z = n("504865"),
  Z = n("63802"),
  X = n("318990"),
  Q = n("474936"),
  q = n("768760"),
  J = n("689938"),
  $ = n("988332"),
  ee = n("476945"),
  et = n("945182");

function en(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, _.jsx)("div", {
    className: E()(n, $.freeTrialPill, {
      [$.freeTrialPillTier0GradientFill]: 1 === i,
      [$.freeTrialPillTier2GradientFill]: 3 === i,
      [$.freeTrialPillTier2OldGradientFill]: 4 === i,
      [$.lightBackgroundPill]: 5 === i
    }),
    children: (0, _.jsx)(A.Text, {
      variant: "text-xs/bold",
      className: E()($.freeTrialPillText, {
        [$.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [$.freeTrialPillTextTier0]: 0 === i,
        [$.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function ei(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: r = 2,
    isPillOnBorder: s = !0
  } = e;
  switch (r) {
    case 1:
      t = S.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(Z.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(Z.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, _.jsxs)("div", {
    className: E()(i, $.freeTrialPillWithSparkles),
    children: [(0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar1,
      color: t
    }), (0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar2,
      color: t
    }), (0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar3,
      color: t
    }), (0, _.jsx)(en, {
      text: n,
      colorOptions: r
    }), (0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar4,
      color: t
    }), (0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar5,
      color: t
    })]
  }) : (0, _.jsxs)("div", {
    className: E()(i, $.freeTrialPillWithSparkles),
    children: [(0, _.jsx)(en, {
      text: n,
      colorOptions: r
    }), (0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, _.jsx)(Z.SparkleStar, {
      foreground: $.sparkleStar2,
      color: t
    })]
  })
}

function er(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1
  } = e;
  return (0, _.jsxs)("div", {
    className: $.item,
    children: [(0, _.jsx)(t, {
      className: $.icon
    }), (0, _.jsx)(A.Text, {
      variant: "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, _.jsx)(O.default, {
      className: $.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function es(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: r
  } = e, s = (0, W.useDiscountedPrice)(i);
  return (0, _.jsx)(_.Fragment, {
    children: J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
      numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : Q.DISCOUNT_DURATION_FALLBACK,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function ea(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: r,
    showYearlyPrice: s,
    priceOptions: a
  } = e, o = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), l = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), u = (0, x.useHasDiscountApplied)(), {
    annualDiscountPercentage: d
  } = (0, F.getAnnualDiscountsExperimentConfig)("PremiumTierCards"), c = (0, x.useActiveDiscountInfo)(), E = n === Q.PremiumTypes.TIER_0 ? Q.PremiumSubscriptionSKUs.TIER_0 : Q.PremiumSubscriptionSKUs.TIER_2, I = (null == o ? void 0 : o.trialId) != null ? null == l ? void 0 : l.premiumType : u ? Q.PremiumTypes.TIER_2 : null, S = (0, j.usePremiumTrialOffer)(), h = (0, Y.usePremiumDiscountOffer)(), m = null == S ? void 0 : S.subscription_trial;
  if (!t && null != I && n === I && null != o && null != o.planIdFromItems) {
    let e = null != o.trialEndsAt ? T()(null == o ? void 0 : o.trialEndsAt).diff(T()(), "d") : 0,
      t = Q.SubscriptionPlanInfo[o.planIdFromItems],
      n = B.default.formatPriceString(B.default.getDefaultPrice(t.id), t.interval);
    return (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: $.trialHeader,
        children: (() => {
          var t, i, s;
          if (0 === r) J.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: e,
            price: n
          });
          else if (o.planIdFromItems === Q.SubscriptionPlans.PREMIUM_YEAR_TIER_2) return J.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (t = null == c ? void 0 : c.percentage) && void 0 !== t ? t : d,
            regularPrice: n
          });
          else return J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (i = null == c ? void 0 : c.percentage) && void 0 !== i ? i : Q.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: n,
            numMonths: null !== (s = null == c ? void 0 : c.duration) && void 0 !== s ? s : Q.DISCOUNT_DURATION_FALLBACK
          })
        })()
      })
    })
  }
  if (!t && i) {
    let e = B.default.formatPriceString(B.default.getDefaultPrice(n === Q.PremiumTypes.TIER_0 ? Q.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2), Q.SubscriptionIntervalTypes.MONTH);
    if (0 === r) {
      var N, p, O, C;
      return (0, _.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: $.trialHeader,
        children: J.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
          planName: (0, B.getTierDisplayName)(null !== (p = Q.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (N = null == m ? void 0 : m.sku_id) && void 0 !== N ? N : Q.PremiumSubscriptionSKUs.NONE]) && void 0 !== p ? p : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
          duration: (0, B.formatIntervalDuration)({
            intervalType: null !== (O = null == m ? void 0 : m.interval) && void 0 !== O ? O : Q.SubscriptionIntervalTypes.DAY,
            intervalCount: null !== (C = null == m ? void 0 : m.interval_count) && void 0 !== C ? C : 30,
            capitalize: !1
          }),
          price: e
        })
      })
    }
    if (null != h) return (0, _.jsx)(A.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: $.trialHeader,
      children: (0, _.jsx)(es, {
        defaultPriceString: e,
        subscriptionPlan: Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        discountOffer: h
      })
    })
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(z.default, {
      subscriptionTier: E,
      isGift: t,
      className: $.price,
      priceOptions: a
    }), s && (0, _.jsx)(z.default, {
      subscriptionTier: E,
      interval: Q.SubscriptionIntervalTypes.YEAR,
      isGift: t,
      className: $.price,
      priceOptions: a
    })]
  })
}

function eo() {
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(er, {
      Icon: w.default,
      text: J.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, B.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, _.jsx)(er, {
      Icon: M.default,
      text: J.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, _.jsx)(er, {
      Icon: v.default,
      text: J.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, _.jsx)(er, {
      Icon: b.default,
      text: J.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function el(e) {
  var t;
  let {
    showWumpus: n,
    ctaButton: i,
    showYearlyPrice: r,
    className: s,
    isGift: a = !1,
    priceOptions: o
  } = e, l = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), u = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), d = (0, j.usePremiumTrialOffer)(), c = null == d ? void 0 : null === (t = d.subscription_trial) || void 0 === t ? void 0 : t.sku_id, I = (null == l ? void 0 : l.trialId) != null, T = (null == l ? void 0 : l.trialId) != null ? null == u ? void 0 : u.premiumType : null, S = null != c || I;
  return (0, _.jsxs)("div", {
    className: E()($.tier0, $.card, s, {
      [$.withTier0Rim]: !a && S,
      [$.withCardHover]: !a && S
    }),
    children: [c === Q.PremiumSubscriptionSKUs.TIER_0 ? (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: J.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: $.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: $.rimGlowTier0
      })]
    }) : null, n ? (0, _.jsx)("div", {
      className: $.wumpusImageContainer,
      children: (0, _.jsx)(L.default, {
        src: ee,
        mediaLayoutType: q.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, a || c !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: J.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: $.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: $.rimGlowTier0
      })]
    }), a || T !== Q.PremiumTypes.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: J.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: $.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: $.rimGlowTier0
      })]
    }), (0, _.jsxs)("div", {
      children: [(0, _.jsxs)("div", {
        children: [(0, _.jsx)("div", {
          children: (0, _.jsx)(U.default, {
            className: E()($.title, $.tier0Title)
          })
        }), (0, _.jsx)(ea, {
          isGift: a,
          premiumTier: Q.PremiumTypes.TIER_0,
          offerType: 0,
          offerTierMatchesCard: c === Q.PremiumSubscriptionSKUs.TIER_0,
          showYearlyPrice: r,
          priceOptions: o
        })]
      }), (0, _.jsx)("div", {
        children: (0, _.jsx)(eo, {})
      })]
    }), i, a || c !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsx)(Z.ButtonSparkleGroup, {
      tier: Q.PremiumTypes.TIER_0
    })]
  })
}

function eu(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, f.useStateFromStores)([C.default], () => C.default.locale), s = (0, f.useStateFromStores)([V.default], () => V.default.affinities), a = n && !i && s.length > 0;
  if (1 === t) return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(er, {
      Icon: y.default,
      text: J.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
        numBoosts: Q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        percentageOff: (0, k.formatPercent)(r, Q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, _.jsx)(er, {
      Icon: w.default,
      text: J.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, B.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
          useSpace: !1
        })
      })
    }), (0, _.jsx)(er, {
      Icon: M.default,
      text: J.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, _.jsx)(er, {
      Icon: G.default,
      text: J.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
    }), (0, _.jsx)(er, {
      Icon: D.default,
      text: J.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
    })]
  });
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(er, {
      Icon: w.default,
      text: J.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, B.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
          useSpace: !1
        })
      })
    }), (0, _.jsx)(er, {
      Icon: M.default,
      text: J.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, _.jsx)(er, {
      Icon: v.default,
      text: J.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, _.jsx)(er, {
      Icon: G.default,
      text: J.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
    }), (0, _.jsx)(er, {
      Icon: y.default,
      text: J.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
    }), (0, _.jsx)(er, {
      Icon: D.default,
      text: J.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
    }), a && (0, _.jsx)(X.default, {})]
  })
}

function ed(e) {
  var t;
  let {
    showWumpus: n,
    ctaButton: i,
    showYearlyPrice: r,
    featureSet: s = 0,
    className: a,
    isGift: o = !1,
    isModal: l = !1,
    priceOptions: u
  } = e, d = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), c = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), I = (0, j.usePremiumTrialOffer)(), T = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id, S = (null == d ? void 0 : d.trialId) != null ? null == c ? void 0 : c.premiumType : null, N = (0, x.useIsInPremiumOfferExperience)(), p = (0, Y.usePremiumDiscountOffer)(), O = (0, x.useHasDiscountApplied)(), C = null != T || null != S ? 0 : null != p || O ? 1 : null, v = (0, K.useIsEligibleForBogoPromotion)(), D = !o && N, M = (0, K.getBOGOPillCopy)(), y = (0, h.isThemeLight)((0, m.default)()), U = y ? 5 : 2, {
    enabled: b
  } = H.ReferralProgramRecipient.useExperiment({
    location: "Tier2Card"
  }, {
    autoTrackExposure: !1
  }), G = J.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  b && (null == I ? void 0 : I.trial_id) === Q.PREMIUM_TIER_2_REFERRAL_TRIAL_ID && (G = J.default.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let w = D && !y ? $.rimGlowTier2 : void 0;
  return (0, _.jsxs)("div", {
    className: E()($.card, $.tier2, a, {
      [$.withTier2Rim]: D,
      [$.withCardHover]: D
    }),
    children: [!o && null != p && (0, Y.discountOfferHasTier)(p, Q.PremiumSubscriptionSKUs.TIER_2) && void 0 !== p.discount.amount ? (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: O ? J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : J.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: p.discount.amount
        }),
        className: $.topRimPill,
        colorOptions: U
      }), (0, _.jsx)("div", {
        className: w
      })]
    }) : null, o || T !== Q.PremiumSubscriptionSKUs.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: G,
        className: $.topRimPill,
        colorOptions: U
      }), (0, _.jsx)("div", {
        className: w
      })]
    }), o || S !== Q.PremiumTypes.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: J.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: $.topRimPill,
        colorOptions: U
      }), (0, _.jsx)("div", {
        className: w
      })]
    }), !o && O && (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(ei, {
        text: J.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: $.topRimPill,
        colorOptions: U
      }), (0, _.jsx)("div", {
        className: w
      })]
    }), n ? (0, _.jsx)("div", {
      className: $.wumpusImageContainer,
      children: (0, _.jsx)(L.default, {
        src: et,
        mediaLayoutType: q.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, _.jsxs)("div", {
      children: [(0, _.jsxs)("div", {
        children: [(0, _.jsx)(P.default, {
          className: E()($.title, $.tier2Title)
        }), !o && T !== Q.PremiumSubscriptionSKUs.TIER_2 && v && (0, _.jsx)(A.Text, {
          variant: "text-xs/bold",
          className: $.freeTrialPillInline,
          children: M
        }), (0, _.jsx)(ea, {
          isGift: o,
          premiumTier: Q.PremiumTypes.TIER_2,
          offerType: C,
          offerTierMatchesCard: T === Q.PremiumSubscriptionSKUs.TIER_2 || (0, Y.discountOfferHasTier)(p, Q.PremiumSubscriptionSKUs.TIER_2),
          showYearlyPrice: r,
          priceOptions: u
        })]
      }), (0, _.jsx)("div", {
        children: (0, _.jsx)(eu, {
          featureSet: s,
          isModal: l,
          isGift: o
        })
      })]
    }), i, o || T !== Q.PremiumSubscriptionSKUs.TIER_2 && null == p ? null : (0, _.jsx)(Z.ButtonSparkleGroup, {
      tier: Q.PremiumTypes.TIER_2
    })]
  })
}

function e_(e) {
  let {
    showWumpus: t,
    tier0CTAButton: n,
    tier2CTAButton: i,
    className: r
  } = e, {
    analyticsLocations: s
  } = (0, p.default)(N.default.PREMIUM_MARKETING_TIER_CARD);
  return (0, _.jsx)(p.AnalyticsLocationProvider, {
    value: s,
    children: (0, _.jsxs)("div", {
      className: E()($.premiumCards, r),
      children: [(0, _.jsx)(el, {
        showWumpus: t,
        ctaButton: n
      }), (0, _.jsx)(ed, {
        showWumpus: t,
        ctaButton: i
      })]
    })
  })
}(i = o || (o = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", (a = d || (d = {}))[a.DEFAULT = 0] = "DEFAULT"