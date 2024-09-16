t.d(n, {
    Z: function () {
        return T;
    },
    m: function () {
        return S;
    }
});
var i = t(735250);
t(470079);
var r = t(120356),
    l = t.n(r),
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
    let { showEditProduct: n, showUnpublishProduct: t, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: s, onEditProduct: a, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: _, onTestDownload: I, onReportProduct: S, closePopout: T, onSelect: C } = e;
    return (0, i.jsx)('div', {
        className: f.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: T,
            'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: C,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                                action: a
                            }),
                        r &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: o.LinkIcon,
                                action: _
                            }),
                        l &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: o.DownloadIcon,
                                action: I
                            })
                    ]
                }),
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: c
                            }),
                        u &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-delete',
                                label: E.Z.Messages.GUILD_PRODUCT_DELETE,
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, i.jsx)(o.MenuGroup, {
                    children:
                        s &&
                        (0, i.jsx)(o.MenuItem, {
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
    let { product: n, guildId: t, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: s, showDeleteProduct: a, showReportProduct: c, onEditProduct: d, onUnpublishProduct: _, onDeleteProduct: S, onCopyProductLink: T, onTestDownload: C, onReportProduct: p } = e;
    return (0, i.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(o.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(I, {
                    ...e,
                    guildId: t,
                    productId: n.id,
                    showEditProduct: r,
                    showUnpublishProduct: l,
                    showCopyLink: s,
                    showTestDownload: u,
                    showReportProduct: c,
                    showDeleteProduct: a,
                    onEditProduct: d,
                    onUnpublishProduct: _,
                    onDeleteProduct: S,
                    onCopyLink: T,
                    onTestDownload: C,
                    onReportProduct: p
                }),
            children: (e, t) => {
                let { isShown: r } = t;
                return (0, i.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({ productName: n.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: f.productActionMenuButton,
                    children: (0, i.jsx)(o.MoreVerticalIcon, {
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
function T(e) {
    let { product: n, guildId: t, onEditProduct: r, onUnpublishProduct: T, onDeleteProduct: C, onCopyProductLink: p, onTestDownload: N, disabled: A = !1 } = e,
        g = (0, s.U)(n, 600),
        m = null !== n.price_tier ? (0, a.T4)(n.price_tier, _.pK.USD) : void 0,
        L = (0, c.C)(n);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(f.productCardClickable, f.productCard, { [f.disabled]: A }),
        onClick: A ? void 0 : r,
        onContextMenu: function (e) {
            (0, u.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(I, {
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
                        onUnpublishProduct: T,
                        onDeleteProduct: C,
                        onCopyLink: p,
                        onTestDownload: N,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({ productName: n.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: g,
                className: f.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: f.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.productInfoContent,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: f.productName,
                                children: n.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: f.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: m
                                    }),
                                    null != L
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: f.dotSeparator }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: L
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)(o.Spacer, { size: 16 }),
                            n.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {})
                        ]
                    }),
                    !A &&
                        (0, i.jsx)(S, {
                            product: n,
                            guildId: t,
                            showEditProduct: !0,
                            showUnpublishProduct: n.published,
                            showCopyLink: n.published,
                            showTestDownload: null != n.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: T,
                            onDeleteProduct: C,
                            onCopyProductLink: p,
                            onTestDownload: N,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
