"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  r = s("153832"),
  n = s("979554"),
  i = s("399606"),
  o = s("481060"),
  c = s("37234"),
  u = s("607070"),
  d = s("100527"),
  f = s("906732"),
  C = s("1585"),
  p = s("624377"),
  m = s("372654"),
  g = s("715627"),
  E = s("300284"),
  h = s("642619"),
  b = s("598"),
  x = s("333867"),
  S = s("329067"),
  v = s("981631"),
  I = s("302800"),
  L = s("689938"),
  T = s("894775");
let N = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  _ = e => {
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

function y(e) {
  let {
    product: t,
    paymentSource: s,
    onPurchaseComplete: y,
    onUse: j,
    onError: A,
    onReviewPurchase: O,
    loadId: P,
    baseAnalyticsData: k,
    confettiCanvas: R = null
  } = e;
  P = null != P ? P : (0, r.v4)();
  let B = l.useRef(null),
    [M] = t.items,
    {
      analyticsLocations: D
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, p.default)(t.styles),
    w = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    H = (0, I.getCustomConfettiDisplayOptions)(t.skuId),
    [U, W] = l.useState(!1),
    [G, V] = l.useState(!1),
    K = null != F ? {
      background: (0, m.getBackgroundGradient)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    z = (0, E.default)({
      analyticsLocations: D
    }),
    Y = {
      onPurchaseComplete: () => {
        W(!0), y()
      },
      onError: e => {
        A(e), V(!0)
      },
      onReviewPurchase: O,
      paymentSource: s,
      skuId: t.skuId,
      loadId: P,
      baseAnalyticsData: k
    };
  return (0, a.jsxs)("div", {
    ref: B,
    className: T.container,
    children: [G && (0, a.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, a.jsx)("div", {
        className: T.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: T.description,
          variant: "text-md/normal",
          children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, a.jsx)(o.Button, {
        onClick: () => {
          O(), (0, x.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: B
          })
        },
        children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !G && (U ? (0, a.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: L.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, a.jsx)("div", {
        className: T.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: T.description,
          variant: "text-xs/normal",
          children: L.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, a.jsx)(_, {
        style: K,
        onClick: () => {
          if (j(), (0, c.popLayer)(), z(), (null == M ? void 0 : M.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, C.openAvatarDecorationModal)({
              initialSelectedDecoration: M,
              analyticsLocations: D
            });
            return
          }(null == M ? void 0 : M.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, h.openProfileEffectModal)({
            initialSelectedEffectId: M.id,
            analyticsLocations: D
          })
        },
        children: L.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, a.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: t.name
      }), (0, a.jsx)(b.PaymentContextProvider, {
        loadId: P,
        stepConfigs: [],
        applicationId: v.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: v.PurchaseTypes.ONE_TIME,
        children: (0, a.jsx)(S.default, {
          ...Y
        })
      })]
    })), !G && U && !(null != H) && !w && (0, a.jsx)(g.default, {
      confettiTarget: B.current,
      customConfettiCanvas: R,
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