"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74544], {
        874544: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => ue
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                o = r.n(i),
                u = r(202351),
                l = r(70418),
                c = r(944522),
                s = r(787193),
                f = r(299239),
                h = r(61209),
                p = r(567403),
                d = r(443812),
                y = r(755284),
                v = r(347365),
                b = r(441143),
                m = r.n(b),
                g = r(116404),
                w = r(771575),
                S = r(915840),
                E = r(563367),
                A = r(3155);

            function x(e, n, r, t, a, i, o) {
                try {
                    var u = e[i](o),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function _(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, a) {
                        var i = e.apply(n, r);

                        function o(e) {
                            x(i, t, a, o, u, "next", e)
                        }

                        function u(e) {
                            x(i, t, a, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var C = function(e, n) {
                var r, t, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (a = 2 & i[0] ? t.return : i[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, i[1])).done) return a;
                                (t = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = a = 0
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

            function T(e, n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = _((function(e, n) {
                    var r, t, a, i;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                switch (e.entity_type) {
                                    case A.WX.STAGE_INSTANCE:
                                        return [3, 1];
                                    case A.WX.VOICE:
                                        return [3, 6]
                                }
                                return [3, 7];
                            case 1:
                                r = E.Z.getChannelId();
                                t = h.Z.getChannel(e.channel_id);
                                m()(null != t, "could not find channel");
                                return r === t.id ? [3, 4] : [4, S.TM(t, !0)];
                            case 2:
                                n.sent();
                                return [4, S.R5(t, null, !1)];
                            case 3:
                                n.sent();
                                n.label = 4;
                            case 4:
                                return [4, (0, w.RK)(t, !1, !0)];
                            case 5:
                                n.sent();
                                return [3, 8];
                            case 6:
                                a = E.Z.getChannelId();
                                i = h.Z.getChannel(e.channel_id);
                                m()(null != i, "could not find channel");
                                a !== i.id && g.default.selectVoiceChannel(i.id);
                                return [3, 8];
                            case 7:
                                return [3, 8];
                            case 8:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(e, n) {
                switch (e.entity_type) {
                    case A.WX.STAGE_INSTANCE:
                    case A.WX.VOICE:
                    case A.WX.EXTERNAL:
                        null == n || n()
                }
                return Promise.resolve()
            }
            var k = r(985462),
                j = r(341971),
                Z = r(382060),
                L = r(242735),
                P = r(2590);

            function G(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function M(e, n, r, t, a, i, o) {
                try {
                    var u = e[i](o),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function O(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, a) {
                        var i = e.apply(n, r);

                        function o(e) {
                            M(i, t, a, o, u, "next", e)
                        }

                        function u(e) {
                            M(i, t, a, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function R(e) {
                return function(e) {
                    if (Array.isArray(e)) return G(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return G(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return G(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var X = function(e, n) {
                var r, t, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (a = 2 & i[0] ? t.return : i[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, i[1])).done) return a;
                                (t = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = a = 0
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

            function B() {
                B = O((function(e, n) {
                    var r, t, a, i, o = arguments;
                    return X(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                r = o.length > 2 && void 0 !== o[2] ? o[2] : [];
                                (t = a = []).push.apply(t, R(r));
                                return [4, k.Z.createChannel({
                                    guildId: e.id,
                                    type: P.d4z.GUILD_STAGE_VOICE,
                                    name: n.substring(0, 100),
                                    permissionOverwrites: a
                                })];
                            case 1:
                                if (null == (i = u.sent()) || 201 !== i.status) throw new Error("Can't create channel for event");
                                return [2, (0, Z.q_)(i.body)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function U(e, n) {
                var r = e.guild_id,
                    t = e.channel_id,
                    a = p.Z.getGuild(r);
                if (null == a) return Promise.resolve(null);
                var i = h.Z.getChannel(t);
                return null == i ? function(e, n) {
                    return B.apply(this, arguments)
                }(a, e.name, n) : Promise.resolve(i)
            }

            function V(e, n) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = O((function(e, n) {
                    var r;
                    return X(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return e.entity_type === A.WX.STAGE_INSTANCE ? [3, 1] : [3, 3];
                            case 1:
                                return [4, U(e, n)];
                            case 2:
                                r = t.sent();
                                m()(null != r, "could not find or create channel");
                                return [3, 4];
                            case 3:
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                Y = O((function(e) {
                    var n, r, t, a, i, o, u = arguments;
                    return X(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                n = u.length > 1 && void 0 !== u[1] && u[1];
                                r = e.channel_id, t = e.entity_type, a = e.name, i = e.id, o = e.guild_id;
                                switch (t) {
                                    case A.WX.STAGE_INSTANCE:
                                        return [3, 1];
                                    case A.WX.VOICE:
                                        return [3, 3];
                                    case A.WX.EXTERNAL:
                                        return [3, 5]
                                }
                                return [3, 7];
                            case 1:
                                m()(null != r, "channel_id is required");
                                return [4, (0, j.me)(r, a, A.j8.GUILD_ONLY, n, i)];
                            case 2:
                            case 4:
                            case 6:
                                l.sent();
                                return [3, 8];
                            case 3:
                                m()(null != r, "channel_id is required");
                                return [4, L.Z.startEvent(i, o)];
                            case 5:
                                return [4, L.Z.startEvent(i, o)];
                            case 7:
                                return [3, 8];
                            case 8:
                                return [2]
                        }
                    }))
                }));
                return Y.apply(this, arguments)
            }

            function K(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function q(e, n, r, t, a, i, o) {
                try {
                    var u = e[i](o),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function H(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, a) {
                        var i = e.apply(n, r);

                        function o(e) {
                            q(i, t, a, o, u, "next", e)
                        }

                        function u(e) {
                            q(i, t, a, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function $(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            o = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return K(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = function(e, n) {
                    var r, t, a, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, t && (a = 2 & i[0] ? t.return : i[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, i[1])).done) return a;
                                    (t = 0, a) && (i = [2 & i[0], a.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            a = i;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            t = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                                o.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = i;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(i);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, o)
                                } catch (e) {
                                    i = [6, e];
                                    t = 0
                                } finally {
                                    r = a = 0
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
                z = {
                    onSuccess: function() {},
                    permissionOverwrites: []
                };
            var J = r(205316),
                Q = r(842783),
                ee = r(473708),
                ne = r(351391),
                re = r.n(ne);

            function te(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function ae(e, n, r, t, a, i, o) {
                try {
                    var u = e[i](o),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function ie(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            o = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return te(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return te(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var oe = function(e, n) {
                var r, t, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (a = 2 & i[0] ? t.return : i[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, i[1])).done) return a;
                                (t = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = a = 0
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

            function ue(e) {
                var n = e.transitionState,
                    r = e.event,
                    i = e.onSuccess,
                    b = e.onClose,
                    m = (0, d.Dt)(),
                    g = r.guild_id,
                    w = r.privacy_level,
                    S = (0, u.e7)([h.Z], (function() {
                        return h.Z.getChannel(r.channel_id)
                    }), [r]),
                    E = (0, u.e7)([p.Z], (function() {
                        return p.Z.getGuild(g)
                    }), [g]),
                    x = (0, (0, s.XJ)(null != S ? S : E).canManageGuildEvent)(r),
                    _ = (0, u.e7)([c.Z], (function() {
                        return c.Z.isLurking(g)
                    }), [g]),
                    C = r.entity_type === A.WX.STAGE_INSTANCE,
                    I = ie(a.useState(C), 2),
                    k = I[0],
                    j = I[1],
                    Z = ie(function() {
                        var e = $(a.useState(!1), 2),
                            n = e[0],
                            r = e[1],
                            t = $(a.useState(null), 2),
                            i = t[0],
                            o = t[1];

                        function u() {
                            u = H((function(e, n) {
                                var t, a, i, u, l, c, s, f = arguments;
                                return F(this, (function(h) {
                                    switch (h.label) {
                                        case 0:
                                            t = f.length > 2 && void 0 !== f[2] ? f[2] : z, a = t.onSuccess, i = void 0 === a ? z.onSuccess : a, u = t.permissionOverwrites, l = void 0 === u ? z.permissionOverwrites : u;
                                            r(!0);
                                            h.label = 1;
                                        case 1:
                                            h.trys.push([1, 6, , 7]);
                                            return [4, V(e, l)];
                                        case 2:
                                            h.sent();
                                            return [4, D(e, n)];
                                        case 3:
                                            h.sent();
                                            return [4, T(e, i)];
                                        case 4:
                                            h.sent();
                                            return [4, N(e, i)];
                                        case 5:
                                            h.sent();
                                            r(!1);
                                            return [3, 7];
                                        case 6:
                                            c = h.sent();
                                            s = new v.Hx(c);
                                            o(s);
                                            r(!1);
                                            return [3, 7];
                                        case 7:
                                            r(!1);
                                            return [2]
                                    }
                                }))
                            }));
                            return u.apply(this, arguments)
                        }
                        return [function(e, n) {
                            return u.apply(this, arguments)
                        }, {
                            loading: n,
                            error: i
                        }]
                    }(), 2),
                    L = Z[0],
                    P = Z[1],
                    G = P.loading,
                    M = P.error;
                if (!x) return null;
                var O, R, X, B = w === A.j8.PUBLIC ? ee.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : ee.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
                    U = function() {
                        null == i || i();
                        b();
                        (0, f.Ku)(!1)
                    },
                    W = (R = (O = function() {
                        return oe(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, L(r, k, {
                                        onSuccess: U
                                    })];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, t) {
                            var a = O.apply(e, n);

                            function i(e) {
                                ae(a, r, t, i, o, "next", e)
                            }

                            function o(e) {
                                ae(a, r, t, i, o, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function() {
                        return R.apply(this, arguments)
                    });
                return (0, t.jsx)(l.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": m,
                    children: (0, t.jsxs)(l.ModalContent, {
                        className: re().content,
                        children: [(0, t.jsx)("div", {
                            className: re().previewCard,
                            children: (0, t.jsx)(Q.Z, {
                                guild: E,
                                channel: S,
                                name: r.name,
                                description: null !== (X = r.description) && void 0 !== X ? X : void 0,
                                imageSource: (0, J.Z)(r),
                                isActive: !1,
                                isUserLurking: _,
                                speakers: [],
                                speakerCount: 0,
                                rsvped: !0,
                                guildEventId: r.id
                            })
                        }), (0, t.jsx)(l.Text, {
                            color: "header-secondary",
                            className: re().privacyLevel,
                            variant: "text-sm/normal",
                            children: ee.Z.Messages.START_EVENT_CONFIRMATION.format({
                                privacyLevel: B,
                                privacyLevelHook: function(e, n) {
                                    return w !== A.j8.PUBLIC ? null : (0, t.jsxs)("div", {
                                        className: re().privacyLevel,
                                        children: [(0, t.jsx)(y.Z, {
                                            width: 16,
                                            height: 16,
                                            className: re().publicIcon
                                        }), (0, t.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: e
                                        })]
                                    }, n)
                                }
                            })
                        }), (0, t.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            className: re().header,
                            children: r.name
                        }), C && (0, t.jsx)(l.Checkbox, {
                            className: re().verticalSpacing,
                            type: l.Checkbox.Types.INVERTED,
                            value: k,
                            onChange: function(e) {
                                var n = e.currentTarget;
                                return j(n.checked)
                            },
                            children: (0, t.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: ee.Z.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                            })
                        }), (0, t.jsxs)("div", {
                            className: o()(re().inline, re().buttons, re().verticalSpacing),
                            children: [(0, t.jsx)(l.Button, {
                                color: l.Button.Colors.PRIMARY,
                                onClick: function() {
                                    b()
                                },
                                className: o()(re().button, re().spacing),
                                children: ee.Z.Messages.STAGE_BLOCKED_USERS_CANCEL
                            }), (0, t.jsx)(l.Button, {
                                color: l.Button.Colors.GREEN,
                                onClick: W,
                                submitting: G,
                                className: re().button,
                                children: ee.Z.Messages.START_EVENT
                            })]
                        }), null != M && null != M.getAnyErrorMessage() ? (0, t.jsx)(l.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            className: re().errorMessage,
                            children: M.getAnyErrorMessage()
                        }) : null]
                    })
                })
            }
        }
    }
]);