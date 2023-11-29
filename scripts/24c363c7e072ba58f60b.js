(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44181"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), l.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                l = RegExp("^[^" + s + "]*[" + i + "]"),
                a = RegExp("^[^" + i + "]*[" + s + "]")
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var s = 0, l = 0; s < i; s++) {
                    for (var a = e.charCodeAt(s); l < n;)
                        if (t.charCodeAt(l++) === a) continue e;
                    return !1
                }
                return !0
            }
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            }), n("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var i = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                r = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) l.call(t, n) && r(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) a.call(t, n) && r(e, n, t[n]);
                    return e
                };
            let o = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => o(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => o(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, i, s) => {
                    let l, a, r = u({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => u(u({}, t), e)
                    }, t);
                    (r.blacklist || r.whitelist) && console.warn("The ".concat(r.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        h = new Set;
                    try {
                        l = r.getStorage()
                    } catch (e) {}
                    if (!l) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(r.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, s);
                    !l.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(r.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let f = o(r.serialize),
                        m = () => {
                            let e;
                            let t = r.partialize(u({}, i()));
                            r.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = r.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), r.blacklist && r.blacklist.forEach(e => delete t[e]);
                            let n = f({
                                state: t,
                                version: r.version
                            }).then(e => l.setItem(r.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        E = s.setState;
                    s.setState = (e, t) => {
                        E(e, t), m()
                    };
                    let p = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), m()
                        }, i, s),
                        I = () => {
                            var e;
                            if (!l) return;
                            d = !1, c.forEach(e => e(i()));
                            let t = (null == (e = r.onRehydrateStorage) ? void 0 : e.call(r, i())) || void 0;
                            return o(l.getItem.bind(l))(r.name).then(e => {
                                if (e) return r.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === r.version) return e.state;
                                    if (r.migrate) return r.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(a = r.merge(e, null != (t = i()) ? t : p), !0), m()
                            }).then(() => {
                                null == t || t(a, void 0), d = !0, h.forEach(e => e(a))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            r = u(u({}, r), e), e.getStorage && (l = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == l ? void 0 : l.removeItem) || e.call(l, r.name)
                        },
                        rehydrate: () => I(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (h.add(e), () => {
                            h.delete(e)
                        })
                    }, I(), a || p
                }
        },
        890450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var i = n("37983"),
                s = n("884691"),
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
                E = n("315102"),
                p = n("402671"),
                I = n("866190"),
                g = n("115279");
            class _ extends s.PureComponent {
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
                            isInteracting: r,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = g.EMOJI_SIZE_MAP[u];
                        return E.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === s && (!0 === l || o || !0 === r),
                            size: e
                        })
                    }
                    if (null != i) return p.default.getURL(i)
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
                        ...E
                    } = this.props, p = this.getSrc();
                    return null == p || "" === p ? (0, i.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...E,
                        key: this.key,
                        src: p,
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
            _.defaultProps = {
                isInteracting: !1
            };
            let v = function(e) {
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
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function r(e) {
                    let i = u.findDOMNode(e);
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
                        n !== t && (n ? a(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
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
            }(_);

            function T(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, I.useIsWindowFocused)();
                return (0, i.jsx)(v, {
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
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
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
            let E = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: s,
                    botVerified: a,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: E,
                    showStreamerModeTooltip: p
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(f.info, d),
                    children: [(0, i.jsx)(r.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: p,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(f.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != s && (0, i.jsx)(o.default, {
                        type: s,
                        className: l(f.infoSpacing, E),
                        verified: a
                    })]
                })
            };
            var p = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: l,
                    showAccountIdentifier: r,
                    overrideDiscriminator: o,
                    forcePomelo: h,
                    ...f
                } = e, p = (0, a.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), I = p || t || n.isNonUserBot(), g = n.toString(), _ = c.default.getName(n), v = l ? g : null != s ? s : _, T = n.isPomelo() || h;
                if (T || v !== g) {
                    let e = v === g && T && l ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : v,
                        t = r && e !== "@".concat(g) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(E, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: p && e !== _,
                        ...f
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: v,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: I || v !== g ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        671306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenXIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L12 7.58579L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L13.4142 9L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071L12 10.4142L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L10.5858 9L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, i.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })]
                })
            }
        },
        388142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initiateChannelPrompts: function() {
                    return h
                },
                forcePrompt: function() {
                    return f
                },
                sendGamingStatsMessage: function() {
                    return m
                },
                updateGamingStats: function() {
                    return E
                }
            });
            var i = n("872717"),
                s = n("295426"),
                l = n("819689"),
                a = n("529805"),
                r = n("42203"),
                u = n("474643"),
                o = n("377253"),
                d = n("659500"),
                c = n("49111");

            function h(e) {
                i.default.post({
                    url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                i.default.post({
                    url: c.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }
            async function m(e, t, n) {
                await i.default.post({
                    url: c.Endpoints.SEND_GAMING_STATS(t),
                    body: {
                        message_reference: {
                            guild_id: e,
                            channel_id: t,
                            message_id: n
                        }
                    }
                }), p(t)
            }
            async function E(e) {
                let t = await i.default.patch({
                    url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = r.default.getChannel(e.channel_id);
                    null != n && ((0, a.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), p(n.id)), s.default.saveDraft(e.channel_id, t.text, u.DraftType.ChannelMessage)
                }
            }

            function p(e) {
                let t = o.default.getMessages(e);
                t.hasMoreAfter ? l.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return l
                },
                COMMON_CONFETTI_COLORS: function() {
                    return a
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return r
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return u
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var i = n("516555"),
                s = n("839491");
            let l = s,
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                r = [n("890450"), l, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                u = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: u
                    }
                },
                d = new i.Environment
        },
        969715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnfeatureItemConfirmationModal: function() {
                    return m
                },
                FeatureItemConfirmationModal: function() {
                    return E
                },
                FeatureMessageConfirmationModal: function() {
                    return p
                },
                FeatureForumPostConfirmationModal: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
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
                } = e, [r, d] = s.useState(null), [f, m] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
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
                    children: [(0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), null != r && (0, i.jsx)(u.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: r.message
                    })]
                })
            }

            function E(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: l,
                    children: r,
                    options: d,
                    ...m
                } = e, [E, p] = s.useState(null), [I, g] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: l,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    loading: I,
                    onConfirm: async () => {
                        try {
                            let e = a().add(n, "second").toDate();
                            g(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw p(new o.default(e)), e
                        } finally {
                            g(!1)
                        }
                    },
                    ...m,
                    children: [null != E && (0, i.jsx)(u.Text, {
                        className: f.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: E.message
                    }), r]
                })
            }

            function p(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: s,
                    expiresSeconds: l,
                    timePeriod: a,
                    options: o,
                    ...c
                } = e;
                return (0, i.jsxs)(E, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: l,
                    options: o,
                    children: [(0, i.jsx)(u.Text, {
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

            function I(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: s,
                    timePeriod: l,
                    options: a,
                    ...o
                } = e;
                return (0, i.jsx)(E, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: s,
                    options: a,
                    children: (0, i.jsx)(u.Text, {
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
                    return p
                }
            });
            var r = n("748820"),
                u = n("446674"),
                o = n("913144"),
                d = n("724210"),
                c = n("515631");
            let h = {};

            function f(e) {
                return {
                    guildId: e,
                    sessionId: (0, r.v4)()
                }
            }

            function m(e) {
                null != l && l.guildId === e ? (s = l, l = void 0) : s = f(e)
            }
            class E extends u.default.Store {
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
            E.displayName = "GuildHomeStore";
            var p = new E(o.default, {
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
                    let r = (0, d.buildGuildStaticChannelId)(n, t);
                    if (i === r || null != s && s.guildId === t) return !1;
                    m(t), i = r, null != a && a.guildId !== t && (a = void 0)
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
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("689988"),
                s = n("21121"),
                l = n("162771"),
                a = n("398604"),
                r = n("322224");
            let u = {},
                o = new Set,
                d = async e => {
                    let t = a.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!o.has(e)) try {
                            await r.default.getGuildEventsForCurrentUser(e), o.add(e)
                        } catch (e) {}
                    }
                };
            class c extends i.default {
                async getGuildEventUserCounts(e, t, n) {
                    let i = n.filter(n => null == u["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - u["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
                    if (!(Date.now() - u["".concat(e, "-").concat(t)] < 18e5) || 0 !== i.length) {
                        u["".concat(e, "-").concat(t)] = Date.now(), i.forEach(n => u["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                        try {
                            await r.default.fetchGuildEventUserCounts(e, t, i)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, n) {
                    return r.default.fetchUsersForGuildEvent(e, t, n)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    o.clear(), u = {};
                    let e = (0, s.isInMainTabsExperiment)(),
                        t = l.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = a.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    o.delete(t), delete u[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    o.delete(n), delete u[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, i = n.guild_scheduled_event, s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != i && null != s && d(s)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let n = a.default.getGuildScheduledEventsForGuild(t);
                    n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var h = new c
        },
        596512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("424973");
            var i = n("693566"),
                s = n.n(i),
                l = n("689988"),
                a = n("599110"),
                r = n("49111");
            class u extends l.default {
                handleMessageBecameVisible(e) {
                    let {
                        messageId: t
                    } = e;
                    if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
                    let n = this.recentViewTimes.get(t);
                    if (null != n && Date.now() - n < 6e4) return;
                    let i = setTimeout(() => {
                        delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
                    }, 1e3);
                    this.currentlyVisibleMessageTimers[t] = i
                }
                handleMessageLostVisibility(e) {
                    let t = this.currentlyVisibleMessageTimers[e];
                    null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
                }
                handleMessageListVisibilityChange(e) {
                    for (let t of e) this.handleMessageBecameVisible(t);
                    let t = new Set(e.map(e => e.messageId));
                    for (let e of Object.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e)
                }
                handleChannelSelect() {
                    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
                    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                }
                drainBuffer() {
                    for (let e of this.batchBuffer) a.default.track(r.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                        message_id: e.messageId,
                        channel_id: e.channelId,
                        guild_id: e.guildId,
                        source_channel_id: e.sourceChannelId,
                        source_guild_id: e.sourceGuildId
                    });
                    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                }
                bufferViewTrack(e) {
                    this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
                }
                constructor(...e) {
                    super(...e), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new s({
                        max: 500,
                        maxAge: 6e4
                    }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                        CHANNEL_SELECT: () => this.handleChannelSelect()
                    }
                }
            }
            var o = new u
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
                    return r
                }
            });
            var i = n("884691"),
                s = n("65597"),
                l = n("526887"),
                a = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, s.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = i.useMemo(() => ({
                    fire: (i, s, l) => {
                        var a, r;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(u);
                        e(i, s, o, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : u.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
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
            var r = (0, s.default)(e => ({
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
                    return r
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var i = n("299039"),
                s = n("648564"),
                l = n("782340");
            let a = e => i.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = a(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let i = r(e, n);
                    return "0" === i ? l.default.Messages.SEE_THREAD : t.format({
                        count: i
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
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                a = n("79798"),
                r = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: s,
                        nameColor: r,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: h,
                        botClass: f,
                        botVerified: m = !1,
                        style: E,
                        useRemSizes: p = !1,
                        usernameIcon: I
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: E,
                        children: [(0, i.jsxs)("span", {
                            className: l(u.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [I, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != h ? h : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, i.jsx)(a.default, {
                            type: d,
                            invertColor: s,
                            className: l(f, u.bot),
                            verified: m,
                            useRemSizes: p
                        }) : null]
                    })
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
        985622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("671306"),
                a = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: s
                        })
                    })
                }, l.ScreenXIcon, void 0, {
                    size: 24
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
            var i, s, l, a, r = n("627445"),
                u = n.n(r),
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
                r = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
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