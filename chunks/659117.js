"use strict";
r.r(t), r.d(t, {
  default: function() {
    return _
  }
}), r("794252");
var a = r("37983");
r("884691");
var n = r("414456"),
  u = r.n(n),
  i = r("506838"),
  l = r("446674"),
  s = r("77078"),
  o = r("491232"),
  c = r("984002"),
  d = r("716120"),
  f = r("915639"),
  E = r("824563"),
  m = r("719923"),
  p = r("795158"),
  S = r("782340"),
  C = r("295166");
let h = [{
    avatarSize: s.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: s.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: s.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: s.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  I = e => {
    let {
      purchase: t
    } = e, r = (0, l.useStateFromStores)([f.default], () => f.default.locale), n = (0, o.isPremiumCollectiblesPurchase)(t);
    return (0, a.jsxs)("div", {
      className: C.purchaseInfo,
      children: [(0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, a.jsxs)(s.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [S.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
          })
        }), n && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("br", {}), S.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
var _ = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    className: n
  } = e, f = (0, l.useStateFromStores)([E.default], () => E.default.getStatus(t.id)), {
    category: _,
    product: g,
    purchase: T
  } = (0, c.default)(null == r ? void 0 : r.skuId), v = m.default.canUseCollectibles(t), A = (0, o.isPremiumCollectiblesPurchase)(T), P = (0, o.isPremiumCollectiblesProduct)(g), R = !v && A;
  return null != g && (null == T || R) ? (0, a.jsxs)("div", {
    className: u(C.modalPreview, C.shopPreviewContainer, n),
    children: [(0, a.jsx)(d.default, {
      asset: null == _ ? void 0 : _.banner,
      className: C.shopPreviewBanner,
      children: (0, a.jsx)(p.default, {
        user: t,
        avatarDecorationOverride: r
      })
    }), (0, a.jsxs)("div", {
      className: C.shopPreviewTextContainer,
      children: [(0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: g.name
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: R ? S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([P, v]).with([!0, !0], () => S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, a.jsxs)("div", {
    className: u(C.modalPreview, n),
    children: [(0, a.jsxs)("div", {
      className: C.previewSections,
      children: [(0, a.jsx)("div", {
        className: C.decorationPreview,
        children: (0, a.jsx)(p.default, {
          user: t,
          avatarDecorationOverride: r
        })
      }), (0, a.jsx)("div", {
        className: C.smallDecorationPreviewsContainer,
        children: h.map(e => {
          let {
            avatarSize: n,
            showStatus: u
          } = e;
          return (0, a.jsx)("div", {
            className: C.smallDecorationPreview,
            children: (0, a.jsx)(p.default, {
              user: t,
              avatarSize: n,
              avatarDecorationOverride: r,
              status: u ? f : void 0,
              "aria-hidden": !0
            })
          }, "".concat(n).concat(u))
        })
      })]
    }), null != T && (0, a.jsx)(I, {
      purchase: T
    })]
  })
}