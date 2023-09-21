"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47749], {
        786522: (e, n, t) => {
            t.d(n, {
                c4: () => i,
                mJ: () => a,
                N5: () => o,
                lc: () => u
            });
            var r = t(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function o(e) {
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
        87127: (e, n, t) => {
            t.d(n, {
                S1: () => h,
                xv: () => p,
                zc: () => v,
                pW: () => E,
                wk: () => _,
                zz: () => m,
                ZP: () => y
            });
            var r = t(281110),
                i = t(744564),
                a = t(10390),
                o = t(671293),
                u = t(61209),
                l = t(735885),
                s = t(2590);

            function c(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            c(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            c(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var f = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function h(e, n, t) {
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: n,
                    subsection: t
                })
            }

            function p() {
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

            function E(e) {
                var n = e.name,
                    t = e.type,
                    r = e.topic,
                    a = e.bitrate,
                    o = e.userLimit,
                    u = e.nsfw,
                    l = e.flags,
                    s = e.rateLimitPerUser,
                    c = e.defaultThreadRateLimitPerUser,
                    d = e.defaultAutoArchiveDuration,
                    f = e.template,
                    h = e.defaultReactionEmoji,
                    p = e.rtcRegion,
                    v = e.videoQualityMode,
                    E = e.autoArchiveDuration,
                    _ = e.locked,
                    b = e.invitable,
                    m = e.availableTags,
                    y = e.defaultSortOrder,
                    O = e.defaultForumLayout,
                    g = e.iconEmoji,
                    T = e.themeColor;
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: n,
                    channelType: t,
                    topic: r,
                    bitrate: a,
                    userLimit: o,
                    nsfw: u,
                    flags: l,
                    rateLimitPerUser: s,
                    defaultThreadRateLimitPerUser: c,
                    defaultAutoArchiveDuration: d,
                    template: f,
                    defaultReactionEmoji: h,
                    rtcRegion: p,
                    videoQualityMode: v,
                    autoArchiveDuration: E,
                    locked: _,
                    invitable: b,
                    availableTags: m,
                    defaultSortOrder: y,
                    defaultForumLayout: O,
                    iconEmoji: g,
                    themeColor: T
                })
            }

            function _(e, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = d((function(e, n) {
                    var t, l, c, d, h, p, v, E, _, b, m, y, O, g, T, M, Z, S, N, A, I, C, U, P, R;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = n.name, l = n.type, c = n.position, d = n.topic, h = n.bitrate, p = n.userLimit, v = n.nsfw, E = n.flags, _ = n.permissionOverwrites, b = n.rateLimitPerUser, m = n.defaultThreadRateLimitPerUser, y = n.defaultAutoArchiveDuration, O = n.template, g = n.defaultReactionEmoji, T = n.rtcRegion, M = n.videoQualityMode, Z = n.autoArchiveDuration, S = n.locked, N = n.invitable, A = n.availableTags, I = n.defaultSortOrder, C = n.defaultForumLayout, U = n.iconEmoji, P = n.themeColor;
                                R = u.Z.getChannel(e);
                                i.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_SUBMIT"
                                });
                                return [4, o.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                f.sent();
                                return [2, r.ZP.patch({
                                    url: s.ANM.CHANNEL(e),
                                    body: {
                                        name: t,
                                        type: l,
                                        position: c,
                                        topic: d,
                                        bitrate: h,
                                        user_limit: p,
                                        nsfw: v,
                                        flags: E,
                                        permission_overwrites: _,
                                        rate_limit_per_user: b,
                                        default_thread_rate_limit_per_user: m,
                                        default_auto_archive_duration: y,
                                        template: O,
                                        rtc_region: T,
                                        video_quality_mode: M,
                                        auto_archive_duration: Z,
                                        locked: S,
                                        invitable: N,
                                        default_reaction_emoji: null != g ? {
                                            emoji_id: null == g ? void 0 : g.emojiId,
                                            emoji_name: null == g ? void 0 : g.emojiName
                                        } : null === g ? null : void 0,
                                        available_tags: null == A ? void 0 : A.map((function(e) {
                                            return {
                                                id: e.id,
                                                name: e.name,
                                                emoji_id: e.emojiId,
                                                emoji_name: e.emojiName,
                                                moderated: e.moderated
                                            }
                                        })),
                                        default_sort_order: I,
                                        default_forum_layout: C,
                                        icon_emoji: null != U ? {
                                            id: U.id,
                                            name: U.name
                                        } : null === U ? null : void 0,
                                        theme_color: P
                                    },
                                    oldFormErrors: !0
                                }).then((function(n) {
                                    i.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                                        channelId: e
                                    });
                                    var t = null == R ? void 0 : R.getGuildId();
                                    null == t || (null == R ? void 0 : R.isThread()) || a.Z.checkGuildTemplateDirty(t);
                                    return n
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

            function m(e) {
                var n = u.Z.getChannel(e);
                r.ZP.delete({
                    url: s.ANM.CHANNEL(e),
                    oldFormErrors: !0
                }).then((function() {
                    var e = null == n ? void 0 : n.getGuildId();
                    null == e || (null == n ? void 0 : n.isThread()) || a.Z.checkGuildTemplateDirty(e);
                    p()
                }))
            }
            const y = {
                init: h,
                open: function(e, n, t) {
                    h(e, n, t);
                    (0, l.jN)(s.S9g.CHANNEL_SETTINGS)
                },
                close: p,
                setSection: v,
                selectPermissionOverwrite: function(e) {
                    i.Z.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: e
                    })
                },
                updateChannel: E,
                saveChannel: _,
                deleteChannel: m,
                updateVoiceChannelStatus: function(e, n) {
                    return r.ZP.put({
                        url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
                        body: {
                            status: n
                        }
                    })
                }
            }
        },
        281873: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                a = t(671293),
                o = t(225386),
                u = t(473708);

            function l(e) {
                var n, t = (0, o.C7)(e),
                    l = (0, o.tc)(e);
                if (e.isArchivedThread() ? l : t) return (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.archived) ? (0, r.jsx)(i.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNARCHIVE_FORUM_POST : u.Z.Messages.UNARCHIVE_THREAD,
                    action: function() {
                        return a.Z.unarchiveThread(e, !1)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? u.Z.Messages.ARCHIVE_FORUM_POST : u.Z.Messages.ARCHIVE_THREAD,
                    action: function() {
                        return a.Z.archiveThread(e, !1)
                    }
                })
            }
        },
        422906: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = (t(667294), t(482507)),
                a = t(318715),
                o = t(882723),
                u = t(854602),
                l = t(61209),
                s = t(176758),
                c = t(2590),
                d = t(473708);

            function f(e, n, t) {
                var f = (0, a.ZP)([l.Z], (function() {
                    return l.Z.getChannel(e.parent_id)
                }));
                return (0, r.jsx)(o.MenuItem, {
                    id: "channel-copy-link",
                    label: d.Z.Messages.COPY_LINK,
                    action: function() {
                        e.isForumPost() && (0, u.B)({
                            postId: e.id,
                            location: {
                                section: c.jXE.CONTEXT_MENU
                            }
                        });
                        (0, i.J)((0, s.EO)(e, f, n, t))
                    }
                })
            }
        },
        576668: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(882723),
                o = t(87127),
                u = t(720419),
                l = t(572615),
                s = t(591684),
                c = t(664625),
                d = t(682776),
                f = t(2590),
                h = t(473708);

            function p(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function v(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            p(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            p(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var b = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function m(e) {
                var n, p = e.isForumPost(),
                    m = (0, i.e7)([c.default], (function() {
                        return e.isOwner(c.default.getId())
                    }), [e]),
                    y = (0, i.cj)([d.Z], (function() {
                        return {
                            canAccessChannel: d.Z.can(e.accessPermissions, e),
                            canManageChannel: d.Z.can(e.isThread() ? f.Plq.MANAGE_THREADS : f.Plq.MANAGE_CHANNELS, e)
                        }
                    }), [e]),
                    O = y.canManageChannel,
                    g = y.canAccessChannel,
                    T = (0, i.e7)([s.Z], (function() {
                        return null !== (n = s.Z.getCount(e.id)) && void 0 !== n ? n : 0
                    }), [e.id]),
                    M = (0, i.e7)([l.Z], (function() {
                        return l.Z.getMessage(e.id)
                    }), [e.id]).firstMessage,
                    Z = p && (O || m && T < 1),
                    S = p && m && !O && T > 0 && null != M;
                if (!g) return null;
                if (!O && !Z && !S) return null;
                return (0, r.jsx)(a.MenuItem, {
                    id: "delete-channel",
                    label: e.type === f.d4z.GUILD_CATEGORY ? h.Z.Messages.DELETE_CATEGORY : e.isForumPost() ? Z ? h.Z.Messages.DELETE_FORUM_POST : h.Z.Messages.DELETE_MESSAGE : e.isThread() ? h.Z.Messages.DELETE_THREAD : h.Z.Messages.DELETE_CHANNEL,
                    color: "danger",
                    action: function() {
                        return (0, a.openModalLazy)(v((function() {
                            var n, i;
                            return b(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(3790), t.e(88110), t.e(56054), t.e(80844)]).then(t.bind(t, 656054))];
                                    case 1:
                                        n = a.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, _(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        E(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                onConfirm: function() {
                                                    n.onClose();
                                                    S ? u.Z.deleteMessage(e.id, e.id) : o.ZP.deleteChannel(e.id)
                                                },
                                                channel: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        380477: (e, n, t) => {
            t.d(n, {
                k: () => b,
                ZP: () => m
            });
            var r = t(785893),
                i = (t(667294), t(730381)),
                a = t.n(i),
                o = t(202351),
                u = t(882723),
                l = t(786522),
                s = t(201459),
                c = t(70983),
                d = t(9430),
                f = t(773011),
                h = t(2590),
                p = t(247530),
                v = t(473708);

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function _(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function() {
                return [{
                    value: p.Oe.MINUTES_15,
                    label: v.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: p.Oe.HOURS_1,
                    label: v.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: p.Oe.HOURS_3,
                    label: v.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: p.Oe.HOURS_8,
                    label: v.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: p.Oe.HOURS_24,
                    label: v.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: p.Oe.ALWAYS,
                    label: v.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function m(e, n) {
                var t = function(t) {
                        e.type === h.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? a()().add(e, "second").toISOString() : null
                                }
                            }
                        }(t);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, n)
                    },
                    i = function(n) {
                        n && e.type === h.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: n
                        })
                    },
                    p = _((0, o.Wu)([d.Z], (function() {
                        return [d.Z.isChannelMuted(e.guild_id, e.id), d.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    E = p[0],
                    m = p[1],
                    y = (0, c.U)(m),
                    O = (0, f.ZP)(e, !0),
                    g = v.Z.Messages.MUTE_CHANNEL_GENERIC,
                    T = v.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case h.d4z.GUILD_CATEGORY:
                        g = v.Z.Messages.MUTE_CATEGORY;
                        T = v.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case h.d4z.GROUP_DM:
                        g = v.Z.Messages.MUTE_CONVERSATION;
                        T = v.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case h.d4z.DM:
                        g = v.Z.Messages.MUTE_CHANNEL.format({
                            name: O
                        });
                        T = v.Z.Messages.UNMUTE_CHANNEL.format({
                            name: O
                        });
                        break;
                    default:
                        g = v.Z.Messages.MUTE_CHANNEL_GENERIC;
                        T = v.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return E ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: y,
                    action: function() {
                        return i(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: g,
                    action: function() {
                        return i(!0)
                    },
                    children: b().map((function(e) {
                        var n = e.value,
                            i = e.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(n),
                            label: i,
                            action: function() {
                                return t(n)
                            }
                        }, n)
                    }))
                })
            }
        },
        721376: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(785893),
                i = t(667294),
                a = t(349289),
                o = t(202351),
                u = t(882723),
                l = t(123398),
                s = t(910149),
                c = t(225386),
                d = t(940060),
                f = t(773411),
                h = t(567403),
                p = t(682776),
                v = t(2590),
                E = d.Z.combine(v.Plq.VIEW_CHANNEL, v.Plq.MANAGE_MESSAGES, v.Plq.READ_MESSAGE_HISTORY);
            var _ = t(473708);

            function b(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function m(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            b(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            b(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        y(e, n, t[n])
                    }))
                }
                return e
            }
            var g = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0,
                                    i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function T(e, n) {
                var d = e.guild_id,
                    b = i.useMemo((function() {
                        return {
                            guildId: d,
                            entity: e,
                            entityType: a.w.FORUM_POST
                        }
                    }), [d, e]),
                    y = (0, o.e7)([l.ZP], (function() {
                        return l.ZP.getIsItemFeatured(b)
                    }), [b]),
                    T = (0, c.Xb)(e),
                    M = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = e.getGuildId(),
                            r = (0, o.e7)([p.Z], (function() {
                                return p.Z.can(E, e)
                            }), [e]),
                            i = (0, o.e7)([h.Z], (function() {
                                return h.Z.getGuild(t)
                            }), [t]),
                            a = (0, f.N2)(i, !1);
                        return !!(r && null !== t && a && (null != e.parentChannelThreadType && v.TPd.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || n) && (0, s.fx)(e))
                    }(e);
                return T && M ? y ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: _.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: function() {
                        return (0, u.openModalLazy)(m((function() {
                            var e;
                            return g(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(17586), t.e(29342), t.e(40056), t.e(96259), t.e(23626), t.e(58093), t.e(84832), t.e(56492), t.e(24251), t.e(3790), t.e(84441), t.e(71575), t.e(30027), t.e(94302), t.e(47701), t.e(69839), t.e(70535), t.e(82786), t.e(75700), t.e(67367), t.e(77579), t.e(56356), t.e(24417), t.e(39813), t.e(14606), t.e(95839), t.e(30144), t.e(2913), t.e(4230), t.e(38149), t.e(24501), t.e(5013), t.e(2139), t.e(25978), t.e(67783), t.e(68929), t.e(93869), t.e(55913), t.e(87816), t.e(62803), t.e(92822), t.e(87868), t.e(46738), t.e(77143), t.e(3404)]).then(t.bind(t, 846738))];
                                    case 1:
                                        e = n.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(n) {
                                            return (0, r.jsx)(e, O({
                                                featureableItem: b,
                                                header: _.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                                                body: _.Z.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY
                                            }, n))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: _.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, s.DE)().map((function(i) {
                        var a = i.value,
                            o = i.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(a),
                            label: (0, s.Vm)(o),
                            action: function() {
                                return (0, u.openModalLazy)(m((function() {
                                    var i;
                                    return g(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(17586), t.e(29342), t.e(40056), t.e(96259), t.e(23626), t.e(58093), t.e(84832), t.e(56492), t.e(24251), t.e(3790), t.e(84441), t.e(71575), t.e(30027), t.e(94302), t.e(47701), t.e(69839), t.e(70535), t.e(82786), t.e(75700), t.e(67367), t.e(77579), t.e(56356), t.e(24417), t.e(39813), t.e(14606), t.e(95839), t.e(30144), t.e(2913), t.e(4230), t.e(38149), t.e(24501), t.e(5013), t.e(2139), t.e(25978), t.e(67783), t.e(68929), t.e(93869), t.e(55913), t.e(87816), t.e(62803), t.e(92822), t.e(87868), t.e(46738), t.e(77143), t.e(3404)]).then(t.bind(t, 846738))];
                                            case 1:
                                                i = u.sent().FeatureForumPostConfirmationModal;
                                                return [2, function(t) {
                                                    return (0, r.jsx)(i, O({
                                                        thread: e,
                                                        guildId: d,
                                                        expiresSeconds: a,
                                                        timePeriod: o,
                                                        options: n
                                                    }, t))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, a)
                    }))
                }) : null
            }
        },
        874710: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(882723),
                o = t(487685),
                u = t(671293),
                l = t(473708);

            function s(e, n) {
                return (0, i.e7)([o.Z], (function() {
                    return o.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(a.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? l.Z.Messages.LEAVE_FORUM_POST : l.Z.Messages.LEAVE_THREAD,
                    action: function() {
                        return u.Z.leaveThread(e, n)
                    }
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? l.Z.Messages.JOIN_FORUM_POST : l.Z.Messages.JOIN_THREAD,
                    action: function() {
                        return u.Z.joinThread(e, n)
                    }
                })
            }
        },
        703654: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                i = t(667294),
                a = t(496486),
                o = t.n(a),
                u = t(202351),
                l = t(882723),
                s = t(414306),
                c = t(225386),
                d = t(407561),
                f = t(14096),
                h = t(473708);

            function p(e) {
                var n = (0, c.Y)(e),
                    t = (0, u.e7)([d.Z], (function() {
                        return d.Z.isInChannel(e.id)
                    })),
                    a = (0, u.e7)([d.Z], (function() {
                        return !o().isEmpty(d.Z.getVoiceStatesForChannel(e.id))
                    })),
                    p = (0, s.Z)(e.id).needSubscriptionToAccess,
                    v = i.useCallback((function() {
                        f.Z.handleVoiceConnect({
                            channel: e,
                            connected: t,
                            needSubscriptionToAccess: p,
                            locked: !1
                        })
                    }), [e, t, p]);
                return t || !n ? null : (0, r.jsx)(l.MenuItem, {
                    id: "join-thread-voice",
                    label: a ? h.Z.Messages.JOIN_CALL : h.Z.Messages.START_CALL,
                    action: v
                })
            }
        },
        103314: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294),
                    t(882723)),
                a = t(671293),
                o = t(225386),
                u = t(473708);

            function l(e) {
                var n = (0, o.Xb)(e),
                    t = e.isLockedThread();
                if (n) return t ? (0, r.jsx)(i.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNLOCK_FORUM_POST : u.Z.Messages.UNLOCK_THREAD,
                    action: function() {
                        return a.Z.unlockThread(e)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? u.Z.Messages.LOCK_FORUM_POST : u.Z.Messages.LOCK_THREAD,
                    action: function() {
                        return a.Z.lockThread(e)
                    }
                })
            }
        },
        313031: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(882723),
                o = t(52474),
                u = t(358969),
                l = t(671293),
                s = t(225386),
                c = t(61209),
                d = t(897196),
                f = t(473708);

            function h(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            h(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            h(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var v = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function E(e) {
                var n = (0, i.e7)([c.Z], (function() {
                        return c.Z.getChannel(e.parent_id)
                    })),
                    t = (0, s.Xb)(e),
                    h = (0, u.kF)(e);
                return (null == n ? void 0 : n.isForumLikeChannel()) && t ? e.hasFlag(d.zZ.PINNED) ? (0, r.jsx)(a.MenuItem, {
                    id: "unpin-thread",
                    label: f.Z.Messages.UNPIN_POST,
                    action: function() {
                        return l.Z.unpin(e)
                    }
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "pin-thread",
                    label: f.Z.Messages.PIN_POST,
                    action: function() {
                        null != h ? o.Z.show({
                            title: f.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: f.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: p((function() {
                                return v(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, l.Z.unpin(h)];
                                        case 1:
                                            n.sent();
                                            l.Z.pin(e);
                                            return [2]
                                    }
                                }))
                            }))
                        }) : l.Z.pin(e)
                    }
                }) : null
            }
        },
        954814: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                a = t(87127),
                o = t(225386),
                u = t(473708);

            function l(e) {
                var n = (0, o.C7)(e),
                    t = (0, o.$R)(e),
                    l = (0, o.Gu)(e);
                return n && t && !l ? __OVERLAY__ ? null : (0, r.jsx)(i.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? u.Z.Messages.EDIT_FORUM_POST : u.Z.Messages.EDIT_THREAD,
                    action: function() {
                        (0,
                            i.closeAllModals)();
                        a.ZP.open(e.id)
                    }
                }) : null
            }
        },
        839463: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(882723),
                o = t(971402),
                u = t(77413),
                l = t(245353),
                s = t(372518),
                c = t(358969),
                d = t(225386),
                f = t(61209),
                h = t(508778),
                p = t(473708),
                v = t(738251),
                E = t.n(v);

            function _(e) {
                var n = e.tag,
                    t = n.name,
                    a = n.emojiId,
                    o = n.emojiName,
                    s = (0, i.e7)([l.Z], (function() {
                        return null != a ? l.Z.getUsableCustomEmojiById(a) : null
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, {
                        className: E().emoji,
                        emojiId: a,
                        emojiName: o,
                        animated: Boolean(null == s ? void 0 : s.animated)
                    }), t]
                })
            }

            function b(e) {
                var n = (0, i.e7)([f.Z], (function() {
                        return f.Z.getChannel(e)
                    }), [e]),
                    t = (0, d.C7)(n),
                    u = (0, i.e7)([f.Z], (function() {
                        return f.Z.getChannel(null == n ? void 0 : n.parent_id)
                    }), [n]),
                    l = (0, c.Vm)(u),
                    v = (0, c.eV)(n),
                    E = v.length >= h.Cn,
                    b = (0, d.$R)(n);
                if (null == n) {
                    (0, o.Zy)();
                    return null
                }
                if (!t) return null;
                if (__OVERLAY__) return null;
                if (!n.isForumPost()) return null;
                if (0 === (null == l ? void 0 : l.length)) return null;
                if (!b) return null;
                var m = null == l ? void 0 : l.map((function(e) {
                    var t = v.includes(e);
                    return (0, r.jsx)(a.MenuCheckboxItem, {
                        id: e.id,
                        label: (0, r.jsx)(_, {
                            tag: e
                        }),
                        disabled: E && !t,
                        action: function() {
                            return function(e) {
                                var t = new Set(v);
                                if (t.has(e)) t.delete(e);
                                else {
                                    if (E) return;
                                    t.add(e)
                                }
                                var r = Array.from(t).map((function(e) {
                                    return e.id
                                }));
                                s.Z.updateForumPostTags(n.id, r)
                            }(e)
                        },
                        checked: t
                    }, e.id)
                }));
                return (0, r.jsx)(a.MenuItem, {
                    id: "edit-tags",
                    label: p.Z.Messages.FORUM_TAG_POST_EDIT,
                    children: m
                })
            }
        },
        218318: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                i = (t(667294), t(730381)),
                a = t.n(i),
                o = t(202351),
                u = t(882723),
                l = t(70983),
                s = t(487685),
                c = t(671293),
                d = t(380477),
                f = t(473708);

            function h(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                var n = function(n) {
                        c.Z.setNotificationSettings(e, {
                            muted: n
                        })
                    },
                    t = p((0, o.Wu)([s.Z], (function() {
                        return [s.Z.isMuted(e.id), s.Z.getMuteConfig(e.id), s.Z.hasJoined(e.id)]
                    })), 3),
                    i = t[0],
                    h = t[1],
                    v = t[2],
                    E = (0, l.U)(h);
                return v ? i ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? f.Z.Messages.UNMUTE_FORUM_POST : f.Z.Messages.UNMUTE_THREAD,
                    subtext: E,
                    action: function() {
                        return n(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? f.Z.Messages.MUTE_FORUM_POST : f.Z.Messages.MUTE_THREAD,
                    action: function() {
                        return n(!0)
                    },
                    children: (0, d.k)().map((function(n) {
                        var t = n.value,
                            i = n.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(t),
                            label: i,
                            action: function() {
                                return r = {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: n = t,
                                        end_time: n > 0 ? a()().add(n, "second").toISOString() : null
                                    }
                                }, void c.Z.setNotificationSettings(e, r);
                                var n, r
                            }
                        }, t)
                    }))
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? f.Z.Messages.MUTE_FORUM_POST : f.Z.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        40111: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(882723),
                o = t(487685),
                u = t(671293),
                l = t(665783),
                s = t(379364),
                c = t(473708);

            function d(e) {
                var n = (0, l.B)(e);
                return (0, i.e7)([o.Z], (function() {
                    return o.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(a.MenuItem, {
                    id: "thread-notifications",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    children: (0, s.zb)().map((function(t) {
                        var i = t.setting,
                            o = t.label;
                        return (0,
                            r.jsx)(a.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(i),
                            label: o,
                            action: function() {
                                return u.Z.setNotificationSettings(e, {
                                    flags: i
                                })
                            },
                            checked: i === n
                        }, i)
                    }))
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "notifications-disabled",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }
        },
        579583: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                a = t(671293),
                o = t(225386),
                u = t(2590),
                l = t(473708);

            function s(e) {
                var n, t;
                if (!(0, o.Xb)(e) || e.type !== u.d4z.PRIVATE_THREAD) return null;
                var s = null === (t = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.invitable) || void 0 === t || t;
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: l.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: s,
                    action: function() {
                        return a.Z.setInvitable(e, !s)
                    }
                })
            }
        },
        112897: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                a = t(968449),
                o = t(763933),
                u = t(691797);

            function l(e) {
                var n = e.id,
                    t = e.label,
                    l = e.onSuccess,
                    s = e.shiftId,
                    c = e.showIconFirst,
                    d = a.Sb.useSetting();
                if (__OVERLAY__ || !d || !u.wS) return null;
                var f = "devmode-copy-id-".concat(n);
                return (0, r.jsx)(i.MenuItem, {
                    id: f,
                    label: t,
                    action: function(e) {
                        var t = null != s && e.shiftKey ? s : n;
                        (0, u.JG)(t);
                        null == l || l()
                    },
                    icon: o.Z,
                    showIconFirst: c
                }, f)
            }
        },
        963985: (e, n, t) => {
            t.d(n, {
                kj: () => f,
                oC: () => h,
                UT: () => p,
                CM: () => v,
                xh: () => E,
                s3: () => _,
                _Z: () => b
            });
            var r = t(842227),
                i = t(418705),
                a = t(917019),
                o = t(61209),
                u = t(682776),
                l = t(419051),
                s = t(520453);

            function c() {
                var e = l.Z.getFavoriteChannels(),
                    n = 1;
                for (var t in e) n = Math.max(n, e[t].order);
                return n + 1
            }

            function d(e) {
                for (var n in e) {
                    var t = e[n];
                    if (null != t) {
                        if (t.type !== i.Dd.CATEGORY) {
                            var r = o.Z.getChannel(n);
                            null != r && (r.isPrivate() || u.Z.can(s.Pl.VIEW_CHANNEL, r)) || delete e[n]
                        }
                    } else delete e[n]
                }
            }

            function f(e, n) {
                l.Z.isFavorite(e) || a.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e] = i.aV.create({
                        nickname: "",
                        type: i.Dd.REFERENCE_ORIGINAL,
                        position: c(),
                        parentId: null != n ? n : "0"
                    });
                    d(t.favoriteChannels)
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function h(e) {
                var n = l.Z.getFavorite(e);
                null != n && a.hW.updateAsync("favorites", (function(t) {
                    delete t.favoriteChannels[e];
                    if (n.type === i.Dd.CATEGORY)
                        for (var r in t.favoriteChannels) t.favoriteChannels[r].parentId === e && (t.favoriteChannels[r].parentId = "0");
                    d(t.favoriteChannels)
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function p(e, n) {
                l.Z.isFavorite(e) && a.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e].nickname = null != n ? n : ""
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function v(e) {
                var n = r.default.fromTimestamp(Date.now());
                a.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[n] = i.aV.create({
                        nickname: e,
                        type: i.Dd.CATEGORY,
                        position: c(),
                        parentId: "0"
                    })
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function E(e) {
                h(e)
            }

            function _(e) {
                a.hW.updateAsync("favorites", (function(n) {
                    var t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                            var u = a.value;
                            null != u.position && (n.favoriteChannels[u.id].position = u.position);
                            if (void 0 !== u.parent_id) {
                                var l;
                                n.favoriteChannels[u.id].parentId = null !== (l = u.parent_id) && void 0 !== l ? l : "0"
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function b() {
                a.hW.updateAsync("favorites", (function(e) {
                    e.muted = !e.muted
                }), a.fy.INFREQUENT_USER_ACTION)
            }
        },
        665783: (e, n, t) => {
            t.d(n, {
                J: () => d,
                B: () => f
            });
            var r = t(202351),
                i = t(656793),
                a = t(61209),
                o = t(9430),
                u = t(661123),
                l = t(487685),
                s = t(379364),
                c = t(2590);

            function d(e) {
                var n = l.Z.flags(e.id);
                if (null == n) return s.iN.NO_MESSAGES;
                if ((0, i.c)() && l.Z.isMuted(e.id)) return s.iN.NO_MESSAGES;
                if ((0, u.yE)(n, s.iN.ALL_MESSAGES)) return s.iN.ALL_MESSAGES;
                if ((0, u.yE)(n, s.iN.ONLY_MENTIONS)) return s.iN.ONLY_MENTIONS;
                if ((0, u.yE)(n, s.iN.NO_MESSAGES)) return s.iN.NO_MESSAGES;
                var t = a.Z.getChannel(e.parent_id);
                if (null == t) return s.iN.NO_MESSAGES;
                if (o.Z.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return s.iN.NO_MESSAGES;
                var r = o.Z.resolvedMessageNotifications(t);
                return r === c.bL.NO_MESSAGES ? s.iN.NO_MESSAGES : r === c.bL.ONLY_MENTIONS ? s.iN.ONLY_MENTIONS : s.iN.ALL_MESSAGES
            }

            function f(e) {
                return (0, r.e7)([l.Z, o.Z, a.Z], (function() {
                    return d(e)
                }), [e])
            }
        },
        763933: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(633878));

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function o(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function u(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = e.foreground,
                    h = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", o(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            a(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }
        }
    }
]);