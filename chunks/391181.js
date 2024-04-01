"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return I
  },
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  l = n.n(r),
  s = n("481060"),
  u = n("239091"),
  o = n("166081"),
  a = n("682864"),
  d = n("943461"),
  c = n("757698"),
  f = n("621113"),
  S = n("937615"),
  E = n("942833"),
  _ = n("48691"),
  g = n("231338"),
  h = n("689938"),
  p = n("889907");

function C(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: r,
    showTestDownload: l,
    showDeleteProduct: u,
    showReportProduct: o,
    onEditProduct: a,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: E,
    onTestDownload: _,
    onReportProduct: g,
    closePopout: C,
    onSelect: I
  } = e;
  return (0, i.jsx)("div", {
    className: p.menuContainer,
    children: (0, i.jsxs)(s.Menu, {
      navId: "guild-product-context",
      onClose: C,
      "aria-label": h.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: I,
      children: [(0, i.jsxs)(s.MenuGroup, {
        children: [t && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-edit",
          label: h.default.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), r && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-copy-link",
          label: h.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: c.default,
          action: E
        }), l && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-test-download",
          label: h.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: d.default,
          action: _
        })]
      }), (0, i.jsxs)(s.MenuGroup, {
        children: [n && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-unpublish",
          label: h.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), u && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-delete",
          label: h.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, i.jsx)(s.MenuGroup, {
        children: o && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-report",
          label: h.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: g
        })
      })]
    })
  })
}

function I(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: r,
    showUnpublishProduct: l,
    showTestDownload: u,
    showCopyLink: o,
    showDeleteProduct: a,
    showReportProduct: d,
    onEditProduct: c,
    onUnpublishProduct: S,
    onDeleteProduct: E,
    onCopyProductLink: _,
    onTestDownload: g,
    onReportProduct: I
  } = e;
  return (0, i.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, i.jsx)(s.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: s.Popout.Animation.FADE,
      renderPopout: e => (0, i.jsx)(C, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: r,
        showUnpublishProduct: l,
        showCopyLink: o,
        showTestDownload: u,
        showReportProduct: d,
        showDeleteProduct: a,
        onEditProduct: c,
        onUnpublishProduct: S,
        onDeleteProduct: E,
        onCopyLink: _,
        onTestDownload: g,
        onReportProduct: I
      }),
      children: (e, n) => {
        let {
          isShown: r
        } = n;
        return (0, i.jsx)(s.Clickable, {
          ...e,
          "aria-label": h.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": r,
          className: p.productActionMenuButton,
          children: (0, i.jsx)(f.default, {
            className: p.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function T(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: r,
    onUnpublishProduct: d,
    onDeleteProduct: c,
    onCopyProductLink: f,
    onTestDownload: T,
    disabled: m = !1
  } = e, R = (0, o.useListingThumbnailUrl)(t, 600), N = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, g.CurrencyCodes.USD) : void 0, v = (0, E.useProductType)(t);
  return (0, i.jsxs)(s.ClickableContainer, {
    tag: "article",
    className: l()(p.productCardClickable, p.productCard, {
      [p.disabled]: m
    }),
    onClick: m ? void 0 : r,
    onContextMenu: function(e) {
      (0, u.openContextMenuLazy)(e, () => Promise.resolve(e => (0, i.jsx)(C, {
        ...e,
        closePopout: u.closeContextMenu,
        guildId: n,
        productId: t.id,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyLink: f,
        onTestDownload: T,
        onReportProduct: () => {}
      })))
    },
    "aria-label": h.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, i.jsx)("img", {
      alt: "",
      src: R,
      className: p.productThumbnail
    }), (0, i.jsxs)("div", {
      className: p.productInfo,
      children: [(0, i.jsxs)("div", {
        className: p.productInfoContent,
        children: [(0, i.jsx)(s.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: p.productName,
          children: t.name
        }), (0, i.jsx)(a.default, {
          size: 8
        }), (0, i.jsxs)("div", {
          className: p.productDetails,
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: N
          }), null != v ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: p.dotSeparator
            }), (0, i.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: v
            })]
          }) : null]
        }), (0, i.jsx)(a.default, {
          size: 16
        }), t.published ? (0, i.jsx)(_.PublishedBadge, {}) : (0, i.jsx)(_.DraftBadge, {})]
      }), !m && (0, i.jsx)(I, {
        product: t,
        guildId: n,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyProductLink: f,
        onTestDownload: T,
        onReportProduct: () => {}
      })]
    })]
  })
}