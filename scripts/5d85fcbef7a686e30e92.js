(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54200"], {
        748268: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c87be216431a35927431.svg"
        },
        278108: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("222007"), s("424973");
            var n = s("37983"),
                l = s("884691"),
                i = s("499032"),
                a = s.n(i),
                o = s("312165"),
                r = s("3958"),
                d = s("773336"),
                u = s("50885"),
                c = s("49111");
            let h = d.isPlatformEmbedded && null != u.default.getDiscordUtils().inputCaptureRegisterElement;
            class m extends l.PureComponent {
                componentDidMount() {
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1, this.cleanUp()
                }
                componentDidUpdate(e) {
                    this.props.defaultValue !== e.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                }
                cleanUp() {
                    d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: s
                    } = this.props;
                    t === r.RecordModes.RECORDING && (null != s && s(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: s,
                        mode: l
                    } = this.state, {
                        disabled: i
                    } = this.props;
                    return h ? (t = u.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !d.isPlatformEmbedded && (e = this.handleComboKeys), (0, n.jsx)(r.default, {
                        disabled: i,
                        value: s,
                        mode: l,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: h
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        d.isPlatformEmbedded && !h && (this.gs = new o.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: r.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: r.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === r.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, s) => {
                        if (s.preventDefault(), "keydown" === s.type) {
                            let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, a(e), c.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: n
                                } = s;
                            null == e.find(e => {
                                let [, t] = e;
                                return n === t
                            }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, n, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
                        }
                    }, this.handleGSChange = e => {
                        if (!1 === this._mounted) return;
                        let t = [...e.combo];
                        this.handleComboChange(t)
                    }, this.handleNativeChange = e => {
                        e.length > 0 && this.handleComboChange(e), this.recordEnd()
                    };
                    let {
                        defaultValue: t
                    } = e;
                    this.state = {
                        codes: t,
                        mode: r.RecordModes.DEFAULT
                    }
                }
            }
            var p = m
        },
        301450: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return v
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                i = s("917351"),
                a = s.n(i),
                o = s("446674"),
                r = s("77078"),
                d = s("629109"),
                u = s("278108"),
                c = s("996808"),
                h = s("42887"),
                m = s("145131"),
                p = s("476765"),
                f = s("829536"),
                g = s("49111"),
                E = s("353927"),
                _ = s("782340"),
                R = s("686084"),
                T = s("926622");
            let C = (0, p.uid)(),
                O = (0, p.uid)(),
                D = (0, p.uid)();
            class M extends l.PureComponent {
                handleValueRender(e) {
                    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
                }
                renderAutomaticVADToggle() {
                    let {
                        autoThreshold: e
                    } = this.props;
                    return (0, n.jsx)(p.UID, {
                        children: t => (0, n.jsxs)(m.default, {
                            className: T.marginBottom4,
                            children: [(0, n.jsx)(r.FormTitle, {
                                tag: r.FormTitleTags.H3,
                                children: (0, n.jsx)("label", {
                                    htmlFor: t,
                                    children: _.default.Messages.FORM_LABEL_AUTOMATIC_VAD
                                })
                            }), (0, n.jsx)(r.Switch, {
                                id: t,
                                checked: e,
                                onChange: this.handleAutoThresholdChange
                            })]
                        })
                    })
                }
                renderSlider() {
                    let {
                        autoThreshold: e,
                        threshold: t
                    } = this.props;
                    if (!e) return (0, n.jsx)(r.Slider, {
                        initialValue: t + 100,
                        onValueRender: this.handleValueRender,
                        onValueChange: this.handleSensitivityChange,
                        "aria-label": _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
                    })
                }
                render() {
                    return (0, n.jsxs)(r.FormItem, {
                        title: _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
                        className: T.marginBottom8,
                        children: [this.renderAutomaticVADToggle(), this.renderSlider()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleAutoThresholdChange = e => {
                        let {
                            onThresholdChange: t,
                            threshold: s
                        } = this.props;
                        null == t || t(s, e)
                    }, this.handleSensitivityChange = e => {
                        let {
                            onThresholdChange: t,
                            autoThreshold: s
                        } = this.props;
                        null == t || t(-((100 - e) * 1), s)
                    }
                }
            }
            let I = o.default.connectStores([h.default], e => {
                let {
                    mediaEngineContext: t
                } = e;
                return {
                    inputVolume: h.default.getInputVolume(),
                    outputVolume: h.default.getOutputVolume(),
                    inputDeviceId: h.default.getInputDeviceId(),
                    inputDevices: h.default.getInputDevices(),
                    outputDevices: h.default.getOutputDevices(),
                    outputDeviceId: h.default.getOutputDeviceId(),
                    inputMode: h.default.getMode(t),
                    shortcut: h.default.getModeOptions(t).shortcut,
                    vadThreshold: h.default.getModeOptions(t).threshold,
                    vadAutoThreshold: h.default.getModeOptions(t).autoThreshold,
                    delay: h.default.getModeOptions(t).delay
                }
            })(e => {
                let t, {
                        mediaEngineContext: s,
                        inputMode: i,
                        shortcut: o,
                        delay: c,
                        vadThreshold: h,
                        vadAutoThreshold: m,
                        inputDevices: p,
                        inputDeviceId: E,
                        inputVolume: R,
                        outputDeviceId: I,
                        outputDevices: v,
                        outputVolume: N,
                        speaking: x = !1
                    } = e,
                    S = a.first(p),
                    U = null != S && S.disabled,
                    b = a.first(v),
                    A = null != b && b.disabled,
                    V = [{
                        value: g.InputModes.VOICE_ACTIVITY,
                        name: _.default.Messages.INPUT_MODE_VAD
                    }, {
                        value: g.InputModes.PUSH_TO_TALK,
                        name: _.default.Messages.INPUT_MODE_PTT
                    }];
                return t = i === g.InputModes.PUSH_TO_TALK ? (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsx)(r.FormItem, {
                        title: _.default.Messages.FORM_LABEL_SHORTCUT,
                        className: T.marginBottom20,
                        children: (0, n.jsx)(u.default, {
                            defaultValue: o,
                            onChange: e => d.default.setMode(i, {
                                shortcut: e
                            }, s)
                        })
                    }), (0, n.jsxs)(r.FormItem, {
                        className: T.marginBottom8,
                        children: [(0, n.jsx)(r.FormTitle, {
                            id: C,
                            children: _.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                        }), (0, n.jsx)(r.Slider, {
                            initialValue: c,
                            onValueChange: e => d.default.setMode(i, {
                                delay: e
                            }, s),
                            onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
                            maxValue: g.MAX_PTT_RELEASE_DELAY,
                            "aria-labelledby": C
                        })]
                    })]
                }) : (0, n.jsx)(M, {
                    speaking: x,
                    inputMode: i,
                    threshold: h,
                    autoThreshold: m,
                    onThresholdChange: (e, t) => d.default.setMode(i, {
                        threshold: e,
                        autoThreshold: t
                    }, s)
                }), (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsx)(r.FormItem, {
                        title: _.default.Messages.FORM_LABEL_INPUT_DEVICE,
                        className: T.marginBottom20,
                        children: (0, n.jsx)(r.SingleSelect, {
                            value: E,
                            onChange: e => d.default.setInputDevice(e, "Voice Settings"),
                            options: a.map(p, e => {
                                let {
                                    id: t,
                                    name: s
                                } = e;
                                return {
                                    value: t,
                                    label: s
                                }
                            }),
                            isDisabled: U
                        })
                    }), (0, n.jsxs)(r.FormItem, {
                        className: T.marginBottom20,
                        children: [(0, n.jsx)(r.FormTitle, {
                            id: O,
                            children: _.default.Messages.FORM_LABEL_INPUT_VOLUME
                        }), (0, n.jsx)(r.Slider, {
                            initialValue: (0, f.amplitudeToPerceptual)(R),
                            asValueChanges: e => d.default.setInputVolume((0, f.perceptualToAmplitude)(e)),
                            "aria-labelledby": O
                        })]
                    }), (0, n.jsx)(r.FormItem, {
                        title: _.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
                        className: T.marginBottom20,
                        children: (0, n.jsx)(r.SingleSelect, {
                            value: I,
                            onChange: e => d.default.setOutputDevice(e, "Voice Settings"),
                            options: a.map(v, e => {
                                let {
                                    id: t,
                                    name: s
                                } = e;
                                return {
                                    value: t,
                                    label: s
                                }
                            }),
                            isDisabled: A
                        })
                    }), (0, n.jsxs)(r.FormItem, {
                        className: T.marginBottom20,
                        children: [(0, n.jsx)(r.FormTitle, {
                            id: D,
                            children: _.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                        }), (0, n.jsx)(r.Slider, {
                            initialValue: (0, f.amplitudeToPerceptual)(N),
                            maxValue: 200,
                            asValueChanges: e => d.default.setOutputVolume((0, f.perceptualToAmplitude)(e)),
                            "aria-labelledby": D
                        })]
                    }), (0, n.jsx)(r.FormItem, {
                        title: _.default.Messages.FORM_LABEL_INPUT_MODE,
                        className: T.marginBottom20,
                        children: (0, n.jsx)(r.RadioGroup, {
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return d.default.setMode(t, {}, s)
                            },
                            options: V,
                            value: i
                        })
                    }), t]
                })
            });

            function v(e) {
                var t;
                return (0, c.default)(() => {
                    null != g.CURRENT_APP_CONTEXT && e.onClose()
                }), (0, n.jsxs)(r.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-label": _.default.Messages.VOICE_SETTINGS,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        children: [(0, n.jsxs)(m.default.Child, {
                            children: [(0, n.jsx)(r.FormTitle, {
                                tag: "h1",
                                className: T.marginReset,
                                children: _.default.Messages.VOICE_SETTINGS
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                className: R.title,
                                children: e.title
                            })]
                        }), (0, n.jsx)(m.default.Child, {
                            grow: 0,
                            children: (0, n.jsx)(r.ModalCloseButton, {
                                onClick: e.onClose
                            })
                        })]
                    }), (0, n.jsx)(r.ModalContent, {
                        children: (0, n.jsx)(I, {
                            mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : E.MediaEngineContextTypes.DEFAULT
                        })
                    })]
                })
            }
        },
        312165: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007"), s("424973");
            var n, l = s("44170"),
                i = s("773336"),
                a = s("50885"),
                o = s("13798"),
                r = s("49111");
            let d = [],
                u = (e, t, s) => {
                    let n = (0, i.isWindows)() ? 0 : 1;
                    (e !== r.KeyboardDeviceTypes.MOUSE_BUTTON || s !== n) && d.forEach(n => n._handleEvent(e, t, s))
                };
            n = class extends l.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (d = d.filter(e => e !== this)).length && a.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, o.toString)(this.combo)
                }
                _handleEvent(e, t, s) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [n, l] = t;
                        return !(n === e && l === s)
                    }) : (this.combo.push([e, s, (0, o.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], d.push(this), 1 === d.length && a.default.setOnInputEventCallback(u)
                }
            }
        },
        996808: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("884691"),
                l = s("913144");

            function i(e) {
                let t = (0, n.useRef)(e);
                (0, n.useEffect)(() => {
                    t.current = e
                }, [e]), (0, n.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return l.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            l.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }
        },
        520497: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("49111");

            function l(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: s
                } = window.GLOBAL_ENV;
                return "development" !== s ? "".concat(location.protocol, "//").concat(t).concat(n.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(n.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        812809: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("845579"),
                l = s("42887"),
                i = s("829536");

            function a(e) {
                let t = function() {
                        var e;
                        let t = n.SoundboardSettings.getSetting();
                        return (0, i.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    s = Math.min(l.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * s, 1)
            }
        },
        3958: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                RecordModes: function() {
                    return n
                },
                default: function() {
                    return T
                }
            }), s("222007");
            var n, l, i = s("37983"),
                a = s("884691"),
                o = s("414456"),
                r = s.n(o),
                d = s("800648"),
                u = s.n(d),
                c = s("917351"),
                h = s.n(c),
                m = s("77078"),
                p = s("13798"),
                f = s("145131"),
                g = s("782340"),
                E = s("523192");
            (l = n || (n = {})).DEFAULT = "DEFAULT", l.RECORDING = "RECORDING";
            let _ = {
                DEFAULT: E.default,
                RECORDING: E.recording
            };
            class R extends a.PureComponent {
                componentWillUnmount() {
                    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                }
                componentDidUpdate(e) {
                    let {
                        mode: t
                    } = this.props, {
                        mode: s
                    } = e;
                    if (s === t) return;
                    let {
                        _inputRef: n
                    } = this;
                    if (null == n.current) return;
                    let {
                        activeElement: l
                    } = document;
                    "DEFAULT" === t && n.current === l && n.current.blur(), "RECORDING" === t && n.current !== l && n.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: s,
                        disabled: n
                    } = this.props, l = (0, p.toString)(s, !0);
                    e = "RECORDING" === t ? g.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? g.default.Messages.SHORTCUT_RECORDER_BUTTON : g.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let a = "DEFAULT" === t && s.length > 0;
                    return (0, i.jsx)(m.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, i.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: r(E.container, _[t], {
                                [E.hasValue]: a,
                                [E.disabled]: n
                            }),
                            children: (0, i.jsxs)(f.default, {
                                className: E.layout,
                                children: [(0, i.jsx)(f.default.Child, {
                                    className: E.input,
                                    children: (0, i.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: g.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: l,
                                        disabled: "RECORDING" !== this.props.mode || n
                                    })
                                }), (0, i.jsx)(f.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, i.jsxs)(m.Button, {
                                        className: E.button,
                                        disabled: n,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: m.Button.Sizes.MIN,
                                        color: m.ButtonColors.PRIMARY,
                                        children: [(0, i.jsx)("span", {
                                            className: E.text,
                                            children: e
                                        }), (0, i.jsx)("span", {
                                            className: E.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = h.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = a.createRef(), this._containerRef = a.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: s,
                            onChange: n
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != s && null != n) this._unregisterNativeRecorder = s(e.id, n);
                            else if (null != n) {
                                let t = new u(e);
                                t.handleKey = n
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: s
                        } = this.props;
                        (!s || "RECORDING" !== this._mousedownMode) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var T = R
        },
        476765: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return r
                }
            });
            var n = s("995008"),
                l = s.n(n),
                i = s("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                o = () => (0, i.useLazyValue)(() => a()),
                r = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        }
    }
]);