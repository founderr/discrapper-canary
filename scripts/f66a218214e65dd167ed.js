"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71478], {
        209724: (t, e, n) => {
            n.d(e, {
                Z: () => N
            });
            var r = n(202351),
                o = n(744564);

            function i() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return !0
                } catch (t) {
                    return !1
                }
            }

            function c(t, e, n) {
                c = i() ? Reflect.construct : function(t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var o = new(Function.bind.apply(t, r));
                    n && f(o, n.prototype);
                    return o
                };
                return c.apply(null, arguments)
            }

            function u(t, e, n) {
                u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                };
                return u(t, e, n || t)
            }

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function l(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }
            var s = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                p = function(t) {
                    if (null === t || !(n = t, -1 !== Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r)
                    }

                    function r() {
                        return c(t, arguments, a(this).constructor)
                    }
                    r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    return f(r, t)
                };
                return p(t)
            }

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(t);
                    if (e) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            const y = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && f(t, e)
                }(n, t);
                var e = d(n);

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = e.call(this)).maxSize = t;
                    return r
                }
                n.prototype.set = function(t, e) {
                    this.size >= this.maxSize && this.delete(this.keys().next().value);
                    return u(a(n.prototype), "set", this).call(this, t, e)
                };
                return n
            }(p(Map));

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(t) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return v(t)
            }

            function b(t, e) {
                return !e || "object" !== m(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function O(t, e) {
                O = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return O(t, e)
            }
            var m = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function g(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(t);
                    if (e) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var w = 196606,
                j = new y(w),
                E = 0,
                _ = new y(w),
                S = new y(w);

            function I(t) {
                return t.join("-")
            }

            function A(t, e, n) {
                var r, o = I(e),
                    i = null !== (r = j.get(t)) && void 0 !== r ? r : new Map;
                i.set(o, n);
                j.set(t, i);
                E++
            }

            function R(t) {
                var e = _.get(t);
                null != e && S.delete(e);
                _.delete(t);
                j.delete(t);
                E++
            }
            var T = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && O(t, e)
                }(n, t);
                var e = g(n);

                function n() {
                    h(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInteractionComponentStates = function() {
                    return j
                };
                r.getInteractionComponentStateVersion = function() {
                    return E
                };
                r.getInteractionComponentState = function(t, e) {
                    var n = j.get(t);
                    if (null == n) return null;
                    var r, o = I(e);
                    return null !== (r = n.get(o)) && void 0 !== r ? r : null
                };
                return n
            }(r.ZP.Store);
            T.displayName = "LocalInteractionComponentStateStore";
            const N = new T(o.Z, {
                LOGOUT: function() {
                    j.clear();
                    _.clear();
                    S.clear();
                    E++
                },
                QUEUE_INTERACTION_COMPONENT_STATE: function(t) {
                    var e = t.messageId,
                        n = t.nonce,
                        r = t.indices,
                        o = t.state;
                    _.set(e, n);
                    S.set(n, {
                        messageId: e,
                        indices: r
                    });
                    A(e, r, o)
                },
                SET_INTERACTION_COMPONENT_STATE: function(t) {
                    A(t.id, t.indices, t.state)
                },
                MESSAGE_DELETE: function(t) {
                    var e = t.id;
                    if (!j.has(e)) return !1;
                    R(e)
                },
                MESSAGE_UPDATE: function(t) {
                    var e = t.message;
                    if (null == e.id || !j.has(e.id)) return !1;
                    R(e.id)
                },
                INTERACTION_SUCCESS: function(t) {
                    var e = t.nonce;
                    if (null == e) return !1;
                    var n = S.get(e);
                    if (null == n) return !1;
                    _.delete(n.messageId);
                    S.delete(e);
                    E++
                },
                INTERACTION_FAILURE: function(t) {
                    var e = t.nonce;
                    if (null == e) return !1;
                    var n = S.get(e);
                    if (null == n) return !1;
                    ! function(t) {
                        var e = t.indices,
                            n = t.messageId,
                            r = I(e),
                            o = j.get(n);
                        if (null == o || !o.has(r)) return !1;
                        o.delete(r);
                        0 === o.size && j.delete(n);
                        E++
                    }(n)
                },
                CLEAR_INTERACTION_MODAL_STATE: function(t) {
                    var e = t.id;
                    j.delete(e);
                    E++
                }
            })
        },
        389100: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => _
            });
            var r = n(785893),
                o = n(667294),
                i = n(142643),
                c = n(304548),
                u = n(679756),
                a = n(277418),
                l = n(993137),
                f = n(609853),
                s = n(189865),
                p = n(421281),
                d = n(816673),
                y = n(175072),
                h = n(473708),
                v = n(887770),
                b = n.n(v);

            function O(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function m(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }
            var g = (0, p.Mg)(i.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
                w = (0, p.Mg)(i.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
                j = (0, p.Mg)(i.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
                E = (0, p.Mg)(i.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

            function _(t) {
                var e, n = t.title,
                    i = t.onClose,
                    p = (0, d.b8)(t),
                    v = p.applicationIconURL,
                    _ = p.applicationName,
                    S = p.queryParams,
                    I = p.iframeUrl,
                    A = (0, a.b)(),
                    R = A.width,
                    T = A.height,
                    N = o.useMemo((function() {
                        var t = Math.min(16 * (T - E - 2 * j) / 9, w);
                        return Math.max(g, Math.min(R - 2 * j, t))
                    }), [R, T]);
                return (0, r.jsx)(c.ModalRoot, m(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            O(t, e, n[e])
                        }))
                    }
                    return t
                }({}, t), {
                    size: c.ModalSize.DYNAMIC,
                    className: b().root,
                    children: (0, r.jsxs)("div", {
                        style: {
                            width: N
                        },
                        children: [(0, r.jsxs)(c.ModalHeader, {
                            separator: !1,
                            className: b().modalHeader,
                            children: [(0, r.jsx)(c.Avatar, {
                                src: v,
                                size: c.AvatarSizes.SIZE_32,
                                "aria-label": _,
                                className: b().applicationIcon
                            }), (0, r.jsxs)("div", {
                                className: b().flexRow,
                                children: [(0, r.jsxs)("div", {
                                    children: [(0,
                                        r.jsx)(c.Heading, {
                                        variant: "heading-sm/bold",
                                        children: _
                                    }), (0, r.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "interactive-normal",
                                        children: n
                                    })]
                                }), (0, r.jsx)(f.Z, {
                                    type: y.H.BOT,
                                    className: b().botTag,
                                    verified: null === (e = t.application.bot) || void 0 === e ? void 0 : e.verified
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: i,
                                innerClassName: b().closeButton,
                                className: b().closeButtonContainer,
                                look: c.Button.Looks.BLANK,
                                size: c.Button.Sizes.NONE,
                                "aria-label": h.Z.Messages.DISMISS,
                                children: (0, r.jsx)(s.Z, {
                                    className: b().closeIcon
                                })
                            })]
                        }), (0, r.jsx)(l.Z, {
                            aspectRatio: 16 / 9,
                            children: (0, r.jsx)(u.J, {
                                url: I,
                                shouldRefocus: !0,
                                className: b().iframe,
                                queryParams: S
                            })
                        })]
                    })
                }))
            }
        },
        277418: (t, e, n) => {
            n.d(e, {
                b: () => c
            });
            var r = n(667294);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            o = t
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c() {
                var t, e, n = i(r.useState({
                        width: null !== (t = window.innerWidth) && void 0 !== t ? t : 1080,
                        height: null !== (e = window.innerHeight) && void 0 !== e ? e : 1080
                    }), 2),
                    o = n[0],
                    c = n[1];
                r.useLayoutEffect((function() {
                    var t = function() {
                        var t = window.innerWidth,
                            e = window.innerHeight;
                        c({
                            width: t,
                            height: e
                        })
                    };
                    t();
                    window.addEventListener("resize", t);
                    return function() {
                        return window.removeEventListener("resize", t)
                    }
                }), []);
                return o
            }
        },
        993137: (t, e, n) => {
            n.d(e, {
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(495937),
                u = n.n(c);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        a(t, e, n[e])
                    }))
                }
                return t
            }
            const f = function(t) {
                var e = t.aspectRatio,
                    n = t.style,
                    o = t.className,
                    c = t.children;
                return (0, r.jsx)("div", {
                    className: i()(u().outer, o),
                    style: l({
                        paddingTop: "".concat(1 / e * 100, "%")
                    }, n),
                    children: (0, r.jsx)("div", {
                        className: u().inner,
                        children: c
                    })
                })
            }
        }
    }
]);