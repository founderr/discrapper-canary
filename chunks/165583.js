"use strict";
n.d(t, {
  ZP: function() {
    return k
  },
  dz: function() {
    return G
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  c = n(442837),
  d = n(952265),
  E = n(780384),
  I = n(481060),
  T = n(410030),
  h = n(607070),
  f = n(238302),
  S = n(703656),
  A = n(483444),
  N = n(599250),
  m = n(74538),
  O = n(960048),
  p = n(98278),
  R = n(639119),
  g = n(197115),
  C = n(823188),
  v = n(474936),
  L = n(981631),
  D = n(689938),
  M = n(141488),
  P = n(867250);

function y(e) {
  if (null == e) return null;
  let t = _()(e),
    n = t.diff(_()(), "h");
  if (n > 24) {
    let e = t.diff(_()(), "d");
    return D.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
      numDays: e
    })
  }
  if (n > 1) return D.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
    numHours: n
  });
  let i = t.diff(_()(), "minutes");
  return D.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
    numMinutes: i
  })
}

function U(e) {
  var t, n, r;
  let {
    className: s,
    children: a,
    withBottomMargin: l,
    discountOffer: u,
    trialOffer: _
  } = e, c = null !== (t = null == _ ? void 0 : _.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, d = null == _ ? void 0 : _.subscription_trial, E = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == d ? void 0 : d.sku_id) && void 0 !== r ? r : v.Si.TIER_2;
  return (0, i.jsxs)("div", {
    className: o()(s, M.gradientUpsellWrapper, {
      [M.gradientUpsellWrapperTier0]: E === v.Si.TIER_0,
      [M.gradientUpsellWrapperTier2]: E === v.Si.TIER_2,
      [M.gradientUpsellWrapperWithBottomMargin]: l
    }),
    children: [(0, i.jsxs)("div", {
      className: M.logo,
      children: [(0, i.jsx)(I.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: M.logoIcon
      }), E === v.Si.TIER_0 && (0, i.jsx)(N.Z, {
        className: M.logoWordmark
      }), E === v.Si.TIER_2 && (0, i.jsx)(A.Z, {
        className: M.logoWordmark
      })]
    }), (0, i.jsx)(I.Text, {
      variant: "text-md/medium",
      className: M.copy,
      color: "none",
      children: a
    }), (0, i.jsx)(C.Cy, {
      text: null != u ? D.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: u.discount.amount
      }) : D.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
      colorOptions: E === v.Si.TIER_0 ? C.VE.PREMIUM_TIER_0_WHITE_FILL : C.VE.PREMIUM_TIER_2_WHITE_FILL
    }), (0, i.jsx)(I.Text, {
      variant: "eyebrow",
      className: M.countdownText,
      children: y(c)
    })]
  })
}

function b(e) {
  var t, n;
  let {
    className: s,
    onClose: o,
    subscriptionTier: a,
    analyticsLocationObject: l,
    trialOffer: u,
    discountOffer: _
  } = e, [c, d] = r.useState(!1), E = null != _ ? D.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: _.discount.amount
  }) : (0, m.Rt)({
    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
  });
  return (0, i.jsx)(g.Z, {
    className: s,
    subscriptionTier: a,
    trialId: null == u ? void 0 : u.trial_id,
    submitting: c,
    premiumModalAnalyticsLocation: l,
    size: I.Button.Sizes.MEDIUM,
    color: I.Button.Colors.GREEN,
    onClick: () => {
      d(!0)
    },
    onSubscribeModalClose: e => {
      d(!1), e && (null == o || o())
    },
    buttonText: E
  })
}

function G(e) {
  var t, n;
  let r = null === (t = (0, R.N)()) || void 0 === t ? void 0 : t.subscription_trial,
    s = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : v.Si.TIER_2;
  return (0, i.jsx)(I.Text, {
    variant: "text-xs/bold",
    className: o()(M.trialBadge, e.className, {
      [M.trialBadgeGradientTier0]: s === v.Si.TIER_0,
      [M.trialBadgeGradientTier2]: s === v.Si.TIER_2
    }),
    color: "none",
    children: (0, m.a5)({
      intervalType: null == r ? void 0 : r.interval,
      intervalCount: null == r ? void 0 : r.interval_count
    })
  })
}

function w(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: r,
    trialOffer: s,
    discountOffer: o
  } = e;
  return (0, i.jsxs)("div", {
    className: M.footer,
    children: [(0, i.jsx)(I.Button, {
      onClick: n,
      size: I.Button.Sizes.SMALL,
      look: I.ButtonLooks.BLANK,
      className: M.cancelButton,
      children: D.Z.Messages.CLOSE
    }), (0, i.jsx)(b, {
      className: M.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: r,
      onClose: n,
      discountOffer: o,
      trialOffer: s
    })]
  })
}

function x(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, r = (0, R.N)();
  return (0, i.jsxs)("div", {
    className: M.tryOutUpsellContainer,
    children: [(0, i.jsx)(C.Cy, {
      className: M.topRimPill,
      text: D.Z.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
      colorOptions: C.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, i.jsx)(I.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: D.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
        onClick: p.z
      })
    }), (0, i.jsx)(b, {
      trialOffer: r,
      className: M.subscribeButtonWide,
      subscriptionTier: v.Si.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, i.jsx)(I.Text, {
      variant: "eyebrow",
      className: M.countdownTextInSetting,
      children: y(null == r ? void 0 : r.expires_at)
    })]
  })
}

function B(e) {
  let {
    headingText: t,
    context: n,
    children: r,
    trialOffer: s,
    discountOffer: o
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(I.Heading, {
      className: M.__invalid_header,
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, i.jsx)(I.Text, {
      className: M.context,
      variant: "text-md/normal",
      children: n
    }), (0, i.jsx)(U, {
      trialOffer: s,
      discountOffer: o,
      children: r
    })]
  })
}

function k(e) {
  let {
    headingText: t,
    context: r,
    children: s,
    onClose: a,
    type: u,
    subscriptionTier: _,
    analyticsLocationObject: A,
    trialOffer: N,
    discountOffer: p
  } = e, R = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), g = (0, T.ZP)();
  switch (u) {
    case v.cd.EMPTY_STICKER_PICKER_UPSELL:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(I.Clickable, {
          className: M.upsellClose,
          onClick: a,
          children: (0, i.jsx)(I.CloseSmallIcon, {
            size: "md",
            color: "currentColor"
          })
        }), (0, i.jsxs)("div", {
          className: M.contentContainer,
          children: [(0, i.jsx)("img", {
            className: M.upsellImage,
            src: P,
            alt: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
          }), (0, i.jsx)(U, {
            trialOffer: N,
            discountOffer: p,
            children: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, m.jP)(_),
              onClick: () => (0, S.uL)(L.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(w, {
          subscriptionTier: _,
          onClose: a,
          analyticsLocationObject: {
            section: L.jXE.EXPRESSION_PICKER,
            object: L.qAy.BUTTON_CTA
          },
          trialOffer: N,
          discountOffer: p
        })]
      });
    case v.cd.STICKER_PICKER_UPSELL:
      return l()(null != s, "You must specify children for this upsell type"), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: M.contentContainer,
          children: [(0, i.jsx)("img", {
            className: M.upsellImage,
            src: P,
            alt: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
          }), (0, i.jsx)(U, {
            trialOffer: N,
            discountOffer: p,
            children: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, m.jP)(_),
              onClick: () => (0, S.uL)(L.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(w, {
          subscriptionTier: _,
          onClose: a,
          analyticsLocationObject: {
            section: L.jXE.EXPRESSION_PICKER,
            object: L.qAy.BUTTON_CTA
          },
          trialOffer: N,
          discountOffer: p
        })]
      });
    case v.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != s, "You must specify children for this upsell type");
      let C = (0, E.ap)(g) ? n(537381) : n(341048);
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: M.contentContainer,
          children: [(0, i.jsx)("img", {
            alt: "",
            className: M.upsellImage,
            src: C
          }), (0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }), (0, i.jsx)(U, {
            trialOffer: N,
            discountOffer: p,
            children: D.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
              planName: (0, m.jP)(_),
              onClick: () => (0, S.uL)(L.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(w, {
          subscriptionTier: _,
          onClose: a,
          analyticsLocationObject: {
            section: L.jXE.EMOJI_PICKER_POPOUT,
            object: L.qAy.BUTTON_CTA
          },
          trialOffer: N,
          discountOffer: p
        })]
      });
    case v.cd.UPLOAD_ERROR_UPSELL:
    case v.cd.BURST_REACTION_UPSELL:
    case v.cd.STREAM_QUALITY_UPSELL:
    case v.cd.MESSAGE_LENGTH_UPSELL:
      let y;
      switch (u) {
        case v.cd.UPLOAD_ERROR_UPSELL:
          y = D.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
            planName: (0, m.jP)(_),
            premiumMaxSize: _ === v.Si.TIER_0 ? D.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : D.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
            onClick: () => {
              (0, S.uL)(L.Z5c.APPLICATION_STORE), null == a || a()
            }
          });
          break;
        case v.cd.BURST_REACTION_UPSELL:
          y = D.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, m.jP)(_),
            onClick: () => {
              (0, S.uL)(L.Z5c.APPLICATION_STORE), null == a || a()
            }
          });
          break;
        case v.cd.STREAM_QUALITY_UPSELL:
          y = D.Z.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
            onClick: () => {
              (0, S.uL)(L.Z5c.APPLICATION_STORE), null == a || a(), (0, d.pT)()
            }
          });
          break;
        case v.cd.MESSAGE_LENGTH_UPSELL:
          y = D.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: L.en1,
            onClick: () => {
              (0, S.uL)(L.Z5c.APPLICATION_STORE), null == a || a()
            }
          })
      }
      return l()(null != y, "There must be some upsell context"), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)("div", {
          className: M.contentContainer,
          children: [(0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: t
          }), (0, i.jsx)(I.Text, {
            variant: "text-md/normal",
            children: r
          }), (0, i.jsx)(U, {
            trialOffer: N,
            discountOffer: p,
            children: y
          })]
        })
      });
    case v.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, i.jsxs)("div", {
        className: M.contentContainer,
        children: [(0, i.jsx)(I.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, i.jsx)(I.Text, {
          variant: "text-md/normal",
          children: r
        }), (0, i.jsx)(U, {
          trialOffer: N,
          discountOffer: p,
          children: D.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, m.jP)(_),
            onClick: () => (0, S.uL)(L.Z5c.APPLICATION_STORE)
          })
        }), (0, i.jsx)(b, {
          className: M.upsellButton,
          subscriptionTier: _,
          analyticsLocationObject: A,
          onClose: a,
          trialOffer: N,
          discountOffer: p
        })]
      });
    case v.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != s, "You must specify children for this upsell type"), (0, i.jsx)(U, {
        trialOffer: N,
        discountOffer: p,
        children: D.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
          onClick: () => {
            (0, S.uL)(L.Z5c.APPLICATION_STORE), (0, f.my)()
          }
        })
      });
    case v.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, i.jsxs)("div", {
        className: o()(M.messageLengthUpsellContainer, {
          [M.messageLengthUpsellAppearAnimation]: !R
        }),
        children: [(0, i.jsx)(I.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: r
        }), (0, i.jsx)(I.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: M.messageLengthUpsellHeader,
          children: D.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
        }), (0, i.jsx)("div", {
          className: M.divider
        }), (0, i.jsx)(U, {
          trialOffer: N,
          discountOffer: p,
          className: M.messageLengthBrandedContainer,
          subscriptionTier: _,
          children: D.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: L.en1,
            onClick: () => {
              (0, S.uL)(L.Z5c.APPLICATION_STORE), null == a || a()
            }
          })
        }), (0, i.jsx)(b, {
          subscriptionTier: _,
          analyticsLocationObject: A,
          onClose: a,
          trialOffer: N,
          discountOffer: p
        })]
      });
    case v.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case v.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, i.jsx)(x, {});
    case v.cd.GUILD_CAP_MODAL_UPSELL:
    case v.cd.PREMIUM_GUILD_IDENTITY_MODAL:
    case v.cd.CUSTOM_PROFILE_UPSELL:
    case v.cd.VIDEO_BACKGROUNDS_MODAL:
    case v.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case v.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case v.cd.EMOJI_PICKER_EMOJI_CLICKED:
    case v.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
      return (0, i.jsx)(B, {
        trialOffer: N,
        discountOffer: p,
        headingText: t,
        context: r,
        children: s
      });
    default:
      return O.Z.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, i.jsx)(B, {
        headingText: t,
        context: r,
        children: s,
        trialOffer: N,
        discountOffer: p
      })
  }
}