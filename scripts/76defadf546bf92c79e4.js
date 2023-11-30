(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74928"], {
        817295: function(e, t, n) {
            "use strict";

            function l() {
                return n.el("225629").then(n.bind(n, "225629"))
            }
            async function i(e, t, n, i, r) {
                let s = await l();
                return s.crop_gif(e, t, n, i, r)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                wasmCropGIF: function() {
                    return i
                }
            })
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return s
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                l.default.wait(() => l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return i
                }
            });
            var l = n("913144");

            function i() {
                l.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                o = n("77078"),
                a = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: h,
                        retryPrompt: C,
                        retrySuccessMessage: _
                    } = this.props, {
                        code: p,
                        errorMessage: A,
                        retrySuccess: T
                    } = this.state, I = i.Children.count(r) > 0 ? (0, l.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, m = null != C ? (0, l.jsxs)(o.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(o.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(o.Anchor, {
                                children: C
                            })
                        })]
                    }) : null, R = T ? (0, l.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: _
                        })
                    }) : null;
                    return (0, l.jsx)(o.ModalRoot, {
                        transitionState: E,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(o.ModalContent, {
                                children: [null != h ? (0, l.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: h
                                }) : null, I, R, (0, l.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, l.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : A
                                    }) : null, m]
                                })]
                            }), (0, l.jsxs)(o.ModalFooter, {
                                children: [(0, l.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === p.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, l.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
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
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L10 14.5858L17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7.18016 15.8698C6.55491 15.8698 6.00152 15.7081 5.52001 15.3847C5.03849 15.0613 4.66478 14.6085 4.39887 14.0264C4.13296 13.4371 4 12.7615 4 11.9997C4 11.2451 4.14014 10.5767 4.42043 9.99461C4.7079 9.41248 5.12114 8.95612 5.66015 8.62553C6.20635 8.29494 6.85675 8.12964 7.61137 8.12964C8.25099 8.12964 8.82234 8.26619 9.32542 8.53929C9.83568 8.81239 10.2202 9.19688 10.4789 9.69277L9.26074 10.566C8.89421 9.89041 8.34802 9.55263 7.62215 9.55263C6.96096 9.55263 6.45429 9.76823 6.10214 10.1994C5.74999 10.6235 5.57391 11.2236 5.57391 11.9997C5.57391 12.7831 5.74999 13.3868 6.10214 13.8108C6.45429 14.2348 6.96096 14.4468 7.62215 14.4468C7.91681 14.4468 8.18631 14.3929 8.43066 14.2851C8.6822 14.1701 8.87625 14.0156 9.0128 13.8216V12.8945H7.29874V11.4931H10.5436V15.7189H9.27152L9.0667 15.0074C8.64267 15.5824 8.01383 15.8698 7.18016 15.8698ZM13.5198 15.7189H11.9459V8.28056H13.5198V15.7189ZM15.0304 15.7189H16.6043V12.8945H19.3641V11.4715H16.6043V9.70355H20.0001V8.28056H15.0304V15.7189Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 6C4 3.79086 5.79086 2 8 2H8.08854C9.89557 2 11.4793 3.18456 12 4.89815C12.5208 3.18456 14.1044 2 15.9115 2H16C18.2091 2 20 3.79086 20 6C20 6.72857 19.8052 7.41165 19.4649 8H20C21.1046 8 22 8.89543 22 10V11.5C22 11.7761 21.7761 12 21.5 12H2.5C2.22386 12 2 11.7761 2 11.5V10C2 8.89543 2.89543 8 4 8H4.53513C4.19479 7.41165 4 6.72857 4 6ZM16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4H15.9115C14.9531 4 14.1177 4.65225 13.8853 5.58199L13.2808 8H16ZM10.1147 5.58199L10.7192 8H8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4H8.08854C9.0469 4 9.88229 4.65225 10.1147 5.58199Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M3 20C3 21.1046 3.89543 22 5 22H10.5C10.7761 22 11 21.7761 11 21.5V14.5C11 14.2239 10.7761 14 10.5 14H3.5C3.22386 14 3 14.2239 3 14.5V20Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M13.5 22C13.2239 22 13 21.7761 13 21.5V14.5C13 14.2239 13.2239 14 13.5 14H20.5C20.7761 14 21 14.2239 21 14.5V20C21 21.1046 20.1046 22 19 22H13.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        578478: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM15.35 13.1333L18.85 17.8C19.2208 18.2944 18.868 19 18.25 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333ZM10.2045 5.97731C10.4329 5.06617 9.32431 4.42611 8.64943 5.07947C8.28741 5.42996 7.71259 5.42996 7.35057 5.07947C6.67569 4.42611 5.56708 5.06617 5.79547 5.97731C5.91798 6.46608 5.63057 6.96388 5.14603 7.10216C4.24276 7.35994 4.24276 8.64006 5.14603 8.89784C5.63057 9.03612 5.91798 9.53392 5.79547 10.0227C5.56708 10.9338 6.67569 11.5739 7.35057 10.9205C7.71259 10.57 8.28741 10.57 8.64943 10.9205C9.32431 11.5739 10.4329 10.9338 10.2045 10.0227C10.082 9.53392 10.3694 9.03612 10.854 8.89784C11.7572 8.64005 11.7572 7.35994 10.854 7.10216C10.3694 6.96388 10.082 6.46608 10.2045 5.97731Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M15 14C16.1046 14 17 13.1046 17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8L5.5 8C4.94772 8 4.5 8.44772 4.5 9C4.5 9.55229 4.94772 10 5.5 10L8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12H6C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H7.25204C8.14012 17.4505 11.2723 20 15 20C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H7ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M2.5 10C3.05228 10 3.5 9.55228 3.5 9C3.5 8.44772 3.05228 8 2.5 8H2C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10H2.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = n("872717"),
                r = n("49111"),
                s = n("782340");
            l = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = n("872717"),
                r = n("49111"),
                s = n("782340");
            l = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var l = n("884691");

            function i(e) {
                let [t, n] = (0, l.useState)(!1), i = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [i]), t
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return r
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return a
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return d
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return c
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return h
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return C
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return _
                },
                BANNER_ASPECT_RATIO: function() {
                    return p
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return A
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return T
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return I
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return R
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return g
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return N
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return M
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return w
                },
                MessageTypes: function() {
                    return s
                }
            });
            var l, i, r, s, o = n("917219");
            (l = r || (r = {}))[l.AVATAR = 0] = "AVATAR", l[l.BANNER = 1] = "BANNER", l[l.GUILD_BANNER = 2] = "GUILD_BANNER", l[l.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", l[l.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", l[l.HOME_HEADER = 5] = "HOME_HEADER", l[l.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                u = 2400,
                d = 848,
                c = 2400,
                f = 1350,
                E = 2400,
                h = 960,
                C = 2400,
                _ = 600,
                p = 17 / 6,
                A = 16 / 9,
                T = 2.5,
                I = 4,
                m = a / p,
                R = a / A,
                g = a / T,
                N = a / I,
                M = o.BACKGROUND_REPLACEMENT_SIZE.width / o.BACKGROUND_REPLACEMENT_SIZE.height,
                w = a / M;
            (i = s || (s = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        57015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("70102");
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                s = n("77078"),
                o = n("812204"),
                a = n("685665"),
                u = n("652914"),
                d = n("95689"),
                c = n("599110"),
                f = n("8731"),
                E = n("817295"),
                h = n("75015"),
                C = n("49111"),
                _ = n("917219"),
                p = n("782340"),
                A = n("879777"),
                T = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: T,
                        allowSkip: I = !1,
                        onCrop: m,
                        onClose: R,
                        uploadType: g = h.UploadTypes.AVATAR,
                        showUpsellHeader: N = !1,
                        analyticsPage: M
                    } = e, [w, O] = i.useState({
                        width: 0,
                        height: 0
                    }), [S, v] = i.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [L, y] = i.useState(!1), [U, P] = i.useState(1), [D, H] = i.useState({
                        x: 0,
                        y: 0
                    }), [b, x] = i.useState(null), [G, V] = i.useState(!1), {
                        AnalyticsLocationProvider: B
                    } = (0, a.default)(o.default.IMAGE_CROPPING_MODAL), j = i.useRef({
                        x: 0,
                        y: 0
                    }), k = i.useRef(null), F = i.useRef(null), W = "image/gif" === t.type;
                    i.useEffect(() => {
                        (0, E.default)()
                    }, []), i.useEffect(() => {
                        W && N && c.default.track(C.AnalyticEvents.OPEN_MODAL, {
                            type: C.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: M
                            }
                        })
                    }, [N, M, W]);
                    let Z = () => {
                            switch (g) {
                                case h.UploadTypes.BANNER:
                                    return {
                                        height: h.USER_BANNER_MAX_HEIGHT, width: h.USER_BANNER_MAX_WIDTH
                                    };
                                case h.UploadTypes.VIDEO_BACKGROUND:
                                    return _.BACKGROUND_REPLACEMENT_SIZE;
                                case h.UploadTypes.AVATAR:
                                case h.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: C.AVATAR_MAX_SIZE, width: C.AVATAR_MAX_SIZE
                                    };
                                case h.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: h.GUILD_BANNER_MAX_HEIGHT, width: h.GUILD_BANNER_MAX_WIDTH
                                    };
                                case h.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: h.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: h.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case h.UploadTypes.HOME_HEADER:
                                    return {
                                        height: h.HOME_HEADER_MAX_HEIGHT, width: h.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        z = i.useCallback((e, t, n) => {
                            j.current = (0, f.getBoundedCoordinates)(e, t, n), null != k.current && (k.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
                        }, [k]),
                        Y = i.useCallback(() => {
                            if (null == k.current || U > 1) return;
                            let {
                                width: e,
                                height: t
                            } = k.current.getBoundingClientRect(), {
                                width: n,
                                height: l
                            } = (0, f.adjustImageDimensionsForAspectRatio)(g, e, t), i = (0, f.calculateOverlaySize)(g, n, l, t);
                            x({
                                width: n,
                                height: l
                            }), O(i), v((0, f.calculateDragBoundaries)(n, l, i))
                        }, [g, U]),
                        X = i.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = j.current;
                            if (!L || e.clientX === t && e.clientY === n) return;
                            let l = e.clientX - D.x,
                                i = e.clientY - D.y;
                            z(l, i, S)
                        }, [S, L, D, z]),
                        K = () => {
                            y(!1)
                        },
                        q = () => {
                            let e = Z();
                            return e.width !== e.height
                        },
                        $ = async () => {
                            let e;
                            if (null == k.current) return;
                            V(!0);
                            let n = k.current,
                                l = Z();
                            if (W) try {
                                let {
                                    result: i,
                                    cancelFn: r
                                } = await (0, f.cropGIF)(t, n, w, j.current, l);
                                F.current = r, e = await i, F.current = null
                            } catch (e) {
                                var i;
                                throw null === (i = F.current) || void 0 === i || i.call(F), F.current = null, Error("Error cropping GIF")
                            } else e = (0, f.cropStaticImage)(n, w, j.current, l);
                            await m(e, t), V(!1), R()
                        };
                    return i.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Y), () => {
                        window.removeEventListener("mouseup", K), window.removeEventListener("resize", Y)
                    }), [Y]), i.useEffect(() => () => {
                        null != F.current && F.current()
                    }, []), i.useEffect(() => {
                        if (L) return window.addEventListener("mousemove", X), () => window.removeEventListener("mousemove", X)
                    }, [X, L]), (0, l.jsx)(B, {
                        children: (0, l.jsxs)(s.ModalRoot, {
                            onAnimationEnd: Y,
                            transitionState: T,
                            size: s.ModalSize.MEDIUM,
                            children: [N && (0, l.jsx)(u.default, {
                                type: g,
                                analyticsPage: M,
                                analyticsSection: C.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: W,
                                banner: n
                            }), (0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.FormTitle, {
                                    className: A.titleCase,
                                    tag: s.FormTitleTags.H1,
                                    children: p.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                className: A.modalContent,
                                children: [(0, l.jsxs)("div", {
                                    className: A.editingContainer,
                                    children: [(0, l.jsx)("img", {
                                        style: {
                                            opacity: null == b ? 0 : 1,
                                            transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == b) return {};
                                                let e = b.width / b.height,
                                                    t = q() && e > h.BANNER_ASPECT_RATIO ? w.height / b.height : 1;
                                                return {
                                                    width: b.width * U * t,
                                                    minWidth: b.width * U * t,
                                                    height: b.height * U * t
                                                }
                                            })()
                                        },
                                        className: G ? A.imageDisabled : A.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: k,
                                        onMouseDown: e => {
                                            let t = e.clientX - j.current.x,
                                                n = e.clientY - j.current.y;
                                            H({
                                                x: t,
                                                y: n
                                            }), y(!0)
                                        },
                                        draggable: !1
                                    }), (0, l.jsx)("div", {
                                        className: g === h.UploadTypes.AVATAR ? A.overlayAvatar : A.overlayBanner,
                                        style: {
                                            opacity: null == b ? 0 : 1,
                                            width: w.width,
                                            height: w.height
                                        }
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: A.sliderContainer,
                                    children: [(0, l.jsx)(d.default, {
                                        className: A.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)(s.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == b) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = b, l = (0, f.calculateDragBoundaries)(t * e, n * e, w), {
                                                x: i,
                                                y: s
                                            } = j.current;
                                            (!(0, r.inRange)(i, l.right, l.left) || !(0, r.inRange)(s, l.top, l.bottom)) && z(i, s, l), P(e), v(l)
                                        },
                                        disabled: G,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": p.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, l.jsx)(d.default, {
                                        className: A.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, l.jsxs)(s.ModalFooter, {
                                className: A.modalFooter,
                                children: [I ? (0, l.jsx)(s.Button, {
                                    className: A.cancelButton,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    size: s.ButtonSizes.SMALL,
                                    onClick: () => {
                                        I && (m(n, t), R())
                                    },
                                    children: p.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, l.jsxs)("div", {
                                    className: A.buttonsRight,
                                    children: [(0, l.jsx)(s.Button, {
                                        className: A.cancelButton,
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        size: s.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != F.current) {
                                                F.current(), F.current = null, V(!1);
                                                return
                                            }
                                            R()
                                        },
                                        children: p.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, l.jsx)(s.Button, {
                                        submitting: G,
                                        size: s.ButtonSizes.SMALL,
                                        onClick: $,
                                        children: p.default.Messages.AVATAR_UPLOAD_APPLY
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        8731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                cropGIF: function() {
                    return s
                },
                cropStaticImage: function() {
                    return o
                },
                getBoundedCoordinates: function() {
                    return a
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return d
                },
                calculateDragBoundaries: function() {
                    return c
                },
                calculateOverlaySize: function() {
                    return f
                },
                downsizeImage: function() {
                    return E
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var l = n("917351"),
                i = n("75015");

            function r(e, t, n, l) {
                let i = e.naturalWidth / e.width,
                    r = t.width / 2,
                    s = t.height / 2,
                    o = (e.width / 2 - r - n.x) * i,
                    a = (e.height / 2 - s - n.y) * i,
                    u = t.width * i,
                    d = t.height * i,
                    c = Math.min(u, l.width),
                    f = Math.min(d, l.height);
                return {
                    x: o,
                    y: a,
                    scaledCropWidth: u,
                    scaledCropHeight: d,
                    canvasWidth: c,
                    canvasHeight: f
                }
            }
            async function s(e, t, l, s, o) {
                let {
                    x: a,
                    y: u,
                    scaledCropWidth: d,
                    scaledCropHeight: c
                } = r(t, l, s, o), f = await e.arrayBuffer(), E = new Worker(new URL(n.p + n.u("39703"), n.b)), h = new Promise((e, t) => {
                    E.onmessage = n => {
                        let {
                            data: l
                        } = n;
                        if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                            var r;
                            e((r = new Blob([l.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var n;
                                    let l = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                    "string" == typeof l ? e(l) : e("")
                                }, t.readAsDataURL(r)
                            }))), E.terminate()
                        } else l.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
                    }
                });
                return E.postMessage({
                    type: i.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(f),
                    x: 0 | a,
                    y: 0 | u,
                    width: 0 | d,
                    height: 0 | c
                }), {
                    result: h,
                    cancelFn: () => E.terminate()
                }
            }

            function o(e, t, n, l) {
                let {
                    x: i,
                    y: s,
                    scaledCropWidth: o,
                    scaledCropHeight: a,
                    canvasWidth: u,
                    canvasHeight: d
                } = r(e, t, n, l), c = document.createElement("canvas");
                c.width = u, c.height = d;
                let f = c.getContext("2d");
                return null != f && f.drawImage(e, i, s, o, a, 0, 0, c.width, c.height), c.toDataURL("image/png")
            }

            function a(e, t, n) {
                return {
                    x: (0, l.clamp)(e, n.left, n.right),
                    y: (0, l.clamp)(t, n.bottom, n.top)
                }
            }

            function u(e, t, n, l) {
                let r = n,
                    s = l;
                n > i.EDITING_CONTAINER_WIDTH && (r = i.EDITING_CONTAINER_WIDTH, s = l * (i.EDITING_CONTAINER_WIDTH / n));
                if (n / l < e) return {
                    width: r,
                    height: s
                };
                let o = t / s,
                    a = r * o;
                return {
                    width: a,
                    height: t
                }
            }

            function d(e, t, n) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case i.UploadTypes.BANNER:
                        return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.GUILD_BANNER:
                        return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.HOME_HEADER:
                        return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
                }
            }

            function c(e, t, n) {
                let l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - n.width,
                    r = t - n.height;
                return 0 !== i && (l.left = -Math.abs(i / 2), l.right = i / 2), 0 !== r && (l.bottom = -Math.abs(r / 2), l.top = r / 2), l
            }

            function f(e, t, n, l) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        let r = Math.min(t, n);
                        return {
                            width: r, height: r
                        };
                    case i.UploadTypes.BANNER:
                        let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: s * (1 / i.BANNER_ASPECT_RATIO)
                        };
                    case i.UploadTypes.GUILD_BANNER:
                        let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: Math.min(o * (9 / 16), l)
                        };
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        let a = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: a, height: a * (9 / 16)
                        };
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: .4 * u
                        };
                    case i.UploadTypes.HOME_HEADER:
                        let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: d, height: d * (1 / i.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function E(e, t, n) {
                let l = e.naturalWidth / e.naturalHeight,
                    i = t,
                    r = n;
                e.naturalWidth > e.naturalHeight ? i /= l : r *= l;
                let s = {
                    height: i,
                    width: r
                };
                return o(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, s)
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var l = n("65597"),
                i = n("862205"),
                r = n("697218"),
                s = n("719923"),
                o = n("782340");
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
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: o,
                        collectOffOverride: a
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !a && (u ? l : r),
                        autoUnfurlReactionTooltip: o
                    }
                },
                d = e => {
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
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, l.default)([r.default], () => r.default.getCurrentUser()), s = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: i,
                        config: s
                    }), E = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d,
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
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
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
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("748820"),
                r = n("77078"),
                s = n("112679"),
                o = n("55689"),
                a = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: h,
                    onComplete: C,
                    onSubscriptionConfirmation: _,
                    analyticsLocations: p,
                    analyticsObject: A,
                    analyticsLocation: T,
                    analyticsSourceLocation: I,
                    isGift: m = !1,
                    giftMessage: R,
                    subscriptionTier: g,
                    trialId: N,
                    postSuccessGuild: M,
                    openInvoiceId: w,
                    applicationId: O,
                    referralTrialOfferId: S,
                    giftRecipient: v,
                    returnRef: L
                } = null != e ? e : {}, y = !1, U = (0, i.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...r
                        } = n;
                        return (0, l.jsx)(e, {
                            ...r,
                            loadId: U,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: m,
                            giftMessage: R,
                            giftRecipient: v,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == h || h(e), e && (null == _ || _())
                            },
                            onComplete: () => {
                                y = !0, null == C || C(), !m && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: _,
                            analyticsLocations: p,
                            analyticsObject: A,
                            analyticsLocation: T,
                            analyticsSourceLocation: I,
                            trialId: N,
                            postSuccessGuild: M,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: w,
                            applicationId: O,
                            referralTrialOfferId: S,
                            returnRef: L
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != T ? T : A,
                            source: I,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != N,
                            application_id: O,
                            location_stack: p
                        }), (0, s.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == h || h(y), y && (!m && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == _ || _())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return i
                },
                setHasCompletedStep: function() {
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var l = n("913144");
            let i = () => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                a = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("446674"),
                o = n("77078"),
                a = n("79112"),
                u = n("685665"),
                d = n("788506"),
                c = n("649844"),
                f = n("393414"),
                E = n("797647"),
                h = n("697218"),
                C = n("521012"),
                _ = n("471671"),
                p = n("181114"),
                A = n("978679"),
                T = n("216422"),
                I = n("719923"),
                m = n("646718"),
                R = n("49111"),
                g = n("782340"),
                N = n("683437"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: i,
                        onClick: M,
                        size: w,
                        className: O,
                        trialId: S,
                        isTrialCTA: v,
                        buttonText: L,
                        buttonTextClassName: y,
                        postSuccessGuild: U,
                        onSubscribeModalClose: P,
                        premiumModalAnalyticsLocation: D,
                        showIcon: H = !0,
                        disableShine: b,
                        applicationId: x,
                        giftMessage: G,
                        overrideDisabledButtonText: V,
                        shinyButtonClassName: B,
                        ...j
                    } = e, k = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), F = (0, s.useStateFromStores)([_.default], () => _.default.isFocused()), W = (0, s.useStateFromStores)([C.default], () => C.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Z
                    } = (0, u.default)(), z = e => {
                        if (e.preventDefault(), null == k) {
                            (0, f.transitionTo)(R.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == W ? void 0 : W.status) === R.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, d.trackPremiumSettingsPaneOpened)(), a.default.open(R.UserSettingsSections.PREMIUM), null == P || P(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: i,
                                isGift: r,
                                subscriptionTier: s,
                                trialId: a,
                                postSuccessGuild: u,
                                onSubscribeModalClose: d,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: E,
                                applicationId: h,
                                giftMessage: C
                            } = e;
                            if (!t) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!i) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let _ = R.AnalyticsObjectTypes.BUY;
                            null != a ? _ = R.AnalyticsObjectTypes.TRIAL : r && (_ = R.AnalyticsObjectTypes.GIFT), (0, c.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: R.AnalyticsObjects.BUTTON_CTA,
                                    objectType: _,
                                    ...E
                                },
                                trialId: a,
                                postSuccessGuild: u,
                                onClose: d,
                                applicationId: h,
                                giftMessage: C
                            })
                        }({
                            isClaimed: k.isClaimed(),
                            isVerified: k.verified,
                            isGift: t,
                            subscriptionTier: i,
                            trialId: S,
                            postSuccessGuild: U,
                            onSubscribeModalClose: P,
                            analyticsLocations: Z,
                            premiumModalAnalyticsLocation: D,
                            applicationId: x,
                            giftMessage: G
                        })
                    };
                    if (v) return (0, l.jsxs)(o.Button, {
                        size: w,
                        className: O,
                        innerClassName: N.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: z,
                        ...j,
                        children: [H && (0, l.jsx)(T.default, {
                            className: N.premiumIcon
                        }), (0, l.jsx)("span", {
                            className: r(N.buttonText, y),
                            children: null != L ? L : g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, l.jsxs)(o.Button, {
                        size: w,
                        className: O,
                        innerClassName: N.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: z,
                        ...j,
                        children: [(0, l.jsx)(A.default, {
                            className: N.giftIcon
                        }), (0, l.jsx)("span", {
                            className: r(N.buttonText, y),
                            children: null != L ? L : g.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = g.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != W ? (0, I.getPremiumPlanItem)(W) : null,
                        K = null != X ? I.default.getPremiumType(X.planId) : null == k ? void 0 : k.premiumType,
                        q = i === m.PremiumSubscriptionSKUs.TIER_2 && null != K && [m.PremiumTypes.TIER_0, m.PremiumTypes.TIER_1].includes(K);
                    q && (Y = g.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let $ = null != W && W.status !== R.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(W.planId) && !q,
                        J = $ ? null != V ? V : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, l = null, i = null;
                            if (null != t && t !== m.PremiumSubscriptionSKUs.LEGACY && t !== m.PremiumSubscriptionSKUs.TIER_0 && t !== m.PremiumSubscriptionSKUs.TIER_1 && t !== m.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: l,
                                disabledButtonTooltipText: i
                            };
                            let r = null != t ? m.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != r ? m.PremiumTypeOrder[r] : null,
                                o = null != n ? m.PremiumTypeOrder[n] : null;
                            return null != o && null != s && s < o ? (l = g.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = g.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (l = g.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = g.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === m.PremiumTypes.TIER_2 && (i = g.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: l,
                                disabledButtonTooltipText: i
                            }
                        }({
                            ctaSubscriptionSkuId: i,
                            currentPremiumType: K
                        }) : null;

                    function Q(e) {
                        var t, n;
                        return (0, l.jsxs)(p.default, {
                            disabled: $,
                            onClick: z,
                            innerClassName: N.premiumSubscribeButton,
                            color: i === m.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: w,
                            className: B,
                            wrapperClassName: O,
                            pauseAnimation: !F || b,
                            ...j,
                            ...e,
                            children: [H && (0, l.jsx)(T.default, {
                                className: N.premiumIcon
                            }), (0, l.jsx)("span", {
                                className: r(N.buttonText, y),
                                children: null !== (n = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : Y
                            })]
                        })
                    }
                    return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, l.jsx)(o.Tooltip, {
                        text: J.disabledButtonTooltipText,
                        children: Q
                    }) : Q()
                }
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("627445"),
                i = n.n(l),
                r = n("446674"),
                s = n("913144"),
                o = n("816454");
            let a = new Map;

            function u(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(s.default, {
                WINDOW_INIT: function(e) {
                    i(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: l,
                        focused: r
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: l,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return _
                },
                default: function() {
                    return A
                }
            });
            var l, i, r = n("37983"),
                s = n("884691"),
                o = n("414456"),
                a = n.n(o),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                f = n("145131"),
                E = n("396792");
            (l = i || (i = {})).DEFAULT = "default", l.SMALL = "small";
            let h = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                C = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class _ extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, r.jsx)(u.default.div, {
                        ...l,
                        className: a(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: h[t],
                            children: (0, r.jsx)("div", {
                                className: C[t]
                            })
                        })
                    })
                }
            }
            _.defaultProps = {
                shineSize: "default"
            };
            let p = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: i,
                    pauseAnimation: o,
                    shineSize: u = "default",
                    shinePaused: f,
                    buttonShineClassName: h,
                    onlyShineOnHover: C,
                    ...p
                } = e, A = s.createRef(), T = (0, c.default)(A), I = !l && !i && !0 !== o && (!C || T);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: A,
                    ...p,
                    className: a(E.shinyButton, n),
                    disabled: l,
                    submitting: i,
                    children: [t, I ? (0, r.jsx)(_, {
                        shinePaused: f,
                        className: a(E.buttonShine, C ? E.onlyShineOnHover : void 0, h),
                        shineSize: u
                    }) : null]
                })
            };
            p.ShineSizes = i;
            var A = p
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("998460"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("578478"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, r.ImageIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("202909"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, l.jsx)("path", {
                            className: o,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("276825"),
                s = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, r.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return C
                },
                getPaletteForAvatar: function() {
                    return _
                },
                readFileAsBase64: function() {
                    return A
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return I
                },
                isPNGAnimated: function() {
                    return m
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var l = n("627445"),
                i = n.n(l),
                r = n("917351"),
                s = n.n(r),
                o = n("48648"),
                a = n.n(o);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i,
                    minWidth: r = 0,
                    minHeight: s = 0
                } = e;
                if (t !== l || n !== i) {
                    let e = t > l ? l / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), s);
                    let o = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * o), r), n = Math.max(Math.round(n * o), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    l = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: l,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e, r = 1;
                t > l && (r = l / t), t = Math.round(t * r);
                let s = 1;
                return (n = Math.round(n * r)) > i && (s = i / n), Math.min(r * s, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(l / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let h = [
                [0, 0, 0]
            ];

            function C(e, t, n) {
                let l = document.createElement("canvas"),
                    i = l.getContext("2d");
                if (null == i) return h;
                let r = l.width = 0 === e.width ? 128 : e.width,
                    s = l.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, r, s);
                let o = i.getImageData(0, 0, r, s).data,
                    u = function(e, t, n) {
                        let l = [];
                        for (let i = 0, r, s, o, a, u; i < t; i += n) s = e[(r = 4 * i) + 0], o = e[r + 1], a = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(s > 250 && o > 250 && a > 250) && l.push([s, o, a]);
                        return l
                    }(o, r * s, n),
                    d = a(u, t);
                return "boolean" == typeof d ? h : d.palette()
            }
            let _ = e => p(e),
                p = s.memoize(e => new Promise((t, n) => {
                    let l = new Image;
                    l.crossOrigin = "Anonymous", l.onerror = e => {
                        n(e), l.onerror = l.onload = null, l = null
                    }, l.onload = () => {
                        t(C(l, 5, 10)), l.onerror = l.onload = null, l = null
                    }, l.src = e
                }));

            function A(e) {
                return new Promise((t, n) => {
                    let l = new FileReader;
                    l.readAsDataURL(e), l.onload = () => {
                        i("string" == typeof l.result, "Result must be a string"), t(l.result)
                    }, l.onerror = e => n(e)
                })
            }

            function T(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function I(e, t, n) {
                let l = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            l = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) l[i] = t.charCodeAt(i);
                        return new Blob([l], {
                            type: n
                        })
                    }(e),
                    i = await l.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function m(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let l = await e.text(),
                    i = l.indexOf("IDAT");
                return !!(i > 0) && -1 !== l.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var l = n("917351"),
                i = n.n(l);
            let r = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var r = n("697218"),
                s = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, o = e.updateModalProps, i = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == l) {
                    null == a || a();
                    return
                }
                let d = l(h, c, s);

                function c() {
                    null == a || a()
                }

                function f(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), r(e)
                }

                function h(e) {
                    return o(d, h, c, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: C,
                        isModalOpen: !0
                    })
                }

                function C(e) {
                    let {
                        res: t
                    } = e;
                    o(d, h, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: i,
                    mfaCodeHandler: r = a,
                    isModalOpen: s = !1,
                    ...o
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, a;
                    if (i = e, a = s, i.body && 60008 === i.body.code || a && 429 === i.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...o
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: i = null !== (l = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(i) ? a : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("781738");
            var l = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("920636");
            let s = (e, t, n) => function(i) {
                return (0, l.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function o(e, t, n) {
                return (0, i.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, l) {
                return (0, i.updateModal)(e, s(t, n, l))
            }
        }
    }
]);