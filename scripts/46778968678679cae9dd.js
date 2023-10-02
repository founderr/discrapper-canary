"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71831, 81580, 1459], {
        87127: (e, t, n) => {
            n.d(t, {
                S1: () => p,
                xv: () => h,
                zc: () => _,
                pW: () => y,
                wk: () => v,
                zz: () => O,
                ZP: () => S
            });
            var r = n(281110),
                o = n(744564),
                i = n(10390),
                u = n(671293),
                a = n(61209),
                l = n(735885),
                c = n(2590);

            function s(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            s(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            s(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var d = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function p(e, t, n) {
                o.Z.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: t,
                    subsection: n
                })
            }

            function h() {
                o.Z.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function _(e) {
                o.Z.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: e
                })
            }

            function y(e) {
                var t = e.name,
                    n = e.type,
                    r = e.topic,
                    i = e.bitrate,
                    u = e.userLimit,
                    a = e.nsfw,
                    l = e.flags,
                    c = e.rateLimitPerUser,
                    s = e.defaultThreadRateLimitPerUser,
                    f = e.defaultAutoArchiveDuration,
                    d = e.template,
                    p = e.defaultReactionEmoji,
                    h = e.rtcRegion,
                    _ = e.videoQualityMode,
                    y = e.autoArchiveDuration,
                    v = e.locked,
                    E = e.invitable,
                    O = e.availableTags,
                    S = e.defaultSortOrder,
                    b = e.defaultForumLayout,
                    m = e.iconEmoji,
                    T = e.themeColor;
                o.Z.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: t,
                    channelType: n,
                    topic: r,
                    bitrate: i,
                    userLimit: u,
                    nsfw: a,
                    flags: l,
                    rateLimitPerUser: c,
                    defaultThreadRateLimitPerUser: s,
                    defaultAutoArchiveDuration: f,
                    template: d,
                    defaultReactionEmoji: p,
                    rtcRegion: h,
                    videoQualityMode: _,
                    autoArchiveDuration: y,
                    locked: v,
                    invitable: E,
                    availableTags: O,
                    defaultSortOrder: S,
                    defaultForumLayout: b,
                    iconEmoji: m,
                    themeColor: T
                })
            }

            function v(e, t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = f((function(e, t) {
                    var n, l, s, f, p, h, _, y, v, E, O, S, b, m, T, g, I, A, N, C, P, R, w, L, U;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                n = t.name, l = t.type, s = t.position, f = t.topic,
                                    p = t.bitrate, h = t.userLimit, _ = t.nsfw, y = t.flags, v = t.permissionOverwrites, E = t.rateLimitPerUser, O = t.defaultThreadRateLimitPerUser, S = t.defaultAutoArchiveDuration, b = t.template, m = t.defaultReactionEmoji, T = t.rtcRegion, g = t.videoQualityMode, I = t.autoArchiveDuration, A = t.locked, N = t.invitable, C = t.availableTags, P = t.defaultSortOrder, R = t.defaultForumLayout, w = t.iconEmoji, L = t.themeColor;
                                U = a.Z.getChannel(e);
                                o.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_SUBMIT"
                                });
                                return [4, u.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                d.sent();
                                return [2, r.ZP.patch({
                                    url: c.ANM.CHANNEL(e),
                                    body: {
                                        name: n,
                                        type: l,
                                        position: s,
                                        topic: f,
                                        bitrate: p,
                                        user_limit: h,
                                        nsfw: _,
                                        flags: y,
                                        permission_overwrites: v,
                                        rate_limit_per_user: E,
                                        default_thread_rate_limit_per_user: O,
                                        default_auto_archive_duration: S,
                                        template: b,
                                        rtc_region: T,
                                        video_quality_mode: g,
                                        auto_archive_duration: I,
                                        locked: A,
                                        invitable: N,
                                        default_reaction_emoji: null != m ? {
                                            emoji_id: null == m ? void 0 : m.emojiId,
                                            emoji_name: null == m ? void 0 : m.emojiName
                                        } : null === m ? null : void 0,
                                        available_tags: null == C ? void 0 : C.map((function(e) {
                                            return {
                                                id: e.id,
                                                name: e.name,
                                                emoji_id: e.emojiId,
                                                emoji_name: e.emojiName,
                                                moderated: e.moderated
                                            }
                                        })),
                                        default_sort_order: P,
                                        default_forum_layout: R,
                                        icon_emoji: null != w ? {
                                            id: w.id,
                                            name: w.name
                                        } : null === w ? null : void 0,
                                        theme_color: L
                                    },
                                    oldFormErrors: !0
                                }).then((function(t) {
                                    o.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                                        channelId: e
                                    });
                                    var n = null == U ? void 0 : U.getGuildId();
                                    null == n || (null == U ? void 0 : U.isThread()) || i.Z.checkGuildTemplateDirty(n);
                                    return t
                                }), (function(e) {
                                    o.Z.dispatch({
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
                var t = a.Z.getChannel(e);
                r.ZP.delete({
                    url: c.ANM.CHANNEL(e),
                    oldFormErrors: !0
                }).then((function() {
                    var e = null == t ? void 0 : t.getGuildId();
                    null == e || (null == t ? void 0 : t.isThread()) || i.Z.checkGuildTemplateDirty(e);
                    h()
                }))
            }
            const S = {
                init: p,
                open: function(e, t, n) {
                    p(e, t, n);
                    (0, l.jN)(c.S9g.CHANNEL_SETTINGS)
                },
                close: h,
                setSection: _,
                selectPermissionOverwrite: function(e) {
                    o.Z.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: e
                    })
                },
                updateChannel: y,
                saveChannel: v,
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
        735885: (e, t, n) => {
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        201459: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(730381),
                o = n.n(r),
                i = n(575945),
                u = n(744564),
                a = n(52317),
                l = n(9430),
                c = n(171940),
                s = n(131559),
                f = n(473708);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const _ = {
                open: function(e) {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: e
                    })
                },
                close: function() {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(e, t, n) {
                    var r = (0, c.GA)(e);
                    a.Z.saveUserGuildSettings(e, t);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, c.Wq)(e, t, r, n)
                },
                updateGuildAndChannelNotificationSettings: function(e, t, n) {
                    var r = Object.keys(t.channel_overrides),
                        o = (0, c.GA)(e),
                        i = (0, c.wK)(e, r);
                    a.Z.saveUserGuildSettings(e, t);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, c.Wq)(e, t, o, n);
                    Object.keys(t.channel_overrides).forEach((function(r) {
                        var o = i.get(r);
                        (0, c.jz)(e, r, t.channel_overrides[r], o, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(e, t) {
                    var n = Object.keys(e),
                        r = (0, c.rU)(n);
                    a.Z.saveUserGuildSettingsBulk(e);
                    Object.entries(e).forEach((function(e) {
                        var n = h(e, 2),
                            o = n[0],
                            i = n[1],
                            a = r.get(o);
                        u.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: o,
                            settings: i
                        });
                        (0, c.Wq)(o, i, a, t)
                    }))
                },
                updateChannelOverrideSettings: function(e, t, n, r) {
                    var o = (0, c.I)(e, t),
                        l = {
                            channel_overrides: p({}, t, n)
                        };
                    a.Z.saveUserGuildSettings(e, l);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: e,
                        channelId: t,
                        settings: n
                    });
                    i.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(e, t, n, o, r)
                },
                updateChannelOverrideSettingsBulk: function(e, t, n) {
                    var r = Object.keys(t),
                        o = {
                            channel_overrides: t
                        },
                        i = (0, c.wK)(e, r);
                    a.Z.saveUserGuildSettings(e, o);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: t
                    });
                    Object.keys(t).forEach((function(r) {
                        return (0, c.jz)(e, r, t[r], i.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(e, t) {
                    var n = t ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = t ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        o = l.Z.getChannelFlags(e) & ~r | n;
                    this.updateChannelOverrideSettings(e.guild_id, e.id, {
                        flags: o
                    })
                },
                handleCheckboxChange: function(e, t, n, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(e, t, n, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(e, t, n) {
                    var r = {
                        selected_time_window: t,
                        end_time: t > 0 ? o()().add(t, "second").toISOString() : null
                    };
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, e, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(e, t, n) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: e,
                        updatedSettings: {
                            notifyHighlights: t
                        },
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleProfileChange: function(e, t) {
                    u.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: t.id,
                        profile: e.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        496916: (e, t, n) => {
            n.d(t, {
                In: () => p,
                U6: () => h,
                y5: () => _,
                iV: () => y,
                CZ: () => v,
                jT: () => E,
                Ju: () => O,
                FT: () => S
            });
            var r = n(842227),
                o = n(744564),
                i = n(18882),
                u = n(382060),
                a = n(61209),
                l = n(877475),
                c = n(473903),
                s = n(2590);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0;
                o.Z.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: r,
                    immediate: t,
                    force: n,
                    context: s.e3s,
                    location: i
                })
            }

            function h(e) {
                e.isCategory() ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = a.Z.getChannel(e);
                    if (null != r && null != r.guild_id) {
                        var o = l.Z.getCategories(r.guild_id);
                        if (null != o[e]) {
                            var c = o[e].filter((function(e) {
                                    var t = e.channel;
                                    return (0, u.vc)(t.type)
                                })).map((function(e) {
                                    return e.channel.id
                                })),
                                s = d(c);
                            c.forEach((function(e) {
                                var t = i.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
                                for (var n in t) s.push(n)
                            }));
                            var f = !0,
                                h = !1,
                                _ = void 0;
                            try {
                                for (var y, v = s[Symbol.iterator](); !(f = (y = v.next()).done); f = !0) {
                                    p(y.value, t, n)
                                }
                            } catch (e) {
                                h = !0;
                                _ = e
                            } finally {
                                try {
                                    f || null == v.return || v.return()
                                } finally {
                                    if (h) throw _
                                }
                            }
                        }
                    }
                }(e.id, !0, !0) : e.isForumLikeChannel() ? p(e.id, !0, !0, r.default.fromTimestamp(Date.now())) : p(e.id, !0, !0)
            }

            function _(e) {
                o.Z.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.e3s
                })
            }

            function y(e) {
                o.Z.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function v(e, t) {
                o.Z.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function E(e, t) {
                o.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function O(e, t, n) {
                o.Z.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function S(e, t) {
                var n;
                null != (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && o.Z.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        810978: (e, t, n) => {
            n.d(t, {
                GZ: () => h,
                Gn: () => y,
                Y2: () => v,
                mE: () => E
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                u = n(615796),
                a = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function h(e, t, n, r, o) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = d((function(e, t, n, s, f) {
                    var d, h, _, y;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                h = {};
                                null != t && (h.country_code = t);
                                null != n && (h.payment_source_id = n);
                                null != s && (h.include_unpublished = s);
                                null != f && (h.revenue_surface = f);
                                d.query = h;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                _ = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: _.body
                                });
                                return [3, 6];
                            case 5:
                                y = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(y);
                                throw new i.Z(y);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return h(e, t)
                })))
            }

            function v(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return h(r, e, t, void 0, n)
                })))
            }

            function E() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        77413: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(973935),
                l = n(809784),
                c = n(202351),
                s = n(874049),
                f = n(968449),
                d = n(674482),
                p = n(330484),
                h = n(775173),
                _ = n(38004),
                y = n(771333),
                v = n(936957);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function m(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && N(e, t)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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

            function I(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function A(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return A(this, n)
                }
            }
            var w = function(e) {
                m(n, e);
                var t = R(n);

                function n() {
                    O(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        hover: !1
                    };
                    e.key = void 0;
                    e.onError = function() {
                        var t = e.getSrc();
                        null != t && (e.cancelLoadImage = (0, s.po)(t, (function(t) {
                            if (!t) {
                                e.key = Date.now();
                                e.forceUpdate()
                            }
                        })))
                    };
                    e.onMouseEnter = function(t) {
                        e.setState({
                            hover: !0
                        });
                        var n = e.props.onMouseEnter;
                        null != n && n(t)
                    };
                    e.onMouseLeave = function(t) {
                        e.setState({
                            hover: !1
                        });
                        var n = e.props.onMouseLeave;
                        null != n && n(t)
                    };
                    return e
                }
                var i = n.prototype;
                i.componentWillUnmount = function() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                };
                i.getSrc = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = e.src,
                        n = e.emojiId,
                        r = e.emojiName,
                        o = e.animated,
                        i = e.shouldAnimate,
                        u = e.isFocused,
                        a = e.isInteracting,
                        l = e.size,
                        c = void 0 === l ? "default" : l,
                        s = this.state.hover;
                    if (null != t) return t;
                    if (null != n) {
                        var f = v.kV[c];
                        return h.ZP.getEmojiURL({
                            id: n,
                            animated: u && !0 === o && (!0 === i || s || !0 === a),
                            size: f
                        })
                    }
                    return null != r ? _.ZP.getURL(r) : void 0
                };
                i.render = function() {
                    var e, t, n = this.props,
                        i = n.emojiName,
                        a = n.animated,
                        l = n.className,
                        c = n.size,
                        s = void 0 === c ? "default" : c,
                        f = n.alt,
                        d = (n.shouldAnimate, n.isFocused, n.emojiId),
                        p = (n.autoplay,
                            n.isInteracting, I(n, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                        h = this.getSrc();
                    if (null == h || "" === h) return (0, r.jsx)("span", {
                        className: u()("emoji", "emoji-text"),
                        children: i
                    });
                    a && (e = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    });
                    return (0, o.createElement)("img", T(g(T(g(T({}, p), {
                        key: this.key,
                        src: h,
                        alt: null !== (t = null != f ? f : i) && void 0 !== t ? t : void 0,
                        draggable: !1
                    }), e), {
                        className: u()("emoji", l, {
                            jumboable: "jumbo" === s
                        }),
                        onError: this.onError,
                        "data-type": "emoji"
                    }), null != d && "" !== d ? {
                        "data-id": d
                    } : {
                        "data-name": i
                    }))
                };
                return n
            }(o.PureComponent);
            w.defaultProps = {
                isInteracting: !1
            };
            var L = function(e) {
                var t = function(e) {
                        var t = a.findDOMNode(e);
                        if ((0, l.k)(t)) {
                            c.push([t, e]);
                            s.observe(t)
                        } else 0
                    },
                    n = function(e) {
                        var t = a.findDOMNode(e);
                        s.unobserve(t);
                        var n = c.findIndex((function(t) {
                            var n = C(t, 2);
                            n[0];
                            return n[1] === e
                        }));
                        if (-1 !== n) {
                            c.splice(n, 1);
                            if (-1 !== (n = u.indexOf(e))) {
                                u.splice(n, 1);
                                n < i && u.length >= i && u[i - 1].forceUpdate()
                            }
                        } else 0
                    };
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, g(T({}, t), {
                        shouldAnimate: t.animated
                    }))
                };
                var i = 100,
                    u = [],
                    c = [],
                    s = new window.IntersectionObserver((function(e) {
                        e.forEach((function(e) {
                            var t = c.find((function(t) {
                                return C(t, 1)[0] === e.target
                            }));
                            if (null != t) {
                                var n = t[1];
                                if (e.intersectionRatio >= .7) {
                                    var r, o;
                                    if (-1 !== u.indexOf(n)) {
                                        0;
                                        return
                                    }
                                    var a = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                    a ? u.unshift(n) : u.push(n);
                                    n.forceUpdate();
                                    a && u.length > i && u[i].forceUpdate()
                                } else {
                                    var l = u.indexOf(n);
                                    if (-1 !== l) {
                                        u.splice(l, 1);
                                        n.forceUpdate();
                                        l < i && u.length >= i && u[i - 1].forceUpdate()
                                    }
                                }
                            } else 0
                        }))
                    }), {
                        threshold: .7
                    });
                return function(o) {
                    m(l, o);
                    var a = R(l);

                    function l() {
                        O(this, l);
                        return a.apply(this, arguments)
                    }
                    var c = l.prototype;
                    c.shouldAutoplay = function(e) {
                        return e.animated && e.autoplay
                    };
                    c.componentDidMount = function() {
                        this.shouldAutoplay(this.props) && t(this)
                    };
                    c.componentDidUpdate = function(e) {
                        var r = this.shouldAutoplay(e),
                            o = this.shouldAutoplay(this.props);
                        o !== r && (o ? t(this) : n(this))
                    };
                    c.componentWillUnmount = function() {
                        this.shouldAutoplay(this.props) && n(this)
                    };
                    c.render = function() {
                        var t = u.indexOf(this),
                            n = this.props,
                            o = n.autoplay,
                            a = n.allowAnimatedEmoji,
                            l = I(n, ["autoplay", "allowAnimatedEmoji"]);
                        return (0, r.jsx)(p.G.Consumer, {
                            children: function(n) {
                                return (0, r.jsx)(e, g(T({}, l), {
                                    autoplay: o || !1,
                                    shouldAnimate: -1 !== t && t < i && !n.disableAnimations && a
                                }))
                            }
                        })
                    };
                    return l
                }(o.Component)
            }(w);

            function U(e) {
                var t = f.Yk.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    o = __OVERLAY__ ? (0, c.e7)([d.Z], (function() {
                        return d.Z.isInstanceFocused()
                    })) : (0, y.n)();
                return (0, r.jsx)(L, g(T({}, e, n), {
                    isFocused: o
                }))
            }
        },
        567678: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(19585));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                return function(n) {
                    var i = (0, o.Z)(t).AnalyticsLocationProvider;
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(e, u({}, n))
                    })
                }
            }
        },
        777158: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(496486),
                o = n.n(r);

            function i(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                    return !0
                };
                return o()(e).map((function(e) {
                    return "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]
                })).flattenDeep().filter(n).value()
            }
        },
        728998: (e, t, n) => {
            n.d(t, {
                _: () => l
            });
            var r = n(409125),
                o = n(379991),
                i = n(664625),
                u = n(567403),
                a = n(407561);

            function l(e) {
                if (o.ZP.disableVoiceChannelChangeAlert) return !1;
                var t = r.Z.getRemoteSessionId();
                if (null != a.Z.getVoiceStateForSession(i.default.getId(), t)) return !1;
                if (!a.Z.isCurrentClientInVoiceChannel()) return !1;
                if (a.Z.isInChannel(e.id)) return !1;
                var n = u.Z.getGuild(e.getGuildId());
                return null == (null == n ? void 0 : n.afkChannelId) || !a.Z.isInChannel(n.afkChannelId)
            }
        },
        14096: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(116404),
                u = n(409125),
                a = n(784426),
                l = n(487685),
                c = n(671293),
                s = n(664625),
                f = n(715107),
                d = n(407561),
                p = n(728998),
                h = n(2590);

            function _(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            _(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            _(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var E = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            const O = {
                handleVoiceConnect: function(e) {
                    var t = e.channel,
                        _ = e.connected,
                        O = e.needSubscriptionToAccess,
                        S = e.locked,
                        b = void 0 !== S && S,
                        m = e.routeDirectlyToChannel,
                        T = void 0 !== m && m,
                        g = e.bypassChangeModal,
                        I = e.bypassGuildIdCheck,
                        A = void 0 !== I && I;
                    return y((function() {
                        var e, S, m, I, N;
                        return E(this, (function(C) {
                            switch (C.label) {
                                case 0:
                                    e = this;
                                    return t.isThread() ? [4, c.Z.unarchiveThreadIfNecessary(t.id)] : [3, 3];
                                case 1:
                                    C.sent();
                                    return l.Z.hasJoined(t.id) ? [3, 3] : [4, c.Z.joinThread(t, "Join Voice")];
                                case 2:
                                    C.sent();
                                    C.label = 3;
                                case 3:
                                    S = u.Z.getRemoteSessionId();
                                    m = d.Z.getVoiceStateForSession(s.default.getId(), S);
                                    I = (null == m ? void 0 : m.channelId) === t.id;
                                    N = I || f.Z.getChannelId() === d.Z.getCurrentClientVoiceChannelId(t.guild_id);
                                    if (!g && !b && (0, p._)(t)) return [2, new Promise((function(i) {
                                        var u = e;
                                        (0, o.openModalLazy)(y((function() {
                                            var e, o;
                                            return E(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, n.e(51562).then(n.bind(n, 851562))];
                                                    case 1:
                                                        e = a.sent(), o = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(o, function(e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        r = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                    }))));
                                                                    r.forEach((function(t) {
                                                                        v(e, t, n[t])
                                                                    }))
                                                                }
                                                                return e
                                                            }({
                                                                channel: t,
                                                                onConfirm: function() {
                                                                    return i(u.handleVoiceConnect({
                                                                        channel: t,
                                                                        connected: _,
                                                                        needSubscriptionToAccess: O,
                                                                        routeDirectlyToChannel: T,
                                                                        locked: b,
                                                                        bypassChangeModal: !0
                                                                    }))
                                                                }
                                                            }, e))
                                                        }]
                                                }
                                            }))
                                        })))
                                    }))];
                                    b || _ || i.default.selectVoiceChannel(t.id);
                                    !__OVERLAY__ && (_ || N || O || T) && function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = e.getGuildId();
                                        if (null == n && !t) throw new Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                        (0, a.uL)(h.Z5c.CHANNEL(n, e.id))
                                    }(t, A);
                                    return [2, !0]
                            }
                        }))
                    })).apply(this)
                }
            }
        },
        881580: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => I
            });
            var r = n(785893),
                o = (n(667294),
                    n(304548)),
                i = n(971402),
                u = n(567678),
                a = n(153686),
                l = n(112897),
                c = n(13280),
                s = n(281873),
                f = n(422906),
                d = n(576668),
                p = n(929653),
                h = n(721376),
                _ = n(874710),
                y = n(703654),
                v = n(103314),
                E = n(313031),
                O = n(954814),
                S = n(839463),
                b = n(218318),
                m = n(40111),
                T = n(579583),
                g = n(473708);
            const I = (0, u.Z)((function(e) {
                var t = e.channel,
                    n = e.onSelect,
                    u = (0, f.Z)(t),
                    a = (0, p.Z)(t),
                    I = (0, b.Z)(t),
                    A = (0, s.Z)(t),
                    N = (0, v.Z)(t),
                    C = (0, d.Z)(t),
                    P = (0, l.Z)({
                        id: t.id,
                        label: g.Z.Messages.COPY_ID_THREAD
                    }),
                    R = (0, _.Z)(t, "Context Menu"),
                    w = (0, E.Z)(t),
                    L = (0, m.Z)(t),
                    U = (0, O.Z)(t),
                    Z = (0, S.Z)(t.id),
                    j = (0, y.Z)(t),
                    D = (0, T.Z)(t),
                    G = (0, h.Z)(t, {
                        hoist: !0
                    }),
                    F = (0, c.Z)(t);
                return (0, r.jsxs)(o.Menu, {
                    navId: "thread-context",
                    onClose: i.Zy,
                    "aria-label": g.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: a
                    }, "mark-as-read"), (0, r.jsxs)(o.MenuGroup, {
                        children: [R, j, A, N, U, Z, u, F]
                    }, "thread-actions"), (0, r.jsxs)(o.MenuGroup, {
                        children: [I, L]
                    }, "notifications"), (0, r.jsxs)(o.MenuGroup, {
                        children: [D, G, w, C]
                    }, "admin-actions"), (0, r.jsx)(o.MenuGroup, {
                        children: P
                    }, "developer-actions")]
                })
            }), [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU])
        },
        929653: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                u = n(496916),
                a = n(358969),
                l = n(536945),
                c = n(487685),
                s = n(382060),
                f = n(877475),
                d = n(179913),
                p = n(2590),
                h = n(473708);

            function _(e) {
                var t = function(e) {
                    var t = (0, a.n2)(e.guild_id, e.id),
                        n = (0, o.e7)([d.ZP, f.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return d.ZP.isForumPostUnread(e.id);
                            if (e.type === p.d4z.GUILD_CATEGORY) {
                                var t = f.Z.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                if (t[e.id].some((function(e) {
                                        var t = e.channel;
                                        return (0, s.Em)(t.type) && d.ZP.hasUnread(t.id)
                                    }))) return !0;
                                var n = new Set(t[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = l.Z.getThreadsForGuild(e.guild_id);
                                for (var o in r)
                                    if (n.has(o))
                                        for (var i in r[o])
                                            if (c.Z.hasJoined(i) && !c.Z.isMuted(i) && d.ZP.hasUnread(i)) return !0;
                                return !1
                            }
                            return d.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, r.jsx)(i.MenuItem, {
                    id: "mark-channel-read",
                    label: h.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.U6)(e)
                    },
                    disabled: !t
                })
            }
        },
        13280: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                u = n(5544),
                a = n(419051),
                l = n(963985),
                c = n(790337),
                s = n(2590),
                f = n(473708);

            function d(e, t) {
                return e.type === s.d4z.GROUP_DM ? t ? f.Z.Messages.UNFAVORITE_GDM : f.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? t ? f.Z.Messages.UNFAVORITE_DM : f.Z.Messages.FAVORITE_DM : t ? f.Z.Messages.UNFAVORITE_CHANNEL : f.Z.Messages.FAVORITE_CHANNEL
            }

            function p(e) {
                var t = (0, o.e7)([a.Z], (function() {
                        return a.Z.isFavorite(e.id)
                    })),
                    n = function(e) {
                        var t = function(t) {
                                (0, l.kj)(e.id, t)
                            },
                            n = (0, o.e7)([u.ZP], (function() {
                                return u.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === n.length ? (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return t(null)
                            }
                        }) : (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return t(null)
                            },
                            children: n.map((function(e) {
                                return (0, r.jsx)(i.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return t(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    f = function(e) {
                        return (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !0),
                            action: function() {
                                (0, l.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : t ? f : n
            }
        },
        866893: (e, t, n) => {
            n.d(t, {
                U: () => Y,
                Z: () => z
            });
            var r = n(496486),
                o = n.n(r),
                i = n(920883),
                u = n(842227),
                a = n(202351),
                l = n(744564),
                c = n(536945),
                s = n(591684),
                f = n(664625),
                d = n(61209),
                p = n(179913),
                h = n(715107),
                _ = n(72580),
                y = n(474167);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function S(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var I, A = [],
                N = null,
                C = null,
                P = new Set,
                R = i.z.LATEST_ACTIVITY,
                w = 0,
                L = [],
                U = !1,
                Z = [],
                j = o().chain(A),
                D = o().chain(A),
                G = new Set,
                F = new Set;

            function M(e) {
                var t;
                return null !== (t = p.ZP.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function k(e) {
                return function(t, n) {
                    return (0, y.yv)(t) ? -1 : (0, y.yv)(n) ? 1 : e === i.z.LATEST_ACTIVITY ? u.default.compare(M(n), M(t)) : u.default.compare(n, t)
                }
            }

            function x() {
                L = [];
                I = null;
                C = null;
                P = new Set;
                R = i.z.LATEST_ACTIVITY;
                w = 0;
                Z = [];
                j = o().chain(A);
                D = o().chain(A);
                F.clear();
                G.clear()
            }

            function H() {
                var e, t = h.Z.getChannelId();
                if (null == t || !(null === (e = d.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) {
                    x();
                    return !1
                }
                B({
                    refreshThreadIds: !0
                })
            }

            function Y(e) {
                var t = d.Z.getChannel(e);
                return null == t ? [] : Object.values(c.Z.getThreadsForParent(t.guild_id, t.id)).map((function(e) {
                    return e.id
                })).sort(k(R))
            }

            function B(e) {
                var t = d.Z.getChannel(C);
                if (null != t) {
                    if (null == e ? void 0 : e.refreshThreadIds) {
                        Z = Object.values(c.Z.getThreadsForParent(t.guild_id, t.id)).map((function(e) {
                            return e.id
                        }));
                        w = 0;
                        U = !0
                    }
                    if (0 !== G.size) {
                        Z = Z.filter((function(e) {
                            return !G.has(e)
                        }));
                        G.clear()
                    }
                    if (0 !== F.size) {
                        Z = Array.from(new Set(m(Z).concat(m(F))));
                        F.clear()
                    }
                    if ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) {
                        D = o().chain(Z).sort(k(i.z.LATEST_ACTIVITY));
                        j = o().chain(Z).sort(k(i.z.CREATION_DATE))
                    }
                    var n, r = (R === i.z.LATEST_ACTIVITY ? D : j).value(),
                        u = (L = 0 === P.size ? r : r.filter((n = P, function(e) {
                            var t, r = null === (t = d.Z.getChannel(e)) || void 0 === t ? void 0 : t.appliedTags;
                            return null != r && 0 !== r.length && r.some((function(e) {
                                return n.has(e)
                            }))
                        }))).find((function(e) {
                            return function(e) {
                                var t = s.Z.getCount(e);
                                return null === t || 0 === t
                            }(e)
                        }));
                    I = null == u ? null : u
                }
            }
            var V = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, c.Z, h.Z, p.ZP)
                };
                r.getNewThreadCount = function() {
                    return w
                };
                r.getCanAckThreads = function() {
                    return U
                };
                r.getThreadIds = function(e, t, n) {
                    var r = e !== C,
                        o = !(0, _.OL)(n, P),
                        i = t !== R;
                    C = e;
                    P = n;
                    R = t;
                    r ? B({
                        refreshThreadIds: !0
                    }) : i ? B({
                        sortThreadIds: !0
                    }) : o && B();
                    return L
                };
                r.getCurrentThreadIds = function() {
                    return L
                };
                r.getAndDeleteMostRecentUserCreatedThreadId = function() {
                    var e = N;
                    N = null;
                    return e
                };
                r.getFirstNoReplyThreadId = function() {
                    return I
                };
                return n
            }(a.ZP.Store);
            V.displayName = "ForumActivePostStore";
            const z = new V(l.Z, {
                CONNECTION_OPEN: H,
                OVERLAY_INITIALIZE: H,
                GUILD_CREATE: H,
                CHANNEL_SELECT: H,
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    x()
                },
                THREAD_LIST_SYNC: function(e) {
                    var t, n = e.guildId;
                    if (null == C) return !1;
                    if (n !== (null === (t = d.Z.getChannel(C)) || void 0 === t ? void 0 : t.guild_id)) return !1;
                    B({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    var t = e.channel,
                        n = e.isNewlyCreated;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    if (!n) return !1;
                    t.ownerId !== f.default.getId() ? w++ : N = t.id
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    var n = (0, y.yv)(t.id),
                        r = F.has(t.id);
                    if (n && !r) {
                        F.add(t.id);
                        B({
                            sortThreadIds: !0
                        })
                    } else {
                        if (n || !r) return !1;
                        F.delete(t.id);
                        B({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    G.add(t.id);
                    B({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    var t = e.channelId;
                    if (null == t || t !== C) return !1;
                    B({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    var t = e.channelId;
                    if (null == t || t !== C) return !1;
                    U = !1
                }
            })
        },
        165586: (e, t, n) => {
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => d,
                no: () => p,
                ND: () => h,
                WC: () => y,
                z8: () => v,
                km: () => O,
                k0: () => S,
                af: () => b
            });
            var r, o, i, u, a = n(2590),
                l = n(203600),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function d(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var p = (s(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(u, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(u, i.PRESET_CUSTOM, []), u),
                h = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function _(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var y = [_(r.RESOLUTION_720), _(r.RESOLUTION_1080), _(r.RESOLUTION_1440), _(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                v = [_(r.RESOLUTION_720), _(r.RESOLUTION_1080), _(r.RESOLUTION_1440)],
                E = function(e) {
                    return "".concat(e, "p")
                },
                O = [_(r.RESOLUTION_480, (function() {
                    return E(r.RESOLUTION_480)
                })), _(r.RESOLUTION_720, (function() {
                    return E(r.RESOLUTION_720)
                })), _(r.RESOLUTION_1080, (function() {
                    return E(r.RESOLUTION_1080)
                })), _(r.RESOLUTION_1440, (function() {
                    return E(r.RESOLUTION_1440)
                })), _(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                S = [_(o.FPS_15), _(o.FPS_30), _(o.FPS_60)],
                b = [_(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), _(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), _(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => h,
                bO: () => _,
                Xp: () => y,
                fV: () => v
            });
            var r = n(202351),
                o = n(747820),
                i = n(260561),
                u = n(339432),
                a = n(5544),
                l = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[a.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([a.ZP, o.Z], (function() {
                    return null != e && s(e.id, a.ZP, o.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, a.ZP, o.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, i.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                h = (0, i.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                _ = (0, i.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                y = ((0, i.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, i.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, i.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                v = (0, i.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        414306: (e, t, n) => {
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                o = n(747820),
                i = n(61209),
                u = n(682776),
                a = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([i.Z, o.Z, u.Z], (function() {
                    return s(e, i.Z, o.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(a.Plq.CONNECT, c) : !r.can(a.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        52317: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r = n(496486),
                o = n.n(r),
                i = n(281110),
                u = n(914716),
                a = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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

            function E(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var m = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                T = {},
                g = new a.Z("UserGuildSettingsManager"),
                I = 0;

            function A() {
                T = y({}, l.Z.getCollapsedCategories())
            }

            function N() {
                if (!__OVERLAY__) {
                    clearTimeout(I);
                    I = setTimeout((function() {
                        return C()
                    }), 15e3)
                }
            }

            function C(e, t) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = d((function(e, t) {
                    return m(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, R(null != t ? h({}, null != e ? e : s.ME, t) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = d((function(e) {
                    var t, n, r, u, a, f, d;
                    return m(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(I);
                                t = 0 !== Object.keys(e).length;
                                n = l.Z.getCollapsedCategories();
                                r = L();
                                for (var h in r)
                                    if (null != (u = c.Z.getChannel(h)) && null != u.guild_id) {
                                        u.guild_id in e || (e[u.guild_id] = {});
                                        null == e[u.guild_id].channel_overrides && (e[u.guild_id].channel_overrides = {});
                                        e[u.guild_id].channel_overrides[u.id] = v(y({}, e[u.guild_id].channel_overrides[u.id]), {
                                            collapsed: u.id in n
                                        });
                                        t = !0
                                    } if (!t) return [2];
                                T = y({}, n);
                                a = o().map(e, (function(e, t) {
                                    return {
                                        guildId: t,
                                        updates: e,
                                        attempts: 0
                                    }
                                }));
                                p.label = 1;
                            case 1:
                                if (!(a.length > 0)) return [3, 8];
                                if ((f = a.shift()).guildId === s.I_8) return [3, 1];
                                p.label = 2;
                            case 2:
                                p.trys.push([2, 5, , 7]);
                                return [4, i.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, U(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                g.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && a.push(f);
                                return [4, U(5e3)];
                            case 6:
                                p.sent();
                                return [3, 7];
                            case 7:
                                return [3, 1];
                            case 8:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function L() {
                var e = {},
                    t = l.Z.getCollapsedCategories();
                for (var n in t) t[n] !== T[n] && (e[n] = !0);
                for (var r in T) t[r] !== T[r] && (e[r] = !0);
                return e
            }

            function U(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e + Math.ceil(e * Math.random()))
                }))
            }

            function Z() {
                T = y({}, l.Z.getCollapsedCategories())
            }
            const j = new(function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: N,
                        CATEGORY_EXPAND: N,
                        CATEGORY_COLLAPSE_ALL: N,
                        CATEGORY_EXPAND_ALL: N,
                        POST_CONNECTION_OPEN: A,
                        USER_GUILD_SETTINGS_FULL_UPDATE: Z
                    };
                    e.saveUserGuildSettings = C;
                    e.saveUserGuildSettingsBulk = R;
                    return e
                }
                return n
            }(u.Z))
        },
        205294: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(e);
                    if (t) {
                        var u = o(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            const c = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = l(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(r.Z)
        },
        968968: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(744564),
                i = n(72580),
                u = n(61209),
                a = n(837067),
                l = n(5544),
                c = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var v = {},
                E = 0;

            function O() {
                E += 1
            }

            function S(e) {
                if (null == v[e]) return !1;
                delete v[e]
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(u.Z, a.Z);
                    this.removeChangeListener(O);
                    this.addChangeListener(O);
                    v = null != e ? e : {}
                };
                r.getState = function() {
                    return v
                };
                r.isCollapsed = function(e) {
                    return !(null == e || "null" === e || !v[e]) && v[e]
                };
                r.getCollapsedCategories = function() {
                    return v
                };
                ! function(e, t, n) {
                    t && f(e.prototype, t);
                    n && f(e, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return E
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "CategoryCollapseStore";
            b.persistKey = "collapsedCategories";
            const m = new b(o.Z, {
                CONNECTION_OPEN: function(e) {
                    e.userGuildSettings.partial || (v = {});
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = e.userGuildSettings.entries[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var u = o.value;
                            if (null != u.channel_overrides) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = u.channel_overrides[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                                        var d = s.value;
                                        d.collapsed ? v[d.channel_id] = !0 : delete v[d.channel_id]
                                    }
                                } catch (e) {
                                    l = !0;
                                    c = e
                                } finally {
                                    try {
                                        a || null == f.return || f.return()
                                    } finally {
                                        if (l) throw c
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    var t = e.userGuildSettings,
                        n = new Set(t.map((function(e) {
                            return e.guild_id
                        })).filter(i.lm));
                    for (var r in v) {
                        var o = u.Z.getChannel(r);
                        null != o && null != o.guild_id && n.has(o.guild_id) && delete v[o.id]
                    }
                    var a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, f = t[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                            var d = s.value,
                                p = !0,
                                h = !1,
                                _ = void 0;
                            try {
                                for (var y, E = d.channel_overrides[Symbol.iterator](); !(p = (y = E.next()).done); p = !0) {
                                    var O = y.value;
                                    O.collapsed && (v[O.channel_id] = !0)
                                }
                            } catch (e) {
                                h = !0;
                                _ = e
                            } finally {
                                try {
                                    p || null == E.return || E.return()
                                } finally {
                                    if (h) throw _
                                }
                            }
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            a || null == f.return || f.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(e) {
                    var t = e.id;
                    if (v[t]) return !1;
                    v[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    return S(e.id)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    var t = e.guildId;
                    l.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var t = e.channel;
                        "null" !== t.id && (v[t.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    var t = e.guildId;
                    l.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var t = e.channel;
                        delete v[t.id]
                    }))
                },
                CHANNEL_DELETE: function(e) {
                    return S(e.channel.id)
                }
            })
        },
        877475: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(202351),
                o = n(744564),
                i = n(777158),
                u = n(419051),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(567403),
                f = n(2590);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var E = null,
                O = {},
                S = null;
            var b = {
                _categories: [],
                null: []
            };

            function m(e, t) {
                e.index = t
            }

            function T(e) {
                var t = c.ZP.getChannels(e),
                    n = {
                        _categories: [],
                        null: []
                    },
                    r = function(e) {
                        var t, r = e.channel;
                        (null !== (t = n[null != r.parent_id ? r.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
                            channel: r,
                            index: -1
                        })
                    };
                t[f.d4z.GUILD_CATEGORY].forEach((function(e) {
                    var t = e.channel;
                    n._categories.push({
                        channel: t,
                        index: -1
                    });
                    n[t.id] = []
                }));
                t[c.sH].forEach(r);
                t[c.Zb].forEach(r);
                (0,
                    i.Z)(n._categories, n).forEach(m);
                O[e] = n;
                return n
            }

            function g() {
                O = {};
                null != E && T(E)
            }

            function I(e) {
                var t = e.guild.id;
                O[t] = void 0;
                E === t && T(t)
            }

            function A(e) {
                var t = e.channel.guild_id;
                if (null == t) return !1;
                O[t] = void 0;
                E === t && T(t)
            }

            function N(e) {
                var t = e.guildId;
                O[t] = void 0;
                t === E && T(t)
            }

            function C(e, t) {
                S = t;
                if (null == e || null == e.getGuildId()) return !1;
                var n = e.getGuildId();
                if (null == n) return !1;
                O[n] = void 0;
                n === E && T(n);
                return !0
            }

            function P() {
                T(f.I_8)
            }
            var R = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.ZP, s.Z, a.default, l.Z, u.Z);
                    this.syncWith([u.Z], P)
                };
                r.getCategories = function(e) {
                    return null != e ? function(e) {
                        var t = O[e];
                        return null != t ? t : T(e)
                    }(e) : b
                };
                return n
            }(r.ZP.Store);
            R.displayName = "GuildCategoryStore";
            const w = new R(o.Z, {
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId;
                    E = null != t ? t : null;
                    if (null == t) return !1;
                    if (null != O[t]) return !1;
                    T(t)
                },
                CONNECTION_OPEN: g,
                OVERLAY_INITIALIZE: g,
                CACHE_LOADED_LAZY: g,
                GUILD_CREATE: I,
                GUILD_UPDATE: I,
                GUILD_DELETE: function(e) {
                    var t = e.guild.id;
                    delete O[t]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !1,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var l = u.value.guild_id;
                            if (null != l) {
                                O[l] = void 0;
                                n = !0;
                                E === l && T(l)
                            }
                        }
                    } catch (e) {
                        o = !0;
                        i = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.user;
                    if (a.default.getId() !== n.id) return !1;
                    O[t] = void 0;
                    t === E && T(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    T(E)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null == t && null != S ? C(l.Z.getChannel(S), null) : C(l.Z.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.channelId,
                            r = t.sessionId;
                        return a.default.getSessionId() !== r ? e : C(l.Z.getChannel(n), n) || e
                    }), !1)
                }
            })
        },
        50433: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var p = [];

            function h() {
                p = []
            }
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                return n
            }(r.ZP.Store);
            _.displayName = "LayerStore";
            const y = new _(o.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (p.indexOf(t) >= 0) return !1;
                    p = s(p).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: h,
                LOGOUT: h,
                NOTIFICATION_CLICK: h
            })
        },
        330484: (e, t, n) => {
            n.d(t, {
                G: () => r
            });
            var r = n(667294).createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        771333: (e, t, n) => {
            n.d(t, {
                n: () => a
            });
            var r = n(667294),
                o = n(202351),
                i = n(26468),
                u = n(901654);

            function a() {
                var e = r.useContext(i.ZP).windowId;
                return (0, o.e7)([u.Z], (function() {
                    return u.Z.isFocused(e)
                }), [e])
            }
        },
        482507: (e, t, n) => {
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                n.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                o.focus();
                o.setSelectionRange(0, e.length);
                var i = document.execCommand("copy");
                t.removeChild(o);
                return i
            }
        }
    }
]);