(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34995"], {
        410507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FiltersHorizontalIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M22 5C22 5.55228 21.5523 6 21 6L12.792 6C12.4062 6.88295 11.5252 7.5 10.5 7.5C9.11929 7.5 8 6.38071 8 5C8 3.61929 9.11929 2.5 10.5 2.5C11.5252 2.5 12.4062 3.11705 12.792 4L21 4C21.5523 4 22 4.44771 22 5Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "M6 5C6 5.33729 6.03792 5.67269 6.11252 6H3C2.44772 6 2 5.55228 2 5C2 4.44771 2.44772 4 3 4L6.11252 4C6.03792 4.32731 6 4.66271 6 5Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "M22 19C22 19.5523 21.5523 20 21 20H12.792C12.4062 20.883 11.5252 21.5 10.5 21.5C9.11929 21.5 8 20.3807 8 19C8 17.6193 9.11929 16.5 10.5 16.5C11.5252 16.5 12.4062 17.117 12.792 18H21C21.5523 18 22 18.4477 22 19Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "M6 19C6 19.3373 6.03792 19.6727 6.11252 20H3C2.44772 20 2 19.5523 2 19C2 18.4477 2.44772 18 3 18H6.11252C6.03792 18.3273 6 18.6627 6 19Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "M21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H17.792C17.4062 10.117 16.5252 9.5 15.5 9.5C14.1193 9.5 13 10.6193 13 12C13 13.3807 14.1193 14.5 15.5 14.5C16.5252 14.5 17.4062 13.883 17.792 13H21Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "M11.1125 13C11.0379 12.6727 11 12.3373 11 12C11 11.6627 11.0379 11.3273 11.1125 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L11.1125 13Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    })]
                })
            }
        },
        510889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                r = n("974667"),
                s = n("446674"),
                i = n("206230");

            function a(e, t, n) {
                let a = (0, s.useStateFromStores)([i.default], () => i.default.keyboardModeEnabled),
                    u = l.useCallback(e => {
                        let n = document.querySelector(e),
                            l = t.current;
                        null != n && null != l && (n.focus(), l.scrollIntoViewNode({
                            node: n,
                            padding: 80
                        }))
                    }, [t]),
                    o = l.useCallback(() => new Promise(e => {
                        let n = t.current;
                        if (null == n) return e();
                        n.scrollTo({
                            to: 0,
                            callback: () => requestAnimationFrame(() => e())
                        })
                    }), [t]),
                    c = l.useCallback(() => new Promise(e => {
                        let n = t.current;
                        if (null == n) return e();
                        n.scrollTo({
                            to: Number.MAX_SAFE_INTEGER,
                            callback: () => requestAnimationFrame(() => e())
                        })
                    }), [t]);
                return (0, r.default)({
                    id: e,
                    isEnabled: a,
                    setFocus: u,
                    scrollToStart: o,
                    scrollToEnd: c,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return T
                },
                IncreasedActivityForumTagOverflow: function() {
                    return S
                },
                default: function() {
                    return h
                },
                ForumTagOverflow: function() {
                    return p
                }
            }), n("222007");
            var l, r, s = n("37983"),
                i = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                E = n("206230"),
                C = n("385976"),
                g = n("945330"),
                m = n("782340"),
                A = n("951779");

            function T(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: a,
                    onRemove: T,
                    selected: S,
                    ariaLabel: h
                } = e, {
                    name: p,
                    emojiId: M,
                    emojiName: v
                } = t, O = null != T, [I, N] = i.useState(!1), _ = (0, c.useStateFromStores)([C.default], () => null != M ? C.default.getUsableCustomEmojiById(M) : null), y = O || null != a, x = (!O || !I) && (null != M || null != v), b = 0 === n, F = i.useRef(null), L = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), R = (0, s.jsxs)(s.Fragment, {
                    children: [x ? (0, s.jsx)(f.default, {
                        className: u(A.emoji, {
                            [A.small]: b
                        }),
                        emojiId: M,
                        emojiName: v,
                        animated: !!(null == _ ? void 0 : _.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, I && O && (0, s.jsx)("div", {
                        className: A.closeCircle,
                        children: (0, s.jsx)(g.default, {
                            className: A.close
                        })
                    }), (0, s.jsx)(d.Text, {
                        className: A.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: p
                    })]
                }), D = {
                    key: t.id,
                    className: u(A.pill, A.increasedActivityPill, {
                        [A.disabled]: l,
                        [A.clickable]: y,
                        [A.increasedActivitySmall]: b,
                        [A.selected]: S
                    }, r),
                    onClick: e => {
                        null == a || a(e), null == T || T(t), !L && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => O && N(!0),
                    onMouseLeave: () => O && N(!1)
                }, j = (0, o.useListItem)("forum-tag-".concat(t.id));
                return y ? (0, s.jsx)(d.Clickable, {
                    ...j,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != h ? h : m.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: p
                    }),
                    role: "button",
                    "aria-pressed": S,
                    ...D,
                    children: R
                }) : (0, s.jsx)("div", {
                    "aria-label": null != h ? h : m.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: p
                    }),
                    ...D,
                    children: R
                })
            }

            function S(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, s.jsx)(d.Tooltip, {
                    "aria-label": m.default.Messages.FORUM_TAGS,
                    text: (0, s.jsx)(s.Fragment, {
                        children: t.map(e => (0, s.jsx)(h, {
                            tag: e,
                            className: A.tooltipPill,
                            size: h.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, s.jsx)("div", {
                        ...e,
                        className: u(A.pill, A.increasedActivityPill, {
                            [A.increasedActivitySmall]: r
                        }),
                        children: (0, s.jsxs)(d.Text, {
                            className: A.increasedActivityText,
                            variant: r ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function h(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: a,
                    onRemove: T,
                    selected: S,
                    ariaLabel: h
                } = e, {
                    name: p,
                    emojiId: M,
                    emojiName: v
                } = t, O = null != T, [I, N] = i.useState(!1), _ = (0, c.useStateFromStores)([C.default], () => null != M ? C.default.getUsableCustomEmojiById(M) : null), y = O || null != a, x = (!O || !I) && (null != M || null != v), b = 0 === n, F = i.useRef(null), L = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), R = (0, s.jsxs)(s.Fragment, {
                    children: [x ? (0, s.jsx)(f.default, {
                        className: u(A.emoji, {
                            [A.small]: b
                        }),
                        emojiId: M,
                        emojiName: v,
                        animated: !!(null == _ ? void 0 : _.animated),
                        size: "reaction"
                    }) : null, I && O && (0, s.jsx)("div", {
                        className: A.closeCircle,
                        children: (0, s.jsx)(g.default, {
                            className: A.close
                        })
                    }), (0, s.jsx)(d.Text, {
                        variant: b ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: p
                    })]
                }), D = {
                    key: t.id,
                    className: u(A.pill, {
                        [A.disabled]: l,
                        [A.clickable]: y,
                        [A.small]: b,
                        [A.selected]: S
                    }, r),
                    onClick: e => {
                        null == a || a(e), null == T || T(t), !L && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => O && N(!0),
                    onMouseLeave: () => O && N(!1)
                }, j = (0, o.useListItem)("forum-tag-".concat(t.id));
                return y ? (0, s.jsx)(d.Clickable, {
                    ...j,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != h ? h : m.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: p
                    }),
                    role: "button",
                    "aria-pressed": S,
                    ...D,
                    children: R
                }) : (0, s.jsx)("div", {
                    ...D,
                    children: R
                })
            }

            function p(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, s.jsx)(d.Tooltip, {
                    "aria-label": m.default.Messages.FORUM_TAGS,
                    text: (0, s.jsx)(s.Fragment, {
                        children: t.map(e => (0, s.jsx)(h, {
                            tag: e,
                            className: A.tooltipPill,
                            size: h.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, s.jsx)("div", {
                        ...e,
                        className: u(A.pill, {
                            [A.small]: r
                        }),
                        children: (0, s.jsxs)(d.Text, {
                            variant: r ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", h.Sizes = l
        },
        619259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("808653");
            var l = n("249654"),
                r = n("446674"),
                s = n("913144"),
                i = n("979911"),
                a = n("692038"),
                u = n("42203"),
                o = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let E = {},
                C = 0,
                g = {},
                m = {},
                A = (e, t) => {
                    let n = (0, i.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, i.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    E[n] = l, C++
                },
                T = e => E[e],
                S = e => {
                    let t = E[e];
                    null != t && delete E[e], C++
                };

            function h(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return A(t, n), !0
            }

            function p(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, s = null === (t = u.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == s) return !1;
                let i = m[s],
                    a = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let s = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return s ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, i);
                return null != a && m[s] !== a && (m[s] = a, !0)
            }
            class M extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (E = e.automodFailedMessages, g = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: E,
                        mentionRaidDetectionByGuild: g,
                        lastIncidentAlertMessage: m
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = T(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return C
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = g[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : null
                }
            }
            M.displayName = "GuildAutomodMessageStore", M.persistKey = "GuildAutomodMessages";
            var v = new M(s.default, {
                CONNECTION_OPEN: function(e) {
                    return E = {}, C++, !0
                },
                LOAD_MESSAGES_SUCCESS: p,
                LOCAL_MESSAGES_LOADED: p,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, a.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (m[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: h,
                MESSAGE_EDIT_FAILED_AUTOMOD: h,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return S(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    S(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    let {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    } = e;
                    return g[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    }, !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return delete g[t], !0
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let l, r, s;
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("424973");
            var i, a, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                E = n("21121"),
                C = n("934306"),
                g = n("288518"),
                m = n("486503"),
                A = n("233069"),
                T = n("42203"),
                S = n("305961"),
                h = n("660478"),
                p = n("282109"),
                M = n("697218"),
                v = n("299039"),
                O = n("724210");
            (a = i || (i = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
            let I = new d.default(e => {
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
                    let l = null !== (n = null !== (t = h.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = v.default.fromTimestamp(e);
                        return v.default.compare(l, t) > 0 ? l : t
                    }
                    return l
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: p.default.isMessagesFavorite(e.id) && (0, E.isInMainTabsExperiment)(),
                    isRequest: g.default.isMessageRequest(e.id) || m.default.isSpam(e.id)
                }
            }

            function _() {
                I.clear(), Object.values(T.default.getMutablePrivateChannels()).forEach(e => {
                    I.set(e.id, N(e))
                }), (0, E.isInMainTabsExperiment)() && (0, C.isSplitMessagesTab)() && p.default.getAddedToMessages().forEach(e => {
                    let t = T.default.getChannel(e);
                    null != t && (0, A.isGuildTextChannelType)(t.type) && I.set(t.id, N(t))
                })
            }

            function y() {
                let e = T.default.getMutablePrivateChannels();
                for (let t in e) I.set(t, N(e[t]))
            }
            let x = (l = [], r = [], s = [], () => {
                let e = I.values("FAVORITE"),
                    t = I.values("DEFAULT");
                return (l !== e || r !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), l = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), r = t), s
            });
            class b extends c.default.Store {
                initialize() {
                    this.waitFor(T.default, S.default, M.default, g.default, p.default), this.syncWith([p.default, g.default], _)
                }
                getPrivateChannelIds() {
                    return x()
                }
                getSortedChannels() {
                    return [I.values("FAVORITE"), I.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return I.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: l
                        } = t;
                        e[n] = l
                    }), e
                }
            }
            b.displayName = "PrivateChannelSortStore";
            var F = new b(f.default, {
                CONNECTION_OPEN: _,
                CONNECTION_OPEN_SUPPLEMENTAL: _,
                OVERLAY_INITIALIZE: _,
                CACHE_LOADED: y,
                CACHE_LOADED_LAZY: y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, A.isPrivate)(e.type) || I.has(e.id)) && I.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, A.isPrivate)(t.type) || t.id === O.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    I.set(t.id, N(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return I.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!I.has(t)) return !1;
                    let l = T.default.getChannel(t);
                    return null != l && I.set(t, N(l, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return I.delete(t)
                }
            })
        },
        211248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleIconButtonColors: function() {
                    return u
                },
                CircleIconButtonSizes: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("77078"),
                a = n("739926");
            let u = {
                    TERTIARY: a.tertiary,
                    SECONDARY: a.secondary,
                    PRIMARY: a.primary
                },
                o = {
                    SIZE_24: a.size24,
                    SIZE_32: a.size32,
                    SIZE_36: a.size36
                };

            function c(e) {
                let {
                    className: t,
                    tooltip: n,
                    color: r,
                    size: u = o.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: E
                } = e;
                return (0, l.jsx)(i.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: o,
                            ...C
                        } = e;
                        return (0, l.jsx)(i.Clickable, {
                            ...C,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: s(t, a.button, r, u, {
                                [a.disabled]: f
                            }),
                            onClick: e => {
                                null == o || o(), d(e)
                            },
                            focusProps: E,
                            children: c
                        })
                    }
                })
            }
        },
        118530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("410507"),
                i = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
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
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                            fill: r,
                            className: s
                        })
                    })
                }, s.FiltersHorizontalIcon, void 0, {
                    size: 16
                })
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return s
                },
                updateContent: function() {
                    return I
                },
                deleteContent: function() {
                    return N
                },
                miscCommand: function() {
                    return _
                },
                getFirstTextBlock: function() {
                    return y
                },
                applyTokensAsEntities: function() {
                    return x
                },
                createEmptyEditorState: function() {
                    return b
                },
                clearContent: function() {
                    return F
                },
                replaceAllContent: function() {
                    return L
                },
                setCollapsedSelection: function() {
                    return R
                },
                setCollapsedEndSelection: function() {
                    return D
                },
                setCollapsedStartSelection: function() {
                    return j
                },
                setToStartSelection: function() {
                    return k
                },
                setToEndSelection: function() {
                    return w
                },
                truncateContent: function() {
                    return U
                },
                scrollCursorIntoView: function() {
                    return P
                },
                isEmpty: function() {
                    return G
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                s = n.n(r),
                i = n("401816"),
                a = n.n(i),
                u = n("958551"),
                o = n.n(u),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                E = n.n(f),
                C = n("928429"),
                g = n.n(C),
                m = n("234553"),
                A = n.n(m),
                T = n("65994"),
                S = n.n(T),
                h = n("718144"),
                p = n.n(h),
                M = n("640330"),
                v = n.n(M);

            function O(e, t, n, r) {
                let s = r.getCurrentContent(),
                    i = null;
                null != e && (i = (s = s.createEntity(...e)).getLastCreatedEntityKey());
                let a = s.getFirstBlock(),
                    u = new l.SelectionState({
                        anchorKey: a.getKey(),
                        anchorOffset: t,
                        focusKey: a.getKey(),
                        focusOffset: n
                    });
                return s = l.Modifier.applyEntity(s, u, i), l.EditorState.set(r, {
                    currentContent: s
                })
            }

            function I(e, t, n, r) {
                let s, i;
                let u = t.getCurrentContent(),
                    o = u.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), s = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : s = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = a(u, s);
                return s.isCollapsed() ? (u = l.Modifier.insertText(u, s, e, d, f), i = "insert-characters") : (u = l.Modifier.replaceText(u, s, e, d, f), i = "replace-characters"), l.EditorState.push(t, u, i)
            }

            function N(e, t) {
                switch (e) {
                    case "delete":
                        return p(t);
                    case "delete-word":
                        return E(t);
                    case "backspace":
                        return S(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return o(t);
                    default:
                        return t
                }
            }

            function _(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return v(t);
                    case "move-selection-to-start-of-block":
                        return A(t);
                    case "move-selection-to-end-of-block":
                        return g(t);
                    default:
                        return t
                }
            }

            function y(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    s = r.getText(),
                    i = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        a = s.substring(e, t);
                    i.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: a
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (i.forEach(n => {
                            let {
                                type: r,
                                start: s,
                                end: i
                            } = e, a = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === s && n.text === a ? (n.processed = !0, l = !0) : (s >= n.start && s < n.end || i > n.start && i <= n.end) && (n.processed = !0, t = O(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = O([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), i.forEach(e => {
                    !e.processed && (t = O(null, e.start, e.end, t))
                }), t
            }

            function b(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function F(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function L(e, t) {
                let n = y(t);
                return I(e, t, 0, n.length)
            }

            function R(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function D(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return R(t.length, e)
            }

            function j(e) {
                return R(0, e)
            }

            function k(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function w(e) {
                let t = y(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = y(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = I("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function P(e) {
                let t = window.getSelection();
                if (null == t || "Caret" !== t.type || null == e) return;
                let n = t.getRangeAt(0);
                if (! function(e, t) {
                        for (; null != e;) {
                            if (e === t) return !0;
                            e = e.parentNode
                        }
                        return !1
                    }(n.commonAncestorContainer, e)) return;
                let l = n.getClientRects()[0],
                    r = e.getClientRects()[0];
                if (null == l || null == r) return;
                let s = l.left - r.left,
                    i = s + e.scrollLeft;
                i < e.scrollLeft ? e.scrollLeft = i - 10 : i > e.scrollLeft + e.offsetWidth && (e.scrollLeft = i - e.offsetWidth + 3)
            }

            function G(e) {
                return 0 === y(e).length
            }
        }
    }
]);