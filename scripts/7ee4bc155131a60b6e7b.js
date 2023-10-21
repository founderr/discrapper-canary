"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67771, 71775], {
        919810: (n, e, t) => {
            t.d(e, {
                ZP: () => _,
                so: () => Z,
                wg: () => g
            });
            var r = t(202351),
                i = t(15970),
                u = t(766496),
                l = t(61209),
                o = t(5544),
                a = t(567403),
                c = t(682776),
                d = t(563135),
                f = t(269300),
                y = t(3155),
                h = t(2590);

            function s(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function p(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, u = [],
                            l = !0,
                            o = !1;
                        try {
                            for (t = t.call(n); !(l = (r = t.next()).done); l = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (n) {
                            o = !0;
                            i = n
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return u
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return s(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(n) {
                return "entity_type" in n ? {
                    entityType: n.entity_type,
                    channelId: n.channel_id
                } : n
            }

            function g(n) {
                var e = p(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z], 1),
                    t = e[0],
                    r = v(n),
                    i = r.entityType,
                    u = r.channelId,
                    o = i === y.WX.EXTERNAL;
                if (o) return !0;
                var a = t.getChannel(u);
                return null != a && d.ZP.canEveryoneRole(h.Plq.VIEW_CHANNEL, a)
            }

            function Z(n) {
                var e = p(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, l.Z, a.Z, u.Z], 4),
                    t = e[0],
                    r = e[1],
                    d = e[2],
                    h = e[3];
                if ((0, f.Z2)(n)) return !1;
                var s = n.guild_id,
                    v = n.channel_id,
                    Z = n.entity_type === y.WX.EXTERNAL,
                    _ = Z ? t.getDefaultChannel(n.guild_id) : r.getChannel(v),
                    b = d.getGuild(s),
                    m = h.getStageInstanceByChannel(v);
                return !!(0, i.b)(c.Z, b, _, m) && (null != _ && g(n, [r]))
            }

            function _(n) {
                return (0,
                    r.e7)([o.ZP, l.Z, a.Z, u.Z], (function() {
                    return Z(n, [o.ZP, l.Z, a.Z, u.Z])
                }), [n])
            }
        },
        71775: (n, e, t) => {
            t.d(e, {
                Z: () => l
            });
            var r = t(667294),
                i = t(202351),
                u = t(269300);

            function l(n, e) {
                var t = (0, i.e7)([u.ZP], (function() {
                    return u.ZP.getGuildScheduledEvent(e)
                }), [e]);
                return r.useMemo((function() {
                    return null == t ? void 0 : t.guild_scheduled_event_exceptions.find((function(e) {
                        return e.event_exception_id === n
                    }))
                }), [null == t ? void 0 : t.guild_scheduled_event_exceptions, n])
            }
        }
    }
]);