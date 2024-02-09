"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("794252");
var a = r("37983");
r("884691");
var s = r("414456"),
  n = r.n(s),
  i = r("506838"),
  l = r("446674"),
  u = r("77078"),
  o = r("491232"),
  c = r("984002"),
  d = r("716120"),
  f = r("915639"),
  E = r("824563"),
  m = r("719923"),
  C = r("795158"),
  p = r("782340"),
  _ = r("632000");
let S = [{
    avatarSize: u.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: u.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: u.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: u.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  A = e => {
    let {
      purchase: t
    } = e, r = (0, l.useStateFromStores)([f.default], () => f.default.locale), s = (0, o.isPremiumCollectiblesPurchase)(t);
    return (0, a.jsxs)("div", {
      className: _.purchaseInfo,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, a.jsxs)(u.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [p.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
          })
        }), s && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("br", {}), p.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
var g = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    className: s
  } = e, f = (0, l.useStateFromStores)([E.default], () => E.default.getStatus(t.id)), {
    category: g,
    product: h,
    purchase: v
  } = (0, c.default)(null == r ? void 0 : r.skuId), I = m.default.canUseCollectibles(t), N = (0, o.isPremiumCollectiblesPurchase)(v), T = (0, o.isPremiumCollectiblesProduct)(h), x = !I && N;
  return null != h && (null == v || x) ? (0, a.jsxs)("div", {
    className: n(_.modalPreview, _.shopPreviewContainer, s),
    children: [(0, a.jsx)(d.default, {
      asset: null == g ? void 0 : g.banner,
      className: _.shopPreviewBanner,
      children: (0, a.jsx)(C.default, {
        user: t,
        avatarDecorationOverride: r
      })
    }), (0, a.jsxs)("div", {
      className: _.shopPreviewTextContainer,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-sm/semibold",
        children: h.name
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: x ? p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([T, I]).with([!0, !0], () => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, a.jsxs)("div", {
    className: n(_.modalPreview, s),
    children: [(0, a.jsxs)("div", {
      className: _.previewSections,
      children: [(0, a.jsx)("div", {
        className: _.decorationPreview,
        children: (0, a.jsx)(C.default, {
          user: t,
          avatarDecorationOverride: r
        })
      }), (0, a.jsx)("div", {
        className: _.smallDecorationPreviewsContainer,
        children: S.map(e => {
          let {
            avatarSize: s,
            showStatus: n
          } = e;
          return (0, a.jsx)("div", {
            className: _.smallDecorationPreview,
            children: (0, a.jsx)(C.default, {
              user: t,
              avatarSize: s,
              avatarDecorationOverride: r,
              status: n ? f : void 0,
              "aria-hidden": !0
            })
          }, "".concat(s).concat(n))
        })
      })]
    }), null != v && (0, a.jsx)(A, {
      purchase: v
    })]
  })
}