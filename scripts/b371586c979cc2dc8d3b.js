"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53369], {
        294882: (e, t, r) => {
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                o = r(667294),
                i = r(248088),
                c = r(795308),
                u = r(882723),
                l = r(930948),
                a = r(2590),
                s = r(473708),
                f = r(617235),
                p = r.n(f);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const v = function(e) {
                var t = e.message,
                    r = e.errorMessage,
                    f = e.submitting,
                    y = e.onReset,
                    v = e.onSave,
                    O = e.onSaveText,
                    g = e.onResetText,
                    m = e.onSaveButtonColor,
                    w = e.disabled,
                    j = e.saveButtonTooltip,
                    P = o.useRef(null),
                    C = h((0, i.useSpring)((function() {
                        return {
                            spring: 0
                        }
                    })), 2),
                    S = C[0].spring,
                    T = C[1];
                o.useEffect((function() {
                    var e = function() {
                        T({
                            spring: 1,
                            config: i.config.gentle
                        });
                        T({
                            spring: 0,
                            config: i.config.gentle,
                            delay: 1e3
                        })
                    };
                    l.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e);
                    return function() {
                        l.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e)
                    }
                }), [T]);
                var E, x = S.to({
                        range: [0, 1],
                        output: [(0, u.useToken)(c.Z.colors.TEXT_NORMAL).hex(), (0, u.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex()]
                    }),
                    _ = S.to({
                        range: [0, 1],
                        output: [(0, u.useToken)(c.Z.colors.BACKGROUND_FLOATING).hex(), (0, u.useToken)(c.Z.colors.STATUS_DANGER).hex()]
                    }),
                    I = (0, u.useToken)(c.Z.colors.TEXT_DANGER).hex();
                return (0, n.jsx)(i.animated.div, {
                    className: p().container,
                    style: {
                        backgroundColor: _
                    },
                    children: (0, n.jsx)("div", {
                        className: p().flexContainer,
                        ref: P,
                        children: (0, n.jsxs)(u.FocusRingScope, {
                            containerRef: P,
                            children: [(0, n.jsx)("div", {
                                className: p().shrinkingContainer,
                                children: (0, n.jsx)(i.animated.div, {
                                    className: p().message,
                                    style: {
                                        color: null != r ? I : x
                                    },
                                    children: null !== (E = null != r ? r : t) && void 0 !== E ? E : s.Z.Messages.SETTINGS_NOTICE_MESSAGE
                                })
                            }), (0, n.jsxs)("div", {
                                className: p().actions,
                                children: [null != y && (0, n.jsx)(u.Button, {
                                    className: p().resetButton,
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.PRIMARY,
                                    look: u.Button.Looks.LINK,
                                    onClick: y,
                                    children: (0, n.jsx)(i.animated.span, {
                                        style: {
                                            color: x
                                        },
                                        children: null != g ? g : s.Z.Messages.RESET
                                    })
                                }), null != v ? (0, n.jsx)(u.Tooltip, {
                                    text: j,
                                    children: function(e) {
                                        return (0, n.jsx)(u.Button, d(function(e) {
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
                                            size: u.Button.Sizes.SMALL,
                                            color: null != m ? m : u.Button.Colors.GREEN,
                                            submitting: f,
                                            disabled: w,
                                            onClick: v
                                        }, e), {
                                            children: null != O ? O : s.Z.Messages.SAVE_CHANGES
                                        }))
                                    }
                                }) : null]
                            })]
                        })
                    })
                })
            }
        },
        887124: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(281110),
                o = r(744564),
                i = r(2590);

            function c(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            c(i, n, o, u, l, "next", e)
                        }

                        function l(e) {
                            c(i, n, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e) {
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
            }

            function s(e, t) {
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

            function f(e, t) {
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
            var p = function(e, t) {
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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
            const y = {
                createApplication: function(e) {
                    var t = e.name,
                        r = e.guildId,
                        c = e.type,
                        l = e.teamId;
                    return u((function() {
                        var e, u;
                        return p(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, n.ZP.post({
                                        url: i.ANM.APPLICATIONS,
                                        body: {
                                            name: t,
                                            type: c,
                                            guild_id: r,
                                            team_id: l
                                        }
                                    })];
                                case 1:
                                    e = a.sent();
                                    u = e.body;
                                    null != r && null != c && o.Z.dispatch({
                                        type: "APPLICATION_FETCH_SUCCESS",
                                        application: u
                                    });
                                    return [2, u]
                            }
                        }))
                    }))()
                },
                getApplicationsForGuild: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return u((function() {
                        var r, c, u, l;
                        return p(this, (function(p) {
                            switch (p.label) {
                                case 0:
                                    r = t.includeTeam, c = f(t, ["includeTeam"]);
                                    return [4, n.ZP.get({
                                        url: i.ANM.GUILD_APPLICATIONS(e),
                                        query: s(a({}, c), {
                                            include_team: r
                                        })
                                    })];
                                case 1:
                                    u = p.sent();
                                    l = u.body;
                                    o.Z.dispatch({
                                        type: "APPLICATIONS_FETCH_SUCCESS",
                                        applications: l
                                    });
                                    return [2, l]
                            }
                        }))
                    }))()
                },
                transferApplication: function(e) {
                    var t = e.applicationId,
                        r = e.teamId,
                        c = e.mfaCode;
                    return u((function() {
                        var e, u;
                        return p(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, n.ZP.post({
                                        url: i.ANM.APPLICATION_OWNER_TRANSFER(t),
                                        body: {
                                            team_id: r,
                                            code: c
                                        }
                                    })];
                                case 1:
                                    e = l.sent();
                                    u = e.body;
                                    o.Z.dispatch({
                                        type: "APPLICATION_FETCH_SUCCESS",
                                        application: u
                                    });
                                    return [2, u]
                            }
                        }))
                    }))()
                }
            }
        },
        872424: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(667294),
                o = r(202351),
                i = r(347365),
                c = r(887124),
                u = r(333398);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            a(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            a(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e, t) {
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

            function y(e, t) {
                var r = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuildApplication(e, t)
                    })),
                    l = f(n.useState(null == r), 2),
                    a = l[0],
                    y = l[1],
                    b = f(n.useState(), 2),
                    d = b[0],
                    h = b[1],
                    v = f(n.useState(!1), 2),
                    O = v[0],
                    g = v[1],
                    m = n.useCallback(s((function() {
                        var n;
                        return p(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (null != r || null == e) return [2];
                                    g(!0);
                                    y(!0);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, 4, 5]);
                                    return [4, c.Z.getApplicationsForGuild(e, {
                                        type: t,
                                        includeTeam: !0
                                    })];
                                case 2:
                                    o.sent();
                                    return [3, 5];
                                case 3:
                                    n = o.sent();
                                    h(new i.Hx(n));
                                    return [3, 5];
                                case 4:
                                    y(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [r, t, e]);
                n.useEffect((function() {
                    O || m()
                }), [O, m]);
                return {
                    application: r,
                    error: d,
                    loading: a
                }
            }
        },
        268520: (e, t, r) => {
            r.d(t, {
                H: () => w,
                R: () => m
            });
            var n = r(667294),
                o = r(202351),
                i = r(547721),
                c = r(744564),
                u = r(281110),
                l = r(347365),
                a = r(2590);

            function s(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }
            var f, p, y = function(e, t) {
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
                },
                b = (p = (f = function(e, t) {
                    var r;
                    return y(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                return [4, u.ZP.get({
                                    url: a.ANM.PRICE_TIERS,
                                    query: {
                                        price_tier_type: t,
                                        guild_id: e
                                    }
                                })];
                            case 1:
                                return [2, n.sent().body];
                            case 2:
                                r = n.sent();
                                throw new l.Hx(r);
                            case 3:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, n) {
                        var o = f.apply(e, t);

                        function i(e) {
                            s(o, r, n, i, c, "next", e)
                        }

                        function c(e) {
                            s(o, r, n, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e, t) {
                    return p.apply(this, arguments)
                });

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

            function O() {
                return (O = h((function(e, t) {
                    var r;
                    return v(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                c.Z.dispatch({
                                    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
                                    guildId: e,
                                    priceTierType: t
                                });
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, b(e, t)];
                            case 2:
                                r = n.sent();
                                c.Z.dispatch({
                                    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
                                    guildId: e,
                                    priceTierType: t,
                                    priceTiers: r
                                });
                                return [3, 4];
                            case 3:
                                n.sent();
                                c.Z.dispatch({
                                    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
                                    guildId: e,
                                    priceTierType: t
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var g = r(578472);

            function m(e, t) {
                var r = (0, o.e7)([g.Z], (function() {
                        return g.Z.getPriceTiersForGuildAndType(e, t)
                    })),
                    i = (0, o.e7)([g.Z], (function() {
                        return g.Z.getPriceTiersFetchStateForGuildAndType(e, t)
                    }));
                n.useEffect((function() {
                    i === g.M.NOT_FETCHED && function(e, t) {
                        O.apply(this, arguments)
                    }(e, t)
                }), [e, i, t]);
                return {
                    loading: i === g.M.FETCHING,
                    priceTiers: r
                }
            }

            function w(e) {
                var t = (0, i.JH)(),
                    r = t.fetchSubscriptionsSettings,
                    o = t.loading,
                    c = t.error;
                n.useEffect((function() {
                    r(e)
                }), [r, e]);
                var u = (0, i.YB)(e);
                return {
                    loaded: null != u && !o,
                    subscriptionsSettings: u,
                    loading: o,
                    error: c
                }
            }
        },
        578472: (e, t, r) => {
            r.d(t, {
                M: () => f,
                Z: () => d
            });
            var n = r(202351),
                o = r(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function u(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var f, p = new Map,
                y = new Map;
            ! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED"
            }(f || (f = {}));
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(r, e);
                var t = s(r);

                function r() {
                    i(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getPriceTiersFetchStateForGuildAndType = function(e, t) {
                    var r, n;
                    return null !== (n = null === (r = y.get(e)) || void 0 === r ? void 0 : r.get(t)) && void 0 !== n ? n : f.NOT_FETCHED
                };
                n.getPriceTiersForGuildAndType = function(e, t) {
                    var r;
                    return null === (r = p.get(e)) || void 0 === r ? void 0 : r.get(t)
                };
                n.__getLocalVars = function() {
                    return {
                        priceTiersByGuildAndType: p,
                        priceTiersFetchStateForGuildAndType: y
                    }
                };
                return r
            }(n.ZP.Store);
            b.displayName = "CreatorMonetizationStore";
            const d = new b(o.Z, {
                CONNECTION_OPEN: function() {
                    p.clear();
                    y.clear()
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
                    var t = e.guildId,
                        r = e.priceTierType;
                    y.has(t) || y.set(t, new Map);
                    y.get(t).set(r, f.FETCHING)
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        r = e.priceTierType,
                        n = e.priceTiers;
                    y.has(t) || y.set(t, new Map);
                    y.get(t).set(r, f.FETCHED);
                    p.has(t) || p.set(t, new Map);
                    p.get(t).set(r, n)
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
                    var t = e.guildId,
                        r = e.priceTierType;
                    y.has(t) || y.set(t, new Map);
                    y.get(t).set(r, f.FETCHED)
                }
            })
        },
        577939: (e, t, r) => {
            r.d(t, {
                T6: () => q,
                Z$: () => X,
                k3: () => $,
                ZP: () => Y
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                u = r(798159),
                l = r(457217),
                a = r(547308),
                s = r(882723);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const y = function() {
                var e = p((0, o.useState)(null), 2),
                    t = e[0],
                    r = e[1];
                (0, o.useEffect)((function() {
                    null != (null === window || void 0 === window ? void 0 : window.EyeDropper) && r(new window.EyeDropper)
                }), []);
                return t
            };
            var b = r(795470),
                d = r(681706),
                h = r(1150),
                v = r(392398),
                O = r.n(v);

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        g(e, t, r[t])
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
            var j = (0, d.iS)((function(e) {
                return (0, n.jsxs)("div", {
                    className: O().wrapper,
                    children: [(0, n.jsx)("div", {
                        className: O().saturation,
                        children: (0, n.jsx)(h.OQ, m({}, e))
                    }), (0, n.jsx)("div", {
                        className: O().hue,
                        children: (0, n.jsx)(h.PS, w(m({}, e), {
                            direction: "horizontal"
                        }))
                    })]
                })
            }));
            const P = o.memo(j);
            var C = r(621329),
                S = r(640300),
                T = r(373438),
                E = r(2590),
                x = r(473708),
                _ = r(555617),
                I = r.n(_);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function k(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Z(e) {
                Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Z(e)
            }

            function D(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && G(e, t)
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        R(e, t, r[t])
                    }))
                }
                return e
            }

            function H(e, t) {
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

            function F(e, t) {
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

            function L(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function G(e, t) {
                G = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return G(e, t)
            }

            function B(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function V(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Z(e);
                    if (t) {
                        var o = Z(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }
            var z = function(e, t) {
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
                },
                W = function() {
                    return Promise.resolve()
                };

            function K(e) {
                var t, r = e.color,
                    o = e.isDefault,
                    i = void 0 !== o && o,
                    u = e.isCustom,
                    f = void 0 !== u && u,
                    p = e.isSelected,
                    y = void 0 !== p && p,
                    d = e.disabled,
                    h = void 0 !== d && d,
                    v = e.style,
                    O = void 0 === v ? {} : v,
                    g = e.onClick,
                    m = e["aria-label"],
                    w = (0, l.JA)("color-".concat(r)),
                    j = null != r ? (0, a.Rf)(r) : O.backgroundColor,
                    P = !1;
                f && !y ? P = !0 : (f || y) && (P = (0, a.Bd)(r) > .1);
                return (0, n.jsx)(s.FocusRing, {
                    offset: -2,
                    children: (0, n.jsxs)("button", H(M({
                        type: "button",
                        className: c()(I().colorPickerSwatch, (t = {}, R(t, I().disabled, h), R(t, I().default, i), R(t, I().custom, f), R(t, I().noColor, null == r), t)),
                        disabled: h,
                        onClick: function() {
                            return null == g ? void 0 : g(r)
                        },
                        style: H(M({}, O), {
                            backgroundColor: j
                        }),
                        "aria-label": null != m ? m : j
                    }, w), {
                        children: [f ? (0, n.jsx)(S.Z, {
                            className: I().colorPickerDropper,
                            foreground: I().colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, b.Lq)(P ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
                        }) : null, function() {
                            var e = 16,
                                t = 16;
                            if (f || i) {
                                e = 32;
                                t = 24
                            }
                            if (y) return (0, n.jsx)(C.Z, {
                                width: e,
                                height: t,
                                color: (0, b.Lq)(P ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
                            })
                        }()]
                    }))
                })
            }
            var $ = function(e) {
                    D(r, e);
                    var t = V(r);

                    function r() {
                        N(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.color,
                            r = e.onChange,
                            o = e.value,
                            i = e.disabled;
                        return (0, n.jsx)(K, {
                            isDefault: !0,
                            color: t,
                            isSelected: t === o || 0 === o,
                            onClick: r,
                            disabled: i
                        })
                    };
                    return r
                }(o.PureComponent),
                q = function(e) {
                    D(r, e);
                    var t = V(r);

                    function r() {
                        N(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.customColor,
                            r = e.value,
                            o = e.disabled,
                            i = e["aria-label"];
                        return (0, n.jsx)(K, {
                            isCustom: !0,
                            color: t,
                            isSelected: r === t,
                            disabled: o,
                            "aria-label": i
                        })
                    };
                    return r
                }(o.PureComponent),
                J = function(e) {
                    var t = e.value,
                        r = e.onChange,
                        i = e.onClose,
                        c = e.suggestedColors,
                        u = e.middle,
                        l = e.footer,
                        f = e.showEyeDropper,
                        p = y(),
                        b = B(o.useState((function() {
                            var e = null != t ? t : 0,
                                r = (0, a.Rf)(e);
                            return {
                                current: e,
                                pending: r,
                                input: r
                            }
                        })), 2),
                        d = b[0],
                        h = b[1];
                    o.useEffect((function() {
                        if (null != t && t !== d.current) {
                            var e = (0, a.Rf)(t);
                            h({
                                current: t,
                                pending: e,
                                input: e
                            })
                        }
                    }), [t, d]);
                    o.useEffect((function() {
                        return i
                    }), [i]);
                    var v, O, g = function(e) {
                            var t = "#" === e[0] ? e : "#".concat(e);
                            if ((0, a.FX)(t)) {
                                var n = (0, a._i)(t);
                                h({
                                    current: n,
                                    pending: t,
                                    input: t
                                });
                                r(n)
                            } else h((function(e) {
                                return H(M({}, e), {
                                    input: t
                                })
                            }))
                        },
                        m = (O = (v = function() {
                            var e;
                            return z(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (null == p) return [2];
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, , 4]);
                                        return [4, p.open()];
                                    case 2:
                                        e = t.sent().sRGBHex;
                                        g(e);
                                        return [3, 4];
                                    case 3:
                                        t.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = v.apply(e, t);

                                function i(e) {
                                    k(o, r, n, i, c, "next", e)
                                }

                                function c(e) {
                                    k(o, r, n, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        }), function() {
                            return O.apply(this, arguments)
                        });
                    return (0, n.jsxs)(s.Dialog, {
                        "aria-label": x.Z.Messages.PICK_A_COLOR,
                        className: I().customColorPicker,
                        children: [(0, n.jsx)(P, {
                            onChange: function(e) {
                                return function(e) {
                                    h((function(t) {
                                        return H(M({}, t), {
                                            pending: e,
                                            input: e
                                        })
                                    }))
                                }(e.hex)
                            },
                            onChangeComplete: function(e) {
                                return function(e) {
                                    r((0, a._i)(e))
                                }(e.hex)
                            },
                            color: d.pending
                        }), u, (0, n.jsxs)("div", {
                            className: I().customColorPickerInputContainer,
                            children: [f && null != p && (0, n.jsx)(T.JO, {
                                onClick: m,
                                tooltip: x.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                                tooltipPosition: "top",
                                className: I().customColorPickerEyeDropper,
                                icon: S.Z
                            }), (0, n.jsx)(s.TextInput, {
                                className: I().customColorPickerInput,
                                value: d.input,
                                onChange: g,
                                maxLength: 7
                            })]
                        }), null != c && c.length > 0 && (0, n.jsx)("div", {
                            className: I().suggestedColors,
                            children: c.map((function(e, t) {
                                return (0, n.jsx)(s.Clickable, {
                                    "aria-label": "",
                                    style: {
                                        backgroundColor: e
                                    },
                                    className: I().suggestedColor,
                                    onClick: function() {
                                        return g(e)
                                    }
                                }, "".concat(e, "-").concat(t))
                            }))
                        }), l]
                    })
                },
                X = o.memo(J);

            function Y(e) {
                var t = e.className,
                    r = e.defaultColor,
                    o = e.customColor,
                    i = e.colors,
                    a = e.value,
                    s = e.disabled,
                    f = e.onChange,
                    p = e.renderDefaultButton,
                    y = e.renderCustomButton,
                    b = e.colorContainerClassName,
                    d = function(e) {
                        return (0, n.jsx)("div", {
                            className: I().colorPickerRow,
                            children: e.map((function(e) {
                                return (0, n.jsx)(K, {
                                    color: e,
                                    isSelected: e === a,
                                    onClick: f,
                                    disabled: s
                                }, e)
                            }))
                        })
                    },
                    h = i.slice(0, i.length / 2),
                    v = i.slice(i.length / 2, i.length),
                    O = (0, u.ZP)({
                        id: "color-picker",
                        isEnabled: !0,
                        scrollToStart: W,
                        scrollToEnd: W
                    });
                return (0, n.jsx)(l.bG, {
                    navigator: O,
                    children: (0, n.jsx)(l.SJ, {
                        children: function(e) {
                            var i = e.ref,
                                u = F(e, ["ref"]);
                            return (0, n.jsxs)("div", H(M({
                                className: c()(I().container, t),
                                ref: i
                            }, u), {
                                children: [(0, n.jsx)("div", {
                                    className: c()(I().defaultContainer, b),
                                    children: p({
                                        value: a,
                                        color: r,
                                        onChange: f,
                                        disabled: s
                                    })
                                }), (0, n.jsx)("div", {
                                    className: c()(I().customContainer, b),
                                    children: y({
                                        value: a,
                                        customColor: o,
                                        disabled: s
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: I().presets,
                                    children: [d(h), d(v)]
                                })]
                            }))
                        }
                    })
                })
            }
        },
        698011: (e, t, r) => {
            r.d(t, {
                Z: () => w
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                u = r(853158),
                l = r(882723),
                a = r(587587),
                s = r.n(a);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
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

            function d(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }
            var g = {
                    friction: 7,
                    tension: 60
                },
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(r, e);
                    var t = O(r);

                    function r() {
                        f(this, r);
                        var e;
                        (e = t.apply(this, arguments)).animation = new u.Z.Value(0);
                        return e
                    }
                    var o = r.prototype;
                    o.componentWillAppear = function(e) {
                        this.animateTo(1).start(e)
                    };
                    o.componentWillEnter = function(e) {
                        this.animateTo(1).start(e)
                    };
                    o.componentWillLeave = function(e) {
                        this.context.reducedMotion.enabled ? this.animateTo(0).start(e) : u.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                    };
                    o.animateTo = function(e) {
                        return u.Z.spring(this.animation, b(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    p(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, g), {
                            toValue: e
                        }))
                    };
                    o.getAnimatedStyle = function() {
                        var e = this.context.reducedMotion;
                        return u.Z.accelerate({
                            opacity: this.animation,
                            transform: e.enabled ? void 0 : [{
                                translateY: this.animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["150%", "0%"]
                                })
                            }]
                        })
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.children;
                        return (0, n.jsx)(u.Z.div, {
                            className: c()(t, s().slider),
                            style: this.getAnimatedStyle(),
                            children: r
                        })
                    };
                    return r
                }(o.Component);
            m.contextType = l.AccessibilityPreferencesContext;
            const w = m
        },
        640300: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n = r(785893);
            r(667294);

            function o(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    l = e.className,
                    a = e.foreground;
                return (0, n.jsx)("svg", {
                    className: l,
                    width: r,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            d: "M-4-4h24v24H-4z"
                        }), (0, n.jsx)("path", {
                            className: a,
                            fill: u,
                            d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                        })]
                    })
                })
            }
        },
        655402: (e, t, r) => {
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

            function u(e, t) {
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
                    a = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = u(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", c(function(e) {
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
                }({}, (0, o.Z)(p)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                        fill: f
                    })]
                }))
            }
        }
    }
]);
//# sourceMappingURL=b371586c979cc2dc8d3b.js.map