"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [87896], {
        887896: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => g
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                c = t(304548),
                u = t(971402),
                i = t(682776),
                a = t(645599),
                l = t(416644),
                s = t(691797),
                f = t(2590),
                p = t(473708),
                b = t(631447),
                y = t.n(b);

            function d(e, n, t, r, o, c, u) {
                try {
                    var i = e[c](u),
                        a = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(n, t);

                        function u(e) {
                            d(c, r, o, u, i, "next", e)
                        }

                        function i(e) {
                            d(c, r, o, u, i, "throw", e)
                        }
                        u(void 0)
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

            function v(e, n) {
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
            var w = function(e, n) {
                var t, r, o, c, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function i(c) {
                    return function(i) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                (r = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            u.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(c);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                c = n.call(e, u)
                            } catch (e) {
                                c = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, i])
                    }
                }
            };
            const g = function(e) {
                var n, b = e.guild,
                    d = e.user,
                    g = e.onSelect,
                    j = null !== (n = null == b ? void 0 : b.id) && void 0 !== n ? n : "",
                    m = (0, o.e7)([i.Z], (function() {
                        return null != b && i.Z.canManageUser(f.Plq.BAN_MEMBERS, d, b)
                    }), [b, d]);
                return (0, r.jsx)(c.Menu, {
                    navId: "member-application-context-menu",
                    className: y().contextMenu,
                    onClose: u.Zy,
                    "aria-label": p.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: g,
                    children: (0, r.jsxs)(c.MenuGroup, {
                        children: [m && (0, r.jsx)(c.MenuItem, {
                            id: "ban",
                            label: p.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
                            icon: a.Z,
                            color: "danger",
                            action: function() {
                                return (0, c.openModalLazy)(h((function() {
                                    var e, n;
                                    return w(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(80372)]).then(t.bind(t, 333970))];
                                            case 1:
                                                e = o.sent(),
                                                    n = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(n, v(function(e) {
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
                                                        guildId: j,
                                                        user: d
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, "ban"), (0, r.jsx)(c.MenuItem, {
                            id: "copyUserId",
                            label: "Copy User ID",
                            icon: l.Z,
                            action: function() {
                                return (0, s.JG)(d.id)
                            }
                        }, "copyUserId")]
                    })
                })
            }
        }
    }
]);