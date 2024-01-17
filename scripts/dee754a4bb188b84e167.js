(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47507"], {
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
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
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
                i = n("206230");

            function s(e, t, n) {
                let s = (0, a.useStateFromStores)([i.default], () => i.default.keyboardModeEnabled),
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
                    isEnabled: s,
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
                    return p
                },
                IncreasedActivityForumTagOverflow: function() {
                    return S
                },
                default: function() {
                    return T
                },
                ForumTagOverflow: function() {
                    return A
                }
            }), n("222007");
            var l, r, a = n("37983"),
                i = n("884691"),
                s = n("414456"),
                u = n.n(s),
                o = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                m = n("206230"),
                g = n("385976"),
                E = n("945330"),
                h = n("782340"),
                C = n("951779");

            function p(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: p,
                    selected: S,
                    ariaLabel: T
                } = e, {
                    name: A,
                    emojiId: v,
                    emojiName: x
                } = t, M = null != p, [y, b] = i.useState(!1), F = (0, c.useStateFromStores)([g.default], () => null != v ? g.default.getUsableCustomEmojiById(v) : null), I = M || null != s, N = (!M || !y) && (null != v || null != x), L = 0 === n, _ = i.useRef(null), j = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), O = (0, a.jsxs)(a.Fragment, {
                    children: [N ? (0, a.jsx)(f.default, {
                        className: u(C.emoji, {
                            [C.small]: L
                        }),
                        emojiId: v,
                        emojiName: x,
                        animated: !!(null == F ? void 0 : F.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, y && M && (0, a.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, a.jsx)(E.default, {
                            className: C.close
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: C.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: A
                    })]
                }), R = {
                    key: t.id,
                    className: u(C.pill, C.increasedActivityPill, {
                        [C.disabled]: l,
                        [C.clickable]: I,
                        [C.increasedActivitySmall]: L,
                        [C.selected]: S
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == p || p(t), !j && null != _.current && _.current.blur()
                    },
                    onMouseEnter: () => M && b(!0),
                    onMouseLeave: () => M && b(!1)
                }, k = (0, o.useListItem)("forum-tag-".concat(t.id));
                return I ? (0, a.jsx)(d.Clickable, {
                    ...k,
                    innerRef: _,
                    focusProps: {
                        ringTarget: _
                    },
                    "aria-label": null != T ? T : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: A
                    }),
                    role: "button",
                    "aria-pressed": S,
                    ...R,
                    children: O
                }) : (0, a.jsx)("div", {
                    "aria-label": null != T ? T : h.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: A
                    }),
                    ...R,
                    children: O
                })
            }

            function S(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, a.jsx)(d.Tooltip, {
                    "aria-label": h.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(T, {
                            tag: e,
                            className: C.tooltipPill,
                            size: T.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: u(C.pill, C.increasedActivityPill, {
                            [C.increasedActivitySmall]: r
                        }),
                        children: (0, a.jsxs)(d.Text, {
                            className: C.increasedActivityText,
                            variant: r ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function T(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: p,
                    selected: S,
                    ariaLabel: T
                } = e, {
                    name: A,
                    emojiId: v,
                    emojiName: x
                } = t, M = null != p, [y, b] = i.useState(!1), F = (0, c.useStateFromStores)([g.default], () => null != v ? g.default.getUsableCustomEmojiById(v) : null), I = M || null != s, N = (!M || !y) && (null != v || null != x), L = 0 === n, _ = i.useRef(null), j = (0, c.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), O = (0, a.jsxs)(a.Fragment, {
                    children: [N ? (0, a.jsx)(f.default, {
                        className: u(C.emoji, {
                            [C.small]: L
                        }),
                        emojiId: v,
                        emojiName: x,
                        animated: !!(null == F ? void 0 : F.animated),
                        size: "reaction"
                    }) : null, y && M && (0, a.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, a.jsx)(E.default, {
                            className: C.close
                        })
                    }), (0, a.jsx)(d.Text, {
                        variant: L ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: A
                    })]
                }), R = {
                    key: t.id,
                    className: u(C.pill, {
                        [C.disabled]: l,
                        [C.clickable]: I,
                        [C.small]: L,
                        [C.selected]: S
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == p || p(t), !j && null != _.current && _.current.blur()
                    },
                    onMouseEnter: () => M && b(!0),
                    onMouseLeave: () => M && b(!1)
                }, k = (0, o.useListItem)("forum-tag-".concat(t.id));
                return I ? (0, a.jsx)(d.Clickable, {
                    ...k,
                    innerRef: _,
                    focusProps: {
                        ringTarget: _
                    },
                    "aria-label": null != T ? T : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: A
                    }),
                    role: "button",
                    "aria-pressed": S,
                    ...R,
                    children: O
                }) : (0, a.jsx)("div", {
                    ...R,
                    children: O
                })
            }

            function A(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, a.jsx)(d.Tooltip, {
                    "aria-label": h.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(T, {
                            tag: e,
                            className: C.tooltipPill,
                            size: T.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: u(C.pill, {
                            [C.small]: r
                        }),
                        children: (0, a.jsxs)(d.Text, {
                            variant: r ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", T.Sizes = l
        },
        287850: function(e, t, n) {
            "use strict";
            let l, r, a;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("424973");
            var i, s, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                m = n("21121"),
                g = n("934306"),
                E = n("288518"),
                h = n("486503"),
                C = n("233069"),
                p = n("42203"),
                S = n("305961"),
                T = n("660478"),
                A = n("282109"),
                v = n("697218"),
                x = n("299039"),
                M = n("724210");
            (s = i || (i = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let y = new d.default(e => {
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

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let l = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = x.default.fromTimestamp(e);
                        return x.default.compare(l, t) > 0 ? l : t
                    }
                    return l
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: A.default.isMessagesFavorite(e.id) && (0, m.isInMainTabsExperiment)(),
                    isRequest: E.default.isMessageRequest(e.id) || h.default.isSpam(e.id)
                }
            }

            function F() {
                y.clear(), Object.values(p.default.getMutablePrivateChannels()).forEach(e => {
                    y.set(e.id, b(e))
                }), (0, m.isInMainTabsExperiment)() && (0, g.isSplitMessagesTab)() && A.default.getAddedToMessages().forEach(e => {
                    let t = p.default.getChannel(e);
                    null != t && (0, C.isGuildTextChannelType)(t.type) && y.set(t.id, b(t))
                })
            }

            function I() {
                let e = p.default.getMutablePrivateChannels();
                for (let t in e) y.set(t, b(e[t]))
            }
            let N = (l = [], r = [], a = [], () => {
                let e = y.values("FAVORITE"),
                    t = y.values("DEFAULT");
                return (l !== e || r !== t) && (a = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), l = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), r = t), a
            });
            class L extends c.default.Store {
                initialize() {
                    this.waitFor(p.default, S.default, v.default, E.default, A.default), this.syncWith([A.default, E.default], F)
                }
                getPrivateChannelIds() {
                    return N()
                }
                getSortedChannels() {
                    return [y.values("FAVORITE"), y.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return y.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: l
                        } = t;
                        e[n] = l
                    }), e
                }
            }
            L.displayName = "PrivateChannelSortStore";
            var _ = new L(f.default, {
                CONNECTION_OPEN: F,
                CONNECTION_OPEN_SUPPLEMENTAL: F,
                OVERLAY_INITIALIZE: F,
                CACHE_LOADED: I,
                CACHE_LOADED_LAZY: I,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, C.isPrivate)(e.type) || y.has(e.id)) && y.set(e.id, b(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, C.isPrivate)(t.type) || t.id === M.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    y.set(t.id, b(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return y.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!y.has(t)) return !1;
                    let l = p.default.getChannel(t);
                    return null != l && y.set(t, b(l, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return y.delete(t)
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
                a = n.n(r),
                i = n("77078"),
                s = n("739926");
            let u = {
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
                    size: u = o.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: m
                } = e;
                return (0, l.jsx)(i.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: o,
                            ...g
                        } = e;
                        return (0, l.jsx)(i.Clickable, {
                            ...g,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: a(t, s.button, r, u, {
                                [s.disabled]: f
                            }),
                            onClick: e => {
                                null == o || o(), d(e)
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
                a = n("410507"),
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
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                            fill: r,
                            className: a
                        })
                    })
                }, a.FiltersHorizontalIcon, void 0, {
                    size: 16
                })
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return a
                },
                updateContent: function() {
                    return y
                },
                deleteContent: function() {
                    return b
                },
                miscCommand: function() {
                    return F
                },
                getFirstTextBlock: function() {
                    return I
                },
                applyTokensAsEntities: function() {
                    return N
                },
                createEmptyEditorState: function() {
                    return L
                },
                clearContent: function() {
                    return _
                },
                replaceAllContent: function() {
                    return j
                },
                setCollapsedSelection: function() {
                    return O
                },
                setCollapsedEndSelection: function() {
                    return R
                },
                setCollapsedStartSelection: function() {
                    return k
                },
                setToStartSelection: function() {
                    return w
                },
                setToEndSelection: function() {
                    return P
                },
                truncateContent: function() {
                    return H
                },
                scrollCursorIntoView: function() {
                    return B
                },
                isEmpty: function() {
                    return D
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                a = n.n(r),
                i = n("401816"),
                s = n.n(i),
                u = n("958551"),
                o = n.n(u),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                m = n.n(f),
                g = n("928429"),
                E = n.n(g),
                h = n("234553"),
                C = n.n(h),
                p = n("65994"),
                S = n.n(p),
                T = n("718144"),
                A = n.n(T),
                v = n("640330"),
                x = n.n(v);

            function M(e, t, n, r) {
                let a = r.getCurrentContent(),
                    i = null;
                null != e && (i = (a = a.createEntity(...e)).getLastCreatedEntityKey());
                let s = a.getFirstBlock(),
                    u = new l.SelectionState({
                        anchorKey: s.getKey(),
                        anchorOffset: t,
                        focusKey: s.getKey(),
                        focusOffset: n
                    });
                return a = l.Modifier.applyEntity(a, u, i), l.EditorState.set(r, {
                    currentContent: a
                })
            }

            function y(e, t, n, r) {
                let a, i;
                let u = t.getCurrentContent(),
                    o = u.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), a = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : a = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = s(u, a);
                return a.isCollapsed() ? (u = l.Modifier.insertText(u, a, e, d, f), i = "insert-characters") : (u = l.Modifier.replaceText(u, a, e, d, f), i = "replace-characters"), l.EditorState.push(t, u, i)
            }

            function b(e, t) {
                switch (e) {
                    case "delete":
                        return A(t);
                    case "delete-word":
                        return m(t);
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

            function F(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return x(t);
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

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    a = r.getText(),
                    i = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        s = a.substring(e, t);
                    i.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: s
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (i.forEach(n => {
                            let {
                                type: r,
                                start: a,
                                end: i
                            } = e, s = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === a && n.text === s ? (n.processed = !0, l = !0) : (a >= n.start && a < n.end || i > n.start && i <= n.end) && (n.processed = !0, t = M(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = M([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), i.forEach(e => {
                    !e.processed && (t = M(null, e.start, e.end, t))
                }), t
            }

            function L(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function _(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function j(e, t) {
                let n = I(t);
                return y(e, t, 0, n.length)
            }

            function O(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function R(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return O(t.length, e)
            }

            function k(e) {
                return O(0, e)
            }

            function w(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function P(e) {
                let t = I(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function H(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = I(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = y("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function B(e) {
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
                    i = a + e.scrollLeft;
                i < e.scrollLeft ? e.scrollLeft = i - 10 : i > e.scrollLeft + e.offsetWidth && (e.scrollLeft = i - e.offsetWidth + 3)
            }

            function D(e) {
                return 0 === I(e).length
            }
        }
    }
]);