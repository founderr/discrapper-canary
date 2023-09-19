(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [34308], {
        821977: (e, t, r) => {
            e.exports = r.p + "424e0085e3d4fff22b0668bba7424868.png"
        },
        34308: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => ge
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(882723),
                c = r(735885),
                s = r(153686),
                a = r(19585),
                u = r(455706),
                f = r(357920),
                d = r(784426),
                p = r(183490),
                b = r(450383),
                h = r(652591),
                m = r(116094),
                g = r(379667),
                y = r(300023),
                O = r(579194),
                E = r(30027),
                j = r(494818),
                v = r(341133),
                x = r(968449),
                C = r(364412),
                P = (r(256827), r(568199)),
                S = r.n(P);

            function T(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function L(e) {
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

            function w(e, t) {
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
            var I = function(e) {
                var t = e.effectIsOwned;
                return null != e.pendingProfileEffectID ? (0, n.jsx)("div", {
                    className: t ? S().effectDescriptionBorderWithGradient : S().effectDescriptionNoGradient,
                    children: (0, n.jsxs)("div", {
                        className: S().effectDescriptionContainer,
                        children: [(0, n.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: S().effectName,
                            children: "Effect Name"
                        }), (0, n.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: S().effectDescription,
                            children: "Go to shop to purchase this and other profile effects. Avaliable for Nitro users."
                        })]
                    })
                }) : null
            };
            const A = function(e) {
                var t = e.user,
                    r = e.pendingProfileEffectID,
                    o = (0, i.cj)([b.Z], (function() {
                        var e = b.Z.getAllPending(),
                            t = b.Z.getErrors();
                        return w(L({}, e), {
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
                    P = x.dN.useSetting() && null != s ? E.ZP.parse(void 0, s).content : s,
                    T = {
                        user: t,
                        canUsePremiumCustomization: m.ZP.canUsePremiumProfileCustomization(t),
                        onUpsellClick: C.Z,
                        onAvatarChange: O.I5,
                        onBannerChange: v.g_,
                        pendingBanner: c,
                        pendingBio: P,
                        pendingPronouns: a,
                        pendingAvatar: l,
                        pendingGlobalName: u,
                        pendingAvatarDecoration: d,
                        pendingThemeColors: h,
                        pendingAccentColor: f,
                        pendingProfileEffectID: r,
                        hideFakeActivity: y
                    };
                return (0, n.jsxs)("div", {
                    className: S().previewContainer,
                    children: [(0, n.jsx)(j.Z, w(L({}, T), {
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    })), !1, (0, n.jsx)(I, {
                        effectIsOwned: !1,
                        pendingProfileEffectID: r
                    })]
                })
            };
            var D = r(294184),
                N = r.n(D),
                Z = r(498964),
                M = r(517586),
                _ = r(778613),
                k = r(97990),
                R = r(155217),
                B = r(616276),
                F = r(34225),
                H = r(531441),
                U = r(2590),
                G = r(473708),
                V = r(291370),
                z = r.n(V),
                K = r(821977),
                Y = r.n(K);

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Q(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Q(e, t, r[t])
                    }))
                }
                return e
            }

            function q(e, t) {
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

            function J(e, t) {
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

            function X(e) {
                return function(e) {
                    if (Array.isArray(e)) return $(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return $(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ee, te = function() {
                    return 84
                },
                re = function(e) {
                    var t = e.topText,
                        r = e.bottomText;
                    return (0, n.jsxs)("div", {
                        className: z().tooltipInner,
                        children: [(0, n.jsx)(l.Text, {
                            className: z().tooltipText,
                            variant: "text-sm/medium",
                            children: t
                        }), (0, n.jsx)(F.Z, {}), (0, n.jsx)(l.Text, {
                            className: z().tooltipText,
                            variant: "text-sm/medium",
                            children: r
                        })]
                    })
                },
                ne = function(e) {
                    var t = e.children,
                        r = e.isSelected,
                        o = void 0 !== r && r,
                        i = J(e, ["children", "isSelected"]);
                    return (0, n.jsx)(l.Clickable, q(W({
                        className: N()(z().effectGridItem, Q({}, z().selected, o))
                    }, i), {
                        onClick: i.onSelect,
                        children: t
                    }))
                },
                oe = function(e) {
                    var t = e.toolTip,
                        r = e.children,
                        o = J(e, ["toolTip", "children"]);
                    return null != t ? (0, n.jsx)(l.Tooltip, {
                        text: (0, n.jsx)(re, {
                            topText: t.topText,
                            bottomText: t.bottomText
                        }),
                        tooltipClassName: z().tooltip,
                        "aria-label": t.ariaLabel,
                        children: function(e) {
                            return (0, n.jsx)(ne, q(W({}, e, o), {
                                children: r
                            }))
                        }
                    }) : (0, n.jsx)(ne, q(W({}, o), {
                        children: r
                    }))
                },
                ie = function(e) {
                    var t = e.profileEffect,
                        r = e.innerRef,
                        i = e.showLockBadge,
                        l = J(e, ["profileEffect", "innerRef", "showLockBadge"]),
                        c = o.useRef(null);
                    return (0, n.jsxs)(oe, q(W({
                        innerRef: null != r ? r : c
                    }, l), {
                        children: [(0, n.jsx)("img", {
                            src: Y(),
                            alt: " ",
                            className: z().presetEffectBackground,
                            "aria-hidden": !0
                        }), (0, n.jsx)("img", {
                            className: z().presetEffectImg,
                            src: null == t ? void 0 : t.config.thumbnailPreviewSrc,
                            alt: "effect name"
                        }), i && (0, n.jsx)(H.G2, {
                            icon: k.Z,
                            color: M.Z.BACKGROUND_ACCENT,
                            className: z().lockBadge
                        })]
                    }))
                };
            ! function(e) {
                e[e.COLLECTED = 0] = "COLLECTED";
                e[e.UNCOLLECTED = 1] = "UNCOLLECTED"
            }(ee || (ee = {}));
            var le = {
                    id: -2
                },
                ce = {
                    id: -1
                };
            const se = function(e) {
                var t = e.profileEffects,
                    r = e.pendingProfileEffect,
                    i = e.selectedProfileEffectRef,
                    s = e.onSelect,
                    a = e.onClose,
                    u = function() {
                        a();
                        (0, c.jN)(U.S9g.COLLECTIBLES_SHOP)
                    },
                    f = o.useMemo((function() {
                        return [le, ce].concat(X(t)).filter((function(e) {
                            return null != e
                        }))
                    }), [t]),
                    d = f,
                    p = f.slice(0, 1),
                    b = null != r;
                return (0, n.jsx)("section", {
                    children: (0, n.jsx)(l.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        paddingVertical: 0,
                        paddingHorizontal: 17,
                        className: z().list,
                        columns: 3,
                        sections: [d.length, p.length],
                        getSectionHeight: function(e) {
                            return ee.COLLECTED, 16
                        },
                        renderSection: function(e) {
                            return e === ee.COLLECTED ? (0, n.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, n.jsx)(l.FormTitle, {
                                    children: "YOUR EFFECTS"
                                })
                            }) : (0, n.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, n.jsx)(l.FormTitle, {
                                    children: "PREVIEW THE SHOP"
                                })
                            })
                        },
                        renderItem: function(e, t, o, c) {
                            var a = e === ee.COLLECTED ? d : p;
                            return (0, Z.EQ)(a[t]).with(le, (function() {
                                return (0, n.jsxs)(oe, {
                                    style: W({}, o),
                                    isSelected: !b,
                                    onSelect: function() {
                                        return b ? s(null) : null
                                    },
                                    children: [(0, n.jsx)(_.Z, {
                                        className: z().notAllowedIcon
                                    }), (0, n.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: G.Z.Messages.NONE
                                    })]
                                }, c)
                            })).with(ce, (function() {
                                return (0, n.jsxs)(oe, {
                                    style: o,
                                    onSelect: u,
                                    children: [(0, n.jsx)(R.Z, {
                                        className: z().shopIcon
                                    }), (0, n.jsx)(B.Z, {
                                        foreground: z().shopSparkleBig
                                    }), (0, n.jsx)(B.Z, {
                                        foreground: z().shopSparkleSmall
                                    }), (0, n.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-primary",
                                        children: G.Z.Messages.COLLECTIBLES_SHOP
                                    })]
                                }, c)
                            })).otherwise((function(t) {
                                var l = r === (null == t ? void 0 : t.id),
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
                                return (0, n.jsx)(ie, {
                                    showLockBadge: e === ee.UNCOLLECTED,
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
                            return e === ee.COLLECTED ? d[t].id : p[t].id
                        },
                        getItemHeight: te,
                        removeEdgeItemGutters: !0
                    })
                })
            };
            var ae = r(203600),
                ue = r(4353),
                fe = r.n(ue);

            function de(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function pe(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        s = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(n, o)
            }

            function be(e, t) {
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
                    if ("string" == typeof e) return de(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return de(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var he = function(e, t) {
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

            function me(e) {
                var t = e.onApply,
                    r = e.onClose,
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
                        r()
                    }), [r]);
                if (f) return (0, n.jsxs)(l.ModalFooter, {
                    children: [(0, n.jsx)(l.Button, {
                        onClick: t,
                        disabled: a,
                        children: G.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                    }), (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: r,
                        children: G.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                var g = m.ZP.isPremium(s) ? G.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : G.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL;
                return (0, n.jsxs)(l.ModalFooter, {
                    className: fe().subscribeFooter,
                    children: [(0, n.jsxs)("div", {
                        className: fe().buttonsRight,
                        children: [(0, n.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: r,
                            children: G.Z.Messages.CANCEL
                        }), (0, n.jsx)(u.Z, {
                            buttonText: g,
                            overrideDisabledButtonText: {
                                disabledButtonText: g,
                                disabledButtonTooltipText: void 0
                            },
                            subscriptionTier: ae.Si.TIER_2
                        })]
                    }), !p && (0, n.jsx)(l.Button, {
                        onClick: h,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: fe().discoverMorePerks,
                        children: G.Z.Messages.AVATAR_DECORATION_MODAL_DISCOVER_MORE_PERKS
                    })]
                })
            }

            function ge(e) {
                var t = e.user,
                    r = e.transitionState,
                    c = e.analyticsLocations,
                    u = e.upsellEffectID,
                    d = e.onClose,
                    m = (0, a.Z)(c, s.Z.EDIT_PROFILE_EFFECT_MODAL),
                    O = m.AnalyticsLocationProvider,
                    E = m.analyticsLocations,
                    j = (0, p.Z)(t.id),
                    v = (0, i.cj)([y.Z], (function() {
                        return {
                            isFetching: y.Z.isFetching,
                            profileEffects: y.Z.profileEffects
                        }
                    })),
                    x = v.isFetching,
                    C = v.profileEffects,
                    P = (0, i.e7)([b.Z], (function() {
                        return b.Z.getPendingProfileEffectID()
                    })),
                    S = be(o.useState(null != (null == j ? void 0 : j.profileEffectID) ? null == j ? void 0 : j.profileEffectID : P), 2),
                    T = S[0],
                    L = S[1],
                    w = o.useRef(null);
                o.useEffect((function() {
                    null != u ? L(u) : null === P && L(P);
                    var e, t, r = (t = (e = function() {
                        return he(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 2, , 3]);
                                    return [4, (0, g.z)()];
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
                            r = arguments;
                        return new Promise((function(n, o) {
                            var i = e.apply(t, r);

                            function l(e) {
                                pe(i, n, o, l, c, "next", e)
                            }

                            function c(e) {
                                pe(i, n, o, l, c, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                    r()
                }), []);
                var I = o.useCallback((function(e) {
                    L(e)
                }), [L]);
                o.useEffect((function() {
                    if (0 !== C.length) {
                        var e = requestAnimationFrame((function() {
                            var e;
                            null === (e = w.current) || void 0 === e || e.scrollIntoView({
                                behavior: "auto",
                                block: "center"
                            })
                        }));
                        return function() {
                            return cancelAnimationFrame(e)
                        }
                    }
                }), [t, C, P, I]);
                o.useEffect((function() {
                    h.default.track(U.rMx.OPEN_MODAL, {
                        type: "Edit Profile Effect Modal",
                        location_stack: E
                    })
                }), [E]);
                return x ? (0, n.jsx)(l.Spinner, {
                    type: l.Spinner.Type.SPINNING_CIRCLE
                }) : (0, n.jsx)(O, {
                    children: (0,
                        n.jsx)(l.ModalRoot, {
                        transitionState: r,
                        size: l.ModalSize.DYNAMIC,
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(l.ModalHeader, {
                                separator: !1,
                                className: fe().modalHeader,
                                children: [(0, n.jsx)(l.FormTitle, {
                                    tag: l.FormTitleTags.H1,
                                    className: fe().modalTitle,
                                    children: G.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
                                }), (0, n.jsx)(l.ModalCloseButton, {
                                    onClick: d
                                })]
                            }), (0, n.jsxs)(l.ModalContent, {
                                className: fe().modalContent,
                                children: [(0, n.jsx)(se, {
                                    profileEffects: C,
                                    pendingProfileEffect: T,
                                    selectedProfileEffectRef: w,
                                    onSelect: I,
                                    onClose: d
                                }), (0, n.jsx)(A, {
                                    user: t,
                                    pendingProfileEffectID: T
                                })]
                            }), (0, n.jsx)(me, {
                                onApply: function() {
                                    (0, f.$C)(T, null == j ? void 0 : j.profileEffectID);
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
        155217: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function c(e, t) {
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

            function s(e) {
                var t = e.width,
                    r = void 0 === t ? 23 : t,
                    s = e.height,
                    a = void 0 === s ? 18 : s,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = c(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: f
                    })
                }))
            }
        }
    }
]);