(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9244], {
        821977: (e, t, n) => {
            e.exports = n.p + "424e0085e3d4fff22b0668bba7424868.png"
        },
        613815: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = (0, n(260561).B)({
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
                var t = e.location,
                    n = e.autoTrackExposure,
                    o = void 0 === n || n,
                    i = e.trackExposureOptions,
                    l = void 0 === i ? {} : i;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: o,
                    trackExposureOptions: l
                })
            }
        },
        309244: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => xe
            });
            var r = n(785893),
                o = n(667294),
                i = n(408522),
                l = n(202351),
                c = n(70418),
                a = n(735885),
                s = n(153686),
                u = n(19585),
                f = n(339938),
                d = n(349771),
                p = n(379667),
                y = n(300023),
                m = n(681714);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
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
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = n(357920),
                v = n(183490),
                E = n(450383),
                O = n(473903),
                P = n(652591),
                j = n(579194),
                S = n(764797),
                C = n(767539),
                x = n(613815),
                A = n(30027),
                w = n(618354),
                I = n(341133),
                _ = n(384411),
                Z = n(968449),
                T = n(364412),
                D = (n(241213), n(116094)),
                N = n(473708),
                R = n(818424),
                L = n.n(R);

            function F(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        F(e, t, n[t])
                    }))
                }
                return e
            }

            function k(e, t) {
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
            var B = function(e) {
                var t, n = e.effectIsOwned,
                    o = e.pendingProfileEffectRecord,
                    i = e.userIsPremium,
                    a = (0, l.e7)([C.Z], (function() {
                        return C.Z.getPurchase(null == o ? void 0 : o.skuId)
                    })),
                    s = (0, l.e7)([S.Z], (function() {
                        return S.Z.getProduct(null == o ? void 0 : o.skuId)
                    })),
                    u = (0, l.e7)([_.default], (function() {
                        return _.default.locale
                    })),
                    f = (0, x.Z)({
                        location: "ProfileEffectPreview"
                    }).shopForAllEnabled,
                    d = i || f ? N.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : N.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE;
                return null != o ? (0, r.jsx)("div", {
                    className: n ? L().effectDescriptionNoGradient : L().effectDescriptionBorderWithGradient,
                    children: (0, r.jsxs)("div", {
                        className: L().effectDescriptionContainer,
                        children: [(0, r.jsx)(c.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: L().effectName,
                            children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : null == s ? void 0 : s.name
                        }), (0, r.jsx)(c.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: L().effectDescription,
                            children: null != a ? a.summary : d
                        }), null != a && (0, r.jsx)(c.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: L().effectPurchasedAt,
                            children: N.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: a.purchasedAt.toLocaleDateString(u, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            const H = function(e) {
                var t, n = e.user,
                    o = e.pendingProfileEffectRecord,
                    i = e.canApplySelectedChange,
                    c = (0, l.cj)([E.Z], (function() {
                        var e = E.Z.getAllPending(),
                            t = E.Z.getErrors();
                        return k(M({}, e), {
                            errors: t
                        })
                    })),
                    a = c.pendingAvatar,
                    s = c.pendingBanner,
                    u = c.pendingBio,
                    f = c.pendingPronouns,
                    d = c.pendingGlobalName,
                    p = c.pendingAccentColor,
                    y = c.pendingAvatarDecoration,
                    m = c.pendingThemeColors,
                    b = D.ZP.isPremium(n),
                    h = (0,
                        v.Z)(n.id),
                    g = Boolean(null == h ? void 0 : h.getPreviewBio(u).value),
                    O = Z.dN.useSetting() && null != u ? A.ZP.parse(void 0, u).content : u,
                    P = D.ZP.canUsePremiumProfileCustomization(n),
                    S = (null == h ? void 0 : h.canUsePremiumProfileCustomization) || P,
                    C = {
                        user: n,
                        canUsePremiumCustomization: P,
                        onUpsellClick: T.Z,
                        onAvatarChange: j.I5,
                        onBannerChange: I.g_,
                        pendingBanner: s,
                        pendingBio: O,
                        pendingPronouns: f,
                        pendingAvatar: a,
                        pendingGlobalName: d,
                        pendingAvatarDecoration: y,
                        pendingThemeColors: m,
                        pendingAccentColor: p,
                        pendingProfileEffectID: null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : null,
                        hideFakeActivity: g
                    };
                return (0, r.jsxs)("div", {
                    className: S ? L().previewContainerWithTheme : L().previewContainerWithoutTheme,
                    children: [(0, r.jsx)(w.Z, k(M({}, C), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, r.jsx)(B, {
                        effectIsOwned: i,
                        pendingProfileEffectRecord: o,
                        userIsPremium: b
                    })]
                })
            };
            var U = n(294184),
                G = n.n(U),
                W = n(498964),
                z = n(517586),
                V = n(318715),
                Y = n(937150),
                $ = n(243764),
                K = n(778613),
                Q = n(97990),
                q = n(531441),
                X = n(2590),
                J = n(165043),
                ee = n.n(J),
                te = n(821977),
                ne = n.n(te);

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function oe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        oe(e, t, n[t])
                    }))
                }
                return e
            }

            function le(e, t) {
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

            function ce(e, t) {
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

            function ae(e, t) {
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
                }(e, t) || ue(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e) {
                return function(e) {
                    if (Array.isArray(e)) return re(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ue(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ue(e, t) {
                if (e) {
                    if ("string" == typeof e) return re(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? re(e, t) : void 0
                }
            }
            var fe;
            ! function(e) {
                e[e.PURCHASED = 0] = "PURCHASED";
                e[e.PREVIEW = 1] = "PREVIEW"
            }(fe || (fe = {}));
            var de = function() {
                    return 80
                },
                pe = function(e) {
                    var t = e.children,
                        n = e.isSelected,
                        o = void 0 !== n && n,
                        i = ce(e, ["children", "isSelected"]);
                    return (0, r.jsx)(c.Clickable, le(ie({
                        className: G()(ee().effectGridItem, oe({}, ee().selected, o))
                    }, i), {
                        onClick: i.onSelect,
                        children: t
                    }))
                },
                ye = function(e) {
                    var t, n = e.profileEffect,
                        i = e.innerRef,
                        l = e.section,
                        c = e.isSelected,
                        a = ce(e, ["profileEffect", "innerRef", "section", "isSelected"]),
                        s = (0, V.ZP)([y.Z], (function() {
                            return y.Z.getProfileEffectById(n.id)
                        })),
                        u = (0, V.ZP)([Y.Z], (function() {
                            return Y.Z.isItemViewed(n)
                        })),
                        f = o.useRef(null),
                        d = null !== (t = null == s ? void 0 : s.config) && void 0 !== t ? t : {},
                        p = d.accessibilityLabel,
                        m = d.thumbnailPreviewSrc,
                        b = d.title,
                        h = ae(o.useState(c), 2),
                        g = h[0],
                        v = h[1];
                    o.useEffect((function() {
                        c && v(!0)
                    }), [c]);
                    return (0, r.jsxs)(pe, le(ie({
                        innerRef: null != i ? i : f,
                        isSelected: c
                    }, a), {
                        children: [(0, r.jsx)("img", {
                            src: ne(),
                            alt: p,
                            className: ee().presetEffectBackground
                        }), (0, r.jsx)("img", {
                            className: ee().presetEffectImg,
                            src: m,
                            alt: b
                        }), l === fe.PURCHASED ? null : u || c || g ? (0, r.jsx)(q.G2, {
                            icon: function() {
                                return (0, r.jsx)(Q.Z, {
                                    width: 12,
                                    height: 12
                                })
                            },
                            color: z.Z.BACKGROUND_ACCENT,
                            className: ee().lockBadge
                        }) : (0, r.jsx)(q.lB, {
                            className: ee().newBadge,
                            text: (0, r.jsxs)("div", {
                                className: ee().newBadgeText,
                                children: [(0, r.jsx)(Q.Z, {
                                    width: 12,
                                    height: 12
                                }), N.Z.Messages.NEW]
                            })
                        })]
                    }))
                },
                me = {
                    id: -2
                },
                be = {
                    id: -1
                };
            const he = function(e) {
                var t, n = e.user,
                    i = e.pendingProfileEffect,
                    l = e.selectedProfileEffectRef,
                    s = e.purchasedProfileEffects,
                    u = e.previewEffects,
                    f = e.onSelect,
                    d = e.onClose,
                    p = function() {
                        d();
                        (0, a.jN)(X.S9g.COLLECTIBLES_SHOP)
                    },
                    y = D.ZP.canUsePremiumProfileCustomization(n),
                    m = s.length > 0,
                    b = (0, x.Z)({
                        location: "ProfileEffectSelection"
                    }).shopForAllEnabled,
                    h = 0 === u.length,
                    g = o.useMemo((function() {
                        var e = {
                                section: fe.PURCHASED,
                                items: [me, be].concat(se(s)),
                                header: N.Z.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                            },
                            t = {
                                section: fe.PREVIEW,
                                items: u,
                                header: N.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                            };
                        return h ? [e] : !!m || (y || b) ? [e, t] : [t]
                    }), [s, u, y, m, h, b]),
                    v = null != i;
                return (0, r.jsx)("section", {
                    children: (0, r.jsx)(c.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: ee().list,
                        columns: 3,
                        sections: g.map((function(e) {
                            return e.items.length
                        })),
                        renderItem: function(e, t, n, o) {
                            var a = g[e],
                                s = a.section,
                                u = a.items;
                            return (0, W.EQ)(u[t]).with(me, (function() {
                                return (0, r.jsxs)(pe, {
                                    style: ie({}, n),
                                    isSelected: !v,
                                    onSelect: function() {
                                        return f(null)
                                    },
                                    children: [(0, r.jsx)(K.Z, {
                                        className: ee().notAllowedIcon
                                    }), (0, r.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: N.Z.Messages.NONE
                                    })]
                                }, o)
                            })).with(be, (function() {
                                return (0, r.jsxs)(pe, {
                                    style: n,
                                    onSelect: p,
                                    children: [(0, r.jsx)($.Z, {
                                        className: ee().shopIcon
                                    }), (0, r.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: N.Z.Messages.COLLECTIBLES_SHOP
                                    })]
                                }, o)
                            })).otherwise((function(e) {
                                var t = i === e.id;
                                return (0, r.jsx)(ye, {
                                    style: ie({}, n),
                                    section: s,
                                    profileEffect: e,
                                    innerRef: t ? l : void 0,
                                    isSelected: t,
                                    onSelect: function() {
                                        return f(e.id)
                                    }
                                }, o)
                            }))
                        },
                        renderSection: function(e) {
                            var t = g[e].header;
                            return (0, r.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0,
                                    r.jsx)(c.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: function() {
                            return 16
                        },
                        getItemKey: function(e, n) {
                            var r;
                            return null !== (t = null === (r = g[e].items[n]) || void 0 === r ? void 0 : r.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: de,
                        removeEdgeItemGutters: !0
                    })
                })
            };
            var ge = n(418877),
                ve = n.n(ge);

            function Ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Oe(e, t) {
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
                }(e, t) || je(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pe(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ee(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || je(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function je(e, t) {
                if (e) {
                    if ("string" == typeof e) return Ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ee(e, t) : void 0
                }
            }

            function Se(e) {
                var t = e.onApply,
                    n = e.onClose,
                    o = e.canApplySelectedChange,
                    i = e.disableApplyButton,
                    l = o ? (0, r.jsx)(c.Button, {
                        onClick: t,
                        disabled: i,
                        children: N.Z.Messages.PROFILE_EFFECT_MODAL_APPLY
                    }) : (0, r.jsx)(c.Button, {
                        className: ve().goToShopButton,
                        onClick: function() {
                            n();
                            (0, a.jN)(X.S9g.COLLECTIBLES_SHOP)
                        },
                        children: N.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    });
                return (0,
                    r.jsx)(c.ModalFooter, {
                    className: ve().modalFooter,
                    children: (0, r.jsxs)("div", {
                        className: ve().buttonsRight,
                        children: [(0, r.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: n,
                            children: N.Z.Messages.CANCEL
                        }), l]
                    })
                })
            }

            function Ce(e) {
                var t = e.user,
                    n = e.purchasedProfileEffects,
                    i = e.previewEffects,
                    a = e.onClose,
                    s = e.initialSelectedProfileEffectID,
                    u = e.currentSavedEffectID,
                    f = (0, l.e7)([E.Z], (function() {
                        return E.Z.getPendingProfileEffectID()
                    })),
                    d = Oe(o.useState((function() {
                        return null != s ? s : void 0 !== f ? f : null == u ? null : null != u ? u : null
                    })), 2),
                    p = d[0],
                    y = d[1],
                    m = Oe(o.useMemo((function() {
                        var e, t = n.find((function(e) {
                                return (null == e ? void 0 : e.id) === p
                            })),
                            r = null != t || null === p;
                        return [null !== (e = null != t ? t : i.find((function(e) {
                            return (null == e ? void 0 : e.id) === p
                        }))) && void 0 !== e ? e : null, r]
                    }), [p, n, i]), 2),
                    b = m[0],
                    h = m[1],
                    v = o.useRef(null),
                    O = p === (void 0 === f ? null != u ? u : null : f),
                    P = o.useCallback((function(e) {
                        y(e)
                    }), [y]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: ve().modalHeader,
                        children: [(0, r.jsx)("div", {
                            className: ve().modalHeadings,
                            children: (0, r.jsx)(c.HeadingLevel, {
                                component: (0, r.jsxs)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [N.Z.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !1
                            })
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            className: ve().modalCloseButton,
                            onClick: a
                        })]
                    }), (0, r.jsxs)(c.ModalContent, {
                        className: ve().modalContent,
                        children: [(0, r.jsx)(he, {
                            user: t,
                            pendingProfileEffect: p,
                            selectedProfileEffectRef: v,
                            purchasedProfileEffects: n,
                            previewEffects: i,
                            onSelect: P,
                            onClose: a
                        }), (0, r.jsx)(H, {
                            user: t,
                            canApplySelectedChange: h,
                            pendingProfileEffectRecord: b
                        })]
                    }), (0, r.jsx)(Se, {
                        onApply: function() {
                            (0, g.$C)(p, u);
                            a()
                        },
                        onClose: a,
                        canApplySelectedChange: h,
                        disableApplyButton: O
                    })]
                })
            }

            function xe(e) {
                var t, n = e.transitionState,
                    a = e.analyticsLocations,
                    b = e.initialSelectedEffectID,
                    g = e.onClose,
                    E = function() {
                        var e = (0, m.ZP)(),
                            t = e.isFetching,
                            n = e.error,
                            r = e.categories,
                            i = e.purchases,
                            c = h((0, l.Wu)([y.Z], (function() {
                                return [y.Z.isFetching, y.Z.fetchError, y.Z.profileEffects]
                            })), 3),
                            a = c[0],
                            s = c[1],
                            u = c[2];
                        (0, o.useEffect)((function() {
                            (0, p.z)()
                        }), []);
                        return {
                            isFetching: t || a,
                            error: null != n ? n : s,
                            profileEffects: u,
                            categories: r,
                            purchases: i
                        }
                    }(),
                    j = E.isFetching,
                    S = E.categories,
                    C = E.purchases,
                    x = (0, l.e7)([O.default], (function() {
                        return O.default.getCurrentUser()
                    })),
                    A = (0, u.Z)(a, s.Z.EDIT_PROFILE_EFFECT_MODAL),
                    w = A.AnalyticsLocationProvider,
                    I = A.analyticsLocations,
                    _ = Oe(o.useMemo((function() {
                        var e = (0, d.bl)(S, C);
                        return [e.purchased, e.shopPreviews]
                    }), [S, C]), 2),
                    Z = _[0],
                    T = _[1],
                    D = (0, v.Z)(null !== (t = null == x ? void 0 : x.id) && void 0 !== t ? t : ""),
                    N = null == D ? void 0 : D.profileEffectID;
                o.useEffect((function() {
                    P.default.track(X.rMx.OPEN_MODAL, {
                        type: X.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: I
                    })
                }), [I]);
                o.useEffect((function() {
                    return function() {
                        (0, f.K$)({
                            categories: Pe(S.values()),
                            itemTypes: [i.Z.PROFILE_EFFECT]
                        })
                    }
                }), [S]);
                return null == x ? null : (0, r.jsx)(w, {
                    children: (0, r.jsx)(c.ModalRoot, {
                        transitionState: n,
                        size: c.ModalSize.DYNAMIC,
                        className: ve().modal,
                        children: j ? (0, r.jsx)(c.Spinner, {
                            className: ve().spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(Ce, {
                            user: x,
                            purchasedProfileEffects: Z,
                            previewEffects: T,
                            initialSelectedProfileEffectID: b,
                            currentSavedEffectID: N,
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
                o = (n(667294), n(70418)),
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

            function s(e, t) {
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
            var u = function(e, t) {
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
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                    return u(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, n.e(92189).then(n.bind(n, 92189))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, s(function(e) {
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