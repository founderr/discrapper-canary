"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71478], {
        209724: (t, e, n) => {
            n.d(e, {
                Z: () => R
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
                    n && s(o, n.prototype);
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
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function s(t, e) {
                s = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return s(t, e)
            }
            var f = function(t) {
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
                    return s(r, t)
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
                    e && s(t, e)
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
                _ = new y(w),
                j = 0,
                E = new y(w),
                S = new y(w);

            function T(t) {
                return t.join("-")
            }

            function I(t, e, n) {
                var r, o = T(e),
                    i = null !== (r = _.get(t)) && void 0 !== r ? r : new Map;
                i.set(o, n);
                _.set(t, i);
                j++
            }

            function A(t) {
                var e = E.get(t);
                null != e && S.delete(e);
                E.delete(t);
                _.delete(t);
                j++
            }
            var N = function(t) {
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
                    return _
                };
                r.getInteractionComponentStateVersion = function() {
                    return j
                };
                r.getInteractionComponentState = function(t, e) {
                    var n = _.get(t);
                    if (null == n) return null;
                    var r, o = T(e);
                    return null !== (r = n.get(o)) && void 0 !== r ? r : null
                };
                r.__getLocalVars = function() {
                    return {
                        MAX_LOCAL_COMPONENT_STATES: w,
                        localComponentStates: _,
                        localComponentStateVersion: j,
                        messageIdToNonce: E,
                        nonceToComponentLocation: S
                    }
                };
                return n
            }(r.ZP.Store);
            N.displayName = "LocalInteractionComponentStateStore";
            const R = new N(o.Z, {
                LOGOUT: function() {
                    _.clear();
                    E.clear();
                    S.clear();
                    j++
                },
                QUEUE_INTERACTION_COMPONENT_STATE: function(t) {
                    var e = t.messageId,
                        n = t.nonce,
                        r = t.indices,
                        o = t.state;
                    E.set(e, n);
                    S.set(n, {
                        messageId: e,
                        indices: r
                    });
                    I(e, r, o)
                },
                SET_INTERACTION_COMPONENT_STATE: function(t) {
                    I(t.id, t.indices, t.state)
                },
                MESSAGE_DELETE: function(t) {
                    var e = t.id;
                    if (!_.has(e)) return !1;
                    A(e)
                },
                MESSAGE_UPDATE: function(t) {
                    var e = t.message;
                    if (null == e.id || !_.has(e.id)) return !1;
                    A(e.id)
                },
                INTERACTION_SUCCESS: function(t) {
                    var e = t.nonce;
                    if (null == e) return !1;
                    var n = S.get(e);
                    if (null == n) return !1;
                    E.delete(n.messageId);
                    S.delete(e);
                    j++
                },
                INTERACTION_FAILURE: function(t) {
                    var e = t.nonce;
                    if (null == e) return !1;
                    var n = S.get(e);
                    if (null == n) return !1;
                    ! function(t) {
                        var e = t.indices,
                            n = t.messageId,
                            r = T(e),
                            o = _.get(n);
                        if (null == o || !o.has(r)) return !1;
                        o.delete(r);
                        0 === o.size && _.delete(n);
                        j++
                    }(n)
                },
                CLEAR_INTERACTION_MODAL_STATE: function(t) {
                    var e = t.id;
                    _.delete(e);
                    j++
                }
            })
        },
        389100: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(142643),
                c = n(882723),
                u = n(679756),
                a = n(277418),
                l = n(993137),
                s = n(609853),
                f = n(189865),
                p = n(421281),
                d = n(816673),
                y = n(175072),
                h = n(473708),
                v = n(493561),
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
                _ = (0,
                    p.Mg)(i.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
                j = (0, p.Mg)(i.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

            function E(t) {
                var e, n = t.title,
                    i = t.onClose,
                    p = (0, d.b8)(t),
                    v = p.applicationIconURL,
                    E = p.applicationName,
                    S = p.queryParams,
                    T = p.iframeUrl,
                    I = (0, a.b)(),
                    A = I.width,
                    N = I.height,
                    R = o.useMemo((function() {
                        var t = Math.min(16 * (N - j - 2 * _) / 9, w);
                        return Math.max(g, Math.min(A - 2 * _, t))
                    }), [A, N]);
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
                            width: R
                        },
                        children: [(0, r.jsxs)(c.ModalHeader, {
                            separator: !1,
                            className: b().modalHeader,
                            children: [(0, r.jsx)(c.Avatar, {
                                src: v,
                                size: c.AvatarSizes.SIZE_32,
                                "aria-label": E,
                                className: b().applicationIcon
                            }), (0, r.jsxs)("div", {
                                className: b().flexRow,
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(c.Heading, {
                                        variant: "heading-sm/bold",
                                        children: E
                                    }), (0, r.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "interactive-normal",
                                        children: n
                                    })]
                                }), (0, r.jsx)(s.Z, {
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
                                children: (0, r.jsx)(f.Z, {
                                    className: b().closeIcon
                                })
                            })]
                        }), (0, r.jsx)(l.Z, {
                            aspectRatio: 16 / 9,
                            children: (0, r.jsx)(u.J, {
                                url: T,
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
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(831222),
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
            const s = function(t) {
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
//# sourceMappingURL=1b194e457028a0d480bf.js.map