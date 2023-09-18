"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18554, 95260], {
        87931: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });
            const n = r(517586).Z
        },
        270946: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(531441),
                c = r(473708);

            function a(e, t, r) {
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

            function u(e) {
                var t = e.className,
                    r = e.color,
                    u = void 0 === r ? o.Z.unsafe_rawColors.BRAND_500.css : r,
                    f = s(e, ["className", "color"]);
                return (0, n.jsx)(i.IG, l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, f), {
                    text: c.Z.Messages.BETA,
                    color: u,
                    className: t
                }))
            }
        },
        318554: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => D
            });
            var n = r(785893),
                o = r(667294),
                i = r(517586),
                c = r(202351),
                a = r(882723),
                l = r(270946),
                s = r(567403),
                u = r(349491),
                f = r(652591),
                d = r(557233),
                b = r(922763),
                p = r(46396),
                y = r(982358),
                O = r(2590),
                h = r(473708),
                g = r(786686),
                j = r.n(g);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t, r, n, o, i, c) {
                try {
                    var a = e[i](c),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function w(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            v(i, n, o, c, a, "next", e)
                        }

                        function a(e) {
                            v(i, n, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function S(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function x(e, t) {
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

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e, t) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
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
                        }([i, a])
                    }
                }
            };

            function D(e) {
                var t = e.guildId,
                    g = e.transitionState,
                    m = e.enable,
                    v = e.onClose,
                    D = e.analyticsData,
                    C = (0, c.e7)([s.Z], (function() {
                        return s.Z.getGuild(t)
                    }), [t]),
                    E = N(o.useState(!1), 1)[0],
                    _ = N(o.useState(y.Fl), 2),
                    I = _[0],
                    T = _[1],
                    R = (0, c.e7)([p.Z], (function() {
                        return p.Z.getGuildIncident(t)
                    })),
                    A = (0, b.SG)(R),
                    k = (0, b.sN)(R),
                    M = N(o.useState(!!m || A), 2),
                    Z = M[0],
                    L = M[1],
                    B = N(o.useState(!!m || k), 2),
                    U = B[0],
                    G = B[1];
                if (null == C) {
                    v();
                    return null
                }
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: g,
                    size: a.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(a.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: j().headerContainer,
                            children: [(0, n.jsx)(u.Z, {
                                color: i.Z.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(a.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, n.jsx)(l.Z, {})]
                        })
                    }), (0, n.jsx)(a.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: j().mainContainer,
                            children: [(0, n.jsx)(a.Select, {
                                placeholder: h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, y.c1)(),
                                select: function(e) {
                                    return function(e) {
                                        T(e)
                                    }(e)
                                },
                                isSelected: function(e) {
                                    return e === I
                                },
                                serialize: function(e) {
                                    return String(e)
                                }
                            }), (0, n.jsxs)("div", {
                                className: j().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: j().pauseText,
                                    children: [(0, n.jsx)(a.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: h.Z.Messages.DISABLE_INVITES
                                    }), (0, n.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: h.Z.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(a.Switch, {
                                    className: j().toggle,
                                    onChange: function() {
                                        L((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: Z
                                })]
                            }), (0, n.jsxs)("div", {
                                className: j().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: j().pauseText,
                                    children: [(0, n.jsx)(a.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: h.Z.Messages.DISABLE_DMS
                                    }), (0, n.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: h.Z.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(a.Switch, {
                                    className: j().toggle,
                                    onChange: function() {
                                        G((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: U
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(a.ModalFooter, {
                        children: [(0, n.jsx)(a.Button, {
                            onClick: function() {
                                if (!A && !k || Z || U)(0, d.n)(C.id, Z, U, I);
                                else {
                                    (0, d.n)(C.id, !1, !1);
                                    (0, a.openModalLazy)(w((function() {
                                        var e, o;
                                        return P(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(30269)]).then(r.bind(r, 530269))];
                                                case 1:
                                                    e = i.sent(), o = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(o, x(function(e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var r = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(r);
                                                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                                }))));
                                                                n.forEach((function(t) {
                                                                    S(e, t, r[t])
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
                                var e = D.source,
                                    o = D.alertType,
                                    i = D.messageId;
                                f.default.track(O.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: i,
                                    raid_alert_type: o,
                                    intervention_type_enabled: (0, b.sO)(Z, U),
                                    intervention_type_disabled: (0, b.lk)(Z, U),
                                    duration: 60 * I
                                });
                                v()
                            },
                            color: a.Button.Colors.BRAND_NEW,
                            look: a.Button.Looks.FILLED,
                            submitting: E,
                            children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, n.jsx)(a.Button, {
                            onClick: v,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            disabled: E,
                            children: h.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        349491: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.className,
                    b = e.foreground,
                    p = a(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    height: s,
                    className: d,
                    viewBox: "0 0 24 24"
                }, (0, o.Z)(p)), {
                    children: (0,
                        n.jsx)("path", {
                        className: b,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        531441: (e, t, r) => {
            r.d(t, {
                Dv: () => b,
                OV: () => y,
                NG: () => O,
                mA: () => h,
                IG: () => g,
                lB: () => j,
                G2: () => m,
                fW: () => v
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = (r(882723), r(87931)),
                a = (r(473708), r(202427)),
                l = r.n(a);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        s(e, t, r[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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
            var b = {
                ROUND: l().baseShapeRound,
                ROUND_LEFT: l().baseShapeRoundLeft,
                ROUND_RIGHT: l().baseShapeRoundRight,
                SQUARE: ""
            };

            function p(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function y(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var h = function(e) {
                    var t = e.count,
                        r = e.color,
                        o = void 0 === r ? c.Z.STATUS_DANGER : r,
                        a = e.disableColor,
                        s = void 0 !== a && a,
                        h = e.shape,
                        g = void 0 === h ? b.ROUND : h,
                        j = e.className,
                        m = e.style,
                        v = d(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, n.jsx)("div", f(u({
                        className: i()(j, l().numberBadge, g),
                        style: u({
                            backgroundColor: s ? void 0 : o,
                            width: y(t),
                            paddingRight: p(t)
                        }, m)
                    }, v), {
                        children: O(t)
                    }))
                },
                g = function(e) {
                    var t = e.text,
                        r = e.className,
                        o = e.color,
                        a = void 0 === o ? c.Z.STATUS_DANGER : o,
                        s = e.shape,
                        p = void 0 === s ? b.ROUND : s,
                        y = e.disableColor,
                        O = void 0 !== y && y,
                        h = e.style,
                        g = d(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, n.jsx)("div", f(u({
                        className: i()(r, l().textBadge, p),
                        style: u({
                            backgroundColor: O ? void 0 : a
                        }, h)
                    }, g), {
                        children: t
                    }))
                },
                j = function(e) {
                    var t = e.text,
                        r = e.className,
                        o = d(e, ["text", "className"]);
                    return (0, n.jsx)(g, u({
                        className: i()(l().premiumBadge, r),
                        text: t
                    }, o))
                },
                m = function(e) {
                    var t = e.icon,
                        r = e.className,
                        o = e.color,
                        a = void 0 === o ? c.Z.STATUS_DANGER : o,
                        s = e.shape,
                        f = void 0 === s ? b.ROUND : s,
                        d = e.disableColor,
                        p = void 0 !== d && d,
                        y = e.style;
                    return (0, n.jsx)("div", {
                        className: i()(r, l().iconBadge, f),
                        style: u({
                            backgroundColor: p ? void 0 : a
                        }, y),
                        children: (0, n.jsx)(t, {
                            className: l().icon
                        })
                    })
                },
                v = function(e) {
                    var t = e.className,
                        r = e.color,
                        o = void 0 === r ? c.Z.INTERACTIVE_ACTIVE : r,
                        a = e.shape,
                        s = void 0 === a ? b.ROUND : a,
                        f = e.disableColor,
                        p = void 0 !== f && f,
                        y = e.style,
                        O = d(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0, n.jsx)("div", u({
                        className: i()(t, l().circleBadge, s),
                        style: u({
                            backgroundColor: p ? void 0 : o
                        }, y)
                    }, O))
                }
        }
    }
]);
//# sourceMappingURL=a0fce06c95898a7d9321.js.map