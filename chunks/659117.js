"use strict";
r.r(t), r.d(t, {
  default: function() {
    return S
  }
}), r("794252");
var a = r("37983");
r("884691");
var n = r("414456"),
  s = r.n(n),
  i = r("506838"),
  u = r("446674"),
  o = r("77078"),
  l = r("491232"),
  c = r("984002"),
  d = r("716120"),
  f = r("915639"),
  E = r("824563"),
  m = r("719923"),
  p = r("795158"),
  C = r("782340"),
  _ = r("632000");
let g = [{
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
  A = e => {
    let {
      purchase: t
    } = e, r = (0, u.useStateFromStores)([f.default], () => f.default.locale), n = (0, l.isPremiumCollectiblesPurchase)(t);
    return (0, a.jsxs)("div", {
      className: _.purchaseInfo,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, a.jsxs)(o.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [C.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
          })
        }), n && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("br", {}), C.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
var S = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    className: n
  } = e, f = (0, u.useStateFromStores)([E.default], () => E.default.getStatus(t.id)), {
    category: S,
    product: h,
    purchase: v
  } = (0, c.default)(null == r ? void 0 : r.skuId), I = m.default.canUseCollectibles(t), N = (0, l.isPremiumCollectiblesPurchase)(v), T = (0, l.isPremiumCollectiblesProduct)(h), x = !I && N;
  return null != h && (null == v || x) ? (0, a.jsxs)("div", {
    className: s(_.modalPreview, _.shopPreviewContainer, n),
    children: [(0, a.jsx)(d.default, {
      asset: null == S ? void 0 : S.banner,
      className: _.shopPreviewBanner,
      children: (0, a.jsx)(p.default, {
        user: t,
        avatarDecorationOverride: r
      })
    }), (0, a.jsxs)("div", {
      className: _.shopPreviewTextContainer,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: h.name
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: x ? C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([T, I]).with([!0, !0], () => C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => C.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, a.jsxs)("div", {
    className: s(_.modalPreview, n),
    children: [(0, a.jsxs)("div", {
      className: _.previewSections,
      children: [(0, a.jsx)("div", {
        className: _.decorationPreview,
        children: (0, a.jsx)(p.default, {
          user: t,
          avatarDecorationOverride: r
        })
      }), (0, a.jsx)("div", {
        className: _.smallDecorationPreviewsContainer,
        children: g.map(e => {
          let {
            avatarSize: n,
            showStatus: s
          } = e;
          return (0, a.jsx)("div", {
            className: _.smallDecorationPreview,
            children: (0, a.jsx)(p.default, {
              user: t,
              avatarSize: n,
              avatarDecorationOverride: r,
              status: s ? f : void 0,
              "aria-hidden": !0
            })
          }, "".concat(n).concat(s))
        })
      })]
    }), null != v && (0, a.jsx)(A, {
      purchase: v
    })]
  })
}