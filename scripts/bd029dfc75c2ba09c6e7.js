(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51077"], {
        524173: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BellIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.693 2.889a.623.623 0 0 0 .381-.43 2 2 0 0 1 3.852 0c.054.195.19.363.38.43A7.003 7.003 0 0 1 19 9.5v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-4.055 0-6.74-.913-8.054-1.506C3.336 16.72 3 16.098 3 15.43v-.279a3 3 0 0 1 .77-2.007l1.102-1.224A.5.5 0 0 0 5 11.586V9.5a7.003 7.003 0 0 1 4.693-6.611ZM9.18 19.844A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        className: u
                    })
                })
            }
        },
        576044: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LocationIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        1339: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                guildEventDetailsParser: function() {
                    return i
                }
            });
            var l = n("367376"),
                a = n("180161"),
                s = n("47677");
            let r = {
                    ...l.default.guildEventRules.link,
                    react: (0, s.default)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                },
                u = {
                    ...l.default.guildEventRules.channelMention,
                    react: (0, a.default)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                },
                i = l.default.reactParserFor({
                    ...l.default.guildEventRules,
                    link: r,
                    channelMention: u
                })
        },
        93550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("407063"),
                a = n("49111");

            function s(e, t) {
                let n;
                if (null == e.image) return null;
                null == t && (t = window.screen.width * (0, l.getDevicePixelRatio)()), t = (0, l.getBestMediaProxySize)(t);
                let s = window.GLOBAL_ENV.CDN_HOST;
                if (null != s) {
                    var r;
                    n = "".concat((r = "https:", "https:"), "//").concat(s, "/guild-events/").concat(e.id, "/").concat(e.image)
                } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + a.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
                return n += "?size=".concat(t)
            }
        },
        909151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                u = n("1339"),
                i = n("139225"),
                c = n("632215");

            function d(e) {
                let {
                    description: t,
                    className: n,
                    guildId: s,
                    truncate: d = !0
                } = e, o = a.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
                    guildId: s
                }), [t, s]);
                return (0, l.jsx)("div", {
                    className: r(i.descriptionText, n, c.markup, {
                        [i.truncate]: d
                    }),
                    children: o
                })
            }
        },
        255050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("900702");

            function u(e) {
                let {
                    source: t,
                    className: n
                } = e;
                return null == t ? null : (0, l.jsx)("div", {
                    className: s(r.container, n),
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                })
            }
        },
        400271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventStatus: function() {
                    return S
                },
                GuildEventDetails: function() {
                    return _
                },
                default: function() {
                    return D
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("446674"),
                u = n("77078"),
                i = n("26989"),
                c = n("155207"),
                d = n("158998"),
                o = n("398604"),
                E = n("397680"),
                f = n("466148"),
                v = n("189443"),
                h = n("822516"),
                T = n("909151"),
                m = n("255050"),
                N = n("393745"),
                x = n("745049"),
                g = n("782340"),
                C = n("629400");

            function S(e) {
                let {
                    className: t,
                    creator: n,
                    guildId: a,
                    isNew: T,
                    isHub: m = !1,
                    guildEventId: S,
                    eventPreview: _,
                    recurrenceId: D
                } = e, {
                    storedEvent: p,
                    userCount: A
                } = (0, r.useStateFromStoresObject)([o.default], () => ({
                    storedEvent: o.default.getGuildScheduledEvent(S),
                    userCount: o.default.getUserCount(S, D)
                })), R = null != p ? p : _, I = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == n ? void 0 : n.id), [a, n]);
                D = null == R || null != D ? D : (0, h.getNextRecurrenceIdInEvent)(R);
                let {
                    startTime: L
                } = (0, f.default)(S, D, _), j = (0, E.default)(D, S), w = null != j ? j.is_canceled ? x.GuildScheduledEventStatus.CANCELED : x.GuildScheduledEventStatus.SCHEDULED : null;
                if (null == R) return null;
                let {
                    entity_type: M,
                    status: G,
                    recurrence_rule: O
                } = R;
                return (0, l.jsxs)("div", {
                    className: s(C.statusContainer, t),
                    children: [(0, l.jsx)(N.GuildEventTimeStatus, {
                        startTime: L.toISOString(),
                        status: null != w ? w : G,
                        eventType: M,
                        isNew: T,
                        recurrenceRule: (0, v.recurrenceRuleFromServer)(O)
                    }), (0, l.jsx)("div", {
                        className: C.spacer
                    }), !m && null != n && (0, l.jsx)(u.Tooltip, {
                        text: g.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != I ? I : d.default.getName(n)
                        }),
                        children: e => (0, l.jsx)(u.Avatar, {
                            ...e,
                            src: n.getAvatarURL(a, 20),
                            size: u.AvatarSizes.SIZE_20,
                            "aria-label": null != I ? I : n.username,
                            className: C.creator
                        })
                    }), (0, l.jsx)(u.Tooltip, {
                        text: g.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: A
                        }),
                        children: e => (0, l.jsxs)("div", {
                            className: C.rsvpCount,
                            ...e,
                            children: [(0, l.jsx)(c.default, {
                                width: 12,
                                height: 12,
                                className: C.rsvpIcon
                            }), (0, l.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: A
                            })]
                        })
                    })]
                })
            }

            function _(e) {
                let {
                    headerVariant: t = "heading-lg/medium",
                    descriptionClassName: n,
                    name: a,
                    description: r,
                    truncate: i,
                    guildId: c,
                    imageSource: d
                } = e;
                return (0, l.jsxs)("div", {
                    className: s({
                        [C.withThumbnail]: null != d
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: s({
                            [C.descriptionWithThumbnail]: null != d
                        }),
                        children: [(0, l.jsx)(u.Heading, {
                            variant: t,
                            selectable: !0,
                            className: C.eventName,
                            children: a
                        }), null != r && (0, l.jsx)(T.default, {
                            description: r,
                            className: s(n, C.description),
                            truncate: i,
                            guildId: c
                        })]
                    }), null != d && (0, l.jsx)("div", {
                        className: C.thumbnailContainer,
                        children: (0, l.jsx)(m.default, {
                            source: d,
                            className: C.thumbnail
                        })
                    })]
                })
            }

            function D(e) {
                let {
                    headerVariant: t,
                    descriptionClassName: n,
                    creator: a,
                    name: s,
                    description: r,
                    imageSource: u,
                    isHub: i = !1,
                    truncate: c,
                    guildId: d,
                    isNew: o,
                    guildEventId: E,
                    eventPreview: f,
                    recurrenceId: v
                } = e;
                return (0, l.jsxs)("div", {
                    className: C.container,
                    children: [(0, l.jsx)(S, {
                        className: C.eventInfoStatusContainer,
                        creator: a,
                        guildId: d,
                        isHub: i,
                        isNew: o,
                        guildEventId: E,
                        eventPreview: f,
                        recurrenceId: v
                    }), (0, l.jsx)(_, {
                        name: s,
                        description: r,
                        headerVariant: t,
                        descriptionClassName: n,
                        truncate: c,
                        guildId: d,
                        imageSource: u
                    })]
                })
            }
        },
        393745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventTimeStatus: function() {
                    return p
                }
            }), n("222007");
            var l, a, s = n("37983"),
                r = n("884691"),
                u = n("414456"),
                i = n.n(u),
                c = n("866227"),
                d = n.n(c),
                o = n("669491"),
                E = n("77078"),
                f = n("449918"),
                v = n("943232"),
                h = n("93393"),
                T = n("956089"),
                m = n("822516"),
                N = n("757767"),
                x = n("745049"),
                g = n("843455"),
                C = n("782340"),
                S = n("675644");
            (a = l || (l = {}))[a.SCHEDULED = 0] = "SCHEDULED", a[a.STARTING_SOON = 1] = "STARTING_SOON", a[a.READY = 2] = "READY", a[a.STARTED = 3] = "STARTED", a[a.ENDED = 4] = "ENDED", a[a.CANCELED = 5] = "CANCELED";

            function _() {
                return (0, s.jsx)(T.TextBadge, {
                    className: S.newBadge,
                    color: o.default.unsafe_rawColors.BRAND_260.css,
                    text: (0, s.jsx)(E.Text, {
                        className: S.newBadgeText,
                        variant: "text-xs/bold",
                        children: C.default.Messages.NEW
                    })
                })
            }

            function D(e) {
                let {
                    children: t,
                    className: n,
                    tooltipText: l
                } = e;
                return (0, s.jsx)("div", {
                    className: i(S.eventStatusContainer, n),
                    children: (0, s.jsx)(E.Tooltip, {
                        position: "right",
                        text: l,
                        shouldShow: null != l,
                        children: e => (0, s.jsx)("div", {
                            ...e,
                            className: i(S.eventStatusContainer, n),
                            children: t
                        })
                    })
                })
            }

            function p(e) {
                let {
                    startTime: t,
                    status: n,
                    eventType: l,
                    className: a,
                    endTime: u,
                    liveText: c,
                    textVariant: o = "text-sm/semibold",
                    isNew: T,
                    recurrenceRule: p
                } = e, A = (0, f.useThemedColorValue)(g.ThemeColor.TEXT_BRAND), R = (0, f.useThemedColorValue)(g.ThemeColor.TEXT_POSITIVE), I = (0, f.useThemedColorValue)(g.ThemeColor.TEXT_DANGER);
                null == c && (c = l === x.GuildScheduledEventEntityTypes.EXTERNAL ? C.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : C.default.Messages.STAGE_CHANNEL_LIVE_NOW);
                let [{
                    startDateTimeString: L,
                    endDateTimeString: j,
                    currentOrPastEvent: w,
                    upcomingEvent: M,
                    diffMinutes: G
                }, O] = r.useState((0, m.getEventTimeData)(t, u));
                r.useEffect(() => {
                    O((0, m.getEventTimeData)(t, u));
                    let e = setInterval(() => O((0, m.getEventTimeData)(t, u)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t, u]);
                let V = L;
                null != j && "" !== j && (V = C.default.Messages.START_DATE_TO_END_DATE.format({
                    start: L,
                    end: j
                }));
                let b = r.useMemo(() => n === x.GuildScheduledEventStatus.CANCELED ? 5 : n === x.GuildScheduledEventStatus.ACTIVE ? 3 : x.GuildScheduledEventStatusDone.has(n) ? 4 : w ? 2 : M ? 1 : 0, [n, w, M]),
                    U = function(e, t, n, l, a) {
                        switch (e) {
                            case 1:
                                return a > 0 ? C.default.Messages.STARTING_IN_MINUTES.format({
                                    minutes: a
                                }) : C.default.Messages.STARTING_SOON;
                            case 2:
                                return C.default.Messages.STARTING_SOON;
                            case 3:
                                return null != l && "" !== l ? C.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: n,
                                    startHook: e => (0, s.jsx)(E.Text, {
                                        color: "text-positive",
                                        variant: "text-sm/semibold",
                                        className: S.liveEventEndTime,
                                        children: e
                                    }),
                                    end: l
                                }) : null != n ? n : "";
                            default:
                                return t
                        }
                    }(b, V, c, j, G),
                    {
                        Icon: H,
                        iconColor: B,
                        textColor: P,
                        tooltipText: k
                    } = r.useMemo(() => (function(e) {
                        let t, {
                                timeStatus: n,
                                textBrand: l,
                                textPositive: a,
                                textDanger: s,
                                endDateTimeString: r,
                                startDateTimeString: u
                            } = e,
                            i = v.default,
                            c = l,
                            d = "header-secondary";
                        switch (n) {
                            case 3:
                                c = a, d = null != r ? void 0 : "text-positive";
                                break;
                            case 4:
                                i = h.default;
                                break;
                            case 2:
                            case 1:
                                d = "text-brand", t = u;
                                break;
                            case 5:
                                c = s
                        }
                        return {
                            Icon: i,
                            iconColor: c.hex,
                            textColor: d,
                            tooltipText: t
                        }
                    })({
                        timeStatus: b,
                        textBrand: A,
                        textPositive: R,
                        textDanger: I,
                        endDateTimeString: j,
                        startDateTimeString: L
                    }), [b, A, R, I, j, L]),
                    y = null;
                if (null != p) {
                    let e = (0, m.getRRule)(p);
                    y = C.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: e.toText()
                    });
                    let n = d(t),
                        l = (0, m.recurrenceRuleToOption)(n, p);
                    y = function(e, t) {
                        let n = t.toDate(),
                            l = n.toLocaleString(C.default.getLocale(), {
                                weekday: "long"
                            });
                        switch (e) {
                            case N.RecurrenceOptions.WEEKLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                                    weekday: l
                                });
                            case N.RecurrenceOptions.YEARLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                                    date: n.toLocaleString(C.default.getLocale(), {
                                        month: "short",
                                        day: "2-digit"
                                    })
                                });
                            case N.RecurrenceOptions.WEEKDAY_ONLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                            default:
                                return null
                        }
                    }(l, n)
                }
                return (0, s.jsxs)(D, {
                    className: i(a, {
                        [S.isRecurring]: null != y
                    }),
                    tooltipText: k,
                    children: [T && n === x.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(_, {}) : (0, s.jsx)(H, {
                        color: B,
                        width: 20,
                        height: 20
                    }), (0, s.jsxs)("div", {
                        className: S.eventStatusLabel,
                        children: [(0, s.jsx)(E.Text, {
                            color: P,
                            variant: o,
                            children: U
                        }), null != y && (0, s.jsx)(E.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: y
                        })]
                    })]
                })
            }
        },
        660279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("524173"),
                r = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                        })
                    })
                }, s.BellIcon)
        },
        718550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("576044"),
                r = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
                            fill: a
                        })]
                    })
                }, s.LocationIcon)
        }
    }
]);