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
  A = a("864106"),
  E = a("240781"),
  x = a("818611"),
  I = a("981631"),
  _ = a("474936"),
  T = a("689938"),
  b = a("995454");

function P(e) {
  let {
    user: t,
    categories: a,
    purchases: l,
    analyticsLocations: i,
    onClose: u,
    initialSelectedDecoration: h,
    isTryItOutFlow: C,
    guild: v
  } = e, {
    pendingAvatarDecoration: I,
    setPendingAvatarDecoration: P,
    savedAvatarDecoration: N
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: C,
    guildId: null == v ? void 0 : v.id
  }), [R, M] = r.useState(() => {
    var e;
    return null != h ? h : void 0 !== I ? I : null == N || 0 === a.size ? null : null !== (e = (0, d.getAvatarDecorations)(l, a).find(e => (0, A.isEqualAvatarDecoration)(e, N))) && void 0 !== e ? e : null
  }), {
    product: w,
    purchase: D
  } = (0, f.default)(null == R ? void 0 : R.skuId), O = S.default.canUseCollectibles(t), j = r.useRef(null), y = (0, m.default)(i), L = (0, A.isEqualAvatarDecoration)(R, void 0 === I ? N : I), k = () => {
    P(R), u()
  }, H = r.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != R ? R.skuId : void 0
    })
  }, [i, u, R]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(n.ModalHeader, {
      separator: !1,
      className: b.modalHeader,
      children: [(0, s.jsx)(n.Heading, {
        variant: "heading-lg/semibold",
        children: T.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, s.jsx)(n.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: u
      })]
    }), (0, s.jsxs)(n.ModalContent, {
      className: b.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(x.default, {
        user: t,
        guild: v,
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: j,
        onSelect: e => {
          M(e), null != e && y(e)
        },
        onOpenShop: H
      }), (0, s.jsx)(E.default, {
        className: b.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: b.modalFooter,
      children: [null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || O) || null === R ? (0, s.jsx)(n.Button, {
        onClick: k,
        disabled: L,
        children: T.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : O || !(0, d.isPremiumCollectiblesProduct)(w) ? (0, s.jsx)(n.Button, {
        className: b.modalFooterShopButton,
        onClick: H,
        children: T.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(g.default, {
        subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
        buttonText: S.default.isPremium(t) ? T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      }), (0, s.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: u,
        children: T.default.Messages.CANCEL
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
    analyticsLocations: S
  } = (0, u.default)(a, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: A,
    purchases: E,
    isFetchingCategories: x,
    isFetchingPurchases: _
  } = (0, h.default)(), T = x || _ && 0 === E.size;
  return r.useEffect(() => {
    v.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: S
    })
  }, [S]), r.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...A.values()],
      itemTypes: [l.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [A]), null == p ? null : (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: S,
    children: (0, s.jsx)(n.ModalRoot, {
      transitionState: t,
      className: b.modal,
      size: T ? n.ModalSize.DYNAMIC : n.ModalSize.MEDIUM,
      children: T ? (0, s.jsx)(n.Spinner, {
        className: b.spinner,
        type: n.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(P, {
        user: p,
        guild: g,
        categories: A,
        purchases: E,
        analyticsLocations: S,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}