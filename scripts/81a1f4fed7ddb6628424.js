(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40370"], {
        77998: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ImageFileIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 22H18C20.2091 22 22 20.2091 22 18V10.5C22 10.2239 21.7761 10 21.5 10H19C16.2386 10 14 7.76142 14 5V2.5C14 2.22386 13.7761 2 13.5 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22ZM15.35 13.1333L18.85 17.8C19.2208 18.2944 18.868 19 18.25 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333ZM10.2045 5.9773C10.4329 5.06615 9.3243 4.4261 8.64942 5.07946C8.28739 5.42994 7.71258 5.42994 7.35055 5.07946C6.67567 4.4261 5.56706 5.06615 5.79545 5.9773C5.91797 6.46606 5.63056 6.96387 5.14602 7.10215C4.24275 7.35993 4.24275 8.64004 5.14602 8.89782C5.63056 9.0361 5.91797 9.53391 5.79545 10.0227C5.56706 10.9338 6.67567 11.5739 7.35055 10.9205C7.71258 10.57 8.28739 10.57 8.64942 10.9205C9.3243 11.5739 10.4329 10.9338 10.2045 10.0227C10.082 9.53391 10.3694 9.0361 10.854 8.89782C11.7572 8.64004 11.7572 7.35993 10.854 7.10215C10.3694 6.96387 10.082 6.46606 10.2045 5.9773Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M21.6593 8C21.6927 8 21.7148 7.96556 21.7003 7.93555C21.5555 7.63646 21.3607 7.36074 21.1213 7.12132L16.8787 2.87868C16.6393 2.63926 16.3635 2.44448 16.0644 2.29972C16.0344 2.28519 16 2.30732 16 2.34066V5C16 6.65685 17.3431 8 19 8H21.6593Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })]
                })
            }
        },
        194247: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("551042");

            function l(t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("332512").then(n.bind(n, "332512"));
                    return n => (0, r.jsx)(e, {
                        ...t,
                        ...n
                    })
                })
            }
        },
        911530: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchGuildProductsForGuild: function() {
                    return i
                },
                fetchGuildProduct: function() {
                    return s
                },
                updateGuildProductListing: function() {
                    return u
                },
                deleteGuildProductListing: function() {
                    return d
                }
            });
            var r = n("913144"),
                a = n("448993"),
                l = n("242278");
            let i = async t => {
                r.default.dispatch({
                    type: "GUILD_PRODUCTS_FETCH",
                    guildId: t
                });
                try {
                    let e = await l.getGuildProductListingsForGuild(t);
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_SUCCESS",
                        guildId: t,
                        products: e
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_FAILURE",
                        guildId: t
                    })
                }
            }, s = async (t, e) => {
                r.default.dispatch({
                    type: "GUILD_PRODUCT_FETCH",
                    productId: e
                });
                try {
                    let n = await l.getGuildProductListing(t, e);
                    return r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_SUCCESS",
                        product: n
                    }), n
                } catch (t) {
                    throw r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_FAILURE",
                        productId: e,
                        error: new a.APIError(t)
                    }), t
                }
            };
            async function u(t, e, n) {
                let a = await l.updateGuildProductListing(t, e, n);
                return r.default.dispatch({
                    type: "GUILD_PRODUCT_UPDATE",
                    product: a
                }), a
            }
            async function d(t, e) {
                return await l.deleteGuildProductListing(t, e), r.default.dispatch({
                    type: "GUILD_PRODUCT_DELETE",
                    productId: e
                }), !0
            }
        },
        242278: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateGuildProductListing: function() {
                    return s
                },
                deleteGuildProductListing: function() {
                    return u
                },
                getGuildProductListingsForGuild: function() {
                    return d
                },
                getGuildProductListing: function() {
                    return o
                },
                requestDownloadUrl: function() {
                    return c
                }
            });
            var r = n("872717"),
                a = n("448993"),
                l = n("271560"),
                i = n("49111");
            let s = async (t, e, n) => {
                let {
                    priceTier: l,
                    imageName: s,
                    createNewRole: u,
                    unlinkRole: d,
                    ...o
                } = n;
                try {
                    let n = await r.default.patch({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
                        body: {
                            ...o,
                            image_name: s,
                            price_tier: l,
                            create_new_role: u,
                            unlink_role: d
                        }
                    });
                    return n.body
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, u = async (t, e) => {
                try {
                    await r.default.delete({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    })
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, d = async t => {
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t)
                    });
                    return e.body.listings
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, o = async (t, e) => {
                try {
                    let n = await (0, l.httpGetWithCountryCodeQuery)({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    });
                    return n.body
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, c = async t => {
                let {
                    guildId: e,
                    productId: n,
                    attachmentId: l
                } = t;
                try {
                    let t = await r.default.post({
                        url: i.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, l)
                    });
                    return t.body
                } catch (t) {
                    throw new a.APIError(t)
                }
            }
        },
        153587: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                download: function() {
                    return a
                }
            });
            var r = n("545158");

            function a(t) {
                return (0, r.default)(t)
            }
        },
        158195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("884691"),
                a = n("404118"),
                l = n("448993"),
                i = n("242278"),
                s = n("153587"),
                u = n("782340");

            function d(t, e) {
                let [n, d] = r.useState(!1), o = r.useCallback(async n => {
                    if (null != t && null != e) {
                        d(!0);
                        try {
                            let {
                                url: r
                            } = await i.requestDownloadUrl({
                                guildId: t,
                                productId: e,
                                attachmentId: n
                            });
                            await s.download(r)
                        } catch (e) {
                            let t = e instanceof l.APIError ? e.getAnyErrorMessage() : void 0;
                            a.default.show({
                                title: u.default.Messages.ERROR_GENERIC_TITLE,
                                body: null != t ? t : u.default.Messages.GENERIC_ERROR_BODY
                            })
                        } finally {
                            d(!1)
                        }
                    }
                }, [t, e]);
                return {
                    isLoading: n,
                    downloadAttachment: o
                }
            }
        },
        928576: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useProductType: function() {
                    return i
                },
                usePrice: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("153160"),
                l = n("782340");

            function i(t) {
                return r.useMemo(() => {
                    if (null == t) return;
                    let e = null != t.role_id,
                        n = t.attachments_count > 0;
                    if (e && n) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
                    if (e) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
                    if (n) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
                }, [t])
            }

            function s(t) {
                return r.useMemo(() => {
                    if ((null == t ? void 0 : t.price) == null) return;
                    let {
                        amount: e,
                        currency: n
                    } = t.price;
                    return (0, a.formatPrice)(e, n)
                }, [t])
            }
        },
        911029: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("191814"),
                i = n("903635"),
                s = n("238953");

            function u(t) {
                var e;
                let {
                    attachment: n
                } = t, u = null !== (e = n.size) && void 0 !== e ? e : 0;
                return (0, r.jsxs)("div", {
                    className: s.container,
                    children: [(0, r.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: s.fileIcon
                    }), (0, r.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: s.fileName,
                        children: n.filename
                    }), (0, r.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)("div", {
                        className: s.dot
                    }), (0, r.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsxs)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
        },
        856246: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("191814"),
                i = n("295737");

            function s(t) {
                let {
                    children: e,
                    label: n
                } = t;
                return (0, r.jsxs)("li", {
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: i.benefitLabel,
                        children: n
                    }), (0, r.jsx)(l.default, {
                        size: 12
                    }), e]
                })
            }
        },
        898998: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("158195");

            function i(t) {
                let {
                    guildId: e,
                    productId: n,
                    attachmentId: i,
                    ...s
                } = t, {
                    isLoading: u,
                    downloadAttachment: d
                } = (0, l.default)(e, n);
                return (0, r.jsx)(a.Button, {
                    ...s,
                    submitting: u,
                    onClick: function() {
                        d(i)
                    }
                })
            }
        },
        407417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                i = n("65597"),
                s = n("77078"),
                u = n("191814"),
                d = n("246053"),
                o = n("195812"),
                c = n("565559"),
                f = n("35018"),
                h = n("898998"),
                x = n("782340"),
                _ = n("418530");

            function C(t) {
                var e, n, a, C;
                let {
                    guildId: m,
                    productId: D
                } = t, I = (0, i.default)([c.default], () => c.default.getGuildProduct(D)), T = (null !== (C = null == I ? void 0 : null === (e = I.attachments) || void 0 === e ? void 0 : e.length) && void 0 !== C ? C : 0) > 1, L = null == I ? void 0 : null === (a = I.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
                return T ? (0, r.jsxs)(s.Button, {
                    onClick: function() {
                        f.default.open({
                            guildId: m,
                            productId: D
                        })
                    },
                    innerClassName: _.textWithIcon,
                    children: [(0, r.jsx)("div", {
                        children: x.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
                    }), (0, r.jsx)(u.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)(d.default, {
                        width: 16,
                        height: 16,
                        direction: d.default.Directions.RIGHT
                    })]
                }) : (l(null != L, "No attachment"), (0, r.jsxs)(h.default, {
                    guildId: m,
                    productId: D,
                    attachmentId: L,
                    innerClassName: _.textWithIcon,
                    children: [(0, r.jsx)("div", {
                        children: x.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
                    }), (0, r.jsx)(u.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)(o.default, {
                        width: 16,
                        height: 16
                    })]
                }))
            }
        },
        246421: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("509043"),
                l = n("77078"),
                i = n("191814"),
                s = n("45029"),
                u = n("782340"),
                d = n("411531");

            function o(t) {
                let {
                    locked: e,
                    role: n,
                    textVariant: o = "text-xs/medium"
                } = t, c = (0, l.useToken)(l.tokens.colors.INTERACTIVE_NORMAL).hex();
                return (0, r.jsx)("div", {
                    className: d.roleTagContainer,
                    children: (0, r.jsxs)("div", {
                        className: d.roleTag,
                        children: [(0, r.jsx)("div", {
                            className: d.roleColor,
                            style: {
                                backgroundColor: (0, a.int2hex)(n.color)
                            }
                        }), (0, r.jsx)(i.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, r.jsxs)(l.Text, {
                            variant: o,
                            color: "text-normal",
                            children: [(0, r.jsx)(l.HiddenVisually, {
                                children: u.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
                            }), n.name]
                        }), !0 === e && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, r.jsx)(s.default, {
                                color: c
                            })]
                        })]
                    })
                })
            }
        },
        35018: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = {
                    open: function(t) {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("560057").then(n.bind(n, "560057"));
                            return n => (0, r.jsx)(e, {
                                ...t,
                                ...n
                            })
                        })
                    }
                }
        },
        392977: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return P
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                s = n("627445"),
                u = n.n(s),
                d = n("446674"),
                o = n("271841"),
                c = n("77078"),
                f = n("750482"),
                h = n("194247"),
                x = n("305961"),
                _ = n("191814"),
                C = n("945330"),
                m = n("153160"),
                D = n("911530"),
                I = n("565559"),
                T = n("928576"),
                L = n("911029"),
                O = n("856246"),
                v = n("407417"),
                g = n("246421"),
                j = n("782340"),
                N = n("723262");

            function R(t) {
                let {
                    guildProductListing: e,
                    guildId: n,
                    skuPricePreview: a
                } = t, l = (0, T.useProductType)(e), i = (0, m.formatPrice)(a.amount, a.currency), s = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(n));
                return u(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
                    className: N.purchaseSummaryContainer,
                    children: [(0, r.jsx)(f.default, {
                        alt: "",
                        className: N.purchaseSummaryImage,
                        listing: e,
                        imageSize: 100
                    }), (0, r.jsxs)("div", {
                        className: N.purchaseSummarInfo,
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: e.name
                        }), (0, r.jsx)(_.default, {
                            size: 4
                        }), (0, r.jsxs)("div", {
                            className: N.productTypeContainer,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l
                            }), (0, r.jsx)("div", {
                                className: N.dotSeparator
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                lineClamp: 2,
                                children: s.name
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: N.purchaseSummaryPrice,
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: i
                        }), (0, r.jsx)(_.default, {
                            size: 4
                        }), (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: j.default.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
                        })]
                    })]
                })
            }

            function U(t) {
                var e;
                let {
                    guildProductListing: n,
                    guildId: a
                } = t, l = null !== (e = n.attachments) && void 0 !== e ? e : [], s = l.length > 1;
                return 0 === l.length ? null : (0, r.jsx)(O.default, {
                    label: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
                    children: (0, r.jsxs)("div", {
                        className: i(N.attachmentsContainer, {
                            [N.attachmentsContainerMultiple]: s
                        }),
                        children: [(0, r.jsx)("div", {
                            className: N.attachmentGrid,
                            children: l.map(t => (0, r.jsx)(L.default, {
                                attachment: t
                            }, t.id))
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(v.default, {
                                guildId: a,
                                productId: n.id
                            })
                        })]
                    })
                })
            }

            function E(t) {
                let {
                    role: e
                } = t;
                return null == e ? null : (0, r.jsx)(O.default, {
                    label: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
                    children: (0, r.jsx)(g.default, {
                        role: e
                    })
                })
            }

            function p(t) {
                return (0, r.jsx)(c.Text, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "text-normal",
                    children: t
                })
            }

            function P(t) {
                var e;
                let {
                    onClose: n,
                    transitionState: l,
                    guildProductListingId: i,
                    guildId: s,
                    skuPricePreview: f
                } = t, m = (0, d.useStateFromStores)([I.default], () => I.default.getGuildProduct(i));
                u(null != m, "guildProductListing cannot be null");
                let [T, L] = a.useState(!1);
                a.useEffect(() => {
                    (async function t() {
                        try {
                            L(!0), await (0, D.fetchGuildProduct)(s, i), L(!1)
                        } catch (t) {
                            n(), (0, h.default)({
                                body: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
                                confirmText: j.default.Messages.GOT_IT,
                                header: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
                                confirmButtonColor: o.Button.Colors.BRAND
                            })
                        }
                    })()
                }, [s, i, n]);
                let O = (null !== (e = m.attachments) && void 0 !== e ? e : []).length > 0,
                    v = m.role_id,
                    g = (0, d.useStateFromStores)([x.default], () => {
                        var t;
                        return null != v ? null === (t = x.default.getGuild(s)) || void 0 === t ? void 0 : t.roles[v] : void 0
                    }, [s, v]);
                return (0, r.jsx)(c.ModalRoot, {
                    className: N.modal,
                    size: c.ModalSize.DYNAMIC,
                    transitionState: l,
                    "aria-label": m.name,
                    children: (0, r.jsx)(c.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: N.container,
                            children: T ? (0, r.jsx)(c.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("div", {
                                    className: N.header,
                                    children: [(0, r.jsx)(c.Heading, {
                                        variant: "heading-xl/semibold",
                                        color: "header-primary",
                                        children: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
                                    }), (0, r.jsx)(c.Clickable, {
                                        onClick: n,
                                        children: (0, r.jsx)(C.default, {
                                            width: 24,
                                            height: 24,
                                            className: N.close
                                        })
                                    })]
                                }), (0, r.jsx)(_.default, {
                                    size: 16
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
                                        productName: m.name,
                                        emphasisHook: p
                                    })
                                }), (0, r.jsx)(_.default, {
                                    size: 12
                                }), (0, r.jsxs)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: [O ? j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != g ? j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
                                        roleName: g.name,
                                        emphasisHook: p
                                    }) : ""]
                                }), (0, r.jsx)(_.default, {
                                    size: 12
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: j.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
                                }), (0, r.jsx)(_.default, {
                                    size: 24
                                }), (0, r.jsx)(R, {
                                    guildProductListing: m,
                                    guildId: s,
                                    skuPricePreview: f
                                }), (0, r.jsx)(_.default, {
                                    size: 32
                                }), (0, r.jsx)("div", {
                                    className: N.divider
                                }), (0, r.jsx)(_.default, {
                                    size: 32
                                }), (0, r.jsxs)("ul", {
                                    className: N.benefitsContainer,
                                    children: [(0, r.jsx)(U, {
                                        guildProductListing: m,
                                        guildId: s
                                    }), (0, r.jsx)(E, {
                                        role: g
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        903635: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("77998"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                            fill: a,
                            className: l
                        })
                    })
                }, l.ImageFileIcon, void 0, {
                    size: 16
                })
        }
    }
]);