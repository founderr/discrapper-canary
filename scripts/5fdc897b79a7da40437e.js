"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [93087], {
        93087: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => d
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                o = t(971402),
                u = t(185219),
                a = t(703790),
                l = t(809210),
                c = t(2590),
                s = t(473708);

            function d(e) {
                var n = e.guild,
                    t = e.onSelect,
                    d = (0, l.Z)(n.id),
                    f = (0, u.wC)(n.id);
                return (0, r.jsx)(i.Menu, {
                    onSelect: t,
                    navId: "guild-browse-channels-context-menu",
                    "aria-label": s.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: o.Zy,
                    children: (0, r.jsxs)(i.MenuGroup, {
                        children: [f && (0, r.jsx)(i.MenuItem, {
                            id: "go-to-settings",
                            label: s.Z.Messages.EDIT_ONBOARDING,
                            action: function() {
                                a.Z.open(n.id, c.pNK.ONBOARDING)
                            }
                        }), d]
                    })
                })
            }
        },
        873629: (e, n, t) => {
            t.d(n, {
                hi: () => h,
                kH: () => p,
                rz: () => b
            });
            t(418705);
            var r = t(47635),
                i = (t(473419), t(5544)),
                o = t(21372),
                u = t(9430),
                a = t(661123),
                l = t(347834),
                c = t(364269),
                s = t(589677);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                var n, t, r = (0, c.r1)(e),
                    i = null !== (t = null === (n = o.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== t ? t : 0,
                    l = (0, a.yE)(i, s.q.COMPLETED_ONBOARDING),
                    d = u.Z.getOptedInChannels(e).size > 0;
                return !r && !l && !d
            }

            function p(e) {
                if (h(e)) b(e);
                else {
                    var n = (0, c.r1)(e);
                    (0, l.QG)(e, !n)
                }
            }

            function b(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.include,
                    o = void 0 === t ? new Set : t,
                    u = n.exclude,
                    a = void 0 === u ? new Set : u,
                    l = i.ZP.getChannels(e),
                    c = f(l[i.sH]).concat(f(l[i.Zb])).filter((function(e) {
                        var n = e.channel;
                        return !n.isThread() && !a.has(n.id)
                    })).map((function(e) {
                        return e.channel.id
                    }));
                o.forEach((function(e) {
                    return c.push(e)
                }));
                r.Z.onboardExistingMember(e, new Set(c))
            }
        },
        809210: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(882723),
                u = t(567403),
                a = t(473903),
                l = t(873629),
                c = t(364269),
                s = t(2590),
                d = t(473708);

            function f(e) {
                var n = (0, c.DM)(e),
                    t = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(e)
                    })),
                    f = (0, i.e7)([a.default], (function() {
                        return a.default.getCurrentUser()
                    }));
                return null == f || null == t || !t.hasFeature(s.oNc.COMMUNITY) && !f.isStaff() ? null : (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "opt-in",
                    label: d.Z.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !n,
                    action: function() {
                        (0, l.kH)(e)
                    }
                })
            }
        }
    }
]);