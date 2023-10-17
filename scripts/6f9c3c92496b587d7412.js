"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64045], {
        164045: (t, e, n) => {
            n.d(e, {
                Z: () => nt
            });
            var r = n(785893),
                o = n(667294),
                i = n(427537),
                u = n.n(i),
                c = n(717187),
                a = n(120415),
                l = n(310126),
                s = n(79251),
                f = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return h(t)
            }

            function y(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? d(t) : e
            }

            function b(t, e) {
                b = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return b(t, e)
            }

            function m(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            c = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(t) {
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
                    var n, r = h(t);
                    if (e) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var g = [],
                O = function(t, e, n) {
                    var r = (0, a.ED)() ? 0 : 1;
                    t === f.MoX.MOUSE_BUTTON && n === r || g.forEach((function(r) {
                        return r._handleEvent(t, e, n)
                    }))
                },
                _ = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && b(t, e)
                    }(n, t);
                    var e = R(n);

                    function n() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t;
                        (t = e.call(this)).combo = [];
                        g.push(d(t));
                        1 === g.length && l.ZP.setOnInputEventCallback(O);
                        return t
                    }
                    var r = n.prototype;
                    r.destroy = function() {
                        var t = this;
                        this.removeAllListeners();
                        0 === (g = g.filter((function(e) {
                            return e !== t
                        }))).length && l.ZP.setOnInputEventCallback(null)
                    };
                    r.toString = function() {
                        return (0, s.BB)(this.combo)
                    };
                    r._handleEvent = function(t, e, n) {
                        if (0 === e) this.combo = this.combo.filter((function(e) {
                            var r = m(e, 2),
                                o = r[0],
                                i = r[1];
                            return !(o === t && i === n)
                        }));
                        else {
                            this.combo.push([t, n, (0, s.dU)()]);
                            this.emit("change", this)
                        }
                    };
                    return n
                }(c.EventEmitter),
                C = n(294184),
                E = n.n(C),
                w = n(238736),
                S = n.n(w),
                D = n(496486),
                j = n.n(D),
                T = n(304548),
                N = n(107364),
                I = n(473708),
                U = n(35282),
                A = n.n(U);

            function B(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function P(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function k(t) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return k(t)
            }

            function M(t, e) {
                return !e || "object" !== Z(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function x(t, e) {
                x = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return x(t, e)
            }
            var F, G, Z = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function L(t) {
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
                    var n, r = k(t);
                    if (e) {
                        var o = k(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }! function(t) {
                t.DEFAULT = "DEFAULT";
                t.RECORDING = "RECORDING"
            }(F || (F = {}));
            var K = (P(G = {}, F.DEFAULT, A().default), P(G, F.RECORDING, A().recording), G),
                W = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && x(t, e)
                    }(n, t);
                    var e = L(n);

                    function n() {
                        B(this, n);
                        var t;
                        (t = e.apply(this, arguments))._inputId = j().uniqueId("key-recorder-");
                        t._unregisterNativeRecorder = null;
                        t._mousedownMode = null;
                        t._inputRef = o.createRef();
                        t._containerRef = o.createRef();
                        t.setInputRef = function(e) {
                            var n, r, o = t.props,
                                i = o.registerNativeRecorder,
                                u = o.onChange;
                            t._inputRef.current = e;
                            null === (r = (n = t)._unregisterNativeRecorder) || void 0 === r || r.call(n);
                            if (null != e)
                                if (null != i && null != u) t._unregisterNativeRecorder = i(e.id, u);
                                else if (null != u) {
                                new(S())(e).handleKey = u
                            }
                        };
                        t.handleClick = function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            var n = t.props,
                                r = n.onClick;
                            n.disableOnClickWhileRecording && t._mousedownMode === F.RECORDING || r()
                        };
                        t.handleMouseDown = function() {
                            t._mousedownMode = t.props.mode
                        };
                        return t
                    }
                    var i = n.prototype;
                    i.componentWillUnmount = function() {
                        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                    };
                    i.componentDidUpdate = function(t) {
                        var e = this.props.mode;
                        if (t.mode !== e) {
                            var n = this._inputRef;
                            if (null != n.current) {
                                var r = document.activeElement;
                                e === F.DEFAULT && n.current === r && n.current.blur();
                                e === F.RECORDING && n.current !== r && n.current.focus()
                            }
                        }
                    };
                    i.render = function() {
                        var t, e = this,
                            n = this.props,
                            o = n.mode,
                            i = n.value,
                            u = n.disabled,
                            c = (0, s.BB)(i, !0);
                        t = o === F.RECORDING ? I.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === i.length ? I.Z.Messages.SHORTCUT_RECORDER_BUTTON : I.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                        var a, l = o === F.DEFAULT && i.length > 0;
                        return (0, r.jsx)(T.FocusRing, {
                            focusTarget: this._inputRef,
                            ringTarget: this._containerRef,
                            children: (0, r.jsx)("div", {
                                onClick: this.handleClick,
                                onMouseDown: this.handleMouseDown,
                                ref: this._containerRef,
                                className: E()(A().container, K[o], (a = {}, P(a, A().hasValue, l), P(a, A().disabled, u), a)),
                                children: (0, r.jsxs)(N.Z, {
                                    className: A().layout,
                                    children: [(0, r.jsx)(N.Z.Child, {
                                        className: A().input,
                                        children: (0, r.jsx)("input", {
                                            id: this._inputId,
                                            placeholder: I.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
                                            type: "text",
                                            ref: this.setInputRef,
                                            readOnly: !0,
                                            value: c,
                                            disabled: this.props.mode !== F.RECORDING || u
                                        })
                                    }), (0, r.jsx)(N.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, r.jsxs)(T.Button, {
                                            className: A().button,
                                            disabled: u,
                                            onClick: function(t) {
                                                t.stopPropagation();
                                                t.preventDefault();
                                                e.handleClick(t)
                                            },
                                            size: T.Button.Sizes.MIN,
                                            color: T.ButtonColors.PRIMARY,
                                            children: [(0, r.jsx)("span", {
                                                className: A().text,
                                                children: t
                                            }), (0, r.jsx)("span", {
                                                className: A().editIcon
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return n
                }(o.PureComponent);
            const V = W;

            function Y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function H(t) {
                H = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return H(t)
            }

            function X(t, e) {
                return !e || "object" !== J(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function z(t, e) {
                z = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return z(t, e)
            }

            function $(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            c = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || Q(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(t) {
                return function(t) {
                    if (Array.isArray(t)) return Y(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || Q(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var J = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function Q(t, e) {
                if (t) {
                    if ("string" == typeof t) return Y(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(t, e) : void 0
                }
            }

            function tt(t) {
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
                    var n, r = H(t);
                    if (e) {
                        var o = H(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return X(this, n)
                }
            }
            var et = a.FB && null != l.ZP.getDiscordUtils().inputCaptureRegisterElement;
            const nt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && z(t, e)
                }(n, t);
                var e = tt(n);

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = e.call(this, t))._mounted = !1;
                    r.recordStart = function() {
                        if (a.FB && !et) {
                            r.gs = new _;
                            r.gs.on("change", r.handleGSChange)
                        }
                        r.setState({
                            mode: F.RECORDING
                        })
                    };
                    r.recordEnd = function() {
                        r.cleanUp();
                        r.setState({
                            mode: F.DEFAULT
                        })
                    };
                    r.toggleRecordMode = function() {
                        r.state.mode === F.DEFAULT ? r.recordStart() : r.recordEnd()
                    };
                    r.handleComboKeys = function(t, e, n) {
                        n.preventDefault();
                        if ("keydown" === n.type) {
                            var o = e.map((function(t) {
                                    return [f.MoX.KEYBOARD_KEY, u()(t), f.CgE.BROWSER]
                                })),
                                i = n.keyCode;
                            null == o.find((function(t) {
                                var e = $(t, 2)[1];
                                return i === e
                            })) && o.push([f.MoX.KEYBOARD_KEY, i, f.CgE.BROWSER]);
                            r.handleComboChange(o)
                        }
                    };
                    r.handleGSChange = function(t) {
                        if (!1 !== r._mounted) {
                            var e = q(t.combo);
                            r.handleComboChange(e)
                        }
                    };
                    r.handleNativeChange = function(t) {
                        t.length > 0 && r.handleComboChange(t);
                        r.recordEnd()
                    };
                    var o = t.defaultValue;
                    r.state = {
                        codes: o,
                        mode: F.DEFAULT
                    };
                    return r
                }
                var o = n.prototype;
                o.componentDidMount = function() {
                    this._mounted = !0
                };
                o.componentWillUnmount = function() {
                    this._mounted = !1;
                    this.cleanUp()
                };
                o.componentDidUpdate = function(t) {
                    this.props.defaultValue !== t.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                };
                o.cleanUp = function() {
                    if (a.FB && null != this.gs) {
                        this.gs.destroy();
                        this.gs = null
                    }
                };
                o.handleComboChange = function(t) {
                    var e = this.state.mode,
                        n = this.props.onChange;
                    if (e === F.RECORDING) {
                        null != n && n(t);
                        this.setState({
                            codes: t
                        })
                    }
                };
                o.render = function() {
                    var t, e, n = this.state,
                        o = n.codes,
                        i = n.mode,
                        u = this.props.disabled;
                    if (et) {
                        e = l.ZP.getDiscordUtils().inputCaptureRegisterElement;
                        t = this.handleNativeChange
                    } else a.FB || (t = this.handleComboKeys);
                    return (0, r.jsx)(V, {
                        disabled: u,
                        value: o,
                        mode: i,
                        onClick: this.toggleRecordMode,
                        onChange: t,
                        registerNativeRecorder: e,
                        disableOnClickWhileRecording: et
                    })
                };
                return n
            }(o.PureComponent)
        }
    }
]);