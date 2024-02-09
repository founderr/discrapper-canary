"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  i = n("265586"),
  l = n("446674"),
  a = n("77078"),
  o = n("812204"),
  u = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  C = n("635956"),
  v = n("906932"),
  p = n("217513"),
  E = n("790618"),
  m = n("697218"),
  g = n("599110"),
  I = n("719923"),
  L = n("717262"),
  x = n("598854"),
  M = n("49111"),
  _ = n("646718"),
  N = n("782340"),
  S = n("811855");

function O(e) {
  let {
    user: t,
    product: n,
    purchase: i,
    onApply: l,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: v,
    selectedProfileEffectItem: p,
    analyticsLocations: E
  } = e, m = s.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: E,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [u, E, p]);
  return (0, r.jsx)(a.ModalFooter, {
    className: S.modalFooter,
    children: (0, r.jsxs)("div", {
      className: S.buttonsRight,
      children: [(0, r.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: N.default.Messages.CANCEL
      }), (() => {
        let e = null != i && (!(0, d.isPremiumCollectiblesPurchase)(i) || h);
        if (e || null === v) return (0, r.jsx)(a.Button, {
          onClick: l,
          disabled: f,
          children: N.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let s = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return s ? (0, r.jsx)(a.Button, {
          className: S.modalFooterShopButton,
          onClick: m,
          children: N.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, r.jsx)(C.default, {
          subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
          buttonText: I.default.isPremium(t) ? N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function A(e) {
  let {
    user: t,
    categories: n,
    purchases: i,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, C = (0, l.useStateFromStores)([E.default], () => E.default.getPendingProfileEffectId()), [p, m] = s.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, i);
    return [e.purchased, e.shopPreviews]
  }, [n, i]), [g, M] = s.useState(() => null != u ? u : void 0 !== C ? C : null == c ? null : null != c ? c : null), [_, A] = s.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === g),
      n = null != t || null === g,
      r = null !== (e = null != t ? t : m.find(e => (null == e ? void 0 : e.id) === g)) && void 0 !== e ? e : null;
    return [r, n]
  }, [g, p, m]), {
    product: P,
    purchase: R
  } = (0, f.default)(null == _ ? void 0 : _.skuId), T = s.useRef(null), w = I.default.canUseCollectibles(t), j = g === (void 0 === C ? null != c ? c : null : C), y = s.useCallback(e => {
    M(e)
  }, [M]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalHeader, {
      separator: !1,
      className: S.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: N.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, r.jsx)(a.ModalCloseButton, {
        className: S.modalCloseButton,
        onClick: o
      })]
    }), (0, r.jsxs)(a.ModalContent, {
      className: S.modalContent,
      children: [(0, r.jsx)(x.default, {
        user: t,
        pendingProfileEffect: g,
        selectedProfileEffectRef: T,
        onSelect: y,
        onClose: o
      }), (0, r.jsx)(L.default, {
        user: t,
        canApplySelectedChange: A,
        pendingProfileEffectRecord: _,
        product: P,
        purchase: R
      })]
    }), (0, r.jsx)(O, {
      user: t,
      onApply: () => {
        (0, v.setNewPendingProfileEffectId)(g, c), o()
      },
      onClose: o,
      product: P,
      purchase: R,
      canUseCollectibles: w,
      selectedProfileEffectId: g,
      selectedProfileEffectItem: _,
      disableApplyButton: j,
      analyticsLocations: h
    })]
  })
}

function P(e) {
  var t;
  let {
    transitionState: n,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: C
  } = e, {
    isFetching: v,
    categories: E,
    purchases: I
  } = (0, h.default)(), L = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    AnalyticsLocationProvider: x,
    analyticsLocations: _
  } = (0, u.default)(d, o.default.EDIT_PROFILE_EFFECT_MODAL), N = (0, p.default)(null !== (t = null == L ? void 0 : L.id) && void 0 !== t ? t : ""), O = null == N ? void 0 : N.profileEffectId;
  return s.useEffect(() => {
    g.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: M.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: _
    })
  }, [_]), s.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...E.values()],
      itemTypes: [i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [E]), null == L ? null : (0, r.jsx)(x, {
    children: (0, r.jsx)(a.ModalRoot, {
      transitionState: n,
      size: a.ModalSize.DYNAMIC,
      className: S.modal,
      children: v ? (0, r.jsx)(a.Spinner, {
        className: S.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(A, {
        user: L,
        categories: E,
        purchases: I,
        initialSelectedProfileEffectId: f,
        currentSavedEffectId: O,
        onClose: C,
        analyticsLocations: _
      })
    })
  })
}