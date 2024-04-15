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
  T = n("134304");

function m(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: a,
    children: r
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(T.productThumbnailContainer, a),
    children: [r, !t && (0, s.jsxs)("div", {
      className: T.purchaseToUnlockBadge,
      children: [(0, s.jsx)(f.default, {
        className: T.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: T.__invalid_unlockText,
        children: _.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), n && (0, s.jsx)("div", {
      className: T.draftBadge,
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
      className: T.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == t ? (0, s.jsx)("div", {
    className: T.showMoreButton,
    children: a
  }) : (0, s.jsx)(i.Clickable, {
    className: l()(T.showMoreButton, T.hasAction),
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
    cardHeight: O,
    thumbnailHeight: v = 187,
    descriptionTextVariant: L = "text-sm/normal",
    isDraft: x = !1
  } = e, D = (0, d.uid)(), P = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(m, {
      showDraftBadge: x,
      hidePurchaseToUnlockBadge: !0,
      children: (0, s.jsx)("img", {
        alt: "",
        src: t,
        className: T.productThumbnail,
        style: {
          height: v
        }
      })
    }), (0, s.jsxs)("div", {
      className: T.productDetails,
      children: [(0, s.jsxs)("div", {
        className: T.productDetailContent,
        children: [(0, s.jsx)(i.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: T.productName,
          id: D,
          children: n
        }), (0, s.jsx)(i.FocusBlock, {
          children: (0, s.jsx)(r.default, {
            variant: L,
            color: "text-muted",
            lineClamp: M,
            text: a
          })
        }), p && (0, s.jsx)(I, {
          onShowFullDescription: h,
          variant: L
        }), g || null == c || "" === c.name ? null : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(u.default, {
            size: 16
          }), (0, s.jsx)(E.default, {
            role: c
          })]
        })]
      }), C]
    }), (0, s.jsxs)("div", {
      className: T.purchaseDetails,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: T.__invalid_productPrice,
        children: null != o ? o : _.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, s.jsx)(i.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: T.__invalid_productType,
        children: N
      }), (0, s.jsx)("div", {
        className: T.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: f
      })]
    })]
  });
  return null == S ? (0, s.jsx)("article", {
    className: l()(T.productCard, A ? T.opaqueBackground : T.solidBackground),
    "aria-labelledby": D,
    children: P
  }) : (0, s.jsx)("div", {
    style: {
      width: R,
      height: O
    },
    children: (0, s.jsx)(i.ClickableContainer, {
      tag: "article",
      "aria-label": _.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: n
      }),
      className: l()(T.productCard, A ? T.opaqueBackground : T.solidBackground, T.cardClickableContainer),
      onClick: S,
      children: P
    })
  })
}