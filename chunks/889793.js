"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("222007");
var n = r("37983"),
  l = r("884691"),
  i = r("265586"),
  s = r("446674"),
  a = r("77078"),
  u = r("812204"),
  o = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  C = r("161009"),
  E = r("635956"),
  h = r("906932"),
  p = r("217513"),
  I = r("790618"),
  v = r("697218"),
  L = r("599110"),
  _ = r("719923"),
  S = r("717262"),
  g = r("598854"),
  T = r("49111"),
  m = r("646718"),
  A = r("782340"),
  O = r("811855");

function N(e) {
  let {
    user: t,
    product: r,
    purchase: i,
    onApply: s,
    onClose: o,
    disableApplyButton: f,
    canUseCollectibles: C,
    selectedProfileEffectId: h,
    selectedProfileEffectItem: p,
    analyticsLocations: I
  } = e, v = l.useCallback(() => {
    o(), (0, c.openCollectiblesShop)({
      analyticsLocations: I,
      analyticsSource: u.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [o, I, p]);
  return (0, n.jsx)(a.ModalFooter, {
    className: O.modalFooter,
    children: (0, n.jsxs)("div", {
      className: O.buttonsRight,
      children: [(0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: o,
        children: A.default.Messages.CANCEL
      }), (() => {
        let e = null != i && (!(0, d.isPremiumCollectiblesPurchase)(i) || C);
        if (e || null === h) return (0, n.jsx)(a.Button, {
          onClick: s,
          disabled: f,
          children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let l = C || !(0, d.isPremiumCollectiblesProduct)(r);
        return l ? (0, n.jsx)(a.Button, {
          className: O.modalFooterShopButton,
          onClick: v,
          children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(E.default, {
          subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
          buttonText: _.default.isPremium(t) ? A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function P(e) {
  let {
    user: t,
    categories: r,
    purchases: i,
    onClose: u,
    initialSelectedProfileEffectId: o,
    currentSavedEffectId: c,
    analyticsLocations: C
  } = e, E = (0, s.useStateFromStores)([I.default], () => I.default.getPendingProfileEffectId()), [p, v] = l.useMemo(() => {
    let e = (0, d.groupProfileEffects)(r, i);
    return [e.purchased, e.shopPreviews]
  }, [r, i]), [L, T] = l.useState(() => null != o ? o : void 0 !== E ? E : null == c ? null : null != c ? c : null), [m, P] = l.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === L),
      r = null != t || null === L,
      n = null !== (e = null != t ? t : v.find(e => (null == e ? void 0 : e.id) === L)) && void 0 !== e ? e : null;
    return [n, r]
  }, [L, p, v]), {
    product: R,
    purchase: y
  } = (0, f.default)(null == m ? void 0 : m.skuId), x = l.useRef(null), F = _.default.canUseCollectibles(t), w = L === (void 0 === E ? null != c ? c : null : E), M = l.useCallback(e => {
    T(e)
  }, [T]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.ModalHeader, {
      separator: !1,
      className: O.modalHeader,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: A.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, n.jsx)(a.ModalCloseButton, {
        className: O.modalCloseButton,
        onClick: u
      })]
    }), (0, n.jsxs)(a.ModalContent, {
      className: O.modalContent,
      children: [(0, n.jsx)(g.default, {
        user: t,
        pendingProfileEffect: L,
        selectedProfileEffectRef: x,
        onSelect: M,
        onClose: u
      }), (0, n.jsx)(S.default, {
        user: t,
        canApplySelectedChange: P,
        pendingProfileEffectRecord: m,
        product: R,
        purchase: y
      })]
    }), (0, n.jsx)(N, {
      user: t,
      onApply: () => {
        (0, h.setNewPendingProfileEffectId)(L, c), u()
      },
      onClose: u,
      product: R,
      purchase: y,
      canUseCollectibles: F,
      selectedProfileEffectId: L,
      selectedProfileEffectItem: m,
      disableApplyButton: w,
      analyticsLocations: C
    })]
  })
}

function R(e) {
  var t;
  let {
    transitionState: r,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: E
  } = e, {
    isFetching: h,
    categories: I,
    purchases: _
  } = (0, C.default)(), S = (0, s.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
    AnalyticsLocationProvider: g,
    analyticsLocations: m
  } = (0, o.default)(d, u.default.EDIT_PROFILE_EFFECT_MODAL), A = (0, p.default)(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : ""), N = null == A ? void 0 : A.profileEffectId;
  return l.useEffect(() => {
    L.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: T.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), l.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [I]), null == S ? null : (0, n.jsx)(g, {
    children: (0, n.jsx)(a.ModalRoot, {
      transitionState: r,
      size: a.ModalSize.DYNAMIC,
      className: O.modal,
      children: h ? (0, n.jsx)(a.Spinner, {
        className: O.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(P, {
        user: S,
        categories: I,
        purchases: _,
        initialSelectedProfileEffectId: f,
        currentSavedEffectId: N,
        onClose: E,
        analyticsLocations: m
      })
    })
  })
}