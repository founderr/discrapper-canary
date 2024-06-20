"use strict";
n.d(t, {
  Cy: function() {
    return Q
  },
  Gq: function() {
    return en
  },
  NN: function() {
    return _
  },
  VE: function() {
    return a
  },
  ZP: function() {
    return es
  },
  nT: function() {
    return ei
  },
  uZ: function() {
    return u
  },
  wp: function() {
    return er
  }
});
var i, r, s, o, a, l, u, _, c = n(735250);
n(470079);
var d = n(120356),
  E = n.n(d),
  I = n(913527),
  T = n.n(I),
  h = n(442837),
  S = n(692547),
  f = n(780384),
  N = n(481060),
  A = n(410030),
  m = n(100527),
  O = n(906732),
  R = n(535322),
  p = n(706454),
  g = n(594174),
  C = n(78839),
  v = n(709586),
  L = n(483444),
  D = n(599250),
  M = n(942659),
  P = n(930153),
  y = n(74538),
  U = n(357355),
  b = n(140465),
  G = n(424082),
  w = n(650032),
  k = n(104494),
  B = n(639119),
  x = n(230916),
  V = n(248042),
  Z = n(504865),
  H = n(63802),
  F = n(318990),
  Y = n(474936),
  j = n(768760),
  W = n(689938),
  K = n(564579),
  z = n(476945),
  q = n(945182);

function X(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, c.jsx)("div", {
    className: E()(n, K.freeTrialPill, {
      [K.freeTrialPillTier0GradientFill]: 1 === i,
      [K.freeTrialPillTier2GradientFill]: 3 === i,
      [K.freeTrialPillTier2OldGradientFill]: 4 === i,
      [K.lightBackgroundPill]: 5 === i
    }),
    children: (0, c.jsx)(N.Text, {
      variant: "text-xs/bold",
      className: E()(K.freeTrialPillText, {
        [K.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [K.freeTrialPillTextTier0]: 0 === i,
        [K.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function Q(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: r = 2,
    isPillOnBorder: s = !0
  } = e;
  switch (r) {
    case 1:
      t = S.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(H.l_, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(H.Qi, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, c.jsxs)("div", {
    className: E()(i, K.freeTrialPillWithSparkles),
    children: [(0, c.jsx)(H.R9, {
      foreground: K.sparkleStar1,
      color: t
    }), (0, c.jsx)(H.R9, {
      foreground: K.sparkleStar2,
      color: t
    }), (0, c.jsx)(H.R9, {
      foreground: K.sparkleStar3,
      color: t
    }), (0, c.jsx)(X, {
      text: n,
      colorOptions: r
    }), (0, c.jsx)(H.R9, {
      foreground: K.sparkleStar4,
      color: t
    }), (0, c.jsx)(H.R9, {
      foreground: K.sparkleStar5,
      color: t
    })]
  }) : (0, c.jsxs)("div", {
    className: E()(i, K.freeTrialPillWithSparkles),
    children: [(0, c.jsx)(X, {
      text: n,
      colorOptions: r
    }), (0, c.jsx)(H.R9, {
      foreground: K.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, c.jsx)(H.R9, {
      foreground: K.sparkleStar2,
      color: t
    })]
  })
}

function J(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1,
    className: r,
    textVariant: s
  } = e;
  return (0, c.jsxs)("div", {
    className: null != r ? r : K.itemWithWumpus,
    children: [(0, c.jsx)(t, {
      className: K.icon,
      color: "currentColor"
    }), (0, c.jsx)(N.Text, {
      variant: null != s ? s : "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, c.jsx)(R.Z, {
      className: K.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function $(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: r
  } = e, s = (0, x.A)(i);
  return (0, c.jsx)(c.Fragment, {
    children: W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
      numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : Y.rt,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function ee(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: r,
    showYearlyPrice: s,
    priceOptions: o,
    textVariant: a,
    className: l,
    shouldUseModifiedCopy: u
  } = e, _ = (0, h.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), d = (0, h.e7)([g.default], () => g.default.getCurrentUser()), E = (0, b.t7)(), {
    annualDiscountPercentage: I
  } = (0, G.lf)("PremiumTierCards"), S = (0, b.lr)(), f = n === Y.p9.TIER_0 ? Y.Si.TIER_0 : Y.Si.TIER_2, A = (null == _ ? void 0 : _.trialId) != null ? null == d ? void 0 : d.premiumType : E ? Y.p9.TIER_2 : null, m = (0, B.N)(), O = (0, k.Ng)(), R = null == m ? void 0 : m.subscription_trial;
  if (!t && null != A && n === A && null != _ && null != _.planIdFromItems) {
    let e = null != _.trialEndsAt ? T()(null == _ ? void 0 : _.trialEndsAt).diff(T()(), "d") : 0,
      t = Y.GP[_.planIdFromItems],
      n = y.ZP.formatPriceString(y.ZP.getDefaultPrice(t.id), t.interval);
    return (0, c.jsx)(c.Fragment, {
      children: (0, c.jsx)(N.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: K.trialHeader,
        children: (() => {
          var t, i, s;
          if (0 === r) W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: e,
            price: n
          });
          else if (_.planIdFromItems === Y.Xh.PREMIUM_YEAR_TIER_2) return W.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (t = null == S ? void 0 : S.percentage) && void 0 !== t ? t : I,
            regularPrice: n
          });
          else return W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (i = null == S ? void 0 : S.percentage) && void 0 !== i ? i : Y.M_,
            regularPrice: n,
            numMonths: null !== (s = null == S ? void 0 : S.duration) && void 0 !== s ? s : Y.rt
          })
        })()
      })
    })
  }
  if (!t && i) {
    let e = y.ZP.formatPriceString(y.ZP.getDefaultPrice(n === Y.p9.TIER_0 ? Y.Xh.PREMIUM_MONTH_TIER_0 : Y.Xh.PREMIUM_MONTH_TIER_2), Y.rV.MONTH);
    if (0 === r) {
      var p, v, L, D;
      return (0, c.jsx)(N.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: K.trialHeader,
        children: W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
          planName: (0, y.aq)(null !== (v = Y.IW[null !== (p = null == R ? void 0 : R.sku_id) && void 0 !== p ? p : Y.Si.NONE]) && void 0 !== v ? v : Y.Xh.PREMIUM_MONTH_TIER_2),
          duration: (0, y.if)({
            intervalType: null !== (L = null == R ? void 0 : R.interval) && void 0 !== L ? L : Y.rV.DAY,
            intervalCount: null !== (D = null == R ? void 0 : R.interval_count) && void 0 !== D ? D : 30,
            capitalize: !1
          }),
          price: e
        })
      })
    }
    if (null != O) return (0, c.jsx)(N.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: K.trialHeader,
      children: (0, c.jsx)($, {
        defaultPriceString: e,
        subscriptionPlan: Y.Xh.PREMIUM_MONTH_TIER_2,
        discountOffer: O
      })
    })
  }
  return (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(Z.Z, {
      subscriptionTier: f,
      isGift: t,
      className: null != l ? l : K.price,
      priceOptions: o,
      variant: a,
      shouldUseModifiedCopy: u
    }), s && (0, c.jsx)(Z.Z, {
      subscriptionTier: f,
      interval: Y.rV.YEAR,
      isGift: t,
      className: null != l ? l : K.price,
      priceOptions: o,
      variant: a,
      shouldUseModifiedCopy: u
    })]
  })
}

function et(e) {
  let {
    shouldUseModifiedCopy: t
  } = e;
  return t ? (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(J, {
      Icon: N.CheckmarkLargeIcon,
      text: W.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
      className: K.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, c.jsx)(J, {
      Icon: N.CheckmarkLargeIcon,
      text: W.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, y.v9)(Y.p9.TIER_0, {
          useSpace: !1
        })
      }),
      className: K.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, c.jsx)(J, {
      Icon: N.CheckmarkLargeIcon,
      text: W.Z.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
      className: K.modifiedItem,
      textVariant: "text-sm/normal"
    })]
  }) : (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(J, {
      Icon: N.UploadIcon,
      text: W.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, y.v9)(Y.p9.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, c.jsx)(J, {
      Icon: N.ReactionIcon,
      text: W.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, c.jsx)(J, {
      Icon: N.SuperReactionIcon,
      text: W.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, c.jsx)(J, {
      Icon: N.NitroWheelIcon,
      text: W.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function en(e) {
  var t;
  let {
    showWumpus: n,
    shouldUseModifiedCopy: i = !1,
    ctaButton: r,
    showYearlyPrice: s,
    className: o,
    isGift: a = !1,
    priceOptions: l,
    variant: u
  } = e, _ = (0, h.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), d = (0, h.e7)([g.default], () => g.default.getCurrentUser()), I = (0, B.N)(), T = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id, S = (null == _ ? void 0 : _.trialId) != null, f = (null == _ ? void 0 : _.trialId) != null ? null == d ? void 0 : d.premiumType : null, A = null != T || S;
  return (0, c.jsxs)("div", {
    className: E()(K.tier0, K.card, o, {
      [K.withTier0Rim]: !a && A,
      [K.withCardHover]: !a && A
    }),
    children: [T === Y.Si.TIER_0 ? (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: W.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: K.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: K.rimGlowTier0
      })]
    }) : null, n ? (0, c.jsx)("div", {
      className: K.wumpusImageContainer,
      children: (0, c.jsx)(N.Image, {
        src: z,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, a || T !== Y.Si.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: W.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: K.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: K.rimGlowTier0
      })]
    }), a || f !== Y.p9.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: K.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: K.rimGlowTier0
      })]
    }), (0, c.jsxs)("div", {
      children: [(0, c.jsxs)("div", {
        children: [i ? (0, c.jsx)(M.Z, {
          className: E()(K.title, K.modifiedTier0Title)
        }) : (0, c.jsx)(D.Z, {
          className: E()(K.title, K.tier0Title)
        }), i && (0, c.jsx)(N.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === u ? K.modifiedSubHeaderSettings : K.modifiedSubHeaderStoreHome,
          children: W.Z.Messages.NITRO_MARKETING_JUST_THE_BASICS
        }), (0, c.jsx)(ee, {
          isGift: a,
          premiumTier: Y.p9.TIER_0,
          offerType: 0,
          offerTierMatchesCard: T === Y.Si.TIER_0,
          showYearlyPrice: s,
          priceOptions: l,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? s ? K.modifiedPrices : K.modifiedPrice : void 0
        })]
      }), (0, c.jsx)("div", {
        children: (0, c.jsx)(et, {
          shouldUseModifiedCopy: i
        })
      })]
    }), r, a || T !== Y.Si.TIER_0 ? null : (0, c.jsx)(H.t, {
      tier: Y.p9.TIER_0
    })]
  })
}

function ei(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, h.e7)([p.default], () => p.default.locale), s = (0, h.e7)([U.Z], () => U.Z.affinities), o = n && !i && s.length > 0;
  switch (t) {
    case 1:
      return (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(J, {
          Icon: (0, N.makeIconCompat)(v.Z),
          text: W.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
            numBoosts: Y.cb,
            percentageOff: (0, P.T3)(r, Y.Rr / 100)
          })
        }), (0, c.jsx)(J, {
          Icon: N.UploadIcon,
          text: W.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, y.v9)(Y.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, c.jsx)(J, {
          Icon: N.ReactionIcon,
          text: W.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, c.jsx)(J, {
          Icon: N.ScreenArrowIcon,
          text: W.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, c.jsx)(J, {
          Icon: N.UserSquareIcon,
          text: W.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        })]
      });
    case 2:
      return (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(N.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          style: {
            marginBottom: 6
          },
          children: W.Z.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
        }), (0, c.jsx)(J, {
          Icon: N.CheckmarkLargeIcon,
          text: W.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
          className: K.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, c.jsx)(J, {
          Icon: N.CheckmarkLargeIcon,
          text: W.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, y.v9)(Y.p9.TIER_2, {
              useSpace: !1
            })
          }),
          className: K.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, c.jsx)(J, {
          Icon: N.CheckmarkLargeIcon,
          text: W.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
          className: K.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, c.jsx)(J, {
          Icon: N.CheckmarkLargeIcon,
          text: W.Z.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
          className: K.modifiedItem,
          textVariant: "text-sm/normal"
        }), o && (0, c.jsx)(F.Z, {})]
      });
    default:
      return (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(J, {
          Icon: N.UploadIcon,
          text: W.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, y.v9)(Y.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, c.jsx)(J, {
          Icon: N.ReactionIcon,
          text: W.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, c.jsx)(J, {
          Icon: N.SuperReactionIcon,
          text: W.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), (0, c.jsx)(J, {
          Icon: N.ScreenArrowIcon,
          text: W.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, c.jsx)(J, {
          Icon: (0, N.makeIconCompat)(v.Z),
          text: W.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
        }), (0, c.jsx)(J, {
          Icon: N.UserSquareIcon,
          text: W.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }), o && (0, c.jsx)(F.Z, {})]
      })
  }
}

function er(e) {
  var t;
  let {
    showWumpus: n,
    shouldUseModifiedCopy: i = !1,
    ctaButton: r,
    showYearlyPrice: s,
    featureSet: o = 0,
    className: a,
    isGift: l = !1,
    isModal: u = !1,
    priceOptions: _,
    variant: d
  } = e, I = (0, h.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), T = (0, h.e7)([g.default], () => g.default.getCurrentUser()), S = (0, B.N)(), m = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id, O = (null == I ? void 0 : I.trialId) != null ? null == T ? void 0 : T.premiumType : null, R = (0, b.Nx)(), p = (0, k.Ng)(), v = (0, b.t7)(), D = null != m || null != O ? 0 : null != p || v ? 1 : null, M = (0, V.Vi)(), P = !l && R, y = (0, V.W1)(), U = (0, f.ap)((0, A.ZP)()), G = U ? 5 : 2, {
    enabled: x
  } = w._.useExperiment({
    location: "Tier2Card"
  }, {
    autoTrackExposure: !1
  }), Z = W.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  x && (null == S ? void 0 : S.trial_id) === Y.a7 && (Z = W.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let F = P && !U ? K.rimGlowTier2 : void 0;
  return (0, c.jsxs)("div", {
    className: E()(K.card, K.tier2, a, {
      [K.withTier2Rim]: P,
      [K.withCardHover]: P
    }),
    children: [!l && null != p && (0, k.Wp)(p, Y.Si.TIER_2) && void 0 !== p.discount.amount ? (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: v ? W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : W.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: p.discount.amount
        }),
        className: K.topRimPill,
        colorOptions: G
      }), (0, c.jsx)("div", {
        className: F
      })]
    }) : null, l || m !== Y.Si.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: Z,
        className: K.topRimPill,
        colorOptions: G
      }), (0, c.jsx)("div", {
        className: F
      })]
    }), l || O !== Y.p9.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: K.topRimPill,
        colorOptions: G
      }), (0, c.jsx)("div", {
        className: F
      })]
    }), !l && v && (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(Q, {
        text: W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: K.topRimPill,
        colorOptions: G
      }), (0, c.jsx)("div", {
        className: F
      })]
    }), n ? (0, c.jsx)("div", {
      className: K.wumpusImageContainer,
      children: (0, c.jsx)(N.Image, {
        src: q,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, c.jsxs)("div", {
      children: [(0, c.jsxs)("div", {
        children: [(0, c.jsx)(L.Z, {
          className: E()(K.title, {
            [K.modifiedTier2Title]: i,
            [K.tier2Title]: !i
          })
        }), !l && m !== Y.Si.TIER_2 && M && (0, c.jsx)(N.Text, {
          variant: "text-xs/bold",
          className: K.freeTrialPillInline,
          children: y
        }), i && (0, c.jsx)(N.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === d ? K.modifiedSubHeaderSettings : K.modifiedSubHeaderStoreHome,
          children: W.Z.Messages.PREMIUM_TIER_2_SUBHEADER
        }), (0, c.jsx)(ee, {
          isGift: l,
          premiumTier: Y.p9.TIER_2,
          offerType: D,
          offerTierMatchesCard: m === Y.Si.TIER_2 || (0, k.Wp)(p, Y.Si.TIER_2),
          showYearlyPrice: s,
          priceOptions: _,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? s ? K.modifiedPrices : K.modifiedPrice : void 0
        })]
      }), (0, c.jsx)("div", {
        children: (0, c.jsx)(ei, {
          featureSet: i ? 2 : o,
          isModal: u,
          isGift: l
        })
      })]
    }), r, l || m !== Y.Si.TIER_2 && null == p ? null : (0, c.jsx)(H.t, {
      tier: Y.p9.TIER_2
    })]
  })
}

function es(e) {
  let {
    variant: t,
    showWumpus: n,
    tier0CTAButton: i,
    tier2CTAButton: r,
    className: s
  } = e, {
    analyticsLocations: o
  } = (0, O.ZP)(m.Z.PREMIUM_MARKETING_TIER_CARD), a = 1 === t || 2 === t;
  return (0, c.jsx)(O.Gt, {
    value: o,
    children: (0, c.jsxs)("div", {
      className: E()(K.premiumCards, s),
      children: [(0, c.jsx)(en, {
        showWumpus: n,
        shouldUseModifiedCopy: a,
        ctaButton: i,
        variant: t
      }), (0, c.jsx)(er, {
        showWumpus: n,
        shouldUseModifiedCopy: a,
        ctaButton: r,
        variant: t
      })]
    })
  })
}(i = a || (a = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", s[s.MODIFIED = 2] = "MODIFIED", (o = _ || (_ = {}))[o.DEFAULT = 0] = "DEFAULT", o[o.MODIFIED_COPY_STORE_HOME = 1] = "MODIFIED_COPY_STORE_HOME", o[o.MODIFIED_COPY_SETTINGS = 2] = "MODIFIED_COPY_SETTINGS"