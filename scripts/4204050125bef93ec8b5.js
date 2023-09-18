"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96969], {
        396969: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => ce
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
                h = n(550131),
                p = n(219369),
                C = n(786419),
                L = n(455706),
                b = n(494818),
                g = n(183490),
                y = n(722406),
                v = n(450383),
                E = n(473903),
                I = n(551778),
                O = n(781453),
                S = n(95891),
                _ = n(553480),
                j = n(652591),
                x = n(116094),
                M = n(339938),
                P = n(767539),
                T = n(349771),
                N = n(789227),
                w = n(251288),
                k = n(8970),
                Z = n(408442),
                A = n(940594),
                B = n(543155),
                D = n(584228),
                R = n(2590),
                U = n(203600),
                H = n(520453),
                z = n(473708),
                F = n(911827),
                G = n.n(F),
                V = n(467874),
                W = n.n(V);

            function X(e, t) {
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

            function K(e) {
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

            function $(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function q() {
                q = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
                return q.apply(this, arguments)
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $(e, t, n[t])
                    }))
                }
                return e
            }

            function Q(e, t) {
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

            function ee(e, t) {
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return X(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
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
                oe = (0, A.IC)(18),
                ae = function(e) {
                    var t = e.price,
                        n = (0, a.ZP)([I.Z], (function() {
                            var e = I.Z.getForSkuAndInterval(U.Si.TIER_2, U.rV.MONTH);
                            return null != e ? (0, x.gy)(e) : null
                        }));
                    return (0, r.jsxs)("div", {
                        className: G().nonPremiumContainer,
                        children: [(0, r.jsx)(i.Text, {
                            color: "always-white",
                            className: G().nonPremiumPrice,
                            variant: "text-md/normal",
                            children: z.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                                price: t
                            })
                        }), (0, r.jsx)(i.Tooltip, {
                            tooltipClassName: G().tooltip,
                            text: z.Z.Messages.COLLECTIBLES_SUBSCRIPTION_TOOLTIP_TEXT.format({
                                price: n
                            }),
                            "aria-label": z.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            children: function(e) {
                                var t = q({}, e);
                                return (0, r.jsx)(S.Z, Q(J({}, t), {
                                    className: G().premiumIcon,
                                    height: 20,
                                    width: 20,
                                    color: "white"
                                }))
                            }
                        })]
                    })
                },
                ie = function(e) {
                    var t = e.product,
                        n = e.user,
                        l = e.category,
                        f = e.onClose,
                        m = (0, c.Z)().analyticsLocations,
                        h = (0, D.Z)(l),
                        p = h.buttonColors,
                        b = h.backgroundColors,
                        g = x.ZP.canUseCollectibles(n),
                        y = (0, T.XM)(t),
                        v = ee((0, a.Wu)([P.Z], (function() {
                            return [P.Z.getPurchase(t.skuId), P.Z.isClaiming === t.skuId]
                        })), 2),
                        E = v[0],
                        I = v[1],
                        O = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(w.M)) && void 0 !== e ? e : null
                        }), [t]),
                        S = (0, u.Z)({
                            user: n,
                            pendingAvatarDecoration: O,
                            size: re,
                            canAnimate: !0
                        });
                    return (0, r.jsxs)("div", {
                        className: G().collectibleInfoContainer,
                        style: {
                            background: "linear-gradient(135deg, ".concat(b[0], ", ").concat(b[1], ")")
                        },
                        children: [(0, r.jsx)("div", {
                            className: G().titleContainer,
                            children: (0, r.jsx)("div", {
                                className: G().titleImageWrapper,
                                children: (0, r.jsx)("img", {
                                    className: G().titleImage,
                                    src: (0, T.uV)(l.logo, {
                                        size: oe
                                    }),
                                    alt: l.name
                                })
                            })
                        }), null != O && (0, r.jsx)("div", {
                            className: G().avatarPreviewContainer,
                            children: (0, r.jsx)(i.Avatar, {
                                "aria-label": z.Z.Messages.USER_SETTINGS_AVATAR,
                                size: ne,
                                avatarDecoration: S,
                                src: W()
                            })
                        }), (0,
                            r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: G().description,
                                children: [(0, r.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    children: t.name
                                }), (0, r.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), g ? null : (0, r.jsx)(ae, {
                                    price: y
                                })]
                            }), g ? null != E ? (0, r.jsx)(i.Button, {
                                className: G().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    f();
                                    (0, s.xf)();
                                    var e;
                                    (0, d.ps)({
                                        analyticsLocations: m,
                                        initialSelectedDecoration: null !== (e = t.items.find(w.M)) && void 0 !== e ? e : null
                                    })
                                },
                                children: z.Z.Messages.COLLECTIBLES_USE_NOW
                            }) : (0, T.mv)(l) ? (0, r.jsx)(i.Button, {
                                style: {
                                    background: (0, A.Ch)(p)
                                },
                                className: G().button,
                                look: i.Button.Looks.FILLED,
                                submitting: I,
                                submittingStartedLabel: z.Z.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: z.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: K((function() {
                                    return te(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, (0, M.fK)(t.skuId)];
                                            case 1:
                                                e.sent();
                                                f();
                                                (0, B.Z)({
                                                    product: t,
                                                    category: l,
                                                    analyticsLocations: m
                                                });
                                                return [2]
                                        }
                                    }))
                                })),
                                children: z.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }) : (0, r.jsx)(i.Button, {
                                style: {
                                    background: (0, A.Ch)(p)
                                },
                                className: G().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    return (0, C.Z)({
                                        skuId: t.skuId,
                                        analyticsLocations: m,
                                        onClose: function(e) {
                                            return e ? f() : (0, H.dG)()
                                        }
                                    })
                                },
                                children: z.Z.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: y
                                })
                            }) : (0, r.jsx)(L.Z, {
                                buttonText: z.Z.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                onClick: Z.P,
                                onSubscribeModalClose: function() {
                                    return (0, Z.p)({
                                        product: t,
                                        category: l
                                    })
                                },
                                subscriptionTier: U.Si.TIER_2
                            }), (0, r.jsx)(i.Text, {
                                color: "none",
                                className: G().disclaimer,
                                variant: "text-xxs/normal",
                                children: null != E ? null : g ? (0, T.mv)(l) ? z.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : z.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : z.Z.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                se = function(e) {
                    var t = e.product,
                        n = e.user,
                        i = x.ZP.canUsePremiumProfileCustomization(n),
                        s = (0, a.cj)([v.Z], (function() {
                            return v.Z.getAllPending()
                        })),
                        l = (0, g.Z)(n.id),
                        c = Boolean(null == l ? void 0 : l.getPreviewBio(s.pendingBio).value),
                        u = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(w.M)) && void 0 !== e ? e : null
                        }), [t]),
                        d = o.useMemo((function() {
                            return t.items.find(k.H)
                        }), [t]);
                    return (0, r.jsx)(b.Z, Q(J({}, s), {
                        user: n,
                        canUsePremiumCustomization: i,
                        onAvatarChange: H.dG,
                        onBannerChange: H.dG,
                        bodyClassName: G().profileCustomizationBody,
                        pendingAvatarDecoration: u,
                        pendingProfileEffectID: null == d ? void 0 : d.id,
                        forProfileEffectModal: null != d,
                        disabledInputs: !0,
                        hideExampleButton: !0,
                        hideFakeActivity: null != u || c,
                        hideBioSection: null != u
                    }))
                },
                le = function(e) {
                    var t = e.product,
                        n = function(e) {
                            var t = e.author,
                                n = e.product,
                                r = (0, f.e5)(Q(J({}, (0, m.ZP)({
                                    author: t,
                                    channelId: "1337",
                                    content: z.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                                })), {
                                    state: R.yb.SENT,
                                    id: "0"
                                }));
                            r.author = new y.Z(Q(J({}, r.author), {
                                avatar_decoration_data: n.items.find(w.M)
                            }));
                            return r
                        }({
                            author: e.user,
                            product: t
                        });
                    return (0, r.jsx)(i.FocusBlock, {
                        children: (0, r.jsxs)(i.Card, {
                            className: G().chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(p.Z, {
                                className: G().mockMessage,
                                author: (0, h.ZH)(n),
                                message: n
                            }, n.id), (0, r.jsxs)("div", {
                                className: G().mockInput,
                                children: [(0, r.jsx)(_.Z, {
                                    className: G().mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, r.jsx)(O.Z, {
                                    className: G().mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            const ce = function(e) {
                var t = e.transitionState,
                    n = e.product,
                    s = e.category,
                    c = e.onClose,
                    u = (0, a.ZP)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    d = (0, N.Z)(l.Z.COLLECTIBLES_SHOP_DETAILS_MODAL),
                    f = d.analyticsLocations,
                    m = d.AnalyticsLocationProvider;
                o.useEffect((function() {
                    j.default.track(R.rMx.OPEN_MODAL, {
                        type: R.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        location_stack: f,
                        sku_id: n.skuId
                    })
                }), [f, n.skuId]);
                var h = o.useMemo((function() {
                    return n.items.find(w.M)
                }), [n]);
                return null == u ? null : (0, r.jsx)(m, {
                    children: (0, r.jsx)(i.ModalRoot, {
                        className: G().modalRoot,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(i.ModalContent, {
                            className: G().modalContent,
                            children: [(0, r.jsx)(ie, {
                                user: u,
                                product: n,
                                category: s,
                                onClose: c
                            }), (0, r.jsxs)("div", {
                                className: null != h ? G().collectiblePreviewsContainerWithChat : G().collectiblePreviewsContainerNoChat,
                                children: [(0, r.jsx)("img", {
                                    className: G().categoryBanner,
                                    src: (0, T.uV)(s.banner, {
                                        size: 540
                                    }),
                                    alt: s.name
                                }), (0, r.jsxs)("div", {
                                    className: G().previewContainerInner,
                                    children: [(0, r.jsx)(se, {
                                        user: u,
                                        product: n,
                                        category: s
                                    }), null != h && (0, r.jsx)(le, {
                                        user: u,
                                        product: n,
                                        category: s
                                    })]
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: c,
                                className: G().modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        }
    }
]);