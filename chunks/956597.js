"use strict";
n.r(t), n.d(t, {
  PremiumTrialGradientBadge: function() {
    return F
  },
  default: function() {
    return G
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  l = n("414456"),
  a = n.n(l),
  s = n("627445"),
  o = n.n(s),
  u = n("866227"),
  d = n.n(u),
  c = n("446674"),
  m = n("551042"),
  f = n("819855"),
  _ = n("77078"),
  E = n("841098"),
  T = n("206230"),
  I = n("32531"),
  p = n("393414"),
  P = n("945330"),
  S = n("41250"),
  R = n("379863"),
  O = n("216422"),
  C = n("719923"),
  M = n("286235"),
  g = n("626301"),
  L = n("917247"),
  v = n("635956"),
  U = n("400307"),
  x = n("646718"),
  h = n("49111"),
  N = n("782340"),
  A = n("670714"),
  b = n("481927");

function D(e) {
  if (null == e) return null;
  let t = d(e),
    n = t.diff(d(), "h");
  if (n > 24) {
    let e = t.diff(d(), "d");
    return N.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
      numDays: e
    })
  }
  if (n > 1) return N.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
    numHours: n
  });
  let r = t.diff(d(), "minutes");
  return N.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
    numMinutes: r
  })
}

function y(e) {
  var t, n, i;
  let {
    className: l,
    children: s,
    withBottomMargin: o,
    discountOffer: u,
    trialOffer: d
  } = e, c = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, m = null == d ? void 0 : d.subscription_trial, f = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == m ? void 0 : m.sku_id) && void 0 !== i ? i : x.PremiumSubscriptionSKUs.TIER_2;
  return (0, r.jsxs)("div", {
    className: a(l, A.gradientUpsellWrapper, {
      [A.gradientUpsellWrapperTier0]: f === x.PremiumSubscriptionSKUs.TIER_0,
      [A.gradientUpsellWrapperTier2]: f === x.PremiumSubscriptionSKUs.TIER_2,
      [A.gradientUpsellWrapperWithBottomMargin]: o
    }),
    children: [(0, r.jsxs)("div", {
      className: A.logo,
      children: [(0, r.jsx)(O.default, {
        className: A.logoIcon
      }), f === x.PremiumSubscriptionSKUs.TIER_0 && (0, r.jsx)(R.default, {
        className: A.logoWordmark
      }), f === x.PremiumSubscriptionSKUs.TIER_2 && (0, r.jsx)(S.default, {
        className: A.logoWordmark
      })]
    }), (0, r.jsx)(_.Text, {
      variant: "text-md/medium",
      className: A.copy,
      color: "none",
      children: s
    }), (0, r.jsx)(U.PremiumPillWithSparkles, {
      text: null != u ? N.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: u.discount.amount
      }) : N.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
      colorOptions: f === x.PremiumSubscriptionSKUs.TIER_0 ? U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
    }), (0, r.jsx)(_.Text, {
      variant: "eyebrow",
      className: A.countdownText,
      children: D(c)
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
    discountOffer: d
  } = e, [c, m] = i.useState(!1), f = null != d ? N.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: d.discount.amount
  }) : (0, C.formatTrialCtaIntervalDuration)({
    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
  });
  return (0, r.jsx)(v.default, {
    className: l,
    subscriptionTier: s,
    trialId: null == u ? void 0 : u.trial_id,
    submitting: c,
    premiumModalAnalyticsLocation: o,
    size: _.Button.Sizes.MEDIUM,
    color: _.Button.Colors.GREEN,
    onClick: () => {
      m(!0)
    },
    onSubscribeModalClose: e => {
      m(!1), e && (null == a || a())
    },
    buttonText: f
  })
}

function F(e) {
  var t, n;
  let i = null === (t = (0, L.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
    l = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : x.PremiumSubscriptionSKUs.TIER_2;
  return (0, r.jsx)(_.Text, {
    variant: "text-xs/bold",
    className: a(A.trialBadge, e.className, {
      [A.trialBadgeGradientTier0]: l === x.PremiumSubscriptionSKUs.TIER_0,
      [A.trialBadgeGradientTier2]: l === x.PremiumSubscriptionSKUs.TIER_2
    }),
    color: "none",
    children: (0, C.formatTrialOfferIntervalDuration)({
      intervalType: null == i ? void 0 : i.interval,
      intervalCount: null == i ? void 0 : i.interval_count
    })
  })
}

function w(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: i,
    trialOffer: l,
    discountOffer: a
  } = e;
  return (0, r.jsxs)("div", {
    className: A.footer,
    children: [(0, r.jsx)(_.Button, {
      onClick: n,
      size: _.Button.Sizes.SMALL,
      look: _.ButtonLooks.BLANK,
      className: A.cancelButton,
      children: N.default.Messages.CLOSE
    }), (0, r.jsx)(j, {
      className: A.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: i,
      onClose: n,
      discountOffer: a,
      trialOffer: l
    })]
  })
}

function B(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, i = (0, L.usePremiumTrialOffer)();
  return (0, r.jsxs)("div", {
    className: A.tryOutUpsellContainer,
    children: [(0, r.jsx)(U.PremiumPillWithSparkles, {
      className: A.topRimPill,
      text: N.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
      colorOptions: U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, r.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: N.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
        onClick: g.navigateToPremiumMarketingPage
      })
    }), (0, r.jsx)(j, {
      trialOffer: i,
      className: A.subscribeButtonWide,
      subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, r.jsx)(_.Text, {
      variant: "eyebrow",
      className: A.countdownTextInSetting,
      children: D(null == i ? void 0 : i.expires_at)
    })]
  })
}

function k(e) {
  let {
    headingText: t,
    context: n,
    children: i,
    trialOffer: l,
    discountOffer: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.Heading, {
      className: A.header,
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, r.jsx)(_.Text, {
      className: A.context,
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(y, {
      trialOffer: l,
      discountOffer: a,
      children: i
    })]
  })
}

function G(e) {
  let {
    headingText: t,
    context: i,
    children: l,
    onClose: s,
    type: u,
    subscriptionTier: d,
    analyticsLocationObject: S,
    trialOffer: R,
    discountOffer: O
  } = e, g = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), L = (0, E.default)();
  switch (u) {
    case x.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.Clickable, {
          className: A.upsellClose,
          onClick: s,
          children: (0, r.jsx)(P.default, {})
        }), (0, r.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, r.jsx)("img", {
            className: A.upsellImage,
            src: b,
            alt: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, r.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: N.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
          }), (0, r.jsx)(y, {
            trialOffer: R,
            discountOffer: O,
            children: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, C.getDisplayNameFromSku)(d),
              onClick: () => (0, p.transitionTo)(h.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(w, {
          subscriptionTier: d,
          onClose: s,
          analyticsLocationObject: {
            section: h.AnalyticsSections.EXPRESSION_PICKER,
            object: h.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: R,
          discountOffer: O
        })]
      });
    case x.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
      return o(null != l, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, r.jsx)("img", {
            className: A.upsellImage,
            src: b,
            alt: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, r.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
          }), (0, r.jsx)(y, {
            trialOffer: R,
            discountOffer: O,
            children: N.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, C.getDisplayNameFromSku)(d),
              onClick: () => (0, p.transitionTo)(h.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(w, {
          subscriptionTier: d,
          onClose: s,
          analyticsLocationObject: {
            section: h.AnalyticsSections.EXPRESSION_PICKER,
            object: h.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: R,
          discountOffer: O
        })]
      });
    case x.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      o(null != l, "You must specify children for this upsell type");
      let v = (0, f.isThemeLight)(L) ? n("602291") : n("609708");
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, r.jsx)("img", {
            alt: "",
            className: A.upsellImage,
            src: v
          }), (0, r.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: N.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }), (0, r.jsx)(y, {
            trialOffer: R,
            discountOffer: O,
            children: N.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
              planName: (0, C.getDisplayNameFromSku)(d),
              onClick: () => (0, p.transitionTo)(h.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(w, {
          subscriptionTier: d,
          onClose: s,
          analyticsLocationObject: {
            section: h.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: h.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: R,
          discountOffer: O
        })]
      });
    case x.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
    case x.PremiumUpsellTypes.BURST_REACTION_UPSELL:
    case x.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
    case x.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
      let U;
      switch (u) {
        case x.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
          U = N.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
            planName: (0, C.getDisplayNameFromSku)(d),
            premiumMaxSize: d === x.PremiumSubscriptionSKUs.TIER_0 ? N.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : N.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
            onClick: () => {
              (0, p.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case x.PremiumUpsellTypes.BURST_REACTION_UPSELL:
          U = N.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, C.getDisplayNameFromSku)(d),
            onClick: () => {
              (0, p.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case x.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
          U = N.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
            onClick: () => {
              (0, p.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s(), (0, m.closeAllModals)()
            }
          });
          break;
        case x.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
          U = N.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: h.MAX_MESSAGE_LENGTH_PREMIUM,
            onClick: () => {
              (0, p.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
            }
          })
      }
      return o(null != U, "There must be some upsell context"), (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, r.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: t
          }), (0, r.jsx)(_.Text, {
            variant: "text-md/normal",
            children: i
          }), (0, r.jsx)(y, {
            trialOffer: R,
            discountOffer: O,
            children: U
          })]
        })
      });
    case x.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, r.jsxs)("div", {
        className: A.contentContainer,
        children: [(0, r.jsx)(_.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(_.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(y, {
          trialOffer: R,
          discountOffer: O,
          children: N.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, C.getDisplayNameFromSku)(d),
            onClick: () => (0, p.transitionTo)(h.Routes.APPLICATION_STORE)
          })
        }), (0, r.jsx)(j, {
          className: A.upsellButton,
          subscriptionTier: d,
          analyticsLocationObject: S,
          onClose: s,
          trialOffer: R,
          discountOffer: O
        })]
      });
    case x.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return o(null != l, "You must specify children for this upsell type"), (0, r.jsx)(y, {
        trialOffer: R,
        discountOffer: O,
        children: N.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
          onClick: () => {
            (0, p.transitionTo)(h.Routes.APPLICATION_STORE), (0, I.closeEditor)()
          }
        })
      });
    case x.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, r.jsxs)("div", {
        className: a(A.messageLengthUpsellContainer, {
          [A.messageLengthUpsellAppearAnimation]: !g
        }),
        children: [(0, r.jsx)(_.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: i
        }), (0, r.jsx)(_.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: A.messageLengthUpsellHeader,
          children: N.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
        }), (0, r.jsx)("div", {
          className: A.divider
        }), (0, r.jsx)(y, {
          trialOffer: R,
          discountOffer: O,
          className: A.messageLengthBrandedContainer,
          subscriptionTier: d,
          children: N.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: h.MAX_MESSAGE_LENGTH_PREMIUM,
            onClick: () => {
              (0, p.transitionTo)(h.Routes.APPLICATION_STORE), null == s || s()
            }
          })
        }), (0, r.jsx)(j, {
          subscriptionTier: d,
          analyticsLocationObject: S,
          onClose: s,
          trialOffer: R,
          discountOffer: O
        })]
      });
    case x.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case x.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, r.jsx)(B, {});
    case x.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
    case x.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
    case x.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
    case x.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
    case x.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case x.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case x.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
      return (0, r.jsx)(k, {
        trialOffer: R,
        discountOffer: O,
        headingText: t,
        context: i,
        children: l
      });
    default:
      return M.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, r.jsx)(k, {
        headingText: t,
        context: i,
        children: l,
        trialOffer: R,
        discountOffer: O
      })
  }
}