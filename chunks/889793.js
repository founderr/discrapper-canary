"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("265586"),
  s = n("446674"),
  a = n("77078"),
  o = n("812204"),
  u = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  C = n("635956"),
  E = n("906932"),
  p = n("217513"),
  v = n("790618"),
  g = n("697218"),
  I = n("599110"),
  _ = n("719923"),
  m = n("717262"),
  N = n("598854"),
  T = n("49111"),
  S = n("646718"),
  L = n("782340"),
  A = n("811855");

function x(e) {
  let {
    user: t,
    product: n,
    purchase: r,
    onApply: s,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: E,
    selectedProfileEffectItem: p,
    analyticsLocations: v
  } = e, g = l.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: v,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [u, v, p]);
  return (0, i.jsx)(a.ModalFooter, {
    className: A.modalFooter,
    children: (0, i.jsxs)("div", {
      className: A.buttonsRight,
      children: [(0, i.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: L.default.Messages.CANCEL
      }), (() => {
        let e = null != r && (!(0, d.isPremiumCollectiblesPurchase)(r) || h);
        if (e || null === E) return (0, i.jsx)(a.Button, {
          onClick: s,
          disabled: f,
          children: L.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let l = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return l ? (0, i.jsx)(a.Button, {
          className: A.modalFooterShopButton,
          onClick: g,
          children: L.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, i.jsx)(C.default, {
          subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
          buttonText: _.default.isPremium(t) ? L.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : L.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function P(e) {
  let {
    user: t,
    categories: n,
    purchases: r,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, C = (0, s.useStateFromStores)([v.default], () => v.default.getPendingProfileEffectId()), [p, g] = l.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, r);
    return [e.purchased, e.shopPreviews]
  }, [n, r]), [I, T] = l.useState(() => null != u ? u : void 0 !== C ? C : null == c ? null : null != c ? c : null), [S, P] = l.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === I),
      n = null != t || null === I,
      i = null !== (e = null != t ? t : g.find(e => (null == e ? void 0 : e.id) === I)) && void 0 !== e ? e : null;
    return [i, n]
  }, [I, p, g]), {
    product: R,
    purchase: O
  } = (0, f.default)(null == S ? void 0 : S.skuId), M = l.useRef(null), F = _.default.canUseCollectibles(t), w = I === (void 0 === C ? null != c ? c : null : C), j = l.useCallback(e => {
    T(e)
  }, [T]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(a.ModalHeader, {
      separator: !1,
      className: A.modalHeader,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: L.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, i.jsx)(a.ModalCloseButton, {
        className: A.modalCloseButton,
        onClick: o
      })]
    }), (0, i.jsxs)(a.ModalContent, {
      className: A.modalContent,
      children: [(0, i.jsx)(N.default, {
        user: t,
        pendingProfileEffect: I,
        selectedProfileEffectRef: M,
        onSelect: j,
        onClose: o
      }), (0, i.jsx)(m.default, {
        user: t,
        canApplySelectedChange: P,
        pendingProfileEffectRecord: S,
        product: R,
        purchase: O
      })]
    }), (0, i.jsx)(x, {
      user: t,
      onApply: () => {
        (0, E.setNewPendingProfileEffectId)(I, c), o()
      },
      onClose: o,
      product: R,
      purchase: O,
      canUseCollectibles: F,
      selectedProfileEffectId: I,
      selectedProfileEffectItem: S,
      disableApplyButton: w,
      analyticsLocations: h
    })]
  })
}

function R(e) {
  var t;
  let {
    transitionState: n,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: C
  } = e, {
    isFetching: E,
    categories: v,
    purchases: _
  } = (0, h.default)(), m = (0, s.useStateFromStores)([g.default], () => g.default.getCurrentUser()), {
    AnalyticsLocationProvider: N,
    analyticsLocations: S
  } = (0, u.default)(d, o.default.EDIT_PROFILE_EFFECT_MODAL), L = (0, p.default)(null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : ""), x = null == L ? void 0 : L.profileEffectId;
  return l.useEffect(() => {
    I.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: T.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: S
    })
  }, [S]), l.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...v.values()],
      itemTypes: [r.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [v]), null == m ? null : (0, i.jsx)(N, {
    children: (0, i.jsx)(a.ModalRoot, {
      transitionState: n,
      size: a.ModalSize.DYNAMIC,
      className: A.modal,
      children: E ? (0, i.jsx)(a.Spinner, {
        className: A.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, i.jsx)(P, {
        user: m,
        categories: v,
        purchases: _,
        initialSelectedProfileEffectId: f,
        currentSavedEffectId: x,
        onClose: C,
        analyticsLocations: S
      })
    })
  })
}