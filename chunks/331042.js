n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
    return M
  }
}), n(47120), n(627341);
var r = n(735250),
  a = n(470079),
  o = n(887024),
  l = n(512722),
  i = n.n(l),
  s = n(278074),
  c = n(979554),
  d = n(399606),
  u = n(481060),
  f = n(37234),
  p = n(607070),
  g = n(100527),
  v = n(906732),
  C = n(1585),
  h = n(125988),
  E = n(300284),
  b = n(876917),
  m = n(642619),
  y = n(594174),
  x = n(884697),
  A = n(318028),
  T = n(635552),
  L = n(328456),
  Z = n(624377),
  I = n(530618),
  N = n(141011),
  _ = n(372654),
  S = n(216541),
  R = n(302800),
  O = n(215023),
  k = n(689938),
  j = n(432015),
  B = n(660097);
let M = e => {
  var t, n;
  let {
    product: o,
    onClose: l,
    confettiTarget: R,
    confettiCanvas: M,
    hideConfetti: w = !1,
    analyticsLocations: P
  } = e, {
    confettiColors: D
  } = (0, Z.Z)(o.styles), F = (0, d.e7)([y.default], () => {
    let e = y.default.getCurrentUser();
    return i()(null != e, "User cannot be undefined"), e
  }), H = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), [z] = o.items, {
    avatarDecorationSrc: U
  } = (0, h.Z)({
    user: F,
    avatarDecorationOverride: (null == z ? void 0 : z.type) === c.Z.AVATAR_DECORATION ? z : null,
    size: (0, C.y9)(u.AvatarSizes.SIZE_120)
  }), V = a.useRef(null), {
    analyticsLocations: W
  } = (0, v.ZP)([...P, g.Z.COLLECTIBLES_COLLECTED_MODAL]), G = (0, E.Z)({
    analyticsLocations: W
  }), K = a.useCallback(() => {
    if (l(), (0, f.xf)(), G(), o.type === c.Z.AVATAR_DECORATION) {
      i()(z.type === c.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, C.ps)({
        initialSelectedDecoration: z,
        analyticsLocations: W
      });
      return
    }
    o.type === c.Z.PROFILE_EFFECT && (0, m.H)({
      initialSelectedEffectId: z.id,
      analyticsLocations: W
    })
  }, [l, G, o.type, z, W]), {
    handleUseNow: Y
  } = (0, T.W)({
    product: o,
    onSuccess: l,
    onError: l
  }), {
    firstAvatarDecoration: Q,
    firstProfileEffect: q
  } = (0, L.R)(o), J = null != Q && null != q, {
    category: X,
    isFetching: $
  } = (0, A.l)(o.skuId), ee = null !== (n = null == X ? void 0 : X.successModalBg) && void 0 !== n ? n : o.banner;
  return (0, r.jsxs)(v.Gt, {
    value: W,
    children: [(0, r.jsxs)("div", {
      className: j.modalInner,
      ref: V,
      children: [(0, r.jsxs)("div", {
        className: j.bannerContainer,
        children: [(0, r.jsx)(N.Z, {
          asset: $ ? void 0 : ee,
          addGradient: null === (t = O.Ve[o.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, _.ML)(880),
          className: j.decorationBanner,
          blur: !0
        }), (0, s.EQ)(o.type).with(c.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
          className: j.profileEffectShopPreview,
          children: (0, r.jsx)(b.Z, {
            forCollectedModal: !0,
            profileEffectId: z.id
          })
        })).with(c.Z.AVATAR_DECORATION, () => (i()(z.type === c.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, r.jsx)(u.Avatar, {
          size: u.AvatarSizes.SIZE_120,
          src: B,
          avatarDecoration: U,
          className: j.avatarDecoration,
          "aria-label": o.name
        }))).with(c.Z.BUNDLE, () => (0, r.jsx)("div", {
          className: j.bundlePreview,
          children: (0, r.jsx)(S.d, {
            product: o,
            user: F,
            isPurchased: !1,
            isHighlighted: !0,
            profileEffectClassName: j.bundleProfileEffectCard
          })
        })).otherwise(() => null)]
      }), (0, r.jsxs)("div", {
        className: j.collectedInfoContainer,
        children: [(0, r.jsxs)("div", {
          className: j.collectedTextContainer,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-lg/bold",
            children: k.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: o.name
            })
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: (0, s.EQ)(null == o ? void 0 : o.type).with(c.Z.BUNDLE, () => k.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(c.Z.PROFILE_EFFECT, () => k.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => k.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
          })]
        }), (0, x.x6)(o) ? (0, r.jsxs)("div", {
          className: j.buttons,
          children: [(0, r.jsx)(u.Button, {
            color: J ? u.ButtonColors.PRIMARY : u.ButtonColors.BRAND,
            onClick: K,
            children: k.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
          }), J ? (0, r.jsx)(u.Button, {
            onClick: Y,
            children: k.Z.Messages.COLLECTIBLES_USE_NOW
          }) : null]
        }) : (0, r.jsx)(u.Button, {
          onClick: K,
          children: k.Z.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(u.ModalCloseButton, {
        onClick: l,
        className: j.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !w && !H && (0, r.jsx)(I.Z, {
      confettiTarget: null != R ? R : V.current,
      confettiCanvas: M,
      sprites: (0, _.vK)(o.categorySkuId),
      colors: null == D ? void 0 : D.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: n,
    onClose: l,
    analyticsLocations: i
  } = e, s = a.useRef(new o.qA), [c, d] = a.useState(null), f = (0, R.UY)(n.skuId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.O_, {
      ref: d,
      className: j.confettiCanvas,
      environment: s.current
    }), (0, r.jsxs)(u.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: u.ModalSize.DYNAMIC,
      className: j.modalRoot,
      children: [null != f && (0, r.jsx)("img", {
        src: f.confettiAssetSrc,
        className: j.customConfetti,
        style: f.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, r.jsx)(u.ModalContent, {
        className: j.modalContent,
        children: (0, r.jsx)(M, {
          product: n,
          onClose: l,
          confettiCanvas: c,
          hideConfetti: null != f,
          analyticsLocations: i
        })
      })]
    })]
  })
}