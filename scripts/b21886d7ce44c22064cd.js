(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24002"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), a.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
            };
            var l = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                a = RegExp("^[^" + r + "]*[" + l + "]"),
                i = RegExp("^[^" + l + "]*[" + r + "]")
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                i = n.n(a),
                s = n("817736"),
                u = n.n(s),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                C = n("62843"),
                p = n("315102"),
                m = n("402671"),
                E = n("866190"),
                v = n("115279");
            class g extends r.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: l,
                            animated: r,
                            shouldAnimate: a,
                            isFocused: i,
                            isInteracting: s,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = v.EMOJI_SIZE_MAP[u];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: i && !0 === r && (!0 === a || o || !0 === s),
                            size: e
                        })
                    }
                    if (null != l) return m.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: a,
                        className: s,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: C,
                        ...p
                    } = this.props, m = this.getSrc();
                    return null == m || "" === m ? (0, l.jsx)("span", {
                        className: i("emoji", "emoji-text"),
                        children: n
                    }) : (a && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, r.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: m,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: i("emoji", s, {
                            jumboable: "jumbo" === u
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            g.defaultProps = {
                isInteracting: !1
            };
            let S = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    a = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let r = l[1];
                            if (e.intersectionRatio >= .7) {
                                var a, i;
                                if (-1 !== t.indexOf(r)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                n ? t.unshift(r) : t.push(r), r.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(r); - 1 !== e && (t.splice(e, 1), r.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function i(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), a.observe(t))
                }

                function s(e) {
                    let l = u.findDOMNode(e);
                    a.unobserve(l);
                    let r = n.findIndex(t => {
                        let [n, l] = t;
                        return l === e
                    }); - 1 !== r && (n.splice(r, 1), -1 !== (r = t.indexOf(e)) && (t.splice(r, 1), r < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends r.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && i(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? i(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: r,
                                allowAnimatedEmoji: a,
                                ...i
                            } = this.props;
                        return (0, l.jsx)(C.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...i,
                                autoplay: r || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                            })
                        })
                    }
                }
            }(g);

            function _(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    r = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, l.jsx)(S, {
                    ...e,
                    ...n,
                    isFocused: r
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                i = n("446674"),
                s = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("892802");

            function C(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let p = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: r,
                    botVerified: i,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: C,
                    botClass: p,
                    showStreamerModeTooltip: m
                } = e;
                return (0, l.jsxs)("div", {
                    className: a(h.info, d),
                    children: [(0, l.jsx)(s.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: m,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: a(h.username, c),
                            style: null != C ? {
                                color: C
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: a(h.infoSpacing, u),
                        children: n
                    }) : void 0, null != r && (0, l.jsx)(o.default, {
                        type: r,
                        className: a(h.infoSpacing, p),
                        verified: i
                    })]
                })
            };
            var m = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: r,
                    forceUsername: a,
                    showAccountIdentifier: s,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...h
                } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), E = m || t || n.isNonUserBot(), v = n.toString(), g = c.default.getName(n), S = a ? v : null != r ? r : g, _ = n.isPomelo() || f;
                if (_ || S !== v) {
                    let e = S === v && _ && a ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : S,
                        t = s && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: C(n),
                        showStreamerModeTooltip: m && e !== g,
                        ...h
                    })
                }
                return (0, l.jsx)(d.default, {
                    name: S,
                    botType: C(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || S !== v ? null : null != o ? o : n.discriminator,
                    ...h
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L1.29289 21.2929Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M3.16029 16.0466C3.3363 16.2904 3.68784 16.3122 3.9005 16.0995L4.62043 15.3796C4.79627 15.2037 4.81533 14.9258 4.67247 14.7223C3.99776 13.761 3.52594 12.8385 3.23686 12.1978C3.18003 12.0719 3.17994 11.9283 3.23676 11.8024C3.64531 10.897 4.41889 9.42841 5.61441 8.08307C7.12569 6.38242 9.19073 5 12 5C12.8215 5 13.5794 5.11821 14.2783 5.32803C14.4616 5.38304 14.6618 5.33819 14.7971 5.2029L15.6045 4.39555C15.8507 4.14933 15.7756 3.73364 15.4493 3.61191C14.4209 3.2282 13.2739 3 12 3C4.88713 3 1.72683 10.1146 1.1134 11.6925C1.035 11.8942 1.035 12.1058 1.1134 12.3075C1.35865 12.9383 2.01101 14.4542 3.16029 16.0466Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M8.17973 10.8108C8.04747 11.2362 8.53857 11.4614 8.85355 11.1464L11.1464 8.85355C11.4614 8.53857 11.2362 8.04747 10.8108 8.17973C9.55806 8.56927 8.56927 9.55807 8.17973 10.8108Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M12.8535 15.1464C12.5386 15.4614 12.7638 15.9525 13.1891 15.8203C14.4419 15.4307 15.4307 14.4419 15.8203 13.1892C15.9525 12.7638 15.4614 12.5386 15.1464 12.8536L12.8535 15.1464Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M9.72168 18.672C9.53843 18.617 9.3382 18.6618 9.20291 18.7971L8.39555 19.6045C8.14933 19.8507 8.22444 20.2664 8.55069 20.3881C9.57907 20.7718 10.7261 21 12 21C19.1129 21 22.2732 13.8854 22.8866 12.3075C22.965 12.1058 22.965 11.8942 22.8866 11.6925C22.6413 11.0617 21.989 9.54582 20.8397 7.95346C20.6637 7.70959 20.3122 7.68785 20.0995 7.90051L19.3796 8.62044C19.2037 8.79628 19.1847 9.07417 19.3275 9.27772C20.0022 10.239 20.474 11.1615 20.7631 11.8022C20.82 11.9281 20.82 12.0717 20.7632 12.1976C20.3547 13.103 19.5811 14.5716 18.3856 15.9169C16.8743 17.6176 14.8093 19 12 19C11.1785 19 10.4207 18.8818 9.72168 18.672Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M14.5 8C16.1569 8 17.5 6.65685 17.5 5C17.5 3.34315 16.1569 2 14.5 2C13.3114 2 12.2843 2.69119 11.7986 3.69355C11.5972 4.10932 11.8557 4.56448 12.2419 4.81816C13.3081 5.51868 14.0904 6.61601 14.3786 7.90013C14.3915 7.95754 14.4412 8 14.5 8Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M18.4373 17.2714C18.5906 17.6957 18.9807 18 19.4319 18H20.5C21.3284 18 22 17.3284 22 16.5C22 12.6961 19.1681 9.55362 15.4976 9.06577C14.9501 8.993 14.5104 9.45209 14.4013 9.99348C14.3406 10.2944 14.253 10.5855 14.1409 10.8641C13.9082 11.4429 14.0871 12.1554 14.6125 12.4916C16.3621 13.6108 17.7205 15.2876 18.4373 17.2714Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M12.5 9C12.5 10.6569 11.1569 12 9.5 12C7.84315 12 6.5 10.6569 6.5 9C6.5 7.34315 7.84315 6 9.5 6C11.1569 6 12.5 7.34315 12.5 9Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M2 20.5C2 16.3579 5.35786 13 9.5 13C13.6421 13 17 16.3579 17 20.5C17 21.3284 16.3284 22 15.5 22C15.4055 22 15.3242 21.9334 15.3038 21.841C15.0908 20.8768 14.7383 19.9711 14.42 19.2977C14.3117 19.0685 14 19.149 14 19.4026V21.5C14 21.7761 13.7761 22 13.5 22H5.5C5.22386 22 5 21.7761 5 21.5V19.4026C5 19.149 4.6883 19.0685 4.57996 19.2977C4.26174 19.9711 3.90923 20.8768 3.69619 21.841C3.6758 21.9334 3.59454 22 3.5 22C2.67157 22 2 21.3284 2 20.5Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })]
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M9.24787 3.34758C7.87224 2.45523 6 3.38448 6 4.95959V19.0404C6 20.6155 7.87224 21.5448 9.24787 20.6524L20.1013 13.612C21.2996 12.8347 21.2996 11.1653 20.1013 10.388L9.24787 3.34758Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var l = n("884691"),
                r = n("599110");
            let a = () => l.useContext(r.AnalyticsContext)
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var l = n("872717"),
                r = n("913144"),
                a = n("568734"),
                i = n("299285"),
                s = n("49111"),
                u = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: a,
                            teamId: i
                        } = e, u = await l.default.post({
                            url: s.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: a,
                                guild_id: n,
                                team_id: i
                            }
                        }), o = u.body;
                        return null != n && null != a && r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = await l.default.get({
                            url: s.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), i = a.body;
                        return r.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: i
                        }), i
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, a = await l.default.post({
                            url: s.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), i = a.body;
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: i
                        }), i
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let l = i.default.getApplication(e),
                                    r = (0, a.hasFlag)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, s.ApplicationFlags.EMBEDDED),
                                    u = r && (null == l ? void 0 : null === (t = l.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != l && !u) && !i.default.isFetchingApplication(e) && !i.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await l.default.get({
                                    url: s.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw r.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), l.default.get({
                            url: s.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (r.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("274870"),
                r = n("116320"),
                a = n("617559"),
                i = n("213523"),
                s = n("593195"),
                u = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                h = n("905999"),
                C = n("660074"),
                p = n("990745"),
                m = n("190986"),
                E = n("721618"),
                v = n("733160"),
                g = n("990864"),
                S = n("274652"),
                _ = n("922744"),
                I = n("155207"),
                L = n("745183"),
                T = n("368121"),
                x = n("944633"),
                N = n("228427"),
                R = n("959097"),
                y = n("656038"),
                M = n("49111");

            function A(e, t) {
                switch (e.type) {
                    case M.ChannelTypes.DM:
                        return r.default;
                    case M.ChannelTypes.GROUP_DM:
                        let n = (0, l.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : I.default;
                    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return S.default;
                        if ((0, y.default)(e)) return g.default;
                        else return v.default;
                    case M.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return i.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, y.default)(e)) return u.default;
                        else return s.default;
                    case M.ChannelTypes.GUILD_FORUM:
                        let A = e.isMediaChannel();
                        if (e.isNSFW()) return A ? E.default : h.default;
                        if ((0, y.default)(e)) return A ? m.default : f.default;
                        else return A ? p.default : c.default;
                    case M.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return E.default;
                        if ((0, y.default)(e)) return m.default;
                        else return p.default;
                    case M.ChannelTypes.GUILD_STAGE_VOICE:
                        return N.default;
                    case M.ChannelTypes.GUILD_VOICE:
                        if ((0, y.default)(e)) return x.default;
                        return T.default;
                    case M.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case M.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return _.default;
                        if (e.isForumPost()) return C.default;
                        else return R.default;
                    case M.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return _.default;
                        return L.default;
                    case M.ChannelTypes.GUILD_DIRECTORY:
                        return a.default;
                    default:
                        return null
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");
            let r = l.createContext(void 0);
            var a = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return C
                },
                canGuildUseRoleIcons: function() {
                    return p
                }
            }), n("781738");
            var l = n("867805"),
                r = n("407063"),
                a = n("315102"),
                i = n("773336"),
                s = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, i.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? l.default.getByName(l.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: l
                    } = e;
                    if (null == l) return;
                    if (l.startsWith("data:")) return l;
                    let i = a.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(l, ".").concat(i, "?").concat(c).concat(f) : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, l), "?").concat(c)
                },
                C = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                p = (e, t) => {
                    var n;
                    let l = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return l || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return h
                }
            });
            var l = n("693566"),
                r = n.n(l),
                a = n("872717"),
                i = n("913144"),
                s = n("851387"),
                u = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await a.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                u.default.shouldFetch(e) && await d(e)
            }
            let f = new r({
                maxAge: 1e4
            });

            function h(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var r, i;
                    return f.set(l, !0), r = e, i = t, a.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(r, i)
                    }).then(e => (s.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                r = n("913144");
            let a = {},
                i = {};
            class s extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? a[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            s.displayName = "GuildRoleMemberCountStore";
            var u = new s(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    a[t] = n, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, r = a[t];
                    if (null == r) return !1;
                    r[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, r = a[t];
                    if (null == r || null == r[n]) return !1;
                    let i = Object.keys(l).length;
                    r[n] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == a[t] && (a[t] = {}), a[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete a[t.id], delete i[t.id]
                }
            })
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                },
                PaymentPortalBody: function() {
                    return p
                },
                PaymentPortalFooter: function() {
                    return m
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                i = n.n(a),
                s = n("627445"),
                u = n.n(s),
                o = n("817736"),
                d = n.n(o),
                c = n("77078"),
                f = n("642906"),
                h = n("990893");

            function C(e) {
                var t, n, a, s, o, d;
                let {
                    header: C,
                    isLargeModal: p,
                    stepProps: m
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...l
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: l
                    }
                }(e), {
                    step: E,
                    stepConfigs: v,
                    setBodyNode: g,
                    setFooterNode: S,
                    setModalOverlayNode: _,
                    setReadySlideId: I
                } = (0, f.usePaymentContext)(), L = v.find(e => e.key === E);
                r.useEffect(() => {
                    _(null)
                }, [E, _]), u(null != L, "Unknown step for current payment flow.");
                let T = null !== (o = null == L ? void 0 : null === (t = L.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    x = null == L ? void 0 : null === (n = L.options) || void 0 === n ? void 0 : n.bodyClassName,
                    N = void 0 !== p && p ? h.sliderBodyLarge : null == L ? void 0 : null === (a = L.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (d = null == L ? void 0 : null === (s = L.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? C : null, L.renderStep(m), null == E || T ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: i(h.body, x),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: E,
                                centered: !1,
                                onSlideReady: e => I(e),
                                children: v.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: i(h.sliderBody, N),
                                        ref: e => g(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => S(e)
                        }), (0, l.jsx)("div", {
                            ref: e => _(e)
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function m(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("65597"),
                a = n("880731");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, r.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: n
                }));
                return i ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                r = n("65597"),
                a = n("526887"),
                i = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(a.ConfettiCannonContext), t = (0, r.default)([i.default], () => i.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = l.useMemo(() => ({
                    fire: (l, r, a) => {
                        var i, s;
                        let u = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            o = n(u);
                        e(l, r, o, (null !== (i = null == a ? void 0 : a.count) && void 0 !== i ? i : u.confettiCount) * (null !== (s = null == a ? void 0 : a.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return C
                },
                maybeFetchPremiumLikelihood: function() {
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return E
                }
            });
            var l = n("884691"),
                r = n("65597"),
                a = n("872717"),
                i = n("913144"),
                s = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                h = n("49111");
            let C = "nonSubscriber";
            async function p() {
                try {
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await a.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [C]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), l = c.default.shouldFetchPremiumLikelihood(), r = u.default.getCurrentUser();
                v(r, l, t, n)
            }

            function E(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), i = (0, r.default)([u.default], () => u.default.getCurrentUser());
                l.useEffect(() => {
                    v(i, a, t, n)
                }, [i, a, t, n])
            }

            function v(e, t, n, l) {
                null != e && !(0, d.isPremium)(e) && n && (t && p(), l && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                r = n("913144");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                i = a;
            class s extends l.default.Store {
                initialize() {
                    i = a
                }
                getState() {
                    return i
                }
                shouldFetchPremiumLikelihood() {
                    return !i.isFetching && !i.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var u = new s(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    i.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    i.premiumLikelihood = t, i.fetched = !0, i.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    i.isFetching = !1
                },
                LOGOUT: function() {
                    i.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("862205");
            let r = (0, l.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var a = r
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        707443: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return g
                },
                useActiveThreads: function() {
                    return S
                },
                useActiveGuildThreads: function() {
                    return _
                },
                useArchivedThreads: function() {
                    return I
                }
            }), n("222007");
            var l = n("884691"),
                r = n("917351"),
                a = n.n(r),
                i = n("446674"),
                s = n("404607"),
                u = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                h = n("689275"),
                C = n("821343"),
                p = n("755624"),
                m = n("263024"),
                E = n("487269"),
                v = n("843455");

            function g() {
                l.useEffect(() => {
                    (0, E.trackThreadBrowserTab)()
                }, [])
            }

            function S(e) {
                let t = function(e) {
                        let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => a(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(v.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return l.useMemo(() => a(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, r] = (0, i.useStateFromStores)([p.default], () => a.partition(t, e => p.default.hasJoined(e)), [t], i.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: r
                }
            }

            function _(e) {
                let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => a(h.default.getThreadsForGuild(e)).values().map(e => a.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(v.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return l.useMemo(() => a(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function I(e, t, n) {
                let {
                    canLoadMore: r,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, i.useStateFromStoresObject)([C.default], () => ({
                    loading: C.default.isLoading(e.id, t, n),
                    isInitialLoad: C.default.isInitialLoad,
                    canLoadMore: C.default.canLoadMore,
                    nextOffset: C.default.nextOffset
                })), h = l.useCallback(() => {
                    o.default.can(v.Permissions.READ_MESSAGE_HISTORY, e) && m.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                l.useEffect(() => {
                    f && h()
                }, [e.id, t, n, f]), l.useEffect(() => {
                    s.default.resort(e.id)
                }, [e.id]);
                let p = (0, i.useStateFromStoresArray)([C.default, u.default, o.default], () => a(C.default.getThreads(e.id, t, n)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && o.default.can(v.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: p,
                    canLoadMore: r,
                    loading: d || f,
                    loadMore: h
                }
            }
        },
        557872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                i = n.n(a),
                s = n("77078"),
                u = n("707443"),
                o = n("913979"),
                d = n("321797");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, a = (0, u.useActiveGuildThreads)(t), c = r.useCallback(e => {
                    let t = a[e.row];
                    return (0, l.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [a, n]);
                return (0, l.jsx)(s.List, {
                    className: i(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [a.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
        },
        469755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("945330"),
                i = n("959097"),
                s = n("557872"),
                u = n("967241"),
                o = n("648564"),
                d = n("782340"),
                c = n("728360");

            function f(e) {
                let {
                    guildId: t,
                    onClose: n,
                    transitionState: f
                } = e;
                return (0, l.jsx)(r.ModalRoot, {
                    className: c.modal,
                    transitionState: f,
                    "aria-label": d.default.Messages.THREADS,
                    size: r.ModalSize.DYNAMIC,
                    children: (0, l.jsxs)("div", {
                        className: c.container,
                        children: [(0, l.jsxs)("div", {
                            className: c.header,
                            children: [(0, l.jsx)(i.default, {
                                className: c.threadIcon
                            }), (0, l.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                className: c.title,
                                children: d.default.Messages.ALL_ACTIVE_THREADS
                            }), (0, l.jsx)("div", {
                                className: c.spacer
                            }), (0, l.jsx)(r.Clickable, {
                                className: c.closeIcon,
                                onClick: n,
                                "aria-label": d.default.Messages.CLOSE,
                                children: (0, l.jsx)(a.default, {})
                            })]
                        }), (0, l.jsx)(s.default, {
                            guildId: t,
                            goToThread: (e, t) => {
                                n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
                            }
                        })]
                    })
                })
            }
        },
        913979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("446674"),
                i = n("77078"),
                s = n("272030"),
                u = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                h = n("442184"),
                C = n("648564"),
                p = n("140407"),
                m = r.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: r,
                        showChannelName: o
                    } = e, d = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
                    return (0, l.jsxs)(i.Clickable, {
                        className: p.container,
                        onClick: e => r(d, e.shiftKey),
                        onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: p.left,
                            children: [(0, l.jsxs)(i.Heading, {
                                className: p.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, l.jsx)("span", {
                                    className: p.threadName,
                                    children: d.name
                                }), o && null != c ? (0, l.jsx)("span", {
                                    className: p.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(d)]
                        }), (0, l.jsx)(E, {
                            channel: d
                        })]
                    })
                });

            function E(e) {
                let {
                    channel: t
                } = e, n = (0, a.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
                }), i = (0, a.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
                }), s = (0, a.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
                return (r.useEffect(() => {
                    n.filter((e, t) => null == s[t]).forEach(e => {
                        o.default.requestMember(t.guild_id, e)
                    })
                }, []), 0 === n.length) ? null : (0, l.jsx)(c.default, {
                    className: p.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: t.guild_id,
                    users: s,
                    count: i,
                    max: C.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("446674"),
                i = n("77078"),
                s = n("308289"),
                u = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                h = n("660478"),
                C = n("27618"),
                p = n("697218"),
                m = n("959097"),
                E = n("93427"),
                v = n("299039"),
                g = n("158998"),
                S = n("610730"),
                _ = n("487269"),
                I = n("719347"),
                L = n("782340"),
                T = n("140407");

            function x(e) {
                return e.isActiveThread() ? (0, l.jsx)(N, {
                    channel: e
                }) : (0, l.jsx)(M, {
                    channel: e
                })
            }

            function N(e) {
                let {
                    channel: t
                } = e, n = (0, a.useStateFromStores)([S.default], () => S.default.getMostRecentMessage(t.id));
                return null == n ? (0, l.jsx)(R, {
                    channel: t
                }) : (0, l.jsx)(y, {
                    channel: t,
                    message: n
                })
            }

            function R(e) {
                let {
                    channel: t
                } = e, n = (0, _.useLastMessageTimestamp)(t);
                return (0, l.jsxs)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [L.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, _.getTimestampString)(n)]
                })
            }

            function y(e) {
                let {
                    channel: t,
                    message: n
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [t.guild_id]: [n.author.id]
                });
                let o = (0, a.useStateFromStores)([p.default], () => {
                        var e;
                        return null !== (e = p.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
                    }),
                    {
                        nick: f,
                        colorString: h
                    } = (0, c.default)(n),
                    m = (0, a.useStateFromStores)([C.default], () => C.default.isBlocked(n.author.id)),
                    g = r.useMemo(() => {
                        let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: r,
                                icon: a
                            } = (0, E.renderSingleLineMessage)(n, e, m, T.messageContent, {
                                iconClass: T.messageContentIcon,
                                iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, l.jsxs)(l.Fragment, {
                            children: [null != r ? r : (0, l.jsx)("span", {
                                children: t
                            }), a]
                        })
                    }, [n, m]);
                return (0, l.jsxs)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, l.jsx)(s.default, {
                        className: T.avatar,
                        user: o,
                        size: i.AvatarSizes.SIZE_16
                    }), (0, l.jsx)(i.NameWithRole, {
                        name: f,
                        color: h,
                        className: T.authorName
                    }), ":\xa0", g, "\xa0 • \xa0", (0, _.getTimestampString)(v.default.extractTimestamp(n.id))]
                })
            }

            function M(e) {
                var t, n, r;
                let {
                    channel: d
                } = e, c = (0, a.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), C = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : v.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let E = (0, a.useStateFromStores)([p.default], () => p.default.getUser(d.ownerId)),
                    S = (0, a.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    I = null !== (r = (0, o.default)(d)) && void 0 !== r ? r : m.default;
                return (0, l.jsx)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == E ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: T.noAvatarIcon,
                            children: (0, l.jsx)(I, {
                                width: 10,
                                height: 10
                            })
                        }), L.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(C)
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.default, {
                            className: T.avatar,
                            user: E,
                            size: i.AvatarSizes.SIZE_16
                        }), L.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, r;
                                return (0, l.jsx)(i.NameWithRole, {
                                    className: T.startedByName,
                                    color: null !== (n = null == S ? void 0 : S.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (r = null == S ? void 0 : S.nick) && void 0 !== r ? r : g.default.getName(E)
                                }, t)
                            }
                        }), (0, l.jsx)("span", {
                            className: T.bullet,
                            children: "•"
                        }), L.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(C)
                        })]
                    })
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return I
                },
                openThreadSidebarForCreating: function() {
                    return L
                },
                closeThreadSidebar: function() {
                    return T
                },
                closeAndClearThreadSidebar: function() {
                    return x
                }
            });
            var l = n("627445"),
                r = n.n(l),
                a = n("917351"),
                i = n.n(a),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                C = n("845579"),
                p = n("474643"),
                m = n("18494"),
                E = n("800762"),
                v = n("659500"),
                g = n("648564"),
                S = n("49111"),
                _ = n("724210");

            function I(e, t, n) {
                o.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE);
                let l = !i.isEmpty(E.default.getVoiceStatesForChannel(e.id));
                if (t || !C.UseThreadSidebar.getSetting() || __OVERLAY__ || l) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let a = m.default.getChannelId();
                e.parent_id !== a && !(0, _.isGuildHomeChannel)(a) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(S.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, _.isGuildHomeChannel)(a) ? _.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? g.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    v.ComponentDispatch.dispatch(S.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function L(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(S.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE), m.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let l = p.default.getDraft(e.id, p.DraftType.FirstThreadMessage);
                if ("" === l) {
                    let t = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, p.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function T(e, t) {
                (0, f.transitionTo)(S.Routes.CHANNEL(e, (0, _.isGuildHomeChannel)(t) ? _.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function x(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.ThreadSettings
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("77078"),
                i = n("393414"),
                s = n("49111"),
                u = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, h = r.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, i.transitionTo)(n), null == o || o()), null == d || d(e))
                    }, [n, d, o]), C = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, i.transitionTo)(n), null == o || o())
                    }, [n, o]), p = (0, l.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: C,
                        onKeyPress: h,
                        ...f,
                        children: u
                    });
                    return (0, l.jsx)(a.FocusRing, {
                        ...c,
                        children: p
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return s.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                i = n("79798"),
                s = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: r,
                        nameColor: s,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: C = !1,
                        style: p,
                        useRemSizes: m = !1,
                        usernameIcon: E
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: a(o, u.nameTag),
                        style: p,
                        children: [(0, l.jsxs)("span", {
                            className: a(u.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [E, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, l.jsx)(i.default, {
                            type: d,
                            invertColor: r,
                            className: a(h, u.bot),
                            verified: C,
                            useRemSizes: m
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, a = n ? 1 : t;
                return (0, l.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
                        height: a,
                        minHeight: a
                    }
                })
            }
            n("884691")
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return r
                }
            });
            var l = n("884691");
            let r = l.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("926001"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("75196");

            function a(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = "currentColor",
                    className: i,
                    foreground: s,
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    className: i,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        className: s,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("469563"),
                i = n("163725"),
                s = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foregroundColor: i = r.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: o,
                        ...d
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: i,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, i.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("578478"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, a.ImageIcon, void 0, {
                    size: 24
                })
        },
        922744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("782926"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z"
                        })]
                    })
                }, a.ThreadIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("811513"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("876726"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: a,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, a.PlayIcon, void 0, {
                    size: 16
                })
        },
        745183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("782926"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z"
                        })]
                    })
                }, a.ThreadIcon, void 0, {
                    size: 24
                })
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return v
                },
                default: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                i = n.n(a),
                s = n("627445"),
                u = n.n(s),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                C = n("368121"),
                p = n("523096"),
                m = n("587974"),
                E = n("494101");
            let v = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function g(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class S extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: a
                    } = this.props, i = [], s = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(s), o = 0;
                    for (; o < s && o < e.length;) {
                        var d;
                        let t = null == u && null == a && o === e.length - 1,
                            s = n(e[o], t, o);
                        i.push(t ? (0, l.jsx)("div", {
                            className: E.avatarContainer,
                            children: s
                        }, g(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, l.jsx)(m.default, {
                            className: E.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: m.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, g(e[o], o))), o++
                    }
                    return null != a ? i.push(a) : null != u && i.push(u), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: i,
                        users: s
                    } = this.props, u = Math.min(e, s.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, l.jsx)(r.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, l.jsx)(r.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < s.length) {
                            let e = Math.min(s.length - u, 99);
                            return (0, l.jsx)(r.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, l.jsx)(C.default, {
                        foreground: E.foreground,
                        className: E.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: a,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, C = n.find(e => null != e && e.id === f), p = s && null == h.default.getUser(f);
                    return (0, l.jsx)(o.Popout, {
                        position: "right",
                        preload: null == C ? void 0 : () => (0, d.default)(C.id, C.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === a && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, l.jsx)(c.default, {
                            ...this.props,
                            user: p && null != C ? C : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, l.jsxs)("div", {
                            className: i(e, E.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.SIZE_24;
                                switch (e) {
                                    case v.SIZE_16:
                                        return E.size16;
                                    case v.SIZE_24:
                                        return E.size24;
                                    case v.SIZE_32:
                                        return E.size32;
                                    case v.SIZE_56:
                                        return E.size56;
                                    default:
                                        return E.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: a,
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, l.jsx)("div", {
                                className: E.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % p.default.DEFAULT_AVATARS.length,
                                    t = p.default.DEFAULT_AVATARS[e];
                                return (0, l.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: E.avatar
                                })
                            }
                        }
                        let s = (0, l.jsx)("img", {
                            src: e.getAvatarURL(a, i),
                            alt: e.username,
                            className: E.avatar
                        }, e.id);
                        return r ? (0, l.jsx)(o.Clickable, {
                            className: E.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            S.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, l.jsx)("div", {
                        className: E.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: v.SIZE_24
            };
            var _ = S
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return i
                },
                copy: function() {
                    return s
                }
            }), n("70102");
            var l = n("281071"),
                r = n("773336"),
                a = n("50885");
            let i = (() => {
                if (r.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!i && (r.isPlatformEmbedded ? (a.default.copy(e), !0) : l.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var l = n("884691"),
                r = n("446674"),
                a = n("244201"),
                i = n("471671");

            function s() {
                let {
                    windowId: e
                } = l.useContext(a.default);
                return (0, r.useStateFromStores)([i.default], () => i.default.isFocused(e), [e])
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    r = document.createElement("textarea");
                r.value = e, r.contentEditable = "true", r.style.visibility = "none", t.appendChild(r), n.selectNodeContents(r), null == l || l.removeAllRanges(), null == l || l.addRange(n), r.focus(), r.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(r), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            }), n("70102")
        }
    }
]);