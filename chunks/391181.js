t.d(n, {
    Z: function () {
        return m;
    },
    m: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    o = t(481060),
    u = t(239091),
    a = t(166081),
    s = t(937615),
    c = t(942833),
    d = t(48691),
    f = t(231338),
    p = t(388032),
    _ = t(772103);
function E(e) {
    let { showEditProduct: n, showUnpublishProduct: t, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: E, onReportProduct: g, closePopout: m, onSelect: h } = e;
    return (0, i.jsx)('div', {
        className: _.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: m,
            'aria-label': p.intl.string(p.t.Z146dH),
            onSelect: h,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: p.intl.string(p.t.EEfce3),
                                action: s
                            }),
                        r &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: p.intl.string(p.t.XR26ur),
                                icon: o.LinkIcon,
                                action: f
                            }),
                        l &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: p.intl.string(p.t.aXoI6e),
                                icon: o.DownloadIcon,
                                action: E
                            })
                    ]
                }),
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: p.intl.string(p.t.QrkMlJ),
                                action: c
                            }),
                        u &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-delete',
                                label: p.intl.string(p.t.zWjqvL),
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
                            label: p.intl.string(p.t['6yUzvL']),
                            color: 'danger',
                            action: g
                        })
                })
            ]
        })
    });
}
function g(e) {
    let { product: n, guildId: t, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: g, onCopyProductLink: m, onTestDownload: h, onReportProduct: I } = e;
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
                (0, i.jsx)(E, {
                    ...e,
                    guildId: t,
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
            children: (e, t) => {
                let { isShown: r } = t;
                return (0, i.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': p.intl.formatToPlainString(p.t.RtqjeH, { productName: n.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: _.productActionMenuButton,
                    children: (0, i.jsx)(o.MoreVerticalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.productActionMenuIcon,
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function m(e) {
    let { product: n, guildId: t, onEditProduct: r, onUnpublishProduct: m, onDeleteProduct: h, onCopyProductLink: I, onTestDownload: S, disabled: v = !1 } = e,
        C = (0, a.U)(n, 600),
        T = null !== n.price_tier ? (0, s.T4)(n.price_tier, f.pK.USD) : void 0,
        N = (0, c.C)(n);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(_.productCardClickable, _.productCard, { [_.disabled]: v }),
        onClick: v ? void 0 : r,
        onContextMenu: function (e) {
            (0, u.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(E, {
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
                        onUnpublishProduct: m,
                        onDeleteProduct: h,
                        onCopyLink: I,
                        onTestDownload: S,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': p.intl.formatToPlainString(p.t['X/yAKi'], { productName: n.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: C,
                className: _.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: _.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.productInfoContent,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: _.productName,
                                children: n.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: _.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: T
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: _.dotSeparator }),
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
                            guildId: t,
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
