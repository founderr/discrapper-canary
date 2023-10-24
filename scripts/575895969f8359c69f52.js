"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30198], {
        152702: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(730381),
                o = t.n(r),
                a = t(327499);

            function i(e, n, t, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, o)
            }
            var u = function(e, n) {
                var t, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = n.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };
            const l = {
                setCommunicationDisabledDuration: function(e, n, t, r, l) {
                    return (c = function() {
                        var i;
                        return u(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    i = null != t ? o()().add(t, "s").toISOString() : null;
                                    return [4, a.Z.setCommunicationDisabledUntil({
                                        guildId: e,
                                        userId: n,
                                        communicationDisabledUntilTimestamp: i,
                                        duration: t,
                                        reason: r,
                                        location: l
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

                            function a(e) {
                                i(o, t, r, a, u, "next", e)
                            }

                            function u(e) {
                                i(o, t, r, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    })();
                    var c
                }
            }
        },
        430198: (e, n, t) => {
            t.d(n, {
                Z: () => D
            });
            var r = t(785893),
                o = t(667294),
                a = t(202351),
                i = t(70418),
                u = t(152702),
                l = t(327499),
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
                E = t(407561),
                I = t(661123),
                g = t(773148),
                M = t(2590),
                S = t(515222),
                O = t(589677),
                _ = t(473708);

            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function C(e, n, t, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function w(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(n, t);

                        function i(e) {
                            C(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            C(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        P(e, n, t[n])
                    }))
                }
                return e
            }

            function R(e, n) {
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

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || U(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return Z(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, n) {
                if (e) {
                    if ("string" == typeof e) return Z(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Z(e, n) : void 0
                }
            }
            var T = function(e, n) {
                var t, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = n.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function D(e, n, Z, C) {
                var U = o.useMemo((function() {
                        return P({}, n, [e.id])
                    }), [n, e.id]),
                    D = null != C ? [C] : [];
                (0, c.$)(U);
                (0, a.e7)([h.Z], (function() {
                    return h.Z.getGuildVersion(n)
                }), [n]);
                var x, k = (0, a.e7)([v.Z], (function() {
                        return v.Z.getGuild(n)
                    }), [n]),
                    L = (0, a.e7)([m.default], (function() {
                        var n;
                        return (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id
                    }), [e.id]),
                    B = (0, a.e7)([y.ZP], (function() {
                        return y.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id]),
                    F = (0, a.e7)([p.Z], (function() {
                        return p.Z.getChannel(Z)
                    }), [Z]),
                    G = j((0, d.ZP)(e.id, n), 2)[1],
                    V = null == F ? void 0 : F.isGuildStageVoice(),
                    q = (0, a.cj)([E.Z], (function() {
                        var t, r, o, a = E.Z.getVoiceState(n, e.id);
                        return {
                            muted: null !== (t = null == a ? void 0 : a.mute) && void 0 !== t && t,
                            deafened: null !== (r = null == a ? void 0 : a.deaf) && void 0 !== r && r,
                            suppressed: null !== (o = null == a ? void 0 : a.suppress) && void 0 !== o && o,
                            voiceChannelId: null == a ? void 0 : a.channelId
                        }
                    })),
                    K = q.muted,
                    Y = q.deafened,
                    W = q.suppressed,
                    z = q.voiceChannelId,
                    H = (0, a.e7)([y.ZP], (function() {
                        return y.ZP.getMember(n, e.id)
                    })),
                    Q = (0, b.sE)(n, {
                        location: C,
                        targetUserId: e.id
                    }),
                    $ = (0, f.Z)(n, e.id),
                    J = null != z && null != Z && h.Z.canWithPartialContext(M.Plq.VIEW_CHANNEL, {
                        channelId: z
                    }) && !B ? [(!V || V && !W) && h.Z.canWithPartialContext(M.Plq.MUTE_MEMBERS, {
                        channelId: Z
                    }) ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "voice-mute",
                        label: _.Z.Messages.SERVER_VOICE_MUTE,
                        checked: K,
                        color: "danger",
                        action: function() {
                            !1 === K && Q(b.jQ.MUTE);
                            l.Z.setServerMute(n, e.id, !K)
                        }
                    }, "voice-mute") : null, (!V || V && !W) && h.Z.canWithPartialContext(M.Plq.DEAFEN_MEMBERS, {
                        channelId: Z
                    }) ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "voice-deafen",
                        label: _.Z.Messages.SERVER_DEAFEN,
                        checked: Y,
                        color: "danger",
                        action: function() {
                            return l.Z.setServerDeaf(n, e.id, !Y)
                        }
                    }, "voice-deafen") : null, !L && null != k && h.Z.canWithPartialContext(M.Plq.MOVE_MEMBERS, {
                        channelId: Z
                    }) ? (0, r.jsx)(i.MenuItem, {
                        id: "voice-disconnect",
                        label: L ? _.Z.Messages.DISCONNECT_SELF : _.Z.Messages.DISCONNECT_OTHER,
                        color: "danger",
                        action: function() {
                            return l.Z.setChannel(n, e.id, null)
                        }
                    }, "voice-disconnect") : null] : [],
                    X = (x = w((function(n, t, r) {
                        var o;
                        return T(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!n.ctrlKey && !n.metaKey) return [3, 4];
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, u.Z.setCommunicationDisabledDuration(t, r, S.UK.DURATION_60_SEC, null, C)];
                                case 2:
                                    a.sent();
                                    Q(b.jQ.TIMEOUT);
                                    (0, i.showToast)((0, i.createToast)(_.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                        user: null !== (o = g.ZP.getName(t, null, e)) && void 0 !== o ? o : ""
                                    }), i.ToastType.SUCCESS));
                                    return [3, 4];
                                case 3:
                                    a.sent();
                                    (0, i.showToast)((0, i.createToast)(_.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE));
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e, n, t) {
                        return x.apply(this, arguments)
                    }),
                    ee = null;
                if (!L && null != k && null != H && null != H.joinedAt && (h.Z.canManageUser(M.Plq.MODERATE_MEMBERS, e, k) || h.Z.canManageUser(M.Plq.MANAGE_ROLES, e, k)) && k.hasFeature(M.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
                    var ne;
                    if ((0, I.yE)(null !== (ne = H.flags) && void 0 !== ne ? ne : 0, O.q.BYPASSES_VERIFICATION)) {
                        var te;
                        ee = (0, r.jsx)(i.MenuItem, {
                            id: "verify",
                            label: _.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                            action: function() {
                                return l.Z.setMemberFlags(k.id, e.id, (0, I.mB)(null !== (te = H.flags) && void 0 !== te ? te : 0, O.q.BYPASSES_VERIFICATION, !1))
                            }
                        }, "verify")
                    } else {
                        var re;
                        ee = (0, r.jsx)(i.MenuItem, {
                            id: "verify",
                            label: _.Z.Messages.MANUALLY_VERIFY_MEMBER,
                            action: function() {
                                return l.Z.setMemberFlags(k.id, e.id, (0, I.mB)(null !== (re = H.flags) && void 0 !== re ? re : 0, O.q.BYPASSES_VERIFICATION, !0))
                            }
                        }, "verify")
                    }
                }
                var oe = L || null == k ? [] : [ee, $ && !B ? G ? (0, r.jsx)(i.MenuItem, {
                    id: "removetimeout",
                    label: _.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        (0, s.q)(n, e.id, D)
                    }
                }, "removetimeout") : (0, r.jsx)(i.MenuItem, {
                    id: "timeout",
                    label: _.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function(t) {
                        if (t.ctrlKey || t.metaKey) return X(t, n, e.id);
                        (0, s.z)(n, e.id, D)
                    }
                }, "timeout") : null, h.Z.canManageUser(M.Plq.KICK_MEMBERS, e, k) && !e.isClyde() ? (0, r.jsx)(i.MenuItem, {
                    id: "kick",
                    label: _.Z.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, i.openModalLazy)(w((function() {
                            var o, a;
                            return T(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(11266)]).then(t.bind(t, 811266))];
                                    case 1:
                                        o = i.sent(), a = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, R(A({}, t), {
                                                location: C,
                                                guildId: n,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "kick") : null, h.Z.canManageUser(M.Plq.BAN_MEMBERS, e, k) ? (0, r.jsx)(i.MenuItem, {
                    id: "ban",
                    label: _.Z.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, i.openModalLazy)(w((function() {
                            var o, a;
                            return T(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(33970)]).then(t.bind(t, 333970))];
                                    case 1:
                                        o = i.sent(), a = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, R(A({}, t), {
                                                location: C,
                                                guildId: n,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "ban") : null];
                return N(J).concat(N(oe))
            }
        }
    }
]);