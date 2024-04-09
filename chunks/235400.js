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
    initialSelectedDecorationId: C,
    isTryItOutFlow: S,
    guild: I
  } = e, {
    pendingAvatarDecoration: b,
    setPendingAvatarDecoration: N,
    savedAvatarDecoration: M
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: S,
    guildId: null == I ? void 0 : I.id
  }), [R, D] = r.useState(() => {
    var e, t;
    if (null != h) return h;
    let s = (0, d.getAvatarDecorations)(l, a);
    return null != C ? null !== (e = s.find(e => e.id === C)) && void 0 !== e ? e : null : void 0 !== b ? b : null == M ? null : null !== (t = s.find(e => (0, E.isEqualAvatarDecoration)(e, M))) && void 0 !== t ? t : null
  }), {
    product: w,
    purchase: O
  } = (0, f.default)(null == R ? void 0 : R.skuId), j = v.default.canUseCollectibles(t), y = r.useRef(null), L = (0, m.default)(i), k = (0, E.isEqualAvatarDecoration)(R, void 0 === b ? M : b), F = () => {
    N(R), u()
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
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: y,
        onSelect: e => {
          D(e), null != e && L(e)
        },
        onOpenShop: H
      }), (0, s.jsx)(A.default, {
        className: T.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: T.modalFooter,
      children: [null != O && (!(0, d.isPremiumCollectiblesPurchase)(O) || j) || null === R ? (0, s.jsx)(n.Button, {
        onClick: F,
        disabled: k,
        children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : j || !(0, d.isPremiumCollectiblesProduct)(w) ? (0, s.jsx)(n.Button, {
        className: T.modalFooterShopButton,
        onClick: H,
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
    onCloseModal: f,
    initialSelectedDecoration: m,
    initialSelectedDecorationId: g,
    isTryItOutFlow: p,
    guild: v
  } = e, E = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: A
  } = (0, u.default)(a, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: x,
    purchases: _,
    isFetchingCategories: P,
    isFetchingPurchases: N
  } = (0, h.default)(), M = P || N && 0 === _.size;
  return r.useEffect(() => {
    S.default.track(I.AnalyticEvents.OPEN_MODAL, {
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
      size: M ? n.ModalSize.DYNAMIC : n.ModalSize.MEDIUM,
      children: M ? (0, s.jsx)(n.Spinner, {
        className: T.spinner,
        type: n.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(b, {
        user: E,
        guild: v,
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