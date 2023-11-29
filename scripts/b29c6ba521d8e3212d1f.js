(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74391"], {
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
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M9 3C8.44772 3 8 3.44772 8 4C8 4.55228 8.44772 5 9 5L21 5C21.5523 5 22 4.55229 22 4C22 3.44772 21.5523 3 21 3L9 3Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M8 12C8 11.4477 8.44772 11 9 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L9 13C8.44772 13 8 12.5523 8 12Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21H14C14.5523 21 15 20.5523 15 20C15 19.4477 14.5523 19 14 19H9Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })]
                })
            }
        },
        569912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("65597"),
                s = n("385976"),
                i = n("867805");

            function a(e, t) {
                let n = (0, l.default)([s.default], () => null != e ? s.default.getCustomEmojiById(e) : null, [e]),
                    a = null != t ? i.default.getByName(i.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: a
                }
            }
        },
        205454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAEmojiSize: function() {
                    return r
                },
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("430568"),
                i = n("569912"),
                a = n("286667");
            let r = {
                SMALL: a.small,
                MEDIUM: a.medium,
                LARGE: a.large
            };

            function u(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: a,
                    size: u = r.MEDIUM
                } = e, {
                    customEmoji: o,
                    unicodeEmoji: c
                } = (0, i.default)(t, n);
                return null == o && null == c ? (0, l.jsx)(l.Fragment, {
                    children: a
                }) : (0, l.jsx)(s.default, {
                    emojiName: null != o ? null == o ? void 0 : o.name : n,
                    animated: null != o && o.animated,
                    emojiId: null == o ? void 0 : o.id,
                    autoplay: !0,
                    className: u
                })
            }
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("598532");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: i(a.image, t)
                })
            }
        },
        676143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return T
                },
                getFirstRouteFor: function() {
                    return w
                },
                clearRecentChannels: function() {
                    return U
                },
                useChannelBrowserSections: function() {
                    return x
                },
                useChannelBrowserChannelCount: function() {
                    return A
                },
                getActiveAgoTimestamp: function() {
                    return D
                }
            }), n("843762");
            var l = n("884691"),
                s = n("448105"),
                i = n.n(s),
                a = n("866227"),
                r = n.n(a),
                u = n("249654"),
                o = n("446674"),
                c = n("151426"),
                d = n("267363"),
                f = n("320954"),
                C = n("10641"),
                h = n("290886"),
                g = n("319839"),
                p = n("194704"),
                m = n("393414"),
                N = n("42203"),
                v = n("245997"),
                _ = n("660478"),
                E = n("49111"),
                I = n("724210"),
                R = n("796618"),
                S = n("133335"),
                M = n("782340");

            function L(e, t) {
                e.index = t
            }

            function T(e, t, n, s) {
                s = s.toLowerCase();
                let a = (0, h.useCanSeeOnboardingHome)(e),
                    r = l.useCallback((e, t) => !(a && e.channel.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== E.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || i(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
                return l.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[E.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: l
                        } = n;
                        "null" === l.id && (e.null = t.null.filter(e => r(e, s))), e[l.id] = t[l.id].filter(e => r(e, s))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === s.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(L), e
                }, [t, n, r, s])
            }

            function w(e) {
                let t = e.getSections();
                if (t[g.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case R.ChannelListCommunityRow.GUILD_HOME:
                            return I.StaticChannelRoute.GUILD_HOME;
                        case R.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return I.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case R.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return I.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let l = g.SECTION_INDEX_UNCATEGORIZED_CHANNELS; l < e.voiceChannelsSectionNumber; l++)
                    if (t[l] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(l, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function U(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, p.bulkClearRecents)(e, t), (0, d.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: S.ReadStateTypes.CHANNEL,
                    messageId: _.default.lastMessageId(e)
                }))), null != n && (0, m.transitionTo)(E.Routes.CHANNEL(e, n))
            }

            function x(e, t, n, l) {
                let s = (0, C.useIsDismissibleContentDismissed)(c.DismissibleContent.CHANNEL_BROWSER_NUX),
                    i = (0, o.useStateFromStoresObject)([N.default], () => {
                        let t = {},
                            n = N.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: s
                            } = n[e];
                            if (null != s) {
                                var l;
                                t[s] = (null !== (l = t[s]) && void 0 !== l ? l : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    a = t._categories.map(e => {
                        let l = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : l.length,
                            rowHeight: 0 === l.length ? 0 : n
                        }
                    });
                return !s && null != l && a.unshift({
                    rowCount: 1,
                    rowHeight: l
                }), a
            }

            function A(e) {
                var t, n;
                let l = (0, o.useStateFromStores)([v.default], () => v.default.getCategories(e)),
                    s = l._categories.length,
                    i = l._categories[l._categories.length - 1];
                if (null == i) return 0;
                let a = null !== (n = null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    r = l[a];
                return null == r ? 0 : 0 === r.length ? i.index + 2 - s : r[r.length - 1].index + 2 - s
            }

            function D(e) {
                var t;
                return M.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: r(u.default.extractTimestamp(null !== (t = _.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
        },
        194704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return u
                }
            });
            var l = n("801340"),
                s = n("913144"),
                i = n("872173"),
                a = n("599110"),
                r = n("49111");
            async function u(e, t) {
                await (0, i.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = l.Timestamp.fromDate(new Date), !0), i.UserSettingsDelay.INFREQUENT_USER_ACTION), s.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), a.default.track(r.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
                })
            }
        },
        91551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                s = n("884691"),
                i = n("917351"),
                a = n.n(i),
                r = n("888400"),
                u = n("782340");
            let o = () => [u.default.Messages.COUNTDOWN_UNITS_SECONDS, u.default.Messages.COUNTDOWN_UNITS_MINUTES, u.default.Messages.COUNTDOWN_UNITS_HOURS, u.default.Messages.COUNTDOWN_UNITS_DAYS];
            class c extends s.PureComponent {
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
                        className: s
                    } = this.props, i = [e.days, e.hours, e.minutes, e.seconds], r = o();
                    if (0 === e.days) i.shift();
                    else if (!t) {
                        let e = i.shift();
                        i[0] += 24 * e
                    }
                    let u = a(i).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
                        children: [e, n ? r[i.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, l.jsx)("span", {
                        className: s,
                        children: u
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: s
                    } = this.props;
                    if (e === 1 / 0) return (0, l.jsx)("span", {
                        className: n,
                        "aria-label": u.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let i = (0, r.diffAsUnits)(Date.now(), e, s);
                    return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i)
                }
            }
            c.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var d = c
        },
        745633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("586880"),
                a = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122 11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807 21.3807 22 20 22Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807 22 12.5 22Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071 17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z",
                            fill: s
                        })]
                    })
                }, i.HubIcon, void 0, {
                    size: 24
                })
        },
        100300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("85941"),
                a = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.25 0.5H4.25C4.66475 0.5 5 0.836 5 1.25V4.25C5 4.664 4.66475 5 4.25 5H1.25C0.836 5 0.5 4.664 0.5 4.25V1.25C0.5 0.836 0.836 0.5 1.25 0.5ZM1.25 5.75H4.25C4.66475 5.75 5 6.086 5 6.5V9.5C5 9.914 4.66475 10.25 4.25 10.25H1.25C0.836 10.25 0.5 9.914 0.5 9.5V6.5C0.5 6.086 0.836 5.75 1.25 5.75ZM4.25 11H1.25C0.836 11 0.5 11.336 0.5 11.75V14.75C0.5 15.164 0.836 15.5 1.25 15.5H4.25C4.66475 15.5 5 15.164 5 14.75V11.75C5 11.336 4.66475 11 4.25 11ZM6.5 2H15.5V3.5H6.5V2ZM15.5 7.25H6.5V8.75H15.5V7.25ZM6.5 12.5H15.5V14H6.5V12.5Z",
                            fill: s
                        })
                    })
                }, i.ListBulletsIcon, void 0, {
                    size: 16
                })
        }
    }
]);