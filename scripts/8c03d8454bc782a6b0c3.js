"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96969], {
        396969: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => ie
            });
            var r = n(785893),
                o = n(667294),
                a = n(318715),
                i = n(882723),
                s = n(153686),
                c = n(19585),
                l = n(841379),
                u = n(995141),
                d = n(649536),
                f = n(358624),
                m = n(550131),
                C = n(219369),
                p = n(786419),
                h = n(455706),
                L = n(494818),
                E = n(183490),
                g = n(722406),
                b = n(450383),
                v = n(473903),
                I = n(551778),
                O = n(781453),
                y = n(95891),
                _ = n(553480),
                j = n(652591),
                x = n(116094),
                P = n(339938),
                S = n(767539),
                M = n(349771),
                T = n(789227),
                N = n(251288),
                Z = n(8970),
                w = n(408442),
                k = n(940594),
                A = n(543155),
                B = n(584228),
                D = n(2590),
                R = n(203600),
                U = n(520453),
                H = n(473708),
                z = n(911827),
                F = n.n(z),
                G = n(467874),
                V = n.n(G);

            function X(e, t, n, r, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function W(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            X(a, r, o, i, s, "next", e)
                        }

                        function s(e) {
                            X(a, r, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
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

            function K() {
                K = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
                return K.apply(this, arguments)
            }

            function q(e) {
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

            function J(e, t) {
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
            var Q = function(e, t) {
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
                $ = i.AvatarSizes.SIZE_152,
                ee = (0, u.y9)($),
                te = (0, k.IC)(18),
                ne = function(e) {
                    var t = e.price,
                        n = (0, a.ZP)([I.Z], (function() {
                            var e = I.Z.getForSkuAndInterval(R.Si.TIER_2, R.rV.MONTH);
                            return null != e ? (0, x.gy)(e) : null
                        }));
                    return (0, r.jsxs)("div", {
                        className: F().nonPremiumContainer,
                        children: [(0, r.jsx)(i.Text, {
                            color: "always-white",
                            className: F().nonPremiumPrice,
                            variant: "text-md/normal",
                            children: H.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                                price: t
                            })
                        }), (0, r.jsx)(i.Tooltip, {
                            tooltipClassName: F().tooltip,
                            text: H.Z.Messages.COLLECTIBLES_SUBSCRIPTION_TOOLTIP_TEXT.format({
                                price: n
                            }),
                            "aria-label": H.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            children: function(e) {
                                var t = K({}, e);
                                return (0, r.jsx)(y.Z, J(q({}, t), {
                                    className: F().premiumIcon,
                                    height: 20,
                                    width: 20,
                                    color: "white"
                                }))
                            }
                        })]
                    })
                },
                re = function(e) {
                    var t = e.product,
                        n = e.user,
                        s = e.category,
                        u = e.onClose,
                        d = (0, c.Z)().analyticsLocations,
                        f = (0, B.Z)(s),
                        m = f.buttonColors,
                        C = f.backgroundColors,
                        L = x.ZP.canUseCollectibles(n),
                        E = (0, M.XM)(t),
                        g = (0, a.ZP)([S.Z], (function() {
                            return S.Z.isClaiming === t.skuId
                        })),
                        b = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(N.M)) && void 0 !== e ? e : null
                        }), [t]),
                        v = (0, l.Z)({
                            user: n,
                            pendingAvatarDecoration: b,
                            size: ee,
                            canAnimate: !0
                        });
                    return (0, r.jsxs)("div", {
                        className: F().collectibleInfoContainer,
                        style: {
                            background: "linear-gradient(135deg, ".concat(C[0], ", ").concat(C[1], ")")
                        },
                        children: [(0, r.jsx)("div", {
                            className: F().titleContainer,
                            children: (0, r.jsx)("div", {
                                className: F().titleImageWrapper,
                                children: (0, r.jsx)("img", {
                                    className: F().titleImage,
                                    src: (0, M.uV)(s.logo, {
                                        size: te
                                    }),
                                    alt: s.name
                                })
                            })
                        }), null != b && (0, r.jsx)("div", {
                            className: F().avatarPreviewContainer,
                            children: (0, r.jsx)(i.Avatar, {
                                "aria-label": H.Z.Messages.USER_SETTINGS_AVATAR,
                                size: $,
                                avatarDecoration: v,
                                src: V()
                            })
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("div", {
                                className: F().description,
                                children: [(0, r.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    children: t.name
                                }), (0, r.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), L ? null : (0, r.jsx)(ne, {
                                    price: E
                                })]
                            }), L ? (0, M.mv)(s) ? (0, r.jsx)(i.Button, {
                                style: {
                                    background: (0, k.Ch)(m)
                                },
                                className: F().button,
                                look: i.Button.Looks.FILLED,
                                submitting: g,
                                submittingStartedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: H.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: W((function() {
                                    return Q(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, (0, P.fK)(t.skuId)];
                                            case 1:
                                                e.sent();
                                                u();
                                                (0, A.Z)({
                                                    product: t,
                                                    category: s,
                                                    analyticsLocations: d
                                                });
                                                return [2]
                                        }
                                    }))
                                })),
                                children: H.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }) : (0, r.jsx)(i.Button, {
                                style: {
                                    background: (0, k.Ch)(m)
                                },
                                className: F().button,
                                look: i.Button.Looks.FILLED,
                                onClick: function() {
                                    return (0, p.Z)({
                                        skuId: t.skuId,
                                        analyticsLocations: d,
                                        onClose: function(e) {
                                            return e ? u() : (0, U.dG)()
                                        }
                                    })
                                },
                                children: H.Z.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: E
                                })
                            }) : (0, r.jsx)(h.Z, {
                                buttonText: H.Z.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                onClick: w.P,
                                onSubscribeModalClose: function() {
                                    return (0, w.p)({
                                        product: t,
                                        category: s
                                    })
                                },
                                subscriptionTier: R.Si.TIER_2
                            }), (0, r.jsx)(i.Text, {
                                color: "none",
                                className: F().disclaimer,
                                variant: "text-xxs/normal",
                                children: L ? (0, M.mv)(s) ? H.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : H.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : H.Z.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                oe = function(e) {
                    var t = e.product,
                        n = e.user,
                        i = x.ZP.canUsePremiumProfileCustomization(n),
                        s = (0, a.cj)([b.Z], (function() {
                            return b.Z.getAllPending()
                        })),
                        c = (0, E.Z)(n.id),
                        l = Boolean(null == c ? void 0 : c.getPreviewBio(s.pendingBio).value),
                        u = o.useMemo((function() {
                            var e;
                            return null !== (e = t.items.find(N.M)) && void 0 !== e ? e : null
                        }), [t]),
                        d = o.useMemo((function() {
                            return t.items.find(Z.H)
                        }), [t]);
                    return (0, r.jsx)(L.Z, J(q({}, s), {
                        user: n,
                        canUsePremiumCustomization: i,
                        onAvatarChange: U.dG,
                        onBannerChange: U.dG,
                        bodyClassName: F().profileCustomizationBody,
                        pendingAvatarDecoration: u,
                        pendingProfileEffectID: null == d ? void 0 : d.id,
                        forProfileEffectModal: null != d,
                        disabledInputs: !0,
                        hideExampleButton: !0,
                        hideFakeActivity: null != u || l,
                        hideBioSection: null != u
                    }))
                },
                ae = function(e) {
                    var t = e.product,
                        n = function(e) {
                            var t = e.author,
                                n = e.product,
                                r = (0, d.e5)(J(q({}, (0, f.ZP)({
                                    author: t,
                                    channelId: "1337",
                                    content: H.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                                })), {
                                    state: D.yb.SENT,
                                    id: "0"
                                }));
                            r.author = new g.Z(J(q({}, r.author), {
                                avatar_decoration_data: n.items.find(N.M)
                            }));
                            return r
                        }({
                            author: e.user,
                            product: t
                        });
                    return (0, r.jsx)(i.FocusBlock, {
                        children: (0, r.jsxs)(i.Card, {
                            className: F().chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(C.Z, {
                                className: F().mockMessage,
                                author: (0, m.ZH)(n),
                                message: n
                            }, n.id), (0, r.jsxs)("div", {
                                className: F().mockInput,
                                children: [(0, r.jsx)(_.Z, {
                                    className: F().mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, r.jsx)(O.Z, {
                                    className: F().mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            const ie = function(e) {
                var t = e.transitionState,
                    n = e.product,
                    c = e.category,
                    l = e.onClose,
                    u = (0, a.ZP)([v.default], (function() {
                        return v.default.getCurrentUser()
                    })),
                    d = (0, T.Z)(s.Z.COLLECTIBLES_SHOP_DETAILS_MODAL),
                    f = d.analyticsLocations,
                    m = d.AnalyticsLocationProvider;
                o.useEffect((function() {
                    j.default.track(D.rMx.OPEN_MODAL, {
                        type: D.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        location_stack: f,
                        sku_id: n.skuId
                    })
                }), [f, n.skuId]);
                var C = o.useMemo((function() {
                    return n.items.find(N.M)
                }), [n]);
                return null == u ? null : (0, r.jsx)(m, {
                    children: (0, r.jsx)(i.ModalRoot, {
                        className: F().modalRoot,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, r.jsxs)(i.ModalContent, {
                            className: F().modalContent,
                            children: [(0, r.jsx)(re, {
                                user: u,
                                product: n,
                                category: c,
                                onClose: l
                            }), (0, r.jsxs)("div", {
                                className: null != C ? F().collectiblePreviewsContainerWithChat : F().collectiblePreviewsContainerNoChat,
                                children: [(0, r.jsx)("img", {
                                    className: F().categoryBanner,
                                    src: (0, M.uV)(c.banner, {
                                        size: 540
                                    }),
                                    alt: c.name
                                }), (0, r.jsxs)("div", {
                                    className: F().previewContainerInner,
                                    children: [(0, r.jsx)(oe, {
                                        user: u,
                                        product: n,
                                        category: c
                                    }), null != C && (0, r.jsx)(ae, {
                                        user: u,
                                        product: n,
                                        category: c
                                    })]
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: l,
                                className: F().modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=8c03d8454bc782a6b0c3.js.map