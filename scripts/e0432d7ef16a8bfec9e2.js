"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31499], {
        567678: (e, r, n) => {
            n.d(r, {
                Z: () => c
            });
            var t = n(785893),
                o = (n(667294), n(19585));

            function u(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function i(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        u(e, r, n[r])
                    }))
                }
                return e
            }

            function c(e, r) {
                return function(n) {
                    var u = (0, o.Z)(r).AnalyticsLocationProvider;
                    return (0, t.jsx)(u, {
                        children: (0, t.jsx)(e, i({}, n))
                    })
                }
            }
        },
        731499: (e, r, n) => {
            n.r(r);
            n.d(r, {
                default: () => j
            });
            var t = n(785893),
                o = (n(667294), n(304548)),
                u = n(971402),
                i = n(213276),
                c = n(567678),
                l = n(153686),
                a = n(112897),
                s = n(434651),
                f = n(332349),
                p = n(430198),
                b = n(589675),
                d = n(598955),
                y = n(973424),
                h = n(2590),
                O = n(473708);
            const j = (0,
                c.Z)((function(e) {
                var r = e.user,
                    n = e.guildId,
                    c = e.channelId,
                    l = e.analyticsContext,
                    j = e.onSelect,
                    g = (0, d.Z)(r.id),
                    v = (0, s.Z)({
                        guildId: n,
                        userId: r.id,
                        analyticsLocation: {
                            page: h.ZY5.GUILD_CHANNEL,
                            section: h.jXE.CHAT_USERNAME,
                            object: h.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    w = (0, f.Z)(r, n),
                    E = (0, p.Z)(r, n, c),
                    P = (0, y.Z)(r.id, n),
                    Z = (0, b.Z)(r, n),
                    x = (0, a.Z)({
                        id: r.id,
                        label: O.Z.Messages.COPY_ID_USER
                    }),
                    M = r.isNonUserBot();
                return (0, t.jsx)(i.Z, {
                    context: l,
                    object: h.qAy.CONTEXT_MENU,
                    children: (0, t.jsxs)(o.Menu, {
                        navId: "user-context",
                        onClose: u.Zy,
                        "aria-label": O.Z.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: j,
                        children: [!M && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsxs)(o.MenuGroup, {
                                children: [g, v, w]
                            }), (0, t.jsx)(o.MenuGroup, {
                                children: E
                            }), (0, t.jsx)(o.MenuGroup, {
                                children: P
                            }), (0, t.jsx)(o.MenuGroup, {
                                children: Z
                            })]
                        }), r.isClyde() && (0, t.jsx)(o.MenuGroup, {
                            children: E
                        }), (0, t.jsx)(o.MenuGroup, {
                            children: x
                        })]
                    })
                })
            }), [l.Z.CONTEXT_MENU, l.Z.GUILD_SETTINGS_USER_MENU])
        },
        589675: (e, r, n) => {
            n.d(r, {
                Z: () => d
            });
            var t = n(785893),
                o = (n(667294),
                    n(202351)),
                u = n(304548),
                i = n(567403),
                c = n(473903),
                l = n(473708);

            function a(e, r, n, t, o, u, i) {
                try {
                    var c = e[u](i),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? r(l) : Promise.resolve(l).then(t, o)
            }

            function s(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, o) {
                        var u = e.apply(r, n);

                        function i(e) {
                            a(u, t, o, i, c, "next", e)
                        }

                        function c(e) {
                            a(u, t, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function f(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function p(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }
            var b = function(e, r) {
                var n, t, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function c(u) {
                    return function(c) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, t && (o = 2 & u[0] ? t.return : u[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, u[1])).done) return o;
                                (t = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        t = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = r.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                t = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, c])
                    }
                }
            };

            function d(e, r) {
                var a = (0, o.e7)([c.default], (function() {
                        return c.default.getCurrentUser()
                    })),
                    d = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(r)
                    }));
                return null == d || null == a || e.id === d.ownerId || e.bot || !d.isOwnerWithRequiredMfaLevel(a) ? null : (0, t.jsx)(u.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: l.Z.Messages.TRANSFER_OWNERSHIP,
                    action: function() {
                        return (0, u.openModalLazy)(s((function() {
                            var r, o;
                            return b(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(17586), n.e(46559)]).then(n.bind(n, 146559))];
                                    case 1:
                                        r = u.sent(), o = r.default;
                                        return [2, function(r) {
                                            return (0, t.jsx)(o, p(function(e) {
                                                for (var r = 1; r < arguments.length; r++) {
                                                    var n = null != arguments[r] ? arguments[r] : {},
                                                        t = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    t.forEach((function(r) {
                                                        f(e, r, n[r])
                                                    }))
                                                }
                                                return e
                                            }({}, r), {
                                                guild: d,
                                                fromUser: a,
                                                toUser: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        }
    }
]);