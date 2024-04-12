"use strict";
a.r(t), a("627341");
var s = a("735250");
a("470079");
var r = a("803997"),
  l = a.n(r),
  i = a("278074"),
  n = a("442837"),
  o = a("481060"),
  u = a("884697"),
  c = a("449217"),
  d = a("706454"),
  h = a("158776"),
  f = a("74538"),
  m = a("204418"),
  g = a("689938"),
  C = a("847531");
let v = [{
    avatarSize: o.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: o.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: o.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: o.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  E = e => {
    let {
      purchase: t
    } = e, a = (0, n.useStateFromStores)([d.default], () => d.default.locale), r = (0, u.isPremiumCollectiblesPurchase)(t);
    return (0, s.jsxs)("div", {
      className: C.purchaseInfo,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, s.jsxs)(o.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [g.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(a, {
            month: "long",
            year: "numeric"
          })
        }), r && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("br", {}), g.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guildId: a,
    avatarDecorationOverride: r,
    className: d
  } = e, S = (0, n.useStateFromStores)([h.default], () => h.default.getStatus(t.id)), {
    product: p,
    purchase: A
  } = (0, c.default)(null == r ? void 0 : r.skuId), I = f.default.canUseCollectibles(t), _ = (0, u.isPremiumCollectiblesPurchase)(A), x = (0, u.isPremiumCollectiblesProduct)(p), P = !I && _;
  return null != p && (null == A || P) ? (0, s.jsxs)("div", {
    className: l()(C.modalPreview, C.shopPreviewContainer, d),
    children: [(0, s.jsx)("div", {
      className: C.shopPreviewBanner,
      children: (0, s.jsx)(m.default, {
        user: t,
        guildId: a,
        avatarDecorationOverride: r
      })
    }), (0, s.jsxs)("div", {
      className: C.shopPreviewTextContainer,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: p.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: P ? g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([x, I]).with([!0, !0], () => g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, s.jsxs)("div", {
    className: l()(C.modalPreview, d),
    children: [(0, s.jsxs)("div", {
      className: C.previewSections,
      children: [(0, s.jsx)("div", {
        className: C.decorationPreview,
        children: (0, s.jsx)(m.default, {
          user: t,
          guildId: a,
          avatarDecorationOverride: r
        })
      }), (0, s.jsx)("div", {
        className: C.smallDecorationPreviewsContainer,
        children: v.map(e => {
          let {
            avatarSize: l,
            showStatus: i
          } = e;
          return (0, s.jsx)("div", {
            className: C.smallDecorationPreview,
            children: (0, s.jsx)(m.default, {
              user: t,
              guildId: a,
              avatarSize: l,
              avatarDecorationOverride: r,
              status: i ? S : void 0,
              "aria-hidden": !0
            })
          }, "".concat(l).concat(i))
        })
      })]
    }), null != A && (0, s.jsx)(E, {
      purchase: A
    })]
  })
}