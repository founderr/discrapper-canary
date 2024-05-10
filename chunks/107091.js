"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("153832"),
  n = a("979554"),
  i = a("399606"),
  o = a("481060"),
  u = a("37234"),
  c = a("607070"),
  d = a("100527"),
  f = a("906732"),
  C = a("1585"),
  m = a("624377"),
  E = a("372654"),
  p = a("715627"),
  h = a("300284"),
  g = a("642619"),
  x = a("598"),
  T = a("333867"),
  L = a("329067"),
  v = a("981631"),
  b = a("302800"),
  S = a("689938"),
  I = a("894775");
let N = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  _ = e => {
    let {
      children: t,
      ...a
    } = e;
    return (0, l.jsx)(o.Button, {
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      ...a,
      children: t
    })
  };

function O(e) {
  let {
    product: t,
    paymentSource: a,
    onPurchaseComplete: O,
    onUse: y,
    onError: A,
    onReviewPurchase: R,
    loadId: k,
    baseAnalyticsData: j,
    confettiCanvas: P = null
  } = e;
  k = null != k ? k : (0, r.v4)();
  let B = s.useRef(null),
    [M] = t.items,
    {
      analyticsLocations: D
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, m.default)(t.styles),
    w = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    H = (0, b.getCustomConfettiDisplayOptions)(t.skuId),
    [U, W] = s.useState(!1),
    [G, V] = s.useState(!1),
    z = null != F ? {
      background: (0, E.getBackgroundGradient)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    K = (0, h.default)({
      analyticsLocations: D
    }),
    Y = {
      onPurchaseComplete: () => {
        W(!0), O()
      },
      onError: e => {
        A(e), V(!0)
      },
      onReviewPurchase: R,
      paymentSource: a,
      skuId: t.skuId,
      loadId: k,
      baseAnalyticsData: j
    };
  return (0, l.jsxs)("div", {
    ref: B,
    className: I.container,
    children: [G && (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: S.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-md/normal",
          children: S.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          R(), (0, T.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: B
          })
        },
        children: S.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !G && (U ? (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: S.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-xs/normal",
          children: S.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, l.jsx)(_, {
        style: z,
        onClick: () => {
          if (y(), (0, u.popLayer)(), K(), (null == M ? void 0 : M.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, C.openAvatarDecorationModal)({
              initialSelectedDecoration: M,
              analyticsLocations: D
            });
            return
          }(null == M ? void 0 : M.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: M.id,
            analyticsLocations: D
          })
        },
        children: S.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: t.name
      }), (0, l.jsx)(x.PaymentContextProvider, {
        loadId: k,
        stepConfigs: [],
        applicationId: v.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: v.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(L.default, {
          ...Y
        })
      })]
    })), !G && U && !(null != H) && !w && (0, l.jsx)(p.default, {
      confettiTarget: B.current,
      customConfettiCanvas: P,
      speedValues: N,
      numBursts: 4,
      particlesPerBurst: 100,
      offsetXPercentageMax: 100,
      offsetXPercentageMin: 0,
      offsetYPercentageMax: 100,
      offsetYPercentageMin: 0,
      dragCoefficientValue: 1e-6
    })]
  })
}