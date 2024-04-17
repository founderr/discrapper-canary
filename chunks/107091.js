"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
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
  S = a("598"),
  b = a("329067"),
  x = a("981631"),
  T = a("302800"),
  v = a("689938"),
  L = a("980673");
let I = e => {
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

function N(e) {
  let {
    product: t,
    paymentSource: a,
    onPurchaseComplete: N,
    onClose: _,
    confettiCanvas: y = null
  } = e, O = (0, r.v4)(), k = s.useRef(null), [A] = t.items, {
    analyticsLocations: j
  } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD), {
    confettiColors: R,
    buttonColors: P
  } = (0, C.default)(t.styles), B = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), D = (0, T.getCustomConfettiDisplayOptions)(t.skuId), [F, M] = s.useState(!1), w = null != P ? {
    background: (0, h.getBackgroundGradient)(P, 90),
    color: P.text.toHslString()
  } : void 0, H = (0, E.default)({
    analyticsLocations: j
  }), U = {
    onPurchaseComplete: () => {
      M(!0), N()
    },
    paymentSource: a,
    skuId: t.skuId,
    analyticsLocations: j,
    customButtonStyle: w
  };
  return (0, l.jsxs)("div", {
    ref: k,
    className: L.container,
    children: [F ? (0, l.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, l.jsxs)(o.Text, {
        color: "always-white",
        variant: "text-lg/bold",
        className: L.productName,
        children: ["You've Collected ", t.name, "!"]
      }), (0, l.jsx)("div", {
        className: L.innerBlur,
        children: (0, l.jsx)(o.Text, {
          color: "always-white",
          className: L.description,
          variant: "text-md/normal",
          children: "This decoration is now part of your collection and can be used anytime!"
        })
      }), (0, l.jsx)(I, {
        style: w,
        onClick: () => {
          if (_(), (0, u.popLayer)(), H(), (null == A ? void 0 : A.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, m.openAvatarDecorationModal)({
              initialSelectedDecoration: A,
              analyticsLocations: j
            });
            return
          }(null == A ? void 0 : A.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: A.id,
            analyticsLocations: j
          })
        },
        children: v.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, l.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        color: "always-white",
        variant: "text-lg/bold",
        className: L.productName,
        children: t.name
      }), (0, l.jsx)(S.PaymentContextProvider, {
        loadId: O,
        stepConfigs: [],
        applicationId: x.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: x.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(b.default, {
          ...U
        })
      })]
    }), F && !(null != D) && !B && (0, l.jsx)(p.default, {
      confettiTarget: k.current,
      confettiCanvas: y,
      sprites: (0, h.getConfettiSprites)(t.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  })
}