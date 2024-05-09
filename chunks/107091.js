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
  m = a("1585"),
  C = a("624377"),
  p = a("372654"),
  E = a("715627"),
  h = a("300284"),
  g = a("642619"),
  x = a("563132"),
  b = a("333867"),
  T = a("329067"),
  S = a("981631"),
  L = a("302800"),
  v = a("689938"),
  I = a("777374");
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
    onError: R,
    onReviewPurchase: k,
    confettiCanvas: A = null
  } = e, j = (0, r.v4)(), P = s.useRef(null), [B] = t.items, {
    analyticsLocations: M
  } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD), {
    buttonColors: D
  } = (0, C.default)(t.styles), F = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), w = (0, L.getCustomConfettiDisplayOptions)(t.skuId), [H, U] = s.useState(!1), [W, G] = s.useState(!1), V = null != D ? {
    background: (0, p.getBackgroundGradient)(D, 90),
    color: D.text.toHslString()
  } : void 0, z = (0, h.default)({
    analyticsLocations: M
  }), K = {
    onPurchaseComplete: () => {
      U(!0), O()
    },
    onError: e => {
      R(e), G(!0)
    },
    onReviewPurchase: k,
    paymentSource: a,
    skuId: t.skuId,
    analyticsLocations: M
  };
  return (0, l.jsxs)("div", {
    ref: P,
    className: I.container,
    children: [W && (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: v.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-md/normal",
          children: v.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          k(), (0, b.default)({
            skuId: t.skuId,
            analyticsLocations: M,
            returnRef: P
          })
        },
        children: v.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !W && (H ? (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: v.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-xs/normal",
          children: v.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, l.jsx)(_, {
        style: V,
        onClick: () => {
          if (y(), (0, u.popLayer)(), z(), (null == B ? void 0 : B.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, m.openAvatarDecorationModal)({
              initialSelectedDecoration: B,
              analyticsLocations: M
            });
            return
          }(null == B ? void 0 : B.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: B.id,
            analyticsLocations: M
          })
        },
        children: v.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: t.name
      }), (0, l.jsx)(x.PaymentContextProvider, {
        loadId: j,
        stepConfigs: [],
        applicationId: S.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: S.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(T.default, {
          ...K
        })
      })]
    })), !W && H && !(null != w) && !F && (0, l.jsx)(E.default, {
      confettiTarget: P.current,
      customConfettiCanvas: A,
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