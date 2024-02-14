"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("265586"),
  l = n("446674"),
  a = n("77078"),
  o = n("812204"),
  u = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  E = n("635956"),
  C = n("906932"),
  p = n("217513"),
  v = n("790618"),
  m = n("697218"),
  _ = n("599110"),
  S = n("719923"),
  g = n("717262"),
  I = n("598854"),
  A = n("49111"),
  N = n("646718"),
  T = n("782340"),
  P = n("810473");

function R(e) {
  let {
    user: t,
    product: n,
    purchase: s,
    onApply: l,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: C,
    selectedProfileEffectItem: p,
    analyticsLocations: v
  } = e, m = i.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: v,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [u, v, p]);
  return (0, r.jsx)(a.ModalFooter, {
    className: P.modalFooter,
    children: (0, r.jsxs)("div", {
      className: P.buttonsRight,
      children: [(0, r.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: T.default.Messages.CANCEL
      }), (() => {
        let e = null != s && (!(0, d.isPremiumCollectiblesPurchase)(s) || h);
        if (e || null === C) return (0, r.jsx)(a.Button, {
          onClick: l,
          disabled: f,
          children: T.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let i = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return i ? (0, r.jsx)(a.Button, {
          className: P.modalFooterShopButton,
          onClick: m,
          children: T.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, r.jsx)(E.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: S.default.isPremium(t) ? T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function L(e) {
  let {
    user: t,
    categories: n,
    purchases: s,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, E = (0, l.useStateFromStores)([v.default], () => v.default.getPendingProfileEffectId()), [p, m] = i.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, s);
    return [e.purchased, e.shopPreviews]
  }, [n, s]), [_, A] = i.useState(() => null != u ? u : void 0 !== E ? E : null == c ? null : null != c ? c : null), [N, L] = i.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === _),
      n = null != t || null === _,
      r = null !== (e = null != t ? t : m.find(e => (null == e ? void 0 : e.id) === _)) && void 0 !== e ? e : null;
    return [r, n]
  }, [_, p, m]), {
    product: x,
    purchase: M
  } = (0, f.default)(null == N ? void 0 : N.skuId), O = i.useRef(null), w = S.default.canUseCollectibles(t), y = _ === (void 0 === E ? null != c ? c : null : E), b = i.useCallback(e => {
    A(e)
  }, [A]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalHeader, {
      separator: !1,
      className: P.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: T.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, r.jsx)(a.ModalCloseButton, {
        className: P.modalCloseButton,
        onClick: o
      })]
    }), (0, r.jsxs)(a.ModalContent, {
      className: P.modalContent,
      children: [(0, r.jsx)(I.default, {
        user: t,
        pendingProfileEffect: _,
        selectedProfileEffectRef: O,
        onSelect: b,
        onClose: o
      }), (0, r.jsx)(g.default, {
        user: t,
        canApplySelectedChange: L,
        pendingProfileEffectRecord: N,
        product: x,
        purchase: M
      })]
    }), (0, r.jsx)(R, {
      user: t,
      onApply: () => {
        (0, C.setNewPendingProfileEffectId)(_, c), o()
      },
      onClose: o,
      product: x,
      purchase: M,
      canUseCollectibles: w,
      selectedProfileEffectId: _,
      selectedProfileEffectItem: N,
      disableApplyButton: y,
      analyticsLocations: h
    })]
  })
}

function x(e) {
  var t;
  let {
    transitionState: n,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: E
  } = e, {
    isFetching: C,
    categories: v,
    purchases: S
  } = (0, h.default)(), g = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    AnalyticsLocationProvider: I,
    analyticsLocations: N
  } = (0, u.default)(d, o.default.EDIT_PROFILE_EFFECT_MODAL), T = (0, p.default)(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : ""), R = null == T ? void 0 : T.profileEffectId;
  return i.useEffect(() => {
    _.default.track(A.AnalyticEvents.OPEN_MODAL, {
      type: A.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: N
    })
  }, [N]), i.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...v.values()],
      itemTypes: [s.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [v]), null == g ? null : (0, r.jsx)(I, {
    children: (0, r.jsx)(a.ModalRoot, {
      transitionState: n,
      size: a.ModalSize.DYNAMIC,
      className: P.modal,
      children: C ? (0, r.jsx)(a.Spinner, {
        className: P.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(L, {
        user: g,
        categories: v,
        purchases: S,
        initialSelectedProfileEffectId: f,
        currentSavedEffectId: R,
        onClose: E,
        analyticsLocations: N
      })
    })
  })
}