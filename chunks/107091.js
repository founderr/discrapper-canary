"use strict";
a.r(t), a.d(t, {
  default: function() {
    return y
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("153832"),
  n = a("979554"),
  i = a("399606"),
  o = a("481060"),
  c = a("37234"),
  u = a("607070"),
  d = a("100527"),
  f = a("906732"),
  C = a("1585"),
  p = a("624377"),
  m = a("372654"),
  g = a("715627"),
  E = a("300284"),
  h = a("642619"),
  b = a("598"),
  x = a("333867"),
  S = a("329067"),
  v = a("981631"),
  I = a("302800"),
  L = a("689938"),
  T = a("894775");
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

function y(e) {
  let {
    product: t,
    paymentSource: a,
    onPurchaseComplete: y,
    onUse: A,
    onError: j,
    onReviewPurchase: O,
    loadId: k,
    baseAnalyticsData: P,
    confettiCanvas: R = null
  } = e;
  k = null != k ? k : (0, r.v4)();
  let B = s.useRef(null),
    [M] = t.items,
    {
      analyticsLocations: D
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: w
    } = (0, p.default)(t.styles),
    F = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    H = (0, I.getCustomConfettiDisplayOptions)(t.skuId),
    [U, W] = s.useState(!1),
    [G, V] = s.useState(!1),
    K = null != w ? {
      background: (0, m.getBackgroundGradient)(w, 90),
      color: w.text.toHslString()
    } : void 0,
    z = (0, E.default)({
      analyticsLocations: D
    }),
    Y = {
      onPurchaseComplete: () => {
        W(!0), y()
      },
      onError: e => {
        j(e), V(!0)
      },
      onReviewPurchase: O,
      paymentSource: a,
      skuId: t.skuId,
      loadId: k,
      baseAnalyticsData: P
    };
  return (0, l.jsxs)("div", {
    ref: B,
    className: T.container,
    children: [G && (0, l.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, l.jsx)("div", {
        className: T.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: T.description,
          variant: "text-md/normal",
          children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          O(), (0, x.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: B
          })
        },
        children: L.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !G && (U ? (0, l.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: L.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, l.jsx)("div", {
        className: T.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: T.description,
          variant: "text-xs/normal",
          children: L.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, l.jsx)(_, {
        style: K,
        onClick: () => {
          if (A(), (0, c.popLayer)(), z(), (null == M ? void 0 : M.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
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
    }) : (0, l.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: t.name
      }), (0, l.jsx)(b.PaymentContextProvider, {
        loadId: k,
        stepConfigs: [],
        applicationId: v.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: v.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(S.default, {
          ...Y
        })
      })]
    })), !G && U && !(null != H) && !F && (0, l.jsx)(g.default, {
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