(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9244], {
        821977: (e, t, r) => {
            e.exports = r.p + "424e0085e3d4fff22b0668bba7424868.png"
        },
        309244: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => he
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                c = r(882723),
                l = r(735885),
                s = r(153686),
                a = r(19585),
                u = r(349771),
                f = r(379667),
                p = r(300023),
                d = r(681714);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = r(455706),
                g = r(357920),
                h = r(784426),
                m = r(341133),
                v = r(183490),
                j = r(450383),
                P = r(473903),
                E = r(652591),
                S = r(694329),
                w = r(82337),
                C = r(579194),
                I = r(30027),
                x = r(618354),
                A = r(968449),
                D = r(364412),
                L = (r(241213), r(568199)),
                Z = r.n(L);

            function T(e, t, r) {
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
                        T(e, t, r[t])
                    }))
                }
                return e
            }

            function _(e, t) {
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
            var M = function(e) {
                var t = e.effectIsOwned;
                return null != e.pendingProfileEffectID ? (0, n.jsx)("div", {
                    className: t ? Z().effectDescriptionNoGradient : Z().effectDescriptionBorderWithGradient,
                    children: (0, n.jsxs)("div", {
                        className: Z().effectDescriptionContainer,
                        children: [(0, n.jsx)(c.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: Z().effectName,
                            children: "Effect Name"
                        }), (0, n.jsx)(c.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: Z().effectDescription,
                            children: "Go to shop to purchase this and other profile effects. Avaliable for Nitro users."
                        })]
                    })
                }) : null
            };
            const k = function(e) {
                var t = e.user,
                    r = e.pendingProfileEffectID,
                    o = e.effectIsOwned,
                    c = (0, i.cj)([j.Z], (function() {
                        var e = j.Z.getAllPending(),
                            t = j.Z.getErrors();
                        return _(N({}, e), {
                            errors: t
                        })
                    })),
                    l = c.pendingAvatar,
                    s = c.pendingBanner,
                    a = c.pendingBio,
                    u = c.pendingPronouns,
                    f = c.pendingGlobalName,
                    p = c.pendingAccentColor,
                    d = c.pendingAvatarDecoration,
                    b = c.pendingThemeColors,
                    y = (0, v.Z)(t.id),
                    O = Boolean(null == y ? void 0 : y.getPreviewBio(a).value),
                    g = A.dN.useSetting() && null != a ? I.ZP.parse(void 0, a).content : a,
                    h = {
                        user: t,
                        canUsePremiumCustomization: S.ZP.canUsePremiumProfileCustomization(t),
                        onUpsellClick: D.Z,
                        onAvatarChange: C.I5,
                        onBannerChange: m.g_,
                        pendingBanner: s,
                        pendingBio: g,
                        pendingPronouns: u,
                        pendingAvatar: l,
                        pendingGlobalName: f,
                        pendingAvatarDecoration: d,
                        pendingThemeColors: b,
                        pendingAccentColor: p,
                        pendingProfileEffectID: r,
                        hideFakeActivity: O
                    };
                return (0, n.jsxs)("div", {
                    className: Z().previewContainer,
                    children: [(0,
                        n.jsx)(x.Z, _(N({}, h), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, n.jsx)(M, {
                        effectIsOwned: o,
                        pendingProfileEffectID: r
                    })]
                })
            };
            var R = r(294184),
                B = r.n(R),
                H = r(498964),
                F = r(517586),
                U = r(778613),
                V = r(97990),
                G = r(969292),
                z = r(616276),
                K = r(531441),
                W = r(2590),
                Y = r(473708),
                $ = r(291370),
                q = r.n($),
                Q = r(821977),
                J = r.n(Q);

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ee(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        ee(e, t, r[t])
                    }))
                }
                return e
            }

            function re(e, t) {
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

            function ne(e, t) {
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

            function oe(e) {
                return function(e) {
                    if (Array.isArray(e)) return X(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return X(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return X(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ie;
            ! function(e) {
                e[e.PURCHASED = 0] = "PURCHASED";
                e[e.PREVIEW = 1] = "PREVIEW"
            }(ie || (ie = {}));
            var ce = function() {
                    return 80
                },
                le = function(e) {
                    var t = e.children,
                        r = e.isSelected,
                        o = void 0 !== r && r,
                        i = ne(e, ["children", "isSelected"]);
                    return (0, n.jsx)(c.Clickable, re(te({
                        className: B()(q().effectGridItem, ee({}, q().selected, o))
                    }, i), {
                        onClick: i.onSelect,
                        children: t
                    }))
                },
                se = function(e) {
                    var t = e.profileEffect,
                        r = e.innerRef,
                        i = e.showLockBadge,
                        c = ne(e, ["profileEffect", "innerRef", "showLockBadge"]),
                        l = o.useRef(null);
                    return (0, n.jsxs)(le, re(te({
                        innerRef: null != r ? r : l
                    }, c), {
                        children: [(0, n.jsx)("img", {
                            src: J(),
                            alt: " ",
                            className: q().presetEffectBackground,
                            "aria-hidden": !0
                        }), (0, n.jsx)("img", {
                            className: q().presetEffectImg,
                            src: null == t ? void 0 : t.config.thumbnailPreviewSrc,
                            alt: "effect name"
                        }), i && (0, n.jsx)(K.G2, {
                            icon: V.Z,
                            color: F.Z.BACKGROUND_ACCENT,
                            className: q().lockBadge
                        })]
                    }))
                },
                ae = {
                    id: -2
                },
                ue = {
                    id: -1
                };
            const fe = function(e) {
                var t, r = e.user,
                    i = e.pendingProfileEffect,
                    s = e.selectedProfileEffectRef,
                    a = e.purchasedProfileEffects,
                    u = e.previewEffects,
                    f = e.onSelect,
                    p = e.onClose,
                    d = function() {
                        p();
                        (0, l.jN)(W.S9g.COLLECTIBLES_SHOP)
                    },
                    b = S.ZP.canUsePremiumProfileCustomization(r),
                    y = a.length > 0,
                    O = 0 === u.length,
                    g = o.useMemo((function() {
                        var e = {
                                section: ie.PURCHASED,
                                items: [ae, ue].concat(oe(a)),
                                header: Y.Z.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                            },
                            t = {
                                section: ie.PREVIEW,
                                items: u,
                                header: Y.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                            };
                        return O ? [e] : b || y ? [e, t] : [t]
                    }), [a, u, b, y, O]),
                    h = null != i;
                return (0, n.jsx)("section", {
                    children: (0, n.jsx)(c.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        paddingVertical: 0,
                        paddingHorizontal: 17,
                        className: q().list,
                        columns: 3,
                        sections: g.map((function(e) {
                            return e.items.length
                        })),
                        renderItem: function(e, t, r, o) {
                            var l = g[e],
                                a = l.section,
                                u = l.items;
                            return (0, H.EQ)(u[t]).with(ae, (function() {
                                return (0, n.jsxs)(le, {
                                    style: te({}, r),
                                    isSelected: !h,
                                    onSelect: function() {
                                        return h ? f(null) : null
                                    },
                                    children: [(0, n.jsx)(U.Z, {
                                        className: q().notAllowedIcon
                                    }), (0, n.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: Y.Z.Messages.NONE
                                    })]
                                }, o)
                            })).with(ue, (function() {
                                return (0, n.jsxs)(le, {
                                    style: r,
                                    onSelect: d,
                                    children: [(0, n.jsx)(G.Z, {
                                        className: q().shopIcon
                                    }), (0, n.jsx)(z.Z, {
                                        foreground: q().shopSparkleBig
                                    }), (0, n.jsx)(z.Z, {
                                        foreground: q().shopSparkleSmall
                                    }), (0, n.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: Y.Z.Messages.COLLECTIBLES_SHOP
                                    })]
                                }, o)
                            })).otherwise((function(e) {
                                if (void 0 === e) return null;
                                var t = i === (null == e ? void 0 : e.id);
                                return (0, n.jsx)(se, {
                                    showLockBadge: a === ie.PREVIEW,
                                    style: te({}, r),
                                    profileEffect: e,
                                    innerRef: t ? s : void 0,
                                    isSelected: t,
                                    onSelect: function() {
                                        return f(null == e ? void 0 : e.id)
                                    }
                                }, o)
                            }))
                        },
                        renderSection: function(e) {
                            var t = g[e].header;
                            return (0, n.jsx)("div", {
                                style: {
                                    height: "".concat(18, "px")
                                },
                                children: (0, n.jsx)(c.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: function() {
                            return 18
                        },
                        getItemKey: function(e, r) {
                            var n;
                            return null !== (t = null === (n = g[e].items[r]) || void 0 === n ? void 0 : n.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: ce,
                        removeEdgeItemGutters: !0
                    })
                })
            };
            var pe = r(203600),
                de = r(4353),
                be = r.n(de);

            function ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ye(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ye(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ge(e) {
                var t = e.onApply,
                    r = e.onClose,
                    s = e.user,
                    a = e.selectedEffectIsOwned,
                    u = e.disableApplyButton,
                    f = e.isTryItOutFlow,
                    p = S.ZP.canUsePremiumProfileCustomization(s),
                    d = (0, i.e7)([j.Z], (function() {
                        return j.Z.showNotice()
                    })),
                    b = o.useCallback((function(e) {
                        e.preventDefault();
                        (0, h.uL)(W.Z5c.APPLICATION_STORE);
                        (0, l.xf)();
                        r()
                    }), [r]);
                if (a || f) return (0, n.jsxs)(c.ModalFooter, {
                    children: [(0, n.jsx)(c.Button, {
                        onClick: t,
                        disabled: !f && u,
                        children: Y.Z.Messages.PROFILE_EFFECT_MODAL_APPLY
                    }), (0, n.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.PRIMARY,
                        onClick: r,
                        children: Y.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                if (p) return (0, n.jsxs)(c.ModalFooter, {
                    children: [(0, n.jsx)(c.Button, {
                        className: be().goToShopButton,
                        onClick: function() {
                            r();
                            (0, l.jN)(W.S9g.COLLECTIBLES_SHOP)
                        },
                        children: Y.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    }), (0, n.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.PRIMARY,
                        onClick: r,
                        children: Y.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                var y = S.ZP.isPremium(s) ? Y.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : Y.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL;
                return (0, n.jsxs)(c.ModalFooter, {
                    className: be().subscribeFooter,
                    children: [(0, n.jsxs)("div", {
                        className: be().buttonsRight,
                        children: [(0, n.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: r,
                            children: Y.Z.Messages.CANCEL
                        }), (0, n.jsx)(O.Z, {
                            buttonText: y,
                            overrideDisabledButtonText: {
                                disabledButtonText: y,
                                disabledButtonTooltipText: void 0
                            },
                            subscriptionTier: pe.Si.TIER_2
                        })]
                    }), !d && (0,
                        n.jsx)(c.Button, {
                        onClick: b,
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: be().discoverMorePerks,
                        children: Y.Z.Messages.AVATAR_DECORATION_MODAL_DISCOVER_MORE_PERKS
                    })]
                })
            }

            function he(e) {
                var t, r = e.transitionState,
                    l = e.analyticsLocations,
                    b = e.upsellEffectID,
                    O = e.effectFromShop,
                    h = e.onClose,
                    S = e.isTryItOutFlow,
                    C = function() {
                        var e = (0, d.ZP)(),
                            t = e.isFetching,
                            r = e.error,
                            n = e.categories,
                            c = e.purchases,
                            l = y((0, i.Wu)([p.Z], (function() {
                                return [p.Z.isFetching, p.Z.fetchError, p.Z.profileEffects]
                            })), 3),
                            s = l[0],
                            a = l[1],
                            u = l[2];
                        (0, o.useEffect)((function() {
                            (0, f.z)()
                        }), []);
                        return {
                            isFetching: t || s,
                            error: null != r ? r : a,
                            profileEffects: u,
                            categories: n,
                            purchases: c
                        }
                    }(),
                    I = C.isFetching,
                    x = C.profileEffects,
                    A = C.categories,
                    D = C.purchases,
                    L = (0, i.e7)([P.default], (function() {
                        return P.default.getCurrentUser()
                    })),
                    Z = (0, a.Z)(l, s.Z.EDIT_PROFILE_EFFECT_MODAL),
                    T = Z.AnalyticsLocationProvider,
                    N = Z.analyticsLocations,
                    _ = (0, w.hi)("pfx modal"),
                    M = (0, v.Z)(null !== (t = null == L ? void 0 : L.id) && void 0 !== t ? t : ""),
                    R = (0, i.e7)([j.Z], (function() {
                        return j.Z.getPendingProfileEffectID()
                    })),
                    B = Oe(o.useState(null != (null == M ? void 0 : M.profileEffectID) ? null == M ? void 0 : M.profileEffectID : R), 2),
                    H = B[0],
                    F = B[1],
                    U = Oe(o.useState(!1), 2),
                    V = U[0],
                    G = U[1],
                    z = o.useRef(null),
                    K = Oe(o.useMemo((function() {
                        var e = (0, u.bl)(A, D);
                        return [e.purchased.map((function(e) {
                            return p.Z.getProfileEffectById(e.id)
                        })), e.shopPreviews.map((function(e) {
                            return p.Z.getProfileEffectById(e.id)
                        }))]
                    }), [A, D]), 2),
                    $ = K[0],
                    q = K[1],
                    Q = o.useCallback((function(e) {
                        F(e)
                    }), [F]);
                o.useEffect((function() {
                    null != O ? F(O) : null != b ? F(b) : null === R && F(R)
                }), []);
                o.useEffect((function() {
                    G($.some((function(e) {
                        return (null == e ? void 0 : e.id) === H
                    })) || null === H)
                }), [H, $]);
                o.useEffect((function() {
                    if (0 !== x.length && 0 !== A.size) {
                        var e = requestAnimationFrame((function() {
                            var e;
                            null === (e = z.current) || void 0 === e || e.scrollIntoView({
                                behavior: "auto",
                                block: "center"
                            })
                        }));
                        return function() {
                            return cancelAnimationFrame(e)
                        }
                    }
                }), [L, x, A, z]);
                o.useEffect((function() {
                    E.default.track(W.rMx.OPEN_MODAL, {
                        type: "Edit Profile Effect Modal",
                        location_stack: N
                    })
                }), [N]);
                return null == L ? null : I ? (0, n.jsx)(c.Spinner, {
                    type: c.Spinner.Type.SPINNING_CIRCLE
                }) : (0, n.jsx)(T, {
                    children: (0, n.jsx)(c.ModalRoot, {
                        transitionState: r,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(c.ModalHeader, {
                                separator: !1,
                                className: be().modalHeader,
                                children: [(0, n.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H1,
                                    className: be().modalTitle,
                                    children: Y.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
                                }), (0, n.jsx)(c.ModalCloseButton, {
                                    onClick: h
                                })]
                            }), (0, n.jsxs)(c.ModalContent, {
                                className: be().modalContent,
                                children: [(0, n.jsx)(fe, {
                                    user: L,
                                    pendingProfileEffect: H,
                                    selectedProfileEffectRef: z,
                                    purchasedProfileEffects: $,
                                    previewEffects: q,
                                    onSelect: Q,
                                    onClose: h
                                }), (0, n.jsx)(k, {
                                    user: L,
                                    effectIsOwned: V,
                                    pendingProfileEffectID: H
                                })]
                            }), (0, n.jsx)(ge, {
                                onApply: S ? function() {
                                    (0, m.Ju)(H);
                                    h()
                                } : function() {
                                    (0, g.$C)(H, null == M ? void 0 : M.profileEffectID);
                                    h()
                                },
                                onClose: h,
                                selectedEffectIsOwned: _ || V,
                                user: L,
                                isTryItOutFlow: S
                            })]
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
                o = (r(667294), r(882723)),
                i = r(2590);

            function c(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(n, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            c(i, n, o, l, s, "next", e)
                        }

                        function s(e) {
                            c(i, n, o, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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
            var u = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, l])
                    }
                }
            };

            function f() {
                (0, o.openModalLazy)(l((function() {
                    var e, t;
                    return u(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, r.e(92189).then(r.bind(r, 92189))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, n.jsx)(t, a(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                s(e, t, r[t])
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
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function a(e, t) {
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

            function u(e, t, r) {
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

            function p(e, t) {
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
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 23 : t,
                    o = e.height,
                    i = void 0 === o ? 18 : o,
                    l = e.color,
                    s = void 0 === l ? "currentColor" : l,
                    a = p(e, ["width", "height", "color"]);
                return (0,
                    n.jsx)("svg", f(function(e) {
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
                }({}, (0, c.Z)(a)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: s
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M2.635 4.188A3 3 0 0 1 5.523 2H7a1 1 0 0 1 1 1v3.983a3.067 3.067 0 0 1 0 .051A2.966 2.966 0 0 1 4.983 10c-2 0-3.446-1.91-2.905-3.834l.557-1.978ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.966V3a1 1 0 0 0-1-1h-4Zm7 0a1 1 0 0 0-1 1v3.983a2.43 2.43 0 0 0 0 .051A2.966 2.966 0 0 0 19.017 10c2 0 3.446-1.91 2.905-3.834l-.557-1.978A3 3 0 0 0 18.477 2H17Zm4 9.423V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75a.25.25 0 0 1-.25.25H6a3 3 0 0 1-3-3v-7.577c0-.187.199-.31.372-.24a4.46 4.46 0 0 0 1.662.317c1.293 0 2.458-.55 3.273-1.428a.278.278 0 0 1 .405 0A4.488 4.488 0 0 0 12 11.5c1.298 0 2.467-.55 3.289-1.428a.278.278 0 0 1 .404 0 4.454 4.454 0 0 0 3.273 1.428 4.46 4.46 0 0 0 1.662-.317c.174-.07.372.053.372.24Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);