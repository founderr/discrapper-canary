"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47749], {
        786522: (e, t, n) => {
            n.d(t, {
                c4: () => i,
                mJ: () => o,
                N5: () => a,
                lc: () => u
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
                S1: () => h,
                xv: () => p,
                zc: () => v,
                pW: () => b,
                wk: () => E,
                zz: () => m,
                ZP: () => y
            });
            var r = n(281110),
                i = n(744564),
                o = n(10390),
                a = n(671293),
                u = n(61209),
                l = n(735885),
                s = n(2590);

            function c(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            c(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            c(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var d = function(e, t) {
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

            function h(e, t, n) {
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: t,
                    subsection: n
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

            function b(e) {
                var t = e.name,
                    n = e.type,
                    r = e.topic,
                    o = e.bitrate,
                    a = e.userLimit,
                    u = e.nsfw,
                    l = e.flags,
                    s = e.rateLimitPerUser,
                    c = e.defaultThreadRateLimitPerUser,
                    f = e.defaultAutoArchiveDuration,
                    d = e.template,
                    h = e.defaultReactionEmoji,
                    p = e.rtcRegion,
                    v = e.videoQualityMode,
                    b = e.autoArchiveDuration,
                    E = e.locked,
                    _ = e.invitable,
                    m = e.availableTags,
                    y = e.defaultSortOrder,
                    O = e.defaultForumLayout,
                    g = e.iconEmoji,
                    T = e.themeColor;
                i.Z.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: t,
                    channelType: n,
                    topic: r,
                    bitrate: o,
                    userLimit: a,
                    nsfw: u,
                    flags: l,
                    rateLimitPerUser: s,
                    defaultThreadRateLimitPerUser: c,
                    defaultAutoArchiveDuration: f,
                    template: d,
                    defaultReactionEmoji: h,
                    rtcRegion: p,
                    videoQualityMode: v,
                    autoArchiveDuration: b,
                    locked: E,
                    invitable: _,
                    availableTags: m,
                    defaultSortOrder: y,
                    defaultForumLayout: O,
                    iconEmoji: g,
                    themeColor: T
                })
            }

            function E(e, t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = f((function(e, t) {
                    var n, l, c, f, h, p, v, b, E, _, m, y, O, g, T, M, Z, S, N, A, I, C, P, j, w;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                n = t.name, l = t.type, c = t.position, f = t.topic, h = t.bitrate, p = t.userLimit, v = t.nsfw, b = t.flags, E = t.permissionOverwrites, _ = t.rateLimitPerUser, m = t.defaultThreadRateLimitPerUser, y = t.defaultAutoArchiveDuration, O = t.template, g = t.defaultReactionEmoji, T = t.rtcRegion, M = t.videoQualityMode, Z = t.autoArchiveDuration, S = t.locked, N = t.invitable, A = t.availableTags, I = t.defaultSortOrder, C = t.defaultForumLayout, P = t.iconEmoji, j = t.themeColor;
                                w = u.Z.getChannel(e);
                                i.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_SUBMIT"
                                });
                                return [4, a.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                d.sent();
                                return [2, r.ZP.patch({
                                    url: s.ANM.CHANNEL(e),
                                    body: {
                                        name: n,
                                        type: l,
                                        position: c,
                                        topic: f,
                                        bitrate: h,
                                        user_limit: p,
                                        nsfw: v,
                                        flags: b,
                                        permission_overwrites: E,
                                        rate_limit_per_user: _,
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
                                        icon_emoji: null != P ? {
                                            id: P.id,
                                            name: P.name
                                        } : null === P ? null : void 0,
                                        theme_color: j
                                    },
                                    oldFormErrors: !0
                                }).then((function(t) {
                                    i.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                                        channelId: e
                                    });
                                    var n = null == w ? void 0 : w.getGuildId();
                                    null == n || (null == w ? void 0 : w.isThread()) || o.Z.checkGuildTemplateDirty(n);
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

            function m(e) {
                var t = u.Z.getChannel(e);
                r.ZP.delete({
                    url: s.ANM.CHANNEL(e),
                    oldFormErrors: !0
                }).then((function() {
                    var e = null == t ? void 0 : t.getGuildId();
                    null == e || (null == t ? void 0 : t.isThread()) || o.Z.checkGuildTemplateDirty(e);
                    p()
                }))
            }
            const y = {
                init: h,
                open: function(e, t, n) {
                    h(e, t, n);
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
                updateChannel: b,
                saveChannel: E,
                deleteChannel: m,
                updateVoiceChannelStatus: function(e, t) {
                    return r.ZP.put({
                        url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
                        body: {
                            status: t
                        }
                    })
                }
            }
        },
        281873: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(671293),
                a = n(225386),
                u = n(473708);

            function l(e) {
                var t, n = (0, a.C7)(e),
                    l = (0, a.tc)(e);
                if (e.isArchivedThread() ? l : n) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, r.jsx)(i.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNARCHIVE_FORUM_POST : u.Z.Messages.UNARCHIVE_THREAD,
                    action: function() {
                        return o.Z.unarchiveThread(e, !1)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? u.Z.Messages.ARCHIVE_FORUM_POST : u.Z.Messages.ARCHIVE_THREAD,
                    action: function() {
                        return o.Z.archiveThread(e, !1)
                    }
                })
            }
        },
        422906: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                i = (n(667294), n(482507)),
                o = n(318715),
                a = n(304548),
                u = n(854602),
                l = n(61209),
                s = n(176758),
                c = n(2590),
                f = n(473708);

            function d(e, t, n) {
                var d = (0, o.ZP)([l.Z], (function() {
                    return l.Z.getChannel(e.parent_id)
                }));
                return (0, r.jsx)(a.MenuItem, {
                    id: "channel-copy-link",
                    label: f.Z.Messages.COPY_LINK,
                    action: function() {
                        e.isForumPost() && (0, u.B)({
                            postId: e.id,
                            location: {
                                section: c.jXE.CONTEXT_MENU
                            }
                        });
                        (0, i.J)((0, s.EO)(e, d, t, n))
                    }
                })
            }
        },
        576668: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(87127),
                u = n(720419),
                l = n(572615),
                s = n(591684),
                c = n(664625),
                f = n(682776),
                d = n(2590),
                h = n(473708);

            function p(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            p(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            p(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e, t) {
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
            var _ = function(e, t) {
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

            function m(e) {
                var t, p = e.isForumPost(),
                    m = (0, i.e7)([c.default], (function() {
                        return e.isOwner(c.default.getId())
                    }), [e]),
                    y = (0, i.cj)([f.Z], (function() {
                        return {
                            canAccessChannel: f.Z.can(e.accessPermissions, e),
                            canManageChannel: f.Z.can(e.isThread() ? d.Plq.MANAGE_THREADS : d.Plq.MANAGE_CHANNELS, e)
                        }
                    }), [e]),
                    O = y.canManageChannel,
                    g = y.canAccessChannel,
                    T = (0, i.e7)([s.Z], (function() {
                        return null !== (t = s.Z.getCount(e.id)) && void 0 !== t ? t : 0
                    }), [e.id]),
                    M = (0, i.e7)([l.Z], (function() {
                        return l.Z.getMessage(e.id)
                    }), [e.id]).firstMessage,
                    Z = p && (O || m && T < 1),
                    S = p && m && !O && T > 0 && null != M;
                if (!g) return null;
                if (!O && !Z && !S) return null;
                return (0, r.jsx)(o.MenuItem, {
                    id: "delete-channel",
                    label: e.type === d.d4z.GUILD_CATEGORY ? h.Z.Messages.DELETE_CATEGORY : e.isForumPost() ? Z ? h.Z.Messages.DELETE_FORUM_POST : h.Z.Messages.DELETE_MESSAGE : e.isThread() ? h.Z.Messages.DELETE_THREAD : h.Z.Messages.DELETE_CHANNEL,
                    color: "danger",
                    action: function() {
                        return (0, o.openModalLazy)(v((function() {
                            var t, i;
                            return _(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(3790), n.e(88110), n.e(45660), n.e(26945), n.e(56054), n.e(16248)]).then(n.bind(n, 656054))];
                                    case 1:
                                        t = o.sent(), i = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, E(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        b(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, t), {
                                                onConfirm: function() {
                                                    t.onClose();
                                                    S ? u.Z.deleteMessage(e.id, e.id) : a.ZP.deleteChannel(e.id)
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
        380477: (e, t, n) => {
            n.d(t, {
                k: () => _,
                ZP: () => m
            });
            var r = n(785893),
                i = (n(667294), n(730381)),
                o = n.n(i),
                a = n(202351),
                u = n(304548),
                l = n(786522),
                s = n(201459),
                c = n(70983),
                f = n(9430),
                d = n(773011),
                h = n(2590),
                p = n(247530),
                v = n(473708);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function() {
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

            function m(e, t) {
                var n = function(n) {
                        e.type === h.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? o()().add(e, "second").toISOString() : null
                                }
                            }
                        }(n);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, t)
                    },
                    i = function(t) {
                        t && e.type === h.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: t
                        })
                    },
                    p = E((0, a.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    b = p[0],
                    m = p[1],
                    y = (0, c.U)(m),
                    O = (0, d.ZP)(e, !0),
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
                return b ? (0, r.jsx)(u.MenuItem, {
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
                    children: _().map((function(e) {
                        var t = e.value,
                            i = e.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(t),
                            label: i,
                            action: function() {
                                return n(t)
                            }
                        }, t)
                    }))
                })
            }
        },
        721376: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                i = n(667294),
                o = n(349289),
                a = n(202351),
                u = n(304548),
                l = n(123398),
                s = n(910149),
                c = n(225386),
                f = n(940060),
                d = n(773411),
                h = n(567403),
                p = n(682776),
                v = n(2590),
                b = f.Z.combine(v.Plq.VIEW_CHANNEL, v.Plq.MANAGE_MESSAGES, v.Plq.READ_MESSAGE_HISTORY);
            var E = n(473708);

            function _(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            _(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            _(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }
            var g = function(e, t) {
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
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
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

            function T(e, t) {
                var f = e.guild_id,
                    _ = i.useMemo((function() {
                        return {
                            guildId: f,
                            entity: e,
                            entityType: o.w.FORUM_POST
                        }
                    }), [f, e]),
                    y = (0, a.e7)([l.ZP], (function() {
                        return l.ZP.getIsItemFeatured(_)
                    }), [_]),
                    T = (0, c.Xb)(e),
                    M = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.getGuildId(),
                            r = (0, a.e7)([p.Z], (function() {
                                return p.Z.can(b, e)
                            }), [e]),
                            i = (0, a.e7)([h.Z], (function() {
                                return h.Z.getGuild(n)
                            }), [n]),
                            o = (0, d.N2)(i, !1);
                        return !!(r && null !== n && o && (null != e.parentChannelThreadType && v.TPd.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, s.fx)(e))
                    }(e);
                return T && M ? y ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: E.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: function() {
                        return (0, u.openModalLazy)(m((function() {
                            var e;
                            return g(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(29342), n.e(17586), n.e(40056), n.e(96259), n.e(1960), n.e(58093), n.e(84832), n.e(56492), n.e(24251), n.e(3790), n.e(84441), n.e(71575), n.e(30027), n.e(94302), n.e(47701), n.e(28629), n.e(70535), n.e(82786), n.e(67367), n.e(31520), n.e(75700), n.e(77579), n.e(73634), n.e(33227), n.e(44832), n.e(24417), n.e(95839), n.e(30144), n.e(89984), n.e(44230), n.e(24501), n.e(35796), n.e(13255), n.e(2139), n.e(77179), n.e(25978), n.e(67783), n.e(68929), n.e(43244), n.e(55913), n.e(94736), n.e(92822), n.e(76188), n.e(87868), n.e(46738), n.e(39874), n.e(34757)]).then(n.bind(n, 846738))];
                                    case 1:
                                        e = t.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(t) {
                                            return (0, r.jsx)(e, O({
                                                featureableItem: _,
                                                header: E.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                                                body: E.Z.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: E.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, s.DE)().map((function(i) {
                        var o = i.value,
                            a = i.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(o),
                            label: (0, s.Vm)(a),
                            action: function() {
                                return (0, u.openModalLazy)(m((function() {
                                    var i;
                                    return g(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(29342), n.e(17586), n.e(40056), n.e(96259), n.e(1960), n.e(58093), n.e(84832), n.e(56492), n.e(24251), n.e(3790), n.e(84441), n.e(71575), n.e(30027), n.e(94302), n.e(47701), n.e(28629), n.e(70535), n.e(82786), n.e(67367), n.e(31520), n.e(75700), n.e(77579), n.e(73634), n.e(33227), n.e(44832), n.e(24417), n.e(95839), n.e(30144), n.e(89984), n.e(44230), n.e(24501), n.e(35796), n.e(13255), n.e(2139), n.e(77179), n.e(25978), n.e(67783), n.e(68929), n.e(43244), n.e(55913), n.e(94736), n.e(92822), n.e(76188), n.e(87868), n.e(46738), n.e(39874), n.e(34757)]).then(n.bind(n, 846738))];
                                            case 1:
                                                i = u.sent().FeatureForumPostConfirmationModal;
                                                return [2, function(n) {
                                                    return (0, r.jsx)(i, O({
                                                        thread: e,
                                                        guildId: f,
                                                        expiresSeconds: o,
                                                        timePeriod: a,
                                                        options: t
                                                    }, n))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, o)
                    }))
                }) : null
            }
        },
        874710: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(487685),
                u = n(671293),
                l = n(473708);

            function s(e, t) {
                return (0, i.e7)([a.Z], (function() {
                    return a.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(o.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? l.Z.Messages.LEAVE_FORUM_POST : l.Z.Messages.LEAVE_THREAD,
                    action: function() {
                        return u.Z.leaveThread(e, t)
                    }
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? l.Z.Messages.JOIN_FORUM_POST : l.Z.Messages.JOIN_THREAD,
                    action: function() {
                        return u.Z.joinThread(e, t)
                    }
                })
            }
        },
        703654: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = n(667294),
                o = n(496486),
                a = n.n(o),
                u = n(202351),
                l = n(304548),
                s = n(414306),
                c = n(225386),
                f = n(407561),
                d = n(14096),
                h = n(473708);

            function p(e) {
                var t = (0, c.Y)(e),
                    n = (0, u.e7)([f.Z], (function() {
                        return f.Z.isInChannel(e.id)
                    })),
                    o = (0, u.e7)([f.Z], (function() {
                        return !a().isEmpty(f.Z.getVoiceStatesForChannel(e.id))
                    })),
                    p = (0, s.Z)(e.id).needSubscriptionToAccess,
                    v = i.useCallback((function() {
                        d.Z.handleVoiceConnect({
                            channel: e,
                            connected: n,
                            needSubscriptionToAccess: p,
                            locked: !1
                        })
                    }), [e, n, p]);
                return n || !t ? null : (0, r.jsx)(l.MenuItem, {
                    id: "join-thread-voice",
                    label: o ? h.Z.Messages.JOIN_CALL : h.Z.Messages.START_CALL,
                    action: v
                })
            }
        },
        103314: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294),
                    n(304548)),
                o = n(671293),
                a = n(225386),
                u = n(473708);

            function l(e) {
                var t = (0, a.Xb)(e),
                    n = e.isLockedThread();
                if (t) return n ? (0, r.jsx)(i.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNLOCK_FORUM_POST : u.Z.Messages.UNLOCK_THREAD,
                    action: function() {
                        return o.Z.unlockThread(e)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? u.Z.Messages.LOCK_FORUM_POST : u.Z.Messages.LOCK_THREAD,
                    action: function() {
                        return o.Z.lockThread(e)
                    }
                })
            }
        },
        313031: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(52474),
                u = n(358969),
                l = n(671293),
                s = n(225386),
                c = n(61209),
                f = n(897196),
                d = n(473708);

            function h(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            h(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            h(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var v = function(e, t) {
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

            function b(e) {
                var t = (0, i.e7)([c.Z], (function() {
                        return c.Z.getChannel(e.parent_id)
                    })),
                    n = (0, s.Xb)(e),
                    h = (0, u.kF)(e);
                return (null == t ? void 0 : t.isForumLikeChannel()) && n ? e.hasFlag(f.zZ.PINNED) ? (0, r.jsx)(o.MenuItem, {
                    id: "unpin-thread",
                    label: d.Z.Messages.UNPIN_POST,
                    action: function() {
                        return l.Z.unpin(e)
                    }
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "pin-thread",
                    label: d.Z.Messages.PIN_POST,
                    action: function() {
                        null != h ? a.Z.show({
                            title: d.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: d.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: p((function() {
                                return v(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, l.Z.unpin(h)];
                                        case 1:
                                            t.sent();
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
        954814: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(87127),
                a = n(225386),
                u = n(473708);

            function l(e) {
                var t = (0, a.C7)(e),
                    n = (0, a.$R)(e),
                    l = (0, a.Gu)(e);
                return t && n && !l ? __OVERLAY__ ? null : (0, r.jsx)(i.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? u.Z.Messages.EDIT_FORUM_POST : u.Z.Messages.EDIT_THREAD,
                    action: function() {
                        (0,
                            i.closeAllModals)();
                        o.ZP.open(e.id)
                    }
                }) : null
            }
        },
        839463: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(971402),
                u = n(77413),
                l = n(245353),
                s = n(372518),
                c = n(358969),
                f = n(225386),
                d = n(61209),
                h = n(508778),
                p = n(473708),
                v = n(179537),
                b = n.n(v);

            function E(e) {
                var t = e.tag,
                    n = t.name,
                    o = t.emojiId,
                    a = t.emojiName,
                    s = (0, i.e7)([l.Z], (function() {
                        return null != o ? l.Z.getUsableCustomEmojiById(o) : null
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, {
                        className: b().emoji,
                        emojiId: o,
                        emojiName: a,
                        animated: Boolean(null == s ? void 0 : s.animated)
                    }), n]
                })
            }

            function _(e) {
                var t = (0, i.e7)([d.Z], (function() {
                        return d.Z.getChannel(e)
                    }), [e]),
                    n = (0, f.C7)(t),
                    u = (0, i.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == t ? void 0 : t.parent_id)
                    }), [t]),
                    l = (0, c.Vm)(u),
                    v = (0, c.eV)(t),
                    b = v.length >= h.Cn,
                    _ = (0, f.$R)(t);
                if (null == t) {
                    (0, a.Zy)();
                    return null
                }
                if (!n) return null;
                if (__OVERLAY__) return null;
                if (!t.isForumPost()) return null;
                if (0 === (null == l ? void 0 : l.length)) return null;
                if (!_) return null;
                var m = null == l ? void 0 : l.map((function(e) {
                    var n = v.includes(e);
                    return (0, r.jsx)(o.MenuCheckboxItem, {
                        id: e.id,
                        label: (0, r.jsx)(E, {
                            tag: e
                        }),
                        disabled: b && !n,
                        action: function() {
                            return function(e) {
                                var n = new Set(v);
                                if (n.has(e)) n.delete(e);
                                else {
                                    if (b) return;
                                    n.add(e)
                                }
                                var r = Array.from(n).map((function(e) {
                                    return e.id
                                }));
                                s.Z.updateForumPostTags(t.id, r)
                            }(e)
                        },
                        checked: n
                    }, e.id)
                }));
                return (0, r.jsx)(o.MenuItem, {
                    id: "edit-tags",
                    label: p.Z.Messages.FORUM_TAG_POST_EDIT,
                    children: m
                })
            }
        },
        218318: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = (n(667294), n(730381)),
                o = n.n(i),
                a = n(202351),
                u = n(304548),
                l = n(70983),
                s = n(487685),
                c = n(671293),
                f = n(380477),
                d = n(473708);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                var t = function(t) {
                        c.Z.setNotificationSettings(e, {
                            muted: t
                        })
                    },
                    n = p((0, a.Wu)([s.Z], (function() {
                        return [s.Z.isMuted(e.id), s.Z.getMuteConfig(e.id), s.Z.hasJoined(e.id)]
                    })), 3),
                    i = n[0],
                    h = n[1],
                    v = n[2],
                    b = (0, l.U)(h);
                return v ? i ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? d.Z.Messages.UNMUTE_FORUM_POST : d.Z.Messages.UNMUTE_THREAD,
                    subtext: b,
                    action: function() {
                        return t(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    action: function() {
                        return t(!0)
                    },
                    children: (0, f.k)().map((function(t) {
                        var n = t.value,
                            i = t.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(n),
                            label: i,
                            action: function() {
                                return r = {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t = n,
                                        end_time: t > 0 ? o()().add(t, "second").toISOString() : null
                                    }
                                }, void c.Z.setNotificationSettings(e, r);
                                var t, r
                            }
                        }, n)
                    }))
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        40111: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(487685),
                u = n(671293),
                l = n(665783),
                s = n(379364),
                c = n(473708);

            function f(e) {
                var t = (0, l.B)(e);
                return (0, i.e7)([a.Z], (function() {
                    return a.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(o.MenuItem, {
                    id: "thread-notifications",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    children: (0, s.zb)().map((function(n) {
                        var i = n.setting,
                            a = n.label;
                        return (0,
                            r.jsx)(o.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(i),
                            label: a,
                            action: function() {
                                return u.Z.setNotificationSettings(e, {
                                    flags: i
                                })
                            },
                            checked: i === t
                        }, i)
                    }))
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "notifications-disabled",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }
        },
        579583: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(671293),
                a = n(225386),
                u = n(2590),
                l = n(473708);

            function s(e) {
                var t, n;
                if (!(0, a.Xb)(e) || e.type !== u.d4z.PRIVATE_THREAD) return null;
                var s = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: l.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: s,
                    action: function() {
                        return o.Z.setInvitable(e, !s)
                    }
                })
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(968449),
                a = n(416644),
                u = n(691797);

            function l(e) {
                var t = e.id,
                    n = e.label,
                    l = e.onSuccess,
                    s = e.shiftId,
                    c = e.showIconFirst,
                    f = o.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(i.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != s && e.shiftKey ? s : t;
                        (0, u.JG)(n);
                        null == l || l()
                    },
                    icon: a.Z,
                    showIconFirst: c
                }, d)
            }
        },
        963985: (e, t, n) => {
            n.d(t, {
                kj: () => d,
                oC: () => h,
                UT: () => p,
                CM: () => v,
                xh: () => b,
                s3: () => E,
                _Z: () => _
            });
            var r = n(842227),
                i = n(418705),
                o = n(917019),
                a = n(61209),
                u = n(682776),
                l = n(419051),
                s = n(520453);

            function c() {
                var e = l.Z.getFavoriteChannels(),
                    t = 1;
                for (var n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (var t in e) {
                    var n = e[t];
                    if (null != n) {
                        if (n.type !== i.Dd.CATEGORY) {
                            var r = a.Z.getChannel(t);
                            null != r && (r.isPrivate() || u.Z.can(s.Pl.VIEW_CHANNEL, r)) || delete e[t]
                        }
                    } else delete e[t]
                }
            }

            function d(e, t) {
                l.Z.isFavorite(e) || o.hW.updateAsync("favorites", (function(n) {
                    n.favoriteChannels[e] = i.aV.create({
                        nickname: "",
                        type: i.Dd.REFERENCE_ORIGINAL,
                        position: c(),
                        parentId: null != t ? t : "0"
                    });
                    f(n.favoriteChannels)
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function h(e) {
                var t = l.Z.getFavorite(e);
                null != t && o.hW.updateAsync("favorites", (function(n) {
                    delete n.favoriteChannels[e];
                    if (t.type === i.Dd.CATEGORY)
                        for (var r in n.favoriteChannels) n.favoriteChannels[r].parentId === e && (n.favoriteChannels[r].parentId = "0");
                    f(n.favoriteChannels)
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function p(e, t) {
                l.Z.isFavorite(e) && o.hW.updateAsync("favorites", (function(n) {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function v(e) {
                var t = r.default.fromTimestamp(Date.now());
                o.hW.updateAsync("favorites", (function(n) {
                    n.favoriteChannels[t] = i.aV.create({
                        nickname: e,
                        type: i.Dd.CATEGORY,
                        position: c(),
                        parentId: "0"
                    })
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function b(e) {
                h(e)
            }

            function E(e) {
                o.hW.updateAsync("favorites", (function(t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value;
                            null != u.position && (t.favoriteChannels[u.id].position = u.position);
                            if (void 0 !== u.parent_id) {
                                var l;
                                t.favoriteChannels[u.id].parentId = null !== (l = u.parent_id) && void 0 !== l ? l : "0"
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function _() {
                o.hW.updateAsync("favorites", (function(e) {
                    e.muted = !e.muted
                }), o.fy.INFREQUENT_USER_ACTION)
            }
        },
        665783: (e, t, n) => {
            n.d(t, {
                J: () => f,
                B: () => d
            });
            var r = n(202351),
                i = n(656793),
                o = n(61209),
                a = n(9430),
                u = n(661123),
                l = n(487685),
                s = n(379364),
                c = n(2590);

            function f(e) {
                var t = l.Z.flags(e.id);
                if (null == t) return s.iN.NO_MESSAGES;
                if ((0, i.c)() && l.Z.isMuted(e.id)) return s.iN.NO_MESSAGES;
                if ((0, u.yE)(t, s.iN.ALL_MESSAGES)) return s.iN.ALL_MESSAGES;
                if ((0, u.yE)(t, s.iN.ONLY_MENTIONS)) return s.iN.ONLY_MENTIONS;
                if ((0, u.yE)(t, s.iN.NO_MESSAGES)) return s.iN.NO_MESSAGES;
                var n = o.Z.getChannel(e.parent_id);
                if (null == n) return s.iN.NO_MESSAGES;
                if (a.Z.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return s.iN.NO_MESSAGES;
                var r = a.Z.resolvedMessageNotifications(n);
                return r === c.bL.NO_MESSAGES ? s.iN.NO_MESSAGES : r === c.bL.ONLY_MENTIONS ? s.iN.ONLY_MENTIONS : s.iN.ALL_MESSAGES
            }

            function d(e) {
                return (0, r.e7)([l.Z, a.Z, o.Z], (function() {
                    return f(e)
                }), [e])
            }
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
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

            function s(e, t) {
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

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
            const h = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    h = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(h)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
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
                    c = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    h = e.colorClass,
                    p = void 0 === h ? "" : h,
                    v = s(e, ["width", "height", "color", "colorClass"]);
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
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);