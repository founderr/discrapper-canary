"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Y
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  r = s("414456"),
  i = s.n(r),
  l = s("446674"),
  o = s("819855"),
  u = s("77078"),
  d = s("875212"),
  c = s("841098"),
  _ = s("812204"),
  E = s("685665"),
  I = s("308592"),
  T = s("915639"),
  f = s("697218"),
  S = s("521012"),
  R = s("36694"),
  A = s("945330"),
  m = s("719923"),
  N = s("153160"),
  p = s("324878"),
  g = s("154889"),
  C = s("917247"),
  P = s("478968"),
  O = s("641078"),
  M = s("400307"),
  h = s("218435"),
  L = s("881155"),
  x = s("646718"),
  v = s("49111"),
  D = s("782340"),
  U = s("992250"),
  b = s("640754"),
  j = s("510407"),
  G = s("657890"),
  k = s("823986");
let B = e => {
    let {
      isLightTheme: t
    } = e, s = (0, O.getBOGOPillCopy)();
    return (0, a.jsx)(M.PremiumPillWithSparkles, {
      text: s,
      className: U.bogoPillWithSparkles,
      colorOptions: t ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  y = () => (0, a.jsx)("div", {
    className: U.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: U.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: D.default.Messages.MOST_POPULAR
    })
  }),
  H = e => {
    let t, {
        premiumType: s
      } = e,
      n = (0, c.default)();
    t = s === x.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(n) ? b : j : (0, o.isThemeDark)(n) ? G : k;
    let r = (0, m.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: U.logo,
      alt: r
    })
  },
  K = e => {
    let {
      text: t,
      badge: s
    } = e;
    return (0, a.jsxs)(u.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: [t, " ", s]
    })
  },
  W = e => {
    let {
      text: t
    } = e;
    return (0, a.jsx)(u.Text, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: t
    })
  },
  F = e => {
    let {
      includes: t
    } = e;
    return t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(R.default, {
        className: U.checkmarkIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(u.HiddenVisually, {
        children: D.default.Messages.INCLUDED
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(A.default, {
        className: U.closeIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(u.HiddenVisually, {
        children: D.default.Messages.NOT_INCLUDED
      })]
    })
  },
  w = e => {
    let {
      label: t,
      column1: s,
      column2: n
    } = e;
    return (0, a.jsxs)("tr", {
      className: i(U.headerRow, U.rowBottomBorder, U.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: U.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: U.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: i(U.headerCell, U.topBorderRadius),
        children: n
      })]
    })
  },
  V = e => {
    let {
      label: t,
      column1: s,
      column2: n,
      withBottomBorder: r = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: i(U.row, {
        [U.wideRow]: u,
        [U.topBorderRadius]: l,
        [U.bottomBorderRadius]: o,
        [U.rowBottomBorder]: r,
        [U.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: U.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: i(U.cell, {
          [U.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: i(U.cell, {
          [U.topBorderRadius]: l,
          [U.bottomBorderRadius]: o,
          [U.buttonsCell]: u
        }),
        children: n
      })]
    })
  };
var Y = e => {
  var t;
  let s, {
      className: r,
      hideCTAs: R = !1,
      headingOverride: A,
      hidePill: b = !1,
      selectedPlanColumnClassName: j,
      selectedPlanTier: G = x.PremiumTypes.TIER_2
    } = e,
    {
      AnalyticsLocationProvider: k
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    Y = (0, l.useStateFromStores)([S.default], () => S.default.hasFetchedSubscriptions()),
    z = (0, I.useSubscriptionPlansLoaded)(),
    Q = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: Q + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: Q + " auto off",
    autoTrackExposure: !1
  });
  let X = (0, c.default)(),
    J = (0, o.isThemeLight)(X),
    Z = (0, l.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    q = (0, m.isPremiumExactly)(Z, x.PremiumTypes.TIER_2),
    $ = (0, C.usePremiumTrialOffer)(),
    ee = null == $ ? void 0 : null === (t = $.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    et = (0, p.useCurrentPremiumTrialTier)(),
    es = (0, g.usePremiumDiscountOffer)(),
    ea = null != es && (0, g.discountOfferHasTier)(es, x.PremiumSubscriptionSKUs.TIER_2),
    en = (0, P.useDiscountedPrice)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    er = "".concat(en, "/").concat((0, m.getIntervalStringAsNoun)(x.SubscriptionIntervalTypes.MONTH)),
    ei = (0, O.useIsEligibleForBogoPromotion)();
  if (!Y || !z) return null;
  let el = m.default.getDefaultPrice(x.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    eo = m.default.getDefaultPrice(x.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    eu = {
      label: (0, a.jsx)(u.Heading, {
        className: U.textColor,
        variant: "heading-lg/extrabold",
        children: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
      }),
      column1: (0, a.jsx)(H, {
        premiumType: x.PremiumTypes.TIER_0
      }),
      column2: (0, a.jsx)(H, {
        premiumType: x.PremiumTypes.TIER_2
      })
    },
    ed = [{
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
      }),
      column1: (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(W, {
          text: m.default.formatPriceString(el, x.SubscriptionIntervalTypes.MONTH)
        })
      }),
      column2: (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(W, {
          text: ea ? er : m.default.formatPriceString(eo, x.SubscriptionIntervalTypes.MONTH)
        })
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
      }),
      column1: (0, a.jsx)(W, {
        text: (0, m.getMaxFileSizeForPremiumType)(x.PremiumTypes.TIER_0)
      }),
      column2: (0, a.jsx)(W, {
        text: (0, m.getMaxFileSizeForPremiumType)(x.PremiumTypes.TIER_2)
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(W, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
          numBoosts: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
          percentageOff: (0, N.formatPercent)(T.default.locale, x.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        })
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
          maxChars: v.MAX_MESSAGE_LENGTH_PREMIUM
        })
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }];
  return R ? ed.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : ed.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [ee === x.PremiumSubscriptionSKUs.TIER_2 || ei ? (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: J ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), et === x.PremiumTypes.TIER_2 || null != ee ? null : (0, a.jsx)(h.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [ee === x.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: J ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: ei
      }), et === x.PremiumTypes.TIER_0 || null != ee ? null : (0, a.jsx)(h.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == ee
  }), s = b ? null : null != ee || null != et ? (0, a.jsx)(M.PremiumPillWithSparkles, {
    text: null != ee ? D.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: U.freeTrialPillWithSparkles,
    colorOptions: ee === x.PremiumSubscriptionSKUs.TIER_0 ? J ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : J ? q ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : ei ? (0, a.jsx)(B, {
    isLightTheme: J
  }) : (0, a.jsx)(y, {}), (0, a.jsx)(k, {
    children: (0, a.jsxs)("div", {
      className: i(U.root, r),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: i(U.titleText, U.textColor),
        variant: "heading-xxl/extrabold",
        children: null != A ? A : D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: U.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: ee === x.PremiumSubscriptionSKUs.TIER_0 || et === x.PremiumTypes.TIER_0 || G === x.PremiumTypes.TIER_0 ? i(j, U.tier0ColumnOuter) : i(j, U.tier2ColumnOuter),
          children: s
        }), (0, a.jsxs)("table", {
          className: U.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(w, {
              ...eu
            })
          }), (0, a.jsx)("tbody", {
            children: ed.map((e, t) => (0, n.createElement)(V, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}