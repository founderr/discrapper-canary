"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9183], {
        77705: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(744564),
                o = r(52317),
                c = r(9430);
            const i = {
                update: function(e) {
                    n.Z.dispatch({
                        type: "CHANNEL_COLLAPSE",
                        channelId: e
                    })
                },
                toggleCollapseGuild: function(e) {
                    o.Z.saveUserGuildSettings(e, {
                        hide_muted_channels: !c.Z.isGuildCollapsed(e)
                    });
                    n.Z.dispatch({
                        type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                        guildId: e
                    })
                }
            }
        },
        434651: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = r(667294),
                c = r(202351),
                i = r(882723),
                u = r(357088),
                l = r(401080),
                a = r(736626),
                s = r(664625),
                f = r(21372),
                p = r(567403),
                b = r(682776),
                y = r(473903),
                O = r(2590),
                d = r(473708),
                h = r(35637),
                v = r.n(h);

            function g(e, t, r, n, o, c, i) {
                try {
                    var u = e[c](i),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function j(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            g(c, n, o, i, u, "next", e)
                        }

                        function u(e) {
                            g(c, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function w(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var m = function(e, t) {
                var r, n, o, c, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0,
                                    o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            i.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(c);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                c = t.call(e, i)
                            } catch (e) {
                                c = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function E(e) {
                var t = e.guildId,
                    h = e.userId,
                    g = e.analyticsLocation,
                    E = e.analyticsLocations,
                    C = e.context,
                    x = e.icon,
                    Z = p.Z.getGuild(t),
                    S = s.default.getId(),
                    D = (0, c.e7)([y.default], (function() {
                        return y.default.getUser(h)
                    })),
                    N = (0, c.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(t, h)
                    }), [t, h]);
                (0, c.e7)([b.Z], (function() {
                    return b.Z.getGuildVersion(t)
                }), [t]);
                var I = o.useMemo((function() {
                    return w({}, t, [h])
                }), [t, h]);
                (0, u.$)(I);
                var M = C === O.IlC.POPOUT,
                    k = (0, l.Z)({
                        guild: Z,
                        analyticsLocation: g
                    });
                if (null == Z || M) return null;
                var _ = S === h && (b.Z.can(O.Plq.CHANGE_NICKNAME, Z) || b.Z.can(O.Plq.MANAGE_NICKNAMES, Z)),
                    L = S === h,
                    H = b.Z.canManageUser(O.Plq.MANAGE_NICKNAMES, h, Z);
                if (!(_ || H || L)) return null;
                if (null == D || N) return null;
                var T = Z.hasFeature(O.oNc.HUB) ? d.Z.Messages.HUB_EDIT_PROFILE : d.Z.Messages.CHANGE_IDENTITY,
                    V = L ? T : d.Z.Messages.CHANGE_NICKNAME;
                return (0, n.jsx)(i.MenuItem, {
                    id: "change-nickname",
                    label: (0, n.jsx)("div", {
                        className: v().labelWrapper,
                        children: (0, n.jsx)("span", {
                            className: v().label,
                            children: V
                        })
                    }),
                    icon: x,
                    action: function() {
                        if (L) {
                            (0, a.Z)(D.id, D.getAvatarURL(t, 80), {
                                guildId: t
                            });
                            k()
                        } else(0, i.openModalLazy)(j((function() {
                            var e, o;
                            return m(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(33166)]).then(r.bind(r, 633166))];
                                    case 1:
                                        e = c.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(o, P(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    n.forEach((function(t) {
                                                        w(e, t, r[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: t,
                                                user: D,
                                                analyticsSource: g,
                                                analyticsLocations: E
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        889231: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = r(667294),
                c = r(882723),
                i = r(827289),
                u = r(588895),
                l = r(922763),
                a = r(349491),
                s = r(450520),
                f = r(478079),
                p = r(633878);

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function O(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const d = (0, s.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    i = e.color,
                    u = void 0 === i ? "currentColor" : i,
                    l = e.className,
                    a = e.foreground,
                    s = O(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", y(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            b(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    height: c,
                    className: l,
                    viewBox: "0 0 24 24"
                }, (0, p.Z)(s)), {
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: u,
                        d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                        "aria-hidden": !0
                    })
                }))
            }), f.d);
            var h = r(473708);

            function v(e, t, r, n, o, c, i) {
                try {
                    var u = e[c](i),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            v(c, n, o, i, u, "next", e)
                        }

                        function u(e) {
                            v(c, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        j(e, t, r[t])
                    }))
                }
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var m = function(e, t) {
                var r, n, o, c, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            i.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(c);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                c = t.call(e, i)
                            } catch (e) {
                                c = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = (0, i.mI)(e.id),
                    f = s.shouldShowIncidentActions,
                    p = s.isUnderLockdown,
                    b = s.incidentData,
                    y = o.useCallback((function() {
                        var t = {
                            source: u.Zu.CONTEXT_MENU,
                            alertType: (0, l.T1)(b)
                        };
                        (0, c.openModalLazy)(g((function() {
                            var o, c;
                            return m(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(95260)]).then(r.bind(r, 318554))];
                                    case 1:
                                        o = i.sent(), c = o.default;
                                        return [2, function(r) {
                                            return (0, n.jsx)(c, P(w({}, r), {
                                                guildId: e.id,
                                                analyticsData: t
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [e.id, b]);
                return e.isCommunity() && f ? (0, n.jsx)(c.MenuItem, {
                    id: "server-lockdown",
                    label: p ? h.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : h.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? p ? d : a.Z : void 0,
                    action: y,
                    color: "danger"
                }) : null
            }
        },
        753082: (e, t, r) => {
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                c = r(882723),
                i = r(15970),
                u = r(5544),
                l = r(682776),
                a = r(307930),
                s = r(2590),
                f = r(473708);

            function p(e, t, r, n, o, c, i) {
                try {
                    var u = e[c](i),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            p(c, n, o, i, u, "next", e)
                        }

                        function u(e) {
                            p(c, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        y(e, t, r[t])
                    }))
                }
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var h = function(e, t) {
                var r, n, o, c, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            i.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(c);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                c = t.call(e, i)
                            } catch (e) {
                                c = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function v(e) {
                var t = e.source,
                    r = e.guild,
                    n = e.channel,
                    c = e.stageInstance,
                    a = (0, o.e7)([u.ZP, l.Z], (function() {
                        var e;
                        return null === (e = u.ZP.getChannels(r.id)[u.sH].find((function(e) {
                            return l.Z.can(s.Plq.CREATE_INSTANT_INVITE, e.channel)
                        }))) || void 0 === e ? void 0 : e.channel
                    })),
                    f = (0, o.e7)([l.Z], (function() {
                        return (0, i.b)(l.Z, r, n, c)
                    })),
                    p = g(t, r, f && null != n ? n : a),
                    b = j(t);
                return null == n && t === s.t4x.GUILD_CONTEXT_MENU ? null : f || null != a ? p : b
            }
            var g = function(e, t, o) {
                    return (0, n.jsx)(c.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? a.Z : void 0,
                        action: function() {
                            return (0, c.openModalLazy)(b((function() {
                                var c, i;
                                return h(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return [4, Promise.all([r.e(40532), r.e(86502), r.e(67551), r.e(29202)]).then(r.bind(r, 167551))];
                                        case 1:
                                            c = u.sent(), i = c.default;
                                            return [2, function(r) {
                                                return (0, n.jsx)(i, d(O({}, r), {
                                                    guild: t,
                                                    channel: o,
                                                    source: e
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        }
                    })
                },
                j = function(e) {
                    return (0, n.jsx)(c.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? a.Z : void 0,
                        action: function() {
                            return (0, c.openModalLazy)(b((function() {
                                var e, t;
                                return h(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([r.e(40532), r.e(69712)]).then(r.bind(r, 25097))];
                                        case 1:
                                            e = o.sent(), t = e.default;
                                            return [2, function(e) {
                                                return (0, n.jsx)(t, O({}, e))
                                            }]
                                    }
                                }))
                            })))
                        }
                    })
                }
        },
        324239: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                c = r(450520),
                i = r(795308),
                u = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const y = (0, c.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    i = e.color,
                    l = void 0 === i ? "currentColor" : i,
                    a = b(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            f(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(a)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                        fill: l
                    }), (0, n.jsx)("path", {
                        d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                        fill: l
                    }), (0, n.jsx)("path", {
                        d: "M7 11H12V16H7V11Z",
                        fill: l
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    y = void 0 === b ? "" : b,
                    O = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, n.jsx)("path", {
                            fill: "string" == typeof p ? p : p.css,
                            fillRule: "evenodd",
                            d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Zm3-.333c0 .124-.335.175-.39.063C21.11 12.708 20.204 12 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.203.708 2.109 1.73 2.61.111.055.06.39-.063.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.667ZM5.5 12a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM7 1a1 1 0 0 1 1 1v.75c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V2a1 1 0 0 1 2 0v.75c0 .138.112.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75A.25.25 0 0 0 6 2.75V2a1 1 0 0 1 1-1Z",
                            clipRule: "evenodd",
                            className: y
                        })
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                            id: "a",
                            children: (0, n.jsx)("path", {
                                fill: "#fff",
                                d: "M24 24H0V0h24z"
                            })
                        })
                    })]
                }))
            }));
            var O = r(678545),
                d = r(360703),
                h = r(473708);

            function v(e, t, r, n, o, c, i) {
                try {
                    var u = e[c](i),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            v(c, n, o, i, u, "next", e)
                        }

                        function u(e) {
                            v(c, n, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        j(e, t, r[t])
                    }))
                }
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var m = function(e, t) {
                var r, n, o, c, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            i.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(c);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                c = t.call(e, i)
                            } catch (e) {
                                c = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    c = (0, O.Z)(e),
                    i = (0, d.Z)();
                if (!c) return null;
                var u = function() {
                    (0, o.openModalLazy)(g((function() {
                        var t, o;
                        return m(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, Promise.all([r.e(40532), r.e(40706), r.e(38501), r.e(39023)]).then(r.bind(r, 738501))];
                                case 1:
                                    t = c.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, n.jsx)(o, P(w({}, t), {
                                            guildId: e
                                        }))
                                    }]
                            }
                        }))
                    })), i)
                };
                return (0, n.jsx)(o.MenuItem, {
                    id: "create-event",
                    label: h.Z.Messages.SCHEDULE_EVENT,
                    icon: t ? y : void 0,
                    action: u
                })
            }
        },
        809210: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                c = r(882723),
                i = r(567403),
                u = r(473903),
                l = r(873629),
                a = r(364269),
                s = r(2590),
                f = r(473708);

            function p(e) {
                var t = (0, a.DM)(e),
                    r = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(e)
                    })),
                    p = (0, o.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    }));
                return null == p || null == r || !r.hasFeature(s.oNc.COMMUNITY) && !p.isStaff() ? null : (0, n.jsx)(c.MenuCheckboxItem, {
                    id: "opt-in",
                    label: f.Z.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: function() {
                        (0, l.kH)(e)
                    }
                })
            }
        }
    }
]);