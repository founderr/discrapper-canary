"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47057], {
        54415: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => k
            });
            var n = r(785893),
                o = r(667294),
                c = r(202351),
                l = r(304548),
                i = r(281110),
                u = r(744564),
                a = r(2590);

            function s(e, t, r, n, o, c, l) {
                try {
                    var i = e[c](l),
                        u = i.value
                } catch (e) {
                    r(e);
                    return
                }
                i.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function l(e) {
                            s(c, n, o, l, i, "next", e)
                        }

                        function i(e) {
                            s(c, n, o, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var p = function(e, t) {
                var r, n, o, c, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function i(c) {
                    return function(i) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                (n = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            l.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(c);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                c = t.call(e, l)
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
                        }([c, i])
                    }
                }
            };

            function y() {
                return (y = f((function(e) {
                    var t;
                    return p(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, i.ZP.get({
                                    url: a.ANM.STORE_EULA(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                t = r.sent();
                                u.Z.dispatch({
                                    type: "EULA_FETCH_SUCCESS",
                                    eula: t.body
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function h(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }
            var j = {};
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(r, e);
                var t = g(r);

                function r() {
                    d(this, r);
                    return t.apply(this, arguments)
                }
                r.prototype.getEULA = function(e) {
                    return j[e]
                };
                return r
            }(c.ZP.Store);
            m.displayName = "EULAStore";
            const w = new m(u.Z, {
                EULA_FETCH_SUCCESS: function(e) {
                    var t = e.eula;
                    j[t.id] = t
                }
            });
            var P = r(107364),
                S = r(749266),
                x = r(473708),
                E = r(337968),
                R = r.n(E);

            function k(e) {
                var t, r = e.eulaId,
                    i = e.transitionState,
                    u = e.onClose,
                    a = (0, c.e7)([w], (function() {
                        return w.getEULA(r)
                    }));
                o.useEffect((function() {
                    ! function(e) {
                        y.apply(this, arguments)
                    }(r)
                }), [r]);
                var s = null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : x.Z.Messages.LOADING,
                    f = null != a ? (0, n.jsx)(S.Z, {
                        children: a.content,
                        className: R().markdown
                    }) : (0, n.jsx)(l.Spinner, {
                        className: R().spinner
                    });
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: i,
                    size: l.ModalSize.SMALL,
                    "aria-label": s,
                    children: [(0,
                        n.jsxs)(l.ModalHeader, {
                        justify: P.Z.Justify.BETWEEN,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: s
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            onClick: u
                        })]
                    }), (0, n.jsx)(l.ModalContent, {
                        children: f
                    })]
                })
            }
        },
        775428: (e, t, r) => {
            r.d(t, {
                d: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                c = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
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
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    y = e.colorClass,
                    d = void 0 === y ? "" : y,
                    b = e.secondaryColor,
                    h = void 0 === b ? "transparent" : b,
                    O = e.secondaryColorClass,
                    v = void 0 === O ? "" : O,
                    g = u(e, ["width", "height", "color", "colorClass", "secondaryColor", "secondaryColorClass"]);
                return (0, n.jsxs)("svg", i(function(e) {
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
                }({}, (0, c.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: d
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: v
                    })]
                }))
            }
        },
        965309: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                c = r.n(o),
                l = r(260746),
                i = r.n(l);

            function u(e) {
                var t = e.children,
                    r = e.tag,
                    o = e.className;
                r = null != r ? r : "h3";
                return (0, n.jsx)(r, {
                    className: c()(i().title, o),
                    children: t
                })
            }
        },
        749266: (e, t, r) => {
            r.d(t, {
                Z: () => N
            });
            var n = r(785893),
                o = r(667294),
                c = r(294184),
                l = r.n(c),
                i = r(120053),
                u = r.n(i),
                a = r(91174),
                s = r(544194),
                f = r(25978),
                p = r(965309),
                y = r(465672),
                d = r.n(y),
                b = r(840348),
                h = r.n(b);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function j(e) {
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

            function w(e, t) {
                return !t || "object" !== x(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function P(e, t) {
                P = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return P(e, t)
            }
            var S, x = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var r, n = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return w(this, r)
                }
            }
            var R = new RegExp("https?://".concat(null !== (S = window.GLOBAL_ENV.CDN_HOST) && void 0 !== S ? S : ""));

            function k(e) {
                return "string" == typeof e.content ? e.content : _(e.content)
            }
            var C = m(j({}, u().defaultRules), {
                    heading: m(j({}, u().defaultRules.heading), {
                        react: function(e, t, r) {
                            var o = "h".concat(e.level);
                            return (0, n.jsx)(p.Z, {
                                tag: o,
                                children: t(e.content, r)
                            }, r.key)
                        }
                    }),
                    paragraph: m(j({}, u().defaultRules.paragraph), {
                        react: function(e, t, r) {
                            return (0, n.jsx)("div", {
                                className: d().paragraph,
                                children: t(e.content, r)
                            }, r.key)
                        }
                    }),
                    strong: m(j({}, u().defaultRules.strong), {
                        order: 6
                    }),
                    em: m(j({}, u().defaultRules.em), {
                        order: 6
                    }),
                    u: m(j({}, u().defaultRules.u), {
                        order: 5
                    }),
                    del: m(j({}, u().defaultRules.del), {
                        order: 6
                    }),
                    link: m(j({}, s.ZP, (0, f.Z)({
                        enableBuildOverrides: !1
                    })), {
                        order: 6
                    }),
                    blockQuote: m(j({}, u().defaultRules.blockQuote), {
                        react: function(e, t, r) {
                            return (0, n.jsx)("blockquote", {
                                className: d().blockquote,
                                children: k(e)
                            }, r.key)
                        }
                    }),
                    image: m(j({}, u().defaultRules.image), {
                        order: 6,
                        match: function(e, t, r) {
                            var n = u().defaultRules.image;
                            if (null == n || null == n.match) return !1;
                            var o = n.match(e, t, r);
                            if (null != o && Array.isArray(o) && o.length >= 3) {
                                var c = o[2];
                                if ("string" == typeof c) return null != c.match(R) ? o : null
                            }
                            return !1
                        }
                    }),
                    inlineCode: m(j({}, u().defaultRules.inlineCode), {
                        order: 6,
                        react: function(e, t, r) {
                            return (0, n.jsx)("code", {
                                className: d().codeInline,
                                children: k(e)
                            }, r.key)
                        }
                    }),
                    codeBlock: m(j({}, u().defaultRules.codeBlock), {
                        react: function(e, t, o) {
                            var c = function() {
                                return (0, n.jsx)("pre", {
                                    children: (0, n.jsx)("code", {
                                        className: l()(h().scrollbarGhostHairline, "hljs"),
                                        children: k(e)
                                    })
                                }, o.key)
                            };
                            return (0, n.jsx)(a.GI, {
                                createPromise: function() {
                                    return Promise.all([r.e(20637), r.e(11860)]).then(r.bind(r, 455049))
                                },
                                webpackId: 455049,
                                renderFallback: c,
                                render: function(t) {
                                    if (e.lang && t.hasLanguage(e.lang) && "string" == typeof e.content) {
                                        var r = t.highlight(e.lang, e.content, !0);
                                        return null == r ? c() : (0, n.jsx)("pre", {
                                            children: (0, n.jsx)("code", {
                                                className: l()(h().scrollbarGhostHairline, "hljs", r.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: r.value
                                                }
                                            })
                                        }, o.key)
                                    }
                                    return c()
                                }
                            }, o.key)
                        }
                    })
                }),
                Z = u().parserFor(C),
                _ = u().reactFor(u().ruleOutput(C, "react")),
                A = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && P(e, t)
                    }(r, e);
                    var t = E(r);

                    function r() {
                        O(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.children,
                            o = e.state,
                            c = e.parser,
                            i = (0, e.output)(c("".concat(r, "\n\n"), j({
                                inline: !1
                            }, o)));
                        return (0, n.jsx)("div", {
                            className: l()(d().markdown, t),
                            children: i
                        })
                    };
                    return r
                }(o.PureComponent);
            A.rules = C;
            A.defaultProps = {
                parser: Z,
                output: _
            };
            const N = A
        },
        386991: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                c = r(775428),
                l = r(633878);

            function i(e, t, r) {
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

            function a(e, t) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    c = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    y = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, l.Z)(y)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }), c.d, {}, {
                size: 16
            })
        },
        316388: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(785893),
                o = (r(667294),
                    r(450520)),
                c = r(795308),
                l = r(633878);

            function i(e, t, r) {
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

            function a(e, t) {
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

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function p(e, t) {
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
            const y = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    i = e.color,
                    u = void 0 === i ? "currentColor" : i,
                    a = e.foreground,
                    y = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
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
                }({}, (0, l.Z)(y)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            className: a,
                            fill: u,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, n.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? c.Z.colors.INTERACTIVE_NORMAL : f,
                    y = e.colorClass,
                    d = void 0 === y ? "" : y,
                    b = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        691797: (e, t, r) => {
            r.d(t, {
                wS: () => l,
                JG: () => i
            });
            var n = r(482507),
                o = r(120415),
                c = r(310126),
                l = function() {
                    if (o.FB) return null != c.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function i(e) {
                if (!l) return !1;
                if (o.FB) {
                    c.ZP.copy(e);
                    return !0
                }
                return n.J(e)
            }
        },
        482507: (e, t, r) => {
            r.d(t, {
                J: () => n
            });

            function n(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var r = document.createRange(),
                    n = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                r.selectNodeContents(o);
                null == n || n.removeAllRanges();
                null == n || n.addRange(r);
                o.focus();
                o.setSelectionRange(0, e.length);
                var c = document.execCommand("copy");
                t.removeChild(o);
                return c
            }
        },
        222789: (e, t, r) => {
            r.d(t, {
                Rp: () => u,
                ge: () => c,
                RA: () => i
            });

            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(e) ? e.forEach((function(e) {
                    return n(e, t)
                })) : "string" == typeof e.content ? t.push(e.content) : null != e.content && n(e.content, t);
                return t
            }

            function o(e, t) {
                if (Array.isArray(t))
                    for (var r = t.length, n = 0; n < r; n++) e.push(t[n]);
                else e.push(t)
            }

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(e)) {
                    for (var r = e.length, n = [], l = 0; l < r; l++) o(n, c(e[l], t));
                    return n
                }
                null != e.content && (e.content = c(e.content, e));
                return null != t && e.type === t.type ? e.content : e
            }
            var l = {};

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(e))
                    for (var r = e.length, n = 0; n < r; n++) {
                        var o = i(e[n], t);
                        if (o === l) {
                            e.length = n;
                            break
                        }
                        e[n] = o
                    } else if ("text" !== e.type) {
                        t.limit -= 1;
                        if (t.limit <= 0) return l;
                        Array.isArray(e.content) && (e.content = i(e.content, t))
                    } return e
            }

            function u(e) {
                return n(e).join("")
            }
        },
        894012: (e, t, r) => {
            r.d(t, {
                Rp: () => o.Rp,
                w4: () => c,
                _p: () => l
            });
            var n, o = r(222789),
                c = (n = r(25788).Z).reactParserFor,
                l = n.astParserFor
        },
        25788: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(120053),
                o = r.n(n),
                c = r(222789);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t, r, n, o) {
                r || (t += "\n\n");
                var i;
                i = e(t, function(e) {
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
                }({
                    inline: r
                }, n));
                i = (0, c.ge)(i);
                i = (0, c.RA)(i);
                null != o && (i = o(i, r));
                return i
            }
            const u = {
                reactParserFor: function(e) {
                    var t = o().parserFor(e),
                        r = o().reactFor(o().ruleOutput(e, "react"));
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return r(i(t, e, n, o, c), o)
                    }
                },
                astParserFor: function(e) {
                    var t = o().parserFor(e);
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return i(t, e, r, n, o)
                    }
                }
            }
        }
    }
]);