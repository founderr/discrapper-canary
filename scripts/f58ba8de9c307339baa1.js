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
                    l = n - 1;
                for (t = void 0 === t ? n : t; ++r < t;) {
                    var s = a(r, l),
                        i = e[s];
                    e[s] = e[r], e[r] = i
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, r) {
            var a = r("437083"),
                n = r("329252"),
                l = r("725502");
            e.exports = function(e) {
                return (l(e) ? a : n)(e)
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
                    return l
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
                    l = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 73, 68, 65, 84, 120, 1],
                    s = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    i = 1,
                    u = 0;
                for (let e = 0, n = 0, s = a - 1; e < t; e++, s += a - 1)
                    for (l.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), u = (u + i) % 65521; n < s; n++) {
                        let e = 255 & r[n];
                        l.push(e), u = (u + (i = (i + e) % 65521)) % 65521
                    }
                for (let [e, t] of(l.push(u >> 8, 255 & u, i >> 8, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + n]
                    ])) {
                    let r = -1;
                    for (let a = e; a < t; a++) r ^= l[a], r = (r = r >>> 4 ^ s[15 & r]) >>> 4 ^ s[15 & r];
                    r = ~r, l[t++] = r >>> 24, l[t++] = r >> 16 & 255, l[t++] = r >> 8 & 255, l[t++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...l))
            }

            function l(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: r,
                        max: n,
                        cos: l,
                        round: s
                    } = Math, i = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, o = (63 & i) / 63, c = (i >> 6 & 63) / 31.5 - 1, d = (i >> 12 & 63) / 31.5 - 1, E = i >> 23, _ = u >> 15, f = n(3, _ ? E ? 5 : 7 : 7 & u), C = n(3, _ ? 7 & u : E ? 5 : 7), A = E ? (15 & e[5]) / 15 : 1, I = (e[5] >> 4) / 15, S = E ? 6 : 5, p = 0, h = (t, r, a) => {
                        let n = [];
                        for (let l = 0; l < r; l++)
                            for (let s = l ? 0 : 1; s * r < t * (r - l); s++) n.push(((e[S + (p >> 1)] >> ((1 & p++) << 2) & 15) / 7.5 - 1) * a);
                        return n
                    }, m = h(f, C, (i >> 18 & 31) / 31), T = h(3, 3, 1.25 * ((u >> 3 & 63) / 63)), O = h(3, 3, 1.25 * ((u >> 9 & 63) / 63)), L = E && h(5, 5, I), v = a(e), R = s(v > 1 ? 32 : 32 * v), g = s(v > 1 ? 32 / v : 32), D = new Uint8Array(R * g * 4), N = [], P = [];
                    for (let e = 0, a = 0; e < g; e++)
                        for (let s = 0; s < R; s++, a += 4) {
                            let i = o,
                                u = c,
                                _ = d,
                                I = A;
                            for (let e = 0, r = n(f, E ? 5 : 3); e < r; e++) N[e] = l(t / R * (s + .5) * e);
                            for (let r = 0, a = n(C, E ? 5 : 3); r < a; r++) P[r] = l(t / g * (e + .5) * r);
                            for (let e = 0, t = 0; e < C; e++)
                                for (let r = e ? 0 : 1, a = 2 * P[e]; r * C < f * (C - e); r++, t++) i += m[t] * N[r] * a;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let r = e ? 0 : 1, a = 2 * P[e]; r < 3 - e; r++, t++) {
                                    let e = N[r] * a;
                                    u += T[t] * e, _ += O[t] * e
                                }
                            if (E)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let r = e ? 0 : 1, a = 2 * P[e]; r < 5 - e; r++, t++) I += L[t] * N[r] * a;
                            let S = i - 2 / 3 * u,
                                p = (3 * i - S + _) / 2,
                                h = p - _;
                            D[a] = n(0, 255 * r(1, p)), D[a + 1] = n(0, 255 * r(1, h)), D[a + 2] = n(0, 255 * r(1, S)), D[a + 3] = n(0, 255 * r(1, I))
                        }
                    return {
                        w: R,
                        h: g,
                        rgba: D
                    }
                }(e);
                return n(t.w, t.h, t.rgba)
            }
        },
        875212: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useTriggerDebuggingAA: function() {
                    return l
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

            function l(e) {
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
                    return N
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                l = r("265586"),
                s = r("446674"),
                i = r("77078"),
                u = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("805172"),
                E = r("491232"),
                _ = r("984002"),
                f = r("235898"),
                C = r("170313"),
                A = r("635956"),
                I = r("91653"),
                S = r("697218"),
                p = r("599110"),
                h = r("719923"),
                m = r("234251"),
                T = r("659117"),
                O = r("765221"),
                L = r("49111"),
                v = r("646718"),
                R = r("782340"),
                g = r("705057");

            function D(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: l,
                    onClose: s,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: f
                } = e, {
                    pendingAvatarDecoration: S,
                    setPendingAvatarDecoration: p
                } = (0, I.default)({
                    analyticsLocations: l,
                    isTryItOut: f
                }), [L, D] = n.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== S) return S;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let a = (0, E.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = a.find(e => (0, m.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    product: N,
                    purchase: P
                } = (0, _.default)(null == L ? void 0 : L.skuId), M = h.default.canUseCollectibles(t), y = n.useRef(null), H = (0, C.default)(l), {
                    shopForAllEnabled: x
                } = (0, d.default)({
                    location: "AvatarDecorationModal"
                }), b = (0, m.isEqualAvatarDecoration)(L, void 0 === S ? null == t ? void 0 : t.avatarDecoration : S), w = () => {
                    p(L), s()
                }, U = n.useCallback(() => {
                    s(), (0, c.openCollectiblesShop)({
                        analyticsLocations: l,
                        analyticsSource: u.default.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: null != L ? L.skuId : void 0
                    })
                }, [l, s, L]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: g.modalHeader,
                        children: [(0, a.jsx)("div", {
                            className: g.modalHeadings,
                            children: (0, a.jsx)(i.HeadingLevel, {
                                component: (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: R.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !M && !x && (0, a.jsx)(i.Heading, {
                                    variant: "text-sm/normal",
                                    children: R.default.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, a.jsx)(i.ModalCloseButton, {
                            className: g.modalCloseButton,
                            onClick: s
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: g.modalContent,
                        scrollbarType: "none",
                        children: [(0, a.jsx)(O.default, {
                            user: t,
                            pendingAvatarDecoration: L,
                            selectedAvatarDecorationRef: y,
                            onSelect: e => {
                                D(e), null != e && H(e)
                            },
                            onOpenShop: U
                        }), (0, a.jsx)(T.default, {
                            className: g.modalPreview,
                            user: t,
                            avatarDecorationOverride: L
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        className: g.modalFooter,
                        children: [(() => {
                            let e = null != P && (!(0, E.isPremiumCollectiblesPurchase)(P) || M);
                            if (e || null === L) return (0, a.jsx)(i.Button, {
                                onClick: w,
                                disabled: b,
                                children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = M || !(0, E.isPremiumCollectiblesProduct)(N);
                            return r ? (0, a.jsx)(i.Button, {
                                className: g.modalFooterShopButton,
                                onClick: U,
                                children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, a.jsx)(A.default, {
                                subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: h.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: s,
                            children: R.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function N(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: E,
                    isTryItOutFlow: _
                } = e, C = (0, s.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                    AnalyticsLocationProvider: A,
                    analyticsLocations: I
                } = (0, o.default)(r, u.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: h,
                    purchases: m,
                    isFetchingCategories: T,
                    isFetchingPurchases: O
                } = (0, f.default)(), v = T || O && 0 === m.size;
                return n.useEffect(() => {
                    p.default.track(L.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: I
                    })
                }, [I]), n.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...h.values()],
                        itemTypes: [l.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [h]), null == C ? null : (0, a.jsx)(A, {
                    children: (0, a.jsx)(i.ModalRoot, {
                        transitionState: t,
                        className: g.modal,
                        size: v ? i.ModalSize.DYNAMIC : i.ModalSize.MEDIUM,
                        children: v ? (0, a.jsx)(i.Spinner, {
                            className: g.spinner,
                            type: i.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, a.jsx)(D, {
                            user: C,
                            categories: h,
                            analyticsLocations: I,
                            initialSelectedDecoration: E,
                            onClose: d,
                            isTryItOutFlow: _
                        })
                    })
                })
            }
        },
        659117: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            }), r("794252");
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                l = r.n(n),
                s = r("506838"),
                i = r("446674"),
                u = r("77078"),
                o = r("805172"),
                c = r("491232"),
                d = r("984002"),
                E = r("716120"),
                _ = r("915639"),
                f = r("824563"),
                C = r("719923"),
                A = r("795158"),
                I = r("782340"),
                S = r("632000");
            let p = [{
                    avatarSize: u.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: u.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: u.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: u.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                h = e => {
                    let {
                        purchase: t
                    } = e, r = (0, i.useStateFromStores)([_.default], () => _.default.locale), n = (0, c.isPremiumCollectiblesPurchase)(t);
                    return (0, a.jsxs)("div", {
                        className: S.purchaseInfo,
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, a.jsxs)(u.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [I.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), n && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("br", {}), I.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var m = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: n
                } = e, _ = (0, i.useStateFromStores)([f.default], () => f.default.getStatus(t.id)), {
                    category: m,
                    product: T,
                    purchase: O
                } = (0, d.default)(null == r ? void 0 : r.skuId), L = C.default.canUseCollectibles(t), v = (0, c.isPremiumCollectiblesPurchase)(O), R = (0, c.isPremiumCollectiblesProduct)(T), {
                    shopForAllEnabled: g
                } = (0, o.default)({
                    location: "AvatarDecorationModalPreview"
                }), D = !L && v;
                return null != T && (null == O || D) ? (0, a.jsxs)("div", {
                    className: l(S.modalPreview, S.shopPreviewContainer, n),
                    children: [(0, a.jsx)(E.default, {
                        asset: null == m ? void 0 : m.banner,
                        className: S.shopPreviewBanner,
                        children: (0, a.jsx)(A.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, a.jsxs)("div", {
                        className: S.shopPreviewTextContainer,
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            children: T.name
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: D ? I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.match)([R, L]).with([!0, !0], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).with([!1, !0], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM).with([!1, !1], () => g ? I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM : I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE).exhaustive()
                        })]
                    })]
                }) : (0, a.jsxs)("div", {
                    className: l(S.modalPreview, n),
                    children: [(0, a.jsxs)("div", {
                        className: S.previewSections,
                        children: [(0, a.jsx)("div", {
                            className: S.decorationPreview,
                            children: (0, a.jsx)(A.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, a.jsx)("div", {
                            className: S.smallDecorationPreviewsContainer,
                            children: p.map(e => {
                                let {
                                    avatarSize: n,
                                    showStatus: l
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: S.smallDecorationPreview,
                                    children: (0, a.jsx)(A.default, {
                                        user: t,
                                        avatarSize: n,
                                        avatarDecorationOverride: r,
                                        status: l ? _ : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(n).concat(l))
                            })
                        })]
                    }), null != O && (0, a.jsx)(h, {
                        purchase: O
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
                l = r("106435"),
                s = r("50885"),
                i = r("782340");
            let u = s.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;
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
                } = (0, l.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: r
                });
                return (0, a.jsx)(u, {
                    avatarDecoration: d,
                    src: E,
                    size: o,
                    status: s,
                    "aria-label": c ? void 0 : i.default.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": c,
                    ..._
                })
            }
        },
        765221: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return D
                }
            }), r("222007"), r("794252");
            var a = r("37983"),
                n = r("884691"),
                l = r("414456"),
                s = r.n(l),
                i = r("506838"),
                u = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                E = r("853987"),
                _ = r("426497"),
                f = r("491232"),
                C = r("743826"),
                A = r("216422"),
                I = r("468759"),
                S = r("600785"),
                p = r("956089"),
                h = r("719923"),
                m = r("643070"),
                T = r("688318"),
                O = r("782340"),
                L = r("654353");
            let v = () => 80,
                R = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: n,
                        isSelected: l = !1,
                        ...i
                    } = e;
                    return (0, a.jsx)(c.Clickable, {
                        className: s(L.decorationGridItem, l ? L.selected : void 0, r),
                        ...i,
                        onClick: n,
                        children: t
                    })
                },
                g = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: l,
                        section: s,
                        isSelected: i = !1,
                        ...c
                    } = e, C = (0, o.default)([E.default], () => {
                        let e = E.default.getProduct(r.skuId);
                        return (0, f.isPremiumCollectiblesProduct)(e)
                    }), I = (0, o.default)([_.default], () => _.default.isItemViewed(r)), v = h.default.canUseCollectibles(t), g = s === m.Section.PREMIUM_PURCHASE && !v, [D, N] = n.useState(i);
                    n.useEffect(() => {
                        i && N(!0)
                    }, [i]);
                    let P = n.useRef(null),
                        M = (0, d.default)(null != l ? l : P),
                        {
                            avatarDecorationSrc: y
                        } = (0, T.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !M
                        });
                    return (0, a.jsxs)(R, {
                        className: g ? L.decorationGridItemChurned : void 0,
                        innerRef: null != l ? l : P,
                        isSelected: i,
                        ...c,
                        children: [(0, a.jsx)("img", {
                            className: L.presetDecorationImg,
                            src: y,
                            alt: r.label
                        }), (() => {
                            let e = s === m.Section.PURCHASE || s === m.Section.PREMIUM_PURCHASE && v;
                            if (e) return null;
                            let t = !I && !i && !D;
                            return t ? (0, a.jsx)(p.PremiumBadge, {
                                className: L.newBadge,
                                text: (0, a.jsxs)("div", {
                                    className: L.newBadgeText,
                                    children: [(0, a.jsx)(S.default, {
                                        width: 12,
                                        height: 12
                                    }), O.default.Messages.NEW]
                                })
                            }) : (0, a.jsx)(p.IconBadge, {
                                icon: C ? () => (0, a.jsx)(A.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, a.jsx)(S.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: u.default.BACKGROUND_ACCENT,
                                className: L.iconBadge
                            })
                        })()]
                    })
                };
            var D = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: n,
                    onSelect: l,
                    onOpenShop: s
                } = e, u = (0, m.default)();
                return (0, a.jsx)(c.MasonryList, {
                    fade: !0,
                    className: L.list,
                    columns: 3,
                    sections: u.map(e => {
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
                        } = u[e];
                        return (0, i.match)(f[o]).with(m.NONE_ITEM, () => (0, a.jsxs)(R, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => l(null),
                            children: [(0, a.jsx)(I.default, {
                                className: L.notAllowedIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: O.default.Messages.NONE
                            })]
                        }, E)).with(m.SHOP_ITEM, () => (0, a.jsxs)(R, {
                            style: d,
                            onSelect: s,
                            children: [(0, a.jsx)(C.default, {
                                className: L.shopIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: O.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, E)).otherwise(e => {
                            let s = (null == r ? void 0 : r.id) === e.id;
                            return (0, a.jsx)(g, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: _,
                                innerRef: s ? n : void 0,
                                isSelected: s,
                                onSelect: () => l(e)
                            }, E)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = u[e];
                        return (0, a.jsx)("div", {
                            className: L.headings,
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
                    getSectionHeight: e => u[e].height,
                    getItemKey: (e, t) => u[e].items[t].id,
                    getItemHeight: v
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
                    return C
                },
                SHOP_ITEM: function() {
                    return A
                },
                default: function() {
                    return I
                }
            }), r("222007"), r("808653"), r("424973");
            var a, n, l = r("884691"),
                s = r("917351"),
                i = r("65597"),
                u = r("853987"),
                o = r("775416"),
                c = r("805172"),
                d = r("491232"),
                E = r("697218"),
                _ = r("719923"),
                f = r("782340");
            (n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
            let C = {
                    id: "None"
                },
                A = {
                    id: "Shop"
                };
            var I = () => {
                let e = (0, i.default)([E.default], () => E.default.getCurrentUser()),
                    t = _.default.canUseCollectibles(e),
                    {
                        shopForAllEnabled: r
                    } = (0, c.default)({
                        location: "useAvatarDecorationSections"
                    }),
                    a = (0, i.default)([o.default], () => o.default.purchases),
                    [n, I] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.categories, u.default.products]);
                return (0, l.useMemo)(() => {
                    let e = (0, s.uniqBy)([...(0, d.getAvatarDecorationsFromPurchases)(a), ...(0, d.getAvatarDecorationsFromCategories)(n)], "id"),
                        l = e.reduce((e, r) => {
                            let n = a.get(r.skuId),
                                l = (0, d.isPremiumCollectiblesPurchase)(n);
                            if (l && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), l) return e.premium_purchase.push(r), e;
                            if (null != n) return e.purchase.push(r), e;
                            if (!t && (0, d.isPremiumCollectiblesProduct)(I.get(r.skuId))) {
                                let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
                                return t.push(r), e
                            }
                            return e.preview.push(r), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        }),
                        i = !!t || !!r || l.purchase.length > 0;
                    return [{
                        section: "purchase",
                        items: i ? [C, A, ...l.purchase] : [],
                        height: 12,
                        header: f.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: l.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
                        items: l.premium_purchase.length > 0 ? l.premium_purchase : l.premium_preview,
                        height: 12,
                        header: f.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: "preview",
                        items: l.preview,
                        height: 12,
                        header: f.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [n, I, a, t, r])
            }
        },
        21526: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                openCollectiblesShop: function() {
                    return d
                },
                closeCollectiblesShop: function() {
                    return E
                },
                productDetailsOpened: function() {
                    return _
                },
                fetchCollectiblesCategories: function() {
                    return f
                },
                fetchCollectiblesPurchases: function() {
                    return C
                },
                fetchCollectiblesProduct: function() {
                    return A
                },
                claimPremiumCollectiblesProduct: function() {
                    return I
                },
                validateCollectiblesRecipient: function() {
                    return S
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return p
                }
            });
            var a = r("872717"),
                n = r("913144"),
                l = r("54239"),
                s = r("448993"),
                i = r("514296"),
                u = r("407788"),
                o = r("489134"),
                c = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    n.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, l.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
                },
                E = () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, l.popLayer)()
                },
                _ = e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                f = async () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await a.default.get(c.Endpoints.COLLECTIBLES_CATEGORIES);
                        n.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(i.default.fromServer)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new s.APIError(e)
                    }
                }, C = async () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await a.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
                        n.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(o.default.fromServer)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new s.APIError(e)
                    }
                }, A = async e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let t = await a.default.get(c.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        n.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: u.default.fromServer(t.body)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new s.APIError(e)
                    }
                }, I = async e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await a.default.put({
                            url: c.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        n.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(o.default.fromServer)
                        })
                    } catch (t) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new s.APIError(t)
                    }
                }, S = async (e, t) => {
                    try {
                        let r = await a.default.get({
                            url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                            query: {
                                sku_id: t,
                                recipient_id: e
                            }
                        });
                        return r.body.valid
                    } catch (e) {
                        throw new s.APIError(e)
                    }
                }, p = e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        426497: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            }), r("808653");
            var a = r("635058"),
                n = r("265586"),
                l = r("446674"),
                s = r("913144"),
                i = r("853987");
            let u = new Date(2023, 8, 25),
                o = new Date(2023, 9, 5),
                c = () => ({
                    categoryItemViews: {
                        [a.CollectiblesCategorySkuId.FANTASY]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: u,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.ANIME]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: u,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.BREAKFAST]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: u,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.DISXCORE]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: u
                        }
                    }
                }),
                d = c();
            class E extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    var t, r;
                    let a = null === (t = i.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
                    return null != a && (null === (r = d.categoryItemViews[a]) || void 0 === r ? void 0 : r[e.type]) != null
                }
                reset() {
                    d = c()
                }
            }
            E.displayName = "CollectiblesPersistedStore", E.persistKey = "CollectiblesPersistedStoreV2";
            var _ = new E(s.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, a = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: n
                        } = t, l = r.reduce((e, t) => {
                            var r;
                            return (null === (r = d.categoryItemViews[n]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[n] && (d.categoryItemViews[n] = {}), d.categoryItemViews[n][t] = a, !0)
                        }, !1);
                        return e || l
                    }, !1)
                }
            })
        },
        775416: function(e, t, r) {
            "use strict";
            let a, n, l;
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            }), r("222007");
            var s = r("917351"),
                i = r("446674"),
                u = r("913144");
            let o = new Map,
                c = o,
                d = !1;
            class E extends i.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return a
                }
                get purchases() {
                    return c
                }
                get fetchError() {
                    return n
                }
                get claimError() {
                    return l
                }
                getPurchase(e) {
                    return null != e ? c.get(e) : void 0
                }
            }
            E.displayName = "CollectiblesPurchaseStore";
            var _ = new E(u.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, n = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? c = o : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, n = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    c = o, d = !1, n = t
                },
                COLLECTIBLES_CLAIM: e => {
                    a = e.skuId, l = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? c = o : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), a = void 0, l = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    a = r, l = t
                },
                LOGOUT: e => {
                    c = o, d = !1, a = void 0, n = void 0, l = void 0
                }
            })
        },
        805172: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var a = r("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1,
                    marketingEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enables Collectibles Shop For All with in-app DCF marketing",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: a = {}
                } = e;
                return n.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: a
                })
            }
        },
        216719: function(e, t, r) {
            "use strict";
            let a;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r("446674"),
                l = r("913144");
            let s = [],
                i = s,
                u = null,
                o = e => {
                    i = s, u = null
                };
            class c extends n.default.Store {
                get analyticsLocations() {
                    return i
                }
                get analyticsSource() {
                    return u
                }
                get initialProductSkuId() {
                    return a
                }
                getAnalytics() {
                    return {
                        analyticsLocations: i,
                        analyticsSource: u
                    }
                }
            }
            c.displayName = "CollectiblesShopStore";
            var d = new c(l.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    i = null !== (t = e.analyticsLocations) && void 0 !== t ? t : s, u = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, a = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: o,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === a && (a = void 0)
                },
                LOGOUT: o
            })
        },
        514296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("808653"), r("424973");
            var a, n = r("407788"),
                l = r("792382");
            a = class e extends l.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: a,
                        ...l
                    } = t;
                    return new e({
                        ...super.fromServer(l),
                        products: r.reduce((e, t) => {
                            let r = n.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: a
                    })
                }
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
            }
        },
        407788: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("808653"), r("794252"), r("424973");
            var a, n = r("506838"),
                l = r("265586"),
                s = r("797647"),
                i = r("730297"),
                u = r("792382"),
                o = r("806410");
            a = class e extends u.default {
                static fromServer(t) {
                    var r;
                    let {
                        currency: a,
                        price: u,
                        prices: c,
                        category_sku_id: d,
                        ...E
                    } = t;
                    return new e({
                        ...super.fromServer(E),
                        currency: a,
                        price: u,
                        prices: null == (r = c) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let a = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: a.country_prices.country_code,
                                    prices: a.country_prices.prices.map(e => (0, s.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        categorySkuId: d,
                        items: E.items.reduce((e, t) => (0, n.match)(t).with({
                            type: l.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(i.default.fromServer(t)), e)).with({
                            type: l.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(o.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.currency = e.currency, this.price = e.price, this.prices = e.prices, this.summary = e.summary, this.items = e.items, this.categorySkuId = e.categorySkuId
                }
            }
        },
        489134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a, n = r("407788");
            a = class e extends n.default {
                static fromServer(t) {
                    let {
                        purchased_at: r,
                        purchase_type: a,
                        ...n
                    } = t;
                    return new e({
                        ...super.fromServer(n),
                        purchaseType: a,
                        purchasedAt: null != r ? new Date(r) : r
                    })
                }
                constructor(e) {
                    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
                }
            }
        },
        792382: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a, n = r("666038");
            a = class e extends n.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: a,
                        unpublished_at: n,
                        ...l
                    } = t, s = null != n ? new Date(n) : null;
                    return new e({
                        ...l,
                        storeListingId: r,
                        skuId: a,
                        unpublishedAt: s
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
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
                l = r.n(n),
                s = r("65597"),
                i = r("854588"),
                u = r("206230"),
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
                    } = e, C = (0, s.default)([u.default], () => u.default.saturation);
                    return (0, a.jsx)("div", {
                        className: l(E.banner, n),
                        style: (() => {
                            if (null == t) return _;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: r,
                                format: "jpg"
                            });
                            if (1 === C) return {
                                ..._,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let a = (0, o.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - C);
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
                    return l
                },
                getLogoSize: function() {
                    return s
                },
                getBackgroundGradient: function() {
                    return i
                }
            });
            var a = r("547630");
            let n = 1060,
                l = e => e * (0, a.default)(),
                s = e => 3.8 * e,
                i = function(e) {
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
                    return l
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return u
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
                    return C
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return A
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return S
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return p
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return h
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return T
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return O
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return L
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return v
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return R
                },
                MessageTypes: function() {
                    return s
                }
            });
            var a, n, l, s, i = r("917219");
            (a = l || (l = {}))[a.AVATAR = 0] = "AVATAR", a[a.BANNER = 1] = "BANNER", a[a.GUILD_BANNER = 2] = "GUILD_BANNER", a[a.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", a[a.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", a[a.HOME_HEADER = 5] = "HOME_HEADER", a[a.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                o = 2400,
                c = 848,
                d = 2400,
                E = 1350,
                _ = 2400,
                f = 960,
                C = 2400,
                A = 600,
                I = 17 / 6,
                S = 16 / 9,
                p = 2.5,
                h = 4,
                m = u / I,
                T = u / S,
                O = u / p,
                L = u / h,
                v = i.BACKGROUND_REPLACEMENT_SIZE.width / i.BACKGROUND_REPLACEMENT_SIZE.height,
                R = u / v;
            (n = s || (s = {}))[n.CROP_GIF_START = 0] = "CROP_GIF_START", n[n.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", n[n.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        719347: function(e, t, r) {
            "use strict";
            var a, n;
            r.r(t), r.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return l
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return s
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return i
                },
                MediaLayoutType: function() {
                    return a
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return u
                }
            });
            let l = 550,
                s = 350,
                i = 40;
            (n = a || (a = {})).STATIC = "STATIC", n.RESPONSIVE = "RESPONSIVE", n.MOSAIC = "MOSAIC";
            let u = 20
        }
    }
]);