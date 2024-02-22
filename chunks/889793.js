"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  p = n("697218"),
  v = n("599110"),
  m = n("719923"),
  _ = n("717262"),
  S = n("598854"),
  g = n("49111"),
  I = n("646718"),
  A = n("782340"),
  T = n("810473");

function N(e) {
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
  } = e, _ = i.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: v,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [u, v, p]);
  return (0, r.jsx)(a.ModalFooter, {
    className: T.modalFooter,
    children: (0, r.jsxs)("div", {
      className: T.buttonsRight,
      children: [(0, r.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: A.default.Messages.CANCEL
      }), (() => {
        let e = null != s && (!(0, d.isPremiumCollectiblesPurchase)(s) || h);
        if (e || null === C) return (0, r.jsx)(a.Button, {
          onClick: l,
          disabled: f,
          children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let i = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return i ? (0, r.jsx)(a.Button, {
          className: T.modalFooterShopButton,
          onClick: _,
          children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, r.jsx)(E.default, {
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
          buttonText: m.default.isPremium(t) ? A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function P(e) {
  let {
    user: t,
    guild: n,
    categories: s,
    purchases: l,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, {
    pendingProfileEffectId: E
  } = (0, C.useGlobalOrGuildIdentityPendingProfileEffect)(n), [p, v] = i.useMemo(() => {
    let e = (0, d.groupProfileEffects)(s, l);
    return [e.purchased, e.shopPreviews]
  }, [s, l]), [g, I] = i.useState(() => null != u ? u : void 0 !== E ? E : null == c ? null : null != c ? c : null), [P, R] = i.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === g),
      n = null != t || null === g,
      r = null !== (e = null != t ? t : v.find(e => (null == e ? void 0 : e.id) === g)) && void 0 !== e ? e : null;
    return [r, n]
  }, [g, p, v]), {
    product: L,
    purchase: x
  } = (0, f.default)(null == P ? void 0 : P.skuId), M = i.useRef(null), O = m.default.canUseCollectibles(t), w = g === (void 0 === E ? null != c ? c : null : E), y = i.useCallback(e => {
    I(e)
  }, [I]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalHeader, {
      separator: !1,
      className: T.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: A.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, r.jsx)(a.ModalCloseButton, {
        className: T.modalCloseButton,
        onClick: o
      })]
    }), (0, r.jsxs)(a.ModalContent, {
      className: T.modalContent,
      children: [(0, r.jsx)(S.default, {
        user: t,
        guild: n,
        pendingProfileEffect: g,
        selectedProfileEffectRef: M,
        onSelect: y,
        onClose: o
      }), (0, r.jsx)(_.default, {
        user: t,
        canApplySelectedChange: R,
        pendingProfileEffectRecord: P,
        product: L,
        purchase: x
      })]
    }), (0, r.jsx)(N, {
      user: t,
      onApply: () => {
        (0, C.setNewPendingProfileEffectId)(g, c, n), o()
      },
      onClose: o,
      product: L,
      purchase: x,
      canUseCollectibles: O,
      selectedProfileEffectId: g,
      selectedProfileEffectItem: P,
      disableApplyButton: w,
      analyticsLocations: h
    })]
  })
}

function R(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffectId: d,
    guild: f,
    onClose: E
  } = e, {
    isFetching: m,
    categories: _,
    purchases: S
  } = (0, h.default)(), I = (0, l.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
    AnalyticsLocationProvider: A,
    analyticsLocations: N
  } = (0, u.default)(n, o.default.EDIT_PROFILE_EFFECT_MODAL), R = (0, C.useGlobalOrGuildIdentityProfileEffect)(I, f);
  return i.useEffect(() => {
    v.default.track(g.AnalyticEvents.OPEN_MODAL, {
      type: g.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: N
    })
  }, [N]), i.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [..._.values()],
      itemTypes: [s.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [_]), (0, r.jsx)(A, {
    children: (0, r.jsx)(a.ModalRoot, {
      transitionState: t,
      size: a.ModalSize.DYNAMIC,
      className: T.modal,
      children: m ? (0, r.jsx)(a.Spinner, {
        className: T.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(P, {
        user: I,
        guild: f,
        categories: _,
        purchases: S,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: R,
        onClose: E,
        analyticsLocations: N
      })
    })
  })
}