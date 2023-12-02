(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52757"], {
        68422: function(e, t, n) {
            "use strict";
            e.exports = n.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d4d9f2bff23beec65b1f.svg"
        },
        926607: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return i
                }
            })
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("913144"),
                s = {
                    toggleMembersSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        i.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        549825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                l = n("77078"),
                a = n("978970"),
                u = n("36694"),
                o = n("945330"),
                d = n("705179");

            function c(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: s,
                    disabledPermissionsHeader: c,
                    className: f
                } = e;
                return (0, i.jsxs)("div", {
                    className: r(d.list, f),
                    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != s ? (0, i.jsx)(l.FormTitle, {
                            className: d.permissionHeader,
                            children: s
                        }) : null, (0, i.jsx)("div", {
                            className: d.container,
                            children: t.map(e => (0, i.jsxs)("div", {
                                className: d.permission,
                                children: [(0, i.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: d.check
                                }), (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != c ? (0, i.jsx)(l.FormTitle, {
                            className: d.permissionHeader,
                            children: c
                        }) : null, (0, i.jsx)("div", {
                            className: d.container,
                            children: n.map(e => (0, i.jsxs)("div", {
                                className: d.permission,
                                children: [(0, i.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: d.cross
                                }), (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null]
                })
            }
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19ZM18 9.41421V13C18 13.5523 18.4477 14 19 14C19.5523 14 20 13.5523 20 13V7C20 6.44772 19.5523 6 19 6H13C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8H16.5858L11.5 13.0858L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929L4.29289 15.2929C3.90237 15.6834 3.90237 16.3166 4.29289 16.7071C4.68342 17.0976 5.31658 17.0976 5.70711 16.7071L9 13.4142L10.7929 15.2071C11.1834 15.5976 11.8166 15.5976 12.2071 15.2071L18 9.41421Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })
                })
            }
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L6.29289 8.29289C5.90237 8.68342 5.90237 9.31658 6.29289 9.70711C6.68342 10.0976 7.31658 10.0976 7.70711 9.70711L11 6.41421L11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20L13 6.41421L16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L12.7071 3.29289Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM7.73851 9.30744C7.89686 8.51572 8.51572 7.89686 9.30744 7.73851L16.5291 6.29417C17.2288 6.15423 17.8458 6.77115 17.7058 7.47087L16.2615 14.6926C16.1031 15.4843 15.4843 16.1031 14.6926 16.2615L7.47087 17.7058C6.77115 17.8458 6.15423 17.2288 6.29417 16.5291L7.73851 9.30744Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })]
                })
            }
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.9675 4.06341C20.9672 4.23997 21.0514 4.41382 21.209 4.49341C21.7633 4.77337 22.1026 5.30533 22.2466 5.9094C22.5427 7.15214 23 9.61875 23 13V17.9115C23 19.6182 21.6165 21 19.9098 21C18.7394 21 17.6693 20.3387 17.1459 19.2918L15.3879 15.7757C15.1653 15.3306 14.6482 15.1151 14.1633 15.2271C13.5915 15.3593 12.7957 15.5 12 15.5C11.2043 15.5 10.4085 15.3593 9.83671 15.2271C9.35184 15.1151 8.83469 15.3306 8.61213 15.7757L6.8541 19.2918C6.33065 20.3387 5.26064 21 4.09017 21C2.38352 21 1 19.6182 1 17.9115V13C1 9.61875 1.45731 7.15214 1.75342 5.9094C1.89735 5.30533 2.23674 4.77337 2.79103 4.49341C2.94862 4.41382 3.03283 4.23997 3.03247 4.06343C3.03105 3.36907 3.51468 2.74476 4.22091 2.59465L7.15535 1.97091C7.66451 1.86269 8.16822 2.02669 8.51504 2.36457C8.8711 2.71145 9.29874 3.08085 9.79517 3.05498C10.4738 3.01961 11.2075 2.99998 12 2.99998C12.7925 2.99998 13.5262 3.01961 14.2048 3.05498C14.7012 3.08085 15.1289 2.71144 15.4849 2.36455C15.8318 2.02667 16.3355 1.86267 16.8446 1.97089L19.7791 2.59463C20.4853 2.74474 20.9689 3.36905 20.9675 4.06341ZM20 7.49998C20 8.32841 19.3284 8.99998 18.5 8.99998C17.6716 8.99998 17 8.32841 17 7.49998C17 6.67156 17.6716 5.99998 18.5 5.99998C19.3284 5.99998 20 6.67156 20 7.49998ZM15.5 12C16.3284 12 17 11.3284 17 10.5C17 9.67156 16.3284 8.99998 15.5 8.99998C14.6716 8.99998 14 9.67156 14 10.5C14 11.3284 14.6716 12 15.5 12ZM5 6.99998C5 6.4477 5.44772 5.99998 6 5.99998C6.55228 5.99998 7 6.4477 7 6.99998V7.99998H8C8.55228 7.99998 9 8.4477 9 8.99998C9 9.55227 8.55228 9.99998 8 9.99998H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V9.99998H4C3.44772 9.99998 3 9.55227 3 8.99998C3 8.4477 3.44772 7.99998 4 7.99998H5V6.99998Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M15.2979 14.48C14.8405 14.928 14.2199 15.152 13.4359 15.152H12.0499V9.18803H13.4359C14.2199 9.18803 14.8405 9.41203 15.2979 9.86003C15.7552 10.308 15.9839 11.078 15.9839 12.17C15.9839 13.262 15.7552 14.032 15.2979 14.48Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM6 17H8.044V7.34003H6V17ZM10.0059 7.34003V17H13.4359C14.9012 17 16.0305 16.5847 16.8239 15.754C17.6265 14.9234 18.0279 13.7287 18.0279 12.17C18.0279 10.6114 17.6265 9.41669 16.8239 8.58603C16.0305 7.75536 14.9012 7.34003 13.4359 7.34003H10.0059Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })]
                })
            }
        },
        392646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserCircleStatusIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22.9936 12.3795C22.9808 12.7565 22.555 12.9568 22.2202 12.783C21.2562 12.2827 20.1611 12 19 12C17.9074 12 16.8732 12.2503 15.9517 12.6968C15.8121 12.7644 15.6499 12.7694 15.5071 12.7089C14.4293 12.2524 13.2441 12 12 12C8.77217 12 5.94121 13.6993 4.35288 16.252C4.25835 16.4039 4.25834 16.5961 4.35287 16.748C4.71778 17.3345 5.14829 17.8759 5.63412 18.362C5.87256 18.6006 6.26897 18.5099 6.42206 18.2094C6.61558 17.8294 6.81896 17.4834 7.01012 17.1878C7.14536 16.9787 7.44066 17.0934 7.41588 17.3412L7.21993 19.3007C7.20111 19.4889 7.28948 19.6727 7.4526 19.7683C8.78703 20.5512 10.3411 21 12 21C12.17 21 12.3213 21.1095 12.3764 21.2703C12.4889 21.5986 12.6251 21.9159 12.783 22.2202C12.9568 22.555 12.7565 22.9808 12.3795 22.9936C12.2535 22.9978 12.127 23 12 23C10.1996 23 8.50014 22.5674 7 21.8006L6.99223 21.7966C6.48296 21.5358 5.9967 21.2364 5.5373 20.9023C4.68891 20.2853 3.93211 19.55 3.29114 18.7207C3.14775 18.5351 3.01015 18.3449 2.87863 18.1502C1.69256 16.3946 1 14.2782 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 12.127 22.9978 12.2535 22.9936 12.3795ZM15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        d: "M24 19C24 21.7614 21.7614 24 19 24C16.2386 24 14 21.7614 14 19C14 16.2386 16.2386 14 19 14C21.7614 14 24 16.2386 24 19Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })]
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        d: "M11.5333 11C6.26822 11 2 15.2682 2 20.5333C2 21.3434 2.65665 22 3.46667 22H3.68736C3.92716 22 4.1315 21.8292 4.19105 21.597C4.47638 20.4841 5.03155 19.4277 5.51012 18.6878C5.64536 18.4787 5.94066 18.5934 5.91588 18.8412L5.65497 21.4502C5.62554 21.7446 5.85668 22 6.15249 22H17.8475C18.1433 22 18.3745 21.7446 18.345 21.4502L18.0841 18.8412C18.0593 18.5934 18.3546 18.4787 18.4899 18.6878C18.9685 19.4277 19.5236 20.4841 19.8089 21.597C19.8685 21.8292 20.0728 22 20.3126 22H20.5333C21.3434 22 22 21.3434 22 20.5333C22 15.2682 17.7318 11 12.4667 11H11.5333Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })]
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691"),
                s = n("775560"),
                r = n("862337");

            function l(e, t) {
                let [n, l] = (0, i.useState)(e), a = (0, s.useLazyValue)(() => new r.Timeout);
                (0, i.useEffect)(() => () => a.stop(), [a]);
                let u = (0, i.useCallback)(n => {
                    l(n), n !== e && a.start(t, () => l(e))
                }, [t, e, a]);
                return [n, u]
            }
        },
        722525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return u
                },
                transitionToPage: function() {
                    return o
                }
            });
            var i = n("77078"),
                s = n("255397"),
                r = n("406189"),
                l = n("393027"),
                a = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, i.hasAnyModalOpen)() && (n && r.default.channelListScrollTo(e, t), u && null != t && s.default.updateChatOpen(t, !0), l.default.getState().updatePath(a.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, i.hasAnyModalOpen)() && l.default.getState().updatePath(e)
            }
        },
        302437: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("974667"),
                s = n("446674"),
                r = n("206230");

            function l() {
                return Promise.resolve()
            }

            function a(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, s.useStateFromStores)([r.default], () => r.default.keyboardModeEnabled);
                return (0, i.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: a,
                    scrollToStart: l,
                    scrollToEnd: l
                })
            }
        },
        765105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("90915"),
                r = n("73749"),
                l = n("468560"),
                a = n("271081"),
                u = n("298557"),
                o = n("176162"),
                d = n("750947"),
                c = n("49111");
            let f = function(e) {
                let {
                    match: t
                } = e, {
                    applicationId: n,
                    section: s
                } = t.params, r = (0, l.default)(d.ApplicationDirectoryProfileSections, s);
                return (0, i.jsx)(u.default, {
                    applicationId: n,
                    initialSection: r
                })
            };

            function C() {
                return (0, i.jsxs)(s.Switch, {
                    children: [(0, i.jsx)(r.default, {
                        path: c.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, i.jsx)(r.default, {
                        path: c.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, i.jsx)(r.default, {
                        path: c.Routes.APPLICATION_DIRECTORY,
                        component: a.default
                    })]
                })
            }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983"),
                s = n("884691"),
                r = n("617258"),
                l = n("446674"),
                a = n("769846"),
                u = n("77078"),
                o = n("598981"),
                d = n("682777"),
                c = n("577357"),
                f = n("393414"),
                C = n("160299"),
                p = n("153160"),
                h = n("271560"),
                I = n("650509"),
                E = n("910861"),
                v = n("899604"),
                _ = n("153335"),
                T = n("49111"),
                S = n("782340"),
                m = n("208961");
            let g = (0, r.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                A = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let s = (0, h.getAssetURL)(t.application_id, n, g);
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            src: s,
                            alt: "",
                            className: m.listingImage
                        })
                    })
                },
                N = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: u.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function L(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: r,
                    analyticsLocation: a,
                    onComplete: h,
                    forcesTransitionToGuild: g
                } = e, L = (0, l.useStateFromStores)([C.default], () => C.default.isSyncing), {
                    activeSubscription: x,
                    activeSubscriptionListing: y
                } = (0, I.useActiveSubscriptionListingForApplication)(t.application_id, r), {
                    openModal: M,
                    canOpenModal: P,
                    cannotOpenReason: O
                } = (0, _.default)({
                    listing: t,
                    guildId: r,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: a,
                    onComplete: h,
                    forcesTransitionToGuild: g
                }), j = t.subscription_plans[0], w = 0 === j.price, b = (null == y ? void 0 : y.id) === t.id, V = (0, o.default)(), D = V && !P || L, U = () => {
                    V ? M() : (0, d.redirectToLogin)({
                        [A]: "true"
                    })
                };
                return s.useEffect(() => {
                    let e = new URL(location.href);
                    if (V && !D && "true" === e.searchParams.get(A)) {
                        e.searchParams.delete(A);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), M()
                    }
                }, [V, M, t, D]), (0, i.jsxs)("div", {
                    className: m.container,
                    children: [(0, i.jsxs)("div", {
                        className: m.cardHeader,
                        children: [(0, i.jsx)(R, {
                            listing: t
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, i.jsxs)("div", {
                            className: m.priceAndButtonContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: w ? S.default.Messages.APPLICATION_SUBSCRIPTION_FREE : S.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, p.formatPrice)(j.price, j.currency),
                                    period: (0, c.formatPlanInterval)(j)
                                })
                            }), (() => {
                                var e;
                                if (b) return (0, i.jsx)(N, {
                                    children: (null == x ? void 0 : x.status) === T.SubscriptionStatusTypes.CANCELED ? S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (w) return null == y ? (0, i.jsx)(N, {
                                    children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, i.jsx)(u.Tooltip, {
                                    tooltipClassName: m.subscribeButtonTooltip,
                                    text: P || !V ? null : O,
                                    "aria-label": null !== (e = !P && O) && void 0 !== e && e,
                                    children: e => (0, i.jsx)(E.default, {
                                        ...e,
                                        disabled: D,
                                        submitting: !1,
                                        onClick: U,
                                        children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, i.jsx)("div", {
                        className: m.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, i.jsx)(v.default, {
                            benefit: e,
                            className: m.benefit
                        }, t))
                    }) : null]
                })
            }
        },
        913678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("77078"),
                l = n("850068"),
                a = n("598981"),
                u = n("650509"),
                o = n("90592"),
                d = n("94973"),
                c = n("782340"),
                f = n("358261");

            function C(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), s = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return s || n ? (0, i.jsxs)("div", {
                    className: f.cta,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? c.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : c.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, i.jsx)(r.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? c.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : c.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function p(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: c,
                    analyticsLocation: p,
                    onComplete: h,
                    forcesTransitionToGuild: I
                } = e, {
                    listingsLoaded: E
                } = (0, u.useFetchListingsForApplication)(o, c), {
                    entitlementsLoaded: v
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: _
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), T = (0, a.default)();
                s.useEffect(() => {
                    T && l.fetchSubscriptions()
                }, [T]);
                let S = null == _ ? void 0 : _.id,
                    m = null == _ ? void 0 : null === (t = _.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return E && (null == n || v) ? null == S || null == m || 0 === m.length ? null : (0, i.jsx)("div", {
                    className: f.container,
                    children: m.map(e => (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(C, {
                            listing: e
                        }, e.id), (0, i.jsx)(d.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: S,
                            analyticsLocation: p,
                            onComplete: h,
                            forcesTransitionToGuild: I
                        }, e.id)]
                    }, e.id))
                }) : (0, i.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, i.jsx)(r.Spinner, {})
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function s(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return s
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return a
                }
            }), n("70102");
            let r = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : r
            }

            function a(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("77078"),
                r = n("845579"),
                l = n("662255"),
                a = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: d
                } = e, c = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !a.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(s.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, a.copy)(n), null == u || u()
                    },
                    icon: l.default,
                    showIconFirst: d
                }, f)
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return l
                },
                formatPlanInterval: function() {
                    return a
                },
                formatPlanIntervalDuration: function() {
                    return u
                },
                isChannelBenefit: function() {
                    return o
                },
                isIntangibleBenefit: function() {
                    return d
                }
            });
            var i = n("677795"),
                s = n("646718"),
                r = n("782340");

            function l(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function a(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case s.SubscriptionIntervalTypes.DAY:
                            return r.default.Messages.DAY;
                        case s.SubscriptionIntervalTypes.MONTH:
                            return r.default.Messages.MONTH;
                        case s.SubscriptionIntervalTypes.YEAR:
                            return r.default.Messages.YEAR
                    }
                })(t).format({
                    count: n
                })
            }

            function u(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                switch (t) {
                    case s.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return r.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return r.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case s.SubscriptionIntervalTypes.MONTH:
                        return r.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case s.SubscriptionIntervalTypes.YEAR:
                        return r.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function o(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function d(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("913144"),
                s = n("819689"),
                r = n("115718"),
                l = n("347895"),
                a = n("341329"),
                u = n("582713"),
                o = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: r,
                            hasSingleMessageRequest: l
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: r,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? s.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : a.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: l,
                            flash: o = !0,
                            details: d
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: l,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? s.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: o,
                            jumpType: r.JumpTypes.INSTANT
                        }) : a.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, l.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: l,
                            flash: o = !0,
                            details: d
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: l,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? s.default.jumpToMessage({
                            channelId: l,
                            messageId: d.initialMessageId,
                            flash: o,
                            jumpType: r.JumpTypes.INSTANT
                        }) : a.default.fetchMessages({
                            guildId: t,
                            channelId: l
                        })
                    },
                    closeChannelSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: s,
                            details: r
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: s,
                            baseChannelId: n,
                            guildId: t,
                            details: r
                        })
                    },
                    closeGuildSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        467094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return _
                },
                fetchStickerPacks: function() {
                    return T
                },
                fetchSticker: function() {
                    return S
                },
                fetchGuildStickers: function() {
                    return m
                },
                deleteGuildSticker: function() {
                    return g
                },
                createGuildSticker: function() {
                    return A
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return N
                },
                clearStickerPreview: function() {
                    return L
                },
                favoriteSticker: function() {
                    return y
                },
                unfavoriteSticker: function() {
                    return M
                }
            }), n("424973");
            var i = n("917351"),
                s = n.n(i),
                r = n("872717"),
                l = n("913144"),
                a = n("404118"),
                u = n("619443"),
                o = n("915639"),
                d = n("872173"),
                c = n("766274"),
                f = n("341542"),
                C = n("697218"),
                p = n("271560"),
                h = n("364685"),
                I = n("49111"),
                E = n("397336"),
                v = n("782340");
            let _ = async (e, t) => {
                let {
                    body: n
                } = await (0, p.httpGetWithCountryCodeQuery)(I.Endpoints.STICKER_PACK(e));
                return l.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, T = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (h.default.isFetchingStickerPacks || h.default.hasLoadedStickerPacks) return;
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await r.default.get({
                    url: I.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                l.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, S = async e => {
                let {
                    body: t
                } = await r.default.get({
                    url: I.Endpoints.STICKER(e)
                });
                l.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, m = async e => {
                let {
                    body: t
                } = await r.default.get({
                    url: I.Endpoints.GUILD_STICKER_PACKS(e)
                });
                l.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new c.default(e.user)
                    } : e)
                })
            }, g = async e => {
                await r.default.delete({
                    url: I.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, A = async (e, t) => {
                let n = await r.default.post({
                    url: I.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return l.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: C.default.getCurrentUser()
                    }
                }), n.body
            }, R = async (e, t, n) => {
                let i = await r.default.patch({
                    url: I.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return i.body
            };

            function N(e, t, n) {
                l.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function L(e, t) {
                l.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function x(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != h.default.getStickerById(e))
            }

            function y(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), s.size(t.stickerIds) >= E.MAX_FAVORITES) ? (a.default.show({
                    title: v.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: v.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: E.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), E.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function M(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
                }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return u
                },
                trackProfilePanelToggled: function() {
                    return o
                }
            });
            var i = n("373469"),
                s = n("824563"),
                r = n("27618"),
                l = n("599110"),
                a = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: s,
                        customStatusActivity: r,
                        status: u
                    } = e;
                    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != s && (null == s ? void 0 : s.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == s ? void 0 : s.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != r,
                        has_profile_effect: null != t.profileEffectID,
                        ...d(t)
                    })
                },
                o = (e, t) => {
                    l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != i.default.getAnyStreamForUser(n),
                        u = s.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        d = r.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                s = n("95410"),
                r = n("913144"),
                l = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    u = null != e ? e : a
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return u
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = s.default.get(o, null);
                return s.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var c = new d(r.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        836417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                s = n("913144"),
                r = n("149022"),
                l = n("884351"),
                a = n("845579"),
                u = n("377253");
            let o = {};
            class d extends i.default.Store {
                isEditing(e, t) {
                    var n;
                    return (null === (n = o[e]) || void 0 === n ? void 0 : n.messageId) === t
                }
                isEditingAny(e) {
                    return null != o[e]
                }
                getEditingTextValue(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.textValue
                }
                getEditingRichValue(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.richValue
                }
                getEditingMessageId(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.messageId
                }
                getEditingMessage(e) {
                    let t = o[e];
                    return null != t && null != t.messageId ? u.default.getMessage(e, t.messageId) : null
                }
            }
            d.displayName = "EditMessageStore";
            var c = new d(s.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: i
                    } = e, s = a.UseLegacyChatInput.getSetting(), u = l.default.unparse(i, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: u,
                        richValue: (0, r.toRichValue)(s ? u : i)
                    }
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: i
                    } = e, s = o[t];
                    if (null == s) return !1;
                    o[t] = {
                        ...s,
                        textValue: n,
                        richValue: i
                    }
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let i, s, r;
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007"), n("424973");
            var l, a, u = n("866227"),
                o = n.n(u),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                C = n("21121"),
                p = n("934306"),
                h = n("288518"),
                I = n("486503"),
                E = n("233069"),
                v = n("42203"),
                _ = n("305961"),
                T = n("660478"),
                S = n("282109"),
                m = n("697218"),
                g = n("299039"),
                A = n("724210");
            (a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
            let R = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        s = e.isMessageRequestTimestamp;
                    if (null != s) {
                        let e = o(s).valueOf(),
                            t = g.default.fromTimestamp(e);
                        return g.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: S.default.isMessagesFavorite(e.id) && (0, C.isInMainTabsExperiment)(),
                    isRequest: h.default.isMessageRequest(e.id) || I.default.isSpam(e.id)
                }
            }

            function L() {
                R.clear(), Object.values(v.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, N(e))
                }), (0, C.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && S.default.getAddedToMessages().forEach(e => {
                    let t = v.default.getChannel(e);
                    null != t && (0, E.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
                })
            }

            function x() {
                let e = v.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, N(e[t]))
            }
            let y = (i = [], s = [], r = [], () => {
                let e = R.values("FAVORITE"),
                    t = R.values("DEFAULT");
                return (i !== e || s !== t) && (r = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return r.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return r.push(t)
                }), s = t), r
            });
            class M extends d.default.Store {
                initialize() {
                    this.waitFor(v.default, _.default, m.default, h.default, S.default), this.syncWith([S.default, h.default], L)
                }
                getPrivateChannelIds() {
                    return y()
                }
                getSortedChannels() {
                    return [R.values("FAVORITE"), R.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            M.displayName = "PrivateChannelSortStore";
            var P = new M(f.default, {
                CONNECTION_OPEN: L,
                CONNECTION_OPEN_SUPPLEMENTAL: L,
                OVERLAY_INITIALIZE: L,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, E.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, E.isPrivate)(t.type) || t.id === A.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    R.set(t.id, N(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!R.has(t)) return !1;
                    let i = v.default.getChannel(t);
                    return null != i && R.set(t, N(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return R.delete(t)
                }
            })
        },
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("546671"),
                u = n("341417");
            let o = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                d = {
                    [o.UP]: u.up,
                    [o.RIGHT]: u.right,
                    [o.DOWN]: u.down,
                    [o.LEFT]: u.left
                };
            class c extends s.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, i.jsx)(a.default, {
                        className: l(u.arrow, t, {
                            [d[e]]: !0
                        })
                    })
                }
            }
            c.Directions = o;
            var f = c
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                l = n("561445"),
                a = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: s,
                        children: a
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(l.outer, s),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: l.inner,
                            children: a
                        })
                    })
                }
        },
        265836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                r = n("862337");
            class l extends s.Component {
                static getDerivedStateFromProps(e) {
                    return e.disable ? {
                        hovered: !1
                    } : null
                }
                componentDidMount() {
                    let {
                        pauseOnHover: e,
                        disable: t
                    } = this.props, n = this.state.hovered && e;
                    !t && !n && this.startTimer()
                }
                componentWillUnmount() {
                    this.stopTimer()
                }
                componentDidUpdate(e, t) {
                    var n, i, s, r;
                    let {
                        props: l
                    } = this;
                    let a = (n = l, i = this.state, !n.disable && !(i.hovered && n.pauseOnHover));
                    let u = (s = e, r = t, !s.disable && !(r.hovered && s.pauseOnHover));
                    a && !u || e.interval !== l.interval ? this.startTimer() : !a && u && this.stopTimer()
                }
                startTimer() {
                    let {
                        interval: e,
                        onInterval: t,
                        disable: n
                    } = this.props;
                    !n && this.timer.start(e, () => {
                        t()
                    })
                }
                stopTimer() {
                    this.timer.stop()
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        disable: n
                    } = this.props, s = n ? null : {
                        onMouseEnter: this.handlePause,
                        onFocus: this.handlePause,
                        onMouseLeave: this.handleResume,
                        onBlur: this.handleResume
                    };
                    return (0, i.jsx)("div", {
                        ...s,
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new r.Interval, this.state = {
                        hovered: !1
                    }, this.handlePause = () => {
                        !this.state.hovered && this.setState({
                            hovered: !0
                        })
                    }, this.handleResume = () => {
                        this.setState({
                            hovered: !1
                        })
                    }
                }
            }
            l.defaultProps = {
                disable: !1,
                pauseOnHover: !1
            };
            var a = l
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                u = n("381546"),
                o = n("229915"),
                d = n("782340"),
                c = n("913893");
            class f extends s.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: s,
                        inputClassName: r,
                        className: f,
                        onChange: C,
                        onFocus: p,
                        onBlur: h,
                        onKeyPress: I,
                        autoComplete: E,
                        forwardedRef: v,
                        closeIconClassName: _,
                        searchIconClassName: T,
                        cta: S
                    } = this.props, m = null != s && s.length > 0, g = null != v ? v : this._textInputRef;
                    return (0, i.jsx)(a.FocusRing, {
                        focusTarget: g,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: l(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(a.TextInput, {
                                inputRef: g,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: l(c.searchBoxInput, r),
                                onChange: C,
                                onFocus: p,
                                onBlur: h,
                                onKeyPress: I,
                                value: m ? s : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: E ? "on" : "off"
                            }), null != S ? (0, i.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: S
                            }) : null, m ? (0, i.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": d.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(u.default, {
                                    className: l(c.clearIcon, _)
                                })
                            }) : (0, i.jsx)(o.default, {
                                className: l(c.searchIcon, T),
                                "aria-label": d.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = s.createRef(), this._containerRef = s.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var C = s.forwardRef((e, t) => (0, i.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("7037"),
                l = n("246053"),
                a = (0, s.replaceIcon)(function(e) {
                    return (0, i.jsx)(l.default, {
                        ...e,
                        direction: l.default.Directions.UP
                    })
                }, r.ArrowSmallUpIcon)
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("35647"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon, void 0, {
                    size: 24
                })
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("772279"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        className: r,
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, r.CompassIcon, void 0, {
                    size: 24
                })
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("533806"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: s
                        })
                    })
                }, r.UserIcon, void 0, {
                    size: 24
                })
        },
        849483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("392646"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            className: r,
                            children: [(0, i.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                                fill: s
                            }), (0, i.jsx)("path", {
                                d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                                fill: s
                            })]
                        })
                    })
                }, r.UserCircleStatusIcon, void 0, {
                    size: 24
                })
        }
    }
]);