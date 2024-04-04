"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("47120");
var s = a("735250"),
  r = a("470079"),
  l = a("979554"),
  i = a("442837"),
  n = a("481060"),
  o = a("100527"),
  u = a("906732"),
  c = a("335131"),
  d = a("884697"),
  f = a("449217"),
  h = a("223143"),
  m = a("311395"),
  g = a("197115"),
  p = a("166625"),
  C = a("594174"),
  v = a("626135"),
  S = a("74538"),
  E = a("864106"),
  A = a("240781"),
  x = a("818611"),
  I = a("981631"),
  _ = a("474936"),
  P = a("689938"),
  T = a("995454");

function b(e) {
  let {
    user: t,
    categories: a,
    purchases: l,
    analyticsLocations: i,
    onClose: u,
    initialSelectedDecoration: h,
    initialSelectedDecorationId: C,
    isTryItOutFlow: v,
    guild: I
  } = e, {
    pendingAvatarDecoration: b,
    setPendingAvatarDecoration: N,
    savedAvatarDecoration: R
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: v,
    guildId: null == I ? void 0 : I.id
  }), [M, w] = r.useState(() => {
    var e, t;
    if (null != h) return h;
    let s = (0, d.getAvatarDecorations)(l, a);
    return null != C ? null !== (e = s.find(e => e.id === C)) && void 0 !== e ? e : null : void 0 !== b ? b : null == R ? null : null !== (t = s.find(e => (0, E.isEqualAvatarDecoration)(e, R))) && void 0 !== t ? t : null
  }), {
    product: D,
    purchase: O
  } = (0, f.default)(null == M ? void 0 : M.skuId), j = S.default.canUseCollectibles(t), y = r.useRef(null), L = (0, m.default)(i), k = (0, E.isEqualAvatarDecoration)(M, void 0 === b ? R : b), F = () => {
    N(M), u()
  }, H = r.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != M ? M.skuId : void 0
    })
  }, [i, u, M]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(n.ModalHeader, {
      separator: !1,
      className: T.modalHeader,
      children: [(0, s.jsx)(n.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, s.jsx)(n.ModalCloseButton, {
        className: T.modalCloseButton,
        onClick: u
      })]
    }), (0, s.jsxs)(n.ModalContent, {
      className: T.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(x.default, {
        user: t,
        guild: I,
        pendingAvatarDecoration: M,
        selectedAvatarDecorationRef: y,
        onSelect: e => {
          w(e), null != e && L(e)
        },
        onOpenShop: H
      }), (0, s.jsx)(A.default, {
        className: T.modalPreview,
        user: t,
        avatarDecorationOverride: M
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: T.modalFooter,
      children: [null != O && (!(0, d.isPremiumCollectiblesPurchase)(O) || j) || null === M ? (0, s.jsx)(n.Button, {
        onClick: F,
        disabled: k,
        children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : j || !(0, d.isPremiumCollectiblesProduct)(D) ? (0, s.jsx)(n.Button, {
        className: T.modalFooterShopButton,
        onClick: H,
        children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(g.default, {
        subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
        buttonText: S.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      }), (0, s.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: u,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}

function N(e) {
  let {
    transitionState: t,
    analyticsLocations: a,
    onClose: d,
    onCloseModal: f,
    initialSelectedDecoration: m,
    initialSelectedDecorationId: g,
    isTryItOutFlow: p,
    guild: S
  } = e, E = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: A
  } = (0, u.default)(a, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: x,
    purchases: _,
    isFetchingCategories: P,
    isFetchingPurchases: N
  } = (0, h.default)(), R = P || N && 0 === _.size;
  return r.useEffect(() => {
    v.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: A
    })
  }, [A]), r.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...x.values()],
      itemTypes: [l.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [x]), null == E ? null : (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsx)(n.ModalRoot, {
      transitionState: t,
      className: T.modal,
      size: R ? n.ModalSize.DYNAMIC : n.ModalSize.MEDIUM,
      children: R ? (0, s.jsx)(n.Spinner, {
        className: T.spinner,
        type: n.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(b, {
        user: E,
        guild: S,
        categories: x,
        purchases: _,
        analyticsLocations: A,
        initialSelectedDecoration: m,
        initialSelectedDecorationId: g,
        onClose: () => {
          f(), null == d || d()
        },
        isTryItOutFlow: p
      })
    })
  })
}