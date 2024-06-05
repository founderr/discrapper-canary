"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
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
  p = s("372654"),
  m = s("715627"),
  g = s("300284"),
  h = s("642619"),
  S = s("598"),
  I = s("333867"),
  T = s("329067"),
  x = s("981631"),
  _ = s("302800"),
  N = s("689938"),
  L = s("894775");
let b = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  v = e => {
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

function R(e) {
  let {
    product: t,
    paymentSource: s,
    onPurchaseComplete: R,
    onUse: A,
    onError: P,
    onReviewPurchase: O,
    loadId: j,
    baseAnalyticsData: y,
    confettiCanvas: M = null
  } = e;
  j = null != j ? j : (0, n.v4)();
  let k = l.useRef(null),
    [B] = t.items,
    {
      analyticsLocations: F
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: D
    } = (0, E.default)(t.styles),
    U = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    H = (0, _.getCustomConfettiDisplayOptions)(t.skuId),
    [w, G] = l.useState(!1),
    [W, Y] = l.useState(!1),
    V = null != D ? {
      background: (0, p.getBackgroundGradient)(D, 90),
      color: D.text.toHslString()
    } : void 0,
    K = (0, g.default)({
      analyticsLocations: F
    }),
    z = {
      onPurchaseComplete: () => {
        G(!0), R()
      },
      onError: e => {
        P(e), Y(!0)
      },
      onReviewPurchase: O,
      paymentSource: s,
      skuId: t.skuId,
      loadId: j,
      baseAnalyticsData: y
    };
  return (0, a.jsxs)("div", {
    ref: k,
    className: L.container,
    children: [W && (0, a.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: L.productName,
        children: N.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, a.jsx)("div", {
        className: L.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: L.description,
          variant: "text-md/normal",
          children: N.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, a.jsx)(o.Button, {
        onClick: () => {
          O(), (0, I.default)({
            skuId: t.skuId,
            analyticsLocations: F,
            returnRef: k
          })
        },
        children: N.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !W && (w ? (0, a.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: L.productName,
        children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, a.jsx)("div", {
        className: L.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: L.description,
          variant: "text-xs/normal",
          children: N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, a.jsx)(v, {
        style: V,
        onClick: () => {
          if (A(), (0, u.popLayer)(), K(), (null == B ? void 0 : B.type) === r.CollectiblesItemType.AVATAR_DECORATION) {
            (0, C.openAvatarDecorationModal)({
              initialSelectedDecoration: B,
              analyticsLocations: F
            });
            return
          }(null == B ? void 0 : B.type) === r.CollectiblesItemType.PROFILE_EFFECT && (0, h.openProfileEffectModal)({
            initialSelectedEffectId: B.id,
            analyticsLocations: F
          })
        },
        children: N.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, a.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: L.productName,
        children: t.name
      }), (0, a.jsx)(S.PaymentContextProvider, {
        loadId: j,
        stepConfigs: [],
        applicationId: x.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: x.PurchaseTypes.ONE_TIME,
        children: (0, a.jsx)(T.default, {
          ...z
        })
      })]
    })), !W && w && !(null != H) && !U && (0, a.jsx)(m.default, {
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