(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67874, 96043, 1459], {
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = i(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), n = this._front, r = this._capacity, i = 0; i < t; ++i) e[i] = this[n + i & r - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    n = this._length;
                if (e > 1) {
                    var r = this._capacity;
                    if (n + e > r) {
                        for (var i = 0; i < e; ++i) {
                            this._checkCapacity(n + 1);
                            this[u = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var u = this._front, i = 0; i < e; ++i) {
                        this[u + n & r - 1] = arguments[i];
                        u++
                    }
                    this._length = n + e;
                    return n + e
                }
                if (0 === e) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = t;
                this._length = n + 1;
                return n + 1
            };
            e.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        n = this[e];
                    this[e] = void 0;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        n = this[e];
                    this[e] = void 0;
                    this._front = e + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.unshift = function(t) {
                var e = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (e + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(e + 1);
                            var i = this._capacity;
                            this[o = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = o
                        }
                        return e
                    }
                    var u = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var o;
                        this[o = (u - 1 & i - 1 ^ i) - i] = arguments[r];
                        u = o
                    }
                    this._front = u;
                    this._length = e + n;
                    return e + n
                }
                if (0 === n) return e;
                this._checkCapacity(e + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = t;
                this._length = e + 1;
                this._front = r;
                return e + 1
            };
            e.prototype.peekBack = function() {
                var t = this._length;
                if (0 !== t) {
                    return this[this._front + t - 1 & this._capacity - 1]
                }
            };
            e.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            e.prototype.get = function(t) {
                var e = t;
                if (e === (0 | e)) {
                    var n = this._length;
                    e < 0 && (e += n);
                    if (!(e < 0 || e >= n)) return this[this._front + e & this._capacity - 1]
                }
            };
            e.prototype.isEmpty = function() {
                return 0 === this._length
            };
            e.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            e.prototype.toString = function() {
                return this.toArray().toString()
            };
            e.prototype.valueOf = e.prototype.toString;
            e.prototype.removeFront = e.prototype.shift;
            e.prototype.removeBack = e.prototype.pop;
            e.prototype.insertFront = e.prototype.unshift;
            e.prototype.insertBack = e.prototype.push;
            e.prototype.enqueue = e.prototype.push;
            e.prototype.dequeue = e.prototype.shift;
            e.prototype.toJSON = e.prototype.toArray;
            Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            e.prototype._makeCapacity = function() {
                for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0
            };
            e.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    u = this._length;
                r(this, 0, i, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + u <= n) r(i, e, this, 0, u);
                else {
                    var o = u - (e + u & n - 1);
                    r(i, e, this, 0, o);
                    r(i, 0, this, o, u - o)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, i) {
                for (var u = 0; u < i; ++u) n[u + r] = t[u + e]
            }

            function i(t) {
                if ("number" != typeof t) {
                    if (!n(t)) return 16;
                    t = t.length
                }
                return function(t) {
                    t >>>= 0;
                    t -= 1;
                    t |= t >> 1;
                    t |= t >> 2;
                    t |= t >> 4;
                    t |= t >> 8;
                    return 1 + (t |= t >> 16)
                }(Math.min(Math.max(16, t), 1073741824))
            }
            t.exports = e
        },
        823493: (t, e, n) => {
            var r = n(23279),
                i = n(513218);
            t.exports = function(t, e, n) {
                var u = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(n)) {
                    u = "leading" in n ? !!n.leading : u;
                    o = "trailing" in n ? !!n.trailing : o
                }
                return r(t, e, {
                    leading: u,
                    maxWait: e,
                    trailing: o
                })
            }
        },
        201459: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => y
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

            function h(t, e) {
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
            const y = {
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
                        var n = h(t, 2),
                            i = n[0],
                            u = n[1],
                            a = r.get(i);
                        o.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: u
                        });
                        (0,
                            c.Wq)(i, u, a, e)
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
        320142: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(120415);

            function i(t, e, n, r, i, u, o) {
                try {
                    var a = t[u](o),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function u(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, u) {
                        var o = t.apply(e, n);

                        function a(t) {
                            i(o, r, u, a, l, "next", t)
                        }

                        function l(t) {
                            i(o, r, u, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var o = function(t, e) {
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
                                        if (!(i = o.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
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

            function a(t, e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = u((function(t, e) {
                    var i, u, a, l;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                i = o.sent(), u = i.default;
                                if (null != (a = u(t, {
                                        skipExtensionCheck: e,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(t);
                                else {
                                    (l = document.createElement("a")).href = t;
                                    l.target = "_blank";
                                    l.rel = "noreferrer noopener";
                                    l.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
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
                v_: () => j,
                JS: () => C,
                hH: () => A,
                AB: () => U,
                ZP: () => G,
                oG: () => D,
                kO: () => R,
                yw: () => Z
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
                p = n(973469),
                h = n(682776),
                y = n(491260),
                v = n(563367),
                _ = n(715107),
                g = n(464187),
                O = n(407561),
                E = n(652591),
                b = n(563135),
                I = n(671723);
            var S = n(2590),
                m = n(897196);

            function P(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        P(t, e, n[e])
                    }))
                }
                return t
            }

            function N(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function A(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(t, r),
                    u = c.ZP.getChannels(t),
                    o = u[c.sH].length,
                    l = u[c.Zb].length,
                    p = O.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: o + l,
                    guild_num_text_channels: o,
                    guild_num_voice_channels: l,
                    guild_num_roles: N(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(e)) && void 0 !== n ? n : b.ZP.NONE),
                    guild_is_vip: e.hasFeature(S.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(p)
                }
            }

            function w(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function C(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                return null == e ? null : j(e)
            }

            function j(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && u.Z.has(e.deny, S.Plq.VIEW_CHANNEL)
                    };
                    n = o.Ec.has(t.type) && null != t.parent_id ? i(l.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = h.Z.getChannelPermissions(t)) && void 0 !== e ? e : b.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = v.Z.getMediaSessionId();
                return T({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, R(e.getGuildId(), e.id, r), {
                    game_name: null != (n = I.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function L(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function Z(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!E.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== S.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? g.Z.getGuildId() : null,
                        u = "channel_id" in e ? e.channel_id : r ? _.Z.getChannelId(i) : null,
                        o = l.Z.getChannel(u),
                        a = L(o, i),
                        c = T({}, e, A(a), null != i && null != u && (0, m.AB)(u) ? w(0, u) : j(o));
                    E.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function R(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(O.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
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
                i()(O.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != y.Z.findActivity(t.userId, (function(t) {
                        return t.type === S.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const G = {
                trackWithMetadata: Z,
                getVoiceStateMetadata: R
            }
        },
        189651: (t, e, n) => {
            "use strict";
            n.d(e, {
                iD: () => S,
                Zm: () => m,
                mL: () => P,
                zS: () => N,
                og: () => A,
                aq: () => w
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
                h = n(861426),
                y = n(557177),
                v = n(2590),
                _ = n(897196);

            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function O(t, e, n) {
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
                        O(t, e, n[e])
                    }))
                }
                return t
            }

            function b(t, e) {
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

            function I(t) {
                return function(t) {
                    if (Array.isArray(t)) return g(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return g(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(t, e) {
                p.default.track(v.rMx.VIEW_AS_ROLES_SELECTED, b(E({
                    num_roles: Object.keys(e.roles).length
                }, (0, i.hH)(t)), {
                    is_viewing_as_member: e.type === y.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                });
                T(t)
            }

            function m(t, e) {
                var n = h.Z.getData(t);
                if (null != n && n.type === e.type) {
                    p.default.track(v.rMx.VIEW_AS_ROLES_SELECTED, b(E({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(t)), {
                        is_viewing_as_member: n.type === y.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: t,
                        data: E({}, n, e)
                    });
                    T(t)
                }
            }

            function P(t) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function T(t) {
                var e = f.Z.getChannelId(t),
                    n = o.Z.getChannel(e);
                if (!(null != e && (0, _.AB)(e)) && !s.Z.can(v.Plq.VIEW_CHANNEL, n)) {
                    var r = a.ZP.getDefaultChannel(t);
                    null != r && (0, u.uL)(v.Z5c.CHANNEL(t, r.id))
                }
            }

            function N(t, e, n) {
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

            function A(t, e) {
                var n = c.Z.getGuild(t);
                if (null != n) {
                    ! function(t, e) {
                        var n = I(a.ZP.getSelectableChannelIds(t)).concat(I(a.ZP.getVocalChannelIds(t))),
                            r = Array.from(e);
                        a.ZP.addConditionalChangeListener((function() {
                            var e = l.ZP.getSelfMember(t);
                            if (null == e) return !1;
                            if (r.some((function(t) {
                                    return !e.roles.includes(t)
                                }))) return !0;
                            var i = I(a.ZP.getSelectableChannelIds(t)).concat(I(a.ZP.getVocalChannelIds(t))).filter((function(t) {
                                return !n.includes(t)
                            }));
                            i.length > 0 && N(t, i, []);
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

            function w(t, e) {
                m(t, E({
                    type: y.z.NEW_MEMBER
                }, e))
            }
        },
        327930: (t, e, n) => {
            "use strict";
            n.d(e, {
                Jv: () => y,
                M0: () => v,
                Qj: () => _,
                Ao: () => g,
                YO: () => O,
                VO: () => E
            });
            var r = n(61209),
                i = n(567403),
                u = n(682776),
                o = n(968696),
                a = n(2590),
                l = n(897196),
                c = Array.from(l.Vg).map((function(t) {
                    return o.Z.escape(t)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                h = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                y = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                v = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function _(t) {
                if (null == t) return null;
                var e = t.match(f);
                if (null != e && e.length > 3) return {
                    guildId: e[1],
                    channelId: e[2],
                    messageId: e[3]
                };
                var n = t.match(d);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = t.match(s);
                if (null != r && r.length > 1) {
                    var i;
                    return {
                        guildId: r[1],
                        channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
                    }
                }
                var u = t.match(p);
                return null != u && u.length > 1 ? {
                    guildId: u[1]
                } : null
            }

            function g(t) {
                if (null == t) return null;
                var e = t.match(h);
                return null != e && e.length > 1 ? {
                    guildId: e[1],
                    guildEventId: e[2]
                } : null
            }

            function O(t) {
                return !!t.isPrivate() || u.Z.can(a.Plq.VIEW_CHANNEL, t)
            }

            function E(t) {
                var e = t.guildId,
                    n = t.channelId;
                if (null == i.Z.getGuild(e) && e !== a.ME) return !1;
                if (null == n) return !0;
                var u = r.Z.getChannel(n);
                return null != u && O(u)
            }
        },
        52317: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => R
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

            function h(t, e, n) {
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

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        h(t, e, n[e])
                    }))
                }
                return t
            }

            function _(t, e) {
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

            function g(t, e) {
                return !e || "object" !== E(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function O(t, e) {
                O = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return O(t, e)
            }
            var E = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function b(t) {
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
                    return g(this, n)
                }
            }
            var I = function(t, e) {
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
                S = {},
                m = new a.Z("UserGuildSettingsManager"),
                P = 0;

            function T() {
                S = v({}, l.Z.getCollapsedCategories())
            }

            function N() {
                if (!__OVERLAY__) {
                    clearTimeout(P);
                    P = setTimeout((function() {
                        return A()
                    }), 15e3)
                }
            }

            function A(t, e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = d((function(t, e) {
                    return I(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, C(null != e ? h({}, null != t ? t : s.ME, e) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function C(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = d((function(t) {
                    var e, n, r, o, a, f, d;
                    return I(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(P);
                                e = 0 !== Object.keys(t).length;
                                n = l.Z.getCollapsedCategories();
                                r = U();
                                for (var h in r)
                                    if (null != (o = c.Z.getChannel(h)) && null != o.guild_id) {
                                        o.guild_id in t || (t[o.guild_id] = {});
                                        null == t[o.guild_id].channel_overrides && (t[o.guild_id].channel_overrides = {});
                                        t[o.guild_id].channel_overrides[o.id] = _(v({}, t[o.guild_id].channel_overrides[o.id]), {
                                            collapsed: o.id in n
                                        });
                                        e = !0
                                    } if (!e) return [2];
                                S = v({}, n);
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
                                return [4, L(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                m.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && a.push(f);
                                return [4, L(5e3)];
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
                for (var n in e) e[n] !== S[n] && (t[n] = !0);
                for (var r in S) e[r] !== S[r] && (t[r] = !0);
                return t
            }

            function L(t) {
                return new Promise((function(e) {
                    return setTimeout(e, t + Math.ceil(t * Math.random()))
                }))
            }

            function Z() {
                S = v({}, l.Z.getCollapsedCategories())
            }
            const R = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && O(t, e)
                }(n, t);
                var e = b(n);

                function n() {
                    p(this, n);
                    var t;
                    (t = e.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: N,
                        CATEGORY_EXPAND: N,
                        CATEGORY_COLLAPSE_ALL: N,
                        CATEGORY_EXPAND_ALL: N,
                        POST_CONNECTION_OPEN: T,
                        USER_GUILD_SETTINGS_FULL_UPDATE: Z
                    };
                    t.saveUserGuildSettings = A;
                    t.saveUserGuildSettingsBulk = C;
                    return t
                }
                return n
            }(o.Z))
        },
        232806: (t, e, n) => {
            "use strict";
            n.d(e, {
                xV: () => u,
                dp: () => o,
                X7: () => a,
                E1: () => l,
                f7: () => c,
                HE: () => s,
                SJ: () => f
            });

            function r(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function i(t, e) {
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
            var u, o;
            ! function(t) {
                t[t.BACKGROUND = 0] = "BACKGROUND"
            }(u || (u = {}));
            ! function(t) {
                t[t.OPTION_1 = 0] = "OPTION_1";
                t[t.OPTION_2 = 1] = "OPTION_2";
                t[t.OPTION_3 = 2] = "OPTION_3";
                t[t.OPTION_4 = 3] = "OPTION_4";
                t[t.OPTION_7 = 7] = "OPTION_7";
                t[t.OPTION_8 = 8] = "OPTION_8";
                t[t.OPTION_9 = 9] = "OPTION_9";
                t[t.OPTION_10 = 10] = "OPTION_10"
            }(o || (o = {}));
            var a = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10],
                l = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10, o.OPTION_1, o.OPTION_2, o.OPTION_3, o.OPTION_4].reduce((function(t, e, n) {
                    return i(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            i.forEach((function(e) {
                                r(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, t), r({}, e, n))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        968968: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => I
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
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t) {
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
            var _ = {},
                g = 0;

            function O() {
                g += 1
            }

            function E(t) {
                if (null == _[t]) return !1;
                delete _[t]
            }
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = v(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(t) {
                    this.waitFor(o.Z, a.Z);
                    this.removeChangeListener(O);
                    this.addChangeListener(O);
                    _ = null != t ? t : {}
                };
                r.getState = function() {
                    return _
                };
                r.isCollapsed = function(t) {
                    return !(null == t || "null" === t || !_[t]) && _[t]
                };
                r.getCollapsedCategories = function() {
                    return _
                };
                ! function(t, e, n) {
                    e && f(t.prototype, e);
                    n && f(t, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return g
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "CategoryCollapseStore";
            b.persistKey = "collapsedCategories";
            const I = new b(i.Z, {
                CONNECTION_OPEN: function(t) {
                    t.userGuildSettings.partial || (_ = {});
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
                                        d.collapsed ? _[d.channel_id] = !0 : delete _[d.channel_id]
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
                    for (var r in _) {
                        var i = o.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete _[i.id]
                    }
                    var a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, f = e[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                            var d = s.value,
                                p = !0,
                                h = !1,
                                y = void 0;
                            try {
                                for (var v, g = d.channel_overrides[Symbol.iterator](); !(p = (v = g.next()).done); p = !0) {
                                    var O = v.value;
                                    O.collapsed && (_[O.channel_id] = !0)
                                }
                            } catch (t) {
                                h = !0;
                                y = t
                            } finally {
                                try {
                                    p || null == g.return || g.return()
                                } finally {
                                    if (h) throw y
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
                    if (_[e]) return !1;
                    _[e] = !0
                },
                CATEGORY_EXPAND: function(t) {
                    return E(t.id)
                },
                CATEGORY_COLLAPSE_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        "null" !== e.id && (_[e.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        delete _[e.id]
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
                Z: () => x
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

            function h(t, e) {
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

            function v(t) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return v(t)
            }

            function _(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function g(t, e) {
                g = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return g(t, e)
            }

            function O(t, e) {
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
                }(t, e) || I(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || I(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function I(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function S(t) {
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
                    var n, r = v(t);
                    if (e) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var m = Object.freeze([]),
                P = {},
                T = {},
                N = {},
                A = {},
                w = {};

            function C(t, e) {
                var n = P[t];
                return null != n ? n[e] : null
            }
            var j = function(t) {
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

            function L(t, e) {
                return function(t, e) {
                    return j(e) - j(t)
                }(t, e) || function(t, e) {
                    return U(e) - U(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function Z(t) {
                delete T[t];
                delete N[t];
                delete A[t];
                if (null != P[t]) {
                    var e = O(o().sortBy(P[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        T[t] = n.status;
                        N[t] = n.activities;
                        null != n.clientStatus && (A[t] = n.clientStatus)
                    } else o().every(P[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete P[t]
                }
            }

            function R(t) {
                var e = P[t];
                if (null != e) {
                    var n = o().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        T[t] = n.status;
                        N[t] = n.activities;
                        null != n.clientStatus && (A[t] = n.clientStatus)
                    }
                }
            }

            function D(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    u = t.clientStatus,
                    o = t.activities;
                if (n === s.default.getId()) return !1;
                var a = P[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = P[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: u,
                    activities: m,
                    timestamp: Date.now()
                };
                else {
                    var l = o.length > 1 ? E(o).sort(L) : o,
                        c = a[e];
                    o = null != c && i()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: u,
                        activities: o,
                        timestamp: Date.now()
                    }
                }
                delete w[n];
                Z(n);
                return !0
            }

            function G(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities,
                    o = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = P[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = P[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: m,
                        timestamp: Date.now()
                    };
                    else {
                        var l = u.length > 1 ? E(u).sort(L) : u;
                        a[e] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: o
                        }
                    }
                }
            }

            function k(t, e) {
                if (e === s.default.getId()) return !1;
                var n = P[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete P[e];
                Z(e)
            }

            function M(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, u = Object.keys(P)[Symbol.iterator](); !(e = (i = u.next()).done); e = !0) {
                        k(t, i.value)
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
                    e && g(t, e)
                }(n, t);
                var e = S(n);

                function n() {
                    h(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    T[s.default.getId()] = t;
                    N[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = T[t]) && void 0 !== i ? i : n
                    }
                    var u, o = C(t, e);
                    return null !== (u = null == o ? void 0 : o.status) && void 0 !== u ? u : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = N[t]) && void 0 !== n ? n : m
                    }
                    var r = C(t, e);
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
                        for (var u, o = Object.keys(N)[Symbol.iterator](); !(n = (u = o.next()).done); n = !0) {
                            var a = u.value,
                                l = N[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var h = d.value;
                                    h.application_id === t && e.push({
                                        userId: a,
                                        activity: h
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
                    return w[t]
                };
                r.getUserIds = function() {
                    return Object.keys(N)
                };
                r.isMobileOnline = function(t) {
                    var e = A[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: P,
                        statuses: T,
                        activities: N,
                        activityMetadata: w,
                        clientStatuses: A
                    }
                };
                return n
            }(a.ZP.Store);
            F.displayName = "PresenceStore";
            const x = new F(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    P = {};
                    w = {};
                    T = y({}, r, T[r]);
                    N = y({}, r, N[r]);
                    A = y({}, r, {});
                    var i = new Set,
                        u = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                o = e.clientStatus,
                                a = e.activities;
                            G({
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
                            G({
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
                    i.forEach(R)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    P = e.presencesForGuilds;
                    T = e.statuses;
                    N = e.activities;
                    w = e.activityMetadata
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
                    M(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return k(t.guildId, t.user.id)
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
                    M(d.ME);
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
                    w[e] = n;
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
                    if (T[e] === t.status && N[e] === t.activities) return !1;
                    T[e] = t.status;
                    N[e] = t.activities;
                    delete w[e]
                }
            })
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
        142520: (t, e, n) => {
            "use strict";
            n.d(e, {
                x: () => r
            });
            var r;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
        }
    }
]);