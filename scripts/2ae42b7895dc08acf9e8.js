"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [50603], {
        950603: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => me
            });
            var r = n(785893),
                o = n(667294),
                a = n(318715),
                i = n(70418),
                s = n(735885),
                l = n(153686),
                c = n(19585),
                u = n(995141),
                d = n(501486),
                f = n(720637),
                C = n(358624),
                E = n(550131),
                L = n(219369),
                m = n(786419),
                p = n(455706),
                h = n(401080),
                y = n(618354),
                I = n(82337),
                b = n(327453),
                v = n(183490),
                S = n(722406),
                _ = n(450383),
                g = n(473903),
                O = n(781453),
                T = n(123017),
                M = n(652591),
                x = n(116094),
                j = n(339938),
                P = n(767539),
                A = n(613815),
                N = n(349771),
                Z = n(251288),
                D = n(8970),
                w = n(974251),
                k = n(473708),
                B = n(259722),
                R = n.n(B);

            function U(e) {
                var t = function(e) {
                    switch (!0) {
                        case null != e.items.find(Z.M):
                            return k.Z.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(D.H):
                            return k.Z.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(e.product);
                return null === t ? null : (0, r.jsx)("div", {
                    className: R().typePill,
                    children: (0, r.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-xxs/normal",
                        children: t
                    })
                })
            }
            var H = n(273366),
                F = n(40055),
                W = n(408442),
                z = n(940594),
                G = n(543155),
                V = n(584228),
                Y = n(2590),
                K = n(203600),
                X = n(520453),
                $ = n(315758),
                q = n.n($),
                J = n(906146),
                Q = n.n(J);

            function ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function te(e, t, n, r, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function ne(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            te(a, r, o, i, s, "next", e)
                        }

                        function s(e) {
                            te(a, r, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function re(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        re(e, t, n[t])
                    }))
                }
                return e
            }

            function ae(e, t) {
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

            function ie(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || le(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e) {
                return function(e) {
                    if (Array.isArray(e)) return ee(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || le(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(e, t) {
                if (e) {
                    if ("string" == typeof e) return ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ee(e, t) : void 0
                }
            }
            var ce = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                ue = i.AvatarSizes.SIZE_152,
                de = (0, u.y9)(ue),
                fe = (0, z.IC)(18),
                Ce = function(e) {
                    var t = e.product,
                        n = e.user,
                        l = e.category,
                        f = e.onClose,
                        C = e.returnRef,
                        E = (0, c.Z)().analyticsLocations,
                        L = (0, I.A)({
                            location: "CollectiblesShop"
                        }),
                        y = (0, A.Z)({
                            location: "CollectiblesShop"
                        }).shopForAllEnabled,
                        v = x.ZP.canUseCollectibles(n),
                        S = ie((0, a.Wu)([P.Z], (function() {
                            return [P.Z.getPurchase(t.skuId), P.Z.isClaiming === t.skuId]
                        })), 2),
                        _ = S[0],
                        g = S[1],
                        O = (0, h.Z)({
                            analyticsLocations: E
                        }),
                        T = (0, V.Z)(l),
                        M = T.buttonColors,
                        w = T.backgroundColors,
                        B = null != M ? {
                            background: (0, z.nH)(M, 90),
                            color: M.text.toHslString()
                        } : void 0,
                        R = null != w ? {
                            background: (0, z.nH)(w, 135)
                        } : void 0,
                        Y = (0, N.mv)(l),
                        $ = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(Z.M)) && void 0 !== e ? e : null
                        }), [t]),
                        J = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(D.H)) && void 0 !== e ? e : null
                        }), [t]),
                        ee = null != J && null == $,
                        te = null != $ && null == J,
                        re = function(e) {
                            return (0, r.jsx)(p.Z, {
                                subscriptionTier: K.Si.TIER_2,
                                fullWidth: !0,
                                buttonText: e,
                                onClick: W.P,
                                onSubscribeModalClose: function() {
                                    (0, W.p)({
                                        product: t,
                                        category: l,
                                        returnRef: C,
                                        analyticsLocations: E
                                    })
                                }
                            })
                        },
                        se = (0, d.Z)({
                            user: n,
                            avatarDecorationOverride: $,
                            size: de
                        }),
                        le = se.avatarDecorationSrc,
                        Ce = se.eventHandlers;
                    return (0, r.jsxs)("div", {
                        className: q().collectibleInfoContainer,
                        style: R,
                        children: [(0, r.jsxs)("div", {
                            className: q().titleContainer,
                            children: [(0, r.jsx)("div", {
                                className: q().titleImageWrapper,
                                children: (0, r.jsx)("img", {
                                    className: q().titleImage,
                                    src: (0, N.uV)(l.logo, {
                                        size: fe
                                    }),
                                    alt: l.name
                                })
                            }), (0, r.jsx)(H.Z, {
                                category: l,
                                display: "modal"
                            })]
                        }), null != $ && (0, r.jsx)("div", {
                            className: q().avatarPreviewContainer,
                            children: (0, r.jsx)(i.Avatar, ae(oe({}, Ce), {
                                "aria-label": k.Z.Messages.USER_SETTINGS_AVATAR,
                                size: ue,
                                avatarDecoration: le,
                                src: Q()
                            }))
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: q().description,
                                children: [L && (0, r.jsx)(U, {
                                    product: t
                                }), (0, r.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: L ? q().headingWithItemTypePill : void 0,
                                    children: t.name
                                }), (0, r.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (0, r.jsx)(F.Z, {
                                    product: t,
                                    purchase: _,
                                    isPremiumCategory: Y,
                                    className: q().priceTag
                                })]
                            }), (0, r.jsxs)("div", {
                                className: q().buttonsContainer,
                                children: [y && Y && !v ? re(k.Z.Messages.UNLOCK_WITH_NITRO) : v || y ? null != _ ? (0, r.jsx)(i.Button, {
                                    className: q().button,
                                    look: i.Button.Looks.FILLED,
                                    onClick: function() {
                                        f();
                                        (0, s.xf)();
                                        O();
                                        te ? (0, u.ps)({
                                            analyticsLocations: E,
                                            initialSelectedDecoration: null != $ ? $ : null
                                        }) : ee && (0, b.H)({
                                            analyticsLocations: E,
                                            initialSelectedEffectID: null == J ? void 0 : J.id
                                        })
                                    },
                                    children: k.Z.Messages.COLLECTIBLES_USE_NOW
                                }) : Y ? (0, r.jsx)(i.Button, {
                                    style: B,
                                    className: q().button,
                                    look: i.Button.Looks.FILLED,
                                    submitting: g,
                                    submittingStartedLabel: k.Z.Messages.COLLECTIBLES_COLLECTING,
                                    submittingFinishedLabel: k.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                    onClick: ne((function() {
                                        return ce(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, (0, j.fK)(t.skuId)];
                                                case 1:
                                                    e.sent();
                                                    f();
                                                    (0, G.Z)({
                                                        product: t,
                                                        category: l,
                                                        analyticsLocations: E
                                                    });
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    children: k.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                }) : (0, r.jsx)(i.Button, {
                                    style: B,
                                    className: q().button,
                                    look: i.Button.Looks.FILLED,
                                    onClick: function() {
                                        return (0, m.Z)({
                                            skuId: t.skuId,
                                            analyticsLocations: E,
                                            onClose: function(e) {
                                                return e ? f() : (0, X.dG)()
                                            }
                                        })
                                    },
                                    children: ee ? k.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : k.Z.Messages.COLLECTIBLES_BUY_DECORATION
                                }) : re(k.Z.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), !y || Y || null != _ || v ? null : (0, r.jsx)(p.Z, {
                                    subscriptionTier: K.Si.TIER_2,
                                    fullWidth: !0,
                                    color: i.Button.Colors.WHITE,
                                    look: i.Button.Looks.OUTLINED,
                                    buttonText: x.ZP.isPremium(n) ? k.Z.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : k.Z.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: q().unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: W.P,
                                    onSubscribeModalClose: function() {
                                        (0, W.p)({
                                            product: t,
                                            category: l,
                                            returnRef: C,
                                            analyticsLocations: E
                                        })
                                    }
                                })]
                            }), (0, r.jsx)(i.Text, {
                                color: "none",
                                className: q().disclaimer,
                                variant: "text-xxs/normal",
                                children: null != _ ? null : v || y ? Y ? k.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : ee ? k.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : k.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : ee ? k.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : k.Z.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                Ee = function(e) {
                    var t = e.product,
                        n = e.user,
                        i = e.category,
                        s = x.ZP.canUsePremiumProfileCustomization(n),
                        l = (0, a.cj)([_.Z], (function() {
                            return _.Z.getAllPending()
                        })),
                        c = (0, v.Z)(n.id),
                        u = Boolean(null == c ? void 0 : c.getPreviewBio(l.pendingBio).value),
                        d = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(Z.M)) && void 0 !== e ? e : null
                        }), [t]),
                        f = o.useMemo((function() {
                            return t.items.find(D.H)
                        }), [t]);
                    return (0, r.jsxs)("div", {
                        className: null != d ? q().previewsContainerInner : q().profileEffectPreviewsContainerInner,
                        children: [(0, r.jsx)(y.Z, ae(oe({}, l), {
                            user: n,
                            canUsePremiumCustomization: s,
                            onAvatarChange: X.dG,
                            onBannerChange: X.dG,
                            bodyClassName: q().profileCustomizationBody,
                            pendingAvatarDecoration: d,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d
                        })), null != d && (0, r.jsx)(Le, {
                            user: n,
                            product: t,
                            category: i
                        })]
                    })
                },
                Le = function(e) {
                    var t = e.product,
                        n = function(e) {
                            var t = e.author,
                                n = e.product,
                                r = (0, f.e5)(ae(oe({}, (0, C.ZP)({
                                    author: t,
                                    channelId: "1337",
                                    content: k.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                                })), {
                                    state: Y.yb.SENT,
                                    id: "0"
                                }));
                            r.author = new S.Z(ae(oe({}, r.author), {
                                avatar_decoration_data: n.items.find(Z.M)
                            }));
                            return r
                        }({
                            author: e.user,
                            product: t
                        });
                    return (0, r.jsx)(i.FocusBlock, {
                        children: (0, r.jsxs)(i.Card, {
                            className: q().chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(L.Z, {
                                className: q().mockMessage,
                                author: (0, E.ZH)(n),
                                message: n
                            }, n.id), (0, r.jsxs)("div", {
                                className: q().mockInput,
                                children: [(0, r.jsx)(T.Z, {
                                    className: q().mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, r.jsx)(O.Z, {
                                    className: q().mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            const me = function(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    s = e.product,
                    u = e.category,
                    d = e.returnRef,
                    f = e.analyticsSource,
                    C = e.analyticsLocations,
                    E = (0, a.ZP)([g.default], (function() {
                        return g.default.getCurrentUser()
                    })),
                    L = (0, c.Z)(se(C).concat([l.Z.COLLECTIBLES_SHOP_DETAILS_MODAL])),
                    m = L.analyticsLocations,
                    p = L.AnalyticsLocationProvider,
                    h = o.useMemo((function() {
                        return s.items.find(Z.M)
                    }), [s]);
                o.useEffect((function() {
                    var e = null != h ? "avatar decoration" : "profile effect";
                    M.default.track(Y.rMx.OPEN_MODAL, {
                        type: Y.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: m,
                        sku_id: s.skuId,
                        product_type: e
                    })
                }), [f, m, s.skuId, h]);
                return null == E ? null : (0, r.jsx)(p, {
                    children: (0, r.jsx)(i.ModalRoot, {
                        hideShadow: !0,
                        className: q().modalRoot,
                        returnRef: d,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(i.ModalContent, {
                            className: q().modalContent,
                            children: [(0, r.jsx)(Ce, {
                                user: E,
                                product: s,
                                category: u,
                                onClose: n
                            }), (0, r.jsxs)("div", {
                                className: null != h ? q().collectiblePreviewsContainerWithChat : q().collectiblePreviewsContainerNoChat,
                                children: [(0, r.jsx)(w.Z, {
                                    asset: u.banner,
                                    size: 540,
                                    className: q().categoryBanner
                                }), (0, r.jsx)(Ee, {
                                    user: E,
                                    product: s,
                                    category: u
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: n,
                                className: q().modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        }
    }
]);