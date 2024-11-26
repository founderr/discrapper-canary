n.d(t, {
    Z: function () {
        return g;
    },
    m: function () {
        return m;
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
    E = n(24753);
function p(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: p, onReportProduct: m, closePopout: g, onSelect: h } = e;
    return (0, i.jsx)('div', {
        className: E.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: g,
            'aria-label': _.intl.string(_.t.Z146dH),
            onSelect: h,
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
                                action: p
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
                            action: m
                        })
                })
            ]
        })
    });
}
function m(e) {
    let { product: t, guildId: n, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: m, onCopyProductLink: g, onTestDownload: h, onReportProduct: I } = e;
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
                (0, i.jsx)(p, {
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
                    onDeleteProduct: m,
                    onCopyLink: g,
                    onTestDownload: h,
                    onReportProduct: I
                }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': _.intl.formatToPlainString(_.t.RtqjeH, { productName: t.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: E.productActionMenuButton,
                    children: (0, i.jsx)(o.MoreVerticalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: E.productActionMenuIcon,
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function g(e) {
    let { product: t, guildId: n, onEditProduct: r, onUnpublishProduct: g, onDeleteProduct: h, onCopyProductLink: I, onTestDownload: S, disabled: C = !1 } = e,
        T = (0, a.U)(t, 600),
        v = null !== t.price_tier ? (0, s.T4)(t.price_tier, f.pK.USD) : void 0,
        N = (0, c.C)(t);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(E.productCardClickable, E.productCard, { [E.disabled]: C }),
        onClick: C ? void 0 : r,
        onContextMenu: function (e) {
            (0, u.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(p, {
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
                        onUnpublishProduct: g,
                        onDeleteProduct: h,
                        onCopyLink: I,
                        onTestDownload: S,
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
                className: E.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: E.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.productInfoContent,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.productName,
                                children: t.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: E.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: v
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: E.dotSeparator }),
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
                    !C &&
                        (0, i.jsx)(m, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: g,
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
