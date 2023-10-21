"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15831], {
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
        811518: (e, t, r) => {
            r.d(t, {
                g: () => L
            });
            var n = r(785893),
                o = r(667294),
                c = r(294184),
                i = r.n(c),
                a = r(318715),
                u = r(418705),
                l = r(70418),
                s = r(515169),
                f = r(270946),
                p = r(703790),
                b = r(768834),
                y = r(179156),
                d = r(690296),
                O = r(944522),
                h = r(918124),
                v = r(784426),
                g = r(443812),
                j = r(406493),
                w = r(652591),
                m = r(2590),
                P = r(753327),
                E = r(473708),
                x = r(583127),
                D = r.n(x);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function C(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function N(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            C(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            C(c, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Z(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Z(e, t, r[t])
                    }))
                }
                return e
            }

            function k(e, t) {
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

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, c = [],
                            i = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                c.push(n.value);
                                if (t && c.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(e, t) {
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
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                        return this
                    }), c;

                    function a(c) {
                        return function(a) {
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
                            }([c, a])
                        }
                    }
                },
                L = function(e) {
                    var t, c = e.guild,
                        x = e.discoverableGuildData,
                        S = c.id,
                        C = (0, y.Hb)({
                            expressionSourceGuild: x
                        }),
                        L = C.isPremium,
                        T = C.collectEnabled,
                        A = C.hasReachedMaxPacksCollected,
                        V = (0, g.Dt)(),
                        H = (0, a.ZP)([d.Z], (function() {
                            return null != d.Z.getPackByPackId({
                                packId: c.id,
                                allowDuplicateGuildPack: !0
                            })
                        })),
                        G = T && !H,
                        U = _(o.useState(!1), 2),
                        R = U[0],
                        B = U[1],
                        K = (t = N((function() {
                            var e;
                            return M(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        e = O.Z.isLurking(S);
                                        return [4, p.Z.leaveGuild(S)];
                                    case 1:
                                        t.sent();
                                        if (!R) return [3, 3];
                                        w.default.track(m.rMx.INVENTORY_PACK_ACTION_COMPLETED, {
                                            type: h.$.ADD_PACK,
                                            inventory_pack_id: S,
                                            nonce: V
                                        });
                                        return [4, (0, b.dz)({
                                            packId: S
                                        })];
                                    case 2:
                                        t.sent();
                                        t.label = 3;
                                    case 3:
                                        e ? (0, v.uL)(m.Z5c.GUILD_DISCOVERY) : (0, s.un)(u.z$.GUILD_LEAVE_FEEDBACK) || (0, l.openModalLazy)(N((function() {
                                            var e, t;
                                            return M(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, r.e(6578).then(r.bind(r, 706578))];
                                                    case 1:
                                                        e = o.sent(), t = e.default;
                                                        return [2, function(e) {
                                                            return (0, n.jsx)(t, k(I({}, e), {
                                                                guildId: S,
                                                                guildName: c.name
                                                            }))
                                                        }]
                                                }
                                            }))
                                        })));
                                        return [2]
                                }
                            }))
                        })), function() {
                            return t.apply(this, arguments)
                        });
                    return (0, n.jsxs)(l.ConfirmModal, k(I({
                        className: i()(D().confirmModal, Z({}, D().widthForAddPack, G)),
                        bodyClassName: i()(D().confirmModalBody, Z({}, D().widthForAddPack, G)),
                        header: E.Z.Messages.LEAVE_SERVER_TITLE.format({
                            name: c.name
                        }),
                        confirmText: c.hasFeature(m.oNc.HUB) ? E.Z.Messages.LEAVE_HUB : E.Z.Messages.LEAVE_SERVER,
                        cancelText: E.Z.Messages.CANCEL,
                        onConfirm: K
                    }, e), {
                        children: [(0, n.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: c.hasFeature(m.oNc.HUB) ? E.Z.Messages.LEAVE_HUB_BODY.format({
                                name: c.name
                            }) : E.Z.Messages.LEAVE_SERVER_BODY.format({
                                name: c.name
                            })
                        }), G && (0, n.jsxs)("div", {
                            className: D().addPackSection,
                            children: [(0, n.jsxs)(l.FormSwitch, {
                                className: D().addPackHeader,
                                value: R,
                                disabled: A,
                                onChange: function(e) {
                                    B(e)
                                },
                                hideBorder: !0,
                                children: [E.Z.Messages.INVENTORY_ADD_PACK, " ", (0, n.jsx)(f.Z, {
                                    className: D().betaTag,
                                    color: "white"
                                })]
                            }), (0, n.jsxs)(l.Text, {
                                variant: "text-sm/medium",
                                className: D().inventoryLeaveServerDescription,
                                children: [(0, n.jsx)(j.Z, {
                                    className: D().nitroWheel
                                }), E.Z.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                            }), A && !L && (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: D().maxPacksNoticeText,
                                children: E.Z.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                    maxFreePacks: P.Lv,
                                    maxPacks: P.CJ
                                })
                            })]
                        })]
                    }))
                }
        },
        434651: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = r(667294),
                c = r(202351),
                i = r(70418),
                a = r(357088),
                u = r(401080),
                l = r(736626),
                s = r(664625),
                f = r(21372),
                p = r(567403),
                b = r(682776),
                y = r(473903),
                d = r(2590),
                O = r(473708),
                h = r(35637),
                v = r.n(h);

            function g(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function j(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            g(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            g(c, n, o, i, a, "throw", e)
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

            function m(e, t) {
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
            var P = function(e, t) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function a(c) {
                    return function(a) {
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
                        }([c, a])
                    }
                }
            };

            function E(e) {
                var t = e.guildId,
                    h = e.userId,
                    g = e.analyticsLocation,
                    E = e.analyticsLocations,
                    x = e.context,
                    D = e.icon,
                    S = p.Z.getGuild(t),
                    C = s.default.getId(),
                    N = (0, c.e7)([y.default], (function() {
                        return y.default.getUser(h)
                    })),
                    Z = (0, c.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(t, h)
                    }), [t, h]);
                (0, c.e7)([b.Z], (function() {
                    return b.Z.getGuildVersion(t)
                }), [t]);
                var I = o.useMemo((function() {
                    return w({}, t, [h])
                }), [t, h]);
                (0, a.$)(I);
                var k = x === d.IlC.POPOUT,
                    _ = (0, u.Z)({
                        guild: S,
                        analyticsLocation: g
                    });
                if (null == S || k) return null;
                var M = C === h && (b.Z.can(d.Plq.CHANGE_NICKNAME, S) || b.Z.can(d.Plq.MANAGE_NICKNAMES, S)),
                    L = C === h,
                    T = b.Z.canManageUser(d.Plq.MANAGE_NICKNAMES, h, S);
                if (!(M || T || L)) return null;
                if (null == N || Z) return null;
                var A = S.hasFeature(d.oNc.HUB) ? O.Z.Messages.HUB_EDIT_PROFILE : O.Z.Messages.CHANGE_IDENTITY,
                    V = L ? A : O.Z.Messages.CHANGE_NICKNAME;
                return (0, n.jsx)(i.MenuItem, {
                    id: "change-nickname",
                    label: (0, n.jsx)("div", {
                        className: v().labelWrapper,
                        children: (0, n.jsx)("span", {
                            className: v().label,
                            children: V
                        })
                    }),
                    icon: D,
                    action: function() {
                        if (L) {
                            (0, l.Z)(N.id, N.getAvatarURL(t, 80), {
                                guildId: t
                            });
                            _()
                        } else(0, i.openModalLazy)(j((function() {
                            var e, o;
                            return P(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(33166)]).then(r.bind(r, 633166))];
                                    case 1:
                                        e = c.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(o, m(function(e) {
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
                                                user: N,
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
                c = r(70418),
                i = r(827289),
                a = r(588895),
                u = r(922763),
                l = r(349491),
                s = r(168075),
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

            function d(e, t) {
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
            const O = (0, s.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    u = e.className,
                    l = e.foreground,
                    s = d(e, ["width", "height", "color", "className", "foreground"]);
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
                    className: u,
                    viewBox: "0 0 24 24"
                }, (0, p.Z)(s)), {
                    children: (0, n.jsx)("path", {
                        className: l,
                        fill: a,
                        d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                        "aria-hidden": !0
                    })
                }))
            }), f.d);
            var h = r(473708);

            function v(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            v(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            v(c, n, o, i, a, "throw", e)
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

            function m(e, t) {
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
            var P = function(e, t) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function a(c) {
                    return function(a) {
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
                        }([c, a])
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
                            source: a.Zu.CONTEXT_MENU,
                            alertType: (0, u.T1)(b)
                        };
                        (0, c.openModalLazy)(g((function() {
                            var o, c;
                            return P(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(18554)]).then(r.bind(r, 318554))];
                                    case 1:
                                        o = i.sent(), c = o.default;
                                        return [2, function(r) {
                                            return (0, n.jsx)(c, m(w({}, r), {
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
                    icon: t ? p ? O : l.Z : void 0,
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
                c = r(70418),
                i = r(15970),
                a = r(5544),
                u = r(682776),
                l = r(307930),
                s = r(2590),
                f = r(473708);

            function p(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            p(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            p(c, n, o, i, a, "throw", e)
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

            function d(e) {
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

            function O(e, t) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function a(c) {
                    return function(a) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                        0) : n.next) && !(o = o.call(n, c[1])).done) return o;
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
                        }([c, a])
                    }
                }
            };

            function v(e) {
                var t = e.source,
                    r = e.guild,
                    n = e.channel,
                    c = e.stageInstance,
                    l = (0, o.e7)([a.ZP, u.Z], (function() {
                        var e;
                        return null === (e = a.ZP.getChannels(r.id)[a.sH].find((function(e) {
                            return u.Z.can(s.Plq.CREATE_INSTANT_INVITE, e.channel)
                        }))) || void 0 === e ? void 0 : e.channel
                    })),
                    f = (0, o.e7)([u.Z], (function() {
                        return (0, i.b)(u.Z, r, n, c)
                    })),
                    p = g(t, r, f && null != n ? n : l),
                    b = j(t);
                return null == n && t === s.t4x.GUILD_CONTEXT_MENU ? null : f || null != l ? p : b
            }
            var g = function(e, t, o) {
                    return (0, n.jsx)(c.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? l.Z : void 0,
                        action: function() {
                            return (0, c.openModalLazy)(b((function() {
                                var c, i;
                                return h(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Promise.all([r.e(40532), r.e(86502), r.e(67551), r.e(29202)]).then(r.bind(r, 167551))];
                                        case 1:
                                            c = a.sent(), i = c.default;
                                            return [2, function(r) {
                                                return (0, n.jsx)(i, O(d({}, r), {
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
                        icon: e === s.t4x.GUILD_HEADER ? l.Z : void 0,
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
                                                return (0, n.jsx)(t, d({}, e))
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
                o = (r(667294), r(70418)),
                c = r(168075),
                i = r(795308),
                a = r(633878);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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
                    u = void 0 === i ? "currentColor" : i,
                    l = b(e, ["width", "height", "color"]);
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
                }({}, (0, a.Z)(l)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                        fill: u
                    }), (0, n.jsx)("path", {
                        d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                        fill: u
                    }), (0, n.jsx)("path", {
                        d: "M7 11H12V16H7V11Z",
                        fill: u
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
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(d)), {
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
            var d = r(678545),
                O = r(360703),
                h = r(473708);

            function v(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        u = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            v(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            v(c, n, o, i, a, "throw", e)
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

            function m(e, t) {
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
            var P = function(e, t) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function a(c) {
                    return function(a) {
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
                        }([c, a])
                    }
                }
            };

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    c = (0, d.Z)(e),
                    i = (0, O.Z)();
                if (!c) return null;
                var a = function() {
                    (0, o.openModalLazy)(g((function() {
                        var t, o;
                        return P(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, Promise.all([r.e(40532), r.e(35401), r.e(40706), r.e(14688), r.e(89663), r.e(67771)]).then(r.bind(r, 689663))];
                                case 1:
                                    t = c.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, n.jsx)(o, m(w({}, t), {
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
                    action: a
                })
            }
        },
        809210: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                c = r(70418),
                i = r(567403),
                a = r(473903),
                u = r(873629),
                l = r(364269),
                s = r(2590),
                f = r(473708);

            function p(e) {
                var t = (0, l.DM)(e),
                    r = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(e)
                    })),
                    p = (0, o.e7)([a.default], (function() {
                        return a.default.getCurrentUser()
                    }));
                return null == p || null == r || !r.hasFeature(s.oNc.COMMUNITY) && !p.isStaff() ? null : (0, n.jsx)(c.MenuCheckboxItem, {
                    id: "opt-in",
                    label: f.Z.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: function() {
                        (0, u.kH)(e)
                    }
                })
            }
        }
    }
]);