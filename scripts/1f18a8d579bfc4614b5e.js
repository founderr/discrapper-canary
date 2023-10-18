"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [87754], {
        152702: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(730381),
                o = t.n(r),
                i = t(327499);

            function l(e, n, t, r, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, o)
            }
            var u = function(e, n) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };
            const a = {
                setCommunicationDisabledDuration: function(e, n, t, r, a) {
                    return (c = function() {
                        var l;
                        return u(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    l = null != t ? o()().add(t, "s").toISOString() : null;
                                    return [4, i.Z.setCommunicationDisabledUntil({
                                        guildId: e,
                                        userId: n,
                                        communicationDisabledUntilTimestamp: l,
                                        duration: t,
                                        reason: r,
                                        location: a
                                    })];
                                case 1:
                                    u.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, r) {
                            var o = c.apply(e, n);

                            function i(e) {
                                l(o, t, r, i, u, "next", e)
                            }

                            function u(e) {
                                l(o, t, r, i, u, "throw", e)
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
                Z: () => S
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(70418),
                u = t(357088),
                a = t(401080),
                c = t(736626),
                s = t(664625),
                f = t(21372),
                d = t(567403),
                b = t(682776),
                p = t(473903),
                y = t(2590),
                v = t(473708),
                h = t(35637),
                m = t.n(h);

            function g(e, n, t, r, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function E(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            g(i, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            g(i, r, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function O(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e, n) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function S(e) {
                var n = e.guildId,
                    h = e.userId,
                    g = e.analyticsLocation,
                    S = e.analyticsLocations,
                    Z = e.context,
                    P = e.icon,
                    j = d.Z.getGuild(n),
                    w = s.default.getId(),
                    _ = (0, i.e7)([p.default], (function() {
                        return p.default.getUser(h)
                    })),
                    R = (0, i.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(n, h)
                    }), [n, h]);
                (0, i.e7)([b.Z], (function() {
                    return b.Z.getGuildVersion(n)
                }), [n]);
                var A = o.useMemo((function() {
                    return O({}, n, [h])
                }), [n, h]);
                (0, u.$)(A);
                var N = Z === y.IlC.POPOUT,
                    C = (0, a.Z)({
                        guild: j,
                        analyticsLocation: g
                    });
                if (null == j || N) return null;
                var x = w === h && (b.Z.can(y.Plq.CHANGE_NICKNAME, j) || b.Z.can(y.Plq.MANAGE_NICKNAMES, j)),
                    U = w === h,
                    D = b.Z.canManageUser(y.Plq.MANAGE_NICKNAMES, h, j);
                if (!(x || D || U)) return null;
                if (null == _ || R) return null;
                var T = j.hasFeature(y.oNc.HUB) ? v.Z.Messages.HUB_EDIT_PROFILE : v.Z.Messages.CHANGE_IDENTITY,
                    k = U ? T : v.Z.Messages.CHANGE_NICKNAME;
                return (0,
                    r.jsx)(l.MenuItem, {
                    id: "change-nickname",
                    label: (0, r.jsx)("div", {
                        className: m().labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: m().label,
                            children: k
                        })
                    }),
                    icon: P,
                    action: function() {
                        if (U) {
                            (0, c.Z)(_.id, _.getAvatarURL(n, 80), {
                                guildId: n
                            });
                            C()
                        } else(0, l.openModalLazy)(E((function() {
                            var e, o;
                            return I(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(33166)]).then(t.bind(t, 633166))];
                                    case 1:
                                        e = i.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(o, M(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        O(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: n,
                                                user: _,
                                                analyticsSource: g,
                                                analyticsLocations: S
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        430198: (e, n, t) => {
            t.d(n, {
                Z: () => D
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(70418),
                u = t(152702),
                a = t(327499),
                c = t(357088),
                s = t(90003),
                f = t(777302),
                d = t(872017),
                b = t(822003),
                p = t(61209),
                y = t(21372),
                v = t(567403),
                h = t(682776),
                m = t(473903),
                g = t(407561),
                E = t(661123),
                O = t(773148),
                M = t(2590),
                I = t(515222),
                S = t(589677),
                Z = t(473708);

            function P(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function j(e, n, t, r, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function w(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            j(i, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            j(i, r, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function _(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function R(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        _(e, n, t[n])
                    }))
                }
                return e
            }

            function A(e, n) {
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

            function N(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || x(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e) {
                return function(e) {
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || x(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, n) {
                if (e) {
                    if ("string" == typeof e) return P(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? P(e, n) : void 0
                }
            }
            var U = function(e, n) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function D(e, n, P, j) {
                var x = o.useMemo((function() {
                        return _({}, n, [e.id])
                    }), [n, e.id]),
                    D = null != j ? [j] : [];
                (0, c.$)(x);
                (0, i.e7)([h.Z], (function() {
                    return h.Z.getGuildVersion(n)
                }), [n]);
                var T, k = (0, i.e7)([v.Z], (function() {
                        return v.Z.getGuild(n)
                    }), [n]),
                    L = (0, i.e7)([m.default], (function() {
                        var n;
                        return (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id
                    }), [e.id]),
                    G = (0, i.e7)([y.ZP], (function() {
                        return y.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id]),
                    B = (0, i.e7)([p.Z], (function() {
                        return p.Z.getChannel(P)
                    }), [P]),
                    V = N((0, d.ZP)(e.id, n), 2)[1],
                    q = null == B ? void 0 : B.isGuildStageVoice(),
                    F = (0, i.cj)([g.Z], (function() {
                        var t, r, o, i = g.Z.getVoiceState(n, e.id);
                        return {
                            muted: null !== (t = null == i ? void 0 : i.mute) && void 0 !== t && t,
                            deafened: null !== (r = null == i ? void 0 : i.deaf) && void 0 !== r && r,
                            suppressed: null !== (o = null == i ? void 0 : i.suppress) && void 0 !== o && o,
                            voiceChannelId: null == i ? void 0 : i.channelId
                        }
                    })),
                    K = F.muted,
                    H = F.deafened,
                    Y = F.suppressed,
                    W = F.voiceChannelId,
                    z = (0, i.e7)([y.ZP], (function() {
                        return y.ZP.getMember(n, e.id)
                    })),
                    Q = (0, b.sE)(n, {
                        location: j,
                        targetUserId: e.id
                    }),
                    $ = (0, f.Z)(n, e.id),
                    J = null != W && null != P && h.Z.canWithPartialContext(M.Plq.VIEW_CHANNEL, {
                        channelId: W
                    }) && !G ? [(!q || q && !Y) && h.Z.canWithPartialContext(M.Plq.MUTE_MEMBERS, {
                        channelId: P
                    }) ? (0, r.jsx)(l.MenuCheckboxItem, {
                        id: "voice-mute",
                        label: Z.Z.Messages.SERVER_VOICE_MUTE,
                        checked: K,
                        color: "danger",
                        action: function() {
                            !1 === K && Q(b.jQ.MUTE);
                            a.Z.setServerMute(n, e.id, !K)
                        }
                    }, "voice-mute") : null, (!q || q && !Y) && h.Z.canWithPartialContext(M.Plq.DEAFEN_MEMBERS, {
                        channelId: P
                    }) ? (0, r.jsx)(l.MenuCheckboxItem, {
                        id: "voice-deafen",
                        label: Z.Z.Messages.SERVER_DEAFEN,
                        checked: H,
                        color: "danger",
                        action: function() {
                            return a.Z.setServerDeaf(n, e.id, !H)
                        }
                    }, "voice-deafen") : null, !L && null != k && h.Z.canWithPartialContext(M.Plq.MOVE_MEMBERS, {
                        channelId: P
                    }) ? (0, r.jsx)(l.MenuItem, {
                        id: "voice-disconnect",
                        label: L ? Z.Z.Messages.DISCONNECT_SELF : Z.Z.Messages.DISCONNECT_OTHER,
                        color: "danger",
                        action: function() {
                            return a.Z.setChannel(n, e.id, null)
                        }
                    }, "voice-disconnect") : null] : [],
                    X = (T = w((function(n, t, r) {
                        var o;
                        return U(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!n.ctrlKey && !n.metaKey) return [3, 4];
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, , 4]);
                                    return [4, u.Z.setCommunicationDisabledDuration(t, r, I.UK.DURATION_60_SEC, null, j)];
                                case 2:
                                    i.sent();
                                    Q(b.jQ.TIMEOUT);
                                    (0, l.showToast)((0, l.createToast)(Z.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                        user: null !== (o = O.ZP.getName(t, null, e)) && void 0 !== o ? o : ""
                                    }), l.ToastType.SUCCESS));
                                    return [3, 4];
                                case 3:
                                    i.sent();
                                    (0, l.showToast)((0, l.createToast)(Z.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, l.ToastType.FAILURE));
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e, n, t) {
                        return T.apply(this, arguments)
                    }),
                    ee = null;
                if (!L && null != k && null != z && null != z.joinedAt && (h.Z.canManageUser(M.Plq.MODERATE_MEMBERS, e, k) || h.Z.canManageUser(M.Plq.MANAGE_ROLES, e, k)) && k.hasFeature(M.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
                    var ne;
                    if ((0, E.yE)(null !== (ne = z.flags) && void 0 !== ne ? ne : 0, S.q.BYPASSES_VERIFICATION)) {
                        var te;
                        ee = (0, r.jsx)(l.MenuItem, {
                            id: "verify",
                            label: Z.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                            action: function() {
                                return a.Z.setMemberFlags(k.id, e.id, (0, E.mB)(null !== (te = z.flags) && void 0 !== te ? te : 0, S.q.BYPASSES_VERIFICATION, !1))
                            }
                        }, "verify")
                    } else {
                        var re;
                        ee = (0, r.jsx)(l.MenuItem, {
                            id: "verify",
                            label: Z.Z.Messages.MANUALLY_VERIFY_MEMBER,
                            action: function() {
                                return a.Z.setMemberFlags(k.id, e.id, (0, E.mB)(null !== (re = z.flags) && void 0 !== re ? re : 0, S.q.BYPASSES_VERIFICATION, !0))
                            }
                        }, "verify")
                    }
                }
                var oe = L || null == k ? [] : [ee, $ && !G ? V ? (0, r.jsx)(l.MenuItem, {
                    id: "removetimeout",
                    label: Z.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        (0, s.q)(n, e.id, D)
                    }
                }, "removetimeout") : (0, r.jsx)(l.MenuItem, {
                    id: "timeout",
                    label: Z.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function(t) {
                        if (t.ctrlKey || t.metaKey) return X(t, n, e.id);
                        (0, s.z)(n, e.id, D)
                    }
                }, "timeout") : null, h.Z.canManageUser(M.Plq.KICK_MEMBERS, e, k) && !e.isClyde() ? (0, r.jsx)(l.MenuItem, {
                    id: "kick",
                    label: Z.Z.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, l.openModalLazy)(w((function() {
                            var o, i;
                            return U(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(11266)]).then(t.bind(t, 811266))];
                                    case 1:
                                        o = l.sent(), i = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, A(R({}, t), {
                                                location: j,
                                                guildId: n,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "kick") : null, h.Z.canManageUser(M.Plq.BAN_MEMBERS, e, k) ? (0, r.jsx)(l.MenuItem, {
                    id: "ban",
                    label: Z.Z.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, l.openModalLazy)(w((function() {
                            var o, i;
                            return U(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(33970)]).then(t.bind(t, 333970))];
                                    case 1:
                                        o = l.sent(), i = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, A(R({}, t), {
                                                location: j,
                                                guildId: n,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "ban") : null];
                return C(J).concat(C(oe))
            }
        },
        973424: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                o = (t(667294),
                    t(547308)),
                i = t(202351),
                l = t(70418),
                u = t(316878),
                a = t(822003),
                c = t(703790),
                s = t(21372),
                f = t(567403),
                d = t(682776),
                b = t(72580),
                p = t(2590),
                y = t(473708),
                v = t(950677),
                h = t.n(v);

            function m(e, n) {
                var t, i;
                return (0, r.jsxs)("div", {
                    className: h().roleRow,
                    children: ["dot" === n ? (0, r.jsx)(l.RoleDot, {
                        className: h().roleDot,
                        color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.Rf)(p.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, r.jsx)(l.RoleCircle, {
                        className: h().roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, o.Rf)(p.p6O)
                    }), (0, r.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function g(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    v = function(t) {
                        if (M.includes(t.id)) {
                            c.Z.updateMemberRoles(n, e, M.filter((function(e) {
                                return e !== t.id
                            })), [], [t.id]);
                            E(a.jQ.REMOVE_ROLE)
                        } else {
                            c.Z.updateMemberRoles(n, e, M.concat([t.id]), [t.id], []);
                            E(a.jQ.ADD_ROLE)
                        }
                    },
                    h = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuild(n)
                    }), [n]),
                    g = (0, i.e7)([u.Z], (function() {
                        return u.Z.roleStyle
                    })),
                    E = (0,
                        a.sE)(n, {
                        location: o,
                        targetUserId: e
                    }),
                    O = (0, i.cj)([s.ZP, d.Z], (function() {
                        var t = s.ZP.getMember(n, e);
                        return {
                            userRoles: null != t ? t.roles : [],
                            isGuildMember: null != t,
                            canManageRoles: null != h && d.Z.can(p.Plq.MANAGE_ROLES, h)
                        }
                    }), [e, n, h]),
                    M = O.userRoles,
                    I = O.isGuildMember,
                    S = O.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == M || null == h) return null;
                if (!I) return null;
                var Z = d.Z.getHighestRole(h),
                    P = Object.values(h.roles).filter((function(e) {
                        return e.id !== h.id
                    })),
                    j = S ? P.map((function(e) {
                        var n = e.managed || !d.Z.isRoleHigher(h, Z, e),
                            t = -1 !== M.indexOf(e.id);
                        return n && !t ? null : (0, r.jsx)(l.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return m(e, g)
                            },
                            disabled: n,
                            action: function() {
                                return v(e)
                            },
                            checked: t
                        }, e.id)
                    })) : P.filter((function(e) {
                        return -1 !== M.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === h.id ? null : (0, r.jsx)(l.MenuItem, {
                            id: e.id,
                            label: function() {
                                return m(e, g)
                            }
                        }, e.id)
                    }));
                return 0 === j.filter(b.lm).length ? null : t ? j : (0, r.jsx)(l.MenuItem, {
                    id: "roles",
                    label: y.Z.Messages.ROLES_LIST.format({
                        numRoles: j.length
                    }),
                    children: j
                })
            }
        }
    }
]);