"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("17692"),
  o = n("944371"),
  u = n("191814"),
  d = n("476765"),
  c = n("538137"),
  E = n("600785"),
  f = n("246421"),
  _ = n("782340"),
  T = n("767165");

function I(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: l,
    children: r
  } = e;
  return (0, s.jsxs)("div", {
    className: a(T.productThumbnailContainer, l),
    children: [r, !t && (0, s.jsxs)("div", {
      className: T.purchaseToUnlockBadge,
      children: [(0, s.jsx)(E.default, {
        className: T.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: T.unlockText,
        children: _.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), n && (0, s.jsx)("div", {
      className: T.draftBadge,
      children: (0, s.jsx)(o.MonetizationListingDraftBadge, {})
    })]
  })
}

function m(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, l = (0, s.jsxs)(s.Fragment, {
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
    children: l
  }) : (0, s.jsx)(i.Clickable, {
    className: a(T.showMoreButton, T.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: l
  })
}

function N(e) {
  let {
    imageUrl: t,
    name: n,
    description: l,
    formattedPrice: o,
    role: c,
    ctaComponent: E,
    shouldShowFullDescriptionButton: N = !0,
    onShowFullDescription: p,
    productType: A,
    onTapCard: S,
    actionMenu: C,
    showOpaqueBackground: h = !1,
    hideRoleTag: g = !1,
    lineClamp: M = 1,
    cardWidth: O = 332,
    cardHeight: R,
    thumbnailHeight: L = 187,
    descriptionTextVariant: v = "text-sm/normal",
    isDraft: P = !1
  } = e, D = (0, d.uid)(), x = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(I, {
      showDraftBadge: P,
      hidePurchaseToUnlockBadge: !0,
      children: (0, s.jsx)("img", {
        alt: "",
        src: t,
        className: T.productThumbnail,
        style: {
          height: L
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
            variant: v,
            color: "text-muted",
            lineClamp: M,
            text: l
          })
        }), N && (0, s.jsx)(m, {
          onShowFullDescription: p,
          variant: v
        }), g || null == c || "" === c.name ? null : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(u.default, {
            size: 16
          }), (0, s.jsx)(f.default, {
            role: c
          })]
        })]
      }), C]
    }), (0, s.jsxs)("div", {
      className: T.purchaseDetails,
      children: [(0, s.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: T.productPrice,
        children: null != o ? o : _.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, s.jsx)(i.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: T.productType,
        children: A
      }), (0, s.jsx)("div", {
        className: T.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: E
      })]
    })]
  });
  return null == S ? (0, s.jsx)("article", {
    className: a(T.productCard, h ? T.opaqueBackground : T.solidBackground),
    "aria-labelledby": D,
    children: x
  }) : (0, s.jsx)("div", {
    style: {
      width: O,
      height: R
    },
    children: (0, s.jsx)(i.ClickableContainer, {
      tag: "article",
      "aria-label": _.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: n
      }),
      className: a(T.productCard, h ? T.opaqueBackground : T.solidBackground, T.cardClickableContainer),
      onClick: S,
      children: x
    })
  })
}