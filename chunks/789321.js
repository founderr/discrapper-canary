"use strict";
l.r(t), l.d(t, {
  DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
    return b
  },
  default: function() {
    return y
  }
}), l("222007"), l("794252");
var s = l("37983"),
  i = l("884691"),
  n = l("414456"),
  u = l.n(n),
  a = l("506838"),
  o = l("65597"),
  r = l("77078"),
  d = l("731898"),
  c = l("206230"),
  f = l("812204"),
  _ = l("685665"),
  S = l("606292"),
  T = l("688318"),
  E = l("21526"),
  C = l("853987"),
  p = l("491232"),
  m = l("845962"),
  I = l("697218"),
  L = l("945330"),
  P = l("719923"),
  v = l("627601"),
  O = l("994428"),
  h = l("782340"),
  A = l("304118"),
  g = l("604689");

function U(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsx)(r.Clickable, {
    className: A.closeButton,
    onClick: t,
    "aria-label": h.default.Messages.DISMISS,
    children: (0, s.jsx)(L.default, {
      className: A.closeIcon,
      width: 18,
      height: 18
    })
  })
}
let b = 76,
  R = e => (0, s.jsx)(r.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    tag: "span",
    className: A.ctaLink,
    children: e
  }),
  D = e => {
    let {
      user: t,
      onClick: l
    } = e, {
      avatarDecorationSrc: i
    } = (0, T.default)({
      user: t,
      size: (0, S.getDecorationSizeForAvatarSize)(r.AvatarSizes.SIZE_48)
    });
    return (0, s.jsx)(r.Clickable, {
      className: A.avatarButton,
      onClick: l,
      "aria-label": h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
      children: (0, s.jsx)(r.Avatar, {
        src: g,
        avatarDecoration: i,
        size: r.AvatarSizes.SIZE_48,
        "aria-hidden": !0
      })
    })
  };
var y = e => {
  var t;
  let {
    user: l,
    displayProfile: n,
    onClose: S,
    onDismiss: T,
    isInSidebar: L = !1,
    canShowAvatarDecorationUpsell: g = !1,
    canShowProfileEffectUpsell: y = !1,
    upsellSource: N
  } = e, {
    analyticsLocations: M
  } = (0, _.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL), x = (0, o.default)([c.default], () => c.default.useReducedMotion), {
    ref: k,
    height: F
  } = (0, d.default)(), B = i.useMemo(() => ({
    top: "-".concat((null != F ? F : b) + 6, "px")
  }), [F]), j = (0, o.default)([I.default], () => I.default.getCurrentUser()), w = P.default.canUseCollectibles(j), {
    setUpsellSource: H,
    reset: G
  } = (0, v.useUserPopoutCollectiblesUpsellStore)();
  i.useEffect(() => (H(N), () => {
    G()
  }), [H, N, G]);
  let Y = (0, o.default)([m.default], () => m.default.getProfileEffectById(null == n ? void 0 : n.profileEffectId)),
    [z, V] = (0, o.useStateFromStoresArray)([C.default], () => {
      var e;
      return [(0, p.isPremiumCollectiblesProduct)(C.default.getProduct(null === (e = l.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, p.isPremiumCollectiblesProduct)(C.default.getProduct(null == Y ? void 0 : Y.skuId))]
    }),
    W = i.useCallback(() => {
      var e, t, s, i;
      null == T || T(O.ContentDismissActionType.PRIMARY), null == S || S(), (0, E.openCollectiblesShop)({
        analyticsLocations: M,
        analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
        initialProductSkuId: z ? null !== (s = null == Y ? void 0 : Y.skuId) && void 0 !== s ? s : null === (e = l.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (i = null === (t = l.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : null == Y ? void 0 : Y.skuId
      })
    }, [T, S, M, null == Y ? void 0 : Y.skuId, null === (t = l.avatarDecoration) || void 0 === t ? void 0 : t.skuId, z]),
    K = i.useCallback(() => {
      null == T || T(O.ContentDismissActionType.DISMISS)
    }, [T]);
  if (!g && !y) return null;
  let J = (0, a.match)([g, y]).with([!0, !0], () => z && V && w ? h.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
    openShop: R
  }) : z && V ? h.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
    openShop: R
  }) : h.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
    openShop: R
  })).with([!0, !1], () => z && w ? h.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
    openShop: R
  }) : h.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
    openShop: R
  })).with([!1, !0], () => V && w ? h.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
    openShop: R
  }) : (V && h.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
    openShop: R
  }), h.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
    openShop: R
  }))).otherwise(() => null);
  return (0, s.jsx)("div", {
    style: B,
    className: u(A.containerWrapper, {
      [A.animation]: !x,
      [A.inSidebar]: L
    }),
    ref: k,
    children: (0, s.jsxs)("div", {
      className: A.container,
      children: [g && (0, s.jsx)(D, {
        user: l,
        onClick: W
      }), (0, s.jsx)(r.Clickable, {
        className: g ? A.contentWithAvatar : A.content,
        onClick: W,
        "aria-label": h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
        children: (0, s.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          tag: "span",
          children: J
        })
      }), (0, s.jsx)("div", {
        className: A.buttons,
        children: (0, s.jsx)(U, {
          onClick: K
        })
      })]
    })
  })
}