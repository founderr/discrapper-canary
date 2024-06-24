"use strict";
s.d(t, {
  Z: function() {
    return O
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(772848),
  i = s(979554),
  l = s(399606),
  o = s(481060),
  c = s(37234),
  u = s(607070),
  d = s(100527),
  C = s(906732),
  f = s(1585),
  p = s(624377),
  E = s(372654),
  g = s(715627),
  m = s(300284),
  h = s(642619),
  x = s(598),
  I = s(333867),
  _ = s(329067),
  L = s(981631),
  T = s(302800),
  S = s(689938),
  N = s(53585);
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
    return (0, n.jsx)(o.Button, {
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      ...s,
      children: t
    })
  };

function O(e) {
  let {
    product: t,
    paymentSource: s,
    onPurchaseComplete: O,
    onUse: A,
    onError: Z,
    onReviewPurchase: R,
    loadId: j,
    baseAnalyticsData: P,
    confettiCanvas: M = null
  } = e;
  j = null != j ? j : (0, a.Z)();
  let k = r.useRef(null),
    [B] = t.items,
    {
      analyticsLocations: y
    } = (0, C.ZP)(d.Z.COLLECTIBLES_SHOP_CARD, d.Z.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, p.Z)(t.styles),
    D = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    U = (0, T.UY)(t.skuId),
    [H, w] = r.useState(!1),
    [G, W] = r.useState(!1),
    V = null != F ? {
      background: (0, E.nH)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    Y = (0, m.Z)({
      analyticsLocations: y
    }),
    z = {
      onPurchaseComplete: () => {
        w(!0), O()
      },
      onError: e => {
        Z(e), W(!0)
      },
      onReviewPurchase: R,
      paymentSource: s,
      skuId: t.skuId,
      loadId: j,
      baseAnalyticsData: P
    };
  return (0, n.jsxs)("div", {
    ref: k,
    className: N.container,
    children: [G && (0, n.jsxs)("div", {
      className: N.cardDetails,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: N.productName,
        children: S.Z.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, n.jsx)("div", {
        className: N.innerBlur,
        children: (0, n.jsx)(o.Text, {
          className: N.description,
          variant: "text-md/normal",
          children: S.Z.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, n.jsx)(o.Button, {
        onClick: () => {
          R(), (0, I.Z)({
            skuId: t.skuId,
            analyticsLocations: y,
            returnRef: k
          })
        },
        children: S.Z.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !G && (H ? (0, n.jsxs)("div", {
      className: N.cardDetails,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: N.productName,
        children: S.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, n.jsx)("div", {
        className: N.innerBlur,
        children: (0, n.jsx)(o.Text, {
          className: N.description,
          variant: "text-xs/normal",
          children: S.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, n.jsx)(v, {
        style: V,
        onClick: () => {
          if (A(), (0, c.xf)(), Y(), (null == B ? void 0 : B.type) === i.Z.AVATAR_DECORATION) {
            (0, f.ps)({
              initialSelectedDecoration: B,
              analyticsLocations: y
            });
            return
          }(null == B ? void 0 : B.type) === i.Z.PROFILE_EFFECT && (0, h.H)({
            initialSelectedEffectId: B.id,
            analyticsLocations: y
          })
        },
        children: S.Z.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, n.jsxs)("div", {
      className: N.cardDetails,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: N.productName,
        children: t.name
      }), (0, n.jsx)(x.PaymentContextProvider, {
        loadId: j,
        stepConfigs: [],
        applicationId: L.XAJ,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: L.GZQ.ONE_TIME,
        children: (0, n.jsx)(_.Z, {
          ...z
        })
      })]
    })), !G && H && !(null != U) && !D && (0, n.jsx)(g.Z, {
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