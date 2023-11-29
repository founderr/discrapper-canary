(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49578"], {
        696675: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                MicrophoneIcon: function() {
                    return r
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("669491"),
                n = t("75196");
            let r = e => {
                let {
                    width: s = 24,
                    height: t = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, n.default)(c),
                    width: s,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 2C9.79086 2 8 3.79086 8 6V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V6C16 3.79086 14.2091 2 12 2Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 14.0796 7.05369 17.446 11 17.9381V20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V17.9381C16.9463 17.446 20 14.0796 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })]
                })
            }
        },
        126489: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                StickerSmallIcon: function() {
                    return r
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("669491"),
                n = t("75196");
            let r = e => {
                let {
                    width: s = 24,
                    height: t = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, n.default)(c),
                    width: s,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 3H17C19.2091 3 21 4.79086 21 7V13.5C21 13.7761 20.7761 14 20.5 14H19C16.2386 14 14 16.2386 14 19V20.5C14 20.7761 13.7761 21 13.5 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3ZM6.5 10C7.32843 10 8 9.32843 8 8.5C8 7.67157 7.32843 7 6.5 7C5.67157 7 5 7.67157 5 8.5C5 9.32843 5.67157 10 6.5 10ZM19 8.5C19 9.32843 18.3284 10 17.5 10C16.6716 10 16 9.32843 16 8.5C16 7.67157 16.6716 7 17.5 7C18.3284 7 19 7.67157 19 8.5ZM9.08869 11.4437C8.78148 10.9848 8.16038 10.8618 7.70142 11.169C7.24247 11.4762 7.11947 12.0973 7.42669 12.5563C8.41166 14.0277 10.092 15 11.9999 15C13.9078 15 15.5881 14.0277 16.5731 12.5563C16.8803 12.0973 16.7573 11.4762 16.2984 11.169C15.8394 10.8618 15.2183 10.9848 14.9111 11.4437C14.2815 12.3842 13.2124 13 11.9999 13C10.7874 13 9.71825 12.3842 9.08869 11.4437Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M19 16H20.7305C20.5831 16.324 20.3778 16.6222 20.1213 16.8787L16.8787 20.1213C16.6222 20.3778 16.324 20.5831 16 20.7305V19C16 17.3431 17.3431 16 19 16Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })]
                })
            }
        },
        14526: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return i
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("473374"),
                n = t("195483"),
                r = t("574073");

            function i(e) {
                var s, t;
                let i = (0, r.default)(e.message),
                    c = (0, a.renderSystemTag)({
                        message: e.message,
                        channel: e.channel,
                        user: null !== (t = null === (s = e.message) || void 0 === s ? void 0 : s.author) && void 0 !== t ? t : e.userOverride,
                        compact: !!e.compact,
                        isRepliedMessage: !!e.isRepliedMessage
                    }),
                    u = {};
                return null != c && (u[n.UsernameDecorationTypes.SYSTEM_TAG] = c), (0, l.jsx)(n.default, {
                    ...e,
                    author: i,
                    decorations: u
                })
            }
        },
        862846: function(e, s, t) {
            "use strict";

            function l(e, s) {
                return !!(null != s && e.mentions.includes(s.author.id)) || !1
            }
            t.r(s), t.d(s, {
                default: function() {
                    return l
                }
            })
        },
        943409: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return i
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("469563"),
                n = t("696675"),
                r = t("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: s = 19,
                        height: t = 24,
                        color: a = "currentColor",
                        foreground: n,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: s,
                        height: t,
                        viewBox: "0 0 19 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
                            fill: a,
                            className: n
                        })
                    })
                }, n.MicrophoneIcon, void 0, {
                    size: 24
                })
        },
        437472: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return i
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("469563"),
                n = t("126489"),
                r = t("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: s = 16,
                        height: t = 16,
                        color: a = "currentColor",
                        ...n
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: s,
                        height: t,
                        ...(0, r.default)(n),
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z",
                            fill: a
                        })
                    })
                }, e => {
                    let {
                        width: s = 16,
                        height: t = 16,
                        ...a
                    } = e;
                    return (0, l.jsx)(n.StickerSmallIcon, {
                        width: s,
                        height: t,
                        ...a
                    })
                }, void 0, {
                    size: 16
                })
        },
        93427: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                renderSingleLineMessage: function() {
                    return w
                },
                default: function() {
                    return y
                }
            });
            var l = t("37983"),
                a = t("884691"),
                n = t("414456"),
                r = t.n(n),
                i = t("866227"),
                c = t.n(i),
                u = t("77078"),
                d = t("390236"),
                o = t("865343"),
                C = t("14526"),
                g = t("38600"),
                h = t("119001"),
                f = t("256572"),
                p = t("862846"),
                M = t("24373"),
                E = t("83910"),
                m = t("95689"),
                _ = t("943409"),
                T = t("437472"),
                v = t("8161"),
                N = t("315102"),
                x = t("888400"),
                S = t("449008"),
                R = t("497880"),
                I = t("719347"),
                A = t("49111"),
                L = t("782340"),
                P = t("741566");

            function j(e) {
                let {
                    width: s = 12,
                    height: t = 8,
                    color: a = "currentColor",
                    className: n,
                    foreground: r
                } = e;
                return (0, l.jsx)("svg", {
                    className: n,
                    width: s,
                    height: t,
                    viewBox: "0 0 12 8",
                    children: (0, l.jsx)("path", {
                        d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
                        className: r,
                        fill: a
                    })
                })
            }

            function O(e) {
                let {
                    width: s = 18,
                    height: t = 18,
                    className: a,
                    foreground: n
                } = e;
                return (0, l.jsx)("svg", {
                    className: a,
                    width: s,
                    height: t,
                    viewBox: "0 0 18 18",
                    children: (0, l.jsx)("path", {
                        fill: "#3ba55c",
                        d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
                        className: n
                    })
                })
            }

            function w(e, s, t, a, n) {
                let r, i, c;
                let {
                    iconClass: u,
                    iconSize: d
                } = n, o = null == s || "" === s || Array.isArray(s) && 0 === s.length, C = (0, M.getMessageStickers)(e), g = C.length > 0, h = null != e.interaction, f = e.hasFlag(A.MessageFlags.IS_VOICE_MESSAGE);
                return t ? r = L.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED : e.type === A.MessageTypes.CHANNEL_PINNED_MESSAGE ? r = L.default.Messages.MESSAGE_PINNED : o ? g ? r = L.default.Messages.REPLY_QUOTE_STICKER : h ? r = L.default.Messages.REPLY_QUOTE_COMMAND : f ? r = L.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (r = L.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, c = (0, l.jsx)(m.default, {
                    className: u,
                    width: d,
                    height: d
                })) : i = (0, l.jsx)(R.default, {
                    message: e,
                    content: s,
                    className: a,
                    asPartialPreview: !0
                }), g ? c = (0, l.jsx)(T.default, {
                    className: u,
                    width: d,
                    height: d
                }) : h ? c = (0, l.jsx)(E.default, {
                    className: u,
                    width: d,
                    height: d
                }) : f ? c = (0, l.jsx)(_.default, {
                    className: u,
                    width: d * (19 / 24),
                    height: d
                }) : (e.attachments.length > 0 || e.embeds.length > 0) && (c = (0, l.jsx)(m.default, {
                    className: u,
                    width: d,
                    height: d
                })), {
                    contentPlaceholder: r,
                    renderedContent: i,
                    icon: c
                }
            }

            function y(e) {
                let s;
                let {
                    repliedAuthor: t,
                    baseAuthor: n,
                    baseMessage: i,
                    referencedMessage: M,
                    renderPopout: E
                } = e, m = a.useMemo(() => null != E && M.state === f.ReferencedMessageState.LOADED ? e => E(e, M.message) : void 0, [M, E]), _ = a.useContext(d.default), T = function(e, s, t) {
                    let {
                        referencedMessage: a,
                        compact: n,
                        isReplyAuthorBlocked: i,
                        repliedAuthor: c,
                        showAvatarPopout: d,
                        onClickAvatar: o,
                        onContextMenu: C,
                        onPopoutRequestClose: g
                    } = e;
                    if (n || a.state !== f.ReferencedMessageState.LOADED || i) return (0, l.jsx)("div", {
                        className: P.replyBadge,
                        children: (0, l.jsx)(j, {
                            className: P.replyIcon
                        })
                    });
                    if (a.message.type === A.MessageTypes.USER_JOIN || a.message.type === A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || a.message.type === A.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || a.message.type === A.MessageTypes.GUILD_GAMING_STATS_PROMPT) return (0, l.jsx)(O, {
                        className: P.userJoinSystemMessageIcon
                    });
                    if (a.message.type === A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, l.jsx)(v.default, {
                        className: P.ticketIcon
                    });
                    let h = () => {
                        var e, t, n, i, u;
                        return e = a.message.author, t = c, n = s, i = o, u = C, (0, l.jsx)("img", {
                            alt: "",
                            src: (null == t ? void 0 : t.guildMemberAvatar) != null && null != n ? (0, N.getGuildMemberAvatarURLSimple)({
                                guildId: n,
                                userId: e.id,
                                avatar: t.guildMemberAvatar
                            }) : e.getAvatarURL(n, 16),
                            onClick: i,
                            onContextMenu: u,
                            className: r({
                                [P.replyAvatar]: !0,
                                [P.clickable]: null != i
                            })
                        })
                    };
                    return null != t && null != d ? (0, l.jsx)(u.Popout, {
                        renderPopout: t,
                        shouldShow: d,
                        position: "right",
                        onRequestClose: g,
                        children: h
                    }) : h()
                }(e, _, m), R = function(e, s) {
                    let {
                        baseMessage: t,
                        channel: a,
                        referencedMessage: n,
                        showUsernamePopout: r,
                        onClickUsername: i,
                        onContextMenu: c,
                        onPopoutRequestClose: u
                    } = e, d = (null == n ? void 0 : n.state) === f.ReferencedMessageState.LOADED ? n.message : void 0;
                    return null == d || d.type === A.MessageTypes.USER_JOIN || d.type === A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || d.type === A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === A.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === A.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : (0, l.jsx)(C.default, {
                        message: d,
                        channel: a,
                        compact: !0,
                        withMentionPrefix: (0, p.default)(t, d),
                        showPopout: r,
                        renderPopout: s,
                        onClick: i,
                        onContextMenu: c,
                        onPopoutRequestClose: u,
                        isRepliedMessage: !0
                    })
                }(e, m), y = function(e) {
                    let {
                        content: s,
                        referencedMessage: t,
                        isReplyAuthorBlocked: a
                    } = e, n = t.state !== f.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
                    switch (t.state) {
                        case f.ReferencedMessageState.LOADED: {
                            let {
                                contentPlaceholder: e,
                                renderedContent: i,
                                icon: c
                            } = w(t.message, s, a, P.repliedTextContent, {
                                iconClass: P.repliedTextContentIcon,
                                iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            }), d = t.message.isPoll() ? (0, l.jsx)(h.default, {
                                isRepliedPoll: !0,
                                className: P.pollBadgeReplied
                            }) : null;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.Clickable, {
                                    className: r(P.repliedTextPreview, P.clickable),
                                    onClick: n,
                                    children: (0, l.jsx)(u.BlockInteractions, {
                                        children: null != i ? i : (0, l.jsx)("span", {
                                            className: P.repliedTextPlaceholder,
                                            children: e
                                        })
                                    })
                                }), c, d]
                            })
                        }
                        case f.ReferencedMessageState.NOT_LOADED:
                            return (0, l.jsx)(u.Clickable, {
                                className: r(P.repliedTextPreview, P.clickable),
                                onClick: n,
                                children: (0, l.jsx)("span", {
                                    className: P.repliedTextPlaceholder,
                                    children: L.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                                })
                            });
                        case f.ReferencedMessageState.DELETED:
                            return (0, l.jsx)("div", {
                                className: P.repliedTextPreview,
                                children: (0, l.jsx)("span", {
                                    className: P.repliedTextPlaceholder,
                                    children: L.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                                })
                            });
                        default:
                            (0, S.assertNever)(t)
                    }
                }(e), D = a.useMemo(() => e.compact ? (0, g.default)((0, x.dateFormat)(c(), "LT")) : null, [e.compact]);
                return null != t && null != n && (s = L.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
                    author: null == n ? void 0 : n.nick,
                    repliedAuthor: null == t ? void 0 : t.nick
                })), (0, l.jsxs)("div", {
                    id: (0, o.getMessageReplyId)(i),
                    className: r(P.repliedMessage, D),
                    "aria-label": s,
                    children: [T, R, y]
                })
            }
        }
    }
]);