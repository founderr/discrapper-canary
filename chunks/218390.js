t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(913527),
  l = t.n(o),
  c = t(442837),
  d = t(622535),
  _ = t(780384),
  E = t(481060),
  u = t(570140),
  T = t(355467),
  I = t(37234),
  S = t(821849),
  N = t(230711),
  C = t(497321),
  m = t(634894),
  A = t(410030),
  h = t(100527),
  g = t(906732),
  O = t(211242),
  p = t(15640),
  R = t(89057),
  x = t(406128),
  M = t(703656),
  D = t(246946),
  f = t(78839),
  P = t(483444),
  L = t(626135),
  Z = t(74538),
  b = t(140465),
  v = t(646476),
  j = t(730314),
  B = t(91802),
  U = t(898997),
  G = t(197115),
  F = t(823188),
  y = t(504865),
  V = t(179984),
  Y = t(386733),
  w = t(487980),
  k = t(474936),
  H = t(981631),
  W = t(689938),
  K = t(536273),
  z = t(881188),
  Q = t(520314),
  X = t(434691);

function q() {
  var e, s, t;
  let a = (0, c.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
{
  bucket: i
} = (0, j.wj)('PremiumMarketingHome'),
o = i > 0,
d = (0, b.t7)(),
u = (0, b.lr)(),
T = (0, A.ZP)();
  if (null == a || null == a.planIdFromItems)
return null;
  let S = null != a.trialId,
C = a.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2,
m = d || S,
h = null != a.trialEndsAt ? l()(a.trialEndsAt).diff(l()(), 'd') : 0,
g = k.GP[a.planIdFromItems],
O = Z.ZP.formatPriceString(Z.ZP.getDefaultPrice(g.id), g.interval);
  return (0, n.jsxs)('div', {
className: r()(K.tierCard, {
  [K.withTier2Rim]: m
}),
children: [
  (0, n.jsxs)('div', {
    className: r()({
      [K.tierInfo]: !o,
      [K.modifiedTierInfo]: o
    }),
    children: [
      (0, n.jsx)(P.Z, {
        className: r()({
          [K.tierTitle]: !o,
          [K.modifiedTier2Title]: o
        })
      }),
      o && (0, n.jsx)(E.Text, {
        variant: 'display-md',
        color: 'always-white',
        className: K.modifiedSubHeader,
        children: W.Z.Messages.PREMIUM_TIER_2_SUBHEADER
      }),
      m ? (0, n.jsxs)(n.Fragment, {
        children: [
          (S || !C) && (0, n.jsx)(F.Cy, {
            text: S ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
            className: K.topRimPill,
            colorOptions: (0, _.wj)(T) ? F.VE.PREMIUM_TIER_2_WHITE_FILL : F.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
          }),
          (S || !C) && (0, n.jsx)('div', {
            className: K.rimGlowTier2
          }),
          (0, n.jsx)(E.Heading, {
            variant: 'heading-md/normal',
            color: 'always-white',
            className: K.trialHeader,
            children: S ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
              remainingTime: h,
              price: O
            }) : C ? W.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
              percent: null !== (e = null == u ? void 0 : u.percentage) && void 0 !== e ? e : k.Bo,
              regularPrice: O
            }) : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
              percent: null !== (s = null == u ? void 0 : u.percentage) && void 0 !== s ? s : k.M_,
              regularPrice: O,
              numMonths: null !== (t = null == u ? void 0 : u.duration) && void 0 !== t ? t : k.rt
            })
          })
        ]
      }) : (0, n.jsx)(y.Z, {
        variant: o ? 'heading-lg/normal' : void 0,
        subscriptionTier: k.Si.TIER_2,
        interval: g.interval,
        shouldUseModifiedCopy: o
      }),
      (0, n.jsx)(F.nT, {
        featureSet: o ? F.uZ.MODIFIED : void 0
      }),
      (0, n.jsx)(E.Button, {
        className: K.tierCardButton,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_premium_home_button',
            target: 'premium home page'
          }), (0, I.xf)(), (0, M.uL)(H.Z5c.APPLICATION_STORE);
        },
        children: (0, n.jsx)(E.Text, {
          className: K.tierCardButtonCTA,
          variant: 'text-sm/medium',
          children: W.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }),
      (0, n.jsx)(E.Button, {
        className: K.managePlanButton,
        look: E.Button.Looks.OUTLINED,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_subscriptions_button',
            target: 'subscriptions settings'
          }), N.Z.open(H.oAB.SUBSCRIPTIONS);
        },
        children: (0, n.jsx)(E.Text, {
          className: K.__invalid_managePlanButtonCTA,
          variant: 'text-sm/medium',
          color: 'always-white',
          children: W.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })
    ]
  }),
  !o && (0, n.jsx)('div', {
    className: K.tierImage,
    children: (0, n.jsx)('img', {
      className: K.tierImage,
      alt: '',
      src: z
    })
  })
]
  });
}

function J() {
  let e = (0, v.rK)(),
{
  enabled: s
} = v.RO.useExperiment({
  location: 'GiftNitro'
}, {
  autoTrackExposure: e
}),
t = s && e;
  return (0, n.jsxs)('div', {
className: r()(K.giftCard, {
  [K.giftCardSeasonal]: t
}),
children: [
  t && (0, n.jsx)('img', {
    className: K.seasonalGiftImage,
    alt: '',
    src: Q
  }),
  (0, n.jsx)('img', {
    className: K.giftImage,
    style: {
      visibility: t ? 'hidden' : 'visible'
    },
    alt: '',
    src: X
  }),
  (0, n.jsxs)('div', {
    className: K.giftInfo,
    children: [
      (0, n.jsx)(E.Heading, {
        className: r()(K.giftTitle, {
          [K.seasonalColor]: t
        }),
        variant: 'heading-xl/extrabold',
        children: t ? W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }),
      (0, n.jsx)(E.Text, {
        className: r()(K.giftText, {
          [K.seasonalColor]: t
        }),
        variant: 'text-sm/normal',
        children: t ? W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }),
      (0, n.jsx)(G.Z, {
        isGift: !0,
        className: r()(K.giftCardButton, t ? K.seasonalColor : K.giftCardButtonColor),
        look: E.Button.Looks.OUTLINED,
        buttonText: W.Z.Messages.GIFT_NITRO,
        buttonTextClassName: K.giftButtonCTA,
        color: E.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'gifting_button',
            target: 'payment modal'
          });
        }
      })
    ]
  })
]
  });
}
s.Z = function() {
  let e = (0, O.Q)(),
{
  analyticsLocations: s
} = (0, g.ZP)(h.Z.PREMIUM_SETTINGS),
t = (0, c.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
i = (0, c.e7)([f.ZP], () => f.ZP.hasFetchedSubscriptions()),
r = (0, p.V)(),
[o, l] = a.useState(!0),
_ = (0, B.n)(),
I = null == _ ? void 0 : _.countryCode,
N = (0, c.e7)([D.Z], () => D.Z.enabled),
A = 'PremiumManagementSettings';
  (0, m.j)({
location: A + ' auto on',
autoTrackExposure: !0
  }), (0, m.j)({
location: A + ' auto off',
autoTrackExposure: !1
  }), (0, U.B)('PremiumManagementSettings');
  let M = (0, w.b)('PremiumManagementSettings');
  a.useEffect(() => {
u.Z.wait(async () => {
  !N && !e && await Promise.all([
    T.jg(),
    T.tZ(),
    (0, S.Y2)(I, null, H.JjL.DISCOVERY)
  ]), l(!1);
});
  }, [
I,
N,
e
  ]);
  let [P, Z] = a.useState(!1);
  if (N)
return (0, n.jsx)(C.Z, {});
  if (e)
return (0, n.jsx)(R.c8, {});
  if ((!i || null == t || !r) && !o)
return (0, n.jsx)(x.Z, {
  title: W.Z.Messages.REDIRECTED_CALLBACK_ERROR,
  note: null
});
  if (!i || null == t || !r || o)
return (0, n.jsx)(E.Spinner, {});
  let b = null != t.trialId;
  return (0, n.jsx)(g.Gt, {
value: s,
children: (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)('div', {
      className: K.__invalid_container,
      children: [
        (0, n.jsx)(q, {}),
        M && (0, n.jsx)(Y.Z, {
          isInSettings: !0
        }),
        (0, n.jsx)(J, {}),
        (0, n.jsx)(V.Z, {
          className: K.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: W.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !b,
          selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
          selectedPlanTier: k.p9.TIER_2
        })
      ]
    }),
    (0, n.jsx)(d.$, {
      onChange: e => {
        e && !P && (L.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: s
        }), Z(!0));
      },
      children: (0, n.jsx)('div', {
        className: K.bottomOfPageVisibilitySensor
      })
    })
  ]
})
  });
};