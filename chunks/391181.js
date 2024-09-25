n.d(t, {
    Z: function () {
        return I;
    },
    m: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(239091),
    l = n(166081),
    u = n(937615),
    c = n(942833),
    d = n(48691),
    _ = n(231338),
    E = n(689938),
    f = n(772103);
let h = 600;
function p(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: i, showTestDownload: a, showDeleteProduct: s, showReportProduct: l, onEditProduct: u, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: _, onTestDownload: h, onReportProduct: p, closePopout: m, onSelect: I } = e;
    return (0, r.jsx)('div', {
        className: f.menuContainer,
        children: (0, r.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: m,
            'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: I,
            children: [
                (0, r.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                                action: u
                            }),
                        i &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: o.LinkIcon,
                                action: _
                            }),
                        a &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: o.DownloadIcon,
                                action: h
                            })
                    ]
                }),
                (0, r.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: c
                            }),
                        s &&
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
                        l &&
                        (0, r.jsx)(o.MenuItem, {
                            id: 'guild-product-report',
                            label: E.Z.Messages.GUILD_PRODUCT_REPORT,
                            color: 'danger',
                            action: p
                        })
                })
            ]
        })
    });
}
function m(e) {
    let { product: t, guildId: n, showEditProduct: i, showUnpublishProduct: a, showTestDownload: s, showCopyLink: l, showDeleteProduct: u, showReportProduct: c, onEditProduct: d, onUnpublishProduct: _, onDeleteProduct: h, onCopyProductLink: m, onTestDownload: I, onReportProduct: T } = e,
        g = (e) => {
            e.stopPropagation();
        };
    return (0, r.jsx)('div', {
        onClick: g,
        children: (0, r.jsx)(o.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(p, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: i,
                    showUnpublishProduct: a,
                    showCopyLink: l,
                    showTestDownload: s,
                    showReportProduct: c,
                    showDeleteProduct: u,
                    onEditProduct: d,
                    onUnpublishProduct: _,
                    onDeleteProduct: h,
                    onCopyLink: m,
                    onTestDownload: I,
                    onReportProduct: T
                }),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({ productName: t.name }),
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
function I(e) {
    let { product: t, guildId: n, onEditProduct: i, onUnpublishProduct: I, onDeleteProduct: T, onCopyProductLink: g, onTestDownload: S, disabled: A = !1 } = e,
        v = (0, l.U)(t, h),
        N = null !== t.price_tier ? (0, u.T4)(t.price_tier, _.pK.USD) : void 0,
        O = (0, c.C)(t);
    function R(e) {
        (0, s.jW)(e, () =>
            Promise.resolve((e) =>
                (0, r.jsx)(p, {
                    ...e,
                    closePopout: s.Zy,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: !0,
                    showUnpublishProduct: t.published,
                    showCopyLink: t.published,
                    showTestDownload: null != t.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: i,
                    onUnpublishProduct: I,
                    onDeleteProduct: T,
                    onCopyLink: g,
                    onTestDownload: S,
                    onReportProduct: () => {}
                })
            )
        );
    }
    return (0, r.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: a()(f.productCardClickable, f.productCard, { [f.disabled]: A }),
        onClick: A ? void 0 : i,
        onContextMenu: R,
        'aria-label': E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({ productName: t.name }),
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: v,
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
                                children: t.name
                            }),
                            (0, r.jsx)(o.Spacer, { size: 8 }),
                            (0, r.jsxs)('div', {
                                className: f.productDetails,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: N
                                    }),
                                    null != O
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', { className: f.dotSeparator }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: O
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)(o.Spacer, { size: 16 }),
                            t.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})
                        ]
                    }),
                    !A &&
                        (0, r.jsx)(m, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: I,
                            onDeleteProduct: T,
                            onCopyProductLink: g,
                            onTestDownload: S,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
