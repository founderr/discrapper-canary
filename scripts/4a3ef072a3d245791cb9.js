(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64198"], {
        185782: function(e, t, n) {
            "use strict";
            e.exports = n.p + "140ec8f5d02da1e5195c.svg"
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return s
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function s(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return s
                }
            });
            var i = n("913144");

            function s() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i, s, l = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                a = n("394846"),
                u = n("77078"),
                c = n("945330"),
                d = n("381546"),
                C = n("782340"),
                f = n("955892");
            (i = s || (s = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
            let h = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: i,
                    className: s
                } = e;
                return (0, l.jsxs)("div", {
                    className: o(f.container, s),
                    children: [(0, l.jsx)(u.Clickable, {
                        className: o(f.closeButton, {
                            [f.closeButtonBold]: "Bold" === n,
                            [f.closeButtonSolid]: "Solid" === n
                        }),
                        onClick: t,
                        "aria-label": C.default.Messages.CLOSE,
                        children: "Solid" === n ? (0, l.jsx)(d.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, l.jsx)(c.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, l.jsx)("div", {
                        className: o(f.keybind),
                        "aria-hidden": !0,
                        children: i
                    })]
                })
            };
            h.defaultProps = {
                variant: ""
            }, h.Variants = s;
            var p = h
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var i = n("37983"),
                s = n("884691"),
                l = n("310013"),
                r = n.n(l),
                o = n("407063");
            let a = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(a);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends s.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: i
                        } = this.state, {
                            style: s
                        } = this.props, l = null != s ? u(s.backgroundImage) : null;
                        null == l && l !== n ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== n && !0 === i && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...s
                        } = this.props, {
                            loaded: l,
                            cached: r
                        } = this.state;
                        if (!l && null != t) {
                            var o;
                            t = {
                                ...t,
                                backgroundImage: null == (o = r) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
                            }
                        }
                        return (0, i.jsx)(e, {
                            style: t,
                            ...s
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: o = "",
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: u
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7.18016 15.8698C6.55491 15.8698 6.00152 15.7081 5.52001 15.3847C5.03849 15.0613 4.66478 14.6085 4.39887 14.0264C4.13296 13.4371 4 12.7615 4 11.9997C4 11.2451 4.14014 10.5767 4.42043 9.99461C4.7079 9.41248 5.12114 8.95612 5.66015 8.62553C6.20635 8.29494 6.85675 8.12964 7.61137 8.12964C8.25099 8.12964 8.82234 8.26619 9.32542 8.53929C9.83568 8.81239 10.2202 9.19688 10.4789 9.69277L9.26074 10.566C8.89421 9.89041 8.34802 9.55263 7.62215 9.55263C6.96096 9.55263 6.45429 9.76823 6.10214 10.1994C5.74999 10.6235 5.57391 11.2236 5.57391 11.9997C5.57391 12.7831 5.74999 13.3868 6.10214 13.8108C6.45429 14.2348 6.96096 14.4468 7.62215 14.4468C7.91681 14.4468 8.18631 14.3929 8.43066 14.2851C8.6822 14.1701 8.87625 14.0156 9.0128 13.8216V12.8945H7.29874V11.4931H10.5436V15.7189H9.27152L9.0667 15.0074C8.64267 15.5824 8.01383 15.8698 7.18016 15.8698ZM13.5198 15.7189H11.9459V8.28056H13.5198V15.7189ZM15.0304 15.7189H16.6043V12.8945H19.3641V11.4715H16.6043V9.70355H20.0001V8.28056H15.0304V15.7189Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 6C4 3.79086 5.79086 2 8 2H8.08854C9.89557 2 11.4793 3.18456 12 4.89815C12.5208 3.18456 14.1044 2 15.9115 2H16C18.2091 2 20 3.79086 20 6C20 6.72857 19.8052 7.41165 19.4649 8H20C21.1046 8 22 8.89543 22 10V11.5C22 11.7761 21.7761 12 21.5 12H2.5C2.22386 12 2 11.7761 2 11.5V10C2 8.89543 2.89543 8 4 8H4.53513C4.19479 7.41165 4 6.72857 4 6ZM16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4H15.9115C14.9531 4 14.1177 4.65225 13.8853 5.58199L13.2808 8H16ZM10.1147 5.58199L10.7192 8H8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4H8.08854C9.0469 4 9.88229 4.65225 10.1147 5.58199Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M3 20C3 21.1046 3.89543 22 5 22H10.5C10.7761 22 11 21.7761 11 21.5V14.5C11 14.2239 10.7761 14 10.5 14H3.5C3.22386 14 3 14.2239 3 14.5V20Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M13.5 22C13.2239 22 13 21.7761 13 21.5V14.5C13 14.2239 13.2239 14 13.5 14H20.5C20.7761 14 21 14.2239 21 14.5V20C21 21.1046 20.1046 22 19 22H13.5Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })]
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M12 3.00002C12 2.44773 11.5523 2.00002 11 2.00002H10.9399C10.6596 2.00002 10.3922 2.11766 10.2027 2.32429L5.91667 7.00002H3C2.44772 7.00002 2 7.44773 2 8.00002V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3.00002Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M15.0998 20.7538C14.5203 20.8922 14 20.4242 14 19.8285V19.7963C14 19.2987 14.3688 18.8844 14.8488 18.7533C17.8177 17.9424 20 15.2261 20 12C20 8.77399 17.8177 6.05766 14.8488 5.24676C14.3688 5.11566 14 4.70135 14 4.20377V4.17159C14 3.5758 14.5203 3.1078 15.0998 3.24629C19.0575 4.19217 22 7.75247 22 12C22 16.2476 19.0575 19.8079 15.0998 20.7538Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M15.1571 16.512C14.587 16.7851 14 16.3088 14 15.6766V15.5365C14 15.1127 14.2774 14.7482 14.6328 14.5172C15.4558 13.9823 16 13.0547 16 12C16 10.9453 15.4558 10.0178 14.6328 9.48286C14.2774 9.25188 14 8.88737 14 8.46355V8.32342C14 7.69121 14.587 7.21491 15.1571 7.488C16.8387 8.29338 18 10.0111 18 12C18 13.989 16.8387 15.7067 15.1571 16.512Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var i = n("884691");

            function s(e) {
                let [t, n] = (0, i.useState)(!1), s = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    s.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = s.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [s]), t
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                s = n("884691"),
                l = n("516555"),
                r = n("65597"),
                o = n("206230"),
                a = n("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                c = s.createContext(u);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: C,
                    removeClickListener: f
                } = e, h = (0, l.useConfettiCannon)(n, a), p = (0, r.default)([o.default], () => o.default.useReducedMotion), v = s.useMemo(() => p ? u : {
                    confettiCanvas: n,
                    cannon: h,
                    createConfetti: (e, t) => h.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => h.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return h.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            s = arguments.length > 4 ? arguments[4] : void 0;
                        return h.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, s)
                    },
                    addClickListener: C,
                    removeClickListener: f
                }, [C, d, h, n, p, f]);
                return (0, i.jsx)(c.Provider, {
                    value: v,
                    children: t
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("748820"),
                l = n("77078"),
                r = n("112679"),
                o = n("55689"),
                a = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                C = n("646718");

            function f(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: f,
                    onClose: h,
                    onComplete: p,
                    onSubscriptionConfirmation: v,
                    analyticsLocations: E,
                    analyticsObject: _,
                    analyticsLocation: g,
                    analyticsSourceLocation: I,
                    isGift: m = !1,
                    giftMessage: L,
                    subscriptionTier: M,
                    trialId: S,
                    postSuccessGuild: T,
                    openInvoiceId: A,
                    applicationId: R,
                    referralTrialOfferId: x,
                    giftRecipient: N,
                    returnRef: y
                } = null != e ? e : {}, O = !1, V = (0, s.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: s,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: V,
                            subscriptionTier: M,
                            skuId: M,
                            isGift: m,
                            giftMessage: L,
                            giftRecipient: N,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                s(), null == h || h(e), e && (null == v || v())
                            },
                            onComplete: () => {
                                O = !0, null == p || p(), !m && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: v,
                            analyticsLocations: E,
                            analyticsObject: _,
                            analyticsLocation: g,
                            analyticsSourceLocation: I,
                            trialId: S,
                            postSuccessGuild: T,
                            planGroup: C.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: R,
                            referralTrialOfferId: x,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: V,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != g ? g : _,
                            source: I,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != S,
                            application_id: R,
                            location_stack: E
                        }), (0, r.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == h || h(O), O && (!m && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == v || v())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return s
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return r
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
            var i = n("913144");
            let s = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        374278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("95039"),
                r = n("305961"),
                o = n("957255"),
                a = n("145131"),
                u = n("181114"),
                c = n("599110"),
                d = n("488464"),
                C = n("998716"),
                f = n("923510"),
                h = n("49111"),
                p = n("646718"),
                v = n("782340"),
                E = n("400237");

            function _(e) {
                var t;
                let n, {
                        channel: _,
                        transitionState: g,
                        onClose: I
                    } = e,
                    m = r.default.getGuild(_.guild_id),
                    L = null !== (t = null == m ? void 0 : m.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    M = !!(null == m ? void 0 : m.isCommunity()),
                    S = v.default.Messages.STAGE_FULL_TITLE,
                    T = M ? L < h.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == m ? void 0 : m.premiumTier) !== h.BoostedGuildTiers.TIER_3 && L <= h.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    A = o.default.can(f.MODERATE_STAGE_CHANNEL_PERMISSIONS, _);
                n = M && (null == m ? void 0 : m.premiumTier) === h.BoostedGuildTiers.TIER_3 ? L <= h.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? v.default.Messages.STAGE_FULL_BOOST_MORE_BODY : v.default.Messages.STAGE_FULL_MAX_BODY : T ? v.default.Messages.STAGE_FULL_BODY : v.default.Messages.STAGE_FULL_MAX_BODY;
                let R = () => {
                        I(), c.default.track(h.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: _.guild_id,
                            type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: A,
                            action: p.BoostingUpsellAction.DISMISS
                        })
                    },
                    x = d.default.getMutableParticipants(_.id, C.StageChannelParticipantNamedIndex.SPEAKER),
                    N = x.filter(e => e.type === C.StageChannelParticipantTypes.VOICE),
                    y = N.length,
                    O = d.default.getParticipantCount(_.id, C.StageChannelParticipantNamedIndex.AUDIENCE);
                return c.default.track(h.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: _.guild_id,
                    type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: A,
                    listener_count: y + O
                }), (0, i.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.SMALL,
                    transitionState: g,
                    "aria-label": S,
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        justify: a.default.Justify.END,
                        separator: !1,
                        className: E.header,
                        children: [(0, i.jsx)("div", {
                            className: E.fullArt
                        }), (0, i.jsx)(s.ModalCloseButton, {
                            onClick: I
                        })]
                    }), (0, i.jsxs)(s.ModalContent, {
                        className: E.content,
                        children: [(0, i.jsx)(s.Heading, {
                            variant: "heading-xl/bold",
                            children: S
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-md/medium",
                            children: n
                        })]
                    }), (0, i.jsx)(s.ModalFooter, {
                        className: E.footer,
                        children: T ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(s.Button, {
                                look: s.ButtonLooks.LINK,
                                className: E.noThanksButton,
                                color: s.ButtonColors.CUSTOM,
                                size: s.ButtonSizes.SMALL,
                                onClick: R,
                                children: v.default.Messages.NO_THANKS
                            }), (0, i.jsx)(u.default, {
                                onClick: () => {
                                    I(), (0, l.openGuildBoostingMarketingModal)({
                                        guildId: _.guild_id,
                                        location: {
                                            section: h.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), c.default.track(h.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: _.guild_id,
                                        type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: A,
                                        action: p.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: s.ButtonSizes.SMALL,
                                className: E.boostButton,
                                children: v.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, i.jsx)(s.Button, {
                            onClick: R,
                            size: s.ButtonSizes.SMALL,
                            color: s.ButtonColors.CUSTOM,
                            className: E.boostButton,
                            children: v.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                s = n("884691"),
                l = n("414456"),
                r = n.n(l),
                o = n("77078"),
                a = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, C = s.Children.only(t), f = (0, o.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: r(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...d,
                        className: r(c, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: r(u.childContainer, {
                            [u.redesignIconChildContainer]: f
                        }),
                        children: C
                    })]
                })
            }
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983"),
                s = n("884691"),
                l = n("414456"),
                r = n.n(l),
                o = n("90915"),
                a = n("446674"),
                u = n("669491"),
                c = n("77078"),
                d = n("80300"),
                C = n("471671"),
                f = n("103603"),
                h = n("474293"),
                p = n("580357"),
                v = n("491088");
            let E = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                _ = {
                    [E.SMOL]: 16,
                    [E.MINI]: 20,
                    [E.SMALLER]: 24,
                    [E.SMALL]: 30,
                    [E.MEDIUM]: 40,
                    [E.LARGE]: 50,
                    [E.LARGER]: 64,
                    [E.XLARGE]: 100
                },
                g = {
                    [E.SMOL]: [10, 10, 8, 6, 6, 4],
                    [E.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [E.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [E.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [E.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [E.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [E.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [E.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class I extends s.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, i.jsx)("div", {
                        className: v.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, i.jsx)(p.default, {
                        className: v.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: s,
                        showBadge: l,
                        active: o,
                        size: a,
                        style: u = {},
                        textScale: d,
                        showTooltip: C,
                        tooltipPosition: f,
                        onClick: p,
                        to: E,
                        badgeStrokeColor: _,
                        animate: I,
                        tabIndex: m,
                        iconSrc: L,
                        "aria-hidden": M,
                        ...S
                    } = this.props, T = g[a], A = null != p ? c.Clickable : "div";
                    return (0, i.jsxs)(A, {
                        className: r(v.icon, s, (0, h.getClass)(v, "iconSize", a), {
                            [null !== (e = (0, h.getClass)(v, "iconActive", a)) && void 0 !== e ? e : ""]: o,
                            [v.iconInactive]: !o,
                            [v.noIcon]: null == n.icon
                        }),
                        "aria-hidden": M,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = T[n.acronym.length]) && void 0 !== t ? t : T[T.length - 1]) * d,
                            ...u
                        } : u,
                        onClick: null != E || null == p ? void 0 : p,
                        tabIndex: m,
                        ...S,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, i.jsx)(c.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => s.cloneElement(s.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: s,
                        "aria-hidden": l
                    } = this.props;
                    return null != e ? (0, i.jsx)(o.Link, {
                        "aria-hidden": l,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: s,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let m = a.default.connectStores([C.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: i,
                    style: s,
                    size: l
                } = e;
                return {
                    style: {
                        ...s,
                        backgroundImage: (0, f.makeCssUrlString)(null != i ? i : t.getIconURL(_[l], n && C.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, i.jsx)(I, {
                ...e
            })));
            class L extends s.PureComponent {
                render() {
                    return (0, i.jsx)(m, {
                        ...this.props
                    })
                }
            }
            L.Sizes = E, L.defaultProps = {
                size: E.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var M = L
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return v
                },
                default: function() {
                    return _
                }
            });
            var i, s, l = n("37983"),
                r = n("884691"),
                o = n("414456"),
                a = n.n(o),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                C = n("145131"),
                f = n("396792");
            (i = s || (s = {})).DEFAULT = "default", i.SMALL = "small";
            let h = {
                    default: f.shineDefault,
                    small: f.shineSmall
                },
                p = {
                    default: f.shineInnerDefault,
                    small: f.shineInnerSmall
                };
            class v extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: a(f.shineContainer, e, {
                            [f.shinePaused]: n
                        }),
                        children: (0, l.jsx)(C.default, {
                            align: C.default.Align.CENTER,
                            justify: C.default.Justify.CENTER,
                            className: h[t],
                            children: (0, l.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            v.defaultProps = {
                shineSize: "default"
            };
            let E = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: s,
                    pauseAnimation: o,
                    shineSize: u = "default",
                    shinePaused: C,
                    buttonShineClassName: h,
                    onlyShineOnHover: p,
                    ...E
                } = e, _ = r.createRef(), g = (0, d.default)(_), I = !i && !s && !0 !== o && (!p || g);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: _,
                    ...E,
                    className: a(f.shinyButton, n),
                    disabled: i,
                    submitting: s,
                    children: [t, I ? (0, l.jsx)(v, {
                        shinePaused: C,
                        className: a(f.buttonShine, p ? f.onlyShineOnHover : void 0, h),
                        shineSize: u
                    }) : null]
                })
            };
            E.ShineSizes = s;
            var _ = E
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("505088"),
                r = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        backgroundColor: o,
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, i.jsx)("path", {
                            fill: s,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("998460"),
                r = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, r.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: s,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon, void 0, {
                    size: 24
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("424823"),
                r = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: s,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("390300"),
                r = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("287083"),
                r = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: s = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: s
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return s
                }
            }), n("808653");
            var i = n("159885");

            function s(e, t) {
                for (var n = arguments.length, s = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) s[l - 2] = arguments[l];
                let r = s.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    o = "".concat(t).concat(r),
                    a = e[o];
                if (null != a) return a
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, s = n("817736"),
                l = n("118810");
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, s.findDOMNode)(e);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = r) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                s = n("748820"),
                l = n("157590");
            let r = (0, s.v4)(),
                o = new Map,
                a = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? o.has(t) ? this.elementId = o.get(t) || "" : o.set(t, (0, s.v4)()) : this.elementId = r;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return s.default
                }
            }), n("6268");
            var i = n("157590"),
                s = n("235855")
        }
    }
]);