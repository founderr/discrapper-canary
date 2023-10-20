"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [17081, 84991], {
        714898: (t, e, n) => {
            n.d(e, {
                Z: () => T
            });
            var r, o = n(785893),
                i = n(667294),
                c = n(294184),
                a = n.n(c),
                s = n(823493),
                l = n.n(s),
                u = n(853158),
                f = n(443660),
                p = n(775461),
                d = n(2590);

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var y = (h(r = {}, d.EkH.MODAL_CAROUSEL_NEXT, p.XM), h(r, d.EkH.MODAL_CAROUSEL_PREV, p.py), h(r, d.EkH.CLOSE_MODAL, p.U3), r),
                b = n(241166),
                O = n(874049),
                m = n(910348),
                g = n(930948),
                v = n(848886),
                P = n.n(v);

            function j(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function C(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function w(t) {
                w = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return w(t)
            }

            function S(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && N(t, e)
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        C(t, e, n[e])
                    }))
                }
                return t
            }

            function x(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function N(t, e) {
                N = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return N(t, e)
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function R(t) {
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
                    var n, r = w(t);
                    if (e) {
                        var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return x(this, n)
                }
            }
            var L = {
                friction: 10,
                tension: 100
            };

            function k(t, e) {
                return (t % e + e) % e
            }
            var I = function(t) {
                    S(n, t);
                    var e = R(n);

                    function n() {
                        j(this, n);
                        var t;
                        (t = e.apply(this, arguments)).state = {
                            translate: new u.Z.Value(0),
                            opacity: new u.Z.Value(1)
                        };
                        return t
                    }
                    var r = n.prototype;
                    r.componentWillEnter = function(t) {
                        var e = this.props.directionHistory,
                            n = this.state,
                            r = n.translate,
                            o = n.opacity;
                        r.setValue(e[e.length - 1]);
                        o.setValue(0);
                        t();
                        u.Z.parallel([u.Z.timing(o, {
                            toValue: 1,
                            easing: u.Z.Easing.out(u.Z.Easing.linear),
                            duration: 200
                        }), u.Z.spring(r, E({
                            toValue: 0
                        }, L))]).start()
                    };
                    r.componentWillLeave = function(t) {
                        var e = this.props.directionHistory,
                            n = this.state,
                            r = n.opacity,
                            o = n.translate;
                        u.Z.parallel([u.Z.timing(r, {
                            toValue: 0,
                            easing: u.Z.Easing.in(u.Z.Easing.linear),
                            duration: 200
                        }), u.Z.spring(o, E({
                            toValue: -1 * e[e.length - 1]
                        }, L))]).start(t)
                    };
                    r.getStyle = function() {
                        var t = this.state,
                            e = t.translate,
                            n = t.opacity;
                        return u.Z.accelerate({
                            opacity: n,
                            transform: [{
                                translateX: e.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0px", "300px"]
                                })
                            }]
                        })
                    };
                    r.render = function() {
                        var t = this.props.item,
                            e = this.props.className;
                        return (0, o.jsx)(u.Z.img, {
                            src: t.src,
                            alt: "",
                            className: a()(P().slide, e),
                            style: this.getStyle()
                        })
                    };
                    return n
                }(i.Component),
                T = function(t) {
                    S(n, t);
                    var e = R(n);

                    function n(t) {
                        j(this, n);
                        var r;
                        (r = e.call(this, t)).gotoNext = function() {
                            var t = r.state.currentIndex;
                            r.navigateTo(t + 1)
                        };
                        r.gotoPrev = function() {
                            var t = r.state.currentIndex;
                            r.navigateTo(t - 1)
                        };
                        r.gotoNextThrottled = l()(r.gotoNext, 300);
                        r.gotoPrevThrottled = l()(r.gotoPrev, 300);
                        r.state = {
                            currentIndex: t.startWith,
                            directionHistory: []
                        };
                        return r
                    }
                    var r = n.prototype;
                    r.componentDidMount = function() {
                        this.preloadNextImages();
                        b.Z.disable();
                        b.Z.enableTemp(y);
                        g.S.subscribe(d.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled);
                        g.S.subscribe(d.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
                    };
                    r.componentWillUnmount = function() {
                        b.Z.disableTemp();
                        g.S.unsubscribe(d.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled);
                        g.S.unsubscribe(d.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
                    };
                    r.preloadNextImages = function() {
                        var t = this.state.currentIndex,
                            e = this.props.items,
                            n = k(t + 1, e.length),
                            r = k(t - 1, e.length);
                        this.preloadImage(e[n]);
                        this.preloadImage(e[r])
                    };
                    r.preloadImage = function(t) {
                        (0, O.po)(t.src)
                    };
                    r.componentDidUpdate = function(t, e) {
                        this.state.currentIndex !== e.currentIndex && this.preloadNextImages()
                    };
                    r.navigateTo = function(t) {
                        var e, n, r = this.state,
                            o = r.directionHistory,
                            i = r.currentIndex;
                        o.push(t - i);
                        t = k(t, this.props.items.length);
                        this.setState({
                            currentIndex: t,
                            directionHistory: o
                        });
                        null === (n = (e = this.props).onIndexChange) || void 0 === n || n.call(e, t)
                    };
                    r.render = function() {
                        var t, e = this.props.className,
                            n = this.state,
                            r = n.currentIndex,
                            i = n.directionHistory,
                            c = this.props.modalCarouselItemClassName,
                            s = this.props.items[r],
                            l = this.props.items;
                        return (0, o.jsxs)(f.Z, {
                            component: "div",
                            className: a()(P().wrapper, e),
                            children: [l.length > 1 ? (0, o.jsx)(m.am, {
                                className: P().navPrev,
                                onClick: this.gotoPrev
                            }) : null, null !== (t = s.component) && void 0 !== t ? t : (0, o.jsx)(I, {
                                item: s,
                                directionHistory: i,
                                className: c
                            }, s.src), l.length > 1 ? (0, o.jsx)(m.Pz, {
                                className: P().navNext,
                                onClick: this.gotoNext
                            }) : null]
                        })
                    };
                    return n
                }(i.Component);
            T.defaultProps = {
                startWith: 0
            }
        },
        775461: (t, e, n) => {
            n.d(e, {
                U3: () => p,
                XM: () => u,
                hd: () => l,
                lI: () => s,
                py: () => f
            });
            var r = n(70418),
                o = n(50433),
                i = n(930948),
                c = n(2590),
                a = function() {
                    return o.Z.hasLayers() || (0, r.hasAnyModalOpen)()
                },
                s = {
                    binds: ["right"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        if (!a()) {
                            i.S.dispatch(c.CkL.CAROUSEL_NEXT);
                            return !1
                        }
                    }
                },
                l = {
                    binds: ["left"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        if (!a()) {
                            i.S.dispatch(c.CkL.CAROUSEL_PREV);
                            return !1
                        }
                    }
                },
                u = {
                    binds: ["right", "down", "space"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        i.S.dispatch(c.CkL.MODAL_CAROUSEL_NEXT);
                        return !1
                    }
                },
                f = {
                    binds: ["left", "up"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        i.S.dispatch(c.CkL.MODAL_CAROUSEL_PREV);
                        return !1
                    }
                },
                p = {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        if (i.S.hasSubscribers(c.CkL.MODAL_CLOSE)) {
                            i.S.dispatch(c.CkL.MODAL_CLOSE);
                            return !1
                        }
                    }
                }
        },
        484991: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => u
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(70418),
                a = n(714898),
                s = n(51353),
                l = n.n(s);

            function u(t) {
                var e = t.className,
                    n = t.transitionState,
                    o = t.items,
                    s = t.startingIndex,
                    u = t.onClose,
                    f = t.onIndexChange,
                    p = t.modalCarouselClassName,
                    d = t.modalCarouselItemClassName;
                return (0, r.jsx)(c.ModalRoot, {
                    hideShadow: !0,
                    className: i()(l().carouselModal, e),
                    size: c.ModalSize.DYNAMIC,
                    transitionState: n,
                    "aria-label": "",
                    onClick: u,
                    children: (0, r.jsx)(a.Z, {
                        className: p,
                        items: o,
                        startWith: s,
                        onIndexChange: f,
                        modalCarouselItemClassName: d
                    })
                })
            }
        },
        677483: (t, e, n) => {
            n.d(e, {
                Z: () => P
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                a = n(653593),
                s = n(676415),
                l = n.n(s);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function d(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function b(t) {
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
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var O, m = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                g = (f(O = {}, m.UP, l().up), f(O, m.RIGHT, l().right), f(O, m.DOWN, l().down), f(O, m.LEFT, l().left), O),
                v = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && h(t, e)
                    }(n, t);
                    var e = b(n);

                    function n() {
                        u(this, n);
                        return e.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var t = this.props,
                            e = t.direction,
                            n = t.className;
                        return (0, r.jsx)(a.Z, {
                            className: c()(l().arrow, n, f({}, g[e], !0))
                        })
                    };
                    return n
                }(o.PureComponent);
            v.Directions = m;
            const P = v
        },
        910348: (t, e, n) => {
            n.d(e, {
                Pz: () => P,
                ZP: () => j,
                am: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                a = n(70418),
                s = n(677483),
                l = n(651246),
                u = n.n(l);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function d(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && y(t, e)
            }

            function h(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function y(t, e) {
                y = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return y(t, e)
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
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
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var m = {
                    CENTER: u().alignCenter,
                    LEFT: u().alignLeft
                },
                g = function(t) {
                    d(n, t);
                    var e = O(n);

                    function n() {
                        f(this, n);
                        var t;
                        (t = e.apply(this, arguments))._scrollerRef = null;
                        t._paginationItemRefs = [];
                        t.handleSetScrollerRef = function(e) {
                            t._scrollerRef = e
                        };
                        t.handleSelectedIndexChange = function(e) {
                            var n = t._scrollerRef;
                            if (null != n) {
                                var r = t._paginationItemRefs[e];
                                null != r && n.scrollIntoViewNode({
                                    node: r,
                                    animate: !0,
                                    padding: t.props.scrollToPadding
                                })
                            }
                        };
                        t.handlePageClick = function(e) {
                            (0, t.props.onSetItem)(e)
                        };
                        return t
                    }
                    var i = n.prototype;
                    i.componentDidUpdate = function(t) {
                        var e = this.props.selectedIndex;
                        t.selectedIndex !== e && this.handleSelectedIndexChange(e)
                    };
                    i.render = function() {
                        var t = this,
                            e = this.props,
                            n = e.renderItem,
                            i = e.items,
                            s = e.vertical,
                            l = e.paginationContainerClass,
                            f = e.align,
                            p = s ? u().verticalPaginationItemContainer : u().horizontalPaginationItemContainer;
                        return (0, r.jsx)(a.AdvancedScrollerAuto, {
                            orientation: s ? "vertical" : "horizontal",
                            className: c()(p, l, f),
                            ref: this.handleSetScrollerRef,
                            children: i.map((function(e, r) {
                                return o.cloneElement(n(e, r), {
                                    onClick: function() {
                                        return t.handlePageClick(r)
                                    },
                                    key: r,
                                    ref: function(e) {
                                        t._paginationItemRefs[r] = e
                                    }
                                })
                            }))
                        })
                    };
                    return n
                }(o.PureComponent);
            g.Align = m;
            g.defaultProps = {
                scrollToPadding: {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                align: m.CENTER
            };
            var v = function(t) {
                    d(n, t);
                    var e = O(n);

                    function n() {
                        f(this, n);
                        var t;
                        (t = e.apply(this, arguments)).handlePrevClick = function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            var n = t.props.onClick;
                            null == n || n(e)
                        };
                        return t
                    }
                    n.prototype.render = function() {
                        var t = this.props.className;
                        return (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.BLANK,
                            size: a.Button.Sizes.NONE,
                            className: c()(u().prevButtonContainer, t),
                            onClick: this.handlePrevClick,
                            children: (0, r.jsx)(s.Z, {
                                className: u().arrow,
                                direction: s.Z.Directions.LEFT
                            })
                        })
                    };
                    return n
                }(o.PureComponent),
                P = function(t) {
                    d(n, t);
                    var e = O(n);

                    function n() {
                        f(this, n);
                        var t;
                        (t = e.apply(this, arguments)).handleNextClick = function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            var n = t.props.onClick;
                            null == n || n(e)
                        };
                        return t
                    }
                    n.prototype.render = function() {
                        var t = this.props.className;
                        return (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.BLANK,
                            size: a.Button.Sizes.NONE,
                            className: c()(u().nextButtonContainer, t),
                            onClick: this.handleNextClick,
                            children: (0, r.jsx)(s.Z, {
                                className: u().arrow,
                                direction: s.Z.Directions.RIGHT
                            })
                        })
                    };
                    return n
                }(o.PureComponent);
            const j = g
        },
        653593: (t, e, n) => {
            n.d(e, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                c = n(633878);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t, e) {
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

            function l(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }
            var u = n(873308);

            function f(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t, e) {
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
            const d = (0, o.hN)((function(t) {
                return (0, r.jsx)(u.Z, p(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            f(t, e, n[e])
                        }))
                    }
                    return t
                }({}, t), {
                    direction: u.Z.Directions.UP
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    u = void 0 === o ? 24 : o,
                    f = t.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = t.colorClass,
                    h = void 0 === d ? "" : d,
                    y = l(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(t) {
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
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        }
    }
]);