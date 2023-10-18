"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [40396, 31114, 81580], {
        786522: (e, t, n) => {
            n.d(t, {
                N5: () => a,
                c4: () => i,
                lc: () => u,
                mJ: () => o
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function o(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        87127: (e, t, n) => {
            n.d(t, {
                S1: () => p,
                ZP: () => _,
                pW: () => b,
                wk: () => m,
                xv: () => h,
                zc: () => v,
                zz: () => O
            });
            var r = n(281110),
                i = n(744564),
                o = n(10390),
                a = n(457581),
                u = n(61209),
                l = n(735885),
                c = n(2590);

            function s(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            s(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            s(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var f = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function p(e, t, n) {
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: t,
                    subsection: n
                })
            }

            function h() {
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function v(e) {
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: e
                })
            }

            function b(e) {
                var t = e.name,
                    n = e.type,
                    r = e.topic,
                    o = e.bitrate,
                    a = e.userLimit,
                    u = e.nsfw,
                    l = e.flags,
                    c = e.rateLimitPerUser,
                    s = e.defaultThreadRateLimitPerUser,
                    d = e.defaultAutoArchiveDuration,
                    f = e.template,
                    p = e.defaultReactionEmoji,
                    h = e.rtcRegion,
                    v = e.videoQualityMode,
                    b = e.autoArchiveDuration,
                    m = e.locked,
                    y = e.invitable,
                    O = e.availableTags,
                    _ = e.defaultSortOrder,
                    g = e.defaultForumLayout,
                    E = e.iconEmoji,
                    Z = e.themeColor;
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: t,
                    channelType: n,
                    topic: r,
                    bitrate: o,
                    userLimit: a,
                    nsfw: u,
                    flags: l,
                    rateLimitPerUser: c,
                    defaultThreadRateLimitPerUser: s,
                    defaultAutoArchiveDuration: d,
                    template: f,
                    defaultReactionEmoji: p,
                    rtcRegion: h,
                    videoQualityMode: v,
                    autoArchiveDuration: b,
                    locked: m,
                    invitable: y,
                    availableTags: O,
                    defaultSortOrder: _,
                    defaultForumLayout: g,
                    iconEmoji: E,
                    themeColor: Z
                })
            }

            function m(e, t) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = d((function(e, t) {
                    var n, l, s, d, p, h, v, b, m, y, O, _, g, E, Z, j, C, T, w, S, N, P, A, I, L;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                n = t.name, l = t.type, s = t.position, d = t.topic, p = t.bitrate, h = t.userLimit, v = t.nsfw, b = t.flags, m = t.permissionOverwrites, y = t.rateLimitPerUser, O = t.defaultThreadRateLimitPerUser, _ = t.defaultAutoArchiveDuration, g = t.template, E = t.defaultReactionEmoji, Z = t.rtcRegion, j = t.videoQualityMode, C = t.autoArchiveDuration, T = t.locked, w = t.invitable, S = t.availableTags, N = t.defaultSortOrder, P = t.defaultForumLayout, A = t.iconEmoji, I = t.themeColor;
                                L = u.Z.getChannel(e);
                                i.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_SUBMIT"
                                });
                                return [4, a.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                f.sent();
                                return [2, r.ZP.patch({
                                    url: c.ANM.CHANNEL(e),
                                    body: {
                                        name: n,
                                        type: l,
                                        position: s,
                                        topic: d,
                                        bitrate: p,
                                        user_limit: h,
                                        nsfw: v,
                                        flags: b,
                                        permission_overwrites: m,
                                        rate_limit_per_user: y,
                                        default_thread_rate_limit_per_user: O,
                                        default_auto_archive_duration: _,
                                        template: g,
                                        rtc_region: Z,
                                        video_quality_mode: j,
                                        auto_archive_duration: C,
                                        locked: T,
                                        invitable: w,
                                        default_reaction_emoji: null != E ? {
                                            emoji_id: null == E ? void 0 : E.emojiId,
                                            emoji_name: null == E ? void 0 : E.emojiName
                                        } : null === E ? null : void 0,
                                        available_tags: null == S ? void 0 : S.map((function(e) {
                                            return {
                                                id: e.id,
                                                name: e.name,
                                                emoji_id: e.emojiId,
                                                emoji_name: e.emojiName,
                                                moderated: e.moderated
                                            }
                                        })),
                                        default_sort_order: N,
                                        default_forum_layout: P,
                                        icon_emoji: null != A ? {
                                            id: A.id,
                                            name: A.name
                                        } : null === A ? null : void 0,
                                        theme_color: I
                                    },
                                    oldFormErrors: !0
                                }).then((function(t) {
                                    i.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                                        channelId: e
                                    });
                                    var n = null == L ? void 0 : L.getGuildId();
                                    null == n || (null == L ? void 0 : L.isThread()) || o.Z.checkGuildTemplateDirty(n);
                                    return t
                                }), (function(e) {
                                    i.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                                        errors: e.body
                                    });
                                    return e
                                }))]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e) {
                var t = u.Z.getChannel(e);
                r.ZP.delete({
                    url: c.ANM.CHANNEL(e),
                    oldFormErrors: !0
                }).then((function() {
                    var e = null == t ? void 0 : t.getGuildId();
                    null == e || (null == t ? void 0 : t.isThread()) || o.Z.checkGuildTemplateDirty(e);
                    h()
                }))
            }
            const _ = {
                init: p,
                open: function(e, t, n) {
                    p(e, t, n);
                    (0, l.jN)(c.S9g.CHANNEL_SETTINGS)
                },
                close: h,
                setSection: v,
                selectPermissionOverwrite: function(e) {
                    i.Z.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: e
                    })
                },
                updateChannel: b,
                saveChannel: m,
                deleteChannel: O,
                updateVoiceChannelStatus: function(e, t) {
                    return r.ZP.put({
                        url: c.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
                        body: {
                            status: t
                        }
                    })
                }
            }
        },
        567678: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(19585));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                return function(n) {
                    var o = (0, i.Z)(t).AnalyticsLocationProvider;
                    return (0, r.jsx)(o, {
                        children: (0, r.jsx)(e, a({}, n))
                    })
                }
            }
        },
        881580: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => C
            });
            var r = n(785893),
                i = (n(667294), n(70418)),
                o = n(971402),
                a = n(567678),
                u = n(153686),
                l = n(112897),
                c = n(13280),
                s = n(281873),
                d = n(422906),
                f = n(576668),
                p = n(929653),
                h = n(721376),
                v = n(874710),
                b = n(703654),
                m = n(103314),
                y = n(313031),
                O = n(954814),
                _ = n(839463),
                g = n(218318),
                E = n(40111),
                Z = n(579583),
                j = n(473708);
            const C = (0, a.Z)((function(e) {
                var t = e.channel,
                    n = e.onSelect,
                    a = (0, d.Z)(t),
                    u = (0, p.Z)(t),
                    C = (0, g.Z)(t),
                    T = (0, s.Z)(t),
                    w = (0, m.Z)(t),
                    S = (0, f.Z)(t),
                    N = (0, l.Z)({
                        id: t.id,
                        label: j.Z.Messages.COPY_ID_THREAD
                    }),
                    P = (0, v.Z)(t, "Context Menu"),
                    A = (0, y.Z)(t),
                    I = (0, E.Z)(t),
                    L = (0, O.Z)(t),
                    M = (0, _.Z)(t.id),
                    R = (0, b.Z)(t),
                    D = (0, Z.Z)(t),
                    x = (0, h.Z)(t, {
                        hoist: !0
                    }),
                    G = (0, c.Z)(t);
                return (0, r.jsxs)(i.Menu, {
                    navId: "thread-context",
                    onClose: o.Zy,
                    "aria-label": j.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, r.jsxs)(i.MenuGroup, {
                        children: [P, R, T, w, L, M, a, G]
                    }, "thread-actions"), (0, r.jsxs)(i.MenuGroup, {
                        children: [C, I]
                    }, "notifications"), (0, r.jsxs)(i.MenuGroup, {
                        children: [D, x, A, S]
                    }, "admin-actions"), (0, r.jsx)(i.MenuGroup, {
                        children: N
                    }, "developer-actions")]
                })
            }), [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU])
        },
        929653: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(70418),
                a = n(496916),
                u = n(358969),
                l = n(536945),
                c = n(487685),
                s = n(382060),
                d = n(877475),
                f = n(179913),
                p = n(2590),
                h = n(473708);

            function v(e) {
                var t = function(e) {
                    var t = (0, u.n2)(e.guild_id, e.id),
                        n = (0, i.e7)([f.ZP, d.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                            if (e.type === p.d4z.GUILD_CATEGORY) {
                                var t = d.Z.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                if (t[e.id].some((function(e) {
                                        var t = e.channel;
                                        return (0, s.Em)(t.type) && f.ZP.hasUnread(t.id)
                                    }))) return !0;
                                var n = new Set(t[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = l.Z.getThreadsForGuild(e.guild_id);
                                for (var i in r)
                                    if (n.has(i))
                                        for (var o in r[i])
                                            if (c.Z.hasJoined(o) && !c.Z.isMuted(o) && f.ZP.hasUnread(o)) return !0;
                                return !1
                            }
                            return f.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, r.jsx)(o.MenuItem, {
                    id: "mark-channel-read",
                    label: h.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.U6)(e)
                    },
                    disabled: !t
                })
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(70418)),
                o = n(968449),
                a = n(416644),
                u = n(691797);

            function l(e) {
                var t = e.id,
                    n = e.label,
                    l = e.onSuccess,
                    c = e.shiftId,
                    s = e.showIconFirst,
                    d = o.Sb.useSetting();
                if (__OVERLAY__ || !d || !u.wS) return null;
                var f = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(i.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        var n = null != c && e.shiftKey ? c : t;
                        (0, u.JG)(n);
                        null == l || l()
                    },
                    icon: a.Z,
                    showIconFirst: s
                }, f)
            }
        },
        13280: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(70418),
                a = n(5544),
                u = n(419051),
                l = n(963985),
                c = n(790337),
                s = n(2590),
                d = n(473708);

            function f(e, t) {
                return e.type === s.d4z.GROUP_DM ? t ? d.Z.Messages.UNFAVORITE_GDM : d.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? t ? d.Z.Messages.UNFAVORITE_DM : d.Z.Messages.FAVORITE_DM : t ? d.Z.Messages.UNFAVORITE_CHANNEL : d.Z.Messages.FAVORITE_CHANNEL
            }

            function p(e) {
                var t = (0, i.e7)([u.Z], (function() {
                        return u.Z.isFavorite(e.id)
                    })),
                    n = function(e) {
                        var t = function(t) {
                                (0, l.kj)(e.id, t)
                            },
                            n = (0, i.e7)([a.ZP], (function() {
                                return a.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === n.length ? (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return t(null)
                            }
                        }) : (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return t(null)
                            },
                            children: n.map((function(e) {
                                return (0, r.jsx)(o.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return t(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    d = function(e) {
                        return (0,
                            r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !0),
                            action: function() {
                                (0, l.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : t ? d : n
            }
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        }
    }
]);