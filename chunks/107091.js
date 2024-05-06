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
  u = a("37234"),
  c = a("607070"),
  d = a("100527"),
  f = a("906732"),
  m = a("1585"),
  C = a("624377"),
  p = a("372654"),
  h = a("715627"),
  E = a("300284"),
  g = a("642619"),
  x = a("563132"),
  b = a("333867"),
  S = a("329067"),
  v = a("981631"),
  T = a("302800"),
  L = a("689938"),
  I = a("777374");
let N = {
    xMin: -50,
    xMax: 50,
    yMin: -100,
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
    onUse: O,
    onError: k,
    onReviewPurchase: R,
    confettiCanvas: A = null
  } = e, j = (0, r.v4)(), P = s.useRef(null), [B] = t.items, {
    analyticsLocations: D
  } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD), {
    buttonColors: F
  } = (0, C.default)(t.styles), M = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), w = (0, T.getCustomConfettiDisplayOptions)(t.skuId), [H, U] = s.useState(!1), [W, G] = s.useState(!1), V = null != F ? {
    background: (0, p.getBackgroundGradient)(F, 90),
    color: F.text.toHslString()
  } : void 0, z = (0, E.default)({
    analyticsLocations: D
  }), K = {
    onPurchaseComplete: () => {
      U(!0), y()
    },
    onError: e => {
      k(e), G(!0)
    },
    onReviewPurchase: R,
    paymentSource: a,
    skuId: t.skuId,
    analyticsLocations: D
  };
  return (0, l.jsxs)("div", {
    ref: P,
    className: I.container,
    children: [W && (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: "Uh oh, something went wrong"
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-md/normal",
          children: "Recheck your payment information, then try again."
        })
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          R(), (0, b.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: P
          })
        },
        children: "Review Purchase"
      })]
    }), !W && (H ? (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsxs)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: ["You've Collected ", t.name, "!"]
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-xs/normal",
          children: "This decoration is now part of your collection and can be used anytime!"
        })
      }), (0, l.jsx)(_, {
        style: V,
        onClick: () => {
          if (O(), (0, u.popLayer)(), z(), (null == B ? void 0 : B.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, m.openAvatarDecorationModal)({
              initialSelectedDecoration: B,
              analyticsLocations: D
            });
            return
          }(null == B ? void 0 : B.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: B.id,
            analyticsLocations: D
          })
        },
        children: L.default.Messages.COLLECTIBLES_USE_NOW
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
        applicationId: v.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: v.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(S.default, {
          ...K
        })
      })]
    })), !W && H && !(null != w) && !M && (0, l.jsx)(h.default, {
      confettiTarget: P.current,
      customConfettiCanvas: A,
      speedValues: N,
      numBursts: 3,
      particlesPerBurst: 50,
      offsetXPercentageMax: 100,
      offsetXPercentageMin: 0,
      offsetYPercentageMax: 100,
      offsetYPercentageMin: 0,
      dragCoefficientValue: 1e-4
    })]
  })
}