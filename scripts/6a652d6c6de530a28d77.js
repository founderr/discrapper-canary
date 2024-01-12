(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61359"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    l = [];
                t[2] && (n = (s = t[2].split("-")).shift(), l = s);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var r = [];
                if (t[6]) {
                    (s = t[6].split("-")).shift();
                    for (var s, a, o = []; s.length;) {
                        var u = s.shift();
                        1 === u.length ? a ? (r.push({
                            singleton: a,
                            extension: o
                        }), a = u, o = []) : a = u : o.push(u)
                    }
                    r.push({
                        singleton: a,
                        extension: o
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: l
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: r,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    l = e.length;
                if (l > n) return !1;
                if (l === n) return e === t;
                e: for (var i = 0, r = 0; i < l; i++) {
                    for (var s = e.charCodeAt(i); r < n;)
                        if (t.charCodeAt(r++) === s) continue e;
                    return !1
                }
                return !0
            }
        },
        310013: function(e, t, n) {
            "use strict";
            var l = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var s = Object.getOwnPropertyNames(t);
                    r && (s = s.concat(Object.getOwnPropertySymbols(t)));
                    for (var a = 0; a < s.length; ++a)
                        if (!l[s[a]] && !i[s[a]] && (!n || !n[s[a]])) try {
                            e[s[a]] = t[s[a]]
                        } catch (e) {}
                }
                return e
            }
        },
        144824: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        686570: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        669200: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a426a3ae492eb54ac0f0.svg"
        },
        479125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2d8dac1dbbc8278bfa86.svg"
        },
        945439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        465312: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("225389"),
                r = n("77078"),
                s = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: s.container,
                        children: [(0, l.jsx)(i.CircleInformationIcon, {
                            className: s.icon,
                            width: 20,
                            height: 20,
                            color: r.tokens.colors.TEXT_WARNING
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-muted",
                            children: t
                        })]
                    })
                }
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("310013"),
                s = n.n(r),
                a = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends i.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: l
                        } = this.state, {
                            style: i
                        } = this.props, r = null != i ? u(i.backgroundImage) : null;
                        null == r && r !== n ? this.setState({
                            loaded: !0,
                            cached: r
                        }) : this.cachedURLs.indexOf(r) >= 0 ? this.setState({
                            loaded: !0,
                            cached: r
                        }) : null != r && r !== n && !0 === l && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(r))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
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
                            ...i
                        } = this.props, {
                            loaded: r,
                            cached: s
                        } = this.state;
                        if (!r && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = s) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, l.jsx)(e, {
                            style: t,
                            ...i
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
                return s(t, e), t
            }
        },
        773785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier1SimpleIcon: function() {
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
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 3.12 7.32 6.95C7.25 7.01 7 7.35 7 8v8c0 .65.25 1 .32 1.05L12 20.88l4.68-3.83c.07-.06.32-.4.32-1.05V8c0-.65-.25-1-.32-1.05L12 3.12Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        470131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier2SimpleIcon: function() {
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
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
                        className: a
                    })
                })
            }
        },
        986845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier3SimpleIcon: function() {
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
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M20.14.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38c.13.34.37.57.65.7.6.24 1.36.01 1.63-.7l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19L20.14.79Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13.25 1.56c.3.24.23.7-.06.93a3.22 3.22 0 0 0 .9 5.52l1.17.43a.5.5 0 0 1 .3.3l.43 1.16a3.14 3.14 0 0 0 2.51 2.06c.27.04.5.26.5.54V16c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4a1.59 1.59 0 0 1 2.1 0l.2.16Z",
                        className: a
                    })]
                })
            }
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
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
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
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
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
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
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
                        clipRule: "evenodd",
                        className: a
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
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
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
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: a
                    })
                })
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), r = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (l.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        903016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("808653"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                o = n("266491"),
                u = n("77078"),
                c = n("345116"),
                d = n("521012"),
                f = n("145131"),
                p = n("965397"),
                h = n("423487"),
                E = n("782340"),
                m = n("47274");
            class _ extends i.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, l.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: f.default.Justify.BETWEEN,
                        children: [(0, l.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, l.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function g(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: i,
                    onDismissError: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: m.content,
                    children: [(0, l.jsx)("div", {
                        className: s(m.image, t)
                    }), n, (0, l.jsx)(o.default, {
                        children: null != i ? (0, l.jsx)(p.default, {
                            className: m.error,
                            children: (0, l.jsx)(u.FormErrorBlock, {
                                onDismiss: r,
                                children: i.message
                            })
                        }) : null
                    })]
                })
            }
            let I = e => {
                let {
                    canceledCount: t
                } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
                return null == n ? null : (0, l.jsxs)("div", {
                    className: m.pendingCancellation,
                    children: [(0, l.jsx)(h.default, {
                        className: m.pendingCancellationIcon
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: m.pendingCancellationMessage,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function S(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: i,
                    warning: r,
                    error: s,
                    onDismissError: a,
                    slotCount: o = 1,
                    canceledCount: d = 0
                } = e;
                return (0, l.jsxs)(g, {
                    imageClass: t,
                    error: s,
                    onDismissError: a,
                    children: [(0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, l.jsx)(c.default, {
                        className: m.guildCard,
                        guild: i,
                        subscriptionChange: o
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: r
                    }), d > 0 ? (0, l.jsx)(I, {
                        canceledCount: d
                    }) : null]
                })
            }
            class C extends i.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: i,
                        onCancel: r
                    } = this.props;
                    return (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            onClick: i,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, l.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: r,
                            disabled: n,
                            children: E.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class L extends i.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: r,
                        confirmation: s,
                        confirmationLabel: a,
                        imageClass: o,
                        error: c,
                        isModifyingSubscription: d,
                        onConfirm: f,
                        onCancel: p,
                        onDismissError: h,
                        canceledCount: E
                    } = this.props;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(_, {
                            text: t
                        }), (0, l.jsx)(u.ModalContent, {
                            children: (0, l.jsx)(S, {
                                guild: e,
                                blurb: n,
                                warning: r,
                                imageClass: o,
                                error: c,
                                onDismissError: h,
                                canceledCount: E
                            })
                        }), (0, l.jsx)(C, {
                            confirmation: s,
                            confirmationLabel: a,
                            isModifyingSubscription: d,
                            onConfirm: f,
                            onCancel: p
                        })]
                    })
                }
            }
            L.Header = _, L.ApplyBody = S, L.TransferBody = function(e) {
                var t, n;
                let {
                    imageClass: r,
                    blurb: s,
                    fromGuilds: a,
                    toGuild: o,
                    error: d,
                    onDismissError: f,
                    slotCount: p = 1,
                    canceledCount: h = 0
                } = e, _ = i.useRef(a), S = null === (t = _.current) || void 0 === t ? void 0 : t.length, C = null === (n = _.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, l.jsxs)(g, {
                    imageClass: r,
                    error: d,
                    onDismissError: f,
                    children: [(0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: m.transferGuildCardHeader,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: S
                        })
                    }), null != C ? Object.keys(C).map(e => (0, l.jsx)(c.default, {
                        className: m.transferFromGuildCard,
                        guild: C[e][0],
                        subscriptionChange: -1 * C[e].length
                    }, e)) : null, (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: m.transferGuildCardHeader,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: p
                        })
                    }), (0, l.jsx)("div", {
                        className: m.activeTransferGuildCardBorder,
                        children: (0, l.jsx)(c.default, {
                            className: m.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != a ? a.length : 1
                        })
                    }), h > 0 ? (0, l.jsx)(I, {
                        canceledCount: h
                    }) : null]
                })
            }, L.Footer = C;
            var R = L
        },
        247760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return l
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l, i, r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                o = n.n(a),
                u = n("446674"),
                c = n("77078"),
                d = n("583367"),
                f = n("735201"),
                p = n("305961"),
                h = n("625634"),
                E = n("751433"),
                m = n("599110"),
                _ = n("427459"),
                g = n("903016"),
                I = n("936992"),
                S = n("658206"),
                C = n("49111"),
                L = n("782340"),
                R = n("822841");
            (i = l || (l = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", i.GUILD_SELECT = "GUILD_SELECT", i.CONFIRM = "CONFIRM", i.SUCCESS = "SUCCESS";
            var N = e => {
                var t, n;
                let {
                    guildBoostSlots: l,
                    selectedGuild: i,
                    locationSection: a,
                    transitionState: N,
                    onClose: T
                } = e, v = (0, _.getAvailableGuildBoostSlots)(h.default.boostSlots);
                o(null != l || null != i, "Must either provide slots or an initial selected guild"), o(!(null == l ? void 0 : l.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let A = [null == l ? "UNUSED_QUANTITY_SELECT" : null, null == i ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
                    [x, M] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
                    [U, D] = s.useState(""),
                    [O, w] = s.useState(A[0]),
                    [P, y] = s.useState(!1),
                    [b, B] = s.useState(i),
                    [G, j] = s.useState(null != l ? l : v.slice(0, 1)),
                    F = s.useMemo(() => null == G ? [] : G.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return p.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [G]),
                    k = s.useMemo(() => {
                        var e;
                        return (null == G ? void 0 : null === (e = G[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [G]),
                    V = () => {
                        T("SUCCESS" === O), m.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
                            type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: a
                        })
                    },
                    H = {
                        UNUSED_QUANTITY_SELECT: {
                            body: () => (o(!(null == l && 0 === v.length), "Cannot provide no slots if there are no other available slots"), (0, r.jsxs)("div", {
                                className: R.quantitySelectorBody,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    className: R.quantitySelectorHeader,
                                    children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: R.quantitySelectorDescription,
                                    children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, r.jsxs)("div", {
                                    className: R.quantitySelectorWrapper,
                                    children: [(0, r.jsx)(E.default, {
                                        value: G.length,
                                        onChange: e => j(v.slice(0, e)),
                                        minValue: 1,
                                        maxValue: v.length
                                    }), (0, r.jsx)(c.Text, {
                                        className: R.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, r.jsxs)(c.ModalFooter, {
                                children: [(0, r.jsx)(c.Button, {
                                    onClick: () => w("CONFIRM"),
                                    children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, r.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: V,
                                    children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        GUILD_SELECT: {
                            header: () => (0, r.jsx)(I.GuildSelectModalHeader, {
                                isTransfer: k,
                                query: U,
                                setQuery: D
                            }),
                            bodyClass: R.selectContent,
                            body: () => (0, r.jsx)(I.GuildSelectModalBody, {
                                onClose: V,
                                onSelectGuild: e => {
                                    B(e), w("CONFIRM")
                                },
                                isTransfer: k,
                                selectedSlotGuilds: F,
                                query: U
                            })
                        },
                        CONFIRM: {
                            body() {
                                if (null == b) return null;
                                let e = G.filter(e => (0, _.isGuildBoostSlotCanceled)(e)).length,
                                    t = G.length,
                                    n = F.length;
                                return k ? (0, r.jsx)(g.default.TransferBody, {
                                    fromGuilds: F,
                                    toGuild: b,
                                    blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: R.transferConfirmImage,
                                    error: P ? M : null,
                                    onDismissError: () => y(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, r.jsx)(g.default.ApplyBody, {
                                    guild: b,
                                    blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: R.confirmImage,
                                    error: P ? M : null,
                                    onDismissError: () => y(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = G.length,
                                    t = "CONFIRM" === A[0] ? V : () => w(A[A.indexOf(O) - 1]),
                                    n = async () => {
                                        if (null != b && (null == G ? void 0 : G.length) !== 0) {
                                            o(!G.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(G.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, d.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, d.applyToGuild)(b.id, G.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), w("SUCCESS")
                                            } catch (e) {
                                                y(!0)
                                            }
                                        }
                                    };
                                return (0, r.jsx)(g.default.Footer, {
                                    confirmation: k ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: k ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: x
                                })
                            }
                        },
                        SUCCESS: {
                            body: () => (0, r.jsx)(S.GuildBoostingConfirmation, {
                                guild: b,
                                isTransfer: k,
                                guildBoostQuantity: G.length,
                                onClose: V
                            })
                        }
                    };
                s.useEffect(() => {
                    m.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: a
                    })
                }, [a]);
                let W = H[O];
                return (0, r.jsxs)(c.ModalRoot, {
                    transitionState: N,
                    className: R.modal,
                    size: c.ModalSize.SMALL,
                    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, r.jsx)(c.ModalContent, {
                        className: W.bodyClass,
                        children: (0, r.jsx)(c.Sequencer, {
                            step: O,
                            steps: A,
                            children: W.body()
                        })
                    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, r.jsx)(c.ModalCloseButton, {
                        className: R.modalCloseButton,
                        onClick: V
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return S
                },
                GuildSelectModalBody: function() {
                    return C
                },
                default: function() {
                    return L
                }
            }), n("808653"), n("424973"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("448105"),
                s = n.n(r),
                a = n("446674"),
                o = n("77078"),
                u = n("54239"),
                c = n("393414"),
                d = n("334811"),
                f = n("305961"),
                p = n("677099"),
                h = n("476263"),
                E = n("810567"),
                m = n("427459"),
                _ = n("49111"),
                g = n("782340"),
                I = n("109396");

            function S(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: i
                } = e;
                return (0, l.jsxs)(o.ModalHeader, {
                    className: I.selectHeaderContainer,
                    children: [(0, l.jsx)(o.Heading, {
                        className: I.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, l.jsx)(E.default, {
                        size: E.default.Sizes.MEDIUM,
                        placeholder: g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": g.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: I.selectSearch,
                        query: i,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function C(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: i,
                    onSelectGuild: r,
                    query: E
                } = e, S = (0, a.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()), C = (0, a.useStateFromStoresArray)([f.default], () => S.reduce((e, t) => {
                    let l = f.default.getGuild(t);
                    return null == l || null != n && n.some(e => e.id === t) ? e : ((E.length <= 0 || s(E.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e)
                }, [])), {
                    enabled: L
                } = d.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function R() {
                    i(), (0, u.popLayer)(), (0, c.transitionTo)(_.Routes.GUILD_DISCOVERY)
                }
                return (0, l.jsxs)(l.Fragment, {
                    children: [0 === C.length && (0, l.jsx)("div", {
                        className: I.emptyStateWrapper,
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === S.length ? g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.Clickable, {
                                    onClick: R,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), C.map(e => (0, l.jsxs)(o.Clickable, {
                        className: I.selectGuild,
                        onClick: () => {
                            r(e)
                        },
                        children: [(0, l.jsx)(h.default, {
                            className: I.selectGuildIcon,
                            guild: e,
                            size: h.default.Sizes.SMALL
                        }), (0, l.jsxs)("div", {
                            className: I.selectGuildCopy,
                            children: [(0, l.jsx)(o.Text, {
                                className: I.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), L && (0, l.jsx)(o.Text, {
                                className: I.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, m.getTierName)(e.premiumTier)
                            })]
                        }), L && (0, l.jsx)(o.Text, {
                            className: I.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function L(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: r
                } = e, [s, a] = i.useState("");
                return (0, l.jsxs)(o.ModalRoot, {
                    transitionState: r,
                    className: I.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, l.jsx)(S, {
                        query: s,
                        setQuery: a
                    }), (0, l.jsx)(o.ModalContent, {
                        className: I.modalContent,
                        children: (0, l.jsx)(C, {
                            onClose: t,
                            onSelectGuild: n,
                            query: s
                        })
                    }), (0, l.jsx)(o.ModalCloseButton, {
                        className: I.modalCloseButton,
                        onClick: t
                    })]
                })
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
                    return p
                }
            });
            var l = n("65597"),
                i = n("862205"),
                r = n("697218"),
                s = n("719923"),
                a = n("782340");
            let o = (0, i.createExperiment)({
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
                        autoUnfurlReactionTooltip: a,
                        collectOffOverride: o
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !o && (u ? l : r),
                        autoUnfurlReactionTooltip: a
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
                        config: o.getCurrentConfig({
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
                    }, i = (0, l.default)([r.default], () => r.default.getCurrentUser()), s = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: i,
                        config: s
                    }), p = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: p,
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
                        getNewSettingsDescriptionLine1: () => null,
                        getNewSettingsDescriptionLine2: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                p = function() {
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
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        153498: function(e, t, n) {
            "use strict";

            function l(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function r(e) {
                return !1
            }

            function s() {
                return !1
            }

            function a() {
                return !1
            }

            function o(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function p(e) {}

            function h(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return l
                },
                navigateToMemberVerification: function() {
                    return i
                },
                navigateToRootTab: function() {
                    return r
                },
                resetToAuthRoute: function() {
                    return s
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return o
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return p
                },
                useIsModalOpen: function() {
                    return h
                }
            })
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var l = n("615361"),
                i = n("872717"),
                r = n("773336"),
                s = n("827032"),
                a = n("49111");
            let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var u = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        a = {
                            name: n,
                            tags: (0, s.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        a.tags.push(e)
                    });
                    let u = function() {
                        if ((0, r.isWeb)()) return "web";
                        {
                            let e = (0, r.getPlatformName)();
                            return o.has(e) ? e : null
                        }
                    }();
                    null != u && a.tags.push("platform:".concat(u));
                    let c = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return l.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != c && a.tags.push("release_channel:".concat(c)), this._metrics.push(a), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: a.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return E
                },
                useGetSubscriptionInvoice: function() {
                    return m
                },
                getItemUnitPriceWithDiscount: function() {
                    return _
                }
            }), n("222007");
            var l = n("884691"),
                i = n("446674"),
                r = n("872717"),
                s = n("448993"),
                a = n("195358"),
                o = n("521012"),
                u = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: l,
                    code: i,
                    applyEntitlements: o = !1,
                    currency: d,
                    renewal: f,
                    metadata: p
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let h = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: l,
                    code: i,
                    apply_entitlements: o,
                    currency: d,
                    renewal: f,
                    metadata: p
                };
                try {
                    let e = await r.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: h,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new s.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: l,
                    renewal: i,
                    currency: o,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: p
                } = e;
                null != n && (n = (0, u.coerceExistingItemsToNewItemInterval)(n));
                let h = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: l,
                    renewal: i,
                    apply_entitlements: d,
                    currency: o
                };
                try {
                    let e = await r.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: p,
                            location_stack: f
                        },
                        body: h,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new s.BillingError(e)
                }
            }
            async function p(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let l = await r.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return a.default.createInvoiceFromServer(l.body)
            }

            function h(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [r, s] = (0, l.useState)(null), [a, u] = (0, l.useState)(null), c = (0, i.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, l.useEffect)(() => {
                    let e = !1;
                    async function l() {
                        try {
                            u(null), s(null);
                            let n = await t();
                            !e && s(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && l(), () => {
                        e = !0
                    }
                }, [n, t, c]), [r, a]
            }

            function E(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, l.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return h(e, t)
            }

            function m(e) {
                let t = (0, l.useCallback)(() => p(e), [JSON.stringify(e)]);
                return h(e, t)
            }

            function _(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let l = n.amount / e.quantity;
                    t -= l
                }), t
            }
        },
        345116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("931138"),
                u = n("476263"),
                c = n("206453"),
                d = n("811151"),
                f = n("427459"),
                p = n("804308");
            class h extends r.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: p.tierPill,
                        children: [(0, i.jsx)(o.default, {
                            className: p.tierPillStar,
                            children: (0, i.jsx)(c.default, {
                                tier: e,
                                className: p.tierPillGem
                            })
                        }), (0, f.getTierName)(e)]
                    })
                }
            }
            let E = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let l = Math.max(n.premiumSubscriberCount + t, 0),
                    r = (0, f.getGuildTierFromAppliedBoostCount)(l, n.id),
                    s = r - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === s ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.default, {
                        className: s > 0 ? p.levelUpIcon : p.levelDownIcon
                    }), (0, i.jsx)(h, {
                        tier: r
                    })]
                })
            };
            l = class extends r.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: a(p.subscription, t),
                        children: [(0, i.jsx)(u.default, {
                            guild: e,
                            size: u.default.Sizes.LARGE
                        }), (0, i.jsxs)("div", {
                            className: p.subscriptionInfo,
                            children: [(0, i.jsx)("div", {
                                className: p.guildName,
                                children: e.name
                            }), (0, i.jsxs)("div", {
                                className: p.tierInfo,
                                children: [(0, i.jsx)(h, {
                                    tier: e.premiumTier
                                }), (0, i.jsx)(E, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })]
                            })]
                        })]
                    })
                }
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("153160"),
                a = n("646718"),
                o = n("782340"),
                u = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: i,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, p = (0, s.formatPrice)(t, n), h = null;
                return i === a.SubscriptionIntervalTypes.YEAR ? h = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: p
                }) : i === a.SubscriptionIntervalTypes.MONTH && 1 === d ? h = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: p
                }) : i === a.SubscriptionIntervalTypes.MONTH && d > 1 && (h = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: p,
                    intervalCount: d
                })), (0, l.jsx)("div", {
                    className: r(u.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == i || f ? (0, l.jsx)("strong", {
                        children: p
                    }) : h
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("849085");
            let o = i.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: i
                } = e;
                return (0, l.jsx)("div", {
                    className: s(a.wrapper, {
                        [a.wrapperActive]: n
                    }),
                    ref: t,
                    children: i
                })
            });
            var u = o
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
            var l, i, r = n("991170"),
                s = n("719923"),
                a = n("24373"),
                o = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let l = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? 0 : 1 : 2 : 3;
                    return 2
                },
                c = (e, t, n) => 0 === u(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("424973");
            var l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                s = n("913144"),
                a = n("80507"),
                o = n("374363"),
                u = n("364685"),
                c = n("49111"),
                d = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let p = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                h = () => {
                    u.default.isLoaded && p.compute()
                },
                E = () => {
                    h()
                };

            function m() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                p.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class _ extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (f = e), this.syncWith([u.default], E), this.syncWith([o.default], m)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return p
                }
            }
            _.displayName = "StickersPersistedStore", _.persistKey = "StickersPersistedStoreV2";
            var g = new _(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        p.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), h()
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
        334811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-04_guild_boosting_settings_redesign",
                label: "Guild Boosting Settings Redesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Variant 1 international",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = i
        },
        735201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("446674"),
                i = n("913144");
            let r = {},
                s = null,
                a = [],
                o = !1,
                u = null,
                c = null;

            function d() {
                o = !0
            }
            class f extends l.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != r[e] ? r[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != r[e] ? r[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return a
                }
                getAppliedGuildBoost(e) {
                    return a.find(t => t.id === e)
                }
                get isModifyingAppliedBoost() {
                    return o
                }
                get applyBoostError() {
                    return u
                }
                get unapplyBoostError() {
                    return c
                }
                get cooldownEndsAt() {
                    return s
                }
            }
            f.displayName = "AppliedGuildBoostStore";
            var p = new f(i.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    r[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    a = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    s = t
                },
                GUILD_UNAPPLY_BOOST_START: d,
                GUILD_APPLY_BOOST_START: d,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    a = [...t, ...a.filter(e => !n.has(e.id))], u = null, o = !1
                },
                GUILD_APPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, u = t
                },
                GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
                    let {
                        boostId: t
                    } = e;
                    a = a.filter(e => e.id !== t), o = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, c = t
                }
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("424973");
            var i = n("446674"),
                r = n("913144");
            let s = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class a extends i.default.PersistedStore {
                initialize(e) {
                    l = null != e ? e : s
                }
                getState() {
                    return l
                }
                get hasAcceptedStoreTerms() {
                    return l.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return l.hasAcceptedEulaIds.includes(e)
                }
            }
            a.displayName = "ApplicationStoreUserSettingsStore", a.persistKey = "ApplicationStoreUserSettingsStore", a.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var o = new a(r.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    l.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (l.hasAcceptedEulaIds.includes(t)) return !1;
                    l.hasAcceptedEulaIds.push(t)
                }
            })
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), p = (0, a.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(u.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...d,
                        className: s(c, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: p
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return a
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("748820"),
                s = n("669491");
            let a = Object.freeze({
                    PREMIUM_TIER_0: (0, r.v4)(),
                    PREMIUM_TIER_1: (0, r.v4)(),
                    PREMIUM_TIER_2: (0, r.v4)(),
                    PREMIUM_GUILD: (0, r.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, r.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(a.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(a.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(a.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(a.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(a.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, l.jsxs)("linearGradient", {
                    id: a.PREMIUM_TIER_0,
                    children: [(0, l.jsx)("stop", {
                        offset: ".1762",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, l.jsxs)("linearGradient", {
                    id: a.PREMIUM_TIER_1,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, l.jsxs)("linearGradient", {
                    id: a.PREMIUM_TIER_2,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, l.jsxs)("linearGradient", {
                    id: a.PREMIUM_GUILD,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                p = () => (0, l.jsxs)("linearGradient", {
                    id: a.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, l.jsx)("stop", {
                        offset: "0",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                h = i.memo(function() {
                    return (0, l.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), c(), d(), f(), p()]
                    })
                }, () => !0);
            var E = h
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("90915"),
                o = n("446674"),
                u = n("669491"),
                c = n("77078"),
                d = n("80300"),
                f = n("471671"),
                p = n("103603"),
                h = n("474293"),
                E = n("580357"),
                m = n("491088");
            let _ = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                g = {
                    [_.SMOL]: 16,
                    [_.MINI]: 20,
                    [_.SMALLER]: 24,
                    [_.SMALL]: 30,
                    [_.MEDIUM]: 40,
                    [_.LARGE]: 50,
                    [_.LARGER]: 64,
                    [_.XLARGE]: 100
                },
                I = {
                    [_.SMOL]: [10, 10, 8, 6, 6, 4],
                    [_.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [_.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [_.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [_.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [_.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [_.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [_.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class S extends i.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
                        className: m.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, l.jsx)(E.default, {
                        className: m.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: i,
                        showBadge: r,
                        active: a,
                        size: o,
                        style: u = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: p,
                        onClick: E,
                        to: _,
                        badgeStrokeColor: g,
                        animate: S,
                        tabIndex: C,
                        iconSrc: L,
                        "aria-hidden": R,
                        ...N
                    } = this.props, T = I[o], v = null != E ? c.Clickable : "div";
                    return (0, l.jsxs)(v, {
                        className: s(m.icon, i, (0, h.getClass)(m, "iconSize", o), {
                            [null !== (e = (0, h.getClass)(m, "iconActive", o)) && void 0 !== e ? e : ""]: a,
                            [m.iconInactive]: !a,
                            [m.noIcon]: null == n.icon
                        }),
                        "aria-hidden": R,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = T[n.acronym.length]) && void 0 !== t ? t : T[T.length - 1]) * d,
                            ...u
                        } : u,
                        onClick: null != _ || null == E ? void 0 : E,
                        tabIndex: C,
                        ...N,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, l.jsx)(c.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => i.cloneElement(i.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: i,
                        "aria-hidden": r
                    } = this.props;
                    return null != e ? (0, l.jsx)(a.Link, {
                        "aria-hidden": r,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: i,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let C = o.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: l,
                    style: i,
                    size: r
                } = e;
                return {
                    style: {
                        ...i,
                        backgroundImage: (0, p.makeCssUrlString)(null != l ? l : t.getIconURL(g[r], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, l.jsx)(S, {
                ...e
            })));
            class L extends i.PureComponent {
                render() {
                    return (0, l.jsx)(C, {
                        ...this.props
                    })
                }
            }
            L.Sizes = _, L.defaultProps = {
                size: _.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var R = L
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return S
                },
                PremiumPaymentAnimationTier1: function() {
                    return L
                },
                PremiumPaymentAnimationTier2: function() {
                    return v
                },
                PremiumPaymentGuildAnimation: function() {
                    return O
                }
            }), n("222007");
            var l, i, r, s, a, o, u, c, d = n("37983"),
                f = n("884691"),
                p = n("414456"),
                h = n.n(p),
                E = n("907002"),
                m = n("458960"),
                _ = n("273108"),
                g = n("635233");
            (a = l || (l = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let I = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class S extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case S.Scenes.SPEED_START:
                            return S.Scenes.SPEED_LOOP;
                        case S.Scenes.FINISH:
                            return S.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pause: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsx)(_.default, {
                        className: h(g.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: I,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pauseWhileUnfocused: r,
                        pause: i
                    })
                }
            }
            S.Scenes = l, (o = i || (i = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
            let C = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class L extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case L.Scenes.SPEED_START:
                            return L.Scenes.SPEED_LOOP;
                        case L.Scenes.FINISH:
                            return L.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("73902").then(n.t.bind(n, "73902", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pause: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsx)(_.default, {
                        className: h(g.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: C,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pauseWhileUnfocused: r,
                        pause: i
                    })
                }
            }
            L.Scenes = i, (u = r || (r = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
            let R = {
                idle_entry: {
                    BEG: 0,
                    END: 50
                },
                idle_loop: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                boost_start: {
                    BEG: 230,
                    END: 275
                },
                boost_loop: {
                    BEG: 275,
                    END: 290
                },
                boost_end: {
                    BEG: 386,
                    END: 455
                },
                victory: {
                    BEG: 470,
                    END: 525
                },
                error: {
                    BEG: 290,
                    END: 375
                }
            };
            class N extends f.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: g.panningAnimation,
                        children: [(0, d.jsx)(m.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(m.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let T = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: m.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class v extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case v.Scenes.IDLE_ENTRY:
                            return v.Scenes.IDLE_LOOP;
                        case v.Scenes.BOOST_START:
                            return v.Scenes.BOOST_LOOP;
                        case v.Scenes.BOOST_END:
                            return v.Scenes.VICTORY;
                        case v.Scenes.VICTORY:
                            return v.Scenes.IDLE_ENTRY;
                        case v.Scenes.ERROR:
                            return v.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    m.default.parallel([m.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), m.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(T.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(T.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    m.default.parallel([m.default.timing(this.foregroundAnimation.y, {
                        toValue: T.BOOST_START.toValue,
                        duration: T.BOOST_START.duration,
                        delay: T.BOOST_START.delay
                    }), m.default.timing(this.backgroundAnimation.y, {
                        toValue: T.BOOST_START.toValue,
                        duration: 1.2 * T.BOOST_START.duration,
                        delay: T.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: l
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: h(g.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: g.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: g.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: g.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(N, {
                                className: g.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(N, {
                                className: g.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(_.default, {
                            className: g.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? "idle_loop" : t,
                            sceneSegments: R,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: l,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new m.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new m.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), m.default.timing(this.backgroundAnimation.x, {
                            toValue: T.IDLE_LOOP.toValue,
                            duration: 1.2 * T.IDLE_LOOP.duration,
                            easing: m.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), m.default.timing(this.foregroundAnimation.x, {
                            toValue: T.IDLE_LOOP.toValue,
                            duration: T.IDLE_LOOP.duration,
                            easing: T.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case "idle_entry":
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case "error":
                                this.animateError();
                                break;
                            case "boost_start":
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            v.Scenes = r, (c = s || (s = {})).ENTRY = "entry", c.IDLE = "idle", c.STARS = "stars", c.ERROR = "error", c.SUCCESS = "success";
            let A = {
                    entry: {
                        BEG: 0,
                        END: 180
                    },
                    idle: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    stars: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    error: {
                        BEG: 360,
                        END: 540
                    },
                    success: {
                        BEG: 540,
                        END: 778
                    }
                },
                x = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                M = [{
                    left: 29,
                    top: 100,
                    color: x.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: x.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: x.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: x.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: x.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: x.PINK
                }],
                U = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: m.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: m.default.Easing.bezier(0, -.01, .99, 0)
                });

            function D(e) {
                let {
                    animate: t
                } = e, [n, l] = f.useState(0), i = (0, E.useSprings)(M.length, M.map((e, i) => {
                    let r = i > 0 ? U.DELAY_STAGGER * i + Math.random() * (U.DELAY_MAX - U.DELAY_MIN) + U.DELAY_MIN : 0,
                        s = Math.random() * (U.SIZE_MAX - U.SIZE_MIN) + U.SIZE_MIN;
                    return {
                        from: {
                            scale: U.SCALE_INITIAL,
                            rotate: U.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: s,
                            height: s
                        },
                        to: async e => {
                            t ? (await e({
                                scale: U.SCALE_MIDDLE,
                                rotate: U.ROTATE_MIDDLE,
                                delay: r,
                                config: {
                                    duration: U.DURATION_MIDDLE,
                                    easing: U.EASING_MIDDLE
                                }
                            }), await e({
                                scale: U.SCALE_END,
                                rotate: U.ROTATE_END,
                                config: {
                                    duration: U.DURATION_END,
                                    easing: U.EASING_END
                                }
                            }), await e({
                                scale: U.SCALE_INITIAL,
                                rotate: U.ROTATE_INITIAL,
                                immediate: !0
                            }), i === M.length - 1 && l(n + 1)) : await e({
                                scale: U.SCALE_INITIAL,
                                rotate: U.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = M[t];
                        return (0, d.jsx)(E.animated.svg, {
                            style: e,
                            className: g.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, d.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class O extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case "entry":
                        case "error":
                        case "success":
                            return "idle";
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: l,
                        onSceneComplete: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: h(g.guildWrapper, e),
                        children: [(0, d.jsx)(_.default, {
                            className: g.guildBackground,
                            importData: this.importData,
                            nextScene: n ? "idle" : t,
                            sceneSegments: A,
                            onScenePlay: l,
                            onSceneComplete: i,
                            pauseWhileUnfocused: r,
                            pause: n
                        }), (0, d.jsx)(D, {
                            animate: !n && "stars" === t
                        })]
                    })
                }
            }
            O.Scenes = s
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                o = n("206230"),
                u = n("471671"),
                c = n("629758");
            class d extends i.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: l,
                        pause: i,
                        isWindowFocused: r,
                        useReducedMotion: s
                    } = this.props, [a, {
                        default: o
                    }] = await Promise.all([e(), n.el("245749").then(n.t.bind(n, "245749", 23))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: a
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (l && !r || i || s) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, l;
                    let {
                        nextScene: i,
                        pauseWhileUnfocused: r,
                        pause: s,
                        isWindowFocused: a,
                        useReducedMotion: o
                    } = this.props;
                    i !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(i), null != this.animation && (r && !e.isWindowFocused && a && !o && !0 !== s ? this.animation.play() : (o || r && e.isWindowFocused && !a) && this.animation.pause()), !e.pause && s ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !s && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && s && (this.playScene(i), null === (l = this.animation) || void 0 === l || l.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: l
                    } = this.props, i = n[e], r = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || i.BEG !== r.BEG || i.END !== r.END) && this.animation.playSegments([i.BEG, i.END], !0), this.currentScene = e, null != t && t(this.currentScene), l) {
                        var s;
                        null === (s = this.animation) || void 0 === s || s.pause()
                    }
                }
                render() {
                    return (0, l.jsx)("div", {
                        ref: this.handleSetRef,
                        className: s(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, i = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), r = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, l.jsx)(d, {
                    ...n,
                    isWindowFocused: i,
                    useReducedMotion: r,
                    ref: t
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("458960"),
                o = n("77078"),
                u = n("866893");
            let c = {
                friction: 7,
                tension: 60
            };
            class d extends i.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : a.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return a.default.spring(this.animation, {
                        ...c,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return a.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, l.jsx)(a.default.div, {
                        className: s(e, u.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new a.default.Value(0)
                }
            }
            d.contextType = o.AccessibilityPreferencesContext;
            var f = d
        },
        784917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("773785"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"
                        })
                    })
                }, r.BoostTier1SimpleIcon, void 0, {
                    size: 11
                })
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("470131"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, l.jsxs)("g", {
                            fill: i,
                            fillRule: "evenodd",
                            className: r,
                            children: [(0, l.jsx)("path", {
                                d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                            }), (0, l.jsx)("path", {
                                d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                            })]
                        })
                    })
                }, r.BoostTier2SimpleIcon, void 0, {
                    size: 11
                })
        },
        131777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("986845"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, l.jsxs)("g", {
                            fill: i,
                            fillRule: "evenodd",
                            className: r,
                            children: [(0, l.jsx)("path", {
                                d: "M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"
                            }), (0, l.jsx)("path", {
                                d: "M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"
                            }), (0, l.jsx)("path", {
                                d: "M2.28003 7.11532L3.00003 7.83532L4.00003 6.83532V5.39532L2.28003 7.11532Z"
                            })]
                        })
                    })
                }, r.BoostTier3SimpleIcon, void 0, {
                    size: 11
                })
        },
        206453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("70102");
            var l = n("37983");
            n("884691");
            var i = n("784917"),
                r = n("326880"),
                s = n("131777"),
                a = n("49111");

            function o(e) {
                let {
                    tier: t,
                    ...n
                } = e;
                switch (t) {
                    case a.BoostedGuildTiers.NONE:
                    case a.BoostedGuildTiers.TIER_1:
                        return (0, l.jsx)(i.default, {
                            ...n
                        });
                    case a.BoostedGuildTiers.TIER_2:
                        return (0, l.jsx)(r.default, {
                            ...n
                        });
                    case a.BoostedGuildTiers.TIER_3:
                        return (0, l.jsx)(s.default, {
                            ...n
                        });
                    default:
                        throw Error("Not a valid tier type")
                }
            }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let p = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                h = e => {
                    let {
                        direction: t = p.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: h = "currentColor",
                        transition: E = f.transition,
                        className: m,
                        foreground: _,
                        expanded: g,
                        ...I
                    } = e, {
                        enabled: S
                    } = (0, c.useRedesignIconContext)(), C = t;
                    if (!0 === g ? C = p.DOWN : !1 === g && (C = p.RIGHT), S) {
                        let e = {
                            [p.UP]: u.ChevronSmallUpIcon,
                            [p.DOWN]: s.ChevronSmallDownIcon,
                            [p.LEFT]: a.ChevronSmallLeftIcon,
                            [p.RIGHT]: o.ChevronSmallRightIcon
                        } [C];
                        return (0, l.jsx)(e, {
                            ...I,
                            className: m,
                            width: n,
                            height: i,
                            color: h,
                            colorClass: _
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: r(m, E, C),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(I),
                        children: (0, l.jsx)("path", {
                            className: _,
                            fill: "none",
                            stroke: h,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            h.Directions = p;
            var E = h
        },
        811151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196");

            function r(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
                        fill: r
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
                        fill: r
                    })]
                })
            }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196");

            function r(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    foreground: s,
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, l.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: r,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: r,
                        className: s
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("763377"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, r.CircleQuestionIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("202909"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("424823"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, r.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        342169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("457802"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, r.MinusIcon, void 0, {
                    size: 24
                })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return i
                }
            }), n("808653");
            var l = n("159885");

            function i(e, t) {
                for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                let s = i.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(s),
                    o = e[a];
                if (null != o) return o
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("872717"),
                i = n("599110");

            function r(e, t, n) {
                let {
                    trackedActionData: l,
                    ...r
                } = t, s = {
                    url: r.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(r).then(e => {
                        let n = l.properties;
                        "function" == typeof l.properties && (n = l.properties(e)), (0, i.trackNetworkAction)(l.event, {
                            status_code: e.status,
                            ...s,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let a = l.properties;
                        "function" == typeof l.properties && (a = l.properties(e)), (0, i.trackNetworkAction)(l.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...s,
                            ...a
                        }), n(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return r(l.default.get, e, "get")
                },
                post: function(e) {
                    return r(l.default.post, e, "post")
                },
                put: function(e) {
                    return r(l.default.put, e, "put")
                },
                patch: function(e) {
                    return r(l.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(l.default.delete, e, "del")
                }
            }
        },
        432710: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return l
                }
            }), n("222007"), (i = l || (l = {})).APP_CRASHED = "app_crashed", i.SOCKET_CRASHED = "socket_crashed", i.MESSAGE_REQUEST_VIEW = "message_request_view", i.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", i.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", i.FAMILY_CENTER_VIEW = "family_center_view", i.SAFETY_HUB_VIEW = "safety_hub_view", i.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", i.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", i.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", i.AFK_NOT_IDLE = "afk_not_idle", i.CAPTCHA_EVENT = "captcha_event", i.SAFETY_WARNING_VIEW = "safety_warning_view", i.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", i.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", i.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", i.OTA_UPDATE_CHECK = "ota_update_check", i.OTA_ASSET_DOWNLOAD = "ota_asset_download", i.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return r
                }
            }), n("222007"), (i = l || (l = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let r = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);