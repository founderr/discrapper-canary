"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return m
  },
  default: function() {
    return I
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("481060"),
  o = n("239091"),
  u = n("166081"),
  a = n("682864"),
  c = n("943461"),
  d = n("757698"),
  f = n("621113"),
  S = n("937615"),
  h = n("942833"),
  g = n("48691"),
  E = n("231338"),
  _ = n("689938"),
  p = n("367871");

function C(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: i,
    showTestDownload: l,
    showDeleteProduct: o,
    showReportProduct: u,
    onEditProduct: a,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: h,
    onTestDownload: g,
    onReportProduct: E,
    closePopout: C,
    onSelect: m
  } = e;
  return (0, r.jsx)("div", {
    className: p.menuContainer,
    children: (0, r.jsxs)(s.Menu, {
      navId: "guild-product-context",
      onClose: C,
      "aria-label": _.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: m,
      children: [(0, r.jsxs)(s.MenuGroup, {
        children: [t && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-edit",
          label: _.default.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), i && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-copy-link",
          label: _.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: d.default,
          action: h
        }), l && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-test-download",
          label: _.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: c.default,
          action: g
        })]
      }), (0, r.jsxs)(s.MenuGroup, {
        children: [n && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-unpublish",
          label: _.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), o && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-delete",
          label: _.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, r.jsx)(s.MenuGroup, {
        children: u && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-report",
          label: _.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: E
        })
      })]
    })
  })
}

function m(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: i,
    showUnpublishProduct: l,
    showTestDownload: o,
    showCopyLink: u,
    showDeleteProduct: a,
    showReportProduct: c,
    onEditProduct: d,
    onUnpublishProduct: S,
    onDeleteProduct: h,
    onCopyProductLink: g,
    onTestDownload: E,
    onReportProduct: m
  } = e;
  return (0, r.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, r.jsx)(s.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: s.Popout.Animation.FADE,
      renderPopout: e => (0, r.jsx)(C, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: i,
        showUnpublishProduct: l,
        showCopyLink: u,
        showTestDownload: o,
        showReportProduct: c,
        showDeleteProduct: a,
        onEditProduct: d,
        onUnpublishProduct: S,
        onDeleteProduct: h,
        onCopyLink: g,
        onTestDownload: E,
        onReportProduct: m
      }),
      children: (e, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(s.Clickable, {
          ...e,
          "aria-label": _.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": i,
          className: p.productActionMenuButton,
          children: (0, r.jsx)(f.default, {
            className: p.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function I(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: i,
    onUnpublishProduct: c,
    onDeleteProduct: d,
    onCopyProductLink: f,
    onTestDownload: I,
    disabled: T = !1
  } = e, R = (0, u.useListingThumbnailUrl)(t, 600), v = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, E.CurrencyCodes.USD) : void 0, M = (0, h.useProductType)(t);
  return (0, r.jsxs)(s.ClickableContainer, {
    tag: "article",
    className: l()(p.productCardClickable, p.productCard, {
      [p.disabled]: T
    }),
    onClick: T ? void 0 : i,
    onContextMenu: function(e) {
      (0, o.openContextMenuLazy)(e, () => Promise.resolve(e => (0, r.jsx)(C, {
        ...e,
        closePopout: o.closeContextMenu,
        guildId: n,
        productId: t.id,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: i,
        onUnpublishProduct: c,
        onDeleteProduct: d,
        onCopyLink: f,
        onTestDownload: I,
        onReportProduct: () => {}
      })))
    },
    "aria-label": _.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: p.productThumbnail
    }), (0, r.jsxs)("div", {
      className: p.productInfo,
      children: [(0, r.jsxs)("div", {
        className: p.productInfoContent,
        children: [(0, r.jsx)(s.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: p.productName,
          children: t.name
        }), (0, r.jsx)(a.default, {
          size: 8
        }), (0, r.jsxs)("div", {
          className: p.productDetails,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: v
          }), null != M ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: p.dotSeparator
            }), (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: M
            })]
          }) : null]
        }), (0, r.jsx)(a.default, {
          size: 16
        }), t.published ? (0, r.jsx)(g.PublishedBadge, {}) : (0, r.jsx)(g.DraftBadge, {})]
      }), !T && (0, r.jsx)(m, {
        product: t,
        guildId: n,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: i,
        onUnpublishProduct: c,
        onDeleteProduct: d,
        onCopyProductLink: f,
        onTestDownload: I,
        onReportProduct: () => {}
      })]
    })]
  })
}