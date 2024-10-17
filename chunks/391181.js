t.d(n, {
    Z: function () {
        return p;
    },
    m: function () {
        return S;
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
    _ = t(231338),
    E = t(689938),
    f = t(772103);
function I(e) {
    let { showEditProduct: n, showUnpublishProduct: t, showCopyLink: i, showTestDownload: l, showDeleteProduct: u, showReportProduct: s, onEditProduct: a, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: _, onTestDownload: I, onReportProduct: S, closePopout: p, onSelect: T } = e;
    return (0, r.jsx)('div', {
        className: f.menuContainer,
        children: (0, r.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: p,
            'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: T,
            children: [
                (0, r.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                                action: a
                            }),
                        i &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: o.LinkIcon,
                                action: _
                            }),
                        l &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: o.DownloadIcon,
                                action: I
                            })
                    ]
                }),
                (0, r.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: c
                            }),
                        u &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-delete',
                                label: E.Z.Messages.GUILD_PRODUCT_DELETE,
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, r.jsx)(o.MenuGroup, {
                    children:
                        s &&
                        (0, r.jsx)(o.MenuItem, {
                            id: 'guild-product-report',
                            label: E.Z.Messages.GUILD_PRODUCT_REPORT,
                            color: 'danger',
                            action: S
                        })
                })
            ]
        })
    });
}
function S(e) {
    let { product: n, guildId: t, showEditProduct: i, showUnpublishProduct: l, showTestDownload: u, showCopyLink: s, showDeleteProduct: a, showReportProduct: c, onEditProduct: d, onUnpublishProduct: _, onDeleteProduct: S, onCopyProductLink: p, onTestDownload: T, onReportProduct: C } = e;
    return (0, r.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, r.jsx)(o.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(I, {
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
                    onUnpublishProduct: _,
                    onDeleteProduct: S,
                    onCopyLink: p,
                    onTestDownload: T,
                    onReportProduct: C
                }),
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, r.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({ productName: n.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': i,
                    className: f.productActionMenuButton,
                    children: (0, r.jsx)(o.MoreVerticalIcon, {
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
function p(e) {
    let { product: n, guildId: t, onEditProduct: i, onUnpublishProduct: p, onDeleteProduct: T, onCopyProductLink: C, onTestDownload: g, disabled: N = !1 } = e,
        m = (0, s.U)(n, 600),
        A = null !== n.price_tier ? (0, a.T4)(n.price_tier, _.pK.USD) : void 0,
        h = (0, c.C)(n);
    return (0, r.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(f.productCardClickable, f.productCard, { [f.disabled]: N }),
        onClick: N ? void 0 : i,
        onContextMenu: function (e) {
            (0, u.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, r.jsx)(I, {
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
                        onUnpublishProduct: p,
                        onDeleteProduct: T,
                        onCopyLink: C,
                        onTestDownload: g,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({ productName: n.name }),
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: m,
                className: f.productThumbnail
            }),
            (0, r.jsxs)('div', {
                className: f.productInfo,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.productInfoContent,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: f.productName,
                                children: n.name
                            }),
                            (0, r.jsx)(o.Spacer, { size: 8 }),
                            (0, r.jsxs)('div', {
                                className: f.productDetails,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: A
                                    }),
                                    null != h
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', { className: f.dotSeparator }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: h
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)(o.Spacer, { size: 16 }),
                            n.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})
                        ]
                    }),
                    !N &&
                        (0, r.jsx)(S, {
                            product: n,
                            guildId: t,
                            showEditProduct: !0,
                            showUnpublishProduct: n.published,
                            showCopyLink: n.published,
                            showTestDownload: null != n.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: p,
                            onDeleteProduct: T,
                            onCopyProductLink: C,
                            onTestDownload: g,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
