"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18966, 81580, 1459], {
        735885: (e, t, n) => {
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => a
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
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
        201459: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(730381),
                i = n.n(r),
                o = n(575945),
                a = n(744564),
                u = n(52317),
                l = n(9430),
                c = n(171940),
                s = n(131559),
                _ = n(473708);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const I = {
                open: function(e) {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: e
                    })
                },
                close: function() {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(e, t, n) {
                    var r = (0, c.GA)(e);
                    u.Z.saveUserGuildSettings(e, t);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, c.Wq)(e, t, r, n)
                },
                updateGuildAndChannelNotificationSettings: function(e, t, n) {
                    var r = Object.keys(t.channel_overrides),
                        i = (0, c.GA)(e),
                        o = (0, c.wK)(e, r);
                    u.Z.saveUserGuildSettings(e, t);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, c.Wq)(e, t, i, n);
                    Object.keys(t.channel_overrides).forEach((function(r) {
                        var i = o.get(r);
                        (0, c.jz)(e, r, t.channel_overrides[r], i, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(e, t) {
                    var n = Object.keys(e),
                        r = (0, c.rU)(n);
                    u.Z.saveUserGuildSettingsBulk(e);
                    Object.entries(e).forEach((function(e) {
                        var n = f(e, 2),
                            i = n[0],
                            o = n[1],
                            u = r.get(i);
                        a.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: o
                        });
                        (0, c.Wq)(i, o, u, t)
                    }))
                },
                updateChannelOverrideSettings: function(e, t, n, r) {
                    var i = (0, c.I)(e, t),
                        l = {
                            channel_overrides: E({}, t, n)
                        };
                    u.Z.saveUserGuildSettings(e, l);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: e,
                        channelId: t,
                        settings: n
                    });
                    o.uv.announce(_.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(e, t, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(e, t, n) {
                    var r = Object.keys(t),
                        i = {
                            channel_overrides: t
                        },
                        o = (0, c.wK)(e, r);
                    u.Z.saveUserGuildSettings(e, i);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: t
                    });
                    Object.keys(t).forEach((function(r) {
                        return (0, c.jz)(e, r, t[r], o.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(e, t) {
                    var n = t ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = t ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        i = l.Z.getChannelFlags(e) & ~r | n;
                    this.updateChannelOverrideSettings(e.guild_id, e.id, {
                        flags: i
                    })
                },
                handleCheckboxChange: function(e, t, n, r) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: E({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(e, t, n, r) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: E({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(e, t, n) {
                    var r = {
                        selected_time_window: t,
                        end_time: t > 0 ? i()().add(t, "second").toISOString() : null
                    };
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: E({}, e, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(e, t, n) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: e,
                        updatedSettings: {
                            notifyHighlights: t
                        },
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleProfileChange: function(e, t) {
                    a.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: t.id,
                        profile: e.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        496916: (e, t, n) => {
            n.d(t, {
                In: () => E,
                U6: () => f,
                y5: () => I,
                iV: () => p,
                CZ: () => T,
                jT: () => O,
                Ju: () => h,
                FT: () => S
            });
            var r = n(842227),
                i = n(744564),
                o = n(18882),
                a = n(382060),
                u = n(61209),
                l = n(877475),
                c = n(473903),
                s = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0;
                i.Z.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: r,
                    immediate: t,
                    force: n,
                    context: s.e3s,
                    location: o
                })
            }

            function f(e) {
                e.isCategory() ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = u.Z.getChannel(e);
                    if (null != r && null != r.guild_id) {
                        var i = l.Z.getCategories(r.guild_id);
                        if (null != i[e]) {
                            var c = i[e].filter((function(e) {
                                    var t = e.channel;
                                    return (0, a.vc)(t.type)
                                })).map((function(e) {
                                    return e.channel.id
                                })),
                                s = d(c);
                            c.forEach((function(e) {
                                var t = o.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
                                for (var n in t) s.push(n)
                            }));
                            var _ = !0,
                                f = !1,
                                I = void 0;
                            try {
                                for (var p, T = s[Symbol.iterator](); !(_ = (p = T.next()).done); _ = !0) {
                                    E(p.value, t, n)
                                }
                            } catch (e) {
                                f = !0;
                                I = e
                            } finally {
                                try {
                                    _ || null == T.return || T.return()
                                } finally {
                                    if (f) throw I
                                }
                            }
                        }
                    }
                }(e.id, !0, !0) : e.isForumLikeChannel() ? E(e.id, !0, !0, r.default.fromTimestamp(Date.now())) : E(e.id, !0, !0)
            }

            function I(e) {
                i.Z.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.e3s
                })
            }

            function p(e) {
                i.Z.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function T(e, t) {
                i.Z.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function O(e, t) {
                i.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function h(e, t, n) {
                i.Z.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function S(e, t) {
                var n;
                null != (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && i.Z.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        810978: (e, t, n) => {
            n.d(t, {
                GZ: () => f,
                Gn: () => p,
                Y2: () => T,
                mE: () => O
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                a = n(615796),
                u = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function _(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            _(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            _(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var E = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function f(e, t, n, r, i) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = d((function(e, t, n, s, _) {
                    var d, f, I, p;
                    return E(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                E.label = 1;
                            case 1:
                                E.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                f = {};
                                null != t && (f.country_code = t);
                                null != n && (f.payment_source_id = n);
                                null != s && (f.include_unpublished = s);
                                null != _ && (f.revenue_surface = _);
                                d.query = f;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                E.sent();
                                E.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                I = E.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: I.body
                                });
                                return [3, 6];
                            case 5:
                                p = E.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, u.q2)(p);
                                throw new o.Z(p);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return f(e, t)
                })))
            }

            function T(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return f(r, e, t, void 0, n)
                })))
            }

            function O() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        77413: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(973935),
                l = n(809784),
                c = n(202351),
                s = n(874049),
                _ = n(968449),
                d = n(674482),
                E = n(330484),
                f = n(775173),
                I = n(38004),
                p = n(771333),
                T = n(936957);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function N(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && g(e, t)
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
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

            function L(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function C(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function U(e) {
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
                    var n, r = A(e);
                    if (t) {
                        var i = A(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return C(this, n)
                }
            }
            var P = function(e) {
                N(n, e);
                var t = U(n);

                function n() {
                    h(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        hover: !1
                    };
                    e.key = void 0;
                    e.onError = function() {
                        var t = e.getSrc();
                        null != t && (e.cancelLoadImage = (0, s.po)(t, (function(t) {
                            if (!t) {
                                e.key = Date.now();
                                e.forceUpdate()
                            }
                        })))
                    };
                    e.onMouseEnter = function(t) {
                        e.setState({
                            hover: !0
                        });
                        var n = e.props.onMouseEnter;
                        null != n && n(t)
                    };
                    e.onMouseLeave = function(t) {
                        e.setState({
                            hover: !1
                        });
                        var n = e.props.onMouseLeave;
                        null != n && n(t)
                    };
                    return e
                }
                var o = n.prototype;
                o.componentWillUnmount = function() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                };
                o.getSrc = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = e.src,
                        n = e.emojiId,
                        r = e.emojiName,
                        i = e.animated,
                        o = e.shouldAnimate,
                        a = e.isFocused,
                        u = e.isInteracting,
                        l = e.size,
                        c = void 0 === l ? "default" : l,
                        s = this.state.hover;
                    if (null != t) return t;
                    if (null != n) {
                        var _ = T.kV[c];
                        return f.ZP.getEmojiURL({
                            id: n,
                            animated: a && !0 === i && (!0 === o || s || !0 === u),
                            size: _
                        })
                    }
                    return null != r ? I.ZP.getURL(r) : void 0
                };
                o.render = function() {
                    var e, t, n = this.props,
                        o = n.emojiName,
                        u = n.animated,
                        l = n.className,
                        c = n.size,
                        s = void 0 === c ? "default" : c,
                        _ = n.alt,
                        d = (n.shouldAnimate, n.isFocused, n.emojiId),
                        E = (n.autoplay,
                            n.isInteracting, L(n, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                        f = this.getSrc();
                    if (null == f || "" === f) return (0, r.jsx)("span", {
                        className: a()("emoji", "emoji-text"),
                        children: o
                    });
                    u && (e = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    });
                    return (0, i.createElement)("img", R(m(R(m(R({}, E), {
                        key: this.key,
                        src: f,
                        alt: null !== (t = null != _ ? _ : o) && void 0 !== t ? t : void 0,
                        draggable: !1
                    }), e), {
                        className: a()("emoji", l, {
                            jumboable: "jumbo" === s
                        }),
                        onError: this.onError,
                        "data-type": "emoji"
                    }), null != d && "" !== d ? {
                        "data-id": d
                    } : {
                        "data-name": o
                    }))
                };
                return n
            }(i.PureComponent);
            P.defaultProps = {
                isInteracting: !1
            };
            var b = function(e) {
                var t = function(e) {
                        var t = u.findDOMNode(e);
                        if ((0, l.k)(t)) {
                            c.push([t, e]);
                            s.observe(t)
                        } else 0
                    },
                    n = function(e) {
                        var t = u.findDOMNode(e);
                        s.unobserve(t);
                        var n = c.findIndex((function(t) {
                            var n = v(t, 2);
                            n[0];
                            return n[1] === e
                        }));
                        if (-1 !== n) {
                            c.splice(n, 1);
                            if (-1 !== (n = a.indexOf(e))) {
                                a.splice(n, 1);
                                n < o && a.length >= o && a[o - 1].forceUpdate()
                            }
                        } else 0
                    };
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, m(R({}, t), {
                        shouldAnimate: t.animated
                    }))
                };
                var o = 100,
                    a = [],
                    c = [],
                    s = new window.IntersectionObserver((function(e) {
                        e.forEach((function(e) {
                            var t = c.find((function(t) {
                                return v(t, 1)[0] === e.target
                            }));
                            if (null != t) {
                                var n = t[1];
                                if (e.intersectionRatio >= .7) {
                                    var r, i;
                                    if (-1 !== a.indexOf(n)) {
                                        0;
                                        return
                                    }
                                    var u = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                    u ? a.unshift(n) : a.push(n);
                                    n.forceUpdate();
                                    u && a.length > o && a[o].forceUpdate()
                                } else {
                                    var l = a.indexOf(n);
                                    if (-1 !== l) {
                                        a.splice(l, 1);
                                        n.forceUpdate();
                                        l < o && a.length >= o && a[o - 1].forceUpdate()
                                    }
                                }
                            } else 0
                        }))
                    }), {
                        threshold: .7
                    });
                return function(i) {
                    N(l, i);
                    var u = U(l);

                    function l() {
                        h(this, l);
                        return u.apply(this, arguments)
                    }
                    var c = l.prototype;
                    c.shouldAutoplay = function(e) {
                        return e.animated && e.autoplay
                    };
                    c.componentDidMount = function() {
                        this.shouldAutoplay(this.props) && t(this)
                    };
                    c.componentDidUpdate = function(e) {
                        var r = this.shouldAutoplay(e),
                            i = this.shouldAutoplay(this.props);
                        i !== r && (i ? t(this) : n(this))
                    };
                    c.componentWillUnmount = function() {
                        this.shouldAutoplay(this.props) && n(this)
                    };
                    c.render = function() {
                        var t = a.indexOf(this),
                            n = this.props,
                            i = n.autoplay,
                            u = n.allowAnimatedEmoji,
                            l = L(n, ["autoplay", "allowAnimatedEmoji"]);
                        return (0, r.jsx)(E.G.Consumer, {
                            children: function(n) {
                                return (0, r.jsx)(e, m(R({}, l), {
                                    autoplay: i || !1,
                                    shouldAnimate: -1 !== t && t < o && !n.disableAnimations && u
                                }))
                            }
                        })
                    };
                    return l
                }(i.Component)
            }(P);

            function M(e) {
                var t = _.Yk.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, c.e7)([d.Z], (function() {
                        return d.Z.isInstanceFocused()
                    })) : (0, p.n)();
                return (0, r.jsx)(b, m(R({}, e, n), {
                    isFocused: i
                }))
            }
        },
        567678: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(19585));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                return function(n) {
                    var o = (0, i.Z)(t).AnalyticsLocationProvider;
                    return (0, r.jsx)(o, {
                        children: (0, r.jsx)(e, a({}, n))
                    })
                }
            }
        },
        153686: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet"
            }(r || (r = {}));
            const i = r
        },
        777158: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(496486),
                i = n.n(r);

            function o(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                    return !0
                };
                return i()(e).map((function(e) {
                    return "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]
                })).flattenDeep().filter(n).value()
            }
        },
        728998: (e, t, n) => {
            n.d(t, {
                _: () => l
            });
            var r = n(409125),
                i = n(379991),
                o = n(664625),
                a = n(567403),
                u = n(407561);

            function l(e) {
                if (i.ZP.disableVoiceChannelChangeAlert) return !1;
                var t = r.Z.getRemoteSessionId();
                if (null != u.Z.getVoiceStateForSession(o.default.getId(), t)) return !1;
                if (!u.Z.isCurrentClientInVoiceChannel()) return !1;
                if (u.Z.isInChannel(e.id)) return !1;
                var n = a.Z.getGuild(e.getGuildId());
                return null == (null == n ? void 0 : n.afkChannelId) || !u.Z.isInChannel(n.afkChannelId)
            }
        },
        14096: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(116404),
                a = n(409125),
                u = n(784426),
                l = n(487685),
                c = n(671293),
                s = n(664625),
                _ = n(715107),
                d = n(407561),
                E = n(728998),
                f = n(2590);

            function I(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            I(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            I(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var O = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };
            const h = {
                handleVoiceConnect: function(e) {
                    var t = e.channel,
                        I = e.connected,
                        h = e.needSubscriptionToAccess,
                        S = e.locked,
                        A = void 0 !== S && S,
                        N = e.routeDirectlyToChannel,
                        R = void 0 !== N && N,
                        m = e.bypassChangeModal,
                        L = e.bypassGuildIdCheck,
                        C = void 0 !== L && L;
                    return p((function() {
                        var e, S, N, L, g;
                        return O(this, (function(v) {
                            switch (v.label) {
                                case 0:
                                    e = this;
                                    return t.isThread() ? [4, c.Z.unarchiveThreadIfNecessary(t.id)] : [3, 3];
                                case 1:
                                    v.sent();
                                    return l.Z.hasJoined(t.id) ? [3, 3] : [4, c.Z.joinThread(t, "Join Voice")];
                                case 2:
                                    v.sent();
                                    v.label = 3;
                                case 3:
                                    S = a.Z.getRemoteSessionId();
                                    N = d.Z.getVoiceStateForSession(s.default.getId(), S);
                                    L = (null == N ? void 0 : N.channelId) === t.id;
                                    g = L || _.Z.getChannelId() === d.Z.getCurrentClientVoiceChannelId(t.guild_id);
                                    if (!m && !A && (0,
                                            E._)(t)) return [2, new Promise((function(o) {
                                        var a = e;
                                        (0, i.openModalLazy)(p((function() {
                                            var e, i;
                                            return O(this, (function(u) {
                                                switch (u.label) {
                                                    case 0:
                                                        return [4, n.e(51562).then(n.bind(n, 851562))];
                                                    case 1:
                                                        e = u.sent(), i = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(i, function(e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        r = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                    }))));
                                                                    r.forEach((function(t) {
                                                                        T(e, t, n[t])
                                                                    }))
                                                                }
                                                                return e
                                                            }({
                                                                channel: t,
                                                                onConfirm: function() {
                                                                    return o(a.handleVoiceConnect({
                                                                        channel: t,
                                                                        connected: I,
                                                                        needSubscriptionToAccess: h,
                                                                        routeDirectlyToChannel: R,
                                                                        locked: A,
                                                                        bypassChangeModal: !0
                                                                    }))
                                                                }
                                                            }, e))
                                                        }]
                                                }
                                            }))
                                        })))
                                    }))];
                                    A || I || o.default.selectVoiceChannel(t.id);
                                    !__OVERLAY__ && (I || g || h || R) && function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = e.getGuildId();
                                        if (null == n && !t) throw new Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                        (0, u.uL)(f.Z5c.CHANNEL(n, e.id))
                                    }(t, C);
                                    return [2, !0]
                            }
                        }))
                    })).apply(this)
                }
            }
        },
        881580: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => L
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(971402),
                a = n(567678),
                u = n(153686),
                l = n(112897),
                c = n(13280),
                s = n(281873),
                _ = n(422906),
                d = n(576668),
                E = n(929653),
                f = n(721376),
                I = n(874710),
                p = n(703654),
                T = n(103314),
                O = n(313031),
                h = n(954814),
                S = n(839463),
                A = n(218318),
                N = n(40111),
                R = n(579583),
                m = n(473708);
            const L = (0, a.Z)((function(e) {
                var t = e.channel,
                    n = e.onSelect,
                    a = (0, _.Z)(t),
                    u = (0, E.Z)(t),
                    L = (0, A.Z)(t),
                    C = (0, s.Z)(t),
                    g = (0, T.Z)(t),
                    v = (0, d.Z)(t),
                    y = (0, l.Z)({
                        id: t.id,
                        label: m.Z.Messages.COPY_ID_THREAD
                    }),
                    U = (0, I.Z)(t, "Context Menu"),
                    P = (0, O.Z)(t),
                    b = (0, N.Z)(t),
                    M = (0, h.Z)(t),
                    D = (0, S.Z)(t.id),
                    G = (0, p.Z)(t),
                    w = (0, R.Z)(t),
                    Z = (0, f.Z)(t, {
                        hoist: !0
                    }),
                    F = (0, c.Z)(t);
                return (0, r.jsxs)(i.Menu, {
                    navId: "thread-context",
                    onClose: o.Zy,
                    "aria-label": m.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, r.jsxs)(i.MenuGroup, {
                        children: [U, G, C, g, M, D, a, F]
                    }, "thread-actions"), (0, r.jsxs)(i.MenuGroup, {
                        children: [L, b]
                    }, "notifications"), (0, r.jsxs)(i.MenuGroup, {
                        children: [w, Z, P, v]
                    }, "admin-actions"), (0, r.jsx)(i.MenuGroup, {
                        children: y
                    }, "developer-actions")]
                })
            }), [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU])
        },
        929653: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(882723),
                a = n(496916),
                u = n(358969),
                l = n(536945),
                c = n(487685),
                s = n(382060),
                _ = n(877475),
                d = n(717091),
                E = n(2590),
                f = n(473708);

            function I(e) {
                var t = function(e) {
                    var t = (0, u.n2)(e.guild_id, e.id),
                        n = (0, i.e7)([d.ZP, _.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return d.ZP.isForumPostUnread(e.id);
                            if (e.type === E.d4z.GUILD_CATEGORY) {
                                var t = _.Z.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                if (t[e.id].some((function(e) {
                                        var t = e.channel;
                                        return (0, s.Em)(t.type) && d.ZP.hasUnread(t.id)
                                    }))) return !0;
                                var n = new Set(t[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = l.Z.getThreadsForGuild(e.guild_id);
                                for (var i in r)
                                    if (n.has(i))
                                        for (var o in r[i])
                                            if (c.Z.hasJoined(o) && !c.Z.isMuted(o) && d.ZP.hasUnread(o)) return !0;
                                return !1
                            }
                            return d.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, r.jsx)(o.MenuItem, {
                    id: "mark-channel-read",
                    label: f.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.U6)(e)
                    },
                    disabled: !t
                })
            }
        },
        13280: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(882723),
                a = n(5544),
                u = n(419051),
                l = n(963985),
                c = n(790337),
                s = n(2590),
                _ = n(473708);

            function d(e, t) {
                return e.type === s.d4z.GROUP_DM ? t ? _.Z.Messages.UNFAVORITE_GDM : _.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? t ? _.Z.Messages.UNFAVORITE_DM : _.Z.Messages.FAVORITE_DM : t ? _.Z.Messages.UNFAVORITE_CHANNEL : _.Z.Messages.FAVORITE_CHANNEL
            }

            function E(e) {
                var t = (0, i.e7)([u.Z], (function() {
                        return u.Z.isFavorite(e.id)
                    })),
                    n = function(e) {
                        var t = function(t) {
                                (0, l.kj)(e.id, t)
                            },
                            n = (0, i.e7)([a.ZP], (function() {
                                return a.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === n.length ? (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return t(null)
                            }
                        }) : (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return t(null)
                            },
                            children: n.map((function(e) {
                                return (0, r.jsx)(o.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return t(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    _ = function(e) {
                        return (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !0),
                            action: function() {
                                (0, l.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : t ? _ : n
            }
        },
        866893: (e, t, n) => {
            n.d(t, {
                U: () => B,
                Z: () => K
            });
            var r = n(496486),
                i = n.n(r),
                o = n(920883),
                a = n(842227),
                u = n(202351),
                l = n(744564),
                c = n(536945),
                s = n(591684),
                _ = n(664625),
                d = n(61209),
                E = n(717091),
                f = n(715107),
                I = n(72580),
                p = n(474167);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function S(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function A(e, t) {
                A = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return A(e, t)
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var L, C = [],
                g = null,
                v = null,
                y = new Set,
                U = o.z.LATEST_ACTIVITY,
                P = 0,
                b = [],
                M = !1,
                D = [],
                G = i().chain(C),
                w = i().chain(C),
                Z = new Set,
                F = new Set;

            function j(e) {
                var t;
                return null !== (t = E.ZP.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function H(e) {
                return function(t, n) {
                    return (0, p.yv)(t) ? -1 : (0,
                        p.yv)(n) ? 1 : e === o.z.LATEST_ACTIVITY ? a.default.compare(j(n), j(t)) : a.default.compare(n, t)
                }
            }

            function k() {
                b = [];
                L = null;
                v = null;
                y = new Set;
                U = o.z.LATEST_ACTIVITY;
                P = 0;
                D = [];
                G = i().chain(C);
                w = i().chain(C);
                F.clear();
                Z.clear()
            }

            function V() {
                var e, t = f.Z.getChannelId();
                if (null == t || !(null === (e = d.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) {
                    k();
                    return !1
                }
                Y({
                    refreshThreadIds: !0
                })
            }

            function B(e) {
                var t = d.Z.getChannel(e);
                return null == t ? [] : Object.values(c.Z.getThreadsForParent(t.guild_id, t.id)).map((function(e) {
                    return e.id
                })).sort(H(U))
            }

            function Y(e) {
                var t = d.Z.getChannel(v);
                if (null != t) {
                    if (null == e ? void 0 : e.refreshThreadIds) {
                        D = Object.values(c.Z.getThreadsForParent(t.guild_id, t.id)).map((function(e) {
                            return e.id
                        }));
                        P = 0;
                        M = !0
                    }
                    if (0 !== Z.size) {
                        D = D.filter((function(e) {
                            return !Z.has(e)
                        }));
                        Z.clear()
                    }
                    if (0 !== F.size) {
                        D = Array.from(new Set(N(D).concat(N(F))));
                        F.clear()
                    }
                    if ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) {
                        w = i().chain(D).sort(H(o.z.LATEST_ACTIVITY));
                        G = i().chain(D).sort(H(o.z.CREATION_DATE))
                    }
                    var n, r = (U === o.z.LATEST_ACTIVITY ? w : G).value(),
                        a = (b = 0 === y.size ? r : r.filter((n = y, function(e) {
                            var t, r = null === (t = d.Z.getChannel(e)) || void 0 === t ? void 0 : t.appliedTags;
                            return null != r && 0 !== r.length && r.some((function(e) {
                                return n.has(e)
                            }))
                        }))).find((function(e) {
                            return function(e) {
                                var t = s.Z.getCount(e);
                                return null === t || 0 === t
                            }(e)
                        }));
                    L = null == a ? null : a
                }
            }
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && A(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    O(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, c.Z, f.Z, E.ZP)
                };
                r.getNewThreadCount = function() {
                    return P
                };
                r.getCanAckThreads = function() {
                    return M
                };
                r.getThreadIds = function(e, t, n) {
                    var r = e !== v,
                        i = !(0, I.OL)(n, y),
                        o = t !== U;
                    v = e;
                    y = n;
                    U = t;
                    r ? Y({
                        refreshThreadIds: !0
                    }) : o ? Y({
                        sortThreadIds: !0
                    }) : i && Y();
                    return b
                };
                r.getCurrentThreadIds = function() {
                    return b
                };
                r.getAndDeleteMostRecentUserCreatedThreadId = function() {
                    var e = g;
                    g = null;
                    return e
                };
                r.getFirstNoReplyThreadId = function() {
                    return L
                };
                r.__getLocalVars = function() {
                    return {
                        NO_THREAD_IDS: C,
                        mostRecentUserCreatedThreadId: g,
                        currentChannelId: v,
                        currentTagFilter: y,
                        currentSortOrder: U,
                        newThreadCount: P,
                        threadIds: b,
                        firstNoReplyThreadId: L,
                        canAckThreads: M,
                        _all: D,
                        _lazySortedCreation: G,
                        _lazySortedActivity: w,
                        _deleted: Z,
                        _pinned: F
                    }
                };
                return n
            }(u.ZP.Store);
            x.displayName = "ForumActivePostStore";
            const K = new x(l.Z, {
                CONNECTION_OPEN: V,
                OVERLAY_INITIALIZE: V,
                GUILD_CREATE: V,
                CHANNEL_SELECT: V,
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== v) return !1;
                    k()
                },
                THREAD_LIST_SYNC: function(e) {
                    var t, n = e.guildId;
                    if (null == v) return !1;
                    if (n !== (null === (t = d.Z.getChannel(v)) || void 0 === t ? void 0 : t.guild_id)) return !1;
                    Y({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    var t = e.channel,
                        n = e.isNewlyCreated;
                    if (null == t.parent_id || t.parent_id !== v) return !1;
                    if (!n) return !1;
                    t.ownerId !== _.default.getId() ? P++ : g = t.id
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== v) return !1;
                    var n = (0, p.yv)(t.id),
                        r = F.has(t.id);
                    if (n && !r) {
                        F.add(t.id);
                        Y({
                            sortThreadIds: !0
                        })
                    } else {
                        if (n || !r) return !1;
                        F.delete(t.id);
                        Y({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== v) return !1;
                    Z.add(t.id);
                    Y({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    var t = e.channelId;
                    if (null == t || t !== v) return !1;
                    Y({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    var t = e.channelId;
                    if (null == t || t !== v) return !1;
                    M = !1
                }
            })
        },
        165586: (e, t, n) => {
            n.d(t, {
                LY: () => r,
                aW: () => _,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => E,
                ND: () => f,
                WC: () => p,
                z8: () => T,
                km: () => h,
                k0: () => S,
                af: () => A
            });
            var r, i, o, a, u = n(2590),
                l = n(203600),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function _(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function d(e) {
                switch (e) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var E = (s(a = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(a, o.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }]), s(a, o.PRESET_CUSTOM, []), a),
                f = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_5
                }];

            function I(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var p = [I(r.RESOLUTION_720), I(r.RESOLUTION_1080), I(r.RESOLUTION_1440), I(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                T = [I(r.RESOLUTION_720), I(r.RESOLUTION_1080), I(r.RESOLUTION_1440)],
                O = function(e) {
                    return "".concat(e, "p")
                },
                h = [I(r.RESOLUTION_480, (function() {
                    return O(r.RESOLUTION_480)
                })), I(r.RESOLUTION_720, (function() {
                    return O(r.RESOLUTION_720)
                })), I(r.RESOLUTION_1080, (function() {
                    return O(r.RESOLUTION_1080)
                })), I(r.RESOLUTION_1440, (function() {
                    return O(r.RESOLUTION_1440)
                })), I(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                S = [I(i.FPS_15), I(i.FPS_30), I(i.FPS_60)],
                A = [I(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), I(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), I(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            n.d(t, {
                N2: () => _,
                YM: () => d,
                Dx: () => E,
                jD: () => f,
                bO: () => I,
                Xp: () => p,
                fV: () => T
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                a = n(339432),
                u = n(5544),
                l = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[u.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function _(e) {
                var t = (0,
                    r.e7)([u.ZP, i.Z], (function() {
                    return null != e && s(e.id, u.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, a.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, u.ZP, i.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var E = (0, o.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                f = (0, o.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                I = (0, o.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                p = ((0, o.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                T = (0, o.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        414306: (e, t, n) => {
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                a = n(682776),
                u = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, a.Z], (function() {
                    return s(e, o.Z, i.Z, a.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(u.Plq.CONNECT, c) : !r.can(u.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        52317: (e, t, n) => {
            n.d(t, {
                Z: () => G
            });
            var r = n(496486),
                i = n.n(r),
                o = n(281110),
                a = n(914716),
                u = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function _(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            _(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            _(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function T(e, t) {
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
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var N = function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                },
                R = {},
                m = new u.Z("UserGuildSettingsManager"),
                L = 0;

            function C() {
                R = p({}, l.Z.getCollapsedCategories())
            }

            function g() {
                if (!__OVERLAY__) {
                    clearTimeout(L);
                    L = setTimeout((function() {
                        return v()
                    }), 15e3)
                }
            }

            function v(e, t) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = d((function(e, t) {
                    return N(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U(null != t ? f({}, null != e ? e : s.ME, t) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function U(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = d((function(e) {
                    var t, n, r, a, u, _, d;
                    return N(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                clearTimeout(L);
                                t = 0 !== Object.keys(e).length;
                                n = l.Z.getCollapsedCategories();
                                r = b();
                                for (var f in r)
                                    if (null != (a = c.Z.getChannel(f)) && null != a.guild_id) {
                                        a.guild_id in e || (e[a.guild_id] = {});
                                        null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {});
                                        e[a.guild_id].channel_overrides[a.id] = T(p({}, e[a.guild_id].channel_overrides[a.id]), {
                                            collapsed: a.id in n
                                        });
                                        t = !0
                                    } if (!t) return [2];
                                R = p({}, n);
                                u = i().map(e, (function(e, t) {
                                    return {
                                        guildId: t,
                                        updates: e,
                                        attempts: 0
                                    }
                                }));
                                E.label = 1;
                            case 1:
                                if (!(u.length > 0)) return [3, 8];
                                if ((_ = u.shift()).guildId === s.I_8) return [3, 1];
                                E.label = 2;
                            case 2:
                                E.trys.push([2, 5, , 7]);
                                return [4, o.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(_.guildId),
                                    body: _.updates
                                })];
                            case 3:
                                E.sent();
                                return [4, M(1e3)];
                            case 4:
                                E.sent();
                                return [3, 7];
                            case 5:
                                d = E.sent();
                                m.error(d);
                                _.attempts += 1;
                                _.attempts < 3 && u.push(_);
                                return [4, M(5e3)];
                            case 6:
                                E.sent();
                                return [3, 7];
                            case 7:
                                return [3, 1];
                            case 8:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b() {
                var e = {},
                    t = l.Z.getCollapsedCategories();
                for (var n in t) t[n] !== R[n] && (e[n] = !0);
                for (var r in R) t[r] !== R[r] && (e[r] = !0);
                return e
            }

            function M(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e + Math.ceil(e * Math.random()))
                }))
            }

            function D() {
                R = p({}, l.Z.getCollapsedCategories())
            }
            const G = new(function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = A(n);

                function n() {
                    E(this, n);
                    var e;
                    (e = t.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: g,
                        CATEGORY_EXPAND: g,
                        CATEGORY_COLLAPSE_ALL: g,
                        CATEGORY_EXPAND_ALL: g,
                        POST_CONNECTION_OPEN: C,
                        USER_GUILD_SETTINGS_FULL_UPDATE: D
                    };
                    e.saveUserGuildSettings = v;
                    e.saveUserGuildSettingsBulk = U;
                    return e
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        lastSavedCollapsedCategories: R,
                        logger: m,
                        syncTimer: L,
                        SYNC_DELAY_MS: 15e3
                    }
                };
                return n
            }(a.Z))
        },
        968968: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var r = n(202351),
                i = n(744564),
                o = n(72580),
                a = n(61209),
                u = n(837067),
                l = n(5544),
                c = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function E(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var T = {},
                O = 0;

            function h() {
                O += 1
            }

            function S(e) {
                if (null == T[e]) return !1;
                delete T[e]
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(a.Z, u.Z);
                    this.removeChangeListener(h);
                    this.addChangeListener(h);
                    T = null != e ? e : {}
                };
                r.getState = function() {
                    return T
                };
                r.isCollapsed = function(e) {
                    return !(null == e || "null" === e || !T[e]) && T[e]
                };
                r.getCollapsedCategories = function() {
                    return T
                };
                r.__getLocalVars = function() {
                    return {
                        collapsedCategories: T,
                        version: O
                    }
                };
                ! function(e, t, n) {
                    t && _(e.prototype, t);
                    n && _(e, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return O
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            A.displayName = "CategoryCollapseStore";
            A.persistKey = "collapsedCategories";
            const N = new A(i.Z, {
                CONNECTION_OPEN: function(e) {
                    e.userGuildSettings.partial || (T = {});
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = e.userGuildSettings.entries[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var a = i.value;
                            if (null != a.channel_overrides) {
                                var u = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, _ = a.channel_overrides[Symbol.iterator](); !(u = (s = _.next()).done); u = !0) {
                                        var d = s.value;
                                        d.collapsed ? T[d.channel_id] = !0 : delete T[d.channel_id]
                                    }
                                } catch (e) {
                                    l = !0;
                                    c = e
                                } finally {
                                    try {
                                        u || null == _.return || _.return()
                                    } finally {
                                        if (l) throw c
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    var t = e.userGuildSettings,
                        n = new Set(t.map((function(e) {
                            return e.guild_id
                        })).filter(o.lm));
                    for (var r in T) {
                        var i = a.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete T[i.id]
                    }
                    var u = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, _ = t[Symbol.iterator](); !(u = (s = _.next()).done); u = !0) {
                            var d = s.value,
                                E = !0,
                                f = !1,
                                I = void 0;
                            try {
                                for (var p, O = d.channel_overrides[Symbol.iterator](); !(E = (p = O.next()).done); E = !0) {
                                    var h = p.value;
                                    h.collapsed && (T[h.channel_id] = !0)
                                }
                            } catch (e) {
                                f = !0;
                                I = e
                            } finally {
                                try {
                                    E || null == O.return || O.return()
                                } finally {
                                    if (f) throw I
                                }
                            }
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            u || null == _.return || _.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(e) {
                    var t = e.id;
                    if (T[t]) return !1;
                    T[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    return S(e.id)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    var t = e.guildId;
                    l.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var t = e.channel;
                        "null" !== t.id && (T[t.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    var t = e.guildId;
                    l.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var t = e.channel;
                        delete T[t.id]
                    }))
                },
                CHANNEL_DELETE: function(e) {
                    return S(e.channel.id)
                }
            })
        },
        877475: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(202351),
                i = n(744564),
                o = n(777158),
                a = n(419051),
                u = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(567403),
                _ = n(2590);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var O = null,
                h = {},
                S = null;
            var A = {
                _categories: [],
                null: []
            };

            function N(e, t) {
                e.index = t
            }

            function R(e) {
                var t = c.ZP.getChannels(e),
                    n = {
                        _categories: [],
                        null: []
                    },
                    r = function(e) {
                        var t, r = e.channel;
                        (null !== (t = n[null != r.parent_id ? r.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
                            channel: r,
                            index: -1
                        })
                    };
                t[_.d4z.GUILD_CATEGORY].forEach((function(e) {
                    var t = e.channel;
                    n._categories.push({
                        channel: t,
                        index: -1
                    });
                    n[t.id] = []
                }));
                t[c.sH].forEach(r);
                t[c.Zb].forEach(r);
                (0, o.Z)(n._categories, n).forEach(N);
                h[e] = n;
                return n
            }

            function m() {
                h = {};
                null != O && R(O)
            }

            function L(e) {
                var t = e.guild.id;
                h[t] = void 0;
                O === t && R(t)
            }

            function C(e) {
                var t = e.channel.guild_id;
                if (null == t) return !1;
                h[t] = void 0;
                O === t && R(t)
            }

            function g(e) {
                var t = e.guildId;
                h[t] = void 0;
                t === O && R(t)
            }

            function v(e, t) {
                S = t;
                if (null == e || null == e.getGuildId()) return !1;
                var n = e.getGuildId();
                if (null == n) return !1;
                h[n] = void 0;
                n === O && R(n);
                return !0
            }

            function y() {
                R(_.I_8)
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && I(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.ZP, s.Z, u.default, l.Z, a.Z);
                    this.syncWith([a.Z], y)
                };
                r.getCategories = function(e) {
                    return null != e ? function(e) {
                        var t = h[e];
                        return null != t ? t : R(e)
                    }(e) : A
                };
                r.__getLocalVars = function() {
                    return {
                        selectedGuildId: O,
                        guilds: h,
                        selectedVoiceChannelId: S,
                        EMPTY_CATEGORY_LISTS: A
                    }
                };
                return n
            }(r.ZP.Store);
            U.displayName = "GuildCategoryStore";
            const P = new U(i.Z, {
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId;
                    O = null != t ? t : null;
                    if (null == t) return !1;
                    if (null != h[t]) return !1;
                    R(t)
                },
                CONNECTION_OPEN: m,
                OVERLAY_INITIALIZE: m,
                CACHE_LOADED_LAZY: m,
                GUILD_CREATE: L,
                GUILD_UPDATE: L,
                GUILD_DELETE: function(e) {
                    var t = e.guild.id;
                    delete h[t]
                },
                CHANNEL_CREATE: C,
                CHANNEL_DELETE: C,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var l = a.value.guild_id;
                            if (null != l) {
                                h[l] = void 0;
                                n = !0;
                                O === l && R(l)
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.user;
                    if (u.default.getId() !== n.id) return !1;
                    h[t] = void 0;
                    t === O && R(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == O) return !1;
                    R(O)
                },
                GUILD_ROLE_CREATE: g,
                GUILD_ROLE_UPDATE: g,
                GUILD_ROLE_DELETE: g,
                IMPERSONATE_UPDATE: g,
                IMPERSONATE_STOP: g,
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null == t && null != S ? v(l.Z.getChannel(S), null) : v(l.Z.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.channelId,
                            r = t.sessionId;
                        return u.default.getSessionId() !== r ? e : v(l.Z.getChannel(n), n) || e
                    }), !1)
                }
            })
        },
        330484: (e, t, n) => {
            n.d(t, {
                G: () => r
            });
            var r = n(667294).createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        771333: (e, t, n) => {
            n.d(t, {
                n: () => u
            });
            var r = n(667294),
                i = n(202351),
                o = n(26468),
                a = n(901654);

            function u() {
                var e = r.useContext(o.ZP).windowId;
                return (0, i.e7)([a.Z], (function() {
                    return a.Z.isFocused(e)
                }), [e])
            }
        },
        482507: (e, t, n) => {
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
        }
    }
]);