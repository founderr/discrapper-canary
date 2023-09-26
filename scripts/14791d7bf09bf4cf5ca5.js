"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1459], {
        201459: (t, e, n) => {
            n.d(e, {
                Z: () => y
            });
            var r = n(730381),
                i = n.n(r),
                o = n(575945),
                u = n(744564),
                a = n(52317),
                l = n(9430),
                c = n(171940),
                s = n(131559),
                f = n(473708);

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const y = {
                open: function(t) {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: t
                    })
                },
                close: function() {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(t, e, n) {
                    var r = (0, c.GA)(t);
                    a.Z.saveUserGuildSettings(t, e);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: t,
                        settings: e
                    });
                    (0, c.Wq)(t, e, r, n)
                },
                updateGuildAndChannelNotificationSettings: function(t, e, n) {
                    var r = Object.keys(e.channel_overrides),
                        i = (0, c.GA)(t),
                        o = (0, c.wK)(t, r);
                    a.Z.saveUserGuildSettings(t, e);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: t,
                        settings: e
                    });
                    (0, c.Wq)(t, e, i, n);
                    Object.keys(e.channel_overrides).forEach((function(r) {
                        var i = o.get(r);
                        (0, c.jz)(t, r, e.channel_overrides[r], i, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(t, e) {
                    var n = Object.keys(t),
                        r = (0, c.rU)(n);
                    a.Z.saveUserGuildSettingsBulk(t);
                    Object.entries(t).forEach((function(t) {
                        var n = h(t, 2),
                            i = n[0],
                            o = n[1],
                            a = r.get(i);
                        u.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: o
                        });
                        (0, c.Wq)(i, o, a, e)
                    }))
                },
                updateChannelOverrideSettings: function(t, e, n, r) {
                    var i = (0, c.I)(t, e),
                        l = {
                            channel_overrides: p({}, e, n)
                        };
                    a.Z.saveUserGuildSettings(t, l);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: t,
                        channelId: e,
                        settings: n
                    });
                    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(t, e, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(t, e, n) {
                    var r = Object.keys(e),
                        i = {
                            channel_overrides: e
                        },
                        o = (0, c.wK)(t, r);
                    a.Z.saveUserGuildSettings(t, i);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: t,
                        overrides: e
                    });
                    Object.keys(e).forEach((function(r) {
                        return (0,
                            c.jz)(t, r, e[r], o.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(t, e) {
                    var n = e ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = e ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        i = l.Z.getChannelFlags(t) & ~r | n;
                    this.updateChannelOverrideSettings(t.guild_id, t.id, {
                        flags: i
                    })
                },
                handleCheckboxChange: function(t, e, n, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: t,
                        updatedSettings: p({}, e, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(t, e, n, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: t,
                        updatedSettings: p({}, e, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(t, e, n) {
                    var r = {
                        selected_time_window: e,
                        end_time: e > 0 ? i()().add(e, "second").toISOString() : null
                    };
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, t, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(t, e, n) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: t,
                        updatedSettings: {
                            notifyHighlights: e
                        },
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleProfileChange: function(t, e) {
                    u.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: e.id,
                        profile: t.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        52317: (t, e, n) => {
            n.d(e, {
                Z: () => R
            });
            var r = n(496486),
                i = n.n(r),
                o = n(281110),
                u = n(914716),
                a = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function f(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function d(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            f(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            f(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        h(t, e, n[e])
                    }))
                }
                return t
            }

            function g(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function v(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function O(t, e) {
                O = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return O(t, e)
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function E(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(t);
                    if (e) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var S = function(t, e) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                I = {},
                T = new a.Z("UserGuildSettingsManager"),
                C = 0;

            function N() {
                I = _({}, l.Z.getCollapsedCategories())
            }

            function A() {
                if (!__OVERLAY__) {
                    clearTimeout(C);
                    C = setTimeout((function() {
                        return P()
                    }), 15e3)
                }
            }

            function P(t, e) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = d((function(t, e) {
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, G(null != e ? h({}, null != t ? t : s.ME, e) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = d((function(t) {
                    var e, n, r, u, a, f, d;
                    return S(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(C);
                                e = 0 !== Object.keys(t).length;
                                n = l.Z.getCollapsedCategories();
                                r = L();
                                for (var h in r)
                                    if (null != (u = c.Z.getChannel(h)) && null != u.guild_id) {
                                        u.guild_id in t || (t[u.guild_id] = {});
                                        null == t[u.guild_id].channel_overrides && (t[u.guild_id].channel_overrides = {});
                                        t[u.guild_id].channel_overrides[u.id] = g(_({}, t[u.guild_id].channel_overrides[u.id]), {
                                            collapsed: u.id in n
                                        });
                                        e = !0
                                    } if (!e) return [2];
                                I = _({}, n);
                                a = i().map(t, (function(t, e) {
                                    return {
                                        guildId: e,
                                        updates: t,
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
                                return [4, o.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, m(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                T.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && a.push(f);
                                return [4, m(5e3)];
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
                var t = {},
                    e = l.Z.getCollapsedCategories();
                for (var n in e) e[n] !== I[n] && (t[n] = !0);
                for (var r in I) e[r] !== I[r] && (t[r] = !0);
                return t
            }

            function m(t) {
                return new Promise((function(e) {
                    return setTimeout(e, t + Math.ceil(t * Math.random()))
                }))
            }

            function D() {
                I = _({}, l.Z.getCollapsedCategories())
            }
            const R = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && O(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    p(this, n);
                    var t;
                    (t = e.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: A,
                        CATEGORY_EXPAND: A,
                        CATEGORY_COLLAPSE_ALL: A,
                        CATEGORY_EXPAND_ALL: A,
                        POST_CONNECTION_OPEN: N,
                        USER_GUILD_SETTINGS_FULL_UPDATE: D
                    };
                    t.saveUserGuildSettings = P;
                    t.saveUserGuildSettingsBulk = G;
                    return t
                }
                return n
            }(u.Z))
        },
        968968: (t, e, n) => {
            n.d(e, {
                Z: () => S
            });
            var r = n(202351),
                i = n(744564),
                o = n(72580),
                u = n(61209),
                a = n(837067),
                l = n(5544),
                c = n(2590);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function d(t) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return d(t)
            }

            function p(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(t);
                    if (e) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var g = {},
                v = 0;

            function O() {
                v += 1
            }

            function b(t) {
                if (null == g[t]) return !1;
                delete g[t]
            }
            var E = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = _(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(t) {
                    this.waitFor(u.Z, a.Z);
                    this.removeChangeListener(O);
                    this.addChangeListener(O);
                    g = null != t ? t : {}
                };
                r.getState = function() {
                    return g
                };
                r.isCollapsed = function(t) {
                    return !(null == t || "null" === t || !g[t]) && g[t]
                };
                r.getCollapsedCategories = function() {
                    return g
                };
                ! function(t, e, n) {
                    e && f(t.prototype, e);
                    n && f(t, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return v
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "CategoryCollapseStore";
            E.persistKey = "collapsedCategories";
            const S = new E(i.Z, {
                CONNECTION_OPEN: function(t) {
                    t.userGuildSettings.partial || (g = {});
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = t.userGuildSettings.entries[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                            var u = i.value;
                            if (null != u.channel_overrides) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = u.channel_overrides[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                                        var d = s.value;
                                        d.collapsed ? g[d.channel_id] = !0 : delete g[d.channel_id]
                                    }
                                } catch (t) {
                                    l = !0;
                                    c = t
                                } finally {
                                    try {
                                        a || null == f.return || f.return()
                                    } finally {
                                        if (l) throw c
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        n = !0;
                        r = t
                    } finally {
                        try {
                            e || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(t) {
                    var e = t.userGuildSettings,
                        n = new Set(e.map((function(t) {
                            return t.guild_id
                        })).filter(o.lm));
                    for (var r in g) {
                        var i = u.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete g[i.id]
                    }
                    var a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, f = e[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                            var d = s.value,
                                p = !0,
                                h = !1,
                                y = void 0;
                            try {
                                for (var _, v = d.channel_overrides[Symbol.iterator](); !(p = (_ = v.next()).done); p = !0) {
                                    var O = _.value;
                                    O.collapsed && (g[O.channel_id] = !0)
                                }
                            } catch (t) {
                                h = !0;
                                y = t
                            } finally {
                                try {
                                    p || null == v.return || v.return()
                                } finally {
                                    if (h) throw y
                                }
                            }
                        }
                    } catch (t) {
                        l = !0;
                        c = t
                    } finally {
                        try {
                            a || null == f.return || f.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(t) {
                    var e = t.id;
                    if (g[e]) return !1;
                    g[e] = !0
                },
                CATEGORY_EXPAND: function(t) {
                    return b(t.id)
                },
                CATEGORY_COLLAPSE_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        "null" !== e.id && (g[e.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        delete g[e.id]
                    }))
                },
                CHANNEL_DELETE: function(t) {
                    return b(t.channel.id)
                }
            })
        }
    }
]);