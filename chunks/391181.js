"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return T
  },
  default: function() {
    return C
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  s = n.n(i),
  l = n("481060"),
  u = n("239091"),
  o = n("166081"),
  a = n("682864"),
  d = n("943461"),
  c = n("757698"),
  f = n("621113"),
  S = n("937615"),
  _ = n("942833"),
  E = n("48691"),
  g = n("231338"),
  h = n("689938"),
  I = n("367871");

function p(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: i,
    showTestDownload: s,
    showDeleteProduct: u,
    showReportProduct: o,
    onEditProduct: a,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: _,
    onTestDownload: E,
    onReportProduct: g,
    closePopout: p,
    onSelect: T
  } = e;
  return (0, r.jsx)("div", {
    className: I.menuContainer,
    children: (0, r.jsxs)(l.Menu, {
      navId: "guild-product-context",
      onClose: p,
      "aria-label": h.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: T,
      children: [(0, r.jsxs)(l.MenuGroup, {
        children: [t && (0, r.jsx)(l.MenuItem, {
          id: "guild-product-edit",
          label: h.default.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), i && (0, r.jsx)(l.MenuItem, {
          id: "guild-product-copy-link",
          label: h.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: c.default,
          action: _
        }), s && (0, r.jsx)(l.MenuItem, {
          id: "guild-product-test-download",
          label: h.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: d.default,
          action: E
        })]
      }), (0, r.jsxs)(l.MenuGroup, {
        children: [n && (0, r.jsx)(l.MenuItem, {
          id: "guild-product-unpublish",
          label: h.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), u && (0, r.jsx)(l.MenuItem, {
          id: "guild-product-delete",
          label: h.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, r.jsx)(l.MenuGroup, {
        children: o && (0, r.jsx)(l.MenuItem, {
          id: "guild-product-report",
          label: h.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: g
        })
      })]
    })
  })
}

function T(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: i,
    showUnpublishProduct: s,
    showTestDownload: u,
    showCopyLink: o,
    showDeleteProduct: a,
    showReportProduct: d,
    onEditProduct: c,
    onUnpublishProduct: S,
    onDeleteProduct: _,
    onCopyProductLink: E,
    onTestDownload: g,
    onReportProduct: T
  } = e;
  return (0, r.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, r.jsx)(l.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: l.Popout.Animation.FADE,
      renderPopout: e => (0, r.jsx)(p, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: i,
        showUnpublishProduct: s,
        showCopyLink: o,
        showTestDownload: u,
        showReportProduct: d,
        showDeleteProduct: a,
        onEditProduct: c,
        onUnpublishProduct: S,
        onDeleteProduct: _,
        onCopyLink: E,
        onTestDownload: g,
        onReportProduct: T
      }),
      children: (e, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(l.Clickable, {
          ...e,
          "aria-label": h.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": i,
          className: I.productActionMenuButton,
          children: (0, r.jsx)(f.default, {
            className: I.productActionMenuIcon,
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
    onUnpublishProduct: d,
    onDeleteProduct: c,
    onCopyProductLink: f,
    onTestDownload: C,
    disabled: m = !1
  } = e, R = (0, o.useListingThumbnailUrl)(t, 600), N = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, g.CurrencyCodes.USD) : void 0, O = (0, _.useProductType)(t);
  return (0, r.jsxs)(l.ClickableContainer, {
    tag: "article",
    className: s()(I.productCardClickable, I.productCard, {
      [I.disabled]: m
    }),
    onClick: m ? void 0 : i,
    onContextMenu: function(e) {
      (0, u.openContextMenuLazy)(e, () => Promise.resolve(e => (0, r.jsx)(p, {
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
        onEditProduct: i,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyLink: f,
        onTestDownload: C,
        onReportProduct: () => {}
      })))
    },
    "aria-label": h.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: I.productThumbnail
    }), (0, r.jsxs)("div", {
      className: I.productInfo,
      children: [(0, r.jsxs)("div", {
        className: I.productInfoContent,
        children: [(0, r.jsx)(l.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: I.productName,
          children: t.name
        }), (0, r.jsx)(a.default, {
          size: 8
        }), (0, r.jsxs)("div", {
          className: I.productDetails,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: N
          }), null != O ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: I.dotSeparator
            }), (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: O
            })]
          }) : null]
        }), (0, r.jsx)(a.default, {
          size: 16
        }), t.published ? (0, r.jsx)(E.PublishedBadge, {}) : (0, r.jsx)(E.DraftBadge, {})]
      }), !m && (0, r.jsx)(T, {
        product: t,
        guildId: n,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: i,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyProductLink: f,
        onTestDownload: C,
        onReportProduct: () => {}
      })]
    })]
  })
}