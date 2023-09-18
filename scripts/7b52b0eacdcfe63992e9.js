"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7427], {
        152702: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(730381),
                o = t.n(r),
                i = t(327499);

            function l(e, n, t, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, o)
            }
            var a = function(e, n) {
                var t, r, o, i, l = {
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
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
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
            const u = {
                setCommunicationDisabledDuration: function(e, n, t, r, u) {
                    return (c = function() {
                        var l;
                        return a(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    l = null != t ? o()().add(t, "s").toISOString() : null;
                                    return [4, i.Z.setCommunicationDisabledUntil({
                                        guildId: e,
                                        userId: n,
                                        communicationDisabledUntilTimestamp: l,
                                        duration: t,
                                        reason: r,
                                        location: u
                                    })];
                                case 1:
                                    a.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, r) {
                            var o = c.apply(e, n);

                            function i(e) {
                                l(o, t, r, i, a, "next", e)
                            }

                            function a(e) {
                                l(o, t, r, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    })();
                    var c
                }
            }
        },
        434651: (e, n, t) => {
            t.d(n, {
                Z: () => Z
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(882723),
                a = t(357088),
                u = t(401080),
                c = t(736626),
                s = t(664625),
                d = t(21372),
                f = t(567403),
                b = t(682776),
                p = t(473903),
                v = t(2590),
                m = t(473708),
                g = t(882090),
                h = t.n(g);

            function E(e, n, t, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, o)
            }

            function y(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            E(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            E(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function M(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function O(e, n) {
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
            var I = function(e, n) {
                var t, r, o, i, l = {
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
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
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

            function Z(e) {
                var n = e.guildId,
                    g = e.userId,
                    E = e.analyticsLocation,
                    Z = e.analyticsLocations,
                    S = e.context,
                    N = e.icon,
                    _ = f.Z.getGuild(n),
                    A = s.default.getId(),
                    j = (0, i.e7)([p.default], (function() {
                        return p.default.getUser(g)
                    })),
                    P = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.isGuestOrLurker(n, g)
                    }), [n, g]);
                (0, i.e7)([b.Z], (function() {
                    return b.Z.getGuildVersion(n)
                }), [n]);
                var C = o.useMemo((function() {
                    return M({}, n, [g])
                }), [n, g]);
                (0, a.$)(C);
                var D = S === v.IlC.POPOUT,
                    w = (0, u.Z)({
                        guild: _,
                        analyticsLocation: E
                    });
                if (null == _ || D) return null;
                var x = A === g && (b.Z.can(v.Plq.CHANGE_NICKNAME, _) || b.Z.can(v.Plq.MANAGE_NICKNAMES, _)),
                    R = A === g,
                    U = b.Z.canManageUser(v.Plq.MANAGE_NICKNAMES, g, _);
                if (!(x || U || R)) return null;
                if (null == j || P) return null;
                var L = _.hasFeature(v.oNc.HUB) ? m.Z.Messages.HUB_EDIT_PROFILE : m.Z.Messages.CHANGE_IDENTITY,
                    T = R ? L : m.Z.Messages.CHANGE_NICKNAME;
                return (0, r.jsx)(l.MenuItem, {
                    id: "change-nickname",
                    label: (0, r.jsx)("div", {
                        className: h().labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: h().label,
                            children: T
                        })
                    }),
                    icon: N,
                    action: function() {
                        if (R) {
                            (0, c.Z)(j.id, j.getAvatarURL(n, 80), {
                                guildId: n
                            });
                            w()
                        } else(0, l.openModalLazy)(y((function() {
                            var e, o;
                            return I(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(33166)]).then(t.bind(t, 633166))];
                                    case 1:
                                        e = i.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(o, O(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        M(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: n,
                                                user: j,
                                                analyticsSource: E,
                                                analyticsLocations: Z
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(882723),
                a = t(577357),
                u = t(703790),
                c = t(567403),
                s = t(682776),
                d = t(2590),
                f = t(473708),
                b = t(882090),
                p = t.n(b);

            function v(e, n, t) {
                var b = c.Z.getGuild(n),
                    v = (0, i.e7)([s.Z], (function() {
                        return null != b ? s.Z.can(d.Plq.MANAGE_GUILD, b) : null
                    })),
                    m = o.useCallback((function() {
                        u.Z.open(n, d.pNK.INTEGRATIONS);
                        a.Z.setSection(d.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    g = t === d.IlC.POPOUT;
                return e.bot && v && !g ? (0, r.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: (0, r.jsx)("div", {
                        className: p().labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: p().label,
                            children: f.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: m
                }) : null
            }
        },
        430198: (e, n, t) => {
            t.d(n, {
                Z: () => U
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(882723),
                a = t(152702),
                u = t(327499),
                c = t(357088),
                s = t(90003),
                d = t(777302),
                f = t(872017),
                b = t(822003),
                p = t(61209),
                v = t(21372),
                m = t(567403),
                g = t(682776),
                h = t(473903),
                E = t(407561),
                y = t(661123),
                M = t(773148),
                O = t(2590),
                I = t(515222),
                Z = t(589677),
                S = t(473708);

            function N(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function _(e, n, t, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, o)
            }

            function A(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            _(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            _(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function j(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        j(e, n, t[n])
                    }))
                }
                return e
            }

            function C(e, n) {
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

            function D(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || x(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || x(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, n) {
                if (e) {
                    if ("string" == typeof e) return N(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? N(e, n) : void 0
                }
            }
            var R = function(e, n) {
                var t, r, o, i, l = {
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
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
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

            function U(e, n, N, _) {
                var x = o.useMemo((function() {
                        return j({}, n, [e.id])
                    }), [n, e.id]),
                    U = null != _ ? [_] : [];
                (0, c.$)(x);
                (0, i.e7)([g.Z], (function() {
                    return g.Z.getGuildVersion(n)
                }), [n]);
                var L, T = (0, i.e7)([m.Z], (function() {
                        return m.Z.getGuild(n)
                    }), [n]),
                    k = (0, i.e7)([h.default], (function() {
                        var n;
                        return (null === (n = h.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id
                    }), [e.id]),
                    G = (0, i.e7)([v.ZP], (function() {
                        return v.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id]),
                    B = (0, i.e7)([p.Z], (function() {
                        return p.Z.getChannel(N)
                    }), [N]),
                    V = D((0, f.ZP)(e.id, n), 2)[1],
                    F = null == B ? void 0 : B.isGuildStageVoice(),
                    q = (0, i.cj)([E.Z], (function() {
                        var t, r, o, i = E.Z.getVoiceState(n, e.id);
                        return {
                            muted: null !== (t = null == i ? void 0 : i.mute) && void 0 !== t && t,
                            deafened: null !== (r = null == i ? void 0 : i.deaf) && void 0 !== r && r,
                            suppressed: null !== (o = null == i ? void 0 : i.suppress) && void 0 !== o && o,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        }
                    })),
                    K = q.muted,
                    Y = q.deafened,
                    H = q.suppressed,
                    W = q.voiceChannelId,
                    z = (0, i.e7)([v.ZP], (function() {
                        return v.ZP.getMember(n, e.id)
                    })),
                    Q = (0, b.sE)(n, {
                        location: _,
                        targetUserId: e.id
                    }),
                    $ = (0, d.Z)(n, e.id),
                    J = null != W && null != N && g.Z.canWithPartialContext(O.Plq.VIEW_CHANNEL, {
                        channelId: W
                    }) && !G ? [(!F || F && !H) && g.Z.canWithPartialContext(O.Plq.MUTE_MEMBERS, {
                        channelId: N
                    }) ? (0, r.jsx)(l.MenuCheckboxItem, {
                        id: "voice-mute",
                        label: S.Z.Messages.SERVER_VOICE_MUTE,
                        checked: K,
                        color: "danger",
                        action: function() {
                            !1 === K && Q(b.jQ.MUTE);
                            u.Z.setServerMute(n, e.id, !K)
                        }
                    }, "voice-mute") : null, (!F || F && !H) && g.Z.canWithPartialContext(O.Plq.DEAFEN_MEMBERS, {
                        channelId: N
                    }) ? (0, r.jsx)(l.MenuCheckboxItem, {
                        id: "voice-deafen",
                        label: S.Z.Messages.SERVER_DEAFEN,
                        checked: Y,
                        color: "danger",
                        action: function() {
                            return u.Z.setServerDeaf(n, e.id, !Y)
                        }
                    }, "voice-deafen") : null, !k && null != T && g.Z.canWithPartialContext(O.Plq.MOVE_MEMBERS, {
                        channelId: N
                    }) ? (0, r.jsx)(l.MenuItem, {
                        id: "voice-disconnect",
                        label: k ? S.Z.Messages.DISCONNECT_SELF : S.Z.Messages.DISCONNECT_OTHER,
                        color: "danger",
                        action: function() {
                            return u.Z.setChannel(n, e.id, null)
                        }
                    }, "voice-disconnect") : null] : [],
                    X = (L = A((function(n, t, r) {
                        var o;
                        return R(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!n.ctrlKey && !n.metaKey) return [3, 4];
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, , 4]);
                                    return [4, a.Z.setCommunicationDisabledDuration(t, r, I.UK.DURATION_60_SEC, null, _)];
                                case 2:
                                    i.sent();
                                    Q(b.jQ.TIMEOUT);
                                    (0, l.showToast)((0,
                                        l.createToast)(S.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                        user: null !== (o = M.ZP.getName(t, null, e)) && void 0 !== o ? o : ""
                                    }), l.ToastType.SUCCESS));
                                    return [3, 4];
                                case 3:
                                    i.sent();
                                    (0, l.showToast)((0, l.createToast)(S.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, l.ToastType.FAILURE));
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e, n, t) {
                        return L.apply(this, arguments)
                    }),
                    ee = null;
                if (!k && null != T && null != z && null != z.joinedAt && (g.Z.canManageUser(O.Plq.MODERATE_MEMBERS, e, T) || g.Z.canManageUser(O.Plq.MANAGE_ROLES, e, T)) && T.hasFeature(O.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
                    var ne;
                    if ((0, y.yE)(null !== (ne = z.flags) && void 0 !== ne ? ne : 0, Z.q.BYPASSES_VERIFICATION)) {
                        var te;
                        ee = (0, r.jsx)(l.MenuItem, {
                            id: "verify",
                            label: S.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                            action: function() {
                                return u.Z.setMemberFlags(T.id, e.id, (0, y.mB)(null !== (te = z.flags) && void 0 !== te ? te : 0, Z.q.BYPASSES_VERIFICATION, !1))
                            }
                        }, "verify")
                    } else {
                        var re;
                        ee = (0, r.jsx)(l.MenuItem, {
                            id: "verify",
                            label: S.Z.Messages.MANUALLY_VERIFY_MEMBER,
                            action: function() {
                                return u.Z.setMemberFlags(T.id, e.id, (0, y.mB)(null !== (re = z.flags) && void 0 !== re ? re : 0, Z.q.BYPASSES_VERIFICATION, !0))
                            }
                        }, "verify")
                    }
                }
                var oe = k || null == T ? [] : [ee, $ && !G ? V ? (0, r.jsx)(l.MenuItem, {
                    id: "removetimeout",
                    label: S.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        (0, s.q)(n, e.id, U)
                    }
                }, "removetimeout") : (0, r.jsx)(l.MenuItem, {
                    id: "timeout",
                    label: S.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function(t) {
                        if (t.ctrlKey || t.metaKey) return X(t, n, e.id);
                        (0, s.z)(n, e.id, U)
                    }
                }, "timeout") : null, g.Z.canManageUser(O.Plq.KICK_MEMBERS, e, T) ? (0, r.jsx)(l.MenuItem, {
                    id: "kick",
                    label: S.Z.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, l.openModalLazy)(A((function() {
                            var o, i;
                            return R(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(11266)]).then(t.bind(t, 811266))];
                                    case 1:
                                        o = l.sent(), i = o.default;
                                        return [2, function(t) {
                                            return (0,
                                                r.jsx)(i, C(P({}, t), {
                                                location: _,
                                                guildId: n,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "kick") : null, g.Z.canManageUser(O.Plq.BAN_MEMBERS, e, T) ? (0, r.jsx)(l.MenuItem, {
                    id: "ban",
                    label: S.Z.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, l.openModalLazy)(A((function() {
                            var o, i;
                            return R(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(33970)]).then(t.bind(t, 333970))];
                                    case 1:
                                        o = l.sent(), i = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, C(P({}, t), {
                                                location: _,
                                                guildId: n,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "ban") : null];
                return w(J).concat(w(oe))
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(882723),
                l = t(105783),
                a = t(656645),
                u = t(656907),
                c = t(525077),
                s = t(563367),
                d = t(464187),
                f = t(473903),
                b = t(265367),
                p = t(652591),
                v = t(2590),
                m = t(36256),
                g = t(473708),
                h = t(696249),
                E = t.n(h);

            function y(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT,
                    t = (0, o.e7)([f.default], (function() {
                        var n;
                        return (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    h = (0, o.e7)([u.Z], (function() {
                        return u.Z.isLocalSoundboardMuted(e)
                    })),
                    y = (0, o.cj)([c.Z], (function() {
                        return t ? {
                            muted: c.Z.isSelfMute(n),
                            deafened: c.Z.isSelfDeaf(n)
                        } : {
                            muted: c.Z.isLocalMute(e, n),
                            localVideoDisabled: c.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: c.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    M = y.muted,
                    O = y.deafened,
                    I = void 0 !== O && O,
                    Z = y.localVideoDisabled,
                    S = void 0 !== Z && Z,
                    N = y.localVideoAutoDisabled,
                    _ = void 0 !== N && N,
                    A = c.Z.supports(m.AN.DISABLE_VIDEO) && !t ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "disable-video",
                        label: g.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (_) l.Z.show({
                                title: g.Z.Messages.UNSTABLE_CONNECTION,
                                body: g.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: g.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: g.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return a.Z.setDisableLocalVideo(e, v.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = S ? v.ZUi.MANUAL_ENABLED : v.ZUi.DISABLED;
                                a.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: S,
                        subtext: _ ? (0, r.jsxs)("div", {
                            className: E().videoPaused,
                            children: [(0, r.jsx)(b.Z, {
                                width: 12,
                                className: E().warningCircle
                            }), g.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    j = t ? null : (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: g.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = s.Z.getRTCConnection();
                            p.default.track(v.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !h
                            });
                            a.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: h
                    }, "soundboard-sound-mute");
                return t ? [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: M
                }, "self-mute"), (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "deafen",
                    label: g.Z.Messages.DEAFEN,
                    action: function() {
                        return a.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: I
                }, "self-deafen"), A] : [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleLocalMute(e, n)
                    },
                    checked: M
                }, "self-mute"), j, A]
            }
        },
        973424: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                o = (t(667294), t(547308)),
                i = t(202351),
                l = t(882723),
                a = t(316878),
                u = t(822003),
                c = t(703790),
                s = t(21372),
                d = t(567403),
                f = t(682776),
                b = t(72580),
                p = t(2590),
                v = t(473708),
                m = t(642124),
                g = t.n(m);

            function h(e, n) {
                var t, i;
                return (0, r.jsxs)("div", {
                    className: g().roleRow,
                    children: ["dot" === n ? (0, r.jsx)(l.RoleDot, {
                        className: g().roleDot,
                        color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.Rf)(p.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, r.jsx)(l.RoleCircle, {
                        className: g().roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, o.Rf)(p.p6O)
                    }), (0, r.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function E(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    m = function(t) {
                        if (O.includes(t.id)) {
                            c.Z.updateMemberRoles(n, e, O.filter((function(e) {
                                return e !== t.id
                            })), [], [t.id]);
                            y(u.jQ.REMOVE_ROLE)
                        } else {
                            c.Z.updateMemberRoles(n, e, O.concat([t.id]), [t.id], []);
                            y(u.jQ.ADD_ROLE)
                        }
                    },
                    g = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuild(n)
                    }), [n]),
                    E = (0, i.e7)([a.Z], (function() {
                        return a.Z.roleStyle
                    })),
                    y = (0, u.sE)(n, {
                        location: o,
                        targetUserId: e
                    }),
                    M = (0, i.cj)([s.ZP, f.Z], (function() {
                        var t = s.ZP.getMember(n, e);
                        return {
                            userRoles: null != t ? t.roles : [],
                            isGuildMember: null != t,
                            canManageRoles: null != g && f.Z.can(p.Plq.MANAGE_ROLES, g)
                        }
                    }), [e, n, g]),
                    O = M.userRoles,
                    I = M.isGuildMember,
                    Z = M.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == O || null == g) return null;
                if (!I) return null;
                var S = f.Z.getHighestRole(g),
                    N = Object.values(g.roles).filter((function(e) {
                        return e.id !== g.id
                    })),
                    _ = Z ? N.map((function(e) {
                        var n = e.managed || !f.Z.isRoleHigher(g, S, e),
                            t = -1 !== O.indexOf(e.id);
                        return n && !t ? null : (0, r.jsx)(l.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return h(e, E)
                            },
                            disabled: n,
                            action: function() {
                                return m(e)
                            },
                            checked: t
                        }, e.id)
                    })) : N.filter((function(e) {
                        return -1 !== O.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === g.id ? null : (0, r.jsx)(l.MenuItem, {
                            id: e.id,
                            label: function() {
                                return h(e, E)
                            }
                        }, e.id)
                    }));
                return 0 === _.filter(b.lm).length ? null : t ? _ : (0, r.jsx)(l.MenuItem, {
                    id: "roles",
                    label: v.Z.Messages.ROLES_LIST.format({
                        numRoles: _.length
                    }),
                    children: _
                })
            }
        }
    }
]);
//# sourceMappingURL=7b52b0eacdcfe63992e9.js.map