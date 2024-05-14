"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("481060"),
  r = n("240657"),
  o = n("765400"),
  u = n("682864"),
  d = n("153124"),
  c = n("877453"),
  f = n("242411"),
  E = n("916001"),
  _ = n("689938"),
  m = n("259113");

function T(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: a,
    children: r
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(m.productThumbnailContainer, a),
    children: [r, !t && (0, s.jsxs)("div", {
      className: m.purchaseToUnlockBadge,
      children: [(0, s.jsx)(f.default, {
        className: m.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: m.__invalid_unlockText,
        children: _.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), n && (0, s.jsx)("div", {
      className: m.draftBadge,
      children: (0, s.jsx)(o.MonetizationListingDraftBadge, {})
    })]
  })
}

function I(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, a = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(i.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-hover",
      children: _.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, s.jsx)(c.default, {
      className: m.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == t ? (0, s.jsx)("div", {
    className: m.showMoreButton,
    children: a
  }) : (0, s.jsx)(i.Clickable, {
    className: l()(m.showMoreButton, m.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: a
  })
}

function p(e) {
  let {
    imageUrl: t,
    name: n,
    description: a,
    formattedPrice: o,
    role: c,
    ctaComponent: f,
    shouldShowFullDescriptionButton: p = !0,
    onShowFullDescription: h,
    productType: N,
    onTapCard: S,
    actionMenu: C,
    showOpaqueBackground: A = !1,
    hideRoleTag: g = !1,
    lineClamp: M = 1,
    cardWidth: R = 332,
    cardHeight: v,
    thumbnailHeight: O = 187,
    descriptionTextVariant: x = "text-sm/normal",
    isDraft: L = !1
  } = e, D = (0, d.uid)(), P = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(T, {
      showDraftBadge: L,
      hidePurchaseToUnlockBadge: !0,
      children: (0, s.jsx)("img", {
        alt: "",
        src: t,
        className: m.productThumbnail,
        style: {
          height: O
        }
      })
    }), (0, s.jsxs)("div", {
      className: m.productDetails,
      children: [(0, s.jsxs)("div", {
        className: m.productDetailContent,
        children: [(0, s.jsx)(i.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: m.productName,
          id: D,
          children: n
        }), (0, s.jsx)(i.FocusBlock, {
          children: (0, s.jsx)(r.default, {
            variant: x,
            color: "text-muted",
            lineClamp: M,
            text: a
          })
        }), p && (0, s.jsx)(I, {
          onShowFullDescription: h,
          variant: x
        }), g || null == c || "" === c.name ? null : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(u.default, {
            size: 16
          }), (0, s.jsx)(E.default, {
            role: c
          })]
        })]
      }), C]
    }), (0, s.jsxs)("div", {
      className: m.purchaseDetails,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: m.__invalid_productPrice,
        children: null != o ? o : _.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, s.jsx)(i.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: m.__invalid_productType,
        children: N
      }), (0, s.jsx)("div", {
        className: m.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: f
      })]
    })]
  });
  return null == S ? (0, s.jsx)("article", {
    className: l()(m.productCard, A ? m.opaqueBackground : m.solidBackground),
    "aria-labelledby": D,
    children: P
  }) : (0, s.jsx)("div", {
    style: {
      width: R,
      height: v
    },
    children: (0, s.jsx)(i.ClickableContainer, {
      tag: "article",
      "aria-label": _.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: n
      }),
      className: l()(m.productCard, A ? m.opaqueBackground : m.solidBackground, m.cardClickableContainer),
      onClick: S,
      children: P
    })
  })
}