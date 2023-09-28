(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9244], {
        821977: (e, t, r) => {
            e.exports = r.p + "424e0085e3d4fff22b0668bba7424868.png"
        },
        309244: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => je
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(304548),
                c = r(735885),
                u = r(153686),
                s = r(19585),
                a = r(349771),
                f = r(379667),
                d = r(300023),
                p = r(681714);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = r(455706),
                g = r(357920),
                h = r(784426),
                m = r(341133),
                v = r(183490),
                P = r(450383),
                E = r(473903),
                j = r(652591),
                S = r(694329),
                w = r(579194),
                C = r(764797),
                I = r(767539),
                x = r(30027),
                A = r(618354),
                L = r(384411),
                T = r(968449),
                _ = r(364412),
                Z = (r(241213), r(473708)),
                D = r(818424),
                M = r.n(D);

            function R(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        R(e, t, r[t])
                    }))
                }
                return e
            }

            function k(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var B = function(e) {
                var t, r = e.effectIsOwned,
                    o = e.pendingProfileEffectRecord,
                    c = e.userIsPremium,
                    u = (0, i.e7)([I.Z], (function() {
                        return I.Z.getPurchase(null == o ? void 0 : o.skuId)
                    })),
                    s = (0, i.e7)([C.Z], (function() {
                        return C.Z.getProduct(null == o ? void 0 : o.skuId)
                    })),
                    a = (0, i.e7)([L.default], (function() {
                        return L.default.locale
                    }));
                return null != o ? (0, n.jsx)("div", {
                    className: r ? M().effectDescriptionNoGradient : M().effectDescriptionBorderWithGradient,
                    children: (0, n.jsxs)("div", {
                        className: M().effectDescriptionContainer,
                        children: [(0, n.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: M().effectName,
                            children: null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : null == s ? void 0 : s.name
                        }), (0, n.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: M().effectDescription,
                            children: null != u ? u.summary : c ? Z.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : Z.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE
                        }), null != u && (0, n.jsx)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: M().effectPurchasedAt,
                            children: Z.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: u.purchasedAt.toLocaleDateString(a, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            const H = function(e) {
                var t, r = e.user,
                    o = e.pendingProfileEffectRecord,
                    l = e.effectIsOwned,
                    c = (0, i.cj)([P.Z], (function() {
                        var e = P.Z.getAllPending(),
                            t = P.Z.getErrors();
                        return k(N({}, e), {
                            errors: t
                        })
                    })),
                    u = c.pendingAvatar,
                    s = c.pendingBanner,
                    a = c.pendingBio,
                    f = c.pendingPronouns,
                    d = c.pendingGlobalName,
                    p = c.pendingAccentColor,
                    y = c.pendingAvatarDecoration,
                    b = c.pendingThemeColors,
                    O = S.ZP.isPremium(r),
                    g = (0, v.Z)(r.id),
                    h = Boolean(null == g ? void 0 : g.getPreviewBio(a).value),
                    E = T.dN.useSetting() && null != a ? x.ZP.parse(void 0, a).content : a,
                    j = S.ZP.canUsePremiumProfileCustomization(r),
                    C = (null == g ? void 0 : g.canUsePremiumProfileCustomization) || j,
                    I = {
                        user: r,
                        canUsePremiumCustomization: j,
                        onUpsellClick: _.Z,
                        onAvatarChange: w.I5,
                        onBannerChange: m.g_,
                        pendingBanner: s,
                        pendingBio: E,
                        pendingPronouns: f,
                        pendingAvatar: u,
                        pendingGlobalName: d,
                        pendingAvatarDecoration: y,
                        pendingThemeColors: b,
                        pendingAccentColor: p,
                        pendingProfileEffectID: null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : null,
                        hideFakeActivity: h
                    };
                return (0, n.jsxs)("div", {
                    className: C ? M().previewContainerWithTheme : M().previewContainerWithoutTheme,
                    children: [(0, n.jsx)(A.Z, k(N({}, I), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, n.jsx)(B, {
                        effectIsOwned: l,
                        pendingProfileEffectRecord: o,
                        userIsPremium: O
                    })]
                })
            };
            var F = r(294184),
                U = r.n(F),
                G = r(498964),
                V = r(517586),
                W = r(778613),
                z = r(97990),
                K = r(969292),
                Y = r(616276),
                $ = r(531441),
                Q = r(2590),
                q = r(165043),
                J = r.n(q),
                X = r(821977),
                ee = r.n(X);

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function re(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        re(e, t, r[t])
                    }))
                }
                return e
            }

            function oe(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function ie(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
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

            function ce(e) {
                return function(e) {
                    if (Array.isArray(e)) return te(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ue(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ue(e, t) {
                if (e) {
                    if ("string" == typeof e) return te(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? te(e, t) : void 0
                }
            }
            var se;
            ! function(e) {
                e[e.PURCHASED = 0] = "PURCHASED";
                e[e.PREVIEW = 1] = "PREVIEW"
            }(se || (se = {}));
            var ae = function() {
                    return 80
                },
                fe = function(e) {
                    var t = e.children,
                        r = e.isSelected,
                        o = void 0 !== r && r,
                        i = ie(e, ["children", "isSelected"]);
                    return (0, n.jsx)(l.Clickable, oe(ne({
                        className: U()(J().effectGridItem, re({}, J().selected, o))
                    }, i), {
                        onClick: i.onSelect,
                        children: t
                    }))
                },
                de = function(e) {
                    var t = e.profileEffect,
                        r = e.innerRef,
                        i = e.showLockBadge,
                        l = ie(e, ["profileEffect", "innerRef", "showLockBadge"]),
                        c = o.useRef(null);
                    return (0, n.jsxs)(fe, oe(ne({
                        innerRef: null != r ? r : c
                    }, l), {
                        children: [(0, n.jsx)("img", {
                            src: ee(),
                            alt: " ",
                            className: J().presetEffectBackground,
                            "aria-hidden": !0
                        }), (0, n.jsx)("img", {
                            className: J().presetEffectImg,
                            src: null == t ? void 0 : t.config.thumbnailPreviewSrc,
                            alt: "effect name"
                        }), i && (0, n.jsx)($.G2, {
                            icon: z.Z,
                            color: V.Z.BACKGROUND_ACCENT,
                            className: J().lockBadge
                        })]
                    }))
                },
                pe = {
                    id: -2
                },
                ye = {
                    id: -1
                };
            const be = function(e) {
                var t, r = e.user,
                    i = e.pendingProfileEffect,
                    u = e.selectedProfileEffectRef,
                    s = e.purchasedProfileEffects,
                    a = e.previewEffects,
                    f = e.onSelect,
                    p = e.onClose,
                    y = function() {
                        p();
                        (0, c.jN)(Q.S9g.COLLECTIBLES_SHOP)
                    },
                    b = le(o.useMemo((function() {
                        return [s.map((function(e) {
                            return d.Z.getProfileEffectById(e.id)
                        })), a.map((function(e) {
                            return d.Z.getProfileEffectById(e.id)
                        }))]
                    }), [s, a]), 2),
                    O = b[0],
                    g = b[1],
                    h = S.ZP.canUsePremiumProfileCustomization(r),
                    m = s.length > 0,
                    v = 0 === a.length,
                    P = o.useMemo((function() {
                        var e = {
                                section: se.PURCHASED,
                                items: [pe, ye].concat(ce(O)),
                                header: Z.Z.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                            },
                            t = {
                                section: se.PREVIEW,
                                items: g,
                                header: Z.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                            };
                        return v ? [e] : h || m ? [e, t] : [t]
                    }), [O, g, h, m, v]),
                    E = null != i;
                return (0, n.jsx)("section", {
                    children: (0, n.jsx)(l.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: J().list,
                        columns: 3,
                        sections: P.map((function(e) {
                            return e.items.length
                        })),
                        renderItem: function(e, t, r, o) {
                            var c = P[e],
                                s = c.section,
                                a = c.items;
                            return (0, G.EQ)(a[t]).with(pe, (function() {
                                return (0, n.jsxs)(fe, {
                                    style: ne({}, r),
                                    isSelected: !E,
                                    onSelect: function() {
                                        return E ? f(null) : null
                                    },
                                    children: [(0, n.jsx)(W.Z, {
                                        className: J().notAllowedIcon
                                    }), (0,
                                        n.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: Z.Z.Messages.NONE
                                    })]
                                }, o)
                            })).with(ye, (function() {
                                return (0, n.jsxs)(fe, {
                                    style: r,
                                    onSelect: y,
                                    children: [(0, n.jsx)(K.Z, {
                                        className: J().shopIcon
                                    }), (0, n.jsx)(Y.Z, {
                                        foreground: J().shopSparkleBig
                                    }), (0, n.jsx)(Y.Z, {
                                        foreground: J().shopSparkleSmall
                                    }), (0, n.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: Z.Z.Messages.COLLECTIBLES_SHOP
                                    })]
                                }, o)
                            })).otherwise((function(e) {
                                if (void 0 === e) return null;
                                var t = i === (null == e ? void 0 : e.id);
                                return (0, n.jsx)(de, {
                                    showLockBadge: s === se.PREVIEW,
                                    style: ne({}, r),
                                    profileEffect: e,
                                    innerRef: t ? u : void 0,
                                    isSelected: t,
                                    onSelect: function() {
                                        return f(null == e ? void 0 : e.id)
                                    }
                                }, o)
                            }))
                        },
                        renderSection: function(e) {
                            var t = P[e].header;
                            return (0, n.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, n.jsx)(l.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: function() {
                            return 16
                        },
                        getItemKey: function(e, r) {
                            var n;
                            return null !== (t = null === (n = P[e].items[r]) || void 0 === n ? void 0 : n.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: ae,
                        removeEdgeItemGutters: !0
                    })
                })
            };
            var Oe = r(203600),
                ge = r(418877),
                he = r.n(ge);

            function me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ve(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return me(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return me(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pe(e) {
                var t = e.onApply,
                    r = e.onClose,
                    u = e.user,
                    s = e.selectedEffectIsOwned,
                    a = e.disableApplyButton,
                    f = e.isTryItOutFlow,
                    d = S.ZP.canUsePremiumProfileCustomization(u),
                    p = (0, i.e7)([P.Z], (function() {
                        return P.Z.showNotice()
                    })),
                    y = o.useCallback((function(e) {
                        e.preventDefault();
                        (0, h.uL)(Q.Z5c.APPLICATION_STORE);
                        (0, c.xf)();
                        r()
                    }), [r]);
                if (s || f) return (0, n.jsxs)(l.ModalFooter, {
                    children: [(0, n.jsx)(l.Button, {
                        onClick: t,
                        disabled: !f && a,
                        children: Z.Z.Messages.PROFILE_EFFECT_MODAL_APPLY
                    }), (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: r,
                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                if (d) return (0, n.jsxs)(l.ModalFooter, {
                    children: [(0, n.jsx)(l.Button, {
                        className: he().goToShopButton,
                        onClick: function() {
                            r();
                            (0, c.jN)(Q.S9g.COLLECTIBLES_SHOP)
                        },
                        children: Z.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    }), (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: r,
                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                var b = S.ZP.isPremium(u) ? Z.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : Z.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL;
                return (0, n.jsxs)(l.ModalFooter, {
                    className: he().subscribeFooter,
                    children: [(0, n.jsxs)("div", {
                        className: he().buttonsRight,
                        children: [(0, n.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: r,
                            children: Z.Z.Messages.CANCEL
                        }), (0, n.jsx)(O.Z, {
                            buttonText: b,
                            overrideDisabledButtonText: {
                                disabledButtonText: b,
                                disabledButtonTooltipText: void 0
                            },
                            subscriptionTier: Oe.Si.TIER_2
                        })]
                    }), !p && (0, n.jsx)(l.Button, {
                        onClick: y,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: he().discoverMorePerks,
                        children: Z.Z.Messages.AVATAR_DECORATION_MODAL_DISCOVER_MORE_PERKS
                    })]
                })
            }

            function Ee(e) {
                var t = e.user,
                    r = e.purchasedProfileEffects,
                    c = e.previewEffects,
                    u = e.onClose,
                    s = e.initialSelectedProfileEffectID,
                    a = e.currentSavedEffectID,
                    f = e.isTryItOutFlow,
                    d = (0, i.e7)([P.Z], (function() {
                        return P.Z.getPendingProfileEffectID()
                    })),
                    p = ve(o.useState((function() {
                        return null != s ? s : void 0 !== d ? d : null == a ? null : null != a ? a : null
                    })), 2),
                    y = p[0],
                    b = p[1],
                    O = ve(o.useMemo((function() {
                        var e, t = r.find((function(e) {
                                return (null == e ? void 0 : e.id) === y
                            })),
                            n = null != t;
                        return [null !== (e = null != t ? t : c.find((function(e) {
                            return (null == e ? void 0 : e.id) === y
                        }))) && void 0 !== e ? e : null, n]
                    }), [y, r, c]), 2),
                    h = O[0],
                    v = O[1],
                    E = o.useRef(null),
                    j = y === (void 0 === d ? a : d),
                    S = o.useCallback((function(e) {
                        b(e)
                    }), [b]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: he().modalHeader,
                        children: [(0, n.jsx)(l.FormTitle, {
                            tag: l.FormTitleTags.H1,
                            className: he().modalTitle,
                            children: Z.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            onClick: u
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: he().modalContent,
                        children: [(0,
                            n.jsx)(be, {
                            user: t,
                            pendingProfileEffect: y,
                            selectedProfileEffectRef: E,
                            purchasedProfileEffects: r,
                            previewEffects: c,
                            onSelect: S,
                            onClose: u
                        }), (0, n.jsx)(H, {
                            user: t,
                            effectIsOwned: v,
                            pendingProfileEffectRecord: h
                        })]
                    }), (0, n.jsx)(Pe, {
                        onApply: f ? function() {
                            (0, m.Ju)(y);
                            u()
                        } : function() {
                            (0, g.$C)(y, a);
                            u()
                        },
                        onClose: u,
                        selectedEffectIsOwned: v,
                        disableApplyButton: j,
                        user: t,
                        isTryItOutFlow: f
                    })]
                })
            }

            function je(e) {
                var t, r = e.transitionState,
                    c = e.analyticsLocations,
                    y = e.initialSelectedEffectID,
                    O = e.onClose,
                    g = e.isTryItOutFlow,
                    h = function() {
                        var e = (0, p.ZP)(),
                            t = e.isFetching,
                            r = e.error,
                            n = e.categories,
                            l = e.purchases,
                            c = b((0, i.Wu)([d.Z], (function() {
                                return [d.Z.isFetching, d.Z.fetchError, d.Z.profileEffects]
                            })), 3),
                            u = c[0],
                            s = c[1],
                            a = c[2];
                        (0, o.useEffect)((function() {
                            (0, f.z)()
                        }), []);
                        return {
                            isFetching: t || u,
                            error: null != r ? r : s,
                            profileEffects: a,
                            categories: n,
                            purchases: l
                        }
                    }(),
                    m = h.isFetching,
                    P = h.categories,
                    S = h.purchases,
                    w = (0, i.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    C = (0,
                        s.Z)(c, u.Z.EDIT_PROFILE_EFFECT_MODAL),
                    I = C.AnalyticsLocationProvider,
                    x = C.analyticsLocations,
                    A = ve(o.useMemo((function() {
                        var e = (0, a.bl)(P, S);
                        return [e.purchased, e.shopPreviews]
                    }), [P, S]), 2),
                    L = A[0],
                    T = A[1],
                    _ = (0, v.Z)(null !== (t = null == w ? void 0 : w.id) && void 0 !== t ? t : ""),
                    Z = null == _ ? void 0 : _.profileEffectID;
                o.useEffect((function() {
                    j.default.track(Q.rMx.OPEN_MODAL, {
                        type: "Edit Profile Effect Modal",
                        location_stack: x
                    })
                }), [x]);
                return null == w ? null : (0, n.jsx)(I, {
                    children: (0, n.jsx)(l.ModalRoot, {
                        transitionState: r,
                        size: l.ModalSize.DYNAMIC,
                        className: he().modal,
                        children: m ? (0, n.jsx)(l.Spinner, {
                            className: he().spinner,
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(Ee, {
                            user: w,
                            purchasedProfileEffects: L,
                            previewEffects: T,
                            initialSelectedProfileEffectID: y,
                            currentSavedEffectID: Z,
                            onClose: O,
                            isTryItOutFlow: g
                        })
                    })
                })
            }
        },
        364412: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                i = r(2590);

            function l(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        u = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            l(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            l(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var a = function(e, t) {
                var r, n, o, i, l = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                        n = i[1];
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
                                n = 0
                            } finally {
                                r = o = 0
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
                    return a(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, r.e(92189).then(r.bind(r, 92189))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, n.jsx)(t, s(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                u(e, t, r[t])
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
        },
        969292: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 23 : t,
                    o = e.height,
                    i = void 0 === o ? 18 : o,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = d(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(s)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2.635 4.188A3 3 0 0 1 5.523 2H7a1 1 0 0 1 1 1v3.983a3.067 3.067 0 0 1 0 .051A2.966 2.966 0 0 1 4.983 10c-2 0-3.446-1.91-2.905-3.834l.557-1.978ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.966V3a1 1 0 0 0-1-1h-4Zm7 0a1 1 0 0 0-1 1v3.983a2.43 2.43 0 0 0 0 .051A2.966 2.966 0 0 0 19.017 10c2 0 3.446-1.91 2.905-3.834l-.557-1.978A3 3 0 0 0 18.477 2H17Zm4 9.423V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75a.25.25 0 0 1-.25.25H6a3 3 0 0 1-3-3v-7.577c0-.187.199-.31.372-.24a4.46 4.46 0 0 0 1.662.317c1.293 0 2.458-.55 3.273-1.428a.278.278 0 0 1 .405 0A4.488 4.488 0 0 0 12 11.5c1.298 0 2.467-.55 3.289-1.428a.278.278 0 0 1 .404 0 4.454 4.454 0 0 0 3.273 1.428 4.46 4.46 0 0 0 1.662-.317c.174-.07.372.053.372.24Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        }
    }
]);