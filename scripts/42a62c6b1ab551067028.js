"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [93862], {
        293862: (e, t, n) => {
            n.d(t, {
                Z: () => at
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                s = n(202351),
                a = n(304548),
                c = n(744564),
                l = n(508233),
                f = n(921873),
                p = n(218680),
                d = n(107364),
                h = n(190186),
                y = n(76296),
                m = n(623926),
                g = n(496486),
                v = n.n(g),
                O = n(38773),
                R = n(795308),
                b = n(2590);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function w(e, t) {
                return !t || "object" !== j(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var S, j = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var o = I(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }! function(e) {
                e.ARROW_UP = "ARROW_UP";
                e.ARROW_DOWN = "ARROW_DOWN";
                e.ARROW_LEFT = "ARROW_LEFT";
                e.ARROW_RIGHT = "ARROW_RIGHT"
            }(S || (S = {}));

            function P(e) {
                switch (e) {
                    case b.yXg.ARROW_DOWN:
                        return S.ARROW_DOWN;
                    case b.yXg.ARROW_UP:
                        return S.ARROW_UP;
                    case b.yXg.ARROW_LEFT:
                        return S.ARROW_LEFT;
                    case b.yXg.ARROW_RIGHT:
                        return S.ARROW_RIGHT;
                    default:
                        return null
                }
            }
            var T = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && E(e, t)
                    }(n, e);
                    var t = C(n);

                    function n() {
                        _(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            focusedColumn: null,
                            focusedRow: null
                        };
                        e.handleKeyDown = function(t) {
                            var n = e.props.onSelect;
                            switch (t.keyCode) {
                                case b.yXg.ARROW_DOWN:
                                case b.yXg.ARROW_UP:
                                case b.yXg.ARROW_LEFT:
                                case b.yXg.ARROW_RIGHT:
                                    e.focusNext(P(t.keyCode));
                                    break;
                                case b.yXg.ENTER:
                                    var r = e.calculateFocusedItem();
                                    if (null != r && null != n) {
                                        t.preventDefault();
                                        t.stopPropagation();
                                        n(r)
                                    }
                            }
                        };
                        e.wrapPosition = function(t, n, r, o) {
                            var i, u = t.length,
                                s = r * u + n,
                                a = Math.max(s + o, 0) % u,
                                c = 0;
                            o < 0 && a > n && (c = -1);
                            o > 0 && a < n && (c = 1);
                            return {
                                column: a,
                                row: (null !== (i = e.calculateClosest(t[n][r], t[a])) && void 0 !== i ? i : r) + c
                            }
                        };
                        return e
                    }
                    var r = n.prototype;
                    r.componentDidMount = function() {
                        document.addEventListener("keydown", this.handleKeyDown, !0)
                    };
                    r.componentWillUnmount = function() {
                        document.removeEventListener("keydown", this.handleKeyDown, !0)
                    };
                    r.focusNext = function(e) {
                        var t = this,
                            n = this.props,
                            r = n.getItemGrid,
                            o = n.onFocus,
                            i = this.state,
                            u = i.focusedColumn,
                            s = i.focusedRow;
                        if (null != e) {
                            var a = r();
                            if (null != a) {
                                var c = this.getNext(a, u, s, e);
                                this.setState({
                                    focusedColumn: c.column,
                                    focusedRow: c.row
                                }, (function() {
                                    var e = t.calculateFocusedItem();
                                    null != e && null != o && o(e)
                                }))
                            }
                        }
                    };
                    r.getNext = function(e, t, n, r) {
                        var o, i, u, s;
                        if (null == t || null == n) {
                            i = 0;
                            u = 0;
                            o = {
                                column: 0,
                                row: 0
                            }
                        } else {
                            i = t;
                            u = n;
                            switch (r) {
                                case S.ARROW_UP:
                                    o = {
                                        column: i,
                                        row: Math.max(u - 1, 0)
                                    };
                                    break;
                                case S.ARROW_DOWN:
                                    o = {
                                        column: i,
                                        row: Math.min(u + 1, e[i].length - 1)
                                    };
                                    break;
                                case S.ARROW_LEFT:
                                    o = this.wrapPosition(e, i, u, -1);
                                    break;
                                case S.ARROW_RIGHT:
                                    o = this.wrapPosition(e, i, u, 1)
                            }
                        }
                        null != o && (s = e[o.column][o.row]);
                        null != s && null != o || (s = e[(o = {
                            column: i,
                            row: u
                        }).column][o.row]);
                        return {
                            column: o.column,
                            row: o.row,
                            id: s
                        }
                    };
                    r.calculateClosest = function(e, t) {
                        var n = this.props.getCoordsMap()[e];
                        if (null != n) {
                            for (var r, o = Number.MAX_SAFE_INTEGER, i = 0; i < t.length; i++) {
                                var u = this.props.getCoordsMap()[t[i]];
                                if (null != u) {
                                    var s = Math.abs(u.top - n.top);
                                    if (!(s < o)) break;
                                    o = s;
                                    r = i
                                }
                            }
                            return r
                        }
                    };
                    r.calculateFocusedItem = function() {
                        var e = this.props.getItemGrid,
                            t = this.state,
                            n = t.focusedRow,
                            r = t.focusedColumn,
                            o = e();
                        return null == o || null == r || null == n || null == o[r] || null == o[r][n] ? null : o[r][n]
                    };
                    r.render = function() {
                        return this.props.children
                    };
                    return n
                }(o.Component),
                x = n(82677),
                A = n(295652),
                F = n(672380);

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function G(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function k(e, t) {
                k = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return k(e, t)
            }
            var D, Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function W(e) {
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
                    var n, r = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return G(this, n)
                }
            }

            function H(e, t, n) {
                var r = Math.max(Math.floor(e / t), 1);
                return Math.min(r, n)
            }
            const L = (0, F.Z)((D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && k(e, t)
                }(n, e);
                var t = W(n);

                function n() {
                    N(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        columns: H(e.props.width, e.props.desiredItemWidth, e.props.maxColumns)
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.width,
                        n = e.height;
                    return (0, e.children)(this.state.columns, t, n)
                };
                n.getDerivedStateFromProps = function(e, t) {
                    var n = H(e.width, e.desiredItemWidth, e.maxColumns);
                    return n !== t.columns ? {
                        columns: n
                    } : null
                };
                return n
            }(o.Component), D.defaultProps = {
                desiredItemWidth: 200
            }, D));
            var B = n(853158),
                V = n(791820),
                U = n.n(V);

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function K(e) {
                K = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return K(e)
            }

            function X(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && z(e, t)
            }

            function Y(e, t) {
                return !t || "object" !== $(t) && "function" != typeof t ? Q(e) : t
            }

            function z(e, t) {
                z = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return z(e, t)
            }
            var $ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function J(e) {
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
                    var n, r = K(e);
                    if (t) {
                        var o = K(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Y(this, n)
                }
            }
            var ee = [R.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, R.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
                te = function(e) {
                    X(n, e);
                    var t = J(n);

                    function n() {
                        q(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            backgroundColor: v().sample(ee)
                        };
                        return e
                    }
                    n.prototype.render = function() {
                        var e = this.props.height,
                            t = this.state.backgroundColor;
                        return (0, r.jsx)("div", {
                            style: {
                                height: e,
                                backgroundColor: t
                            },
                            className: U().gif
                        })
                    };
                    return n
                }(o.PureComponent);
            (function(e) {
                X(n, e);
                var t = J(n);

                function n(e) {
                    q(this, n);
                    var r;
                    (r = t.call(this, e)).animateSlide = function() {
                        var e = Q(r),
                            t = e.props.direction,
                            n = e.state,
                            o = n.translateY,
                            i = n.height,
                            u = t > 0 ? 0 : -i / 2 + 12,
                            s = t > 0 ? -i / 2 + 12 : 0;
                        o.setValue(u);
                        B.Z.timing(o, {
                            toValue: s,
                            duration: 800,
                            easing: B.Z.Easing.linear
                        }).start(r.animateSlide)
                    };
                    var o = new Array(10).fill(null).map((function() {
                        return v().random(40, 150)
                    }));
                    r.state = {
                        blocks: o,
                        height: 2 * o.reduce((function(e, t) {
                            return e + t + 12
                        }), 12),
                        translateY: new B.Z.Value(0)
                    };
                    return r
                }
                var o = n.prototype;
                o.componentDidMount = function() {
                    this.animateSlide()
                };
                o.getAnimatedStyle = function() {
                    var e = this.props.columns,
                        t = this.state.translateY;
                    return {
                        width: "".concat(100 / e, "%"),
                        transform: [{
                            translateY: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "1px"]
                            })
                        }]
                    }
                };
                o.render = function() {
                    var e = this.state.blocks;
                    return (0, r.jsxs)(B.Z.div, {
                        className: U().column,
                        style: this.getAnimatedStyle(),
                        children: [e.map((function(e, t) {
                            return (0, r.jsx)(te, {
                                height: e
                            }, t)
                        })), e.map((function(e, t) {
                            return (0, r.jsx)(te, {
                                height: e
                            }, "alt".concat(t))
                        }))]
                    })
                };
                return n
            }(o.Component)).defaultProps = {
                direction: -1
            };
            var ne = function(e) {
                    var t = e.columns;
                    return (0, r.jsx)("div", {
                        className: U().column,
                        style: {
                            width: "".concat(100 / t, "%")
                        },
                        children: new Array(4).fill(null).map((function(e, t) {
                            return (0, r.jsx)("div", {
                                className: U().categoryLoader
                            }, t)
                        }))
                    })
                },
                re = function(e) {
                    X(n, e);
                    var t = J(n);

                    function n() {
                        q(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.columns,
                            n = e.renderColumn;
                        return (0, r.jsx)("div", {
                            className: U().container,
                            children: new Array(t).fill(null).map((function(e, r) {
                                return n(t, r)
                            }))
                        })
                    };
                    return n
                }(o.PureComponent),
                oe = n(957083),
                ie = n(711003),
                ue = n(26468),
                se = n(45761),
                ae = n(473708),
                ce = n(662418),
                le = n.n(ce);

            function fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function pe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function de(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function he(e) {
                he = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return he(e)
            }

            function ye(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && ve(e, t)
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        de(e, t, n[t])
                    }))
                }
                return e
            }

            function ge(e, t) {
                return !t || "object" !== Re(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ve(e, t) {
                ve = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ve(e, t)
            }

            function Oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return fe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Re = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function be(e) {
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
                    var n, r = he(e);
                    if (t) {
                        var o = he(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ge(this, n)
                }
            }
            var _e = [R.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, R.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
                Ie = Array.from({
                    length: 16
                }).map((function(e, t) {
                    return {
                        id: "".concat(t),
                        height: Math.floor(100 * Math.random()) + 120
                    }
                }));

            function we(e) {
                var t;
                return null !== (t = e.id) && void 0 !== t ? t : e.src
            }

            function Ee(e, t) {
                var n = Ie[t];
                return null == n ? 0 : n.height
            }

            function Se(e, t, n, o) {
                if (!(e > 0)) return null == Ie[t] ? null : (0, r.jsx)("div", {
                    className: le().placeholder,
                    style: me({
                        animationDelay: "".concat(75 * t, "ms")
                    }, n)
                }, o)
            }

            function je(e, t) {
                var n, r;
                return e > 0 ? "" : null !== (r = null === (n = Ie[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : ""
            }

            function Ce(e) {
                return e === O.EO.VIDEO
            }
            var Pe = function(e) {
                    ye(n, e);
                    var t = be(n);

                    function n(e) {
                        pe(this, n);
                        var r;
                        (r = t.call(this, e)).ref = null;
                        r._video = null;
                        r._image = null;
                        r._mounted = !0;
                        r.handleCanPlay = function() {
                            r._mounted && r.setState({
                                loaded: !0
                            })
                        };
                        r.handleClick = function() {
                            var e = r.props,
                                t = e.onClick,
                                n = e.item,
                                o = e.index;
                            null != t && t(n, o)
                        };
                        var o = r.props,
                            i = o.format,
                            u = o.color,
                            s = o.imagePool;
                        r.state = {
                            color: null == u ? v().sample(_e) : u,
                            loaded: !1
                        };
                        if (!Ce(i)) {
                            r._image = s.getElement();
                            r._image.onload = function() {
                                return r.setState({
                                    loaded: !0
                                })
                            };
                            r._image.src = e.src
                        }
                        return r
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        var e = this.props,
                            t = e.format,
                            n = e.src,
                            r = e.coords,
                            o = r.width,
                            i = r.height,
                            u = e.videoPool,
                            s = this.ref;
                        if (t === O.EO.VIDEO && null != s) {
                            var a = u.getElement();
                            a.oncanplay = this.handleCanPlay;
                            a.src = n;
                            a.width = o;
                            a.height = i;
                            s.appendChild(a);
                            this._video = a
                        }
                    };
                    o.componentDidUpdate = function(e) {
                        var t = this.props.coords,
                            n = t.width,
                            r = t.height;
                        if (null != this._video && (e.coords.width !== n || e.coords.height !== r)) {
                            this._video.width = n;
                            this._video.height = r
                        }
                    };
                    o.componentWillUnmount = function() {
                        this._mounted = !1;
                        var e = this._image,
                            t = this._video,
                            n = this.props,
                            r = n.imagePool,
                            o = n.videoPool;
                        if (null != e) {
                            this._image = null;
                            r.poolElement(e)
                        }
                        if (null != t) {
                            this._video = null;
                            o.poolElement(t)
                        }
                    };
                    o.renderGIF = function() {
                        var e = this.props,
                            t = e.src,
                            n = e.coords,
                            o = n.width,
                            i = n.height;
                        return this.state.loaded ? (0, r.jsx)("img", {
                            src: t,
                            width: o,
                            height: i,
                            className: le().gif,
                            alt: ""
                        }) : null
                    };
                    o.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.item,
                            o = t.renderExtras,
                            i = t.format,
                            s = t.coords,
                            c = t.focused,
                            l = this.state,
                            f = l.color,
                            p = l.loaded;
                        return (0, r.jsxs)(a.Clickable, {
                            tabIndex: -1,
                            innerRef: function(t) {
                                e.ref = t
                            },
                            className: u()(le().result, de({}, le().focused, c)),
                            onClick: this.handleClick,
                            style: me({
                                backgroundColor: p ? void 0 : f
                            }, s),
                            children: [Ce(i) ? null : this.renderGIF(), null != o ? o(n) : null]
                        })
                    };
                    return n
                }(o.PureComponent),
                Te = function(e) {
                    ye(n, e);
                    var t = be(n);

                    function n() {
                        pe(this, n);
                        var e;
                        (e = t.apply(this, arguments))._masonryRef = o.createRef();
                        e.prevResultQuery = null;
                        e.state = {
                            focusedId: null
                        };
                        e.handleFocus = function(t) {
                            var n = e._masonryRef.current;
                            if (null != n) {
                                var r = n.getCoordsMap()[t];
                                if (null != r) {
                                    n.scrollIntoViewRect({
                                        start: r.top - 10,
                                        end: r.top + r.height + 10
                                    });
                                    e.setState({
                                        focusedId: t
                                    })
                                }
                            }
                        };
                        e.handleSelect = function(t) {
                            var n, r = e.props.data,
                                o = r.findIndex((function(e) {
                                    return we(e) === t
                                })); - 1 !== o && (n = r[o]);
                            null != n && e.selectItem(n, o)
                        };
                        e.handleClickItem = function(t, n) {
                            e.selectItem(t, n)
                        };
                        e.handleScroll = function() {
                            var t = e.props.resultQuery,
                                n = e._masonryRef.current;
                            if (null != n) {
                                var r = n.getScrollerState(),
                                    o = r.scrollTop;
                                if (r.scrollHeight - o <= 1220) {
                                    t !== e.prevResultQuery && (0, l.mO)(t);
                                    e.prevResultQuery = t
                                }
                            }
                        };
                        e.renderItem = function(t, n, o, i) {
                            if (t > 0) return null;
                            var u = e.state.focusedId,
                                s = e.props.data[n];
                            return null == s ? null : (0, r.jsx)(Pe, {
                                item: s,
                                index: n,
                                format: s.format,
                                src: s.src,
                                coords: o,
                                onClick: e.handleClickItem,
                                renderExtras: function() {
                                    return (0, r.jsx)(se.Z, me({
                                        className: le().favButton
                                    }, s))
                                },
                                focused: we(s) === u,
                                imagePool: e.props.imagePool,
                                videoPool: e.props.videoPool
                            }, i)
                        };
                        e.getItemHeight = function(t, n, r) {
                            if (t > 0) return 0;
                            var o = e.props.data[n];
                            return null == o ? 0 : r * (o.height / o.width)
                        };
                        e.getItemKey = function(t, n) {
                            if (t > 0) return null;
                            var r, o = e.props.data[n];
                            return null != o ? null !== (r = o.id) && void 0 !== r ? r : o.src : null
                        };
                        e.renderSection = function(t, n, i) {
                            var u = e.props,
                                s = u.onSelectSuggestion,
                                c = u.suggestions;
                            return 1 === t ? (0, r.jsx)("div", {
                                className: le().endContainer,
                                style: n,
                                children: c.length > 0 ? (0, r.jsxs)(o.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: le().endText,
                                        children: ae.Z.Messages.GIF_PICKER_RELATED_SEARCH
                                    }), (0, r.jsx)("div", {
                                        className: le().searchSuggestions,
                                        children: c.map((function(e) {
                                            return (0, r.jsx)(a.Button, {
                                                look: a.Button.Looks.OUTLINED,
                                                color: a.Button.Colors.PRIMARY,
                                                size: a.Button.Sizes.SMALL,
                                                className: le().searchSuggestion,
                                                onClick: function() {
                                                    s(e)
                                                },
                                                children: e
                                            }, e)
                                        }))
                                    })]
                                }) : null
                            }, i) : null
                        };
                        e.renderContent = function(t, n, o) {
                            var i = e.props,
                                u = i.data,
                                s = i.resultQuery,
                                c = i.query,
                                l = i.resultType;
                            return 0 !== u.length || s === c && l !== b.wI2.TRENDING_GIFS ? (0, r.jsx)(a.MasonryList, {
                                ref: e._masonryRef,
                                fade: !0,
                                itemGutter: 12,
                                className: le().results,
                                columns: t,
                                sections: [u.length, 0],
                                getItemKey: e.getItemKey,
                                getItemHeight: e.getItemHeight,
                                renderItem: e.renderItem,
                                getSectionHeight: e.getSectionHeight,
                                renderSection: e.renderSection,
                                onScroll: e.handleScroll,
                                chunkSize: 128
                            }, "".concat(s, "-").concat(null != l ? l : "")) : (0, r.jsx)(a.MasonryList, {
                                fade: !0,
                                className: le().results,
                                sections: [Ie.length],
                                columns: t,
                                itemGutter: 12,
                                getItemKey: je,
                                getItemHeight: Ee,
                                renderItem: Se,
                                chunkSize: 128
                            }, s)
                        };
                        e.getItemGrid = function() {
                            var t = e._masonryRef.current;
                            return null != t ? t.getItemGrid() : []
                        };
                        e.getCoordsMap = function() {
                            var t = e._masonryRef.current;
                            return null != t ? t.getCoordsMap() : {}
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this.props,
                            t = e.resultType,
                            n = e.data;
                        if (t === b.wI2.FAVORITES) {
                            (0, l.t1)(b.wI2.FAVORITES);
                            (0, l.hM)(n, b.wI2.FAVORITES, {
                                limit: null
                            })
                        }
                    };
                    i.selectItem = function(e, t) {
                        var n = this.props,
                            r = n.onSelectGIF,
                            o = n.resultType,
                            i = n.data,
                            u = n.resultQuery;
                        null != r && r(e);
                        (0, l.R7)({
                            type: o,
                            index: t,
                            offset: this.props.searchOffset,
                            limit: this.props.searchLimit,
                            results: i,
                            totalResults: this.props.searchTotalResults,
                            query: u,
                            gifId: e.id
                        })
                    };
                    i.getSectionHeight = function(e) {
                        return 1 === e ? 220 : 0
                    };
                    i.renderEmptyFavorite = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (0, r.jsx)("div", {
                            className: le().emptyHint,
                            children: null != e ? (0, r.jsxs)("div", {
                                className: le().emptyHintCard,
                                children: [t ? (0, r.jsx)(x.Z, {
                                    className: le().emptyHintFavorite
                                }) : null, (0, r.jsx)("div", {
                                    className: le().emptyHintText,
                                    children: e
                                })]
                            }) : (0, r.jsx)("div", {
                                className: le().emptyHintSpacer
                            })
                        })
                    };
                    i.renderEmptyFavorites = function() {
                        var e = this;
                        return (0, r.jsx)(a.Scroller, {
                            className: le().results,
                            fade: !0,
                            children: (0, r.jsxs)("div", {
                                className: le().emptyHints,
                                children: [this.renderEmptyFavorite(ae.Z.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(ae.Z.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(ae.Z.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                                    length: 15
                                }).map((function(t, n) {
                                    return (0,
                                        r.jsx)(o.Fragment, {
                                        children: e.renderEmptyFavorite()
                                    }, n)
                                })), this.renderEmptyFavorite(ae.Z.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                                    length: 16
                                }).map((function(t, n) {
                                    return (0, r.jsx)(o.Fragment, {
                                        children: e.renderEmptyFavorite()
                                    }, n)
                                })), this.renderEmptyFavorite(ae.Z.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                            })
                        })
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.data,
                            n = e.resultQuery,
                            o = e.query,
                            i = e.resultType;
                        return 0 === t.length && n === o && i !== b.wI2.TRENDING_GIFS ? i === b.wI2.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(ie.Z, {
                            message: ae.Z.Messages.NO_GIF_SEARCH_RESULTS,
                            className: le().noResults
                        }) : (0, r.jsx)(T, {
                            getItemGrid: this.getItemGrid,
                            getCoordsMap: this.getCoordsMap,
                            onFocus: this.handleFocus,
                            onSelect: this.handleSelect,
                            children: (0, r.jsx)(L, {
                                desiredItemWidth: 200,
                                maxColumns: 8,
                                children: this.renderContent
                            })
                        }, n)
                    };
                    return n
                }(o.PureComponent);

            function xe() {
                var e = o.useContext(ue.ZP).renderWindow.document;
                return {
                    imagePool: Oe(o.useState((function() {
                        return new oe.Z((function() {
                            return e.createElement("img")
                        }), (function(e) {
                            e.onload = null;
                            e.src = ""
                        }))
                    })), 1)[0],
                    videoPool: Oe(o.useState((function() {
                        return new oe.Z((function() {
                            var t = e.createElement("video");
                            t.className = le().gif;
                            t.autoplay = !0;
                            t.loop = !0;
                            t.muted = !0;
                            t.preload = "auto";
                            t.controls = !1;
                            return t
                        }), (function(e) {
                            e.src = "";
                            e.oncanplay = null;
                            var t = e.parentNode;
                            null != t && t.removeChild(e)
                        }))
                    })), 1)[0]
                }
            }
            const Ae = function(e) {
                var t = xe();
                return (0, r.jsx)(Te, me({}, e, t))
            };
            var Fe = n(855833),
                Ne = n.n(Fe);

            function Me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ge(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ke(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function De(e) {
                De = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return De(e)
            }

            function Ze(e, t) {
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

            function We(e, t) {
                return !t || "object" !== Be(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function He(e, t) {
                He = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return He(e, t)
            }

            function Le(e) {
                return function(e) {
                    if (Array.isArray(e)) return Me(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Me(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Me(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Be = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ve(e) {
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
                    var n, r = De(e);
                    if (t) {
                        var o = De(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return We(this, n)
                }
            }
            var Ue = function(e, t) {
                return (0, r.jsx)(ne, {
                    columns: e
                }, t)
            };

            function Qe(e) {
                var t, n = v().sample(v().values(e));
                return {
                    type: b.wI2.FAVORITES,
                    name: ae.Z.Messages.CATEGORY_FAVORITE,
                    icon: x.Z,
                    src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                    format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : O.EO.IMAGE
                }
            }
            var qe = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && He(e, t)
                }(n, e);
                var t = Ve(n);

                function n() {
                    Ge(this, n);
                    var e;
                    (e = t.apply(this, arguments))._masonryRef = o.createRef();
                    e.state = {
                        favoritesTile: Qe(e.props.favorites),
                        selectedIndex: {
                            column: 0,
                            row: 0
                        },
                        focusedId: null
                    };
                    e.handleFocus = function(t) {
                        var n = e._masonryRef.current;
                        if (null != n) {
                            var r = n.getCoordsMap()[t];
                            if (null != r) {
                                n.scrollIntoViewRect({
                                    start: r.top - 10,
                                    end: r.top + r.height + 10
                                });
                                e.setState({
                                    focusedId: t
                                })
                            }
                        }
                    };
                    e.handleSelect = function(t) {
                        var n = e.props.onSelectItem,
                            r = e.getData().find((function(e) {
                                return e.name === t
                            }));
                        null != r && null != n && n(r.type, r.name)
                    };
                    e.getItemKey = function(t, n) {
                        if (t > 0) return null;
                        var r = e.getData()[n];
                        return null != r ? r.name : null
                    };
                    e.memoizedData = (0, A.oH)((function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return n ? Le(t) : [e].concat(Le(t))
                    }));
                    e.renderItem = function(t, n, o, i) {
                        if (t > 0) return null;
                        var u = e.getData()[n];
                        if (null != u) {
                            var s = e.props,
                                a = s.onSelectItem,
                                c = s.imagePool,
                                l = s.videoPool,
                                f = e.state.focusedId;
                            return (0, r.jsx)(Pe, {
                                format: u.format,
                                color: R.Z.unsafe_rawColors.PRIMARY_800.css,
                                src: u.src,
                                item: u,
                                index: n,
                                coords: o,
                                onClick: function() {
                                    return a(u.type, u.name)
                                },
                                renderExtras: e.renderCategoryExtras,
                                focused: u.name === f,
                                imagePool: c,
                                videoPool: l
                            }, i)
                        }
                    };
                    e.renderContent = function(t, n, o) {
                        return 0 === e.props.trendingCategories.length ? (0, r.jsx)(re, {
                            columns: t,
                            width: n,
                            renderColumn: Ue
                        }) : (0, r.jsx)(a.MasonryList, {
                            ref: e._masonryRef,
                            fade: !0,
                            className: Ne().container,
                            itemGutter: 12,
                            getItemKey: e.getItemKey,
                            columns: t,
                            getItemHeight: function() {
                                return 110
                            },
                            renderItem: e.renderItem,
                            sections: [e.getData().length],
                            chunkSize: 50
                        })
                    };
                    e.getItemGrid = function() {
                        var t = e._masonryRef.current;
                        return null != t ? t.getItemGrid() : []
                    };
                    e.getCoordsMap = function() {
                        var t = e._masonryRef.current;
                        return null != t ? t.getCoordsMap() : {}
                    };
                    return e
                }
                var i = n.prototype;
                i.componentDidMount = function() {
                    0 === this.props.trendingCategories.length && (0, l.Tg)()
                };
                i.getData = function() {
                    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
                };
                i.renderCategoryExtras = function(e) {
                    var t = e.name,
                        n = e.icon,
                        i = e.type;
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: i === b.wI2.FAVORITES ? Ne().categoryFadeBlurple : Ne().categoryFade
                        }), (0, r.jsxs)("div", {
                            className: Ne().categoryText,
                            children: [null != n ? (0, r.jsx)(n, {
                                className: Ne().categoryIcon
                            }) : null, (0, r.jsx)("span", {
                                className: Ne().categoryName,
                                children: t
                            })]
                        })]
                    })
                };
                i.render = function() {
                    return (0, r.jsx)(T, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, r.jsx)(L, {
                            desiredItemWidth: 200,
                            maxColumns: 6,
                            children: this.renderContent
                        })
                    })
                };
                return n
            }(o.PureComponent);

            function Ke(e) {
                var t = (0, s.e7)([p.Z], (function() {
                        return p.Z.getTrendingCategories()
                    })),
                    n = (0, m.gG)(),
                    o = xe();
                return (0, r.jsx)(qe, Ze(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            ke(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e, o), {
                    trendingCategories: t,
                    favorites: n
                }))
            }
            var Xe = n(936957),
                Ye = n(958074),
                ze = n.n(Ye);

            function $e(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Je(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function et(e) {
                et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return et(e)
            }

            function tt(e, t) {
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

            function nt(e, t) {
                return !t || "object" !== ot(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function rt(e, t) {
                rt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return rt(e, t)
            }
            var ot = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function it(e) {
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
                    var n, r = et(e);
                    if (t) {
                        var o = et(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return nt(this, n)
                }
            }
            var ut = function(e) {
                    return e.stopPropagation()
                },
                st = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && rt(e, t)
                    }(n, e);
                    var t = it(n);

                    function n() {
                        $e(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            resultType: null
                        };
                        e.searchBarRef = o.createRef();
                        e.backToFrontPage = function(t) {
                            var n = e.state.resultType;
                            if (t.keyCode === b.yXg.ESCAPE && null != n) {
                                t.stopPropagation();
                                t.preventDefault();
                                e.handleClearQuery()
                            }
                        };
                        e.handleChangeQuery = function(t) {
                            (0, f.ql)(t);
                            e.search(t, b.wI2.SEARCH)
                        };
                        e.handleSelectSuggestion = function(t) {
                            (0, f.ql)("");
                            l.v2();
                            e.search(t, b.wI2.SEARCH_SUGGESTION, !0)
                        };
                        e.handleClearQuery = function() {
                            var t = e.searchBarRef.current;
                            (0, f.ql)("");
                            l.v2();
                            e.setState({
                                resultType: null
                            });
                            null != t && t.focus()
                        };
                        e.handleSelectGIF = function(t) {
                            var n = e.props.onSelectGIF;
                            null != n && n(t)
                        };
                        e.handleSelectItem = function(t, n) {
                            var r = e.searchBarRef.current;
                            switch (t) {
                                case b.wI2.TRENDING_CATEGORY:
                                    l.yC(n, b.wI2.TRENDING_CATEGORY, !0);
                                    null != r && r.focus();
                                    break;
                                case b.wI2.TRENDING_GIFS:
                                    l.UU()
                            }
                            e.setState({
                                resultType: t
                            })
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        l.gK();
                        document.addEventListener("keydown", this.backToFrontPage);
                        "" !== this.props.query && this.search(this.props.query, b.wI2.SEARCH)
                    };
                    i.componentWillUnmount = function() {
                        c.Z.wait((function() {
                            return l.v2()
                        }));
                        document.removeEventListener("keydown", this.backToFrontPage)
                    };
                    i.search = function(e, t, n) {
                        l.yC(e, t, n);
                        "" === e ? this.setState({
                            resultType: null
                        }) : this.state.resultType !== b.wI2.SEARCH && this.setState({
                            resultType: b.wI2.SEARCH
                        })
                    };
                    i.renderHeaderContent = function() {
                        var e = this.props.query;
                        switch (this.state.resultType) {
                            case b.wI2.FAVORITES:
                                return (0, r.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: ze().searchHeader,
                                    children: ae.Z.Messages.CATEGORY_FAVORITE
                                });
                            case b.wI2.TRENDING_GIFS:
                                return (0, r.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: ze().searchHeader,
                                    children: ae.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                                });
                            default:
                                return (0, r.jsx)(h.Z, {
                                    className: ze().searchBar,
                                    size: h.Z.Sizes.MEDIUM,
                                    query: e,
                                    onChange: this.handleChangeQuery,
                                    onClear: this.handleClearQuery,
                                    placeholder: ae.Z.Messages.SEARCH_TENOR,
                                    "aria-label": ae.Z.Messages.SEARCH_TENOR,
                                    ref: this.searchBarRef,
                                    autoFocus: !0
                                })
                        }
                    };
                    i.renderHeader = function() {
                        var e = null;
                        null != this.state.resultType && (e = (0, r.jsx)(a.Clickable, {
                            onClick: this.handleClearQuery,
                            className: ze().backButton,
                            "aria-label": ae.Z.Messages.BACK,
                            children: (0, r.jsx)(y.Z, {
                                title: ae.Z.Messages.BACK
                            })
                        }));
                        return (0, r.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [e, this.renderHeaderContent()]
                        })
                    };
                    i.renderContent = function() {
                        var e = this.props,
                            t = e.resultItems,
                            n = e.resultQuery,
                            o = e.query,
                            i = e.favorites,
                            u = e.searchOffset,
                            s = e.searchLimit,
                            a = e.searchTotalResults,
                            c = e.suggestions,
                            l = e.hideFavorites,
                            f = this.state.resultType;
                        return null == f ? (0, r.jsx)(Ke, {
                            hideFavoritesTile: l,
                            onSelectItem: this.handleSelectItem
                        }) : (0, r.jsx)(Ae, {
                            data: f === b.wI2.FAVORITES ? i : t,
                            onSelectGIF: this.handleSelectGIF,
                            resultType: f,
                            resultQuery: n,
                            query: o,
                            searchOffset: u,
                            searchLimit: s,
                            searchTotalResults: a,
                            suggestions: c,
                            onSelectSuggestion: this.handleSelectSuggestion
                        })
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.forwardedRef;
                        return (0, r.jsxs)("div", {
                            id: Xe.vO,
                            role: "tabpanel",
                            "aria-labelledby": Xe._3,
                            className: u()(ze().container, t),
                            onClick: ut,
                            ref: n,
                            children: [(0, r.jsx)("div", {
                                className: ze().header,
                                children: this.renderHeader()
                            }), (0, r.jsx)("div", {
                                className: ze().content,
                                children: this.renderContent()
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            const at = o.forwardRef((function(e, t) {
                e.persistSearch || (0, f.ql)("");
                var n = (0, s.cj)([p.Z], (function() {
                        return {
                            query: p.Z.getQuery(),
                            resultQuery: p.Z.getResultQuery(),
                            resultItems: p.Z.getResultItems(),
                            suggestions: p.Z.getSuggestions()
                        }
                    })),
                    o = n.query,
                    i = n.resultQuery,
                    u = n.resultItems,
                    a = n.suggestions,
                    c = (0, f.Iu)((function(e) {
                        return e.searchQuery
                    })),
                    l = null != c && "" !== c ? c : o,
                    d = (0, m.HI)();
                return (0, r.jsx)(st, tt(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Je(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    forwardedRef: t,
                    query: l,
                    resultQuery: i,
                    resultItems: u,
                    suggestions: a,
                    favorites: d,
                    searchOffset: 0,
                    searchTotalResults: p.Z.getResultItems().length,
                    searchLimit: null
                }))
            }))
        }
    }
]);