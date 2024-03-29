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
  S = a("626135"),
  v = a("74538"),
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
    isTryItOutFlow: C,
    guild: S
  } = e, {
    pendingAvatarDecoration: I,
    setPendingAvatarDecoration: b,
    savedAvatarDecoration: N
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: C,
    guildId: null == S ? void 0 : S.id
  }), [R, M] = r.useState(() => {
    var e;
    return null != h ? h : void 0 !== I ? I : null == N || 0 === a.size ? null : null !== (e = (0, d.getAvatarDecorations)(l, a).find(e => (0, E.isEqualAvatarDecoration)(e, N))) && void 0 !== e ? e : null
  }), {
    product: w,
    purchase: D
  } = (0, f.default)(null == R ? void 0 : R.skuId), O = v.default.canUseCollectibles(t), j = r.useRef(null), y = (0, m.default)(i), L = (0, E.isEqualAvatarDecoration)(R, void 0 === I ? N : I), k = () => {
    b(R), u()
  }, F = r.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != R ? R.skuId : void 0
    })
  }, [i, u, R]);
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
        guild: S,
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: j,
        onSelect: e => {
          M(e), null != e && y(e)
        },
        onOpenShop: F
      }), (0, s.jsx)(A.default, {
        className: T.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: T.modalFooter,
      children: [null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || O) || null === R ? (0, s.jsx)(n.Button, {
        onClick: k,
        disabled: L,
        children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : O || !(0, d.isPremiumCollectiblesProduct)(w) ? (0, s.jsx)(n.Button, {
        className: T.modalFooterShopButton,
        onClick: F,
        children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(g.default, {
        subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
        buttonText: v.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
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
    initialSelectedDecoration: f,
    isTryItOutFlow: m,
    guild: g
  } = e, p = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: v
  } = (0, u.default)(a, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: E,
    purchases: A,
    isFetchingCategories: x,
    isFetchingPurchases: _
  } = (0, h.default)(), P = x || _ && 0 === A.size;
  return r.useEffect(() => {
    S.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: v
    })
  }, [v]), r.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...E.values()],
      itemTypes: [l.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [E]), null == p ? null : (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: v,
    children: (0, s.jsx)(n.ModalRoot, {
      transitionState: t,
      className: T.modal,
      size: P ? n.ModalSize.DYNAMIC : n.ModalSize.MEDIUM,
      children: P ? (0, s.jsx)(n.Spinner, {
        className: T.spinner,
        type: n.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(b, {
        user: p,
        guild: g,
        categories: E,
        purchases: A,
        analyticsLocations: v,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}