(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17016"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var s = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + i + "]*[" + s + "]"),
                l = RegExp("^[^" + s + "]*[" + i + "]")
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    s = e.length;
                if (s > n) return !1;
                if (s === n) return e === t;
                e: for (var i = 0, r = 0; i < s; i++) {
                    for (var l = e.charCodeAt(i); r < n;)
                        if (t.charCodeAt(r++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        766665: function(e, t, n) {
            var s = n("424498");
            e.exports = function(e, t, n) {
                "__proto__" == t && s ? s(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
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
            var s = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                a = (e, t, n) => t in e ? s(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) r.call(t, n) && a(e, n, t[n]);
                    if (i)
                        for (var n of i(t)) l.call(t, n) && a(e, n, t[n]);
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
                d = (e, t) => (n, s, i) => {
                    let r, l, a = u({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => u(u({}, t), e)
                    }, t);
                    (a.blacklist || a.whitelist) && console.warn("The ".concat(a.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        h = new Set;
                    try {
                        r = a.getStorage()
                    } catch (e) {}
                    if (!r) return e(function() {
                        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(a.name, "', the given storage is currently unavailable.")), n(...t)
                    }, s, i);
                    !r.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(a.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let f = o(a.serialize),
                        m = () => {
                            let e;
                            let t = a.partialize(u({}, s()));
                            a.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = a.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), a.blacklist && a.blacklist.forEach(e => delete t[e]);
                            let n = f({
                                state: t,
                                version: a.version
                            }).then(e => r.setItem(a.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        p = i.setState;
                    i.setState = (e, t) => {
                        p(e, t), m()
                    };
                    let I = e(function() {
                            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                            n(...t), m()
                        }, s, i),
                        v = () => {
                            var e;
                            if (!r) return;
                            d = !1, c.forEach(e => e(s()));
                            let t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, s())) || void 0;
                            return o(r.getItem.bind(r))(a.name).then(e => {
                                if (e) return a.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === a.version) return e.state;
                                    if (a.migrate) return a.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = a.merge(e, null != (t = s()) ? t : I), !0), m()
                            }).then(() => {
                                null == t || t(l, void 0), d = !0, h.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            a = u(u({}, a), e), e.getStorage && (r = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == r ? void 0 : r.removeItem) || e.call(r, a.name)
                        },
                        rehydrate: () => v(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (h.add(e), () => {
                            h.delete(e)
                        })
                    }, v(), l || I
                }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("817736"),
                u = n.n(a),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                h = n("845579"),
                f = n("901165"),
                m = n("62843"),
                p = n("315102"),
                I = n("402671"),
                v = n("866190"),
                E = n("115279");
            class _ extends i.PureComponent {
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
                            shouldAnimate: r,
                            isFocused: l,
                            isInteracting: a,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = E.EMOJI_SIZE_MAP[u];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: l && !0 === i && (!0 === r || o || !0 === a),
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
                        animated: r,
                        className: a,
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
                        className: l("emoji", "emoji-text"),
                        children: n
                    }) : (r && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, i.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: I,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: l("emoji", a, {
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
            let g = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, s.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    r = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let s = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == s) return;
                            let i = s[1];
                            if (e.intersectionRatio >= .7) {
                                var r, l;
                                if (-1 !== t.indexOf(i)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
                                n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function l(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), r.observe(t))
                }

                function a(e) {
                    let s = u.findDOMNode(e);
                    r.unobserve(s);
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
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? l(this) : a(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: i,
                                allowAnimatedEmoji: r,
                                ...l
                            } = this.props;
                        return (0, s.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, s.jsx)(e, {
                                ...l,
                                autoplay: i || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && r
                            })
                        })
                    }
                }
            }(_);

            function S(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, v.useIsWindowFocused)();
                return (0, s.jsx)(g, {
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
                r = n.n(i),
                l = n("446674"),
                a = n("77078"),
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
                    botVerified: l,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: p,
                    showStreamerModeTooltip: I
                } = e;
                return (0, s.jsxs)("div", {
                    className: r(f.info, d),
                    children: [(0, s.jsx)(a.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: I,
                        children: e => (0, s.jsx)("span", {
                            ...e,
                            className: r(f.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, s.jsx)("span", {
                        className: r(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != i && (0, s.jsx)(o.default, {
                        type: i,
                        className: r(f.infoSpacing, p),
                        verified: l
                    })]
                })
            };
            var I = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: r,
                    showAccountIdentifier: a,
                    overrideDiscriminator: o,
                    forcePomelo: h,
                    ...f
                } = e, I = (0, l.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), v = I || t || n.isNonUserBot(), E = n.toString(), _ = c.default.getName(n), g = r ? E : null != i ? i : _, S = n.isPomelo() || h;
                if (S || g !== E) {
                    let e = g === E && S && r ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : g,
                        t = a && e !== "@".concat(E) ? c.default.getUserTag(n) : void 0;
                    return (0, s.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: I && e !== _,
                        ...f
                    })
                }
                return (0, s.jsx)(d.default, {
                    name: g,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: v || g !== E ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: a
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("884691");

            function i(e, t) {
                let n = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
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
                    return v
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                r = n("866227"),
                l = n.n(r),
                a = n("611221"),
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
                    body: r,
                    ...l
                } = e, [a, d] = i.useState(null), [f, m] = i.useState(!1);
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
                    ...l,
                    children: [(0, s.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: r
                    }), null != a && (0, s.jsx)(u.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: a.message
                    })]
                })
            }

            function p(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: r,
                    children: a,
                    options: d,
                    ...m
                } = e, [p, I] = i.useState(null), [v, E] = i.useState(!1);
                return (0, s.jsxs)(u.ConfirmModal, {
                    header: r,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    loading: v,
                    onConfirm: async () => {
                        try {
                            let e = l().add(n, "second").toDate();
                            E(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw I(new o.default(e)), e
                        } finally {
                            E(!1)
                        }
                    },
                    ...m,
                    children: [null != p && (0, s.jsx)(u.Text, {
                        className: f.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: p.message
                    }), a]
                })
            }

            function I(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: i,
                    expiresSeconds: r,
                    timePeriod: l,
                    options: o,
                    ...c
                } = e;
                return (0, s.jsxs)(p, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: a.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: r,
                    options: o,
                    children: [(0, s.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: l
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

            function v(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: i,
                    timePeriod: r,
                    options: l,
                    ...o
                } = e;
                return (0, s.jsx)(p, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: a.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: i,
                    options: l,
                    children: (0, s.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: r
                        })
                    })
                })
            }
        },
        887446: function(e, t, n) {
            "use strict";
            let s, i, r, l;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("748820"),
                u = n("446674"),
                o = n("913144"),
                d = n("724210"),
                c = n("515631");
            let h = {};

            function f(e) {
                return {
                    guildId: e,
                    sessionId: (0, a.v4)()
                }
            }

            function m(e) {
                null != r && r.guildId === e ? (i = r, r = void 0) : i = f(e)
            }
            class p extends u.default.Store {
                getSavedScrollPosition(e) {
                    return h[e]
                }
                getHomeSessionId(e) {
                    return null != i && i.guildId === e ? i.sessionId : null != r && r.guildId === e ? r.sessionId : void 0
                }
                getHomeSessionSource(e) {
                    return null != l && l.guildId === e ? l.source : c.GuildHomeLandingSource.ORGANIC
                }
            }
            p.displayName = "GuildHomeStore";
            var I = new p(o.default, {
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
                        s = void 0, i = void 0, r = void 0, l = void 0;
                        return
                    }
                    let a = (0, d.buildGuildStaticChannelId)(n, t);
                    if (s === a || null != i && i.guildId === t) return !1;
                    m(t), s = a, null != l && l.guildId !== t && (l = void 0)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
                        r = void 0;
                        return
                    }
                    if (null != r && r.guildId === t) return !1;
                    r = f(t)
                },
                GUILD_HOME_SET_SOURCE: function(e) {
                    let {
                        source: t,
                        guildId: n
                    } = e;
                    l = {
                        guildId: n,
                        source: t
                    }
                },
                GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null != i && i.guildId === t) return !1;
                    m(t)
                },
                LOGOUT: function() {
                    i = void 0, r = void 0, l = void 0
                }
            })
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var s = n("913144"),
                i = n("599110"),
                r = n("49111");

            function l(e) {
                i.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("446674"),
                i = n("913144"),
                r = n("197881"),
                l = n("492397");
            let a = new Set,
                u = {};
            class o extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(l.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new o(i.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
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
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return r.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var i = n("597517");
            n.es(i, t);
            var r = n("269596")
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("65597"),
                r = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, i.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, s.jsx)(s.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691"),
                i = n("65597"),
                r = n("526887"),
                l = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = s.useContext(r.ConfettiCannonContext), t = (0, i.default)([l.default], () => l.default.getState()), n = s.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = s.useMemo(() => ({
                    fire: (s, i, r) => {
                        var l, a;
                        let u = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(u);
                        e(s, i, o, (null !== (l = null == r ? void 0 : r.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == r ? void 0 : r.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("803182"),
                i = n("308503"),
                r = n("49111");

            function l(e) {
                let t = (0, s.matchPath)(null != e ? e : "", {
                    path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === r.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, s.matchPath)(null != e ? e : "", {
                    path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var a = (0, i.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: s
                    } = l(t);
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
                    } = l(t);
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
                    return a
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var s = n("299039"),
                i = n("648564"),
                r = n("782340");
            let l = e => s.default.compare("992549565104128000", e) > -1,
                a = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = l(t);
                        return (null == t || n) && e >= i.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= i.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let s = a(e, n);
                    return "0" === s ? r.default.Messages.SEE_THREAD : t.format({
                        count: s
                    })
                },
                o = (e, t) => u(e, r.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return a.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                l = n("79798"),
                a = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: i,
                        nameColor: a,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: h,
                        botClass: f,
                        botVerified: m = !1,
                        style: p,
                        useRemSizes: I = !1,
                        usernameIcon: v
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: r(o, u.nameTag),
                        style: p,
                        children: [(0, s.jsxs)("span", {
                            className: r(u.username, c),
                            style: null != a ? {
                                color: a
                            } : void 0,
                            children: [v, t]
                        }), null != n ? (0, s.jsxs)("span", {
                            className: null != h ? h : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, s.jsx)(l.default, {
                            type: d,
                            invertColor: i,
                            className: r(f, u.bot),
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
                    return l
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return u
                }
            });
            var s = n("995008"),
                i = n.n(s),
                r = n("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                a = () => (0, r.useLazyValue)(() => l()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
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
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("926001"),
                l = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon, void 0, {
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
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("578478"),
                l = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
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
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("811513"),
                l = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, r.GroupIcon, void 0, {
                    size: 24
                })
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                l = n("77078"),
                a = n("254686"),
                u = n("851706");
            let o = Object.freeze({
                    SIZE_10: u.size10,
                    SIZE_12: u.size12,
                    SIZE_14: u.size14,
                    SIZE_16: u.size16,
                    SIZE_20: u.size20,
                    SIZE_24: u.size24,
                    SIZE_32: u.size32
                }),
                d = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: i = a.wrapper,
                        size: u = o.SIZE_14,
                        selectable: d = !1,
                        children: c,
                        color: h,
                        onClick: f,
                        onContextMenu: m,
                        style: p,
                        title: I,
                        uppercase: v
                    } = e;
                    return (0, s.jsx)(l.H, {
                        role: null != f ? "button" : void 0,
                        onClick: f,
                        onContextMenu: m,
                        id: t,
                        className: r(i, {
                            [a.base]: !0,
                            [u]: !0,
                            [a.selectable]: d,
                            [a.muted]: n,
                            [a.uppercase]: v
                        }),
                        title: I,
                        style: null != h ? {
                            ...p,
                            color: h
                        } : p,
                        children: c
                    })
                };
            d.Sizes = o;
            var c = d
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return E
                },
                default: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("627445"),
                u = n.n(a),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                h = n("766274"),
                f = n("697218"),
                m = n("368121"),
                p = n("523096"),
                I = n("587974"),
                v = n("494101");
            let E = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function _(e, t) {
                let n = e instanceof h.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class g extends i.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: i,
                        extraDetail: r
                    } = this.props, l = [], a = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(a), o = 0;
                    for (; o < a && o < e.length;) {
                        var d;
                        let t = null == u && null == r && o === e.length - 1,
                            a = n(e[o], t, o);
                        l.push(t ? (0, s.jsx)("div", {
                            className: v.avatarContainer,
                            children: a
                        }, _(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, s.jsx)(I.default, {
                            className: v.avatarContainerMasked,
                            height: i,
                            width: i,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, _(e[o], o))), o++
                    }
                    return null != r ? l.push(r) : null != u && l.push(u), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: r,
                        renderMoreUsers: l,
                        users: a
                    } = this.props, u = Math.min(e, a.length);
                    if (!r) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(i.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > a.length) {
                                let e = n - a.length;
                                return (0, s.jsx)(i.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < a.length) {
                            let e = Math.min(a.length - u, 99);
                            return (0, s.jsx)(i.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(m.default, {
                        foreground: v.foreground,
                        className: v.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: i,
                        showUserPopout: r,
                        useFallbackUserForPopout: a
                    } = this.props, {
                        popoutUserId: h
                    } = this.state, m = n.find(e => null != e && e.id === h), p = a && null == f.default.getUser(h);
                    return (0, s.jsx)(o.Popout, {
                        position: "right",
                        preload: null == m ? void 0 : () => (0, d.default)(m.id, m.getAvatarURL(i, 80), {
                            guildId: i
                        }),
                        shouldShow: !0 === r && null != h,
                        fixed: !0,
                        renderPopout: e => (u(null != h, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
                            ...this.props,
                            user: p && null != m ? m : void 0,
                            ...e,
                            userId: h,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, s.jsxs)("div", {
                            className: l(e, v.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.SIZE_24;
                                switch (e) {
                                    case E.SIZE_16:
                                        return v.size16;
                                    case E.SIZE_24:
                                        return v.size24;
                                    case E.SIZE_32:
                                        return v.size32;
                                    case E.SIZE_56:
                                        return v.size56;
                                    default:
                                        return v.size24
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
                    }, this._ref = i.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: i,
                            guildId: r,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: v.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % p.default.DEFAULT_AVATARS.length,
                                    t = p.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: v.avatar
                                })
                            }
                        }
                        let a = (0, s.jsx)("img", {
                            src: e.getAvatarURL(r, l),
                            alt: e.username,
                            className: v.avatar
                        }, e.id);
                        return i ? (0, s.jsx)(o.Clickable, {
                            className: v.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: a
                        }, e.id) : a
                    }
                }
            }
            g.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: v.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: E.SIZE_24
            };
            var S = g
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return i
                },
                markAnalyticsFeedItemUnseen: function() {
                    return r
                },
                flushAnalyticsFeedItems: function() {
                    return l
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

            function r(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function l(e, t) {
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
            var s, i, r, l, a = n("627445"),
                u = n.n(a),
                o = n("913144");
            (r = s || (s = {})).GUILD_HOME = "guild_home", r.FORUM_CHANNEL = "forum_channel", (l = i || (i = {}))[l.IMMEDIATE = 0] = "IMMEDIATE", l[l.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", l[l.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
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
                        let r = this.getTrackedFeedItem(i),
                            l = r.maybeMarkSeen(s);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, i, l)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            s = e.timestampMillis,
                            i = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(i);
                        let r = this.getTrackedFeedItem(i),
                            l = r.maybeMarkUnseen(s);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, i, l), this.maybeFlushSeenItems()
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
                r = n("815157"),
                l = n("271938"),
                a = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(a.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
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
                        return (0, r.default)(null != s ? s : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != s ? s : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    default:
                        return null != s ? s : "https://www.discord.com"
                }
            }
        }
    }
]);