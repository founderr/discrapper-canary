(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82802"], {
        445356: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08e581a604e6635d1424.svg"
        },
        85941: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ListBulletsIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
                        className: i
                    })
                })
            }
        },
        569912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("65597"),
                a = n("385976"),
                r = n("867805");

            function u(e, t) {
                let n = (0, l.default)([a.default], () => null != e ? a.default.getCustomEmojiById(e) : null, [e]),
                    u = null != t ? r.default.getByName(r.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: u
                }
            }
        },
        205454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAEmojiSize: function() {
                    return i
                },
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("430568"),
                r = n("569912"),
                u = n("286667");
            let i = {
                SMALL: u.small,
                MEDIUM: u.medium,
                LARGE: u.large
            };

            function s(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: u,
                    size: s = i.MEDIUM
                } = e, {
                    customEmoji: o,
                    unicodeEmoji: d
                } = (0, r.default)(t, n);
                return null == o && null == d ? (0, l.jsx)(l.Fragment, {
                    children: u
                }) : (0, l.jsx)(a.default, {
                    emojiName: null != o ? null == o ? void 0 : o.name : n,
                    animated: null != o && o.animated,
                    emojiId: null == o ? void 0 : o.id,
                    autoplay: !0,
                    className: s
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                r = n("817963"),
                u = n("923959"),
                i = n("305961"),
                s = n("957255"),
                o = n("49111"),
                d = (e, t) => {
                    let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, r.useManageResourcePermissions)(n),
                        c = (0, a.useStateFromStores)([u.default], () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        C = (0, a.useStateFromStores)([s.default], () => {
                            if (s.default.can(o.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, r.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, d]);
                    return C
                }
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                u = n("598532");

            function i(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: r(u.image, t)
                })
            }
        },
        676143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return L
                },
                getFirstRouteFor: function() {
                    return w
                },
                clearRecentChannels: function() {
                    return A
                },
                useChannelBrowserSections: function() {
                    return U
                },
                useChannelBrowserChannelCount: function() {
                    return D
                },
                getActiveAgoTimestamp: function() {
                    return H
                }
            }), n("843762");
            var l = n("884691"),
                a = n("448105"),
                r = n.n(a),
                u = n("866227"),
                i = n.n(u),
                s = n("249654"),
                o = n("446674"),
                d = n("151426"),
                c = n("267363"),
                f = n("320954"),
                C = n("10641"),
                h = n("290886"),
                g = n("319839"),
                m = n("194704"),
                p = n("393414"),
                v = n("42203"),
                N = n("245997"),
                _ = n("660478"),
                S = n("49111"),
                E = n("724210"),
                I = n("796618"),
                R = n("133335"),
                M = n("782340");

            function T(e, t) {
                e.index = t
            }

            function L(e, t, n, a) {
                a = a.toLowerCase();
                let u = (0, h.useCanSeeOnboardingHome)(e),
                    i = l.useCallback((e, t) => !(u && e.channel.hasFlag(E.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== S.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || r(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [u]);
                return l.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[S.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: l
                        } = n;
                        "null" === l.id && (e.null = t.null.filter(e => i(e, a))), e[l.id] = t[l.id].filter(e => i(e, a))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === a.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(T), e
                }, [t, n, i, a])
            }

            function w(e) {
                let t = e.getSections();
                if (t[g.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case I.ChannelListCommunityRow.GUILD_HOME:
                            return E.StaticChannelRoute.GUILD_HOME;
                        case I.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return E.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case I.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return E.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let l = g.SECTION_INDEX_UNCATEGORIZED_CHANNELS; l < e.voiceChannelsSectionNumber; l++)
                    if (t[l] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(l, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, m.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: R.ReadStateTypes.CHANNEL,
                    messageId: _.default.lastMessageId(e)
                }))), null != n && (0, p.transitionTo)(S.Routes.CHANNEL(e, n))
            }

            function U(e, t, n, l) {
                let a = (0, C.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX),
                    r = (0, o.useStateFromStoresObject)([v.default], () => {
                        let t = {},
                            n = v.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: a
                            } = n[e];
                            if (null != a) {
                                var l;
                                t[a] = (null !== (l = t[a]) && void 0 !== l ? l : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    u = t._categories.map(e => {
                        let l = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === r[e.channel.id] ? 1 : l.length,
                            rowHeight: 0 === l.length ? 0 : n
                        }
                    });
                return !a && null != l && u.unshift({
                    rowCount: 1,
                    rowHeight: l
                }), u
            }

            function D(e) {
                var t, n;
                let l = (0, o.useStateFromStores)([N.default], () => N.default.getCategories(e)),
                    a = l._categories.length,
                    r = l._categories[l._categories.length - 1];
                if (null == r) return 0;
                let u = null !== (n = null === (t = r.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    i = l[u];
                return null == i ? 0 : 0 === i.length ? r.index + 2 - a : i[i.length - 1].index + 2 - a
            }

            function H(e) {
                var t;
                return M.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: i(s.default.extractTimestamp(null !== (t = _.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
        },
        194704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return s
                }
            });
            var l = n("801340"),
                a = n("913144"),
                r = n("872173"),
                u = n("599110"),
                i = n("49111");
            async function s(e, t) {
                await (0, r.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = l.Timestamp.fromDate(new Date), !0), r.UserSettingsDelay.INFREQUENT_USER_ACTION), a.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), u.default.track(i.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
                })
            }
        },
        91551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("917351"),
                u = n.n(r),
                i = n("888400"),
                s = n("782340");
            let o = () => [s.default.Messages.COUNTDOWN_UNITS_SECONDS, s.default.Messages.COUNTDOWN_UNITS_MINUTES, s.default.Messages.COUNTDOWN_UNITS_HOURS, s.default.Messages.COUNTDOWN_UNITS_DAYS];
            class d extends a.PureComponent {
                componentDidMount() {
                    let {
                        intervalDuration: e,
                        onInterval: t
                    } = this.props;
                    this._interval = setInterval(() => {
                        this.forceUpdate(), null == t || t()
                    }, e)
                }
                componentWillUnmount() {
                    null != this._interval && clearInterval(this._interval)
                }
                defaultRender(e) {
                    let {
                        showDays: t,
                        showUnits: n,
                        className: a
                    } = this.props, r = [e.days, e.hours, e.minutes, e.seconds], i = o();
                    if (0 === e.days) r.shift();
                    else if (!t) {
                        let e = r.shift();
                        r[0] += 24 * e
                    }
                    let s = u(r).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
                        children: [e, n ? i[r.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, l.jsx)("span", {
                        className: a,
                        children: s
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: a
                    } = this.props;
                    if (e === 1 / 0) return (0, l.jsx)("span", {
                        className: n,
                        "aria-label": s.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let r = (0, i.diffAsUnits)(Date.now(), e, a);
                    return null != t ? t(r, this.defaultRender.bind(this, r)) : this.defaultRender(r)
                }
            }
            d.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var c = d
        },
        745633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("586880"),
                u = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122 11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807 21.3807 22 20 22Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807 22 12.5 22Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071 17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z",
                            fill: a
                        })]
                    })
                }, r.HubIcon)
        },
        100300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("85941"),
                u = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.25 0.5H4.25C4.66475 0.5 5 0.836 5 1.25V4.25C5 4.664 4.66475 5 4.25 5H1.25C0.836 5 0.5 4.664 0.5 4.25V1.25C0.5 0.836 0.836 0.5 1.25 0.5ZM1.25 5.75H4.25C4.66475 5.75 5 6.086 5 6.5V9.5C5 9.914 4.66475 10.25 4.25 10.25H1.25C0.836 10.25 0.5 9.914 0.5 9.5V6.5C0.5 6.086 0.836 5.75 1.25 5.75ZM4.25 11H1.25C0.836 11 0.5 11.336 0.5 11.75V14.75C0.5 15.164 0.836 15.5 1.25 15.5H4.25C4.66475 15.5 5 15.164 5 14.75V11.75C5 11.336 4.66475 11 4.25 11ZM6.5 2H15.5V3.5H6.5V2ZM15.5 7.25H6.5V8.75H15.5V7.25ZM6.5 12.5H15.5V14H6.5V12.5Z",
                            fill: a
                        })
                    })
                }, r.ListBulletsIcon)
        }
    }
]);