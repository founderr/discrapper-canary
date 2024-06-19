t.d(n, {
  Z: function() {
    return f
  }
});
var l = t(735250),
  s = t(470079),
  i = t(120356),
  o = t.n(i),
  r = t(442837),
  a = t(780384),
  u = t(481060),
  c = t(100527),
  E = t(906732),
  d = t(963249),
  _ = t(639119),
  p = t(165583),
  S = t(263954),
  P = t(706454),
  I = t(285952),
  M = t(709586),
  T = t(626135),
  m = t(930153),
  h = t(74538),
  N = t(937615),
  A = t(981631),
  L = t(474936),
  R = t(689938),
  C = t(817615);

function U(e) {
  let {
    shouldUpsellFromNoneTier: n
  } = e, t = (0, r.e7)([P.default], () => P.default.locale);
  return (0, l.jsxs)("div", {
    className: C.perksList,
    children: [(0, l.jsx)(S.Z, {
      icon: M.Z,
      iconClassName: C.perkIconGuild,
      description: R.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: L.cb
      })
    }), (0, l.jsx)(S.Z, {
      icon: M.Z,
      iconClassName: C.perkIconGuild,
      description: R.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, m.T3)(t, L.Rr / 100)
      })
    }), n ? (0, l.jsx)(S.Z, {
      icon: u.ReactionIcon,
      iconClassName: C.perkIconChatPerks,
      description: R.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, l.jsx)(S.Z, {
      icon: u.ScreenArrowIcon,
      iconClassName: C.perkIconStream,
      description: R.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, l.jsx)(S.Z, {
      icon: u.UploadIcon,
      iconClassName: C.perkIconUpload,
      description: R.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
    })]
  })
}

function f(e) {
  var n;
  let {
    premiumSubscriptionPlan: t,
    onClose: i,
    onBack: r,
    onSkip: S,
    onSubscriptionConfirmation: P,
    analyticsLocation: M,
    analyticsSourceLocation: m,
    priceOptions: f
  } = e, {
    analyticsLocations: y,
    sourceAnalyticsLocations: g
  } = (0, E.ZP)(c.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: O
  } = (0, u.useThemeContext)(), Z = (0, a.ap)(O) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE, D = null == t || null == t.premiumSubscriptionType, x = h.ZP.getPrice(L.Xh.PREMIUM_MONTH_TIER_2, !1, !1, f), k = (0, N.T4)(x.amount, x.currency), j = (0, _.N)(), b = null == j ? void 0 : j.trial_id, B = (null == j ? void 0 : null === (n = j.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === L.Si.TIER_2;
  return s.useEffect(() => {
    T.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
      type: L.cd.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: g
    })
  }, [g]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.ModalContent, {
      className: C.content,
      children: [(0, l.jsx)(u.ModalCloseButton, {
        onClick: i,
        className: C.closeButton
      }), B && (0, l.jsx)(p.dz, {
        className: C.premiumTrialBadge
      }), (0, l.jsx)("div", {
        className: o()(C.upsellImage, {
          [C.upsellImageWithTrialOffer]: B
        })
      }), (0, l.jsx)("div", {
        className: C.bodyText,
        children: null != b ? R.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : R.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: k
        })
      }), (0, l.jsx)(U, {
        shouldUpsellFromNoneTier: D
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      align: I.Z.Align.CENTER,
      justify: I.Z.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: C.footerRight,
        children: [(0, l.jsx)(u.Button, {
          look: u.Button.Looks.LINK,
          color: Z,
          onClick: S,
          children: R.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
        }), (0, l.jsx)(u.Button, {
          color: u.Button.Colors.GREEN,
          type: "submit",
          onClick: () => {
            i(), (0, d.Z)({
              initialPlanId: null,
              subscriptionTier: L.Si.TIER_2,
              analyticsLocations: y,
              analyticsObject: {
                ...M,
                section: A.jXE.PREMIUM_GUILD_PURCHASE_MODAL
              },
              analyticsSourceLocation: m,
              onSubscriptionConfirmation: P,
              trialId: b
            })
          },
          children: null != b ? R.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : R.Z.Messages.PREMIUM_UPSELL_UPGRADE
        })]
      }), (0, l.jsx)("div", {
        className: C.backStep,
        children: (0, l.jsx)(u.Button, {
          color: Z,
          look: u.Button.Looks.LINK,
          size: u.Button.Sizes.NONE,
          onClick: () => r(),
          children: R.Z.Messages.BACK
        })
      })]
    })]
  })
}