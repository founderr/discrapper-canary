"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [34308], {
        34308: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => he
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                l = n(882723),
                c = n(735885),
                s = n(153686),
                a = n(19585),
                u = n(455706),
                f = n(357920),
                d = n(784426),
                p = n(183490),
                b = n(450383),
                h = n(531441),
                g = n(652591),
                m = n(116094),
                y = n(379667),
                O = n(300023),
                E = n(579194),
                j = n(30027),
                v = n(494818),
                x = n(341133),
                C = n(968449),
                P = n(364412),
                S = (n(256827), n(568199)),
                w = n.n(S);

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
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

            function I(e, t) {
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
            var A = function(e) {
                var t = e.effectIsOwned;
                return null != e.pendingProfileEffectID ? (0, r.jsx)("div", {
                    className: t ? w().effectDescriptionBorderWithGradient : w().effectDescriptionNoGradient,
                    children: (0, r.jsxs)("div", {
                        className: w().effectDescriptionContainer,
                        children: [(0, r.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: w().effectName,
                            children: "Effect Name"
                        }), (0, r.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: w().effectDescription,
                            children: "Go to shop to purchase this and other profile effects. Avaliable for Nitro users."
                        })]
                    })
                }) : null
            };
            const N = function(e) {
                var t = e.user,
                    n = e.pendingProfileEffectID,
                    o = (0, i.cj)([b.Z], (function() {
                        var e = b.Z.getAllPending(),
                            t = b.Z.getErrors();
                        return I(T({}, e), {
                            errors: t
                        })
                    })),
                    l = o.pendingAvatar,
                    c = o.pendingBanner,
                    s = o.pendingBio,
                    a = o.pendingPronouns,
                    u = o.pendingGlobalName,
                    f = o.pendingAccentColor,
                    d = o.pendingAvatarDecoration,
                    h = o.pendingThemeColors,
                    g = (0, p.Z)(t.id),
                    y = Boolean(null == g ? void 0 : g.getPreviewBio(s).value),
                    O = C.dN.useSetting() && null != s ? j.ZP.parse(void 0, s).content : s,
                    S = {
                        user: t,
                        canUsePremiumCustomization: m.ZP.canUsePremiumProfileCustomization(t),
                        onUpsellClick: P.Z,
                        onAvatarChange: E.I5,
                        onBannerChange: x.g_,
                        pendingBanner: c,
                        pendingBio: O,
                        pendingPronouns: a,
                        pendingAvatar: l,
                        pendingGlobalName: u,
                        pendingAvatarDecoration: d,
                        pendingThemeColors: h,
                        pendingAccentColor: f,
                        pendingProfileEffectID: n,
                        hideFakeActivity: y
                    };
                return (0, r.jsxs)("div", {
                    className: w().previewContainer,
                    children: [(0, r.jsx)(v.Z, I(T({}, S), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, r.jsx)(A, {
                        effectIsOwned: !1,
                        pendingProfileEffectID: n
                    })]
                })
            };
            var D = n(294184),
                Z = n.n(D),
                M = n(498964),
                _ = n(517586),
                k = n(778613),
                B = n(97990),
                R = n(155217),
                F = n(616276),
                H = n(34225),
                U = n(2590),
                G = n(473708),
                V = n(291370),
                z = n.n(V);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Y(e, t, n[t])
                    }))
                }
                return e
            }

            function $(e, t) {
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

            function Q(e, t) {
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

            function q(e) {
                return function(e) {
                    if (Array.isArray(e)) return K(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var J, X = function() {
                    return 84
                },
                ee = function(e) {
                    var t = e.topText,
                        n = e.bottomText;
                    return (0, r.jsxs)("div", {
                        className: z().tooltipInner,
                        children: [(0, r.jsx)(l.Text, {
                            className: z().tooltipText,
                            variant: "text-sm/medium",
                            children: t
                        }), (0, r.jsx)(H.Z, {}), (0, r.jsx)(l.Text, {
                            className: z().tooltipText,
                            variant: "text-sm/medium",
                            children: n
                        })]
                    })
                },
                te = function(e) {
                    var t = e.children,
                        n = e.isSelected,
                        o = void 0 !== n && n,
                        i = Q(e, ["children", "isSelected"]);
                    return (0, r.jsx)(l.Clickable, $(W({
                        className: Z()(z().effectGridItem, Y({}, z().selected, o))
                    }, i), {
                        onClick: i.onSelect,
                        children: t
                    }))
                },
                ne = function(e) {
                    var t = e.toolTip,
                        n = e.children,
                        o = Q(e, ["toolTip", "children"]);
                    return null != t ? (0, r.jsx)(l.Tooltip, {
                        text: (0, r.jsx)(ee, {
                            topText: t.topText,
                            bottomText: t.bottomText
                        }),
                        tooltipClassName: z().tooltip,
                        "aria-label": t.ariaLabel,
                        children: function(e) {
                            return (0, r.jsx)(te, $(W({}, e, o), {
                                children: n
                            }))
                        }
                    }) : (0, r.jsx)(te, $(W({}, o), {
                        children: n
                    }))
                },
                re = function(e) {
                    var t = e.profileEffect,
                        n = e.innerRef,
                        i = e.showNewBadge,
                        l = e.showLockBadge,
                        c = Q(e, ["profileEffect", "innerRef", "showNewBadge", "showLockBadge"]),
                        s = o.useRef(null);
                    return (0, r.jsxs)(ne, $(W({
                        innerRef: null != n ? n : s
                    }, c), {
                        children: [(0, r.jsx)("img", {
                            className: z().presetEffectImg,
                            src: null == t ? void 0 : t.config.thumbnailPreviewSrc,
                            alt: "effect name"
                        }), i && (0, r.jsx)(h.lB, {
                            className: z().badge,
                            text: G.Z.Messages.NEW
                        }), l && (0, r.jsx)(h.G2, {
                            icon: B.Z,
                            color: _.Z.BACKGROUND_ACCENT,
                            className: z().lockBadge
                        })]
                    }))
                };
            ! function(e) {
                e[e.COLLECTED = 0] = "COLLECTED";
                e[e.UNCOLLECTED = 1] = "UNCOLLECTED"
            }(J || (J = {}));
            var oe = {
                    id: -2
                },
                ie = {
                    id: -1
                };
            const le = function(e) {
                var t = e.profileEffects,
                    n = e.pendingProfileEffect,
                    i = e.selectedProfileEffectRef,
                    s = e.onSelect,
                    a = e.onClose,
                    u = function() {
                        a();
                        (0, c.jN)(U.S9g.COLLECTIBLES_SHOP)
                    },
                    f = o.useMemo((function() {
                        return [oe, ie].concat(q(t)).filter((function(e) {
                            return null != e
                        }))
                    }), [t]),
                    d = f,
                    p = f.slice(0, 1),
                    b = null != n;
                return (0, r.jsx)("section", {
                    children: (0, r.jsx)(l.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        paddingVertical: 0,
                        paddingHorizontal: 17,
                        className: z().list,
                        columns: 3,
                        sections: [d.length, p.length],
                        getSectionHeight: function(e) {
                            return J.COLLECTED, 16
                        },
                        renderSection: function(e) {
                            return e === J.COLLECTED ? (0, r.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, r.jsx)(l.FormTitle, {
                                    children: "YOUR EFFECTS"
                                })
                            }) : (0, r.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, r.jsx)(l.FormTitle, {
                                    children: "PREVIEW THE SHOP"
                                })
                            })
                        },
                        renderItem: function(e, t, o, c) {
                            var a = e === J.COLLECTED ? d : p;
                            return (0, M.EQ)(a[t]).with(oe, (function() {
                                return (0, r.jsxs)(ne, {
                                    style: W({}, o),
                                    isSelected: !b,
                                    onSelect: function() {
                                        return b ? s(null) : null
                                    },
                                    children: [(0, r.jsx)(k.Z, {
                                        className: z().notAllowedIcon,
                                        color: "white"
                                    }), (0, r.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: G.Z.Messages.NONE
                                    })]
                                }, c)
                            })).with(ie, (function() {
                                return (0,
                                    r.jsxs)(ne, {
                                    style: o,
                                    onSelect: u,
                                    children: [(0, r.jsx)(R.Z, {
                                        className: z().shopIcon
                                    }), (0, r.jsx)(F.Z, {
                                        foreground: z().shopSparkleBig
                                    }), (0, r.jsx)(F.Z, {
                                        foreground: z().shopSparkleSmall
                                    }), (0, r.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: G.Z.Messages.COLLECTIBLES_SHOP
                                    })]
                                }, c)
                            })).otherwise((function(t) {
                                var l = n === (null == t ? void 0 : t.id),
                                    a = new Date,
                                    u = {
                                        ariaLabel: "test",
                                        topText: "test",
                                        bottomText: null != a ? G.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                            date: a.toLocaleDateString(void 0, {
                                                month: "long",
                                                year: "numeric"
                                            })
                                        }) : G.Z.Messages.COLLECTIBLES_AVAILABLE_FOR_PURCHASE
                                    };
                                return (0, r.jsx)(re, {
                                    showNewBadge: e === J.COLLECTED,
                                    showLockBadge: e === J.UNCOLLECTED,
                                    toolTip: u,
                                    style: W({}, o),
                                    profileEffect: t,
                                    innerRef: l ? i : void 0,
                                    isSelected: l,
                                    onSelect: function() {
                                        return s(null == t ? void 0 : t.id)
                                    }
                                }, c)
                            }))
                        },
                        getItemKey: function(e, t) {
                            return e === J.COLLECTED ? d[t].id : p[t].id
                        },
                        getItemHeight: X,
                        removeEdgeItemGutters: !0
                    })
                })
            };
            var ce = n(203600),
                se = n(4353),
                ae = n.n(se);

            function ue(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function fe(e, t, n, r, o, i, l) {
                try {
                    var c = e[i](l),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function de(e, t) {
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
                    if ("string" == typeof e) return ue(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ue(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var pe = function(e, t) {
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

            function be(e) {
                var t = e.onApply,
                    n = e.onClose,
                    s = e.user,
                    a = e.disableApplyButton,
                    f = m.ZP.canUsePremiumProfileCustomization(s),
                    p = (0, i.e7)([b.Z], (function() {
                        return b.Z.showNotice()
                    })),
                    h = o.useCallback((function(e) {
                        e.preventDefault();
                        (0, d.uL)(U.Z5c.APPLICATION_STORE);
                        (0, c.xf)();
                        n()
                    }), [n]);
                if (f) return (0, r.jsxs)(l.ModalFooter, {
                    children: [(0, r.jsx)(l.Button, {
                        onClick: t,
                        disabled: a,
                        children: G.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                    }), (0, r.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: n,
                        children: G.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                var g = m.ZP.isPremium(s) ? G.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : G.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL;
                return (0, r.jsxs)(l.ModalFooter, {
                    className: ae().subscribeFooter,
                    children: [(0, r.jsxs)("div", {
                        className: ae().buttonsRight,
                        children: [(0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: G.Z.Messages.CANCEL
                        }), (0, r.jsx)(u.Z, {
                            buttonText: g,
                            overrideDisabledButtonText: {
                                disabledButtonText: g,
                                disabledButtonTooltipText: void 0
                            },
                            subscriptionTier: ce.Si.TIER_2
                        })]
                    }), !p && (0, r.jsx)(l.Button, {
                        onClick: h,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: ae().discoverMorePerks,
                        children: G.Z.Messages.AVATAR_DECORATION_MODAL_DISCOVER_MORE_PERKS
                    })]
                })
            }

            function he(e) {
                var t = e.user,
                    n = e.transitionState,
                    c = e.analyticsLocations,
                    u = e.upsellEffectID,
                    d = e.onClose,
                    m = (0, a.Z)(c, s.Z.EDIT_PROFILE_EFFECT_MODAL),
                    E = m.AnalyticsLocationProvider,
                    j = m.analyticsLocations,
                    v = (0, p.Z)(t.id),
                    x = (0, i.cj)([O.Z], (function() {
                        return {
                            isFetching: O.Z.isFetching,
                            profileEffects: O.Z.profileEffects
                        }
                    })),
                    C = x.isFetching,
                    P = x.profileEffects,
                    S = (0, i.e7)([b.Z], (function() {
                        return b.Z.getPendingProfileEffectID()
                    })),
                    w = de(o.useState(null != (null == v ? void 0 : v.profileEffectID) ? null == v ? void 0 : v.profileEffectID : S), 2),
                    L = w[0],
                    T = w[1],
                    I = o.useRef(null);
                o.useEffect((function() {
                    null != u ? T(u) : null === S && T(S);
                    var e, t, n = (t = (e = function() {
                        return pe(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 2, , 3]);
                                    return [4, (0, y.z)()];
                                case 1:
                                    e.sent();
                                    return [3, 3];
                                case 2:
                                    e.sent();
                                    (0, l.showToast)((0, l.createToast)(G.Z.Messages.USER_PROFILE_EFFECTS_FETCH_FAILURE, l.ToastType.FAILURE));
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);

                            function l(e) {
                                fe(i, r, o, l, c, "next", e)
                            }

                            function c(e) {
                                fe(i, r, o, l, c, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                    n()
                }), []);
                var A = o.useCallback((function(e) {
                    T(e)
                }), [T]);
                o.useEffect((function() {
                    if (0 !== P.length) {
                        var e = requestAnimationFrame((function() {
                            var e;
                            null === (e = I.current) || void 0 === e || e.scrollIntoView({
                                behavior: "auto",
                                block: "center"
                            })
                        }));
                        return function() {
                            return cancelAnimationFrame(e)
                        }
                    }
                }), [t, P, S, A]);
                o.useEffect((function() {
                    g.default.track(U.rMx.OPEN_MODAL, {
                        type: "Edit Profile Effect Modal",
                        location_stack: j
                    })
                }), [j]);
                return C ? (0, r.jsx)(l.Spinner, {
                    type: l.Spinner.Type.SPINNING_CIRCLE
                }) : (0, r.jsx)(E, {
                    children: (0, r.jsx)(l.ModalRoot, {
                        transitionState: n,
                        size: l.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)(l.ModalHeader, {
                                separator: !1,
                                className: ae().modalHeader,
                                children: [(0, r.jsxs)(l.FormTitle, {
                                    tag: l.FormTitleTags.H1,
                                    className: ae().modalTitle,
                                    children: [G.Z.Messages.PROFILE_EFFECT_MODAL_HEADER, (0, r.jsx)(h.lB, {
                                        className: ae().newBadge,
                                        text: G.Z.Messages.NEW
                                    })]
                                }), (0, r.jsx)(l.ModalCloseButton, {
                                    onClick: d
                                })]
                            }), (0, r.jsxs)(l.ModalContent, {
                                className: ae().modalContent,
                                children: [(0, r.jsx)(le, {
                                    profileEffects: P,
                                    pendingProfileEffect: L,
                                    selectedProfileEffectRef: I,
                                    onSelect: A,
                                    onClose: d
                                }), (0, r.jsx)(N, {
                                    user: t,
                                    pendingProfileEffectID: L
                                })]
                            }), (0, r.jsx)(be, {
                                onApply: function() {
                                    (0, f.$C)(L, null == v ? void 0 : v.profileEffectID);
                                    d()
                                },
                                onClose: d,
                                user: t
                            })]
                        })
                    })
                })
            }
        },
        155217: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function c(e, t) {
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 23 : t,
                    s = e.height,
                    a = void 0 === s ? 18 : s,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = c(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: f
                    })
                }))
            }
        }
    }
]);