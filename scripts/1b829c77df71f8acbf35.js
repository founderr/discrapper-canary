(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9244], {
        821977: (e, t, n) => {
            e.exports = n.p + "424e0085e3d4fff22b0668bba7424868.png"
        },
        309244: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Ee
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                l = n(304548),
                c = n(735885),
                a = n(153686),
                u = n(19585),
                s = n(349771),
                f = n(379667),
                d = n(300023),
                p = n(681714);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = n(357920),
                h = n(183490),
                b = n(450383),
                v = n(473903),
                E = n(652591),
                O = n(579194),
                P = n(764797),
                j = n(767539),
                S = n(30027),
                C = n(618354),
                w = n(341133),
                x = n(384411),
                A = n(968449),
                I = n(364412),
                _ = (n(241213), n(116094)),
                D = n(473708),
                L = n(818424),
                N = n.n(L);

            function Z(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Z(e, t, n[t])
                    }))
                }
                return e
            }

            function T(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var M = function(e) {
                var t, n = e.effectIsOwned,
                    o = e.pendingProfileEffectRecord,
                    c = e.userIsPremium,
                    a = (0, i.e7)([j.Z], (function() {
                        return j.Z.getPurchase(null == o ? void 0 : o.skuId)
                    })),
                    u = (0, i.e7)([P.Z], (function() {
                        return P.Z.getProduct(null == o ? void 0 : o.skuId)
                    })),
                    s = (0, i.e7)([x.default], (function() {
                        return x.default.locale
                    }));
                return null != o ? (0, r.jsx)("div", {
                    className: n ? N().effectDescriptionNoGradient : N().effectDescriptionBorderWithGradient,
                    children: (0, r.jsxs)("div", {
                        className: N().effectDescriptionContainer,
                        children: [(0, r.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: N().effectName,
                            children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : null == u ? void 0 : u.name
                        }), (0, r.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: N().effectDescription,
                            children: null != a ? a.summary : c ? D.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : D.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE
                        }), null != a && (0, r.jsx)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: N().effectPurchasedAt,
                            children: D.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: a.purchasedAt.toLocaleDateString(s, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            const k = function(e) {
                var t, n = e.user,
                    o = e.pendingProfileEffectRecord,
                    l = e.canApplySelectedChange,
                    c = (0, i.cj)([b.Z], (function() {
                        var e = b.Z.getAllPending(),
                            t = b.Z.getErrors();
                        return T(R({}, e), {
                            errors: t
                        })
                    })),
                    a = c.pendingAvatar,
                    u = c.pendingBanner,
                    s = c.pendingBio,
                    f = c.pendingPronouns,
                    d = c.pendingGlobalName,
                    p = c.pendingAccentColor,
                    y = c.pendingAvatarDecoration,
                    m = c.pendingThemeColors,
                    g = _.ZP.isPremium(n),
                    v = (0, h.Z)(n.id),
                    E = Boolean(null == v ? void 0 : v.getPreviewBio(s).value),
                    P = A.dN.useSetting() && null != s ? S.ZP.parse(void 0, s).content : s,
                    j = _.ZP.canUsePremiumProfileCustomization(n),
                    x = (null == v ? void 0 : v.canUsePremiumProfileCustomization) || j,
                    D = {
                        user: n,
                        canUsePremiumCustomization: j,
                        onUpsellClick: I.Z,
                        onAvatarChange: O.I5,
                        onBannerChange: w.g_,
                        pendingBanner: u,
                        pendingBio: P,
                        pendingPronouns: f,
                        pendingAvatar: a,
                        pendingGlobalName: d,
                        pendingAvatarDecoration: y,
                        pendingThemeColors: m,
                        pendingAccentColor: p,
                        pendingProfileEffectID: null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : null,
                        hideFakeActivity: E
                    };
                return (0, r.jsxs)("div", {
                    className: x ? N().previewContainerWithTheme : N().previewContainerWithoutTheme,
                    children: [(0, r.jsx)(C.Z, T(R({}, D), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, r.jsx)(M, {
                        effectIsOwned: l,
                        pendingProfileEffectRecord: o,
                        userIsPremium: g
                    })]
                })
            };
            var B = n(294184),
                F = n.n(B),
                H = n(498964),
                U = n(517586),
                G = n(243764),
                W = n(778613),
                z = n(97990),
                V = n(616276),
                Y = n(531441),
                $ = n(2590),
                K = n(165043),
                Q = n.n(K),
                q = n(821977),
                X = n.n(q);

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ee(e, t, n[t])
                    }))
                }
                return e
            }

            function ne(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function re(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || le(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || le(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(e, t) {
                if (e) {
                    if ("string" == typeof e) return J(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0
                }
            }
            var ce;
            ! function(e) {
                e[e.PURCHASED = 0] = "PURCHASED";
                e[e.PREVIEW = 1] = "PREVIEW"
            }(ce || (ce = {}));
            var ae = function() {
                    return 80
                },
                ue = function(e) {
                    var t = e.children,
                        n = e.isSelected,
                        o = void 0 !== n && n,
                        i = re(e, ["children", "isSelected"]);
                    return (0, r.jsx)(l.Clickable, ne(te({
                        className: F()(Q().effectGridItem, ee({}, Q().selected, o))
                    }, i), {
                        onClick: i.onSelect,
                        children: t
                    }))
                },
                se = function(e) {
                    var t = e.profileEffect,
                        n = e.innerRef,
                        i = e.showLockBadge,
                        l = re(e, ["profileEffect", "innerRef", "showLockBadge"]),
                        c = o.useRef(null),
                        a = t.config,
                        u = a.accessibilityLabel,
                        s = a.thumbnailPreviewSrc,
                        f = a.title;
                    return (0, r.jsxs)(ue, ne(te({
                        innerRef: null != n ? n : c
                    }, l), {
                        children: [(0, r.jsx)("img", {
                            src: X(),
                            alt: u,
                            className: Q().presetEffectBackground
                        }), (0, r.jsx)("img", {
                            className: Q().presetEffectImg,
                            src: s,
                            alt: f
                        }), i && (0, r.jsx)(Y.G2, {
                            icon: z.Z,
                            color: U.Z.BACKGROUND_ACCENT,
                            className: Q().lockBadge
                        })]
                    }))
                },
                fe = {
                    id: -2
                },
                de = {
                    id: -1
                };
            const pe = function(e) {
                var t, n = e.user,
                    i = e.pendingProfileEffect,
                    a = e.selectedProfileEffectRef,
                    u = e.purchasedProfileEffects,
                    s = e.previewEffects,
                    f = e.onSelect,
                    p = e.onClose,
                    y = function() {
                        p();
                        (0, c.jN)($.S9g.COLLECTIBLES_SHOP)
                    },
                    m = oe(o.useMemo((function() {
                        return [u.map((function(e) {
                            return d.Z.getProfileEffectById(e.id)
                        })), s.map((function(e) {
                            return d.Z.getProfileEffectById(e.id)
                        }))]
                    }), [u, s]), 2),
                    g = m[0],
                    h = m[1],
                    b = _.ZP.canUsePremiumProfileCustomization(n),
                    v = u.length > 0,
                    E = 0 === s.length,
                    O = o.useMemo((function() {
                        var e = {
                                section: ce.PURCHASED,
                                items: [fe, de].concat(ie(g)),
                                header: D.Z.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                            },
                            t = {
                                section: ce.PREVIEW,
                                items: h,
                                header: D.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                            };
                        return E ? [e] : b || v ? [e, t] : [t]
                    }), [g, h, b, v, E]),
                    P = null != i;
                return (0, r.jsx)("section", {
                    children: (0, r.jsx)(l.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: Q().list,
                        columns: 3,
                        sections: O.map((function(e) {
                            return e.items.length
                        })),
                        renderItem: function(e, t, n, o) {
                            var c = O[e],
                                u = c.section,
                                s = c.items;
                            return (0, H.EQ)(s[t]).with(fe, (function() {
                                return (0, r.jsxs)(ue, {
                                    style: te({}, n),
                                    isSelected: !P,
                                    onSelect: function() {
                                        return f(null)
                                    },
                                    children: [(0, r.jsx)(W.Z, {
                                        className: Q().notAllowedIcon
                                    }), (0, r.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: D.Z.Messages.NONE
                                    })]
                                }, o)
                            })).with(de, (function() {
                                return (0, r.jsxs)(ue, {
                                    style: n,
                                    onSelect: y,
                                    children: [(0, r.jsx)(G.Z, {
                                        className: Q().shopIcon
                                    }), (0, r.jsx)(V.Z, {
                                        foreground: Q().shopSparkleBig
                                    }), (0, r.jsx)(V.Z, {
                                        foreground: Q().shopSparkleSmall
                                    }), (0, r.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: D.Z.Messages.COLLECTIBLES_SHOP
                                    })]
                                }, o)
                            })).otherwise((function(e) {
                                if (void 0 === e) return null;
                                var t = i === (null == e ? void 0 : e.id);
                                return (0, r.jsx)(se, {
                                    showLockBadge: u === ce.PREVIEW,
                                    style: te({}, n),
                                    profileEffect: e,
                                    innerRef: t ? a : void 0,
                                    isSelected: t,
                                    onSelect: function() {
                                        return f(null == e ? void 0 : e.id)
                                    }
                                }, o)
                            }))
                        },
                        renderSection: function(e) {
                            var t = O[e].header;
                            return (0, r.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, r.jsx)(l.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: function() {
                            return 16
                        },
                        getItemKey: function(e, n) {
                            var r;
                            return null !== (t = null === (r = O[e].items[n]) || void 0 === r ? void 0 : r.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: ae,
                        removeEdgeItemGutters: !0
                    })
                })
            };
            var ye = n(418877),
                me = n.n(ye);

            function ge(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function he(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ge(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ge(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function be(e) {
                var t = e.onApply,
                    n = e.onClose,
                    o = e.canApplySelectedChange,
                    i = e.disableApplyButton,
                    a = o ? (0, r.jsx)(l.Button, {
                        onClick: t,
                        disabled: i,
                        children: D.Z.Messages.PROFILE_EFFECT_MODAL_APPLY
                    }) : (0, r.jsx)(l.Button, {
                        className: me().goToShopButton,
                        onClick: function() {
                            n();
                            (0, c.jN)($.S9g.COLLECTIBLES_SHOP)
                        },
                        children: D.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    });
                return (0, r.jsx)(l.ModalFooter, {
                    className: me().modalFooter,
                    children: (0, r.jsxs)("div", {
                        className: me().buttonsRight,
                        children: [(0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: D.Z.Messages.CANCEL
                        }), a]
                    })
                })
            }

            function ve(e) {
                var t = e.user,
                    n = e.purchasedProfileEffects,
                    c = e.previewEffects,
                    a = e.onClose,
                    u = e.initialSelectedProfileEffectID,
                    s = e.currentSavedEffectID,
                    f = (0, i.e7)([b.Z], (function() {
                        return b.Z.getPendingProfileEffectID()
                    })),
                    d = he(o.useState((function() {
                        return null != u ? u : void 0 !== f ? f : null == s ? null : null != s ? s : null
                    })), 2),
                    p = d[0],
                    y = d[1],
                    m = he(o.useMemo((function() {
                        var e, t = n.find((function(e) {
                                return (null == e ? void 0 : e.id) === p
                            })),
                            r = null != t || null === p;
                        return [null !== (e = null != t ? t : c.find((function(e) {
                            return (null == e ? void 0 : e.id) === p
                        }))) && void 0 !== e ? e : null, r]
                    }), [p, n, c]), 2),
                    h = m[0],
                    v = m[1],
                    E = o.useRef(null),
                    O = p === (void 0 === f ? s : f),
                    P = o.useCallback((function(e) {
                        y(e)
                    }), [y]);
                return (0, r.jsxs)("div", {
                    className: me().modalBody,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: me().modalHeader,
                        children: [(0, r.jsx)("div", {
                            className: me().modalHeadings,
                            children: (0, r.jsx)(l.HeadingLevel, {
                                component: (0, r.jsxs)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [D.Z.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !1
                            })
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            className: me().modalCloseButton,
                            onClick: a
                        })]
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: me().modalContent,
                        children: [(0, r.jsx)(pe, {
                            user: t,
                            pendingProfileEffect: p,
                            selectedProfileEffectRef: E,
                            purchasedProfileEffects: n,
                            previewEffects: c,
                            onSelect: P,
                            onClose: a
                        }), (0, r.jsx)(k, {
                            user: t,
                            canApplySelectedChange: v,
                            pendingProfileEffectRecord: h
                        })]
                    }), (0, r.jsx)(be, {
                        onApply: function() {
                            (0, g.$C)(p, s);
                            a()
                        },
                        onClose: a,
                        canApplySelectedChange: v,
                        disableApplyButton: O
                    })]
                })
            }

            function Ee(e) {
                var t, n = e.transitionState,
                    c = e.analyticsLocations,
                    y = e.initialSelectedEffectID,
                    g = e.onClose,
                    b = function() {
                        var e = (0, p.ZP)(),
                            t = e.isFetching,
                            n = e.error,
                            r = e.categories,
                            l = e.purchases,
                            c = m((0, i.Wu)([d.Z], (function() {
                                return [d.Z.isFetching, d.Z.fetchError, d.Z.profileEffects]
                            })), 3),
                            a = c[0],
                            u = c[1],
                            s = c[2];
                        (0, o.useEffect)((function() {
                            (0, f.z)()
                        }), []);
                        return {
                            isFetching: t || a,
                            error: null != n ? n : u,
                            profileEffects: s,
                            categories: r,
                            purchases: l
                        }
                    }(),
                    O = b.isFetching,
                    P = b.categories,
                    j = b.purchases,
                    S = (0, i.e7)([v.default], (function() {
                        return v.default.getCurrentUser()
                    })),
                    C = (0, u.Z)(c, a.Z.EDIT_PROFILE_EFFECT_MODAL),
                    w = C.AnalyticsLocationProvider,
                    x = C.analyticsLocations,
                    A = he(o.useMemo((function() {
                        var e = (0, s.bl)(P, j);
                        return [e.purchased, e.shopPreviews]
                    }), [P, j]), 2),
                    I = A[0],
                    _ = A[1],
                    D = (0, h.Z)(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : ""),
                    L = null == D ? void 0 : D.profileEffectID;
                o.useEffect((function() {
                    E.default.track($.rMx.OPEN_MODAL, {
                        type: $.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: x
                    })
                }), [x]);
                return null == S ? null : (0, r.jsx)(w, {
                    children: (0, r.jsx)(l.ModalRoot, {
                        transitionState: n,
                        size: l.ModalSize.DYNAMIC,
                        className: me().modal,
                        children: O ? (0, r.jsx)(l.Spinner, {
                            className: me().spinner,
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(ve, {
                            user: S,
                            purchasedProfileEffects: I,
                            previewEffects: _,
                            initialSelectedProfileEffectID: y,
                            currentSavedEffectID: L,
                            onClose: g
                        })
                    })
                })
            }
        },
        364412: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(2590);

            function l(e, t, n, r, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            l(i, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            l(i, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var s = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function f() {
                (0, o.openModalLazy)(c((function() {
                    var e, t;
                    return s(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, n.e(92189).then(n.bind(n, 92189))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, u(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                a(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        source: {
                                            page: i.ZY5.USER_SETTINGS,
                                            section: i.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                                            object: i.qAy.BUTTON_CTA,
                                            type: i.Qqv.BUY
                                        }
                                    }))
                                }]
                        }
                    }))
                })))
            }
        }
    }
]);