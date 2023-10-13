(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9244], {
        821977: (e, t, n) => {
            e.exports = n.p + "424e0085e3d4fff22b0668bba7424868.png"
        },
        309244: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => we
            });
            var r = n(785893),
                o = n(667294),
                i = n(408522),
                l = n(202351),
                c = n(304548),
                a = n(735885),
                u = n(153686),
                s = n(19585),
                f = n(339938),
                d = n(349771),
                p = n(379667),
                y = n(300023),
                m = n(681714);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
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
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
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
                w = n(30027),
                x = n(618354),
                A = n(341133),
                I = n(384411),
                Z = n(968449),
                _ = n(364412),
                D = (n(241213), n(116094)),
                N = n(473708),
                T = n(818424),
                R = n.n(T);

            function L(e, t, n) {
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
                        L(e, t, n[t])
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
            var F = function(e) {
                var t, n = e.effectIsOwned,
                    o = e.pendingProfileEffectRecord,
                    i = e.userIsPremium,
                    a = (0, l.e7)([C.Z], (function() {
                        return C.Z.getPurchase(null == o ? void 0 : o.skuId)
                    })),
                    u = (0, l.e7)([S.Z], (function() {
                        return S.Z.getProduct(null == o ? void 0 : o.skuId)
                    })),
                    s = (0, l.e7)([I.default], (function() {
                        return I.default.locale
                    }));
                return null != o ? (0, r.jsx)("div", {
                    className: n ? R().effectDescriptionNoGradient : R().effectDescriptionBorderWithGradient,
                    children: (0, r.jsxs)("div", {
                        className: R().effectDescriptionContainer,
                        children: [(0, r.jsx)(c.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: R().effectName,
                            children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : null == u ? void 0 : u.name
                        }), (0, r.jsx)(c.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: R().effectDescription,
                            children: null != a ? a.summary : i ? N.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : N.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE
                        }), null != a && (0, r.jsx)(c.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: R().effectPurchasedAt,
                            children: N.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: a.purchasedAt.toLocaleDateString(s, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            const B = function(e) {
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
                    u = c.pendingBanner,
                    s = c.pendingBio,
                    f = c.pendingPronouns,
                    d = c.pendingGlobalName,
                    p = c.pendingAccentColor,
                    y = c.pendingAvatarDecoration,
                    m = c.pendingThemeColors,
                    h = D.ZP.isPremium(n),
                    b = (0, v.Z)(n.id),
                    g = Boolean(null == b ? void 0 : b.getPreviewBio(s).value),
                    O = Z.dN.useSetting() && null != s ? w.ZP.parse(void 0, s).content : s,
                    P = D.ZP.canUsePremiumProfileCustomization(n),
                    S = (null == b ? void 0 : b.canUsePremiumProfileCustomization) || P,
                    C = {
                        user: n,
                        canUsePremiumCustomization: P,
                        onUpsellClick: _.Z,
                        onAvatarChange: j.I5,
                        onBannerChange: A.g_,
                        pendingBanner: u,
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
                    className: S ? R().previewContainerWithTheme : R().previewContainerWithoutTheme,
                    children: [(0, r.jsx)(x.Z, k(M({}, C), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, r.jsx)(F, {
                        effectIsOwned: i,
                        pendingProfileEffectRecord: o,
                        userIsPremium: h
                    })]
                })
            };
            var H = n(294184),
                U = n.n(H),
                G = n(498964),
                W = n(517586),
                z = n(318715),
                V = n(937150),
                Y = n(243764),
                $ = n(778613),
                K = n(97990),
                Q = n(616276),
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
                }(e, t) || se(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ue(e) {
                return function(e) {
                    if (Array.isArray(e)) return re(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || se(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e, t) {
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
                        className: U()(ee().effectGridItem, oe({}, ee().selected, o))
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
                        u = (0, z.ZP)([y.Z], (function() {
                            return y.Z.getProfileEffectById(n.id)
                        })),
                        s = (0, z.ZP)([V.Z], (function() {
                            return V.Z.isItemViewed(n)
                        })),
                        f = o.useRef(null),
                        d = null !== (t = null == u ? void 0 : u.config) && void 0 !== t ? t : {},
                        p = d.accessibilityLabel,
                        m = d.thumbnailPreviewSrc,
                        h = d.title,
                        b = ae(o.useState(c), 2),
                        g = b[0],
                        v = b[1];
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
                            alt: h
                        }), l === fe.PURCHASED ? null : s || c || g ? (0, r.jsx)(q.G2, {
                            icon: function() {
                                return (0, r.jsx)(K.Z, {
                                    width: 12,
                                    height: 12
                                })
                            },
                            color: W.Z.BACKGROUND_ACCENT,
                            className: ee().lockBadge
                        }) : (0, r.jsx)(q.lB, {
                            className: ee().newBadge,
                            text: (0, r.jsxs)("div", {
                                className: ee().newBadgeText,
                                children: [(0, r.jsx)(K.Z, {
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
                he = {
                    id: -1
                };
            const be = function(e) {
                var t, n = e.user,
                    i = e.pendingProfileEffect,
                    l = e.selectedProfileEffectRef,
                    u = e.purchasedProfileEffects,
                    s = e.previewEffects,
                    f = e.onSelect,
                    d = e.onClose,
                    p = function() {
                        d();
                        (0, a.jN)(X.S9g.COLLECTIBLES_SHOP)
                    },
                    y = D.ZP.canUsePremiumProfileCustomization(n),
                    m = u.length > 0,
                    h = 0 === s.length,
                    b = o.useMemo((function() {
                        var e = {
                                section: fe.PURCHASED,
                                items: [me, he].concat(ue(u)),
                                header: N.Z.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                            },
                            t = {
                                section: fe.PREVIEW,
                                items: s,
                                header: N.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                            };
                        return h ? [e] : y || m ? [e, t] : [t]
                    }), [u, s, y, m, h]),
                    g = null != i;
                return (0, r.jsx)("section", {
                    children: (0, r.jsx)(c.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: ee().list,
                        columns: 3,
                        sections: b.map((function(e) {
                            return e.items.length
                        })),
                        renderItem: function(e, t, n, o) {
                            var a = b[e],
                                u = a.section,
                                s = a.items;
                            return (0, G.EQ)(s[t]).with(me, (function() {
                                return (0, r.jsxs)(pe, {
                                    style: ie({}, n),
                                    isSelected: !g,
                                    onSelect: function() {
                                        return f(null)
                                    },
                                    children: [(0, r.jsx)($.Z, {
                                        className: ee().notAllowedIcon
                                    }), (0, r.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: N.Z.Messages.NONE
                                    })]
                                }, o)
                            })).with(he, (function() {
                                return (0, r.jsxs)(pe, {
                                    style: n,
                                    onSelect: p,
                                    children: [(0, r.jsx)(Y.Z, {
                                        className: ee().shopIcon
                                    }), (0, r.jsx)(Q.Z, {
                                        foreground: ee().shopSparkleBig
                                    }), (0, r.jsx)(Q.Z, {
                                        foreground: ee().shopSparkleSmall
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
                                    section: u,
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
                            var t = b[e].header;
                            return (0, r.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, r.jsx)(c.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: function() {
                            return 16
                        },
                        getItemKey: function(e, n) {
                            var r;
                            return null !== (t = null === (r = b[e].items[n]) || void 0 === r ? void 0 : r.id) && void 0 !== t ? t : null
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
                return (0, r.jsx)(c.ModalFooter, {
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
                    u = e.initialSelectedProfileEffectID,
                    s = e.currentSavedEffectID,
                    f = (0, l.e7)([E.Z], (function() {
                        return E.Z.getPendingProfileEffectID()
                    })),
                    d = Oe(o.useState((function() {
                        return null != u ? u : void 0 !== f ? f : null == s ? null : null != s ? s : null
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
                    h = m[0],
                    b = m[1],
                    v = o.useRef(null),
                    O = p === (void 0 === f ? null != s ? s : null : f),
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
                        children: [(0, r.jsx)(be, {
                            user: t,
                            pendingProfileEffect: p,
                            selectedProfileEffectRef: v,
                            purchasedProfileEffects: n,
                            previewEffects: i,
                            onSelect: P,
                            onClose: a
                        }), (0, r.jsx)(B, {
                            user: t,
                            canApplySelectedChange: b,
                            pendingProfileEffectRecord: h
                        })]
                    }), (0, r.jsx)(Se, {
                        onApply: function() {
                            (0, g.$C)(p, s);
                            a()
                        },
                        onClose: a,
                        canApplySelectedChange: b,
                        disableApplyButton: O
                    })]
                })
            }

            function we(e) {
                var t, n = e.transitionState,
                    a = e.analyticsLocations,
                    h = e.initialSelectedEffectID,
                    g = e.onClose,
                    E = function() {
                        var e = (0, m.ZP)(),
                            t = e.isFetching,
                            n = e.error,
                            r = e.categories,
                            i = e.purchases,
                            c = b((0, l.Wu)([y.Z], (function() {
                                return [y.Z.isFetching, y.Z.fetchError, y.Z.profileEffects]
                            })), 3),
                            a = c[0],
                            u = c[1],
                            s = c[2];
                        (0, o.useEffect)((function() {
                            (0, p.z)()
                        }), []);
                        return {
                            isFetching: t || a,
                            error: null != n ? n : u,
                            profileEffects: s,
                            categories: r,
                            purchases: i
                        }
                    }(),
                    j = E.isFetching,
                    S = E.categories,
                    C = E.purchases,
                    w = (0, l.e7)([O.default], (function() {
                        return O.default.getCurrentUser()
                    })),
                    x = (0, s.Z)(a, u.Z.EDIT_PROFILE_EFFECT_MODAL),
                    A = x.AnalyticsLocationProvider,
                    I = x.analyticsLocations,
                    Z = Oe(o.useMemo((function() {
                        var e = (0, d.bl)(S, C);
                        return [e.purchased, e.shopPreviews]
                    }), [S, C]), 2),
                    _ = Z[0],
                    D = Z[1],
                    N = (0, v.Z)(null !== (t = null == w ? void 0 : w.id) && void 0 !== t ? t : ""),
                    T = null == N ? void 0 : N.profileEffectID;
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
                return null == w ? null : (0, r.jsx)(A, {
                    children: (0, r.jsx)(c.ModalRoot, {
                        transitionState: n,
                        size: c.ModalSize.DYNAMIC,
                        className: ve().modal,
                        children: j ? (0, r.jsx)(c.Spinner, {
                            className: ve().spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(Ce, {
                            user: w,
                            purchasedProfileEffects: _,
                            previewEffects: D,
                            initialSelectedProfileEffectID: h,
                            currentSavedEffectID: T,
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