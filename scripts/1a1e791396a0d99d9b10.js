"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [32632, 89005, 29202, 91683, 58635], {
        758635: (e, t, n) => {
            n.d(t, {
                W: () => c
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                u = n(2590);

            function c() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        324235: (e, t, n) => {
            n.d(t, {
                e: () => a
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var a = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    f = void 0 === a ? 24 : a,
                    s = e.color,
                    d = void 0 === s ? o.Z.colors.INTERACTIVE_NORMAL : s,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    h = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: f,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }
        },
        218190: (e, t, n) => {
            n.d(t, {
                G: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => a
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                u = n(2590);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case u.d4z.DM:
                        var c = l(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            a = c[0];
                        return null == a ? null : a.getAvatarURL(void 0, t, n);
                    case u.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        792800: (e, t, n) => {
            n.d(t, {
                PR: () => h,
                EM: () => v,
                Tt: () => O,
                yY: () => g,
                ZD: () => I
            });
            var r = n(667294),
                o = n(38736);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || f(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || f(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
            }
            var s = {
                    base: n(120415).FB ? void 0 : "Discord"
                },
                d = 0,
                p = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                y = (0, o.Z)((function() {
                    return {
                        titles: [s],
                        notificationCount: void 0,
                        flashQueue: []
                    }
                }));

            function h(e) {
                y.setState({
                    notificationCount: e
                })
            }

            function v(e) {
                var t = c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, p, e), {
                    id: d++
                });
                t.count = Math.max(t.count, t.messages.length);
                y.setState((function(e) {
                    return {
                        flashQueue: a(e.flashQueue).concat([t])
                    }
                }));
                return function() {
                    return b(t.id)
                }
            }

            function b(e) {
                y.setState((function(t) {
                    return {
                        flashQueue: t.flashQueue.filter((function(t) {
                            return t.id !== e
                        }))
                    }
                }))
            }

            function O(e) {
                r.useEffect((function() {
                    return function(e) {
                        y.setState((function(t) {
                            return {
                                titles: [e].concat(a(t.titles))
                            }
                        }));
                        return function() {
                            y.setState((function(t) {
                                return {
                                    titles: t.titles.filter((function(t) {
                                        return t !== e
                                    }))
                                }
                            }))
                        }
                    }(e)
                }), a(Object.values(e)))
            }

            function g(e) {
                O(e);
                return null
            }

            function E() {
                var e = l(y((function(e) {
                        var t = e.flashQueue,
                            n = function(e) {
                                var t, n, r, o = !0,
                                    i = !1,
                                    u = void 0;
                                try {
                                    for (var c, l = e.titles[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                                        var a = c.value;
                                        if (null != t && null != n) break;
                                        t = null != t ? t : a.base;
                                        n = null != n ? n : a.location;
                                        r = null != r ? r : a.subsection
                                    }
                                } catch (e) {
                                    i = !0;
                                    u = e
                                } finally {
                                    try {
                                        o || null == l.return || l.return()
                                    } finally {
                                        if (i) throw u
                                    }
                                }
                                return [t, r, n]
                            }(e).filter((function(e) {
                                return null != e
                            })).join(" | "),
                            r = function(e) {
                                var t = e.notificationCount;
                                return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                            }(e);
                        return ["".concat(r).concat(n), t[0]]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    o = l(r.useState(!1), 2),
                    i = o[0],
                    u = o[1],
                    c = r.useRef(0),
                    a = null == n ? void 0 : n.messages[c.current % n.messages.length];
                r.useEffect((function() {
                    if (null != n) {
                        if (!document.hasFocus() || !n.onlyWhenBlurred) {
                            var e = setInterval((function() {
                                if (c.current >= n.count) {
                                    b(n.id);
                                    u(!1)
                                } else u((function(e) {
                                    if (e) {
                                        c.current += 1;
                                        return !1
                                    }
                                    return !0
                                }))
                            }), n.interval);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                        b(n.id);
                        u(!1)
                    } else {
                        c.current = 0;
                        u(!1)
                    }
                }), [n]);
                return i ? a : t
            }

            function m() {
                r.useEffect((function() {
                    var e = function() {
                        y.setState({
                            flashQueue: []
                        })
                    };
                    document.addEventListener("focusin", e, {
                        capture: !0
                    });
                    return function() {
                        return document.removeEventListener("focusin", e, {
                            capture: !0
                        })
                    }
                }), [])
            }

            function I() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).skipsSettingDefaultPageTitle;
                m();
                var t = E();
                r.useEffect((function() {
                    e && t === s.base || (document.title = t)
                }), [e, t])
            }
        },
        58387: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(304548));

            function i(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            i(u, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            i(u, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };
            const a = {
                open: function() {
                    (0, o.openModalLazy)(u((function() {
                        var e, t;
                        return l(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(3790), n.e(88110), n.e(96043), n.e(67147)]).then(n.bind(n, 834883))];
                                case 1:
                                    e = o.sent(), t = e.default;
                                    return [2, function(e) {
                                        return (0, r.jsx)(t, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    c(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        980604: (e, t, n) => {
            n.d(t, {
                Z: () => ie
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(630631),
                c = n(744564),
                l = n(73457),
                a = n(773011),
                f = n(61209),
                s = n(840922),
                d = n(473903),
                p = n(499477),
                y = n(2590);
            var h = n(624325),
                v = n(18882),
                b = n(64234),
                O = n(664625),
                g = n(284610),
                E = n(5544),
                m = n(21372),
                I = n(567403),
                S = n(682776),
                w = n(179913),
                C = n(715107),
                j = n(464187),
                P = n(9430),
                _ = n(504275),
                T = n(72580),
                A = n(473708);

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function L(e, t) {
                return !t || "object" !== H(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return Z(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var H = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
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
                    var n, r = R(e);
                    if (t) {
                        var o = R(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }
            var V, x = "seenQSTutorial",
                F = 0,
                k = !1,
                G = !1,
                W = null,
                Q = [],
                q = null,
                z = 0,
                B = [],
                K = [];

            function Y() {
                G = I.Z.getGuildCount() >= 3 || o().size(f.Z.getMutablePrivateChannels()) >= 20;
                B = []
            }

            function X(e) {
                var t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Z,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
                        o = t.getChannel(e);
                    if (null == o) return null;
                    var i = (0, a.F6)(o, n, r);
                    switch (o.type) {
                        case y.d4z.DM:
                            var u = n.getUser(o.getRecipientId());
                            return null == u ? null : {
                                type: p.h8.USER,
                                record: u,
                                score: 0,
                                comparator: i
                            };
                        case y.d4z.GROUP_DM:
                            return {
                                type: p.h8.GROUP_DM, record: o, score: 0, comparator: i
                            };
                        case y.d4z.GUILD_VOICE:
                        case y.d4z.GUILD_STAGE_VOICE:
                            return {
                                type: p.h8.VOICE_CHANNEL, record: o, score: 0, comparator: i
                            };
                        default:
                            return {
                                type: p.h8.TEXT_CHANNEL, record: o, score: 0, comparator: i
                            }
                    }
                }(e);
                return null == t || null != W && W !== t.type ? null : t
            }

            function $() {
                var e, t, n = null !== (e = j.Z.getGuildId()) && void 0 !== e ? e : void 0,
                    r = null !== (t = C.Z.getChannelId()) && void 0 !== t ? t : void 0;
                switch (W) {
                    case l.h8.USER:
                        var i = O.default.getId();
                        return _.ZP.getRecentlyTalked(r, 100).filter((function(e) {
                            return e.record.id !== i
                        }));
                    case l.h8.APPLICATION:
                        return _.ZP.queryApplications({
                            query: "",
                            limit: 100,
                            fuzzy: !0
                        });
                    case l.h8.GUILD:
                        return _.ZP.queryGuilds({
                            query: "",
                            limit: 100,
                            fuzzy: !0
                        });
                    case l.h8.TEXT_CHANNEL:
                        return _.ZP.queryChannels({
                            query: "",
                            guildId: j.Z.getGuildId(),
                            limit: 100,
                            fuzzy: !0
                        });
                    case l.h8.VOICE_CHANNEL:
                        return _.ZP.queryChannels({
                            query: "",
                            guildId: j.Z.getGuildId(),
                            limit: 100,
                            fuzzy: !0,
                            filter: function() {
                                return !0
                            },
                            type: E.Zb
                        })
                }
                for (var u = [], c = [], a = 1; a < K.length; a += 1) {
                    var s = X(K[a]);
                    null != s && ((s.type !== l.h8.TEXT_CHANNEL && s.type !== l.h8.VOICE_CHANNEL || S.Z.can(y.Plq.VIEW_CHANNEL, s.record)) && c.push(s))
                }
                if (c.length > 0) {
                    var d;
                    (d = u).push.apply(d, [(0, l.o6)(A.Z.Messages.QUICKSWITCHER_LAST_CHANNEL)].concat(U(c)))
                }
                var p = function(e) {
                    var t = [];
                    g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach((function(n) {
                        var r = n.channelId;
                        if (!e(r)) {
                            var o = X(r);
                            null != o && t.push(o)
                        }
                    }));
                    return t
                }((function(e) {
                    return e === r || K.includes(e)
                }));
                if (p.length > 0) {
                    var h;
                    (h = u).push.apply(h, [(0, l.o6)(A.Z.Messages.QUICKSWITCHER_DRAFTS)].concat(U(p)))
                }
                var b = w.ZP.getMentionChannelIds().filter((function(e) {
                    return e !== r && !K.includes(e)
                })).map((function(e) {
                    return X(e)
                })).filter(T.lm).reverse();
                if (b.length > 0) {
                    u.push((0, l.o6)(A.Z.Messages.QUICKSWITCHER_MENTIONS));
                    u = u.concat(b)
                }
                if (null != n) {
                    var m = E.ZP.getSelectableChannelIds(n).filter((function(e) {
                        var t = f.Z.getChannel(e);
                        return !(null == t || e === r || K.includes(e) || P.Z.isChannelMuted(t.guild_id, e) || null != t.parent_id && P.Z.isChannelMuted(t.guild_id, t.parent_id)) && w.ZP.hasRelevantUnread(t)
                    })).map((function(e) {
                        return X(e)
                    })).filter((function(e) {
                        return e
                    }));
                    Object.values(v.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((function(e) {
                        for (var t in e) {
                            var n = X(t);
                            null != n && m.push(n)
                        }
                    }));
                    if (m.length > 0) {
                        u.push((0,
                            l.o6)(A.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS));
                        u = u.concat(m)
                    }
                }
                return o()(u).uniqBy((function(e) {
                    return e.record.id
                })).value()
            }

            function J(e, t) {
                switch (W) {
                    case l.h8.USER:
                        var n = I.Z.getGuild(j.Z.getGuildId());
                        e.unshift((0, l.o6)(null != n ? A.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                            name: n.name
                        }) : A.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS));
                        Q = e;
                        break;
                    case l.h8.TEXT_CHANNEL:
                        e.unshift((0, l.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS));
                        Q = e;
                        break;
                    case l.h8.VOICE_CHANNEL:
                        e.unshift((0, l.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS));
                        Q = e;
                        break;
                    case l.h8.GUILD:
                        e.unshift((0, l.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS));
                        Q = e;
                        break;
                    case l.h8.APPLICATION:
                        e.unshift((0, l.o6)(A.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS));
                        Q = e;
                        break;
                    default:
                        Q = e
                }
                if (t !== q) {
                    q = t;
                    z = Math.max(t.length, z);
                    F = (0, l.gJ)(l.a8.DOWN, -1, Q)
                } else {
                    var r = Q[F];
                    null != r && r.type === l.h8.HEADER && (F = (0, l.gJ)(l.a8.DOWN, F, Q))
                }
                oe.emitChange()
            }

            function ee(e) {
                var t, n = e.query,
                    r = e.queryMode,
                    o = (0,
                        h.O7)() ? void 0 : null !== (t = j.Z.getGuildId()) && void 0 !== t ? t : void 0,
                    i = new Set(["user:".concat(O.default.getId())]);
                null != o && i.add("guild:".concat(o));
                V = null != V ? V : new l.ZP(te, null, null != r ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: i
                });
                q = null;
                z = n.length;
                W = r;
                V.search(n)
            }

            function te(e, t) {
                if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n],
                                o = t[n];
                            if (r.record.id !== o.record.id) return !1
                        }
                        return !0
                    }(e = "" === (t = t.trim()).trim() ? $() : e, B)) {
                    B = e;
                    J(e, t)
                }
            }

            function ne() {
                q = null;
                z = 0;
                B = [];
                if (null != V) {
                    V.destroy();
                    V = null
                }
            }
            var re = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && D(e, t)
                }(n, e);
                var t = M(n);

                function n() {
                    N(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(m.ZP, I.Z, f.Z);
                    this.syncWith([b.Z], (function() {
                        return !0
                    }));
                    k = u.Z.get(x) || !1;
                    var t;
                    K = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                };
                r.getState = function() {
                    return {
                        channelHistory: K
                    }
                };
                r.isOpen = function() {
                    return null != V
                };
                r.getResultTotals = function(e) {
                    return null == V ? 0 : null == e ? V.results.reduce((function(e, t) {
                        return t.type !== l.h8.HEADER ? e + 1 : e
                    }), 0) : V.results.reduce((function(t, n) {
                        return n.type === e ? t + 1 : t
                    }), 0)
                };
                r.channelNoticePredicate = function(e, t) {
                    var n = Date.now() - t >= y.Hqc;
                    return G && n
                };
                r.getFrequentGuilds = function() {
                    return null != V ? V.queryGuilds("", 100) : null
                };
                r.getFrequentGuildsLength = function() {
                    return null != V ? V.queryGuilds("", 100).length : 0
                };
                r.getChannelHistory = function() {
                    return K
                };
                r.getProps = function() {
                    return {
                        theme: b.Z.theme,
                        query: null != V ? V.query : "",
                        queryMode: W,
                        results: Q,
                        selectedIndex: F,
                        seenTutorial: k,
                        maxQueryLength: z
                    }
                };
                return n
            }(i.ZP.PersistedStore);
            re.displayName = "QuickSwitcherStore";
            re.persistKey = "QuickSwitcherStore";
            var oe = new re(c.Z, {
                CONNECTION_OPEN: Y,
                CONNECTION_OPEN_SUPPLEMENTAL: Y,
                QUICKSWITCHER_SHOW: ee,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: ee,
                QUICKSWITCHER_HIDE: ne,
                OVERLAY_SET_INPUT_LOCKED: ne,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: ne,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, n = e.query,
                        r = e.queryMode;
                    if (null == V) return !1;
                    var o = null !== (t = j.Z.getGuildId()) && void 0 !== t ? t : null;
                    if (W !== r) {
                        V.setResultTypes(null != r ? [r] : null);
                        V.setLimit(null != r ? 100 : 5);
                        var i, u = null !== (i = j.Z.getGuildId()) && void 0 !== i ? i : void 0;
                        r === l.h8.USER && null != u ? V.setOptions({
                            userFilters: {
                                guild: u,
                                friends: !0
                            }
                        }, !0) : r === l.h8.VOICE_CHANNEL ? V.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : V.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    W = r;
                    V.search(n, W === l.h8.USER ? o : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    F = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (k) return !1;
                    k = !0;
                    u.Z.set(x, !0)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == t) return !1;
                    (K = K.filter((function(e) {
                        return e !== t
                    }))).unshift(t);
                    K.length > 4 && (K.length = 4)
                }
            });
            const ie = oe
        },
        788169: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r = n(202351),
                o = n(281110),
                i = n(744564),
                u = n(664625),
                c = n(539273),
                l = n(2590),
                a = n(897196);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
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

            function b(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var O, g = {},
                E = Object.freeze({});

            function m(e) {
                var t;
                return null !== (t = g[e]) && void 0 !== t ? t : E
            }

            function I(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = p({}, m(t));
                clearTimeout(r[n]);
                r[n] = function(e, t) {
                    return setTimeout((function() {
                        i.Z.dispatch({
                            type: "TYPING_STOP",
                            channelId: e,
                            userId: t
                        })
                    }), 1e4)
                }(t, n);
                g[t] = r
            }

            function S(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = g[t];
                if (null == r || null == r[n]) return !1;
                var o = p({}, r);
                clearTimeout(o[n]);
                delete o[n];
                g[t] = o
            }

            function w() {
                g = {}
            }
            var C = function(e) {
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
                }(n, e);
                var t = b(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getTypingUsers = function(e) {
                    return m(e)
                };
                r.isTyping = function(e, t) {
                    return null != m(e)[t]
                };
                return n
            }(r.ZP.Store);
            C.displayName = "TypingStore";
            const j = new C(i.Z, {
                TYPING_START: I,
                TYPING_STOP: S,
                TYPING_START_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (t === a.V) return !1;
                    if (null != O && O.channelId !== t) {
                        null != O.timeout && clearTimeout(O.timeout);
                        O = null
                    }
                    var r = Date.now();
                    if (null != O && (null != O.timeout || O.prevSend + 8e3 > r)) return !1;
                    var f = null == O || O.prevSend > r - 16e3 ? 1500 : 0,
                        s = setTimeout((function() {
                            if (null != O && O.channelId === t && n === u.default.getId() && null != O.timeout) {
                                O.timeout = null;
                                (function(e) {
                                    var t = m(e);
                                    return t === E ? 0 : Object.keys(t).length
                                })(t) > 5 || o.ZP.post({
                                    url: l.ANM.TYPING(t),
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    if (200 === e.status) {
                                        var n, r, o = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                            u = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                        o > 0 && i.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: c.S.SendMessage,
                                            cooldownMs: o
                                        });
                                        u > 0 && i.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: c.S.CreateThread,
                                            cooldownMs: u
                                        })
                                    }
                                }))
                            }
                        }), f);
                    O = {
                        channelId: t,
                        timeout: s,
                        prevSend: r
                    };
                    return I({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (null != O && O.channelId === t && null != O.timeout) {
                        clearTimeout(O.timeout);
                        O = null;
                        return S({
                            channelId: t,
                            userId: n
                        })
                    }
                    return !1
                },
                CONNECTION_OPEN: w,
                OVERLAY_INITIALIZE: w,
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message.author;
                    e.optimistic && function(e) {
                        if (null == O || O.channelId !== e) return !1;
                        null != O.timeout && clearTimeout(O.timeout);
                        O = null
                    }(t);
                    return S({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = !1,
                h = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                v = a({}, h);

            function b() {
                v.affinityUserIds = new Set(v.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        v.userAffinities = e.userAffinities;
                        v.affinityUserIds = new Set(e.affinityUserIds);
                        v.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], b)
                };
                r.needsRefresh = function() {
                    return Date.now() - v.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return v
                };
                r.getUserAffinities = function() {
                    return v.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return v.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "UserAffinitiesStore";
            O.persistKey = "UserAffinitiesStore";
            O.migrations = [function(e) {
                return null
            }];
            const g = new O(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    v.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    v.lastFetched = Date.now();
                    b();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    v = a({}, h)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => H
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                c = n(744564),
                l = n(283513),
                a = n(624325),
                f = n(996344),
                s = n(48315),
                d = n(382060),
                p = n(61209),
                y = n(567403),
                h = n(179913),
                v = n(9430),
                b = n(473903),
                O = n(102921),
                g = n(897196);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function I(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var w, C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function j(e) {
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
                    var n, r = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(w || (w = {}));
            var P = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? w.FAVORITE : w.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function _(e) {
                var t, n, r = null !== (n = null !== (t = h.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var u = o()(i).valueOf(),
                        c = O.Z.fromTimestamp(u);
                    return O.Z.compare(r, c) > 0 ? r : c
                }
                return r
            }

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: v.Z.isMessagesFavorite(e.id) && (0, l.cn)(),
                    isRequest: f.Z.isMessageRequest(e.id) || s.Z.isSpam(e.id)
                }
            }

            function A() {
                P.clear();
                Object.values(p.Z.getMutablePrivateChannels()).forEach((function(e) {
                    P.set(e.id, T(e))
                }));
                (0, l.cn)() && (0, a.x7)() && v.Z.getAddedToMessages().forEach((function(e) {
                    var t = p.Z.getChannel(e);
                    null != t && (0, d.zi)(t.type) && P.set(t.id, T(t))
                }))
            }

            function Z() {
                var e = p.Z.getMutablePrivateChannels();
                for (var t in e) P.set(t, T(e[t]))
            }
            var N, R, L, D = (N = [], R = [], L = [], function() {
                    var e = P.values(w.FAVORITE),
                        t = P.values(w.DEFAULT);
                    if (N !== e || R !== t) {
                        L = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return L.push(t)
                        }));
                        N = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return L.push(t)
                        }));
                        R = t
                    }
                    return L
                }),
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = j(n);

                    function n() {
                        E(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(p.Z, y.Z, b.default, f.Z, v.Z);
                        this.syncWith([v.Z, f.Z], A)
                    };
                    r.getPrivateChannelIds = function() {
                        return D()
                    };
                    r.getSortedChannels = function() {
                        return [P.values(w.FAVORITE), P.values(w.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        P.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            U.displayName = "PrivateChannelSortStore";
            const H = new U(c.Z, {
                CONNECTION_OPEN: A,
                CONNECTION_OPEN_SUPPLEMENTAL: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED: Z,
                CACHE_LOADED_LAZY: Z,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, d.hv)(e.type) || P.has(e.id)) && P.set(e.id, T(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, d.hv)(t.type)) return !1;
                    if (t.id === g.V) return !1;
                    P.set(t.id, T(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return P.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!P.has(t)) return !1;
                    var r = p.Z.getChannel(t);
                    return null != r && P.set(t, T(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return P.delete(t)
                }
            })
        },
        971611: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                c = n(304548),
                l = n(224477),
                a = n.n(l);

            function f(e) {
                var t = e.children,
                    n = e["aria-label"],
                    i = e.className,
                    l = e.position,
                    f = o.useRef(null),
                    s = null != n ? n : "string" == typeof t && t;
                return (0, r.jsx)(c.Tooltip, {
                    position: null != l ? l : "top",
                    delay: 500,
                    text: t,
                    "aria-label": s,
                    children: function(n) {
                        var o = n.onMouseEnter,
                            c = n.onMouseLeave;
                        return (0, r.jsx)("div", {
                            className: u()(i, a().overflow),
                            ref: f,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: function() {
                                var e = f.current;
                                null != e && e.offsetWidth < e.scrollWidth && (null == o || o())
                            },
                            onMouseLeave: c,
                            children: t
                        })
                    }
                })
            }
        },
        466317: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(324235),
                u = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    s = void 0 === c ? "currentColor" : c,
                    d = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return 16 === n || 16 === i ? (0, r.jsx)("svg", a(l({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        fill: s,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                    })
                })) : (0, r.jsx)("svg", a(l({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: s,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    })
                }))
            }), i.e)
        },
        694554: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                u = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            f(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                        className: a,
                        fill: l
                    }), (0, r.jsx)("path", {
                        d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                        className: a,
                        fill: l
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    f = void 0 === o ? 24 : o,
                    s = e.color,
                    d = void 0 === s ? i.Z.colors.INTERACTIVE_NORMAL : s,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    h = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: f,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm11 14.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1ZM7 8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v.36a.5.5 0 0 1 .342-.474l2-.667a.5.5 0 0 1 .658.475v4.612a.5.5 0 0 1-.658.475l-2-.667A.5.5 0 0 1 14 11.64V12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        },
        816810: (e, t, n) => {
            n.d(t, {
                $: () => r
            });
            var r;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(r || (r = {}));
            new Set([1, 2, 4])
        }
    }
]);