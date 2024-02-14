"use strict";
r.r(t), r.d(t, {
  default: function() {
    return I
  }
}), r("794252");
var n = r("37983");
r("884691");
var a = r("414456"),
  u = r.n(a),
  i = r("506838"),
  s = r("446674"),
  l = r("77078"),
  o = r("491232"),
  c = r("984002"),
  d = r("716120"),
  f = r("915639"),
  m = r("824563"),
  p = r("719923"),
  E = r("795158"),
  S = r("782340"),
  h = r("295166");
let _ = [{
    avatarSize: l.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: l.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: l.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: l.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  C = e => {
    let {
      purchase: t
    } = e, r = (0, s.useStateFromStores)([f.default], () => f.default.locale), a = (0, o.isPremiumCollectiblesPurchase)(t);
    return (0, n.jsxs)("div", {
      className: h.purchaseInfo,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, n.jsxs)(l.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [S.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
          })
        }), a && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("br", {}), S.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
var I = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    className: a
  } = e, f = (0, s.useStateFromStores)([m.default], () => m.default.getStatus(t.id)), {
    category: I,
    product: T,
    purchase: g
  } = (0, c.default)(null == r ? void 0 : r.skuId), v = p.default.canUseCollectibles(t), N = (0, o.isPremiumCollectiblesPurchase)(g), A = (0, o.isPremiumCollectiblesProduct)(T), P = !v && N;
  return null != T && (null == g || P) ? (0, n.jsxs)("div", {
    className: u(h.modalPreview, h.shopPreviewContainer, a),
    children: [(0, n.jsx)(d.default, {
      asset: null == I ? void 0 : I.banner,
      className: h.shopPreviewBanner,
      children: (0, n.jsx)(E.default, {
        user: t,
        avatarDecorationOverride: r
      })
    }), (0, n.jsxs)("div", {
      className: h.shopPreviewTextContainer,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: T.name
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: P ? S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([A, v]).with([!0, !0], () => S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, n.jsxs)("div", {
    className: u(h.modalPreview, a),
    children: [(0, n.jsxs)("div", {
      className: h.previewSections,
      children: [(0, n.jsx)("div", {
        className: h.decorationPreview,
        children: (0, n.jsx)(E.default, {
          user: t,
          avatarDecorationOverride: r
        })
      }), (0, n.jsx)("div", {
        className: h.smallDecorationPreviewsContainer,
        children: _.map(e => {
          let {
            avatarSize: a,
            showStatus: u
          } = e;
          return (0, n.jsx)("div", {
            className: h.smallDecorationPreview,
            children: (0, n.jsx)(E.default, {
              user: t,
              avatarSize: a,
              avatarDecorationOverride: r,
              status: u ? f : void 0,
              "aria-hidden": !0
            })
          }, "".concat(a).concat(u))
        })
      })]
    }), null != g && (0, n.jsx)(C, {
      purchase: g
    })]
  })
}