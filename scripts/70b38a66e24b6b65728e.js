"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [50603], {
        950603: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => pe
            });
            var r = n(785893),
                o = n(667294),
                a = n(318715),
                i = n(304548),
                s = n(735885),
                l = n(153686),
                c = n(19585),
                u = n(995141),
                d = n(501486),
                f = n(649536),
                m = n(358624),
                E = n(550131),
                p = n(219369),
                h = n(786419),
                y = n(455706),
                C = n(401080),
                L = n(618354),
                I = n(82337),
                b = n(327453),
                v = n(183490),
                g = n(722406),
                _ = n(450383),
                S = n(473903),
                O = n(781453),
                M = n(123017),
                x = n(652591),
                j = n(116094),
                T = n(339938),
                P = n(767539),
                A = n(349771),
                w = n(251288),
                N = n(8970),
                Z = n(974251),
                D = n(473708),
                k = n(259722),
                B = n.n(k);

            function R(e) {
                var t = function(e) {
                    switch (!0) {
                        case null != e.items.find(w.M):
                            return D.Z.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(N.H):
                            return D.Z.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(e.product);
                return null === t ? null : (0, r.jsx)("div", {
                    className: B().typePill,
                    children: (0, r.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-xxs/normal",
                        children: t
                    })
                })
            }
            var U = n(273366),
                F = n(40055),
                H = n(408442),
                z = n(940594),
                G = n(543155),
                W = n(584228),
                V = n(2590),
                Y = n(203600),
                X = n(520453),
                K = n(315758),
                $ = n.n(K),
                q = n(906146),
                J = n.n(q);

            function Q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ee(e, t, n, r, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function te(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            ee(a, r, o, i, s, "next", e)
                        }

                        function s(e) {
                            ee(a, r, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function ne(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ne(e, t, n[t])
                    }))
                }
                return e
            }

            function oe(e, t) {
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

            function ae(e, t) {
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
                }(e, t) || se(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(e) {
                return function(e) {
                    if (Array.isArray(e)) return Q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || se(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e, t) {
                if (e) {
                    if ("string" == typeof e) return Q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q(e, t) : void 0
                }
            }
            var le = function(e, t) {
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
                ce = i.AvatarSizes.SIZE_152,
                ue = (0, u.y9)(ce),
                de = (0, z.IC)(18),
                fe = function(e) {
                    var t = e.product,
                        n = e.user,
                        l = e.category,
                        f = e.onClose,
                        m = e.returnRef,
                        E = (0, c.Z)().analyticsLocations,
                        p = (0, I.A)({
                            location: "CollectiblesShop"
                        }),
                        L = j.ZP.canUseCollectibles(n),
                        v = ae((0, a.Wu)([P.Z], (function() {
                            return [P.Z.getPurchase(t.skuId), P.Z.isClaiming === t.skuId]
                        })), 2),
                        g = v[0],
                        _ = v[1],
                        S = (0, C.Z)({
                            analyticsLocations: E
                        }),
                        O = (0, W.Z)(l),
                        M = O.buttonColors,
                        x = O.backgroundColors,
                        Z = null != M ? {
                            background: (0, z.nH)(M, 90),
                            color: M.text
                        } : void 0,
                        k = null != x ? {
                            background: (0, z.nH)(x, 135)
                        } : void 0,
                        B = (0, A.mv)(l),
                        V = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(w.M)) && void 0 !== e ? e : null
                        }), [t]),
                        K = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(N.H)) && void 0 !== e ? e : null
                        }), [t]),
                        q = null != K && null == V,
                        Q = null != V && null == K,
                        ee = (0, d.Z)({
                            user: n,
                            avatarDecorationOverride: V,
                            size: ue
                        }),
                        ne = ee.avatarDecorationSrc,
                        ie = ee.eventHandlers;
                    return (0, r.jsxs)("div", {
                        className: $().collectibleInfoContainer,
                        style: k,
                        children: [(0, r.jsxs)("div", {
                            className: $().titleContainer,
                            children: [(0, r.jsx)("div", {
                                className: $().titleImageWrapper,
                                children: (0, r.jsx)("img", {
                                    className: $().titleImage,
                                    src: (0, A.uV)(l.logo, {
                                        size: de
                                    }),
                                    alt: l.name
                                })
                            }), (0, r.jsx)(U.Z, {
                                category: l,
                                display: "modal"
                            })]
                        }), null != V && (0, r.jsx)("div", {
                            className: $().avatarPreviewContainer,
                            children: (0, r.jsx)(i.Avatar, oe(re({}, ie), {
                                "aria-label": D.Z.Messages.USER_SETTINGS_AVATAR,
                                size: ce,
                                avatarDecoration: ne,
                                src: J()
                            }))
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: $().description,
                                children: [p && (0, r.jsx)(R, {
                                    product: t
                                }), (0, r.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: p ? $().headingWithItemTypePill : void 0,
                                    children: t.name
                                }), (0, r.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (0, r.jsx)(F.Z, {
                                    product: t,
                                    purchase: g,
                                    isPremiumCategory: B,
                                    className: $().priceTag
                                })]
                            }), L ? null != g ? (0, r.jsx)(i.Button, {
                                className: $().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    f();
                                    (0, s.xf)();
                                    S();
                                    Q ? (0, u.ps)({
                                        analyticsLocations: E,
                                        initialSelectedDecoration: null != V ? V : null
                                    }) : q && (0, b.H)({
                                        analyticsLocations: E,
                                        initialSelectedEffectID: null == K ? void 0 : K.id
                                    })
                                },
                                children: D.Z.Messages.COLLECTIBLES_USE_NOW
                            }) : B ? (0, r.jsx)(i.Button, {
                                style: Z,
                                className: $().button,
                                look: i.Button.Looks.FILLED,
                                submitting: _,
                                submittingStartedLabel: D.Z.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: D.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: te((function() {
                                    return le(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, (0, T.fK)(t.skuId)];
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
                                children: D.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }) : (0, r.jsx)(i.Button, {
                                style: Z,
                                className: $().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    return (0, h.Z)({
                                        skuId: t.skuId,
                                        analyticsLocations: E,
                                        onClose: function(e) {
                                            return e ? f() : (0, X.dG)()
                                        }
                                    })
                                },
                                children: q ? D.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : D.Z.Messages.COLLECTIBLES_BUY_DECORATION
                            }) : (0, r.jsx)(y.Z, {
                                subscriptionTier: Y.Si.TIER_2,
                                fullWidth: !0,
                                buttonText: D.Z.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                onClick: H.P,
                                onSubscribeModalClose: function() {
                                    (0, H.p)({
                                        product: t,
                                        category: l,
                                        returnRef: m,
                                        analyticsLocations: E
                                    })
                                }
                            }), (0, r.jsx)(i.Text, {
                                color: "none",
                                className: $().disclaimer,
                                variant: "text-xxs/normal",
                                children: null != g ? null : L ? B ? D.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : q ? D.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : D.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : q ? D.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : D.Z.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                me = function(e) {
                    var t = e.product,
                        n = e.user,
                        i = e.category,
                        s = j.ZP.canUsePremiumProfileCustomization(n),
                        l = (0, a.cj)([_.Z], (function() {
                            return _.Z.getAllPending()
                        })),
                        c = (0, v.Z)(n.id),
                        u = Boolean(null == c ? void 0 : c.getPreviewBio(l.pendingBio).value),
                        d = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(w.M)) && void 0 !== e ? e : null
                        }), [t]),
                        f = o.useMemo((function() {
                            return t.items.find(N.H)
                        }), [t]);
                    return (0,
                        r.jsxs)("div", {
                        className: null != d ? $().previewsContainerInner : $().profileEffectPreviewsContainerInner,
                        children: [(0, r.jsx)(L.Z, oe(re({}, l), {
                            user: n,
                            canUsePremiumCustomization: s,
                            onAvatarChange: X.dG,
                            onBannerChange: X.dG,
                            bodyClassName: $().profileCustomizationBody,
                            pendingAvatarDecoration: d,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d
                        })), null != d && (0, r.jsx)(Ee, {
                            user: n,
                            product: t,
                            category: i
                        })]
                    })
                },
                Ee = function(e) {
                    var t = e.product,
                        n = function(e) {
                            var t = e.author,
                                n = e.product,
                                r = (0, f.e5)(oe(re({}, (0, m.ZP)({
                                    author: t,
                                    channelId: "1337",
                                    content: D.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                                })), {
                                    state: V.yb.SENT,
                                    id: "0"
                                }));
                            r.author = new g.Z(oe(re({}, r.author), {
                                avatar_decoration_data: n.items.find(w.M)
                            }));
                            return r
                        }({
                            author: e.user,
                            product: t
                        });
                    return (0, r.jsx)(i.FocusBlock, {
                        children: (0, r.jsxs)(i.Card, {
                            className: $().chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(p.Z, {
                                className: $().mockMessage,
                                author: (0, E.ZH)(n),
                                message: n
                            }, n.id), (0, r.jsxs)("div", {
                                className: $().mockInput,
                                children: [(0, r.jsx)(M.Z, {
                                    className: $().mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, r.jsx)(O.Z, {
                                    className: $().mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            const pe = function(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    s = e.product,
                    u = e.category,
                    d = e.returnRef,
                    f = e.analyticsSource,
                    m = e.analyticsLocations,
                    E = (0, a.ZP)([S.default], (function() {
                        return S.default.getCurrentUser()
                    })),
                    p = (0, c.Z)(ie(m).concat([l.Z.COLLECTIBLES_SHOP_DETAILS_MODAL])),
                    h = p.analyticsLocations,
                    y = p.AnalyticsLocationProvider,
                    C = o.useMemo((function() {
                        return s.items.find(w.M)
                    }), [s]);
                o.useEffect((function() {
                    var e = null != C ? "avatar decoration" : "profile effect";
                    x.default.track(V.rMx.OPEN_MODAL, {
                        type: V.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: h,
                        sku_id: s.skuId,
                        product_type: e
                    })
                }), [f, h, s.skuId, C]);
                return null == E ? null : (0, r.jsx)(y, {
                    children: (0, r.jsx)(i.ModalRoot, {
                        hideShadow: !0,
                        className: $().modalRoot,
                        returnRef: d,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(i.ModalContent, {
                            className: $().modalContent,
                            children: [(0, r.jsx)(fe, {
                                user: E,
                                product: s,
                                category: u,
                                onClose: n
                            }), (0, r.jsxs)("div", {
                                className: null != C ? $().collectiblePreviewsContainerWithChat : $().collectiblePreviewsContainerNoChat,
                                children: [(0, r.jsx)(Z.Z, {
                                    asset: u.banner,
                                    size: 540,
                                    className: $().categoryBanner
                                }), (0, r.jsx)(me, {
                                    user: E,
                                    product: s,
                                    category: u
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: n,
                                className: $().modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        }
    }
]);