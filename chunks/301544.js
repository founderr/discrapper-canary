n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(686546),
    c = n(778045),
    d = n(355932),
    u = n(852786),
    h = n(68118);
function m(e) {
    let { traits: t } = e,
        n = r.useCallback(
            (e) =>
                (0, i.jsx)(
                    u.Z,
                    {
                        width: 64,
                        height: 16
                    },
                    e
                ),
            []
        );
    return (0, i.jsx)(d.ZP, {
        className: h.traitsContainer,
        items: t,
        renderItem: n,
        maxLines: 2,
        itemGapPx: 4
    });
}
function p(e) {
    let { className: t, style: n } = e;
    return (0, i.jsx)('div', {
        className: l()(h.clickableCard, t),
        style: n,
        children: (0, i.jsxs)('div', {
            className: l()(h.card, h.skeletonCard),
            children: [
                (0, i.jsx)('div', {
                    className: h.cardBrandingHeader,
                    children: (0, i.jsx)(u.Z, {
                        width: '100%',
                        height: 100
                    })
                }),
                (0, i.jsxs)('div', {
                    className: h.cardContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.cardContentTitleSection,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: h.cardNameAndTagWrapper,
                                    children: [
                                        (0, i.jsx)(o.ZP, {
                                            mask: o.QS.CLAN_ICON,
                                            width: 70,
                                            height: 70,
                                            className: h.clanIconMask,
                                            children: (0, i.jsx)('div', {
                                                className: h.skeletonIconInner,
                                                children: (0, i.jsx)(u.Z, {
                                                    width: 64,
                                                    height: 64,
                                                    delayMs: 10,
                                                    className: h.skeletonIcon
                                                })
                                            })
                                        }),
                                        (0, i.jsx)('div', {
                                            className: h.clanTagChipletWrapper,
                                            children: (0, i.jsxs)('div', {
                                                className: h.clanTagChiplet,
                                                children: [
                                                    (0, i.jsx)(u.Z, {
                                                        width: 16,
                                                        height: 16,
                                                        delayMs: 20
                                                    }),
                                                    (0, i.jsx)(u.Z, {
                                                        width: 30,
                                                        height: 16,
                                                        delayMs: 25
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(u.Z, {
                                        className: h.nameText,
                                        width: 120,
                                        height: 24,
                                        delayMs: 20
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: h.clanInfoRow,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-xxs/normal',
                                            className: h.clanInfoItem,
                                            children: (0, i.jsx)(u.Z, {
                                                width: 40,
                                                height: 16,
                                                delayMs: 100
                                            })
                                        }),
                                        (0, i.jsx)('span', {
                                            className: h.wildCardText,
                                            children: (0, i.jsx)(u.Z, {
                                                width: 40,
                                                height: 16,
                                                delayMs: 50
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: h.cardContentDescriptionSection,
                            style: { gap: '4px' },
                            children: [
                                (0, i.jsx)(u.Z, {
                                    width: '85%',
                                    height: 20,
                                    delayMs: 80
                                }),
                                (0, i.jsx)(u.Z, {
                                    width: '92%',
                                    height: 20,
                                    delayMs: 80
                                }),
                                (0, i.jsx)(u.Z, {
                                    width: '43%',
                                    height: 20,
                                    delayMs: 80
                                })
                            ]
                        }),
                        (0, i.jsx)(m, {
                            traits: ['1', '2', '3']
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.cardFooter,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.cardFooterInfo,
                            children: (0, i.jsx)('div', {
                                className: h.cardFooterMembers,
                                children: (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: (0, i.jsx)(u.Z, {
                                        width: 120,
                                        height: 20,
                                        delayMs: 200
                                    })
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: h.cardFooterGames,
                            children: [(0, i.jsx)(c.P, { delayMs: 35 }), (0, i.jsx)(c.P, { delayMs: 25 }), (0, i.jsx)(c.P, { delayMs: 55 })]
                        })
                    ]
                })
            ]
        })
    });
}
