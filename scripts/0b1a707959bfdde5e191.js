"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [88005], {
        388005: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => G
            });
            var r = n(785893),
                o = n(667294),
                a = n(441143),
                s = n.n(a),
                u = n(202351),
                i = n(882723),
                l = n(77413),
                c = n(213276),
                f = n(100823),
                S = n(968449),
                p = n(997582),
                d = n(473903),
                m = n(470643),
                h = n(559968),
                T = n(652591),
                O = n(749565),
                y = n(730381),
                j = n.n(y),
                v = 36e5,
                g = Object.freeze({
                    MINUTES_30: 18e5,
                    HOURS_1: 1 * v,
                    HOURS_4: 4 * v,
                    TODAY: "TODAY"
                });

            function b(e) {
                if (e === g.TODAY) {
                    var t = new Date;
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime()
                }
                s()("number" == typeof e, "Invalid custom status clear timeout");
                return e
            }
            var C = n(2590);

            function _(e) {
                return null == e ? null : null != e.id ? "custom" : "unicode"
            }

            function A(e, t, n, r) {
                var o = e.trim();
                if (o.length > 0 || null != t) {
                    S.Ok.updateSetting({
                        text: o.length > 0 ? o : "",
                        expiresAtMs: null != n ? String(j()().add(b(n), "ms").toDate().getTime()) : "0",
                        emojiId: null != t && null != t.id ? t.id : "0",
                        emojiName: null != t ? t.name : ""
                    });
                    T.default.track(C.rMx.CUSTOM_STATUS_UPDATED, {
                        location: null != r ? r.location : null,
                        emoji_type: _(t),
                        text_len: o.length,
                        clear_after: null != n ? "".concat(n) : null
                    })
                } else S.Ok.updateSetting(void 0)
            }
            var M = n(213424),
                x = n(473708),
                N = n(464322),
                U = n.n(N);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function w(e, t) {
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

            function L(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function R(e, t) {
                R = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return R(e, t)
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function B(e) {
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
                    var n, r = k(e);
                    if (t) {
                        var o = k(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }
            var Y = Object.values(g).filter((function(e) {
                return "number" == typeof e
            })).sort((function(e, t) {
                return e - t
            }));

            function H() {
                var e = S.Ok.getSetting();
                if (null == e || "" === e.expiresAtMs) return g.TODAY;
                var t = Number(e.expiresAtMs);
                if (isNaN(t)) return g.TODAY;
                if (0 === t) return null;
                var n, r = Number(t) - Date.now();
                return null !== (n = Y.find((function(e) {
                    return r <= e
                }))) && void 0 !== n ? n : g.TODAY
            }

            function F(e) {
                return (0, r.jsxs)("div", {
                    className: U().statusOptionItem,
                    children: [(0, r.jsx)(i.Status, {
                        status: e.value,
                        size: 10,
                        className: U().statusIcon
                    }), e.label]
                })
            }
            var z = [{
                key: 1,
                value: i.StatusTypes.ONLINE,
                label: (0, O.u5)(i.StatusTypes.ONLINE)
            }, {
                key: 2,
                value: i.StatusTypes.IDLE,
                label: (0,
                    O.u5)(i.StatusTypes.IDLE)
            }, {
                key: 3,
                value: i.StatusTypes.DND,
                label: (0, O.u5)(i.StatusTypes.DND)
            }, {
                key: 4,
                value: i.StatusTypes.INVISIBLE,
                label: (0, O.u5)(i.StatusTypes.INVISIBLE)
            }];

            function K() {
                var e = S.co.getSetting();
                return z.some((function(t) {
                    return t.value === e
                })) ? e : i.StatusTypes.ONLINE
            }
            var V = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && R(e, t)
                }(n, e);
                var t = B(n);

                function n() {
                    E(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        emojiInfo: null != e.props.customStatus ? e.props.customStatus.emoji : null,
                        text: null != e.props.customStatus && null != e.props.customStatus.state ? e.props.customStatus.state : "",
                        clearAfter: H(),
                        status: K()
                    };
                    e.handleClearStatus = function() {
                        e.setState({
                            emojiInfo: null,
                            text: ""
                        })
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        e.handleSaveStatus()
                    };
                    e.handleStatusChange = function(t) {
                        e.setState({
                            text: t
                        })
                    };
                    e.handleEmojiChange = function(t) {
                        if (null != t) {
                            var n = null != t.id ? {
                                id: t.id,
                                name: t.name,
                                animated: t.animated
                            } : {
                                id: null,
                                name: t.optionallyDiverseSequence,
                                animated: !1
                            };
                            e.setState({
                                emojiInfo: n
                            })
                        }
                    };
                    e.handleChangeClearAfter = function(t) {
                        e.setState({
                            clearAfter: t
                        })
                    };
                    e.handleChangeStatus = function(t) {
                        e.setState({
                            status: t
                        })
                    };
                    e.handleSaveStatus = function() {
                        var t = e.props,
                            n = t.sourceAnalyticsContext,
                            r = t.onClose,
                            o = e.state,
                            a = o.emojiInfo,
                            s = o.text,
                            u = o.clearAfter,
                            i = o.status;
                        S.co.updateSetting(i);
                        A(s, a, u, n);
                        r()
                    };
                    e.handleKeyPress = function(t) {
                        t.which === C.yXg.ENTER && e.handleSaveStatus()
                    };
                    e.renderEmojiPicker = function(t) {
                        var n = t.closePopout,
                            o = e.props.onClose;
                        return (0, r.jsx)(f.Z, {
                            closePopout: n,
                            onSelectEmoji: function(t, r) {
                                e.handleEmojiChange(t);
                                r && n()
                            },
                            pickerIntention: M.Hz.STATUS,
                            onNavigateAway: o
                        })
                    };
                    return e
                }
                var o = n.prototype;
                o.componentDidMount = function() {
                    var e = this.props.sourceAnalyticsContext;
                    T.default.track(C.rMx.OPEN_MODAL, {
                        source: e.location,
                        type: C.jXE.CUSTOM_STATUS_MODAL,
                        load_id: e.loadId
                    })
                };
                o.getEmojiButtonRenderer = function() {
                    var e = this.state.emojiInfo;
                    return null == e ? null : function() {
                        return (0, r.jsx)(l.Z, {
                            className: U().emoji,
                            emojiId: e.id,
                            emojiName: e.name,
                            animated: Boolean(e.animated)
                        })
                    }
                };
                o.renderCustomStatusInput = function() {
                    var e = this,
                        t = this.props.user,
                        n = this.state,
                        o = n.text,
                        a = n.emojiInfo;
                    return (0, r.jsx)(i.FormSection, {
                        className: U().formGroup,
                        title: x.Z.Messages.CUSTOM_STATUS_MODAL_BODY.format({
                            username: t.username
                        }),
                        children: (0, r.jsxs)("div", {
                            className: U().inputContainer,
                            children: [(0, r.jsx)("div", {
                                className: U().emojiButtonContainer,
                                children: (0, r.jsx)(i.Popout, {
                                    renderPopout: this.renderEmojiPicker,
                                    position: "left",
                                    animation: i.Popout.Animation.NONE,
                                    align: "top",
                                    children: function(t, n) {
                                        var o = n.isShown;
                                        return (0, r.jsx)(m.Z, w(P({}, t), {
                                            active: o,
                                            className: U().emojiButton,
                                            tabIndex: 0,
                                            renderButtonContents: e.getEmojiButtonRenderer()
                                        }))
                                    }
                                })
                            }), (0, r.jsx)(i.TextInput, {
                                maxLength: 128,
                                value: o,
                                inputClassName: U().input,
                                placeholder: x.Z.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
                                onChange: this.handleStatusChange,
                                onKeyPress: this.handleKeyPress,
                                autoFocus: !0
                            }), o.length > 0 || null != a ? (0, r.jsx)(i.Button, {
                                focusProps: {
                                    offset: {
                                        top: 8,
                                        bottom: 8,
                                        left: -2,
                                        right: -2
                                    }
                                },
                                className: U().clearButton,
                                onClick: this.handleClearStatus,
                                look: i.Button.Looks.BLANK,
                                size: i.Button.Sizes.NONE,
                                children: (0, r.jsx)(h.Z, {
                                    className: U().clearIcon
                                })
                            }) : null]
                        })
                    })
                };
                o.renderClearAfter = function() {
                    var e = this.state.clearAfter;
                    return (0, r.jsx)(i.FormSection, {
                        className: U().formGroup,
                        title: x.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
                        children: (0, r.jsx)(i.SingleSelect, {
                            placeholder: x.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
                            maxVisibleItems: 5,
                            value: e,
                            options: this.clearAfterOptions,
                            onChange: this.handleChangeClearAfter
                        })
                    })
                };
                o.renderStatusInput = function() {
                    var e = this.state.status;
                    return (0, r.jsx)(i.FormSection, {
                        className: U().formGroup,
                        title: x.Z.Messages.CUSTOM_STATUS_STATUS_TITLE,
                        children: (0, r.jsx)(i.SingleSelect, {
                            maxVisibleItems: 4,
                            value: e,
                            options: z,
                            onChange: this.handleChangeStatus,
                            renderOptionLabel: F
                        })
                    })
                };
                o.render = function() {
                    var e = this.props,
                        t = e.transitionState,
                        n = e.onClose;
                    return (0, r.jsx)(c.Z, w(P({}, this.analyticsLocation), {
                        children: (0, r.jsxs)(i.ModalRoot, {
                            transitionState: t,
                            className: U().modalRoot,
                            "aria-label": x.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
                            children: [(0, r.jsxs)(i.ModalHeader, {
                                separator: !1,
                                className: U().headerContainer,
                                children: [(0, r.jsx)("div", {
                                    className: U().art
                                }), (0, r.jsx)("div", {
                                    className: U().header,
                                    children: (0, r.jsx)(i.H, {
                                        className: U().headerText,
                                        children: x.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
                                    })
                                }), (0, r.jsx)(i.ModalCloseButton, {
                                    onClick: n,
                                    className: U().modalCloseButton
                                })]
                            }), (0, r.jsxs)(i.ModalContent, {
                                children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, r.jsx)(i.FormDivider, {
                                    className: U().formDivider
                                }), this.renderStatusInput()]
                            }), (0, r.jsxs)(i.ModalFooter, {
                                children: [(0, r.jsx)(i.Button, {
                                    onClick: this.handleSubmit,
                                    children: x.Z.Messages.SAVE
                                }), (0, r.jsx)(i.Button, {
                                    onClick: n,
                                    look: i.Button.Looks.LINK,
                                    color: U().cancelButton,
                                    children: x.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    }))
                };
                ! function(e, t, n) {
                    t && D(e.prototype, t);
                    n && D(e, n)
                }(n, [{
                    key: "clearAfterOptions",
                    get: function() {
                        return [{
                            key: 1,
                            value: g.TODAY,
                            label: x.Z.Messages.CUSTOM_STATUS_TODAY
                        }, {
                            key: 2,
                            value: g.HOURS_4,
                            label: x.Z.Messages.CUSTOM_STATUS_HOURS.format({
                                hours: 4
                            })
                        }, {
                            key: 3,
                            value: g.HOURS_1,
                            label: x.Z.Messages.CUSTOM_STATUS_HOURS.format({
                                hours: 1
                            })
                        }, {
                            key: 4,
                            value: g.MINUTES_30,
                            label: x.Z.Messages.CUSTOM_STATUS_MINUTES.format({
                                minutes: 30
                            })
                        }, {
                            key: 5,
                            value: null,
                            label: x.Z.Messages.CUSTOM_STATUS_DONT_CLEAR
                        }]
                    }
                }, {
                    key: "analyticsLocation",
                    get: function() {
                        return {
                            page: C.ZY5.CUSTOM_STATUS_MODAL
                        }
                    }
                }]);
                return n
            }(o.PureComponent);
            const G = u.ZP.connectStores([p.Z, d.default], (function() {
                var e = d.default.getCurrentUser();
                s()(null != e, "CustomStatusModal: user cannot be null");
                return {
                    customStatus: p.Z.getCustomStatusActivity(),
                    user: e
                }
            }), {
                forwardRef: !0
            })(V)
        }
    }
]);