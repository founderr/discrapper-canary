t.d(n, {
  Z: function() {
return N;
  }
});
var o = t(735250),
  r = t(470079),
  a = t(120356),
  i = t.n(a),
  c = t(442837),
  l = t(780384),
  s = t(481060),
  u = t(100527),
  d = t(906732),
  p = t(963249),
  _ = t(639119),
  f = t(165583),
  m = t(263954),
  h = t(706454),
  S = t(285952),
  I = t(709586),
  E = t(626135),
  g = t(930153),
  b = t(74538),
  P = t(937615),
  x = t(981631),
  y = t(474936),
  M = t(689938),
  v = t(668166);

function C(e) {
  let {
shouldUpsellFromNoneTier: n
  } = e, t = (0, c.e7)([h.default], () => h.default.locale);
  return (0, o.jsxs)('div', {
className: v.perksList,
children: [
  (0, o.jsx)(m.Z, {
    icon: I.Z,
    iconClassName: v.perkIconGuild,
    description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
      numFreeGuildSubscriptions: y.cb
    })
  }),
  (0, o.jsx)(m.Z, {
    icon: I.Z,
    iconClassName: v.perkIconGuild,
    description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
      percent: (0, g.T3)(t, y.Rr / 100)
    })
  }),
  n ? (0, o.jsx)(m.Z, {
    icon: s.ReactionIcon,
    iconClassName: v.perkIconChatPerks,
    description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
  }) : null,
  (0, o.jsx)(m.Z, {
    icon: s.ScreenArrowIcon,
    iconClassName: v.perkIconStream,
    description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
  }),
  (0, o.jsx)(m.Z, {
    icon: s.UploadIcon,
    iconClassName: v.perkIconUpload,
    description: M.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
  })
]
  });
}

function N(e) {
  var n;
  let {
premiumSubscriptionPlan: t,
onClose: a,
onBack: c,
onSkip: m,
onSubscriptionConfirmation: h,
analyticsLocation: I,
analyticsSourceLocation: g,
priceOptions: N
  } = e, {
analyticsLocations: T,
sourceAnalyticsLocations: A
  } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
theme: R
  } = (0, s.useThemeContext)(), L = (0, l.ap)(R) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE, k = null == t || null == t.premiumSubscriptionType, O = b.ZP.getPrice(y.Xh.PREMIUM_MONTH_TIER_2, !1, !1, N), B = (0, P.T4)(O.amount, O.currency), U = (0, _.N)(), w = null == U ? void 0 : U.trial_id, j = (null == U ? void 0 : null === (n = U.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === y.Si.TIER_2;
  return r.useEffect(() => {
E.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
  type: y.cd.GUILD_PREMIUM_UPSELL_MODAL,
  location_stack: A
});
  }, [A]), (0, o.jsxs)(o.Fragment, {
children: [
  (0, o.jsxs)(s.ModalContent, {
    className: v.content,
    children: [
      (0, o.jsx)(s.ModalCloseButton, {
        onClick: a,
        className: v.closeButton
      }),
      j && (0, o.jsx)(f.dz, {
        className: v.premiumTrialBadge
      }),
      (0, o.jsx)('div', {
        className: i()(v.upsellImage, {
          [v.upsellImageWithTrialOffer]: j
        })
      }),
      (0, o.jsx)('div', {
        className: v.bodyText,
        children: null != w ? M.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : M.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: B
        })
      }),
      (0, o.jsx)(C, {
        shouldUpsellFromNoneTier: k
      })
    ]
  }),
  (0, o.jsxs)(s.ModalFooter, {
    align: S.Z.Align.CENTER,
    justify: S.Z.Justify.END,
    children: [
      (0, o.jsxs)('div', {
        className: v.footerRight,
        children: [
          (0, o.jsx)(s.Button, {
            look: s.Button.Looks.LINK,
            color: L,
            onClick: m,
            children: M.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
          }),
          (0, o.jsx)(s.Button, {
            color: s.Button.Colors.GREEN,
            type: 'submit',
            onClick: () => {
              a(), (0, p.Z)({
                initialPlanId: null,
                subscriptionTier: y.Si.TIER_2,
                analyticsLocations: T,
                analyticsObject: {
                  ...I,
                  section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                },
                analyticsSourceLocation: g,
                onSubscriptionConfirmation: h,
                trialId: w
              });
            },
            children: null != w ? M.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : M.Z.Messages.PREMIUM_UPSELL_UPGRADE
          })
        ]
      }),
      (0, o.jsx)('div', {
        className: v.backStep,
        children: (0, o.jsx)(s.Button, {
          color: L,
          look: s.Button.Looks.LINK,
          size: s.Button.Sizes.NONE,
          onClick: () => c(),
          children: M.Z.Messages.BACK
        })
      })
    ]
  })
]
  });
}