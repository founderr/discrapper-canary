"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("47120");
var s = a("735250"),
  r = a("470079"),
  l = a("979554"),
  i = a("442837"),
  o = a("481060"),
  n = a("100527"),
  u = a("906732"),
  c = a("335131"),
  d = a("884697"),
  h = a("449217"),
  m = a("223143"),
  f = a("311395"),
  C = a("197115"),
  g = a("166625"),
  v = a("594174"),
  E = a("626135"),
  S = a("74538"),
  p = a("864106"),
  A = a("240781"),
  _ = a("818611"),
  I = a("981631"),
  x = a("474936"),
  P = a("689938"),
  T = a("995454");

function w(e) {
  let {
    user: t,
    categories: a,
    purchases: l,
    analyticsLocations: i,
    onClose: u,
    initialSelectedDecoration: m,
    initialSelectedDecorationId: v,
    isTryItOutFlow: E,
    guild: I
  } = e, {
    pendingAvatarDecoration: w,
    setPendingAvatarDecoration: D,
    savedAvatarDecoration: N
  } = (0, g.default)({
    analyticsLocations: i,
    isTryItOut: E,
    guildId: null == I ? void 0 : I.id
  }), [R, M] = r.useState(() => {
    var e, t;
    if (null != m) return m;
    let s = (0, d.getAvatarDecorations)(l, a);
    return null != v ? null !== (e = s.find(e => e.id === v)) && void 0 !== e ? e : null : void 0 !== w ? w : null == N ? null : null !== (t = s.find(e => (0, p.isEqualAvatarDecoration)(e, N))) && void 0 !== t ? t : null
  }), {
    product: O,
    purchase: b
  } = (0, h.default)(null == R ? void 0 : R.skuId), j = S.default.canUseCollectibles(t), L = r.useRef(null), y = (0, f.default)(i), F = (0, p.isEqualAvatarDecoration)(R, void 0 === w ? N : w), H = () => {
    D(R), u()
  }, k = r.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: n.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != R ? R.skuId : void 0
    })
  }, [i, u, R]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      className: T.modalHeader,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, s.jsx)(o.ModalCloseButton, {
        className: T.modalCloseButton,
        onClick: u
      })]
    }), (0, s.jsxs)(o.ModalContent, {
      className: T.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(_.default, {
        user: t,
        guild: I,
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: L,
        onSelect: e => {
          M(e), null != e && y(e)
        },
        onOpenShop: k
      }), (0, s.jsx)(A.default, {
        className: T.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      className: T.modalFooter,
      children: [null != b && (!(0, d.isPremiumCollectiblesPurchase)(b) || j) || null === R ? (0, s.jsx)(o.Button, {
        onClick: H,
        disabled: F,
        children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : j || !(0, d.isPremiumCollectiblesProduct)(O) ? (0, s.jsx)(o.Button, {
        className: T.modalFooterShopButton,
        onClick: k,
        children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(C.default, {
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        buttonText: S.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      }), (0, s.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: u,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}

function D(e) {
  let {
    transitionState: t,
    analyticsLocations: a,
    onClose: d,
    onCloseModal: h,
    initialSelectedDecoration: f,
    initialSelectedDecorationId: C,
    isTryItOutFlow: g,
    guild: S
  } = e, p = (0, i.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: A
  } = (0, u.default)(a, n.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: _,
    purchases: x,
    isFetchingCategories: P,
    isFetchingPurchases: D
  } = (0, m.default)(), N = P || D && 0 === x.size;
  return r.useEffect(() => {
    E.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: A
    })
  }, [A]), r.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [..._.values()],
      itemTypes: [l.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [_]), null == p ? null : (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsx)(o.ModalRoot, {
      transitionState: t,
      className: T.modal,
      size: N ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
      children: N ? (0, s.jsx)(o.Spinner, {
        className: T.spinner,
        type: o.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(w, {
        user: p,
        guild: S,
        categories: _,
        purchases: x,
        analyticsLocations: A,
        initialSelectedDecoration: f,
        initialSelectedDecorationId: C,
        onClose: () => {
          h(), null == d || d()
        },
        isTryItOutFlow: g
      })
    })
  })
}