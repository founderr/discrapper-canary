"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18554], {
        318554: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => D
            });
            var n = r(785893),
                o = r(667294),
                i = r(517586),
                a = r(202351),
                s = r(70418),
                l = r(270946),
                c = r(567403),
                u = r(349491),
                d = r(652591),
                f = r(557233),
                p = r(922763),
                h = r(46396),
                b = r(982358),
                y = r(2590),
                m = r(473708),
                g = r(733381),
                O = r.n(g);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t, r, n, o, i, a) {
                try {
                    var s = e[i](a),
                        l = s.value
                } catch (e) {
                    r(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function x(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            v(i, n, o, a, s, "next", e)
                        }

                        function s(e) {
                            v(i, n, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function _(e, t, r) {
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

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                                        if (!(o = a.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                        }([i, s])
                    }
                }
            };

            function D(e) {
                var t = e.guildId,
                    g = e.transitionState,
                    j = e.onClose,
                    v = e.analyticsData,
                    D = (0, a.e7)([c.Z], (function() {
                        return c.Z.getGuild(t)
                    }), [t]),
                    w = I(o.useState(!1), 1)[0],
                    N = I(o.useState(b.Fl), 2),
                    C = N[0],
                    T = N[1],
                    L = (0, a.e7)([h.Z], (function() {
                        return h.Z.getGuildIncident(t)
                    })),
                    A = (0, p.SG)(L),
                    M = (0, p.sN)(L),
                    k = I(o.useState(A), 2),
                    P = k[0],
                    R = k[1],
                    Z = I(o.useState(M), 2),
                    B = Z[0],
                    G = Z[1],
                    U = P !== A || B !== M;
                if (null == D) {
                    j();
                    return null
                }
                return (0, n.jsxs)(s.ModalRoot, {
                    transitionState: g,
                    size: s.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(s.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: O().headerContainer,
                            children: [(0, n.jsx)(u.Z, {
                                color: i.Z.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(s.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: m.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, n.jsx)(l.Z, {})]
                        })
                    }), (0, n.jsx)(s.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: O().mainContainer,
                            children: [(0, n.jsx)(s.Select, {
                                placeholder: m.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, b.c1)(),
                                select: function(e) {
                                    return function(e) {
                                        T(e)
                                    }(e)
                                },
                                isSelected: function(e) {
                                    return e === C
                                },
                                serialize: function(e) {
                                    return String(e)
                                }
                            }), (0, n.jsxs)("div", {
                                className: O().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: O().pauseText,
                                    children: [(0, n.jsx)(s.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: m.Z.Messages.DISABLE_INVITES
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: m.Z.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(s.Switch, {
                                    className: O().toggle,
                                    onChange: function() {
                                        R((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: P
                                })]
                            }), (0, n.jsxs)("div", {
                                className: O().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: O().pauseText,
                                    children: [(0, n.jsx)(s.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: m.Z.Messages.DISABLE_DMS
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: m.Z.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(s.Switch, {
                                    className: O().toggle,
                                    onChange: function() {
                                        G((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: B
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(s.ModalFooter, {
                        children: [(0, n.jsx)(s.Button, {
                            onClick: function() {
                                if (!A && !M || P || B)(0, f.n)(D.id, P, B, C);
                                else {
                                    (0, f.n)(D.id, !1, !1);
                                    (0, s.openModalLazy)(x((function() {
                                        var e, o;
                                        return E(this, (function(i) {
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
                                                                    _(e, t, r[t])
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
                                var e = v.source,
                                    o = v.alertType,
                                    i = v.messageId;
                                d.default.track(y.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: i,
                                    raid_alert_type: o,
                                    intervention_type_enabled: (0, p.sO)(P, B),
                                    intervention_type_disabled: (0, p.lk)(P, B),
                                    duration: 60 * C
                                });
                                j()
                            },
                            color: s.Button.Colors.BRAND_NEW,
                            look: s.Button.Looks.FILLED,
                            submitting: w,
                            disabled: !U,
                            children: m.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, n.jsx)(s.Button, {
                            onClick: j,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            disabled: w,
                            children: m.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);