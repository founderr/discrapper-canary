(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6320], {
        545292: (t, e, n) => {
            t.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        459897: (t, e, n) => {
            t.exports = n.p + "ba2f2540c2d139c6505d3e0d55575044.svg"
        },
        735885: (t, e, n) => {
            "use strict";
            n.d(e, {
                jN: () => o,
                xf: () => i,
                Ou: () => a
            });
            var r = n(744564);

            function o(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        272200: (t, e, n) => {
            "use strict";
            n.d(e, {
                Qi: () => r,
                iw: () => o,
                Kw: () => i,
                Vh: () => a,
                bB: () => u
            });
            var r, o, i, a, u;
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                t[t.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                t[t.BOT = 3] = "BOT";
                t[t.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(o || (o = {}));
            ! function(t) {
                t[t.ROLE = 1] = "ROLE";
                t[t.USER = 2] = "USER";
                t[t.CHANNEL = 3] = "CHANNEL"
            }(i || (i = {}));
            ! function(t) {
                t.DISCOVERY = "discovery";
                t.SUGGESTION = "suggestion";
                t.MENTION = "mention";
                t.PASTE = "paste";
                t.RECALL = "recall";
                t.POPULAR_COMMANDS = "popular_commands";
                t.MJ_CHAT_BAR = "mj_chat_bar"
            }(a || (a = {}));
            ! function(t) {
                t[t.CHAT = 0] = "CHAT";
                t[t.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(u || (u = {}))
        },
        317387: (t, e, n) => {
            "use strict";
            n.d(e, {
                L: () => a
            });
            var r, o, i = n(260561);
            ! function(t) {
                t.Global = "2022-09_premium_tier_0_global"
            }(r || (r = {}));
            ! function(t) {
                t[t.VARIANT_1 = 0] = "VARIANT_1";
                t[t.VARIANT_2 = 1] = "VARIANT_2"
            }(o || (o = {}));
            var a = (0, i.B)({
                kind: "user",
                id: r.Global,
                label: "Premium tier 0 (Global)",
                defaultConfig: {
                    enableTier0: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enableTier0: !0,
                        variant: o.VARIANT_1
                    }
                }, {
                    id: 2,
                    label: "Variant 2",
                    config: {
                        enableTier0: !0,
                        variant: o.VARIANT_2
                    }
                }]
            })
        },
        245325: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => f
            });
            var r = n(202351),
                o = n(473903),
                i = n(551778),
                a = n(116094),
                u = n(317387),
                s = n(159895),
                l = n(884123),
                c = n(203600);
            var d = n(717035);

            function f(t) {
                var e = t.autoTrackExposure,
                    n = t.experiment,
                    f = t.location,
                    p = (0, r.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    h = (0, d.N)(),
                    _ = null != h,
                    m = null != p && (0, a.I5)(p);
                (0, s.Z$)(n);
                var b = u.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    g = n.useExperiment({
                        location: null != f ? f : "1"
                    }, {
                        autoTrackExposure: b && !m && !_ && e
                    }),
                    v = g.enabled,
                    T = g.useExpectedValue,
                    y = g.useLikelihood,
                    I = (0, r.cj)([l.Z], (function() {
                        var t = l.Z.getState();
                        return {
                            fetched: t.fetched,
                            premiumLikelihood: t.premiumLikelihood
                        }
                    })),
                    E = I.premiumLikelihood,
                    L = I.fetched,
                    O = (0, r.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([c.Si.TIER_0, c.Si.TIER_2])
                    })),
                    A = !m && v && b && !_ && (T ? !L || !O : !L),
                    R = c.p9.TIER_2;
                if (b)
                    if (_) {
                        var x = h.subscription_trial;
                        (null == x ? void 0 : x.sku_id) === c.Si.TIER_0 ? R = c.p9.TIER_0 : (null == x ? void 0 : x.sku_id) === c.Si.TIER_2 && (R = c.p9.TIER_2)
                    } else if (!m && !A && v)
                    if (T) {
                        R = function(t, e, n) {
                            return null == t ? c.p9.TIER_2 : t[c.Si.TIER_0] * e > t[c.Si.TIER_2] * n ? c.p9.TIER_0 : c.p9.TIER_2
                        }(E, (0, a.aS)(c.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(c.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else y && (R = function(t) {
                        if (null == t) return c.p9.TIER_0;
                        var e = t[s.Bc],
                            n = t[c.Si.TIER_0],
                            r = t[c.Si.TIER_2];
                        return r > n && r > e ? c.p9.TIER_2 : c.p9.TIER_0
                    }(E));
                return {
                    isLoading: A,
                    suggestedPremiumType: R
                }
            }
        },
        442212: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => L
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(882723),
                s = n(153686),
                l = n(19585),
                c = n(594302),
                d = n(652591),
                f = n(189146),
                p = n(717035),
                h = n(455706),
                _ = n(70535),
                m = n(203600),
                b = n(2590),
                g = n(473708),
                v = n(296024),
                T = n.n(v),
                y = n(545292),
                I = n.n(y);

            function E(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function L(t) {
                var e, n, i = t.title,
                    v = t.type,
                    y = t.guildBoostProps,
                    L = t.analyticsSource,
                    O = t.analyticsLocation,
                    A = t.body,
                    R = t.context,
                    x = t.glowUp,
                    N = t.modalClassName,
                    w = t.artContainerClassName,
                    S = t.bodyClassName,
                    P = t.transitionState,
                    M = t.onClose,
                    C = t.onSubscribeClick,
                    k = t.onSecondaryClick,
                    B = t.secondaryCTA,
                    U = t.subscribeButtonText,
                    j = t.showNewBadge,
                    Z = void 0 !== j && j,
                    D = t.enableArtBoxShadow,
                    H = void 0 === D || D,
                    V = t.subscriptionTier,
                    G = void 0 === V ? m.Si.TIER_2 : V,
                    z = t.isLoading,
                    K = void 0 !== z && z,
                    F = t.hideBackButton,
                    Y = t.backButtonText,
                    W = E(t, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != y,
                    $ = (0, p.N)(),
                    q = (null == $ || null === (e = $.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === G && !X,
                    Q = (0, f.zH)(!q),
                    J = (0,
                        l.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                o.useEffect((function() {
                    K || (X ? d.default.track(b.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(v, " - Tier ").concat(y.boostedGuildTier),
                        guild_id: y.guild.id,
                        channel_id: y.channelId,
                        location: O,
                        location_stack: J
                    }) : d.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: v,
                        source: L,
                        location_stack: J,
                        sku_id: G
                    }))
                }), [X, G, K]);
                var tt, et = H ? a()(T().artContainer, T().artContainerBoxShadow, w) : a()(T().artContainer, w),
                    nt = null;
                nt = "artURL" in W ? (0, r.jsx)("img", {
                    className: T().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, r.jsxs)(u.ModalRoot, {
                    className: a()(T().root, N),
                    "aria-label": i,
                    transitionState: P,
                    children: [(0, r.jsxs)("div", {
                        className: et,
                        children: [nt, Z ? (0, r.jsx)("img", {
                            className: T().sparkleBadge,
                            alt: "",
                            src: I()
                        }) : null]
                    }), (0, r.jsx)(u.ModalContent, {
                        className: T().content,
                        children: K ? (0, r.jsx)(u.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: q ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(_.ZP, {
                                    onClose: M,
                                    type: v,
                                    subscriptionTier: null !== (tt = null == $ || null === (n = $.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== tt ? tt : m.Si.TIER_2,
                                    headingText: i,
                                    context: R,
                                    analyticsLocationObject: O,
                                    children: x
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Heading, {
                                    className: T().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    className: a()(S),
                                    children: A
                                })]
                            })
                        })
                    }), (0, r.jsxs)(u.ModalFooter, {
                        className: T().footer,
                        children: [(0, r.jsxs)("div", {
                            className: T().primaryActions,
                            children: [null != B ? (0, r.jsx)(u.Button, {
                                className: T().secondaryAction,
                                onClick: k,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                children: B
                            }) : null, function() {
                                var t;
                                if (X) return (0, r.jsx)(c.Z, {
                                    analyticsLocation: O,
                                    guild: y.guild,
                                    onClose: M
                                });
                                var e = q ? Q ? g.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == $ || null === (t = $.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_2 ? g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : g.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = q ? null == $ ? void 0 : $.trial_id : null;
                                return (0, r.jsx)(h.Z, {
                                    premiumModalAnalyticsLocation: O,
                                    subscriptionTier: G,
                                    trialId: n,
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == C || C();
                                        M()
                                    },
                                    buttonText: null != U ? U : e
                                })
                            }()]
                        }), !F && (0, r.jsx)(u.Button, {
                            onClick: M,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            children: null != Y ? Y : g.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        982871: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => b
            });
            var r = n(785893),
                o = (n(667294), n(593166)),
                i = n(799066),
                a = n(245325),
                u = n(442212),
                s = n(203600),
                l = n(2590),
                c = n(473708),
                d = n(117977),
                f = n.n(d),
                p = n(459897),
                h = n.n(p);

            function _(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function m(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function b(t) {
                var e = function() {
                        null == p || p();
                        n();
                        (0, o.z)()
                    },
                    n = t.onClose,
                    d = t.analyticsSource,
                    p = t.onLearnMore,
                    b = m(t, ["onClose", "analyticsSource", "onLearnMore"]),
                    g = (0, a.Z)({
                        autoTrackExposure: !0,
                        experiment: i.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    v = g.isLoading,
                    T = g.suggestedPremiumType === s.p9.TIER_0 ? s.Si.TIER_0 : s.Si.TIER_2,
                    y = T === s.Si.TIER_0 ? c.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: e
                    }) : c.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                        onLearnMore: e
                    });
                return (0, r.jsx)(u.Z, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            _(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    artURL: h(),
                    artContainerClassName: f().videoBackgroundArt,
                    type: s.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: c.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: y,
                    glowUp: y,
                    analyticsSource: d,
                    analyticsLocation: {
                        page: l.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: l.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: T,
                    isLoading: v
                }, b))
            }
        },
        347117: (t, e, n) => {
            "use strict";
            n.d(e, {
                Tj: () => f,
                zp: () => p,
                Dc: () => h,
                rn: () => _,
                rv: () => m,
                XN: () => g,
                OF: () => v,
                fD: () => y,
                QB: () => I,
                Bo: () => E,
                c0: () => A
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                a = n.n(i),
                u = n(16243),
                s = n.n(u);

            function l(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a),
                        s = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function a(t) {
                            l(i, r, o, a, u, "next", t)
                        }

                        function u(t) {
                            l(i, r, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var d = function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            0;

            function f(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight,
                    i = t.minWidth,
                    a = void 0 === i ? 0 : i,
                    u = t.minHeight,
                    s = void 0 === u ? 0 : u;
                if (e !== r || n !== o) {
                    var l = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * l), a);
                    var c = (n = Math.max(Math.round(n * l), s)) > o ? o / n : 1;
                    e = Math.max(Math.round(e * c), a);
                    n = Math.max(Math.round(n * c), s)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function p(t, e) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return f({
                    width: t,
                    height: e,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function h(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight,
                    i = 1;
                e > r && (i = r / e);
                e = Math.round(e * i);
                var a = 1;
                (n = Math.round(n * i)) > o && (a = o / n);
                return Math.min(i * a, 1)
            }

            function _(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight;
                if (e === n) return 1;
                var i = Math.max(r / e, o / n);
                return Math.min(i, 1)
            }

            function m(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            var b = [
                [0, 0, 0]
            ];

            function g(t, e, n) {
                var r = document.createElement("canvas"),
                    o = r.getContext("2d");
                if (null == o) return b;
                var i = r.width = 0 === t.width ? 128 : t.width,
                    a = r.height = 0 === t.height ? 128 : t.height;
                o.drawImage(t, 0, 0, i, a);
                var u = function(t, e, n) {
                        for (var r, o, i, a, u, s = [], l = 0; l < e; l += n) {
                            o = t[0 + (r = 4 * l)];
                            i = t[r + 1];
                            a = t[r + 2];
                            (void 0 === (u = t[r + 3]) || u >= 125) && (o > 250 && i > 250 && a > 250 || s.push([o, i, a]))
                        }
                        return s
                    }(o.getImageData(0, 0, i, a).data, i * a, n),
                    l = s()(u, e);
                return "boolean" == typeof l ? b : l.palette()
            }
            var v = function(t) {
                    return T(t)
                },
                T = a().memoize((function(t) {
                    return new Promise((function(e, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(t) {
                            n(t);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            e(g(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = t
                    }))
                }));

            function y(t) {
                return new Promise((function(e, n) {
                    var r = new FileReader;
                    r.readAsDataURL(t);
                    r.onload = function() {
                        o()("string" == typeof r.result, "Result must be a string");
                        e(r.result)
                    };
                    r.onerror = function(t) {
                        return n(t)
                    }
                }))
            }

            function I(t) {
                var e = t.split(";base64,");
                o()(2 === e.length, "Input data is not a valid image.");
                return atob(e[1]).length
            }

            function E(t, e, n) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = c((function(t, e, n) {
                    var r;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, O(t).arrayBuffer()];
                            case 1:
                                r = o.sent();
                                return [2, new File([r], e, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(t) {
                var e;
                e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                for (var n = t.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
                return new Blob([r], {
                    type: n
                })
            }

            function A(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = c((function(t) {
                    var e, n, r;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if ("image/png" !== (null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, t.text()];
                            case 1:
                                n = o.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        391438: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(281110),
                o = n(652591);

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        i(t, e, n[e])
                    }))
                }
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function s(t, e, n) {
                var r = e.trackedActionData,
                    i = u(e, ["trackedActionData"]),
                    s = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(i).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: t.status
                        }, s, n));
                        e(t)
                    })).catch((function(t) {
                        var e, i, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (i = t.body) || void 0 === i ? void 0 : i.message
                        }, s, u));
                        n(t)
                    }))
                }))
            }
            const l = {
                get: function(t) {
                    return s(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return s(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return s(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return s(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return s(r.ZP.delete, t, "del")
                }
            }
        },
        322500: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                o = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                a = /^(.*)#[0-9]{1,5}$/,
                u = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                s = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const l = {
                isEmail: function(t) {
                    return r.test(t)
                },
                isInvite: function(t) {
                    return o.test(t)
                },
                isPhoneNumber: function(t) {
                    return i.test(t)
                },
                isUserTagLike: function(t) {
                    var e = a.exec(t);
                    if (null != e && e.length > 1) {
                        var n = e[1],
                            r = u.some((function(t) {
                                return n.includes(t)
                            })),
                            o = s.includes(n);
                        return !r && !o
                    }
                    return !1
                }
            }
        }
    }
]);