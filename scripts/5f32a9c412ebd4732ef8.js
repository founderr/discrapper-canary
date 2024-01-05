(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33625"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                i = n.n(r),
                u = n("587974"),
                l = n("315102"),
                d = n("524768"),
                c = n("616674"),
                o = n("363577");

            function m(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: m,
                    className: f,
                    selectable: _ = !1,
                    onFocus: g,
                    onBlur: E,
                    onMouseOver: S,
                    onMouseLeave: p,
                    ...h
                } = e, [I, M] = s.useState(!1), v = s.useCallback(() => {
                    M(!0), null == g || g()
                }, [g]), R = s.useCallback(() => {
                    M(!1), null == E || E()
                }, [E]), y = s.useCallback(() => {
                    M(!0), null == S || S()
                }, [S]), A = s.useCallback(() => {
                    M(!1), null == p || p()
                }, [p]), k = s.useMemo(() => {
                    if (t.type === d.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return l.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return o
                }, [t, r]);
                return (0, a.jsx)("div", {
                    ...h,
                    className: i(c.wrapper, f, {
                        [c.selectable]: _,
                        [c.selected]: _ && n
                    }),
                    onFocus: v,
                    onBlur: R,
                    onMouseOver: y,
                    onMouseLeave: A,
                    children: (0, a.jsx)(u.default, {
                        className: c.mask,
                        mask: _ && (n || I) ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: m,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: r,
                                height: m
                            },
                            src: k
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("83910"),
                u = n("93393"),
                l = n("317041"),
                d = n("749296");
            let c = e => {
                switch (e.id) {
                    case l.BuiltInSectionId.BUILT_IN:
                        return i.default;
                    case l.BuiltInSectionId.FRECENCY:
                        return u.default;
                    default:
                        return
                }
            };

            function o(e) {
                let {
                    section: t,
                    className: n,
                    width: s,
                    height: i,
                    padding: u,
                    isSelected: l,
                    selectable: o = !1,
                    ...m
                } = e, f = c(t);
                return (0, a.jsx)("div", {
                    className: r(d.wrapper, n, {
                        [d.selectable]: o,
                        [d.selected]: o && l
                    }),
                    style: {
                        width: s,
                        height: i,
                        padding: null != u ? u : 0
                    },
                    children: null != f ? (0, a.jsx)(f, {
                        className: d.icon,
                        width: s,
                        height: i,
                        ...m
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return u
                },
                pxToRem: function() {
                    return l
                },
                getCommandQuery: function() {
                    return d
                }
            });
            var a = n("524768"),
                s = n("991630"),
                r = n("943161"),
                i = n("317041");
            let u = e => e.type === a.ApplicationCommandSectionType.BUILT_IN ? r.default : s.default;

            function l(e) {
                return "".concat(e / 16, "rem")
            }

            function d(e, t) {
                let n = t,
                    a = !1,
                    s = t.indexOf(":");
                if (s >= 0) {
                    let e = t.lastIndexOf(" ", s);
                    e >= 0 ? (t = t.substring(0, e), a = !0) : t = t.substring(0, s)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", i.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > i.MAX_SUBCOMMAND_LEVEL && (a = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (a = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: a
                }
            }
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return _
                },
                updateReminderDueAt: function() {
                    return g
                },
                toggleMessageReminders: function() {
                    return E
                },
                completeMessageReminders: function() {
                    return S
                },
                cleanupMessageReminders: function() {
                    return p
                },
                fetchAndUpdateSavedMessages: function() {
                    return M
                }
            });
            var a = n("872717"),
                s = n("913144"),
                r = n("679653"),
                i = n("42203"),
                u = n("305961"),
                l = n("27618"),
                d = n("697218"),
                c = n("599110"),
                o = n("520899"),
                m = n("988864"),
                f = n("49111");

            function _(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), I([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = i.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = u.default.getGuild(t.guild_id),
                            a = "",
                            s = (0, r.computeChannelName)(t, d.default, l.default, !0);
                        if (t.isPrivate()) a = s;
                        else if (t.isThread()) {
                            let e = i.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, r.computeChannelName)(e, d.default, l.default, !0);
                            a = "".concat(n, " > ").concat(s)
                        } else a = s;
                        let c = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: a,
                            messageSummary: c.length > 200 ? "".concat(c.slice(0, 197), "...") : c,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function g(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let n = o.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && I([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function E(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), s.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function S(e) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let t = o.default.getMessageReminders();
                I([], t.filter(t => t.messageId === e))
            }

            function p() {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let e = o.default.getMessageReminders();
                e.some(e => e.complete) && I([], e.filter(e => e.complete))
            }

            function h(e) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), s.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function I(e, t) {
                (0 !== e.length || 0 !== t.length) && a.default.post({
                    url: f.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(m.savedMessageToServer),
                        removed: t.map(m.savedMessageToServer)
                    }
                }).then(e => {
                    h(e.body.saved_messages.map(m.savedMessageToClient))
                })
            }

            function M() {
                return o.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: f.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(m.savedMessageToClient);
                    h(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_message_todos_staff_only",
                label: "Message TODO list",
                defaultConfig: {
                    showReminders: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show message TODOs CTA",
                    config: {
                        showReminders: !0
                    }
                }]
            });
            var r = s
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("446674"),
                s = n("913144"),
                r = n("718517");
            let i = [],
                u = new Set,
                l = 0;
            class d extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * r.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return i
                }
                isMessageReminder(e) {
                    let t = i.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return i.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - l < 1 * r.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return u.has(e)
                }
                getState() {
                    return {
                        messages: i
                    }
                }
            }
            d.displayName = "MessageRemindersStore";
            var c = new d(s.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    l = new Date().getTime(), i = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && u.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && u.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = i.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    i[a] = {
                        ...i[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    u.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return r
                },
                savedMessageToClient: function() {
                    return i
                },
                savedMessageHasMetadata: function() {
                    return u
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return l
                }
            });
            var a = n("718517"),
                s = n("782340");

            function r(e) {
                var t;
                return {
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    saved_at: e.savedAt.toISOString(),
                    author_summary: e.authorSummary,
                    channel_summary: e.channelSummary,
                    message_summary: e.messageSummary,
                    guild_id: e.guildId,
                    author_id: e.authorId,
                    notes: e.notes,
                    due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
                }
            }

            function i(e) {
                return {
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    savedAt: new Date(e.saved_at),
                    authorSummary: e.author_summary,
                    channelSummary: e.channel_summary,
                    messageSummary: e.message_summary,
                    guildId: 0 === e.guild_id ? void 0 : e.guild_id,
                    authorId: 0 === e.author_id ? void 0 : e.author_id,
                    notes: e.notes,
                    dueAt: null != e.due_at ? new Date(e.due_at) : void 0
                }
            }

            function u(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let l = [{
                duration: a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: a.default.Millis.DAY,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: a.default.Millis.WEEK,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        178207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackStickerPickerOpen: function() {
                    return d
                },
                trackStickerFavorited: function() {
                    return c
                },
                trackStickerSearchStart: function() {
                    return o
                },
                trackStickerSearchResultsViewed: function() {
                    return m
                },
                trackStickerSearchSelect: function() {
                    return f
                },
                trackStickerSelect: function() {
                    return _
                },
                trackStickerSearchEmpty: function() {
                    return g
                }
            });
            var a = n("716241"),
                s = n("599110"),
                r = n("161585"),
                i = n("49111"),
                u = n("13030"),
                l = n("646718");
            let d = e => {
                    let {
                        containerWidth: t,
                        favoriteStickers: n,
                        frequentlyUsedStickers: s,
                        guildStickers: l,
                        stickersTotal: d
                    } = e;
                    a.default.trackWithMetadata(i.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: u.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_custom_expressions_favorites: n.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_standard_expressions_favorites: n.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_expressions_frecent: s.length,
                        num_custom_expressions_frecent: s.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_animated_expressions_frecent: s.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_standard_expressions_frecent: s.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_current_guild_expressions: l.length,
                        num_custom_expressions_total: d
                    })
                },
                c = e => {
                    let t, {
                        sticker: n,
                        location: s
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(i.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: s,
                        expression_type: u.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                o = () => {
                    s.default.track(i.AnalyticEvents.SEARCH_STARTED, {
                        search_type: i.SearchTypes.STICKER
                    })
                },
                m = (e, t, n) => {
                    a.default.trackWithMetadata(i.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: i.SearchTypes.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                f = (e, t, n) => {
                    let s;
                    let {
                        sticker: u
                    } = e;
                    u.type === r.MetaStickerType.GUILD && (s = u.guild_id), a.default.trackWithMetadata(i.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: u.id,
                        search_type: i.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: s,
                        sticker_id: u.id,
                        query: t
                    })
                },
                _ = e => {
                    let t;
                    let {
                        sticker: n,
                        category: s
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(i.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: l.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: s,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                g = e => {
                    null != e && "" !== e && a.default.trackWithMetadata(i.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: i.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var a, s, r = n("37983");
            n("884691");
            var i = n("414456"),
                u = n.n(i),
                l = n("77078"),
                d = n("36694"),
                c = n("381546"),
                o = n("68238"),
                m = n("423487"),
                f = n("557296");
            (a = s || (s = {}))[a.WARNING = 0] = "WARNING", a[a.INFO = 1] = "INFO", a[a.ERROR = 2] = "ERROR", a[a.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: a,
                    textColor: s = "text-normal",
                    textVariant: i = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return m.default;
                        case 1:
                            return o.default;
                        case 2:
                            return c.default;
                        case 3:
                            return d.default
                    }
                }(n), g = function(e) {
                    switch (e) {
                        case 0:
                            return f.warning;
                        case 1:
                            return f.info;
                        case 2:
                            return f.error;
                        case 3:
                            return f.positive
                    }
                }(n);
                return (0, r.jsxs)("div", {
                    className: u(f.container, g, a),
                    children: [(0, r.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, r.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, r.jsx)(l.Text, {
                        className: f.text,
                        color: s,
                        variant: i,
                        children: t
                    })]
                })
            }
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                i = n.n(r),
                u = n("77078"),
                l = n("782340"),
                d = n("440318");
            let c = {
                BLOCK: d.block,
                INLINE: d.inline
            };
            class o extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = c.BLOCK,
                        style: r
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: i(t, s),
                        style: r,
                        children: [(0, a.jsxs)(u.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: d.pro,
                            children: [l.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(u.Text, {
                            className: i(d.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            o.Types = c;
            var m = o
        },
        566998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("281862"),
                i = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: s,
                            d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                        })
                    })
                }, r.PinIcon, void 0, {
                    size: 24
                })
        }
    }
]);