"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(979554),
  o = n(442837),
  a = n(481060),
  l = n(100527),
  u = n(906732),
  _ = n(335131),
  c = n(884697),
  d = n(449217),
  E = n(223143),
  I = n(311395),
  T = n(197115),
  h = n(166625),
  S = n(594174),
  f = n(626135),
  N = n(74538),
  A = n(864106),
  m = n(240781),
  O = n(818611),
  R = n(981631),
  p = n(474936),
  g = n(689938),
  C = n(45538);

function v(e) {
  let {
    user: t,
    categories: n,
    purchases: s,
    analyticsLocations: o,
    onClose: u,
    initialSelectedDecoration: E,
    initialSelectedDecorationId: S,
    isTryItOutFlow: f,
    guild: R
  } = e, {
    pendingAvatarDecoration: v,
    setPendingAvatarDecoration: L,
    savedAvatarDecoration: D
  } = (0, h.Z)({
    analyticsLocations: o,
    isTryItOut: f,
    guildId: null == R ? void 0 : R.id
  }), [M, P] = r.useState(() => {
    var e, t;
    if (null != E) return E;
    let i = (0, c.iC)(s, n);
    return null != S ? null !== (e = i.find(e => e.id === S)) && void 0 !== e ? e : null : void 0 !== v ? v : null == D ? null : null !== (t = i.find(e => (0, A.sr)(e, D))) && void 0 !== t ? t : null
  }), {
    product: y,
    purchase: U
  } = (0, d.Z)(null == M ? void 0 : M.skuId), b = N.ZP.canUseCollectibles(t), G = r.useRef(null), w = (0, I.Z)(o), k = (0, A.sr)(M, void 0 === v ? D : v), B = () => {
    L(M), u()
  }, x = r.useCallback(e => {
    u(), (0, _.mK)({
      analyticsLocations: o,
      analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [o, u]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(a.ModalHeader, {
      separator: !1,
      className: C.modalHeader,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: g.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, i.jsx)(a.ModalCloseButton, {
        className: C.modalCloseButton,
        onClick: u
      })]
    }), (0, i.jsxs)(a.ModalContent, {
      className: C.modalContent,
      scrollbarType: "none",
      children: [(0, i.jsx)(O.Z, {
        user: t,
        guild: R,
        pendingAvatarDecoration: M,
        selectedAvatarDecorationRef: G,
        onSelect: e => {
          P(e), null != e && w(e)
        },
        onOpenShop: x
      }), (0, i.jsx)(m.Z, {
        className: C.modalPreview,
        user: t,
        guildId: null == R ? void 0 : R.id,
        avatarDecorationOverride: M
      })]
    }), (0, i.jsxs)(a.ModalFooter, {
      className: C.modalFooter,
      children: [null != U && (!(0, c.qS)(U) || b) || null === M ? (0, i.jsx)(a.Button, {
        onClick: B,
        disabled: k,
        children: g.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : null == U && (b || !(0, c.G1)(y)) ? (0, i.jsx)(a.Button, {
        className: C.modalFooterShopButton,
        onClick: () => x(null == y ? void 0 : y.skuId),
        children: g.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, i.jsx)(T.Z, {
        subscriptionTier: p.Si.TIER_2,
        buttonText: N.ZP.isPremium(t) ? g.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : g.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      }), (0, i.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: g.Z.Messages.CANCEL
      })]
    })]
  })
}

function L(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: c,
    onCloseModal: d,
    initialSelectedDecoration: I,
    initialSelectedDecorationId: T,
    isTryItOutFlow: h,
    guild: N
  } = e, A = (0, o.e7)([S.default], () => S.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, u.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: O,
    purchases: p,
    isFetchingCategories: g,
    isFetchingPurchases: L
  } = (0, E.Z)(), D = g || L && 0 === p.size;
  return r.useEffect(() => {
    f.default.track(R.rMx.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: m
    })
  }, [m]), r.useEffect(() => () => {
    (0, _.K$)({
      categories: [...O.values()],
      itemTypes: [s.Z.AVATAR_DECORATION]
    })
  }, [O]), null == A ? null : (0, i.jsx)(u.Gt, {
    value: m,
    children: (0, i.jsx)(a.ModalRoot, {
      transitionState: t,
      className: C.modal,
      size: D ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
      children: D ? (0, i.jsx)(a.Spinner, {
        className: C.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, i.jsx)(v, {
        user: A,
        guild: N,
        categories: O,
        purchases: p,
        analyticsLocations: m,
        initialSelectedDecoration: I,
        initialSelectedDecorationId: T,
        onClose: () => {
          d(), null == c || c()
        },
        isTryItOutFlow: h
      })
    })
  })
}