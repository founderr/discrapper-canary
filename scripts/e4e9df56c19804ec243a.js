(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [23993, 96043, 1459], {
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
                            this[o = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var o = this._front, i = 0; i < e; ++i) {
                        this[o + n & r - 1] = arguments[i];
                        o++
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
                            this[u = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = u
                        }
                        return e
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var u;
                        this[u = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = u
                    }
                    this._front = o;
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
                    o = this._length;
                r(this, 0, i, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + o <= n) r(i, e, this, 0, o);
                else {
                    var u = o - (e + o & n - 1);
                    r(i, e, this, 0, u);
                    r(i, 0, this, u, o - u)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = t[o + e]
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
                var o = !0,
                    u = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    u = "trailing" in n ? !!n.trailing : u
                }
                return r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: u
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
                o = n(575945),
                u = n(744564),
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
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
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
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: t
                    })
                },
                close: function() {
                    u.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(t, e, n) {
                    var r = (0, c.GA)(t);
                    a.Z.saveUserGuildSettings(t, e);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: t,
                        settings: e
                    });
                    (0, c.Wq)(t, e, r, n)
                },
                updateGuildAndChannelNotificationSettings: function(t, e, n) {
                    var r = Object.keys(e.channel_overrides),
                        i = (0, c.GA)(t),
                        o = (0, c.wK)(t, r);
                    a.Z.saveUserGuildSettings(t, e);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: t,
                        settings: e
                    });
                    (0, c.Wq)(t, e, i, n);
                    Object.keys(e.channel_overrides).forEach((function(r) {
                        var i = o.get(r);
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
                            o = n[1],
                            a = r.get(i);
                        u.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: o
                        });
                        (0,
                            c.Wq)(i, o, a, e)
                    }))
                },
                updateChannelOverrideSettings: function(t, e, n, r) {
                    var i = (0, c.I)(t, e),
                        l = {
                            channel_overrides: p({}, e, n)
                        };
                    a.Z.saveUserGuildSettings(t, l);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: t,
                        channelId: e,
                        settings: n
                    });
                    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(t, e, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(t, e, n) {
                    var r = Object.keys(e),
                        i = {
                            channel_overrides: e
                        },
                        o = (0, c.wK)(t, r);
                    a.Z.saveUserGuildSettings(t, i);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: t,
                        overrides: e
                    });
                    Object.keys(e).forEach((function(r) {
                        return (0, c.jz)(t, r, e[r], o.get(r), n)
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
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: t,
                        updatedSettings: p({}, e, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(t, e, n, r) {
                    u.Z.dispatch({
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
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, t, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(t, e, n) {
                    u.Z.dispatch({
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
                    u.Z.dispatch({
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

            function i(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function o(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = t.apply(e, n);

                        function a(t) {
                            i(u, r, o, a, l, "next", t)
                        }

                        function l(t) {
                            i(u, r, o, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function a(t, e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(t, e) {
                    var i, o, a, l;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(27764), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(6252)]).then(n.bind(n, 624501))];
                            case 1:
                                i = u.sent(), o = i.default;
                                if (null != (a = o(t, {
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
                JS: () => w,
                hH: () => A,
                AB: () => U,
                ZP: () => R,
                oG: () => Z,
                kO: () => G,
                yw: () => D
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(52467),
                h = n(682776),
                y = n(491260),
                _ = n(563367),
                v = n(715107),
                g = n(464187),
                O = n(407561),
                b = n(652591),
                E = n(563135),
                S = n(671723);
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

            function P(t) {
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
                    o = c.ZP.getChannels(t),
                    u = o[c.sH].length,
                    l = o[c.Zb].length,
                    p = O.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: N(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(e)) && void 0 !== n ? n : E.ZP.NONE),
                    guild_is_vip: e.hasFeature(I.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(p)
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
                        return null != e && o.Z.has(e.deny, I.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(t.type) && null != t.parent_id ? i(l.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = h.Z.getChannelPermissions(t)) && void 0 !== e ? e : E.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = _.Z.getMediaSessionId();
                return P({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, G(e.getGuildId(), e.id, r), {
                    game_name: null != (n = S.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function L(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function D(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!b.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== I.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? g.Z.getGuildId() : null,
                        o = "channel_id" in e ? e.channel_id : r ? v.Z.getChannelId(i) : null,
                        u = l.Z.getChannel(o),
                        a = L(u, i),
                        c = P({}, e, A(a), null != i && null != o && (0, m.AB)(o) ? C(0, o) : j(u));
                    b.default.track(t, c, {
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

            function Z(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(O.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != y.Z.findActivity(t.userId, (function(t) {
                        return t.type === I.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const R = {
                trackWithMetadata: D,
                getVoiceStateMetadata: G
            }
        },
        189651: (t, e, n) => {
            "use strict";
            n.d(e, {
                iD: () => I,
                Zm: () => m,
                mL: () => T,
                zS: () => N,
                og: () => A,
                aq: () => C
            });
            var r = n(744564),
                i = n(396043),
                o = n(784426),
                u = n(61209),
                a = n(5544),
                l = n(21372),
                c = n(567403),
                s = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                h = n(861426),
                y = n(557177),
                _ = n(2590),
                v = n(897196);

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

            function b(t) {
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

            function E(t, e) {
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

            function I(t, e) {
                p.default.track(_.rMx.VIEW_AS_ROLES_SELECTED, E(b({
                    num_roles: Object.keys(e.roles).length
                }, (0, i.hH)(t)), {
                    is_viewing_as_member: e.type === y.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                });
                P(t)
            }

            function m(t, e) {
                var n = h.Z.getData(t);
                if (null != n && n.type === e.type) {
                    p.default.track(_.rMx.VIEW_AS_ROLES_SELECTED, E(b({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(t)), {
                        is_viewing_as_member: n.type === y.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: t,
                        data: b({}, n, e)
                    });
                    P(t)
                }
            }

            function T(t) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function P(t) {
                var e = f.Z.getChannelId(t),
                    n = u.Z.getChannel(e);
                if (!(null != e && (0, v.AB)(e)) && !s.Z.can(_.Plq.VIEW_CHANNEL, n)) {
                    var r = a.ZP.getDefaultChannel(t);
                    null != r && (0, o.uL)(_.Z5c.CHANNEL(t, r.id))
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

            function C(t, e) {
                m(t, b({
                    type: y.z.NEW_MEMBER
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
                o = n(281110),
                u = n(914716),
                a = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function f(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
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
                        var o = t.apply(e, n);

                        function u(t) {
                            f(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            f(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
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

            function _(t) {
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

            function v(t, e) {
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
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
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
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function E(t) {
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
            var S = function(t, e) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                I = {},
                m = new a.Z("UserGuildSettingsManager"),
                T = 0;

            function P() {
                I = _({}, l.Z.getCollapsedCategories())
            }

            function N() {
                if (!__OVERLAY__) {
                    clearTimeout(T);
                    T = setTimeout((function() {
                        return A()
                    }), 15e3)
                }
            }

            function A(t, e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = d((function(t, e) {
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w(null != e ? h({}, null != t ? t : s.ME, e) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = d((function(t) {
                    var e, n, r, u, a, f, d;
                    return S(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(T);
                                e = 0 !== Object.keys(t).length;
                                n = l.Z.getCollapsedCategories();
                                r = U();
                                for (var h in r)
                                    if (null != (u = c.Z.getChannel(h)) && null != u.guild_id) {
                                        u.guild_id in t || (t[u.guild_id] = {});
                                        null == t[u.guild_id].channel_overrides && (t[u.guild_id].channel_overrides = {});
                                        t[u.guild_id].channel_overrides[u.id] = v(_({}, t[u.guild_id].channel_overrides[u.id]), {
                                            collapsed: u.id in n
                                        });
                                        e = !0
                                    } if (!e) return [2];
                                I = _({}, n);
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
                                return [4, o.ZP.patch({
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
                for (var n in e) e[n] !== I[n] && (t[n] = !0);
                for (var r in I) e[r] !== I[r] && (t[r] = !0);
                return t
            }

            function L(t) {
                return new Promise((function(e) {
                    return setTimeout(e, t + Math.ceil(t * Math.random()))
                }))
            }

            function D() {
                I = _({}, l.Z.getCollapsedCategories())
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
                    e && O(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    p(this, n);
                    var t;
                    (t = e.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: N,
                        CATEGORY_EXPAND: N,
                        CATEGORY_COLLAPSE_ALL: N,
                        CATEGORY_EXPAND_ALL: N,
                        POST_CONNECTION_OPEN: P,
                        USER_GUILD_SETTINGS_FULL_UPDATE: D
                    };
                    t.saveUserGuildSettings = A;
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
            }(u.Z))
        },
        232806: (t, e, n) => {
            "use strict";
            n.d(e, {
                xV: () => o,
                dp: () => u,
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
            var o, u;
            ! function(t) {
                t[t.BACKGROUND = 0] = "BACKGROUND"
            }(o || (o = {}));
            ! function(t) {
                t[t.OPTION_1 = 0] = "OPTION_1";
                t[t.OPTION_2 = 1] = "OPTION_2";
                t[t.OPTION_3 = 2] = "OPTION_3";
                t[t.OPTION_4 = 3] = "OPTION_4";
                t[t.OPTION_7 = 7] = "OPTION_7";
                t[t.OPTION_8 = 8] = "OPTION_8";
                t[t.OPTION_9 = 9] = "OPTION_9";
                t[t.OPTION_10 = 10] = "OPTION_10"
            }(u || (u = {}));
            var a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                l = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(t, e, n) {
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
                Z: () => S
            });
            var r = n(202351),
                i = n(744564),
                o = n(72580),
                u = n(61209),
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

            function _(t) {
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
            var v = {},
                g = 0;

            function O() {
                g += 1
            }

            function b(t) {
                if (null == v[t]) return !1;
                delete v[t]
            }
            var E = function(t) {
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
                var e = _(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(t) {
                    this.waitFor(u.Z, a.Z);
                    this.removeChangeListener(O);
                    this.addChangeListener(O);
                    v = null != t ? t : {}
                };
                r.getState = function() {
                    return v
                };
                r.isCollapsed = function(t) {
                    return !(null == t || "null" === t || !v[t]) && v[t]
                };
                r.getCollapsedCategories = function() {
                    return v
                };
                r.__getLocalVars = function() {
                    return {
                        collapsedCategories: v,
                        version: g
                    }
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
            E.displayName = "CategoryCollapseStore";
            E.persistKey = "collapsedCategories";
            const S = new E(i.Z, {
                CONNECTION_OPEN: function(t) {
                    t.userGuildSettings.partial || (v = {});
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = t.userGuildSettings.entries[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                            var u = i.value;
                            if (null != u.channel_overrides) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = u.channel_overrides[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                                        var d = s.value;
                                        d.collapsed ? v[d.channel_id] = !0 : delete v[d.channel_id]
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
                            e || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(t) {
                    var e = t.userGuildSettings,
                        n = new Set(e.map((function(t) {
                            return t.guild_id
                        })).filter(o.lm));
                    for (var r in v) {
                        var i = u.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete v[i.id]
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
                                for (var _, g = d.channel_overrides[Symbol.iterator](); !(p = (_ = g.next()).done); p = !0) {
                                    var O = _.value;
                                    O.collapsed && (v[O.channel_id] = !0)
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
                    if (v[e]) return !1;
                    v[e] = !0
                },
                CATEGORY_EXPAND: function(t) {
                    return b(t.id)
                },
                CATEGORY_COLLAPSE_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        "null" !== e.id && (v[e.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(t) {
                    var e = t.guildId;
                    l.ZP.getChannels(e)[c.d4z.GUILD_CATEGORY].forEach((function(t) {
                        var e = t.channel;
                        delete v[e.id]
                    }))
                },
                CHANNEL_DELETE: function(t) {
                    return b(t.channel.id)
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
                o = n(496486),
                u = n.n(o),
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

            function _(t) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return _(t)
            }

            function v(t, e) {
                return !e || "object" !== E(e) && "function" != typeof e ? function(t) {
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
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || S(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || S(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(t) {
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
                    var n, r = _(t);
                    if (e) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var m = Object.freeze([]),
                T = {},
                P = {},
                N = {},
                A = {},
                C = {};

            function w(t, e) {
                var n = T[t];
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

            function D(t) {
                delete P[t];
                delete N[t];
                delete A[t];
                if (null != T[t]) {
                    var e = O(u().sortBy(T[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        P[t] = n.status;
                        N[t] = n.activities;
                        null != n.clientStatus && (A[t] = n.clientStatus)
                    } else u().every(T[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete T[t]
                }
            }

            function G(t) {
                var e = T[t];
                if (null != e) {
                    var n = u().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        P[t] = n.status;
                        N[t] = n.activities;
                        null != n.clientStatus && (A[t] = n.clientStatus)
                    }
                }
            }

            function Z(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    u = t.activities;
                if (n === s.default.getId()) return !1;
                var a = T[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = T[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: o,
                    activities: m,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? b(u).sort(L) : u,
                        c = a[e];
                    u = null != c && i()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                D(n);
                return !0
            }

            function R(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    o = t.activities,
                    u = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = T[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = T[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: m,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? b(o).sort(L) : o;
                        a[e] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function k(t, e) {
                if (e === s.default.getId()) return !1;
                var n = T[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete T[e];
                D(e)
            }

            function M(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(T)[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        k(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == o.return || o.return()
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
                var e = I(n);

                function n() {
                    h(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    P[s.default.getId()] = t;
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
                        return null !== (i = P[t]) && void 0 !== i ? i : n
                    }
                    var o, u = w(t, e);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = N[t]) && void 0 !== n ? n : m
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
                        for (var o, u = Object.keys(N)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
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
                            n || null == u.return || u.return()
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
                    return Object.keys(N)
                };
                r.isMobileOnline = function(t) {
                    var e = A[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: T,
                        statuses: P,
                        activities: N,
                        activityMetadata: C,
                        clientStatuses: A
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: m,
                        presencesForGuilds: T,
                        statuses: P,
                        activities: N,
                        clientStatuses: A,
                        activityMetadata: C,
                        typeScore: j,
                        richnessScore: U
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
                    T = {};
                    C = {};
                    P = y({}, r, P[r]);
                    N = y({}, r, N[r]);
                    A = y({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                u = e.clientStatus,
                                a = e.activities;
                            R({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            u = t.activities;
                        if (null != e) {
                            R({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
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
                    P = e.statuses;
                    N = e.activities;
                    C = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        Z({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
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
                            o = t.activities;
                        return Z({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
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
                    if (P[e] === t.status && N[e] === t.activities) return !1;
                    P[e] = t.status;
                    N[e] = t.activities;
                    delete C[e]
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