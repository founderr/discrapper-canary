(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95814"], {
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
                a = {
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
                    for (var i = 0; i < s.length; ++i)
                        if (!l[s[i]] && !a[s[i]] && (!n || !n[s[i]])) try {
                            e[s[i]] = t[s[i]]
                        } catch (e) {}
                }
                return e
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var l = n("37983"),
                a = n("884691"),
                r = n("310013"),
                s = n.n(r),
                i = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                o = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends a.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: l
                        } = this.state, {
                            style: a
                        } = this.props, r = null != a ? o(a.backgroundImage) : null;
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
                        this.canceller && this.canceller(), this.canceller = (0, i.loadImage)(e, t => {
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
                            ...a
                        } = this.props, {
                            loaded: r,
                            cached: s
                        } = this.state;
                        if (!r && null != t) {
                            var i;
                            t = {
                                ...t,
                                backgroundImage: null == (i = s) || "" === i || "none" === i ? "none" : "url(".concat(i, ")")
                            }
                        }
                        return (0, l.jsx)(e, {
                            style: t,
                            ...a
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? o(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return s(t, e), t
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: i = "",
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H6.99999C6.44771 13 5.99999 12.5523 5.99999 12C5.99999 11.4477 6.44771 11 6.99999 11H11V7C11 6.44771 11.4477 6 12 6Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: i = "",
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    })]
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM7.73851 9.30744C7.89686 8.51572 8.51572 7.89686 9.30744 7.73851L16.5291 6.29417C17.2288 6.15423 17.8458 6.77115 17.7058 7.47087L16.2615 14.6926C16.1031 15.4843 15.4843 16.1031 14.6926 16.2615L7.47087 17.7058C6.77115 17.8458 6.15423 17.2288 6.29417 16.5291L7.73851 9.30744Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    })]
                })
            }
        },
        907572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FriendsIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M13 10C15.2091 10 17 8.20914 17 6C17 3.79086 15.2091 2 13 2C10.7909 2 9 3.79086 9 6C9 8.20914 10.7909 10 13 10Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M3 5V4.25C3 3.55964 3.55964 3 4.25 3C4.94036 3 5.49193 3.56231 5.57619 4.24751C6.11744 8.64908 9.46155 12 13 12H14C18.4183 12 22 15.5817 22 20C22 21.1046 21.1046 22 20 22C19.909 22 19.8293 21.9398 19.8011 21.8532C19.5124 20.9685 18.9598 20.1303 18.4844 19.5434C18.3345 19.3585 18.0609 19.4868 18.0904 19.723L18.3399 21.719C18.3585 21.8682 18.2422 22 18.0918 22H9C7.89543 22 7 21.1046 7 20V17.7801C7 16.2057 6.32865 14.7258 5.47074 13.4056C3.88715 10.9687 3 7.88829 3 5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    })]
                })
            }
        },
        358917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadphonesIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M12 3C7.02944 3 3 7.02944 3 12C3 12.338 3.01863 12.6717 3.05492 13H4.91738C6.54895 13 8.0779 13.7961 9.01354 15.1327L10.3909 17.1003C11.1983 18.2537 11.1283 19.8061 10.2203 20.8822C9.39964 21.8549 7.94231 22.3305 6.66972 21.6244C3.29064 19.7493 1 16.1428 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 16.1428 20.7094 19.7493 17.3303 21.6244C16.0577 22.3305 14.6004 21.8549 13.7797 20.8822C12.8717 19.8061 12.8017 18.2537 13.6091 17.1003L14.9865 15.1327C15.9221 13.7961 17.4511 13 19.0826 13H20.9451C20.9814 12.6717 21 12.338 21 12C21 7.02944 16.9706 3 12 3Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M13.9571 5.45711L18.5429 10.0429C18.9334 10.4334 19.5666 10.4334 19.9571 10.0429L21.3358 8.66422C22.1168 7.88317 22.1168 6.61684 21.3358 5.83579L18.1642 2.66422C17.3831 1.88317 16.1168 1.88317 15.3358 2.66422L13.9571 4.0429C13.5666 4.43342 13.5666 5.06659 13.9571 5.45711Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M2.11104 20.1559L2.8382 15.9383C2.94347 15.3278 3.23518 14.7648 3.67326 14.3267L11.5429 6.45711C11.9334 6.06658 12.5666 6.06659 12.9571 6.45711L17.5429 11.0429C17.9334 11.4334 17.9334 12.0666 17.5429 12.4571L9.67326 20.3267C9.23518 20.7648 8.6722 21.0565 8.06166 21.1618L3.84409 21.889C2.82284 22.065 1.93496 21.1771 2.11104 20.1559Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    })]
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    })]
                })
            }
        },
        757767: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.NONE = 0] = "NONE", a[a.WEEKLY = 1] = "WEEKLY", a[a.MONTHLY = 2] = "MONTHLY", a[a.YEARLY = 3] = "YEARLY", a[a.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = a
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            }), n("808653"), n("424973");
            var l = n("446674"),
                a = n("923510"),
                r = n("923959"),
                s = n("957255");

            function i(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, l.useStateFromStoresArray)([r.default, s.default], () => {
                    let e = r.default.getChannels(n)[r.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, s.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return c
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return d
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return f
                },
                getInitialEventStartDate: function() {
                    return g
                },
                getEventTimeData: function() {
                    return v
                },
                getBaseScheduleForRecurrence: function() {
                    return N
                },
                getScheduleForRecurrenceWithException: function() {
                    return T
                },
                getScheduleFromEventData: function() {
                    return p
                },
                areDatesIdentical: function() {
                    return R
                },
                areSchedulesIdentical: function() {
                    return x
                },
                getRRule: function() {
                    return I
                },
                generateNextRecurrences: function() {
                    return L
                },
                getNextRecurrenceIdInEvent: function() {
                    return A
                },
                isValidRecurrence: function() {
                    return D
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return M
                },
                recurrenceRuleToOption: function() {
                    return j
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                a = n("866227"),
                r = n.n(a),
                s = n("614137"),
                i = n("249654"),
                u = n("718517"),
                o = n("757767");
            n("745049");
            let c = 365,
                d = c + 1,
                f = 4,
                E = [s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday],
                h = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday],
                C = [s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
                g = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                _ = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                S = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? _(e, t) : e.calendar(t)
                };

            function v(e, t, n) {
                null == n && (n = r());
                let l = r(e),
                    a = null != t && "" !== t ? r(t) : void 0,
                    s = null != t && l.isSame(a, "day");
                return {
                    startDateTimeString: S(l, n),
                    endDateTimeString: null != a ? s ? a.format("LT") : _(a, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= r().add(1, "hour"),
                    withinStartWindow: l <= r().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function m(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function N(e, t) {
                let n = function(e) {
                        return m(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    l = r(i.default.extractTimestamp(e)),
                    a = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: l,
                    endDate: a
                }
            }

            function T(e, t) {
                var n;
                if (null == t) return e;
                let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
                    endDate: null != l ? r(l) : void 0
                }
            }

            function p(e) {
                return m(e.scheduledStartTime, e.scheduledEndTime)
            }

            function R(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function x(e, t) {
                return null == e || null == t ? null == e && null == t : R(e.startDate, t.startDate) && R(e.endDate, t.endDate)
            }

            function I(e) {
                let t = new Date(e.start);
                return t.setMilliseconds(0), new s.RRule({
                    dtstart: t,
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function L(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = [],
                    r = n;
                r.setMilliseconds(0);
                let s = new Date;
                s.setFullYear(s.getFullYear() + f);
                for (let n = 0; n < e && r < s; n++) {
                    let e = t.after(r, 0 === n && !l);
                    if (null == e) break;
                    r = e, a.push(e)
                }
                return a
            }

            function A(e) {
                var t;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? i.default.fromTimestamp(Math.floor(n.getTime() / u.default.Millis.SECOND) * u.default.Millis.SECOND) : null
            }

            function D(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    l = i.default.extractTimestamp(t),
                    a = new Date(l);
                if (n.getUTCHours() !== a.getUTCHours() || n.getUTCMinutes() !== a.getUTCMinutes() || n.getUTCSeconds() !== a.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case s.RRule.WEEKLY:
                        return n.getUTCDay() === a.getUTCDay();
                    case s.RRule.YEARLY:
                        return n.getUTCDate() === a.getUTCDate();
                    default:
                        return !0
                }
            }

            function y(e) {
                let t = new s.Weekday(e.toDate().getDay()),
                    n = new s.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? C : n.weekday - t.weekday < 0 ? h : E
            }

            function M(e, t) {
                var n;
                let l = function(e, t) {
                    let n = y(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case o.RecurrenceOptions.NONE:
                            return null;
                        case o.RecurrenceOptions.WEEKLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.WEEKLY
                            });
                        case o.RecurrenceOptions.YEARLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.YEARLY
                            });
                        case o.RecurrenceOptions.WEEKDAY_ONLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == l) return null;
                let {
                    dtstart: a,
                    until: r,
                    freq: i,
                    interval: u,
                    byweekday: c,
                    bymonth: d,
                    bymonthday: f,
                    byyearday: E,
                    count: h
                } = l.options;
                return {
                    start: a.toISOString(),
                    end: null !== (n = null == r ? void 0 : r.toISOString()) && void 0 !== n ? n : null,
                    frequency: i,
                    interval: u,
                    byWeekday: null != c ? c : null,
                    byMonth: null != d ? d : null,
                    byMonthDay: null != f ? f : null,
                    byYearDay: null != E ? E : null,
                    count: h
                }
            }

            function j(e, t) {
                if (null == t) return o.RecurrenceOptions.NONE;
                let n = I(t);
                switch (n.options.freq) {
                    case s.RRule.WEEKLY:
                        return o.RecurrenceOptions.WEEKLY;
                    case s.RRule.YEARLY:
                        return o.RecurrenceOptions.YEARLY;
                    case s.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, y(e))) return o.RecurrenceOptions.NONE;
                        return o.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return o.RecurrenceOptions.NONE
                }
            }
        },
        124163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("782340"),
                s = n("93086");

            function i(e) {
                let {
                    sendStartNotification: t,
                    setSendStartNotification: n
                } = e, i = t ? r.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : r.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, l.jsx)("div", {
                    className: s.notificationToggle,
                    children: (0, l.jsx)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        size: 14,
                        className: s.checkbox,
                        value: t,
                        onChange: function() {
                            n(!t)
                        },
                        children: (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, l.jsx)(a.Tooltip, {
                                position: "bottom",
                                tooltipClassName: s.tooltip,
                                text: r.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": r.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: e => (0, l.jsx)("span", {
                                    ...e,
                                    children: i
                                })
                            })
                        })
                    })
                })
            }
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                r = n("77078"),
                s = n("20606"),
                i = n("956089"),
                u = n("822516"),
                o = n("757767"),
                c = n("782340"),
                d = n("572721");
            let f = new Set([0, 6]);

            function E(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: E
                } = e, h = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), C = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(c.default.getLocale(), {
                            weekday: "long"
                        }),
                        l = [{
                            value: o.RecurrenceOptions.NONE,
                            label: c.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: o.RecurrenceOptions.WEEKLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: n
                            })
                        }, {
                            value: o.RecurrenceOptions.YEARLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(c.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !f.has(t.getDay()) && l.push({
                        value: o.RecurrenceOptions.WEEKDAY_ONLY,
                        label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), l
                }(t), g = e => e.toString(), _ = (0, l.jsxs)("div", {
                    className: d.title,
                    children: [c.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(i.TextBadge, {
                        text: c.default.Messages.NEW,
                        color: s.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, l.jsx)(r.FormItem, {
                    title: _,
                    required: !0,
                    children: (0, l.jsx)(r.Select, {
                        placeholder: "gaming",
                        options: C,
                        select: E,
                        serialize: g,
                        isSelected: e => null != h && g(e) === g(h)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                r = n.n(a),
                s = n("77078"),
                i = n("812204"),
                u = n("685665"),
                o = n("381546"),
                c = n("351825"),
                d = n("651072"),
                f = n("822516"),
                E = n("844808"),
                h = n("782340"),
                C = n("234865");

            function g(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: a,
                    onRecurrenceChange: g,
                    onTimeChange: _,
                    timeSelected: S = !0,
                    schedule: v,
                    recurrenceRule: m,
                    showEndDate: N = !1,
                    requireEndDate: T = !1,
                    disableStartDateTime: p = !1
                } = e, {
                    analyticsLocations: R
                } = (0, u.default)(i.default.EVENT_SETTINGS), {
                    enabled: x
                } = d.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: R[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == v) return null;
                let I = null,
                    L = v.startDate,
                    A = r(),
                    D = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    y = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != m && (D.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), y.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let M = e => {
                    a({
                        ...v,
                        endDate: e
                    })
                };
                return null != L && d.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: R[0]
                }), N && (I = null != v.endDate || T ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: C.doubleInput,
                        children: [(0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: T,
                            children: (0, l.jsx)(s.DateInput, {
                                value: v.endDate,
                                onSelect: M,
                                minDate: v.startDate,
                                maxDate: y
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: T,
                            children: (0, l.jsx)(s.TimeInput, {
                                value: v.endDate,
                                onChange: M
                            })
                        })]
                    }), T ? null : (0, l.jsx)(s.Button, {
                        onClick: () => {
                            M(void 0)
                        },
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.MIN,
                        children: (0, l.jsxs)("div", {
                            className: C.link,
                            children: [(0, l.jsx)(o.default, {
                                width: 17,
                                height: 17,
                                className: C.removeIcon
                            }), (0, l.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, l.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: () => {
                        M(r(v.startDate).add(1, "hour"))
                    },
                    children: (0, l.jsxs)("div", {
                        className: C.link,
                        children: [(0, l.jsx)(c.default, {
                            width: 20,
                            height: 20,
                            className: C.addIcon
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, l.jsxs)("div", {
                    className: t,
                    children: [(0, l.jsxs)("div", {
                        className: C.doubleInput,
                        children: [(0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, l.jsx)(s.DateInput, {
                                value: v.startDate,
                                onSelect: e => {
                                    a({
                                        ...v,
                                        startDate: e
                                    })
                                },
                                minDate: A,
                                maxDate: D,
                                disabled: p
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(s.TimeInput, {
                                value: v.startDate,
                                onChange: e => {
                                    e.isValid() && (null == _ || _(!0), a({
                                        ...v,
                                        startDate: e
                                    }))
                                },
                                hideValue: !S,
                                disabled: p
                            })
                        })]
                    }), I, x && null != L && null != g && (0, l.jsx)(E.default, {
                        onRecurrenceChange: g,
                        startDate: L,
                        recurrenceRule: m
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("77078"),
                i = n("849467"),
                u = n("782340"),
                o = n("130221");

            function c(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: c
                } = e, d = n.slice(0, 5), f = d.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), E = a - d.length;
                return (0, l.jsxs)("div", {
                    className: r(o.grid, c),
                    children: [f, E > 0 && (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, l.jsx)(i.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: E
                            })
                        })]
                    })]
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return s
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var l = n("913144"),
                a = n("599110"),
                r = n("49111");

            function s(e) {
                a.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                r = n("197881"),
                s = n("492397");
            let i = new Set,
                u = {};
            class o extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(s.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        887143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSendStageStartNotification: function() {
                    return i
                },
                useDefaultSendStartStageNotificationToggle: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("525065"),
                r = n("957255"),
                s = n("843455");

            function i(e) {
                let t = (0, l.useStateFromStores)([r.default], () => null != e && r.default.can(s.Permissions.MENTION_EVERYONE, e), [e]);
                return t
            }

            function u(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getMemberCount(t), [t]);
                return null == e || null != n && !(n > 5e4) && !0
            }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return i
                },
                useStageParticipantsCount: function() {
                    return u
                },
                useSortedRequestToSpeakParticipants: function() {
                    return o
                },
                useActualStageSpeakerCount: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                a = n("334572"),
                r = n("488464"),
                s = n("998716");

            function i(e, t) {
                let [n] = (0, l.useStateFromStores)([r.default], () => [r.default.getMutableParticipants(e, t), r.default.getParticipantsVersion(e)], [e, t], a.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, l.useStateFromStores)([r.default], () => r.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, l.useStateFromStores)([r.default], () => {
                    let t = r.default.getMutableRequestToSpeakParticipants(e);
                    return [t, r.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], a.isVersionEqual);
                return t
            }

            function c(e) {
                return (0, l.useStateFromStores)([r.default], () => {
                    let t = r.default.getMutableParticipants(e, s.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === s.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        193038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("77078"),
                i = n("272339"),
                u = n("333352"),
                o = function(e) {
                    let {
                        count: t,
                        className: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: r(u.container, n),
                        children: [(0, l.jsx)(i.default, {
                            width: 12,
                            height: 12,
                            className: u.icon
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: null != t ? t : 0
                        })]
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("782340"),
                i = n("53061"),
                u = n("284434"),
                o = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: r(i.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: r(i.sparkleIcon, i.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: r(i.sparkleIcon, i.sparkleTop)
                    })]
                })
            }
        },
        911457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageDiscoveryRecommendationSource: function() {
                    return a
                },
                default: function() {
                    return g
                }
            });
            var l, a, r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                u = n("77078"),
                o = n("687521"),
                c = n("29913"),
                d = n("580357"),
                f = n("476263"),
                E = n("228427"),
                h = n("193038"),
                C = n("366091");

            function g(e) {
                let {
                    guild: t,
                    stageInstance: n,
                    showGuildPopout: l,
                    setShowGuildPopout: a,
                    handleGuildNameClick: s,
                    source: g,
                    speakers: _,
                    speakerCount: S,
                    audienceCount: v,
                    channelName: m
                } = e, N = t.id;
                return (0, r.jsx)("div", {
                    className: C.contentContainer,
                    children: (0, r.jsxs)("div", {
                        className: C.headerContainer,
                        children: [(0, r.jsxs)("div", {
                            className: C.guildInfoContainer,
                            children: [(0, r.jsx)(o.default, {
                                guildId: N,
                                shouldShow: l,
                                onRequestClose: () => a(!1),
                                children: () => (0, r.jsxs)(u.Clickable, {
                                    className: C.flexContainerRow,
                                    onClick: s,
                                    children: [(0, r.jsx)(f.default, {
                                        guild: t,
                                        size: f.default.Sizes.MINI,
                                        className: C.guildIcon
                                    }), (0, r.jsxs)("div", {
                                        className: C.flexContainerRow,
                                        children: [(0, r.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            className: i(C.guildName, {
                                                [C.disabled]: null == s
                                            }),
                                            children: t.name
                                        }), (0, r.jsx)(d.default, {
                                            guild: t
                                        })]
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: C.rightJustifiedContent,
                                children: [6 === g && (0, r.jsx)("div", {
                                    className: C.featuredTag,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        className: C.featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, r.jsx)(h.default, {
                                    count: v,
                                    className: C.audienceCount
                                })]
                            })]
                        }), (0, r.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: C.topicText,
                            children: n.topic
                        }), (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            className: C.description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, r.jsx)(c.default, {
                            guild: t,
                            speakers: _,
                            speakerCount: S,
                            className: C.speakers
                        }), null != m && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: C.divider
                            }), (0, r.jsxs)("div", {
                                className: C.footer,
                                children: [(0, r.jsx)(E.default, {
                                    width: 20,
                                    height: 20,
                                    className: C.icon
                                }), (0, r.jsx)(u.Text, {
                                    color: "header-secondary",
                                    className: C.label,
                                    variant: "text-sm/normal",
                                    children: m
                                })]
                            })]
                        })]
                    })
                })
            }(l = a || (a = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"
        },
        444594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                s = n("697218"),
                i = n("627490"),
                u = n("987772"),
                o = n("564875"),
                c = n("625687"),
                d = n("701909"),
                f = n("387111"),
                E = n("567469"),
                h = n("998716"),
                C = n("911457"),
                g = n("49111"),
                _ = n("745049"),
                S = n("782340"),
                v = n("600329");

            function m(e) {
                let {
                    icon: t
                } = e;
                return (0, l.jsx)("div", {
                    className: v.iconContainer,
                    children: (0, l.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function N(e) {
                let {
                    icon: t,
                    text: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: v.listItemContainer,
                    children: [(0, l.jsx)("div", {
                        className: v.listItemIconContainer,
                        children: t
                    }), (0, l.jsx)(r.Text, {
                        className: v.listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function T(e) {
                var t;
                let {
                    guild: n,
                    channel: r,
                    stageData: i
                } = e, u = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []), o = {
                    id: "1337",
                    guild_id: n.id,
                    channel_id: r.id,
                    topic: i.topic,
                    description: i.description,
                    privacy_level: null !== (t = i.privacyLevel) && void 0 !== t ? t : _.GuildScheduledEventPrivacyLevel.PUBLIC
                }, c = (0, E.useStageParticipants)(r.id, h.StageChannelParticipantNamedIndex.SPEAKER), d = (0, E.useStageParticipantsCount)(r.id, h.StageChannelParticipantNamedIndex.AUDIENCE), g = c.slice(0, 5);
                return null == g.find(e => {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == u ? void 0 : u.id)
                }) && g.push({
                    user: u,
                    userNick: f.default.getName(n.id, r.id, u)
                }), (0, l.jsx)("div", {
                    className: v.previewCardContainer,
                    children: (0, l.jsx)("div", {
                        className: v.previewCard,
                        children: (0, l.jsx)(C.default, {
                            guild: n,
                            stageInstance: o,
                            showGuildPopout: !1,
                            setShowGuildPopout: () => {},
                            source: C.StageDiscoveryRecommendationSource.UNSPECIFIED,
                            speakers: g,
                            speakerCount: c.length,
                            audienceCount: Math.max(1337, d),
                            channelName: r.name
                        })
                    })
                })
            }

            function p(e) {
                let {
                    guild: t,
                    channel: n,
                    stageData: a,
                    headerId: s,
                    loading: f,
                    onNext: E,
                    onCancel: h,
                    onBack: C
                } = e;
                return null == t || null == n || null == a ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(T, {
                        guild: t,
                        channel: n,
                        stageData: a
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: v.container,
                        children: [(0, l.jsxs)("div", {
                            className: v.header,
                            children: [(0, l.jsx)(r.Heading, {
                                id: s,
                                className: v.title,
                                variant: "heading-xl/semibold",
                                children: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, l.jsx)(r.Text, {
                                className: v.subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, l.jsxs)("div", {
                            className: v.list,
                            children: [(0, l.jsx)(N, {
                                icon: (0, l.jsx)(m, {
                                    icon: i.default
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, l.jsx)(N, {
                                icon: (0, l.jsx)(m, {
                                    icon: o.default
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, l.jsx)(N, {
                                icon: (0, l.jsx)(m, {
                                    icon: u.default
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, l.jsx)(N, {
                                icon: (0, l.jsx)(c.default, {
                                    className: v.badgeIconBackground,
                                    foreground: v.badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: d.default.getArticleURL(g.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(r.ModalFooter, {
                        children: [(0, l.jsx)(r.Button, {
                            color: r.Button.Colors.GREEN,
                            onClick: E,
                            submitting: f,
                            children: S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, l.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            className: v.cancelButton,
                            onClick: h,
                            children: S.default.Messages.CANCEL
                        }), (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.LINK,
                            className: v.backButton,
                            onClick: C,
                            size: r.Button.Sizes.MIN,
                            children: S.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        813934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                r = n("866227"),
                s = n.n(r),
                i = n("446674"),
                u = n("77078"),
                o = n("679653"),
                c = n("776863"),
                d = n("822516"),
                f = n("124163"),
                E = n("953143"),
                h = n("269596"),
                C = n("27618"),
                g = n("697218"),
                _ = n("228427"),
                S = n("599110"),
                v = n("887143"),
                m = n("834052"),
                N = n("151642"),
                T = n("29846"),
                p = n("837979"),
                R = n("49111"),
                x = n("745049"),
                I = n("533613"),
                L = n("782340"),
                A = n("529555");

            function D(e) {
                let {
                    stageChannelsInGuild: t,
                    channel: n,
                    onSelectChannel: a
                } = e;
                return null == a ? null : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(u.FormItem, {
                        title: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: A.channelSelectionFormItem,
                        required: !0,
                        children: (0, l.jsx)(u.SearchableSelect, {
                            value: n.id,
                            options: t.map(e => ({
                                value: e.id,
                                label: (0, o.computeChannelName)(e, g.default, C.default, !0)
                            })),
                            onChange: e => {
                                let n = t.find(t => t.id === e);
                                null != n && a(n)
                            },
                            renderOptionPrefix: () => (0, l.jsx)(_.default, {
                                height: 24
                            })
                        })
                    })
                })
            }

            function y(e) {
                var t, n, r, C, g, _, y, M;
                let {
                    channel: j,
                    guild: O,
                    header: w,
                    error: k,
                    loading: G,
                    onSave: U,
                    onEventSave: V,
                    onClose: P,
                    onSelectChannel: B,
                    isEvent: b = !1,
                    defaultOptions: H,
                    isSlideReady: Y = !0
                } = e, F = a.useMemo(() => m.default.getStageInstanceByChannel(j.id), [j.id]), [W, Z] = a.useState(null !== (n = null !== (t = null == H ? void 0 : H.topic) && void 0 !== t ? t : null == F ? void 0 : F.topic) && void 0 !== n ? n : ""), [z, K] = a.useState(null !== (r = null == H ? void 0 : H.description) && void 0 !== r ? r : ""), [q] = a.useState(b), [X, J] = a.useState(null !== (C = null == H ? void 0 : H.schedule) && void 0 !== C ? C : {
                    startDate: (0, d.getInitialEventStartDate)()
                }), [Q, $] = a.useState(q && (null == H ? void 0 : H.schedule) != null), ee = (0, v.useCanSendStageStartNotification)(j), et = (0, v.useDefaultSendStartStageNotificationToggle)(j), en = null == F && ee && !q, [el, ea] = a.useState(en && et), er = (0, i.useStateFromStores)([h.default], () => h.default.hasHotspot(I.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), es = x.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [ei] = a.useState(null !== (_ = null !== (g = null == H ? void 0 : H.privacyLevel) && void 0 !== g ? g : null == F ? void 0 : F.privacy_level) && void 0 !== _ ? _ : es), [eu, eo] = a.useState(null == H ? void 0 : H.recurrenceRule), ec = (0, N.useStageBlockedUsersCount)(j.id), [ed, ef] = a.useState(!1), eE = (0, o.default)(j), eh = (0, c.useChannelsUserCanStartStageIn)(O), eC = null != B, eg = eh.length > 1;
                a.useEffect(() => {
                    S.default.track(R.AnalyticEvents.START_STAGE_OPENED, {
                        stage_instance_id: null == F ? void 0 : F.id,
                        can_start_public_stage: !1,
                        guild_id: j.guild_id
                    })
                }, []);
                let e_ = e => {
                    if (e.preventDefault(), ei === x.GuildScheduledEventPrivacyLevel.PUBLIC && W.length < 20 && !ed) {
                        ef(!0);
                        return
                    }
                    let t = {
                        topic: W,
                        privacyLevel: ei,
                        sendStartNotification: el
                    };
                    if (q) {
                        if (!Q) return;
                        null == V || V({
                            ...t,
                            schedule: X,
                            description: z,
                            entityType: x.GuildScheduledEventEntityTypes.STAGE_INSTANCE
                        });
                        return
                    }
                    null == U || U(t)
                };
                let {
                    color: eS,
                    text: ev
                } = (y = F, M = ei, q ? {
                    color: u.Button.Colors.BRAND,
                    text: L.default.Messages.SCHEDULE_EVENT
                } : M === x.GuildScheduledEventPrivacyLevel.PUBLIC && (null == y ? void 0 : y.privacy_level) !== x.GuildScheduledEventPrivacyLevel.PUBLIC ? {
                    color: u.Button.Colors.BRAND,
                    text: L.default.Messages.CONTINUE
                } : null == y ? {
                    color: u.Button.Colors.GREEN,
                    text: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                } : {
                    color: u.Button.Colors.BRAND,
                    text: L.default.Messages.SAVE_CHANGES
                }), em = a.useRef(null);
                a.useEffect(() => {
                    var e;
                    Y && (null === (e = em.current) || void 0 === e || e.focus())
                }, [Y]);
                let eN = Q && null != X.startDate && X.startDate >= s();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: A.modalContent,
                        children: [w, (0, l.jsx)("div", {
                            className: A.blockedUsersContainer,
                            children: null == F && ec > 0 && (0, l.jsx)(T.BlockedUsersNotice, {
                                channelId: j.id
                            })
                        }), (0, l.jsxs)("form", {
                            onSubmit: e_,
                            className: A.form,
                            children: [(0, l.jsxs)(u.FormItem, {
                                title: b ? L.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: A.topicFormItem,
                                required: !0,
                                children: [(0, l.jsx)(u.TextInput, {
                                    className: A.textInput,
                                    onChange: e => Z(e),
                                    placeholder: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: p.MAX_STAGE_TOPIC_LENGTH,
                                    value: W,
                                    autoComplete: "off",
                                    inputRef: em
                                }), ed && (0, l.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: A.warning,
                                    children: L.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != k ? (0, l.jsx)(u.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: A.warning,
                                    children: k.getAnyErrorMessage()
                                }) : null]
                            }), eC && eg ? (0, l.jsx)(D, {
                                stageChannelsInGuild: eh,
                                channel: j,
                                onSelectChannel: B
                            }) : null, q && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(E.default, {
                                    className: A.formItem,
                                    onScheduleChange: J,
                                    onRecurrenceChange: e => {
                                        let t = X.startDate;
                                        if (null == t) return;
                                        let n = (0, d.recurrenceOptionToRecurrenceRule)(e, t);
                                        eo(n)
                                    },
                                    schedule: X,
                                    recurrenceRule: eu,
                                    timeSelected: Q,
                                    onTimeChange: $
                                }), null != X.startDate && X.startDate < s() ? (0, l.jsx)(u.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: A.warning,
                                    children: L.default.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), b && (0, l.jsx)(u.FormItem, {
                                title: L.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: A.formItem,
                                children: (0, l.jsx)(u.TextArea, {
                                    placeholder: L.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: z,
                                    onChange: e => K(e),
                                    maxLength: x.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
                                })
                            }), en ? (0, l.jsx)(f.default, {
                                sendStartNotification: el,
                                setSendStartNotification: ea,
                                showNotificationNewBadge: er
                            }) : null, eC && !eg ? (0, l.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: A.channelSelection,
                                children: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: eE,
                                    stageHook: (e, t) => (0, l.jsx)("span", {
                                        className: A.channelName,
                                        children: j.name
                                    }, t)
                                })
                            }) : null]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            color: eS,
                            onClick: e_,
                            disabled: "" === W || null == ei || b && !eN,
                            submitting: G,
                            children: ev
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            className: A.cancelButton,
                            onClick: P,
                            children: L.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        435768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                s = n("77078"),
                i = n("305961"),
                u = n("476765"),
                o = n("228427"),
                c = n("834052"),
                d = n("119184"),
                f = n("444594"),
                E = n("813934"),
                h = n("767680"),
                C = n("249873"),
                g = n("837979"),
                _ = n("782340"),
                S = n("636843");

            function v(e) {
                let {
                    guild: t,
                    channel: n,
                    stageInstance: a,
                    headerId: r,
                    onClose: i,
                    loading: u,
                    error: c,
                    onSave: f,
                    defaultOptions: h,
                    isSlideReady: C
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: S.content,
                        children: [(0, l.jsx)(d.default, {
                            children: (0, l.jsx)("div", {
                                className: S.stageIconBackground,
                                children: (0, l.jsx)(o.default, {
                                    width: 32,
                                    height: 32,
                                    className: S.stageIcon
                                })
                            })
                        }), (0, l.jsx)(s.Heading, {
                            id: r,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: S.headerTitle,
                            children: null == a ? _.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : _.default.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: S.headerSubtitle,
                            children: null == a ? _.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : _.default.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, l.jsx)(E.default, {
                        guild: t,
                        channel: n,
                        onSave: f,
                        error: c,
                        loading: u,
                        onClose: i,
                        defaultOptions: h,
                        isSlideReady: C
                    })]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: o,
                    ...d
                } = e, E = (0, u.useUID)(), _ = (0, r.useStateFromStores)([i.default], () => i.default.getGuild(t.guild_id)), m = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
                    loading: N,
                    error: T,
                    onSave: p
                } = (0, h.default)(t, n), {
                    modalStep: R,
                    setModalStep: x,
                    readySlide: I,
                    handleSlideReady: L,
                    savedOptions: A,
                    handleSettingsSave: D,
                    handleDelayedSave: y
                } = (0, C.default)({
                    stageInstance: m,
                    defaultStep: g.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                    error: T,
                    onSave: p
                });
                return (a.useEffect(() => {
                    null == _ && n()
                }, [_, n]), null == _) ? null : (0, l.jsx)(s.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": E,
                    ...d,
                    size: s.ModalSize.SMALL,
                    children: (0, l.jsxs)(s.Slides, {
                        activeSlide: R,
                        width: 440,
                        onSlideReady: L,
                        children: [(0, l.jsx)(s.Slide, {
                            id: g.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                            children: (0, l.jsx)("div", {
                                className: S.slideContainer,
                                children: (0, l.jsx)(v, {
                                    guild: _,
                                    channel: t,
                                    stageInstance: m,
                                    headerId: E,
                                    onClose: n,
                                    loading: N,
                                    error: T,
                                    onSave: D,
                                    defaultOptions: A,
                                    isSlideReady: I === g.StartStageSteps.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, l.jsx)(s.Slide, {
                            id: g.StartStageSteps.PUBLIC_STAGE_PREVIEW,
                            children: (0, l.jsx)("div", {
                                className: S.slideContainer,
                                children: (0, l.jsx)(f.default, {
                                    headerId: E,
                                    guild: _,
                                    channel: t,
                                    stageData: A,
                                    loading: N,
                                    onNext: y,
                                    onCancel: n,
                                    onBack: () => x(g.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                                })
                            })
                        })]
                    })
                })
            }
        },
        767680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("884691"),
                a = n("851387"),
                r = n("987317"),
                s = n("448993"),
                i = n("597517"),
                u = n("887143"),
                o = n("244480"),
                c = n("834052"),
                d = n("533613");

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [f, E] = l.useState(!1),
                    [h, C] = l.useState(null),
                    g = l.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
                    _ = (0, u.useCanSendStageStartNotification)(e),
                    S = async l => {
                        let {
                            topic: u,
                            privacyLevel: c,
                            sendStartNotification: f
                        } = l;
                        if (null != e && "" !== u && null != c) {
                            E(!0), C(null), null != n && (a.default.selectGuild(n), r.default.selectVoiceChannel(e.id));
                            try {
                                let n;
                                null != g ? n = await o.editStage(e, u, c) : (n = await o.startStage(e, u, c, null != f && f), _ && i.hideHotspot(d.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
                            } catch (t) {
                                let e = new s.APIError(t);
                                C(e), E(!1)
                            }
                        }
                    };
                return {
                    loading: f,
                    error: h,
                    onSave: S
                }
            }
        },
        249873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var l = n("884691"),
                a = n("627445"),
                r = n.n(a),
                s = n("837979"),
                i = n("745049");

            function u(e) {
                let {
                    stageInstance: t,
                    defaultStep: n,
                    error: a,
                    onSave: u
                } = e, [o, c] = l.useState(n), [d, f] = l.useState(), [E, h] = l.useState(null);
                return l.useEffect(() => {
                    null != a && c(s.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                }, [a]), {
                    modalStep: o,
                    setModalStep: c,
                    readySlide: E,
                    handleSlideReady: function(e) {
                        return h(e)
                    },
                    savedOptions: d,
                    handleSettingsSave: function(e) {
                        if (f(e), e.privacyLevel === i.GuildScheduledEventPrivacyLevel.PUBLIC && (null == t ? void 0 : t.privacy_level) !== i.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            c(s.StartStageSteps.PUBLIC_STAGE_PREVIEW);
                            return
                        }
                        u(e)
                    },
                    handleDelayedSave: function() {
                        r(null != d, "Must have some saved options."), u(d)
                    }
                }
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("77078"),
                u = n("760607"),
                o = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: c,
                    ...d
                } = e, f = a.Children.only(t), E = (0, i.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(o.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(u.default, {
                        ...d,
                        className: s(c, o.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(o.childContainer, {
                            [o.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("90915"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("80300"),
                f = n("471671"),
                E = n("103603"),
                h = n("474293"),
                C = n("580357"),
                g = n("491088");
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
                S = {
                    [_.SMOL]: 16,
                    [_.MINI]: 20,
                    [_.SMALLER]: 24,
                    [_.SMALL]: 30,
                    [_.MEDIUM]: 40,
                    [_.LARGE]: 50,
                    [_.LARGER]: 64,
                    [_.XLARGE]: 100
                },
                v = {
                    [_.SMOL]: [10, 10, 8, 6, 6, 4],
                    [_.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [_.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [_.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [_.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [_.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [_.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [_.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class m extends a.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
                        className: g.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, l.jsx)(C.default, {
                        className: g.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: a,
                        showBadge: r,
                        active: i,
                        size: u,
                        style: o = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: E,
                        onClick: C,
                        to: _,
                        badgeStrokeColor: S,
                        animate: m,
                        tabIndex: N,
                        iconSrc: T,
                        "aria-hidden": p,
                        ...R
                    } = this.props, x = v[u], I = null != C ? c.Clickable : "div";
                    return (0, l.jsxs)(I, {
                        className: s(g.icon, a, (0, h.getClass)(g, "iconSize", u), {
                            [null !== (e = (0, h.getClass)(g, "iconActive", u)) && void 0 !== e ? e : ""]: i,
                            [g.iconInactive]: !i,
                            [g.noIcon]: null == n.icon
                        }),
                        "aria-hidden": p,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = x[n.acronym.length]) && void 0 !== t ? t : x[x.length - 1]) * d,
                            ...o
                        } : o,
                        onClick: null != _ || null == C ? void 0 : C,
                        tabIndex: N,
                        ...R,
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
                        children: e => a.cloneElement(a.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: a,
                        "aria-hidden": r
                    } = this.props;
                    return null != e ? (0, l.jsx)(i.Link, {
                        "aria-hidden": r,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: a,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let N = u.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: l,
                    style: a,
                    size: r
                } = e;
                return {
                    style: {
                        ...a,
                        backgroundImage: (0, E.makeCssUrlString)(null != l ? l : t.getIconURL(S[r], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, l.jsx)(m, {
                ...e
            })));
            class T extends a.PureComponent {
                render() {
                    return (0, l.jsx)(N, {
                        ...this.props
                    })
                }
            }
            T.Sizes = _, T.defaultProps = {
                size: _.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: o.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var p = T
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return u
                }
            });
            var l = n("995008"),
                a = n.n(l),
                r = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                i = () => (0, r.useLazyValue)(() => s()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(i())
                }
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("505088"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        backgroundColor: i,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != i ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: i
                        }) : null, (0, l.jsx)("path", {
                            fill: a,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon, void 0, {
                    size: 24
                })
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("772279"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: r,
                        foreground: i,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(u),
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, r.CompassIcon, void 0, {
                    size: 24
                })
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
            var a = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(i),
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
        272339: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("358917"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            children: (0, l.jsx)("path", {
                                d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                                className: r,
                                fill: a
                            })
                        })
                    })
                }, r.HeadphonesIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("504318"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: r,
                            fill: a
                        })
                    })
                }, r.PencilIcon, void 0, {
                    size: 16
                })
        },
        564875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("907572"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                fill: a,
                                className: r,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, l.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, r.FriendsIcon, void 0, {
                    size: 16
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("31745"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: r,
                        foreground: s
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, r.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("287083"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: a = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: a
                        })
                    })
                }, r.StageIcon, void 0, {
                    size: 32
                })
        },
        625687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 32,
                    height: n = 32,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 32 32",
                    children: [(0, l.jsx)("rect", {
                        width: "32",
                        height: "32",
                        rx: "16",
                        fill: r
                    }), (0, l.jsx)("path", {
                        d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                        className: s
                    })]
                })
            }
        },
        794818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return l
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return C
                },
                startLurking: function() {
                    return g
                },
                viewGuild: function() {
                    return _
                },
                makeDiscoverableGuild: function() {
                    return S
                },
                trackDiscoveryViewed: function() {
                    return v
                },
                trackDiscoveryExited: function() {
                    return m
                },
                trackSearchClosed: function() {
                    return N
                },
                trackSearchStarted: function() {
                    return T
                },
                trackTagSearchStarted: function() {
                    return p
                },
                trackSearchResultsViewed: function() {
                    return R
                },
                trackGuildJoinClicked: function() {
                    return x
                },
                getDiscoverableGuild: function() {
                    return I
                }
            }), n("222007");
            var l, a, r = n("522632"),
                s = n("872717"),
                i = n("851387"),
                u = n("267567"),
                o = n("393414"),
                c = n("239380"),
                d = n("525065"),
                f = n("305961"),
                E = n("599110"),
                h = n("49111");
            (a = l || (l = {})).SEARCH = "Search", a.RECOMMENDED = "Recommended", a.POPULAR = "Popular", a.RECOMMENDED_E3 = "Recommended - E3", a.HEADER = "Header";
            let C = ">200";
            async function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: l,
                        onSuccess: a,
                        joinSource: r,
                        loadId: s,
                        setsHistorySnapshot: d = !0
                    } = n,
                    E = (0, o.getHistory)();
                d && u.default.setHistorySnapshot({
                    ...E
                });
                let h = f.default.getGuild(e),
                    C = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != h && null != h.joinedAt ? (0, c.transitionToGuild)(e, C) : (await i.default.joinGuild(e, {
                    lurker: !0,
                    source: r,
                    loadId: s,
                    lurkLocation: null == t ? void 0 : t.page
                }), await i.default.transitionToGuildSync(e, {
                    ...C,
                    welcomeModalChannelId: l,
                    search: E.location.search
                }, l)), null == a || a()
            }
            async function _(e) {
                let t, {
                    loadId: n,
                    guildId: a,
                    index: r,
                    analyticsContext: s,
                    categoryId: i
                } = e;
                "string" == typeof s && s in l && (t = s);
                let u = {
                    page: h.AnalyticsPages.GUILD_DISCOVERY,
                    object: h.AnalyticsObjects.CARD,
                    section: t
                };
                await g(a, u, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: l,
                            analyticsContext: a,
                            categoryId: r
                        } = e, s = {
                            page: h.AnalyticsPages.GUILD_DISCOVERY,
                            section: a
                        };
                        "string" != typeof a && null != a.location && (s = a.location), E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: s,
                            guild_id: n,
                            load_id: t,
                            card_index: l,
                            location_object: h.AnalyticsObjects.CARD,
                            category_id: r
                        })
                    }({
                        loadId: n,
                        guildId: a,
                        index: r,
                        analyticsContext: s,
                        categoryId: i
                    })
            }

            function S(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function v(e) {
                let {
                    loadId: t,
                    gamesYouPlayGuilds: n,
                    allGuilds: l,
                    categoryId: a,
                    recommendationsSource: r = null
                } = e, s = n.length, i = l.length;
                E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: s + i,
                    num_guilds_recommended: s,
                    num_guilds_popular: i,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: a,
                    recommendations_source: r
                })
            }

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function N(e) {
                E.default.track(h.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                E.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function p(e, t, n, l) {
                E.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: h.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: l
                })
            }

            function R(e) {
                let {
                    loadId: t,
                    searchId: n,
                    query: l,
                    guildResults: a,
                    analyticsContext: r,
                    categoryId: s,
                    isTagSearch: i
                } = e;
                E.default.track(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: i ? h.SearchTypes.GUILD_DISCOVERY_TAG : h.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== a ? a.length : null,
                    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
                    query: l,
                    location: r.location,
                    category_id: s
                })
            }

            function x(e) {
                let t = u.default.getLoadId(e);
                E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: d.default.getMemberCount(e)
                })
            }
            async function I(e) {
                try {
                    var t, n;
                    let l = await s.default.get({
                            url: h.Endpoints.GUILD_DISCOVERY,
                            query: r.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == a) return a;
                    return S(a)
                } catch (e) {
                    return null
                }
            }
        },
        334572: function(e, t, n) {
            "use strict";

            function l(e, t) {
                let [, n] = e, [, l] = t;
                return n === l
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return l
                }
            }), n("222007")
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return a
                }
            }), n("808653");
            var l = n("159885");

            function a(e, t) {
                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
                let s = a.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
                    i = "".concat(t).concat(s),
                    u = e[i];
                if (null != u) return u
            }
        }
    }
]);