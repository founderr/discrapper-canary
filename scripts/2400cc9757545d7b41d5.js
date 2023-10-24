"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67771, 71775], {
        919810: (n, t, e) => {
            e.d(t, {
                ZP: () => _,
                so: () => g,
                wg: () => Z
            });
            var r = e(202351),
                i = e(15970),
                u = e(766496),
                l = e(61209),
                o = e(5544),
                a = e(567403),
                c = e(682776),
                d = e(563135),
                f = e(269300),
                y = e(3155),
                h = e(2590);

            function v(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
                return r
            }

            function s(n, t) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, t) {
                    var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var r, i, u = [],
                            l = !0,
                            o = !1;
                        try {
                            for (e = e.call(n); !(l = (r = e.next()).done); l = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (n) {
                            o = !0;
                            i = n
                        } finally {
                            try {
                                l || null == e.return || e.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return u
                    }
                }(n, t) || function(n, t) {
                    if (!n) return;
                    if ("string" == typeof n) return v(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return v(n, t)
                }(n, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(n) {
                return "entity_type" in n ? {
                    entityType: n.entity_type,
                    channelId: n.channel_id
                } : n
            }

            function Z(n) {
                var t = s(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z], 1),
                    e = t[0],
                    r = p(n),
                    i = r.entityType,
                    u = r.channelId,
                    o = i === y.WX.EXTERNAL;
                if (o) return !0;
                var a = e.getChannel(u);
                return null != a && d.ZP.canEveryoneRole(h.Plq.VIEW_CHANNEL, a)
            }

            function g(n) {
                var t = s(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, a.Z, u.Z], 4),
                    e = t[0],
                    r = t[1],
                    d = t[2],
                    h = t[3];
                if ((0, f.Z2)(n)) return !1;
                var v = n.guild_id,
                    p = n.channel_id,
                    g = n.entity_type === y.WX.EXTERNAL,
                    _ = g ? e.getDefaultChannel(n.guild_id) : r.getChannel(p),
                    b = d.getGuild(v),
                    m = h.getStageInstanceByChannel(p);
                return !!(0, i.b)(c.Z, b, _, m) && (null != _ && Z(n, [r]))
            }

            function _(n) {
                return (0,
                    r.e7)([o.ZP, l.Z, a.Z, u.Z], (function() {
                    return g(n, [o.ZP, l.Z, a.Z, u.Z])
                }), [n])
            }
        },
        71775: (n, t, e) => {
            e.d(t, {
                Z: () => l
            });
            var r = e(667294),
                i = e(202351),
                u = e(269300);

            function l(n, t) {
                var e = (0, i.Wu)([u.ZP], (function() {
                    var n, e;
                    return null !== (e = null === (n = u.ZP.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== e ? e : []
                }));
                return r.useMemo((function() {
                    return null == e ? void 0 : e.find((function(t) {
                        return t.event_exception_id === n
                    }))
                }), [e, n])
            }
        }
    }
]);