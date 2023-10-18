"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54415], {
        54415: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => R
            });
            var r = n(785893),
                o = n(667294),
                u = n(202351),
                c = n(70418),
                a = n(281110),
                i = n(744564),
                l = n(2590);

            function s(e, t, n, r, o, u, c) {
                try {
                    var a = e[u](c),
                        i = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(i) : Promise.resolve(i).then(r, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            s(u, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            s(u, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var p = function(e, t) {
                var n, r, o, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function a(u) {
                    return function(a) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            c.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(u);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                u = t.call(e, c)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, a])
                    }
                }
            };

            function d() {
                return (d = f((function(e) {
                    var t;
                    return p(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, a.ZP.get({
                                    url: l.ANM.STORE_EULA(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                t = n.sent();
                                i.Z.dispatch({
                                    type: "EULA_FETCH_SUCCESS",
                                    eula: t.body
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function b(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var O = {};
            var j = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getEULA = function(e) {
                    return O[e]
                };
                return n
            }(u.ZP.Store);
            j.displayName = "EULAStore";
            const w = new j(i.Z, {
                EULA_FETCH_SUCCESS: function(e) {
                    var t = e.eula;
                    O[t.id] = t
                }
            });
            var P = n(107364),
                k = n(749266),
                S = n(473708),
                x = n(337968),
                E = n.n(x);

            function R(e) {
                var t, n = e.eulaId,
                    a = e.transitionState,
                    i = e.onClose,
                    l = (0, u.e7)([w], (function() {
                        return w.getEULA(n)
                    }));
                o.useEffect((function() {
                    ! function(e) {
                        d.apply(this, arguments)
                    }(n)
                }), [n]);
                var s = null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : S.Z.Messages.LOADING,
                    f = null != l ? (0, r.jsx)(k.Z, {
                        children: l.content,
                        className: E().markdown
                    }) : (0, r.jsx)(c.Spinner, {
                        className: E().spinner
                    });
                return (0, r.jsxs)(c.ModalRoot, {
                    transitionState: a,
                    size: c.ModalSize.SMALL,
                    "aria-label": s,
                    children: [(0,
                        r.jsxs)(c.ModalHeader, {
                        justify: P.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            children: s
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: i
                        })]
                    }), (0, r.jsx)(c.ModalContent, {
                        children: f
                    })]
                })
            }
        },
        965309: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                u = n.n(o),
                c = n(260746),
                a = n.n(c);

            function i(e) {
                var t = e.children,
                    n = e.tag,
                    o = e.className;
                n = null != n ? n : "h3";
                return (0, r.jsx)(n, {
                    className: u()(a().title, o),
                    children: t
                })
            }
        },
        749266: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(785893),
                o = n(667294),
                u = n(294184),
                c = n.n(u),
                a = n(120053),
                i = n.n(a),
                l = n(91174),
                s = n(544194),
                f = n(25978),
                p = n(965309),
                d = n(465672),
                h = n.n(d),
                y = n(840348),
                b = n.n(y);

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function j(e, t) {
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

            function w(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
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
            var k, S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function x(e) {
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
                    return w(this, n)
                }
            }
            var E = new RegExp("https?://".concat(null !== (k = window.GLOBAL_ENV.CDN_HOST) && void 0 !== k ? k : ""));

            function R(e) {
                return "string" == typeof e.content ? e.content : N(e.content)
            }
            var _ = j(O({}, i().defaultRules), {
                    heading: j(O({}, i().defaultRules.heading), {
                        react: function(e, t, n) {
                            var o = "h".concat(e.level);
                            return (0, r.jsx)(p.Z, {
                                tag: o,
                                children: t(e.content, n)
                            }, n.key)
                        }
                    }),
                    paragraph: j(O({}, i().defaultRules.paragraph), {
                        react: function(e, t, n) {
                            return (0, r.jsx)("div", {
                                className: h().paragraph,
                                children: t(e.content, n)
                            }, n.key)
                        }
                    }),
                    strong: j(O({}, i().defaultRules.strong), {
                        order: 6
                    }),
                    em: j(O({}, i().defaultRules.em), {
                        order: 6
                    }),
                    u: j(O({}, i().defaultRules.u), {
                        order: 5
                    }),
                    del: j(O({}, i().defaultRules.del), {
                        order: 6
                    }),
                    link: j(O({}, s.ZP, (0, f.Z)({
                        enableBuildOverrides: !1
                    })), {
                        order: 6
                    }),
                    blockQuote: j(O({}, i().defaultRules.blockQuote), {
                        react: function(e, t, n) {
                            return (0, r.jsx)("blockquote", {
                                className: h().blockquote,
                                children: R(e)
                            }, n.key)
                        }
                    }),
                    image: j(O({}, i().defaultRules.image), {
                        order: 6,
                        match: function(e, t, n) {
                            var r = i().defaultRules.image;
                            if (null == r || null == r.match) return !1;
                            var o = r.match(e, t, n);
                            if (null != o && Array.isArray(o) && o.length >= 3) {
                                var u = o[2];
                                if ("string" == typeof u) return null != u.match(E) ? o : null
                            }
                            return !1
                        }
                    }),
                    inlineCode: j(O({}, i().defaultRules.inlineCode), {
                        order: 6,
                        react: function(e, t, n) {
                            return (0, r.jsx)("code", {
                                className: h().codeInline,
                                children: R(e)
                            }, n.key)
                        }
                    }),
                    codeBlock: j(O({}, i().defaultRules.codeBlock), {
                        react: function(e, t, o) {
                            var u = function() {
                                return (0, r.jsx)("pre", {
                                    children: (0, r.jsx)("code", {
                                        className: c()(b().scrollbarGhostHairline, "hljs"),
                                        children: R(e)
                                    })
                                }, o.key)
                            };
                            return (0, r.jsx)(l.GI, {
                                createPromise: function() {
                                    return Promise.all([n.e(20637), n.e(11860)]).then(n.bind(n, 455049))
                                },
                                webpackId: 455049,
                                renderFallback: u,
                                render: function(t) {
                                    if (e.lang && t.hasLanguage(e.lang) && "string" == typeof e.content) {
                                        var n = t.highlight(e.lang, e.content, !0);
                                        return null == n ? u() : (0, r.jsx)("pre", {
                                            children: (0, r.jsx)("code", {
                                                className: c()(b().scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }, o.key)
                                    }
                                    return u()
                                }
                            }, o.key)
                        }
                    })
                }),
                C = i().parserFor(_),
                N = i().reactFor(i().ruleOutput(_, "react")),
                L = function(e) {
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
                    }(n, e);
                    var t = x(n);

                    function n() {
                        v(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.children,
                            o = e.state,
                            u = e.parser,
                            a = (0, e.output)(u("".concat(n, "\n\n"), O({
                                inline: !1
                            }, o)));
                        return (0, r.jsx)("div", {
                            className: c()(h().markdown, t),
                            children: a
                        })
                    };
                    return n
                }(o.PureComponent);
            L.rules = _;
            L.defaultProps = {
                parser: C,
                output: N
            };
            const A = L
        }
    }
]);