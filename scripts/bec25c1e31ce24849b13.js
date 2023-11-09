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
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
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
                i = n("446674"),
                u = n("206230");

            function s(e, t, n) {
                let s = (0, i.useStateFromStores)([u.default], () => u.default.keyboardModeEnabled),
                    o = l.useCallback(e => {
                        let n = document.querySelector(e),
                            l = t.current;
                        null != n && null != l && (n.focus(), l.scrollIntoViewNode({
                            node: n,
                            padding: 80
                        }))
                    }, [t]),
                    a = l.useCallback(() => new Promise(e => {
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
                    setFocus: o,
                    scrollToStart: a,
                    scrollToEnd: c,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return C
                },
                IncreasedActivityForumTagOverflow: function() {
                    return A
                },
                default: function() {
                    return h
                },
                ForumTagOverflow: function() {
                    return T
                }
            }), n("222007");
            var l, r, i = n("37983"),
                u = n("884691"),
                s = n("414456"),
                o = n.n(s),
                a = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                m = n("206230"),
                g = n("385976"),
                E = n("945330"),
                S = n("782340"),
                M = n("951779");

            function C(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: C,
                    selected: A,
                    ariaLabel: h
                } = e, {
                    name: T,
                    emojiId: p,
                    emojiName: v
                } = t, x = null != C, [_, O] = u.useState(!1), I = (0, c.useStateFromStores)([g.default], () => null != p ? g.default.getUsableCustomEmojiById(p) : null), b = x || null != s, y = (!x || !_) && (null != p || null != v), N = 0 === n, F = u.useRef(null), j = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), R = (0, i.jsxs)(i.Fragment, {
                    children: [y ? (0, i.jsx)(f.default, {
                        className: o(M.emoji, {
                            [M.small]: N
                        }),
                        emojiId: p,
                        emojiName: v,
                        animated: !!(null == I ? void 0 : I.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, _ && x && (0, i.jsx)("div", {
                        className: M.closeCircle,
                        children: (0, i.jsx)(E.default, {
                            className: M.close
                        })
                    }), (0, i.jsx)(d.Text, {
                        className: M.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: T
                    })]
                }), k = {
                    key: t.id,
                    className: o(M.pill, M.increasedActivityPill, {
                        [M.disabled]: l,
                        [M.clickable]: b,
                        [M.increasedActivitySmall]: N,
                        [M.selected]: A
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == C || C(t), !j && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => x && O(!0),
                    onMouseLeave: () => x && O(!1)
                }, w = (0, a.useListItem)("forum-tag-".concat(t.id));
                return b ? (0, i.jsx)(d.Clickable, {
                    ...w,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != h ? h : S.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: T
                    }),
                    role: "button",
                    "aria-pressed": A,
                    ...k,
                    children: R
                }) : (0, i.jsx)("div", {
                    "aria-label": null != h ? h : S.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: T
                    }),
                    ...k,
                    children: R
                })
            }

            function A(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, i.jsx)(d.Tooltip, {
                    "aria-label": S.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(h, {
                            tag: e,
                            className: M.tooltipPill,
                            size: h.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: o(M.pill, M.increasedActivityPill, {
                            [M.increasedActivitySmall]: r
                        }),
                        children: (0, i.jsxs)(d.Text, {
                            className: M.increasedActivityText,
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
                    onClick: s,
                    onRemove: C,
                    selected: A,
                    ariaLabel: h
                } = e, {
                    name: T,
                    emojiId: p,
                    emojiName: v
                } = t, x = null != C, [_, O] = u.useState(!1), I = (0, c.useStateFromStores)([g.default], () => null != p ? g.default.getUsableCustomEmojiById(p) : null), b = x || null != s, y = (!x || !_) && (null != p || null != v), N = 0 === n, F = u.useRef(null), j = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), R = (0, i.jsxs)(i.Fragment, {
                    children: [y ? (0, i.jsx)(f.default, {
                        className: o(M.emoji, {
                            [M.small]: N
                        }),
                        emojiId: p,
                        emojiName: v,
                        animated: !!(null == I ? void 0 : I.animated),
                        size: "reaction"
                    }) : null, _ && x && (0, i.jsx)("div", {
                        className: M.closeCircle,
                        children: (0, i.jsx)(E.default, {
                            className: M.close
                        })
                    }), (0, i.jsx)(d.Text, {
                        variant: N ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: T
                    })]
                }), k = {
                    key: t.id,
                    className: o(M.pill, {
                        [M.disabled]: l,
                        [M.clickable]: b,
                        [M.small]: N,
                        [M.selected]: A
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == C || C(t), !j && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => x && O(!0),
                    onMouseLeave: () => x && O(!1)
                }, w = (0, a.useListItem)("forum-tag-".concat(t.id));
                return b ? (0, i.jsx)(d.Clickable, {
                    ...w,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != h ? h : S.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: T
                    }),
                    role: "button",
                    "aria-pressed": A,
                    ...k,
                    children: R
                }) : (0, i.jsx)("div", {
                    ...k,
                    children: R
                })
            }

            function T(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, i.jsx)(d.Tooltip, {
                    "aria-label": S.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(h, {
                            tag: e,
                            className: M.tooltipPill,
                            size: h.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: o(M.pill, {
                            [M.small]: r
                        }),
                        children: (0, i.jsxs)(d.Text, {
                            variant: r ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", h.Sizes = l
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("866227"),
                i = n.n(r),
                u = n("446674"),
                s = n("77078"),
                o = n("519705"),
                a = n("531674"),
                c = n("319165"),
                d = n("282109"),
                f = n("782340");

            function m(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: r,
                        muteConfig: m
                    } = (0, u.useStateFromStoresObject)([d.default], () => ({
                        muted: null != n ? d.default.isMuted(n) : void 0,
                        muteConfig: null != n ? d.default.getMuteConfig(n) : void 0
                    }), [n]),
                    g = (0, c.useMutedUntilText)(m);
                return null == n ? null : r ? (0, l.jsx)(s.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: g,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, a.getMuteTimes)().map(e => {
                        let {
                            value: r,
                            label: u
                        } = e;
                        return (0, l.jsx)(s.MenuItem, {
                            id: "".concat(r),
                            label: u,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? i().add(e, "second").toISOString() : null;
                                o.default.updateGuildNotificationSettings(n, {
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
                    return v
                }
            }), n("808653");
            var l = n("249654"),
                r = n("446674"),
                i = n("913144"),
                u = n("979911"),
                s = n("692038"),
                o = n("42203"),
                a = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let m = {},
                g = 0,
                E = {},
                S = {},
                M = (e, t) => {
                    let n = (0, u.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, u.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    m[n] = l, g++
                },
                C = e => m[e],
                A = e => {
                    let t = m[e];
                    null != t && delete m[e], g++
                };

            function h(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return M(t, n), !0
            }

            function T(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, i = null === (t = o.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == i) return !1;
                let u = S[i],
                    s = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let i = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return i ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, u);
                return null != s && S[i] !== s && (S[i] = s, !0)
            }
            class p extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (m = e.automodFailedMessages, E = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: m,
                        mentionRaidDetectionByGuild: E,
                        lastIncidentAlertMessage: S
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = C(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return g
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = S[e]) && void 0 !== t ? t : null
                }
            }
            p.displayName = "GuildAutomodMessageStore", p.persistKey = "GuildAutomodMessages";
            var v = new p(i.default, {
                CONNECTION_OPEN: function(e) {
                    return m = {}, g++, !0
                },
                LOAD_MESSAGES_SUCCESS: T,
                LOCAL_MESSAGES_LOADED: T,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, s.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (S[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: h,
                MESSAGE_EDIT_FAILED_AUTOMOD: h,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return A(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    A(n)
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
                    return o
                },
                CircleIconButtonSizes: function() {
                    return a
                },
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                u = n("77078"),
                s = n("739926");
            let o = {
                    TERTIARY: s.tertiary,
                    SECONDARY: s.secondary,
                    PRIMARY: s.primary
                },
                a = {
                    SIZE_24: s.size24,
                    SIZE_32: s.size32,
                    SIZE_36: s.size36
                };

            function c(e) {
                let {
                    className: t,
                    tooltip: n,
                    color: r,
                    size: o = a.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: m
                } = e;
                return (0, l.jsx)(u.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: a,
                            ...g
                        } = e;
                        return (0, l.jsx)(u.Clickable, {
                            ...g,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: i(t, s.button, r, o, {
                                [s.disabled]: f
                            }),
                            onClick: e => {
                                null == a || a(), d(e)
                            },
                            focusProps: m,
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
                i = n("410507"),
                u = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: i,
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
                            className: i
                        })
                    })
                }, i.FiltersHorizontalIcon)
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return i
                },
                updateContent: function() {
                    return _
                },
                deleteContent: function() {
                    return O
                },
                miscCommand: function() {
                    return I
                },
                getFirstTextBlock: function() {
                    return b
                },
                applyTokensAsEntities: function() {
                    return y
                },
                createEmptyEditorState: function() {
                    return N
                },
                clearContent: function() {
                    return F
                },
                replaceAllContent: function() {
                    return j
                },
                setCollapsedSelection: function() {
                    return R
                },
                setCollapsedEndSelection: function() {
                    return k
                },
                setCollapsedStartSelection: function() {
                    return w
                },
                setToStartSelection: function() {
                    return D
                },
                setToEndSelection: function() {
                    return L
                },
                truncateContent: function() {
                    return U
                },
                scrollCursorIntoView: function() {
                    return G
                },
                isEmpty: function() {
                    return B
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                i = n.n(r),
                u = n("401816"),
                s = n.n(u),
                o = n("958551"),
                a = n.n(o),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                m = n.n(f),
                g = n("928429"),
                E = n.n(g),
                S = n("234553"),
                M = n.n(S),
                C = n("65994"),
                A = n.n(C),
                h = n("718144"),
                T = n.n(h),
                p = n("640330"),
                v = n.n(p);

            function x(e, t, n, r) {
                let i = r.getCurrentContent(),
                    u = null;
                null != e && (u = (i = i.createEntity(...e)).getLastCreatedEntityKey());
                let s = i.getFirstBlock(),
                    o = new l.SelectionState({
                        anchorKey: s.getKey(),
                        anchorOffset: t,
                        focusKey: s.getKey(),
                        focusOffset: n
                    });
                return i = l.Modifier.applyEntity(i, o, u), l.EditorState.set(r, {
                    currentContent: i
                })
            }

            function _(e, t, n, r) {
                let i, u;
                let o = t.getCurrentContent(),
                    a = o.getFirstBlock(),
                    c = a.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), i = new l.SelectionState({
                    anchorKey: a.getKey(),
                    anchorOffset: n,
                    focusKey: a.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : i = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = s(o, i);
                return i.isCollapsed() ? (o = l.Modifier.insertText(o, i, e, d, f), u = "insert-characters") : (o = l.Modifier.replaceText(o, i, e, d, f), u = "replace-characters"), l.EditorState.push(t, o, u)
            }

            function O(e, t) {
                switch (e) {
                    case "delete":
                        return T(t);
                    case "delete-word":
                        return m(t);
                    case "backspace":
                        return A(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return a(t);
                    default:
                        return t
                }
            }

            function I(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return v(t);
                    case "move-selection-to-start-of-block":
                        return M(t);
                    case "move-selection-to-end-of-block":
                        return E(t);
                    default:
                        return t
                }
            }

            function b(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function y(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    i = r.getText(),
                    u = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        s = i.substring(e, t);
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
                                start: i,
                                end: u
                            } = e, s = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === i && n.text === s ? (n.processed = !0, l = !0) : (i >= n.start && i < n.end || u > n.start && u <= n.end) && (n.processed = !0, t = x(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = x([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), u.forEach(e => {
                    !e.processed && (t = x(null, e.start, e.end, t))
                }), t
            }

            function N(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function F(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function j(e, t) {
                let n = b(t);
                return _(e, t, 0, n.length)
            }

            function R(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function k(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return R(t.length, e)
            }

            function w(e) {
                return R(0, e)
            }

            function D(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function L(e) {
                let t = b(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = b(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = _("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function G(e) {
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
                let i = l.left - r.left,
                    u = i + e.scrollLeft;
                u < e.scrollLeft ? e.scrollLeft = u - 10 : u > e.scrollLeft + e.offsetWidth && (e.scrollLeft = u - e.offsetWidth + 3)
            }

            function B(e) {
                return 0 === b(e).length
            }
        }
    }
]);