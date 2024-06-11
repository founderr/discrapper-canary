"use strict";
n.r(t), n.d(t, {
  PremiumPillAndSparklesColorOptions: function() {
    return o
  },
  PremiumPillWithSparkles: function() {
    return er
  },
  PremiumTierCardsVariant: function() {
    return d
  },
  Tier0Card: function() {
    return eu
  },
  Tier2Card: function() {
    return e_
  },
  Tier2FeatureItems: function() {
    return ed
  },
  Tier2FeatureSet: function() {
    return u
  },
  default: function() {
    return ec
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
  L = n("533496"),
  v = n("771357"),
  D = n("263704"),
  M = n("642113"),
  y = n("709586"),
  P = n("483444"),
  U = n("599250"),
  b = n("942659"),
  G = n("466111"),
  w = n("761374"),
  k = n("363138"),
  B = n("930153"),
  x = n("74538"),
  V = n("357355"),
  F = n("140465"),
  H = n("424082"),
  Y = n("650032"),
  j = n("104494"),
  W = n("639119"),
  K = n("230916"),
  z = n("248042"),
  Z = n("504865"),
  Q = n("63802"),
  X = n("318990"),
  q = n("474936"),
  J = n("768760"),
  $ = n("689938"),
  ee = n("988332"),
  et = n("476945"),
  en = n("945182");

function ei(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, _.jsx)("div", {
    className: E()(n, ee.freeTrialPill, {
      [ee.freeTrialPillTier0GradientFill]: 1 === i,
      [ee.freeTrialPillTier2GradientFill]: 3 === i,
      [ee.freeTrialPillTier2OldGradientFill]: 4 === i,
      [ee.lightBackgroundPill]: 5 === i
    }),
    children: (0, _.jsx)(A.Text, {
      variant: "text-xs/bold",
      className: E()(ee.freeTrialPillText, {
        [ee.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [ee.freeTrialPillTextTier0]: 0 === i,
        [ee.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function er(e) {
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
      t = "url(#".concat(Q.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(Q.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, _.jsxs)("div", {
    className: E()(i, ee.freeTrialPillWithSparkles),
    children: [(0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar1,
      color: t
    }), (0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar2,
      color: t
    }), (0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar3,
      color: t
    }), (0, _.jsx)(ei, {
      text: n,
      colorOptions: r
    }), (0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar4,
      color: t
    }), (0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar5,
      color: t
    })]
  }) : (0, _.jsxs)("div", {
    className: E()(i, ee.freeTrialPillWithSparkles),
    children: [(0, _.jsx)(ei, {
      text: n,
      colorOptions: r
    }), (0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, _.jsx)(Q.SparkleStar, {
      foreground: ee.sparkleStar2,
      color: t
    })]
  })
}

function es(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1,
    className: r,
    textVariant: s
  } = e;
  return (0, _.jsxs)("div", {
    className: null != r ? r : ee.itemWithWumpus,
    children: [(0, _.jsx)(t, {
      className: ee.icon
    }), (0, _.jsx)(A.Text, {
      variant: null != s ? s : "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, _.jsx)(O.default, {
      className: ee.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function ea(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: r
  } = e, s = (0, K.useDiscountedPrice)(i);
  return (0, _.jsx)(_.Fragment, {
    children: $.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
      numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : q.DISCOUNT_DURATION_FALLBACK,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function eo(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: r,
    showYearlyPrice: s,
    priceOptions: a,
    textVariant: o,
    className: l,
    shouldUseModifiedCopy: u
  } = e, d = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), c = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), E = (0, F.useHasDiscountApplied)(), {
    annualDiscountPercentage: I
  } = (0, H.getAnnualDiscountsExperimentConfig)("PremiumTierCards"), S = (0, F.useActiveDiscountInfo)(), h = n === q.PremiumTypes.TIER_0 ? q.PremiumSubscriptionSKUs.TIER_0 : q.PremiumSubscriptionSKUs.TIER_2, m = (null == d ? void 0 : d.trialId) != null ? null == c ? void 0 : c.premiumType : E ? q.PremiumTypes.TIER_2 : null, N = (0, W.usePremiumTrialOffer)(), p = (0, j.usePremiumDiscountOffer)(), O = null == N ? void 0 : N.subscription_trial;
  if (!t && null != m && n === m && null != d && null != d.planIdFromItems) {
    let e = null != d.trialEndsAt ? T()(null == d ? void 0 : d.trialEndsAt).diff(T()(), "d") : 0,
      t = q.SubscriptionPlanInfo[d.planIdFromItems],
      n = x.default.formatPriceString(x.default.getDefaultPrice(t.id), t.interval);
    return (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ee.trialHeader,
        children: (() => {
          var t, i, s;
          if (0 === r) $.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: e,
            price: n
          });
          else if (d.planIdFromItems === q.SubscriptionPlans.PREMIUM_YEAR_TIER_2) return $.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (t = null == S ? void 0 : S.percentage) && void 0 !== t ? t : I,
            regularPrice: n
          });
          else return $.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (i = null == S ? void 0 : S.percentage) && void 0 !== i ? i : q.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: n,
            numMonths: null !== (s = null == S ? void 0 : S.duration) && void 0 !== s ? s : q.DISCOUNT_DURATION_FALLBACK
          })
        })()
      })
    })
  }
  if (!t && i) {
    let e = x.default.formatPriceString(x.default.getDefaultPrice(n === q.PremiumTypes.TIER_0 ? q.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : q.SubscriptionPlans.PREMIUM_MONTH_TIER_2), q.SubscriptionIntervalTypes.MONTH);
    if (0 === r) {
      var C, L, v, D;
      return (0, _.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ee.trialHeader,
        children: $.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
          planName: (0, x.getTierDisplayName)(null !== (L = q.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (C = null == O ? void 0 : O.sku_id) && void 0 !== C ? C : q.PremiumSubscriptionSKUs.NONE]) && void 0 !== L ? L : q.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
          duration: (0, x.formatIntervalDuration)({
            intervalType: null !== (v = null == O ? void 0 : O.interval) && void 0 !== v ? v : q.SubscriptionIntervalTypes.DAY,
            intervalCount: null !== (D = null == O ? void 0 : O.interval_count) && void 0 !== D ? D : 30,
            capitalize: !1
          }),
          price: e
        })
      })
    }
    if (null != p) return (0, _.jsx)(A.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: ee.trialHeader,
      children: (0, _.jsx)(ea, {
        defaultPriceString: e,
        subscriptionPlan: q.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        discountOffer: p
      })
    })
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(Z.default, {
      subscriptionTier: h,
      isGift: t,
      className: null != l ? l : ee.price,
      priceOptions: a,
      variant: o,
      shouldUseModifiedCopy: u
    }), s && (0, _.jsx)(Z.default, {
      subscriptionTier: h,
      interval: q.SubscriptionIntervalTypes.YEAR,
      isGift: t,
      className: null != l ? l : ee.price,
      priceOptions: a,
      variant: o,
      shouldUseModifiedCopy: u
    })]
  })
}

function el(e) {
  let {
    shouldUseModifiedCopy: t
  } = e;
  return t ? (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(es, {
      Icon: D.default,
      text: $.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
      className: ee.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, _.jsx)(es, {
      Icon: D.default,
      text: $.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(q.PremiumTypes.TIER_0, {
          useSpace: !1
        })
      }),
      className: ee.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, _.jsx)(es, {
      Icon: D.default,
      text: $.default.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
      className: ee.modifiedItem,
      textVariant: "text-sm/normal"
    })]
  }) : (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(es, {
      Icon: k.default,
      text: $.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(q.PremiumTypes.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, _.jsx)(es, {
      Icon: M.default,
      text: $.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, _.jsx)(es, {
      Icon: L.default,
      text: $.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, _.jsx)(es, {
      Icon: G.default,
      text: $.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function eu(e) {
  var t;
  let {
    showWumpus: n,
    shouldUseModifiedCopy: i = !1,
    ctaButton: r,
    showYearlyPrice: s,
    className: a,
    isGift: o = !1,
    priceOptions: l,
    variant: u
  } = e, d = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), c = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), I = (0, W.usePremiumTrialOffer)(), T = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id, S = (null == d ? void 0 : d.trialId) != null, h = (null == d ? void 0 : d.trialId) != null ? null == c ? void 0 : c.premiumType : null, m = null != T || S;
  return (0, _.jsxs)("div", {
    className: E()(ee.tier0, ee.card, a, {
      [ee.withTier0Rim]: !o && m,
      [ee.withCardHover]: !o && m
    }),
    children: [T === q.PremiumSubscriptionSKUs.TIER_0 ? (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: $.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: ee.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: ee.rimGlowTier0
      })]
    }) : null, n ? (0, _.jsx)("div", {
      className: ee.wumpusImageContainer,
      children: (0, _.jsx)(A.Image, {
        src: et,
        mediaLayoutType: J.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, o || T !== q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: $.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: ee.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: ee.rimGlowTier0
      })]
    }), o || h !== q.PremiumTypes.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: $.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: ee.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: ee.rimGlowTier0
      })]
    }), (0, _.jsxs)("div", {
      children: [(0, _.jsxs)("div", {
        children: [i ? (0, _.jsx)(b.default, {
          className: E()(ee.title, ee.modifiedTier0Title)
        }) : (0, _.jsx)(U.default, {
          className: E()(ee.title, ee.tier0Title)
        }), i && (0, _.jsx)(A.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === u ? ee.modifiedSubHeaderSettings : ee.modifiedSubHeaderStoreHome,
          children: $.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
        }), (0, _.jsx)(eo, {
          isGift: o,
          premiumTier: q.PremiumTypes.TIER_0,
          offerType: 0,
          offerTierMatchesCard: T === q.PremiumSubscriptionSKUs.TIER_0,
          showYearlyPrice: s,
          priceOptions: l,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? ee.modifiedPrice : void 0
        })]
      }), (0, _.jsx)("div", {
        children: (0, _.jsx)(el, {
          shouldUseModifiedCopy: i
        })
      })]
    }), r, o || T !== q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsx)(Q.ButtonSparkleGroup, {
      tier: q.PremiumTypes.TIER_0
    })]
  })
}

function ed(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, f.useStateFromStores)([C.default], () => C.default.locale), s = (0, f.useStateFromStores)([V.default], () => V.default.affinities), a = n && !i && s.length > 0;
  switch (t) {
    case 1:
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(es, {
          Icon: y.default,
          text: $.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
            numBoosts: q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            percentageOff: (0, B.formatPercent)(r, q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          })
        }), (0, _.jsx)(es, {
          Icon: k.default,
          text: $.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(q.PremiumTypes.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, _.jsx)(es, {
          Icon: M.default,
          text: $.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, _.jsx)(es, {
          Icon: w.default,
          text: $.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, _.jsx)(es, {
          Icon: v.default,
          text: $.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        })]
      });
    case 2:
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(A.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          style: {
            marginBottom: 6
          },
          children: $.default.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
        }), (0, _.jsx)(es, {
          Icon: D.default,
          text: $.default.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, _.jsx)(es, {
          Icon: D.default,
          text: $.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(q.PremiumTypes.TIER_2, {
              useSpace: !1
            })
          }),
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, _.jsx)(es, {
          Icon: D.default,
          text: $.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, _.jsx)(es, {
          Icon: D.default,
          text: $.default.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), a && (0, _.jsx)(X.default, {})]
      });
    default:
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(es, {
          Icon: k.default,
          text: $.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(q.PremiumTypes.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, _.jsx)(es, {
          Icon: M.default,
          text: $.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, _.jsx)(es, {
          Icon: L.default,
          text: $.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), (0, _.jsx)(es, {
          Icon: w.default,
          text: $.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, _.jsx)(es, {
          Icon: y.default,
          text: $.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
        }), (0, _.jsx)(es, {
          Icon: v.default,
          text: $.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }), a && (0, _.jsx)(X.default, {})]
      })
  }
}

function e_(e) {
  var t;
  let {
    showWumpus: n,
    shouldUseModifiedCopy: i = !1,
    ctaButton: r,
    showYearlyPrice: s,
    featureSet: a = 0,
    className: o,
    isGift: l = !1,
    isModal: u = !1,
    priceOptions: d,
    variant: c
  } = e, I = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), T = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), S = (0, W.usePremiumTrialOffer)(), N = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id, p = (null == I ? void 0 : I.trialId) != null ? null == T ? void 0 : T.premiumType : null, O = (0, F.useIsInPremiumOfferExperience)(), C = (0, j.usePremiumDiscountOffer)(), L = (0, F.useHasDiscountApplied)(), v = null != N || null != p ? 0 : null != C || L ? 1 : null, D = (0, z.useIsEligibleForBogoPromotion)(), M = !l && O, y = (0, z.getBOGOPillCopy)(), U = (0, h.isThemeLight)((0, m.default)()), b = U ? 5 : 2, {
    enabled: G
  } = Y.ReferralProgramRecipient.useExperiment({
    location: "Tier2Card"
  }, {
    autoTrackExposure: !1
  }), w = $.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  G && (null == S ? void 0 : S.trial_id) === q.PREMIUM_TIER_2_REFERRAL_TRIAL_ID && (w = $.default.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let k = M && !U ? ee.rimGlowTier2 : void 0;
  return (0, _.jsxs)("div", {
    className: E()(ee.card, ee.tier2, o, {
      [ee.withTier2Rim]: M,
      [ee.withCardHover]: M
    }),
    children: [!l && null != C && (0, j.discountOfferHasTier)(C, q.PremiumSubscriptionSKUs.TIER_2) && void 0 !== C.discount.amount ? (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: L ? $.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : $.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: C.discount.amount
        }),
        className: ee.topRimPill,
        colorOptions: b
      }), (0, _.jsx)("div", {
        className: k
      })]
    }) : null, l || N !== q.PremiumSubscriptionSKUs.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: w,
        className: ee.topRimPill,
        colorOptions: b
      }), (0, _.jsx)("div", {
        className: k
      })]
    }), l || p !== q.PremiumTypes.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: $.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: ee.topRimPill,
        colorOptions: b
      }), (0, _.jsx)("div", {
        className: k
      })]
    }), !l && L && (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(er, {
        text: $.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: ee.topRimPill,
        colorOptions: b
      }), (0, _.jsx)("div", {
        className: k
      })]
    }), n ? (0, _.jsx)("div", {
      className: ee.wumpusImageContainer,
      children: (0, _.jsx)(A.Image, {
        src: en,
        mediaLayoutType: J.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, _.jsxs)("div", {
      children: [(0, _.jsxs)("div", {
        children: [(0, _.jsx)(P.default, {
          className: E()(ee.title, {
            [ee.modifiedTier2Title]: i,
            [ee.tier2Title]: !i
          })
        }), !l && N !== q.PremiumSubscriptionSKUs.TIER_2 && D && (0, _.jsx)(A.Text, {
          variant: "text-xs/bold",
          className: ee.freeTrialPillInline,
          children: y
        }), i && (0, _.jsx)(A.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === c ? ee.modifiedSubHeaderSettings : ee.modifiedSubHeaderStoreHome,
          children: $.default.Messages.PREMIUM_TIER_2_SUBHEADER
        }), (0, _.jsx)(eo, {
          isGift: l,
          premiumTier: q.PremiumTypes.TIER_2,
          offerType: v,
          offerTierMatchesCard: N === q.PremiumSubscriptionSKUs.TIER_2 || (0, j.discountOfferHasTier)(C, q.PremiumSubscriptionSKUs.TIER_2),
          showYearlyPrice: s,
          priceOptions: d,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: ee.modifiedPrice
        })]
      }), (0, _.jsx)("div", {
        children: (0, _.jsx)(ed, {
          featureSet: i ? 2 : a,
          isModal: u,
          isGift: l
        })
      })]
    }), r, l || N !== q.PremiumSubscriptionSKUs.TIER_2 && null == C ? null : (0, _.jsx)(Q.ButtonSparkleGroup, {
      tier: q.PremiumTypes.TIER_2
    })]
  })
}

function ec(e) {
  let {
    variant: t,
    showWumpus: n,
    tier0CTAButton: i,
    tier2CTAButton: r,
    className: s
  } = e, {
    analyticsLocations: a
  } = (0, p.default)(N.default.PREMIUM_MARKETING_TIER_CARD), o = 1 === t || 2 === t;
  return (0, _.jsx)(p.AnalyticsLocationProvider, {
    value: a,
    children: (0, _.jsxs)("div", {
      className: E()(ee.premiumCards, s),
      children: [(0, _.jsx)(eu, {
        showWumpus: n,
        shouldUseModifiedCopy: o,
        ctaButton: i,
        variant: t
      }), (0, _.jsx)(e_, {
        showWumpus: n,
        shouldUseModifiedCopy: o,
        ctaButton: r,
        variant: t
      })]
    })
  })
}(i = o || (o = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", s[s.MODIFIED = 2] = "MODIFIED", (a = d || (d = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.MODIFIED_COPY_STORE_HOME = 1] = "MODIFIED_COPY_STORE_HOME", a[a.MODIFIED_COPY_SETTINGS = 2] = "MODIFIED_COPY_SETTINGS"