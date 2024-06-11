"use strict";
t.r(A), t.d(A, {
  default: function() {
    return T
  }
});
var a = t("735250");
t("470079");
var l = t("120356"),
  s = t.n(l),
  r = t("481060"),
  n = t("240657"),
  i = t("765400"),
  o = t("153124"),
  d = t("877453"),
  u = t("242411"),
  c = t("916001"),
  g = t("689938"),
  f = t("259113");

function C(e) {
  let {
    hidePurchaseToUnlockBadge: A,
    showDraftBadge: t,
    className: l,
    children: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(f.productThumbnailContainer, l),
    children: [n, !A && (0, a.jsxs)("div", {
      className: f.purchaseToUnlockBadge,
      children: [(0, a.jsx)(u.default, {
        className: f.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: f.__invalid_unlockText,
        children: g.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), t && (0, a.jsx)("div", {
      className: f.draftBadge,
      children: (0, a.jsx)(i.MonetizationListingDraftBadge, {})
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
      children: g.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      className: f.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == A ? (0, a.jsx)("div", {
    className: f.showMoreButton,
    children: l
  }) : (0, a.jsx)(r.Clickable, {
    className: s()(f.showMoreButton, f.hasAction),
    onClick: e => {
      e.stopPropagation(), null != A && A()
    },
    children: l
  })
}

function T(e) {
  let {
    imageUrl: A,
    name: t,
    description: l,
    formattedPrice: i,
    role: d,
    ctaComponent: u,
    shouldShowFullDescriptionButton: T = !0,
    onShowFullDescription: U,
    productType: p,
    onTapCard: m,
    actionMenu: I,
    showOpaqueBackground: v = !1,
    hideRoleTag: E = !1,
    lineClamp: q = 1,
    cardWidth: D = 332,
    cardHeight: N,
    thumbnailHeight: O = 187,
    descriptionTextVariant: L = "text-sm/normal",
    isDraft: R = !1
  } = e, x = (0, o.uid)(), P = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(C, {
      showDraftBadge: R,
      hidePurchaseToUnlockBadge: !0,
      children: (0, a.jsx)("img", {
        alt: "",
        src: A,
        className: f.productThumbnail,
        style: {
          height: O
        }
      })
    }), (0, a.jsxs)("div", {
      className: f.productDetails,
      children: [(0, a.jsxs)("div", {
        className: f.productDetailContent,
        children: [(0, a.jsx)(r.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: f.productName,
          id: x,
          children: t
        }), (0, a.jsx)(r.FocusBlock, {
          children: (0, a.jsx)(n.default, {
            variant: L,
            color: "text-muted",
            lineClamp: q,
            text: l
          })
        }), T && (0, a.jsx)(h, {
          onShowFullDescription: U,
          variant: L
        }), E || null == d || "" === d.name ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Spacer, {
            size: 16
          }), (0, a.jsx)(c.default, {
            role: d
          })]
        })]
      }), I]
    }), (0, a.jsxs)("div", {
      className: f.purchaseDetails,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: f.__invalid_productPrice,
        children: null != i ? i : g.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, a.jsx)(r.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: f.__invalid_productType,
        children: p
      }), (0, a.jsx)("div", {
        className: f.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: u
      })]
    })]
  });
  return null == m ? (0, a.jsx)("article", {
    className: s()(f.productCard, v ? f.opaqueBackground : f.solidBackground),
    "aria-labelledby": x,
    children: P
  }) : (0, a.jsx)("div", {
    style: {
      width: D,
      height: N
    },
    children: (0, a.jsx)(r.ClickableContainer, {
      tag: "article",
      "aria-label": g.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: t
      }),
      className: s()(f.productCard, v ? f.opaqueBackground : f.solidBackground, f.cardClickableContainer),
      onClick: m,
      children: P
    })
  })
}