"use strict";
n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
    return L
  },
  default: function() {
    return M
  }
}), n("222007");
var r = n("37983"),
  o = n("884691"),
  a = n("414456"),
  l = n.n(a),
  s = n("516555"),
  i = n("627445"),
  c = n.n(i),
  u = n("265586"),
  d = n("65597"),
  f = n("77078"),
  C = n("54239"),
  p = n("206230"),
  g = n("812204"),
  b = n("685665"),
  E = n("606292"),
  v = n("688318"),
  y = n("38766"),
  m = n("601095"),
  T = n("493390"),
  x = n("697218"),
  I = n("923702"),
  S = n("716120"),
  h = n("408381"),
  O = n("177586"),
  N = n("782340"),
  _ = n("580864"),
  A = n("53708");
let L = e => {
  let {
    product: t,
    onClose: n,
    confettiTarget: a,
    confettiCanvas: s,
    analyticsLocations: i
  } = e, {
    confettiColors: L,
    backgroundColors: M,
    buttonColors: k
  } = (0, O.default)(t.styles), R = null != k ? {
    background: (0, h.getBackgroundGradient)(k, 90),
    color: k.text.toHslString()
  } : void 0, F = null != M ? {
    background: (0, h.getBackgroundGradient)(M, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, j = (0, d.default)([x.default], () => {
    let e = x.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), B = (0, d.default)([p.default], () => p.default.useReducedMotion), [w] = t.items, {
    avatarDecorationSrc: H
  } = (0, v.default)({
    user: j,
    avatarDecorationOverride: (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION ? w : null,
    size: (0, E.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), D = o.useRef(null), {
    analyticsLocations: P,
    AnalyticsLocationProvider: z
  } = (0, b.default)([...i, g.default.COLLECTIBLES_COLLECTED_MODAL]), V = (0, y.default)({
    analyticsLocations: P
  });
  return (0, r.jsxs)(z, {
    children: [(0, r.jsxs)("div", {
      className: _.modalInner,
      ref: D,
      style: F,
      children: [(0, r.jsxs)("div", {
        className: l(_.bannerContainer, {
          [_.bannerBackgroundFallback]: null == M
        }),
        children: [(0, r.jsx)(S.default, {
          asset: t.banner,
          size: (0, h.getAssetSizeByHeight)(440),
          className: _.decorationBanner
        }), (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: A,
          avatarDecoration: H,
          className: _.avatarDecoration,
          "aria-label": t.name
        }), (null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
          className: _.profileEffectShopPreview,
          children: (0, r.jsx)(m.default, {
            forCollectedModal: !0,
            profileEffectId: w.id
          })
        })]
      }), (0, r.jsxs)("div", {
        className: l(_.collectedInfoContainer, {
          [_.default]: null == M
        }),
        children: [(0, r.jsxs)("div", {
          className: _.collectedTextContainer,
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: t.name
            })
          }), (0, r.jsx)(f.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: (null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, r.jsx)(f.Button, {
          onClick: () => {
            if (n(), (0, C.popLayer)(), V(), (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, E.openAvatarDecorationModal)({
                initialSelectedDecoration: w,
                analyticsLocations: P
              });
              return
            }(null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, T.openProfileEffectModal)({
              initialSelectedEffectId: w.id,
              analyticsLocations: P
            })
          },
          style: R,
          children: N.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(f.ModalCloseButton, {
        onClick: n,
        className: _.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !B && (0, r.jsx)(I.default, {
      confettiTarget: null != a ? a : D.current,
      confettiCanvas: s,
      sprites: (0, h.getConfettiSprites)(t.categorySkuId),
      colors: null == L ? void 0 : L.map(e => e.toHexString())
    })]
  })
};
var M = e => {
  let {
    transitionState: t,
    product: n,
    onClose: a,
    analyticsLocations: l
  } = e, i = o.useRef(new s.Environment), [c, u] = o.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: _.confettiCanvas,
      environment: i.current
    }), (0, r.jsx)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: _.modalRoot,
      children: (0, r.jsx)(f.ModalContent, {
        className: _.modalContent,
        children: (0, r.jsx)(L, {
          product: n,
          onClose: a,
          confettiCanvas: c,
          analyticsLocations: l
        })
      })
    })]
  })
}