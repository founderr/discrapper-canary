"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19810], {
        919810: (n, t, e) => {
            e.d(t, {
                wg: () => Z,
                so: () => v,
                ZP: () => b
            });
            var r = e(202351),
                i = e(15970),
                a = e(766496),
                u = e(61209),
                l = e(5544),
                o = e(567403),
                c = e(682776),
                f = e(563135),
                y = e(269300),
                d = e(3155),
                h = e(2590);

            function p(n, t) {
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
                        var r, i, a = [],
                            u = !0,
                            l = !1;
                        try {
                            for (e = e.call(n); !(u = (r = e.next()).done); u = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (n) {
                            l = !0;
                            i = n
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(n, t) || function(n, t) {
                    if (!n) return;
                    if ("string" == typeof n) return p(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return p(n, t)
                }(n, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(n) {
                return "entity_type" in n ? {
                    entityType: n.entity_type,
                    channelId: n.channel_id
                } : n
            }

            function Z(n) {
                var t = s(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.Z], 1),
                    e = t[0],
                    r = g(n),
                    i = r.entityType,
                    a = r.channelId,
                    l = i === d.WX.EXTERNAL;
                if (l) return !0;
                var o = e.getChannel(a);
                return null != o && f.ZP.canEveryoneRole(h.Plq.VIEW_CHANNEL, o)
            }

            function v(n) {
                var t = s(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, u.Z, o.Z, a.Z], 4),
                    e = t[0],
                    r = t[1],
                    f = t[2],
                    h = t[3];
                if ((0, y.Z2)(n)) return !1;
                var p = n.guild_id,
                    g = n.channel_id,
                    v = n.entity_type === d.WX.EXTERNAL,
                    b = v ? e.getDefaultChannel(n.guild_id) : r.getChannel(g),
                    m = f.getGuild(p),
                    _ = h.getStageInstanceByChannel(g);
                return !!(0, i.b)(c.Z, m, b, _) && (null != b && Z(n, [r]))
            }

            function b(n) {
                return (0,
                    r.e7)([l.ZP, u.Z, o.Z, a.Z], (function() {
                    return v(n, [l.ZP, u.Z, o.Z, a.Z])
                }), [n])
            }
        }
    }
]);