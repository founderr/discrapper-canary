(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99293, 96043, 1459], {
        16243: t => {
            if (!e) var e = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map((function(t, r) {
                        n.index = r;
                        return e.call(n, t)
                    })) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        n.index = i;
                        return t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? e.map(t, n) : t)
                }
            };
            var n = function() {
                function t(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t);
                        n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t);
                            n = !1
                        },
                        peek: function(t) {
                            n || r();
                            void 0 === t && (t = e.length - 1);
                            return e[t]
                        },
                        pop: function() {
                            n || r();
                            return e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            n || r();
                            return e
                        }
                    }
                }

                function r(t, e, n, r, i, u, o) {
                    var a = this;
                    a.r1 = t;
                    a.r2 = e;
                    a.g1 = n;
                    a.g2 = r;
                    a.b1 = i;
                    a.b2 = u;
                    a.histo = o
                }
                r.prototype = {
                    volume: function(t) {
                        var e = this;
                        e._volume && !t || (e._volume = (e.r2 - e.r1 + 1) * (e.g2 - e.g1 + 1) * (e.b2 - e.b1 + 1));
                        return e._volume
                    },
                    count: function(e) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || e) {
                            var i, u, o, a = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (o = n.b1; o <= n.b2; o++) a += r[t(i, u, o)] || 0;
                            n._count = a;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var t = this;
                        return new r(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
                    },
                    avg: function(e) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || e) {
                            var i, u, o, a, l = 0,
                                c = 0,
                                s = 0,
                                f = 0;
                            for (u = n.r1; u <= n.r2; u++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (a = n.b1; a <= n.b2; a++) {
                                        l += i = r[t(u, o, a)] || 0;
                                        c += i * (u + .5) * 8;
                                        s += i * (o + .5) * 8;
                                        f += i * (a + .5) * 8
                                    }
                            n._avg = l ? [~~(c / l), ~~(s / l), ~~(f / l)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(t) {
                        var e = this,
                            n = t[0] >> 3;
                        gval = t[1] >> 3;
                        bval = t[2] >> 3;
                        return n >= e.r1 && n <= e.r2 && gval >= e.g1 && gval <= e.g2 && bval >= e.b1 && bval <= e.b2
                    }
                };

                function i() {
                    this.vboxes = new n((function(t, n) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(t) {
                            return t.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, u = 0; u < i.size(); u++)
                            if ((n = Math.sqrt(Math.pow(t[0] - i.peek(u).color[0], 2) + Math.pow(t[1] - i.peek(u).color[1], 2) + Math.pow(t[2] - i.peek(u).color[2], 2))) < e || void 0 === e) {
                                e = n;
                                r = i.peek(u).color
                            } return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort((function(t, n) {
                            return e.naturalOrder(e.sum(t.color), e.sum(n.color))
                        }));
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            i = t[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                };

                function u(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            u = r.g2 - r.g1 + 1,
                            o = r.b2 - r.b1 + 1,
                            a = e.max([i, u, o]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, f, d = 0,
                            p = [],
                            v = [];
                        if (a == i)
                            for (l = r.r1; l <= r.r2; l++) {
                                f = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[t(l, c, s)] || 0;
                                d += f;
                                p[l] = d
                            } else if (a == u)
                                for (l = r.g1; l <= r.g2; l++) {
                                    f = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[t(c, l, s)] || 0;
                                    d += f;
                                    p[l] = d
                                } else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        f = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[t(c, s, l)] || 0;
                                        d += f;
                                        p[l] = d
                                    }
                        p.forEach((function(t, e) {
                            v[e] = d - t
                        }));
                        return h(a == i ? "r" : a == u ? "g" : "b")
                    }

                    function h(t) {
                        var e, n, i, u, o, a = t + "1",
                            c = t + "2",
                            s = 0;
                        for (l = r[a]; l <= r[c]; l++)
                            if (p[l] > d / 2) {
                                i = r.copy();
                                u = r.copy();
                                o = (e = l - r[a]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[a], ~~(l - 1 - e / 2));
                                for (; !p[o];) o++;
                                s = v[o];
                                for (; !s && p[o - 1];) s = v[--o];
                                i[c] = o;
                                u[a] = i[c] + 1;
                                return [i, u]
                            }
                    }
                }
                return {
                    quantize: function(o, a) {
                        if (!o.length || a < 2 || a > 256) return !1;
                        var l = function(e) {
                            var n, r, i, u, o = new Array(32768);
                            e.forEach((function(e) {
                                r = e[0] >> 3;
                                i = e[1] >> 3;
                                u = e[2] >> 3;
                                n = t(r, i, u);
                                o[n] = (o[n] || 0) + 1
                            }));
                            return o
                        }(o);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(t, e) {
                                var n, i, u, o = 1e6,
                                    a = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    f = 0;
                                t.forEach((function(t) {
                                    n = t[0] >> 3;
                                    i = t[1] >> 3;
                                    u = t[2] >> 3;
                                    n < o ? o = n : n > a && (a = n);
                                    i < l ? l = i : i > c && (c = i);
                                    u < s ? s = u : u > f && (f = u)
                                }));
                                return new r(o, a, l, c, s, f, e)
                            }(o, l),
                            s = new n((function(t, n) {
                                return e.naturalOrder(t.count(), n.count())
                            }));
                        s.push(c);

                        function f(t, e) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = t.pop()).count()) {
                                    var o = u(l, n),
                                        a = o[0],
                                        c = o[1];
                                    if (!a) return;
                                    t.push(a);
                                    if (c) {
                                        t.push(c);
                                        r++
                                    }
                                    if (r >= e) return;
                                    if (i++ > 1e3) return
                                } else {
                                    t.push(n);
                                    i++
                                }
                        }
                        f(s, .75 * a);
                        for (var d = new n((function(t, n) {
                                return e.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            })); s.size();) d.push(s.pop());
                        f(d, a - d.size());
                        for (var p = new i; d.size();) p.push(d.pop());
                        return p
                    }
                }
            }();
            t.exports = n.quantize
        },
        201459: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => h
            });
            var r = n(730381),
                i = n.n(r),
                u = n(575945),
                o = n(744564),
                a = n(52317),
                l = n(9430),
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
                            o = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(o = (r = n.next()).done); o = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (a) throw i
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
            const h = {
                open: function(t) {
                    o.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: t
                    })
                },
                close: function() {
                    o.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(t, e, n) {
                    var r = (0, c.GA)(t);
                    a.Z.saveUserGuildSettings(t, e);
                    o.Z.dispatch({
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
                    a.Z.saveUserGuildSettings(t, e);
                    o.Z.dispatch({
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
                    a.Z.saveUserGuildSettingsBulk(t);
                    Object.entries(t).forEach((function(t) {
                        var n = v(t, 2),
                            i = n[0],
                            u = n[1],
                            a = r.get(i);
                        o.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: u
                        });
                        (0, c.Wq)(i, u, a, e)
                    }))
                },
                updateChannelOverrideSettings: function(t, e, n, r) {
                    var i = (0, c.I)(t, e),
                        l = {
                            channel_overrides: p({}, e, n)
                        };
                    a.Z.saveUserGuildSettings(t, l);
                    o.Z.dispatch({
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
                    a.Z.saveUserGuildSettings(t, i);
                    o.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: t,
                        overrides: e
                    });
                    Object.keys(e).forEach((function(r) {
                        return (0, c.jz)(t, r, e[r], u.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(t, e) {
                    var n = e ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = e ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        i = l.Z.getChannelFlags(t) & ~r | n;
                    this.updateChannelOverrideSettings(t.guild_id, t.id, {
                        flags: i
                    })
                },
                handleCheckboxChange: function(t, e, n, r) {
                    o.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: t,
                        updatedSettings: p({}, e, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(t, e, n, r) {
                    o.Z.dispatch({
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
                    o.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, t, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(t, e, n) {
                    o.Z.dispatch({
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
                    o.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: e.id,
                        profile: t.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        83797: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            "use strict";
            n.d(e, {
                v_: () => L,
                JS: () => P,
                hH: () => N,
                AB: () => U,
                ZP: () => D,
                oG: () => Z,
                kO: () => G,
                yw: () => M
            });
            var r = n(496486),
                i = n.n(r),
                u = n(940060),
                o = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(525077),
                v = n(682776),
                h = n(491260),
                g = n(563367),
                y = n(715107),
                _ = n(464187),
                b = n(407561),
                E = n(652591),
                m = n(563135),
                S = n(671723);
            var O = n(2590),
                I = n(897196);

            function A(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        A(t, e, n[e])
                    }))
                }
                return t
            }

            function T(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function N(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(t, r),
                    u = c.ZP.getChannels(t),
                    o = u[c.sH].length,
                    l = u[c.Zb].length,
                    p = b.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: o + l,
                    guild_num_text_channels: o,
                    guild_num_voice_channels: l,
                    guild_num_roles: T(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = v.Z.getGuildPermissions(e)) && void 0 !== n ? n : m.ZP.NONE),
                    guild_is_vip: e.hasFeature(O.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: T(p)
                }
            }

            function C(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function P(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
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
                        return null != e && u.Z.has(e.deny, O.Plq.VIEW_CHANNEL)
                    };
                    n = o.Ec.has(t.type) && null != t.parent_id ? i(l.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = v.Z.getChannelPermissions(t)) && void 0 !== e ? e : m.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = g.Z.getMediaSessionId();
                return w({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, G(e.getGuildId(), e.id, r), {
                    game_name: null != (n = S.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function R(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function M(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!E.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== O.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? _.Z.getGuildId() : null,
                        u = "channel_id" in e ? e.channel_id : r ? y.Z.getChannelId(i) : null,
                        o = l.Z.getChannel(u),
                        a = R(o, i),
                        c = w({}, e, N(a), null != i && null != u && (0, I.AB)(u) ? C(0, u) : L(o));
                    E.default.track(t, c, {
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
                i()(b.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function Z(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(b.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != h.Z.findActivity(t.userId, (function(t) {
                        return t.type === O.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const D = {
                trackWithMetadata: M,
                getVoiceStateMetadata: G
            }
        },
        189651: (t, e, n) => {
            "use strict";
            n.d(e, {
                iD: () => O,
                Zm: () => I,
                mL: () => A,
                zS: () => T,
                og: () => N,
                aq: () => C
            });
            var r = n(744564),
                i = n(396043),
                u = n(784426),
                o = n(61209),
                a = n(5544),
                l = n(21372),
                c = n(567403),
                s = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                v = n(861426),
                h = n(557177),
                g = n(2590),
                y = n(897196);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function b(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        b(t, e, n[e])
                    }))
                }
                return t
            }

            function m(t, e) {
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

            function S(t) {
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

            function O(t, e) {
                p.default.track(g.rMx.VIEW_AS_ROLES_SELECTED, m(E({
                    num_roles: Object.keys(e.roles).length
                }, (0,
                    i.hH)(t)), {
                    is_viewing_as_member: e.type === h.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                });
                w(t)
            }

            function I(t, e) {
                var n = v.Z.getData(t);
                if (null != n && n.type === e.type) {
                    p.default.track(g.rMx.VIEW_AS_ROLES_SELECTED, m(E({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(t)), {
                        is_viewing_as_member: n.type === h.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: t,
                        data: E({}, n, e)
                    });
                    w(t)
                }
            }

            function A(t) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function w(t) {
                var e = f.Z.getChannelId(t),
                    n = o.Z.getChannel(e);
                if (!(null != e && (0, y.AB)(e)) && !s.Z.can(g.Plq.VIEW_CHANNEL, n)) {
                    var r = a.ZP.getDefaultChannel(t);
                    null != r && (0, u.uL)(g.Z5c.CHANNEL(t, r.id))
                }
            }

            function T(t, e, n) {
                var r = new Set(d.Z.getOptedInChannels(t));
                e.forEach((function(t) {
                    return r.add(t)
                }));
                n.forEach((function(t) {
                    return r.delete(t)
                }));
                I(t, {
                    type: h.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function N(t, e) {
                var n = c.Z.getGuild(t);
                if (null != n) {
                    ! function(t, e) {
                        var n = S(a.ZP.getSelectableChannelIds(t)).concat(S(a.ZP.getVocalChannelIds(t))),
                            r = Array.from(e);
                        a.ZP.addConditionalChangeListener((function() {
                            var e = l.ZP.getSelfMember(t);
                            if (null == e) return !1;
                            if (r.some((function(t) {
                                    return !e.roles.includes(t)
                                }))) return !0;
                            var i = S(a.ZP.getSelectableChannelIds(t)).concat(S(a.ZP.getVocalChannelIds(t))).filter((function(t) {
                                return !n.includes(t)
                            }));
                            i.length > 0 && T(t, i, []);
                            return !1
                        }))
                    }(t, e);
                    var r = {};
                    e.forEach((function(t) {
                        return r[t] = n.roles[t]
                    }));
                    I(t, {
                        type: h.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function C(t, e) {
                I(t, E({
                    type: h.z.NEW_MEMBER
                }, e))
            }
        },
        52317: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => G
            });
            var r = n(496486),
                i = n.n(r),
                u = n(281110),
                o = n(914716),
                a = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function f(t, e, n, r, i, u, o) {
                try {
                    var a = t[u](o),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function d(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = t.apply(e, n);

                        function o(t) {
                            f(u, r, i, o, a, "next", t)
                        }

                        function a(t) {
                            f(u, r, i, o, a, "throw", t)
                        }
                        o(void 0)
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

            function h(t) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return h(t)
            }

            function g(t) {
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

            function y(t, e) {
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
                return !e || "object" !== E(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function b(t, e) {
                b = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return b(t, e)
            }
            var E = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function m(t) {
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
                    return _(this, n)
                }
            }
            var S = function(t, e) {
                    var n, r, i, u, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return u = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }), u;

                    function a(u) {
                        return function(a) {
                            return function(u) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                    (r = 0, i) && (u = [2 & u[0], i.value]);
                                    switch (u[0]) {
                                        case 0:
                                        case 1:
                                            i = u;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: u[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = u[1];
                                            u = [0];
                                            continue;
                                        case 7:
                                            u = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                o.label = u[1];
                                                break
                                            }
                                            if (6 === u[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = u;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(u);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    u = e.call(t, o)
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
                            }([u, a])
                        }
                    }
                },
                O = {},
                I = new a.Z("UserGuildSettingsManager"),
                A = 0;

            function w() {
                O = g({}, l.Z.getCollapsedCategories())
            }

            function T() {
                if (!__OVERLAY__) {
                    clearTimeout(A);
                    A = setTimeout((function() {
                        return N()
                    }), 15e3)
                }
            }

            function N(t, e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = d((function(t, e) {
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, P(null != e ? v({}, null != t ? t : s.ME, e) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = d((function(t) {
                    var e, n, r, o, a, f, d;
                    return S(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(A);
                                e = 0 !== Object.keys(t).length;
                                n = l.Z.getCollapsedCategories();
                                r = U();
                                for (var v in r)
                                    if (null != (o = c.Z.getChannel(v)) && null != o.guild_id) {
                                        o.guild_id in t || (t[o.guild_id] = {});
                                        null == t[o.guild_id].channel_overrides && (t[o.guild_id].channel_overrides = {});
                                        t[o.guild_id].channel_overrides[o.id] = y(g({}, t[o.guild_id].channel_overrides[o.id]), {
                                            collapsed: o.id in n
                                        });
                                        e = !0
                                    } if (!e) return [2];
                                O = g({}, n);
                                a = i().map(t, (function(t, e) {
                                    return {
                                        guildId: e,
                                        updates: t,
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
                                return [4, u.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, R(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                I.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && a.push(f);
                                return [4, R(5e3)];
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
                    e = l.Z.getCollapsedCategories();
                for (var n in e) e[n] !== O[n] && (t[n] = !0);
                for (var r in O) e[r] !== O[r] && (t[r] = !0);
                return t
            }

            function R(t) {
                return new Promise((function(e) {
                    return setTimeout(e, t + Math.ceil(t * Math.random()))
                }))
            }

            function M() {
                O = g({}, l.Z.getCollapsedCategories())
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
                    e && b(t, e)
                }(n, t);
                var e = m(n);

                function n() {
                    p(this, n);
                    var t;
                    (t = e.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: T,
                        CATEGORY_EXPAND: T,
                        CATEGORY_COLLAPSE_ALL: T,
                        CATEGORY_EXPAND_ALL: T,
                        POST_CONNECTION_OPEN: w,
                        USER_GUILD_SETTINGS_FULL_UPDATE: M
                    };
                    t.saveUserGuildSettings = N;
                    t.saveUserGuildSettingsBulk = P;
                    return t
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        lastSavedCollapsedCategories: O,
                        logger: I,
                        syncTimer: A,
                        SYNC_DELAY_MS: 15e3
                    }
                };
                return n
            }(o.Z))
        },
        968968: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => S
            });
            var r = n(202351),
                i = n(744564),
                u = n(72580),
                o = n(61209),
                a = n(837067),
                l = n(5544),
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
                return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
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
            var h = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function g(t) {
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
            var y = {},
                _ = 0;

            function b() {
                _ += 1
            }

            function E(t) {
                if (null == y[t]) return !1;
                delete y[t]
            }
            var m = function(t) {
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
                var e = g(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(t) {
                    this.waitFor(o.Z, a.Z);
                    this.removeChangeListener(b);
                    this.addChangeListener(b);
                    y = null != t ? t : {}
                };
                r.getState = function() {
                    return y
                };
                r.isCollapsed = function(t) {
                    return !(null == t || "null" === t || !y[t]) && y[t]
                };
                r.getCollapsedCategories = function() {
                    return y
                };
                r.__getLocalVars = function() {
                    return {
                        collapsedCategories: y,
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
            m.displayName = "CategoryCollapseStore";
            m.persistKey = "collapsedCategories";
            const S = new m(i.Z, {
                CONNECTION_OPEN: function(t) {
                    t.userGuildSettings.partial || (y = {});
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, u = t.userGuildSettings.entries[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                            var o = i.value;
                            if (null != o.channel_overrides) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = o.channel_overrides[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                                        var d = s.value;
                                        d.collapsed ? y[d.channel_id] = !0 : delete y[d.channel_id]
                                    }
                                } catch (t) {
                                    l = !0;
                                    c = t
                                } finally {
                                    try {
                                        a || null == f.return || f.return()
                                    } finally {
                                        if (l) throw c
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
                    for (var r in y) {
                        var i = o.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete y[i.id]
                    }
                    var a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, f = e[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                            var d = s.value,
                                p = !0,
                                v = !1,
                                h = void 0;
                            try {
                                for (var g, _ = d.channel_overrides[Symbol.iterator](); !(p = (g = _.next()).done); p = !0) {
                                    var b = g.value;
                                    b.collapsed && (y[b.channel_id] = !0)
                                }
                            } catch (t) {
                                v = !0;
                                h = t
                            } finally {
                                try {
                                    p || null == _.return || _.return()
                                } finally {
                                    if (v) throw h
                                }
                            }
                        }
                    } catch (t) {
                        l = !0;
                        c = t
                    } finally {
                        try {
                            a || null == f.return || f.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(t) {
                    var e = t.id;
                    if (y[e]) return !1;
                    y[e] = !0
                },
                CATEGORY_EXPAND: function(t) {
                    return E(t.id)
                },
                CATEGORY_COLLAPSE_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        "null" !== e.id && (y[e.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        delete y[e.id]
                    }))
                },
                CHANNEL_DELETE: function(t) {
                    return E(t.channel.id)
                }
            })
        },
        491260: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => F
            });
            var r = n(110251),
                i = n.n(r),
                u = n(496486),
                o = n.n(u),
                a = n(202351),
                l = n(744564),
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

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function g(t) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return g(t)
            }

            function y(t, e) {
                return !e || "object" !== m(e) && "function" != typeof e ? function(t) {
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

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, u = [],
                            o = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(o = (r = n.next()).done); o = !0) {
                                u.push(r.value);
                                if (e && u.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return u
                    }
                }(t, e) || S(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || S(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function S(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

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
                    var n, r = g(t);
                    if (e) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var I = Object.freeze([]),
                A = {},
                w = {},
                T = {},
                N = {},
                C = {};

            function P(t, e) {
                var n = A[t];
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

            function R(t, e) {
                return function(t, e) {
                    return L(e) - L(t)
                }(t, e) || function(t, e) {
                    return U(e) - U(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function M(t) {
                delete w[t];
                delete T[t];
                delete N[t];
                if (null != A[t]) {
                    var e = b(o().sortBy(A[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        w[t] = n.status;
                        T[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    } else o().every(A[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete A[t]
                }
            }

            function G(t) {
                var e = A[t];
                if (null != e) {
                    var n = o().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        w[t] = n.status;
                        T[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    }
                }
            }

            function Z(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    u = t.clientStatus,
                    o = t.activities;
                if (n === s.default.getId()) return !1;
                var a = A[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = A[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: u,
                    activities: I,
                    timestamp: Date.now()
                };
                else {
                    var l = o.length > 1 ? E(o).sort(R) : o,
                        c = a[e];
                    o = null != c && i()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: u,
                        activities: o,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                M(n);
                return !0
            }

            function D(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities,
                    o = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = A[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = A[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: I,
                        timestamp: Date.now()
                    };
                    else {
                        var l = u.length > 1 ? E(u).sort(R) : u;
                        a[e] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: o
                        }
                    }
                }
            }

            function j(t, e) {
                if (e === s.default.getId()) return !1;
                var n = A[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete A[e];
                M(e)
            }

            function x(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, u = Object.keys(A)[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                        j(t, i.value)
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
            var k = function(t) {
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
                var e = O(n);

                function n() {
                    v(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    w[s.default.getId()] = t;
                    T[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = w[t]) && void 0 !== i ? i : n
                    }
                    var u, o = P(t, e);
                    return null !== (u = null == o ? void 0 : o.status) && void 0 !== u ? u : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = T[t]) && void 0 !== n ? n : I
                    }
                    var r = P(t, e);
                    return null == r || null == r.activities ? I : r.activities
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
                        for (var u, o = Object.keys(T)[Symbol.iterator](); !(n = (u = o.next()).done); n = !0) {
                            var a = u.value,
                                l = T[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var v = d.value;
                                    v.application_id === t && e.push({
                                        userId: a,
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
                            n || null == o.return || o.return()
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
                    return Object.keys(T)
                };
                r.isMobileOnline = function(t) {
                    var e = N[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: A,
                        statuses: w,
                        activities: T,
                        activityMetadata: C,
                        clientStatuses: N
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: I,
                        presencesForGuilds: A,
                        statuses: w,
                        activities: T,
                        clientStatuses: N,
                        activityMetadata: C,
                        typeScore: L,
                        richnessScore: U
                    }
                };
                return n
            }(a.ZP.Store);
            k.displayName = "PresenceStore";
            const F = new k(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    A = {};
                    C = {};
                    w = h({}, r, w[r]);
                    T = h({}, r, T[r]);
                    N = h({}, r, {});
                    var i = new Set,
                        u = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                o = e.clientStatus,
                                a = e.activities;
                            D({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: o,
                                activities: a,
                                timestamp: u
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            o = t.activities;
                        if (null != e) {
                            D({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: o,
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
                    A = e.presencesForGuilds;
                    w = e.statuses;
                    T = e.activities;
                    C = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        Z({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: u
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    x(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return j(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            u = t.activities;
                        return Z({
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
                    x(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && Z({
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
                        null != t.presence && Z({
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
                        null != t.presence && Z({
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
                    if (w[e] === t.status && T[e] === t.activities) return !1;
                    w[e] = t.status;
                    T[e] = t.activities;
                    delete C[e]
                }
            })
        },
        347117: (t, e, n) => {
            "use strict";
            n.d(e, {
                Tj: () => d,
                zp: () => p,
                Dc: () => v,
                rn: () => h,
                rv: () => g,
                XN: () => _,
                OF: () => b,
                fD: () => m,
                QB: () => S,
                Bo: () => O,
                c0: () => w
            });
            var r = n(441143),
                i = n.n(r),
                u = n(496486),
                o = n.n(u),
                a = n(16243),
                l = n.n(a);

            function c(t, e, n, r, i, u, o) {
                try {
                    var a = t[u](o),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function s(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = t.apply(e, n);

                        function o(t) {
                            c(u, r, i, o, a, "next", t)
                        }

                        function a(t) {
                            c(u, r, i, o, a, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var f = function(t, e) {
                var n, r, i, u, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function a(u) {
                    return function(a) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            o.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(u);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                u = e.call(t, o)
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
                        }([u, a])
                    }
                }
            };
            0;

            function d(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    i = t.maxHeight,
                    u = t.minWidth,
                    o = void 0 === u ? 0 : u,
                    a = t.minHeight,
                    l = void 0 === a ? 0 : a;
                if (e !== r || n !== i) {
                    var c = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * c), o);
                    var s = (n = Math.max(Math.round(n * c), l)) > i ? i / n : 1;
                    e = Math.max(Math.round(e * s), o);
                    n = Math.max(Math.round(n * s), l)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function p(t, e) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: t,
                    height: e,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function v(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    i = t.maxHeight,
                    u = 1;
                e > r && (u = r / e);
                e = Math.round(e * u);
                var o = 1;
                (n = Math.round(n * u)) > i && (o = i / n);
                return Math.min(u * o, 1)
            }

            function h(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    i = t.maxHeight;
                if (e === n) return 1;
                var u = Math.max(r / e, i / n);
                return Math.min(u, 1)
            }

            function g(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            var y = [
                [0, 0, 0]
            ];

            function _(t, e, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return y;
                var u = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, u, o);
                var a = function(t, e, n) {
                        for (var r, i, u, o, a, l = [], c = 0; c < e; c += n) {
                            i = t[0 + (r = 4 * c)];
                            u = t[r + 1];
                            o = t[r + 2];
                            (void 0 === (a = t[r + 3]) || a >= 125) && (i > 250 && u > 250 && o > 250 || l.push([i, u, o]))
                        }
                        return l
                    }(i.getImageData(0, 0, u, o).data, u * o, n),
                    c = l()(a, e);
                return "boolean" == typeof c ? y : c.palette()
            }
            var b = function(t) {
                    return E(t)
                },
                E = o().memoize((function(t) {
                    return new Promise((function(e, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(t) {
                            n(t);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            e(_(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = t
                    }))
                }));

            function m(t) {
                return new Promise((function(e, n) {
                    var r = new FileReader;
                    r.readAsDataURL(t);
                    r.onload = function() {
                        i()("string" == typeof r.result, "Result must be a string");
                        e(r.result)
                    };
                    r.onerror = function(t) {
                        return n(t)
                    }
                }))
            }

            function S(t) {
                var e = t.split(";base64,");
                i()(2 === e.length, "Input data is not a valid image.");
                return atob(e[1]).length
            }

            function O(t, e, n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = s((function(t, e, n) {
                    var r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, A(t).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], e, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(t) {
                var e;
                e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                for (var n = t.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function w(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = s((function(t) {
                    var e, n, r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, t.text()];
                            case 1:
                                n = i.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        322500: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                u = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                o = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(t) {
                    return r.test(t)
                },
                isInvite: function(t) {
                    return i.test(t)
                },
                isPhoneNumber: function(t) {
                    return u.test(t)
                },
                isUserTagLike: function(t) {
                    var e = o.exec(t);
                    if (null != e && e.length > 1) {
                        var n = e[1],
                            r = a.some((function(t) {
                                return n.includes(t)
                            })),
                            i = l.includes(n);
                        return !r && !i
                    }
                    return !1
                }
            }
        },
        180735: (t, e, n) => {
            "use strict";
            n.d(e, {
                h: () => r
            });
            var r;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        284157: (t, e, n) => {
            "use strict";
            n.d(e, {
                n: () => r
            });
            var r;
            ! function(t) {
                t.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (t, e, n) => {
            "use strict";
            n.d(e, {
                o: () => r
            });
            var r;
            ! function(t) {
                t.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                t.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        }
    }
]);
//# sourceMappingURL=3706de88a57024d69285.js.map