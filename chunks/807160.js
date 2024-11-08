n.d(t, {
    Z: function () {
        return ed;
    }
}),
    n(47120),
    n(653041),
    n(789020);
var i,
    s,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(913527),
    u = n.n(d),
    m = n(91192),
    h = n(314877),
    g = n(442837),
    p = n(481060),
    x = n(37234),
    S = n(782568),
    T = n(812206),
    C = n(593061),
    _ = n(600164),
    E = n(925329),
    f = n(267101),
    I = n(240864),
    N = n(942833),
    A = n(400916),
    b = n(916001),
    v = n(539290),
    j = n(336197),
    O = n(690221),
    R = n(219929),
    P = n(307643),
    D = n(378233),
    y = n(419922),
    B = n(46141),
    L = n(430824),
    Z = n(853872),
    F = n(509545),
    M = n(230307),
    k = n(259580),
    w = n(572004),
    U = n(55935),
    V = n(630388),
    G = n(74538),
    Y = n(937615),
    H = n(244526),
    z = n(712358),
    W = n(362786),
    K = n(981631),
    q = n(474936),
    Q = n(231338),
    X = n(388032),
    J = n(620371);
function $(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let ee = (e) => 'https://'.concat(K.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    et = [K.epS.DURABLE_PRIMARY, K.epS.DURABLE, K.epS.CONSUMABLE];
((r = i || (i = {})).PURCHASE_DATE = 'PURCHASE_DATE'), (r.SKU_TYPE = 'SKU_TYPE'), (r.ALREADY_REFUNDED = 'ALREADY_REFUNDED'), (r.PAYMENT_STATUS = 'PAYMENT_STATUS'), (r.PAYMENT_GATEWAY = 'PAYMENT_GATEWAY'), (r.SKU_STICKER_PACK = 'SKU_STICKER_PACK'), (r.SUBSCRIPTION_TYPE = 'SUBSCRIPTION_TYPE'), (r.GUILD_PRODUCT = 'GUILD_PRODUCT'), (r.COLLECTIBLE = 'COLLECTIBLE');
let en = [K.PyE.FAILED, K.PyE.REVERSED, K.PyE.CANCELED],
    ei = [Q.gg.APPLE],
    es = (e) => {
        let { description: t, cost: n } = e;
        return (0, l.jsx)('li', {
            className: J.paymentDetail,
            children: (0, l.jsxs)(_.Z, {
                justify: _.Z.Justify.BETWEEN,
                children: [(0, l.jsx)('div', { children: t }), (0, l.jsx)('div', { children: n })]
            })
        });
    };
function er(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, r] = a.useState(!1),
        [o, c] = a.useState(!1),
        d = () => {
            (0, w.JG)(t), c(!0), r(!0);
        };
    return (0, l.jsx)(p.Tooltip, {
        forceOpen: o,
        text: s ? i : n,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i, ...a } = e;
            return (0, l.jsx)(p.Clickable, {
                ...a,
                onMouseEnter: () => {
                    s && r(!1), 'function' == typeof n && n();
                },
                onMouseLeave: () => {
                    c(!1), 'function' == typeof i && i();
                },
                onClick: d,
                children: (0, l.jsx)('div', {
                    className: J.copiableContainer,
                    children: t
                })
            });
        }
    });
}
let el = (e) => {
    let { description: t, detail: n } = e;
    return (0, l.jsx)('li', {
        className: J.guildProductDetail,
        children: (0, l.jsxs)(_.Z, {
            justify: _.Z.Justify.BETWEEN,
            children: [(0, l.jsx)('div', { children: t }), (0, l.jsx)('div', { children: n })]
        })
    });
};
function ea(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, f.hO)(t, n, { requireCurrentGuild: !1 }),
        s = (0, N.C)(i),
        r = (0, g.e7)([L.Z], () => L.Z.getGuild(t)),
        o = (null == i ? void 0 : i.role_id) != null && (null == i ? void 0 : i.attachments_count) === 0 ? X.intl.string(X.t.H11qcX) : s,
        c = a.useCallback(async () => {
            (null == r ? void 0 : r.hasFeature(K.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, j.Z)(K.Z5c.GUILD_PRODUCT(t, n)) : await (0, j.Z)(K.Z5c.CHANNEL(t)), (0, x.xf)();
        }, [r, t, n]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != o &&
                (0, l.jsx)(el, {
                    description: X.intl.string(X.t.lXPbJS),
                    detail: o
                }),
            null != r &&
                (0, l.jsx)(el, {
                    description: X.intl.string(X.t.Wpn8z8),
                    detail: (0, l.jsx)(O.Z, {
                        onClick: c,
                        children: r.name
                    })
                })
        ]
    });
}
function eo(e) {
    var t, n;
    let { guildId: i, guildProductListingId: s } = e,
        r = (0, f.hO)(i, s, { requireCurrentGuild: !1 }),
        a = (0, g.e7)([I.Z], () => I.Z.getGuildProductFetchState(s) === I.M.FETCHING),
        o = null == r ? void 0 : r.role_id,
        c = (0, g.e7)([L.Z], () => (null != o ? L.Z.getRole(i, o) : void 0), [i, o]),
        d = (null !== (n = null == r ? void 0 : null === (t = r.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        u = null != c;
    return a
        ? (0, l.jsx)('div', {
              className: J.guildProductBenefits,
              children: (0, l.jsx)(p.Spinner, {})
          })
        : null != r && (d || u)
          ? (0, l.jsxs)('div', {
                className: J.guildProductBenefits,
                children: [
                    d &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(p.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: J.guildProductBenefitLabel,
                                    children: X.intl.string(X.t.hxawo6)
                                }),
                                (0, l.jsx)(A.Z, {
                                    guildId: i,
                                    productId: r.id
                                })
                            ]
                        }),
                    u &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                d && (0, l.jsx)('div', { className: J.divider }),
                                (0, l.jsx)(p.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: J.guildProductBenefitLabel,
                                    children: X.intl.string(X.t.gWBNen)
                                }),
                                (0, l.jsx)(b.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ec extends (s = a.PureComponent) {
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return u()().diff(n, 'days');
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
    get typeString() {
        let {
            payment: { paymentSource: e }
        } = this.props;
        return e instanceof B.qo ? R.ZP.Types.PAYPAL : e instanceof B.dm ? R.ZP.getType(e.brand) : R.ZP.Types.UNKNOWN;
    }
    validateRefundRules() {
        return this.refundRules
            .filter((e) => {
                let { canRefund: t } = e;
                return !t();
            })
            .map((e) => {
                let { rule: t } = e;
                return t;
            });
    }
    renderStatus() {
        let { payment: e } = this.props;
        switch (e.status) {
            case K.PyE.PENDING:
                return (0, l.jsx)('span', {
                    className: J.statusTagGrey,
                    children: X.intl.string(X.t.y7F0RU)
                });
            case K.PyE.FAILED:
                return (0, l.jsx)('span', {
                    className: J.statusTagRed,
                    children: X.intl.string(X.t.Yo4ru7)
                });
            case K.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, l.jsx)('span', {
                        className: J.statusTagGreen,
                        children: X.intl.string(X.t.lYbZz8)
                    });
                return (0, l.jsx)('span', {
                    className: J.statusTagGreen,
                    children: X.intl.string(X.t.ZBb6ND)
                });
            case K.PyE.REVERSED:
                return (0, l.jsx)('span', {
                    className: J.statusTagRed,
                    children: X.intl.string(X.t.YQv9Li)
                });
            case K.PyE.CANCELED:
                return (0, l.jsx)('span', {
                    className: J.statusTagRed,
                    children: X.intl.string(X.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, l.jsx)('span', {
            className: J.price,
            children: (0, Y.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, l.jsx)('li', {
            className: J.paymentDetail,
            children: (0, l.jsxs)('div', {
                className: J.paymentInfo,
                children: [
                    (0, l.jsx)('div', { children: X.intl.string(X.t['UQim+v']) }),
                    (0, l.jsx)(er, {
                        value: e.id,
                        copyText: X.intl.string(X.t['Mdk9+P']),
                        copyFeedbackText: X.intl.string(X.t['7eIrAw'])
                    })
                ]
            })
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: i, tax: s, amount: r, amountRefunded: o, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, l.jsxs)('div', {
            className: c()(J.paymentText, J.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, l.jsx)(H.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: J.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === Q.gg.APPLE_PARTNER
                      ? (0, l.jsx)(H.Z, {
                            paymentSource: new B.$z({}),
                            locale: t,
                            descriptionClassName: J.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, l.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !i && s > 0
                            ? (0, l.jsxs)(a.Fragment, {
                                  children: [
                                      (0, l.jsx)(es, {
                                          description: e.description,
                                          cost: (0, Y.T4)(r - s, d)
                                      }),
                                      (0, l.jsx)(es, {
                                          description: X.intl.string(X.t.QgWXho),
                                          cost: (0, Y.T4)(s, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, l.jsx)(es, {
                            description: X.intl.string(X.t.txajQE),
                            cost: (0, Y.T4)(r, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, l.jsx)(ea, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        o > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(es, {
                                        description: X.intl.string(X.t['A+I0AA']),
                                        cost: (0, Y.T4)(o, d)
                                    }),
                                    (0, l.jsx)(es, {
                                        description: X.intl.string(X.t.xER6Wl),
                                        cost: (0, Y.T4)(r - o, d)
                                    })
                                ]
                            })
                    ]
                })
            ]
        });
    }
    renderInvoiceDownload() {
        let { payment: e } = this.props;
        return (0, l.jsx)(C.Z, { payment: e });
    }
    renderRefundDetails() {
        let e;
        let { locale: t, payment: n } = this.props,
            i = this.validateRefundRules();
        if (i.includes('PAYMENT_GATEWAY') || i.includes('PAYMENT_STATUS') || i.includes('ALREADY_REFUNDED') || i.includes('SKU_STICKER_PACK') || i.includes('SUBSCRIPTION_TYPE') || i.includes('GUILD_PRODUCT')) return null;
        let s = 0 === i.length,
            r = ee(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = i.includes('SKU_TYPE')
                ? X.intl.format(X.t['5lvoVV'], { supportURL: r })
                : s
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? X.intl.format(X.t.EPYteX, {
                            dateLimit: o,
                            supportURL: r
                        })
                      : n.isGift
                        ? X.intl.format(X.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: r
                          })
                        : X.intl.format(X.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: r
                          })
                  : n.isCollectible
                    ? X.intl.string(X.t.s9TZMz)
                    : n.isGift
                      ? X.intl.formatToPlainString(X.t.owlOWV, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? X.intl.formatToPlainString(X.t.dk7vyM, { dateLimit: o })
                        : X.intl.formatToPlainString(X.t.s4Kk0N, {
                              dateLimit: o,
                              playtimeLimit: 2
                          })),
            this.isPremium && (0, z.U)() && (e = null),
            (0, l.jsxs)(a.Fragment, {
                children: [
                    (0, l.jsx)(p.H, {
                        className: J.paymentHeader,
                        children: X.intl.string(X.t['n/27pq'])
                    }),
                    (0, l.jsxs)('div', {
                        className: J.paymentText,
                        children: [(0, l.jsx)('div', { children: e }), this.renderRefundActions(i)]
                    })
                ]
            })
        );
    }
    renderRefundCriteria(e, t, n, i) {
        return (0, l.jsxs)(
            'div',
            {
                className: J.refundCriteria,
                children: [
                    (0, l.jsx)(p.H, {
                        className: J.refundSubHeader,
                        children: e
                    }),
                    (0, l.jsxs)('div', {
                        className: J.refundIconContainer,
                        children: [
                            (0, l.jsx)(t, {
                                className: J.refundCriteriaIcon,
                                color: 'currentColor'
                            }),
                            null != n && (0, l.jsx)('div', { children: n })
                        ]
                    })
                ]
            },
            i
        );
    }
    renderRefundActions(e) {
        var t;
        let { locale: i, payment: s } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let r = e.includes('PURCHASE_DATE') ? p.XSmallIcon : p.CheckmarkLargeIcon;
        if (!this.isPremium || !(0, z.U)())
            return (0, l.jsxs)('div', {
                className: J.refundActions,
                children: [
                    (0, l.jsx)('div', {
                        className: J.refundRules,
                        children: !s.isCollectible && this.renderRefundCriteria(X.intl.string(X.t.H0RNz8), r, X.intl.formatToPlainString(X.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                    }),
                    (0, l.jsx)(p.Anchor, {
                        href: ee(i),
                        children: X.intl.string(X.t.re5nOD)
                    })
                ]
            });
        let a = (null !== (t = s.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [W.d$.OTHER])[0],
            o = null != a || 0 !== e.length || s.isPurchasedExternally;
        return (0, l.jsxs)('div', {
            className: J.refundActions,
            children: [
                (0, l.jsx)(p.Tooltip, {
                    shouldShow: o,
                    text: (function (e) {
                        switch (e) {
                            case W.d$.ALREADY_REFUNDED_PREMIUM:
                                return X.intl.string(X.t['GBu+VV']);
                            case W.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
                                return X.intl.string(X.t['7bNM5+']);
                            case W.d$.ENTITLEMENT_ALREADY_CONSUMED:
                                return X.intl.string(X.t['2yOjur']);
                            default:
                                return X.intl.string(X.t.iFF3T0);
                        }
                    })(a),
                    children: (e) =>
                        (0, l.jsx)(p.Button, {
                            ...e,
                            color: p.Button.Colors.PRIMARY,
                            disabled: o,
                            onClick: () =>
                                (0, p.openModalLazy)(async () => {
                                    let { default: e } = await n.e('69473').then(n.bind(n, 436022));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            payment: s,
                                            reportProblemUrl: ee(i),
                                            ...t
                                        });
                                }),
                            children: X.intl.string(X.t.qC9V9P)
                        })
                }),
                (0, l.jsx)(p.Anchor, {
                    href: ee(i),
                    children: X.intl.string(X.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e, t;
        let { compactMode: n, payment: i, application: s, guild: r, stickerPack: o, plan: c } = this.props,
            { expanded: d } = this.state,
            m = i.sku,
            h = i.subscription,
            g = null != i.paymentSource && K.Uk1.has(i.paymentSource.type);
        if (null != h && 0 !== h.items.length) {
            let n = [],
                a = null;
            if (h.type === K.NYc.PREMIUM)
                h.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, G.uZ)(t) ? (n.push(G.ZP.getDisplayName(t, !1, g)), (a = (0, G.Wz)(q.GP[t].skuId))) : (n.push(''.concat(i > 1 ? ''.concat(i, 'x ') : '').concat(G.ZP.getDisplayName(t, !1, g))), null == a && (a = (0, G.Wz)(q.GP[t].skuId)));
                });
            else if (h.type === K.NYc.GUILD) {
                if (null != c) {
                    let e = c.interval === q.rV.YEAR ? X.t.V6UFQE : X.t['6oq129'];
                    n.push(X.intl.format(e, { planName: c.name })), (a = c.skuId);
                }
            } else h.type === K.NYc.APPLICATION && (null != c && (a = c.skuId), null != s ? n.push(X.intl.formatToPlainString(X.t['0wL/VF'], { tier: null == m ? void 0 : m.name })) : n.push(X.intl.string(X.t['9czSYm'])));
            (t = 0 !== n.length ? n.join(', ') : i.description),
                (e = (0, l.jsx)(E.Z, {
                    className: J.descriptionIcon,
                    guildClassName: J.guildDescriptionIcon,
                    game: s,
                    guild: r,
                    size: E.Z.Sizes.XSMALL,
                    skuId: null != a ? a : null == m ? void 0 : m.id
                }));
        } else if (null != m) {
            var x;
            if (((t = i.isGuildProductPurchase && i.isSoftDeletedProduct ? X.intl.string(X.t.O7uLm5) : m.name), null != o)) {
                let t = (0, D.Zt)(o);
                e = (0, l.jsx)(y.ZP, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: J.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null === (x = i.sku) || void 0 === x ? void 0 : x.productLine) === K.POd.COLLECTIBLES
                        ? (0, l.jsx)(p.ShopIcon, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: J.shopIcon
                          })
                        : (0, l.jsx)(E.Z, {
                              className: J.descriptionIcon,
                              guildClassName: J.guildDescriptionIcon,
                              game: s,
                              guild: r,
                              size: E.Z.Sizes.XSMALL,
                              skuId: m.id
                          });
        } else
            (e = (0, l.jsx)(p.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: J.descriptionIcon
            })),
                (t = i.description);
        let S = (0, l.jsx)('div', {
                className: J.date,
                children: (0, U.vc)(u()(i.createdAt), 'MM/DD/YYYY')
            }),
            T = i.isGift
                ? (0, l.jsx)(p.Tooltip, {
                      text: X.intl.string(X.t.QddTpq),
                      children: (e) =>
                          (0, l.jsx)(p.GiftIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: J.giftIcon,
                              ...e
                          })
                  })
                : null;
        return n
            ? (0, l.jsxs)('div', {
                  className: J.description,
                  children: [
                      e,
                      (0, l.jsxs)('div', {
                          children: [t, S]
                      }),
                      T
                  ]
              })
            : (0, l.jsxs)(a.Fragment, {
                  children: [
                      S,
                      (0, l.jsxs)('div', {
                          className: J.description,
                          children: [e, (0, l.jsx)('div', { children: t }), T]
                      })
                  ]
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            i = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)('div', { className: J.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, l.jsx)(v.Z, {
                                className: J.warningBlock,
                                buttonPosition: v.E.RIGHT,
                                notice: X.intl.string(X.t['3AvulJ']),
                                ctaLabel: X.intl.string(X.t.zoztQE),
                                onClick: () => (0, S.Z)(ee(n))
                            })
                          : null != i &&
                            null != e.sku &&
                            (0, l.jsx)(eo, {
                                guildId: i,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, l.jsx)(p.Clickable, {
            onClick: (e) => e.stopPropagation(),
            children: (0, l.jsxs)('div', {
                className: J.expandedInfo,
                children: [
                    (0, l.jsx)(p.H, {
                        className: J.paymentHeader,
                        children: X.intl.string(X.t.nyzoFR)
                    }),
                    this.renderPaymentBreakdown(),
                    this.renderGuildProductBenefits(),
                    this.renderInvoiceDownload(),
                    this.renderRefundDetails()
                ]
            })
        });
    }
    render() {
        let { payment: e, className: t, compactMode: n } = this.props,
            { expanded: i } = this.state;
        return (0, l.jsx)(m.mh, {
            id: e.id,
            children: (e) =>
                (0, l.jsxs)(p.Clickable, {
                    onClick: this.handleExpandInfo,
                    className: c()(i ? J.payment : J.hoverablePayment, t, { [J.compact]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, l.jsxs)(_.Z, {
                            className: J.summaryInfo,
                            align: _.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                (0, l.jsxs)('div', {
                                    className: J.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }),
                                (0, l.jsx)(k.Z, {
                                    className: J.expand,
                                    direction: i ? k.Z.Directions.UP : k.Z.Directions.DOWN
                                })
                            ]
                        }),
                        i ? this.renderExpandedSection() : null
                    ]
                })
        });
    }
    constructor(...e) {
        super(...e),
            $(this, 'state', { expanded: !1 }),
            $(this, 'refundRules', [
                {
                    rule: 'PURCHASE_DATE',
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                        return this.daysSincePurchase <= t;
                    }
                },
                {
                    rule: 'SKU_TYPE',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== K.epS.CONSUMABLE;
                    }
                },
                {
                    rule: 'ALREADY_REFUNDED',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return e.amountRefunded < e.amount;
                    }
                },
                {
                    rule: 'PAYMENT_STATUS',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !en.includes(e.status);
                    }
                },
                {
                    rule: 'PAYMENT_GATEWAY',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !ei.includes(e.paymentGateway);
                    }
                },
                {
                    rule: 'SKU_STICKER_PACK',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, V.yE)(e.sku.flags, K.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null === (e = n.subscription) || void 0 === e ? void 0 : e.type) !== K.NYc.GUILD && (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) !== K.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, V.yE)(e.sku.flags, h.l.GUILD_PRODUCT);
                    }
                },
                {
                    rule: 'COLLECTIBLE',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !e.isCollectible;
                    }
                }
            ]),
            $(this, 'handleExpandInfo', () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function ed(e) {
    var t, n;
    let { payment: i, locale: s, compactMode: r, className: o } = e,
        c = null != i.sku && et.includes(i.sku.type),
        d = null != i.sku && c ? i.sku.applicationId : null,
        u = null === (t = i.sku) || void 0 === t ? void 0 : t.applicationId,
        m = (null === (n = i.subscription) || void 0 === n ? void 0 : n.type) === K.NYc.APPLICATION,
        {
            applicationStatistics: h,
            gameApplication: p,
            paymentSources: x
        } = (0, g.cj)([Z.Z, M.Z, T.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? M.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null !== (t = T.Z.getApplication(null != d ? d : '')) && void 0 !== t ? t : null === (e = i.sku) || void 0 === e ? void 0 : e.application,
                paymentSources: Z.Z.paymentSources
            };
        }),
        S = (0, g.e7)([T.Z], () => (null != u ? T.Z.getApplication(u) : null));
    a.useEffect(() => {
        m && null != u && (0, P.UM)(u);
    }, [u, m]);
    let C = (0, g.e7)([L.Z], () => L.Z.getGuild(null == p ? void 0 : p.guildId)),
        _ = c ? p : void 0,
        E = i.subscription,
        f = (0, g.e7)([F.Z], () => (null != E && E.type !== K.NYc.PREMIUM ? F.Z.get(E.items[0].planId) : null));
    return (0, l.jsx)(ec, {
        applicationStatistics: h,
        application: m ? S : _,
        guild: C,
        stickerPack: null,
        paymentSources: x,
        locale: s,
        compactMode: r,
        className: o,
        payment: i,
        plan: f
    });
}
$(ec, 'defaultProps', { compactMode: !1 });
