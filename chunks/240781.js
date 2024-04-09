"use strict";
a.r(t), a("627341");
var s = a("735250");
a("470079");
var r = a("803997"),
  l = a.n(r),
  i = a("278074"),
  o = a("442837"),
  n = a("481060"),
  u = a("884697"),
  c = a("449217"),
  d = a("706454"),
  h = a("158776"),
  m = a("74538"),
  f = a("204418"),
  C = a("689938"),
  g = a("847531");
let v = [{
    avatarSize: n.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: n.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: n.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: n.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  E = e => {
    let {
      purchase: t
    } = e, a = (0, o.useStateFromStores)([d.default], () => d.default.locale), r = (0, u.isPremiumCollectiblesPurchase)(t);
    return (0, s.jsxs)("div", {
      className: g.purchaseInfo,
      children: [(0, s.jsx)(n.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, s.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, s.jsxs)(n.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [C.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(a, {
            month: "long",
            year: "numeric"
          })
        }), r && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("br", {}), C.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    avatarDecorationOverride: a,
    className: r
  } = e, d = (0, o.useStateFromStores)([h.default], () => h.default.getStatus(t.id)), {
    product: S,
    purchase: p
  } = (0, c.default)(null == a ? void 0 : a.skuId), A = m.default.canUseCollectibles(t), _ = (0, u.isPremiumCollectiblesPurchase)(p), I = (0, u.isPremiumCollectiblesProduct)(S), x = !A && _;
  return null != S && (null == p || x) ? (0, s.jsxs)("div", {
    className: l()(g.modalPreview, g.shopPreviewContainer, r),
    children: [(0, s.jsx)("div", {
      className: g.shopPreviewBanner,
      children: (0, s.jsx)(f.default, {
        user: t,
        avatarDecorationOverride: a
      })
    }), (0, s.jsxs)("div", {
      className: g.shopPreviewTextContainer,
      children: [(0, s.jsx)(n.Text, {
        variant: "text-sm/semibold",
        children: S.name
      }), (0, s.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: x ? C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([I, A]).with([!0, !0], () => C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, s.jsxs)("div", {
    className: l()(g.modalPreview, r),
    children: [(0, s.jsxs)("div", {
      className: g.previewSections,
      children: [(0, s.jsx)("div", {
        className: g.decorationPreview,
        children: (0, s.jsx)(f.default, {
          user: t,
          avatarDecorationOverride: a
        })
      }), (0, s.jsx)("div", {
        className: g.smallDecorationPreviewsContainer,
        children: v.map(e => {
          let {
            avatarSize: r,
            showStatus: l
          } = e;
          return (0, s.jsx)("div", {
            className: g.smallDecorationPreview,
            children: (0, s.jsx)(f.default, {
              user: t,
              avatarSize: r,
              avatarDecorationOverride: a,
              status: l ? d : void 0,
              "aria-hidden": !0
            })
          }, "".concat(r).concat(l))
        })
      })]
    }), null != p && (0, s.jsx)(E, {
      purchase: p
    })]
  })
}