"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
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
  p = a("530618"),
  h = a("372654"),
  E = a("300284"),
  g = a("642619"),
  b = a("598"),
  S = a("333867"),
  x = a("329067"),
  T = a("981631"),
  v = a("302800"),
  L = a("689938"),
  I = a("980673");
let N = e => {
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

function _(e) {
  let {
    product: t,
    paymentSource: a,
    onPurchaseComplete: _,
    onUse: y,
    onError: O,
    confettiCanvas: k = null
  } = e, A = (0, r.v4)(), R = s.useRef(null), [j] = t.items, {
    analyticsLocations: P
  } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD), {
    confettiColors: B,
    buttonColors: D
  } = (0, C.default)(t.styles), F = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = (0, v.getCustomConfettiDisplayOptions)(t.skuId), [w, H] = s.useState(!1), [U, W] = s.useState(!1), G = null != D ? {
    background: (0, h.getBackgroundGradient)(D, 90),
    color: D.text.toHslString()
  } : void 0, V = (0, E.default)({
    analyticsLocations: P
  }), z = {
    onPurchaseComplete: () => {
      H(!0), _()
    },
    onError: e => {
      O(e), W(!0)
    },
    paymentSource: a,
    skuId: t.skuId,
    analyticsLocations: P,
    customButtonStyle: G
  };
  return (0, l.jsxs)("div", {
    ref: R,
    className: I.container,
    children: [U && (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        color: "always-white",
        variant: "text-lg/bold",
        className: I.productName,
        children: "Uh oh, something went wrong"
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          color: "always-white",
          className: I.description,
          variant: "text-md/normal",
          children: "Recheck your payment information, then try again."
        })
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          (0, S.default)({
            skuId: t.skuId,
            analyticsLocations: P,
            returnRef: R
          })
        },
        children: "Review Purchase"
      })]
    }), !U && (w ? (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsxs)(o.Text, {
        color: "always-white",
        variant: "text-lg/bold",
        className: I.productName,
        children: ["You've Collected ", t.name, "!"]
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          color: "always-white",
          className: I.description,
          variant: "text-md/normal",
          children: "This decoration is now part of your collection and can be used anytime!"
        })
      }), (0, l.jsx)(N, {
        style: G,
        onClick: () => {
          if (y(), (0, u.popLayer)(), V(), (null == j ? void 0 : j.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, m.openAvatarDecorationModal)({
              initialSelectedDecoration: j,
              analyticsLocations: P
            });
            return
          }(null == j ? void 0 : j.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: j.id,
            analyticsLocations: P
          })
        },
        children: L.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        color: "always-white",
        variant: "text-lg/bold",
        className: I.productName,
        children: t.name
      }), (0, l.jsx)(b.PaymentContextProvider, {
        loadId: A,
        stepConfigs: [],
        applicationId: T.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: T.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(x.default, {
          ...z
        })
      })]
    })), !U && w && !(null != M) && !F && (0, l.jsx)(p.default, {
      confettiTarget: R.current,
      confettiCanvas: k,
      sprites: (0, h.getConfettiSprites)(t.categorySkuId),
      colors: null == B ? void 0 : B.map(e => e.toHexString())
    })]
  })
}