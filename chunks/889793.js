"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var r = n("37983"),
  l = n("884691"),
  i = n("265586"),
  s = n("446674"),
  a = n("77078"),
  o = n("812204"),
  u = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  C = n("161009"),
  E = n("635956"),
  h = n("906932"),
  p = n("217513"),
  I = n("790618"),
  L = n("697218"),
  v = n("599110"),
  _ = n("719923"),
  S = n("717262"),
  g = n("598854"),
  T = n("49111"),
  m = n("646718"),
  A = n("782340"),
  O = n("811855");

function N(e) {
  let {
    user: t,
    product: n,
    purchase: i,
    onApply: s,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: C,
    selectedProfileEffectId: h,
    selectedProfileEffectItem: p,
    analyticsLocations: I
  } = e, L = l.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: I,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [u, I, p]);
  return (0, r.jsx)(a.ModalFooter, {
    className: O.modalFooter,
    children: (0, r.jsxs)("div", {
      className: O.buttonsRight,
      children: [(0, r.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: A.default.Messages.CANCEL
      }), (() => {
        let e = null != i && (!(0, d.isPremiumCollectiblesPurchase)(i) || C);
        if (e || null === h) return (0, r.jsx)(a.Button, {
          onClick: s,
          disabled: f,
          children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let l = C || !(0, d.isPremiumCollectiblesProduct)(n);
        return l ? (0, r.jsx)(a.Button, {
          className: O.modalFooterShopButton,
          onClick: L,
          children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, r.jsx)(E.default, {
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
    categories: n,
    purchases: i,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: C
  } = e, E = (0, s.useStateFromStores)([I.default], () => I.default.getPendingProfileEffectId()), [p, L] = l.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, i);
    return [e.purchased, e.shopPreviews]
  }, [n, i]), [v, T] = l.useState(() => null != u ? u : void 0 !== E ? E : null == c ? null : null != c ? c : null), [m, P] = l.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === v),
      n = null != t || null === v,
      r = null !== (e = null != t ? t : L.find(e => (null == e ? void 0 : e.id) === v)) && void 0 !== e ? e : null;
    return [r, n]
  }, [v, p, L]), {
    product: R,
    purchase: y
  } = (0, f.default)(null == m ? void 0 : m.skuId), x = l.useRef(null), F = _.default.canUseCollectibles(t), w = v === (void 0 === E ? null != c ? c : null : E), M = l.useCallback(e => {
    T(e)
  }, [T]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalHeader, {
      separator: !1,
      className: O.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: A.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, r.jsx)(a.ModalCloseButton, {
        className: O.modalCloseButton,
        onClick: o
      })]
    }), (0, r.jsxs)(a.ModalContent, {
      className: O.modalContent,
      children: [(0, r.jsx)(g.default, {
        user: t,
        pendingProfileEffect: v,
        selectedProfileEffectRef: x,
        onSelect: M,
        onClose: o
      }), (0, r.jsx)(S.default, {
        user: t,
        canApplySelectedChange: P,
        pendingProfileEffectRecord: m,
        product: R,
        purchase: y
      })]
    }), (0, r.jsx)(N, {
      user: t,
      onApply: () => {
        (0, h.setNewPendingProfileEffectId)(v, c), o()
      },
      onClose: o,
      product: R,
      purchase: y,
      canUseCollectibles: F,
      selectedProfileEffectId: v,
      selectedProfileEffectItem: m,
      disableApplyButton: w,
      analyticsLocations: C
    })]
  })
}

function R(e) {
  var t;
  let {
    transitionState: n,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: E
  } = e, {
    isFetching: h,
    categories: I,
    purchases: _
  } = (0, C.default)(), S = (0, s.useStateFromStores)([L.default], () => L.default.getCurrentUser()), {
    AnalyticsLocationProvider: g,
    analyticsLocations: m
  } = (0, u.default)(d, o.default.EDIT_PROFILE_EFFECT_MODAL), A = (0, p.default)(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : ""), N = null == A ? void 0 : A.profileEffectId;
  return l.useEffect(() => {
    v.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: T.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: m
    })
  }, [m]), l.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [I]), null == S ? null : (0, r.jsx)(g, {
    children: (0, r.jsx)(a.ModalRoot, {
      transitionState: n,
      size: a.ModalSize.DYNAMIC,
      className: O.modal,
      children: h ? (0, r.jsx)(a.Spinner, {
        className: O.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(P, {
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