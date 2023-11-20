(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10257"], {
        794252: function(e, t, n) {
            "use strict";
            var i = n("859514"),
                r = n("960049"),
                l = n("124852"),
                a = Array;
            i({
                target: "Array",
                proto: !0
            }, {
                with: function(e, t) {
                    return r(l(this), a, e, t)
                }
            })
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return z
                },
                match: function() {
                    return Q
                }
            }), n("222007"), n("424973"), n("70102"), n("808653");
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                l = "@ts-pattern/anonymous-select-key",
                a = e => !!(e && "object" == typeof e),
                u = e => e && !!e[i],
                s = (e, t, n) => {
                    if (u(e)) {
                        let r = e[i](),
                            {
                                matched: l,
                                selections: a
                            } = r.match(t);
                        return l && a && Object.keys(a).forEach(e => n(e, a[e])), l
                    }
                    if (a(e)) {
                        if (!a(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let i = [],
                                l = [],
                                a = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                u(n) && n[r] ? a.push(n) : a.length ? l.push(n) : i.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < i.length + l.length) return !1;
                                let e = t.slice(0, i.length),
                                    r = 0 === l.length ? [] : t.slice(-l.length),
                                    u = t.slice(i.length, 0 === l.length ? 1 / 0 : -l.length);
                                return i.every((t, i) => s(t, e[i], n)) && l.every((e, t) => s(e, r[t], n)) && (0 === a.length || s(a[0], u, n))
                            }
                            return e.length === t.length && e.every((e, i) => s(e, t[i], n))
                        }
                        return Object.keys(e).every(r => {
                            let l = e[r];
                            return (r in t || u(l) && "optional" === l[i]().matcherType) && s(l, t[r], n)
                        })
                    }
                    return Object.is(t, e)
                },
                o = e => {
                    var t, n, r;
                    return a(e) ? u(e) ? null != (t = null == (n = (r = e[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? t : [] : Array.isArray(e) ? c(e, o) : c(Object.values(e), o) : []
                },
                c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function d(e) {
                return Object.assign(e, {
                    optional: () => f(e),
                    and: t => p(e, t),
                    or: t => I(e, t),
                    select: t => void 0 === t ? C(e) : C(t, e)
                })
            }

            function f(e) {
                return d({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (o(e).forEach(e => i(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: s(e, t, i),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => o(e),
                        matcherType: "optional"
                    })
                })
            }
            let h = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                E = (e, t) => {
                    for (let [n, i] of e.entries())
                        if (!t(i, n)) return !1;
                    return !0
                };

            function p() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => s(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, o),
                        matcherType: "and"
                    })
                })
            }

            function I() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return c(t, o).forEach(e => i(e, void 0)), {
                                matched: t.some(t => s(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, o),
                        matcherType: "or"
                    })
                })
            }

            function _(e) {
                return {
                    [i]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function C() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = "string" == typeof t[0] ? t[0] : void 0,
                    a = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return d({
                    [i]: () => ({
                        match: e => {
                            let t = {
                                [null != r ? r : l]: e
                            };
                            return {
                                matched: void 0 === a || s(a, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : l].concat(void 0 === a ? [] : o(a))
                    })
                })
            }

            function g(e) {
                return "number" == typeof e
            }

            function T(e) {
                return "string" == typeof e
            }

            function S(e) {
                return "bigint" == typeof e
            }
            let m = d(_(function(e) {
                    return !0
                })),
                v = e => Object.assign(d(e), {
                    startsWith: t => v(p(e, _(e => T(e) && e.startsWith(t)))),
                    endsWith: t => v(p(e, _(e => T(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return v(p(e, (n = t, _(e => T(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return v(p(e, (n = t, _(e => T(e) && e.length <= n))))
                    },
                    includes: t => v(p(e, _(e => T(e) && e.includes(t)))),
                    regex: t => v(p(e, _(e => T(e) && !!e.match(t))))
                }),
                N = v(_(T)),
                L = (e, t) => _(n => g(n) && e <= n && t >= n),
                M = e => _(t => g(t) && t < e),
                y = e => _(t => g(t) && t > e),
                A = e => _(t => g(t) && t <= e),
                R = e => _(t => g(t) && t >= e),
                O = () => _(e => g(e) && Number.isInteger(e)),
                U = () => _(e => g(e) && Number.isFinite(e)),
                D = () => _(e => g(e) && e > 0),
                x = () => _(e => g(e) && e < 0),
                b = e => Object.assign(d(e), {
                    between: (t, n) => b(p(e, L(t, n))),
                    lt: t => b(p(e, M(t))),
                    gt: t => b(p(e, y(t))),
                    lte: t => b(p(e, A(t))),
                    gte: t => b(p(e, R(t))),
                    int: () => b(p(e, O())),
                    finite: () => b(p(e, U())),
                    positive: () => b(p(e, D())),
                    negative: () => b(p(e, x()))
                }),
                G = b(_(g)),
                w = (e, t) => _(n => S(n) && e <= n && t >= n),
                P = e => _(t => S(t) && t < e),
                j = e => _(t => S(t) && t > e),
                F = e => _(t => S(t) && t <= e),
                V = e => _(t => S(t) && t >= e),
                B = () => _(e => S(e) && e > 0),
                H = () => _(e => S(e) && e < 0),
                k = e => Object.assign(d(e), {
                    between: (t, n) => k(p(e, w(t, n))),
                    lt: t => k(p(e, P(t))),
                    gt: t => k(p(e, j(t))),
                    lte: t => k(p(e, F(t))),
                    gte: t => k(p(e, V(t))),
                    positive: () => k(p(e, B())),
                    negative: () => k(p(e, H()))
                }),
                Z = k(_(S)),
                Y = d(_(function(e) {
                    return "boolean" == typeof e
                })),
                K = d(_(function(e) {
                    return "symbol" == typeof e
                })),
                W = d(_(function(e) {
                    return null == e
                }));
            var z = {
                __proto__: null,
                matcher: i,
                optional: f,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [r]: !0
                                })
                            }
                        })), {
                            optional: () => e(f(t)),
                            select: n => e(void 0 === n ? C(t) : C(n, t))
                        })
                    }({
                        [i]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    i = {};
                                if (0 === e.length) return o(n).forEach(e => {
                                    i[e] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => s(n, e, r)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d({
                        [i]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let i = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    r = t[0];
                                return {
                                    matched: h(e, e => s(r, e, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d({
                        [i]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [l, a] = t;
                                return {
                                    matched: E(e, (e, t) => {
                                        let n = s(l, t, r),
                                            i = s(a, e, r);
                                        return n && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...o(t[0]), ...o(t[1])]
                        })
                    })
                },
                intersection: p,
                union: I,
                not: function(e) {
                    return d({
                        [i]: () => ({
                            match: t => ({
                                matched: !s(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: _,
                select: C,
                any: m,
                _: m,
                string: N,
                between: L,
                lt: M,
                gt: y,
                lte: A,
                gte: R,
                int: O,
                finite: U,
                positive: D,
                negative: x,
                number: G,
                betweenBigInt: w,
                ltBigInt: P,
                gtBigInt: j,
                lteBigInt: F,
                gteBigInt: V,
                positiveBigInt: B,
                negativeBigInt: H,
                bigint: Z,
                boolean: Y,
                symbol: K,
                nullish: W,
                instanceOf: function(e) {
                    var t;
                    return d(_((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return d(_(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => s(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return s(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let X = {
                matched: !1,
                value: void 0
            };

            function Q(e) {
                return new q(e, X)
            }
            class q {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), e = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        o = {},
                        c = (e, t) => {
                            u = !0, o[e] = t
                        },
                        d = a.some(e => s(e, this.input, c)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: r(u ? l in o ? o[l] : o : this.input, this.input)
                        } : X;
                    return new q(this.input, d)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new q(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : X)
                }
                otherwise(e) {
                    return this.state.matched ? this.state.value : e(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let e;
                    if (this.state.matched) return this.state.value;
                    try {
                        e = JSON.stringify(this.input)
                    } catch (t) {
                        e = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(e))
                }
                returnType() {
                    return this
                }
                constructor(e, t) {
                    this.input = void 0, this.state = void 0, this.input = e, this.state = t
                }
            }
        },
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return r
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return a
                },
                categoryExpandAll: function() {
                    return u
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return a
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var i = n("913144"),
                r = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function s(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: a
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let o = [];

                function c(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let d = s(.5 * l),
                    f = s(i, -d),
                    h = s(i + l, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; f <= h;) f = c(f);
                u(t, n, o)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return s
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("702976");
            var i = n("872717"),
                r = n("819855"),
                l = n("913144"),
                a = n("679428"),
                u = n("282109"),
                s = n("568734"),
                o = n("34676"),
                c = n("49111"),
                d = n("397336"),
                f = n("782340"),
                h = {
                    open(e) {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, o.getCurrentGuildSettings)(e);
                        a.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            r = (0, o.getCurrentGuildSettings)(e),
                            u = (0, o.getManyCurrentChannelSettings)(e, i);
                        a.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, r, n), Object.keys(t.channel_overrides).forEach(i => {
                            let r = u.get(i);
                            (0, o.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], r, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, o.getManyCurrentGuildSettings)(n);
                        a.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, r] = e, a = i.get(n);
                            l.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: r
                            }), (0, o.trackGuildNotificationSettingsUpdate)(n, r, a, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let u = (0, o.getCurrentChannelSettings)(e, t);
                        a.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), r.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, u, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            r = (0, o.getManyCurrentChannelSettings)(e, i);
                        a.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, o.trackChannelNotificationSettingsUpdate)(e, i, t[i], r.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            r = u.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: r & ~i | n
                        })
                    },
                    setAccountFlag(e, t) {
                        let n = u.default.accountNotificationSettings.flags,
                            r = (0, s.setFlag)(n, e, t);
                        i.default.patch({
                            url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: r
                            }
                        })
                    }
                }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: u
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: u = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: u = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.722 18.672a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        className: u
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: u
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: u
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: u
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: u
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: u
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.293-.707l-3-3a1 1 0 1 0-1.414 1.414L14.586 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: u
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: u
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: u
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var a = n("666020");

            function u(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("587974"),
                s = n("315102"),
                o = n("524768"),
                c = n("616674"),
                d = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: l,
                    height: f,
                    className: h,
                    selectable: E = !1,
                    onFocus: p,
                    onBlur: I,
                    onMouseOver: _,
                    onMouseLeave: C,
                    ...g
                } = e, [T, S] = r.useState(!1), m = r.useCallback(() => {
                    S(!0), null == p || p()
                }, [p]), v = r.useCallback(() => {
                    S(!1), null == I || I()
                }, [I]), N = r.useCallback(() => {
                    S(!0), null == _ || _()
                }, [_]), L = r.useCallback(() => {
                    S(!1), null == C || C()
                }, [C]), M = r.useMemo(() => {
                    if (t.type === o.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return s.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: l
                        })
                    }
                    return d
                }, [t, l]);
                return (0, i.jsx)("div", {
                    ...g,
                    className: a(c.wrapper, h, {
                        [c.selectable]: E,
                        [c.selected]: E && n
                    }),
                    onFocus: m,
                    onBlur: v,
                    onMouseOver: N,
                    onMouseLeave: L,
                    children: (0, i.jsx)(u.default, {
                        className: c.mask,
                        mask: E && (n || T) ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
                        width: l,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: l,
                                height: f
                            },
                            src: M
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("83910"),
                u = n("93393"),
                s = n("317041"),
                o = n("749296");
            let c = e => {
                switch (e.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return a.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return u.default;
                    default:
                        return
                }
            };

            function d(e) {
                let {
                    section: t,
                    className: n,
                    width: r,
                    height: a,
                    padding: u,
                    isSelected: s,
                    selectable: d = !1,
                    ...f
                } = e, h = c(t);
                return (0, i.jsx)("div", {
                    className: l(o.wrapper, n, {
                        [o.selectable]: d,
                        [o.selected]: d && s
                    }),
                    style: {
                        width: r,
                        height: a,
                        padding: null != u ? u : 0
                    },
                    children: null != h ? (0, i.jsx)(h, {
                        className: o.icon,
                        width: r,
                        height: a,
                        ...f
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return u
                },
                pxToRem: function() {
                    return s
                },
                getCommandQuery: function() {
                    return o
                }
            });
            var i = n("524768"),
                r = n("991630"),
                l = n("943161"),
                a = n("317041");
            let u = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? l.default : r.default;

            function s(e) {
                return "".concat(e / 16, "rem")
            }

            function o(e, t) {
                let n = t,
                    i = !1,
                    r = t.indexOf(":");
                if (r >= 0) {
                    let e = t.lastIndexOf(" ", r);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, r)
                } else t = t.substring(0, t.length);
                let l = t.split(" ", a.MAX_SUBCOMMAND_LEVEL + 1);
                return l.length > a.MAX_SUBCOMMAND_LEVEL && (i = !0, l.pop()), t = l.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: l,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("850572"),
                a = () => (0, i.jsx)("div", {
                    className: l.loadingWrapper,
                    children: (0, i.jsx)(r.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("267363"),
                u = n("680986"),
                s = n("689275"),
                o = n("755624"),
                c = n("233069"),
                d = n("245997"),
                f = n("660478"),
                h = n("49111"),
                E = n("782340");

            function p(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, r.useStateFromStores)([f.default, d.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== h.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = d.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, c.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let i = new Set(t[e.id].map(e => e.channel.id)),
                                    r = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in r)
                                    if (i.has(e)) {
                                        for (let t in r[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, i.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function r(e) {
                return {
                    textValue: e,
                    richValue: a(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return a
                },
                voidToOptionValue: function() {
                    return u
                }
            }), n("70102");
            let l = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function a(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : l
            }

            function u(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("516555"),
                a = n("65597"),
                u = n("206230"),
                s = n("49111");
            let o = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                c = r.createContext(o);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: h
                } = e, E = (0, l.useConfettiCannon)(n, s), p = (0, a.default)([u.default], () => u.default.useReducedMotion), I = r.useMemo(() => p ? o : {
                    confettiCanvas: n,
                    cannon: E,
                    createConfetti: (e, t) => E.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => E.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, d, E, n, p, h]);
                return (0, i.jsx)(c.Provider, {
                    value: I,
                    children: t
                })
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("923959"),
                u = n("379881"),
                s = n("200008"),
                o = n("498139"),
                c = n("49111"),
                d = n("782340");

            function f(e, t) {
                return e.type === c.ChannelTypes.GROUP_DM ? t ? d.default.Messages.UNFAVORITE_GDM : d.default.Messages.FAVORITE_GDM : e.type === c.ChannelTypes.DM ? t ? d.default.Messages.UNFAVORITE_DM : d.default.Messages.FAVORITE_DM : t ? d.default.Messages.UNFAVORITE_CHANNEL : d.default.Messages.FAVORITE_CHANNEL
            }

            function h(e) {
                var t;
                let n = (0, r.useStateFromStores)([u.default], () => u.default.isFavorite(e.id)),
                    d = function(e) {
                        let t = (0, r.useStateFromStores)([a.default], () => a.default.getChannels(c.FAVORITES))[c.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = o.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
                        if (!n) return null;

                        function u(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, i.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null)
                        }) : (0, i.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null),
                            children: t.map(e => (0, i.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => u(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let h = (t = e, (0, i.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? h : d
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("162771"),
                u = n("49111"),
                s = n("782340");

            function o(e) {
                let t = (0, r.useStateFromStores)([a.default], () => a.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, i.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        },
        976127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestItem: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("16108"),
                u = n("697218"),
                s = n("782340");

            function o(e) {
                let t = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
                    children: [!e.isMessageRequest && (0, i.jsx)(l.MenuItem, {
                        id: "mark-as-message-request",
                        label: s.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                        action: () => (0, a.markAsMessageRequest)(e.id)
                    }), (0, i.jsx)(l.MenuItem, {
                        id: "clear-message-request",
                        label: s.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                        action: () => (0, a.clearMessageRequestState)(e.id)
                    })]
                })
            }
        },
        856030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSafetyWarningsItem: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("277734"),
                u = n("764828"),
                s = n("697218"),
                o = n("782340");

            function c(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                    n = (0, r.useStateFromStores)([u.default], () => u.default.getChannelSafetyWarnings(e.id));
                return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(l.MenuItem, {
                        id: "clear-safety-warnings",
                        label: o.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                        action: () => (0, a.clearChannelSafetyWarnings)(e.id)
                    })
                })
            }
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                canGuildUseRoleIcons: function() {
                    return p
                }
            }), n("781738");
            var i = n("867805"),
                r = n("407063"),
                l = n("315102"),
                a = n("773336"),
                u = n("49111");
            let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, a.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let a = l.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(d).concat(f) : "".concat(o).concat(u.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                E = e => e.startsWith(s) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                p = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(u.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return h
                },
                setPendingBio: function() {
                    return E
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingNickname: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return _
                },
                resetPendingMemberChanges: function() {
                    return C
                },
                resetPendingProfileChanges: function() {
                    return g
                },
                resetAllPending: function() {
                    return T
                },
                clearErrors: function() {
                    return S
                },
                setDisableSubmit: function() {
                    return m
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                a = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function s(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function g() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, a, u, s, o, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var f = n("446674"),
                h = n("913144"),
                E = n("49111");
            let p = E.FormStates.CLOSED,
                I = {},
                _ = !1;

            function C() {
                p = E.FormStates.CLOSED, I = {}, o = null, c = void 0, d = []
            }

            function g() {
                T(), S(), I = {}, p = E.FormStates.OPEN
            }

            function T() {
                i = void 0, u = void 0
            }

            function S() {
                r = void 0, l = void 0, a = void 0, s = void 0
            }
            class m extends f.default.Store {
                getFormState() {
                    return p
                }
                getErrors() {
                    return I
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== a || void 0 !== u || void 0 !== s
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return a
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: a,
                        pendingNickname: u,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return _
                }
            }
            m.displayName = "GuildIdentitySettingsStore";
            var v = new m(h.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, p = E.FormStates.OPEN, I = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: C,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    g(), C()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    p = E.FormStates.SUBMITTING, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (p !== E.FormStates.SUBMITTING) return !1;
                    p = E.FormStates.OPEN, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    p = E.FormStates.OPEN, I = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: T,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: S,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: g,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: g,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    I = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    _ = t
                }
            })
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return h
                }
            });
            var i = n("693566"),
                r = n.n(i),
                l = n("872717"),
                a = n("913144"),
                u = n("851387"),
                s = n("36402"),
                o = n("49111");
            async function c(e) {
                try {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                s.default.shouldFetch(e) && await c(e)
            }
            let f = new r({
                maxAge: 1e4
            });

            function h(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == f.get(i)) {
                    var r, a;
                    return f.set(i, !0), r = e, a = t, l.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(r, a)
                    }).then(e => (u.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {},
                a = {};
            class u extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = a[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var s = new u(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    l[t] = n, a[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, r = l[t];
                    if (null == r) return !1;
                    r[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, r = l[t];
                    if (null == r || null == r[n]) return !1;
                    let a = Object.keys(i).length;
                    r[n] += a
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete a[t.id]
                }
            })
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return a
                },
                addQueued: function() {
                    return u
                },
                setFailed: function() {
                    return s
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("49111");

            function a(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function u(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: l,
                    onSuccess: a,
                    onFailure: u
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: l,
                    onSuccess: a,
                    onFailure: u
                })
            }

            function s(e, t, n) {
                r.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await i.default.get({
                    url: l.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                u = n("798609"),
                s = n("42203"),
                o = n("3765");
            let c = {},
                d = {},
                f = {};

            function h(e) {
                delete c[e];
                let t = f[e];
                null != t && delete d[t], delete f[e]
            }
            class E extends l.default.Store {
                getInteraction(e) {
                    let t = d[e.id];
                    return null != t ? c[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(c)) {
                        let i = f[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === o.InteractionState.FAILED) && (null == c[t] || c[t].state === o.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return r
                }
                getIFrameModalKey() {
                    return i
                }
            }
            E.displayName = "InteractionStore";
            var p = new E(a.default, {
                LOGOUT: function() {
                    c = {}, d = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: a,
                        onFailure: u
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: o.InteractionState.QUEUED,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: a,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r || r.state !== o.InteractionState.QUEUED) return !1;
                    r.state = o.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), h(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: r
                    } = e;
                    if (null == n) return !1;
                    let l = c[n];
                    if (null == l) return !1;
                    null === (t = l.onFailure) || void 0 === t || t.call(l, i, r), l.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? h(n) : c[n] = {
                        ...l,
                        state: o.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: r
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = c[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), h(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === o.InteractionState.FAILED && h(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    r = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, r = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.QUEUED = 0] = "QUEUED", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return _
                },
                executeMessageComponentInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return T
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return S
                },
                canRetryInteractionData: function() {
                    return m
                }
            }), n("222007");
            var i, r, l = n("249654"),
                a = n("872717"),
                u = n("913144"),
                s = n("819689"),
                o = n("798609"),
                c = n("263024"),
                d = n("271938"),
                f = n("274800"),
                h = n("809810"),
                E = n("3765"),
                p = n("606981"),
                I = n("49111");

            function _(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : l.default.extractTimestamp(e) + 9e5
            }
            let C = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: u,
                    applicationId: s,
                    channelId: E,
                    guildId: p,
                    localState: _
                } = e, C = l.default.fromTimestamp(Date.now());
                if (!h.default.canQueueInteraction(n, C)) return;
                await c.default.unarchiveThreadIfNecessary(E), (0, f.addQueued)(C, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: u
                    },
                    onFailure: (e, t) => g(E, e, t)
                }), null != _ && (0, f.queueInteractionComponentState)(n, C, _, u);
                let S = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: C,
                    guild_id: p,
                    channel_id: E,
                    message_flags: i,
                    message_id: n,
                    application_id: s,
                    session_id: d.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: r,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === o.ComponentType.STRING_SELECT || e.type === o.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(_)
                    }
                };
                await a.default.post({
                    url: I.Endpoints.INTERACTIONS,
                    body: S,
                    timeout: 3e3
                }, e => {
                    T(C, E, p, e)
                })
            }, g = (e, t, n) => {
                null == n && null != t && s.default.sendClydeError(e, t)
            }, T = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === I.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, p.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == r ? void 0 : r.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (r = i.body) || void 0 === r ? void 0 : r.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT";
            let S = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    r = e.state === I.MessageStates.SENT && _(e.id) < Date.now();
                let a = e.state === I.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : l.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    s = e.isCommandType();
                if (u && i === E.InteractionState.QUEUED || s && e.state === I.MessageStates.SENDING && null != t) return 0;
                if (u && i === E.InteractionState.CREATED || e.hasFlag(I.MessageFlags.LOADING) && !r) return 1;
                if (null != e.interaction && e.hasFlag(I.MessageFlags.LOADING) && r) return 3;
                else if (null != e.interaction && !e.hasFlag(I.MessageFlags.LOADING) && a) return 3;
                else if (s && e.state === I.MessageStates.SEND_FAILED) return 2
            };

            function m(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return r
                }
            }), n("222007");
            let i = "_errors";

            function r(e) {
                return function e(t, n) {
                    let r = t[i];
                    if (null != r && Array.isArray(r)) return r[0];
                    for (let [r, l] of Object.entries(t))
                        if (r !== i && null != l && "object" == typeof l) return e(l, null != n ? n : r);
                    return null
                }(e, void 0)
            }
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                renderAutomodMessageMarkup: function() {
                    return o
                }
            }), n("222007"), n("781738"), n("355025");
            var i = n("367376"),
                r = n("240873"),
                l = n("49111");
            let a = new Set([l.MessageEmbedTypes.IMAGE, l.MessageEmbedTypes.GIFV]),
                u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
                return function(e, t, n) {
                    var i, l;
                    let {
                        toAST: s = !1,
                        hideSimpleEmbedContent: o = !0,
                        formatInline: f = !1,
                        postProcessor: h
                    } = n, E = !1;
                    let p = e(t.content, !0, (i = t, l = n, {
                        allowLinks: null != i.webhookId || !!l.allowLinks,
                        allowEmojiLinks: null != i.webhookId,
                        channelId: i.channel_id,
                        messageId: i.id,
                        mentionChannels: i.mentionChannels,
                        isInteracting: !!l.isInteracting,
                        formatInline: !!l.formatInline,
                        noStyleAndInteraction: !!l.noStyleAndInteraction,
                        allowHeading: !!l.allowHeading,
                        allowList: !!l.allowList,
                        previewLinkTarget: !!l.previewLinkTarget,
                        disableAnimatedEmoji: !!l.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), o && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            i = t[0];
                        return ("link" === n.type || "attachmentLink" === n.type) && a.has(i.type) && (0, r.isEmbedInline)(i) ? [] : e
                    }(e, t.embeds)), !f && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, n)), E = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), f && (e = function e(t) {
                        return t.forEach(t => {
                            u.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != h && (e = h(e, n)), e));
                    return {
                        hasSpoilerEmbeds: E,
                        content: p
                    }
                }(n, e, t)
            }

            function o(e, t, n) {
                var r;
                return r = i.default.parseAutoModerationSystemMessage, r(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function d(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type))
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                PaymentPortalBody: function() {
                    return p
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("627445"),
                s = n.n(u),
                o = n("817736"),
                c = n.n(o),
                d = n("77078"),
                f = n("642906"),
                h = n("990893");

            function E(e) {
                var t, n, l, u, o, c;
                let {
                    header: E,
                    isLargeModal: p,
                    stepProps: I
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: _,
                    stepConfigs: C,
                    setBodyNode: g,
                    setFooterNode: T,
                    setModalOverlayNode: S,
                    setReadySlideId: m
                } = (0, f.usePaymentContext)(), v = C.find(e => e.key === _);
                r.useEffect(() => {
                    S(null)
                }, [_, S]), s(null != v, "Unknown step for current payment flow.");
                let N = null !== (o = null == v ? void 0 : null === (t = v.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    L = null == v ? void 0 : null === (n = v.options) || void 0 === n ? void 0 : n.bodyClassName,
                    M = void 0 !== p && p ? h.sliderBodyLarge : null == v ? void 0 : null === (l = v.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == v ? void 0 : null === (u = v.options) || void 0 === u ? void 0 : u.renderHeader) || void 0 === c || c ? E : null, v.renderStep(I), null == _ || N ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: a(h.body, L),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: _,
                                centered: !1,
                                onSlideReady: e => m(e),
                                children: C.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: a(h.sliderBody, M),
                                        ref: e => g(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => T(e)
                        }), (0, i.jsx)("div", {
                            ref: e => S(e)
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                a = n("112679"),
                u = n("55689"),
                s = n("855133"),
                o = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function h(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: h,
                    onClose: E,
                    onComplete: p,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: _,
                    analyticsObject: C,
                    analyticsLocation: g,
                    analyticsSourceLocation: T,
                    isGift: S = !1,
                    giftMessage: m,
                    subscriptionTier: v,
                    trialId: N,
                    postSuccessGuild: L,
                    openInvoiceId: M,
                    applicationId: y,
                    referralTrialOfferId: A,
                    giftRecipient: R,
                    returnRef: O
                } = null != e ? e : {}, U = !1, D = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: D,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: S,
                            giftMessage: m,
                            giftRecipient: R,
                            initialPlanId: t,
                            followupSKUInfo: h,
                            onClose: e => {
                                r(), null == E || E(e), e && (null == I || I())
                            },
                            onComplete: () => {
                                U = !0, null == p || p(), !S && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: _,
                            analyticsObject: C,
                            analyticsLocation: g,
                            analyticsSourceLocation: T,
                            trialId: N,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: M,
                            applicationId: y,
                            referralTrialOfferId: A,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !U && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != g ? g : C,
                            source: T,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: S,
                            eligible_for_trial: null != N,
                            application_id: y,
                            location_stack: _
                        }), (0, a.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == E || E(U), U && (!S && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == I || I())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                l = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, r.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("526887"),
                a = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, r.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = i.useMemo(() => ({
                    fire: (i, r, l) => {
                        var a, u;
                        let s = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(s);
                        e(i, r, o, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : s.confettiCount) * (null !== (u = null == l ? void 0 : l.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return a
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return _
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                a = n("913144"),
                u = n("775433"),
                s = n("697218"),
                o = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                h = n("49111");
            let E = "nonSubscriber";
            async function p() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = s.default.getCurrentUser();
                C(r, i, t, n)
            }

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), a = (0, r.default)([s.default], () => s.default.getCurrentUser());
                i.useEffect(() => {
                    C(a, l, t, n)
                }, [a, l, t, n])
            }

            function C(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && p(), i && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = l;
            class u extends i.default.Store {
                initialize() {
                    a = l
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var s = new u(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = r
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                a = n("929423");
            n("424562");
            var u = n("49111"),
                s = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, l.default)(), h = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != c ? c : f), r.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, o, c, d, f]);
                return h
            }
        },
        319165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return a
                },
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("782340");

            function a(e) {
                return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function u(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, l = a(t);
                return null != l ? (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: l
                }) : null
            }
        },
        130074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("272030"),
                a = n("838446"),
                u = n("158534"),
                s = n("798609"),
                o = n("846883"),
                c = n("812204"),
                d = n("243288"),
                f = n("321135"),
                h = n("873254"),
                E = n("44141"),
                p = n("531674"),
                I = n("861370"),
                _ = n("972701"),
                C = n("390008"),
                g = n("976127"),
                T = n("856030"),
                S = n("726750"),
                m = n("170990"),
                v = n("304582"),
                N = n("72057"),
                L = n("563816"),
                M = n("489836"),
                y = n("406703"),
                A = n("126710"),
                R = n("502533"),
                O = n("314838"),
                U = n("151200"),
                D = n("692986"),
                x = n("806179"),
                b = n("816106"),
                G = n("623879"),
                w = n("49111"),
                P = n("782340"),
                j = (0, u.default)((0, a.default)(function(e) {
                    let {
                        user: t,
                        channel: n,
                        channelSelected: a = !1,
                        showMute: u = !0,
                        showMediaItems: c = !1,
                        showChannelCallItems: w = !1,
                        showModalItems: j = !0,
                        targetIsUser: F = !1,
                        context: V,
                        onSelect: B,
                        onHeightUpdate: H
                    } = e, k = (0, x.default)(t.id, null), Z = (0, y.default)(t, V), Y = (0, N.default)({
                        user: t,
                        context: V
                    }), K = (0, v.default)(t), W = (0, G.default)(t.id), z = (0, A.default)(n.id, a), X = (0, O.default)(t), Q = (0, o.default)(null, t), q = (0, b.default)(t.id), J = (0, U.default)(t.id, n.id), $ = (0, m.default)(t), ee = (0, D.default)(t.id), et = (0, R.default)(t.id, n.id), en = (0, M.default)(t), ei = (0, p.default)(n), er = (0, I.default)({
                        id: t.id,
                        label: P.default.Messages.COPY_ID_USER
                    }), el = (0, I.default)({
                        id: n.id,
                        label: P.default.Messages.COPY_ID_CHANNEL
                    }), ea = (0, E.default)(n), eu = (0, f.default)(t.id), es = (0, d.default)(n.id), eo = (0, S.default)(t), ec = (0, h.default)(t.id), ed = (0, L.default)({
                        commandType: s.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        onShow: H
                    }), ef = (0, _.default)(n), eh = (0, C.default)(n), eE = (0, g.useMessageRequestItem)(n), ep = (0, T.useSafetyWarningsItem)(n), eI = n.isManaged(), e_ = t.isNonUserBot();
                    return (0, i.jsxs)(r.Menu, {
                        navId: "user-context",
                        onClose: l.closeContextMenu,
                        "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: B,
                        children: [(0, i.jsx)(r.MenuGroup, {
                            children: !e_ && ea
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: eE
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: ep
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [ef, eh]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: !e_ && eo
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [!e_ && (0, i.jsxs)(i.Fragment, {
                                children: [j && k, Z, !eI && J, j && Y, j && K, W]
                            }), z]
                        }), !e_ && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r.MenuGroup, {
                                children: c && q
                            }), (0, i.jsx)(r.MenuGroup, {
                                children: j && Q
                            }), (0, i.jsxs)(r.MenuGroup, {
                                children: [c && ee, c && et, ed, j && X, $, j && en, c && ec]
                            }), (0, i.jsx)(r.MenuGroup, {
                                children: u && ei
                            }), w && (0, i.jsxs)(r.MenuGroup, {
                                children: [es, eu]
                            })]
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [er, !F && el]
                        })]
                    })
                }, {
                    object: w.AnalyticsObjects.CONTEXT_MENU
                }), [c.default.CONTEXT_MENU, c.default.DM_USER_MENU])
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                a = n.n(l),
                u = n("446674"),
                s = n("77078"),
                o = n("240249"),
                c = n("524768"),
                d = n("389153"),
                f = n("916565"),
                h = n("355263"),
                E = n("633043"),
                p = n("305961"),
                I = n("317041"),
                _ = n("782340"),
                C = n("205735"),
                g = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: l,
                        guildId: g,
                        onShow: T
                    } = e, S = r.useRef(!1), m = r.useRef(0), v = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(null != g ? g : l.guild_id)), {
                        hasMoreAfter: N,
                        scrollDown: L,
                        sectionDescriptors: M,
                        commands: y,
                        placeholders: A
                    } = o.useDiscovery(l, {
                        commandType: t
                    }, {
                        placeholderCount: I.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: I.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: R,
                        sections: O
                    } = r.useMemo(() => {
                        let e = y.concat(A),
                            t = {};
                        return M.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [y, M, A]), U = r.useMemo(() => (0, d.canUseContextMenuCommands)(l, R.length, o.getCommandTypeCount(l, t, null == v ? void 0 : v.applicationCommandCounts)), [l, t, R.length, null == v ? void 0 : v.applicationCommandCounts]);
                    r.useEffect(() => {
                        U !== S.current && (U && (null == T || T()), S.current = U)
                    }, [U, T]), r.useEffect(() => {
                        D(m.current)
                    }, [R]);
                    let D = r.useCallback(e => {
                            N && e + 500 > 34 * R.length - 40 && L(), m.current = e
                        }, [N, L, R]),
                        x = r.useCallback(e => {
                            if (e.inputType === c.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(s.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, i.jsx)(E.default, {})
                            }, "menu-command-".concat(e.id));
                            a(null != l, "menu item should not show if channel is null");
                            let t = O[e.applicationId],
                                r = null != t ? (0, h.getIconComponent)(t) : void 0;
                            return (0, i.jsx)(s.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != r ? (0, i.jsx)(r, {
                                    channel: l,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, f.default)({
                                        command: e,
                                        optionValues: {},
                                        context: {
                                            channel: l,
                                            guild: v
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [l, v, n, O]);
                    return U && (0, i.jsx)(s.MenuItem, {
                        id: "apps",
                        label: _.default.Messages.APPS,
                        onChildrenScroll: D,
                        childRowHeight: 34,
                        listClassName: C.list,
                        disabled: 0 === R.length,
                        children: R.map(x)
                    })
                }
        },
        126710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("450911"),
                a = n("42203"),
                u = n("782340");

            function s(e, t) {
                let n = a.default.getChannel(e);
                return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(r.MenuItem, {
                    id: "close-dm",
                    label: u.default.Messages.CLOSE_DM,
                    action: () => l.default.closePrivateChannel(e, t)
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("561288"),
                u = n("191145"),
                s = n("271938"),
                o = n("99795"),
                c = n("782340");

            function d(e, t) {
                let n = (0, r.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
                    [d, f] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.getParticipants(t), u.default.getParticipant(t, e)], [t, e]);
                return n || 0 === d.length ? null : null == f ? (0, i.jsx)(l.MenuItem, {
                    id: "ring",
                    label: c.default.Messages.RING,
                    action: () => a.default.ring(t, [e])
                }) : f.type === o.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(l.MenuItem, {
                    id: "stop-ringing",
                    label: c.default.Messages.STOP_RINGING,
                    action: () => a.default.stopRinging(t, [e])
                }) : null
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var i = n("917351"),
                r = n.n(i),
                l = n("872717"),
                a = n("689988"),
                u = n("605250"),
                s = n("870691"),
                o = n("42203"),
                c = n("49111");
            let d = {},
                f = new u.default("UserGuildSettingsManager"),
                h = 0;

            function E() {
                d = {
                    ...s.default.getCollapsedCategories()
                }
            }

            function p() {
                !__OVERLAY__ && (clearTimeout(h), h = setTimeout(() => I(), 15e3))
            }
            async function I(e, t) {
                await _(null != t ? {
                    [null != e ? e : c.ME]: t
                } : {})
            }
            async function _(e) {
                clearTimeout(h);
                let t = 0 !== Object.keys(e).length,
                    n = s.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = s.default.getCollapsedCategories();
                        for (let n in t) t[n] !== d[n] && (e[n] = !0);
                        for (let n in d) t[n] !== d[n] && (e[n] = !0);
                        return e
                    }();
                for (let r in i) {
                    let i = o.default.getChannel(r);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                d = {
                    ...n
                };
                let a = r.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; a.length > 0;) {
                    let e = a.shift();
                    if (e.guildId !== c.FAVORITES) try {
                        await l.default.patch({
                            url: c.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await C(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && a.push(e), await C(5e3)
                    }
                }
            }

            function C(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function g() {
                d = {
                    ...s.default.getCollapsedCategories()
                }
            }
            class T extends a.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: p,
                        CATEGORY_EXPAND: p,
                        CATEGORY_COLLAPSE_ALL: p,
                        CATEGORY_EXPAND_ALL: p,
                        POST_CONNECTION_OPEN: E,
                        USER_GUILD_SETTINGS_FULL_UPDATE: g
                    }, this.saveUserGuildSettings = I, this.saveUserGuildSettingsBulk = _
                }
            }
            var S = new T
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                l = n("449008"),
                a = n("42203"),
                u = n("341542"),
                s = n("923959"),
                o = n("49111");
            let c = {},
                d = 0;

            function f() {
                d += 1
            }

            function h(e) {
                if (null == c[e]) return !1;
                delete c[e]
            }
            class E extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default, u.default), this.removeChangeListener(f), this.addChangeListener(f), c = null != e ? e : {}
                }
                getState() {
                    return c
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!c[e] && c[e]
                }
                getCollapsedCategories() {
                    return c
                }
                get version() {
                    return d
                }
            }
            E.displayName = "CategoryCollapseStore", E.persistKey = "collapsedCategories";
            var p = new E(r.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (c = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? c[e.channel_id] = !0 : delete c[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
                    for (let e in c) {
                        let t = a.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (c[t]) return !1;
                    c[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return h(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (c[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete c[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return h(t)
                }
            })
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("77078"),
                s = n("760607"),
                o = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), h = (0, u.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: a(o.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(s.default, {
                        ...d,
                        className: a(c, o.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: a(o.childContainer, {
                            [o.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                a = n("393414"),
                u = n("49111"),
                s = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: s,
                        onClick: o,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, h = r.useCallback(e => {
                        !e.repeat && ((e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, a.transitionTo)(n), null == o || o()), null == c || c(e))
                    }, [n, c, o]), E = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, a.transitionTo)(n), null == o || o())
                    }, [n, o]), p = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: E,
                        onKeyPress: h,
                        ...f,
                        children: s
                    });
                    return (0, i.jsx)(l.FocusRing, {
                        ...d,
                        children: p
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return I
                },
                default: function() {
                    return C
                }
            });
            var i, r, l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                s = n.n(u),
                o = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                h = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let E = {
                    default: h.shineDefault,
                    small: h.shineSmall
                },
                p = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class I extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(o.default.div, {
                        ...i,
                        className: s(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, l.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            I.defaultProps = {
                shineSize: "default"
            };
            let _ = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: u,
                    shineSize: o = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: p,
                    ..._
                } = e, C = a.createRef(), g = (0, d.default)(C), T = !i && !r && !0 !== u && (!p || g);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: C,
                    ..._,
                    className: s(h.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [t, T ? (0, l.jsx)(I, {
                        shinePaused: f,
                        className: s(h.buttonShine, p ? h.onlyShineOnHover : void 0, E),
                        shineSize: o
                    }) : null]
                })
            };
            _.ShineSizes = r;
            var C = _
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, l = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return s
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                u = () => (0, l.useLazyValue)(() => a()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("926001"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon)
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon)
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("503420"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: l,
                                fill: r,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, l.ClockIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: u,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != u ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: u
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("469563"),
                a = n("163725"),
                u = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foregroundColor: a = r.default.unsafe_rawColors.RED_400.css,
                        foreground: s,
                        background: o,
                        ...c
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(c),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("rect", {
                            fill: a,
                            className: s,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, i.jsx)("path", {
                            fill: l,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, a.EyeSlashIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: r
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 16
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, l.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("424823"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("31745"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: a
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, l.StageIcon)
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("817736"),
                l = n("118810");
            let a = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, r.findDOMNode)(e);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = a) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let a = (0, r.v4)(),
                u = new Map,
                s = new Map;
            class o extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = s.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? u.has(t) ? this.elementId = u.get(t) || "" : u.set(t, (0, r.v4)()) : this.elementId = a;
                    let o = this.getVisibilityObserverId();
                    !s.has(o) && s.set(o, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            o.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = o
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);