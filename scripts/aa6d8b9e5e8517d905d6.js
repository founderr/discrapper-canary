(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79312"], {
        410507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FiltersHorizontalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
                        className: o
                    })
                })
            }
        },
        510889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                r = n("974667"),
                i = n("446674"),
                s = n("206230");

            function o(e, t, n) {
                let o = (0, i.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
                    a = l.useCallback(e => {
                        let n = document.querySelector(e),
                            l = t.current;
                        null != n && null != l && (n.focus(), l.scrollIntoViewNode({
                            node: n,
                            padding: 80
                        }))
                    }, [t]),
                    u = l.useCallback(() => new Promise(e => {
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
                    isEnabled: o,
                    setFocus: a,
                    scrollToStart: u,
                    scrollToEnd: c,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return A
                },
                IncreasedActivityForumTagOverflow: function() {
                    return h
                },
                default: function() {
                    return M
                },
                ForumTagOverflow: function() {
                    return T
                }
            }), n("222007");
            var l, r, i = n("37983"),
                s = n("884691"),
                o = n("414456"),
                a = n.n(o),
                u = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                m = n("206230"),
                g = n("385976"),
                E = n("945330"),
                S = n("782340"),
                C = n("951779");

            function A(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: o,
                    onRemove: A,
                    selected: h,
                    ariaLabel: M
                } = e, {
                    name: T,
                    emojiId: p,
                    emojiName: v
                } = t, x = null != A, [O, y] = s.useState(!1), _ = (0, c.useStateFromStores)([g.default], () => null != p ? g.default.getUsableCustomEmojiById(p) : null), I = x || null != o, b = (!x || !O) && (null != p || null != v), N = 0 === n, F = s.useRef(null), j = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), k = (0, i.jsxs)(i.Fragment, {
                    children: [b ? (0, i.jsx)(f.default, {
                        className: a(C.emoji, {
                            [C.small]: N
                        }),
                        emojiId: p,
                        emojiName: v,
                        animated: !!(null == _ ? void 0 : _.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, O && x && (0, i.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, i.jsx)(E.default, {
                            className: C.close
                        })
                    }), (0, i.jsx)(d.Text, {
                        className: C.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: T
                    })]
                }), R = {
                    key: t.id,
                    className: a(C.pill, C.increasedActivityPill, {
                        [C.disabled]: l,
                        [C.clickable]: I,
                        [C.increasedActivitySmall]: N,
                        [C.selected]: h
                    }, r),
                    onClick: e => {
                        null == o || o(e), null == A || A(t), !j && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => x && y(!0),
                    onMouseLeave: () => x && y(!1)
                }, D = (0, u.useListItem)("forum-tag-".concat(t.id));
                return I ? (0, i.jsx)(d.Clickable, {
                    ...D,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != M ? M : S.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: T
                    }),
                    role: "button",
                    "aria-pressed": h,
                    ...R,
                    children: k
                }) : (0, i.jsx)("div", {
                    "aria-label": null != M ? M : S.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: T
                    }),
                    ...R,
                    children: k
                })
            }

            function h(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, i.jsx)(d.Tooltip, {
                    "aria-label": S.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(M, {
                            tag: e,
                            className: C.tooltipPill,
                            size: M.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: a(C.pill, C.increasedActivityPill, {
                            [C.increasedActivitySmall]: r
                        }),
                        children: (0, i.jsxs)(d.Text, {
                            className: C.increasedActivityText,
                            variant: r ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function M(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: o,
                    onRemove: A,
                    selected: h,
                    ariaLabel: M
                } = e, {
                    name: T,
                    emojiId: p,
                    emojiName: v
                } = t, x = null != A, [O, y] = s.useState(!1), _ = (0, c.useStateFromStores)([g.default], () => null != p ? g.default.getUsableCustomEmojiById(p) : null), I = x || null != o, b = (!x || !O) && (null != p || null != v), N = 0 === n, F = s.useRef(null), j = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), k = (0, i.jsxs)(i.Fragment, {
                    children: [b ? (0, i.jsx)(f.default, {
                        className: a(C.emoji, {
                            [C.small]: N
                        }),
                        emojiId: p,
                        emojiName: v,
                        animated: !!(null == _ ? void 0 : _.animated),
                        size: "reaction"
                    }) : null, O && x && (0, i.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, i.jsx)(E.default, {
                            className: C.close
                        })
                    }), (0, i.jsx)(d.Text, {
                        variant: N ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: T
                    })]
                }), R = {
                    key: t.id,
                    className: a(C.pill, {
                        [C.disabled]: l,
                        [C.clickable]: I,
                        [C.small]: N,
                        [C.selected]: h
                    }, r),
                    onClick: e => {
                        null == o || o(e), null == A || A(t), !j && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => x && y(!0),
                    onMouseLeave: () => x && y(!1)
                }, D = (0, u.useListItem)("forum-tag-".concat(t.id));
                return I ? (0, i.jsx)(d.Clickable, {
                    ...D,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != M ? M : S.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: T
                    }),
                    role: "button",
                    "aria-pressed": h,
                    ...R,
                    children: k
                }) : (0, i.jsx)("div", {
                    ...R,
                    children: k
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
                        children: t.map(e => (0, i.jsx)(M, {
                            tag: e,
                            className: C.tooltipPill,
                            size: M.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: a(C.pill, {
                            [C.small]: r
                        }),
                        children: (0, i.jsxs)(d.Text, {
                            variant: r ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", M.Sizes = l
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
                s = n("979911"),
                o = n("692038"),
                a = n("42203"),
                u = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let m = {},
                g = 0,
                E = {},
                S = {},
                C = (e, t) => {
                    let n = (0, s.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, s.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    m[n] = l, g++
                },
                A = e => m[e],
                h = e => {
                    let t = m[e];
                    null != t && delete m[e], g++
                };

            function M(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return C(t, n), !0
            }

            function T(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, i = null === (t = a.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == i) return !1;
                let s = S[i],
                    o = r.reduce((e, t) => {
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
                    }, s);
                return null != o && S[i] !== o && (S[i] = o, !0)
            }
            class p extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (m = e.automodFailedMessages, E = e.mentionRaidDetectionByGuild)
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
                    return null == e ? null : null !== (t = A(e)) && void 0 !== t ? t : null
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
                    let l = (0, o.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (S[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: M,
                MESSAGE_EDIT_FAILED_AUTOMOD: M,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return h(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    h(n)
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
                    return a
                },
                CircleIconButtonSizes: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                o = n("739926");
            let a = {
                    TERTIARY: o.tertiary,
                    SECONDARY: o.secondary,
                    PRIMARY: o.primary
                },
                u = {
                    SIZE_24: o.size24,
                    SIZE_32: o.size32,
                    SIZE_36: o.size36
                };

            function c(e) {
                let {
                    className: t,
                    tooltip: n,
                    color: r,
                    size: a = u.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: m
                } = e;
                return (0, l.jsx)(s.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: u,
                            ...g
                        } = e;
                        return (0, l.jsx)(s.Clickable, {
                            ...g,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: i(t, o.button, r, a, {
                                [o.disabled]: f
                            }),
                            onClick: e => {
                                null == u || u(), d(e)
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
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("410507"),
                s = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
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
                }, i.FiltersHorizontalIcon, void 0, {
                    size: 16
                })
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return i
                },
                updateContent: function() {
                    return O
                },
                deleteContent: function() {
                    return y
                },
                miscCommand: function() {
                    return _
                },
                getFirstTextBlock: function() {
                    return I
                },
                applyTokensAsEntities: function() {
                    return b
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
                    return k
                },
                setCollapsedEndSelection: function() {
                    return R
                },
                setCollapsedStartSelection: function() {
                    return D
                },
                setToStartSelection: function() {
                    return L
                },
                setToEndSelection: function() {
                    return w
                },
                truncateContent: function() {
                    return B
                },
                scrollCursorIntoView: function() {
                    return G
                },
                isEmpty: function() {
                    return U
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                i = n.n(r),
                s = n("401816"),
                o = n.n(s),
                a = n("958551"),
                u = n.n(a),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                m = n.n(f),
                g = n("928429"),
                E = n.n(g),
                S = n("234553"),
                C = n.n(S),
                A = n("65994"),
                h = n.n(A),
                M = n("718144"),
                T = n.n(M),
                p = n("640330"),
                v = n.n(p);

            function x(e, t, n, r) {
                let i = r.getCurrentContent(),
                    s = null;
                null != e && (s = (i = i.createEntity(...e)).getLastCreatedEntityKey());
                let o = i.getFirstBlock(),
                    a = new l.SelectionState({
                        anchorKey: o.getKey(),
                        anchorOffset: t,
                        focusKey: o.getKey(),
                        focusOffset: n
                    });
                return i = l.Modifier.applyEntity(i, a, s), l.EditorState.set(r, {
                    currentContent: i
                })
            }

            function O(e, t, n, r) {
                let i, s;
                let a = t.getCurrentContent(),
                    u = a.getFirstBlock(),
                    c = u.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), i = new l.SelectionState({
                    anchorKey: u.getKey(),
                    anchorOffset: n,
                    focusKey: u.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : i = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = o(a, i);
                return i.isCollapsed() ? (a = l.Modifier.insertText(a, i, e, d, f), s = "insert-characters") : (a = l.Modifier.replaceText(a, i, e, d, f), s = "replace-characters"), l.EditorState.push(t, a, s)
            }

            function y(e, t) {
                switch (e) {
                    case "delete":
                        return T(t);
                    case "delete-word":
                        return m(t);
                    case "backspace":
                        return h(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return u(t);
                    default:
                        return t
                }
            }

            function _(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return v(t);
                    case "move-selection-to-start-of-block":
                        return C(t);
                    case "move-selection-to-end-of-block":
                        return E(t);
                    default:
                        return t
                }
            }

            function I(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function b(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    i = r.getText(),
                    s = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        o = i.substring(e, t);
                    s.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: o
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (s.forEach(n => {
                            let {
                                type: r,
                                start: i,
                                end: s
                            } = e, o = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === i && n.text === o ? (n.processed = !0, l = !0) : (i >= n.start && i < n.end || s > n.start && s <= n.end) && (n.processed = !0, t = x(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = x([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), s.forEach(e => {
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
                let n = I(t);
                return O(e, t, 0, n.length)
            }

            function k(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function R(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return k(t.length, e)
            }

            function D(e) {
                return k(0, e)
            }

            function L(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function w(e) {
                let t = I(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function B(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = I(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = O("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
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
                    s = i + e.scrollLeft;
                s < e.scrollLeft ? e.scrollLeft = s - 10 : s > e.scrollLeft + e.offsetWidth && (e.scrollLeft = s - e.offsetWidth + 3)
            }

            function U(e) {
                return 0 === I(e).length
            }
        }
    }
]);