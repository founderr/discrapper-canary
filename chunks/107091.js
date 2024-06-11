"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("153832"),
  r = s("979554"),
  i = s("399606"),
  o = s("481060"),
  u = s("37234"),
  c = s("607070"),
  d = s("100527"),
  f = s("906732"),
  C = s("1585"),
  E = s("624377"),
  m = s("372654"),
  p = s("715627"),
  S = s("300284"),
  g = s("642619"),
  h = s("598"),
  I = s("333867"),
  _ = s("329067"),
  T = s("981631"),
  x = s("302800"),
  L = s("689938"),
  N = s("894775");
let b = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  A = e => {
    let {
      children: t,
      ...s
    } = e;
    return (0, a.jsx)(o.Button, {
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      ...s,
      children: t
    })
  };

function v(e) {
  let {
    product: t,
    paymentSource: s,
    onPurchaseComplete: v,
    onUse: R,
    onError: P,
    onReviewPurchase: O,
    loadId: y,
    baseAnalyticsData: j,
    confettiCanvas: M = null
  } = e;
  y = null != y ? y : (0, n.v4)();
  let k = l.useRef(null),
    [B] = t.items,
    {
      analyticsLocations: D
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, E.default)(t.styles),
    U = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    H = (0, x.getCustomConfettiDisplayOptions)(t.skuId),
    [w, G] = l.useState(!1),
    [W, V] = l.useState(!1),
    Y = null != F ? {
      background: (0, m.getBackgroundGradient)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    K = (0, S.default)({
      analyticsLocations: D
    }),
    z = {
      onPurchaseComplete: () => {
        G(!0), v()
      },
      onError: e => {
        P(e), V(!0)
      },
      onReviewPurchase: O,
      paymentSource: s,
      skuId: t.skuId,
      loadId: y,
      baseAnalyticsData: j
    };
  return (0, a.jsxs)("div", {
    ref: k,
    className: N.container,
    children: [W && (0, a.jsxs)("div", {
      className: N.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: N.productName,
        children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, a.jsx)("div", {
        className: N.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: N.description,
          variant: "text-md/normal",
          children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, a.jsx)(o.Button, {
        onClick: () => {
          O(), (0, I.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: k
          })
        },
        children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !W && (w ? (0, a.jsxs)("div", {
      className: N.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: N.productName,
        children: L.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, a.jsx)("div", {
        className: N.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: N.description,
          variant: "text-xs/normal",
          children: L.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, a.jsx)(A, {
        style: Y,
        onClick: () => {
          if (R(), (0, u.popLayer)(), K(), (null == B ? void 0 : B.type) === r.CollectiblesItemType.AVATAR_DECORATION) {
            (0, C.openAvatarDecorationModal)({
              initialSelectedDecoration: B,
              analyticsLocations: D
            });
            return
          }(null == B ? void 0 : B.type) === r.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: B.id,
            analyticsLocations: D
          })
        },
        children: L.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, a.jsxs)("div", {
      className: N.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: N.productName,
        children: t.name
      }), (0, a.jsx)(h.PaymentContextProvider, {
        loadId: y,
        stepConfigs: [],
        applicationId: T.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: T.PurchaseTypes.ONE_TIME,
        children: (0, a.jsx)(_.default, {
          ...z
        })
      })]
    })), !W && w && !(null != H) && !U && (0, a.jsx)(p.default, {
      confettiTarget: k.current,
      customConfettiCanvas: M,
      speedValues: b,
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