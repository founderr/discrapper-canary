(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82374"], {
        582247: function(t, e, n) {
            "use strict";
            n("70102"), n("854508"), n("781738"), Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n("884691")),
                s = n("315401"),
                Gamepad = function(t) {
                    function Gamepad(t, e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, Gamepad);
                        var n = function(t, e) {
                            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e && ("object" == typeof e || "function" == typeof e) ? e : t
                        }(this, (Gamepad.__proto__ || Object.getPrototypeOf(Gamepad)).call(this, t, e));
                        return n.padState = {
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
                        }, n
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(Gamepad, t), o(Gamepad, [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
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
                                    !this.padState.connected && (this.padState.connected = !0, this.props.onConnect(t)), this.updateAllButtons(n), this.updateAllAxis(n)
                                } else this.padState.connected && (this.padState.connected = !1, this.props.onDisconnect(t));
                                window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                            }
                        }
                    }, {
                        key: "updateAllButtons",
                        value: function(t) {
                            for (var e = 0; e < t.buttons.length; ++e) {
                                var n = t.buttons[e].pressed,
                                    o = t.buttons[e].value,
                                    i = this.buttonIndexToButtonName(e);
                                this.updateButton(i, n);
                                var s = this.buttonIndexToAxisName(e);
                                this.updateAxis(s, o)
                            }
                        }
                    }, {
                        key: "updateButton",
                        value: function(t, e) {
                            void 0 === this.padState.buttons[t] ? console.error("Unknown button " + t) : this.padState.buttons[t] !== e && (this.padState.buttons[t] = e, this.props.onButtonChange(t, e), this.props["onButton" + (e ? "Down" : "Up")](t), e && this.props["on" + t.replace("DPad", "")]())
                        }
                    }, {
                        key: "updateAllAxis",
                        value: function(t) {
                            for (var e = 0; e < t.axes.length; ++e) {
                                var n = this.axisIndexToAxisName(e);
                                t.axes[e], this.updateAxis(n, t.axes[e])
                            }
                        }
                    }, {
                        key: "updateAxis",
                        value: function(t, e) {
                            if (t && null != e) {
                                var n = "-" === t[0],
                                    o = e * (n ? -1 : 1);
                                if (Math.abs(o) < this.props.deadZone && (o = 0), n && (t = t.substr(1)), this.padState.axis[t] !== o) {
                                    var i = this.padState.axis[t];
                                    this.padState.axis[t] = o, this.props.onAxisChange(t, o, i), "LeftStickX" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onRight(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onLeft()), "LeftStickY" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onUp(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onDown())
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
                            return i.default.Children.only(this.props.children)
                        }
                    }]), Gamepad
                }(i.default.Component);
            Gamepad.defaultProps = {
                layout: s.XBOX,
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
            }, e.default = Gamepad
        },
        464934: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.layouts = e.Gamepad = void 0;
            var o = s(n("582247")),
                i = s(n("315401"));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            o.default.layouts = i.default, e.Gamepad = o.default, e.layouts = i.default, e.default = o.default
        },
        490780: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                buttons: ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "Back", "Start", "LS", "RS", "DPadUp", "DPadDown", "DPadLeft", "DPadRight"],
                axis: ["LeftStickX", "-LeftStickY", "RightStickX", "-RightStickY"],
                buttonAxis: [null, null, null, null, null, null, "LeftTrigger", "RightTrigger"]
            }
        },
        315401: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.XBOX = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n("490780"));
            e.XBOX = o.default, e.default = {
                XBOX: o.default
            }
        },
        265369: function(t, e, n) {
            "use strict";
            t.exports = n.p + "99c9ca7d01d903b18cad.svg"
        },
        799557: function(t, e, n) {
            "use strict";
            t.exports = n.p + "dfcd6ac84e97da5203b5.png"
        },
        992629: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            }), n("222007");
            var o = n("37983"),
                i = n("884691"),
                s = n("464934"),
                a = n("669491"),
                r = n("77078"),
                u = n("958638"),
                l = n("44930"),
                c = n("140014");
            let d = {
                A: {
                    Icon: u.default,
                    color: a.default.unsafe_rawColors.PRIMARY_400.css
                },
                B: {
                    Icon: l.default,
                    color: a.default.unsafe_rawColors.RED_360.css
                }
            };
            class GamepadButton extends i.Component {
                render() {
                    let {
                        type: t,
                        text: e,
                        style: n,
                        onClick: i
                    } = this.props, s = t.Icon;
                    return (0, o.jsxs)(r.Clickable, {
                        className: c.gamepadButtonContainer,
                        style: null != i ? {
                            cursor: "pointer"
                        } : void 0,
                        onClick: i,
                        children: [(0, o.jsx)(s, {
                            className: n,
                            color: t.color,
                            backgroundColor: a.default.unsafe_rawColors.PRIMARY_600.css
                        }), (0, o.jsx)("div", {
                            className: c.gamepadButtonText,
                            children: e
                        })]
                    })
                }
            }
            GamepadButton.A = d.A, GamepadButton.B = d.B;
            class Gamepad extends i.PureComponent {
                render() {
                    let {
                        onAPressed: t,
                        onBPressed: e,
                        children: n
                    } = this.props;
                    if (null == n) return null;
                    let a = i.cloneElement(i.Children.only(n), {
                        hasGamepad: this.state.gamepadConnected
                    });
                    return (0, o.jsx)(s.default, {
                        onA: t,
                        onB: e,
                        onConnect: this.setGamepadConnected,
                        onDisconnect: this.setGamepadDisconnected,
                        children: a
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        gamepadConnected: !1
                    }, this.setGamepadConnected = () => {
                        this.setState({
                            gamepadConnected: !0
                        })
                    }, this.setGamepadDisconnected = () => {
                        this.setState({
                            gamepadConnected: !1
                        })
                    }
                }
            }
            Gamepad.Button = GamepadButton;
            var f = Gamepad
        },
        923107: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        d: "M20.8449 21.3213C20.9701 21.6487 20.7284 22 20.3779 22H18.8616C18.4407 22 18.0649 21.7365 17.9215 21.3409L16.3709 17.0643H7.62524L6.07468 21.3409C5.93123 21.7365 5.55542 22 5.13457 22H3.61727C3.26702 22 3.02531 21.6492 3.15006 21.3219L10.2373 2.72792C10.3851 2.34026 10.7569 2.08409 11.1718 2.08409H12.7965C13.2109 2.08409 13.5824 2.33969 13.7304 2.72674L20.8449 21.3213ZM11.9836 5.08591L8.54887 14.5243H15.4184L11.9836 5.08591Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })
                })
            }
        },
        993469: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        d: "M6.45898 22C5.9067 22 5.45898 21.5523 5.45898 21V3.08409C5.45898 2.5318 5.9067 2.08409 6.45898 2.08409H13.5119C15.0898 2.08409 16.3502 2.54591 17.2931 3.46954C18.236 4.39318 18.7074 5.61507 18.7074 7.13523C18.7074 8.30901 18.438 9.26151 17.8992 9.99273C17.3604 10.7239 16.6869 11.2531 15.8788 11.5802C18.3418 12.196 19.5733 13.8316 19.5733 16.487C19.5733 18.3728 19.0249 19.7679 17.9281 20.6723C16.8313 21.5574 15.2822 22 13.281 22H6.45898ZM12.6172 10.57C13.6947 10.57 14.5318 10.3198 15.1283 9.81954C15.7248 9.31924 16.0231 8.55917 16.0231 7.53932C16.0231 6.51947 15.7248 5.75939 15.1283 5.25909C14.5318 4.73954 13.6947 4.47977 12.6172 4.47977H8.17217V10.57H12.6172ZM13.2233 19.6043C14.3394 19.6043 15.2149 19.3349 15.8499 18.7961C16.5041 18.2381 16.8313 17.4011 16.8313 16.285C16.8313 15.1689 16.5041 14.3415 15.8499 13.8027C15.2149 13.2639 14.3394 12.9945 13.2233 12.9945H8.17217V19.6043H13.2233Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })
                })
            }
        },
        779807: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WarningIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.99624 3.10292C10.8651 1.63236 13.1349 1.63236 14.0038 3.10292L22.7137 17.8452C23.5519 19.264 22.4493 21 20.7099 21L3.29007 20.9999C1.55071 20.9999 0.448099 19.2639 1.28633 17.8451L9.99624 3.10292ZM13.25 17.75C13.25 18.4404 12.6904 19 12 19C11.3096 19 10.75 18.4404 10.75 17.75C10.75 17.0596 11.3096 16.5 12 16.5C12.6904 16.5 13.25 17.0596 13.25 17.75ZM13.0624 14.0019L13.4336 8.06238C13.4696 7.48668 13.0124 7 12.4355 7H11.5645C10.9876 7 10.5304 7.48668 10.5664 8.06238L10.9376 14.0019C10.9727 14.563 11.4379 15 12 15C12.5621 15 13.0273 14.563 13.0624 14.0019Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })
                })
            }
        },
        364719: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("779807"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, o.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
                            })
                        })
                    })
                }, s.WarningIcon, void 0, {
                    size: 16
                })
        },
        958638: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("923107"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 30,
                        height: n = 30,
                        color: i = "currentColor",
                        foreground: s,
                        background: r,
                        backgroundColor: u,
                        ...l
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 30 30",
                        children: (0, o.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, o.jsx)("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: u,
                                className: r
                            }), (0, o.jsx)("path", {
                                d: "M22.1001 22H19.3946L18.2136 18.6522H11.9866L10.8056 22H8.1001L13.7259 7H16.4743L22.1001 22ZM15.1001 9.76087L12.8026 16.3261H17.3976L15.1001 9.76087Z",
                                fill: i,
                                className: s
                            })]
                        })
                    })
                }, s.AIcon, void 0, {
                    size: 30
                })
        },
        44930: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("993469"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 30,
                        height: n = 30,
                        color: i = "currentColor",
                        foreground: s,
                        background: r,
                        backgroundColor: u,
                        ...l
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 30 30",
                        children: (0, o.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, o.jsx)("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: u,
                                className: r
                            }), (0, o.jsx)("path", {
                                d: "M10.116 22.3089V7.12891H16.518C17.7206 7.12891 18.6886 7.48091 19.422 8.18491C20.17 8.88891 20.544 9.82024 20.544 10.9789C20.544 11.8882 20.3313 12.6216 19.906 13.1789C19.4953 13.7216 18.96 14.1176 18.3 14.3669C20.192 14.8216 21.138 16.0682 21.138 18.1069C21.138 19.5296 20.7126 20.5856 19.862 21.2749C19.026 21.9642 17.838 22.3089 16.298 22.3089H10.116ZM15.638 13.4209C17.2073 13.4209 17.992 12.7462 17.992 11.3969C17.992 10.7076 17.7866 10.1942 17.376 9.85691C16.9653 9.51957 16.386 9.35091 15.638 9.35091H12.668V13.4209H15.638ZM15.968 20.0869C16.76 20.0869 17.3906 19.9109 17.86 19.5589C18.344 19.2069 18.586 18.6422 18.586 17.8649C18.586 17.0876 18.344 16.5229 17.86 16.1709C17.3906 15.8189 16.76 15.6429 15.968 15.6429H12.668V20.0869H15.968Z",
                                fill: i,
                                className: s
                            })]
                        })
                    })
                }, s.BIcon, void 0, {
                    size: 30
                })
        }
    }
]);