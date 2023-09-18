"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9585], {
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
        909585: (e, r, n) => {
            n.r(r);
            n.d(r, {
                default: () => M
            });
            var t = n(785893),
                o = (n(667294), n(882723)),
                u = n(971402),
                i = n(213276),
                c = n(567678),
                l = n(153686),
                a = n(112897),
                s = n(434651),
                f = n(332349),
                b = n(430198),
                p = n(202351),
                d = n(567403),
                y = n(473903),
                h = n(473708);

            function O(e, r, n, t, o, u, i) {
                try {
                    var c = e[u](i),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? r(l) : Promise.resolve(l).then(t, o)
            }

            function j(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, o) {
                        var u = e.apply(r, n);

                        function i(e) {
                            O(u, t, o, i, c, "next", e)
                        }

                        function c(e) {
                            O(u, t, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function g(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function v(e, r) {
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
            var w = function(e, r) {
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

            function E(e, r) {
                var u = (0,
                        p.e7)([y.default], (function() {
                        return y.default.getCurrentUser()
                    })),
                    i = (0, p.e7)([d.Z], (function() {
                        return d.Z.getGuild(r)
                    }));
                return null == i || null == u || e.id === i.ownerId || e.bot || !i.isOwnerWithRequiredMfaLevel(u) ? null : (0, t.jsx)(o.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: h.Z.Messages.TRANSFER_OWNERSHIP,
                    action: function() {
                        return (0, o.openModalLazy)(j((function() {
                            var r, o;
                            return w(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(46559)]).then(n.bind(n, 146559))];
                                    case 1:
                                        r = c.sent(), o = r.default;
                                        return [2, function(r) {
                                            return (0, t.jsx)(o, v(function(e) {
                                                for (var r = 1; r < arguments.length; r++) {
                                                    var n = null != arguments[r] ? arguments[r] : {},
                                                        t = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    t.forEach((function(r) {
                                                        g(e, r, n[r])
                                                    }))
                                                }
                                                return e
                                            }({}, r), {
                                                guild: i,
                                                fromUser: u,
                                                toUser: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
            var P = n(598955),
                m = n(973424),
                x = n(2590);
            const M = (0,
                c.Z)((function(e) {
                var r = e.user,
                    n = e.guildId,
                    c = e.channelId,
                    l = e.analyticsContext,
                    p = e.onSelect,
                    d = (0, P.Z)(r.id),
                    y = (0, s.Z)({
                        guildId: n,
                        userId: r.id,
                        analyticsLocation: {
                            page: x.ZY5.GUILD_CHANNEL,
                            section: x.jXE.CHAT_USERNAME,
                            object: x.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    O = (0, f.Z)(r, n),
                    j = (0, b.Z)(r, n, c),
                    g = (0, m.Z)(r.id, n),
                    v = E(r, n),
                    w = (0, a.Z)({
                        id: r.id,
                        label: h.Z.Messages.COPY_ID_USER
                    }),
                    M = r.isNonUserBot();
                return (0, t.jsx)(i.Z, {
                    context: l,
                    object: x.qAy.CONTEXT_MENU,
                    children: (0, t.jsxs)(o.Menu, {
                        navId: "user-context",
                        onClose: u.Zy,
                        "aria-label": h.Z.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: p,
                        children: [!M && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsxs)(o.MenuGroup, {
                                children: [d, y, O]
                            }), (0, t.jsx)(o.MenuGroup, {
                                children: j
                            }), (0, t.jsx)(o.MenuGroup, {
                                children: g
                            }), (0, t.jsx)(o.MenuGroup, {
                                children: v
                            })]
                        }), (0, t.jsx)(o.MenuGroup, {
                            children: w
                        })]
                    })
                })
            }), [l.Z.CONTEXT_MENU, l.Z.GUILD_SETTINGS_USER_MENU])
        }
    }
]);
//# sourceMappingURL=50f98a106f56ec20bfeb.js.map