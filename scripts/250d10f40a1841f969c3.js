(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99435"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var i = n("37983"),
                s = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("817736"),
                r = n.n(u),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                h = n("845579"),
                f = n("901165"),
                m = n("62843"),
                I = n("315102"),
                E = n("402671"),
                p = n("866190"),
                _ = n("115279");
            class S extends s.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: i,
                            animated: s,
                            shouldAnimate: l,
                            isFocused: a,
                            isInteracting: u,
                            size: r = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = _.EMOJI_SIZE_MAP[r];
                        return I.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === s && (!0 === l || o || !0 === u),
                            size: e
                        })
                    }
                    if (null != i) return E.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: u,
                        size: r = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: h,
                        autoplay: f,
                        isInteracting: m,
                        ...I
                    } = this.props, E = this.getSrc();
                    return null == E || "" === E ? (0, i.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...I,
                        key: this.key,
                        src: E,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", u, {
                            jumboable: "jumbo" === r
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != h && "" !== h ? {
                            "data-id": h
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
            S.defaultProps = {
                isInteracting: !1
            };
            let T = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    l = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let s = i[1];
                            if (e.intersectionRatio >= .7) {
                                var l, a;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(s) : t.push(s), s.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(s); - 1 !== e && (t.splice(e, 1), s.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = r.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function u(e) {
                    let i = r.findDOMNode(e);
                    l.unobserve(i);
                    let s = n.findIndex(t => {
                        let [n, i] = t;
                        return i === e
                    }); - 1 !== s && (n.splice(s, 1), -1 !== (s = t.indexOf(e)) && (t.splice(s, 1), s < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends s.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : u(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && u(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: l,
                                ...a
                            } = this.props;
                        return (0, i.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...a,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(S);

            function v(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, p.useIsWindowFocused)();
                return (0, i.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: s
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                a = n("446674"),
                u = n("77078"),
                r = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                h = n("782340"),
                f = n("892802");

            function m(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let I = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: s,
                    botVerified: a,
                    discriminatorClass: r,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: I,
                    showStreamerModeTooltip: E
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(f.info, d),
                    children: [(0, i.jsx)(u.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: E,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(f.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(f.infoSpacing, r),
                        children: n
                    }) : void 0, null != s && (0, i.jsx)(o.default, {
                        type: s,
                        className: l(f.infoSpacing, I),
                        verified: a
                    })]
                })
            };
            var E = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: l,
                    showAccountIdentifier: u,
                    overrideDiscriminator: o,
                    forcePomelo: h,
                    ...f
                } = e, E = (0, a.useStateFromStores)([r.default], () => r.default.hidePersonalInformation), p = E || t || n.isNonUserBot(), _ = n.toString(), S = c.default.getName(n), T = l ? _ : null != s ? s : S, v = n.isPomelo() || h;
                if (v || T !== _) {
                    let e = T === _ && v && l ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : T,
                        t = u && e !== "@".concat(_) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(I, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: E && e !== S,
                        ...f
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: T,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: p || T !== _ ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        969715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnfeatureItemConfirmationModal: function() {
                    return m
                },
                FeatureItemConfirmationModal: function() {
                    return I
                },
                FeatureMessageConfirmationModal: function() {
                    return E
                },
                FeatureForumPostConfirmationModal: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                l = n("866227"),
                a = n.n(l),
                u = n("611221"),
                r = n("77078"),
                o = n("599417"),
                d = n("699473"),
                c = n("713810"),
                h = n("782340"),
                f = n("690187");

            function m(e) {
                let {
                    featureableItem: t,
                    header: n,
                    body: l,
                    ...a
                } = e, [u, d] = s.useState(null), [f, m] = s.useState(!1);
                return (0, i.jsxs)(r.ConfirmModal, {
                    header: n,
                    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: r.Button.Colors.RED,
                    cancelText: h.default.Messages.CANCEL,
                    loading: f,
                    onConfirm: async () => {
                        try {
                            m(!0), await (0, c.unfeatureGuildFeedItem)(t), m(!1)
                        } catch (e) {
                            throw d(new o.default(e)), m(!1), e
                        }
                    },
                    ...a,
                    children: [(0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), null != u && (0, i.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: u.message
                    })]
                })
            }

            function I(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: l,
                    children: u,
                    options: d,
                    ...m
                } = e, [I, E] = s.useState(null), [p, _] = s.useState(!1);
                return (0, i.jsxs)(r.ConfirmModal, {
                    header: l,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: r.Button.Colors.BRAND,
                    loading: p,
                    onConfirm: async () => {
                        try {
                            let e = a().add(n, "second").toDate();
                            _(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw E(new o.default(e)), e
                        } finally {
                            _(!1)
                        }
                    },
                    ...m,
                    children: [null != I && (0, i.jsx)(r.Text, {
                        className: f.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: I.message
                    }), u]
                })
            }

            function E(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: s,
                    expiresSeconds: l,
                    timePeriod: a,
                    options: o,
                    ...c
                } = e;
                return (0, i.jsxs)(I, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: u.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: l,
                    options: o,
                    children: [(0, i.jsx)(r.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: a
                        })
                    }), (0, i.jsx)("div", {
                        className: f.featureModalMessage,
                        children: (0, i.jsx)(d.default, {
                            channel: s,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                })
            }

            function p(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: s,
                    timePeriod: l,
                    options: a,
                    ...o
                } = e;
                return (0, i.jsx)(I, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: u.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: s,
                    options: a,
                    children: (0, i.jsx)(r.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: l
                        })
                    })
                })
            }
        },
        887446: function(e, t, n) {
            "use strict";
            let i, s, l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u = n("748820"),
                r = n("446674"),
                o = n("913144"),
                d = n("724210"),
                c = n("515631");
            let h = {};

            function f(e) {
                return {
                    guildId: e,
                    sessionId: (0, u.v4)()
                }
            }

            function m(e) {
                null != l && l.guildId === e ? (s = l, l = void 0) : s = f(e)
            }
            class I extends r.default.Store {
                getSavedScrollPosition(e) {
                    return h[e]
                }
                getHomeSessionId(e) {
                    return null != s && s.guildId === e ? s.sessionId : null != l && l.guildId === e ? l.sessionId : void 0
                }
                getHomeSessionSource(e) {
                    return null != a && a.guildId === e ? a.source : c.GuildHomeLandingSource.ORGANIC
                }
            }
            I.displayName = "GuildHomeStore";
            var E = new I(o.default, {
                CONNECTION_OPEN: function() {
                    h = {}
                },
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    delete h[t]
                },
                GUILD_HOME_SET_SCROLL_POSITION: function(e) {
                    let {
                        guildId: t,
                        scrollPosition: n
                    } = e;
                    h[t] = n
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
                        i = void 0, s = void 0, l = void 0, a = void 0;
                        return
                    }
                    let u = (0, d.buildGuildStaticChannelId)(n, t);
                    if (i === u || null != s && s.guildId === t) return !1;
                    m(t), i = u, null != a && a.guildId !== t && (a = void 0)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
                        l = void 0;
                        return
                    }
                    if (null != l && l.guildId === t) return !1;
                    l = f(t)
                },
                GUILD_HOME_SET_SOURCE: function(e) {
                    let {
                        source: t,
                        guildId: n
                    } = e;
                    a = {
                        guildId: n,
                        source: t
                    }
                },
                GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null != s && s.guildId === t) return !1;
                    m(t)
                },
                LOGOUT: function() {
                    s = void 0, l = void 0, a = void 0
                }
            })
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("65597"),
                l = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, s.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                s = n("65597"),
                l = n("526887"),
                a = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, s.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = i.useMemo(() => ({
                    fire: (i, s, l) => {
                        var a, u;
                        let r = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(r);
                        e(i, s, o, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : r.confettiCount) * (null !== (u = null == l ? void 0 : l.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("803182"),
                s = n("308503"),
                l = n("49111");

            function a(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var u = (0, s.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = a(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: i
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = a(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: i,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return u
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var i = n("299039"),
                s = n("648564"),
                l = n("782340");
            let a = e => i.default.compare("992549565104128000", e) > -1,
                u = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = a(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                r = (e, t, n) => {
                    let i = u(e, n);
                    return "0" === i ? l.default.Messages.SEE_THREAD : t.format({
                        count: i
                    })
                },
                o = (e, t) => r(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return u.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                a = n("79798"),
                u = n("988268"),
                r = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: s,
                        nameColor: u,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: h,
                        botClass: f,
                        botVerified: m = !1,
                        style: I,
                        useRemSizes: E = !1,
                        usernameIcon: p
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(o, r.nameTag),
                        style: I,
                        children: [(0, i.jsxs)("span", {
                            className: l(r.username, c),
                            style: null != u ? {
                                color: u
                            } : void 0,
                            children: [p, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != h ? h : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, i.jsx)(a.default, {
                            type: d,
                            invertColor: s,
                            className: l(f, r.bot),
                            verified: m,
                            useRemSizes: E
                        }) : null]
                    })
                }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return r
                }
            });
            var i = n("995008"),
                s = n.n(i),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return s(e)
                },
                u = () => (0, l.useLazyValue)(() => a()),
                r = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return s
                }
            });
            var i = n("884691");
            let s = i.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return s
                },
                markAnalyticsFeedItemUnseen: function() {
                    return l
                },
                flushAnalyticsFeedItems: function() {
                    return a
                }
            });
            var i = n("913144");

            function s(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function l(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        395118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsFeedTypes: function() {
                    return i
                },
                ForceFlushType: function() {
                    return s
                },
                AnalyticsFeedItemSeenManager: function() {
                    return c
                }
            }), n("424973"), n("222007");
            var i, s, l, a, u = n("627445"),
                r = n.n(u),
                o = n("913144");
            (l = i || (i = {})).GUILD_HOME = "guild_home", l.FORUM_CHANNEL = "forum_channel", (a = s || (s = {}))[a.IMMEDIATE = 0] = "IMMEDIATE", a[a.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", a[a.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
            class d {
                maybeMarkSeen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                        startTimeMillis: e
                    }), !0)
                }
                maybeMarkUnseen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                }
                isVisible() {
                    let e = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
                }
                computeSeenTimeDestructive(e) {
                    let t = 0,
                        n = [];
                    for (let i of this.seenIntervals) {
                        if (null != i.endTimeMillis) {
                            t += i.endTimeMillis - i.startTimeMillis;
                            continue
                        }
                        if (e) {
                            let e = Date.now();
                            t += e - i.startTimeMillis, n.push({
                                startTimeMillis: e
                            });
                            continue
                        }
                        n.push(i)
                    }
                    return r(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                }
                constructor() {
                    this.seenIntervals = []
                }
            }
            class c {
                maybeFlushSeenItems(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
                        await t(), e()
                    }) : new Promise(e => {
                        setTimeout(async () => {
                            await t(), e()
                        }, 100)
                    })
                }
                constructor({
                    id: e,
                    windowId: t,
                    isPaused: n
                }) {
                    this.initialize = () => {
                        var e;
                        o.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
                    }, this.terminate = () => {
                        var e;
                        o.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0)
                    }, this.handleFeedItemFlush = e => {
                        let {
                            id: t,
                            force: n
                        } = e;
                        this._id === t && this.maybeFlushSeenItems(n)
                    }, this.handleFeedItemSeen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        if (this._paused) {
                            this._pausedFeedItemIds.add(s);
                            return
                        }
                        let l = this.getTrackedFeedItem(s),
                            a = l.maybeMarkSeen(i);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, s, a)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(s);
                        let l = this.getTrackedFeedItem(s),
                            a = l.maybeMarkUnseen(i);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, s, a), this.maybeFlushSeenItems()
                    }, this.getTrackedFeedItem = e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e]), this.getVisibleFeedItemIds = () => {
                        let e = Object.keys(this.trackedFeedItems);
                        return new Set(e.filter(e => {
                            var t;
                            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                        }))
                    }, this.handleDrawerClose = () => {
                        this._isReactNavigationFocused && this.resume()
                    }, this.handleDrawerOpen = () => {
                        this._isReactNavigationFocused && this.pause()
                    }, this.handleAppStateUpdate = e => {
                        let {
                            state: t
                        } = e;
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
                    }, this.clearPausedFeedItemIds = () => {
                        this._pausedFeedItemIds = new Set, this._paused = !1
                    }, this.pause = () => {
                        if (this._paused) return;
                        let e = this.getVisibleFeedItemIds();
                        e.forEach(e => {
                            this.handleFeedItemUnseen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_UNSEEN"
                            })
                        }), this._paused = !0, this._pausedFeedItemIds = e
                    }, this.resume = () => {
                        this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_SEEN"
                            })
                        }), this.clearPausedFeedItemIds())
                    }, this.handleReactNavigationFocus = (e, t) => {
                        this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
                    }, this.handleWindowFocus = e => {
                        this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
                    }, this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
                }
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return o
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return h
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var i = n("597755"),
                s = n.n(i),
                l = n("815157"),
                a = n("271938"),
                u = n("49111");
            let r = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(u.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? r : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [r]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d();
                return o(e, !1, e === r ? "tar.gz" : null)
            }

            function f(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);