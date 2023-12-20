(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67534"], {
        767590: function(e, t, n) {
            var a = n("890022"),
                i = n("566040"),
                l = n("846165"),
                r = Math.ceil,
                u = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? i(e, t, n) : void 0 === t) ? 1 : u(l(t), 0);
                var s = null == e ? 0 : e.length;
                if (!s || t < 1) return [];
                for (var o = 0, d = 0, c = Array(r(s / t)); o < s;) c[d++] = a(e, o, o += t);
                return c
            }
        },
        969176: function(e, t, n) {
            var a = n("354069");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        846165: function(e, t, n) {
            var a = n("323033");
            e.exports = function(e) {
                var t = a(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return r
                }
            }), n("70102"), n("222007");
            var a = n("884691");
            let i = (0, a.createContext)(null),
                l = {
                    didCatch: !1,
                    error: null
                };
            class r extends a.Component {
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, n, a = arguments.length, i = Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(l)
                    }
                }
                componentDidCatch(e, t) {
                    var n, a;
                    null === (n = (a = this.props).onError) || void 0 === n || n.call(a, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: a
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, a)) {
                        var i, r;
                        null === (i = (r = this.props).onReset) || void 0 === i || i.call(r, {
                            next: a,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(l)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: l
                    } = this.props, {
                        didCatch: r,
                        error: u
                    } = this.state, s = e;
                    if (r) {
                        let e = {
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, a.isValidElement)(l)) s = l;
                        else if ("function" == typeof t) s = t(e);
                        else if (n) s = (0, a.createElement)(n, e);
                        else throw u
                    }
                    return (0, a.createElement)(i.Provider, {
                        value: {
                            didCatch: r,
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, s)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = l
                }
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), I.test(e) ? e = e.substr(0, e.length - 2) : S.test(e) && (e = e.substr(0, e.length - 1)), (n = v.exec(e)) ? s.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], _.test(e) ? e += "e" : y.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = m.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = x.exec(e)) && s.test(n[1]) && (e = n[1] + a[n[2]]), (n = C.exec(e)) && s.test(n[1]) && (e = n[1] + i[n[2]]), (n = T.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = E.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var a = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                l = "[aeiouy]",
                r = "([^aeiou][^aeiouy]*)",
                u = "(" + l + "[aeiou]*)",
                s = RegExp("^" + r + "?" + u + r),
                o = RegExp("^" + r + "?" + u + r + u + "?$"),
                d = RegExp("^" + r + "?(" + u + r + "){2,}"),
                c = RegExp("^" + r + "?" + l),
                f = RegExp("^" + r + l + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                m = /^(.+?)y$/,
                E = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                _ = /(at|bl|iz)$/,
                v = /^(.+?)eed$/,
                S = /^.+?[^s]s$/,
                I = /^.+?(ss|i)es$/,
                y = /([^aeiouylsz])\1$/,
                x = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                T = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102");
            var a = n("884691");

            function i() {
                let e = (0, a.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: i,
                            children: l
                        } = t, r = (0, a.useRef)();
                        return !r.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => n)), r.current = i()), (0, a.createElement)(e.Provider, {
                            value: r.current
                        }, l)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, a.useContext)(e);
                        if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, a.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, a.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                i = {
                    toggleMembersSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        a.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return i.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        327241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("272030"),
                r = n("838446"),
                u = n("158534"),
                s = n("846883"),
                o = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                m = n("47495"),
                E = n("715243"),
                g = n("458574"),
                _ = n("963150"),
                v = n("308798"),
                S = n("47006"),
                I = n("878526"),
                y = n("44141"),
                x = n("531674"),
                C = n("619436"),
                T = n("625399"),
                A = n("731390"),
                b = n("339876"),
                N = n("49111"),
                M = n("782340");

            function L(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, r = (0, y.default)(t), u = (0, g.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), E = (0, p.default)(t), _ = (0, h.default)(t), v = (0, x.default)(t), I = (0, C.default)(t), A = (0, S.default)(t), b = (0, d.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), N = (0, s.default)(t), L = (0, T.default)(t), O = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: r
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [_, E, o]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [v, O ? L : I]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: A
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: N
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: u
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: b
                    })]
                })
            }

            function O(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: r
                } = e, u = (0, y.default)(t), s = (0, g.default)(t), o = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, b.default)(t), h = (0, x.default)(t), N = (0, S.default)(t), L = (0, I.default)(t, n), O = (0, E.default)(t, n), G = (0, _.default)(t, n), R = (0, v.default)(t), P = (0, d.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), U = (0, A.default)(t, "list_text_channel_context_menu"), D = (0, C.default)(t), w = (0, T.default)(t), j = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: r,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [L, p, s, o, U]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [h, j ? w : D]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [N, O, G, R]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: P
                    }, "developer-actions")]
                })
            }
            var G = (0, u.default)((0, r.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(L, {
                    ...e
                }) : (0, a.jsx)(O, {
                    ...e
                })
            }, {
                object: N.AnalyticsObjects.CONTEXT_MENU
            }), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("77078"),
                r = n("390236"),
                u = n("292508"),
                s = n("383294"),
                o = n("913452"),
                d = n("533466"),
                c = n("49111"),
                f = n("268333");

            function p(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(u.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(r.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, o.useOpenInPopoutExperiment)(t),
                    r = i.useCallback(() => {
                        s.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => r()
                }) : null
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                i = n.n(a),
                l = n("267363"),
                r = n("863636"),
                u = n("401690"),
                s = n("923959"),
                o = n("660478"),
                d = n("599110"),
                c = n("49111"),
                f = n("133335");

            function p(e, t, n) {
                let a = i.flatMap(e, e => {
                    let t = s.default.getSelectableChannelIds(e),
                        n = s.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        i = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: o.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: o.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: r.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(a, n)
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("803182"),
                i = n("308503"),
                l = n("49111");

            function r(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var u = (0, i.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = r(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: a
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = r(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: a,
                        basePath: t
                    })
                }
            }))
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("913144"),
                i = n("819689"),
                l = n("115718"),
                r = n("347895"),
                u = n("341329"),
                s = n("582713"),
                o = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: l,
                            hasSingleMessageRequest: r
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: l,
                            channelId: t,
                            details: {
                                type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: r
                            }
                        }), null != n ? i.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : u.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: r,
                            flash: o = !0,
                            details: d
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: r,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? i.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: o,
                            jumpType: l.JumpTypes.INSTANT
                        }) : u.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, r.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: r,
                            flash: o = !0,
                            details: d
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: r,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? i.default.jumpToMessage({
                            channelId: r,
                            messageId: d.initialMessageId,
                            flash: o,
                            jumpType: l.JumpTypes.INSTANT
                        }) : u.default.fetchMessages({
                            guildId: t,
                            channelId: r
                        })
                    },
                    closeChannelSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: i,
                            details: l
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: i,
                            baseChannelId: n,
                            guildId: t,
                            details: l
                        })
                    },
                    closeGuildSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return s
                },
                trackProfilePanelToggled: function() {
                    return o
                }
            });
            var a = n("373469"),
                i = n("824563"),
                l = n("27618"),
                r = n("599110"),
                u = n("49111");
            let s = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: i,
                        customStatusActivity: l,
                        status: s
                    } = e;
                    r.default.track(u.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== u.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === u.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: s,
                        has_custom_status: null != l,
                        has_profile_effect: null != t.profileEffectId,
                        ...d(t)
                    })
                },
                o = (e, t) => {
                    r.default.track(u.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        r = null != a.default.getAnyStreamForUser(n),
                        s = i.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return r ? t === u.ActivityTypes.PLAYING : t !== u.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == s ? void 0 : s.assets,
                        d = l.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getChannelVideoLimit: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("305961"),
                l = n("316133"),
                r = n("49111");

            function u(e) {
                return (0, a.useStateFromStoresObject)([l.default, i.default], () => {
                    let t = l.default.countVoiceStatesForChannel(e.id),
                        n = i.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === r.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function s(e) {
                let t = l.default.countVoiceStatesForChannel(e.id),
                    n = i.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === r.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }
        },
        727284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("845579"),
                r = n("49111");

            function u(e, t) {
                l.AlwaysPreviewVideo.getSetting() ? (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === r.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return o
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return p
                }
            });
            var a = n("597755"),
                i = n.n(a),
                l = n("815157"),
                r = n("271938"),
                u = n("49111");
            let s = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(u.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? s : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [s]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d();
                return o(e, !1, e === s ? "tar.gz" : null)
            }

            function p(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);