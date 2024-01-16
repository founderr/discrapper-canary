(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59717"], {
        437083: function(e, t, r) {
            var a = r("561449"),
                n = r("877297");
            e.exports = function(e) {
                return n(a(e))
            }
        },
        329252: function(e, t, r) {
            var a = r("877297"),
                n = r("164099");
            e.exports = function(e) {
                return a(n(e))
            }
        },
        957478: function(e, t, r) {
            var a = r("626785");
            e.exports = function(e, t) {
                return a(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, r) {
            e.exports = function(e, t) {
                var r = -1,
                    a = e.length;
                for (t || (t = Array(a)); ++r < a;) t[r] = e[r];
                return t
            }
        },
        877297: function(e, t, r) {
            var a = r("68421");
            e.exports = function(e, t) {
                var r = -1,
                    n = e.length,
                    i = n - 1;
                for (t = void 0 === t ? n : t; ++r < t;) {
                    var s = a(r, i),
                        u = e[s];
                    e[s] = e[r], e[r] = u
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, r) {
            var a = r("437083"),
                n = r("329252"),
                i = r("725502");
            e.exports = function(e) {
                return (i(e) ? a : n)(e)
            }
        },
        164099: function(e, t, r) {
            var a = r("957478"),
                n = r("466731");
            e.exports = function(e) {
                return null == e ? [] : a(e, n(e))
            }
        },
        53708: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f6c7b8245d3a54cf98b2.png"
        },
        723251: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return a
                },
                rgbaToDataURL: function() {
                    return n
                },
                thumbHashToDataURL: function() {
                    return i
                }
            }), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

            function a(e) {
                let t = e[3],
                    r = 128 & e[2],
                    a = 128 & e[4];
                return (a ? r ? 5 : 7 : 7 & t) / (a ? 7 & t : r ? 5 : 7)
            }

            function n(e, t, r) {
                let a = 4 * e + 1,
                    n = 6 + t * (5 + a),
                    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 73, 68, 65, 84, 120, 1],
                    s = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    u = 1,
                    l = 0;
                for (let e = 0, n = 0, s = a - 1; e < t; e++, s += a - 1)
                    for (i.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), l = (l + u) % 65521; n < s; n++) {
                        let e = 255 & r[n];
                        i.push(e), l = (l + (u = (u + e) % 65521)) % 65521
                    }
                for (let [e, t] of(i.push(l >> 8, 255 & l, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + n]
                    ])) {
                    let r = -1;
                    for (let a = e; a < t; a++) r ^= i[a], r = (r = r >>> 4 ^ s[15 & r]) >>> 4 ^ s[15 & r];
                    r = ~r, i[t++] = r >>> 24, i[t++] = r >> 16 & 255, i[t++] = r >> 8 & 255, i[t++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...i))
            }

            function i(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: r,
                        max: n,
                        cos: i,
                        round: s
                    } = Math, u = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, o = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, d = (u >> 12 & 63) / 31.5 - 1, E = u >> 23, _ = l >> 15, f = n(3, _ ? E ? 5 : 7 : 7 & l), A = n(3, _ ? 7 & l : E ? 5 : 7), m = E ? (15 & e[5]) / 15 : 1, I = (e[5] >> 4) / 15, h = E ? 6 : 5, T = 0, R = (t, r, a) => {
                        let n = [];
                        for (let i = 0; i < r; i++)
                            for (let s = i ? 0 : 1; s * r < t * (r - i); s++) n.push(((e[h + (T >> 1)] >> ((1 & T++) << 2) & 15) / 7.5 - 1) * a);
                        return n
                    }, S = R(f, A, (u >> 18 & 31) / 31), C = R(3, 3, 1.25 * ((l >> 3 & 63) / 63)), v = R(3, 3, 1.25 * ((l >> 9 & 63) / 63)), g = E && R(5, 5, I), N = a(e), p = s(N > 1 ? 32 : 32 * N), O = s(N > 1 ? 32 / N : 32), M = new Uint8Array(p * O * 4), D = [], x = [];
                    for (let e = 0, a = 0; e < O; e++)
                        for (let s = 0; s < p; s++, a += 4) {
                            let u = o,
                                l = c,
                                _ = d,
                                I = m;
                            for (let e = 0, r = n(f, E ? 5 : 3); e < r; e++) D[e] = i(t / p * (s + .5) * e);
                            for (let r = 0, a = n(A, E ? 5 : 3); r < a; r++) x[r] = i(t / O * (e + .5) * r);
                            for (let e = 0, t = 0; e < A; e++)
                                for (let r = e ? 0 : 1, a = 2 * x[e]; r * A < f * (A - e); r++, t++) u += S[t] * D[r] * a;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let r = e ? 0 : 1, a = 2 * x[e]; r < 3 - e; r++, t++) {
                                    let e = D[r] * a;
                                    l += C[t] * e, _ += v[t] * e
                                }
                            if (E)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let r = e ? 0 : 1, a = 2 * x[e]; r < 5 - e; r++, t++) I += g[t] * D[r] * a;
                            let h = u - 2 / 3 * l,
                                T = (3 * u - h + _) / 2,
                                R = T - _;
                            M[a] = n(0, 255 * r(1, T)), M[a + 1] = n(0, 255 * r(1, R)), M[a + 2] = n(0, 255 * r(1, h)), M[a + 3] = n(0, 255 * r(1, I))
                        }
                    return {
                        w: p,
                        h: O,
                        rgba: M
                    }
                }(e);
                return n(t.w, t.h, t.rgba)
            }
        },
        875212: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useTriggerDebuggingAA: function() {
                    return i
                }
            });
            var a = r("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-09_trigger_debugging_aa",
                label: "trigger debugging aa mobile",
                defaultConfig: {
                    inUse: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        inUse: !0
                    }
                }]
            });

            function i(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: r
                } = e;
                return n.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t
                })
            }
        },
        791050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("265586"),
                s = r("446674"),
                u = r("77078"),
                l = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("491232"),
                E = r("984002"),
                _ = r("235898"),
                f = r("170313"),
                A = r("635956"),
                m = r("91653"),
                I = r("697218"),
                h = r("599110"),
                T = r("719923"),
                R = r("234251"),
                S = r("659117"),
                C = r("765221"),
                v = r("49111"),
                g = r("646718"),
                N = r("782340"),
                p = r("705057");

            function O(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: i,
                    onClose: s,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: I,
                    setPendingAvatarDecoration: h
                } = (0, m.default)({
                    analyticsLocations: i,
                    isTryItOut: _
                }), [v, O] = n.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== I) return I;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let a = (0, d.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = a.find(e => (0, R.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    product: M,
                    purchase: D
                } = (0, E.default)(null == v ? void 0 : v.skuId), x = T.default.canUseCollectibles(t), H = n.useRef(null), P = (0, f.default)(i), L = (0, R.isEqualAvatarDecoration)(v, void 0 === I ? null == t ? void 0 : t.avatarDecoration : I), U = () => {
                    h(v), s()
                }, j = n.useCallback(() => {
                    s(), (0, c.openCollectiblesShop)({
                        analyticsLocations: i,
                        analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: null != v ? v.skuId : void 0
                    })
                }, [i, s, v]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: p.modalHeader,
                        children: [(0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: N.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                        }), (0, a.jsx)(u.ModalCloseButton, {
                            className: p.modalCloseButton,
                            onClick: s
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: p.modalContent,
                        scrollbarType: "none",
                        children: [(0, a.jsx)(C.default, {
                            user: t,
                            pendingAvatarDecoration: v,
                            selectedAvatarDecorationRef: H,
                            onSelect: e => {
                                O(e), null != e && P(e)
                            },
                            onOpenShop: j
                        }), (0, a.jsx)(S.default, {
                            className: p.modalPreview,
                            user: t,
                            avatarDecorationOverride: v
                        })]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        className: p.modalFooter,
                        children: [(() => {
                            let e = null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || x);
                            if (e || null === v) return (0, a.jsx)(u.Button, {
                                onClick: U,
                                disabled: L,
                                children: N.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = x || !(0, d.isPremiumCollectiblesProduct)(M);
                            return r ? (0, a.jsx)(u.Button, {
                                className: p.modalFooterShopButton,
                                onClick: j,
                                children: N.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, a.jsx)(A.default, {
                                subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: T.default.isPremium(t) ? N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: s,
                            children: N.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: E,
                    isTryItOutFlow: f
                } = e, A = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
                    AnalyticsLocationProvider: m,
                    analyticsLocations: T
                } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: R,
                    purchases: S,
                    isFetchingCategories: C,
                    isFetchingPurchases: g
                } = (0, _.default)(), N = C || g && 0 === S.size;
                return n.useEffect(() => {
                    h.default.track(v.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: T
                    })
                }, [T]), n.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...R.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [R]), null == A ? null : (0, a.jsx)(m, {
                    children: (0, a.jsx)(u.ModalRoot, {
                        transitionState: t,
                        className: p.modal,
                        size: N ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
                        children: N ? (0, a.jsx)(u.Spinner, {
                            className: p.spinner,
                            type: u.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, a.jsx)(O, {
                            user: A,
                            categories: R,
                            analyticsLocations: T,
                            initialSelectedDecoration: E,
                            onClose: d,
                            isTryItOutFlow: f
                        })
                    })
                })
            }
        },
        659117: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return R
                }
            }), r("794252");
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                i = r.n(n),
                s = r("506838"),
                u = r("446674"),
                l = r("77078"),
                o = r("491232"),
                c = r("984002"),
                d = r("716120"),
                E = r("915639"),
                _ = r("824563"),
                f = r("719923"),
                A = r("795158"),
                m = r("782340"),
                I = r("632000");
            let h = [{
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                T = e => {
                    let {
                        purchase: t
                    } = e, r = (0, u.useStateFromStores)([E.default], () => E.default.locale), n = (0, o.isPremiumCollectiblesPurchase)(t);
                    return (0, a.jsxs)("div", {
                        className: I.purchaseInfo,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [m.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), n && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("br", {}), m.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var R = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: n
                } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: R,
                    product: S,
                    purchase: C
                } = (0, c.default)(null == r ? void 0 : r.skuId), v = f.default.canUseCollectibles(t), g = (0, o.isPremiumCollectiblesPurchase)(C), N = (0, o.isPremiumCollectiblesProduct)(S), p = !v && g;
                return null != S && (null == C || p) ? (0, a.jsxs)("div", {
                    className: i(I.modalPreview, I.shopPreviewContainer, n),
                    children: [(0, a.jsx)(d.default, {
                        asset: null == R ? void 0 : R.banner,
                        className: I.shopPreviewBanner,
                        children: (0, a.jsx)(A.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, a.jsxs)("div", {
                        className: I.shopPreviewTextContainer,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: S.name
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: p ? m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.match)([N, v]).with([!0, !0], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
                        })]
                    })]
                }) : (0, a.jsxs)("div", {
                    className: i(I.modalPreview, n),
                    children: [(0, a.jsxs)("div", {
                        className: I.previewSections,
                        children: [(0, a.jsx)("div", {
                            className: I.decorationPreview,
                            children: (0, a.jsx)(A.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, a.jsx)("div", {
                            className: I.smallDecorationPreviewsContainer,
                            children: h.map(e => {
                                let {
                                    avatarSize: n,
                                    showStatus: i
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: I.smallDecorationPreview,
                                    children: (0, a.jsx)(A.default, {
                                        user: t,
                                        avatarSize: n,
                                        avatarDecorationOverride: r,
                                        status: i ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(n).concat(i))
                            })
                        })]
                    }), null != C && (0, a.jsx)(T, {
                        purchase: C
                    })]
                })
            }
        },
        795158: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("77078"),
                i = r("106435"),
                s = r("50885"),
                u = r("782340");
            let l = s.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;
            var o = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    status: s,
                    avatarSize: o = n.AvatarSizes.SIZE_120,
                    "aria-hidden": c = !1
                } = e, {
                    avatarDecorationSrc: d,
                    avatarSrc: E,
                    eventHandlers: _
                } = (0, i.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: r
                });
                return (0, a.jsx)(l, {
                    avatarDecoration: d,
                    src: E,
                    size: o,
                    status: s,
                    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": c,
                    ..._
                })
            }
        },
        765221: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            }), r("222007"), r("794252");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                s = r.n(i),
                u = r("506838"),
                l = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                E = r("853987"),
                _ = r("426497"),
                f = r("491232"),
                A = r("743826"),
                m = r("216422"),
                I = r("468759"),
                h = r("600785"),
                T = r("956089"),
                R = r("719923"),
                S = r("643070"),
                C = r("688318"),
                v = r("782340"),
                g = r("654353");
            let N = () => 80,
                p = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: n,
                        isSelected: i = !1,
                        ...u
                    } = e;
                    return (0, a.jsx)(c.Clickable, {
                        className: s(g.decorationGridItem, i ? g.selected : void 0, r),
                        ...u,
                        onClick: n,
                        children: t
                    })
                },
                O = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: i,
                        section: s,
                        isSelected: u = !1,
                        ...c
                    } = e, A = (0, o.default)([E.default], () => {
                        let e = E.default.getProduct(r.skuId);
                        return (0, f.isPremiumCollectiblesProduct)(e)
                    }), I = (0, o.default)([_.default], () => _.default.isItemViewed(r)), N = R.default.canUseCollectibles(t), O = s === S.Section.PREMIUM_PURCHASE && !N, [M, D] = n.useState(u);
                    n.useEffect(() => {
                        u && D(!0)
                    }, [u]);
                    let x = n.useRef(null),
                        H = (0, d.default)(null != i ? i : x),
                        {
                            avatarDecorationSrc: P
                        } = (0, C.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !H
                        });
                    return (0, a.jsxs)(p, {
                        className: O ? g.decorationGridItemChurned : void 0,
                        innerRef: null != i ? i : x,
                        isSelected: u,
                        ...c,
                        children: [(0, a.jsx)("img", {
                            className: g.presetDecorationImg,
                            src: P,
                            alt: r.label
                        }), (() => {
                            let e = s === S.Section.PURCHASE || s === S.Section.PREMIUM_PURCHASE && N;
                            if (e) return null;
                            let t = !I && !u && !M;
                            return t ? (0, a.jsx)(T.PremiumBadge, {
                                className: g.newBadge,
                                text: (0, a.jsxs)("div", {
                                    className: g.newBadgeText,
                                    children: [(0, a.jsx)(h.default, {
                                        width: 12,
                                        height: 12
                                    }), v.default.Messages.NEW]
                                })
                            }) : (0, a.jsx)(T.IconBadge, {
                                icon: A ? () => (0, a.jsx)(m.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, a.jsx)(h.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: l.default.BACKGROUND_ACCENT,
                                className: g.iconBadge
                            })
                        })()]
                    })
                };
            var M = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: n,
                    onSelect: i,
                    onOpenShop: s
                } = e, l = (0, S.default)();
                return (0, a.jsx)(c.MasonryList, {
                    fade: !0,
                    className: g.list,
                    columns: 3,
                    sections: l.map(e => {
                        let {
                            items: t
                        } = e;
                        return t.length
                    }),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: (e, o, d, E) => {
                        let {
                            section: _,
                            items: f
                        } = l[e];
                        return (0, u.match)(f[o]).with(S.NONE_ITEM, () => (0, a.jsxs)(p, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => i(null),
                            children: [(0, a.jsx)(I.default, {
                                className: g.notAllowedIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: v.default.Messages.NONE
                            })]
                        }, E)).with(S.SHOP_ITEM, () => (0, a.jsxs)(p, {
                            style: d,
                            onSelect: s,
                            children: [(0, a.jsx)(A.default, {
                                className: g.shopIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: v.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, E)).otherwise(e => {
                            let s = (null == r ? void 0 : r.id) === e.id;
                            return (0, a.jsx)(O, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: _,
                                innerRef: s ? n : void 0,
                                isSelected: s,
                                onSelect: () => i(e)
                            }, E)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = l[e];
                        return (0, a.jsx)("div", {
                            className: g.headings,
                            children: (0, a.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, a.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: t
                                })
                            })
                        })
                    },
                    getSectionHeight: e => l[e].height,
                    getItemKey: (e, t) => l[e].items[t].id,
                    getItemHeight: N
                })
            }
        },
        643070: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Section: function() {
                    return a
                },
                NONE_ITEM: function() {
                    return f
                },
                SHOP_ITEM: function() {
                    return A
                },
                default: function() {
                    return m
                }
            }), r("222007"), r("808653"), r("424973");
            var a, n, i = r("884691"),
                s = r("917351"),
                u = r("65597"),
                l = r("853987"),
                o = r("775416"),
                c = r("491232"),
                d = r("697218"),
                E = r("719923"),
                _ = r("782340");
            (n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
            let f = {
                    id: "None"
                },
                A = {
                    id: "Shop"
                };
            var m = () => {
                let e = (0, u.default)([d.default], () => d.default.getCurrentUser()),
                    t = E.default.canUseCollectibles(e),
                    r = (0, u.default)([o.default], () => o.default.purchases),
                    [a, n] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.products]);
                return (0, i.useMemo)(() => {
                    let e = (0, s.uniqBy)([...(0, c.getAvatarDecorationsFromPurchases)(r), ...(0, c.getAvatarDecorationsFromCategories)(a)], "id"),
                        i = e.reduce((e, a) => {
                            let i = r.get(a.skuId),
                                s = (0, c.isPremiumCollectiblesPurchase)(i);
                            if (s && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), s) return e.premium_purchase.push(a), e;
                            if (null != i) return e.purchase.push(a), e;
                            if (!t && (0, c.isPremiumCollectiblesProduct)(n.get(a.skuId))) {
                                let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
                                return t.push(a), e
                            }
                            return e.preview.push(a), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        });
                    return [{
                        section: "purchase",
                        items: [f, A, ...i.purchase],
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: i.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
                        items: i.premium_purchase.length > 0 ? i.premium_purchase : i.premium_preview,
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: "preview",
                        items: i.preview,
                        height: 12,
                        header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [a, n, r, t])
            }
        },
        716120: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                i = r.n(n),
                s = r("65597"),
                u = r("854588"),
                l = r("206230"),
                o = r("284679"),
                c = r("491232"),
                d = r("408381"),
                E = r("268779"),
                _ = e => {
                    let {
                        asset: t,
                        size: r = d.MAX_CONTENT_WIDTH,
                        className: n,
                        style: _,
                        children: f
                    } = e, A = (0, s.default)([l.default], () => l.default.saturation);
                    return (0, a.jsx)("div", {
                        className: i(E.banner, n),
                        style: (() => {
                            if (null == t) return _;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: r,
                                format: "jpg"
                            });
                            if (1 === A) return {
                                ..._,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let a = (0, o.hexOpacityToRgba)(u.default.unsafe_rawColors.BLACK_500, 1 - A);
                            return {
                                ..._,
                                backgroundImage: "linear-gradient(".concat(a, ", ").concat(a, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: f
                    })
                }
        },
        408381: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return n
                },
                getAssetSizeByHeight: function() {
                    return i
                },
                getLogoSize: function() {
                    return s
                },
                getBackgroundGradient: function() {
                    return u
                }
            });
            var a = r("547630");
            let n = 1060,
                i = e => e * (0, a.default)(),
                s = e => 3.8 * e,
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: r,
                            secondary: a
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(a.toHslString(), ")")
                }
        },
        75015: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UploadTypes: function() {
                    return i
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return l
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return A
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return m
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return h
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return T
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return R
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return S
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return v
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return g
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return N
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return p
                },
                MessageTypes: function() {
                    return s
                }
            });
            var a, n, i, s, u = r("917219");
            (a = i || (i = {}))[a.AVATAR = 0] = "AVATAR", a[a.BANNER = 1] = "BANNER", a[a.GUILD_BANNER = 2] = "GUILD_BANNER", a[a.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", a[a.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", a[a.HOME_HEADER = 5] = "HOME_HEADER", a[a.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let l = 568,
                o = 2400,
                c = 848,
                d = 2400,
                E = 1350,
                _ = 2400,
                f = 960,
                A = 2400,
                m = 600,
                I = 17 / 6,
                h = 16 / 9,
                T = 2.5,
                R = 4,
                S = l / I,
                C = l / h,
                v = l / T,
                g = l / R,
                N = u.BACKGROUND_REPLACEMENT_SIZE.width / u.BACKGROUND_REPLACEMENT_SIZE.height,
                p = l / N;
            (n = s || (s = {}))[n.CROP_GIF_START = 0] = "CROP_GIF_START", n[n.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", n[n.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        719347: function(e, t, r) {
            "use strict";
            var a, n;
            r.r(t), r.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return i
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return s
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return u
                },
                MediaLayoutType: function() {
                    return a
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return l
                }
            });
            let i = 550,
                s = 350,
                u = 40;
            (n = a || (a = {})).STATIC = "STATIC", n.RESPONSIVE = "RESPONSIVE", n.MOSAIC = "MOSAIC";
            let l = 20
        }
    }
]);