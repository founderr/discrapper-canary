t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(913527),
  o = t.n(r),
  c = t(442837),
  E = t(622535),
  d = t(780384),
  _ = t(481060),
  T = t(570140),
  S = t(355467),
  u = t(37234),
  I = t(821849),
  N = t(230711),
  A = t(497321),
  C = t(634894),
  O = t(410030),
  m = t(100527),
  h = t(906732),
  g = t(211242),
  R = t(15640),
  M = t(89057),
  x = t(703656),
  D = t(246946),
  p = t(78839),
  L = t(586576),
  P = t(483444),
  Z = t(626135),
  f = t(74538),
  v = t(140465),
  j = t(646476),
  U = t(730314),
  B = t(91802),
  b = t(898997),
  G = t(197115),
  F = t(823188),
  V = t(504865),
  y = t(179984),
  Y = t(386733),
  H = t(487980),
  k = t(474936),
  w = t(981631),
  W = t(689938),
  K = t(291033),
  z = t(881188),
  Q = t(520314),
  X = t(434691);

function q() {
  var e, s, t;
  let i = (0, c.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
    {
      bucket: a
    } = (0, U.wj)("PremiumMarketingHome"),
    r = a > 0,
    E = (0, v.t7)(),
    T = (0, v.lr)(),
    S = (0, O.ZP)();
  if (null == i || null == i.planIdFromItems) return null;
  let I = null != i.trialId,
    A = i.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2,
    C = E || I,
    m = null != i.trialEndsAt ? o()(i.trialEndsAt).diff(o()(), "d") : 0,
    h = k.GP[i.planIdFromItems],
    g = f.ZP.formatPriceString(f.ZP.getDefaultPrice(h.id), h.interval);
  return (0, n.jsxs)("div", {
    className: l()(K.tierCard, {
      [K.withTier2Rim]: C
    }),
    children: [(0, n.jsxs)("div", {
      className: l()({
        [K.tierInfo]: !r,
        [K.modifiedTierInfo]: r
      }),
      children: [(0, n.jsx)(P.Z, {
        className: l()({
          [K.tierTitle]: !r,
          [K.modifiedTier2Title]: r
        })
      }), r && (0, n.jsx)(_.Text, {
        variant: "display-md",
        color: "always-white",
        className: K.modifiedSubHeader,
        children: W.Z.Messages.PREMIUM_TIER_2_SUBHEADER
      }), C ? (0, n.jsxs)(n.Fragment, {
        children: [(I || !A) && (0, n.jsx)(F.Cy, {
          text: I ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: K.topRimPill,
          colorOptions: (0, d.wj)(S) ? F.VE.PREMIUM_TIER_2_WHITE_FILL : F.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (I || !A) && (0, n.jsx)("div", {
          className: K.rimGlowTier2
        }), (0, n.jsx)(_.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: K.trialHeader,
          children: I ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: m,
            price: g
          }) : A ? W.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (e = null == T ? void 0 : T.percentage) && void 0 !== e ? e : k.Bo,
            regularPrice: g
          }) : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (s = null == T ? void 0 : T.percentage) && void 0 !== s ? s : k.M_,
            regularPrice: g,
            numMonths: null !== (t = null == T ? void 0 : T.duration) && void 0 !== t ? t : k.rt
          })
        })]
      }) : (0, n.jsx)(V.Z, {
        variant: r ? "heading-lg/normal" : void 0,
        subscriptionTier: k.Si.TIER_2,
        interval: h.interval,
        shouldUseModifiedCopy: r
      }), (0, n.jsx)(F.nT, {
        featureSet: r ? F.uZ.MODIFIED : void 0
      }), (0, n.jsx)(_.Button, {
        className: K.tierCardButton,
        color: _.Button.Colors.WHITE,
        onClick: () => {
          Z.default.track(w.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, u.xf)(), (0, x.uL)(w.Z5c.APPLICATION_STORE)
        },
        children: (0, n.jsx)(_.Text, {
          className: K.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: W.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, n.jsx)(_.Button, {
        className: K.managePlanButton,
        look: _.Button.Looks.OUTLINED,
        color: _.Button.Colors.WHITE,
        onClick: () => {
          Z.default.track(w.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), N.Z.open(w.oAB.SUBSCRIPTIONS)
        },
        children: (0, n.jsx)(_.Text, {
          className: K.__invalid_managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: W.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), !r && (0, n.jsx)("div", {
      className: K.tierImage,
      children: (0, n.jsx)("img", {
        className: K.tierImage,
        alt: "",
        src: z
      })
    })]
  })
}

function J() {
  let e = (0, j.rK)(),
    {
      enabled: s
    } = j.RO.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: e
    }),
    t = s && e;
  return (0, n.jsxs)("div", {
    className: l()(K.giftCard, {
      [K.giftCardSeasonal]: t
    }),
    children: [t && (0, n.jsx)("img", {
      className: K.seasonalGiftImage,
      alt: "",
      src: Q
    }), (0, n.jsx)("img", {
      className: K.giftImage,
      style: {
        visibility: t ? "hidden" : "visible"
      },
      alt: "",
      src: X
    }), (0, n.jsxs)("div", {
      className: K.giftInfo,
      children: [(0, n.jsx)(_.Heading, {
        className: l()(K.giftTitle, {
          [K.seasonalColor]: t
        }),
        variant: "heading-xl/extrabold",
        children: t ? W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, n.jsx)(_.Text, {
        className: l()(K.giftText, {
          [K.seasonalColor]: t
        }),
        variant: "text-sm/normal",
        children: t ? W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, n.jsx)(G.Z, {
        isGift: !0,
        className: l()(K.giftCardButton, t ? K.seasonalColor : K.giftCardButtonColor),
        look: _.Button.Looks.OUTLINED,
        buttonText: W.Z.Messages.GIFT_NITRO,
        buttonTextClassName: K.giftButtonCTA,
        color: _.Button.Colors.CUSTOM,
        onClick: () => {
          Z.default.track(w.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
s.Z = function() {
  let e = (0, g.Q)(),
    {
      analyticsLocations: s
    } = (0, h.ZP)(m.Z.PREMIUM_SETTINGS),
    t = (0, c.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
    a = (0, c.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
    l = (0, R.V)(),
    [r, o] = i.useState(!0),
    d = (0, B.n)(),
    u = null == d ? void 0 : d.countryCode,
    N = (0, c.e7)([D.Z], () => D.Z.enabled),
    O = "PremiumManagementSettings";
  (0, C.j)({
    location: O + " auto on",
    autoTrackExposure: !0
  }), (0, C.j)({
    location: O + " auto off",
    autoTrackExposure: !1
  }), (0, b.B)("PremiumManagementSettings");
  let x = (0, H.b)("PremiumManagementSettings");
  i.useEffect(() => {
    T.Z.wait(async () => {
      !N && !e && await Promise.all([S.jg(), S.tZ(), (0, I.Y2)(u, null, w.JjL.DISCOVERY)]), o(!1)
    })
  }, [u, N, e]);
  let [P, f] = i.useState(!1);
  if (N) return (0, n.jsx)(A.Z, {});
  if (e) return (0, n.jsx)(M.c8, {});
  if ((!a || null == t || !l) && !r) return (0, n.jsx)(L.Z, {
    title: W.Z.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!a || null == t || !l || r) return (0, n.jsx)(_.Spinner, {});
  let v = null != t.trialId;
  return (0, n.jsx)(h.Gt, {
    value: s,
    children: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: K.__invalid_container,
        children: [(0, n.jsx)(q, {}), x && (0, n.jsx)(Y.Z, {
          isInSettings: !0
        }), (0, n.jsx)(J, {}), (0, n.jsx)(y.Z, {
          className: K.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: W.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !v,
          selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
          selectedPlanTier: k.p9.TIER_2
        })]
      }), (0, n.jsx)(E.$, {
        onChange: e => {
          e && !P && (Z.default.track(w.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: s
          }), f(!0))
        },
        children: (0, n.jsx)("div", {
          className: K.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}