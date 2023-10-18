"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95260, 18554], {
        557233: (e, t, r) => {
            r.d(t, {
                C4: () => w,
                Fi: () => j,
                KK: () => v,
                f6: () => _,
                n: () => I
            });
            var n = r(730381),
                o = r.n(n),
                i = r(281110),
                a = r(396043),
                l = r(703790),
                u = r(567403),
                c = r(652591),
                s = r(980813),
                f = r(2590);

            function d(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            d(i, n, o, a, l, "next", e)
                        }

                        function l(e) {
                            d(i, n, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        h(e, t, r[t])
                    }))
                }
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
            var O = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
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
                        }([i, l])
                    }
                }
            };

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && c.default.track(f.rMx.GUILD_RAID_REPORTED, y(b({}, (0, a.hH)(e)), {
                    guild_id: e,
                    raid_types: t
                }))
            }

            function _(e, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = p((function(e, t) {
                    var r;
                    return O(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                (r = new Set(e.features)).has(f.oNc.COMMUNITY) ? t ? r.delete(f.oNc.RAID_ALERTS_DISABLED) : r.add(f.oNc.RAID_ALERTS_DISABLED) : t ? r.add(f.oNc.NON_COMMUNITY_RAID_ALERTS) : r.delete(f.oNc.NON_COMMUNITY_RAID_ALERTS);
                                return [4, l.Z.saveGuild(e.id, {
                                    features: r
                                }, {
                                    throwErr: !0
                                })];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e, t, r, n) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = p((function(e, t, r, n) {
                    var a, l;
                    return O(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                a = o()().add(n, "hours").toISOString();
                                l = {
                                    invites_disabled_until: t ? a : null,
                                    dms_disabled_until: r ? a : null
                                };
                                return [4, i.ZP.put({
                                    url: f.ANM.GUILD_INCIDENT_ACTIONS(e),
                                    body: l
                                })];
                            case 1:
                                return [2, u.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function j(e, t, r) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = p((function(e, t, r) {
                    var n, o, a;
                    return O(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                n = (0, s.jy)(e).showAlertMode;
                                o = u.Z.getGuild(e);
                                a = null == o ? void 0 : o.getSafetyAlertsChannelId();
                                return n && null != a ? [4, i.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                                    body: {
                                        alert_message_id: t,
                                        reason: r
                                    }
                                })] : [2, null];
                            case 1:
                                return [2, l.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(e) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = p((function(e) {
                    var t, r, n;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = (0, s.jy)(e).showAlertMode;
                                r = u.Z.getGuild(e);
                                n = null == r ? void 0 : r.getSafetyAlertsChannelId();
                                return t && null != n ? [4, i.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_RAID(e)
                                })] : [2, null];
                            case 1:
                                return [2, o.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        318554: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => E
            });
            var n = r(785893),
                o = r(667294),
                i = r(517586),
                a = r(202351),
                l = r(70418),
                u = r(270946),
                c = r(567403),
                s = r(349491),
                f = r(652591),
                d = r(557233),
                p = r(922763),
                h = r(46396),
                b = r(982358),
                y = r(2590),
                O = r(473708),
                v = r(733381),
                _ = r.n(v);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function I(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function m(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            I(i, n, o, a, l, "next", e)
                        }

                        function l(e) {
                            I(i, n, o, a, l, "throw", e)
                        }
                        a(void 0)
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

            function S(e, t) {
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

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
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
                        }([i, l])
                    }
                }
            };

            function E(e) {
                var t = e.guildId,
                    v = e.transitionState,
                    g = e.onClose,
                    I = e.analyticsData,
                    E = (0, a.e7)([c.Z], (function() {
                        return c.Z.getGuild(t)
                    }), [t]),
                    N = w(o.useState(!1), 1)[0],
                    A = w(o.useState(b.Fl), 2),
                    x = A[0],
                    T = A[1],
                    P = (0,
                        a.e7)([h.Z], (function() {
                        return h.Z.getGuildIncident(t)
                    })),
                    C = (0, p.SG)(P),
                    L = (0, p.sN)(P),
                    M = w(o.useState(C), 2),
                    R = M[0],
                    k = M[1],
                    Z = w(o.useState(L), 2),
                    G = Z[0],
                    U = Z[1],
                    B = R !== C || G !== L;
                if (null == E) {
                    g();
                    return null
                }
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: v,
                    size: l.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(l.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: _().headerContainer,
                            children: [(0, n.jsx)(s.Z, {
                                color: i.Z.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(l.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: O.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, n.jsx)(u.Z, {})]
                        })
                    }), (0, n.jsx)(l.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: _().mainContainer,
                            children: [(0, n.jsx)(l.Select, {
                                placeholder: O.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, b.c1)(),
                                select: function(e) {
                                    return function(e) {
                                        T(e)
                                    }(e)
                                },
                                isSelected: function(e) {
                                    return e === x
                                },
                                serialize: function(e) {
                                    return String(e)
                                }
                            }), (0, n.jsxs)("div", {
                                className: _().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: _().pauseText,
                                    children: [(0, n.jsx)(l.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: O.Z.Messages.DISABLE_INVITES
                                    }), (0, n.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: O.Z.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(l.Switch, {
                                    className: _().toggle,
                                    onChange: function() {
                                        k((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: R
                                })]
                            }), (0, n.jsxs)("div", {
                                className: _().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: _().pauseText,
                                    children: [(0, n.jsx)(l.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: O.Z.Messages.DISABLE_DMS
                                    }), (0, n.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: O.Z.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(l.Switch, {
                                    className: _().toggle,
                                    onChange: function() {
                                        U((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: G
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(l.ModalFooter, {
                        children: [(0, n.jsx)(l.Button, {
                            onClick: function() {
                                if (!C && !L || R || G)(0, d.n)(E.id, R, G, x);
                                else {
                                    (0, d.n)(E.id, !1, !1);
                                    (0,
                                        l.openModalLazy)(m((function() {
                                        var e, o;
                                        return D(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(30269)]).then(r.bind(r, 530269))];
                                                case 1:
                                                    e = i.sent(), o = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(o, S(function(e) {
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
                                                            guildId: t
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                }
                                var e = I.source,
                                    o = I.alertType,
                                    i = I.messageId;
                                f.default.track(y.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: i,
                                    raid_alert_type: o,
                                    intervention_type_enabled: (0, p.sO)(R, G),
                                    intervention_type_disabled: (0, p.lk)(R, G),
                                    duration: 60 * x
                                });
                                g()
                            },
                            color: l.Button.Colors.BRAND_NEW,
                            look: l.Button.Looks.FILLED,
                            submitting: N,
                            disabled: !B,
                            children: O.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0,
                            n.jsx)(l.Button, {
                            onClick: g,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            disabled: N,
                            children: O.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);