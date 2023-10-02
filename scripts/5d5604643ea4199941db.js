"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [97516, 81580, 1459], {
        735885: (e, n, t) => {
            t.d(n, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = t(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        201459: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(730381),
                o = t.n(r),
                i = t(575945),
                u = t(744564),
                a = t(52317),
                l = t(9430),
                c = t(171940),
                s = t(131559),
                f = t(473708);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const _ = {
                open: function(e) {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: e
                    })
                },
                close: function() {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(e, n, t) {
                    var r = (0, c.GA)(e);
                    a.Z.saveUserGuildSettings(e, n);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: e,
                        settings: n
                    });
                    (0, c.Wq)(e, n, r, t)
                },
                updateGuildAndChannelNotificationSettings: function(e, n, t) {
                    var r = Object.keys(n.channel_overrides),
                        o = (0, c.GA)(e),
                        i = (0, c.wK)(e, r);
                    a.Z.saveUserGuildSettings(e, n);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: e,
                        settings: n
                    });
                    (0, c.Wq)(e, n, o, t);
                    Object.keys(n.channel_overrides).forEach((function(r) {
                        var o = i.get(r);
                        (0, c.jz)(e, r, n.channel_overrides[r], o, t)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(e, n) {
                    var t = Object.keys(e),
                        r = (0, c.rU)(t);
                    a.Z.saveUserGuildSettingsBulk(e);
                    Object.entries(e).forEach((function(e) {
                        var t = h(e, 2),
                            o = t[0],
                            i = t[1],
                            a = r.get(o);
                        u.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: o,
                            settings: i
                        });
                        (0, c.Wq)(o, i, a, n)
                    }))
                },
                updateChannelOverrideSettings: function(e, n, t, r) {
                    var o = (0, c.I)(e, n),
                        l = {
                            channel_overrides: p({}, n, t)
                        };
                    a.Z.saveUserGuildSettings(e, l);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: e,
                        channelId: n,
                        settings: t
                    });
                    i.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(e, n, t, o, r)
                },
                updateChannelOverrideSettingsBulk: function(e, n, t) {
                    var r = Object.keys(n),
                        o = {
                            channel_overrides: n
                        },
                        i = (0, c.wK)(e, r);
                    a.Z.saveUserGuildSettings(e, o);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: n
                    });
                    Object.keys(n).forEach((function(r) {
                        return (0, c.jz)(e, r, n[r], i.get(r), t)
                    }))
                },
                setForumThreadsCreated: function(e, n) {
                    var t = n ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = n ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        o = l.Z.getChannelFlags(e) & ~r | t;
                    this.updateChannelOverrideSettings(e.guild_id, e.id, {
                        flags: o
                    })
                },
                handleCheckboxChange: function(e, n, t, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, n, t),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(e, n, t, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, n, t),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(e, n, t) {
                    var r = {
                        selected_time_window: n,
                        end_time: n > 0 ? o()().add(n, "second").toISOString() : null
                    };
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: t.id,
                        profile: "MUTED",
                        updatedSettings: p({}, e, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(e, n, t) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: t.id,
                        profile: e,
                        updatedSettings: {
                            notifyHighlights: n
                        },
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleProfileChange: function(e, n) {
                    u.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: e.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        496916: (e, n, t) => {
            t.d(n, {
                In: () => p,
                U6: () => h,
                y5: () => _,
                iV: () => y,
                CZ: () => v,
                jT: () => O,
                Ju: () => E,
                FT: () => S
            });
            var r = t(842227),
                o = t(744564),
                i = t(18882),
                u = t(382060),
                a = t(61209),
                l = t(877475),
                c = t(473903),
                s = t(2590);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0;
                o.Z.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: r,
                    immediate: n,
                    force: t,
                    context: s.e3s,
                    location: i
                })
            }

            function h(e) {
                e.isCategory() ? function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = a.Z.getChannel(e);
                    if (null != r && null != r.guild_id) {
                        var o = l.Z.getCategories(r.guild_id);
                        if (null != o[e]) {
                            var c = o[e].filter((function(e) {
                                    var n = e.channel;
                                    return (0, u.vc)(n.type)
                                })).map((function(e) {
                                    return e.channel.id
                                })),
                                s = d(c);
                            c.forEach((function(e) {
                                var n = i.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
                                for (var t in n) s.push(t)
                            }));
                            var f = !0,
                                h = !1,
                                _ = void 0;
                            try {
                                for (var y, v = s[Symbol.iterator](); !(f = (y = v.next()).done); f = !0) {
                                    p(y.value, n, t)
                                }
                            } catch (e) {
                                h = !0;
                                _ = e
                            } finally {
                                try {
                                    f || null == v.return || v.return()
                                } finally {
                                    if (h) throw _
                                }
                            }
                        }
                    }
                }(e.id, !0, !0) : e.isForumLikeChannel() ? p(e.id, !0, !0, r.default.fromTimestamp(Date.now())) : p(e.id, !0, !0)
            }

            function _(e) {
                o.Z.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.e3s
                })
            }

            function y(e) {
                o.Z.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function v(e, n) {
                o.Z.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: n
                })
            }

            function O(e, n) {
                o.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: n
                })
            }

            function E(e, n, t) {
                o.Z.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: n,
                    ackedId: t,
                    local: !1
                })
            }

            function S(e, n) {
                var t;
                null != (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && o.Z.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: n,
                    local: !1
                })
            }
        },
        810978: (e, n, t) => {
            t.d(n, {
                GZ: () => h,
                Gn: () => y,
                Y2: () => v,
                mE: () => O
            });
            var r = t(281110),
                o = t(744564),
                i = t(973889),
                u = t(615796),
                a = t(264628),
                l = t(673679),
                c = t(2590),
                s = t(203600);

            function f(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function h(e, n, t, r, o) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = d((function(e, n, t, s, f) {
                    var d, h, _, y;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                h = {};
                                null != n && (h.country_code = n);
                                null != t && (h.payment_source_id = t);
                                null != s && (h.include_unpublished = s);
                                null != f && (h.revenue_surface = f);
                                d.query = h;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                _ = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: _.body
                                });
                                return [3, 6];
                            case 5:
                                y = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(y);
                                throw new i.Z(y);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e, n) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return h(e, n)
                })))
            }

            function v(e, n, t) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return h(r, e, n, void 0, t)
                })))
            }

            function O() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        77413: (e, n, t) => {
            t.d(n, {
                Z: () => U
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                u = t.n(i),
                a = t(973935),
                l = t(809784),
                c = t(202351),
                s = t(874049),
                f = t(968449),
                d = t(674482),
                p = t(330484),
                h = t(775173),
                _ = t(38004),
                y = t(771333),
                v = t(936957);

            function O(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function g(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && C(e, n)
            }

            function I(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        S(e, n, t[n])
                    }))
                }
                return e
            }

            function T(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function m(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function A(e, n) {
                return !n || "object" !== P(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function C(e, n) {
                C = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return C(e, n)
            }

            function R(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
                var n = function() {
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
                    var t, r = b(e);
                    if (n) {
                        var o = b(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return A(this, t)
                }
            }
            var w = function(e) {
                g(t, e);
                var n = N(t);

                function t() {
                    E(this, t);
                    var e;
                    (e = n.apply(this, arguments)).state = {
                        hover: !1
                    };
                    e.key = void 0;
                    e.onError = function() {
                        var n = e.getSrc();
                        null != n && (e.cancelLoadImage = (0, s.po)(n, (function(n) {
                            if (!n) {
                                e.key = Date.now();
                                e.forceUpdate()
                            }
                        })))
                    };
                    e.onMouseEnter = function(n) {
                        e.setState({
                            hover: !0
                        });
                        var t = e.props.onMouseEnter;
                        null != t && t(n)
                    };
                    e.onMouseLeave = function(n) {
                        e.setState({
                            hover: !1
                        });
                        var t = e.props.onMouseLeave;
                        null != t && t(n)
                    };
                    return e
                }
                var i = t.prototype;
                i.componentWillUnmount = function() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                };
                i.getSrc = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        n = e.src,
                        t = e.emojiId,
                        r = e.emojiName,
                        o = e.animated,
                        i = e.shouldAnimate,
                        u = e.isFocused,
                        a = e.isInteracting,
                        l = e.size,
                        c = void 0 === l ? "default" : l,
                        s = this.state.hover;
                    if (null != n) return n;
                    if (null != t) {
                        var f = v.kV[c];
                        return h.ZP.getEmojiURL({
                            id: t,
                            animated: u && !0 === o && (!0 === i || s || !0 === a),
                            size: f
                        })
                    }
                    return null != r ? _.ZP.getURL(r) : void 0
                };
                i.render = function() {
                    var e, n, t = this.props,
                        i = t.emojiName,
                        a = t.animated,
                        l = t.className,
                        c = t.size,
                        s = void 0 === c ? "default" : c,
                        f = t.alt,
                        d = (t.shouldAnimate, t.isFocused, t.emojiId),
                        p = (t.autoplay,
                            t.isInteracting, m(t, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                        h = this.getSrc();
                    if (null == h || "" === h) return (0, r.jsx)("span", {
                        className: u()("emoji", "emoji-text"),
                        children: i
                    });
                    a && (e = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    });
                    return (0, o.createElement)("img", I(T(I(T(I({}, p), {
                        key: this.key,
                        src: h,
                        alt: null !== (n = null != f ? f : i) && void 0 !== n ? n : void 0,
                        draggable: !1
                    }), e), {
                        className: u()("emoji", l, {
                            jumboable: "jumbo" === s
                        }),
                        onError: this.onError,
                        "data-type": "emoji"
                    }), null != d && "" !== d ? {
                        "data-id": d
                    } : {
                        "data-name": i
                    }))
                };
                return t
            }(o.PureComponent);
            w.defaultProps = {
                isInteracting: !1
            };
            var L = function(e) {
                var n = function(e) {
                        var n = a.findDOMNode(e);
                        if ((0, l.k)(n)) {
                            c.push([n, e]);
                            s.observe(n)
                        } else 0
                    },
                    t = function(e) {
                        var n = a.findDOMNode(e);
                        s.unobserve(n);
                        var t = c.findIndex((function(n) {
                            var t = R(n, 2);
                            t[0];
                            return t[1] === e
                        }));
                        if (-1 !== t) {
                            c.splice(t, 1);
                            if (-1 !== (t = u.indexOf(e))) {
                                u.splice(t, 1);
                                t < i && u.length >= i && u[i - 1].forceUpdate()
                            }
                        } else 0
                    };
                if (null == window.IntersectionObserver) return function(n) {
                    return (0, r.jsx)(e, T(I({}, n), {
                        shouldAnimate: n.animated
                    }))
                };
                var i = 100,
                    u = [],
                    c = [],
                    s = new window.IntersectionObserver((function(e) {
                        e.forEach((function(e) {
                            var n = c.find((function(n) {
                                return R(n, 1)[0] === e.target
                            }));
                            if (null != n) {
                                var t = n[1];
                                if (e.intersectionRatio >= .7) {
                                    var r, o;
                                    if (-1 !== u.indexOf(t)) {
                                        0;
                                        return
                                    }
                                    var a = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                    a ? u.unshift(t) : u.push(t);
                                    t.forceUpdate();
                                    a && u.length > i && u[i].forceUpdate()
                                } else {
                                    var l = u.indexOf(t);
                                    if (-1 !== l) {
                                        u.splice(l, 1);
                                        t.forceUpdate();
                                        l < i && u.length >= i && u[i - 1].forceUpdate()
                                    }
                                }
                            } else 0
                        }))
                    }), {
                        threshold: .7
                    });
                return function(o) {
                    g(l, o);
                    var a = N(l);

                    function l() {
                        E(this, l);
                        return a.apply(this, arguments)
                    }
                    var c = l.prototype;
                    c.shouldAutoplay = function(e) {
                        return e.animated && e.autoplay
                    };
                    c.componentDidMount = function() {
                        this.shouldAutoplay(this.props) && n(this)
                    };
                    c.componentDidUpdate = function(e) {
                        var r = this.shouldAutoplay(e),
                            o = this.shouldAutoplay(this.props);
                        o !== r && (o ? n(this) : t(this))
                    };
                    c.componentWillUnmount = function() {
                        this.shouldAutoplay(this.props) && t(this)
                    };
                    c.render = function() {
                        var n = u.indexOf(this),
                            t = this.props,
                            o = t.autoplay,
                            a = t.allowAnimatedEmoji,
                            l = m(t, ["autoplay", "allowAnimatedEmoji"]);
                        return (0, r.jsx)(p.G.Consumer, {
                            children: function(t) {
                                return (0, r.jsx)(e, T(I({}, l), {
                                    autoplay: o || !1,
                                    shouldAnimate: -1 !== n && n < i && !t.disableAnimations && a
                                }))
                            }
                        })
                    };
                    return l
                }(o.Component)
            }(w);

            function U(e) {
                var n = f.Yk.useSetting(),
                    t = {
                        autoplay: null == e.autoplay ? n : e.autoplay,
                        allowAnimatedEmoji: n
                    },
                    o = __OVERLAY__ ? (0, c.e7)([d.Z], (function() {
                        return d.Z.isInstanceFocused()
                    })) : (0, y.n)();
                return (0, r.jsx)(L, T(I({}, e, t), {
                    isFocused: o
                }))
            }
        },
        567678: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(785893),
                o = (t(667294), t(19585));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        i(e, n, t[n])
                    }))
                }
                return e
            }

            function a(e, n) {
                return function(t) {
                    var i = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(e, u({}, t))
                    })
                }
            }
        },
        777158: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(496486),
                o = t.n(r);

            function i(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                    return !0
                };
                return o()(e).map((function(e) {
                    return "null" === e.channel.id ? n[e.channel.id] : [e, n[e.channel.id]]
                })).flattenDeep().filter(t).value()
            }
        },
        728998: (e, n, t) => {
            t.d(n, {
                _: () => l
            });
            var r = t(409125),
                o = t(379991),
                i = t(664625),
                u = t(567403),
                a = t(407561);

            function l(e) {
                if (o.ZP.disableVoiceChannelChangeAlert) return !1;
                var n = r.Z.getRemoteSessionId();
                if (null != a.Z.getVoiceStateForSession(i.default.getId(), n)) return !1;
                if (!a.Z.isCurrentClientInVoiceChannel()) return !1;
                if (a.Z.isInChannel(e.id)) return !1;
                var t = u.Z.getGuild(e.getGuildId());
                return null == (null == t ? void 0 : t.afkChannelId) || !a.Z.isInChannel(t.afkChannelId)
            }
        },
        14096: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                o = (t(667294), t(304548)),
                i = t(116404),
                u = t(409125),
                a = t(784426),
                l = t(487685),
                c = t(671293),
                s = t(664625),
                f = t(715107),
                d = t(407561),
                p = t(728998),
                h = t(2590);

            function _(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            _(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            _(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var O = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            const E = {
                handleVoiceConnect: function(e) {
                    var n = e.channel,
                        _ = e.connected,
                        E = e.needSubscriptionToAccess,
                        S = e.locked,
                        b = void 0 !== S && S,
                        g = e.routeDirectlyToChannel,
                        I = void 0 !== g && g,
                        T = e.bypassChangeModal,
                        m = e.bypassGuildIdCheck,
                        A = void 0 !== m && m;
                    return y((function() {
                        var e, S, g, m, C;
                        return O(this, (function(R) {
                            switch (R.label) {
                                case 0:
                                    e = this;
                                    return n.isThread() ? [4, c.Z.unarchiveThreadIfNecessary(n.id)] : [3, 3];
                                case 1:
                                    R.sent();
                                    return l.Z.hasJoined(n.id) ? [3, 3] : [4, c.Z.joinThread(n, "Join Voice")];
                                case 2:
                                    R.sent();
                                    R.label = 3;
                                case 3:
                                    S = u.Z.getRemoteSessionId();
                                    g = d.Z.getVoiceStateForSession(s.default.getId(), S);
                                    m = (null == g ? void 0 : g.channelId) === n.id;
                                    C = m || f.Z.getChannelId() === d.Z.getCurrentClientVoiceChannelId(n.guild_id);
                                    if (!T && !b && (0, p._)(n)) return [2, new Promise((function(i) {
                                        var u = e;
                                        (0, o.openModalLazy)(y((function() {
                                            var e, o;
                                            return O(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, t.e(51562).then(t.bind(t, 851562))];
                                                    case 1:
                                                        e = a.sent(), o = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(o, function(e) {
                                                                for (var n = 1; n < arguments.length; n++) {
                                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                                        r = Object.keys(t);
                                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                                    }))));
                                                                    r.forEach((function(n) {
                                                                        v(e, n, t[n])
                                                                    }))
                                                                }
                                                                return e
                                                            }({
                                                                channel: n,
                                                                onConfirm: function() {
                                                                    return i(u.handleVoiceConnect({
                                                                        channel: n,
                                                                        connected: _,
                                                                        needSubscriptionToAccess: E,
                                                                        routeDirectlyToChannel: I,
                                                                        locked: b,
                                                                        bypassChangeModal: !0
                                                                    }))
                                                                }
                                                            }, e))
                                                        }]
                                                }
                                            }))
                                        })))
                                    }))];
                                    b || _ || i.default.selectVoiceChannel(n.id);
                                    !__OVERLAY__ && (_ || C || E || I) && function(e) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            t = e.getGuildId();
                                        if (null == t && !n) throw new Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                        (0, a.uL)(h.Z5c.CHANNEL(t, e.id))
                                    }(n, A);
                                    return [2, !0]
                            }
                        }))
                    })).apply(this)
                }
            }
        },
        881580: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => m
            });
            var r = t(785893),
                o = (t(667294),
                    t(304548)),
                i = t(971402),
                u = t(567678),
                a = t(153686),
                l = t(112897),
                c = t(13280),
                s = t(281873),
                f = t(422906),
                d = t(576668),
                p = t(929653),
                h = t(721376),
                _ = t(874710),
                y = t(703654),
                v = t(103314),
                O = t(313031),
                E = t(954814),
                S = t(839463),
                b = t(218318),
                g = t(40111),
                I = t(579583),
                T = t(473708);
            const m = (0, u.Z)((function(e) {
                var n = e.channel,
                    t = e.onSelect,
                    u = (0, f.Z)(n),
                    a = (0, p.Z)(n),
                    m = (0, b.Z)(n),
                    A = (0, s.Z)(n),
                    C = (0, v.Z)(n),
                    R = (0, d.Z)(n),
                    P = (0, l.Z)({
                        id: n.id,
                        label: T.Z.Messages.COPY_ID_THREAD
                    }),
                    N = (0, _.Z)(n, "Context Menu"),
                    w = (0, O.Z)(n),
                    L = (0, g.Z)(n),
                    U = (0, E.Z)(n),
                    Z = (0, S.Z)(n.id),
                    j = (0, y.Z)(n),
                    D = (0, I.Z)(n),
                    G = (0, h.Z)(n, {
                        hoist: !0
                    }),
                    F = (0, c.Z)(n);
                return (0, r.jsxs)(o.Menu, {
                    navId: "thread-context",
                    onClose: i.Zy,
                    "aria-label": T.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: t,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: a
                    }, "mark-as-read"), (0, r.jsxs)(o.MenuGroup, {
                        children: [N, j, A, C, U, Z, u, F]
                    }, "thread-actions"), (0, r.jsxs)(o.MenuGroup, {
                        children: [m, L]
                    }, "notifications"), (0, r.jsxs)(o.MenuGroup, {
                        children: [D, G, w, R]
                    }, "admin-actions"), (0, r.jsx)(o.MenuGroup, {
                        children: P
                    }, "developer-actions")]
                })
            }), [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU])
        },
        929653: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(304548),
                u = t(496916),
                a = t(358969),
                l = t(536945),
                c = t(487685),
                s = t(382060),
                f = t(877475),
                d = t(179913),
                p = t(2590),
                h = t(473708);

            function _(e) {
                var n = function(e) {
                    var n = (0, a.n2)(e.guild_id, e.id),
                        t = (0, o.e7)([d.ZP, f.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return d.ZP.isForumPostUnread(e.id);
                            if (e.type === p.d4z.GUILD_CATEGORY) {
                                var n = f.Z.getCategories(e.getGuildId());
                                if (null == n[e.id]) return !1;
                                if (n[e.id].some((function(e) {
                                        var n = e.channel;
                                        return (0, s.Em)(n.type) && d.ZP.hasUnread(n.id)
                                    }))) return !0;
                                var t = new Set(n[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = l.Z.getThreadsForGuild(e.guild_id);
                                for (var o in r)
                                    if (t.has(o))
                                        for (var i in r[o])
                                            if (c.Z.hasJoined(i) && !c.Z.isMuted(i) && d.ZP.hasUnread(i)) return !0;
                                return !1
                            }
                            return d.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? n > 0 : t
                }(e);
                return (0, r.jsx)(i.MenuItem, {
                    id: "mark-channel-read",
                    label: h.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.U6)(e)
                    },
                    disabled: !n
                })
            }
        },
        13280: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(304548),
                u = t(5544),
                a = t(419051),
                l = t(963985),
                c = t(790337),
                s = t(2590),
                f = t(473708);

            function d(e, n) {
                return e.type === s.d4z.GROUP_DM ? n ? f.Z.Messages.UNFAVORITE_GDM : f.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? n ? f.Z.Messages.UNFAVORITE_DM : f.Z.Messages.FAVORITE_DM : n ? f.Z.Messages.UNFAVORITE_CHANNEL : f.Z.Messages.FAVORITE_CHANNEL
            }

            function p(e) {
                var n = (0, o.e7)([a.Z], (function() {
                        return a.Z.isFavorite(e.id)
                    })),
                    t = function(e) {
                        var n = function(n) {
                                (0, l.kj)(e.id, n)
                            },
                            t = (0, o.e7)([u.ZP], (function() {
                                return u.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === t.length ? (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return n(null)
                            }
                        }) : (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return n(null)
                            },
                            children: t.map((function(e) {
                                return (0, r.jsx)(i.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return n(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    f = function(e) {
                        return (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !0),
                            action: function() {
                                (0, l.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : n ? f : t
            }
        },
        866893: (e, n, t) => {
            t.d(n, {
                U: () => Y,
                Z: () => z
            });
            var r = t(496486),
                o = t.n(r),
                i = t(920883),
                u = t(842227),
                a = t(202351),
                l = t(744564),
                c = t(536945),
                s = t(591684),
                f = t(664625),
                d = t(61209),
                p = t(179913),
                h = t(715107),
                _ = t(72580),
                y = t(474167);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function O(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function S(e, n) {
                return !n || "object" !== I(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function b(e, n) {
                b = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return b(e, n)
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
                var n = function() {
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
                    var t, r = E(e);
                    if (n) {
                        var o = E(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return S(this, t)
                }
            }
            var m, A = [],
                C = null,
                R = null,
                P = new Set,
                N = i.z.LATEST_ACTIVITY,
                w = 0,
                L = [],
                U = !1,
                Z = [],
                j = o().chain(A),
                D = o().chain(A),
                G = new Set,
                F = new Set;

            function M(e) {
                var n;
                return null !== (n = p.ZP.lastMessageId(e)) && void 0 !== n ? n : e
            }

            function k(e) {
                return function(n, t) {
                    return (0, y.yv)(n) ? -1 : (0, y.yv)(t) ? 1 : e === i.z.LATEST_ACTIVITY ? u.default.compare(M(t), M(n)) : u.default.compare(t, n)
                }
            }

            function x() {
                L = [];
                m = null;
                R = null;
                P = new Set;
                N = i.z.LATEST_ACTIVITY;
                w = 0;
                Z = [];
                j = o().chain(A);
                D = o().chain(A);
                F.clear();
                G.clear()
            }

            function H() {
                var e, n = h.Z.getChannelId();
                if (null == n || !(null === (e = d.Z.getChannel(n)) || void 0 === e ? void 0 : e.isForumLikeChannel())) {
                    x();
                    return !1
                }
                B({
                    refreshThreadIds: !0
                })
            }

            function Y(e) {
                var n = d.Z.getChannel(e);
                return null == n ? [] : Object.values(c.Z.getThreadsForParent(n.guild_id, n.id)).map((function(e) {
                    return e.id
                })).sort(k(N))
            }

            function B(e) {
                var n = d.Z.getChannel(R);
                if (null != n) {
                    if (null == e ? void 0 : e.refreshThreadIds) {
                        Z = Object.values(c.Z.getThreadsForParent(n.guild_id, n.id)).map((function(e) {
                            return e.id
                        }));
                        w = 0;
                        U = !0
                    }
                    if (0 !== G.size) {
                        Z = Z.filter((function(e) {
                            return !G.has(e)
                        }));
                        G.clear()
                    }
                    if (0 !== F.size) {
                        Z = Array.from(new Set(g(Z).concat(g(F))));
                        F.clear()
                    }
                    if ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) {
                        D = o().chain(Z).sort(k(i.z.LATEST_ACTIVITY));
                        j = o().chain(Z).sort(k(i.z.CREATION_DATE))
                    }
                    var t, r = (N === i.z.LATEST_ACTIVITY ? D : j).value(),
                        u = (L = 0 === P.size ? r : r.filter((t = P, function(e) {
                            var n, r = null === (n = d.Z.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                            return null != r && 0 !== r.length && r.some((function(e) {
                                return t.has(e)
                            }))
                        }))).find((function(e) {
                            return function(e) {
                                var n = s.Z.getCount(e);
                                return null === n || 0 === n
                            }(e)
                        }));
                    m = null == u ? null : u
                }
            }
            var V = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && b(e, n)
                }(t, e);
                var n = T(t);

                function t() {
                    O(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, c.Z, h.Z, p.ZP)
                };
                r.getNewThreadCount = function() {
                    return w
                };
                r.getCanAckThreads = function() {
                    return U
                };
                r.getThreadIds = function(e, n, t) {
                    var r = e !== R,
                        o = !(0, _.OL)(t, P),
                        i = n !== N;
                    R = e;
                    P = t;
                    N = n;
                    r ? B({
                        refreshThreadIds: !0
                    }) : i ? B({
                        sortThreadIds: !0
                    }) : o && B();
                    return L
                };
                r.getCurrentThreadIds = function() {
                    return L
                };
                r.getAndDeleteMostRecentUserCreatedThreadId = function() {
                    var e = C;
                    C = null;
                    return e
                };
                r.getFirstNoReplyThreadId = function() {
                    return m
                };
                return t
            }(a.ZP.Store);
            V.displayName = "ForumActivePostStore";
            const z = new V(l.Z, {
                CONNECTION_OPEN: H,
                OVERLAY_INITIALIZE: H,
                GUILD_CREATE: H,
                CHANNEL_SELECT: H,
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    if (null == n.parent_id || n.parent_id !== R) return !1;
                    x()
                },
                THREAD_LIST_SYNC: function(e) {
                    var n, t = e.guildId;
                    if (null == R) return !1;
                    if (t !== (null === (n = d.Z.getChannel(R)) || void 0 === n ? void 0 : n.guild_id)) return !1;
                    B({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    var n = e.channel,
                        t = e.isNewlyCreated;
                    if (null == n.parent_id || n.parent_id !== R) return !1;
                    if (!t) return !1;
                    n.ownerId !== f.default.getId() ? w++ : C = n.id
                },
                THREAD_UPDATE: function(e) {
                    var n = e.channel;
                    if (null == n.parent_id || n.parent_id !== R) return !1;
                    var t = (0, y.yv)(n.id),
                        r = F.has(n.id);
                    if (t && !r) {
                        F.add(n.id);
                        B({
                            sortThreadIds: !0
                        })
                    } else {
                        if (t || !r) return !1;
                        F.delete(n.id);
                        B({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    var n = e.channel;
                    if (null == n.parent_id || n.parent_id !== R) return !1;
                    G.add(n.id);
                    B({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    var n = e.channelId;
                    if (null == n || n !== R) return !1;
                    B({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    var n = e.channelId;
                    if (null == n || n !== R) return !1;
                    U = !1
                }
            })
        },
        165586: (e, n, t) => {
            t.d(n, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => d,
                no: () => p,
                ND: () => h,
                WC: () => y,
                z8: () => v,
                km: () => E,
                k0: () => S,
                af: () => b
            });
            var r, o, i, u, a = t(2590),
                l = t(203600),
                c = t(473708);

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
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
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function d(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var p = (s(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(u, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(u, i.PRESET_CUSTOM, []), u),
                h = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function _(e, n) {
                return {
                    value: e,
                    get label() {
                        return null != n ? n() : e
                    }
                }
            }
            var y = [_(r.RESOLUTION_720), _(r.RESOLUTION_1080), _(r.RESOLUTION_1440), _(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                v = [_(r.RESOLUTION_720), _(r.RESOLUTION_1080), _(r.RESOLUTION_1440)],
                O = function(e) {
                    return "".concat(e, "p")
                },
                E = [_(r.RESOLUTION_480, (function() {
                    return O(r.RESOLUTION_480)
                })), _(r.RESOLUTION_720, (function() {
                    return O(r.RESOLUTION_720)
                })), _(r.RESOLUTION_1080, (function() {
                    return O(r.RESOLUTION_1080)
                })), _(r.RESOLUTION_1440, (function() {
                    return O(r.RESOLUTION_1440)
                })), _(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                S = [_(o.FPS_15), _(o.FPS_30), _(o.FPS_60)],
                b = [_(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), _(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), _(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        773411: (e, n, t) => {
            t.d(n, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => h,
                bO: () => _,
                Xp: () => y,
                fV: () => v
            });
            var r = t(202351),
                o = t(747820),
                i = t(260561),
                u = t(339432),
                a = t(5544),
                l = t(567403),
                c = t(2590);

            function s(e, n, t) {
                return n.getChannels(e)[a.sH].filter((function(n) {
                    var r = n.channel;
                    return !t.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var n = (0, r.e7)([a.ZP, o.Z], (function() {
                    return null != e && s(e.id, a.ZP, o.Z)
                }));
                return !__OVERLAY__ && (!!n && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var n = l.Z.getGuild(e);
                return null != n && (!!s(e, a.ZP, o.Z) && n.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, i.B)({
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
                h = (0, i.B)({
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
                _ = (0, i.B)({
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
                y = ((0, i.B)({
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
                }), (0, i.B)({
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
                }), (0, i.B)({
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
                v = (0, i.B)({
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
        414306: (e, n, t) => {
            t.d(n, {
                Z: () => c,
                $: () => s
            });
            var r = t(202351),
                o = t(747820),
                i = t(61209),
                u = t(682776),
                a = t(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([i.Z, o.Z, u.Z], (function() {
                    return s(e, i.Z, o.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    c = n.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !t.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(a.Plq.CONNECT, c) : !r.can(a.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        52317: (e, n, t) => {
            t.d(n, {
                Z: () => j
            });
            var r = t(496486),
                o = t.n(r),
                i = t(281110),
                u = t(914716),
                a = t(296602),
                l = t(968968),
                c = t(61209),
                s = t(2590);

            function f(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function p(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function y(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        h(e, n, t[n])
                    }))
                }
                return e
            }

            function v(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function O(e, n) {
                return !n || "object" !== S(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function E(e, n) {
                E = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return E(e, n)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var n = function() {
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
                    var t, r = _(e);
                    if (n) {
                        var o = _(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return O(this, t)
                }
            }
            var g = function(e, n) {
                    var t, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, u)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                I = {},
                T = new a.Z("UserGuildSettingsManager"),
                m = 0;

            function A() {
                I = y({}, l.Z.getCollapsedCategories())
            }

            function C() {
                if (!__OVERLAY__) {
                    clearTimeout(m);
                    m = setTimeout((function() {
                        return R()
                    }), 15e3)
                }
            }

            function R(e, n) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = d((function(e, n) {
                    return g(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, N(null != n ? h({}, null != e ? e : s.ME, n) : {})];
                            case 1:
                                t.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = d((function(e) {
                    var n, t, r, u, a, f, d;
                    return g(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(m);
                                n = 0 !== Object.keys(e).length;
                                t = l.Z.getCollapsedCategories();
                                r = L();
                                for (var h in r)
                                    if (null != (u = c.Z.getChannel(h)) && null != u.guild_id) {
                                        u.guild_id in e || (e[u.guild_id] = {});
                                        null == e[u.guild_id].channel_overrides && (e[u.guild_id].channel_overrides = {});
                                        e[u.guild_id].channel_overrides[u.id] = v(y({}, e[u.guild_id].channel_overrides[u.id]), {
                                            collapsed: u.id in t
                                        });
                                        n = !0
                                    } if (!n) return [2];
                                I = y({}, t);
                                a = o().map(e, (function(e, n) {
                                    return {
                                        guildId: n,
                                        updates: e,
                                        attempts: 0
                                    }
                                }));
                                p.label = 1;
                            case 1:
                                if (!(a.length > 0)) return [3, 8];
                                if ((f = a.shift()).guildId === s.I_8) return [3, 1];
                                p.label = 2;
                            case 2:
                                p.trys.push([2, 5, , 7]);
                                return [4, i.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, U(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                T.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && a.push(f);
                                return [4, U(5e3)];
                            case 6:
                                p.sent();
                                return [3, 7];
                            case 7:
                                return [3, 1];
                            case 8:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function L() {
                var e = {},
                    n = l.Z.getCollapsedCategories();
                for (var t in n) n[t] !== I[t] && (e[t] = !0);
                for (var r in I) n[r] !== I[r] && (e[r] = !0);
                return e
            }

            function U(e) {
                return new Promise((function(n) {
                    return setTimeout(n, e + Math.ceil(e * Math.random()))
                }))
            }

            function Z() {
                I = y({}, l.Z.getCollapsedCategories())
            }
            const j = new(function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && E(e, n)
                }(t, e);
                var n = b(t);

                function t() {
                    p(this, t);
                    var e;
                    (e = n.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: C,
                        CATEGORY_EXPAND: C,
                        CATEGORY_COLLAPSE_ALL: C,
                        CATEGORY_EXPAND_ALL: C,
                        POST_CONNECTION_OPEN: A,
                        USER_GUILD_SETTINGS_FULL_UPDATE: Z
                    };
                    e.saveUserGuildSettings = R;
                    e.saveUserGuildSettingsBulk = N;
                    return e
                }
                return t
            }(u.Z))
        },
        205294: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, n) {
                return !n || "object" !== a(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function u(e, n) {
                u = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return u(e, n)
            }
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
                var n = function() {
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
                    var t, r = o(e);
                    if (n) {
                        var u = o(this).constructor;
                        t = Reflect.construct(r, arguments, u)
                    } else t = r.apply(this, arguments);
                    return i(this, t)
                }
            }
            const c = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && u(e, n)
                }(t, e);
                var n = l(t);

                function t(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r;
                    (r = n.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = t.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                t.createFromServer = function(e, n) {
                    return new t({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: n
                    })
                };
                return t
            }(r.Z)
        },
        968968: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(202351),
                o = t(744564),
                i = t(72580),
                u = t(61209),
                a = t(837067),
                l = t(5544),
                c = t(2590);

            function s(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
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

            function p(e, n) {
                return !n || "object" !== _(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function h(e, n) {
                h = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return h(e, n)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
                var n = function() {
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
                    var t, r = d(e);
                    if (n) {
                        var o = d(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return p(this, t)
                }
            }
            var v = {},
                O = 0;

            function E() {
                O += 1
            }

            function S(e) {
                if (null == v[e]) return !1;
                delete v[e]
            }
            var b = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && h(e, n)
                }(t, e);
                var n = y(t);

                function t() {
                    s(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    this.waitFor(u.Z, a.Z);
                    this.removeChangeListener(E);
                    this.addChangeListener(E);
                    v = null != e ? e : {}
                };
                r.getState = function() {
                    return v
                };
                r.isCollapsed = function(e) {
                    return !(null == e || "null" === e || !v[e]) && v[e]
                };
                r.getCollapsedCategories = function() {
                    return v
                };
                ! function(e, n, t) {
                    n && f(e.prototype, n);
                    t && f(e, t)
                }(t, [{
                    key: "version",
                    get: function() {
                        return O
                    }
                }]);
                return t
            }(r.ZP.PersistedStore);
            b.displayName = "CategoryCollapseStore";
            b.persistKey = "collapsedCategories";
            const g = new b(o.Z, {
                CONNECTION_OPEN: function(e) {
                    e.userGuildSettings.partial || (v = {});
                    var n = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var o, i = e.userGuildSettings.entries[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                            var u = o.value;
                            if (null != u.channel_overrides) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = u.channel_overrides[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                                        var d = s.value;
                                        d.collapsed ? v[d.channel_id] = !0 : delete v[d.channel_id]
                                    }
                                } catch (e) {
                                    l = !0;
                                    c = e
                                } finally {
                                    try {
                                        a || null == f.return || f.return()
                                    } finally {
                                        if (l) throw c
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        t = !0;
                        r = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    var n = e.userGuildSettings,
                        t = new Set(n.map((function(e) {
                            return e.guild_id
                        })).filter(i.lm));
                    for (var r in v) {
                        var o = u.Z.getChannel(r);
                        null != o && null != o.guild_id && t.has(o.guild_id) && delete v[o.id]
                    }
                    var a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, f = n[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                            var d = s.value,
                                p = !0,
                                h = !1,
                                _ = void 0;
                            try {
                                for (var y, O = d.channel_overrides[Symbol.iterator](); !(p = (y = O.next()).done); p = !0) {
                                    var E = y.value;
                                    E.collapsed && (v[E.channel_id] = !0)
                                }
                            } catch (e) {
                                h = !0;
                                _ = e
                            } finally {
                                try {
                                    p || null == O.return || O.return()
                                } finally {
                                    if (h) throw _
                                }
                            }
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            a || null == f.return || f.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(e) {
                    var n = e.id;
                    if (v[n]) return !1;
                    v[n] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    return S(e.id)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    var n = e.guildId;
                    l.ZP.getChannels(n)[c.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var n = e.channel;
                        "null" !== n.id && (v[n.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    var n = e.guildId;
                    l.ZP.getChannels(n)[c.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var n = e.channel;
                        delete v[n.id]
                    }))
                },
                CHANNEL_DELETE: function(e) {
                    return S(e.channel.id)
                }
            })
        },
        877475: (e, n, t) => {
            t.d(n, {
                Z: () => w
            });
            var r = t(202351),
                o = t(744564),
                i = t(777158),
                u = t(419051),
                a = t(664625),
                l = t(61209),
                c = t(5544),
                s = t(567403),
                f = t(2590);

            function d(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, n) {
                return !n || "object" !== y(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function _(e, n) {
                _ = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return _(e, n)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
                var n = function() {
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
                    var t, r = p(e);
                    if (n) {
                        var o = p(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return h(this, t)
                }
            }
            var O = null,
                E = {},
                S = null;
            var b = {
                _categories: [],
                null: []
            };

            function g(e, n) {
                e.index = n
            }

            function I(e) {
                var n = c.ZP.getChannels(e),
                    t = {
                        _categories: [],
                        null: []
                    },
                    r = function(e) {
                        var n, r = e.channel;
                        (null !== (n = t[null != r.parent_id ? r.parent_id : "null"]) && void 0 !== n ? n : t.null).push({
                            channel: r,
                            index: -1
                        })
                    };
                n[f.d4z.GUILD_CATEGORY].forEach((function(e) {
                    var n = e.channel;
                    t._categories.push({
                        channel: n,
                        index: -1
                    });
                    t[n.id] = []
                }));
                n[c.sH].forEach(r);
                n[c.Zb].forEach(r);
                (0,
                    i.Z)(t._categories, t).forEach(g);
                E[e] = t;
                return t
            }

            function T() {
                E = {};
                null != O && I(O)
            }

            function m(e) {
                var n = e.guild.id;
                E[n] = void 0;
                O === n && I(n)
            }

            function A(e) {
                var n = e.channel.guild_id;
                if (null == n) return !1;
                E[n] = void 0;
                O === n && I(n)
            }

            function C(e) {
                var n = e.guildId;
                E[n] = void 0;
                n === O && I(n)
            }

            function R(e, n) {
                S = n;
                if (null == e || null == e.getGuildId()) return !1;
                var t = e.getGuildId();
                if (null == t) return !1;
                E[t] = void 0;
                t === O && I(t);
                return !0
            }

            function P() {
                I(f.I_8)
            }
            var N = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && _(e, n)
                }(t, e);
                var n = v(t);

                function t() {
                    d(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(c.ZP, s.Z, a.default, l.Z, u.Z);
                    this.syncWith([u.Z], P)
                };
                r.getCategories = function(e) {
                    return null != e ? function(e) {
                        var n = E[e];
                        return null != n ? n : I(e)
                    }(e) : b
                };
                return t
            }(r.ZP.Store);
            N.displayName = "GuildCategoryStore";
            const w = new N(o.Z, {
                CHANNEL_SELECT: function(e) {
                    var n = e.guildId;
                    O = null != n ? n : null;
                    if (null == n) return !1;
                    if (null != E[n]) return !1;
                    I(n)
                },
                CONNECTION_OPEN: T,
                OVERLAY_INITIALIZE: T,
                CACHE_LOADED_LAZY: T,
                GUILD_CREATE: m,
                GUILD_UPDATE: m,
                GUILD_DELETE: function(e) {
                    var n = e.guild.id;
                    delete E[n]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(e) {
                    var n = e.channels,
                        t = !1,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = n[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var l = u.value.guild_id;
                            if (null != l) {
                                E[l] = void 0;
                                t = !0;
                                O === l && I(l)
                            }
                        }
                    } catch (e) {
                        o = !0;
                        i = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return t
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.user;
                    if (a.default.getId() !== t.id) return !1;
                    E[n] = void 0;
                    n === O && I(n)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == O) return !1;
                    I(O)
                },
                GUILD_ROLE_CREATE: C,
                GUILD_ROLE_UPDATE: C,
                GUILD_ROLE_DELETE: C,
                IMPERSONATE_UPDATE: C,
                IMPERSONATE_STOP: C,
                VOICE_CHANNEL_SELECT: function(e) {
                    var n = e.channelId;
                    return null == n && null != S ? R(l.Z.getChannel(S), null) : R(l.Z.getChannel(n), n)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, n) {
                        var t = n.channelId,
                            r = n.sessionId;
                        return a.default.getSessionId() !== r ? e : R(l.Z.getChannel(t), t) || e
                    }), !1)
                }
            })
        },
        50433: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(202351),
                o = t(744564);

            function i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function u(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function c(e, n) {
                c = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return c(e, n)
            }

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var n = function() {
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
                    var t, r = a(e);
                    if (n) {
                        var o = a(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return l(this, t)
                }
            }
            var p = [];

            function h() {
                p = []
            }
            var _ = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && c(e, n)
                }(t, e);
                var n = d(t);

                function t() {
                    u(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                return t
            }(r.ZP.Store);
            _.displayName = "LayerStore";
            const y = new _(o.Z, {
                LAYER_PUSH: function(e) {
                    var n = e.component;
                    if (p.indexOf(n) >= 0) return !1;
                    p = s(p).concat([n])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: h,
                LOGOUT: h,
                NOTIFICATION_CLICK: h
            })
        },
        330484: (e, n, t) => {
            t.d(n, {
                G: () => r
            });
            var r = t(667294).createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        771333: (e, n, t) => {
            t.d(n, {
                n: () => a
            });
            var r = t(667294),
                o = t(202351),
                i = t(26468),
                u = t(901654);

            function a() {
                var e = r.useContext(i.ZP).windowId;
                return (0, o.e7)([u.Z], (function() {
                    return u.Z.isFocused(e)
                }), [e])
            }
        },
        482507: (e, n, t) => {
            t.d(n, {
                J: () => r
            });

            function r(e) {
                var n = document.body;
                if (null == n) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var t = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                n.appendChild(o);
                t.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(t);
                o.focus();
                o.setSelectionRange(0, e.length);
                var i = document.execCommand("copy");
                n.removeChild(o);
                return i
            }
        }
    }
]);