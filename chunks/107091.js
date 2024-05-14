"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("153832"),
  n = l("979554"),
  i = l("399606"),
  o = l("481060"),
  u = l("37234"),
  c = l("607070"),
  d = l("100527"),
  f = l("906732"),
  C = l("1585"),
  m = l("624377"),
  p = l("372654"),
  E = l("715627"),
  g = l("300284"),
  h = l("642619"),
  b = l("598"),
  x = l("333867"),
  v = l("329067"),
  T = l("981631"),
  L = l("302800"),
  S = l("689938"),
  I = l("894775");
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

function O(e) {
  let {
    product: t,
    paymentSource: l,
    onPurchaseComplete: O,
    onUse: y,
    onError: A,
    onReviewPurchase: k,
    loadId: R,
    baseAnalyticsData: j,
    confettiCanvas: P = null
  } = e;
  R = null != R ? R : (0, r.v4)();
  let B = s.useRef(null),
    [M] = t.items,
    {
      analyticsLocations: D
    } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD, d.default.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, m.default)(t.styles),
    w = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    H = (0, L.getCustomConfettiDisplayOptions)(t.skuId),
    [U, W] = s.useState(!1),
    [G, V] = s.useState(!1),
    z = null != F ? {
      background: (0, p.getBackgroundGradient)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    K = (0, g.default)({
      analyticsLocations: D
    }),
    Y = {
      onPurchaseComplete: () => {
        W(!0), O()
      },
      onError: e => {
        A(e), V(!0)
      },
      onReviewPurchase: k,
      paymentSource: l,
      skuId: t.skuId,
      loadId: R,
      baseAnalyticsData: j
    };
  return (0, a.jsxs)("div", {
    ref: B,
    className: I.container,
    children: [G && (0, a.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: S.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, a.jsx)("div", {
        className: I.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: I.description,
          variant: "text-md/normal",
          children: S.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, a.jsx)(o.Button, {
        onClick: () => {
          k(), (0, x.default)({
            skuId: t.skuId,
            analyticsLocations: D,
            returnRef: B
          })
        },
        children: S.default.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !G && (U ? (0, a.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: S.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: t.name
        })
      }), (0, a.jsx)("div", {
        className: I.innerBlur,
        children: (0, a.jsx)(o.Text, {
          className: I.description,
          variant: "text-xs/normal",
          children: S.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, a.jsx)(_, {
        style: z,
        onClick: () => {
          if (y(), (0, u.popLayer)(), K(), (null == M ? void 0 : M.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
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
        children: S.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, a.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: t.name
      }), (0, a.jsx)(b.PaymentContextProvider, {
        loadId: R,
        stepConfigs: [],
        applicationId: T.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: T.PurchaseTypes.ONE_TIME,
        children: (0, a.jsx)(v.default, {
          ...Y
        })
      })]
    })), !G && U && !(null != H) && !w && (0, a.jsx)(E.default, {
      confettiTarget: B.current,
      customConfettiCanvas: P,
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