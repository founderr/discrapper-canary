"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58905], {
        758905: (e, n, t) => {
            t.d(n, {
                S: () => Te,
                Z: () => Ze
            });
            var r = t(785893),
                o = t(667294),
                a = t(294184),
                c = t.n(a),
                i = t(202351),
                l = t(513328),
                s = t(304548),
                u = t(656645),
                f = t(968449),
                d = t(597246),
                p = t(579581),
                O = t(159895),
                b = t(799066),
                g = t(473903),
                v = t(116094),
                m = t(492886),
                y = t(296872),
                h = t(359721),
                j = t(504001),
                E = t(971402),
                A = t(153686),
                M = t(19585),
                _ = t(115617),
                I = t(550254),
                w = t(168075),
                x = t(795308),
                P = t(633878);

            function k(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function C(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function N(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function S(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function D(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function R(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const T = (0, w.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    c = e.color,
                    i = void 0 === c ? "currentColor" : c,
                    l = e.className,
                    s = e.foreground,
                    u = R(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", D(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            S(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, P.Z)(u)), {
                    className: l,
                    width: t,
                    height: a,
                    viewBox: "0 0 32 32",
                    children: (0, r.jsx)("path", {
                        className: s,
                        d: "M10.5 24c0-3.682 2.318-6 6-6s6 2.318 6 6h-12zM16.5 16a4 4 0 100-8 4 4 0 000 8zM29.166 15.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 15h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 15zM31.167 16.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 11.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 11h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 11zM31.167 12.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 7.334H28.5a.335.335 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.335.335 0 00-.334-.333zM26.5 7h-1.333a.335.335 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333V7.333A.335.335 0 0026.5 7zM31.167 8.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 23.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 23h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 23zM31.167 24.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 19.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 19h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 19zM31.167 20.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 15.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 15H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 15zM1.833 16.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 11.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 11H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 11zM1.833 12.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 7.334h-.667a.335.335 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.335.335 0 00-.333-.333zM7.833 7H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333V7.333A.335.335 0 007.833 7zM1.833 8.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 23.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 23H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 23zM1.833 24.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 19.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 19H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 19zM1.833 20.333a.333.333 0 100-.667.333.333 0 000 .667z",
                        fill: i
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    c = e.color,
                    i = void 0 === c ? x.Z.colors.INTERACTIVE_NORMAL : c,
                    l = e.colorClass,
                    s = void 0 === l ? "" : l,
                    u = N(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", C(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            k(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, P.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M21.707 2.293a1 1 0 0 1 0 1.414l-4.924 4.924c-.122.123-.33.086-.414-.065a5.02 5.02 0 0 0-.853-1.121.26.26 0 0 1-.006-.369l4.783-4.783a1 1 0 0 1 1.414 0ZM20 20.6c0 .255.365.45.545.269l1.162-1.162a1 1 0 0 0-1.414-1.414l-.408.408a.255.255 0 0 0-.068.236c.12.535.183 1.092.183 1.663Zm-16 0c0 .205.018.405.053.6a.261.261 0 0 1-.07.231l-.276.276a1 1 0 0 1-1.414-1.414l1.346-1.346c.187-.187.533.016.486.275A7.643 7.643 0 0 0 4 20.6ZM16.707 3.707 14.12 6.295a.258.258 0 0 1-.278.055A4.987 4.987 0 0 0 12 6c-.147 0-.23-.184-.126-.288l3.419-3.42a1 1 0 1 1 1.414 1.415ZM7 11c0-.148-.184-.23-.288-.126l-4.42 4.419a1 1 0 1 0 1.415 1.414l3.588-3.588a.258.258 0 0 0 .055-.278A4.987 4.987 0 0 1 7 11Zm11.226 4.36a.256.256 0 0 0-.012.346c.313.37.59.771.828 1.197.083.15.287.182.407.062l2.258-2.258a1 1 0 0 0-1.414-1.414l-2.067 2.066Zm3.481-5.653-4.632 4.632a.256.256 0 0 1-.327.027 7.593 7.593 0 0 0-.452-.293.27.27 0 0 1-.086-.375c.379-.59.637-1.264.74-1.989a.257.257 0 0 1 .072-.145l3.27-3.271a1 1 0 1 1 1.415 1.414Zm-10-7.414a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Zm-5 1.414a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3ZM15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.6a5.6 5.6 0 0 1 5.6-5.6h.8a5.6 5.6 0 0 1 5.6 5.6 1.4 1.4 0 0 1-1.4 1.4.166.166 0 0 1-.16-.124c-.19-.7-.44-1.352-.68-1.884-.11-.243-.425-.147-.399.118l.08.79a1 1 0 0 1-.996 1.1h-4.89a1 1 0 0 1-.995-1.1l.079-.79c.027-.265-.289-.361-.399-.118-.24.532-.49 1.184-.68 1.884A.166.166 0 0 1 7.4 22 1.4 1.4 0 0 1 6 20.6Z",
                        clipRule: "evenodd",
                        className: s
                    })
                }))
            }));
            var Z = t(655402),
                B = t(406493),
                U = t(778613),
                V = t(958125),
                L = t(531441),
                z = t(786170),
                G = t(652591),
                H = t(775173),
                W = t(102921),
                K = t(266348),
                F = t(232806),
                $ = t(2590),
                q = t(630670),
                Y = t(921431),
                X = t(203600),
                J = t(473708),
                Q = t(750812),
                ee = t.n(Q);

            function ne(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function te(e, n, t, r, o, a, c) {
                try {
                    var i = e[a](c),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function re(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(n, t);

                        function c(e) {
                            te(a, r, o, c, i, "next", e)
                        }

                        function i(e) {
                            te(a, r, o, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function oe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ae(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        oe(e, n, t[n])
                    }))
                }
                return e
            }

            function ce(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function ie(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function le(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            c = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(c = (r = t.next()).done); c = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ne(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ne(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var se = function(e, n) {
                var t, r, o, a, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            c.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(a);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                a = n.call(e, c)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function ue(e) {
                var n, t = e.icon,
                    o = e.iconClassName,
                    a = e.onClick,
                    i = e.text,
                    l = e.children,
                    u = e.className,
                    f = e.selected,
                    d = void 0 !== f && f,
                    p = e.disabled,
                    O = void 0 !== p && p,
                    b = e.onMouseLeave,
                    g = e.onBlur;
                return (0, r.jsxs)(s.Clickable, {
                    className: c()(u, ee().backgroundOption, (n = {}, oe(n, ee().backgroundOptionSelected, d), oe(n, ee().backgroundOptionDisabled, O), n)),
                    onMouseLeave: b,
                    onBlur: g,
                    onClick: O ? void 0 : a,
                    children: [d ? (0, r.jsx)("div", {
                        className: ee().backgroundOptionRing
                    }) : null, (0, r.jsxs)("div", {
                        className: ee().backgroundOptionInner,
                        children: [l, (0, r.jsxs)("div", {
                            className: ee().backgroundOptionContent,
                            children: [(0, r.jsx)(t, {
                                className: c()(ee().backgroundIconOptionIcon, o)
                            }), (0, r.jsx)(s.Text, {
                                className: ee().backgroundOptionText,
                                color: "none",
                                variant: "text-sm/normal",
                                children: i
                            })]
                        })]
                    })]
                })
            }

            function fe(e) {
                var n = e.option,
                    t = e.source,
                    a = e.isAnimated,
                    c = le(o.useState(!1), 2),
                    i = c[0],
                    l = c[1];
                o.useEffect((function() {
                    (new Image).src = t
                }), [t]);
                if (!a || null == n) return (0, r.jsx)("div", {
                    className: ee().backgroundImageOption,
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                });
                var s = (0, H.rI)({
                    userId: n.user_id,
                    assetId: n.id,
                    assetHash: n.asset,
                    size: 720,
                    canAnimate: !1
                });
                return (0, r.jsx)("img", {
                    onMouseMove: function() {
                        return l(!0)
                    },
                    onMouseLeave: function() {
                        return l(!1)
                    },
                    className: ee().backgroundImageOption,
                    src: i ? t : s,
                    alt: n.id
                })
            }

            function de(e) {
                var n = function() {
                        if (null != b && h) {
                            _.Kw(b);
                            G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
                                type: X.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                                location: v.location,
                                location_stack: m
                            })
                        }
                    },
                    o = e.option,
                    a = e.source,
                    l = e.selected,
                    u = void 0 !== l && l,
                    f = e.onSelectOption,
                    d = e.isAnimatedImage,
                    O = e.isVideo,
                    b = e.hotspotLocation,
                    g = ie(e, ["option", "source", "selected", "onSelectOption", "isAnimatedImage", "isVideo", "hotspotLocation"]),
                    v = (0, p.O)(),
                    m = (0, M.Z)(A.Z.VIDEO_BACKGROUND_IMAGE_OPTION).analyticsLocations,
                    h = (0, i.e7)([I.Z], (function() {
                        return null != b && I.Z.hasHotspot(b)
                    })),
                    j = O ? (0, r.jsx)(z.Z, {
                        className: ee().backgroundImageOption,
                        src: a,
                        loop: !0,
                        playOnHover: !0,
                        muted: !0
                    }) : (0, r.jsx)(fe, {
                        isAnimated: d,
                        option: (0, y.rD)(o) ? o : void 0,
                        source: a
                    });
                return (0, r.jsxs)(s.Clickable, ce(ae({}, g), {
                    className: c()(ee().backgroundOption, oe({}, ee().backgroundOptionSelected, u)),
                    onClick: function() {
                        return f(o)
                    },
                    onContextMenu: function(e) {
                        return (0, E.jW)(e, re((function() {
                            var e, n;
                            return se(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, t.e(84264).then(t.bind(t, 284264))];
                                    case 1:
                                        e = a.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, ce(ae({}, e), {
                                                backgroundOption: o,
                                                optionIsInUse: u
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    children: [u ? (0, r.jsx)("div", {
                        className: ee().backgroundOptionRing
                    }) : null, (0, r.jsx)("div", {
                        onFocus: n,
                        onMouseEnter: n,
                        className: ee().backgroundOptionInner,
                        children: j
                    }), O || d ? (0, r.jsx)(V.Z, {
                        className: ee().playIcon
                    }) : null, h && (0, r.jsx)(L.IG, {
                        text: J.Z.Messages.NEW,
                        className: ee().newTextBadge
                    })]
                }))
            }

            function pe() {
                return (0, r.jsxs)("div", {
                    className: ee().customBackgroundTooltip,
                    children: [(0, r.jsx)(B.Z, {
                        className: ee().customBackgroundTooltipIcon
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
                    })]
                })
            }

            function Oe(e) {
                var n = e.onClick,
                    t = e.tooltipText,
                    o = e.disabled,
                    a = void 0 !== o && o,
                    c = function() {
                        _.Kw(q.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
                    },
                    l = (0, i.e7)([I.Z], (function() {
                        return I.Z.hasHotspot(q.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
                    })),
                    u = l ? J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : t;
                return (0, r.jsxs)(s.TooltipContainer, {
                    text: u,
                    className: ee().newBackgroundTooltipContainer,
                    children: [(0, r.jsxs)(ue, {
                        className: ee().backgroundOptionBlurred,
                        disabled: a,
                        icon: Z.Z,
                        iconClassName: ee().uploadIconOption,
                        onClick: n,
                        onMouseLeave: c,
                        onBlur: c,
                        text: (0, r.jsxs)("div", {
                            className: ee().backgroundCustomInlineUpsell,
                            children: [(0, r.jsx)(B.Z, {
                                className: ee().backgroundCustomInlineUpsellIcon
                            }), (0, r.jsx)("div", {
                                className: ee().overflowEllipsis,
                                children: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
                            })]
                        }),
                        children: [(0, r.jsx)("div", {
                            className: ee().backgroundCustomInlineUpsellBackground
                        }), (0, r.jsx)("div", {
                            className: ee().backgroundCustomInlineUpsellBackgroundDarkener
                        })]
                    }), l && (0, r.jsx)(L.IG, {
                        text: J.Z.Messages.NEW,
                        className: ee().newTextBadge
                    })]
                })
            }

            function be(e) {
                var n = e.onClick,
                    t = (0, p.O)(),
                    a = (0, M.Z)(A.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL).analyticsLocations;
                o.useEffect((function() {
                    G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: X.cd.VIDEO_BACKGROUNDS_INLINE,
                        location: t.location,
                        location_stack: a
                    })
                }), []);
                return (0, r.jsx)(Oe, {
                    onClick: n,
                    tooltipText: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
                })
            }

            function ge(e) {
                var n = e.onAddBackgroundImage,
                    o = e.disabled,
                    a = (0, s.useModalContext)(),
                    c = o ? J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({
                        maxCustomBackgrounds: 25
                    }) : J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM,
                    i = [{
                        name: J.Z.Messages.IMAGES,
                        extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
                    }];
                return (0, r.jsx)(Oe, {
                    disabled: o,
                    onClick: function() {
                        (0, s.openModalLazy)(re((function() {
                            var e, o;
                            return se(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(29392), t.e(39685), t.e(47007), t.e(69876), t.e(6543), t.e(27499), t.e(79913), t.e(19493), t.e(64466), t.e(92465), t.e(45353), t.e(73727), t.e(87440), t.e(52555), t.e(54602), t.e(61953), t.e(6565), t.e(20419), t.e(36952), t.e(94302), t.e(28629), t.e(70535), t.e(95238)]).then(t.bind(t, 597264))];
                                    case 1:
                                        e = a.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(o, ae({
                                                maxFileSizeBytes: F.SJ,
                                                onComplete: n,
                                                uploadType: Y.pC.VIDEO_BACKGROUND,
                                                filters: i,
                                                modalTitle: J.Z.Messages.UPLOAD_BACKGROUND,
                                                imageSpecifications: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
                                                uploadOptionTitle: J.Z.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
                                                showUpsellHeader: !0
                                            }, e))
                                        }]
                                }
                            }))
                        })), {
                            contextKey: a
                        })
                    },
                    tooltipText: c
                })
            }

            function ve(e) {
                var n = e.canUseCustomBackgrounds,
                    t = e.customBackgroundOptions,
                    a = e.selectedOption,
                    c = e.onSelectOption,
                    i = e.onUpsellClick,
                    l = e.onAddBackgroundImage,
                    u = e.smallerOptions,
                    f = o.useMemo((function() {
                        return t.sort((function(e, n) {
                            return null == e.last_used || null == n.last_used ? W.Z.compare(n.id, e.id) : new Date(n.last_used).getTime() - new Date(e.last_used).getTime()
                        }))
                    }), [t]),
                    d = f.length >= 25,
                    p = (0, M.Z)(A.Z.VIDEO_BACKGROUND_OPTIONS).AnalyticsLocationProvider,
                    O = Object.values((0, K.Z)()).sort((function(e, n) {
                        return F.E1[e.id] - F.E1[n.id]
                    }));
                return (0, r.jsx)(p, {
                    children: (0, r.jsxs)("div", {
                        className: u ? ee().backgroundOptionsSmall : ee().backgroundOptionsLarge,
                        children: [(0, r.jsx)(ue, {
                            selected: null == a,
                            icon: U.Z,
                            iconClassName: ee().noneOptionIcon,
                            onClick: function() {
                                return c(null)
                            },
                            text: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
                        }), (0, r.jsx)(ue, {
                            className: ee().backgroundOptionBlurred,
                            selected: a === F.f7,
                            icon: T,
                            iconClassName: ee().blurOptionIcon,
                            onClick: function() {
                                return c(F.f7)
                            },
                            text: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
                            children: (0, r.jsx)("div", {
                                className: ee().backgroundOptionBlurBackground
                            })
                        }), n ? (0, r.jsx)(ge, {
                            onAddBackgroundImage: l,
                            disabled: d
                        }) : (0, r.jsx)(be, {
                            onClick: i
                        }), f.map((function(e) {
                            return (0, r.jsx)(s.Tooltip, {
                                text: (0, r.jsx)(pe, {}),
                                "aria-label": J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
                                children: function(n) {
                                    var t = (0, H.rI)({
                                        userId: e.user_id,
                                        assetId: e.id,
                                        assetHash: e.asset,
                                        size: 720
                                    });
                                    return null == t ? null : (0, o.createElement)(de, ce(ae({}, n), {
                                        key: e.id,
                                        option: e,
                                        source: t,
                                        selected: (0, y.rD)(a) && a.id === e.id,
                                        onSelectOption: c,
                                        isVideo: (0, H.ay)(e.asset),
                                        isAnimatedImage: (0, H.xR)(e.asset)
                                    }))
                                }
                            }, e.id)
                        })), O.map((function(e) {
                            var n = !0 === e.isVideo;
                            return (0, r.jsx)(s.Tooltip, {
                                text: e.name,
                                "aria-label": e.name,
                                children: function(t) {
                                    return (0, o.createElement)(de, ce(ae({}, t), {
                                        key: e.id,
                                        option: e.id,
                                        source: e.source,
                                        selected: a === e.id,
                                        onSelectOption: c,
                                        isVideo: n,
                                        isAnimatedImage: !1,
                                        hotspotLocation: e.hotspotLocation
                                    }))
                                }
                            }, e.id)
                        }))]
                    })
                })
            }
            var me = t(964525),
                ye = t(816725),
                he = t.n(ye);

            function je(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ee(e, n, t, r, o, a, c) {
                try {
                    var i = e[a](c),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function Ae(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(n, t);

                        function c(e) {
                            Ee(a, r, o, c, i, "next", e)
                        }

                        function i(e) {
                            Ee(a, r, o, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function Me(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _e(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Me(e, n, t[n])
                    }))
                }
                return e
            }

            function Ie(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function we(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            c = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(c = (r = t.next()).done); c = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return je(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return je(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var xe = function(e, n) {
                var t, r, o, a, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            c.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(a);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                a = n.call(e, c)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function Pe(e) {
                var n = e.onLearnMore,
                    a = e.selectedBackgroundOption,
                    c = e.onSelectBackgroundOption,
                    l = e.currentDeviceId,
                    u = e.smallerBackgroundOptions,
                    f = (0, i.e7)([g.default], (function() {
                        return g.default.getCurrentUser()
                    })),
                    E = we(o.useState(null), 2),
                    A = E[0],
                    M = E[1];
                (0, O.Z$)(b.Z);
                var _ = (0, j.Z)(),
                    I = v.ZP.canUseCustomBackgrounds(f),
                    w = (0, i.cj)([m.Z], (function() {
                        return I ? m.Z.videoFilterAssets : {}
                    })),
                    x = o.useMemo((function() {
                        return Object.values(w).filter((function(e) {
                            return e.type === F.xV.BACKGROUND
                        }))
                    }), [w]),
                    P = (0, p.O)();
                o.useEffect((function() {
                    _ ? (0, h.FU)(a, l, {
                        track: !1
                    }).catch((function() {
                        return c(null)
                    })) : null != a && c(null)
                }), [l]);
                var k = function(e) {
                    c(e);
                    (0, h.FU)(e, l, {
                        location: P.location
                    }).then((function() {
                        return M(null)
                    })).catch((function() {
                        M(J.Z.Messages.VIDEO_BACKGROUND_ERROR_APPLY);
                        (0, h.FU)(null, l, {
                            location: P.location
                        })
                    }))
                };
                return _ ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Heading, {
                        className: he().spacingTop24,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: J.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
                    }), null != A ? (0, r.jsx)(s.FormErrorBlock, {
                        className: he().videoBackgroundError,
                        children: A
                    }) : null, (0, r.jsx)(ve, {
                        canUseCustomBackgrounds: I,
                        customBackgroundOptions: x,
                        selectedOption: a,
                        onSelectOption: k,
                        onUpsellClick: function() {
                            (0, s.openModalLazy)(Ae((function() {
                                var e, o;
                                return xe(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(29392), t.e(39685), t.e(47007), t.e(69876), t.e(6543), t.e(67145), t.e(27499), t.e(79913), t.e(19493), t.e(64466), t.e(92465), t.e(45353), t.e(73727), t.e(87440), t.e(52555), t.e(54602), t.e(61953), t.e(6565), t.e(20419), t.e(36952), t.e(94302), t.e(28629), t.e(70535), t.e(71692)]).then(t.bind(t, 982871))];
                                        case 1:
                                            e = a.sent(), o = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(o, Ie(_e({}, e), {
                                                    onLearnMore: n,
                                                    analyticsSource: Ie(_e({}, P.location), {
                                                        object: $.qAy.BUTTON_CTA
                                                    })
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        },
                        onAddBackgroundImage: function(e, n) {
                            var t, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return new Promise((t = Ae((function(t) {
                                var o, a;
                                return xe(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            c.trys.push([0, 2, , 3]);
                                            return [4, (0, d.Ff)(e, F.xV.BACKGROUND)];
                                        case 1:
                                            o = c.sent();
                                            k(o);
                                            (0, y.g5)(o, n.type === me.m.MP4, r);
                                            M(null);
                                            return [3, 3];
                                        case 2:
                                            a = c.sent();
                                            M(a.message);
                                            return [3, 3];
                                        case 3:
                                            t();
                                            return [2]
                                    }
                                }))
                            })), function(e) {
                                return t.apply(this, arguments)
                            }))
                        },
                        smallerOptions: u
                    })]
                }) : null
            }
            var ke = t(964517),
                Ce = t(895598),
                Ne = t.n(Ce);

            function Se(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function De(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Re(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            c = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(c = (r = t.next()).done); c = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Se(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Se(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Te() {
                var e = Re(o.useState(!1), 2),
                    n = e[0],
                    t = e[1],
                    a = (0, i.e7)([ke.Z], (function() {
                        return ke.Z.isMediaFilterSettingLoading()
                    }));
                o.useEffect((function() {
                    var e = new l.V7;
                    if (a) e.start(150, (function() {
                        t(!0)
                    }));
                    else {
                        e.stop();
                        t(!1)
                    }
                    return function() {
                        return e.stop()
                    }
                }), [a]);
                return n ? (0, r.jsx)("div", {
                    className: Ne().filterLoadingIndicator,
                    children: (0, r.jsx)(s.Spinner, {})
                }) : null
            }

            function Ze(e) {
                var n = e.hideDeviceSelector,
                    t = void 0 !== n && n,
                    a = e.hideDeviceHeader,
                    l = void 0 !== a && a,
                    p = e.onLearnMore,
                    O = e.selectedBackgroundOption,
                    b = e.onSelectBackgroundOption,
                    g = e.renderCamera,
                    v = e.hidePreviewToggle,
                    m = void 0 !== v && v,
                    y = e.showSmallBackgroundOptions,
                    h = void 0 !== y && y,
                    j = (0, i.e7)([ke.Z], (function() {
                        return ke.Z.getVideoDeviceId()
                    })),
                    E = (0, i.Wu)([ke.Z], (function() {
                        return Object.values(ke.Z.getVideoDevices())
                    })),
                    A = f.qF.useSetting(),
                    M = E.map((function(e) {
                        return {
                            value: e.id,
                            label: e.name
                        }
                    }));
                o.useEffect((function() {
                    (0, d.XV)()
                }), []);
                return (0, r.jsxs)(r.Fragment, {
                    children: [g(j), ke.Z.isEnabled() ? null : (0, r.jsx)(s.Text, {
                        className: Ne().permissionWarning,
                        color: "interactive-normal",
                        variant: "text-sm/normal",
                        children: J.Z.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
                            onEnableClick: u.Z.enable
                        })
                    }), m ? null : (0, r.jsx)(s.FormSwitch, {
                        className: Ne().previewToggle,
                        note: J.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
                        onChange: function(e) {
                            f.qF.updateSetting(e);
                            G.default.track($.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                                always_preview_video: e
                            })
                        },
                        value: A,
                        hideBorder: !0,
                        children: (0, r.jsx)("div", {
                            className: Ne().cameraPreviewTitle,
                            children: J.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                        })
                    }), t ? null : (0, r.jsxs)(r.Fragment, {
                        children: [l ? null : (0, r.jsx)(s.Heading, {
                            className: Ne().spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: J.Z.Messages.CAMERA_PREVIEW_CAMERA
                        }), (0, r.jsx)(s.SingleSelect, {
                            placeholder: J.Z.Messages.CHANGE_CAMERA,
                            className: c()(Ne().selector, De({}, Ne().selectorNoHeader, l)),
                            options: M,
                            value: j,
                            onChange: function(e) {
                                return u.Z.setVideoDevice(e)
                            }
                        })]
                    }), (0, r.jsx)(Pe, {
                        onLearnMore: p,
                        selectedBackgroundOption: O,
                        onSelectBackgroundOption: b,
                        currentDeviceId: j,
                        smallerBackgroundOptions: h
                    })]
                })
            }
        }
    }
]);