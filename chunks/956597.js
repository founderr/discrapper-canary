"use strict";
n.r(t), n.d(t, {
  PremiumTrialGradientBadge: function() {
    return F
  },
  default: function() {
    return G
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  s = n("627445"),
  o = n.n(s),
  u = n("866227"),
  c = n.n(u),
  d = n("446674"),
  f = n("551042"),
  m = n("819855"),
  _ = n("77078"),
  E = n("841098"),
  T = n("206230"),
  I = n("32531"),
  C = n("393414"),
  p = n("945330"),
  P = n("41250"),
  S = n("379863"),
  R = n("216422"),
  O = n("719923"),
  M = n("286235"),
  L = n("626301"),
  g = n("917247"),
  h = n("635956"),
  x = n("400307"),
  N = n("646718"),
  A = n("49111"),
  v = n("782340"),
  U = n("821535"),
  b = n("481927");

function D(e) {
  if (null == e) return null;
  let t = c(e),
    n = t.diff(c(), "h");
  if (n > 24) {
    let e = t.diff(c(), "d");
    return v.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
      numDays: e
    })
  }
  if (n > 1) return v.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
    numHours: n
  });
  let i = t.diff(c(), "minutes");
  return v.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
    numMinutes: i
  })
}

function y(e) {
  var t, n, r;
  let {
    className: l,
    children: s,
    withBottomMargin: o,
    discountOffer: u,
    trialOffer: c
  } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, f = null == c ? void 0 : c.subscription_trial, m = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== r ? r : N.PremiumSubscriptionSKUs.TIER_2;
  return (0, i.jsxs)("div", {
    className: a(l, U.gradientUpsellWrapper, {
      [U.gradientUpsellWrapperTier0]: m === N.PremiumSubscriptionSKUs.TIER_0,
      [U.gradientUpsellWrapperTier2]: m === N.PremiumSubscriptionSKUs.TIER_2,
      [U.gradientUpsellWrapperWithBottomMargin]: o
    }),
    children: [(0, i.jsxs)("div", {
      className: U.logo,
      children: [(0, i.jsx)(R.default, {
        className: U.logoIcon
      }), m === N.PremiumSubscriptionSKUs.TIER_0 && (0, i.jsx)(S.default, {
        className: U.logoWordmark
      }), m === N.PremiumSubscriptionSKUs.TIER_2 && (0, i.jsx)(P.default, {
        className: U.logoWordmark
      })]
    }), (0, i.jsx)(_.Text, {
      variant: "text-md/medium",
      className: U.copy,
      color: "none",
      children: s
    }), (0, i.jsx)(x.PremiumPillWithSparkles, {
      text: null != u ? v.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: u.discount.amount
      }) : v.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
      colorOptions: m === N.PremiumSubscriptionSKUs.TIER_0 ? x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
    }), (0, i.jsx)(_.Text, {
      variant: "eyebrow",
      className: U.countdownText,
      children: D(d)
    })]
  })
}

function j(e) {
  var t, n;
  let {
    className: l,
    onClose: a,
    subscriptionTier: s,
    analyticsLocationObject: o,
    trialOffer: u,
    discountOffer: c
  } = e, [d, f] = r.useState(!1), m = null != c ? v.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: c.discount.amount
  }) : (0, O.formatTrialCtaIntervalDuration)({
    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
  });
  return (0, i.jsx)(h.default, {
    className: l,
    subscriptionTier: s,
    trialId: null == u ? void 0 : u.trial_id,
    submitting: d,
    premiumModalAnalyticsLocation: o,
    size: _.Button.Sizes.MEDIUM,
    color: _.Button.Colors.GREEN,
    onClick: () => {
      f(!0)
    },
    onSubscribeModalClose: e => {
      f(!1), e && (null == a || a())
    },
    buttonText: m
  })
}

function F(e) {
  var t, n;
  let r = null === (t = (0, g.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
    l = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : N.PremiumSubscriptionSKUs.TIER_2;
  return (0, i.jsx)(_.Text, {
    variant: "text-xs/bold",
    className: a(U.trialBadge, e.className, {
      [U.trialBadgeGradientTier0]: l === N.PremiumSubscriptionSKUs.TIER_0,
      [U.trialBadgeGradientTier2]: l === N.PremiumSubscriptionSKUs.TIER_2
    }),
    color: "none",
    children: (0, O.formatTrialOfferIntervalDuration)({
      intervalType: null == r ? void 0 : r.interval,
      intervalCount: null == r ? void 0 : r.interval_count
    })
  })
}

function B(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: r,
    trialOffer: l,
    discountOffer: a
  } = e;
  return (0, i.jsxs)("div", {
    className: U.footer,
    children: [(0, i.jsx)(_.Button, {
      onClick: n,
      size: _.Button.Sizes.SMALL,
      look: _.ButtonLooks.BLANK,
      className: U.cancelButton,
      children: v.default.Messages.CLOSE
    }), (0, i.jsx)(j, {
      className: U.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: r,
      onClose: n,
      discountOffer: a,
      trialOffer: l
    })]
  })
}

function w(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, r = (0, g.usePremiumTrialOffer)();
  return (0, i.jsxs)("div", {
    className: U.tryOutUpsellContainer,
    children: [(0, i.jsx)(x.PremiumPillWithSparkles, {
      className: U.topRimPill,
      text: v.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
      colorOptions: x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, i.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: v.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
        onClick: L.navigateToPremiumMarketingPage
      })
    }), (0, i.jsx)(j, {
      trialOffer: r,
      className: U.subscribeButtonWide,
      subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, i.jsx)(_.Text, {
      variant: "eyebrow",
      className: U.countdownTextInSetting,
      children: D(null == r ? void 0 : r.expires_at)
    })]
  })
}

function H(e) {
  let {
    headingText: t,
    context: n,
    children: r,
    trialOffer: l,
    discountOffer: a
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.Heading, {
      className: U.header,
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, i.jsx)(_.Text, {
      className: U.context,
      variant: "text-md/normal",
      children: n
    }), (0, i.jsx)(y, {
      trialOffer: l,
      discountOffer: a,
      children: r
    })]
  })
}

function G(e) {
  let {
    headingText: t,
    context: r,
    children: l,
    onClose: s,
    type: u,
    subscriptionTier: c,
    analyticsLocationObject: P,
    trialOffer: S,
    discountOffer: R
  } = e, L = (0, d.useStateFromStores)([T.default], () => T.default.useReducedMotion), g = (0, E.default)();
  switch (u) {
    case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.Clickable, {
          className: U.upsellClose,
          onClick: s,
          children: (0, i.jsx)(p.default, {})
        }), (0, i.jsxs)("div", {
          className: U.contentContainer,
          children: [(0, i.jsx)("img", {
            className: U.upsellImage,
            src: b,
            alt: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: v.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
          }), (0, i.jsx)(y, {
            trialOffer: S,
            discountOffer: R,
            children: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, O.getDisplayNameFromSku)(c),
              onClick: () => (0, C.transitionTo)(A.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(B, {
          subscriptionTier: c,
          onClose: s,
          analyticsLocationObject: {
            section: A.AnalyticsSections.EXPRESSION_PICKER,
            object: A.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: S,
          discountOffer: R
        })]
      });
    case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
      return o(null != l, "You must specify children for this upsell type"), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: U.contentContainer,
          children: [(0, i.jsx)("img", {
            className: U.upsellImage,
            src: b,
            alt: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
          }), (0, i.jsx)(y, {
            trialOffer: S,
            discountOffer: R,
            children: v.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, O.getDisplayNameFromSku)(c),
              onClick: () => (0, C.transitionTo)(A.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(B, {
          subscriptionTier: c,
          onClose: s,
          analyticsLocationObject: {
            section: A.AnalyticsSections.EXPRESSION_PICKER,
            object: A.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: S,
          discountOffer: R
        })]
      });
    case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      o(null != l, "You must specify children for this upsell type");
      let h = (0, m.isThemeLight)(g) ? n("602291") : n("609708");
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: U.contentContainer,
          children: [(0, i.jsx)("img", {
            alt: "",
            className: U.upsellImage,
            src: h
          }), (0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: v.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }), (0, i.jsx)(y, {
            trialOffer: S,
            discountOffer: R,
            children: v.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
              planName: (0, O.getDisplayNameFromSku)(c),
              onClick: () => (0, C.transitionTo)(A.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(B, {
          subscriptionTier: c,
          onClose: s,
          analyticsLocationObject: {
            section: A.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: A.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: S,
          discountOffer: R
        })]
      });
    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
      let x;
      switch (u) {
        case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
          x = v.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
            planName: (0, O.getDisplayNameFromSku)(c),
            premiumMaxSize: c === N.PremiumSubscriptionSKUs.TIER_0 ? v.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : v.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
            onClick: () => {
              (0, C.transitionTo)(A.Routes.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
          x = v.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, O.getDisplayNameFromSku)(c),
            onClick: () => {
              (0, C.transitionTo)(A.Routes.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
          x = v.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
            onClick: () => {
              (0, C.transitionTo)(A.Routes.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
            }
          });
          break;
        case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
          x = v.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: A.MAX_MESSAGE_LENGTH_PREMIUM,
            onClick: () => {
              (0, C.transitionTo)(A.Routes.APPLICATION_STORE), null == s || s()
            }
          })
      }
      return o(null != x, "There must be some upsell context"), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)("div", {
          className: U.contentContainer,
          children: [(0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: t
          }), (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            children: r
          }), (0, i.jsx)(y, {
            trialOffer: S,
            discountOffer: R,
            children: x
          })]
        })
      });
    case N.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, i.jsxs)("div", {
        className: U.contentContainer,
        children: [(0, i.jsx)(_.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, i.jsx)(_.Text, {
          variant: "text-md/normal",
          children: r
        }), (0, i.jsx)(y, {
          trialOffer: S,
          discountOffer: R,
          children: v.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, O.getDisplayNameFromSku)(c),
            onClick: () => (0, C.transitionTo)(A.Routes.APPLICATION_STORE)
          })
        }), (0, i.jsx)(j, {
          className: U.upsellButton,
          subscriptionTier: c,
          analyticsLocationObject: P,
          onClose: s,
          trialOffer: S,
          discountOffer: R
        })]
      });
    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return o(null != l, "You must specify children for this upsell type"), (0, i.jsx)(y, {
        trialOffer: S,
        discountOffer: R,
        children: v.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
          onClick: () => {
            (0, C.transitionTo)(A.Routes.APPLICATION_STORE), (0, I.closeEditor)()
          }
        })
      });
    case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, i.jsxs)("div", {
        className: a(U.messageLengthUpsellContainer, {
          [U.messageLengthUpsellAppearAnimation]: !L
        }),
        children: [(0, i.jsx)(_.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: r
        }), (0, i.jsx)(_.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: U.messageLengthUpsellHeader,
          children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
        }), (0, i.jsx)("div", {
          className: U.divider
        }), (0, i.jsx)(y, {
          trialOffer: S,
          discountOffer: R,
          className: U.messageLengthBrandedContainer,
          subscriptionTier: c,
          children: v.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: A.MAX_MESSAGE_LENGTH_PREMIUM,
            onClick: () => {
              (0, C.transitionTo)(A.Routes.APPLICATION_STORE), null == s || s()
            }
          })
        }), (0, i.jsx)(j, {
          subscriptionTier: c,
          analyticsLocationObject: P,
          onClose: s,
          trialOffer: S,
          discountOffer: R
        })]
      });
    case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, i.jsx)(w, {});
    case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
    case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
    case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
    case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
      return (0, i.jsx)(H, {
        trialOffer: S,
        discountOffer: R,
        headingText: t,
        context: r,
        children: l
      });
    default:
      return M.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, i.jsx)(H, {
        headingText: t,
        context: r,
        children: l,
        trialOffer: S,
        discountOffer: R
      })
  }
}