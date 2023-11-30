(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77320"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, o = 0; i < r; i++) {
                    for (var l = e.charCodeAt(i); o < n;)
                        if (t.charCodeAt(o++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        458389: function(e, t, n) {
            n("424973");
            var r = n("594140"),
                i = n("564414"),
                o = n("725502"),
                l = n("591350"),
                s = n("476540"),
                a = n("381178"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = o(e),
                    c = !n && i(e),
                    d = !n && !c && l(e),
                    f = !n && !c && !d && a(e),
                    E = n || c || d || f,
                    p = E ? r(e.length, String) : [],
                    h = p.length;
                for (var _ in e)(t || u.call(e, _)) && !(E && ("length" == _ || d && ("offset" == _ || "parent" == _) || f && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || s(_, h))) && p.push(_);
                return p
            }
        },
        562132: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                o = n("270879"),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return o(e) && i(e.length) && !!l[r(e)]
            }
        },
        205873: function(e, t, n) {
            n("424973");
            var r = n("733228"),
                i = n("541349"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        541349: function(e, t, n) {
            var r = n("761197")(Object.keys, Object);
            e.exports = r
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var r = n("447414"),
                i = "object" == typeof t && t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                l = o && o.exports === i && r.process,
                s = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        if (e) return e;
                        return l && l.binding && l.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var r = n("690516"),
                i = n("221386"),
                o = "object" == typeof t && t && !t.nodeType && t,
                l = o && "object" == typeof e && e && !e.nodeType && e,
                s = l && l.exports === o ? r.Buffer : void 0,
                a = s ? s.isBuffer : void 0;
            e.exports = a || i
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                i = n("492692"),
                o = n("276440"),
                l = o && o.isTypedArray,
                s = l ? i(l) : r;
            e.exports = s
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                o = n("603108");
            e.exports = function(e) {
                return o(e) ? r(e) : i(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function l(e, t) {
                let n = (0, r.useRef)(),
                    l = (0, r.useRef)(o);
                return l.current === o ? (n.current = e(), l.current = t) : !(0, i.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        288661: function(e, t, n) {
            "use strict";
            var r = n("817736");
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        },
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        913139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("913144"),
                i = {
                    addKeybind(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_ADD_KEYBIND",
                            keybind: e
                        })
                    },
                    setKeybind(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_SET_KEYBIND",
                            keybind: e
                        })
                    },
                    deleteKeybind(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_DELETE_KEYBIND",
                            id: e
                        })
                    },
                    enableAll(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                            enable: e
                        })
                    }
                }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return o
                },
                popAllLayers: function() {
                    return l
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                o = n("499032"),
                l = n.n(o),
                s = n("312165"),
                a = n("3958"),
                u = n("773336"),
                c = n("50885"),
                d = n("49111");
            let f = u.isPlatformEmbedded && null != c.default.getDiscordUtils().inputCaptureRegisterElement;
            class E extends i.PureComponent {
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
                    u.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === a.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: i
                    } = this.state, {
                        disabled: o
                    } = this.props;
                    return f ? (t = c.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !u.isPlatformEmbedded && (e = this.handleComboKeys), (0, r.jsx)(a.default, {
                        disabled: o,
                        value: n,
                        mode: i,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: f
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        u.isPlatformEmbedded && !f && (this.gs = new s.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: a.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: a.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === a.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [d.KeyboardDeviceTypes.KEYBOARD_KEY, l(e), d.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: r
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return r === t
                            }) && e.push([d.KeyboardDeviceTypes.KEYBOARD_KEY, r, d.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
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
                        mode: a.RecordModes.DEFAULT
                    }
                }
            }
            var p = E
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                o = n("414456"),
                l = n.n(o),
                s = n("77078"),
                a = n("782340"),
                u = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: o,
                        error: c,
                        isLoading: d,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: p,
                        retryPrompt: h,
                        retrySuccessMessage: _
                    } = this.props, {
                        code: g,
                        errorMessage: m,
                        retrySuccess: I
                    } = this.state, v = i.Children.count(o) > 0 ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, C = null != h ? (0, r.jsxs)(s.Text, {
                        className: l(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                            className: l(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.Anchor, {
                                children: h
                            })
                        })]
                    }) : null, R = I ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: _
                        })
                    }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [null != p ? (0, r.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: p
                                }) : null, v, R, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : m
                                    }) : null, C]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: d || 0 === g.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: a.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L10 14.5858L17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: s
                    })
                })
            }
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: s = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, o.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM13.5 7.25C13.5 7.94036 12.9404 8.5 12.25 8.5C11.5596 8.5 11 7.94036 11 7.25C11 6.55964 11.5596 6 12.25 6C12.9404 6 13.5 6.55964 13.5 7.25ZM12.7278 11.2095C12.8435 10.6695 12.4996 10.1379 11.9595 10.0222C11.4195 9.90648 10.8879 10.2504 10.7722 10.7905L9.72984 15.6548C9.36091 17.3765 10.6734 19 12.4342 19C13.0106 19 13.5726 18.8199 14.0417 18.4848L14.2812 18.3137C14.7307 17.9927 14.8347 17.3682 14.5137 16.9188C14.1927 16.4693 13.5682 16.3653 13.1188 16.6863L12.8792 16.8574C12.7493 16.9501 12.5937 17 12.4342 17C11.9467 17 11.5833 16.5505 11.6854 16.0739L12.7278 11.2095Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: s = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, o.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    })]
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                o = n("49111"),
                l = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.Links.STATUS
                    }))
                }
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, i = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var r, i = n("44170"),
                o = n("773336"),
                l = n("50885"),
                s = n("13798"),
                a = n("49111");
            let u = [],
                c = (e, t, n) => {
                    let r = (0, o.isWindows)() ? 0 : 1;
                    (e !== a.KeyboardDeviceTypes.MOUSE_BUTTON || n !== r) && u.forEach(r => r._handleEvent(e, t, n))
                };
            r = class extends i.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (u = u.filter(e => e !== this)).length && l.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, s.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [r, i] = t;
                        return !(r === e && i === n)
                    }) : (this.combo.push([e, n, (0, s.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], u.push(this), 1 === u.length && l.default.setOnInputEventCallback(c)
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), o = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != o) o(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, o, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (o = r || (r = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = i || (i = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("872717"),
                i = n("913144"),
                o = n("479756"),
                l = n("38654"),
                s = n("9294"),
                a = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    o = c.default.getCurrentUser(),
                    l = !a.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, p = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, h = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, _ = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: o
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
                } catch (e) {
                    throw e
                }
            };
            var g = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: p,
                enableVerificationForm: h,
                submitVerificationForm: _
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return a
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return p
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return h
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return _
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return g
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([i.VerificationFormFieldTypes.TERMS]),
                l = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                a = 16,
                u = 300,
                c = 300,
                d = 8,
                f = 150,
                E = 150,
                p = 1e3,
                h = 300,
                _ = "Membership Gating",
                g = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return a
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                o = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, r.default)(e => l),
                a = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("599110"),
                l = n("50926"),
                s = n("347977"),
                a = n("394294"),
                u = n("49111");
            let c = () => {
                    o.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    o.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let o = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, i.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return m
                },
                updateImpersonating: function() {
                    return I
                },
                stopImpersonating: function() {
                    return v
                },
                updateImpersonatedChannels: function() {
                    return R
                },
                updateImpersonatedRoles: function() {
                    return N
                },
                updateImpersonatedData: function() {
                    return S
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                o = n("393414"),
                l = n("42203"),
                s = n("923959"),
                a = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                E = n("599110"),
                p = n("38654"),
                h = n("507950"),
                _ = n("49111"),
                g = n("724210");

            function m(e, t) {
                E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === h.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function I(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === h.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function v(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = d.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    r = null != t && (0, g.isStaticChannelRoute)(t);
                if (!r && !c.default.can(_.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, o.transitionTo)(_.Routes.CHANNEL(e, t.id))
                }
            }

            function R(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), I(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function N(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = a.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            o = i.filter(e => !n.includes(e));
                        return o.length > 0 && R(e, o, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), I(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function S(e, t) {
                I(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let o = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[o])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(l[o]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var r = n("65597"),
                i = n("862205"),
                o = n("697218"),
                l = n("719923"),
                s = n("782340");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: r,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: o,
                        autoUnfurlReactionTooltip: s,
                        collectOffOverride: a
                    } = n, u = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: !a && (u ? r : o),
                        autoUnfurlReactionTooltip: s
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : u({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, r.default)([o.default], () => o.default.getCurrentUser()), l = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: i,
                        config: l
                    }), E = s && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        644926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                o = n("446674"),
                l = n("77078"),
                s = n("913139"),
                a = n("278108"),
                u = n("485328"),
                c = n("227602"),
                d = n("555158"),
                f = n("13798"),
                E = n("846325"),
                p = n("49111"),
                h = n("782340"),
                _ = n("304593");

            function g(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: g
                } = e, m = (0, o.useStateFromStores)([c.default], () => c.default.getKeybindForAction(p.GlobalKeybindActions.SOUNDBOARD_HOLD)), [I, v] = i.useState(null !== (t = null == m ? void 0 : m.shortcut) && void 0 !== t ? t : []);
                return i.useEffect(() => (u.default.disable(), () => {
                    u.default.enable()
                }), []), (0, r.jsxs)(l.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(l.Heading, {
                            className: _.header,
                            variant: "heading-xl/semibold",
                            children: h.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            className: _.closeButton,
                            onClick: g
                        })]
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: _.content,
                        children: [(0, r.jsx)(d.default, {
                            className: _.warning,
                            messageType: d.HelpMessageTypes.WARNING,
                            children: h.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, r.jsx)(l.Heading, {
                            className: _.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: h.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, r.jsx)(l.Text, {
                            className: _.action,
                            variant: "text-md/normal",
                            children: h.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(l.Text, {
                            className: _.actionDescription,
                            variant: "text-sm/normal",
                            children: h.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(l.Heading, {
                            className: _.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: h.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, r.jsx)(a.default, {
                            defaultValue: I,
                            onChange: v
                        }), (0, r.jsx)(l.Anchor, {
                            className: _.resetButton,
                            onClick: () => v((0, f.toCombo)(E.DEFAULT_KEYBIND)),
                            children: h.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            onClick: function() {
                                if (0 === I.length) return null != m && s.default.deleteKeybind(m.id), g();
                                null == m ? s.default.addKeybind({
                                    action: p.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: I,
                                    enabled: !0,
                                    params: {}
                                }) : s.default.setKeybind({
                                    ...m,
                                    shortcut: I
                                });
                                g()
                            },
                            children: h.default.Messages.SAVE
                        }), (0, r.jsx)(l.Button, {
                            onClick: g,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            children: h.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return u
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var r, i, o = n("991170"),
                l = n("719923"),
                s = n("24373"),
                a = n("49111");
            (r = i || (i = {}))[r.SENDABLE = 0] = "SENDABLE", r[r.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", r[r.NONSENDABLE = 2] = "NONSENDABLE", r[r.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let r = l.default.canUseCustomStickersEverywhere(t);
                    if ((0, s.isStandardSticker)(e)) return 0;
                    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || o.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? r ? 0 : 1 : 2 : 3;
                    return 2
                },
                c = (e, t, n) => 0 === u(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("424973");
            var r = n("917351"),
                i = n.n(r),
                o = n("446674"),
                l = n("913144"),
                s = n("80507"),
                a = n("374363"),
                u = n("364685"),
                c = n("49111"),
                d = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let E = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                p = () => {
                    u.default.isLoaded && E.compute()
                },
                h = () => {
                    p()
                };

            function _() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class g extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (f = e), this.syncWith([u.default], h), this.syncWith([a.default], _)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            g.displayName = "StickersPersistedStore", g.persistKey = "StickersPersistedStoreV2";
            var m = new g(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), p()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                o = n.n(i),
                l = n("666038");
            r = class e extends l.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: o(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = o(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = o(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                o = n("9294"),
                l = n("49111");
            let s = {},
                a = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, o.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    a = null != i ? {
                        state: l.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(a), s = {
                    ...s,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [a.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, o.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, c(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return i
                },
                default: function() {
                    return p
                }
            });
            var r, i, o = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                u = n("36694"),
                c = n("381546"),
                d = n("68238"),
                f = n("423487"),
                E = n("557296");
            (r = i || (i = {}))[r.WARNING = 0] = "WARNING", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.POSITIVE = 3] = "POSITIVE";
            var p = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: r,
                    textColor: i = "text-normal",
                    textVariant: l = "text-sm/medium"
                } = e, p = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return c.default;
                        case 3:
                            return u.default
                    }
                }(n), h = function(e) {
                    switch (e) {
                        case 0:
                            return E.warning;
                        case 1:
                            return E.info;
                        case 2:
                            return E.error;
                        case 3:
                            return E.positive
                    }
                }(n);
                return (0, o.jsxs)("div", {
                    className: s(E.container, h, r),
                    children: [(0, o.jsx)("div", {
                        className: E.iconDiv,
                        children: (0, o.jsx)(p, {
                            className: E.icon
                        })
                    }), (0, o.jsx)(a.Text, {
                        className: E.text,
                        color: i,
                        variant: l,
                        children: t
                    })]
                })
            }
        },
        3958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return r
                },
                default: function() {
                    return v
                }
            }), n("222007");
            var r, i, o = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("800648"),
                c = n.n(u),
                d = n("917351"),
                f = n.n(d),
                E = n("77078"),
                p = n("13798"),
                h = n("145131"),
                _ = n("782340"),
                g = n("523192");
            (i = r || (r = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
            let m = {
                DEFAULT: g.default,
                RECORDING: g.recording
            };
            class I extends l.PureComponent {
                componentWillUnmount() {
                    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                }
                componentDidUpdate(e) {
                    let {
                        mode: t
                    } = this.props, {
                        mode: n
                    } = e;
                    if (n === t) return;
                    let {
                        _inputRef: r
                    } = this;
                    if (null == r.current) return;
                    let {
                        activeElement: i
                    } = document;
                    "DEFAULT" === t && r.current === i && r.current.blur(), "RECORDING" === t && r.current !== i && r.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: r
                    } = this.props, i = (0, p.toString)(n, !0);
                    e = "RECORDING" === t ? _.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? _.default.Messages.SHORTCUT_RECORDER_BUTTON : _.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let l = "DEFAULT" === t && n.length > 0;
                    return (0, o.jsx)(E.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, o.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: a(g.container, m[t], {
                                [g.hasValue]: l,
                                [g.disabled]: r
                            }),
                            children: (0, o.jsxs)(h.default, {
                                className: g.layout,
                                children: [(0, o.jsx)(h.default.Child, {
                                    className: g.input,
                                    children: (0, o.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: _.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: i,
                                        disabled: "RECORDING" !== this.props.mode || r
                                    })
                                }), (0, o.jsx)(h.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, o.jsxs)(E.Button, {
                                        className: g.button,
                                        disabled: r,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: E.Button.Sizes.MIN,
                                        color: E.ButtonColors.PRIMARY,
                                        children: [(0, o.jsx)("span", {
                                            className: g.text,
                                            children: e
                                        }), (0, o.jsx)("span", {
                                            className: g.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = f.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = l.createRef(), this._containerRef = l.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: r
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != r) this._unregisterNativeRecorder = n(e.id, r);
                            else if (null != r) {
                                let t = new c(e);
                                t.handleKey = r
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || "RECORDING" !== this._mousedownMode) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var v = I
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("505088"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: o,
                        backgroundColor: s,
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, r.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, r.jsx)("path", {
                            fill: i,
                            className: o,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, o.CircleXIcon, void 0, {
                    size: 24
                })
        },
        68238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("225389"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 12 12",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: o,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, o.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("276825"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, o.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return o
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let o = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => o(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("70102");
            var o = n("697218"),
                l = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, s = e.updateModalProps, i = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == r) {
                    null == a || a();
                    return
                }
                let c = r(p, d, l);

                function d() {
                    null == a || a()
                }

                function f(e) {
                    i(c), n(e)
                }

                function E(e) {
                    i(c), o(e)
                }

                function p(e) {
                    return s(c, p, d, {
                        ...l,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }

                function h(e) {
                    let {
                        res: t
                    } = e;
                    s(c, p, d, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: o = a,
                    isModalOpen: l = !1,
                    ...s
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, a;
                    if (i = e, a = l, i.body && 60008 === i.body.code || a && 429 === i.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...s
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(i) ? a : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("920636");
            let l = (e, t, n) => function(i) {
                return (0, r.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function s(e, t, n) {
                return (0, i.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, r) {
                return (0, i.updateModal)(e, l(t, n, r))
            }
        }
    }
]);