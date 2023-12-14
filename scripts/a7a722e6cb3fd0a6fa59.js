(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23780"], {
        767590: function(e, t, n) {
            var a = n("890022"),
                l = n("566040"),
                i = n("846165"),
                u = Math.ceil,
                r = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? l(e, t, n) : void 0 === t) ? 1 : r(i(t), 0);
                var s = null == e ? 0 : e.length;
                if (!s || t < 1) return [];
                for (var d = 0, o = 0, c = Array(u(s / t)); d < s;) c[o++] = a(e, d, d += t);
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
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), C.test(e) ? e = e.substr(0, e.length - 2) : S.test(e) && (e = e.substr(0, e.length - 1)), (n = I.exec(e)) ? s.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], x.test(e) ? e += "e" : v.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = m.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = b.exec(e)) && s.test(n[1]) && (e = n[1] + a[n[2]]), (n = T.exec(e)) && s.test(n[1]) && (e = n[1] + l[n[2]]), (n = _.exec(e)) ? o.test(n[1]) && (e = n[1]) : (n = E.exec(e)) && o.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (o.test(n[1]) || d.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && o.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                l = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                i = "[aeiouy]",
                u = "([^aeiou][^aeiouy]*)",
                r = "(" + i + "[aeiou]*)",
                s = RegExp("^" + u + "?" + r + u),
                d = RegExp("^" + u + "?" + r + u + r + "?$"),
                o = RegExp("^" + u + "?(" + r + u + "){2,}"),
                c = RegExp("^" + u + "?" + i),
                f = RegExp("^" + u + i + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                m = /^(.+?)y$/,
                E = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                x = /(at|bl|iz)$/,
                I = /^(.+?)eed$/,
                S = /^.+?[^s]s$/,
                C = /^.+?(ss|i)es$/,
                v = /([^aeiouylsz])\1$/,
                b = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                _ = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("70102");
            var a = n("884691");

            function l() {
                let e = (0, a.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: l,
                            children: i
                        } = t, u = (0, a.useRef)();
                        return !u.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => n)), u.current = l()), (0, a.createElement)(e.Provider, {
                            value: u.current
                        }, i)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            l = (0, a.useContext)(e);
                        if (!l) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return l(t, n)
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
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
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

            function i(e) {
                return l.useExperiment({
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
            var l = n("77078"),
                i = n("272030"),
                u = n("838446"),
                r = n("158534"),
                s = n("846883"),
                d = n("812204"),
                o = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                m = n("47495"),
                E = n("715243"),
                g = n("458574"),
                x = n("963150"),
                I = n("308798"),
                S = n("47006"),
                C = n("878526"),
                v = n("44141"),
                b = n("531674"),
                T = n("619436"),
                _ = n("625399"),
                A = n("731390"),
                N = n("339876"),
                y = n("49111"),
                M = n("782340");

            function L(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, u = (0, v.default)(t), r = (0, g.default)(t), d = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), E = (0, p.default)(t), x = (0, h.default)(t), I = (0, b.default)(t), C = (0, T.default)(t), A = (0, S.default)(t), N = (0, o.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), y = (0, s.default)(t), L = (0, _.default)(t), O = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, a.jsxs)(l.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: u
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [x, E, d]
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [I, O ? L : C]
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: A
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: y
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: r
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: N
                    })]
                })
            }

            function O(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: u
                } = e, r = (0, v.default)(t), s = (0, g.default)(t), d = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, N.default)(t), h = (0, b.default)(t), y = (0, S.default)(t), L = (0, C.default)(t, n), O = (0, E.default)(t, n), G = (0, x.default)(t, n), R = (0, I.default)(t), U = (0, o.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), j = (0, A.default)(t, "list_text_channel_context_menu"), w = (0, T.default)(t), D = (0, _.default)(t), P = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, a.jsxs)(l.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, a.jsxs)(l.MenuGroup, {
                        children: [L, p, s, d, j]
                    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
                        children: [h, P ? D : w]
                    }, "notifications"), (0, a.jsxs)(l.MenuGroup, {
                        children: [y, O, G, R]
                    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var G = (0, r.default)((0, u.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(L, {
                    ...e
                }) : (0, a.jsx)(O, {
                    ...e
                })
            }, {
                object: y.AnalyticsObjects.CONTEXT_MENU
            }), [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("77078"),
                u = n("390236"),
                r = n("292508"),
                s = n("383294"),
                d = n("913452"),
                o = n("533466"),
                c = n("49111"),
                f = n("268333");

            function p(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(r.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(u.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(o.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, d.useOpenInPopoutExperiment)(t),
                    u = l.useCallback(() => {
                        s.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => u()
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
                l = n.n(a),
                i = n("267363"),
                u = n("863636"),
                r = n("401690"),
                s = n("923959"),
                d = n("660478"),
                o = n("599110"),
                c = n("49111"),
                f = n("133335");

            function p(e, t, n) {
                let a = l.flatMap(e, e => {
                    let t = s.default.getSelectableChannelIds(e),
                        n = s.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        l = r.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var i;
                        let t = null !== (i = l[e]) && void 0 !== i ? i : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: d.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: d.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: u.default.ackIdForGuild(e)
                    })
                }), o.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, i.bulkAck)(a, n)
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("803182"),
                l = n("308503"),
                i = n("49111");

            function u(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === i.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var r = (0, l.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = u(t);
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
                    } = u(t);
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
                    return o
                }
            });
            var a = n("913144"),
                l = n("819689"),
                i = n("115718"),
                u = n("347895"),
                r = n("341329"),
                s = n("582713"),
                d = n("724210"),
                o = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: i,
                            hasSingleMessageRequest: u
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: i,
                            channelId: t,
                            details: {
                                type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: u
                            }
                        }), null != n ? l.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : r.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: u,
                            flash: d = !0,
                            details: o
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: u,
                            channelId: n,
                            details: o
                        });
                        let c = null == o ? void 0 : o.initialMessageId;
                        null != c ? l.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: d,
                            jumpType: i.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, u.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: d.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: u,
                            flash: d = !0,
                            details: o
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: s.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: u,
                            details: o
                        }), (null == o ? void 0 : o.initialMessageId) != null ? l.default.jumpToMessage({
                            channelId: u,
                            messageId: o.initialMessageId,
                            flash: d,
                            jumpType: i.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: u
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
                            sidebarType: l,
                            details: i
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: l,
                            baseChannelId: n,
                            guildId: t,
                            details: i
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
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getChannelVideoLimit: function() {
                    return s
                }
            });
            var a = n("446674"),
                l = n("305961"),
                i = n("316133"),
                u = n("49111");

            function r(e) {
                return (0, a.useStateFromStoresObject)([i.default, l.default], () => {
                    let t = i.default.countVoiceStatesForChannel(e.id),
                        n = l.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function s(e) {
                let t = i.default.countVoiceStatesForChannel(e.id),
                    n = l.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("845579"),
                u = n("49111");

            function r(e, t) {
                i.AlwaysPreviewVideo.getSetting() ? (0, l.openModalLazy)(async () => {
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
                    contextKey: t === u.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return d
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
                l = n.n(a),
                i = n("815157"),
                u = n("271938"),
                r = n("49111");
            let s = "linux";

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function o() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = l.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? s : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [s]: "Linux"
                })[o(e)]
            }

            function f() {
                let e = o();
                return d(e, !1, e === s ? "tar.gz" : null)
            }

            function p(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    case "Android":
                        return (0, i.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);