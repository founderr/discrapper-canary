t.d(n, {
  Z: function() {
    return g
  },
  m: function() {
    return S
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  o = t(481060),
  u = t(239091),
  s = t(166081),
  a = t(937615),
  c = t(942833),
  d = t(48691),
  f = t(231338),
  E = t(689938),
  _ = t(860652);

function I(e) {
  let {
    showEditProduct: n,
    showUnpublishProduct: t,
    showCopyLink: i,
    showTestDownload: l,
    showDeleteProduct: u,
    showReportProduct: s,
    onEditProduct: a,
    onUnpublishProduct: c,
    onDeleteProduct: d,
    onCopyLink: f,
    onTestDownload: I,
    onReportProduct: S,
    closePopout: g,
    onSelect: p
  } = e;
  return (0, r.jsx)("div", {
    className: _.menuContainer,
    children: (0, r.jsxs)(o.Menu, {
      navId: "guild-product-context",
      onClose: g,
      "aria-label": E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: p,
      children: [(0, r.jsxs)(o.MenuGroup, {
        children: [n && (0, r.jsx)(o.MenuItem, {
          id: "guild-product-edit",
          label: E.Z.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), i && (0, r.jsx)(o.MenuItem, {
          id: "guild-product-copy-link",
          label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: o.LinkIcon,
          action: f
        }), l && (0, r.jsx)(o.MenuItem, {
          id: "guild-product-test-download",
          label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: o.DownloadIcon,
          action: I
        })]
      }), (0, r.jsxs)(o.MenuGroup, {
        children: [t && (0, r.jsx)(o.MenuItem, {
          id: "guild-product-unpublish",
          label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: c
        }), u && (0, r.jsx)(o.MenuItem, {
          id: "guild-product-delete",
          label: E.Z.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: d
        })]
      }), (0, r.jsx)(o.MenuGroup, {
        children: s && (0, r.jsx)(o.MenuItem, {
          id: "guild-product-report",
          label: E.Z.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: S
        })
      })]
    })
  })
}

function S(e) {
  let {
    product: n,
    guildId: t,
    showEditProduct: i,
    showUnpublishProduct: l,
    showTestDownload: u,
    showCopyLink: s,
    showDeleteProduct: a,
    showReportProduct: c,
    onEditProduct: d,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyProductLink: g,
    onTestDownload: p,
    onReportProduct: T
  } = e;
  return (0, r.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, r.jsx)(o.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: o.Popout.Animation.FADE,
      renderPopout: e => (0, r.jsx)(I, {
        ...e,
        guildId: t,
        productId: n.id,
        showEditProduct: i,
        showUnpublishProduct: l,
        showCopyLink: s,
        showTestDownload: u,
        showReportProduct: c,
        showDeleteProduct: a,
        onEditProduct: d,
        onUnpublishProduct: f,
        onDeleteProduct: S,
        onCopyLink: g,
        onTestDownload: p,
        onReportProduct: T
      }),
      children: (e, t) => {
        let {
          isShown: i
        } = t;
        return (0, r.jsx)(o.Clickable, {
          ...e,
          "aria-label": E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: n.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": i,
          className: _.productActionMenuButton,
          children: (0, r.jsx)(o.MoreVerticalIcon, {
            size: "md",
            color: "currentColor",
            className: _.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function g(e) {
  let {
    product: n,
    guildId: t,
    onEditProduct: i,
    onUnpublishProduct: g,
    onDeleteProduct: p,
    onCopyProductLink: T,
    onTestDownload: h,
    disabled: C = !1
  } = e, m = (0, s.U)(n, 600), N = null !== n.price_tier ? (0, a.T4)(n.price_tier, f.pK.USD) : void 0, R = (0, c.C)(n);
  return (0, r.jsxs)(o.ClickableContainer, {
    tag: "article",
    className: l()(_.productCardClickable, _.productCard, {
      [_.disabled]: C
    }),
    onClick: C ? void 0 : i,
    onContextMenu: function(e) {
      (0, u.jW)(e, () => Promise.resolve(e => (0, r.jsx)(I, {
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
        onEditProduct: i,
        onUnpublishProduct: g,
        onDeleteProduct: p,
        onCopyLink: T,
        onTestDownload: h,
        onReportProduct: () => {}
      })))
    },
    "aria-label": E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: n.name
    }),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: m,
      className: _.productThumbnail
    }), (0, r.jsxs)("div", {
      className: _.productInfo,
      children: [(0, r.jsxs)("div", {
        className: _.productInfoContent,
        children: [(0, r.jsx)(o.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: _.productName,
          children: n.name
        }), (0, r.jsx)(o.Spacer, {
          size: 8
        }), (0, r.jsxs)("div", {
          className: _.productDetails,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: N
          }), null != R ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: _.dotSeparator
            }), (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: R
            })]
          }) : null]
        }), (0, r.jsx)(o.Spacer, {
          size: 16
        }), n.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})]
      }), !C && (0, r.jsx)(S, {
        product: n,
        guildId: t,
        showEditProduct: !0,
        showUnpublishProduct: n.published,
        showCopyLink: n.published,
        showTestDownload: null != n.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: i,
        onUnpublishProduct: g,
        onDeleteProduct: p,
        onCopyProductLink: T,
        onTestDownload: h,
        onReportProduct: () => {}
      })]
    })]
  })
}