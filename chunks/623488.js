t.d(A, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  s = t.n(a),
  r = t(481060),
  l = t(240657),
  o = t(765400),
  i = t(153124),
  d = t(916001),
  c = t(689938),
  u = t(509365);

function C(e) {
  let {
    hidePurchaseToUnlockBadge: A,
    showDraftBadge: t,
    className: a,
    children: l
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(u.productThumbnailContainer, a),
    children: [l, !A && (0, n.jsxs)("div", {
      className: u.purchaseToUnlockBadge,
      children: [(0, n.jsx)(r.LockIcon, {
        size: "xs",
        className: u.lockIcon,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: u.__invalid_unlockText,
        children: c.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), t && (0, n.jsx)("div", {
      className: u.draftBadge,
      children: (0, n.jsx)(o.v, {})
    })]
  })
}

function g(e) {
  let {
    onShowFullDescription: A,
    variant: t
  } = e, a = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Text, {
      variant: t,
      color: null != A ? "text-link" : "interactive-hover",
      children: c.Z.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, n.jsx)(r.ArrowSmallRightIcon, {
      size: "xs",
      color: "currentColor",
      className: u.arrowIcon
    })]
  });
  return null == A ? (0, n.jsx)("div", {
    className: u.showMoreButton,
    children: a
  }) : (0, n.jsx)(r.Clickable, {
    className: s()(u.showMoreButton, u.hasAction),
    onClick: e => {
      e.stopPropagation(), null != A && A()
    },
    children: a
  })
}

function T(e) {
  let {
    imageUrl: A,
    name: t,
    description: a,
    formattedPrice: o,
    role: T,
    ctaComponent: U,
    shouldShowFullDescriptionButton: m = !0,
    onShowFullDescription: I,
    productType: h,
    onTapCard: p,
    actionMenu: v,
    showOpaqueBackground: q = !1,
    hideRoleTag: f = !1,
    lineClamp: E = 1,
    cardWidth: N = 332,
    cardHeight: O,
    thumbnailHeight: D = 187,
    descriptionTextVariant: R = "text-sm/normal",
    isDraft: x = !1
  } = e, L = (0, i.hQ)(), P = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C, {
      showDraftBadge: x,
      hidePurchaseToUnlockBadge: !0,
      children: (0, n.jsx)("img", {
        alt: "",
        src: A,
        className: u.productThumbnail,
        style: {
          height: D
        }
      })
    }), (0, n.jsxs)("div", {
      className: u.productDetails,
      children: [(0, n.jsxs)("div", {
        className: u.productDetailContent,
        children: [(0, n.jsx)(r.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: u.productName,
          id: L,
          children: t
        }), (0, n.jsx)(r.FocusBlock, {
          children: (0, n.jsx)(l.Z, {
            variant: R,
            color: "text-muted",
            lineClamp: E,
            text: a
          })
        }), m && (0, n.jsx)(g, {
          onShowFullDescription: I,
          variant: R
        }), f || null == T || "" === T.name ? null : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.Spacer, {
            size: 16
          }), (0, n.jsx)(d.Z, {
            role: T
          })]
        })]
      }), v]
    }), (0, n.jsxs)("div", {
      className: u.purchaseDetails,
      children: [(0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: u.__invalid_productPrice,
        children: null != o ? o : c.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, n.jsx)(r.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: u.__invalid_productType,
        children: h
      }), (0, n.jsx)("div", {
        className: u.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: U
      })]
    })]
  });
  return null == p ? (0, n.jsx)("article", {
    className: s()(u.productCard, q ? u.opaqueBackground : u.solidBackground),
    "aria-labelledby": L,
    children: P
  }) : (0, n.jsx)("div", {
    style: {
      width: N,
      height: O
    },
    children: (0, n.jsx)(r.ClickableContainer, {
      tag: "article",
      "aria-label": c.Z.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: t
      }),
      className: s()(u.productCard, q ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
      onClick: p,
      children: P
    })
  })
}