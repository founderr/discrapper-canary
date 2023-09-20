"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [57253], {
        77705: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(744564),
                o = r(52317),
                i = r(9430);
            const c = {
                update: function(e) {
                    n.Z.dispatch({
                        type: "CHANNEL_COLLAPSE",
                        channelId: e
                    })
                },
                toggleCollapseGuild: function(e) {
                    o.Z.saveUserGuildSettings(e, {
                        hide_muted_channels: !i.Z.isGuildCollapsed(e)
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
                i = r(202351),
                c = r(882723),
                u = r(357088),
                l = r(401080),
                a = r(736626),
                s = r(664625),
                f = r(21372),
                b = r(567403),
                p = r(682776),
                y = r(473903),
                O = r(2590),
                d = r(473708),
                h = r(882090),
                v = r.n(h);

            function g(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function w(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            g(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            g(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
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
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                        0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function E(e) {
                var t = e.guildId,
                    h = e.userId,
                    g = e.analyticsLocation,
                    E = e.analyticsLocations,
                    C = e.context,
                    Z = e.icon,
                    D = b.Z.getGuild(t),
                    S = s.default.getId(),
                    x = (0, i.e7)([y.default], (function() {
                        return y.default.getUser(h)
                    })),
                    I = (0, i.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(t, h)
                    }), [t, h]);
                (0, i.e7)([p.Z], (function() {
                    return p.Z.getGuildVersion(t)
                }), [t]);
                var N = o.useMemo((function() {
                    return j({}, t, [h])
                }), [t, h]);
                (0, u.$)(N);
                var k = C === O.IlC.POPOUT,
                    M = (0, l.Z)({
                        guild: D,
                        analyticsLocation: g
                    });
                if (null == D || k) return null;
                var _ = S === h && (p.Z.can(O.Plq.CHANGE_NICKNAME, D) || p.Z.can(O.Plq.MANAGE_NICKNAMES, D)),
                    L = S === h,
                    H = p.Z.canManageUser(O.Plq.MANAGE_NICKNAMES, h, D);
                if (!(_ || H || L)) return null;
                if (null == x || I) return null;
                var T = D.hasFeature(O.oNc.HUB) ? d.Z.Messages.HUB_EDIT_PROFILE : d.Z.Messages.CHANGE_IDENTITY,
                    V = L ? T : d.Z.Messages.CHANGE_NICKNAME;
                return (0, n.jsx)(c.MenuItem, {
                    id: "change-nickname",
                    label: (0, n.jsx)("div", {
                        className: v().labelWrapper,
                        children: (0, n.jsx)("span", {
                            className: v().label,
                            children: V
                        })
                    }),
                    icon: Z,
                    action: function() {
                        if (L) {
                            (0, a.Z)(x.id, x.getAvatarURL(t, 80), {
                                guildId: t
                            });
                            M()
                        } else(0, c.openModalLazy)(w((function() {
                            var e, o;
                            return m(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(33166)]).then(r.bind(r, 633166))];
                                    case 1:
                                        e = i.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(o, P(function(e) {
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
                                            }({}, e), {
                                                guildId: t,
                                                user: x,
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
                Z: () => P
            });
            var n = r(785893),
                o = r(667294),
                i = r(882723),
                c = r(827289),
                u = r(588895),
                l = r(922763),
                a = r(349491),
                s = r(633878);

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function y(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    l = e.className,
                    a = e.foreground,
                    y = p(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", b(function(e) {
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
                }({
                    width: r,
                    height: i,
                    className: l,
                    viewBox: "0 0 24 24"
                }, (0, s.Z)(y)), {
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: u,
                        d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                        "aria-hidden": !0
                    })
                }))
            }
            var O = r(473708);

            function d(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            d(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            d(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function v(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        v(e, t, r[t])
                    }))
                }
                return e
            }

            function w(e, t) {
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
            var j = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = (0, c.mI)(e.id),
                    f = s.shouldShowIncidentActions,
                    b = s.isUnderLockdown,
                    p = s.incidentData,
                    d = o.useCallback((function() {
                        var t = {
                            source: u.Zu.CONTEXT_MENU,
                            alertType: (0, l.T1)(p)
                        };
                        (0, i.openModalLazy)(h((function() {
                            var o, i;
                            return j(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(95260)]).then(r.bind(r, 318554))];
                                    case 1:
                                        o = c.sent(), i = o.default;
                                        return [2, function(r) {
                                            return (0, n.jsx)(i, w(g({}, r), {
                                                guildId: e.id,
                                                enable: !b,
                                                analyticsData: t
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [e.id, b, p]);
                return e.isCommunity() && f ? (0, n.jsx)(i.MenuItem, {
                    id: "server-lockdown",
                    label: b ? O.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : O.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? b ? y : a.Z : void 0,
                    action: d,
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
                i = r(882723),
                c = r(15970),
                u = r(5544),
                l = r(682776),
                a = r(226919),
                s = r(2590),
                f = r(473708);

            function b(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            b(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            b(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
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
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                        0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function v(e) {
                var t = e.source,
                    r = e.guild,
                    n = e.channel,
                    i = e.stageInstance,
                    a = (0, o.e7)([u.ZP, l.Z], (function() {
                        var e;
                        return null === (e = u.ZP.getChannels(r.id)[u.sH].find((function(e) {
                            return l.Z.can(s.Plq.CREATE_INSTANT_INVITE, e.channel)
                        }))) || void 0 === e ? void 0 : e.channel
                    })),
                    f = (0, o.e7)([l.Z], (function() {
                        return (0, c.b)(l.Z, r, n, i)
                    })),
                    b = g(t, r, f && null != n ? n : a),
                    p = w(t);
                return null == n && t === s.t4x.GUILD_CONTEXT_MENU ? null : f || null != a ? b : p
            }
            var g = function(e, t, o) {
                    return (0, n.jsx)(i.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? a.Z : void 0,
                        action: function() {
                            return (0, i.openModalLazy)(p((function() {
                                var i, c;
                                return h(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return [4, Promise.all([r.e(40532), r.e(86502), r.e(67551), r.e(29202)]).then(r.bind(r, 167551))];
                                        case 1:
                                            i = u.sent(), c = i.default;
                                            return [2, function(r) {
                                                return (0, n.jsx)(c, d(O({}, r), {
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
                w = function(e) {
                    return (0, n.jsx)(i.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? a.Z : void 0,
                        action: function() {
                            return (0, i.openModalLazy)(p((function() {
                                var e, t;
                                return h(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([r.e(40532), r.e(69712)]).then(r.bind(r, 69712))];
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
        907582: (e, t, r) => {
            r.d(t, {
                Z: () => g
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    b = l(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M7 11H12V16H7V11Z",
                        fill: f
                    })]
                }))
            }
            var s = r(678545),
                f = r(360703),
                b = r(473708);

            function p(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            p(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            p(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        O(e, t, r[t])
                    }))
                }
                return e
            }

            function h(e, t) {
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
            var v = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = (0, s.Z)(e),
                    c = (0, f.Z)();
                if (!i) return null;
                var u = function() {
                    (0, o.openModalLazy)(y((function() {
                        var t, o;
                        return v(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.all([r.e(40532), r.e(40706), r.e(41380), r.e(39023)]).then(r.bind(r, 41380))];
                                case 1:
                                    t = i.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, n.jsx)(o, h(d({}, t), {
                                            guildId: e
                                        }))
                                    }]
                            }
                        }))
                    })), c)
                };
                return (0, n.jsx)(o.MenuItem, {
                    id: "create-event",
                    label: b.Z.Messages.SCHEDULE_EVENT,
                    icon: t ? a : void 0,
                    action: u
                })
            }
        },
        809210: (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                o = (r(667294),
                    r(202351)),
                i = r(882723),
                c = r(567403),
                u = r(473903),
                l = r(873629),
                a = r(364269),
                s = r(2590),
                f = r(473708);

            function b(e) {
                var t = (0, a.DM)(e),
                    r = (0, o.e7)([c.Z], (function() {
                        return c.Z.getGuild(e)
                    })),
                    b = (0, o.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    }));
                return null == b || null == r || !r.hasFeature(s.oNc.COMMUNITY) && !b.isStaff() ? null : (0, n.jsx)(i.MenuCheckboxItem, {
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