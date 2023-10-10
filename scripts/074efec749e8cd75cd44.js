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
                c = t(304548),
                s = t(153686),
                u = t(19585),
                l = t(339938),
                f = t(349771),
                d = t(318715),
                p = t(764797),
                h = t(767539);

            function y(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function v(e, r) {
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
            const m = function(e) {
                var r = v((0, d.Wu)([p.Z], (function() {
                    return [p.Z.getCategoryForProduct(e), p.Z.getProduct(e)]
                })), 2);
                return {
                    category: r[0],
                    product: r[1],
                    purchase: (0, d.ZP)([h.Z], (function() {
                        return h.Z.getPurchase(e)
                    }))
                }
            };
            var b = t(681714),
                g = t(118024),
                O = t(455706),
                j = t(708783),
                S = t(473903),
                E = t(652591),
                A = t(116094),
                C = t(938737),
                w = t(294184),
                P = t.n(w),
                _ = t(498964),
                x = t(974251),
                I = t(384411),
                Z = t(491260),
                D = t(169844),
                R = t(310126),
                M = t(473708);

            function T(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }
            var N = R.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;
            const H = function(e) {
                var r = e.user,
                    t = e.avatarDecorationOverride,
                    o = e.status,
                    a = e.avatarSize,
                    i = void 0 === a ? c.AvatarSizes.SIZE_120 : a,
                    s = e["aria-hidden"],
                    u = void 0 !== s && s,
                    l = (0, D.Z)({
                        user: r,
                        size: i,
                        showPending: !0,
                        avatarDecorationOverride: t
                    }),
                    f = l.avatarDecorationSrc,
                    d = l.avatarSrc,
                    p = l.eventHandlers;
                return (0, n.jsx)(N, function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            T(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: f,
                    src: d,
                    size: i,
                    status: o,
                    "aria-label": u ? void 0 : M.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": u
                }, p))
            };
            var k = t(504477),
                L = t.n(k),
                U = [{
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
                            i.e7)([I.default], (function() {
                            return I.default.locale
                        })),
                        o = (0, f.qS)(r);
                    return (0, n.jsxs)("div", {
                        className: L().purchaseInfo,
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
                            children: [M.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: r.purchasedAt.toLocaleDateString(t, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), o && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("br", {}), M.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            const z = function(e) {
                var r = e.user,
                    t = e.avatarDecorationOverride,
                    o = e.className,
                    a = (0, i.e7)([Z.Z], (function() {
                        return Z.Z.getStatus(r.id)
                    })),
                    s = m(null == t ? void 0 : t.skuId),
                    u = s.category,
                    l = s.product,
                    d = s.purchase,
                    p = A.ZP.canUseCollectibles(r),
                    h = (0, f.qS)(d),
                    y = (0, f.mv)(u),
                    v = !p && h;
                return null == l || null != d && !v ? (0, n.jsxs)("div", {
                    className: P()(L().modalPreview, o),
                    children: [(0, n.jsxs)("div", {
                        className: L().previewSections,
                        children: [(0, n.jsx)("div", {
                            className: L().decorationPreview,
                            children: (0, n.jsx)(H, {
                                user: r,
                                avatarDecorationOverride: t
                            })
                        }), (0, n.jsx)("div", {
                            className: L().smallDecorationPreviewsContainer,
                            children: U.map((function(e) {
                                var o = e.avatarSize,
                                    i = e.showStatus;
                                return (0, n.jsx)("div", {
                                    className: L().smallDecorationPreview,
                                    children: (0, n.jsx)(H, {
                                        user: r,
                                        avatarSize: o,
                                        avatarDecorationOverride: t,
                                        status: i ? a : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(o).concat(i))
                            }))
                        })]
                    }), null != d && (0, n.jsx)(V, {
                        purchase: d
                    })]
                }) : (0, n.jsxs)("div", {
                    className: P()(L().modalPreview, L().shopPreviewContainer, o),
                    children: [(0, n.jsx)(x.Z, {
                        asset: null == u ? void 0 : u.banner,
                        className: L().shopPreviewBanner,
                        children: (0, n.jsx)(H, {
                            user: r,
                            avatarDecorationOverride: t
                        })
                    }), (0, n.jsxs)("div", {
                        className: L().shopPreviewTextContainer,
                        children: [(0, n.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            children: l.name
                        }), (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: v ? M.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, _.EQ)([y, p]).with([!0, !0], (function() {
                                return M.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
                            })).with([!0, !1], (function() {
                                return M.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER
                            })).with([!1, !0], (function() {
                                return M.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM
                            })).with([!1, !1], (function() {
                                return M.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE
                            })).exhaustive()
                        })]
                    })]
                })
            };
            var B, F = t(517586),
                G = t(662478),
                W = t(937150),
                $ = t(243764),
                K = t(406493),
                q = t(778613),
                Q = t(97990),
                Y = t(616276),
                X = t(531441),
                J = t(841379);

            function ee(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function re(e, r) {
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
                }(e, r) || ne(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function te(e) {
                return function(e) {
                    if (Array.isArray(e)) return ee(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ne(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ne(e, r) {
                if (e) {
                    if ("string" == typeof e) return ee(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ee(e, r) : void 0
                }
            }! function(e) {
                e.PURCHASE = "purchase";
                e.PREMIUM_PURCHASE = "premium_purchase";
                e.PREVIEW = "preview";
                e.PREMIUM_PREVIEW = "premium_preview"
            }(B || (B = {}));
            var oe = {
                    id: "None"
                },
                ae = {
                    id: "Shop"
                };
            const ie = function() {
                var e = (0, d.ZP)([S.default], (function() {
                        return S.default.getCurrentUser()
                    })),
                    r = A.ZP.canUseCollectibles(e),
                    t = (0, d.ZP)([h.Z], (function() {
                        return h.Z.purchases
                    })),
                    n = re((0, d.Wu)([p.Z], (function() {
                        return [p.Z.categories, p.Z.categorySkuIdsByProductSkuId]
                    })), 2),
                    a = n[0],
                    i = n[1];
                return (0, o.useMemo)((function() {
                    var e = (0, f.IM)(a).reduce((function(e, n) {
                        var o = t.get(n.skuId),
                            c = (0, f.qS)(o);
                        if (c && 0 === e.premium_purchase.length) {
                            e.premium_purchase = e.premium_preview;
                            e.premium_preview = []
                        }
                        if (c) {
                            e.premium_purchase.push(n);
                            return e
                        }
                        if (null != o) {
                            e.purchase.push(n);
                            return e
                        }
                        var s = a.get(i[n.skuId]);
                        if (!r && (0, f.mv)(s)) {
                            (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(n);
                            return e
                        }
                        e.preview.push(n);
                        return e
                    }), {
                        purchase: [],
                        premium_purchase: [],
                        preview: [],
                        premium_preview: []
                    });
                    return [{
                        section: B.PURCHASE,
                        items: r || 0 !== e.purchase.length ? [oe, ae].concat(te(e.purchase)) : [],
                        height: 12,
                        header: M.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: e.premium_purchase.length > 0 ? B.PREMIUM_PURCHASE : B.PREMIUM_PREVIEW,
                        items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                        height: 12,
                        header: M.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: B.PREVIEW,
                        items: e.preview,
                        height: 56,
                        header: M.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER
                    }].filter((function(e) {
                        return e.items.length > 0
                    }))
                }), [a, t, i, r])
            };
            var ce = t(158504),
                se = t.n(ce);

            function ue(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function le(e, r, t) {
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
                        le(e, r, t[r])
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
                    if ("string" == typeof e) return ue(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ue(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ye = function() {
                    return 80
                },
                ve = function(e) {
                    var r = e.children,
                        t = e.className,
                        o = e.onSelect,
                        a = e.isSelected,
                        i = void 0 !== a && a,
                        s = pe(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0, n.jsx)(c.Clickable, de(fe({
                        className: P()(se().decorationGridItem, i ? se().selected : void 0, t)
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
                        u = pe(e, ["user", "avatarDecoration", "innerRef", "section", "isSelected"]),
                        l = (0, d.ZP)([p.Z], (function() {
                            var e = p.Z.getCategoryForProduct(t.skuId);
                            return (0, f.mv)(e)
                        })),
                        h = (0, d.ZP)([W.Z], (function() {
                            return W.Z.isItemViewed(t)
                        })),
                        y = A.ZP.canUseCollectibles(r),
                        v = i === B.PREMIUM_PURCHASE && !y,
                        m = he(o.useState(s), 2),
                        b = m[0],
                        g = m[1];
                    o.useEffect((function() {
                        s && g(!0)
                    }), [s]);
                    var O = o.useRef(null),
                        j = (0, G.Z)(null != a ? a : O),
                        S = (0, J.Z)({
                            user: r,
                            avatarDecorationOverride: t,
                            size: 80,
                            animateOnHover: !j
                        }).avatarDecorationSrc;
                    return (0, n.jsxs)(ve, de(fe({
                        className: v ? se().decorationGridItemChurned : void 0,
                        innerRef: null != a ? a : O,
                        isSelected: s
                    }, u), {
                        children: [(0, n.jsx)("img", {
                            className: se().presetDecorationImg,
                            src: S,
                            alt: t.label
                        }), i === B.PURCHASE || i === B.PREMIUM_PURCHASE && y ? null : h || s || b ? (0, n.jsx)(X.G2, {
                            icon: l ? function() {
                                return (0, n.jsx)(K.Z, {
                                    width: 14,
                                    height: 14
                                })
                            } : function() {
                                return (0, n.jsx)(Q.Z, {
                                    width: 12,
                                    height: 12
                                })
                            },
                            color: F.Z.BACKGROUND_ACCENT,
                            className: se().iconBadge
                        }) : (0, n.jsx)(X.lB, {
                            className: se().newBadge,
                            text: (0, n.jsxs)("div", {
                                className: se().newBadgeText,
                                children: [(0, n.jsx)(Q.Z, {
                                    width: 12,
                                    height: 12
                                }), M.Z.Messages.NEW]
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
                    s = ie();
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
                    renderItem: function(e, u, l, f) {
                        var d = s[e],
                            p = d.section,
                            h = d.items;
                        return (0, _.EQ)(h[u]).with(oe, (function() {
                            return (0, n.jsxs)(ve, {
                                style: fe({}, l),
                                isSelected: null === t,
                                onSelect: function() {
                                    return a(null)
                                },
                                children: [(0, n.jsx)(q.Z, {
                                    className: se().notAllowedIcon
                                }), (0, n.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: M.Z.Messages.NONE
                                })]
                            }, f)
                        })).with(ae, (function() {
                            return (0, n.jsxs)(ve, {
                                style: l,
                                onSelect: i,
                                children: [(0,
                                    n.jsx)($.Z, {
                                    className: se().shopIcon
                                }), (0, n.jsx)(Y.Z, {
                                    foreground: se().shopSparkleBig
                                }), (0, n.jsx)(Y.Z, {
                                    foreground: se().shopSparkleSmall
                                }), (0, n.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: M.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, f)
                        })).otherwise((function(e) {
                            var i = (null == t ? void 0 : t.id) === e.id;
                            return (0, n.jsx)(me, {
                                style: fe({}, l),
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
                        var r = s[e],
                            t = r.section,
                            o = r.header;
                        return (0, n.jsx)("div", {
                            className: se().headings,
                            children: (0, n.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                component: (0, n.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: o
                                }),
                                children: t === B.PREVIEW && (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/normal",
                                    children: M.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_DESC
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
                    getItemHeight: ye
                })
            };
            var ge = t(2590),
                Oe = t(203600),
                je = t(919065),
                Se = t.n(je);

            function Ee(e, r) {
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
                }(e, r) || we(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ce(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ee(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || we(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function we(e, r) {
                if (e) {
                    if ("string" == typeof e) return Ee(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ee(e, r) : void 0
                }
            }

            function Pe(e) {
                var r = e.user,
                    t = e.categories,
                    a = e.analyticsLocations,
                    i = e.onClose,
                    u = e.initialSelectedDecoration,
                    d = e.isTryItOutFlow,
                    p = (0, j.Z)({
                        analyticsLocations: a,
                        isTryItOut: d
                    }),
                    h = p.pendingAvatarDecoration,
                    y = p.setPendingAvatarDecoration,
                    v = Ae(o.useState((function() {
                        return null != u ? u : void 0 !== h ? h : null == (null == r ? void 0 : r.avatarDecoration) || 0 === t.size ? null : null !== (e = (0, f.IM)(t).find((function(e) {
                            return (0, C.sr)(e, r.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    b = v[0],
                    S = v[1],
                    E = m(null == b ? void 0 : b.skuId),
                    w = E.category,
                    P = E.purchase,
                    _ = A.ZP.canUseCollectibles(r),
                    x = o.useRef(null),
                    I = (0, g.Z)(a),
                    Z = (0, C.sr)(b, void 0 === h ? null == r ? void 0 : r.avatarDecoration : h),
                    D = function() {
                        y(b);
                        i()
                    },
                    R = function() {
                        i();
                        (0, l.mK)({
                            analyticsLocations: a,
                            analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL
                        })
                    };
                return (0, n.jsxs)("div", {
                    className: Se().modalBody,
                    children: [(0, n.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: Se().modalHeader,
                        children: [(0, n.jsx)("div", {
                            className: Se().modalHeadings,
                            children: (0, n.jsx)(c.HeadingLevel, {
                                component: (0, n.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: M.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !_ && (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/normal",
                                    children: M.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(c.ModalCloseButton, {
                            className: Se().modalCloseButton,
                            onClick: i
                        })]
                    }), (0, n.jsxs)(c.ModalContent, {
                        className: Se().modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(be, {
                            user: r,
                            pendingAvatarDecoration: b,
                            selectedAvatarDecorationRef: x,
                            onSelect: function(e) {
                                S(e);
                                null != e && I(e)
                            },
                            onOpenShop: R
                        }), (0, n.jsx)(z, {
                            className: Se().modalPreview,
                            user: r,
                            avatarDecorationOverride: b
                        })]
                    }), (0, n.jsxs)(c.ModalFooter, {
                        className: Se().modalFooter,
                        children: [null != P && (!(0, f.qS)(P) || _) || null === b ? (0, n.jsx)(c.Button, {
                            onClick: D,
                            disabled: Z,
                            children: M.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : _ || !(0, f.mv)(w) ? (0, n.jsx)(c.Button, {
                            className: Se().modalFooterShopButton,
                            onClick: R,
                            children: M.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, n.jsx)(O.Z, {
                            subscriptionTier: Oe.Si.TIER_2,
                            buttonText: A.ZP.isPremium(r) ? M.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : M.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, n.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: i,
                            children: M.Z.Messages.CANCEL
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
                    y = (0, u.Z)(t, s.Z.EDIT_AVATAR_DECORATION_MODAL),
                    v = y.AnalyticsLocationProvider,
                    m = y.analyticsLocations,
                    g = (0, b.ZP)(),
                    O = g.categories,
                    j = g.purchases,
                    A = g.isFetchingCategories,
                    C = g.isFetchingPurchases,
                    w = A || C && 0 === j.size;
                o.useEffect((function() {
                    E.default.track(ge.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: m
                    })
                }), [m]);
                o.useEffect((function() {
                    return function() {
                        (0, l.K$)({
                            categories: Ce(O.values()),
                            itemType: a.Z.AVATAR_DECORATION
                        })
                    }
                }), [O]);
                return null == h ? null : (0, n.jsx)(v, {
                    children: (0, n.jsx)(c.ModalRoot, {
                        transitionState: r,
                        className: Se().modal,
                        size: w ? c.ModalSize.DYNAMIC : c.ModalSize.MEDIUM,
                        children: w ? (0, n.jsx)(c.Spinner, {
                            className: Se().spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(Pe, {
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
        681714: (e, r, t) => {
            t.d(r, {
                ZP: () => f
            });
            var n = t(667294),
                o = t(318715),
                a = t(514722),
                i = t(339938),
                c = t(764797),
                s = t(767539);

            function u(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function l(e, r) {
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

            function f() {
                var e = "useFetchCollectiblesCategoriesAndPurchases";
                (0, a.j)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                });
                (0, a.j)({
                    location: e + " auto off",
                    autoTrackExposure: !1
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
                        var t = l((0, o.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.error, null !== (e = c.Z.lastFetched) && void 0 !== e ? e : 0, c.Z.categories]
                            })), 4),
                            s = t[0],
                            u = t[1],
                            f = t[2],
                            d = t[3];
                        (0, n.useEffect)((function() {
                            s || Boolean(u) || Date.now() - f < 6e5 || (0, i.F$)()
                        }), [s, f, u]);
                        return {
                            isFetching: s,
                            categories: d,
                            error: u
                        }
                    }(),
                    u = t.isFetching,
                    f = t.categories,
                    d = t.error,
                    p = function() {
                        (0, a.j)({
                            location: "useFetchPurchases auto on",
                            autoTrackExposure: !0
                        });
                        (0, a.j)({
                            location: "useFetchPurchases auto off",
                            autoTrackExposure: !1
                        });
                        var e = l((0, o.Wu)([s.Z], (function() {
                                return [s.Z.isFetching, s.Z.isClaiming, s.Z.fetchError, s.Z.claimError, s.Z.purchases]
                            })), 5),
                            r = e[0],
                            t = e[1],
                            c = e[2],
                            u = e[3],
                            f = e[4];
                        (0, n.useEffect)((function() {
                            (0, i.qg)()
                        }), []);
                        return {
                            isClaiming: t,
                            fetchError: c,
                            claimError: u,
                            isFetching: r,
                            purchases: f
                        }
                    }(),
                    h = p.isClaiming,
                    y = p.fetchError,
                    v = p.claimError,
                    m = p.isFetching;
                return {
                    isFetching: u || m,
                    isFetchingCategories: u,
                    isFetchingPurchases: m,
                    isClaiming: h,
                    categories: f,
                    purchases: p.purchases,
                    error: null !== (r = null != d ? d : y) && void 0 !== r ? r : v
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
                u = t(362660),
                l = t(349771),
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

            function y(e) {
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

            function v(e, r) {
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
                        var e = (0, l.uV)(r, {
                            size: o
                        });
                        if (1 === b) return v(y({}, h), {
                            backgroundImage: "url(".concat(e, ")"),
                            backgroundSize: "cover"
                        });
                        var t = (0, u.aD)(c.ZP.unsafe_rawColors.BLACK_500, 1 - b);
                        return v(y({}, h), {
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
                yV: () => u,
                IC: () => l,
                nH: () => f,
                tM: () => d,
                FB: () => p
            });
            var n = t(795308),
                o = t(265022),
                a = t(721741),
                i = t(362660);

            function c(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function s(e, r) {
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
                    if ("string" == typeof e) return c(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = 1060,
                l = function(e) {
                    return 3.8 * e
                },
                f = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        t = s(e, 2),
                        n = t[0],
                        o = t[1];
                    return "linear-gradient(".concat(r, "deg, ").concat(n, ", ").concat(o, ")")
                },
                d = function(e) {
                    var r = s(e, 2),
                        t = r[0],
                        n = r[1],
                        o = (0, i.BM)(t, n, .5);
                    return (0, i.Cj)(o, .4)
                },
                p = function(e) {
                    var r = s(e, 2),
                        t = r[0],
                        c = r[1],
                        u = s((0, o.J2)((0, i.dX)(t), (0, i.dX)(c), .5), 3),
                        l = u[0],
                        f = u[1],
                        d = u[2];
                    return new a.Z(l, f, d, 1).toHSL().lightness > .66 ? n.Z.unsafe_rawColors.BLACK_500.css : n.Z.unsafe_rawColors.WHITE_500.css
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

            function u(e, r) {
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

            function l(e, r, t) {
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
                    u = d(e, ["width", "height", "color"]);
                return (0,
                    n.jsx)("svg", f(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(u)), {
                    width: t,
                    height: a,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                        fill: s
                    })
                }))
            }), (function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? a.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = u(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
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
                    u = void 0 === s ? 24 : s,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
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
                    height: u,
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