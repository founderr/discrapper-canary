"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return C
  },
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  l = n("481060"),
  o = n("239091"),
  u = n("166081"),
  a = n("682864"),
  d = n("943461"),
  c = n("757698"),
  f = n("621113"),
  S = n("937615"),
  _ = n("942833"),
  p = n("48691"),
  E = n("231338"),
  g = n("689938"),
  I = n("367871");

function h(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: r,
    showTestDownload: s,
    showDeleteProduct: o,
    showReportProduct: u,
    onEditProduct: a,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: _,
    onTestDownload: p,
    onReportProduct: E,
    closePopout: h,
    onSelect: C
  } = e;
  return (0, i.jsx)("div", {
    className: I.menuContainer,
    children: (0, i.jsxs)(l.Menu, {
      navId: "guild-product-context",
      onClose: h,
      "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: C,
      children: [(0, i.jsxs)(l.MenuGroup, {
        children: [t && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-edit",
          label: g.default.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), r && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-copy-link",
          label: g.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: c.default,
          action: _
        }), s && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-test-download",
          label: g.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: d.default,
          action: p
        })]
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [n && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-unpublish",
          label: g.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), o && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-delete",
          label: g.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: u && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-report",
          label: g.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: E
        })
      })]
    })
  })
}

function C(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: r,
    showUnpublishProduct: s,
    showTestDownload: o,
    showCopyLink: u,
    showDeleteProduct: a,
    showReportProduct: d,
    onEditProduct: c,
    onUnpublishProduct: S,
    onDeleteProduct: _,
    onCopyProductLink: p,
    onTestDownload: E,
    onReportProduct: C
  } = e;
  return (0, i.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, i.jsx)(l.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: l.Popout.Animation.FADE,
      renderPopout: e => (0, i.jsx)(h, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: r,
        showUnpublishProduct: s,
        showCopyLink: u,
        showTestDownload: o,
        showReportProduct: d,
        showDeleteProduct: a,
        onEditProduct: c,
        onUnpublishProduct: S,
        onDeleteProduct: _,
        onCopyLink: p,
        onTestDownload: E,
        onReportProduct: C
      }),
      children: (e, n) => {
        let {
          isShown: r
        } = n;
        return (0, i.jsx)(l.Clickable, {
          ...e,
          "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": r,
          className: I.productActionMenuButton,
          children: (0, i.jsx)(f.default, {
            className: I.productActionMenuIcon,
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
  } = e, R = (0, u.useListingThumbnailUrl)(t, 600), N = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, E.CurrencyCodes.USD) : void 0, v = (0, _.useProductType)(t);
  return (0, i.jsxs)(l.ClickableContainer, {
    tag: "article",
    className: s()(I.productCardClickable, I.productCard, {
      [I.disabled]: m
    }),
    onClick: m ? void 0 : r,
    onContextMenu: function(e) {
      (0, o.openContextMenuLazy)(e, () => Promise.resolve(e => (0, i.jsx)(h, {
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
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyLink: f,
        onTestDownload: T,
        onReportProduct: () => {}
      })))
    },
    "aria-label": g.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, i.jsx)("img", {
      alt: "",
      src: R,
      className: I.productThumbnail
    }), (0, i.jsxs)("div", {
      className: I.productInfo,
      children: [(0, i.jsxs)("div", {
        className: I.productInfoContent,
        children: [(0, i.jsx)(l.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: I.productName,
          children: t.name
        }), (0, i.jsx)(a.default, {
          size: 8
        }), (0, i.jsxs)("div", {
          className: I.productDetails,
          children: [(0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: N
          }), null != v ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: I.dotSeparator
            }), (0, i.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: v
            })]
          }) : null]
        }), (0, i.jsx)(a.default, {
          size: 16
        }), t.published ? (0, i.jsx)(p.PublishedBadge, {}) : (0, i.jsx)(p.DraftBadge, {})]
      }), !m && (0, i.jsx)(C, {
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