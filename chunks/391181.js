e.d(n, {
    Z: function () {
        return m;
    },
    m: function () {
        return g;
    }
});
var i = e(200651);
e(192379);
var r = e(120356),
    l = e.n(r),
    o = e(481060),
    u = e(239091),
    a = e(166081),
    s = e(937615),
    c = e(942833),
    d = e(48691),
    f = e(231338),
    _ = e(388032),
    p = e(772103);
function E(t) {
    let { showEditProduct: n, showUnpublishProduct: e, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: E, onReportProduct: g, closePopout: m, onSelect: h } = t;
    return (0, i.jsx)('div', {
        className: p.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: m,
            'aria-label': _.intl.string(_.t.Z146dH),
            onSelect: h,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
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
                                action: E
                            })
                    ]
                }),
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        e &&
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
                            action: g
                        })
                })
            ]
        })
    });
}
function g(t) {
    let { product: n, guildId: e, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: g, onCopyProductLink: m, onTestDownload: h, onReportProduct: I } = t;
    return (0, i.jsx)('div', {
        onClick: (t) => {
            t.stopPropagation();
        },
        children: (0, i.jsx)(o.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (t) =>
                (0, i.jsx)(E, {
                    ...t,
                    guildId: e,
                    productId: n.id,
                    showEditProduct: r,
                    showUnpublishProduct: l,
                    showCopyLink: a,
                    showTestDownload: u,
                    showReportProduct: c,
                    showDeleteProduct: s,
                    onEditProduct: d,
                    onUnpublishProduct: f,
                    onDeleteProduct: g,
                    onCopyLink: m,
                    onTestDownload: h,
                    onReportProduct: I
                }),
            children: (t, e) => {
                let { isShown: r } = e;
                return (0, i.jsx)(o.Clickable, {
                    ...t,
                    'aria-label': _.intl.formatToPlainString(_.t.RtqjeH, { productName: n.name }),
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
function m(t) {
    let { product: n, guildId: e, onEditProduct: r, onUnpublishProduct: m, onDeleteProduct: h, onCopyProductLink: I, onTestDownload: S, disabled: v = !1 } = t,
        C = (0, a.U)(n, 600),
        T = null !== n.price_tier ? (0, s.T4)(n.price_tier, f.pK.USD) : void 0,
        N = (0, c.C)(n);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(p.productCardClickable, p.productCard, { [p.disabled]: v }),
        onClick: v ? void 0 : r,
        onContextMenu: function (t) {
            (0, u.jW)(t, () =>
                Promise.resolve((t) =>
                    (0, i.jsx)(E, {
                        ...t,
                        closePopout: u.Zy,
                        guildId: e,
                        productId: n.id,
                        showEditProduct: !0,
                        showUnpublishProduct: n.published,
                        showCopyLink: n.published,
                        showTestDownload: null != n.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: r,
                        onUnpublishProduct: m,
                        onDeleteProduct: h,
                        onCopyLink: I,
                        onTestDownload: S,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': _.intl.formatToPlainString(_.t['X/yAKi'], { productName: n.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: C,
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
                                children: n.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: p.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: T
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: p.dotSeparator }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: N
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
                    !v &&
                        (0, i.jsx)(g, {
                            product: n,
                            guildId: e,
                            showEditProduct: !0,
                            showUnpublishProduct: n.published,
                            showCopyLink: n.published,
                            showTestDownload: null != n.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: m,
                            onDeleteProduct: h,
                            onCopyProductLink: I,
                            onTestDownload: S,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
