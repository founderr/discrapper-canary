(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30685], {
        482311: (t, e, n) => {
            t.exports = n.p + "7dff643389e72959a10d6d96543b8d92.svg"
        },
        803551: (t, e, n) => {
            t.exports = n.p + "a57f87f219321ac21e3246a848901bb6.png"
        },
        891616: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1;
                            r.configurable = !0;
                            "value" in r && (r.writable = !0);
                            Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        n && t(e.prototype, n);
                        r && t(e, r);
                        return e
                    }
                }(),
                i = n(667294),
                c = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(316695);
            var s = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t);

                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    r.padState = {
                        connected: !1,
                        buttons: {
                            A: !1,
                            B: !1,
                            X: !1,
                            Y: !1,
                            LB: !1,
                            LT: !1,
                            LS: !1,
                            RB: !1,
                            RT: !1,
                            RS: !1,
                            Start: !1,
                            Back: !1,
                            DPadUp: !1,
                            DPadRight: !1,
                            DPadDown: !1,
                            DPadLeft: !1
                        },
                        axis: {
                            LeftStickX: 0,
                            LeftStickY: 0,
                            RightStickX: 0,
                            RightStickY: 0,
                            RightTrigger: 0,
                            LeftTrigger: 0
                        }
                    };
                    return r
                }
                o(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0;
                        window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.mounted = !1
                    }
                }, {
                    key: "updateGamepad",
                    value: function() {
                        if (this.mounted) {
                            var t = this.props.gamepadIndex,
                                e = navigator.getGamepads();
                            if (e.length && e.length > t && e[t]) {
                                var n = e[t];
                                if (!this.padState.connected) {
                                    this.padState.connected = !0;
                                    this.props.onConnect(t)
                                }
                                this.updateAllButtons(n);
                                this.updateAllAxis(n)
                            } else if (this.padState.connected) {
                                this.padState.connected = !1;
                                this.props.onDisconnect(t)
                            }
                            window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                        }
                    }
                }, {
                    key: "updateAllButtons",
                    value: function(t) {
                        for (var e = 0; e < t.buttons.length; ++e) {
                            var n = t.buttons[e].pressed,
                                r = t.buttons[e].value,
                                o = this.buttonIndexToButtonName(e);
                            this.updateButton(o, n);
                            var i = this.buttonIndexToAxisName(e);
                            this.updateAxis(i, r)
                        }
                    }
                }, {
                    key: "updateButton",
                    value: function(t, e) {
                        if (void 0 === this.padState.buttons[t]) console.error("Unknown button " + t);
                        else if (this.padState.buttons[t] !== e) {
                            this.padState.buttons[t] = e;
                            this.props.onButtonChange(t, e);
                            this.props["onButton" + (e ? "Down" : "Up")](t);
                            e && this.props["on" + t.replace("DPad", "")]()
                        }
                    }
                }, {
                    key: "updateAllAxis",
                    value: function(t) {
                        for (var e = 0; e < t.axes.length; ++e) {
                            var n = this.axisIndexToAxisName(e);
                            t.axes[e];
                            this.updateAxis(n, t.axes[e])
                        }
                    }
                }, {
                    key: "updateAxis",
                    value: function(t, e) {
                        if (t && null != e && NaN !== e) {
                            var n = "-" === t[0],
                                r = e * (n ? -1 : 1);
                            Math.abs(r) < this.props.deadZone && (r = 0);
                            n && (t = t.substr(1));
                            if (this.padState.axis[t] !== r) {
                                var o = this.padState.axis[t];
                                this.padState.axis[t] = r;
                                this.props.onAxisChange(t, r, o);
                                if ("LeftStickX" === t) {
                                    o <= this.props.stickThreshold && r > this.props.stickThreshold && this.props.onRight();
                                    o >= -this.props.stickThreshold && r < -this.props.stickThreshold && this.props.onLeft()
                                }
                                if ("LeftStickY" === t) {
                                    o <= this.props.stickThreshold && r > this.props.stickThreshold && this.props.onUp();
                                    o >= -this.props.stickThreshold && r < -this.props.stickThreshold && this.props.onDown()
                                }
                            }
                        }
                    }
                }, {
                    key: "buttonIndexToButtonName",
                    value: function(t) {
                        var e = this.props.layout;
                        return e.buttons && e.buttons.length >= t + 1 ? e.buttons[t] : null
                    }
                }, {
                    key: "buttonIndexToAxisName",
                    value: function(t) {
                        var e = this.props.layout;
                        return e.buttonAxis && e.buttonAxis.length >= t + 1 ? e.buttonAxis[t] : null
                    }
                }, {
                    key: "axisIndexToAxisName",
                    value: function(t) {
                        var e = this.props.layout;
                        return e.axis && e.axis.length >= t + 1 ? e.axis[t] : null
                    }
                }, {
                    key: "render",
                    value: function() {
                        return c.default.Children.only(this.props.children)
                    }
                }]);
                return e
            }(c.default.Component);
            s.defaultProps = {
                layout: u.XBOX,
                stickThreshold: .5,
                deadZone: .08,
                gamepadIndex: 0,
                onConnect: function() {},
                onDisconnect: function() {},
                onButtonDown: function() {},
                onButtonUp: function() {},
                onButtonChange: function() {},
                onAxisChange: function() {},
                onA: function() {},
                onB: function() {},
                onX: function() {},
                onY: function() {},
                onStart: function() {},
                onBack: function() {},
                onLT: function() {},
                onRT: function() {},
                onLB: function() {},
                onRB: function() {},
                onLS: function() {},
                onRS: function() {},
                onUp: function() {},
                onDown: function() {},
                onLeft: function() {},
                onRight: function() {}
            };
            e.default = s
        },
        430209: (t, e, n) => {
            "use strict";
            ({
                value: !0
            });
            void 0;
            var r = i(n(891616)),
                o = i(n(316695));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            r.default.layouts = o.default;
            r.default;
            o.default;
            e.ZP = r.default
        },
        551639: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                buttons: ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "Back", "Start", "LS", "RS", "DPadUp", "DPadDown", "DPadLeft", "DPadRight"],
                axis: ["LeftStickX", "-LeftStickY", "RightStickX", "-RightStickY"],
                buttonAxis: [null, null, null, null, null, null, "LeftTrigger", "RightTrigger"]
            }
        },
        316695: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.XBOX = void 0;
            var r, o = n(551639),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            e.XBOX = i.default;
            e.default = {
                XBOX: i.default
            }
        },
        607733: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(430209),
                c = n(795308),
                u = n(304548),
                s = n(168075),
                l = n(633878);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function f(t, e) {
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

            function p(t, e) {
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

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t, e) {
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

            function h(t, e) {
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
            const y = (0, s.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 30 : e,
                    o = t.height,
                    i = void 0 === o ? 30 : o,
                    c = t.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = t.foreground,
                    a = t.background,
                    f = t.backgroundColor,
                    p = h(t, ["width", "height", "color", "foreground", "background", "backgroundColor"]);
                return (0, r.jsx)("svg", b(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            d(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, l.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 30 30",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("circle", {
                            cx: "15",
                            cy: "15",
                            r: "15",
                            fill: f,
                            className: a
                        }), (0, r.jsx)("path", {
                            d: "M22.1001 22H19.3946L18.2136 18.6522H11.9866L10.8056 22H8.1001L13.7259 7H16.4743L22.1001 22ZM15.1001 9.76087L12.8026 16.3261H17.3976L15.1001 9.76087Z",
                            fill: u,
                            className: s
                        })]
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    u = t.color,
                    s = void 0 === u ? c.Z.colors.INTERACTIVE_NORMAL : u,
                    d = t.colorClass,
                    b = void 0 === d ? "" : d,
                    h = p(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", f(function(t) {
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
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M20.845 21.321a.5.5 0 0 1-.467.679h-1.516a1 1 0 0 1-.94-.66l-1.551-4.276H7.625l-1.55 4.277a1 1 0 0 1-.94.659H3.617a.5.5 0 0 1-.467-.678l7.087-18.594a1 1 0 0 1 .935-.644h1.624a1 1 0 0 1 .934.643l7.115 18.594ZM11.984 5.086l-3.435 9.438h6.87l-3.435-9.438Z",
                        className: b
                    })
                }))
            }));

            function O(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function g(t, e) {
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

            function v(t, e) {
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

            function j(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function w(t, e) {
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

            function m(t, e) {
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
            const P = (0, s.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 30 : e,
                    o = t.height,
                    i = void 0 === o ? 30 : o,
                    c = t.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = t.foreground,
                    a = t.background,
                    f = t.backgroundColor,
                    p = m(t, ["width", "height", "color", "foreground", "background", "backgroundColor"]);
                return (0, r.jsx)("svg", w(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            j(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, l.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 30 30",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("circle", {
                            cx: "15",
                            cy: "15",
                            r: "15",
                            fill: f,
                            className: a
                        }), (0, r.jsx)("path", {
                            d: "M10.116 22.3089V7.12891H16.518C17.7206 7.12891 18.6886 7.48091 19.422 8.18491C20.17 8.88891 20.544 9.82024 20.544 10.9789C20.544 11.8882 20.3313 12.6216 19.906 13.1789C19.4953 13.7216 18.96 14.1176 18.3 14.3669C20.192 14.8216 21.138 16.0682 21.138 18.1069C21.138 19.5296 20.7126 20.5856 19.862 21.2749C19.026 21.9642 17.838 22.3089 16.298 22.3089H10.116ZM15.638 13.4209C17.2073 13.4209 17.992 12.7462 17.992 11.3969C17.992 10.7076 17.7866 10.1942 17.376 9.85691C16.9653 9.51957 16.386 9.35091 15.638 9.35091H12.668V13.4209H15.638ZM15.968 20.0869C16.76 20.0869 17.3906 19.9109 17.86 19.5589C18.344 19.2069 18.586 18.6422 18.586 17.8649C18.586 17.0876 18.344 16.5229 17.86 16.1709C17.3906 15.8189 16.76 15.6429 15.968 15.6429H12.668V20.0869H15.968Z",
                            fill: u,
                            className: s
                        })]
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    u = t.color,
                    s = void 0 === u ? c.Z.colors.INTERACTIVE_NORMAL : u,
                    a = t.colorClass,
                    f = void 0 === a ? "" : a,
                    p = v(t, ["width", "height", "color", "colorClass"]);
                return (0,
                    r.jsx)("svg", g(function(t) {
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
                }({}, (0, l.Z)(p)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M6.459 22a1 1 0 0 1-1-1V3.084a1 1 0 0 1 1-1h7.053c1.578 0 2.838.462 3.781 1.385.943.924 1.414 2.146 1.414 3.666 0 1.174-.269 2.126-.808 2.858a4.636 4.636 0 0 1-2.02 1.587c2.463.616 3.694 2.252 3.694 4.907 0 1.886-.548 3.28-1.645 4.185-1.097.885-2.646 1.328-4.647 1.328H6.459Zm6.158-11.43c1.078 0 1.915-.25 2.511-.75.597-.5.895-1.26.895-2.28 0-1.02-.298-1.78-.895-2.281-.596-.52-1.433-.78-2.51-.78H8.171v6.09h4.445Zm.606 9.034c1.116 0 1.992-.27 2.627-.808.654-.558.981-1.395.981-2.511s-.327-1.944-.981-2.482c-.635-.54-1.51-.809-2.627-.809h-5.05v6.61h5.05Z",
                        className: f
                    })
                }))
            }));
            var x = n(230624),
                S = n.n(x);

            function k(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function C(t) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return C(t)
            }

            function D(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && B(t, e)
            }

            function L(t, e) {
                return !e || "object" !== R(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function B(t, e) {
                B = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return B(t, e)
            }
            var R = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function A(t) {
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
                    var n, r = C(t);
                    if (e) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }
            var _ = {
                    A: {
                        Icon: y,
                        color: c.Z.unsafe_rawColors.PRIMARY_400.css
                    },
                    B: {
                        Icon: P,
                        color: c.Z.unsafe_rawColors.RED_360.css
                    }
                },
                T = function(t) {
                    D(n, t);
                    var e = A(n);

                    function n() {
                        k(this, n);
                        return e.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var t = this.props,
                            e = t.type,
                            n = t.text,
                            o = t.style,
                            i = t.onClick,
                            s = null != i ? {
                                cursor: "pointer"
                            } : void 0,
                            l = e.Icon;
                        return (0, r.jsxs)(u.Clickable, {
                            className: S().gamepadButtonContainer,
                            style: s,
                            onClick: i,
                            children: [(0, r.jsx)(l, {
                                className: o,
                                color: e.color,
                                backgroundColor: c.Z.unsafe_rawColors.PRIMARY_600.css
                            }), (0, r.jsx)("div", {
                                className: S().gamepadButtonText,
                                children: n
                            })]
                        })
                    };
                    return n
                }(o.Component);
            T.A = _.A;
            T.B = _.B;
            var Z = function(t) {
                D(n, t);
                var e = A(n);

                function n() {
                    k(this, n);
                    var t;
                    (t = e.apply(this, arguments)).state = {
                        gamepadConnected: !1
                    };
                    t.setGamepadConnected = function() {
                        t.setState({
                            gamepadConnected: !0
                        })
                    };
                    t.setGamepadDisconnected = function() {
                        t.setState({
                            gamepadConnected: !1
                        })
                    };
                    return t
                }
                n.prototype.render = function() {
                    var t = this.props,
                        e = t.onAPressed,
                        n = t.onBPressed,
                        c = t.children;
                    if (null == c) return null;
                    var u = o.cloneElement(o.Children.only(c), {
                        hasGamepad: this.state.gamepadConnected
                    });
                    return (0, r.jsx)(i.ZP, {
                        onA: e,
                        onB: n,
                        onConnect: this.setGamepadConnected,
                        onDisconnect: this.setGamepadDisconnected,
                        children: u
                    })
                };
                return n
            }(o.PureComponent);
            Z.Button = T;
            const E = Z
        },
        973323: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                c = n(633878);

            function u(t, e, n) {
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

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function f(t, e) {
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

            function p(t, e) {
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
            const d = (0, o.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 16 : e,
                    o = t.height,
                    i = void 0 === o ? 16 : o,
                    u = t.color,
                    s = void 0 === u ? "currentColor" : u,
                    l = t.foreground,
                    d = p(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(t) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: s,
                            d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
                        })
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    o = t.height,
                    a = void 0 === o ? 24 : o,
                    f = t.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = t.colorClass,
                    b = void 0 === d ? "" : d,
                    h = l(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            u(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, c.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M9.996 3.103c.87-1.47 3.139-1.47 4.008 0l8.71 14.742C23.552 19.264 22.449 21 20.71 21H3.29c-1.74 0-2.842-1.736-2.004-3.155l8.71-14.742ZM13.25 17.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.188-3.748.372-5.94A1 1 0 0 0 12.436 7h-.871a1 1 0 0 0-.999 1.062l.372 5.94a1.064 1.064 0 0 0 2.124 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);