"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [26934], {
        20170: (n, e, t) => {
            t.d(e, {
                C: () => m,
                u: () => N
            });
            var r = t(940060),
                i = t(105783),
                o = t(703790),
                u = t(567403),
                l = t(888236),
                a = t(404741),
                s = t(185219),
                c = t(322008),
                f = t(2590),
                h = t(473708);

            function p(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function v(n, e, t, r, i, o, u) {
                try {
                    var l = n[o](u),
                        a = l.value
                } catch (n) {
                    t(n);
                    return
                }
                l.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function y(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);

                        function u(n) {
                            v(o, r, i, u, l, "next", n)
                        }

                        function l(n) {
                            v(o, r, i, u, l, "throw", n)
                        }
                        u(void 0)
                    }))
                }
            }

            function d(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(n); !(u = (r = t.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (n) {
                            l = !0;
                            i = n
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return p(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(n, e) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = e.call(n, u)
                            } catch (n) {
                                o = [6, n];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function m(n, e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = y((function(n, e) {
                    return b(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return null == n ? [2, !0] : [4, w(n, e, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(n, e, t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = y((function(n, e, t) {
                    var r, i, o, h, p, v, y, m, g;
                    return b(this, (function(b) {
                        switch (b.label) {
                            case 0:
                                return null == (i = u.Z.getGuild(n)) ? [2, !0] : (o = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(f.oNc.GUILD_ONBOARDING))) ? o && a.Z.shouldFetchPrompts(n) ? [4, (0, l.eM)(n)] : [3, 2] : [2, !0];
                            case 1:
                                b.sent();
                                b.label = 2;
                            case 2:
                                h = a.Z.getDefaultChannelIds(n);
                                p = d((0, s.d9)(n, h), 2), v = p[0], y = p[1];
                                if (!h.includes(e)) return [2, !0];
                                m = t.removingView && y.length - 1 < c.md;
                                g = (t.removingChat || t.removingView) && v.length - 1 < c.X;
                                return [2, !m && !g]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(n, e, t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = y((function(n, e, t) {
                    var u, l, a, s;
                    return b(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                if (null == (u = n.getGuildId())) return [2, !0];
                                null != t && (e = r.Z.filter(e, r.Z.invert(t)));
                                l = n.permissionOverwrites[u];
                                a = null != l ? r.Z.filter(l.deny, r.Z.invert(l.allow)) : r.Z.deserialize(0);
                                s = {
                                    removingView: r.Z.has(e, f.Plq.VIEW_CHANNEL) && !r.Z.has(a, f.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                n.isForumLikeChannel() ? s.removingChat = r.Z.has(e, f.Plq.SEND_MESSAGES_IN_THREADS) && !r.Z.has(a, f.Plq.SEND_MESSAGES_IN_THREADS) : s.removingChat = r.Z.has(e, f.Plq.SEND_MESSAGES) && !r.Z.has(a, f.Plq.SEND_MESSAGES);
                                return s.removingChat || s.removingView ? [4, w(u, n.id, s)] : [2, !0];
                            case 1:
                                if (!c.sent()) {
                                    i.Z.show({
                                        title: h.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: h.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                i.Z.close();
                                                o.Z.open(u, f.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        134954: (n, e, t) => {
            t.d(e, {
                Z: () => a
            });
            var r = t(667294),
                i = t(202351),
                o = t(302685),
                u = t(664731),
                l = {};

            function a(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = (0, i.e7)([u.Z], (function() {
                        return u.Z.getRoleMemberCount(n)
                    }));
                r.useEffect((function() {
                    if (null != n) {
                        var t = l[n];
                        if (!(null != t && e > 0 && Date.now() - t < e)) {
                            l[n] = Date.now();
                            o.E(n)
                        }
                    }
                }), [n, e]);
                return t
            }
        }
    }
]);