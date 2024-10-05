n.d(t, {
    Z: function () {
        return T;
    },
    m: function () {
        return S;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    o = n.n(i),
    u = n(481060),
    l = n(239091),
    s = n(166081),
    a = n(937615),
    c = n(942833),
    d = n(48691),
    _ = n(231338),
    E = n(689938),
    f = n(772103);
function I(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: i, showTestDownload: o, showDeleteProduct: l, showReportProduct: s, onEditProduct: a, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: _, onTestDownload: I, onReportProduct: S, closePopout: T, onSelect: C } = e;
    return (0, r.jsx)('div', {
        className: f.menuContainer,
        children: (0, r.jsxs)(u.Menu, {
            navId: 'guild-product-context',
            onClose: T,
            'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: C,
            children: [
                (0, r.jsxs)(u.MenuGroup, {
                    children: [
                        t &&
                            (0, r.jsx)(u.MenuItem, {
                                id: 'guild-product-edit',
                                label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                                action: a
                            }),
                        i &&
                            (0, r.jsx)(u.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: u.LinkIcon,
                                action: _
                            }),
                        o &&
                            (0, r.jsx)(u.MenuItem, {
                                id: 'guild-product-test-download',
                                label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: u.DownloadIcon,
                                action: I
                            })
                    ]
                }),
                (0, r.jsxs)(u.MenuGroup, {
                    children: [
                        n &&
                            (0, r.jsx)(u.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: c
                            }),
                        l &&
                            (0, r.jsx)(u.MenuItem, {
                                id: 'guild-product-delete',
                                label: E.Z.Messages.GUILD_PRODUCT_DELETE,
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, r.jsx)(u.MenuGroup, {
                    children:
                        s &&
                        (0, r.jsx)(u.MenuItem, {
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
    let { product: t, guildId: n, showEditProduct: i, showUnpublishProduct: o, showTestDownload: l, showCopyLink: s, showDeleteProduct: a, showReportProduct: c, onEditProduct: d, onUnpublishProduct: _, onDeleteProduct: S, onCopyProductLink: T, onTestDownload: C, onReportProduct: p } = e;
    return (0, r.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, r.jsx)(u.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: u.Popout.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(I, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: i,
                    showUnpublishProduct: o,
                    showCopyLink: s,
                    showTestDownload: l,
                    showReportProduct: c,
                    showDeleteProduct: a,
                    onEditProduct: d,
                    onUnpublishProduct: _,
                    onDeleteProduct: S,
                    onCopyLink: T,
                    onTestDownload: C,
                    onReportProduct: p
                }),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(u.Clickable, {
                    ...e,
                    'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({ productName: t.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': i,
                    className: f.productActionMenuButton,
                    children: (0, r.jsx)(u.MoreVerticalIcon, {
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
    let { product: t, guildId: n, onEditProduct: i, onUnpublishProduct: T, onDeleteProduct: C, onCopyProductLink: p, onTestDownload: N, disabled: O = !1 } = e,
        g = (0, s.U)(t, 600),
        m = null !== t.price_tier ? (0, a.T4)(t.price_tier, _.pK.USD) : void 0,
        R = (0, c.C)(t);
    return (0, r.jsxs)(u.ClickableContainer, {
        tag: 'article',
        className: o()(f.productCardClickable, f.productCard, { [f.disabled]: O }),
        onClick: O ? void 0 : i,
        onContextMenu: function (e) {
            (0, l.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, r.jsx)(I, {
                        ...e,
                        closePopout: l.Zy,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: i,
                        onUnpublishProduct: T,
                        onDeleteProduct: C,
                        onCopyLink: p,
                        onTestDownload: N,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({ productName: t.name }),
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: g,
                className: f.productThumbnail
            }),
            (0, r.jsxs)('div', {
                className: f.productInfo,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.productInfoContent,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: f.productName,
                                children: t.name
                            }),
                            (0, r.jsx)(u.Spacer, { size: 8 }),
                            (0, r.jsxs)('div', {
                                className: f.productDetails,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: m
                                    }),
                                    null != R
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', { className: f.dotSeparator }),
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: R
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)(u.Spacer, { size: 16 }),
                            t.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})
                        ]
                    }),
                    !O &&
                        (0, r.jsx)(S, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
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
