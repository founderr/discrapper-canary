(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78310], {
        94340: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(959207),
                o = n(2590);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    u = r.Z.getGame(e.applicationId),
                    a = e.getPrice(),
                    c = e.getPrice(null, !1),
                    l = {
                        sku_id: e.id,
                        sku_type: e.type,
                        application_id: e.applicationId,
                        application_name: null != u ? u.name : null,
                        store_title: e.name,
                        distribution_type: e.premium ? "premium" : "distribution"
                    },
                    s = null;
                n && (s = {
                    price: null != a ? a.amount : null,
                    regular_price: null != c ? c.amount : null,
                    currency: null != a ? a.currency : null
                });
                var f = null;
                t && (f = {
                    has_single_player: e.hasFeature(o.Qa3.SINGLE_PLAYER),
                    has_online_multiplayer: e.hasFeature(o.Qa3.ONLINE_MULTIPLAYER),
                    has_local_multiplayer: e.hasFeature(o.Qa3.LOCAL_MULTIPLAYER),
                    has_pvp_features: e.hasFeature(o.Qa3.PVP),
                    has_local_coop: e.hasFeature(o.Qa3.LOCAL_COOP),
                    has_online_coop: e.hasFeature(o.Qa3.ONLINE_COOP),
                    has_cross_platform: e.hasFeature(o.Qa3.CROSS_PLATFORM),
                    has_rich_presence: e.hasFeature(o.Qa3.RICH_PRESENCE),
                    has_game_invites: e.hasFeature(o.Qa3.DISCORD_GAME_INVITES),
                    has_spectator_mode: e.hasFeature(o.Qa3.SPECTATOR_MODE),
                    has_controller_support: e.hasFeature(o.Qa3.CONTROLLER_SUPPORT),
                    has_cloud_saves: e.hasFeature(o.Qa3.CLOUD_SAVES),
                    has_secure_networking: e.hasFeature(o.Qa3.SECURE_NETWORKING)
                });
                return i({}, l, s, f)
            }
        },
        486531: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_custom_gift",
                label: "Custom Gift Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        449852: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                u = n(347365);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var p = null,
                O = null,
                I = null;

            function d(e) {
                var t = e.error;
                p = t
            }

            function E() {
                p = null
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getGiftCode = function(e) {
                    return e === I ? O : null
                };
                r.__getLocalVars = function() {
                    return {
                        paymentError: p,
                        giftCode: O,
                        giftCodeSkuId: I
                    }
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "paymentError",
                    get: function() {
                        return p
                    }
                }]);
                return n
            }(r.ZP.Store);
            T.displayName = "PremiumPaymentModalStore";
            const y = new T(o.Z, {
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
                PREMIUM_PAYMENT_UPDATE_FAIL: d,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
                    E()
                },
                PREMIUM_PAYMENT_UPDATE_SUCCESS: E,
                PREMIUM_PAYMENT_ERROR_CLEAR: E,
                BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
                    var t = e.message,
                        n = e.code;
                    p = new u.HF(t, n)
                },
                BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
                    var t = e.message,
                        n = e.code;
                    p = new u.HF(t, n)
                },
                SKU_PURCHASE_SUCCESS: function(e) {
                    O = e.giftCode;
                    I = e.skuId
                },
                SKU_PURCHASE_FAIL: function(e) {
                    p = e.error
                },
                SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
                    e.isGift && (I = e.skuId)
                },
                GIFT_CODE_CREATE: function(e) {
                    var t = e.giftCode;
                    if (0 !== t.uses || t.sku_id !== I) return !1;
                    O = t.code
                }
            })
        },
        901654: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => N
            });
            var r = n(441143),
                o = n.n(r),
                u = n(202351),
                i = n(744564),
                a = n(575978);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function _(e, t) {
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

            function p(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var E = new Map;

            function T(e) {
                var t = E.get(e);
                if (null == t) {
                    console.warn("Window state not initialized", e);
                    return {
                        isElementFullscreen: !1,
                        focused: !1,
                        windowSize: {
                            width: 0,
                            height: 0
                        }
                    }
                }
                return t
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFocused = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.UU)();
                    return T(e).focused
                };
                r.getFocusedWindowId = function() {
                    var e = null;
                    E.forEach((function(t, n) {
                        t.focused && (e = n)
                    }));
                    return e
                };
                r.isElementFullScreen = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.UU)();
                    return T(e).isElementFullscreen
                };
                r.windowSize = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.UU)();
                    return T(e).windowSize
                };
                r.__getLocalVars = function() {
                    return {
                        windowStates: E
                    }
                };
                return n
            }(u.ZP.Store);
            y.displayName = "WindowStore";
            const N = new y(i.Z, {
                WINDOW_INIT: function(e) {
                    o()(!E.has(e.windowId), "Window initialized multiple times");
                    var t = e.width,
                        n = e.height,
                        r = e.isElementFullscreen,
                        u = e.focused;
                    E.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: u
                    });
                    return !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    var t = T(e.windowId);
                    if (t.isElementFullscreen === e.isElementFullscreen) return !1;
                    E.set(e.windowId, _(f({}, t), {
                        isElementFullscreen: e.isElementFullscreen
                    }));
                    return !0
                },
                WINDOW_FOCUS: function(e) {
                    var t = T(e.windowId);
                    if (t.focused === e.focused) return !1;
                    E.set(e.windowId, _(f({}, t), {
                        focused: e.focused
                    }));
                    return !0
                },
                WINDOW_RESIZED: function(e) {
                    var t = T(e.windowId);
                    if (t.windowSize.width === e.width && t.windowSize.height === e.height) return !1;
                    E.set(e.windowId, _(f({}, t), {
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }));
                    return !0
                },
                WINDOW_UNLOAD: function(e) {
                    E.delete(e.windowId);
                    return !0
                }
            })
        },
        644144: (e, t, n) => {
            "use strict";
            n.d(t, {
                a8: () => D,
                Bg: () => Z,
                Z0: () => U,
                Fp: () => G,
                Q_: () => B,
                Nz: () => k,
                bT: () => j,
                dM: () => V,
                TO: () => W,
                dQ: () => H,
                L2: () => x,
                iM: () => z,
                e$: () => Q,
                z2: () => K,
                JT: () => J,
                E5: () => X
            });
            var r = n(202351),
                o = n(973889),
                u = n(94340),
                i = n(486531),
                a = n(449852),
                c = n(473903),
                l = n(652591),
                s = n(72580),
                f = n(116094),
                _ = n(968696),
                p = n(534681),
                O = n(2590),
                I = n(203600),
                d = n(473708);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t, n, r, o, u, i) {
                try {
                    var a = e[u](i),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function i(e) {
                            T(u, r, o, i, a, "next", e)
                        }

                        function a(e) {
                            T(u, r, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return u
                    }
                }(e, t) || g(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || g(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
                }
            }
            var v = function(e, t) {
                    var n, r, o, u, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return u = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }), u;

                    function a(u) {
                        return function(a) {
                            return function(u) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                    (r = 0, o) && (u = [2 & u[0], o.value]);
                                    switch (u[0]) {
                                        case 0:
                                        case 1:
                                            o = u;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: u[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = u[1];
                                            u = [0];
                                            continue;
                                        case 7:
                                            u = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                                i.label = u[1];
                                                break
                                            }
                                            if (6 === u[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = u;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(u);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    u = t.call(e, i)
                                } catch (e) {
                                    u = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & u[0]) throw u[1];
                                return {
                                    value: u[0] ? u[1] : void 0,
                                    done: !0
                                }
                            }([u, a])
                        }
                    }
                },
                R = _.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
                m = ["discordapp.com/gifts", "discord.com/gifts"].map((function(e) {
                    return _.Z.escape(e)
                })),
                C = [R].concat(S(m)).join("|"),
                b = new RegExp("(?: |^|https?://)(?:".concat(C, ")/([a-z0-9-]+)"), "gi"),
                A = S(["discord.com/billing/promotions", "promos.discord.gg"].map((function(e) {
                    return _.Z.escape(e)
                }))).join("|"),
                w = new RegExp("(?: |^|https?://)(?:".concat(A, ")/([a-z0-9-]+)"), "gi"),
                M = function(e, t) {
                    return Array(t).fill(void 0).map((function() {
                        return "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")
                    })).join("-?")
                },
                F = [M(4, 4), M(4, 6), M(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
                P = new RegExp("^(".concat("WUMP-?", ")?(").concat(F, ")$")),
                D = function(e) {
                    return null != e && i.$.getCurrentConfig({
                        location: "isCustomGiftEnabled"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                };

            function Z(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
            }

            function U(e) {
                var t = h(e.split(":"), 3),
                    n = t[0],
                    r = t[1],
                    o = t[2];
                return {
                    skuId: n,
                    subscriptionPlanId: "" === r ? null : r,
                    giftStyle: "" !== o && null != o ? Number.parseInt(o) : void 0
                }
            }

            function L(e) {
                return e.replace(/[^A-Za-z0-9]/g, "")
            }
            var G = function(e) {
                    return (null == e ? void 0 : e.type) === O.uaV.CUSTOM_GIFT && 1 === (null == e ? void 0 : e.embeds.length) && (null == e ? void 0 : e.embeds[0].type) === O.hBH.GIFT
                },
                B = function(e) {
                    if (null == e) return [];
                    for (var t, n = new Set; null != (t = b.exec(e)) && n.size < 3;) n.add(L(t[1]));
                    for (; null != (t = w.exec(e)) && n.size < 3;) n.add(L(t[1]));
                    return Array.from(n)
                };

            function k() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
                if (null != n) e = "/".concat(t);
                else {
                    n = location.host;
                    e = "/gifts/".concat(t)
                }
                return "".concat(location.protocol, "//").concat(n).concat(e)
            }

            function j(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                Y = y((function(e) {
                    var t, n, r, u, i, a = arguments;
                    return v(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                t = a.length > 1 && void 0 !== a[1] && a[1], n = a.length > 2 && void 0 !== a[2] && a[2];
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, (0, p.Kb)({
                                    url: O.ANM.GIFT_CODE_RESOLVE(e),
                                    query: {
                                        with_application: t,
                                        with_subscription_plan: n
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                r = c.sent();
                                u = r.body;
                                l.default.track(O.rMx.GIFT_CODE_RESOLVED, {
                                    resolved: !0,
                                    gift_code: u.code,
                                    gift_code_max_uses: u.max_uses,
                                    sku_id: u.store_listing.sku.id,
                                    sku_type: u.store_listing.sku.type,
                                    application_id: u.store_listing.sku.application_id,
                                    store_title: u.store_listing.sku.name
                                }, {
                                    flush: !0
                                });
                                return [2, u];
                            case 3:
                                i = c.sent();
                                l.default.track(O.rMx.GIFT_CODE_RESOLVED, {
                                    resolved: !1,
                                    gift_code: e
                                });
                                throw new o.Z(i);
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return Y.apply(this, arguments)
            }

            function V(e, t) {
                l.default.track(O.rMx.GIFT_CODE_COPIED, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            N(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(t, !1, !1), e.analyticsData))
            }

            function W(e, t, n, r, o, u, i) {
                return null != n || !r && !o && null != e ? O.wZ8.ERROR : !i || u || r || o ? r && (t.isSubscription || null != e) ? O.wZ8.SUCCESS : O.wZ8.CONFIRM : O.wZ8.OPEN
            }

            function H(e, t, n) {
                switch (e) {
                    case O.wZ8.ERROR:
                        return d.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
                    case O.wZ8.SUCCESS:
                        return t.isSubscription ? d.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                            skuName: n.name
                        }) : d.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
                    case O.wZ8.CONFIRM:
                    default:
                        return t.isSubscription ? d.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                            skuName: n.name
                        }) : d.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
                }
            }

            function x(e, t, n) {
                switch (e) {
                    case O.wZ8.ERROR:
                        return d.Z.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
                    case O.wZ8.SUCCESS:
                        return __OVERLAY__ ? d.Z.Messages.GIFT_CONFIRMATION_BUTTON_NOICE : t.isSubscription ? d.Z.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS : d.Z.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
                    case O.wZ8.OPEN:
                        return d.Z.Messages.GIFT_OPEN_PROMPT;
                    case O.wZ8.CONFIRM:
                    default:
                        return null != n && n ? d.Z.Messages.GIFT_CODE_AUTH_ACCEPT : null != t.giftStyle ? t.isClaimed ? d.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : d.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE : t.isSubscription ? d.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : d.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
                }
            }

            function z(e) {
                var t = e.step,
                    n = e.sku,
                    r = e.libraryApplication,
                    o = e.error,
                    u = e.accepted,
                    i = e.accepting,
                    a = e.onGoToLibrary,
                    c = e.subscriptionPlan,
                    l = void 0 === c ? null : c;
                switch (t) {
                    case O.wZ8.ERROR:
                        return Q(r, o, u, i, a);
                    case O.wZ8.SUCCESS:
                        if (null != l) {
                            if (null != l.premiumSubscriptionType) {
                                if (l.premiumSubscriptionType === I.p9.TIER_2) {
                                    return (l.interval === I.rV.MONTH ? d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_2_MONTHLY : d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_2_YEARLY).format({
                                        intervalCount: l.intervalCount
                                    })
                                }
                                return (l.interval === I.rV.MONTH ? d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY : d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY).format({
                                    intervalCount: l.intervalCount
                                })
                            }
                            return (l.interval === I.rV.MONTH ? d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC_SUBSCRIPTION_MONTHLY : d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC_SUBSCRIPTION_YEARLY).format({
                                skuName: n.name,
                                intervalCount: l.intervalCount
                            })
                        }
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                            skuName: n.name
                        });
                    case O.wZ8.CONFIRM:
                    default:
                        if (null != l) {
                            return (l.interval === I.rV.MONTH ? d.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : d.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                                skuName: n.name,
                                intervalCount: l.intervalCount
                            })
                        }
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                            skuName: n.name
                        })
                }
            }

            function Q(e, t, n, r, o) {
                var u = n || r ? void 0 : e,
                    i = d.Z.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
                        onGoToLibrary: o
                    });
                if (null != u) return i;
                if (null == t) return null;
                switch (t.code) {
                    case O.evJ.INVALID_GIFT_SELF_REDEMPTION:
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                    case O.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                    case O.evJ.INVALID_GIFT_REDEMPTION_OWNED:
                        return i;
                    case O.evJ.UNKNOWN_GIFT_CODE:
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                    case O.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                        var a = c.default.getCurrentUser();
                        return d.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                            planName: (0, f.M5)(a, I.p9.TIER_2) ? d.Z.Messages.PREMIUM_TIER_2 : d.Z.Messages.PREMIUM_TIER_1
                        });
                    case O.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                    case O.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                    case O.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                        return d.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                    case O.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                        return d.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                    default:
                        return d.Z.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
                }
            }

            function K(e, t, n) {
                var r = t.applicationId,
                    o = null != e.entitlementBranches && e.entitlementBranches.length > 0 ? e.entitlementBranches : [r],
                    u = o.map((function(e) {
                        return n.getLibraryApplication(r, e, !0)
                    })).filter(s.lm);
                return u.length === o.length ? u[0] : null
            }

            function J(e) {
                var t = e.trim().split("/").pop().match(P);
                if (null == t) return null;
                var n = h(t, 3),
                    r = (n[0], n[1], n[2]);
                return null == r ? null : r.replace(new RegExp("-", "g"), "")
            }
            var X = function(e, t) {
                return (0, r.e7)([a.Z], (function() {
                    if (null == e || !t) return null;
                    var n = a.Z.getGiftCode(e);
                    return null == n || "" === n ? null : n
                }))
            }
        },
        968696: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = {
                escape: function(e) {
                    return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                }
            }
        },
        534681: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZI: () => A,
                AR: () => w,
                _W: () => M,
                Kb: () => P,
                hX: () => Z,
                XK: () => U,
                uF: () => L,
                Gg: () => B,
                Ww: () => j
            });
            var r = n(496486),
                o = n.n(r),
                u = n(730381),
                i = n.n(u),
                a = n(229392),
                c = n.n(a),
                l = n(289283),
                s = n(281110),
                f = n(673679),
                _ = n(874049),
                p = n(615796),
                O = n(711531),
                I = n(536392),
                d = n(245305),
                E = n(661123),
                T = n(72580),
                y = n(120415),
                N = n(2590),
                h = n(473708),
                S = n(734155);

            function g(e, t, n, r, o, u, i) {
                try {
                    var a = e[u](i),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function i(e) {
                            g(u, r, o, i, a, "next", e)
                        }

                        function a(e) {
                            g(u, r, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        R(e, t, n[t])
                    }))
                }
                return e
            }
            var C = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function a(u) {
                    return function(a) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, a])
                    }
                }
            };
            c().shim();
            var b = !l.tq && !l.Em && -1 !== (0, d.vu)();

            function A(e, t) {
                var n = t.analyticsSource,
                    r = t.analyticsProperties,
                    o = t.storeListingId,
                    u = t.slug,
                    i = t.channelId,
                    a = t.guildId,
                    c = {
                        state: {
                            analyticsSource: n,
                            analyticsProperties: r
                        },
                        search: null != o ? "?store_listing_id=".concat(o) : ""
                    };
                return m({
                    pathname: null != i && null != a ? N.Z5c.CHANNEL(a, i, e) : N.Z5c.APPLICATION_STORE_LISTING_SKU(e, u)
                }, c)
            }

            function w(e, t) {
                var n = t.analyticsSource,
                    r = t.analyticsProperties,
                    o = t.slug,
                    u = {
                        state: {
                            analyticsSource: n,
                            analyticsProperties: r
                        }
                    };
                return m({
                    pathname: N.Z5c.APPLICATION_STORE_LISTING_APPLICATION(e, o)
                }, u)
            }

            function M(e, t, n, r) {
                var o, u, i = window.GLOBAL_ENV.CDN_HOST;
                if (null == r) switch (t.mimeType || t.mime_type) {
                    case "video/quicktime":
                    case "video/mp4":
                        r = "mp4";
                        break;
                    case "image/gif":
                        r = "gif";
                        break;
                    default:
                        r = "webp"
                }
                "webp" !== r || b || (r = "png");
                var a = null !== (u = S.env.API_PROTOCOL) && void 0 !== u ? u : location.protocol;
                o = null != i ? "".concat(a, "//").concat(i, "/app-assets/").concat(e, "/store/").concat(t.id, ".").concat(r) : "".concat(a).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(N.ANM.STORE_ASSET(e, t.id, r));
                null != n && (o += "?size=".concat((0, _.oO)(n * (0, _.x_)())));
                return o
            }

            function F() {
                return new Promise((e = v((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!I.Z.hasFetchedSubscriptions()) return [3, 1];
                                e();
                                return [3, 4];
                            case 1:
                                if (!p.Z.isSubscriptionFetching) return [3, 2];
                                (t = function() {
                                    p.Z.isSubscriptionFetching ? setTimeout(t, 50) : e()
                                })();
                                return [3, 4];
                            case 2:
                                return [4, (0, f.jg)()];
                            case 3:
                                n.sent();
                                e();
                                n.label = 4;
                            case 4:
                                return [2]
                        }
                    }))
                })), function(t) {
                    return e.apply(this, arguments)
                }));
                var e
            }

            function P(e) {
                return D.apply(this, arguments)
            }

            function D() {
                D = v((function(e) {
                    var t, n, r, o, u, i, a, c, l, _ = arguments;
                    return C(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                if (!(!(_.length > 1 && void 0 !== _[1]) || _[1])) return [3, 2];
                                n = [];
                                O.Z.hasFetchedPaymentSources || n.push(null !== (r = p.Z.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, f.tZ)());
                                p.Z.ipCountryCodeLoaded || n.push((0, f.GE)());
                                n.push(F());
                                return [4, Promise.allSettled(n)];
                            case 1:
                                d.sent();
                                d.label = 2;
                            case 2:
                                o = O.Z.getDefaultBillingCountryCode();
                                i = null !== (u = null === (t = O.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : null;
                                null != (a = I.Z.getPremiumTypeSubscription()) && null != a.paymentSourceId && (i = a.paymentSourceId);
                                null === o && (o = null !== (c = p.Z.ipCountryCode) && void 0 !== c ? c : null);
                                l = {};
                                null != o && (l.country_code = o);
                                null != i && (l.payment_source_id = i);
                                if (null != o || null != i) {
                                    "string" == typeof e && (e = {
                                        url: e,
                                        oldFormErrors: !0
                                    });
                                    if ("string" == typeof e.query) throw new Error("string query not supported");
                                    e.query = m({}, l, e.query)
                                }
                                return [2, s.ZP.get(e)]
                        }
                    }))
                }));
                return D.apply(this, arguments)
            }

            function Z(e) {
                switch (e) {
                    case y.AB.WINDOWS:
                        return N.TaA.WINDOWS;
                    case y.AB.OSX:
                        return N.TaA.MACOS;
                    case y.AB.LINUX:
                        return N.TaA.LINUX;
                    default:
                        return null
                }
            }

            function U(e) {
                switch (e) {
                    case N.TaA.WINDOWS:
                        return h.Z.Messages.WINDOWS;
                    case N.TaA.MACOS:
                        return h.Z.Messages.MACOS;
                    case N.TaA.LINUX:
                        return h.Z.Messages.LINUX
                }
                throw new Error("Unknown operating system value: ".concat(e))
            }

            function L(e, t, n) {
                var r = t.getGame(e);
                return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId)
            }
            var G = [];

            function B(e, t, n, r, u) {
                var i = t.get(e);
                if (null == i) return G;
                var a = i.applicationId,
                    c = [],
                    l = [],
                    s = function(e, t, n) {
                        var r, o = null !== (r = n.getNowPlaying(e)) && void 0 !== r ? r : {},
                            u = Object.keys(o).map((function(e) {
                                var n = t.getUser(e);
                                return null == n ? null : {
                                    user: n,
                                    startTime: o[n.id].startedPlaying
                                }
                            })).filter(T.lm).sort((function(e, t) {
                                return t.startTime - e.startTime
                            }));
                        return 0 === u.length ? null : {
                            type: N.AzA.NOW_PLAYING,
                            userInfo: u
                        }
                    }(a, n, r);
                if (null != s) {
                    c.push(s);
                    l = s.userInfo.map((function(e) {
                        return e.user.id
                    }))
                }
                var f = u.getStatisticsForApplication(a);
                if (null != f) {
                    var _ = f.map((function(e) {
                        return e.user_id
                    }));
                    if (o().difference(_, l).length > 0) {
                        var p = function(e, t, n) {
                            var r = n.getStatisticsForApplication(e);
                            if (null == r) return null;
                            var o = r.map((function(e) {
                                var n = t.getUser(e.user_id);
                                return null == n ? null : {
                                    user: n,
                                    endTime: Date.parse(e.last_played_at)
                                }
                            })).filter(T.lm).sort((function(e, t) {
                                return t.endTime - e.endTime
                            }));
                            return 0 === o.length ? null : {
                                type: N.AzA.EVER_PLAYED,
                                userInfo: o
                            }
                        }(a, n, u);
                        null != p && c.push(p)
                    }
                }
                return c
            }
            var k = [];

            function j(e, t, n) {
                var r = t.get(e),
                    o = n.getForSKU(e);
                if (null == r || null == o) return k;
                var u = [];
                (0, E.yE)(r.flags, N.l4R.HAS_FREE_PREMIUM_CONTENT) && u.push({
                    type: N.AzA.HAS_FREE_PREMIUM_CONTENT
                });
                var a = r.releaseDate;
                null != a && i()().diff(a, "months") < 3 && (r.accessType === N.kGb.EARLY_ACCESS ? u.push({
                    type: N.AzA.EARLY_ACCESS,
                    releaseDate: a
                }) : u.push({
                    type: N.AzA.RECENT_RELEASE_DATE,
                    releaseDate: a
                }));
                null != o.flavorText && u.push({
                    type: N.AzA.FLAVOR_TEXT,
                    flavorText: o.flavorText
                });
                return u
            }
        },
        824654: () => {}
    }
]);