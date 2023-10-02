"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [50603], {
        950603: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => fe
            });
            var r = n(785893),
                o = n(667294),
                a = n(318715),
                i = n(304548),
                s = n(735885),
                l = n(153686),
                c = n(19585),
                u = n(841379),
                d = n(995141),
                f = n(649536),
                m = n(358624),
                E = n(550131),
                h = n(219369),
                C = n(786419),
                L = n(455706),
                p = n(618354),
                y = n(82337),
                I = n(327453),
                b = n(183490),
                v = n(722406),
                g = n(450383),
                S = n(473903),
                _ = n(781453),
                O = n(123017),
                M = n(652591),
                j = n(694329),
                x = n(339938),
                T = n(767539),
                P = n(349771),
                A = n(251288),
                w = n(8970),
                N = n(473708),
                D = n(259722),
                Z = n.n(D);

            function k(e) {
                var t = function(e) {
                    switch (!0) {
                        case null != e.items.find(A.M):
                            return N.Z.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(w.H):
                            return N.Z.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(e.product);
                return null === t ? null : (0, r.jsx)("div", {
                    className: Z().typePill,
                    children: (0, r.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-xxs/normal",
                        children: t
                    })
                })
            }
            var B = n(40055),
                R = n(408442),
                U = n(940594),
                F = n(543155),
                H = n(584228),
                z = n(2590),
                G = n(203600),
                W = n(520453),
                V = n(315758),
                Y = n.n(V),
                X = n(906146),
                K = n.n(X);

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function q(e, t, n, r, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function J(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            q(a, r, o, i, s, "next", e)
                        }

                        function s(e) {
                            q(a, r, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Q(e, t, n[t])
                    }))
                }
                return e
            }

            function te(e, t) {
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

            function ne(e, t) {
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
                }(e, t) || oe(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e) {
                return function(e) {
                    if (Array.isArray(e)) return $(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || oe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oe(e, t) {
                if (e) {
                    if ("string" == typeof e) return $(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $(e, t) : void 0
                }
            }
            var ae = function(e, t) {
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
                ie = i.AvatarSizes.SIZE_152,
                se = (0, d.y9)(ie),
                le = (0, U.IC)(18),
                ce = function(e) {
                    var t = e.product,
                        n = e.user,
                        l = e.category,
                        f = e.onClose,
                        m = e.returnRef,
                        E = (0, c.Z)().analyticsLocations,
                        h = (0, H.Z)(l),
                        p = h.buttonColors,
                        b = h.backgroundColors,
                        v = (0, y.A)({
                            location: "CollectiblesShop"
                        }),
                        g = j.ZP.canUseCollectibles(n),
                        S = ne((0, a.Wu)([T.Z], (function() {
                            return [T.Z.getPurchase(t.skuId), T.Z.isClaiming === t.skuId]
                        })), 2),
                        _ = S[0],
                        O = S[1],
                        M = (0, U.Ch)(p),
                        D = (0, P.mv)(l),
                        Z = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(A.M)) && void 0 !== e ? e : null
                        }), [t]),
                        z = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(w.H)) && void 0 !== e ? e : null
                        }), [t]),
                        V = null != z && null == Z,
                        X = null != Z && null == z,
                        $ = (0, u.Z)({
                            user: n,
                            avatarDecorationOverride: Z,
                            size: se
                        }).avatarDecorationSrc;
                    return (0, r.jsxs)("div", {
                        className: Y().collectibleInfoContainer,
                        style: {
                            background: "linear-gradient(135deg, ".concat(b[0], ", ").concat(b[1], ")")
                        },
                        children: [(0, r.jsx)("div", {
                            className: Y().titleContainer,
                            children: (0, r.jsx)("div", {
                                className: Y().titleImageWrapper,
                                children: (0, r.jsx)("img", {
                                    className: Y().titleImage,
                                    src: (0, P.uV)(l.logo, {
                                        size: le
                                    }),
                                    alt: l.name
                                })
                            })
                        }), null != Z && (0, r.jsx)("div", {
                            className: Y().avatarPreviewContainer,
                            children: (0, r.jsx)(i.Avatar, {
                                "aria-label": N.Z.Messages.USER_SETTINGS_AVATAR,
                                size: ie,
                                avatarDecoration: $,
                                src: K()
                            })
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: Y().description,
                                children: [v && (0, r.jsx)(k, {
                                    product: t
                                }), (0, r.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: v ? Y().headingWithItemTypePill : void 0,
                                    children: t.name
                                }), (0, r.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (0, r.jsx)(B.Z, {
                                    product: t,
                                    purchase: _,
                                    isPremiumCategory: D,
                                    className: Y().priceTag
                                })]
                            }), g ? null != _ ? (0, r.jsx)(i.Button, {
                                className: Y().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    f();
                                    (0, s.xf)();
                                    X ? (0, d.ps)({
                                        analyticsLocations: E,
                                        initialSelectedDecoration: null != Z ? Z : null
                                    }) : V && (0, I.H)({
                                        analyticsLocations: E,
                                        initialSelectedEffectID: null == z ? void 0 : z.id
                                    })
                                },
                                children: N.Z.Messages.COLLECTIBLES_USE_NOW
                            }) : D ? (0, r.jsx)(i.Button, {
                                style: M,
                                className: Y().button,
                                look: i.Button.Looks.FILLED,
                                submitting: O,
                                submittingStartedLabel: N.Z.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: N.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: J((function() {
                                    return ae(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, (0, x.fK)(t.skuId)];
                                            case 1:
                                                e.sent();
                                                f();
                                                (0, F.Z)({
                                                    product: t,
                                                    category: l,
                                                    analyticsLocations: E
                                                });
                                                return [2]
                                        }
                                    }))
                                })),
                                children: N.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }) : (0, r.jsx)(i.Button, {
                                style: M,
                                className: Y().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    return (0, C.Z)({
                                        skuId: t.skuId,
                                        analyticsLocations: E,
                                        onClose: function(e) {
                                            return e ? f() : (0, W.dG)()
                                        }
                                    })
                                },
                                children: V ? N.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : N.Z.Messages.COLLECTIBLES_BUY_DECORATION
                            }) : (0, r.jsx)(L.Z, {
                                subscriptionTier: G.Si.TIER_2,
                                fullWidth: !0,
                                buttonText: N.Z.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                onClick: R.P,
                                onSubscribeModalClose: function() {
                                    (0, R.p)({
                                        product: t,
                                        category: l,
                                        returnRef: m,
                                        analyticsLocations: E
                                    })
                                }
                            }), (0, r.jsx)(i.Text, {
                                color: "none",
                                className: Y().disclaimer,
                                variant: "text-xxs/normal",
                                children: null != _ ? null : g ? D ? N.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : V ? N.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : N.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : V ? N.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : N.Z.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                ue = function(e) {
                    var t = e.product,
                        n = e.user,
                        i = e.category,
                        s = j.ZP.canUsePremiumProfileCustomization(n),
                        l = (0, a.cj)([g.Z], (function() {
                            return g.Z.getAllPending()
                        })),
                        c = (0, b.Z)(n.id),
                        u = Boolean(null == c ? void 0 : c.getPreviewBio(l.pendingBio).value),
                        d = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(A.M)) && void 0 !== e ? e : null
                        }), [t]),
                        f = o.useMemo((function() {
                            return t.items.find(w.H)
                        }), [t]);
                    return (0, r.jsxs)("div", {
                        className: null != d ? Y().previewsContainerInner : Y().profileEffectPreviewsContainerInner,
                        children: [(0, r.jsx)(p.Z, te(ee({}, l), {
                            user: n,
                            canUsePremiumCustomization: s,
                            onAvatarChange: W.dG,
                            onBannerChange: W.dG,
                            bodyClassName: Y().profileCustomizationBody,
                            pendingAvatarDecoration: d,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d
                        })), null != d && (0, r.jsx)(de, {
                            user: n,
                            product: t,
                            category: i
                        })]
                    })
                },
                de = function(e) {
                    var t = e.product,
                        n = function(e) {
                            var t = e.author,
                                n = e.product,
                                r = (0, f.e5)(te(ee({}, (0, m.ZP)({
                                    author: t,
                                    channelId: "1337",
                                    content: N.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                                })), {
                                    state: z.yb.SENT,
                                    id: "0"
                                }));
                            r.author = new v.Z(te(ee({}, r.author), {
                                avatar_decoration_data: n.items.find(A.M)
                            }));
                            return r
                        }({
                            author: e.user,
                            product: t
                        });
                    return (0, r.jsx)(i.FocusBlock, {
                        children: (0, r.jsxs)(i.Card, {
                            className: Y().chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(h.Z, {
                                className: Y().mockMessage,
                                author: (0, E.ZH)(n),
                                message: n
                            }, n.id), (0, r.jsxs)("div", {
                                className: Y().mockInput,
                                children: [(0, r.jsx)(O.Z, {
                                    className: Y().mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, r.jsx)(_.Z, {
                                    className: Y().mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            const fe = function(e) {
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
                    h = (0, c.Z)(re(m).concat([l.Z.COLLECTIBLES_SHOP_DETAILS_MODAL])),
                    C = h.analyticsLocations,
                    L = h.AnalyticsLocationProvider;
                o.useEffect((function() {
                    M.default.track(z.rMx.OPEN_MODAL, {
                        type: z.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: C,
                        sku_id: s.skuId
                    })
                }), [f, C, s.skuId]);
                var p = o.useMemo((function() {
                    return s.items.find(A.M)
                }), [s]);
                return null == E ? null : (0, r.jsx)(L, {
                    children: (0, r.jsx)(i.ModalRoot, {
                        hideShadow: !0,
                        className: Y().modalRoot,
                        returnRef: d,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(i.ModalContent, {
                            className: Y().modalContent,
                            children: [(0, r.jsx)(ce, {
                                user: E,
                                product: s,
                                category: u,
                                onClose: n
                            }), (0, r.jsxs)("div", {
                                className: null != p ? Y().collectiblePreviewsContainerWithChat : Y().collectiblePreviewsContainerNoChat,
                                children: [(0, r.jsx)("img", {
                                    className: Y().categoryBanner,
                                    src: (0, P.uV)(u.banner, {
                                        size: 540
                                    }),
                                    alt: u.name
                                }), (0, r.jsx)(ue, {
                                    user: E,
                                    product: s,
                                    category: u
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: n,
                                className: Y().modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        }
    }
]);