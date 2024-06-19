s.r(l), s.d(l, {
  default: function() {
    return A
  }
}), s(47120);
var n = s(735250),
  t = s(470079),
  r = s(979554),
  i = s(442837),
  a = s(481060),
  o = s(100527),
  c = s(906732),
  u = s(335131),
  d = s(884697),
  m = s(449217),
  E = s(566111),
  h = s(197115),
  f = s(150039),
  p = s(594174),
  g = s(626135),
  I = s(74538),
  C = s(934261),
  x = s(52268),
  _ = s(981631),
  v = s(474936),
  P = s(689938),
  N = s(408156);

function R(e) {
  let {
    user: l,
    product: s,
    purchase: r,
    onApply: i,
    onClose: c,
    disableApplyButton: m,
    canUseCollectibles: E,
    selectedProfileEffectId: f,
    selectedProfileEffectItem: p,
    analyticsLocations: g
  } = e, C = t.useCallback(() => {
    c(), (0, u.mK)({
      analyticsLocations: g,
      analyticsSource: o.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [c, g, p]);
  return (0, n.jsx)(a.ModalFooter, {
    className: N.modalFooter,
    children: (0, n.jsxs)("div", {
      className: N.buttonsRight,
      children: [(0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: c,
        children: P.Z.Messages.CANCEL
      }), null != r && (!(0, d.qS)(r) || E) || null === f ? (0, n.jsx)(a.Button, {
        onClick: i,
        disabled: m,
        children: P.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : E || !(0, d.G1)(s) ? (0, n.jsx)(a.Button, {
        className: N.__invalid_modalFooterShopButton,
        onClick: C,
        children: P.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, n.jsx)(h.Z, {
        subscriptionTier: v.Si.TIER_2,
        buttonText: I.ZP.isPremium(l) ? P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      })]
    })
  })
}

function S(e) {
  let {
    user: l,
    guild: s,
    categories: r,
    purchases: i,
    onClose: o,
    initialSelectedProfileEffectId: c,
    currentSavedEffectId: u,
    analyticsLocations: E
  } = e, {
    pendingProfileEffectId: h
  } = (0, f.bd)(s), [p, g] = t.useMemo(() => {
    let e = (0, d.bl)(r, i);
    return [e.purchased, e.shopPreviews]
  }, [r, i]), [_, v] = t.useState(() => null != c ? c : void 0 !== h ? h : null == u ? null : null != u ? u : null), [S, A] = t.useMemo(() => {
    var e;
    let l = p.find(e => (null == e ? void 0 : e.id) === _),
      s = null != l || null === _;
    return [null !== (e = null != l ? l : g.find(e => (null == e ? void 0 : e.id) === _)) && void 0 !== e ? e : null, s]
  }, [_, p, g]), {
    product: Z,
    purchase: j
  } = (0, m.Z)(null == S ? void 0 : S.skuId), M = t.useRef(null), T = I.ZP.canUseCollectibles(l), O = _ === (void 0 === h ? null != u ? u : null : h), U = t.useCallback(e => {
    v(e)
  }, [v]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.ModalHeader, {
      separator: !1,
      className: N.modalHeader,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: P.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, n.jsx)(a.ModalCloseButton, {
        className: N.modalCloseButton,
        onClick: o
      })]
    }), (0, n.jsxs)(a.ModalContent, {
      className: N.modalContent,
      children: [(0, n.jsx)(x.Z, {
        user: l,
        guild: s,
        pendingProfileEffect: _,
        selectedProfileEffectRef: M,
        onSelect: U,
        onClose: o
      }), (0, n.jsx)(C.Z, {
        user: l,
        canApplySelectedChange: A,
        pendingProfileEffectRecord: S,
        product: Z,
        purchase: j,
        guild: s
      })]
    }), (0, n.jsx)(R, {
      user: l,
      onApply: () => {
        (0, f.s6)(_, u, s), o()
      },
      onClose: o,
      product: Z,
      purchase: j,
      canUseCollectibles: T,
      selectedProfileEffectId: _,
      selectedProfileEffectItem: S,
      disableApplyButton: O,
      analyticsLocations: E
    })]
  })
}

function A(e) {
  let {
    transitionState: l,
    analyticsLocations: s,
    initialSelectedEffectId: d,
    guild: m,
    onClose: h
  } = e, {
    isFetching: I,
    categories: C,
    purchases: x
  } = (0, E.Z)(), v = (0, i.e7)([p.default], () => p.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, c.ZP)(s, o.Z.EDIT_PROFILE_EFFECT_MODAL), R = (0, f.Kg)(v, m);
  return t.useEffect(() => {
    g.default.track(_.rMx.OPEN_MODAL, {
      type: _.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: P
    })
  }, [P]), t.useEffect(() => () => {
    (0, u.K$)({
      categories: [...C.values()],
      itemTypes: [r.Z.PROFILE_EFFECT]
    })
  }, [C]), (0, n.jsx)(c.Gt, {
    value: P,
    children: (0, n.jsx)(a.ModalRoot, {
      transitionState: l,
      className: N.modal,
      size: I ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
      children: I ? (0, n.jsx)(a.Spinner, {
        className: N.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(S, {
        user: v,
        guild: m,
        categories: C,
        purchases: x,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: R,
        onClose: h,
        analyticsLocations: P
      })
    })
  })
}