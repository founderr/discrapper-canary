(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18478, 30689], {
        577660: (e, t, n) => {
            e.exports = n.p + "5e7d050aa74c846659708b2d59c72a05.svg"
        },
        598679: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r,
                Z: () => d
            });
            var r, o, i = n(785893),
                a = n(667294),
                u = n(294184),
                c = n.n(u),
                s = n(273465),
                l = n.n(s);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.PREMIUM = "premium";
                e.LIMITED = "limited"
            }(r || (r = {}));
            var p = (f(o = {}, r.PREMIUM, {
                border: l().premiumFeatureBorder,
                background: l().premiumBackground
            }), f(o, r.LIMITED, {
                border: l().limitedFeatureBorder,
                background: l().limitedBackground
            }), o);
            const d = a.forwardRef((function(e, t) {
                var n = e.children,
                    o = e.type,
                    a = void 0 === o ? r.PREMIUM : o,
                    u = e.isShown,
                    s = e.hasBackground,
                    f = void 0 !== s && s,
                    d = e.className,
                    y = e.backgroundClassName;
                if (!u) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                var m = p[a],
                    h = m.border,
                    b = m.background;
                return (0, i.jsx)("div", {
                    ref: t,
                    className: c()(h, d),
                    children: (0, i.jsx)("div", {
                        className: c()(f ? b : l().background, y),
                        children: n
                    })
                })
            }))
        },
        543976: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(730381),
                o = n.n(r),
                i = n(169376),
                a = n(661123),
                u = n(800336),
                c = n(203600);

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var m = Object.freeze({
                    PAYMENT_SOURCE_REQUIRED: 1,
                    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                    NOT_SELF_REDEEMABLE: 4
                }),
                h = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && p(e, t)
                    }(n, e);
                    var t = y(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).userId = e.userId;
                        r.code = e.code;
                        r.skuId = e.skuId;
                        r.uses = e.uses;
                        r.maxUses = e.maxUses;
                        r.expiresAt = e.expiresAt;
                        r.redeemed = e.redeemed;
                        r.storeListingId = e.storeListingId;
                        r.subscriptionPlanId = e.subscriptionPlanId;
                        r.subscriptionPlan = e.subscriptionPlan;
                        r.revoked = e.revoked;
                        r.entitlementBranches = e.entitlementBranches;
                        r.flags = e.flags;
                        r.subscriptionTrial = e.subscriptionTrial;
                        r.promotion = e.promotion;
                        r.giftStyle = e.giftStyle;
                        return r
                    }
                    var r = n.prototype;
                    r.isExpired = function() {
                        var e = this.expiresAt;
                        return null != e && o()().isAfter(e)
                    };
                    r.toString = function() {
                        return this.code
                    };
                    n.createFromServer = function(e) {
                        return new n({
                            userId: null != e.user ? e.user.id : null,
                            code: e.code,
                            skuId: e.sku_id,
                            uses: e.uses,
                            maxUses: e.max_uses,
                            storeListingId: null != e.store_listing ? e.store_listing.id : null,
                            expiresAt: null != e.expires_at ? o()(e.expires_at) : null,
                            redeemed: e.redeemed,
                            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                            subscriptionPlan: null != e.subscription_plan ? u.ZP.createFromServer(e.subscription_plan) : null,
                            revoked: !1,
                            entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                            flags: null != e.flags ? e.flags : 0,
                            giftStyle: e.gift_style,
                            subscriptionTrial: null != e.subscription_trial ? {
                                id: e.subscription_trial.id,
                                interval: e.subscription_trial.interval,
                                intervalCount: e.subscription_trial.interval_count,
                                skuId: e.subscription_trial.sku_id
                            } : null,
                            promotion: null != e.promotion ? {
                                id: e.promotion.id,
                                startDate: e.promotion.start_date,
                                endDate: e.promotion.end_date,
                                inboundHeaderText: e.promotion.inbound_header_text,
                                inboundBodyText: e.promotion.inbound_body_text,
                                inboundHelpCenterLink: e.promotion.inbound_help_center_link
                            } : null
                        })
                    };
                    ! function(e, t, n) {
                        t && s(e.prototype, t);
                        n && s(e, n)
                    }(n, [{
                        key: "hasMultipleCopies",
                        get: function() {
                            return this.maxUses > 1
                        }
                    }, {
                        key: "isClaimed",
                        get: function() {
                            return this.uses >= this.maxUses
                        }
                    }, {
                        key: "remainingUses",
                        get: function() {
                            return this.maxUses - this.uses
                        }
                    }, {
                        key: "isSubscription",
                        get: function() {
                            return null != this.subscriptionPlanId
                        }
                    }, {
                        key: "premiumSubscriptionType",
                        get: function() {
                            return this.isSubscription && c.y7[this.skuId] || null
                        }
                    }, {
                        key: "isSelfRedeemable",
                        get: function() {
                            return !(0, a.yE)(this.flags, m.NOT_SELF_REDEEMABLE)
                        }
                    }, {
                        key: "isExistingPremiumSubscriptionDisallowed",
                        get: function() {
                            return (0, a.yE)(this.flags, m.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                        }
                    }, {
                        key: "analyticsData",
                        get: function() {
                            return {
                                gift_code: this.code,
                                gift_code_max_uses: this.maxUses
                            }
                        }
                    }]);
                    return n
                }(i.Z)
        },
        630689: (e, t, n) => {
            "use strict";
            n.d(t, {
                Db: () => Z,
                HC: () => x,
                NQ: () => R,
                fe: () => H
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(248088),
                c = n(853158),
                s = n(311865),
                l = n(369689),
                f = n.n(l);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function b(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && S(e, t)
            }

            function O(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var _, I, P = function(e, t) {
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
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
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
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(_ || (_ = {}));
            var D, w, j = (m(I = {}, _.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), m(I, _.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), m(I, _.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), m(I, _.FINISH, {
                    BEG: 669,
                    END: 870
                }), m(I, _.IDLE, {
                    BEG: 871,
                    END: 878
                }), I),
                R = function(e) {
                    b(o, e);
                    var t = v(o);

                    function o() {
                        y(this, o);
                        return t.apply(this, arguments)
                    }
                    var i = o.prototype;
                    i.importDefault = function() {
                        return n.e(27608).then(n.t.bind(n, 869059, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.nextScene,
                            o = e.onScenePlay,
                            i = e.onSceneComplete,
                            u = e.pause,
                            c = e.pauseWhileUnfocused;
                        return (0, r.jsx)(s.Z, {
                            className: a()(f().sequencedAnimation, t),
                            importData: this.importDefault,
                            nextScene: u ? _.IDLE : n,
                            sceneSegments: j,
                            onScenePlay: o,
                            onSceneComplete: i,
                            pauseWhileUnfocused: c,
                            pause: u
                        })
                    };
                    o.getNextScene = function(e) {
                        switch (e) {
                            case o.Scenes.SPEED_START:
                                return o.Scenes.SPEED_LOOP;
                            case o.Scenes.FINISH:
                                return o.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return o
                }(o.PureComponent);
            R.Scenes = _;
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(D || (D = {}));
            var A, T, N = (m(w = {}, D.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), m(w, D.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), m(w, D.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), m(w, D.FINISH, {
                    BEG: 669,
                    END: 870
                }), m(w, D.IDLE, {
                    BEG: 871,
                    END: 878
                }), w),
                x = function(e) {
                    b(o, e);
                    var t = v(o);

                    function o() {
                        y(this, o);
                        return t.apply(this, arguments)
                    }
                    var i = o.prototype;
                    i.importDefault = function() {
                        return n.e(64849).then(n.t.bind(n, 280380, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.nextScene,
                            o = e.onScenePlay,
                            i = e.onSceneComplete,
                            u = e.pause,
                            c = e.pauseWhileUnfocused;
                        return (0, r.jsx)(s.Z, {
                            className: a()(f().sequencedAnimation, t),
                            importData: this.importDefault,
                            nextScene: u ? D.IDLE : n,
                            sceneSegments: N,
                            onScenePlay: o,
                            onSceneComplete: i,
                            pauseWhileUnfocused: c,
                            pause: u
                        })
                    };
                    o.getNextScene = function(e) {
                        switch (e) {
                            case o.Scenes.SPEED_START:
                                return o.Scenes.SPEED_LOOP;
                            case o.Scenes.FINISH:
                                return o.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return o
                }(o.PureComponent);
            x.Scenes = D;
            ! function(e) {
                e.IDLE_ENTRY = "idle_entry";
                e.IDLE_LOOP = "idle_loop";
                e.BOOST_START = "boost_start";
                e.BOOST_LOOP = "boost_loop";
                e.BOOST_END = "boost_end";
                e.VICTORY = "victory";
                e.ERROR = "error"
            }(A || (A = {}));
            var L, C, B = (m(T = {}, A.IDLE_ENTRY, {
                    BEG: 0,
                    END: 50
                }), m(T, A.IDLE_LOOP, {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                }), m(T, A.BOOST_START, {
                    BEG: 230,
                    END: 275
                }), m(T, A.BOOST_LOOP, {
                    BEG: 275,
                    END: 290
                }), m(T, A.BOOST_END, {
                    BEG: 386,
                    END: 455
                }), m(T, A.VICTORY, {
                    BEG: 470,
                    END: 525
                }), m(T, A.ERROR, {
                    BEG: 290,
                    END: 375
                }), T),
                k = function(e) {
                    b(n, e);
                    var t = v(n);

                    function n() {
                        y(this, n);
                        return t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    o.getStyle = function(e) {
                        var t = this.props.animation;
                        return {
                            transform: [{
                                translateX: t.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                                })
                            }, {
                                translateY: t.y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["100%", "0%"]
                                })
                            }]
                        }
                    };
                    o.render = function() {
                        var e = this.props.className;
                        return (0, r.jsxs)("div", {
                            className: f().panningAnimation,
                            children: [(0, r.jsx)(c.Z.div, {
                                className: e,
                                style: this.getStyle(!1)
                            }), (0, r.jsx)(c.Z.div, {
                                className: e,
                                style: this.getStyle(!0)
                            })]
                        })
                    };
                    return n
                }(o.PureComponent),
                M = Object.freeze({
                    IDLE_ENTRY: {
                        toValue: 1,
                        duration: 1500
                    },
                    IDLE_LOOP: {
                        toValue: 1,
                        duration: 6e3,
                        easing: c.Z.Easing.linear
                    },
                    BOOST_START: {
                        toValue: 0,
                        duration: 2e3,
                        delay: 500
                    },
                    ERROR: {
                        toValue: 1,
                        duration: 1500,
                        delay: 1e3
                    }
                }),
                U = 1.2,
                Z = function(e) {
                    b(o, e);
                    var t = v(o);

                    function o() {
                        y(this, o);
                        var e;
                        (e = t.apply(this, arguments)).backgroundAnimation = new c.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.foregroundAnimation = new c.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.didUnmount = !1;
                        e.animateIdleLoopBackground = function() {
                            if (!e.didUnmount) {
                                e.backgroundAnimation.x.setValue(0);
                                c.Z.timing(e.backgroundAnimation.x, {
                                    toValue: M.IDLE_LOOP.toValue,
                                    duration: M.IDLE_LOOP.duration * U,
                                    easing: c.Z.Easing.linear
                                }).start(e.animateIdleLoopBackground)
                            }
                        };
                        e.animateIdleLoopForeground = function() {
                            if (!e.didUnmount) {
                                e.foregroundAnimation.x.setValue(0);
                                c.Z.timing(e.foregroundAnimation.x, {
                                    toValue: M.IDLE_LOOP.toValue,
                                    duration: M.IDLE_LOOP.duration,
                                    easing: M.IDLE_LOOP.easing
                                }).start(e.animateIdleLoopForeground)
                            }
                        };
                        e.handleScenePlay = function(t) {
                            switch (t) {
                                case A.IDLE_ENTRY:
                                    e.animateIdleEntry();
                                    e.animateIdleLoop();
                                    break;
                                case A.ERROR:
                                    e.animateError();
                                    break;
                                case A.BOOST_START:
                                    e.animateBoostStart()
                            }
                            var n = e.props.onScenePlay;
                            null != n && n(t)
                        };
                        return e
                    }
                    var i = o.prototype;
                    i.componentWillUnmount = function() {
                        this.didUnmount = !0
                    };
                    i.importData = function() {
                        return n.e(56576).then(n.t.bind(n, 162264, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    i.animateEntry = function(e) {
                        c.Z.parallel([c.Z.timing(this.foregroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration,
                            delay: e.delay || 0
                        }), c.Z.timing(this.backgroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration * U,
                            delay: e.delay || 0
                        })]).start()
                    };
                    i.animateIdleEntry = function() {
                        this.animateEntry(M.IDLE_ENTRY)
                    };
                    i.animateError = function() {
                        this.animateEntry(M.ERROR)
                    };
                    i.animateIdleLoop = function() {
                        this.animateIdleLoopBackground();
                        this.animateIdleLoopForeground()
                    };
                    i.animateBoostStart = function() {
                        c.Z.parallel([c.Z.timing(this.foregroundAnimation.y, {
                            toValue: M.BOOST_START.toValue,
                            duration: M.BOOST_START.duration,
                            delay: M.BOOST_START.delay
                        }), c.Z.timing(this.backgroundAnimation.y, {
                            toValue: M.BOOST_START.toValue,
                            duration: M.BOOST_START.duration * U,
                            delay: M.BOOST_START.delay
                        })]).start()
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.nextScene,
                            o = e.pause,
                            i = e.onSceneComplete;
                        return (0, r.jsxs)("div", {
                            className: a()(f().tier2Animation, t),
                            children: [o ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsxs)("div", {
                                    className: f().panningAnimation,
                                    children: [(0, r.jsx)("div", {
                                        className: f().tier2Background
                                    }), (0, r.jsx)("div", {
                                        className: f().tier2Foreground
                                    })]
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(k, {
                                    className: f().tier2Background,
                                    animation: this.backgroundAnimation
                                }), (0, r.jsx)(k, {
                                    className: f().tier2Foreground,
                                    animation: this.foregroundAnimation
                                })]
                            }), (0, r.jsx)(s.Z, {
                                className: f().sequencedAnimation,
                                importData: this.importData,
                                nextScene: o ? A.IDLE_LOOP : n,
                                sceneSegments: B,
                                onScenePlay: this.handleScenePlay,
                                onSceneComplete: i,
                                pauseWhileUnfocused: !1,
                                pause: o
                            })]
                        })
                    };
                    o.getNextScene = function(e) {
                        switch (e) {
                            case o.Scenes.IDLE_ENTRY:
                                return o.Scenes.IDLE_LOOP;
                            case o.Scenes.BOOST_START:
                                return o.Scenes.BOOST_LOOP;
                            case o.Scenes.BOOST_END:
                                return o.Scenes.VICTORY;
                            case o.Scenes.VICTORY:
                                return o.Scenes.IDLE_ENTRY;
                            case o.Scenes.ERROR:
                                return o.Scenes.IDLE_LOOP;
                            default:
                                return e
                        }
                    };
                    return o
                }(o.PureComponent);
            Z.Scenes = A;
            ! function(e) {
                e.ENTRY = "entry";
                e.IDLE = "idle";
                e.STARS = "stars";
                e.ERROR = "error";
                e.SUCCESS = "success"
            }(L || (L = {}));
            var F = (m(C = {}, L.ENTRY, {
                    BEG: 0,
                    END: 180
                }), m(C, L.IDLE, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), m(C, L.STARS, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), m(C, L.ERROR, {
                    BEG: 360,
                    END: 540
                }), m(C, L.SUCCESS, {
                    BEG: 540,
                    END: 778
                }), C),
                G = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                V = [{
                    left: 29,
                    top: 100,
                    color: G.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: G.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: G.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: G.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: G.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: G.PINK
                }],
                Y = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: c.Z.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: c.Z.Easing.bezier(0, -.01, .99, 0)
                });

            function W(e) {
                var t = e.animate,
                    n = E(o.useState(0), 2),
                    i = n[0],
                    a = n[1],
                    c = (0, u.useSprings)(V.length, V.map((function(e, n) {
                        var r, o, u = n > 0 ? Y.DELAY_STAGGER * n + Math.random() * (Y.DELAY_MAX - Y.DELAY_MIN) + Y.DELAY_MIN : 0,
                            c = Math.random() * (Y.SIZE_MAX - Y.SIZE_MIN) + Y.SIZE_MIN;
                        return {
                            from: {
                                scale: Y.SCALE_INITIAL,
                                rotate: Y.ROTATE_INITIAL,
                                top: e.top,
                                left: e.left,
                                width: c,
                                height: c
                            },
                            to: (o = (r = function(e) {
                                return P(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t ? [4, e({
                                                scale: Y.SCALE_MIDDLE,
                                                rotate: Y.ROTATE_MIDDLE,
                                                delay: u,
                                                config: {
                                                    duration: Y.DURATION_MIDDLE,
                                                    easing: Y.EASING_MIDDLE
                                                }
                                            })] : [3, 4];
                                        case 1:
                                            r.sent();
                                            return [4, e({
                                                scale: Y.SCALE_END,
                                                rotate: Y.ROTATE_END,
                                                config: {
                                                    duration: Y.DURATION_END,
                                                    easing: Y.EASING_END
                                                }
                                            })];
                                        case 2:
                                            r.sent();
                                            return [4, e({
                                                scale: Y.SCALE_INITIAL,
                                                rotate: Y.ROTATE_INITIAL,
                                                immediate: !0
                                            })];
                                        case 3:
                                            r.sent();
                                            n === V.length - 1 && a(i + 1);
                                            return [3, 6];
                                        case 4:
                                            return [4, e({
                                                scale: Y.SCALE_INITIAL,
                                                rotate: Y.ROTATE_INITIAL
                                            })];
                                        case 5:
                                            r.sent();
                                            r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    t = arguments;
                                return new Promise((function(n, o) {
                                    var i = r.apply(e, t);

                                    function a(e) {
                                        d(i, n, o, a, u, "next", e)
                                    }

                                    function u(e) {
                                        d(i, n, o, a, u, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            }), function(e) {
                                return o.apply(this, arguments)
                            })
                        }
                    })));
                return (0, r.jsx)(r.Fragment, {
                    children: c.map((function(e, t) {
                        var n = V[t];
                        return (0, r.jsx)(u.animated.svg, {
                            style: e,
                            className: f().guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, r.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    }))
                })
            }
            var H = function(e) {
                b(o, e);
                var t = v(o);

                function o() {
                    y(this, o);
                    return t.apply(this, arguments)
                }
                var i = o.prototype;
                i.importData = function() {
                    return n.e(85789).then(n.t.bind(n, 748589, 23)).then((function(e) {
                        return e.default
                    }))
                };
                i.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.nextScene,
                        o = e.pause,
                        i = e.onScenePlay,
                        u = e.onSceneComplete,
                        c = e.pauseWhileUnfocused;
                    return (0, r.jsxs)("div", {
                        className: a()(f().guildWrapper, t),
                        children: [(0, r.jsx)(s.Z, {
                            className: f().guildBackground,
                            importData: this.importData,
                            nextScene: o ? L.IDLE : n,
                            sceneSegments: F,
                            onScenePlay: i,
                            onSceneComplete: u,
                            pauseWhileUnfocused: c,
                            pause: o
                        }), (0, r.jsx)(W, {
                            animate: !o && n === L.STARS
                        })]
                    })
                };
                o.getNextScene = function(e) {
                    switch (e) {
                        case L.ENTRY:
                        case L.ERROR:
                        case L.SUCCESS:
                            return L.IDLE;
                        default:
                            return e
                    }
                };
                return o
            }(o.PureComponent);
            H.Scenes = L
        },
        311865: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(202351),
                c = n(316878),
                s = n(901654),
                l = n(574075),
                f = n.n(l);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function b(e, t) {
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

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function S(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var I = function(e, t) {
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
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
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
                },
                P = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && E(e, t)
                    }(o, e);
                    var t = _(o);

                    function o() {
                        y(this, o);
                        var e;
                        (e = t.apply(this, arguments)).animationRef = null;
                        e.currentScene = e.props.nextScene;
                        e.isUnmounted = !1;
                        e.handleLoopComplete = function() {
                            var t = e.props,
                                n = t.onSceneComplete,
                                r = t.nextScene;
                            null != n && n(e.currentScene);
                            e.playScene(r)
                        };
                        e.handleComplete = function() {
                            var t = e.props.onSceneComplete;
                            null != t && t(e.currentScene)
                        };
                        e.handleSetRef = function(t) {
                            e.animationRef = t;
                            var n = e.props.animationRef;
                            null != n && n(t)
                        };
                        return e
                    }
                    var i = o.prototype;
                    i.componentDidMount = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, r, o, i, a, u, c, s, l, f, p;
                            return I(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        e = t.props, r = e.importData, o = e.nextScene, i = e.pauseWhileUnfocused, a = e.pause, u = e.isWindowFocused, c = e.useReducedMotion;
                                        return [4, Promise.all([r(), n.e(11248).then(n.t.bind(n, 211248, 23))])];
                                    case 1:
                                        s = g.apply(void 0, [d.sent(), 2]), l = s[0], f = s[1], p = f.default;
                                        if (null == t.animationRef) return [2];
                                        t.animation = p.loadAnimation({
                                            container: t.animationRef,
                                            renderer: "svg",
                                            loop: !0,
                                            autoplay: !0,
                                            animationData: l
                                        });
                                        t.animation.addEventListener("loopComplete", t.handleLoopComplete);
                                        t.animation.addEventListener("complete", t.handleComplete);
                                        t.playScene(o);
                                        (i && !u || a || c) && t.animation.pause();
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = e.apply(t, n);

                                function a(e) {
                                    d(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    d(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        })()
                    };
                    i.componentWillUnmount = function() {
                        this.isUnmounted = !0;
                        if (null != this.animation) {
                            this.animation.destroy();
                            this.animation = void 0
                        }
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.nextScene,
                            r = t.pauseWhileUnfocused,
                            o = t.pause,
                            i = t.isWindowFocused,
                            a = t.useReducedMotion;
                        n !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(n);
                        null != this.animation && (r && !e.isWindowFocused && i && !a && !0 !== o ? this.animation.play() : (a || r && e.isWindowFocused && !i) && this.animation.pause());
                        if (!e.pause && o) {
                            var u;
                            null === (u = this.animation) || void 0 === u || u.pause()
                        } else if (e.pause && !o && !a) {
                            var c;
                            null === (c = this.animation) || void 0 === c || c.play()
                        }
                        if (e.nextScene !== n && o) {
                            var s;
                            this.playScene(n);
                            null === (s = this.animation) || void 0 === s || s.pause()
                        }
                    };
                    i.shouldForcePlayAfter = function() {
                        return !0 === this.props.sceneSegments[this.currentScene].shouldForcePlayAfter
                    };
                    i.playScene = function(e) {
                        if (!this.isUnmounted) {
                            var t = this.props,
                                n = t.onScenePlay,
                                r = t.sceneSegments,
                                o = t.useReducedMotion,
                                i = r[e],
                                a = r[this.currentScene];
                            null == this.animation || e !== this.currentScene && i.BEG === a.BEG && i.END === a.END || this.animation.playSegments([i.BEG, i.END], !0);
                            this.currentScene = e;
                            null != n && n(this.currentScene);
                            if (o) {
                                var u;
                                null === (u = this.animation) || void 0 === u || u.pause()
                            }
                        }
                    };
                    i.render = function() {
                        return (0, r.jsx)("div", {
                            ref: this.handleSetRef,
                            className: a()(this.props.className, f().wrapper)
                        })
                    };
                    return o
                }(o.PureComponent);
            P.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            const D = function(e) {
                var t = e.componentRef,
                    n = O(e, ["componentRef"]),
                    o = (0, u.e7)([s.Z], (function() {
                        return s.Z.isFocused()
                    })),
                    i = (0, u.e7)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    }));
                return (0, r.jsx)(P, b(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            m(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    isWindowFocused: o,
                    useReducedMotion: i,
                    ref: t
                }))
            }
        },
        986979: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function f(e, t) {
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
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    c = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, a.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: c,
                        d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    y = void 0 === d ? "" : d,
                    m = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0,
                    a.Z)(m)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        },
        507965: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(652411);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = [n(577660)],
                f = ["#FFFFFF"],
                p = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function d(e) {
                var t = e.className,
                    n = e.firing,
                    a = void 0 === n || n,
                    d = e.wind,
                    y = void 0 === d ? 2 : d,
                    m = s(o.useState(null), 2),
                    h = m[0],
                    b = m[1],
                    O = s(o.useState(null), 2),
                    S = O[0],
                    E = O[1],
                    g = (0, i.uR)(S, h),
                    v = o.useMemo((function() {
                        return new i.qA({
                            wind: y
                        })
                    }), [y]),
                    _ = o.useCallback((function() {
                        var e = null == S ? void 0 : S.getCanvas();
                        if (null != e) {
                            var t = e.getBoundingClientRect();
                            g.createConfetti(c(function(e) {
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
                            }({}, p), {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: -t.width / 2,
                                        y: -6
                                    },
                                    maxValue: {
                                        x: t.width,
                                        y: -6
                                    }
                                }
                            }))
                        }
                    }), [g, S]);
                o.useEffect((function() {
                    var e = a ? setInterval(_, 16.666666666666668) : null;
                    return function() {
                        return clearInterval(e)
                    }
                }), [a, _]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.O_, {
                        ref: E,
                        className: t,
                        environment: v
                    }), (0, r.jsx)(i.Ji, {
                        ref: b,
                        colors: f,
                        sprites: l,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);