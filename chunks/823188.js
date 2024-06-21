"use strict";
n.d(t, {
  Cy: function() {
    return X
  },
  Gq: function() {
    return et
  },
  NN: function() {
    return _
  },
  VE: function() {
    return a
  },
  ZP: function() {
    return er
  },
  nT: function() {
    return en
  },
  uZ: function() {
    return u
  },
  wp: function() {
    return ei
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
  G = n(650032),
  w = n(104494),
  B = n(639119),
  k = n(230916),
  x = n(248042),
  V = n(504865),
  Z = n(63802),
  H = n(318990),
  F = n(474936),
  Y = n(217702),
  j = n(689938),
  W = n(564579),
  K = n(476945),
  z = n(945182);

function q(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, c.jsx)("div", {
    className: E()(n, W.freeTrialPill, {
      [W.freeTrialPillTier0GradientFill]: 1 === i,
      [W.freeTrialPillTier2GradientFill]: 3 === i,
      [W.freeTrialPillTier2OldGradientFill]: 4 === i,
      [W.lightBackgroundPill]: 5 === i
    }),
    children: (0, c.jsx)(N.Text, {
      variant: "text-xs/bold",
      className: E()(W.freeTrialPillText, {
        [W.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [W.freeTrialPillTextTier0]: 0 === i,
        [W.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function X(e) {
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
      t = "url(#".concat(Z.l_, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(Z.Qi, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, c.jsxs)("div", {
    className: E()(i, W.freeTrialPillWithSparkles),
    children: [(0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar1,
      color: t
    }), (0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar2,
      color: t
    }), (0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar3,
      color: t
    }), (0, c.jsx)(q, {
      text: n,
      colorOptions: r
    }), (0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar4,
      color: t
    }), (0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar5,
      color: t
    })]
  }) : (0, c.jsxs)("div", {
    className: E()(i, W.freeTrialPillWithSparkles),
    children: [(0, c.jsx)(q, {
      text: n,
      colorOptions: r
    }), (0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, c.jsx)(Z.R9, {
      foreground: W.sparkleStar2,
      color: t
    })]
  })
}

function Q(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1,
    className: r,
    textVariant: s
  } = e;
  return (0, c.jsxs)("div", {
    className: null != r ? r : W.itemWithWumpus,
    children: [(0, c.jsx)(t, {
      className: W.icon,
      color: "currentColor"
    }), (0, c.jsx)(N.Text, {
      variant: null != s ? s : "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, c.jsx)(R.Z, {
      className: W.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function J(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: r
  } = e, s = (0, k.A)(i);
  return (0, c.jsx)(c.Fragment, {
    children: j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
      numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : F.rt,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function $(e) {
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
  } = e, _ = (0, h.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), d = (0, h.e7)([g.default], () => g.default.getCurrentUser()), E = (0, b.t7)(), I = (0, b.lr)(), S = n === F.p9.TIER_0 ? F.Si.TIER_0 : F.Si.TIER_2, f = (null == _ ? void 0 : _.trialId) != null ? null == d ? void 0 : d.premiumType : E ? F.p9.TIER_2 : null, A = (0, B.N)(), m = (0, w.Ng)(), O = null == A ? void 0 : A.subscription_trial;
  if (!t && null != f && n === f && null != _ && null != _.planIdFromItems) {
    let e = null != _.trialEndsAt ? T()(null == _ ? void 0 : _.trialEndsAt).diff(T()(), "d") : 0,
      t = F.GP[_.planIdFromItems],
      n = y.ZP.formatPriceString(y.ZP.getDefaultPrice(t.id), t.interval);
    return (0, c.jsx)(c.Fragment, {
      children: (0, c.jsx)(N.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: W.trialHeader,
        children: (() => {
          var t, i, s;
          if (0 === r) j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: e,
            price: n
          });
          else if (_.planIdFromItems === F.Xh.PREMIUM_YEAR_TIER_2) return j.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (t = null == I ? void 0 : I.percentage) && void 0 !== t ? t : F.Bo,
            regularPrice: n
          });
          else return j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (i = null == I ? void 0 : I.percentage) && void 0 !== i ? i : F.M_,
            regularPrice: n,
            numMonths: null !== (s = null == I ? void 0 : I.duration) && void 0 !== s ? s : F.rt
          })
        })()
      })
    })
  }
  if (!t && i) {
    let e = y.ZP.formatPriceString(y.ZP.getDefaultPrice(n === F.p9.TIER_0 ? F.Xh.PREMIUM_MONTH_TIER_0 : F.Xh.PREMIUM_MONTH_TIER_2), F.rV.MONTH);
    if (0 === r) {
      var R, p, v, L;
      return (0, c.jsx)(N.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: W.trialHeader,
        children: j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
          planName: (0, y.aq)(null !== (p = F.IW[null !== (R = null == O ? void 0 : O.sku_id) && void 0 !== R ? R : F.Si.NONE]) && void 0 !== p ? p : F.Xh.PREMIUM_MONTH_TIER_2),
          duration: (0, y.if)({
            intervalType: null !== (v = null == O ? void 0 : O.interval) && void 0 !== v ? v : F.rV.DAY,
            intervalCount: null !== (L = null == O ? void 0 : O.interval_count) && void 0 !== L ? L : 30,
            capitalize: !1
          }),
          price: e
        })
      })
    }
    if (null != m) return (0, c.jsx)(N.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: W.trialHeader,
      children: (0, c.jsx)(J, {
        defaultPriceString: e,
        subscriptionPlan: F.Xh.PREMIUM_MONTH_TIER_2,
        discountOffer: m
      })
    })
  }
  return (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(V.Z, {
      subscriptionTier: S,
      isGift: t,
      className: null != l ? l : W.price,
      priceOptions: o,
      variant: a,
      shouldUseModifiedCopy: u
    }), s && (0, c.jsx)(V.Z, {
      subscriptionTier: S,
      interval: F.rV.YEAR,
      isGift: t,
      className: null != l ? l : W.price,
      priceOptions: o,
      variant: a,
      shouldUseModifiedCopy: u
    })]
  })
}

function ee(e) {
  let {
    shouldUseModifiedCopy: t
  } = e;
  return t ? (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(Q, {
      Icon: N.CheckmarkLargeIcon,
      text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
      className: W.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, c.jsx)(Q, {
      Icon: N.CheckmarkLargeIcon,
      text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, y.v9)(F.p9.TIER_0, {
          useSpace: !1
        })
      }),
      className: W.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, c.jsx)(Q, {
      Icon: N.CheckmarkLargeIcon,
      text: j.Z.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
      className: W.modifiedItem,
      textVariant: "text-sm/normal"
    })]
  }) : (0, c.jsxs)(c.Fragment, {
    children: [(0, c.jsx)(Q, {
      Icon: N.UploadIcon,
      text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, y.v9)(F.p9.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, c.jsx)(Q, {
      Icon: N.ReactionIcon,
      text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, c.jsx)(Q, {
      Icon: N.SuperReactionIcon,
      text: j.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, c.jsx)(Q, {
      Icon: N.NitroWheelIcon,
      text: j.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function et(e) {
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
    className: E()(W.tier0, W.card, o, {
      [W.withTier0Rim]: !a && A,
      [W.withCardHover]: !a && A
    }),
    children: [T === F.Si.TIER_0 ? (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: j.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: W.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: W.rimGlowTier0
      })]
    }) : null, n ? (0, c.jsx)("div", {
      className: W.wumpusImageContainer,
      children: (0, c.jsx)(N.Image, {
        src: K,
        mediaLayoutType: Y.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, a || T !== F.Si.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: j.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: W.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: W.rimGlowTier0
      })]
    }), a || f !== F.p9.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: W.topRimPill,
        colorOptions: 0
      }), (0, c.jsx)("div", {
        className: W.rimGlowTier0
      })]
    }), (0, c.jsxs)("div", {
      children: [(0, c.jsxs)("div", {
        children: [i ? (0, c.jsx)(M.Z, {
          className: E()(W.title, W.modifiedTier0Title)
        }) : (0, c.jsx)(D.Z, {
          className: E()(W.title, W.tier0Title)
        }), i && (0, c.jsx)(N.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === u ? W.modifiedSubHeaderSettings : W.modifiedSubHeaderStoreHome,
          children: j.Z.Messages.NITRO_MARKETING_JUST_THE_BASICS
        }), (0, c.jsx)($, {
          isGift: a,
          premiumTier: F.p9.TIER_0,
          offerType: 0,
          offerTierMatchesCard: T === F.Si.TIER_0,
          showYearlyPrice: s,
          priceOptions: l,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? s ? W.modifiedPrices : W.modifiedPrice : void 0
        })]
      }), (0, c.jsx)("div", {
        children: (0, c.jsx)(ee, {
          shouldUseModifiedCopy: i
        })
      })]
    }), r, a || T !== F.Si.TIER_0 ? null : (0, c.jsx)(Z.t, {
      tier: F.p9.TIER_0
    })]
  })
}

function en(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, h.e7)([p.default], () => p.default.locale), s = (0, h.e7)([U.Z], () => U.Z.affinities), o = n && !i && s.length > 0;
  switch (t) {
    case 1:
      return (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(Q, {
          Icon: (0, N.makeIconCompat)(v.Z),
          text: j.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
            numBoosts: F.cb,
            percentageOff: (0, P.T3)(r, F.Rr / 100)
          })
        }), (0, c.jsx)(Q, {
          Icon: N.UploadIcon,
          text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, y.v9)(F.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, c.jsx)(Q, {
          Icon: N.ReactionIcon,
          text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, c.jsx)(Q, {
          Icon: N.ScreenArrowIcon,
          text: j.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, c.jsx)(Q, {
          Icon: N.UserSquareIcon,
          text: j.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
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
          children: j.Z.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
        }), (0, c.jsx)(Q, {
          Icon: N.CheckmarkLargeIcon,
          text: j.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
          className: W.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, c.jsx)(Q, {
          Icon: N.CheckmarkLargeIcon,
          text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, y.v9)(F.p9.TIER_2, {
              useSpace: !1
            })
          }),
          className: W.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, c.jsx)(Q, {
          Icon: N.CheckmarkLargeIcon,
          text: j.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
          className: W.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, c.jsx)(Q, {
          Icon: N.CheckmarkLargeIcon,
          text: j.Z.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
          className: W.modifiedItem,
          textVariant: "text-sm/normal"
        }), o && (0, c.jsx)(H.Z, {})]
      });
    default:
      return (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(Q, {
          Icon: N.UploadIcon,
          text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, y.v9)(F.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, c.jsx)(Q, {
          Icon: N.ReactionIcon,
          text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, c.jsx)(Q, {
          Icon: N.SuperReactionIcon,
          text: j.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), (0, c.jsx)(Q, {
          Icon: N.ScreenArrowIcon,
          text: j.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, c.jsx)(Q, {
          Icon: (0, N.makeIconCompat)(v.Z),
          text: j.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
        }), (0, c.jsx)(Q, {
          Icon: N.UserSquareIcon,
          text: j.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }), o && (0, c.jsx)(H.Z, {})]
      })
  }
}

function ei(e) {
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
  } = e, I = (0, h.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), T = (0, h.e7)([g.default], () => g.default.getCurrentUser()), S = (0, B.N)(), m = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id, O = (null == I ? void 0 : I.trialId) != null ? null == T ? void 0 : T.premiumType : null, R = (0, b.Nx)(), p = (0, w.Ng)(), v = (0, b.t7)(), D = null != m || null != O ? 0 : null != p || v ? 1 : null, M = (0, x.Vi)(), P = !l && R, y = (0, x.W1)(), U = (0, f.ap)((0, A.ZP)()), k = U ? 5 : 2, {
    enabled: V
  } = G._.useExperiment({
    location: "Tier2Card"
  }, {
    autoTrackExposure: !1
  }), H = j.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  V && (null == S ? void 0 : S.trial_id) === F.a7 && (H = j.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let K = P && !U ? W.rimGlowTier2 : void 0;
  return (0, c.jsxs)("div", {
    className: E()(W.card, W.tier2, a, {
      [W.withTier2Rim]: P,
      [W.withCardHover]: P
    }),
    children: [!l && null != p && (0, w.Wp)(p, F.Si.TIER_2) && void 0 !== p.discount.amount ? (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: v ? j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : j.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: p.discount.amount
        }),
        className: W.topRimPill,
        colorOptions: k
      }), (0, c.jsx)("div", {
        className: K
      })]
    }) : null, l || m !== F.Si.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: H,
        className: W.topRimPill,
        colorOptions: k
      }), (0, c.jsx)("div", {
        className: K
      })]
    }), l || O !== F.p9.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: W.topRimPill,
        colorOptions: k
      }), (0, c.jsx)("div", {
        className: K
      })]
    }), !l && v && (0, c.jsxs)(c.Fragment, {
      children: [(0, c.jsx)(X, {
        text: j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: W.topRimPill,
        colorOptions: k
      }), (0, c.jsx)("div", {
        className: K
      })]
    }), n ? (0, c.jsx)("div", {
      className: W.wumpusImageContainer,
      children: (0, c.jsx)(N.Image, {
        src: z,
        mediaLayoutType: Y.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, c.jsxs)("div", {
      children: [(0, c.jsxs)("div", {
        children: [(0, c.jsx)(L.Z, {
          className: E()(W.title, {
            [W.modifiedTier2Title]: i,
            [W.tier2Title]: !i
          })
        }), !l && m !== F.Si.TIER_2 && M && (0, c.jsx)(N.Text, {
          variant: "text-xs/bold",
          className: W.freeTrialPillInline,
          children: y
        }), i && (0, c.jsx)(N.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === d ? W.modifiedSubHeaderSettings : W.modifiedSubHeaderStoreHome,
          children: j.Z.Messages.PREMIUM_TIER_2_SUBHEADER
        }), (0, c.jsx)($, {
          isGift: l,
          premiumTier: F.p9.TIER_2,
          offerType: D,
          offerTierMatchesCard: m === F.Si.TIER_2 || (0, w.Wp)(p, F.Si.TIER_2),
          showYearlyPrice: s,
          priceOptions: _,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? s ? W.modifiedPrices : W.modifiedPrice : void 0
        })]
      }), (0, c.jsx)("div", {
        children: (0, c.jsx)(en, {
          featureSet: i ? 2 : o,
          isModal: u,
          isGift: l
        })
      })]
    }), r, l || m !== F.Si.TIER_2 && null == p ? null : (0, c.jsx)(Z.t, {
      tier: F.p9.TIER_2
    })]
  })
}

function er(e) {
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
      className: E()(W.premiumCards, s),
      children: [(0, c.jsx)(et, {
        showWumpus: n,
        shouldUseModifiedCopy: a,
        ctaButton: i,
        variant: t
      }), (0, c.jsx)(ei, {
        showWumpus: n,
        shouldUseModifiedCopy: a,
        ctaButton: r,
        variant: t
      })]
    })
  })
}(i = a || (a = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", s[s.MODIFIED = 2] = "MODIFIED", (o = _ || (_ = {}))[o.DEFAULT = 0] = "DEFAULT", o[o.MODIFIED_COPY_STORE_HOME = 1] = "MODIFIED_COPY_STORE_HOME", o[o.MODIFIED_COPY_SETTINGS = 2] = "MODIFIED_COPY_SETTINGS"