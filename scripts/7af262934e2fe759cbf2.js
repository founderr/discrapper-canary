"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89030], {
        489030: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => _e
            });
            var n = t(785893),
                o = t(667294),
                a = t(408522),
                i = t(202351),
                c = t(70418),
                s = t(153686),
                l = t(19585),
                u = t(339938),
                f = t(613815),
                d = t(349771),
                p = t(318715),
                h = t(764797),
                v = t(767539);

            function y(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function m(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return y(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const b = function(e) {
                var r = m((0, p.Wu)([h.Z], (function() {
                    return [h.Z.getCategoryForProduct(e), h.Z.getProduct(e)]
                })), 2);
                return {
                    category: r[0],
                    product: r[1],
                    purchase: (0, p.ZP)([v.Z], (function() {
                        return v.Z.getPurchase(e)
                    }))
                }
            };
            var g = t(681714),
                O = t(118024),
                j = t(455706),
                E = t(708783),
                S = t(473903),
                A = t(652591),
                C = t(116094),
                P = t(938737),
                w = t(294184),
                _ = t.n(w),
                x = t(498964),
                I = t(974251),
                Z = t(384411),
                D = t(491260),
                R = t(169844),
                M = t(310126),
                T = t(473708);

            function N(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }
            var H = M.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;
            const k = function(e) {
                var r = e.user,
                    t = e.avatarDecorationOverride,
                    o = e.status,
                    a = e.avatarSize,
                    i = void 0 === a ? c.AvatarSizes.SIZE_120 : a,
                    s = e["aria-hidden"],
                    l = void 0 !== s && s,
                    u = (0, R.Z)({
                        user: r,
                        size: i,
                        showPending: !0,
                        avatarDecorationOverride: t
                    }),
                    f = u.avatarDecorationSrc,
                    d = u.avatarSrc,
                    p = u.eventHandlers;
                return (0, n.jsx)(H, function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            N(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: f,
                    src: d,
                    size: i,
                    status: o,
                    "aria-label": l ? void 0 : T.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": l
                }, p))
            };
            var L = t(504477),
                U = t.n(L),
                F = [{
                    avatarSize: c.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: c.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: c.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: c.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                V = function(e) {
                    var r = e.purchase,
                        t = (0,
                            i.e7)([Z.default], (function() {
                            return Z.default.locale
                        })),
                        o = (0, d.qS)(r);
                    return (0, n.jsxs)("div", {
                        className: U().purchaseInfo,
                        children: [(0, n.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: r.name
                        }), (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: r.summary
                        }), (0, n.jsxs)(c.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [T.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: r.purchasedAt.toLocaleDateString(t, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), o && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("br", {}), T.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            const z = function(e) {
                var r = e.user,
                    t = e.avatarDecorationOverride,
                    o = e.className,
                    a = (0, i.e7)([D.Z], (function() {
                        return D.Z.getStatus(r.id)
                    })),
                    s = b(null == t ? void 0 : t.skuId),
                    l = s.category,
                    u = s.product,
                    p = s.purchase,
                    h = C.ZP.canUseCollectibles(r),
                    v = (0, d.qS)(p),
                    y = (0, d.mv)(l),
                    m = (0, f.Z)({
                        location: "AvatarDecorationModalPreview"
                    }).shopForAllEnabled,
                    g = !h && v;
                return null == u || null != p && !g ? (0, n.jsxs)("div", {
                    className: _()(U().modalPreview, o),
                    children: [(0, n.jsxs)("div", {
                        className: U().previewSections,
                        children: [(0, n.jsx)("div", {
                            className: U().decorationPreview,
                            children: (0, n.jsx)(k, {
                                user: r,
                                avatarDecorationOverride: t
                            })
                        }), (0, n.jsx)("div", {
                            className: U().smallDecorationPreviewsContainer,
                            children: F.map((function(e) {
                                var o = e.avatarSize,
                                    i = e.showStatus;
                                return (0, n.jsx)("div", {
                                    className: U().smallDecorationPreview,
                                    children: (0, n.jsx)(k, {
                                        user: r,
                                        avatarSize: o,
                                        avatarDecorationOverride: t,
                                        status: i ? a : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(o).concat(i))
                            }))
                        })]
                    }), null != p && (0, n.jsx)(V, {
                        purchase: p
                    })]
                }) : (0, n.jsxs)("div", {
                    className: _()(U().modalPreview, U().shopPreviewContainer, o),
                    children: [(0, n.jsx)(I.Z, {
                        asset: null == l ? void 0 : l.banner,
                        className: U().shopPreviewBanner,
                        children: (0, n.jsx)(k, {
                            user: r,
                            avatarDecorationOverride: t
                        })
                    }), (0, n.jsxs)("div", {
                        className: U().shopPreviewTextContainer,
                        children: [(0, n.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            children: u.name
                        }), (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: g ? T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, x.EQ)([y, h]).with([!0, !0], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
                            })).with([!0, !1], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER
                            })).with([!1, !0], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM
                            })).with([!1, !1], (function() {
                                return m ? T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM : T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE
                            })).exhaustive()
                        })]
                    })]
                })
            };
            var B, G = t(517586),
                W = t(662478),
                $ = t(937150),
                K = t(243764),
                q = t(406493),
                Q = t(778613),
                Y = t(97990),
                J = t(531441);

            function X(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function ee(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || te(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e) {
                return function(e) {
                    if (Array.isArray(e)) return X(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || te(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function te(e, r) {
                if (e) {
                    if ("string" == typeof e) return X(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? X(e, r) : void 0
                }
            }! function(e) {
                e.PURCHASE = "purchase";
                e.PREMIUM_PURCHASE = "premium_purchase";
                e.PREVIEW = "preview";
                e.PREMIUM_PREVIEW = "premium_preview"
            }(B || (B = {}));
            var ne = {
                    id: "None"
                },
                oe = {
                    id: "Shop"
                };
            const ae = function() {
                var e = (0, p.ZP)([S.default], (function() {
                        return S.default.getCurrentUser()
                    })),
                    r = C.ZP.canUseCollectibles(e),
                    t = (0, f.Z)({
                        location: "useAvatarDecorationSections"
                    }).shopForAllEnabled,
                    n = (0, p.ZP)([v.Z], (function() {
                        return v.Z.purchases
                    })),
                    a = ee((0, p.Wu)([h.Z], (function() {
                        return [h.Z.categories, h.Z.categorySkuIdsByProductSkuId]
                    })), 2),
                    i = a[0],
                    c = a[1];
                return (0, o.useMemo)((function() {
                    var e = (0, d.IM)(i).reduce((function(e, t) {
                            var o = n.get(t.skuId),
                                a = (0, d.qS)(o);
                            if (a && 0 === e.premium_purchase.length) {
                                e.premium_purchase = e.premium_preview;
                                e.premium_preview = []
                            }
                            if (a) {
                                e.premium_purchase.push(t);
                                return e
                            }
                            if (null != o) {
                                e.purchase.push(t);
                                return e
                            }
                            var s = i.get(c[t.skuId]);
                            if (!r && (0, d.mv)(s)) {
                                (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(t);
                                return e
                            }
                            e.preview.push(t);
                            return e
                        }), {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        }),
                        o = !(!r && !t) || e.purchase.length > 0;
                    return [{
                        section: B.PURCHASE,
                        items: o ? [ne, oe].concat(re(e.purchase)) : [],
                        height: 12,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: e.premium_purchase.length > 0 ? B.PREMIUM_PURCHASE : B.PREMIUM_PREVIEW,
                        items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                        height: 12,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: B.PREVIEW,
                        items: e.preview,
                        height: 12,
                        header: T.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter((function(e) {
                        return e.items.length > 0
                    }))
                }), [i, n, c, r, t])
            };
            var ie = t(501486),
                ce = t(158504),
                se = t.n(ce);

            function le(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function ue(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function fe(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        ue(e, r, t[r])
                    }))
                }
                return e
            }

            function de(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function pe(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function he(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return le(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return le(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ve = function() {
                    return 80
                },
                ye = function(e) {
                    var r = e.children,
                        t = e.className,
                        o = e.onSelect,
                        a = e.isSelected,
                        i = void 0 !== a && a,
                        s = pe(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0, n.jsx)(c.Clickable, de(fe({
                        className: _()(se().decorationGridItem, i ? se().selected : void 0, t)
                    }, s), {
                        onClick: o,
                        children: r
                    }))
                },
                me = function(e) {
                    var r = e.user,
                        t = e.avatarDecoration,
                        a = e.innerRef,
                        i = e.section,
                        c = e.isSelected,
                        s = void 0 !== c && c,
                        l = pe(e, ["user", "avatarDecoration", "innerRef", "section", "isSelected"]),
                        u = (0, p.ZP)([h.Z], (function() {
                            var e = h.Z.getCategoryForProduct(t.skuId);
                            return (0, d.mv)(e)
                        })),
                        f = (0, p.ZP)([$.Z], (function() {
                            return $.Z.isItemViewed(t)
                        })),
                        v = C.ZP.canUseCollectibles(r),
                        y = i === B.PREMIUM_PURCHASE && !v,
                        m = he(o.useState(s), 2),
                        b = m[0],
                        g = m[1];
                    o.useEffect((function() {
                        s && g(!0)
                    }), [s]);
                    var O = o.useRef(null),
                        j = (0, W.Z)(null != a ? a : O),
                        E = (0, ie.Z)({
                            user: r,
                            avatarDecorationOverride: t,
                            size: 80,
                            animateOnHover: !j
                        }).avatarDecorationSrc;
                    return (0, n.jsxs)(ye, de(fe({
                        className: y ? se().decorationGridItemChurned : void 0,
                        innerRef: null != a ? a : O,
                        isSelected: s
                    }, l), {
                        children: [(0, n.jsx)("img", {
                            className: se().presetDecorationImg,
                            src: E,
                            alt: t.label
                        }), i === B.PURCHASE || i === B.PREMIUM_PURCHASE && v ? null : f || s || b ? (0, n.jsx)(J.G2, {
                            icon: u ? function() {
                                return (0, n.jsx)(q.Z, {
                                    width: 14,
                                    height: 14
                                })
                            } : function() {
                                return (0, n.jsx)(Y.Z, {
                                    width: 12,
                                    height: 12
                                })
                            },
                            color: G.Z.BACKGROUND_ACCENT,
                            className: se().iconBadge
                        }) : (0, n.jsx)(J.lB, {
                            className: se().newBadge,
                            text: (0, n.jsxs)("div", {
                                className: se().newBadgeText,
                                children: [(0, n.jsx)(Y.Z, {
                                    width: 12,
                                    height: 12
                                }), T.Z.Messages.NEW]
                            })
                        })]
                    }))
                };
            const be = function(e) {
                var r = e.user,
                    t = e.pendingAvatarDecoration,
                    o = e.selectedAvatarDecorationRef,
                    a = e.onSelect,
                    i = e.onOpenShop,
                    s = ae();
                return (0, n.jsx)(c.MasonryList, {
                    fade: !0,
                    className: se().list,
                    columns: 3,
                    sections: s.map((function(e) {
                        return e.items.length
                    })),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: function(e, l, u, f) {
                        var d = s[e],
                            p = d.section,
                            h = d.items;
                        return (0, x.EQ)(h[l]).with(ne, (function() {
                            return (0, n.jsxs)(ye, {
                                style: fe({}, u),
                                isSelected: null === t,
                                onSelect: function() {
                                    return a(null)
                                },
                                children: [(0, n.jsx)(Q.Z, {
                                    className: se().notAllowedIcon
                                }), (0, n.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: T.Z.Messages.NONE
                                })]
                            }, f)
                        })).with(oe, (function() {
                            return (0, n.jsxs)(ye, {
                                style: u,
                                onSelect: i,
                                children: [(0, n.jsx)(K.Z, {
                                    className: se().shopIcon
                                }), (0, n.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: T.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, f)
                        })).otherwise((function(e) {
                            var i = (null == t ? void 0 : t.id) === e.id;
                            return (0, n.jsx)(me, {
                                style: fe({}, u),
                                user: r,
                                avatarDecoration: e,
                                section: p,
                                innerRef: i ? o : void 0,
                                isSelected: i,
                                onSelect: function() {
                                    return a(e)
                                }
                            }, f)
                        }))
                    },
                    renderSection: function(e) {
                        var r = s[e].header;
                        return (0, n.jsx)("div", {
                            className: se().headings,
                            children: (0, n.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, n.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: r
                                })
                            })
                        })
                    },
                    getSectionHeight: function(e) {
                        return s[e].height
                    },
                    getItemKey: function(e, r) {
                        return s[e].items[r].id
                    },
                    getItemHeight: ve
                })
            };
            var ge = t(2590),
                Oe = t(203600),
                je = t(919065),
                Ee = t.n(je);

            function Se(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function Ae(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || Pe(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ce(e) {
                return function(e) {
                    if (Array.isArray(e)) return Se(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Pe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pe(e, r) {
                if (e) {
                    if ("string" == typeof e) return Se(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Se(e, r) : void 0
                }
            }

            function we(e) {
                var r = e.user,
                    t = e.categories,
                    a = e.analyticsLocations,
                    i = e.onClose,
                    l = e.initialSelectedDecoration,
                    p = e.isTryItOutFlow,
                    h = (0, E.Z)({
                        analyticsLocations: a,
                        isTryItOut: p
                    }),
                    v = h.pendingAvatarDecoration,
                    y = h.setPendingAvatarDecoration,
                    m = Ae(o.useState((function() {
                        return null != l ? l : void 0 !== v ? v : null == (null == r ? void 0 : r.avatarDecoration) || 0 === t.size ? null : null !== (e = (0, d.IM)(t).find((function(e) {
                            return (0, P.sr)(e, r.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    g = m[0],
                    S = m[1],
                    A = b(null == g ? void 0 : g.skuId),
                    w = A.category,
                    _ = A.purchase,
                    x = C.ZP.canUseCollectibles(r),
                    I = o.useRef(null),
                    Z = (0, O.Z)(a),
                    D = (0, f.Z)({
                        location: "AvatarDecorationModal"
                    }).shopForAllEnabled,
                    R = (0, P.sr)(g, void 0 === v ? null == r ? void 0 : r.avatarDecoration : v),
                    M = function() {
                        y(g);
                        i()
                    },
                    N = function() {
                        i();
                        (0, u.mK)({
                            analyticsLocations: a,
                            analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL
                        })
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: Ee().modalHeader,
                        children: [(0, n.jsx)("div", {
                            className: Ee().modalHeadings,
                            children: (0, n.jsx)(c.HeadingLevel, {
                                component: (0, n.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: T.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !x && !D && (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(c.ModalCloseButton, {
                            className: Ee().modalCloseButton,
                            onClick: i
                        })]
                    }), (0, n.jsxs)(c.ModalContent, {
                        className: Ee().modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(be, {
                            user: r,
                            pendingAvatarDecoration: g,
                            selectedAvatarDecorationRef: I,
                            onSelect: function(e) {
                                S(e);
                                null != e && Z(e)
                            },
                            onOpenShop: N
                        }), (0, n.jsx)(z, {
                            className: Ee().modalPreview,
                            user: r,
                            avatarDecorationOverride: g
                        })]
                    }), (0, n.jsxs)(c.ModalFooter, {
                        className: Ee().modalFooter,
                        children: [null != _ && (!(0, d.qS)(_) || x) || null === g ? (0, n.jsx)(c.Button, {
                            onClick: M,
                            disabled: R,
                            children: T.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : x || !(0, d.mv)(w) ? (0, n.jsx)(c.Button, {
                            className: Ee().modalFooterShopButton,
                            onClick: N,
                            children: T.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, n.jsx)(j.Z, {
                            subscriptionTier: Oe.Si.TIER_2,
                            buttonText: C.ZP.isPremium(r) ? T.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, n.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: i,
                            children: T.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function _e(e) {
                var r = e.transitionState,
                    t = e.analyticsLocations,
                    f = e.onClose,
                    d = e.initialSelectedDecoration,
                    p = e.isTryItOutFlow,
                    h = (0, i.e7)([S.default], (function() {
                        return S.default.getCurrentUser()
                    })),
                    v = (0, l.Z)(t, s.Z.EDIT_AVATAR_DECORATION_MODAL),
                    y = v.AnalyticsLocationProvider,
                    m = v.analyticsLocations,
                    b = (0, g.ZP)(),
                    O = b.categories,
                    j = b.purchases,
                    E = b.isFetchingCategories,
                    C = b.isFetchingPurchases,
                    P = E || C && 0 === j.size;
                o.useEffect((function() {
                    A.default.track(ge.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: m
                    })
                }), [m]);
                o.useEffect((function() {
                    return function() {
                        (0, u.K$)({
                            categories: Ce(O.values()),
                            itemTypes: [a.Z.AVATAR_DECORATION]
                        })
                    }
                }), [O]);
                return null == h ? null : (0, n.jsx)(y, {
                    children: (0, n.jsx)(c.ModalRoot, {
                        transitionState: r,
                        className: Ee().modal,
                        size: P ? c.ModalSize.DYNAMIC : c.ModalSize.MEDIUM,
                        children: P ? (0, n.jsx)(c.Spinner, {
                            className: Ee().spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(we, {
                            user: h,
                            categories: O,
                            analyticsLocations: m,
                            initialSelectedDecoration: d,
                            onClose: f,
                            isTryItOutFlow: p
                        })
                    })
                })
            }
        },
        613815: (e, r, t) => {
            t.d(r, {
                Z: () => o
            });
            var n = (0, t(260561).B)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0
                    }
                }]
            });
            const o = function(e) {
                var r = e.location,
                    t = e.autoTrackExposure,
                    o = void 0 === t || t,
                    a = e.trackExposureOptions,
                    i = void 0 === a ? {} : a;
                return n.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: o,
                    trackExposureOptions: i
                })
            }
        },
        681714: (e, r, t) => {
            t.d(r, {
                ZP: () => d
            });
            var n = t(667294),
                o = t(318715),
                a = t(514722),
                i = t(339938),
                c = t(764797),
                s = t(560465),
                l = t(767539);

            function u(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function f(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d() {
                var e = "useFetchCollectiblesCategoriesAndPurchases";
                (0, a.j)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                });
                (0, a.j)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                (0, s.Z)({
                    location: e
                });
                var r, t = function() {
                        var e, r = "useMaybeFetchCollectiblesCategories";
                        (0, a.j)({
                            location: r + " auto on",
                            autoTrackExposure: !0
                        });
                        (0, a.j)({
                            location: r + " auto off",
                            autoTrackExposure: !1
                        });
                        (0, s.Z)({
                            location: r
                        });
                        var t = f((0,
                                o.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.error, null !== (e = c.Z.lastFetched) && void 0 !== e ? e : 0, c.Z.categories]
                            })), 4),
                            l = t[0],
                            u = t[1],
                            d = t[2],
                            p = t[3];
                        (0, n.useEffect)((function() {
                            l || Boolean(u) || Date.now() - d < 6e5 || (0, i.F$)()
                        }), [l, d, u]);
                        return {
                            isFetching: l,
                            categories: p,
                            error: u
                        }
                    }(),
                    u = t.isFetching,
                    d = t.categories,
                    p = t.error,
                    h = function() {
                        var e = "useFetchPurchases";
                        (0, a.j)({
                            location: "useFetchPurchases auto on",
                            autoTrackExposure: !0
                        });
                        (0, a.j)({
                            location: "useFetchPurchases auto off",
                            autoTrackExposure: !1
                        });
                        (0, s.Z)({
                            location: e
                        });
                        var r = f((0, o.Wu)([l.Z], (function() {
                                return [l.Z.isFetching, l.Z.isClaiming, l.Z.fetchError, l.Z.claimError, l.Z.purchases]
                            })), 5),
                            t = r[0],
                            c = r[1],
                            u = r[2],
                            d = r[3],
                            p = r[4];
                        (0, n.useEffect)((function() {
                            (0, i.qg)()
                        }), []);
                        return {
                            isClaiming: c,
                            fetchError: u,
                            claimError: d,
                            isFetching: t,
                            purchases: p
                        }
                    }(),
                    v = h.isClaiming,
                    y = h.fetchError,
                    m = h.claimError,
                    b = h.isFetching;
                return {
                    isFetching: u || b,
                    isFetchingCategories: u,
                    isFetchingPurchases: b,
                    isClaiming: v,
                    categories: d,
                    purchases: h.purchases,
                    error: null !== (r = null != p ? p : y) && void 0 !== r ? r : m
                }
            }
        },
        974251: (e, r, t) => {
            t.d(r, {
                Z: () => m
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                a = t.n(o),
                i = t(318715),
                c = t(242847),
                s = t(316878),
                l = t(362660),
                u = t(349771),
                f = t(940594),
                d = t(673665),
                p = t.n(d);

            function h(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function v(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        h(e, r, t[r])
                    }))
                }
                return e
            }

            function y(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            const m = function(e) {
                var r = e.asset,
                    t = e.size,
                    o = void 0 === t ? f.yV : t,
                    d = e.className,
                    h = e.style,
                    m = e.children,
                    b = (0, i.ZP)([s.Z], (function() {
                        return s.Z.saturation
                    }));
                return (0, n.jsx)("div", {
                    className: a()(p().banner, d),
                    style: function() {
                        if (null == r) return h;
                        var e = (0, u.uV)(r, {
                            size: o
                        });
                        if (1 === b) return y(v({}, h), {
                            backgroundImage: "url(".concat(e, ")"),
                            backgroundSize: "cover"
                        });
                        var t = (0, l.aD)(c.ZP.unsafe_rawColors.BLACK_500, 1 - b);
                        return y(v({}, h), {
                            backgroundImage: "linear-gradient(".concat(t, ", ").concat(t, "), url(").concat(e, ")"),
                            backgroundBlendMode: "saturation",
                            backgroundSize: "cover"
                        })
                    }(),
                    children: m
                })
            }
        },
        940594: (e, r, t) => {
            t.d(r, {
                IC: () => o,
                nH: () => a,
                yV: () => n
            });
            var n = 1060,
                o = function(e) {
                    return 3.8 * e
                },
                a = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        t = e.primary,
                        n = e.secondary;
                    return "linear-gradient(".concat(r, "deg, ").concat(t.toHslString(), ", ").concat(n.toHslString(), ")")
                }
        },
        243764: (e, r, t) => {
            t.d(r, {
                Z: () => p
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
                a = t(795308),
                i = t(633878);

            function c(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function s(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function l(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function u(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function f(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function d(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 23 : r,
                    o = e.height,
                    a = void 0 === o ? 18 : o,
                    c = e.color,
                    s = void 0 === c ? "currentColor" : c,
                    l = d(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            u(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(l)), {
                    width: t,
                    height: a,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                        fill: s
                    })
                }))
            }), (function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? a.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2.635 4.188A3 3 0 0 1 5.523 2H7a1 1 0 0 1 1 1v3.983a3.067 3.067 0 0 1 0 .051A2.966 2.966 0 0 1 4.983 10c-2 0-3.446-1.91-2.905-3.834l.557-1.978ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.966V3a1 1 0 0 0-1-1h-4Zm7 0a1 1 0 0 0-1 1v3.983a2.43 2.43 0 0 0 0 .051A2.966 2.966 0 0 0 19.017 10c2 0 3.446-1.91 2.905-3.834l-.557-1.978A3 3 0 0 0 18.477 2H17Zm4 9.423V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75a.25.25 0 0 1-.25.25H6a3 3 0 0 1-3-3v-7.577c0-.187.199-.31.372-.24a4.46 4.46 0 0 0 1.662.317c1.293 0 2.458-.55 3.273-1.428a.278.278 0 0 1 .405 0A4.488 4.488 0 0 0 12 11.5c1.298 0 2.467-.55 3.289-1.428a.278.278 0 0 1 .404 0 4.454 4.454 0 0 0 3.273 1.428 4.46 4.46 0 0 0 1.662-.317c.174-.07.372.053.372.24Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        778613: (e, r, t) => {
            t.d(r, {
                Z: () => s
            });
            var n = t(785893),
                o = (t(667294), t(633878));

            function a(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function i(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function c(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function s(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    s = e.height,
                    l = void 0 === s ? 24 : s,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.className,
                    p = e.foreground,
                    h = c(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsxs)("svg", i(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            a(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    className: d,
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                    })]
                }))
            }
        }
    }
]);