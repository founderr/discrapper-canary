n.d(t, {
    Z: function () {
        return h;
    },
    m: function () {
        return g;
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
    p = n(388032),
    _ = n(24753);
function E(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: E, onReportProduct: g, closePopout: h, onSelect: m } = e;
    return (0, i.jsx)('div', {
        className: _.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: h,
            'aria-label': p.intl.string(p.t.Z146dH),
            onSelect: m,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
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
                        n &&
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
    let { product: t, guildId: n, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: g, onCopyProductLink: h, onTestDownload: m, onReportProduct: S } = e;
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
                    onDeleteProduct: g,
                    onCopyLink: h,
                    onTestDownload: m,
                    onReportProduct: S
                }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': p.intl.formatToPlainString(p.t.RtqjeH, { productName: t.name }),
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
function h(e) {
    let { product: t, guildId: n, onEditProduct: r, onUnpublishProduct: h, onDeleteProduct: m, onCopyProductLink: S, onTestDownload: I, disabled: v = !1 } = e,
        C = (0, a.U)(t, 600),
        T = null !== t.price_tier ? (0, s.T4)(t.price_tier, f.pK.USD) : void 0,
        N = (0, c.C)(t);
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
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: r,
                        onUnpublishProduct: h,
                        onDeleteProduct: m,
                        onCopyLink: S,
                        onTestDownload: I,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': p.intl.formatToPlainString(p.t['X/yAKi'], { productName: t.name }),
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
                                children: t.name
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
                            t.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {})
                        ]
                    }),
                    !v &&
                        (0, i.jsx)(g, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: h,
                            onDeleteProduct: m,
                            onCopyProductLink: S,
                            onTestDownload: I,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
