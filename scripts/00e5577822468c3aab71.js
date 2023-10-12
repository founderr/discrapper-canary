"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18554, 95260], {
        597209: (e, t, r) => {
            r.d(t, {
                m: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                c = r(633878);

            function i(e, t, r) {
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

            function l(e, t) {
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
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    b = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    p = void 0 === d ? "" : d,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof b ? b : b.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
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
                c = r(531441),
                i = r(473708);

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

            function u(e) {
                var t = e.className,
                    r = e.color,
                    u = void 0 === r ? o.Z.unsafe_rawColors.BRAND_500.css : r,
                    f = s(e, ["className", "color"]);
                return (0, n.jsx)(c.IG, l(function(e) {
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
                    text: i.Z.Messages.BETA,
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
                c = r(517586),
                i = r(202351),
                a = r(304548),
                l = r(270946),
                s = r(567403),
                u = r(349491),
                f = r(652591),
                b = r(557233),
                d = r(922763),
                p = r(46396),
                O = r(982358),
                y = r(2590),
                h = r(473708),
                g = r(733381),
                v = r.n(g);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
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
                        var c = e.apply(t, r);

                        function i(e) {
                            m(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            m(c, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function P(e, t, r) {
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

            function x(e, t) {
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
                    if ("string" == typeof e) return j(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e, t) {
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

            function D(e) {
                var t = e.guildId,
                    g = e.transitionState,
                    j = e.onClose,
                    m = e.analyticsData,
                    D = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(t)
                    }), [t]),
                    C = x(o.useState(!1), 1)[0],
                    E = x(o.useState(O.Fl), 2),
                    I = E[0],
                    _ = E[1],
                    R = (0, i.e7)([p.Z], (function() {
                        return p.Z.getGuildIncident(t)
                    })),
                    T = (0, d.SG)(R),
                    A = (0, d.sN)(R),
                    k = x(o.useState(T), 2),
                    Z = k[0],
                    M = k[1],
                    L = x(o.useState(A), 2),
                    B = L[0],
                    U = L[1],
                    V = Z !== T || B !== A;
                if (null == D) {
                    j();
                    return null
                }
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: g,
                    size: a.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(a.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: v().headerContainer,
                            children: [(0, n.jsx)(u.Z, {
                                color: c.Z.INTERACTIVE_NORMAL,
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
                            className: v().mainContainer,
                            children: [(0, n.jsx)(a.Select, {
                                placeholder: h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, O.c1)(),
                                select: function(e) {
                                    return function(e) {
                                        _(e)
                                    }(e)
                                },
                                isSelected: function(e) {
                                    return e === I
                                },
                                serialize: function(e) {
                                    return String(e)
                                }
                            }), (0, n.jsxs)("div", {
                                className: v().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: v().pauseText,
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
                                    className: v().toggle,
                                    onChange: function() {
                                        M((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: Z
                                })]
                            }), (0, n.jsxs)("div", {
                                className: v().pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: v().pauseText,
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
                                    className: v().toggle,
                                    onChange: function() {
                                        U((function(e) {
                                            return !e
                                        }))
                                    },
                                    checked: B
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(a.ModalFooter, {
                        children: [(0, n.jsx)(a.Button, {
                            onClick: function() {
                                if (!T && !A || Z || B)(0, b.n)(D.id, Z, B, I);
                                else {
                                    (0, b.n)(D.id, !1, !1);
                                    (0, a.openModalLazy)(w((function() {
                                        var e, o;
                                        return N(this, (function(c) {
                                            switch (c.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(30269)]).then(r.bind(r, 530269))];
                                                case 1:
                                                    e = c.sent(), o = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(o, S(function(e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var r = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(r);
                                                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                                }))));
                                                                n.forEach((function(t) {
                                                                    P(e, t, r[t])
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
                                var e = m.source,
                                    o = m.alertType,
                                    c = m.messageId;
                                f.default.track(y.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: c,
                                    raid_alert_type: o,
                                    intervention_type_enabled: (0, d.sO)(Z, B),
                                    intervention_type_disabled: (0, d.lk)(Z, B),
                                    duration: 60 * I
                                });
                                j()
                            },
                            color: a.Button.Colors.BRAND_NEW,
                            look: a.Button.Looks.FILLED,
                            submitting: C,
                            disabled: !V,
                            children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, n.jsx)(a.Button, {
                            onClick: j,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            disabled: C,
                            children: h.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        349491: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                c = r(597209),
                i = r(633878);

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
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    b = e.className,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
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
                }({
                    width: r,
                    height: c,
                    className: b,
                    viewBox: "0 0 24 24"
                }, (0, i.Z)(p)), {
                    children: (0, n.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }), c.m)
        },
        531441: (e, t, r) => {
            r.d(t, {
                Dv: () => d,
                OV: () => O,
                NG: () => y,
                mA: () => h,
                IG: () => g,
                lB: () => v,
                G2: () => j,
                fW: () => m
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                c = r.n(o),
                i = (r(304548), r(87931)),
                a = (r(473708), r(800624)),
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
            var d = {
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

            function O(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function y(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var h = function(e) {
                    var t = e.count,
                        r = e.color,
                        o = void 0 === r ? i.Z.STATUS_DANGER : r,
                        a = e.disableColor,
                        s = void 0 !== a && a,
                        h = e.shape,
                        g = void 0 === h ? d.ROUND : h,
                        v = e.className,
                        j = e.style,
                        m = b(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, n.jsx)("div", f(u({
                        className: c()(v, l().numberBadge, g),
                        style: u({
                            backgroundColor: s ? void 0 : o,
                            width: O(t),
                            paddingRight: p(t)
                        }, j)
                    }, m), {
                        children: y(t)
                    }))
                },
                g = function(e) {
                    var t = e.text,
                        r = e.className,
                        o = e.color,
                        a = void 0 === o ? i.Z.STATUS_DANGER : o,
                        s = e.shape,
                        p = void 0 === s ? d.ROUND : s,
                        O = e.disableColor,
                        y = void 0 !== O && O,
                        h = e.style,
                        g = b(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, n.jsx)("div", f(u({
                        className: c()(r, l().textBadge, p),
                        style: u({
                            backgroundColor: y ? void 0 : a
                        }, h)
                    }, g), {
                        children: t
                    }))
                },
                v = function(e) {
                    var t = e.text,
                        r = e.className,
                        o = b(e, ["text", "className"]);
                    return (0, n.jsx)(g, u({
                        className: c()(l().premiumBadge, r),
                        text: t
                    }, o))
                },
                j = function(e) {
                    var t = e.icon,
                        r = e.className,
                        o = e.color,
                        a = void 0 === o ? i.Z.STATUS_DANGER : o,
                        s = e.shape,
                        f = void 0 === s ? d.ROUND : s,
                        b = e.disableColor,
                        p = void 0 !== b && b,
                        O = e.style;
                    return (0, n.jsx)("div", {
                        className: c()(r, l().iconBadge, f),
                        style: u({
                            backgroundColor: p ? void 0 : a
                        }, O),
                        children: (0, n.jsx)(t, {
                            className: l().icon
                        })
                    })
                },
                m = function(e) {
                    var t = e.className,
                        r = e.color,
                        o = void 0 === r ? i.Z.INTERACTIVE_ACTIVE : r,
                        a = e.shape,
                        s = void 0 === a ? d.ROUND : a,
                        f = e.disableColor,
                        p = void 0 !== f && f,
                        O = e.style,
                        y = b(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        n.jsx)("div", u({
                        className: c()(t, l().circleBadge, s),
                        style: u({
                            backgroundColor: p ? void 0 : o
                        }, O)
                    }, y))
                }
        }
    }
]);