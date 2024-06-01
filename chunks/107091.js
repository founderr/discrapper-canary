"use strict";
l.r(t), l.d(t, {
  default: function() {
    return y
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("153832"),
  n = l("979554"),
  i = l("399606"),
  o = l("481060"),
  c = l("37234"),
  u = l("607070"),
  d = l("100527"),
  f = l("906732"),
  C = l("1585"),
  p = l("624377"),
  m = l("372654"),
  g = l("715627"),
  E = l("300284"),
  h = l("642619"),
  b = l("598"),
  x = l("333867"),
  S = l("329067"),
  v = l("981631"),
  I = l("302800"),
  L = l("689938"),
  T = l("894775");
let N = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  _ = e => {
    let {
      children: t,
      ...l
    } = e;
    return (0, a.jsx)(o.Button, {
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      ...l,
      children: t
    })
  };

function y(e) {
  let {
    product: t,
    paymentSource: l,
    onPurchaseComplete: y,
    onUse: A,
    onError: j,
    onReviewPurchase: k,
    loadId: O,
    baseAnalyticsData: P,
    confettiCanvas: R = null
  } = e;
  O = null != O ? O : (0, r.v4)();
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
      onReviewPurchase: k,
      paymentSource: l,
      skuId: t.skuId,
      loadId: O,
      baseAnalyticsData: P
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
          k(), (0, x.default)({
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
    }) : (0, a.jsxs)("div", {
      className: T.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: T.productName,
        children: t.name
      }), (0, a.jsx)(b.PaymentContextProvider, {
        loadId: O,
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
    })), !G && U && !(null != H) && !F && (0, a.jsx)(g.default, {
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