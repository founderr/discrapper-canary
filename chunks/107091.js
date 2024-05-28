"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var s = a("735250"),
  r = a("470079"),
  n = a("153832"),
  l = a("979554"),
  o = a("399606"),
  i = a("481060"),
  c = a("37234"),
  u = a("607070"),
  d = a("100527"),
  f = a("906732"),
  C = a("1585"),
  p = a("624377"),
  m = a("372654"),
  g = a("715627"),
  E = a("300284"),
  b = a("642619"),
  h = a("598"),
  S = a("333867"),
  T = a("329067"),
  v = a("981631"),
  y = a("302800"),
  x = a("689938"),
  _ = a("894775");
let I = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  L = e => {
    let {
      children: t,
      ...a
    } = e;
    return (0, s.jsx)(i.Button, {
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
      ...a,
      children: t
    })
  };

function A(e) {
  let {
    product: t,
    paymentSource: a,
    onPurchaseComplete: A,
    onUse: N,
    onError: P,
    onReviewPurchase: R,
    loadId: O,
    baseAnalyticsData: k,
    confettiCanvas: M = null
  } = e;
  O = null != O ? O : (0, n.v4)();
  let j = r.useRef(null),
    [B] = t.items,
    {
      analyticsLocations: D
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, p.default)(t.styles),
    w = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    H = (0, y.getCustomConfettiDisplayOptions)(t.skuId),
    [U, G] = r.useState(!1),
    [W, Y] = r.useState(!1),
    V = null != F ? {
      background: (0, m.getBackgroundGradient)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    K = (0, E.default)({
      analyticsLocations: D
    }),
    z = {
      onPurchaseComplete: () => {
        G(!0), A()
      },
      onError: e => {
        P(e), Y(!0)
      },
      onReviewPurchase: R,
      paymentSource: a,
      skuId: t.skuId,
      loadId: O,
      baseAnalyticsData: k
    };
  return (0, s.jsxs)("div", {
    ref: j,
    className: _.container,
    children: [W && (0, s.jsxs)("div", {
      className: _.cardDetails,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-lg/bold",
        className: _.productName,
        children: x.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, s.jsx)("div", {
        className: _.innerBlur,
        children: (0, s.jsx)(i.Text, {
          className: _.description,
          variant: "text-md/normal",
          children: x.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, s.jsx)(i.Button, {
        onClick: () => {
          R(), (0, S.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: j
          })
        },
        children: x.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !W && (U ? (0, s.jsxs)("div", {
      className: _.cardDetails,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-lg/bold",
        className: _.productName,
        children: x.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, s.jsx)("div", {
        className: _.innerBlur,
        children: (0, s.jsx)(i.Text, {
          className: _.description,
          variant: "text-xs/normal",
          children: x.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, s.jsx)(L, {
        style: V,
        onClick: () => {
          if (N(), (0, c.popLayer)(), K(), (null == B ? void 0 : B.type) === l.CollectiblesItemType.AVATAR_DECORATION) {
            (0, C.openAvatarDecorationModal)({
              initialSelectedDecoration: B,
              analyticsLocations: D
            });
            return
          }(null == B ? void 0 : B.type) === l.CollectiblesItemType.PROFILE_EFFECT && (0, b.openProfileEffectModal)({
            initialSelectedEffectId: B.id,
            analyticsLocations: D
          })
        },
        children: x.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, s.jsxs)("div", {
      className: _.cardDetails,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-lg/bold",
        className: _.productName,
        children: t.name
      }), (0, s.jsx)(h.PaymentContextProvider, {
        loadId: O,
        stepConfigs: [],
        applicationId: v.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: v.PurchaseTypes.ONE_TIME,
        children: (0, s.jsx)(T.default, {
          ...z
        })
      })]
    })), !W && U && !(null != H) && !w && (0, s.jsx)(g.default, {
      confettiTarget: j.current,
      customConfettiCanvas: M,
      speedValues: I,
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