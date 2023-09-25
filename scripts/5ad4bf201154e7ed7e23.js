"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96969], {
        396969: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => le
            });
            var r = n(785893),
                o = n(667294),
                a = n(318715),
                i = n(882723),
                s = n(735885),
                l = n(153686),
                c = n(19585),
                u = n(841379),
                d = n(995141),
                f = n(649536),
                m = n(358624),
                L = n(550131),
                C = n(219369),
                h = n(786419),
                p = n(455706),
                E = n(618354),
                y = n(327453),
                b = n(183490),
                I = n(722406),
                g = n(450383),
                v = n(473903),
                _ = n(781453),
                O = n(123017),
                S = n(652591),
                M = n(694329),
                j = n(339938),
                P = n(767539),
                x = n(349771),
                A = n(251288),
                T = n(8970),
                w = n(40055),
                k = n(408442),
                N = n(940594),
                D = n(543155),
                Z = n(584228),
                B = n(2590),
                R = n(203600),
                U = n(520453),
                F = n(473708),
                H = n(911827),
                z = n.n(H),
                G = n(467874),
                W = n.n(G);

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Y(e, t, n, r, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function X(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            Y(a, r, o, i, s, "next", e)
                        }

                        function s(e) {
                            Y(a, r, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function K(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        K(e, t, n[t])
                    }))
                }
                return e
            }

            function q(e, t) {
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

            function J(e, t) {
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
                }(e, t) || ee(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Q(e) {
                return function(e) {
                    if (Array.isArray(e)) return V(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ee(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e, t) {
                if (e) {
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V(e, t) : void 0
                }
            }
            var te = function(e, t) {
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
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
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
                ne = i.AvatarSizes.SIZE_152,
                re = (0, d.y9)(ne),
                oe = (0, N.IC)(18),
                ae = function(e) {
                    var t = e.product,
                        n = e.user,
                        l = e.category,
                        f = e.onClose,
                        m = e.returnRef,
                        L = (0, c.Z)().analyticsLocations,
                        C = (0, Z.Z)(l),
                        E = C.buttonColors,
                        b = C.backgroundColors,
                        I = M.ZP.canUseCollectibles(n),
                        g = J((0, a.Wu)([P.Z], (function() {
                            return [P.Z.getPurchase(t.skuId), P.Z.isClaiming === t.skuId]
                        })), 2),
                        v = g[0],
                        _ = g[1],
                        O = (0, N.Ch)(E),
                        S = (0, x.mv)(l),
                        B = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(A.M)) && void 0 !== e ? e : null
                        }), [t]),
                        H = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(T.H)) && void 0 !== e ? e : null
                        }), [t]),
                        G = null != H && null == B,
                        V = null != B && null == H,
                        Y = (0, u.Z)({
                            user: n,
                            pendingAvatarDecoration: B,
                            size: re,
                            canAnimate: !0
                        });
                    return (0, r.jsxs)("div", {
                        className: z().collectibleInfoContainer,
                        style: {
                            background: "linear-gradient(135deg, ".concat(b[0], ", ").concat(b[1], ")")
                        },
                        children: [(0, r.jsx)("div", {
                            className: z().titleContainer,
                            children: (0, r.jsx)("div", {
                                className: z().titleImageWrapper,
                                children: (0, r.jsx)("img", {
                                    className: z().titleImage,
                                    src: (0, x.uV)(l.logo, {
                                        size: oe
                                    }),
                                    alt: l.name
                                })
                            })
                        }), null != B && (0, r.jsx)("div", {
                            className: z().avatarPreviewContainer,
                            children: (0, r.jsx)(i.Avatar, {
                                "aria-label": F.Z.Messages.USER_SETTINGS_AVATAR,
                                size: ne,
                                avatarDecoration: Y,
                                src: W()
                            })
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: z().description,
                                children: [(0, r.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    children: t.name
                                }), (0, r.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (0, r.jsx)(w.Z, {
                                    product: t,
                                    purchase: v,
                                    isPremiumCategory: S,
                                    className: z().priceTag
                                })]
                            }), I ? null != v ? (0, r.jsx)(i.Button, {
                                className: z().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    f();
                                    (0, s.xf)();
                                    V ? (0,
                                        d.ps)({
                                        analyticsLocations: L,
                                        initialSelectedDecoration: null != B ? B : null
                                    }) : G && (0, y.H)({
                                        analyticsLocations: L,
                                        effectFromShop: null == H ? void 0 : H.id
                                    })
                                },
                                children: F.Z.Messages.COLLECTIBLES_USE_NOW
                            }) : S ? (0, r.jsx)(i.Button, {
                                style: O,
                                className: z().button,
                                look: i.Button.Looks.FILLED,
                                submitting: _,
                                submittingStartedLabel: F.Z.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: F.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: X((function() {
                                    return te(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, (0, j.fK)(t.skuId)];
                                            case 1:
                                                e.sent();
                                                f();
                                                (0, D.Z)({
                                                    product: t,
                                                    category: l,
                                                    analyticsLocations: L
                                                });
                                                return [2]
                                        }
                                    }))
                                })),
                                children: F.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }) : (0, r.jsx)(i.Button, {
                                style: O,
                                className: z().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    return (0, h.Z)({
                                        skuId: t.skuId,
                                        analyticsLocations: L,
                                        onClose: function(e) {
                                            return e ? f() : (0, U.dG)()
                                        }
                                    })
                                },
                                children: G ? F.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : F.Z.Messages.COLLECTIBLES_BUY_DECORATION
                            }) : (0, r.jsx)(p.Z, {
                                subscriptionTier: R.Si.TIER_2,
                                fullWidth: !0,
                                buttonText: F.Z.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                onClick: k.P,
                                onSubscribeModalClose: function() {
                                    (0, k.p)({
                                        product: t,
                                        category: l,
                                        returnRef: m,
                                        analyticsLocations: L
                                    })
                                }
                            }), (0, r.jsx)(i.Text, {
                                color: "none",
                                className: z().disclaimer,
                                variant: "text-xxs/normal",
                                children: null != v ? null : I ? S ? F.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : G ? F.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : F.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : G ? F.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : F.Z.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                ie = function(e) {
                    var t = e.product,
                        n = e.user,
                        i = M.ZP.canUsePremiumProfileCustomization(n),
                        s = (0, a.cj)([g.Z], (function() {
                            return g.Z.getAllPending()
                        })),
                        l = (0, b.Z)(n.id),
                        c = Boolean(null == l ? void 0 : l.getPreviewBio(s.pendingBio).value),
                        u = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(A.M)) && void 0 !== e ? e : null
                        }), [t]),
                        d = o.useMemo((function() {
                            return t.items.find(T.H)
                        }), [t]);
                    return (0, r.jsx)(E.Z, q($({}, s), {
                        user: n,
                        canUsePremiumCustomization: i,
                        onAvatarChange: U.dG,
                        onBannerChange: U.dG,
                        bodyClassName: z().profileCustomizationBody,
                        pendingAvatarDecoration: u,
                        pendingProfileEffectID: null == d ? void 0 : d.id,
                        forProfileEffectModal: null != d,
                        disabledInputs: !0,
                        hideExampleButton: !0,
                        hideFakeActivity: null != u || c,
                        hideBioSection: null != u
                    }))
                },
                se = function(e) {
                    var t = e.product,
                        n = function(e) {
                            var t = e.author,
                                n = e.product,
                                r = (0, f.e5)(q($({}, (0, m.ZP)({
                                    author: t,
                                    channelId: "1337",
                                    content: F.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                                })), {
                                    state: B.yb.SENT,
                                    id: "0"
                                }));
                            r.author = new I.Z(q($({}, r.author), {
                                avatar_decoration_data: n.items.find(A.M)
                            }));
                            return r
                        }({
                            author: e.user,
                            product: t
                        });
                    return (0, r.jsx)(i.FocusBlock, {
                        children: (0, r.jsxs)(i.Card, {
                            className: z().chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(C.Z, {
                                className: z().mockMessage,
                                author: (0, L.ZH)(n),
                                message: n
                            }, n.id), (0, r.jsxs)("div", {
                                className: z().mockInput,
                                children: [(0, r.jsx)(O.Z, {
                                    className: z().mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, r.jsx)(_.Z, {
                                    className: z().mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            const le = function(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    s = e.product,
                    u = e.category,
                    d = e.returnRef,
                    f = e.analyticsSource,
                    m = e.analyticsLocations,
                    L = (0, a.ZP)([v.default], (function() {
                        return v.default.getCurrentUser()
                    })),
                    C = (0, c.Z)(Q(m).concat([l.Z.COLLECTIBLES_SHOP_DETAILS_MODAL])),
                    h = C.analyticsLocations,
                    p = C.AnalyticsLocationProvider;
                o.useEffect((function() {
                    S.default.track(B.rMx.OPEN_MODAL, {
                        type: B.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: h,
                        sku_id: s.skuId
                    })
                }), [f, h, s.skuId]);
                var E = o.useMemo((function() {
                    return s.items.find(A.M)
                }), [s]);
                return null == L ? null : (0, r.jsx)(p, {
                    children: (0, r.jsx)(i.ModalRoot, {
                        hideShadow: !0,
                        className: z().modalRoot,
                        returnRef: d,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(i.ModalContent, {
                            className: z().modalContent,
                            children: [(0, r.jsx)(ae, {
                                user: L,
                                product: s,
                                category: u,
                                onClose: n
                            }), (0, r.jsxs)("div", {
                                className: null != E ? z().collectiblePreviewsContainerWithChat : z().collectiblePreviewsContainerNoChat,
                                children: [(0, r.jsx)("img", {
                                    className: z().categoryBanner,
                                    src: (0, x.uV)(u.banner, {
                                        size: 540
                                    }),
                                    alt: u.name
                                }), (0, r.jsxs)("div", {
                                    className: z().previewContainerInner,
                                    children: [(0, r.jsx)(ie, {
                                        user: L,
                                        product: s,
                                        category: u
                                    }), null != E && (0, r.jsx)(se, {
                                        user: L,
                                        product: s,
                                        category: u
                                    })]
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: n,
                                className: z().modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        }
    }
]);