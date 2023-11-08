(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73214"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                r = n("817736"),
                u = n.n(r),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                h = n("845579"),
                f = n("901165"),
                m = n("62843"),
                p = n("315102"),
                I = n("402671"),
                E = n("866190"),
                _ = n("115279");
            class T extends i.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: s,
                            animated: i,
                            shouldAnimate: l,
                            isFocused: a,
                            isInteracting: r,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = _.EMOJI_SIZE_MAP[u];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === i && (!0 === l || o || !0 === r),
                            size: e
                        })
                    }
                    if (null != s) return I.default.getURL(s)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: r,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: h,
                        autoplay: f,
                        isInteracting: m,
                        ...p
                    } = this.props, I = this.getSrc();
                    return null == I || "" === I ? (0, s.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, i.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: I,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", r, {
                            jumboable: "jumbo" === u
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
            T.defaultProps = {
                isInteracting: !1
            };
            let F = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, s.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    l = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let s = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == s) return;
                            let i = s[1];
                            if (e.intersectionRatio >= .7) {
                                var l, a;
                                if (-1 !== t.indexOf(i)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function r(e) {
                    let s = u.findDOMNode(e);
                    l.unobserve(s);
                    let i = n.findIndex(t => {
                        let [n, s] = t;
                        return s === e
                    }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends i.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: i,
                                allowAnimatedEmoji: l,
                                ...a
                            } = this.props;
                        return (0, s.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, s.jsx)(e, {
                                ...a,
                                autoplay: i || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(T);

            function M(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, s.jsx)(F, {
                    ...e,
                    ...n,
                    isFocused: i
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("446674"),
                r = n("77078"),
                u = n("102985"),
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
            let p = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: a,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: p,
                    showStreamerModeTooltip: I
                } = e;
                return (0, s.jsxs)("div", {
                    className: l(f.info, d),
                    children: [(0, s.jsx)(r.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: I,
                        children: e => (0, s.jsx)("span", {
                            ...e,
                            className: l(f.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, s.jsx)("span", {
                        className: l(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != i && (0, s.jsx)(o.default, {
                        type: i,
                        className: l(f.infoSpacing, p),
                        verified: a
                    })]
                })
            };
            var I = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: l,
                    showAccountIdentifier: r,
                    overrideDiscriminator: o,
                    forcePomelo: h,
                    ...f
                } = e, I = (0, a.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), E = I || t || n.isNonUserBot(), _ = n.toString(), T = c.default.getName(n), F = l ? _ : null != i ? i : T, M = n.isPomelo() || h;
                if (M || F !== _) {
                    let e = F === _ && M && l ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : F,
                        t = r && e !== "@".concat(_) ? c.default.getUserTag(n) : void 0;
                    return (0, s.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: I && e !== T,
                        ...f
                    })
                }
                return (0, s.jsx)(d.default, {
                    name: F,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || F !== _ ? null : null != o ? o : n.discriminator,
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
                    return p
                },
                FeatureMessageConfirmationModal: function() {
                    return I
                },
                FeatureForumPostConfirmationModal: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                l = n("866227"),
                a = n.n(l),
                r = n("611221"),
                u = n("77078"),
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
                } = e, [r, d] = i.useState(null), [f, m] = i.useState(!1);
                return (0, s.jsxs)(u.ConfirmModal, {
                    header: n,
                    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: u.Button.Colors.RED,
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
                    children: [(0, s.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), null != r && (0, s.jsx)(u.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: r.message
                    })]
                })
            }

            function p(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: l,
                    children: r,
                    options: d,
                    ...m
                } = e, [p, I] = i.useState(null), [E, _] = i.useState(!1);
                return (0, s.jsxs)(u.ConfirmModal, {
                    header: l,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    loading: E,
                    onConfirm: async () => {
                        try {
                            let e = a().add(n, "second").toDate();
                            _(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw I(new o.default(e)), e
                        } finally {
                            _(!1)
                        }
                    },
                    ...m,
                    children: [null != p && (0, s.jsx)(u.Text, {
                        className: f.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: p.message
                    }), r]
                })
            }

            function I(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: i,
                    expiresSeconds: l,
                    timePeriod: a,
                    options: o,
                    ...c
                } = e;
                return (0, s.jsxs)(p, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: l,
                    options: o,
                    children: [(0, s.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: a
                        })
                    }), (0, s.jsx)("div", {
                        className: f.featureModalMessage,
                        children: (0, s.jsx)(d.default, {
                            channel: i,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                })
            }

            function E(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: i,
                    timePeriod: l,
                    options: a,
                    ...o
                } = e;
                return (0, s.jsx)(p, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: i,
                    options: a,
                    children: (0, s.jsx)(u.Text, {
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
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("65597"),
                l = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, i.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, s.jsx)(s.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("884691"),
                i = n("65597"),
                l = n("526887"),
                a = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = s.useContext(l.ConfettiCannonContext), t = (0, i.default)([a.default], () => a.default.getState()), n = s.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = s.useMemo(() => ({
                    fire: (s, i, l) => {
                        var a, r;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(u);
                        e(s, i, o, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : u.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("803182"),
                i = n("308503"),
                l = n("49111");

            function a(e) {
                let t = (0, s.matchPath)(null != e ? e : "", {
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
                let n = (0, s.matchPath)(null != e ? e : "", {
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
            var r = (0, i.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: s
                    } = a(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: s
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: s
                    } = a(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: s,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return r
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var s = n("299039"),
                i = n("648564"),
                l = n("782340");
            let a = e => s.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = a(t);
                        return (null == t || n) && e >= i.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= i.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let s = r(e, n);
                    return "0" === s ? l.default.Messages.SEE_THREAD : t.format({
                        count: s
                    })
                },
                o = (e, t) => u(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("79798"),
                r = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: i,
                        nameColor: r,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: h,
                        botClass: f,
                        botVerified: m = !1,
                        style: p,
                        useRemSizes: I = !1,
                        usernameIcon: E
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: p,
                        children: [(0, s.jsxs)("span", {
                            className: l(u.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [E, t]
                        }), null != n ? (0, s.jsxs)("span", {
                            className: null != h ? h : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, s.jsx)(a.default, {
                            type: d,
                            invertColor: i,
                            className: l(f, u.bot),
                            verified: m,
                            useRemSizes: I
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
                    return r
                },
                UID: function() {
                    return u
                }
            });
            var s = n("995008"),
                i = n.n(s),
                l = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                r = () => (0, l.useLazyValue)(() => a()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return i
                }
            });
            var s = n("884691");
            let i = s.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return i
                },
                markAnalyticsFeedItemUnseen: function() {
                    return l
                },
                flushAnalyticsFeedItems: function() {
                    return a
                }
            });
            var s = n("913144");

            function i(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function l(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t) {
                s.default.dispatch({
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
                    return s
                },
                ForceFlushType: function() {
                    return i
                },
                AnalyticsFeedItemSeenManager: function() {
                    return c
                }
            }), n("424973"), n("222007");
            var s, i, l, a, r = n("627445"),
                u = n.n(r),
                o = n("913144");
            (l = s || (s = {})).GUILD_HOME = "guild_home", l.FORUM_CHANNEL = "forum_channel", (a = i || (i = {}))[a.IMMEDIATE = 0] = "IMMEDIATE", a[a.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", a[a.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
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
                    for (let s of this.seenIntervals) {
                        if (null != s.endTimeMillis) {
                            t += s.endTimeMillis - s.startTimeMillis;
                            continue
                        }
                        if (e) {
                            let e = Date.now();
                            t += e - s.startTimeMillis, n.push({
                                startTimeMillis: e
                            });
                            continue
                        }
                        n.push(s)
                    }
                    return u(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
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
                            s = e.timestampMillis,
                            i = e.feedItemId;
                        if (n !== this._id) return;
                        if (this._paused) {
                            this._pausedFeedItemIds.add(i);
                            return
                        }
                        let l = this.getTrackedFeedItem(i),
                            a = l.maybeMarkSeen(s);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, i, a)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            s = e.timestampMillis,
                            i = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(i);
                        let l = this.getTrackedFeedItem(i),
                            a = l.maybeMarkUnseen(s);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, i, a), this.maybeFlushSeenItems()
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
            var s = n("597755"),
                i = n.n(s),
                l = n("815157"),
                a = n("271938"),
                r = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d();
                return o(e, !1, e === u ? "tar.gz" : null)
            }

            function f(e, t, n) {
                let s = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != s ? s : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != s ? s : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != s ? s : "https://www.discord.com"
                }
            }
        }
    }
]);