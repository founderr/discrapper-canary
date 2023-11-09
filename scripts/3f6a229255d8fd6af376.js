(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43168"], {
        410507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FiltersHorizontalIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M22 5a1 1 0 0 1-1 1h-8.208a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .337.038.673.113 1H3a1 1 0 0 1 0-2h3.113A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.208a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .337.038.673.113 1H3a1 1 0 1 1 0-2h3.113A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.208a2.5 2.5 0 1 0 0 2H21ZM11.113 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.113Z",
                        className: s
                    })
                })
            }
        },
        510889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                r = n("974667"),
                a = n("446674"),
                u = n("206230");

            function s(e, t, n) {
                let s = (0, a.useStateFromStores)([u.default], () => u.default.keyboardModeEnabled),
                    i = l.useCallback(e => {
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
                    isEnabled: s,
                    setFocus: i,
                    scrollToStart: o,
                    scrollToEnd: c,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return M
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var r = n("866227"),
                a = n.n(r),
                u = n("446674"),
                s = n("77078"),
                i = n("820542"),
                o = n("519705"),
                c = n("319165"),
                d = n("282109"),
                f = n("679653"),
                g = n("49111"),
                m = n("468200"),
                E = n("782340");
            let M = () => [{
                    value: m.MuteUntilSeconds.MINUTES_15,
                    label: E.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: m.MuteUntilSeconds.HOURS_1,
                    label: E.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: m.MuteUntilSeconds.HOURS_3,
                    label: E.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: m.MuteUntilSeconds.HOURS_8,
                    label: E.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: m.MuteUntilSeconds.HOURS_24,
                    label: E.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: m.MuteUntilSeconds.ALWAYS,
                    label: E.default.Messages.MUTE_DURATION_ALWAYS
                }],
                S = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, r] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.isChannelMuted(e.guild_id, e.id), d.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, c.useMutedUntilText)(r), m = (0, f.default)(e, !0);

                function T(t) {
                    t && e.type === g.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let C = E.default.Messages.MUTE_CHANNEL_GENERIC,
                    _ = E.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case g.ChannelTypes.GUILD_CATEGORY:
                        C = E.default.Messages.MUTE_CATEGORY, _ = E.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case g.ChannelTypes.GROUP_DM:
                        C = E.default.Messages.MUTE_CONVERSATION, _ = E.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case g.ChannelTypes.DM:
                        C = E.default.Messages.MUTE_CHANNEL.format({
                            name: m
                        }), _ = E.default.Messages.UNMUTE_CHANNEL.format({
                            name: m
                        });
                        break;
                    default:
                        C = E.default.Messages.MUTE_CHANNEL_GENERIC, _ = E.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, l.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: _,
                    subtext: a,
                    action: () => T(!1)
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: C,
                    action: () => T(!0),
                    children: M().map(n => {
                        let {
                            value: r,
                            label: a
                        } = n;
                        return (0, l.jsx)(s.MenuItem, {
                            id: "".concat(r),
                            label: a,
                            action: () => (function(n) {
                                e.type === g.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id);
                                let l = S(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, l, t)
                            })(r)
                        }, r)
                    })
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
                    return C
                },
                default: function() {
                    return _
                },
                ForumTagOverflow: function() {
                    return A
                }
            }), n("222007");
            var l, r, a = n("37983"),
                u = n("884691"),
                s = n("414456"),
                i = n.n(s),
                o = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                g = n("206230"),
                m = n("385976"),
                E = n("945330"),
                M = n("782340"),
                S = n("951779");

            function T(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: T,
                    selected: C,
                    ariaLabel: _
                } = e, {
                    name: A,
                    emojiId: h,
                    emojiName: p
                } = t, N = null != T, [O, I] = u.useState(!1), v = (0, c.useStateFromStores)([m.default], () => null != h ? m.default.getUsableCustomEmojiById(h) : null), b = N || null != s, U = (!N || !O) && (null != h || null != p), x = 0 === n, y = u.useRef(null), R = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), j = (0, a.jsxs)(a.Fragment, {
                    children: [U ? (0, a.jsx)(f.default, {
                        className: i(S.emoji, {
                            [S.small]: x
                        }),
                        emojiId: h,
                        emojiName: p,
                        animated: !!(null == v ? void 0 : v.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, O && N && (0, a.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, a.jsx)(E.default, {
                            className: S.close
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: S.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: A
                    })]
                }), F = {
                    key: t.id,
                    className: i(S.pill, S.increasedActivityPill, {
                        [S.disabled]: l,
                        [S.clickable]: b,
                        [S.increasedActivitySmall]: x,
                        [S.selected]: C
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == T || T(t), !R && null != y.current && y.current.blur()
                    },
                    onMouseEnter: () => N && I(!0),
                    onMouseLeave: () => N && I(!1)
                }, D = (0, o.useListItem)("forum-tag-".concat(t.id));
                return b ? (0, a.jsx)(d.Clickable, {
                    ...D,
                    innerRef: y,
                    focusProps: {
                        ringTarget: y
                    },
                    "aria-label": null != _ ? _ : M.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: A
                    }),
                    role: "button",
                    "aria-pressed": C,
                    ...F,
                    children: j
                }) : (0, a.jsx)("div", {
                    "aria-label": null != _ ? _ : M.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: A
                    }),
                    ...F,
                    children: j
                })
            }

            function C(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, a.jsx)(d.Tooltip, {
                    "aria-label": M.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(_, {
                            tag: e,
                            className: S.tooltipPill,
                            size: _.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: i(S.pill, S.increasedActivityPill, {
                            [S.increasedActivitySmall]: r
                        }),
                        children: (0, a.jsxs)(d.Text, {
                            className: S.increasedActivityText,
                            variant: r ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function _(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: T,
                    selected: C,
                    ariaLabel: _
                } = e, {
                    name: A,
                    emojiId: h,
                    emojiName: p
                } = t, N = null != T, [O, I] = u.useState(!1), v = (0, c.useStateFromStores)([m.default], () => null != h ? m.default.getUsableCustomEmojiById(h) : null), b = N || null != s, U = (!N || !O) && (null != h || null != p), x = 0 === n, y = u.useRef(null), R = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), j = (0, a.jsxs)(a.Fragment, {
                    children: [U ? (0, a.jsx)(f.default, {
                        className: i(S.emoji, {
                            [S.small]: x
                        }),
                        emojiId: h,
                        emojiName: p,
                        animated: !!(null == v ? void 0 : v.animated),
                        size: "reaction"
                    }) : null, O && N && (0, a.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, a.jsx)(E.default, {
                            className: S.close
                        })
                    }), (0, a.jsx)(d.Text, {
                        variant: x ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: A
                    })]
                }), F = {
                    key: t.id,
                    className: i(S.pill, {
                        [S.disabled]: l,
                        [S.clickable]: b,
                        [S.small]: x,
                        [S.selected]: C
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == T || T(t), !R && null != y.current && y.current.blur()
                    },
                    onMouseEnter: () => N && I(!0),
                    onMouseLeave: () => N && I(!1)
                }, D = (0, o.useListItem)("forum-tag-".concat(t.id));
                return b ? (0, a.jsx)(d.Clickable, {
                    ...D,
                    innerRef: y,
                    focusProps: {
                        ringTarget: y
                    },
                    "aria-label": null != _ ? _ : M.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: A
                    }),
                    role: "button",
                    "aria-pressed": C,
                    ...F,
                    children: j
                }) : (0, a.jsx)("div", {
                    ...F,
                    children: j
                })
            }

            function A(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, a.jsx)(d.Tooltip, {
                    "aria-label": M.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(_, {
                            tag: e,
                            className: S.tooltipPill,
                            size: _.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: i(S.pill, {
                            [S.small]: r
                        }),
                        children: (0, a.jsxs)(d.Text, {
                            variant: r ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", _.Sizes = l
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("866227"),
                a = n.n(r),
                u = n("446674"),
                s = n("77078"),
                i = n("519705"),
                o = n("531674"),
                c = n("319165"),
                d = n("282109"),
                f = n("782340");

            function g(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: r,
                        muteConfig: g
                    } = (0, u.useStateFromStoresObject)([d.default], () => ({
                        muted: null != n ? d.default.isMuted(n) : void 0,
                        muteConfig: null != n ? d.default.getMuteConfig(n) : void 0
                    }), [n]),
                    m = (0, c.useMutedUntilText)(g);
                return null == n ? null : r ? (0, l.jsx)(s.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: m,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, o.getMuteTimes)().map(e => {
                        let {
                            value: r,
                            label: u
                        } = e;
                        return (0, l.jsx)(s.MenuItem, {
                            id: "".concat(r),
                            label: u,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? a().add(e, "second").toISOString() : null;
                                i.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: l
                                    }
                                }, t)
                            })(r)
                        }, r)
                    })
                })
            }
        },
        619259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("808653");
            var l = n("249654"),
                r = n("446674"),
                a = n("913144"),
                u = n("979911"),
                s = n("692038"),
                i = n("42203"),
                o = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let g = {},
                m = 0,
                E = {},
                M = {},
                S = (e, t) => {
                    let n = (0, u.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, u.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    g[n] = l, m++
                },
                T = e => g[e],
                C = e => {
                    let t = g[e];
                    null != t && delete g[e], m++
                };

            function _(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return S(t, n), !0
            }

            function A(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, a = null === (t = i.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == a) return !1;
                let u = M[a],
                    s = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let a = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return a ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, u);
                return null != s && M[a] !== s && (M[a] = s, !0)
            }
            class h extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (g = e.automodFailedMessages, E = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: g,
                        mentionRaidDetectionByGuild: E,
                        lastIncidentAlertMessage: M
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = T(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return m
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t ? t : null
                }
            }
            h.displayName = "GuildAutomodMessageStore", h.persistKey = "GuildAutomodMessages";
            var p = new h(a.default, {
                CONNECTION_OPEN: function(e) {
                    return g = {}, m++, !0
                },
                LOAD_MESSAGES_SUCCESS: A,
                LOCAL_MESSAGES_LOADED: A,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, s.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (M[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: _,
                MESSAGE_EDIT_FAILED_AUTOMOD: _,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return C(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    C(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    let {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    } = e;
                    return E[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    }, !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return delete E[t], !0
                }
            })
        },
        211248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleIconButtonColors: function() {
                    return i
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
                a = n.n(r),
                u = n("77078"),
                s = n("739926");
            let i = {
                    TERTIARY: s.tertiary,
                    SECONDARY: s.secondary,
                    PRIMARY: s.primary
                },
                o = {
                    SIZE_24: s.size24,
                    SIZE_32: s.size32,
                    SIZE_36: s.size36
                };

            function c(e) {
                let {
                    className: t,
                    tooltip: n,
                    color: r,
                    size: i = o.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: g
                } = e;
                return (0, l.jsx)(u.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: o,
                            ...m
                        } = e;
                        return (0, l.jsx)(u.Clickable, {
                            ...m,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: a(t, s.button, r, i, {
                                [s.disabled]: f
                            }),
                            onClick: e => {
                                null == o || o(), d(e)
                            },
                            focusProps: g,
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
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("410507"),
                u = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                            fill: r,
                            className: a
                        })
                    })
                }, a.FiltersHorizontalIcon)
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return a
                },
                updateContent: function() {
                    return O
                },
                deleteContent: function() {
                    return I
                },
                miscCommand: function() {
                    return v
                },
                getFirstTextBlock: function() {
                    return b
                },
                applyTokensAsEntities: function() {
                    return U
                },
                createEmptyEditorState: function() {
                    return x
                },
                clearContent: function() {
                    return y
                },
                replaceAllContent: function() {
                    return R
                },
                setCollapsedSelection: function() {
                    return j
                },
                setCollapsedEndSelection: function() {
                    return F
                },
                setCollapsedStartSelection: function() {
                    return D
                },
                setToStartSelection: function() {
                    return L
                },
                setToEndSelection: function() {
                    return k
                },
                truncateContent: function() {
                    return G
                },
                scrollCursorIntoView: function() {
                    return w
                },
                isEmpty: function() {
                    return H
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                a = n.n(r),
                u = n("401816"),
                s = n.n(u),
                i = n("958551"),
                o = n.n(i),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                g = n.n(f),
                m = n("928429"),
                E = n.n(m),
                M = n("234553"),
                S = n.n(M),
                T = n("65994"),
                C = n.n(T),
                _ = n("718144"),
                A = n.n(_),
                h = n("640330"),
                p = n.n(h);

            function N(e, t, n, r) {
                let a = r.getCurrentContent(),
                    u = null;
                null != e && (u = (a = a.createEntity(...e)).getLastCreatedEntityKey());
                let s = a.getFirstBlock(),
                    i = new l.SelectionState({
                        anchorKey: s.getKey(),
                        anchorOffset: t,
                        focusKey: s.getKey(),
                        focusOffset: n
                    });
                return a = l.Modifier.applyEntity(a, i, u), l.EditorState.set(r, {
                    currentContent: a
                })
            }

            function O(e, t, n, r) {
                let a, u;
                let i = t.getCurrentContent(),
                    o = i.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), a = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : a = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = s(i, a);
                return a.isCollapsed() ? (i = l.Modifier.insertText(i, a, e, d, f), u = "insert-characters") : (i = l.Modifier.replaceText(i, a, e, d, f), u = "replace-characters"), l.EditorState.push(t, i, u)
            }

            function I(e, t) {
                switch (e) {
                    case "delete":
                        return A(t);
                    case "delete-word":
                        return g(t);
                    case "backspace":
                        return C(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return o(t);
                    default:
                        return t
                }
            }

            function v(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return p(t);
                    case "move-selection-to-start-of-block":
                        return S(t);
                    case "move-selection-to-end-of-block":
                        return E(t);
                    default:
                        return t
                }
            }

            function b(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function U(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    a = r.getText(),
                    u = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        s = a.substring(e, t);
                    u.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: s
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (u.forEach(n => {
                            let {
                                type: r,
                                start: a,
                                end: u
                            } = e, s = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === a && n.text === s ? (n.processed = !0, l = !0) : (a >= n.start && a < n.end || u > n.start && u <= n.end) && (n.processed = !0, t = N(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = N([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), u.forEach(e => {
                    !e.processed && (t = N(null, e.start, e.end, t))
                }), t
            }

            function x(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function y(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function R(e, t) {
                let n = b(t);
                return O(e, t, 0, n.length)
            }

            function j(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function F(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return j(t.length, e)
            }

            function D(e) {
                return j(0, e)
            }

            function L(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function k(e) {
                let t = b(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = b(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = O("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function w(e) {
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
                let a = l.left - r.left,
                    u = a + e.scrollLeft;
                u < e.scrollLeft ? e.scrollLeft = u - 10 : u > e.scrollLeft + e.offsetWidth && (e.scrollLeft = u - e.offsetWidth + 3)
            }

            function H(e) {
                return 0 === b(e).length
            }
        }
    }
]);