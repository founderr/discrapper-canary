(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [34883], {
        864244: (e, t, n) => {
            e.exports = n.p + "1f58110010129cdf4ea06a1d6e497590.svg"
        },
        103468: (e, t, n) => {
            e.exports = n.p + "2b439d31cec19aa2bb1b48efeb30c9ab.png"
        },
        191696: (e, t, n) => {
            e.exports = n.p + "d8a03b9985d824edc78c6eb4785dc949.svg"
        },
        78205: (e, t, n) => {
            e.exports = n.p + "7e09d40fdac796955aae9fbe0eaba1f9.svg"
        },
        901182: (e, t, n) => {
            e.exports = n.p + "b6193b9564ca0ecbbd1ed6b80f47646d.svg"
        },
        277329: (e, t, n) => {
            e.exports = n.p + "148f1855747994b4d58b685f8a36c591.svg"
        },
        99846: (e, t, n) => {
            e.exports = n.p + "070f1b98adc8ce07c7823021133efed5.svg"
        },
        277292: (e, t, n) => {
            e.exports = n.p + "447512eae624cde892775ce45dfb53ab.svg"
        },
        342147: (e, t, n) => {
            "use strict";
            n.d(t, {
                D2: () => l,
                SE: () => c
            });
            var r = n(202351),
                i = n(260561),
                s = n(682776),
                a = n(2590),
                o = (0, i.B)({
                    kind: "guild",
                    id: "2022-11_default_disable_mass_mention",
                    label: "Disable mass mentions for communities by default",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function l(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "dd4beb_1"
                }, {
                    autoTrackExposure: !0
                })
            }

            function c(e) {
                var t, n = (0, r.e7)([s.Z], (function() {
                        return s.Z.can(a.Plq.MANAGE_GUILD, e)
                    })),
                    i = o.useExperiment({
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                        location: "dd4beb_3"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                if (null == e) return !1;
                var l = e.hasFeature(a.oNc.COMMUNITY);
                return n && l && i
            }
        },
        461557: (e, t, n) => {
            "use strict";
            n.d(t, {
                L_: () => d,
                nj: () => f,
                sE: () => u
            });
            var r = n(281110),
                i = n(744564),
                s = n(302685),
                a = n(2590);

            function o(e, t, n, r, i, s, a) {
                try {
                    var o = e[s](a),
                        l = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var s = e.apply(t, n);

                        function a(e) {
                            o(s, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            o(s, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, i, s, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(s) {
                    return function(o) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                (r = 0, i) && (s = [2 & s[0], i.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            a.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = s;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(s);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, o])
                    }
                }
            };

            function u(e, t) {
                r.ZP.get({
                    url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then((function(e) {
                    var n = [];
                    e.body.length > 0 && (n = e.body.map((function(e) {
                        return e.map((function(e) {
                            return {
                                connectionType: e.connection_type,
                                connectionMetadataField: e.connection_metadata_field,
                                applicationId: e.application_id,
                                operator: e.operator,
                                value: e.value
                            }
                        }))
                    })));
                    i.Z.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionConfigurations: n
                    })
                })).catch((function() {}))
            }

            function d(e, t, n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = l((function(e, t, n) {
                    var o, l, u;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                o = n.map((function(e) {
                                    return e.map((function(e) {
                                        return {
                                            connection_type: e.connectionType,
                                            connection_metadata_field: e.connectionMetadataField,
                                            application_id: e.applicationId,
                                            operator: e.operator,
                                            value: e.value
                                        }
                                    }))
                                }));
                                return [4, r.ZP.put({
                                    url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                                    body: 0 === o.length ? [] : o,
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    var t = [];
                                    e.body.length > 0 && (t = e.body.map((function(e) {
                                        return e.map((function(e) {
                                            return {
                                                connectionType: e.connection_type,
                                                connectionMetadataField: e.connection_metadata_field,
                                                applicationId: e.application_id,
                                                operator: e.operator,
                                                value: e.value
                                            }
                                        }))
                                    })));
                                    return t
                                }))];
                            case 1:
                                l = c.sent();
                                return [4, (0, s.H)(e, t, !1)];
                            case 2:
                                null != (u = c.sent()) && i.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                                    guildId: e,
                                    roleId: t,
                                    count: u
                                });
                                i.Z.dispatch({
                                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                                    roleId: t,
                                    roleConnectionConfigurations: l
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f() {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = l((function() {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: a.ANM.APPLICATION_USER_ROLE_CONNECTIONS
                                })];
                            case 1:
                                return [2, e.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        243399: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => i
            });
            var r = (0, n(260561).B)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i(e) {
                return r.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        193694: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gf: () => T,
                OW: () => N,
                S1: () => E,
                TY: () => _,
                Uv: () => p,
                _l: () => I,
                d_: () => h,
                lO: () => f,
                sI: () => d,
                we: () => m
            });
            var r = n(744564),
                i = n(327499),
                s = n(461557);

            function a(e) {
                var t, n, r, i = 2;
                for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); i--;) {
                    if (n && null != (t = e[n])) return t.call(e);
                    if (r && null != (t = e[r])) return new o(t.call(e));
                    n = "@@asyncIterator", r = "@@iterator"
                }
                throw new TypeError("Object is not async iterable")
            }

            function o(e) {
                function t(e) {
                    if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
                    var t = e.done;
                    return Promise.resolve(e.value).then((function(e) {
                        return {
                            value: e,
                            done: t
                        }
                    }))
                }
                return o = function(e) {
                        this.s = e, this.n = e.next
                    }, o.prototype = {
                        s: null,
                        n: null,
                        next: function() {
                            return t(this.n.apply(this.s, arguments))
                        },
                        return: function(e) {
                            var n = this.s.return;
                            return void 0 === n ? Promise.resolve({
                                value: e,
                                done: !0
                            }) : t(n.apply(this.s, arguments))
                        },
                        throw: function(e) {
                            var n = this.s.return;
                            return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
                        }
                    },
                    new o(e)
            }

            function l(e, t, n, r, i, s, a) {
                try {
                    var o = e[s](a),
                        l = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var s = e.apply(t, n);

                        function a(e) {
                            l(s, r, i, a, o, "next", e)
                        }

                        function o(e) {
                            l(s, r, i, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, i, s, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(s) {
                    return function(o) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                (r = 0, i) && (s = [2 & s[0], i.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            a.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = s;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(s);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, o])
                    }
                }
            };

            function d(e) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function E() {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function f(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
                    id: e,
                    flag: t,
                    allow: n
                })
            }

            function _(e) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
                    id: e
                })
            }

            function p(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
                    id: e,
                    name: t
                })
            }

            function N(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
                    id: e,
                    color: t
                })
            }

            function m(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: n
                })
            }

            function I(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: n
                })
            }

            function h(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }

            function T(e, t, n, r, i) {
                return O.apply(this, arguments)
            }

            function O() {
                O = c((function(e, t, n, o, l) {
                    var d, E, f, _, p, N, m, I, h, T, O, b, L;
                    return u(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                r.Z.dispatch({
                                    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
                                });
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 19, , 20]);
                                d = (S = c((function() {
                                    var n;
                                    return u(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return null == t || 0 === t.length ? [2] : null == (n = t.pop()) || "" === n.name ? [2, d()] : [4, i.Z.updateRole(e, n.id, {
                                                    name: n.name,
                                                    description: n.description,
                                                    permissions: n.permissions,
                                                    color: n.color,
                                                    hoist: n.hoist,
                                                    mentionable: n.mentionable,
                                                    icon: n.icon,
                                                    unicodeEmoji: n.unicodeEmoji
                                                }).then(d, d)];
                                            case 1:
                                                r.sent();
                                                return [2]
                                        }
                                    }))
                                })), function() {
                                    return S.apply(this, arguments)
                                });
                                return null != n && n.length > 0 ? [4, i.Z.batchRoleUpdate(e, n).then(d, d)] : [3, 3];
                            case 2:
                                v.sent();
                                return [3, 5];
                            case 3:
                                return [4, d()];
                            case 4:
                                v.sent();
                                v.label = 5;
                            case 5:
                                if (null == l || null == o) return [3, 18];
                                E = !1, f = !1;
                                v.label = 6;
                            case 6:
                                v.trys.push([6, 12, 13, 18]);
                                p = a(o);
                                v.label = 7;
                            case 7:
                                return [4, p.next()];
                            case 8:
                                if (!(E = !(N = v.sent()).done)) return [3, 11];
                                m = N.value;
                                I = m;
                                h = l.get(I);
                                return [4, (0, s.L_)(e, I, null != h ? h : [])];
                            case 9:
                                v.sent();
                                v.label = 10;
                            case 10:
                                E = !1;
                                return [3, 7];
                            case 11:
                                return [3, 18];
                            case 12:
                                T = v.sent();
                                f = !0;
                                _ = T;
                                return [3, 18];
                            case 13:
                                v.trys.push([13, , 16, 17]);
                                return E && null != p.return ? [4, p.return()] : [3, 15];
                            case 14:
                                v.sent();
                                v.label = 15;
                            case 15:
                                return [3, 17];
                            case 16:
                                if (f) throw _;
                                return [7];
                            case 17:
                                return [7];
                            case 18:
                                return [3, 20];
                            case 19:
                                O = v.sent();
                                r.Z.dispatch({
                                    type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                                    message: null !== (L = null === (b = O.body) || void 0 === b ? void 0 : b.message) && void 0 !== L ? L : Object.values(O.body)[0]
                                });
                                return [2];
                            case 20:
                                r.Z.dispatch({
                                    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
                                });
                                return [2]
                        }
                        var S
                    }))
                }));
                return O.apply(this, arguments)
            }
        },
        979264: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e) {
                return e.type === r.uaV.DEFAULT && null != e.messageReference
            }
        },
        361557: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                i = n(667294),
                s = n(294184),
                a = n.n(s),
                o = n(70418),
                l = n(443812),
                c = n(473708),
                u = n(282373),
                d = n.n(u);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                s.push(r.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || N(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || N(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
                }
            }
            var m = function(e) {
                var t = e.index,
                    n = e.title,
                    i = e.selected;
                return (0, r.jsxs)("div", {
                    className: a()(d().overviewStep, f({}, d().selected, i)),
                    children: [(0, r.jsx)(o.Text, {
                        className: d().stepIndex,
                        variant: "text-sm/normal",
                        children: t + 1
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: d().stepTitle,
                        children: n
                    })]
                })
            };
            const I = function(e) {
                var t = e.className,
                    n = e.title,
                    s = e.stepData,
                    u = e.transitionState,
                    E = e.onClose,
                    f = e.completeButtonText,
                    N = e.overviewFooter,
                    I = e.onNextPressed,
                    h = e.onPrevPressed,
                    T = e.onComplete,
                    O = e.sequencerClassName,
                    b = e.initialStep,
                    L = void 0 === b ? 0 : b,
                    v = e.forceStep,
                    S = e.submitting,
                    M = void 0 !== S && S,
                    x = e.autoCloseOnComplete,
                    C = void 0 === x || x,
                    g = _(i.useState([]), 2),
                    A = g[0],
                    y = g[1],
                    j = _(i.useState(L), 2),
                    P = j[0],
                    D = j[1],
                    U = (0, l.Dt)();
                i.useEffect((function() {
                    y(p(Array(s.length).keys()))
                }), [s.length]);
                var R = null != v ? v : P,
                    Z = s[R],
                    w = 0 === R,
                    B = R === s.length - 1,
                    F = null != f ? f : c.Z.Messages.DONE,
                    G = i.useCallback((function() {
                        null == h || h();
                        D(R - 1)
                    }), [h, R, D]);
                return (0, r.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.MEDIUM,
                    className: a()(d().container, t),
                    transitionState: u,
                    "aria-labelledby": U,
                    children: [(0, r.jsxs)("div", {
                        className: d().overviewSidebar,
                        children: [(0, r.jsx)(o.Heading, {
                            id: U,
                            variant: "heading-xl/semibold",
                            className: d().header,
                            children: n
                        }), (0, r.jsx)("div", {
                            className: d().overviewSteps,
                            children: s.map((function(e, t) {
                                return (0, r.jsx)(m, {
                                    index: t,
                                    title: e.overviewTitle,
                                    selected: t === R
                                }, t)
                            }))
                        }), N]
                    }), (0, r.jsxs)("div", {
                        className: d().modal,
                        children: [(0, r.jsxs)(o.ModalContent, {
                            children: [(0, r.jsx)(o.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: E,
                                className: d().closeButton
                            }), (0, r.jsx)(o.Sequencer, {
                                step: R,
                                steps: A,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: a()(d().sequencer, O),
                                innerClassName: d().innerSequencer,
                                children: Z.modalContent
                            })]
                        }), (0, r.jsxs)(o.ModalFooter, {
                            className: d().footer,
                            children: [(0, r.jsx)(o.Button, {
                                type: "submit",
                                submitting: M,
                                onClick: function() {
                                    if (B) {
                                        T();
                                        C && E()
                                    } else {
                                        null == I || I();
                                        D(R + 1)
                                    }
                                },
                                color: o.Button.Colors.GREEN,
                                disabled: Z.disableNextStep,
                                children: B ? F : c.Z.Messages.NEXT
                            }), w ? null : (0, r.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                size: o.Button.Sizes.MIN,
                                onClick: G,
                                children: c.Z.Messages.BACK
                            })]
                        })]
                    })]
                })
            }
        },
        589591: (e, t, n) => {
            "use strict";
            n.d(t, {
                BF: () => f,
                QA: () => E,
                cp: () => d
            });
            var r = n(396043),
                i = n(979264),
                s = n(652591),
                a = n(940455),
                o = n(2590),
                l = n(103468),
                c = n.n(l);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                return (0, i.Z)(e) && e.messageReference.guild_id === a.M_ || null != e.author && e.author.id === a.c9
            }

            function E() {
                return c()
            }
            var f = function(e) {
                s.default.track(o.rMx.USER_FLOW_TRANSITION, function(e) {
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
                }({
                    flow_type: a.tA,
                    from_step: e.fromStep,
                    to_step: e.toStep
                }, (0, r.hH)(e.guildId)))
            }
        },
        834883: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => fe
            });
            var r = n(785893),
                i = n(667294),
                s = n(294184),
                a = n.n(s),
                o = n(940060),
                l = n(202351),
                c = n(795308),
                u = n(575945),
                d = n(70418),
                E = n(342147),
                f = n(773011),
                _ = n(243399),
                p = n(348592),
                N = n(2590),
                m = n(473708);

            function I(e) {
                var t = (0, _.E)(null != e ? e : ""),
                    n = m.Z.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
                        communityGuidelines: p.Z.getArticleURL(N.BhN.PUBLIC_GUILD_GUILDLINES),
                        typesOfGuilds: p.Z.getArticleURL(N.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                    }),
                    r = m.Z.Messages.COMMUNITY_POLICY_HELP.format({
                        helpdeskArticle: p.Z.getArticleURL(N.BhN.PUBLIC_GUILD_GUILDLINES)
                    });
                return t && null != e ? n : r
            }
            var h = n(703790),
                T = n(193694),
                O = n(424127),
                b = n(361557),
                L = n(721160),
                v = n(64234),
                S = n(5544),
                M = n(567403),
                x = n(840922),
                C = n(473903),
                g = n(443812),
                A = n(169649),
                y = n(386991),
                j = n(652591),
                P = n(563135),
                D = n(589591),
                U = n(940455),
                R = n(124715),
                Z = n.n(R),
                w = n(191696),
                B = n.n(w),
                F = n(78205),
                G = n.n(F),
                Y = n(901182),
                k = n.n(Y),
                H = n(277329),
                V = n.n(H),
                W = n(99846),
                X = n.n(W),
                q = n(277292),
                z = n.n(q),
                Q = n(864244),
                $ = n.n(Q);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function J(e, t, n, r, i, s, a) {
                try {
                    var o = e[s](a),
                        l = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ee(e, t, n[t])
                    }))
                }
                return e
            }

            function ne(e, t) {
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

            function re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, s = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                s.push(r.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ie = function(e, t) {
                    var n, r, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function o(s) {
                        return function(o) {
                            return function(s) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                    (r = 0, i) && (s = [2 & s[0], i.value]);
                                    switch (s[0]) {
                                        case 0:
                                        case 1:
                                            i = s;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: s[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = s[1];
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                                a.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = s;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(s);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    s = t.call(e, a)
                                } catch (e) {
                                    s = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, o])
                        }
                    }
                },
                se = function(e) {
                    var t = e.guild,
                        n = e.onAcceptVerificationLevel,
                        i = e.onAcceptContentFilter,
                        s = e.disableContentFilter,
                        a = e.disableVerificationLevel,
                        o = e.headerId,
                        c = e.theme,
                        E = (0, l.e7)([M.Z], (function() {
                            return M.Z.getGuild(t.id)
                        }), [t.id]),
                        f = null != E && E.verificationLevel > N.sFg.NONE,
                        _ = (null == E ? void 0 : E.explicitContentFilter) === N.lxg.ALL_MEMBERS,
                        p = (0, u.wj)(c) ? X() : z();
                    return (0, r.jsxs)("div", {
                        className: Z().container,
                        children: [(0, r.jsxs)("div", {
                            className: Z().content,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: p,
                                width: 80
                            }), (0, r.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                className: Z().header,
                                id: o,
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
                            }), (0, r.jsx)(d.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: Z().headerCaption,
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().form,
                            children: [(0, r.jsx)(d.FormTitle, {
                                children: m.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
                            }), (0,
                                r.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: Z().description,
                                children: f ? m.Z.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : m.Z.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
                            }), (0, r.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.ROW,
                                disabled: a,
                                value: t.verificationLevel > N.sFg.NONE,
                                onChange: n,
                                children: (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: m.Z.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().form,
                            children: [(0, r.jsx)(d.FormTitle, {
                                children: m.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
                            }), (0, r.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: Z().description,
                                children: _ ? m.Z.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : m.Z.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
                            }), (0, r.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.ROW,
                                disabled: s,
                                value: t.explicitContentFilter === N.lxg.ALL_MEMBERS,
                                onChange: i,
                                children: (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: m.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH
                                })
                            })]
                        })]
                    })
                },
                ae = function(e) {
                    var t = e.selectableChannels,
                        n = e.onRuleChannelChange,
                        s = e.ruleChannel,
                        a = e.onPublicUpdatesChannelChange,
                        o = e.publicUpdatesChannel,
                        l = e.headerId,
                        c = e.theme,
                        E = e.guildId;
                    i.useEffect((function() {
                        (0, D.BF)({
                            fromStep: U.IO.SAFETY_CHECK,
                            toStep: U.IO.BASICS,
                            guildId: E
                        })
                    }), [E]);
                    var f = (0, u.wj)(c) ? B() : G();
                    return (0, r.jsxs)("div", {
                        className: Z().container,
                        children: [(0, r.jsxs)("div", {
                            className: Z().content,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: f,
                                width: 80
                            }), (0, r.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                className: Z().header,
                                id: l,
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
                            }), (0, r.jsx)(d.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: Z().headerCaption,
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().form,
                            children: [(0, r.jsx)(d.FormTitle, {
                                children: m.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
                            }), (0, r.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: Z().description,
                                children: m.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
                            }), (0, r.jsx)(d.SearchableSelect, {
                                options: t,
                                onChange: n,
                                value: s,
                                maxVisibleItems: 4
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().form,
                            children: [(0, r.jsx)(d.FormTitle, {
                                children: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                            }), (0, r.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: Z().description,
                                children: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                            }), (0, r.jsx)(d.SearchableSelect, {
                                options: t,
                                onChange: a,
                                value: o,
                                popoutPosition: "top",
                                maxVisibleItems: 4
                            })]
                        })]
                    })
                },
                oe = function(e) {
                    var t = e.guild,
                        n = e.policyAccepted,
                        s = e.everyoneRolePermissionsAccepted,
                        o = e.onAcceptPolicy,
                        l = e.onAcceptDefaultNotifications,
                        c = e.onAcceptEveryoneRolePermissions,
                        E = e.disableDefaultNotifications,
                        f = e.disableEveryoneRolePermissions,
                        _ = e.headerId,
                        p = e.theme,
                        h = (0, u.wj)(p) ? k() : V();
                    i.useEffect((function() {
                        (0, D.BF)({
                            fromStep: U.IO.BASICS,
                            toStep: U.IO.FINISH,
                            guildId: t.id
                        })
                    }), [t.id]);
                    var T = I(null == t ? void 0 : t.id);
                    return (0, r.jsxs)("div", {
                        className: Z().container,
                        children: [(0, r.jsxs)("div", {
                            className: Z().content,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: h,
                                width: 80
                            }), (0, r.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                className: Z().header,
                                id: _,
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                            }), (0, r.jsx)(d.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: Z().headerCaption,
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
                            })]
                        }), (0, r.jsx)("div", {
                            className: Z().form,
                            children: (0, r.jsx)(d.Tooltip, {
                                text: E ? m.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                                "aria-label": !!E && m.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                                children: function(e) {
                                    return (0, r.jsx)("div", ne(te({}, e), {
                                        children: (0, r.jsx)(d.Checkbox, {
                                            type: d.Checkbox.Types.ROW,
                                            disabled: E,
                                            value: t.defaultMessageNotifications === N.bL.ONLY_MENTIONS,
                                            onChange: l,
                                            className: a()(ee({}, Z().disabled, E)),
                                            children: (0, r.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                                    infoHook: function() {
                                                        return (0, r.jsx)(d.Tooltip, {
                                                            text: m.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                            "aria-label": m.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                            children: function(e) {
                                                                return (0, r.jsx)(y.Z, te({
                                                                    className: Z().icon
                                                                }, e))
                                                            }
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }))
                                }
                            })
                        }), (0, r.jsx)(d.Tooltip, {
                            text: f ? m.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                            "aria-label": !!f && m.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                            children: function(e) {
                                return (0, r.jsx)("div", ne(te({}, e), {
                                    className: Z().checkboxOption,
                                    children: (0, r.jsx)(d.Checkbox, {
                                        type: d.Checkbox.Types.ROW,
                                        disabled: f,
                                        value: s,
                                        onChange: c,
                                        className: a()(ee({}, Z().disabled, f)),
                                        children: (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                                                infoHook: function() {
                                                    return (0, r.jsx)(d.Tooltip, {
                                                        text: m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                        "aria-label": m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                        children: function(e) {
                                                            return (0, r.jsx)(y.Z, te({
                                                                className: Z().icon
                                                            }, e))
                                                        }
                                                    })
                                                }
                                            })
                                        })
                                    })
                                }))
                            }
                        }), (0, r.jsxs)("div", {
                            className: Z().form,
                            children: [(0, r.jsx)(d.FormTitle, {
                                children: m.Z.Messages.PUBLIC_GUILD_POLICY_TITLE
                            }), (0, r.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: Z().description,
                                children: T
                            }), (0, r.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.ROW,
                                value: n,
                                onChange: o,
                                children: (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: m.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                                })
                            })]
                        })]
                    })
                };

            function le(e) {
                var t = e.guild,
                    n = t.getRole(t.id);
                if (null == n) return null;
                var i = n.name,
                    s = n.color;
                return (0, r.jsx)("div", {
                    className: Z().role,
                    children: (0, r.jsxs)("span", {
                        className: Z().roleRow,
                        children: [(0, r.jsx)(d.RoleDot, {
                            className: Z().roleDot,
                            color: s.toString(),
                            background: !1,
                            tooltip: !1
                        }), (0, r.jsx)(d.Text, {
                            className: Z().roleName,
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: i
                        })]
                    })
                })
            }

            function ce(e) {
                var t = e.enabledPermissions,
                    n = e.onGetPermisisonName;
                return (0, r.jsxs)("div", {
                    className: Z().tableContainer,
                    children: [(0, r.jsx)(d.Text, {
                        className: Z().tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: m.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, r.jsx)("div", {
                        className: Z().permissionsTable,
                        children: t.map((function(e, t) {
                            return (0, r.jsxs)("div", {
                                className: Z().permissionRow,
                                children: [(0, r.jsx)("div", {
                                    className: Z().bulletWarning
                                }), (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-normal",
                                    children: n(e)
                                })]
                            }, t)
                        }))
                    })]
                })
            }

            function ue(e) {
                var t = e.disabledPermissions,
                    n = e.onGetPermisisonName,
                    i = m.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
                t.length === U.$X.length && (i = m.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED);
                return (0, r.jsxs)("div", {
                    className: Z().tableContainer,
                    children: [(0, r.jsx)(d.Text, {
                        className: Z().tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: i
                    }), (0, r.jsx)("div", {
                        className: Z().permissionsTable,
                        children: t.map((function(e, t) {
                            return (0, r.jsxs)("div", {
                                className: Z().permissionRow,
                                children: [(0, r.jsx)("div", {
                                    className: Z().bullet
                                }), (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: n(e)
                                })]
                            }, t)
                        }))
                    })]
                })
            }

            function de(e) {
                var t = e.permissions,
                    n = function(e) {
                        switch (e.toString()) {
                            case N.Plq.MENTION_EVERYONE.toString():
                                return m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                            case N.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                                return m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
                            case N.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                                return m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
                            default:
                                return (0, L.wt)(e)
                        }
                    },
                    i = t.enabledPermissions,
                    s = t.disabledPermissions;
                return (0, r.jsxs)("div", {
                    className: Z().table,
                    children: [0 !== i.length ? (0, r.jsx)(ce, {
                        enabledPermissions: i,
                        onGetPermisisonName: n
                    }) : null, (0, r.jsx)(ue, {
                        disabledPermissions: s,
                        onGetPermisisonName: n
                    })]
                })
            }
            var Ee = function(e) {
                var t = e.guild,
                    n = e.policyAccepted,
                    s = e.onAcceptPolicy,
                    a = e.headerId,
                    o = e.theme,
                    l = (0, u.wj)(o) ? k() : V(),
                    E = I(null == t ? void 0 : t.id);
                i.useEffect((function() {
                    (0, D.BF)({
                        fromStep: U.IO.BASICS,
                        toStep: U.IO.FINISH,
                        guildId: t.id
                    })
                }), [t.id]);
                var f = i.useMemo((function() {
                    var e = [],
                        n = [];
                    U.$X.map((function(r) {
                        P.ZP.canEveryone(r, t) ? e.push(r) : n.push(r)
                    }));
                    return {
                        enabledPermissions: e,
                        disabledPermissions: n
                    }
                }), [t]);
                return (0, r.jsxs)("div", {
                    className: Z().container,
                    children: [(0, r.jsxs)("div", {
                        className: Z().content,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: l,
                            width: 80
                        }), (0, r.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            className: Z().updatedHeader,
                            id: a,
                            children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                        })]
                    }), (0, r.jsxs)("div", {
                        className: Z().updatedForm,
                        children: [(0, r.jsx)(d.FormTitle, {
                            className: Z().formTitle,
                            children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
                        }), (0, r.jsxs)("div", {
                            className: Z().checklistRow,
                            children: [(0, r.jsx)(A.Z, {
                                className: Z().checklistIcon,
                                color: c.Z.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.Z.unsafe_rawColors.WHITE_500.css
                            }), (0, r.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: function() {
                                        return (0, r.jsx)(d.Tooltip, {
                                            text: m.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                            "aria-label": m.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                            children: function(e) {
                                                return (0, r.jsx)(y.Z, te({
                                                    className: Z().icon
                                                }, e))
                                            }
                                        })
                                    }
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().checklistRow,
                            children: [(0, r.jsx)(A.Z, {
                                className: Z().checklistIcon,
                                color: c.Z.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.Z.unsafe_rawColors.WHITE_500.css
                            }), (0, r.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: m.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, r.jsx)(le, {
                                guild: t
                            })]
                        }), (0, r.jsx)(de, {
                            permissions: f
                        })]
                    }), (0, r.jsxs)("div", {
                        className: Z().updatedForm,
                        children: [(0, r.jsx)(d.FormTitle, {
                            className: Z().formTitle,
                            children: m.Z.Messages.PUBLIC_GUILD_POLICY_TITLE
                        }), (0,
                            r.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: Z().description,
                            children: E
                        }), (0, r.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.ROW,
                            value: n,
                            onChange: s,
                            children: (0, r.jsx)(d.Text, {
                                className: Z().acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: m.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                            })
                        })]
                    })]
                })
            };
            const fe = function(e) {
                var t = e.transitionState,
                    n = e.onClose;
                i.useEffect((function() {
                    j.default.track(N.rMx.OPEN_MODAL, {
                        type: U.tA
                    })
                }), []);
                var s, a = (0, l.cj)([O.Z], (function() {
                        return O.Z.getProps()
                    })).guild,
                    c = (0, l.e7)([v.Z], (function() {
                        return v.Z.theme
                    })),
                    u = re(i.useState(!1), 2),
                    d = u[0],
                    _ = u[1],
                    p = re(i.useState(!U.$X.some((function(e) {
                        return P.ZP.canEveryone(e, a)
                    }))), 2),
                    I = p[0],
                    L = p[1],
                    M = re(i.useState(U.b4), 2),
                    A = M[0],
                    y = M[1],
                    D = re(i.useState(U.b4), 2),
                    R = D[0],
                    w = D[1],
                    B = re(i.useState(null == a ? void 0 : a.defaultMessageNotifications), 1)[0],
                    F = re(i.useState(null == a ? void 0 : a.verificationLevel), 1)[0],
                    G = re(i.useState(null == a ? void 0 : a.explicitContentFilter), 1)[0],
                    Y = re(i.useState(I), 1)[0],
                    k = null == a ? void 0 : a.getRole(null == a ? void 0 : a.id),
                    H = (0, l.e7)([S.ZP], (function() {
                        return null != a ? S.ZP.getChannels(a.id) : null
                    }), [a]),
                    V = (0, g.Dt)(),
                    W = (0, E.D2)(null !== (s = null == a ? void 0 : a.id) && void 0 !== s ? s : "").enabled;
                if (null == a) return null;
                var X = [{
                    value: U.b4,
                    label: m.Z.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
                }];
                H[S.sH].forEach((function(e) {
                    var t = e.channel;
                    t.type === N.d4z.GUILD_TEXT && X.push({
                        value: t.id,
                        label: (0, f.F6)(t, C.default, x.Z, !0)
                    })
                }));
                var q, z, Q = F !== N.sFg.NONE,
                    K = G === N.lxg.ALL_MEMBERS,
                    ee = B === N.bL.ONLY_MENTIONS,
                    le = Y,
                    ce = (z = (q = function() {
                        var e, t, r;
                        return ie(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (null == k || !d) return [2];
                                    (e = new Set(a.features)).add(N.oNc.COMMUNITY);
                                    t = I ? o.Z.remove(k.permissions, U.mu) : k.permissions;
                                    r = ne(te({}, k), {
                                        permissions: t
                                    });
                                    return t === k.permissions ? [3, 2] : [4, (0, T.Gf)(a.id, [r])];
                                case 1:
                                    i.sent();
                                    i.label = 2;
                                case 2:
                                    h.Z.updateGuild({
                                        features: e,
                                        rulesChannelId: A,
                                        publicUpdatesChannelId: R
                                    });
                                    return [4, h.Z.saveGuild(a.id, {
                                        features: e,
                                        rulesChannelId: A,
                                        verificationLevel: a.verificationLevel,
                                        explicitContentFilter: a.explicitContentFilter,
                                        publicUpdatesChannelId: R,
                                        defaultMessageNotifications: a.defaultMessageNotifications
                                    })];
                                case 3:
                                    i.sent();
                                    setTimeout((function() {
                                        n()
                                    }), 0);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var i = q.apply(e, t);

                            function s(e) {
                                J(i, n, r, s, a, "next", e)
                            }

                            function a(e) {
                                J(i, n, r, s, a, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return z.apply(this, arguments)
                    }),
                    ue = (0, r.jsx)(se, {
                        guild: a,
                        disableVerificationLevel: Q,
                        disableContentFilter: K,
                        onAcceptVerificationLevel: function(e, t) {
                            t ? t && h.Z.updateGuild({
                                verificationLevel: N.sFg.LOW
                            }) : h.Z.updateGuild({
                                verificationLevel: F
                            })
                        },
                        onAcceptContentFilter: function(e, t) {
                            t ? h.Z.updateGuild({
                                explicitContentFilter: N.lxg.ALL_MEMBERS
                            }) : h.Z.updateGuild({
                                explicitContentFilter: G
                            })
                        },
                        headerId: V,
                        theme: c
                    }),
                    de = (0, r.jsx)(ae, {
                        selectableChannels: X,
                        onRuleChannelChange: function(e) {
                            y(e)
                        },
                        onPublicUpdatesChannelChange: function(e) {
                            w(e)
                        },
                        ruleChannel: A,
                        publicUpdatesChannel: R,
                        headerId: V,
                        theme: c,
                        guildId: a.id
                    }),
                    fe = W ? (0, r.jsx)(Ee, {
                        guild: a,
                        policyAccepted: d,
                        onAcceptPolicy: function(e, t) {
                            if (t) {
                                _(!0);
                                ee || h.Z.updateGuild({
                                    defaultMessageNotifications: N.bL.ONLY_MENTIONS
                                });
                                I || null == k || L(!0)
                            } else {
                                _(!1);
                                ee && h.Z.updateGuild({
                                    defaultMessageNotifications: B
                                });
                                I && null != k && L(!1)
                            }
                        },
                        headerId: V,
                        theme: c
                    }) : (0, r.jsx)(oe, {
                        guild: a,
                        disableDefaultNotifications: ee,
                        disableEveryoneRolePermissions: le,
                        policyAccepted: d,
                        everyoneRolePermissionsAccepted: I,
                        onAcceptPolicy: function(e, t) {
                            _(!!t)
                        },
                        onAcceptDefaultNotifications: function(e, t) {
                            t ? h.Z.updateGuild({
                                defaultMessageNotifications: N.bL.ONLY_MENTIONS
                            }) : h.Z.updateGuild({
                                defaultMessageNotifications: B
                            })
                        },
                        onAcceptEveryoneRolePermissions: function(e, t) {
                            null != k && L(!!t)
                        },
                        headerId: V,
                        theme: c
                    }),
                    _e = (0, r.jsx)("img", {
                        alt: "",
                        src: $(),
                        className: Z().footerImage,
                        width: 240
                    }),
                    pe = [{
                        modalContent: ue,
                        disableNextStep: a.explicitContentFilter !== N.lxg.ALL_MEMBERS || a.verificationLevel === N.sFg.NONE,
                        overviewTitle: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
                    }, {
                        modalContent: de,
                        disableNextStep: null == A || null == R,
                        overviewTitle: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
                    }, {
                        modalContent: fe,
                        disableNextStep: !d,
                        overviewTitle: m.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
                    }];
                return (0, r.jsx)(b.Z, {
                    stepData: pe,
                    title: m.Z.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
                    transitionState: t,
                    onClose: function() {
                        n();
                        j.default.track(N.rMx.MODAL_DISMISSED, {
                            type: U.tA
                        })
                    },
                    completeButtonText: m.Z.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
                    onComplete: ce,
                    overviewFooter: _e,
                    sequencerClassName: Z().container,
                    autoCloseOnComplete: !1
                })
            }
        }
    }
]);