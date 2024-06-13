"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return I
  },
  default: function() {
    return C
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("481060"),
  o = n("239091"),
  u = n("166081"),
  a = n("943461"),
  c = n("757698"),
  d = n("621113"),
  f = n("937615"),
  S = n("942833"),
  g = n("48691"),
  p = n("231338"),
  h = n("689938"),
  E = n("367871");

function _(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: i,
    showTestDownload: l,
    showDeleteProduct: o,
    showReportProduct: u,
    onEditProduct: d,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: g,
    onTestDownload: p,
    onReportProduct: _,
    closePopout: I,
    onSelect: C
  } = e;
  return (0, r.jsx)("div", {
    className: E.menuContainer,
    children: (0, r.jsxs)(s.Menu, {
      navId: "guild-product-context",
      onClose: I,
      "aria-label": h.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: C,
      children: [(0, r.jsxs)(s.MenuGroup, {
        children: [t && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-edit",
          label: h.default.Messages.GUILD_PRODUCT_EDIT,
          action: d
        }), i && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-copy-link",
          label: h.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: c.default,
          action: g
        }), l && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-test-download",
          label: h.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: a.default,
          action: p
        })]
      }), (0, r.jsxs)(s.MenuGroup, {
        children: [n && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-unpublish",
          label: h.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), o && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-delete",
          label: h.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, r.jsx)(s.MenuGroup, {
        children: u && (0, r.jsx)(s.MenuItem, {
          id: "guild-product-report",
          label: h.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: _
        })
      })]
    })
  })
}

function I(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: i,
    showUnpublishProduct: l,
    showTestDownload: o,
    showCopyLink: u,
    showDeleteProduct: a,
    showReportProduct: c,
    onEditProduct: f,
    onUnpublishProduct: S,
    onDeleteProduct: g,
    onCopyProductLink: p,
    onTestDownload: I,
    onReportProduct: C
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
      renderPopout: e => (0, r.jsx)(_, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: i,
        showUnpublishProduct: l,
        showCopyLink: u,
        showTestDownload: o,
        showReportProduct: c,
        showDeleteProduct: a,
        onEditProduct: f,
        onUnpublishProduct: S,
        onDeleteProduct: g,
        onCopyLink: p,
        onTestDownload: I,
        onReportProduct: C
      }),
      children: (e, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(s.Clickable, {
          ...e,
          "aria-label": h.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": i,
          className: E.productActionMenuButton,
          children: (0, r.jsx)(d.default, {
            className: E.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function C(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: i,
    onUnpublishProduct: a,
    onDeleteProduct: c,
    onCopyProductLink: d,
    onTestDownload: C,
    disabled: m = !1
  } = e, T = (0, u.useListingThumbnailUrl)(t, 600), R = null !== t.price_tier ? (0, f.formatPrice)(t.price_tier, p.CurrencyCodes.USD) : void 0, v = (0, S.useProductType)(t);
  return (0, r.jsxs)(s.ClickableContainer, {
    tag: "article",
    className: l()(E.productCardClickable, E.productCard, {
      [E.disabled]: m
    }),
    onClick: m ? void 0 : i,
    onContextMenu: function(e) {
      (0, o.openContextMenuLazy)(e, () => Promise.resolve(e => (0, r.jsx)(_, {
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
        onUnpublishProduct: a,
        onDeleteProduct: c,
        onCopyLink: d,
        onTestDownload: C,
        onReportProduct: () => {}
      })))
    },
    "aria-label": h.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: T,
      className: E.productThumbnail
    }), (0, r.jsxs)("div", {
      className: E.productInfo,
      children: [(0, r.jsxs)("div", {
        className: E.productInfoContent,
        children: [(0, r.jsx)(s.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: E.productName,
          children: t.name
        }), (0, r.jsx)(s.Spacer, {
          size: 8
        }), (0, r.jsxs)("div", {
          className: E.productDetails,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: R
          }), null != v ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: E.dotSeparator
            }), (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: v
            })]
          }) : null]
        }), (0, r.jsx)(s.Spacer, {
          size: 16
        }), t.published ? (0, r.jsx)(g.PublishedBadge, {}) : (0, r.jsx)(g.DraftBadge, {})]
      }), !m && (0, r.jsx)(I, {
        product: t,
        guildId: n,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: i,
        onUnpublishProduct: a,
        onDeleteProduct: c,
        onCopyProductLink: d,
        onTestDownload: C,
        onReportProduct: () => {}
      })]
    })]
  })
}