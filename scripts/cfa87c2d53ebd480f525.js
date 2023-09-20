"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19861, 96043, 1459], {
        201459: (t, e, n) => {
            n.d(e, {
                Z: () => y
            });
            var r = n(730381),
                i = n.n(r),
                u = n(575945),
                a = n(744564),
                l = n(52317),
                o = n(9430),
                c = n(171940),
                s = n(131559),
                f = n(473708);

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function v(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, u = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return u
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const y = {
                open: function(t) {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: t
                    })
                },
                close: function() {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(t, e, n) {
                    var r = (0, c.GA)(t);
                    l.Z.saveUserGuildSettings(t, e);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: t,
                        settings: e
                    });
                    (0, c.Wq)(t, e, r, n)
                },
                updateGuildAndChannelNotificationSettings: function(t, e, n) {
                    var r = Object.keys(e.channel_overrides),
                        i = (0, c.GA)(t),
                        u = (0, c.wK)(t, r);
                    l.Z.saveUserGuildSettings(t, e);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: t,
                        settings: e
                    });
                    (0, c.Wq)(t, e, i, n);
                    Object.keys(e.channel_overrides).forEach((function(r) {
                        var i = u.get(r);
                        (0, c.jz)(t, r, e.channel_overrides[r], i, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(t, e) {
                    var n = Object.keys(t),
                        r = (0, c.rU)(n);
                    l.Z.saveUserGuildSettingsBulk(t);
                    Object.entries(t).forEach((function(t) {
                        var n = v(t, 2),
                            i = n[0],
                            u = n[1],
                            l = r.get(i);
                        a.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: u
                        });
                        (0, c.Wq)(i, u, l, e)
                    }))
                },
                updateChannelOverrideSettings: function(t, e, n, r) {
                    var i = (0, c.I)(t, e),
                        o = {
                            channel_overrides: p({}, e, n)
                        };
                    l.Z.saveUserGuildSettings(t, o);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: t,
                        channelId: e,
                        settings: n
                    });
                    u.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(t, e, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(t, e, n) {
                    var r = Object.keys(e),
                        i = {
                            channel_overrides: e
                        },
                        u = (0, c.wK)(t, r);
                    l.Z.saveUserGuildSettings(t, i);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: t,
                        overrides: e
                    });
                    Object.keys(e).forEach((function(r) {
                        return (0,
                            c.jz)(t, r, e[r], u.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(t, e) {
                    var n = e ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = e ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        i = o.Z.getChannelFlags(t) & ~r | n;
                    this.updateChannelOverrideSettings(t.guild_id, t.id, {
                        flags: i
                    })
                },
                handleCheckboxChange: function(t, e, n, r) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: t,
                        updatedSettings: p({}, e, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(t, e, n, r) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: t,
                        updatedSettings: p({}, e, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(t, e, n) {
                    var r = {
                        selected_time_window: e,
                        end_time: e > 0 ? i()().add(e, "second").toISOString() : null
                    };
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, t, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(t, e, n) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: t,
                        updatedSettings: {
                            notifyHighlights: e
                        },
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleProfileChange: function(t, e) {
                    a.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: e.id,
                        profile: t.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        83797: (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            n.d(e, {
                v_: () => L,
                JS: () => w,
                hH: () => N,
                AB: () => U,
                ZP: () => R,
                oG: () => D,
                kO: () => G,
                yw: () => j
            });
            var r = n(496486),
                i = n.n(r),
                u = n(940060),
                a = n(382060),
                l = n(664625),
                o = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(525077),
                v = n(682776),
                y = n(491260),
                h = n(563367),
                g = n(715107),
                _ = n(464187),
                E = n(407561),
                S = n(652591),
                O = n(563135),
                b = n(671723);
            var I = n(2590),
                m = n(897196);

            function T(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function A(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        T(t, e, n[e])
                    }))
                }
                return t
            }

            function P(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function N(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = l.default.getId(),
                    i = f.ZP.getMember(t, r),
                    u = c.ZP.getChannels(t),
                    a = u[c.sH].length,
                    o = u[c.Zb].length,
                    p = E.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: a + o,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: o,
                    guild_num_roles: P(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = v.Z.getGuildPermissions(e)) && void 0 !== n ? n : O.ZP.NONE),
                    guild_is_vip: e.hasFeature(I.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: P(p)
                }
            }

            function C(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function w(t) {
                if (null == t) return null;
                var e = o.Z.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && u.Z.has(e.deny, I.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(t.type) && null != t.parent_id ? i(o.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = v.Z.getChannelPermissions(t)) && void 0 !== e ? e : O.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(t) {
                if (null == t) return null;
                var e = o.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = h.Z.getMediaSessionId();
                return A({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, G(e.getGuildId(), e.id, r), {
                    game_name: null != (n = b.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function Z(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function j(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!S.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== I.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? _.Z.getGuildId() : null,
                        u = "channel_id" in e ? e.channel_id : r ? g.Z.getChannelId(i) : null,
                        a = o.Z.getChannel(u),
                        l = Z(a, i),
                        c = A({}, e, N(l), null != i && null != u && (0, m.AB)(u) ? C(0, u) : L(a));
                    S.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function G(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(E.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== l.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function D(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(E.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != y.Z.findActivity(t.userId, (function(t) {
                        return t.type === I.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const R = {
                trackWithMetadata: j,
                getVoiceStateMetadata: G
            }
        },
        189651: (t, e, n) => {
            n.d(e, {
                iD: () => I,
                Zm: () => m,
                mL: () => T,
                zS: () => P,
                og: () => N,
                aq: () => C
            });
            var r = n(744564),
                i = n(396043),
                u = n(784426),
                a = n(61209),
                l = n(5544),
                o = n(21372),
                c = n(567403),
                s = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                v = n(861426),
                y = n(557177),
                h = n(2590),
                g = n(897196);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function E(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        E(t, e, n[e])
                    }))
                }
                return t
            }

            function O(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function b(t) {
                return function(t) {
                    if (Array.isArray(t)) return _(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(t, e) {
                p.default.track(h.rMx.VIEW_AS_ROLES_SELECTED, O(S({
                    num_roles: Object.keys(e.roles).length
                }, (0, i.hH)(t)), {
                    is_viewing_as_member: e.type === y.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                });
                A(t)
            }

            function m(t, e) {
                var n = v.Z.getData(t);
                if (null != n && n.type === e.type) {
                    p.default.track(h.rMx.VIEW_AS_ROLES_SELECTED, O(S({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(t)), {
                        is_viewing_as_member: n.type === y.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: t,
                        data: S({}, n, e)
                    });
                    A(t)
                }
            }

            function T(t) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function A(t) {
                var e = f.Z.getChannelId(t),
                    n = a.Z.getChannel(e);
                if (!(null != e && (0, g.AB)(e)) && !s.Z.can(h.Plq.VIEW_CHANNEL, n)) {
                    var r = l.ZP.getDefaultChannel(t);
                    null != r && (0, u.uL)(h.Z5c.CHANNEL(t, r.id))
                }
            }

            function P(t, e, n) {
                var r = new Set(d.Z.getOptedInChannels(t));
                e.forEach((function(t) {
                    return r.add(t)
                }));
                n.forEach((function(t) {
                    return r.delete(t)
                }));
                m(t, {
                    type: y.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function N(t, e) {
                var n = c.Z.getGuild(t);
                if (null != n) {
                    ! function(t, e) {
                        var n = b(l.ZP.getSelectableChannelIds(t)).concat(b(l.ZP.getVocalChannelIds(t))),
                            r = Array.from(e);
                        l.ZP.addConditionalChangeListener((function() {
                            var e = o.ZP.getSelfMember(t);
                            if (null == e) return !1;
                            if (r.some((function(t) {
                                    return !e.roles.includes(t)
                                }))) return !0;
                            var i = b(l.ZP.getSelectableChannelIds(t)).concat(b(l.ZP.getVocalChannelIds(t))).filter((function(t) {
                                return !n.includes(t)
                            }));
                            i.length > 0 && P(t, i, []);
                            return !1
                        }))
                    }(t, e);
                    var r = {};
                    e.forEach((function(t) {
                        return r[t] = n.roles[t]
                    }));
                    m(t, {
                        type: y.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function C(t, e) {
                m(t, S({
                    type: y.z.NEW_MEMBER
                }, e))
            }
        },
        52317: (t, e, n) => {
            n.d(e, {
                Z: () => G
            });
            var r = n(496486),
                i = n.n(r),
                u = n(281110),
                a = n(914716),
                l = n(296602),
                o = n(968968),
                c = n(61209),
                s = n(2590);

            function f(t, e, n, r, i, u, a) {
                try {
                    var l = t[u](a),
                        o = l.value
                } catch (t) {
                    n(t);
                    return
                }
                l.done ? e(o) : Promise.resolve(o).then(r, i)
            }

            function d(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = t.apply(e, n);

                        function a(t) {
                            f(u, r, i, a, l, "next", t)
                        }

                        function l(t) {
                            f(u, r, i, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        v(t, e, n[e])
                    }))
                }
                return t
            }

            function g(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function _(t, e) {
                return !e || "object" !== S(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function E(t, e) {
                E = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return E(t, e)
            }
            var S = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(t);
                    if (e) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var b = function(t, e) {
                    var n, r, i, u, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return u = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }), u;

                    function l(u) {
                        return function(l) {
                            return function(u) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                    (r = 0, i) && (u = [2 & u[0], i.value]);
                                    switch (u[0]) {
                                        case 0:
                                        case 1:
                                            i = u;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: u[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = u[1];
                                            u = [0];
                                            continue;
                                        case 7:
                                            u = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                a.label = u[1];
                                                break
                                            }
                                            if (6 === u[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = u;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(u);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    u = e.call(t, a)
                                } catch (t) {
                                    u = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & u[0]) throw u[1];
                                return {
                                    value: u[0] ? u[1] : void 0,
                                    done: !0
                                }
                            }([u, l])
                        }
                    }
                },
                I = {},
                m = new l.Z("UserGuildSettingsManager"),
                T = 0;

            function A() {
                I = h({}, o.Z.getCollapsedCategories())
            }

            function P() {
                if (!__OVERLAY__) {
                    clearTimeout(T);
                    T = setTimeout((function() {
                        return N()
                    }), 15e3)
                }
            }

            function N(t, e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = d((function(t, e) {
                    return b(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w(null != e ? v({}, null != t ? t : s.ME, e) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = d((function(t) {
                    var e, n, r, a, l, f, d;
                    return b(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(T);
                                e = 0 !== Object.keys(t).length;
                                n = o.Z.getCollapsedCategories();
                                r = U();
                                for (var v in r)
                                    if (null != (a = c.Z.getChannel(v)) && null != a.guild_id) {
                                        a.guild_id in t || (t[a.guild_id] = {});
                                        null == t[a.guild_id].channel_overrides && (t[a.guild_id].channel_overrides = {});
                                        t[a.guild_id].channel_overrides[a.id] = g(h({}, t[a.guild_id].channel_overrides[a.id]), {
                                            collapsed: a.id in n
                                        });
                                        e = !0
                                    } if (!e) return [2];
                                I = h({}, n);
                                l = i().map(t, (function(t, e) {
                                    return {
                                        guildId: e,
                                        updates: t,
                                        attempts: 0
                                    }
                                }));
                                p.label = 1;
                            case 1:
                                if (!(l.length > 0)) return [3, 8];
                                if ((f = l.shift()).guildId === s.I_8) return [3, 1];
                                p.label = 2;
                            case 2:
                                p.trys.push([2, 5, , 7]);
                                return [4, u.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, Z(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                m.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && l.push(f);
                                return [4, Z(5e3)];
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

            function U() {
                var t = {},
                    e = o.Z.getCollapsedCategories();
                for (var n in e) e[n] !== I[n] && (t[n] = !0);
                for (var r in I) e[r] !== I[r] && (t[r] = !0);
                return t
            }

            function Z(t) {
                return new Promise((function(e) {
                    return setTimeout(e, t + Math.ceil(t * Math.random()))
                }))
            }

            function j() {
                I = h({}, o.Z.getCollapsedCategories())
            }
            const G = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && E(t, e)
                }(n, t);
                var e = O(n);

                function n() {
                    p(this, n);
                    var t;
                    (t = e.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: P,
                        CATEGORY_EXPAND: P,
                        CATEGORY_COLLAPSE_ALL: P,
                        CATEGORY_EXPAND_ALL: P,
                        POST_CONNECTION_OPEN: A,
                        USER_GUILD_SETTINGS_FULL_UPDATE: j
                    };
                    t.saveUserGuildSettings = N;
                    t.saveUserGuildSettingsBulk = w;
                    return t
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        lastSavedCollapsedCategories: I,
                        logger: m,
                        syncTimer: T,
                        SYNC_DELAY_MS: 15e3
                    }
                };
                return n
            }(a.Z))
        },
        968968: (t, e, n) => {
            n.d(e, {
                Z: () => b
            });
            var r = n(202351),
                i = n(744564),
                u = n(72580),
                a = n(61209),
                l = n(837067),
                o = n(5544),
                c = n(2590);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function d(t) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return d(t)
            }

            function p(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function v(t, e) {
                v = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return v(t, e)
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(t);
                    if (e) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var g = {},
                _ = 0;

            function E() {
                _ += 1
            }

            function S(t) {
                if (null == g[t]) return !1;
                delete g[t]
            }
            var O = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && v(t, e)
                }(n, t);
                var e = h(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(t) {
                    this.waitFor(a.Z, l.Z);
                    this.removeChangeListener(E);
                    this.addChangeListener(E);
                    g = null != t ? t : {}
                };
                r.getState = function() {
                    return g
                };
                r.isCollapsed = function(t) {
                    return !(null == t || "null" === t || !g[t]) && g[t]
                };
                r.getCollapsedCategories = function() {
                    return g
                };
                r.__getLocalVars = function() {
                    return {
                        collapsedCategories: g,
                        version: _
                    }
                };
                ! function(t, e, n) {
                    e && f(t.prototype, e);
                    n && f(t, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return _
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "CategoryCollapseStore";
            O.persistKey = "collapsedCategories";
            const b = new O(i.Z, {
                CONNECTION_OPEN: function(t) {
                    t.userGuildSettings.partial || (g = {});
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, u = t.userGuildSettings.entries[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                            var a = i.value;
                            if (null != a.channel_overrides) {
                                var l = !0,
                                    o = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = a.channel_overrides[Symbol.iterator](); !(l = (s = f.next()).done); l = !0) {
                                        var d = s.value;
                                        d.collapsed ? g[d.channel_id] = !0 : delete g[d.channel_id]
                                    }
                                } catch (t) {
                                    o = !0;
                                    c = t
                                } finally {
                                    try {
                                        l || null == f.return || f.return()
                                    } finally {
                                        if (o) throw c
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        n = !0;
                        r = t
                    } finally {
                        try {
                            e || null == u.return || u.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(t) {
                    var e = t.userGuildSettings,
                        n = new Set(e.map((function(t) {
                            return t.guild_id
                        })).filter(u.lm));
                    for (var r in g) {
                        var i = a.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete g[i.id]
                    }
                    var l = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var s, f = e[Symbol.iterator](); !(l = (s = f.next()).done); l = !0) {
                            var d = s.value,
                                p = !0,
                                v = !1,
                                y = void 0;
                            try {
                                for (var h, _ = d.channel_overrides[Symbol.iterator](); !(p = (h = _.next()).done); p = !0) {
                                    var E = h.value;
                                    E.collapsed && (g[E.channel_id] = !0)
                                }
                            } catch (t) {
                                v = !0;
                                y = t
                            } finally {
                                try {
                                    p || null == _.return || _.return()
                                } finally {
                                    if (v) throw y
                                }
                            }
                        }
                    } catch (t) {
                        o = !0;
                        c = t
                    } finally {
                        try {
                            l || null == f.return || f.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(t) {
                    var e = t.id;
                    if (g[e]) return !1;
                    g[e] = !0
                },
                CATEGORY_EXPAND: function(t) {
                    return S(t.id)
                },
                CATEGORY_COLLAPSE_ALL: function(t) {
                    var e = t.guildId;
                    o.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        "null" !== e.id && (g[e.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(t) {
                    var e = t.guildId;
                    o.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        delete g[e.id]
                    }))
                },
                CHANNEL_DELETE: function(t) {
                    return S(t.channel.id)
                }
            })
        },
        491260: (t, e, n) => {
            n.d(e, {
                Z: () => x
            });
            var r = n(110251),
                i = n.n(r),
                u = n(496486),
                a = n.n(u),
                l = n(202351),
                o = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function h(t) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return h(t)
            }

            function g(t, e) {
                return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function _(t, e) {
                _ = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return _(t, e)
            }

            function E(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, u = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return u
                    }
                }(t, e) || b(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || b(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function b(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function I(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(t);
                    if (e) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var m = Object.freeze([]),
                T = {},
                A = {},
                P = {},
                N = {},
                C = {};

            function w(t, e) {
                var n = T[t];
                return null != n ? n[e] : null
            }
            var L = function(t) {
                switch (t.type) {
                    case d.IIU.CUSTOM_STATUS:
                        return 4;
                    case d.IIU.COMPETING:
                        return 3;
                    case d.IIU.STREAMING:
                        return 2;
                    case d.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var U = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function Z(t, e) {
                return function(t, e) {
                    return L(e) - L(t)
                }(t, e) || function(t, e) {
                    return U(e) - U(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function j(t) {
                delete A[t];
                delete P[t];
                delete N[t];
                if (null != T[t]) {
                    var e = E(a().sortBy(T[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[t] = n.status;
                        P[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    } else a().every(T[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete T[t]
                }
            }

            function G(t) {
                var e = T[t];
                if (null != e) {
                    var n = a().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[t] = n.status;
                        P[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    }
                }
            }

            function D(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    u = t.clientStatus,
                    a = t.activities;
                if (n === s.default.getId()) return !1;
                var l = T[n];
                if (null == l) {
                    if (r === d.Skl.OFFLINE) return !1;
                    l = T[n] = {}
                }
                if (r === d.Skl.OFFLINE) l[e] = {
                    status: r,
                    clientStatus: u,
                    activities: m,
                    timestamp: Date.now()
                };
                else {
                    var o = a.length > 1 ? S(a).sort(Z) : a,
                        c = l[e];
                    a = null != c && i()(c.activities, o) ? c.activities : o;
                    l[e] = {
                        status: r,
                        clientStatus: u,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                j(n);
                return !0
            }

            function R(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities,
                    a = t.timestamp;
                if (n !== s.default.getId()) {
                    var l = T[n];
                    if (null == l) {
                        if (r === d.Skl.OFFLINE) return;
                        l = T[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) l[e] = {
                        status: r,
                        clientStatus: i,
                        activities: m,
                        timestamp: Date.now()
                    };
                    else {
                        var o = u.length > 1 ? S(u).sort(Z) : u;
                        l[e] = {
                            status: r,
                            clientStatus: i,
                            activities: o,
                            timestamp: a
                        }
                    }
                }
            }

            function M(t, e) {
                if (e === s.default.getId()) return !1;
                var n = T[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete T[e];
                j(e)
            }

            function k(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, u = Object.keys(T)[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                        M(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == u.return || u.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var F = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && _(t, e)
                }(n, t);
                var e = I(n);

                function n() {
                    v(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    A[s.default.getId()] = t;
                    P[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = A[t]) && void 0 !== i ? i : n
                    }
                    var u, a = w(t, e);
                    return null !== (u = null == a ? void 0 : a.status) && void 0 !== u ? u : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = P[t]) && void 0 !== n ? n : m
                    }
                    var r = w(t, e);
                    return null == r || null == r.activities ? m : r.activities
                };
                r.getPrimaryActivity = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                };
                r.getAllApplicationActivities = function(t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var u, a = Object.keys(P)[Symbol.iterator](); !(n = (u = a.next()).done); n = !0) {
                            var l = u.value,
                                o = P[l],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = o[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var v = d.value;
                                    v.application_id === t && e.push({
                                        userId: l,
                                        activity: v
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                f = t
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                };
                r.getApplicationActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, (function(t) {
                        return t.application_id === e
                    }), n)
                };
                r.findActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                };
                r.getActivityMetadata = function(t) {
                    return C[t]
                };
                r.getUserIds = function() {
                    return Object.keys(P)
                };
                r.isMobileOnline = function(t) {
                    var e = N[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: T,
                        statuses: A,
                        activities: P,
                        activityMetadata: C,
                        clientStatuses: N
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: m,
                        presencesForGuilds: T,
                        statuses: A,
                        activities: P,
                        clientStatuses: N,
                        activityMetadata: C,
                        typeScore: L,
                        richnessScore: U
                    }
                };
                return n
            }(l.ZP.Store);
            F.displayName = "PresenceStore";
            const x = new F(o.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    T = {};
                    C = {};
                    A = y({}, r, A[r]);
                    P = y({}, r, P[r]);
                    N = y({}, r, {});
                    var i = new Set,
                        u = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                a = e.clientStatus,
                                l = e.activities;
                            R({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: a,
                                activities: l,
                                timestamp: u
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            a = t.activities;
                        if (null != e) {
                            R({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: a,
                                timestamp: u
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(G)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    T = e.presencesForGuilds;
                    A = e.statuses;
                    P = e.activities;
                    C = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        D({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: u
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    k(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return M(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        return D({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: u
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    k(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && D({
                            guildId: d.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    C[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && D({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    null == n || n.forEach((function(t) {
                        null != t.presence && D({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    var e = s.default.getId();
                    if (A[e] === t.status && P[e] === t.activities) return !1;
                    A[e] = t.status;
                    P[e] = t.activities;
                    delete C[e]
                }
            })
        },
        180735: (t, e, n) => {
            n.d(e, {
                h: () => r
            });
            var r;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        }
    }
]);