"use strict";
n.r(t), n.d(t, {
  PremiumPillAndSparklesColorOptions: function() {
    return o
  },
  PremiumPillWithSparkles: function() {
    return es
  },
  PremiumTierCardsVariant: function() {
    return d
  },
  Tier0Card: function() {
    return ed
  },
  Tier2Card: function() {
    return ec
  },
  Tier2FeatureItems: function() {
    return e_
  },
  Tier2FeatureSet: function() {
    return u
  },
  default: function() {
    return eE
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
  M = n("263704"),
  y = n("642113"),
  P = n("709586"),
  U = n("483444"),
  b = n("599250"),
  G = n("942659"),
  w = n("466111"),
  k = n("761374"),
  B = n("363138"),
  V = n("930153"),
  x = n("74538"),
  F = n("357355"),
  H = n("140465"),
  Y = n("424082"),
  j = n("650032"),
  W = n("104494"),
  K = n("639119"),
  z = n("230916"),
  Z = n("248042"),
  Q = n("504865"),
  X = n("63802"),
  q = n("318990"),
  J = n("474936"),
  $ = n("768760"),
  ee = n("689938"),
  et = n("988332"),
  en = n("476945"),
  ei = n("945182");

function er(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, _.jsx)("div", {
    className: E()(n, et.freeTrialPill, {
      [et.freeTrialPillTier0GradientFill]: 1 === i,
      [et.freeTrialPillTier2GradientFill]: 3 === i,
      [et.freeTrialPillTier2OldGradientFill]: 4 === i,
      [et.lightBackgroundPill]: 5 === i
    }),
    children: (0, _.jsx)(A.Text, {
      variant: "text-xs/bold",
      className: E()(et.freeTrialPillText, {
        [et.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [et.freeTrialPillTextTier0]: 0 === i,
        [et.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function es(e) {
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
      t = "url(#".concat(X.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(X.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, _.jsxs)("div", {
    className: E()(i, et.freeTrialPillWithSparkles),
    children: [(0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar1,
      color: t
    }), (0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar2,
      color: t
    }), (0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar3,
      color: t
    }), (0, _.jsx)(er, {
      text: n,
      colorOptions: r
    }), (0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar4,
      color: t
    }), (0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar5,
      color: t
    })]
  }) : (0, _.jsxs)("div", {
    className: E()(i, et.freeTrialPillWithSparkles),
    children: [(0, _.jsx)(er, {
      text: n,
      colorOptions: r
    }), (0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, _.jsx)(X.SparkleStar, {
      foreground: et.sparkleStar2,
      color: t
    })]
  })
}

function ea(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1,
    className: r,
    textVariant: s
  } = e;
  return (0, _.jsxs)("div", {
    className: null != r ? r : et.itemWithWumpus,
    children: [(0, _.jsx)(t, {
      className: et.icon
    }), (0, _.jsx)(A.Text, {
      variant: null != s ? s : "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, _.jsx)(O.default, {
      className: et.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function eo(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: r
  } = e, s = (0, z.useDiscountedPrice)(i);
  return (0, _.jsx)(_.Fragment, {
    children: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
      numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : J.DISCOUNT_DURATION_FALLBACK,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function el(e) {
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
  } = e, d = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), c = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), E = (0, H.useHasDiscountApplied)(), {
    annualDiscountPercentage: I
  } = (0, Y.getAnnualDiscountsExperimentConfig)("PremiumTierCards"), S = (0, H.useActiveDiscountInfo)(), h = n === J.PremiumTypes.TIER_0 ? J.PremiumSubscriptionSKUs.TIER_0 : J.PremiumSubscriptionSKUs.TIER_2, m = (null == d ? void 0 : d.trialId) != null ? null == c ? void 0 : c.premiumType : E ? J.PremiumTypes.TIER_2 : null, N = (0, K.usePremiumTrialOffer)(), p = (0, W.usePremiumDiscountOffer)(), O = null == N ? void 0 : N.subscription_trial;
  if (!t && null != m && n === m && null != d && null != d.planIdFromItems) {
    let e = null != d.trialEndsAt ? T()(null == d ? void 0 : d.trialEndsAt).diff(T()(), "d") : 0,
      t = J.SubscriptionPlanInfo[d.planIdFromItems],
      n = x.default.formatPriceString(x.default.getDefaultPrice(t.id), t.interval);
    return (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: et.trialHeader,
        children: (() => {
          var t, i, s;
          if (0 === r) ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: e,
            price: n
          });
          else if (d.planIdFromItems === J.SubscriptionPlans.PREMIUM_YEAR_TIER_2) return ee.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (t = null == S ? void 0 : S.percentage) && void 0 !== t ? t : I,
            regularPrice: n
          });
          else return ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (i = null == S ? void 0 : S.percentage) && void 0 !== i ? i : J.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: n,
            numMonths: null !== (s = null == S ? void 0 : S.duration) && void 0 !== s ? s : J.DISCOUNT_DURATION_FALLBACK
          })
        })()
      })
    })
  }
  if (!t && i) {
    let e = x.default.formatPriceString(x.default.getDefaultPrice(n === J.PremiumTypes.TIER_0 ? J.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : J.SubscriptionPlans.PREMIUM_MONTH_TIER_2), J.SubscriptionIntervalTypes.MONTH);
    if (0 === r) {
      var C, L, v, D;
      return (0, _.jsx)(A.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: et.trialHeader,
        children: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
          planName: (0, x.getTierDisplayName)(null !== (L = J.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (C = null == O ? void 0 : O.sku_id) && void 0 !== C ? C : J.PremiumSubscriptionSKUs.NONE]) && void 0 !== L ? L : J.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
          duration: (0, x.formatIntervalDuration)({
            intervalType: null !== (v = null == O ? void 0 : O.interval) && void 0 !== v ? v : J.SubscriptionIntervalTypes.DAY,
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
      className: et.trialHeader,
      children: (0, _.jsx)(eo, {
        defaultPriceString: e,
        subscriptionPlan: J.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        discountOffer: p
      })
    })
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(Q.default, {
      subscriptionTier: h,
      isGift: t,
      className: null != l ? l : et.price,
      priceOptions: a,
      variant: o,
      shouldUseModifiedCopy: u
    }), s && (0, _.jsx)(Q.default, {
      subscriptionTier: h,
      interval: J.SubscriptionIntervalTypes.YEAR,
      isGift: t,
      className: null != l ? l : et.price,
      priceOptions: a,
      variant: o,
      shouldUseModifiedCopy: u
    })]
  })
}

function eu(e) {
  let {
    shouldUseModifiedCopy: t
  } = e;
  return t ? (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(ea, {
      Icon: M.default,
      text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
      className: et.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, _.jsx)(ea, {
      Icon: M.default,
      text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_0, {
          useSpace: !1
        })
      }),
      className: et.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, _.jsx)(ea, {
      Icon: M.default,
      text: ee.default.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
      className: et.modifiedItem,
      textVariant: "text-sm/normal"
    })]
  }) : (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(ea, {
      Icon: B.default,
      text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, _.jsx)(ea, {
      Icon: y.default,
      text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, _.jsx)(ea, {
      Icon: v.default,
      text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, _.jsx)(ea, {
      Icon: w.default,
      text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function ed(e) {
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
  } = e, d = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), c = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), I = (0, K.usePremiumTrialOffer)(), T = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id, S = (null == d ? void 0 : d.trialId) != null, h = (null == d ? void 0 : d.trialId) != null ? null == c ? void 0 : c.premiumType : null, m = null != T || S;
  return (0, _.jsxs)("div", {
    className: E()(et.tier0, et.card, a, {
      [et.withTier0Rim]: !o && m,
      [et.withCardHover]: !o && m
    }),
    children: [T === J.PremiumSubscriptionSKUs.TIER_0 ? (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: et.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: et.rimGlowTier0
      })]
    }) : null, n ? (0, _.jsx)("div", {
      className: et.wumpusImageContainer,
      children: (0, _.jsx)(L.default, {
        src: en,
        mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, o || T !== J.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: et.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: et.rimGlowTier0
      })]
    }), o || h !== J.PremiumTypes.TIER_0 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: et.topRimPill,
        colorOptions: 0
      }), (0, _.jsx)("div", {
        className: et.rimGlowTier0
      })]
    }), (0, _.jsxs)("div", {
      children: [(0, _.jsxs)("div", {
        children: [i ? (0, _.jsx)(G.default, {
          className: E()(et.title, et.modifiedTier0Title)
        }) : (0, _.jsx)(b.default, {
          className: E()(et.title, et.tier0Title)
        }), i && (0, _.jsx)(A.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === u ? et.modifiedSubHeaderSettings : et.modifiedSubHeaderStoreHome,
          children: ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
        }), (0, _.jsx)(el, {
          isGift: o,
          premiumTier: J.PremiumTypes.TIER_0,
          offerType: 0,
          offerTierMatchesCard: T === J.PremiumSubscriptionSKUs.TIER_0,
          showYearlyPrice: s,
          priceOptions: l,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? et.modifiedPrice : void 0
        })]
      }), (0, _.jsx)("div", {
        children: (0, _.jsx)(eu, {
          shouldUseModifiedCopy: i
        })
      })]
    }), r, o || T !== J.PremiumSubscriptionSKUs.TIER_0 ? null : (0, _.jsx)(X.ButtonSparkleGroup, {
      tier: J.PremiumTypes.TIER_0
    })]
  })
}

function e_(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, f.useStateFromStores)([C.default], () => C.default.locale), s = (0, f.useStateFromStores)([F.default], () => F.default.affinities), a = n && !i && s.length > 0;
  switch (t) {
    case 1:
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(ea, {
          Icon: P.default,
          text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
            numBoosts: J.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            percentageOff: (0, V.formatPercent)(r, J.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          })
        }), (0, _.jsx)(ea, {
          Icon: B.default,
          text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, _.jsx)(ea, {
          Icon: y.default,
          text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, _.jsx)(ea, {
          Icon: k.default,
          text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, _.jsx)(ea, {
          Icon: D.default,
          text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
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
          children: ee.default.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
        }), (0, _.jsx)(ea, {
          Icon: M.default,
          text: ee.default.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
          className: et.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, _.jsx)(ea, {
          Icon: M.default,
          text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
              useSpace: !1
            })
          }),
          className: et.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, _.jsx)(ea, {
          Icon: M.default,
          text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
          className: et.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, _.jsx)(ea, {
          Icon: M.default,
          text: ee.default.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
          className: et.modifiedItem,
          textVariant: "text-sm/normal"
        }), a && (0, _.jsx)(q.default, {})]
      });
    default:
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(ea, {
          Icon: B.default,
          text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.getMaxFileSizeForPremiumType)(J.PremiumTypes.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, _.jsx)(ea, {
          Icon: y.default,
          text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, _.jsx)(ea, {
          Icon: v.default,
          text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), (0, _.jsx)(ea, {
          Icon: k.default,
          text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, _.jsx)(ea, {
          Icon: P.default,
          text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
        }), (0, _.jsx)(ea, {
          Icon: D.default,
          text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }), a && (0, _.jsx)(q.default, {})]
      })
  }
}

function ec(e) {
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
  } = e, I = (0, f.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()), T = (0, f.useStateFromStores)([R.default], () => R.default.getCurrentUser()), S = (0, K.usePremiumTrialOffer)(), N = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id, p = (null == I ? void 0 : I.trialId) != null ? null == T ? void 0 : T.premiumType : null, O = (0, H.useIsInPremiumOfferExperience)(), C = (0, W.usePremiumDiscountOffer)(), v = (0, H.useHasDiscountApplied)(), D = null != N || null != p ? 0 : null != C || v ? 1 : null, M = (0, Z.useIsEligibleForBogoPromotion)(), y = !l && O, P = (0, Z.getBOGOPillCopy)(), b = (0, h.isThemeLight)((0, m.default)()), G = b ? 5 : 2, {
    enabled: w
  } = j.ReferralProgramRecipient.useExperiment({
    location: "Tier2Card"
  }, {
    autoTrackExposure: !1
  }), k = ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  w && (null == S ? void 0 : S.trial_id) === J.PREMIUM_TIER_2_REFERRAL_TRIAL_ID && (k = ee.default.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let B = y && !b ? et.rimGlowTier2 : void 0;
  return (0, _.jsxs)("div", {
    className: E()(et.card, et.tier2, o, {
      [et.withTier2Rim]: y,
      [et.withCardHover]: y
    }),
    children: [!l && null != C && (0, W.discountOfferHasTier)(C, J.PremiumSubscriptionSKUs.TIER_2) && void 0 !== C.discount.amount ? (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: v ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: C.discount.amount
        }),
        className: et.topRimPill,
        colorOptions: G
      }), (0, _.jsx)("div", {
        className: B
      })]
    }) : null, l || N !== J.PremiumSubscriptionSKUs.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: k,
        className: et.topRimPill,
        colorOptions: G
      }), (0, _.jsx)("div", {
        className: B
      })]
    }), l || p !== J.PremiumTypes.TIER_2 ? null : (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: et.topRimPill,
        colorOptions: G
      }), (0, _.jsx)("div", {
        className: B
      })]
    }), !l && v && (0, _.jsxs)(_.Fragment, {
      children: [(0, _.jsx)(es, {
        text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: et.topRimPill,
        colorOptions: G
      }), (0, _.jsx)("div", {
        className: B
      })]
    }), n ? (0, _.jsx)("div", {
      className: et.wumpusImageContainer,
      children: (0, _.jsx)(L.default, {
        src: ei,
        mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, _.jsxs)("div", {
      children: [(0, _.jsxs)("div", {
        children: [(0, _.jsx)(U.default, {
          className: E()(et.title, {
            [et.modifiedTier2Title]: i,
            [et.tier2Title]: !i
          })
        }), !l && N !== J.PremiumSubscriptionSKUs.TIER_2 && M && (0, _.jsx)(A.Text, {
          variant: "text-xs/bold",
          className: et.freeTrialPillInline,
          children: P
        }), i && (0, _.jsx)(A.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === c ? et.modifiedSubHeaderSettings : et.modifiedSubHeaderStoreHome,
          children: ee.default.Messages.PREMIUM_TIER_2_SUBHEADER
        }), (0, _.jsx)(el, {
          isGift: l,
          premiumTier: J.PremiumTypes.TIER_2,
          offerType: D,
          offerTierMatchesCard: N === J.PremiumSubscriptionSKUs.TIER_2 || (0, W.discountOfferHasTier)(C, J.PremiumSubscriptionSKUs.TIER_2),
          showYearlyPrice: s,
          priceOptions: d,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: et.modifiedPrice
        })]
      }), (0, _.jsx)("div", {
        children: (0, _.jsx)(e_, {
          featureSet: i ? 2 : a,
          isModal: u,
          isGift: l
        })
      })]
    }), r, l || N !== J.PremiumSubscriptionSKUs.TIER_2 && null == C ? null : (0, _.jsx)(X.ButtonSparkleGroup, {
      tier: J.PremiumTypes.TIER_2
    })]
  })
}

function eE(e) {
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
      className: E()(et.premiumCards, s),
      children: [(0, _.jsx)(ed, {
        showWumpus: n,
        shouldUseModifiedCopy: o,
        ctaButton: i,
        variant: t
      }), (0, _.jsx)(ec, {
        showWumpus: n,
        shouldUseModifiedCopy: o,
        ctaButton: r,
        variant: t
      })]
    })
  })
}(i = o || (o = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", s[s.MODIFIED = 2] = "MODIFIED", (a = d || (d = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.MODIFIED_COPY_STORE_HOME = 1] = "MODIFIED_COPY_STORE_HOME", a[a.MODIFIED_COPY_SETTINGS = 2] = "MODIFIED_COPY_SETTINGS"