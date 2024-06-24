n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(240657),
  o = n(765400),
  c = n(153124),
  u = n(916001),
  d = n(689938),
  E = n(509365);

function _(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: i,
    children: r
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(E.productThumbnailContainer, i),
    children: [r, !t && (0, s.jsxs)("div", {
      className: E.purchaseToUnlockBadge,
      children: [(0, s.jsx)(a.LockIcon, {
        size: "xs",
        className: E.lockIcon,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: E.__invalid_unlockText,
        children: d.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), n && (0, s.jsx)("div", {
      className: E.draftBadge,
      children: (0, s.jsx)(o.v, {})
    })]
  })
}

function I(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, i = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(a.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-hover",
      children: d.Z.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, s.jsx)(a.ArrowSmallRightIcon, {
      size: "xs",
      color: "currentColor",
      className: E.arrowIcon
    })]
  });
  return null == t ? (0, s.jsx)("div", {
    className: E.showMoreButton,
    children: i
  }) : (0, s.jsx)(a.Clickable, {
    className: l()(E.showMoreButton, E.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: i
  })
}

function T(e) {
  let {
    imageUrl: t,
    name: n,
    description: i,
    formattedPrice: o,
    role: T,
    ctaComponent: N,
    shouldShowFullDescriptionButton: m = !0,
    onShowFullDescription: h,
    productType: C,
    onTapCard: S,
    actionMenu: A,
    showOpaqueBackground: p = !1,
    hideRoleTag: g = !1,
    lineClamp: f = 1,
    cardWidth: O = 332,
    cardHeight: R,
    thumbnailHeight: M = 187,
    descriptionTextVariant: x = "text-sm/normal",
    isDraft: v = !1
  } = e, L = (0, c.hQ)(), Z = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(_, {
      showDraftBadge: v,
      hidePurchaseToUnlockBadge: !0,
      children: (0, s.jsx)("img", {
        alt: "",
        src: t,
        className: E.productThumbnail,
        style: {
          height: M
        }
      })
    }), (0, s.jsxs)("div", {
      className: E.productDetails,
      children: [(0, s.jsxs)("div", {
        className: E.productDetailContent,
        children: [(0, s.jsx)(a.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: E.productName,
          id: L,
          children: n
        }), (0, s.jsx)(a.FocusBlock, {
          children: (0, s.jsx)(r.Z, {
            variant: x,
            color: "text-muted",
            lineClamp: f,
            text: i
          })
        }), m && (0, s.jsx)(I, {
          onShowFullDescription: h,
          variant: x
        }), g || null == T || "" === T.name ? null : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(a.Spacer, {
            size: 16
          }), (0, s.jsx)(u.Z, {
            role: T
          })]
        })]
      }), A]
    }), (0, s.jsxs)("div", {
      className: E.purchaseDetails,
      children: [(0, s.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: E.__invalid_productPrice,
        children: null != o ? o : d.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, s.jsx)(a.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: E.__invalid_productType,
        children: C
      }), (0, s.jsx)("div", {
        className: E.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: N
      })]
    })]
  });
  return null == S ? (0, s.jsx)("article", {
    className: l()(E.productCard, p ? E.opaqueBackground : E.solidBackground),
    "aria-labelledby": L,
    children: Z
  }) : (0, s.jsx)("div", {
    style: {
      width: O,
      height: R
    },
    children: (0, s.jsx)(a.ClickableContainer, {
      tag: "article",
      "aria-label": d.Z.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: n
      }),
      className: l()(E.productCard, p ? E.opaqueBackground : E.solidBackground, E.cardClickableContainer),
      onClick: S,
      children: Z
    })
  })
}