"use strict";
t.r(A), t.d(A, {
  default: function() {
    return m
  }
});
var a = t("37983");
t("884691");
var l = t("414456"),
  n = t.n(l),
  r = t("77078"),
  s = t("17692"),
  o = t("944371"),
  i = t("191814"),
  d = t("476765"),
  u = t("538137"),
  c = t("600785"),
  f = t("246421"),
  C = t("782340"),
  g = t("767165");

function T(e) {
  let {
    hidePurchaseToUnlockBadge: A,
    showDraftBadge: t,
    className: l,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: n(g.productThumbnailContainer, l),
    children: [s, !A && (0, a.jsxs)("div", {
      className: g.purchaseToUnlockBadge,
      children: [(0, a.jsx)(c.default, {
        className: g.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: g.unlockText,
        children: C.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), t && (0, a.jsx)("div", {
      className: g.draftBadge,
      children: (0, a.jsx)(o.MonetizationListingDraftBadge, {})
    })]
  })
}

function h(e) {
  let {
    onShowFullDescription: A,
    variant: t
  } = e, l = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Text, {
      variant: t,
      color: null != A ? "text-link" : "interactive-hover",
      children: C.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, a.jsx)(u.default, {
      className: g.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == A ? (0, a.jsx)("div", {
    className: g.showMoreButton,
    children: l
  }) : (0, a.jsx)(r.Clickable, {
    className: n(g.showMoreButton, g.hasAction),
    onClick: e => {
      e.stopPropagation(), null != A && A()
    },
    children: l
  })
}

function m(e) {
  let {
    imageUrl: A,
    name: t,
    description: l,
    formattedPrice: o,
    role: u,
    ctaComponent: c,
    shouldShowFullDescriptionButton: m = !0,
    onShowFullDescription: U,
    productType: I,
    onTapCard: p,
    actionMenu: v,
    showOpaqueBackground: E = !1,
    hideRoleTag: q = !1,
    lineClamp: N = 1,
    cardWidth: O = 332,
    cardHeight: x,
    thumbnailHeight: R = 187,
    descriptionTextVariant: L = "text-sm/normal",
    isDraft: D = !1
  } = e, P = (0, d.uid)(), V = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(T, {
      showDraftBadge: D,
      hidePurchaseToUnlockBadge: !0,
      children: (0, a.jsx)("img", {
        alt: "",
        src: A,
        className: g.productThumbnail,
        style: {
          height: R
        }
      })
    }), (0, a.jsxs)("div", {
      className: g.productDetails,
      children: [(0, a.jsxs)("div", {
        className: g.productDetailContent,
        children: [(0, a.jsx)(r.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: g.productName,
          id: P,
          children: t
        }), (0, a.jsx)(r.FocusBlock, {
          children: (0, a.jsx)(s.default, {
            variant: L,
            color: "text-muted",
            lineClamp: N,
            text: l
          })
        }), m && (0, a.jsx)(h, {
          onShowFullDescription: U,
          variant: L
        }), q || null == u || "" === u.name ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(i.default, {
            size: 16
          }), (0, a.jsx)(f.default, {
            role: u
          })]
        })]
      }), v]
    }), (0, a.jsxs)("div", {
      className: g.purchaseDetails,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: g.productPrice,
        children: null != o ? o : C.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, a.jsx)(r.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: g.productType,
        children: I
      }), (0, a.jsx)("div", {
        className: g.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: c
      })]
    })]
  });
  return null == p ? (0, a.jsx)("article", {
    className: n(g.productCard, E ? g.opaqueBackground : g.solidBackground),
    "aria-labelledby": P,
    children: V
  }) : (0, a.jsx)("div", {
    style: {
      width: O,
      height: x
    },
    children: (0, a.jsx)(r.ClickableContainer, {
      tag: "article",
      "aria-label": C.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: t
      }),
      className: n(g.productCard, E ? g.opaqueBackground : g.solidBackground, g.cardClickableContainer),
      onClick: p,
      children: V
    })
  })
}