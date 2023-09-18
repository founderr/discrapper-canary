"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73622], {
        273622: (e, t, n) => {
            n.r(t);
            n.d(t, {
                ClydeEditProfileModalContent: () => m,
                default: () => I
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                s = n(882723),
                a = n(330481),
                l = n(167749),
                c = n(107364),
                u = n(318715),
                d = n(369263),
                f = n(2590),
                p = n(473708),
                h = n(932886),
                g = n.n(h);

            function S(e) {
                var t, n = e.settings,
                    i = (0, u.cj)([l.Z], (function() {
                        return {
                            pendingPersonality: l.Z.getPendingPersonality(),
                            errors: l.Z.getErrors()
                        }
                    })),
                    o = i.pendingPersonality,
                    c = i.errors,
                    h = null != c && Number(c.code) === f.evJ.CLYDE_UNSAFE_PERSONALITY ? c.message : void 0;
                return (0, r.jsxs)(d.Z, {
                    title: p.Z.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, r.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: g().description,
                        children: [p.Z.Messages.PERSONALITY_DESCRIPTION, " ", (0, r.jsx)(s.Anchor, {
                            href: "https://forms.gle/T12GPi33Pt5ocg89A",
                            children: p.Z.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, r.jsx)(s.TextArea, {
                        value: null !== (t = null != o ? o : n.personality) && void 0 !== t ? t : "",
                        onChange: function(e) {
                            (0, a.j7)(e)
                        },
                        placeholder: p.Z.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: 500,
                        autosize: !0
                    }), null != h ? (0, r.jsx)(s.FormErrorBlock, {
                        className: g().errorBlock,
                        children: h
                    }) : null]
                }, "personality")
            }
            var y = n(808841),
                E = n.n(y);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e, t) {
                var n, r, i, o, s = {
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
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
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
                        }([o, a])
                    }
                }
            };

            function m(e) {
                var t = e.onClose,
                    n = e.guildId,
                    u = (0, o.cj)([l.Z], (function() {
                        return {
                            settings: l.Z.getSettings(n),
                            isFetchingSettings: l.Z.isFetchingSettings(n),
                            isSavingSettings: l.Z.isSavingSettings(),
                            hasPendingChanges: l.Z.hasPendingChanges(),
                            errors: l.Z.getErrors()
                        }
                    })),
                    d = u.settings,
                    f = u.isFetchingSettings,
                    h = u.isSavingSettings,
                    g = u.hasPendingChanges,
                    y = u.errors,
                    v = _(i.useState(!1), 2),
                    m = v[0],
                    I = v[1];
                i.useEffect((function() {
                    (0, a.Bn)(n, !0)
                }), [n]);
                i.useEffect((function() {
                    (g || null != y) && I(!1)
                }), [g, y]);
                var N, C, j = (C = (N = function() {
                    var e;
                    return T(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                e = l.Z.getPendingPersonality();
                                return null == n || null == e ? [2] : [4, (0, a.eZ)({
                                    guild_id: n,
                                    personality: e
                                })];
                            case 1:
                                t.sent();
                                I(!0);
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var i = N.apply(e, t);

                        function o(e) {
                            b(i, n, r, o, s, "next", e)
                        }

                        function s(e) {
                            b(i, n, r, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }), function() {
                    return C.apply(this, arguments)
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: E().heading,
                            children: (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: p.Z.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, r.jsx)("div", {
                        className: E().content,
                        children: f ? (0, r.jsx)(s.Spinner, {
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : null != d && (0, r.jsx)("div", {
                            className: E().section,
                            children: (0, r.jsx)(S, {
                                settings: d
                            })
                        })
                    }), (0, r.jsxs)(s.ModalFooter, {
                        direction: c.Z.Direction.HORIZONTAL,
                        className: E().footer,
                        children: [(0, r.jsx)("div", {
                            className: E().resetButtonContainer,
                            children: (0, r.jsx)(s.Button, {
                                onClick: a.c6,
                                color: s.ButtonColors.PRIMARY,
                                size: s.ButtonSizes.SMALL,
                                disabled: !g,
                                children: p.Z.Messages.RESET
                            })
                        }), g && null == y && (0, r.jsx)("div", {
                            className: E().pendingChangesMessage,
                            children: p.Z.Messages.SETTINGS_NOTICE_MESSAGE
                        }), m && (0, r.jsx)("div", {
                            className: E().successfullSaveMessage,
                            children: p.Z.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != y && (0, r.jsx)("div", {
                            className: E().errorMessage,
                            children: p.Z.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(s.Button, {
                                onClick: j,
                                color: s.ButtonColors.GREEN,
                                size: s.ButtonSizes.SMALL,
                                submitting: h,
                                disabled: !g,
                                children: p.Z.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function I(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    i = e.guildId;
                return (0, r.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.LARGE,
                    children: (0, r.jsx)(m, {
                        onClose: n,
                        guildId: i
                    })
                })
            }
        },
        330481: (e, t, n) => {
            n.d(t, {
                eZ: () => d,
                j7: () => p,
                c6: () => h,
                Bn: () => g
            });
            var r = n(281110),
                i = n(744564),
                o = n(167749),
                s = n(2590);

            function a(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            a(o, r, i, s, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function c(e, t) {
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
            var u = function(e, t) {
                var n, r, i, o, s = {
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
                            for (; s;) try {
                                if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
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
                        }([o, a])
                    }
                }
            };

            function d(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = l((function(e) {
                    var t, n, o;
                    return u(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_START"
                                });
                                t = e.guild_id, n = c(e, ["guild_id"]);
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: s.ANM.GUILD_CLYDE_SETTINGS(t),
                                    oldFormErrors: !0,
                                    body: n
                                })];
                            case 2:
                                a.sent();
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_SUCCESS",
                                    settings: e
                                });
                                return [3, 4];
                            case 3:
                                o = a.sent();
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_FAIL",
                                    errors: o.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function h() {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function g(e) {
                return S.apply(this, arguments)
            }

            function S() {
                S = l((function(e) {
                    var t, n, a = arguments;
                    return u(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                if (!(a.length > 1 && void 0 !== a[1] && a[1]) && !o.Z.shouldFetchSettings(e)) return [2];
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_START",
                                    guildId: e
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: s.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = l.sent();
                                n = t.body;
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_SUCCESS",
                                    guildId: n.guild_id,
                                    settings: n
                                });
                                return [3, 4];
                            case 3:
                                l.sent();
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return S.apply(this, arguments)
            }
        },
        167749: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
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
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var d, f = !1,
                p = null,
                h = {},
                g = {},
                S = 36e5;

            function y() {
                d = null;
                p = null
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = u(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.showNotice = function() {
                    return null != d
                };
                r.getSettings = function(e) {
                    if (null != e) return h[e]
                };
                r.getPendingPersonality = function() {
                    return d
                };
                r.getErrors = function() {
                    return p
                };
                r.hasPendingChanges = function() {
                    return null != d
                };
                r.isSavingSettings = function() {
                    return f
                };
                r.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = g[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.shouldFetchSettings = function(e) {
                    var t, n, r = null !== (t = g[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now() - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > S;
                    return !(null == r ? void 0 : r.isFetching) && i
                };
                r.__getLocalVars = function() {
                    return {
                        isSavingSettings: f,
                        errors: p,
                        pendingPersonality: d,
                        settingsByGuild: h,
                        settingsFetchStatus: g,
                        CACHE_TIME_MS: S
                    }
                };
                return n
            }(r.ZP.Store);
            E.displayName = "GuildSettingsClydeStore";
            const v = new E(i.Z, {
                GUILD_SETTINGS_CLYDE_FETCH_START: function(e) {
                    var t = e.guildId,
                        n = g[t];
                    g[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                GUILD_SETTINGS_CLYDE_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.settings;
                    g[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    h[t] = n
                },
                GUILD_SETTINGS_CLYDE_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        n = g[t];
                    g[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    d = t
                },
                GUILD_SETTINGS_CLYDE_SAVE_START: function() {
                    p = null;
                    f = !0
                },
                GUILD_SETTINGS_CLYDE_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    f = !1;
                    d = null;
                    h[t.guild_id] = t;
                    y()
                },
                GUILD_SETTINGS_CLYDE_SAVE_FAIL: function(e) {
                    f = !1;
                    p = e.errors
                },
                GUILD_SETTINGS_CLYDE_RESET_PENDING_CHANGES: y
            })
        },
        102007: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                s = n(882723),
                a = n(95891),
                l = n(473708),
                c = n(200416),
                u = n.n(c);

            function d(e, t, n) {
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

            function p(e) {
                var t = e.text,
                    n = void 0 === t ? l.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : t,
                    i = e.className;
                return (0, r.jsx)(s.Tooltip, {
                    text: n,
                    children: function(e) {
                        return (0, r.jsx)(s.Clickable, f(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    d(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, r.jsx)(a.Z, {
                                className: o()(u().nitroWheel, i)
                            })
                        }))
                    }
                })
            }
        },
        369263: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                s = n(882723),
                a = n(149258),
                l = n(102007),
                c = n(598679),
                u = n(165667),
                d = n.n(u);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                var t = e.errors;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((function(e, t) {
                        return (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: d().errorMessage,
                            children: (n = e, n.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                var t = 1024 * parseInt(e, 10);
                                return isNaN(t) ? e : (0, a.Ng)(t)
                            })))
                        }, t);
                        var n
                    }))
                })
            }

            function h(e) {
                var t, n = e.title,
                    i = e.titleIcon,
                    a = e.titleId,
                    u = e.description,
                    h = e.children,
                    g = e.className,
                    S = e.errors,
                    y = e.disabled,
                    E = void 0 !== y && y,
                    v = e.hideDivider,
                    b = void 0 !== v && v,
                    _ = e.showBorder,
                    T = void 0 !== _ && _,
                    m = e.borderType,
                    I = e.hasBackground,
                    N = void 0 !== I && I,
                    C = e.forcedDivider,
                    j = void 0 !== C && C,
                    O = e.showPremiumIcon,
                    L = void 0 !== O && O;
                return (0, r.jsx)("div", {
                    className: o()(d().customizationSection, g, (t = {}, f(t, d().disabled, E), f(t, d().hideDivider, b), f(t, d().showBorder, T), f(t, d().withDivider, j), t)),
                    children: (0, r.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: T,
                        type: m,
                        hasBackground: N,
                        children: [(0, r.jsxs)(s.FormTitle, {
                            className: d().title,
                            id: a,
                            children: [n, L && (0, r.jsx)(l.Z, {}), i]
                        }), null != u ? (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: d().sectionDescription,
                            children: u
                        }) : null, h, null != S && (0, r.jsx)(p, {
                            errors: S
                        })]
                    })
                })
            }
        },
        598679: (e, t, n) => {
            n.d(t, {
                Y: () => r,
                Z: () => p
            });
            var r, i, o = n(785893),
                s = n(667294),
                a = n(294184),
                l = n.n(a),
                c = n(483913),
                u = n.n(c);

            function d(e, t, n) {
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
            var f = (d(i = {}, r.PREMIUM, {
                border: u().premiumFeatureBorder,
                background: u().premiumBackground
            }), d(i, r.LIMITED, {
                border: u().limitedFeatureBorder,
                background: u().limitedBackground
            }), i);
            const p = s.forwardRef((function(e, t) {
                var n = e.children,
                    i = e.type,
                    s = void 0 === i ? r.PREMIUM : i,
                    a = e.isShown,
                    c = e.hasBackground,
                    d = void 0 !== c && c,
                    p = e.className,
                    h = e.backgroundClassName;
                if (!a) return (0, o.jsx)(o.Fragment, {
                    children: n
                });
                var g = f[s],
                    S = g.border,
                    y = g.background;
                return (0, o.jsx)("div", {
                    ref: t,
                    className: l()(S, p),
                    children: (0, o.jsx)("div", {
                        className: l()(d ? y : u().background, h),
                        children: n
                    })
                })
            }))
        }
    }
]);
//# sourceMappingURL=3b6197d8d7339c219b39.js.map