"use strict";
n.d(t, {
  Ao: function() {
    return L
  }
}), n(47120), n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(399606),
  u = n(481060),
  _ = n(393238),
  c = n(607070),
  d = n(100527),
  E = n(906732),
  I = n(1585),
  T = n(125988),
  h = n(335131),
  f = n(597688),
  S = n(884697),
  A = n(731896),
  N = n(594174),
  m = n(74538),
  O = n(436478),
  p = n(921944),
  R = n(689938),
  g = n(530086),
  C = n(174492);

function v(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(u.Clickable, {
    className: g.closeButton,
    onClick: t,
    "aria-label": R.Z.Messages.DISMISS,
    children: (0, i.jsx)(u.CloseSmallIcon, {
      size: "sm",
      color: "currentColor",
      className: g.closeIcon
    })
  })
}
let L = 76,
  D = e => (0, i.jsx)(u.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    tag: "span",
    className: g.ctaLink,
    children: e
  }),
  M = e => {
    let {
      user: t,
      onClick: n
    } = e, {
      avatarDecorationSrc: r
    } = (0, T.Z)({
      user: t,
      size: (0, I.y9)(u.AvatarSizes.SIZE_48)
    });
    return (0, i.jsx)(u.Clickable, {
      className: g.avatarButton,
      onClick: n,
      "aria-label": R.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
      children: (0, i.jsx)(u.Avatar, {
        src: C,
        avatarDecoration: r,
        size: u.AvatarSizes.SIZE_48,
        "aria-hidden": !0
      })
    })
  };
t.ZP = e => {
  var t;
  let {
    user: n,
    displayProfile: s,
    onClose: I,
    onDismiss: T,
    isInSidebar: C = !1,
    canShowAvatarDecorationUpsell: P = !1,
    canShowProfileEffectUpsell: y = !1,
    upsellSource: U
  } = e, {
    analyticsLocations: b
  } = (0, E.ZP)(d.Z.COLLECTIBLES_USER_POPOUT_UPSELL), G = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
    ref: w,
    height: x
  } = (0, _.Z)(), B = r.useMemo(() => ({
    top: "-".concat((null != x ? x : L) + 6, "px")
  }), [x]), k = (0, l.e7)([N.default], () => N.default.getCurrentUser()), V = m.ZP.canUseCollectibles(k), {
    setUpsellSource: Z,
    reset: H
  } = (0, O.k)();
  r.useEffect(() => (Z(U), () => {
    H()
  }), [Z, U, H]);
  let F = (0, A.V)(null == s ? void 0 : s.profileEffectId),
    [Y, j] = (0, l.Wu)([f.Z], () => {
      var e;
      return [(0, S.G1)(f.Z.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, S.G1)(f.Z.getProduct(null == F ? void 0 : F.skuId))]
    }),
    W = r.useCallback(() => {
      var e, t, i, r;
      null == T || T(p.L.PRIMARY), null == I || I(), (0, h.mK)({
        analyticsLocations: b,
        analyticsSource: d.Z.COLLECTIBLES_USER_POPOUT_UPSELL,
        initialProductSkuId: Y ? null !== (i = null == F ? void 0 : F.skuId) && void 0 !== i ? i : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (r = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== r ? r : null == F ? void 0 : F.skuId
      })
    }, [T, I, b, null == F ? void 0 : F.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, Y]),
    K = r.useCallback(() => {
      null == T || T(p.L.DISMISS)
    }, [T]);
  if (!P && !y) return null;
  let z = (0, a.EQ)([P, y]).with([!0, !0], () => Y && j && V ? R.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
    openShop: D
  }) : Y && j ? R.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
    openShop: D
  }) : R.Z.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
    openShop: D
  })).with([!0, !1], () => Y && V ? R.Z.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
    openShop: D
  }) : R.Z.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
    openShop: D
  })).with([!1, !0], () => j && V ? R.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
    openShop: D
  }) : (j && R.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
    openShop: D
  }), R.Z.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
    openShop: D
  }))).otherwise(() => null);
  return (0, i.jsx)("div", {
    style: B,
    className: o()(g.containerWrapper, {
      [g.animation]: !G,
      [g.inSidebar]: C
    }),
    ref: w,
    children: (0, i.jsxs)("div", {
      className: g.container,
      children: [P && (0, i.jsx)(M, {
        user: n,
        onClick: W
      }), (0, i.jsx)(u.Clickable, {
        className: P ? g.contentWithAvatar : g.content,
        onClick: W,
        "aria-label": R.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
        children: (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          tag: "span",
          children: z
        })
      }), (0, i.jsx)("div", {
        className: g.buttons,
        children: (0, i.jsx)(v, {
          onClick: K
        })
      })]
    })
  })
}