(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96049"], {
        817295: function(e, t, n) {
            "use strict";

            function i() {
                return n.el("225629").then(n.bind(n, "225629"))
            }
            async function l(e, t, n, l, r) {
                let o = await i();
                return o.crop_gif(e, t, n, l, r)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                wasmCropGIF: function() {
                    return l
                }
            })
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return o
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return u
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        578478: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, l = n("872717"),
                r = n("49111"),
                o = n("782340");
            i = class extends l.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), r = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return r
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return A
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return h
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return _
                },
                BANNER_ASPECT_RATIO: function() {
                    return p
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return T
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return I
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return g
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return R
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return N
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return w
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return M
                },
                MessageTypes: function() {
                    return o
                }
            });
            var i, l, r, o, a = n("917219");
            (i = r || (r = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                s = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                E = 2400,
                A = 960,
                h = 2400,
                _ = 600,
                p = 17 / 6,
                T = 16 / 9,
                I = 2.5,
                g = 4,
                m = u / p,
                R = u / T,
                C = u / I,
                N = u / g,
                w = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                M = u / w;
            (l = o || (o = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        57015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                l = n("884691"),
                r = n("917351"),
                o = n("77078"),
                a = n("812204"),
                u = n("685665"),
                s = n("652914"),
                c = n("95689"),
                d = n("599110"),
                f = n("8731"),
                E = n("817295"),
                A = n("75015"),
                h = n("49111"),
                _ = n("917219"),
                p = n("782340"),
                T = n("879777"),
                I = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: I,
                        allowSkip: g = !1,
                        onCrop: m,
                        onClose: R,
                        uploadType: C = A.UploadTypes.AVATAR,
                        showUpsellHeader: N = !1,
                        analyticsPage: w
                    } = e, [M, v] = l.useState({
                        width: 0,
                        height: 0
                    }), [S, O] = l.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [D, L] = l.useState(!1), [U, y] = l.useState(1), [b, P] = l.useState({
                        x: 0,
                        y: 0
                    }), [H, x] = l.useState(null), [G, B] = l.useState(!1), {
                        AnalyticsLocationProvider: V
                    } = (0, u.default)(a.default.IMAGE_CROPPING_MODAL), k = l.useRef({
                        x: 0,
                        y: 0
                    }), j = l.useRef(null), F = l.useRef(null), W = "image/gif" === t.type;
                    l.useEffect(() => {
                        (0, E.default)()
                    }, []), l.useEffect(() => {
                        W && N && d.default.track(h.AnalyticEvents.OPEN_MODAL, {
                            type: h.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: w
                            }
                        })
                    }, [N, w, W]);
                    let Z = () => {
                            switch (C) {
                                case A.UploadTypes.BANNER:
                                    return {
                                        height: A.USER_BANNER_MAX_HEIGHT, width: A.USER_BANNER_MAX_WIDTH
                                    };
                                case A.UploadTypes.VIDEO_BACKGROUND:
                                    return _.BACKGROUND_REPLACEMENT_SIZE;
                                case A.UploadTypes.AVATAR:
                                case A.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: h.AVATAR_MAX_SIZE, width: h.AVATAR_MAX_SIZE
                                    };
                                case A.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: A.GUILD_BANNER_MAX_HEIGHT, width: A.GUILD_BANNER_MAX_WIDTH
                                    };
                                case A.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: A.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: A.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case A.UploadTypes.HOME_HEADER:
                                    return {
                                        height: A.HOME_HEADER_MAX_HEIGHT, width: A.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        z = l.useCallback((e, t, n) => {
                            k.current = (0, f.getBoundedCoordinates)(e, t, n), null != j.current && (j.current.style.transform = "translate3d(".concat(k.current.x, "px, ").concat(k.current.y, "px, 0)"))
                        }, [j]),
                        X = l.useCallback(() => {
                            if (null == j.current || U > 1) return;
                            let {
                                width: e,
                                height: t
                            } = j.current.getBoundingClientRect(), {
                                width: n,
                                height: i
                            } = (0, f.adjustImageDimensionsForAspectRatio)(C, e, t), l = (0, f.calculateOverlaySize)(C, n, i, t);
                            x({
                                width: n,
                                height: i
                            }), v(l), O((0, f.calculateDragBoundaries)(n, i, l))
                        }, [C, U]),
                        Y = l.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = k.current;
                            if (!D || e.clientX === t && e.clientY === n) return;
                            let i = e.clientX - b.x,
                                l = e.clientY - b.y;
                            z(i, l, S)
                        }, [S, D, b, z]),
                        K = () => {
                            L(!1)
                        },
                        q = () => {
                            let e = Z();
                            return e.width !== e.height
                        },
                        $ = async () => {
                            let e;
                            if (null == j.current) return;
                            B(!0);
                            let n = j.current,
                                i = Z();
                            if (W) try {
                                let {
                                    result: l,
                                    cancelFn: r
                                } = await (0, f.cropGIF)(t, n, M, k.current, i);
                                F.current = r, e = await l, F.current = null
                            } catch (e) {
                                var l;
                                throw null === (l = F.current) || void 0 === l || l.call(F), F.current = null, Error("Error cropping GIF")
                            } else e = (0, f.cropStaticImage)(n, M, k.current, i);
                            await m(e, t), B(!1), R()
                        };
                    return l.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", X), () => {
                        window.removeEventListener("mouseup", K), window.removeEventListener("resize", X)
                    }), [X]), l.useEffect(() => () => {
                        null != F.current && F.current()
                    }, []), l.useEffect(() => {
                        if (D) return window.addEventListener("mousemove", Y), () => window.removeEventListener("mousemove", Y)
                    }, [Y, D]), (0, i.jsx)(V, {
                        children: (0, i.jsxs)(o.ModalRoot, {
                            onAnimationEnd: X,
                            transitionState: I,
                            size: o.ModalSize.MEDIUM,
                            children: [N && (0, i.jsx)(s.default, {
                                type: C,
                                analyticsPage: w,
                                analyticsSection: h.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: W,
                                banner: n
                            }), (0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.FormTitle, {
                                    className: T.titleCase,
                                    tag: o.FormTitleTags.H1,
                                    children: p.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                className: T.modalContent,
                                children: [(0, i.jsxs)("div", {
                                    className: T.editingContainer,
                                    children: [(0, i.jsx)("img", {
                                        style: {
                                            opacity: null == H ? 0 : 1,
                                            transform: "translate3d(".concat(k.current.x, "px, ").concat(k.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == H) return {};
                                                let e = H.width / H.height,
                                                    t = q() && e > A.BANNER_ASPECT_RATIO ? M.height / H.height : 1;
                                                return {
                                                    width: H.width * U * t,
                                                    minWidth: H.width * U * t,
                                                    height: H.height * U * t
                                                }
                                            })()
                                        },
                                        className: G ? T.imageDisabled : T.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: j,
                                        onMouseDown: e => {
                                            let t = e.clientX - k.current.x,
                                                n = e.clientY - k.current.y;
                                            P({
                                                x: t,
                                                y: n
                                            }), L(!0)
                                        },
                                        draggable: !1
                                    }), (0, i.jsx)("div", {
                                        className: C === A.UploadTypes.AVATAR ? T.overlayAvatar : T.overlayBanner,
                                        style: {
                                            opacity: null == H ? 0 : 1,
                                            width: M.width,
                                            height: M.height
                                        }
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: T.sliderContainer,
                                    children: [(0, i.jsx)(c.default, {
                                        className: T.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, i.jsx)(o.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == H) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = H, i = (0, f.calculateDragBoundaries)(t * e, n * e, M), {
                                                x: l,
                                                y: o
                                            } = k.current;
                                            (!(0, r.inRange)(l, i.right, i.left) || !(0, r.inRange)(o, i.top, i.bottom)) && z(l, o, i), y(e), O(i)
                                        },
                                        disabled: G,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": p.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, i.jsx)(c.default, {
                                        className: T.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                className: T.modalFooter,
                                children: [g ? (0, i.jsx)(o.Button, {
                                    className: T.cancelButton,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.ButtonSizes.SMALL,
                                    onClick: () => {
                                        g && (m(n, t), R())
                                    },
                                    children: p.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, i.jsxs)("div", {
                                    className: T.buttonsRight,
                                    children: [(0, i.jsx)(o.Button, {
                                        className: T.cancelButton,
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        size: o.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != F.current) {
                                                F.current(), F.current = null, B(!1);
                                                return
                                            }
                                            R()
                                        },
                                        children: p.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, i.jsx)(o.Button, {
                                        submitting: G,
                                        size: o.ButtonSizes.SMALL,
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
                    return o
                },
                cropStaticImage: function() {
                    return a
                },
                getBoundedCoordinates: function() {
                    return u
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return c
                },
                calculateDragBoundaries: function() {
                    return d
                },
                calculateOverlaySize: function() {
                    return f
                },
                downsizeImage: function() {
                    return E
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("917351"),
                l = n("75015");

            function r(e, t, n, i) {
                let l = e.naturalWidth / e.width,
                    r = t.width / 2,
                    o = t.height / 2,
                    a = (e.width / 2 - r - n.x) * l,
                    u = (e.height / 2 - o - n.y) * l,
                    s = t.width * l,
                    c = t.height * l,
                    d = Math.min(s, i.width),
                    f = Math.min(c, i.height);
                return {
                    x: a,
                    y: u,
                    scaledCropWidth: s,
                    scaledCropHeight: c,
                    canvasWidth: d,
                    canvasHeight: f
                }
            }
            async function o(e, t, i, o, a) {
                let {
                    x: u,
                    y: s,
                    scaledCropWidth: c,
                    scaledCropHeight: d
                } = r(t, i, o, a), f = await e.arrayBuffer(), E = new Worker(new URL(n.p + n.u("39703"), n.b)), A = new Promise((e, t) => {
                    E.onmessage = n => {
                        let {
                            data: i
                        } = n;
                        if (i.type === l.MessageTypes.CROP_GIF_COMPLETE) {
                            var r;
                            e((r = new Blob([i.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var n;
                                    let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                    "string" == typeof i ? e(i) : e("")
                                }, t.readAsDataURL(r)
                            }))), E.terminate()
                        } else i.type === l.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
                    }
                });
                return E.postMessage({
                    type: l.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(f),
                    x: 0 | u,
                    y: 0 | s,
                    width: 0 | c,
                    height: 0 | d
                }), {
                    result: A,
                    cancelFn: () => E.terminate()
                }
            }

            function a(e, t, n, i) {
                let {
                    x: l,
                    y: o,
                    scaledCropWidth: a,
                    scaledCropHeight: u,
                    canvasWidth: s,
                    canvasHeight: c
                } = r(e, t, n, i), d = document.createElement("canvas");
                d.width = s, d.height = c;
                let f = d.getContext("2d");
                return null != f && f.drawImage(e, l, o, a, u, 0, 0, d.width, d.height), d.toDataURL("image/png")
            }

            function u(e, t, n) {
                return {
                    x: (0, i.clamp)(e, n.left, n.right),
                    y: (0, i.clamp)(t, n.bottom, n.top)
                }
            }

            function s(e, t, n, i) {
                let r = n,
                    o = i;
                n > l.EDITING_CONTAINER_WIDTH && (r = l.EDITING_CONTAINER_WIDTH, o = i * (l.EDITING_CONTAINER_WIDTH / n));
                if (n / i < e) return {
                    width: r,
                    height: o
                };
                let a = t / o,
                    u = r * a;
                return {
                    width: u,
                    height: t
                }
            }

            function c(e, t, n) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case l.UploadTypes.BANNER:
                        return s(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.GUILD_BANNER:
                        return s(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        return s(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return s(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.HOME_HEADER:
                        return s(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
                }
            }

            function d(e, t, n) {
                let i = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    l = e - n.width,
                    r = t - n.height;
                return 0 !== l && (i.left = -Math.abs(l / 2), i.right = l / 2), 0 !== r && (i.bottom = -Math.abs(r / 2), i.top = r / 2), i
            }

            function f(e, t, n, i) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        let r = Math.min(t, n);
                        return {
                            width: r, height: r
                        };
                    case l.UploadTypes.BANNER:
                        let o = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (1 / l.BANNER_ASPECT_RATIO)
                        };
                    case l.UploadTypes.GUILD_BANNER:
                        let a = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: a, height: Math.min(a * (9 / 16), i)
                        };
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: u * (9 / 16)
                        };
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let s = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: .4 * s
                        };
                    case l.UploadTypes.HOME_HEADER:
                        let c = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: c, height: c * (1 / l.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function E(e, t, n) {
                let i = e.naturalWidth / e.naturalHeight,
                    l = t,
                    r = n;
                e.naturalWidth > e.naturalHeight ? l /= i : r *= i;
                let o = {
                    height: l,
                    width: r
                };
                return a(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, o)
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
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                o = n("719923"),
                a = n("782340");
            let u = (0, l.createExperiment)({
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
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: a,
                        collectOffOverride: u
                    } = n, s = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !u && (s ? i : r),
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
                    } : s({
                        user: t,
                        config: u.getCurrentConfig({
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), o = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = s({
                        user: l,
                        config: o
                    }), E = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, l.createExperiment)({
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
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        153498: function(e, t, n) {
            "use strict";

            function i(e) {
                let {} = e;
                return !1
            }

            function l(e, t) {
                return !1
            }

            function r(e) {
                return !1
            }

            function o() {
                return !1
            }

            function a() {
                return !1
            }

            function u(e) {
                let {} = e;
                return !1
            }

            function s(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function E(e) {}

            function A(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return i
                },
                navigateToMemberVerification: function() {
                    return l
                },
                navigateToRootTab: function() {
                    return r
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return u
                },
                popModal: function() {
                    return s
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
                    return E
                },
                useIsModalOpen: function() {
                    return A
                }
            })
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                o = n("112679"),
                a = n("55689"),
                u = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                E = n("49111"),
                A = n("646718");

            function h(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: h,
                    onClose: _,
                    onComplete: p,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: I,
                    analyticsObject: g,
                    analyticsLocation: m,
                    analyticsSourceLocation: R,
                    isGift: C = !1,
                    giftMessage: N,
                    subscriptionTier: w,
                    trialId: M,
                    postSuccessGuild: v,
                    openInvoiceId: S,
                    applicationId: O,
                    referralTrialOfferId: D,
                    giftRecipient: L,
                    returnRef: U,
                    subscription: y
                } = null != e ? e : {}, b = !1, P = (0, l.v4)(), H = s.default.getCurrentUser(), x = (0, f.isPremiumExactly)(H, A.PremiumTypes.TIER_2);
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: P,
                            subscriptionTier: w,
                            skuId: w,
                            isGift: C,
                            giftMessage: N,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: h,
                            onClose: (e, t) => {
                                l(), null == _ || _(e), e && (null == T || T(), !C && null != t && t === A.PremiumSubscriptionSKUs.TIER_2 && !x && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                b = !0, null == p || p(), !C && (0, u.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: I,
                            analyticsObject: g,
                            analyticsLocation: m,
                            analyticsSourceLocation: R,
                            trialId: M,
                            postSuccessGuild: v,
                            planGroup: A.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: S,
                            applicationId: O,
                            referralTrialOfferId: D,
                            returnRef: U,
                            subscription: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !b && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != m ? m : g,
                            source: R,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != M,
                            application_id: O,
                            location_stack: I
                        }), (0, o.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == _ || _(b), b && (null == T || T())
                    }
                })
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return l
                }
            });
            var i = n("913144");
            let l = e => {
                i.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                o = n("446674"),
                a = n("77078"),
                u = n("79112"),
                s = n("685665"),
                c = n("788506"),
                d = n("649844"),
                f = n("393414"),
                E = n("797647"),
                A = n("697218"),
                h = n("521012"),
                _ = n("471671"),
                p = n("181114"),
                T = n("978679"),
                I = n("216422"),
                g = n("719923"),
                m = n("646718"),
                R = n("49111"),
                C = n("782340"),
                N = n("683437"),
                w = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: w,
                        size: M,
                        className: v,
                        trialId: S,
                        isTrialCTA: O,
                        buttonText: D,
                        buttonTextClassName: L,
                        postSuccessGuild: U,
                        onSubscribeModalClose: y,
                        premiumModalAnalyticsLocation: b,
                        showIcon: P = !0,
                        disableShine: H,
                        applicationId: x,
                        giftMessage: G,
                        overrideDisabledButtonText: B,
                        shinyButtonClassName: V,
                        ...k
                    } = e, j = (0, o.useStateFromStores)([A.default], () => A.default.getCurrentUser()), F = (0, o.useStateFromStores)([_.default], () => _.default.isFocused()), W = (0, o.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Z
                    } = (0, s.default)(), z = e => {
                        if (e.preventDefault(), null == j) {
                            (0, f.transitionTo)(R.Routes.LOGIN);
                            return
                        }
                        if (null == w || w(e), (null == W ? void 0 : W.status) === R.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), u.default.open(R.UserSettingsSections.PREMIUM), null == y || y(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: o,
                                trialId: u,
                                postSuccessGuild: s,
                                onSubscribeModalClose: c,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: E,
                                applicationId: A,
                                giftMessage: h
                            } = e;
                            if (!t) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...l
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...l,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!l) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...l
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...l,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let _ = R.AnalyticsObjectTypes.BUY;
                            null != u ? _ = R.AnalyticsObjectTypes.TRIAL : r && (_ = R.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: o,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: R.AnalyticsObjects.BUTTON_CTA,
                                    objectType: _,
                                    ...E
                                },
                                trialId: u,
                                postSuccessGuild: s,
                                onClose: c,
                                applicationId: A,
                                giftMessage: h
                            })
                        }({
                            isClaimed: j.isClaimed(),
                            isVerified: j.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: S,
                            postSuccessGuild: U,
                            onSubscribeModalClose: y,
                            analyticsLocations: Z,
                            premiumModalAnalyticsLocation: b,
                            applicationId: x,
                            giftMessage: G
                        })
                    };
                    if (O) return (0, i.jsxs)(a.Button, {
                        size: M,
                        className: v,
                        innerClassName: N.premiumSubscribeButton,
                        look: a.Button.Looks.INVERTED,
                        onClick: z,
                        ...k,
                        children: [P && (0, i.jsx)(I.default, {
                            className: N.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(N.buttonText, L),
                            children: null != D ? D : C.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(a.Button, {
                        size: M,
                        className: v,
                        innerClassName: N.giftButton,
                        color: a.Button.Colors.PRIMARY,
                        onClick: z,
                        ...k,
                        children: [(0, i.jsx)(T.default, {
                            className: N.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(N.buttonText, L),
                            children: null != D ? D : C.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let X = C.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        Y = null != W ? (0, g.getPremiumPlanItem)(W) : null,
                        K = null != Y ? g.default.getPremiumType(Y.planId) : null == j ? void 0 : j.premiumType,
                        q = l === m.PremiumSubscriptionSKUs.TIER_2 && null != K && [m.PremiumTypes.TIER_0, m.PremiumTypes.TIER_1].includes(K);
                    q && (X = C.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let $ = null != W && W.status !== R.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(W.planId) && !q,
                        J = $ ? null != B ? B : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== m.PremiumSubscriptionSKUs.LEGACY && t !== m.PremiumSubscriptionSKUs.TIER_0 && t !== m.PremiumSubscriptionSKUs.TIER_1 && t !== m.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? m.PremiumSubscriptionSKUToPremiumType[t] : null,
                                o = null != r ? m.PremiumTypeOrder[r] : null,
                                a = null != n ? m.PremiumTypeOrder[n] : null;
                            return null != a && null != o && o < a ? (i = C.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = C.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === m.PremiumTypes.TIER_2 && (l = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: K
                        }) : null;

                    function Q(e) {
                        var t, n;
                        return (0, i.jsxs)(p.default, {
                            disabled: $,
                            onClick: z,
                            innerClassName: N.premiumSubscribeButton,
                            color: l === m.PremiumSubscriptionSKUs.TIER_1 ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            size: M,
                            className: V,
                            wrapperClassName: v,
                            pauseAnimation: !F || H,
                            ...k,
                            ...e,
                            children: [P && (0, i.jsx)(I.default, {
                                className: N.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(N.buttonText, L),
                                children: null !== (n = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : D) && void 0 !== n ? n : X
                            })]
                        })
                    }
                    return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, i.jsx)(a.Tooltip, {
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
            var i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                o = n("913144"),
                a = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(o.default, {
                WINDOW_INIT: function(e) {
                    l(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = d
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return _
                },
                default: function() {
                    return T
                }
            });
            var i, l, r = n("37983"),
                o = n("884691"),
                a = n("414456"),
                u = n.n(a),
                s = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let A = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                h = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class _ extends o.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, r.jsx)(s.default.div, {
                        ...i,
                        className: u(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: A[t],
                            children: (0, r.jsx)("div", {
                                className: h[t]
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
                    disabled: i,
                    submitting: l,
                    pauseAnimation: a,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: A,
                    onlyShineOnHover: h,
                    ...p
                } = e, T = o.createRef(), I = (0, d.default)(T), g = !i && !l && !0 !== a && (!h || I);
                return (0, r.jsxs)(c.Button, {
                    buttonRef: T,
                    ...p,
                    className: u(E.shinyButton, n),
                    disabled: i,
                    submitting: l,
                    children: [t, g ? (0, r.jsx)(_, {
                        shinePaused: f,
                        className: u(E.buttonShine, h ? E.onlyShineOnHover : void 0, A),
                        shineSize: s
                    }) : null]
                })
            };
            p.ShineSizes = l;
            var T = p
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("998460"),
                o = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("578478"),
                o = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: l
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("202909"),
                o = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("276825"),
                o = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: l
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
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return h
                },
                getPaletteForAvatar: function() {
                    return _
                },
                readFileAsBase64: function() {
                    return T
                },
                dataUriFileSize: function() {
                    return I
                },
                dataUrlToFile: function() {
                    return g
                },
                isPNGAnimated: function() {
                    return m
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                o = n.n(r),
                a = n("48648"),
                u = n.n(a);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: r = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), o);
                    let a = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * a), r), n = Math.max(Math.round(n * a), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e, r = 1;
                t > i && (r = i / t), t = Math.round(t * r);
                let o = 1;
                return (n = Math.round(n * r)) > l && (o = l / n), Math.min(r * o, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let A = [
                [0, 0, 0]
            ];

            function h(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return A;
                let r = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, r, o);
                let a = l.getImageData(0, 0, r, o).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, o, a, u, s; l < t; l += n) o = e[(r = 4 * l) + 0], a = e[r + 1], u = e[r + 2], (void 0 === (s = e[r + 3]) || s >= 125) && !(o > 250 && a > 250 && u > 250) && i.push([o, a, u]);
                        return i
                    }(a, r * o, n),
                    c = u(s, t);
                return "boolean" == typeof c ? A : c.palette()
            }
            let _ = e => "number" == typeof e ? null : p(e),
                p = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(h(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function T(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function I(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function g(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var l = 0; l < t.length; l++) i[l] = t.charCodeAt(l);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    l = await i.arrayBuffer();
                return new File([l], t, {
                    type: n
                })
            }
            async function m(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    l = i.indexOf("IDAT");
                return !!(l > 0) && -1 !== i.substring(0, l).indexOf("acTL") || !1
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("781738");
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("872717"),
                l = n("599110");

            function r(e, t, n) {
                let {
                    trackedActionData: i,
                    ...r
                } = t, o = {
                    url: r.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(r).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...o,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let a = i.properties;
                        "function" == typeof i.properties && (a = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...o,
                            ...a
                        }), n(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return r(i.default.get, e, "get")
                },
                post: function(e) {
                    return r(i.default.post, e, "post")
                },
                put: function(e) {
                    return r(i.default.put, e, "put")
                },
                patch: function(e) {
                    return r(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(i.default.delete, e, "del")
                }
            }
        }
    }
]);