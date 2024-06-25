t.d(n, {
  Z: function() {
    return p
  },
  m: function() {
    return g
  }
});
var i = t(735250);
t(470079);
var r = t(120356),
  o = t.n(r),
  l = t(481060),
  u = t(239091),
  s = t(166081),
  a = t(937615),
  c = t(942833),
  d = t(48691),
  _ = t(231338),
  f = t(689938),
  E = t(860652);

function I(e) {
  let {
    showEditProduct: n,
    showUnpublishProduct: t,
    showCopyLink: r,
    showTestDownload: o,
    showDeleteProduct: u,
    showReportProduct: s,
    onEditProduct: a,
    onUnpublishProduct: c,
    onDeleteProduct: d,
    onCopyLink: _,
    onTestDownload: I,
    onReportProduct: g,
    closePopout: p,
    onSelect: m
  } = e;
  return (0, i.jsx)("div", {
    className: E.menuContainer,
    children: (0, i.jsxs)(l.Menu, {
      navId: "guild-product-context",
      onClose: p,
      "aria-label": f.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: m,
      children: [(0, i.jsxs)(l.MenuGroup, {
        children: [n && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-edit",
          label: f.Z.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), r && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-copy-link",
          label: f.Z.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: l.LinkIcon,
          action: _
        }), o && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-test-download",
          label: f.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: l.DownloadIcon,
          action: I
        })]
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [t && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-unpublish",
          label: f.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: c
        }), u && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-delete",
          label: f.Z.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: d
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: s && (0, i.jsx)(l.MenuItem, {
          id: "guild-product-report",
          label: f.Z.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: g
        })
      })]
    })
  })
}

function g(e) {
  let {
    product: n,
    guildId: t,
    showEditProduct: r,
    showUnpublishProduct: o,
    showTestDownload: u,
    showCopyLink: s,
    showDeleteProduct: a,
    showReportProduct: c,
    onEditProduct: d,
    onUnpublishProduct: _,
    onDeleteProduct: g,
    onCopyProductLink: p,
    onTestDownload: m,
    onReportProduct: S
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
      renderPopout: e => (0, i.jsx)(I, {
        ...e,
        guildId: t,
        productId: n.id,
        showEditProduct: r,
        showUnpublishProduct: o,
        showCopyLink: s,
        showTestDownload: u,
        showReportProduct: c,
        showDeleteProduct: a,
        onEditProduct: d,
        onUnpublishProduct: _,
        onDeleteProduct: g,
        onCopyLink: p,
        onTestDownload: m,
        onReportProduct: S
      }),
      children: (e, t) => {
        let {
          isShown: r
        } = t;
        return (0, i.jsx)(l.Clickable, {
          ...e,
          "aria-label": f.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: n.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": r,
          className: E.productActionMenuButton,
          children: (0, i.jsx)(l.MoreVerticalIcon, {
            size: "md",
            color: "currentColor",
            className: E.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function p(e) {
  let {
    product: n,
    guildId: t,
    onEditProduct: r,
    onUnpublishProduct: p,
    onDeleteProduct: m,
    onCopyProductLink: S,
    onTestDownload: C,
    disabled: T = !1
  } = e, N = (0, s.U)(n, 600), h = null !== n.price_tier ? (0, a.T4)(n.price_tier, _.pK.USD) : void 0, v = (0, c.C)(n);
  return (0, i.jsxs)(l.ClickableContainer, {
    tag: "article",
    className: o()(E.productCardClickable, E.productCard, {
      [E.disabled]: T
    }),
    onClick: T ? void 0 : r,
    onContextMenu: function(e) {
      (0, u.jW)(e, () => Promise.resolve(e => (0, i.jsx)(I, {
        ...e,
        closePopout: u.Zy,
        guildId: t,
        productId: n.id,
        showEditProduct: !0,
        showUnpublishProduct: n.published,
        showCopyLink: n.published,
        showTestDownload: null != n.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: p,
        onDeleteProduct: m,
        onCopyLink: S,
        onTestDownload: C,
        onReportProduct: () => {}
      })))
    },
    "aria-label": f.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: n.name
    }),
    children: [(0, i.jsx)("img", {
      alt: "",
      src: N,
      className: E.productThumbnail
    }), (0, i.jsxs)("div", {
      className: E.productInfo,
      children: [(0, i.jsxs)("div", {
        className: E.productInfoContent,
        children: [(0, i.jsx)(l.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: E.productName,
          children: n.name
        }), (0, i.jsx)(l.Spacer, {
          size: 8
        }), (0, i.jsxs)("div", {
          className: E.productDetails,
          children: [(0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: h
          }), null != v ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: E.dotSeparator
            }), (0, i.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: v
            })]
          }) : null]
        }), (0, i.jsx)(l.Spacer, {
          size: 16
        }), n.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {})]
      }), !T && (0, i.jsx)(g, {
        product: n,
        guildId: t,
        showEditProduct: !0,
        showUnpublishProduct: n.published,
        showCopyLink: n.published,
        showTestDownload: null != n.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: p,
        onDeleteProduct: m,
        onCopyProductLink: S,
        onTestDownload: C,
        onReportProduct: () => {}
      })]
    })]
  })
}