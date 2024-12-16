n.d(t, {
    Z: function () {
        return m;
    },
    m: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    u = n(239091),
    a = n(166081),
    s = n(937615),
    c = n(942833),
    d = n(48691),
    f = n(231338),
    _ = n(388032),
    p = n(24753);
function g(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: g, onReportProduct: E, closePopout: m, onSelect: I } = e;
    return (0, i.jsx)('div', {
        className: p.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: m,
            'aria-label': _.intl.string(_.t.Z146dH),
            onSelect: I,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: _.intl.string(_.t.EEfce3),
                                action: s
                            }),
                        r &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: _.intl.string(_.t.XR26ur),
                                icon: o.LinkIcon,
                                action: f
                            }),
                        l &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: _.intl.string(_.t.aXoI6e),
                                icon: o.DownloadIcon,
                                action: g
                            })
                    ]
                }),
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: _.intl.string(_.t.QrkMlJ),
                                action: c
                            }),
                        u &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-delete',
                                label: _.intl.string(_.t.zWjqvL),
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, i.jsx)(o.MenuGroup, {
                    children:
                        a &&
                        (0, i.jsx)(o.MenuItem, {
                            id: 'guild-product-report',
                            label: _.intl.string(_.t['6yUzvL']),
                            color: 'danger',
                            action: E
                        })
                })
            ]
        })
    });
}
function E(e) {
    let { product: t, guildId: n, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: E, onCopyProductLink: m, onTestDownload: I, onReportProduct: h } = e;
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
                (0, i.jsx)(g, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: r,
                    showUnpublishProduct: l,
                    showCopyLink: a,
                    showTestDownload: u,
                    showReportProduct: c,
                    showDeleteProduct: s,
                    onEditProduct: d,
                    onUnpublishProduct: f,
                    onDeleteProduct: E,
                    onCopyLink: m,
                    onTestDownload: I,
                    onReportProduct: h
                }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': _.intl.formatToPlainString(_.t.RtqjeH, { productName: t.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: p.productActionMenuButton,
                    children: (0, i.jsx)(o.MoreVerticalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: p.productActionMenuIcon,
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function m(e) {
    let { product: t, guildId: n, onEditProduct: r, onUnpublishProduct: m, onDeleteProduct: I, onCopyProductLink: h, onTestDownload: C, disabled: S = !1 } = e,
        T = (0, a.U)(t, 600),
        v = null !== t.price_tier ? (0, s.T4)(t.price_tier, f.pK.USD) : void 0,
        b = (0, c.C)(t);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(p.productCardClickable, p.productCard, { [p.disabled]: S }),
        onClick: S ? void 0 : r,
        onContextMenu: function (e) {
            (0, u.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(g, {
                        ...e,
                        closePopout: u.Zy,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: r,
                        onUnpublishProduct: m,
                        onDeleteProduct: I,
                        onCopyLink: h,
                        onTestDownload: C,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': _.intl.formatToPlainString(_.t['X/yAKi'], { productName: t.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: T,
                className: p.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: p.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.productInfoContent,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: p.productName,
                                children: t.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: p.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: v
                                    }),
                                    null != b
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: p.dotSeparator }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: b
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)(o.Spacer, { size: 16 }),
                            t.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {})
                        ]
                    }),
                    !S &&
                        (0, i.jsx)(E, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: m,
                            onDeleteProduct: I,
                            onCopyProductLink: h,
                            onTestDownload: C,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
