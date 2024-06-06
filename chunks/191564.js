"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("979554"),
  r = l("442837"),
  i = l("481060"),
  u = l("100527"),
  o = l("906732"),
  c = l("335131"),
  d = l("884697"),
  f = l("449217"),
  m = l("566111"),
  h = l("197115"),
  E = l("150039"),
  p = l("594174"),
  g = l("626135"),
  C = l("74538"),
  I = l("934261"),
  P = l("52268"),
  S = l("981631"),
  v = l("474936"),
  x = l("689938"),
  _ = l("45216");

function A(e) {
  let {
    user: t,
    product: l,
    purchase: n,
    onApply: r,
    onClose: o,
    disableApplyButton: f,
    canUseCollectibles: m,
    selectedProfileEffectId: E,
    selectedProfileEffectItem: p,
    analyticsLocations: g
  } = e, I = a.useCallback(() => {
    o(), (0, c.openCollectiblesShop)({
      analyticsLocations: g,
      analyticsSource: u.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [o, g, p]);
  return (0, s.jsx)(i.ModalFooter, {
    className: _.modalFooter,
    children: (0, s.jsxs)("div", {
      className: _.buttonsRight,
      children: [(0, s.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: o,
        children: x.default.Messages.CANCEL
      }), null != n && (!(0, d.isPremiumCollectiblesPurchase)(n) || m) || null === E ? (0, s.jsx)(i.Button, {
        onClick: r,
        disabled: f,
        children: x.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : m || !(0, d.isPremiumCollectiblesProduct)(l) ? (0, s.jsx)(i.Button, {
        className: _.__invalid_modalFooterShopButton,
        onClick: I,
        children: x.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(h.default, {
        subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
        buttonText: C.default.isPremium(t) ? x.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : x.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      })]
    })
  })
}

function N(e) {
  let {
    user: t,
    guild: l,
    categories: n,
    purchases: r,
    onClose: u,
    initialSelectedProfileEffectId: o,
    currentSavedEffectId: c,
    analyticsLocations: m
  } = e, {
    pendingProfileEffectId: h
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(l), [p, g] = a.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, r);
    return [e.purchased, e.shopPreviews]
  }, [n, r]), [S, v] = a.useState(() => null != o ? o : void 0 !== h ? h : null == c ? null : null != c ? c : null), [N, R] = a.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === S),
      l = null != t || null === S;
    return [null !== (e = null != t ? t : g.find(e => (null == e ? void 0 : e.id) === S)) && void 0 !== e ? e : null, l]
  }, [S, p, g]), {
    product: T,
    purchase: M
  } = (0, f.default)(null == N ? void 0 : N.skuId), j = a.useRef(null), O = C.default.canUseCollectibles(t), U = S === (void 0 === h ? null != c ? c : null : h), L = a.useCallback(e => {
    v(e)
  }, [v]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(i.ModalHeader, {
      separator: !1,
      className: _.modalHeader,
      children: [(0, s.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: x.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, s.jsx)(i.ModalCloseButton, {
        className: _.modalCloseButton,
        onClick: u
      })]
    }), (0, s.jsxs)(i.ModalContent, {
      className: _.modalContent,
      children: [(0, s.jsx)(P.default, {
        user: t,
        guild: l,
        pendingProfileEffect: S,
        selectedProfileEffectRef: j,
        onSelect: L,
        onClose: u
      }), (0, s.jsx)(I.default, {
        user: t,
        canApplySelectedChange: R,
        pendingProfileEffectRecord: N,
        product: T,
        purchase: M,
        guild: l
      })]
    }), (0, s.jsx)(A, {
      user: t,
      onApply: () => {
        (0, E.setNewPendingProfileEffectId)(S, c, l), u()
      },
      onClose: u,
      product: T,
      purchase: M,
      canUseCollectibles: O,
      selectedProfileEffectId: S,
      selectedProfileEffectItem: N,
      disableApplyButton: U,
      analyticsLocations: m
    })]
  })
}

function R(e) {
  let {
    transitionState: t,
    analyticsLocations: l,
    initialSelectedEffectId: d,
    guild: f,
    onClose: h
  } = e, {
    isFetching: C,
    categories: I,
    purchases: P
  } = (0, m.default)(), v = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, o.default)(l, u.default.EDIT_PROFILE_EFFECT_MODAL), A = (0, E.useGlobalOrGuildIdentityProfileEffect)(v, f);
  return a.useEffect(() => {
    g.default.track(S.AnalyticEvents.OPEN_MODAL, {
      type: S.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [n.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [I]), (0, s.jsx)(o.AnalyticsLocationProvider, {
    value: x,
    children: (0, s.jsx)(i.ModalRoot, {
      transitionState: t,
      size: i.ModalSize.DYNAMIC,
      className: _.modal,
      children: C ? (0, s.jsx)(i.Spinner, {
        className: _.spinner,
        type: i.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(N, {
        user: v,
        guild: f,
        categories: I,
        purchases: P,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: A,
        onClose: h,
        analyticsLocations: x
      })
    })
  })
}