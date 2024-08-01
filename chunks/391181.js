t.d(n, {
  Z: function() {
return S;
  },
  m: function() {
return T;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(481060),
  u = t(239091),
  a = t(166081),
  s = t(937615),
  c = t(942833),
  d = t(48691),
  _ = t(231338),
  E = t(689938),
  f = t(171186);

function I(e) {
  let {
showEditProduct: n,
showUnpublishProduct: t,
showCopyLink: i,
showTestDownload: o,
showDeleteProduct: u,
showReportProduct: a,
onEditProduct: s,
onUnpublishProduct: c,
onDeleteProduct: d,
onCopyLink: _,
onTestDownload: I,
onReportProduct: T,
closePopout: S,
onSelect: A
  } = e;
  return (0, r.jsx)('div', {
className: f.menuContainer,
children: (0, r.jsxs)(l.Menu, {
  navId: 'guild-product-context',
  onClose: S,
  'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
  onSelect: A,
  children: [
    (0, r.jsxs)(l.MenuGroup, {
      children: [
        n && (0, r.jsx)(l.MenuItem, {
          id: 'guild-product-edit',
          label: E.Z.Messages.GUILD_PRODUCT_EDIT,
          action: s
        }),
        i && (0, r.jsx)(l.MenuItem, {
          id: 'guild-product-copy-link',
          label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: l.LinkIcon,
          action: _
        }),
        o && (0, r.jsx)(l.MenuItem, {
          id: 'guild-product-test-download',
          label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: l.DownloadIcon,
          action: I
        })
      ]
    }),
    (0, r.jsxs)(l.MenuGroup, {
      children: [
        t && (0, r.jsx)(l.MenuItem, {
          id: 'guild-product-unpublish',
          label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: c
        }),
        u && (0, r.jsx)(l.MenuItem, {
          id: 'guild-product-delete',
          label: E.Z.Messages.GUILD_PRODUCT_DELETE,
          color: 'danger',
          action: d
        })
      ]
    }),
    (0, r.jsx)(l.MenuGroup, {
      children: a && (0, r.jsx)(l.MenuItem, {
        id: 'guild-product-report',
        label: E.Z.Messages.GUILD_PRODUCT_REPORT,
        color: 'danger',
        action: T
      })
    })
  ]
})
  });
}

function T(e) {
  let {
product: n,
guildId: t,
showEditProduct: i,
showUnpublishProduct: o,
showTestDownload: u,
showCopyLink: a,
showDeleteProduct: s,
showReportProduct: c,
onEditProduct: d,
onUnpublishProduct: _,
onDeleteProduct: T,
onCopyProductLink: S,
onTestDownload: A,
onReportProduct: N
  } = e;
  return (0, r.jsx)('div', {
onClick: e => {
  e.stopPropagation();
},
children: (0, r.jsx)(l.Popout, {
  position: 'right',
  align: 'top',
  spacing: -8,
  animation: l.Popout.Animation.FADE,
  renderPopout: e => (0, r.jsx)(I, {
    ...e,
    guildId: t,
    productId: n.id,
    showEditProduct: i,
    showUnpublishProduct: o,
    showCopyLink: a,
    showTestDownload: u,
    showReportProduct: c,
    showDeleteProduct: s,
    onEditProduct: d,
    onUnpublishProduct: _,
    onDeleteProduct: T,
    onCopyLink: S,
    onTestDownload: A,
    onReportProduct: N
  }),
  children: (e, t) => {
    let {
      isShown: i
    } = t;
    return (0, r.jsx)(l.Clickable, {
      ...e,
      'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
        productName: n.name
      }),
      'aria-haspopup': 'listbox',
      'aria-expanded': i,
      className: f.productActionMenuButton,
      children: (0, r.jsx)(l.MoreVerticalIcon, {
        size: 'md',
        color: 'currentColor',
        className: f.productActionMenuIcon,
        'aria-hidden': !0
      })
    });
  }
})
  });
}

function S(e) {
  let {
product: n,
guildId: t,
onEditProduct: i,
onUnpublishProduct: S,
onDeleteProduct: A,
onCopyProductLink: N,
onTestDownload: g,
disabled: p = !1
  } = e, O = (0, a.U)(n, 600), C = null !== n.price_tier ? (0, s.T4)(n.price_tier, _.pK.USD) : void 0, M = (0, c.C)(n);
  return (0, r.jsxs)(l.ClickableContainer, {
tag: 'article',
className: o()(f.productCardClickable, f.productCard, {
  [f.disabled]: p
}),
onClick: p ? void 0 : i,
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
    onUnpublishProduct: S,
    onDeleteProduct: A,
    onCopyLink: N,
    onTestDownload: g,
    onReportProduct: () => {}
  })));
},
'aria-label': E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
  productName: n.name
}),
children: [
  (0, r.jsx)('img', {
    alt: '',
    src: O,
    className: f.productThumbnail
  }),
  (0, r.jsxs)('div', {
    className: f.productInfo,
    children: [
      (0, r.jsxs)('div', {
        className: f.productInfoContent,
        children: [
          (0, r.jsx)(l.Heading, {
            variant: 'text-md/semibold',
            color: 'header-primary',
            className: f.productName,
            children: n.name
          }),
          (0, r.jsx)(l.Spacer, {
            size: 8
          }),
          (0, r.jsxs)('div', {
            className: f.productDetails,
            children: [
              (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: C
              }),
              null != M ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)('div', {
                    className: f.dotSeparator
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: M
                  })
                ]
              }) : null
            ]
          }),
          (0, r.jsx)(l.Spacer, {
            size: 16
          }),
          n.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})
        ]
      }),
      !p && (0, r.jsx)(T, {
        product: n,
        guildId: t,
        showEditProduct: !0,
        showUnpublishProduct: n.published,
        showCopyLink: n.published,
        showTestDownload: null != n.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: i,
        onUnpublishProduct: S,
        onDeleteProduct: A,
        onCopyProductLink: N,
        onTestDownload: g,
        onReportProduct: () => {}
      })
    ]
  })
]
  });
}