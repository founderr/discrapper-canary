(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31370, 23993, 51775, 88110, 96043, 1459, 71402], {
        737264: e => {
            "use strict";
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    i = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    i = t
                }
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var a = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var u, l = []; t.length;) {
                        var s = t.shift();
                        if (1 === s.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: l
                                });
                                u = s;
                                l = []
                            } else u = s;
                        else l.push(s)
                    }
                    a.push({
                        singleton: u,
                        extension: l
                    })
                }
                var c = [];
                if (n[7]) {
                    (c = n[7].split("-")).shift();
                    c.shift()
                }
                var f = [];
                n[8] && (f = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        667237: e => {
            "use strict";

            function t(e) {
                this._capacity = i(e);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(e)) {
                    for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var e = this._length, t = new Array(e), n = this._front, r = this._capacity, i = 0; i < e; ++i) t[i] = this[n + i & r - 1];
                return t
            };
            t.prototype.push = function(e) {
                var t = arguments.length,
                    n = this._length;
                if (t > 1) {
                    var r = this._capacity;
                    if (n + t > r) {
                        for (var i = 0; i < t; ++i) {
                            this._checkCapacity(n + 1);
                            this[o = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var o = this._front, i = 0; i < t; ++i) {
                        this[o + n & r - 1] = arguments[i];
                        o++
                    }
                    this._length = n + t;
                    return n + t
                }
                if (0 === t) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = e;
                this._length = n + 1;
                return n + 1
            };
            t.prototype.pop = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front + e - 1 & this._capacity - 1,
                        n = this[t];
                    this[t] = void 0;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.shift = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front,
                        n = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.unshift = function(e) {
                var t = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (t + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(t + 1);
                            var i = this._capacity;
                            this[a = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            t++;
                            this._length = t;
                            this._front = a
                        }
                        return t
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var a;
                        this[a = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = a
                    }
                    this._front = o;
                    this._length = t + n;
                    return t + n
                }
                if (0 === n) return t;
                this._checkCapacity(t + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = e;
                this._length = t + 1;
                this._front = r;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var e = this._length;
                if (0 !== e) {
                    return this[this._front + e - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(e) {
                var t = e;
                if (t === (0 | t)) {
                    var n = this._length;
                    t < 0 && (t += n);
                    if (!(t < 0 || t >= n)) return this[this._front + t & this._capacity - 1]
                }
            };
            t.prototype.isEmpty = function() {
                return 0 === this._length
            };
            t.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            t.prototype.toString = function() {
                return this.toArray().toString()
            };
            t.prototype.valueOf = t.prototype.toString;
            t.prototype.removeFront = t.prototype.shift;
            t.prototype.removeBack = t.prototype.pop;
            t.prototype.insertFront = t.prototype.unshift;
            t.prototype.insertBack = t.prototype.push;
            t.prototype.enqueue = t.prototype.push;
            t.prototype.dequeue = t.prototype.shift;
            t.prototype.toJSON = t.prototype.toArray;
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            t.prototype._makeCapacity = function() {
                for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(e) {
                var t = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    o = this._length;
                r(this, 0, i, 0, n);
                this._capacity = e;
                this._makeCapacity();
                this._front = 0;
                if (t + o <= n) r(i, t, this, 0, o);
                else {
                    var a = o - (t + o & n - 1);
                    r(i, t, this, 0, a);
                    r(i, 0, this, a, o - a)
                }
            };
            var n = Array.isArray;

            function r(e, t, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = e[o + t]
            }

            function i(e) {
                if ("number" != typeof e) {
                    if (!n(e)) return 16;
                    e = e.length
                }
                return function(e) {
                    e >>>= 0;
                    e -= 1;
                    e |= e >> 1;
                    e |= e >> 2;
                    e |= e >> 4;
                    e |= e >> 8;
                    return 1 + (e |= e >> 16)
                }(Math.min(Math.max(16, e), 1073741824))
            }
            e.exports = t
        },
        753074: e => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, i, o) {
                if ("string" != typeof i) {
                    var a = Object.getOwnPropertyNames(i);
                    r && (a = a.concat(Object.getOwnPropertySymbols(i)));
                    for (var u = 0; u < a.length; ++u)
                        if (!(t[a[u]] || n[a[u]] || o && o[a[u]])) try {
                            e[a[u]] = i[a[u]]
                        } catch (e) {}
                }
                return e
            }
        },
        823493: (e, t, n) => {
            var r = n(23279),
                i = n(513218);
            e.exports = function(e, t, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    a = "trailing" in n ? !!n.trailing : a
                }
                return r(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: a
                })
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => p
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                a = n(73105),
                u = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function d(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var l, f, d = 0,
                        p = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        p = e.pageY
                    }
                    if (0 === d && 0 === p) {
                        var E, O = null === (E = e.target) || void 0 === E ? void 0 : E.getBoundingClientRect(),
                            _ = null != O ? O : {},
                            S = _.left,
                            h = void 0 === S ? 0 : S,
                            y = _.top,
                            g = void 0 === y ? 0 : y,
                            I = _.width,
                            v = void 0 === I ? 0 : I,
                            b = _.height;
                        d = h + v / 2;
                        p = g + (void 0 === b ? 0 : b) / 2
                    }
                    var T = {
                        render: t,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: s({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var R = (0, a.RD)((function() {
                        R();
                        c(T)
                    }));
                    else {
                        e.preventDefault();
                        c(T)
                    }
                }
            }

            function p(e, t, n) {
                d(e, void 0, n, t)
            }
        },
        985462: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(571657),
                i = n(165695),
                o = n(744564),
                a = n(10390),
                u = n(9430),
                l = n(391438),
                s = n(201459),
                c = n(2590),
                f = n(131559);
            const d = {
                createChannel: function(e) {
                    var t = e.guildId,
                        n = e.type,
                        d = e.name,
                        p = e.permissionOverwrites,
                        E = void 0 === p ? [] : p,
                        O = e.bitrate,
                        _ = e.userLimit,
                        S = e.parentId,
                        h = e.skuId,
                        y = e.branchId;
                    o.Z.dispatch({
                        type: "CREATE_CHANNEL_MODAL_SUBMIT"
                    });
                    var g = {
                        type: n,
                        name: d,
                        permission_overwrites: E
                    };
                    null != O && O !== c.epw && (g.bitrate = O);
                    null != _ && _ > 0 && (g.user_limit = _);
                    null != S && (g.parent_id = S);
                    if (n === c.d4z.GUILD_STORE) {
                        if (null == h) throw new Error("Unexpected missing SKU");
                        g.sku_id = h;
                        g.branch_id = y
                    }
                    return l.Z.post({
                        url: c.ANM.GUILD_CHANNELS(t),
                        body: g,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.CHANNEL_CREATE,
                            properties: function(e) {
                                var t, n;
                                return (0, i.iG)({
                                    is_private: E.length > 0,
                                    channel_id: null == e || null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e || null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    }).then((function(e) {
                        u.Z.isOptInEnabled(t) && s.Z.updateChannelOverrideSettings(t, e.body.id, {
                            flags: f.ic.OPT_IN_ENABLED
                        });
                        a.Z.checkGuildTemplateDirty(t);
                        return e
                    }), (function(e) {
                        o.Z.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        throw e
                    }))
                },
                createRoleSubscriptionTemplateChannel: function(e, t, n, o) {
                    return l.Z.post({
                        url: c.ANM.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: o
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.CHANNEL_CREATE,
                            properties: function(e) {
                                var t, n;
                                return (0, i.iG)({
                                    is_private: !0,
                                    channel_id: null == e || null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e || null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => a
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        201459: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(730381),
                i = n.n(r),
                o = n(575945),
                a = n(744564),
                u = n(52317),
                l = n(9430),
                s = n(171940),
                c = n(131559),
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
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const O = {
                open: function(e) {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: e
                    })
                },
                close: function() {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(e, t, n) {
                    var r = (0, s.GA)(e);
                    u.Z.saveUserGuildSettings(e, t);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, s.Wq)(e, t, r, n)
                },
                updateGuildAndChannelNotificationSettings: function(e, t, n) {
                    var r = Object.keys(t.channel_overrides),
                        i = (0, s.GA)(e),
                        o = (0, s.wK)(e, r);
                    u.Z.saveUserGuildSettings(e, t);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, s.Wq)(e, t, i, n);
                    Object.keys(t.channel_overrides).forEach((function(r) {
                        var i = o.get(r);
                        (0, s.jz)(e, r, t.channel_overrides[r], i, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(e, t) {
                    var n = Object.keys(e),
                        r = (0, s.rU)(n);
                    u.Z.saveUserGuildSettingsBulk(e);
                    Object.entries(e).forEach((function(e) {
                        var n = E(e, 2),
                            i = n[0],
                            o = n[1],
                            u = r.get(i);
                        a.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: o
                        });
                        (0, s.Wq)(i, o, u, t)
                    }))
                },
                updateChannelOverrideSettings: function(e, t, n, r) {
                    var i = (0, s.I)(e, t),
                        l = {
                            channel_overrides: p({}, t, n)
                        };
                    u.Z.saveUserGuildSettings(e, l);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: e,
                        channelId: t,
                        settings: n
                    });
                    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, s.jz)(e, t, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(e, t, n) {
                    var r = Object.keys(t),
                        i = {
                            channel_overrides: t
                        },
                        o = (0, s.wK)(e, r);
                    u.Z.saveUserGuildSettings(e, i);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: t
                    });
                    Object.keys(t).forEach((function(r) {
                        return (0, s.jz)(e, r, t[r], o.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(e, t) {
                    var n = t ? c.ic.NEW_FORUM_THREADS_ON : c.ic.NEW_FORUM_THREADS_OFF,
                        r = t ? c.ic.NEW_FORUM_THREADS_OFF : c.ic.NEW_FORUM_THREADS_ON,
                        i = l.Z.getChannelFlags(e) & ~r | n;
                    this.updateChannelOverrideSettings(e.guild_id, e.id, {
                        flags: i
                    })
                },
                handleCheckboxChange: function(e, t, n, r) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(e, t, n, r) {
                    a.Z.dispatch({
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
                        end_time: t > 0 ? i()().add(t, "second").toISOString() : null
                    };
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, e, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(e, t, n) {
                    a.Z.dispatch({
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
                    a.Z.dispatch({
                        type: "GUILD_SET_NOTIFICATION_PROFILE",
                        guildId: t.id,
                        profile: e.value,
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                }
            }
        },
        496916: (e, t, n) => {
            "use strict";
            n.d(t, {
                In: () => p,
                U6: () => E,
                y5: () => O,
                iV: () => _,
                CZ: () => S,
                jT: () => h,
                Ju: () => y,
                FT: () => g
            });
            var r = n(842227),
                i = n(744564),
                o = n(18882),
                a = n(382060),
                u = n(61209),
                l = n(877475),
                s = n(473903),
                c = n(2590);

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
                    o = arguments.length > 4 ? arguments[4] : void 0;
                i.Z.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: r,
                    immediate: t,
                    force: n,
                    context: c.e3s,
                    location: o
                })
            }

            function E(e) {
                e.isCategory() ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = u.Z.getChannel(e);
                    if (null != r && null != r.guild_id) {
                        var i = l.Z.getCategories(r.guild_id);
                        if (null != i[e]) {
                            var s = i[e].filter((function(e) {
                                    var t = e.channel;
                                    return (0, a.vc)(t.type)
                                })).map((function(e) {
                                    return e.channel.id
                                })),
                                c = d(s);
                            s.forEach((function(e) {
                                var t = o.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
                                for (var n in t) c.push(n)
                            }));
                            var f = !0,
                                E = !1,
                                O = void 0;
                            try {
                                for (var _, S = c[Symbol.iterator](); !(f = (_ = S.next()).done); f = !0) {
                                    p(_.value, t, n)
                                }
                            } catch (e) {
                                E = !0;
                                O = e
                            } finally {
                                try {
                                    f || null == S.return || S.return()
                                } finally {
                                    if (E) throw O
                                }
                            }
                        }
                    }
                }(e.id, !0, !0) : e.isForumLikeChannel() ? p(e.id, !0, !0, r.default.fromTimestamp(Date.now())) : p(e.id, !0, !0)
            }

            function O(e) {
                i.Z.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: c.e3s
                })
            }

            function _(e) {
                i.Z.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function S(e, t) {
                i.Z.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function h(e, t) {
                i.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function y(e, t, n) {
                i.Z.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function g(e, t) {
                var n;
                null != (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && i.Z.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        315804: (e, t, n) => {
            "use strict";
            n.d(t, {
                jU: () => b,
                Kr: () => R,
                x2: () => m,
                Qe: () => N,
                ZZ: () => D,
                xA: () => L,
                pB: () => U,
                WD: () => Z,
                x9: () => G
            });
            var r = n(281110),
                i = n(744564),
                o = n(347365),
                a = n(414094),
                u = n(973889),
                l = n(560213),
                s = n(746974),
                c = n(325213),
                f = n(264628),
                d = n(72580),
                p = n(446139),
                E = n(534681),
                O = n(673679),
                _ = n(2590);

            function S(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            S(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            S(o, r, i, a, u, "throw", e)
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

            function g(e) {
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

            function I(e, t) {
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

            function b(e, t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = h((function(e, t) {
                    var n, r;
                    return v(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (null != s.Z.get(t)) return [2];
                                i.Z.dispatch({
                                    type: "SKU_FETCH_START",
                                    skuId: t
                                });
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                n = c.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e);
                                return [4, (0, E.Kb)(n ? _.ANM.STORE_SKU(t) : _.ANM.STORE_PUBLISHED_LISTINGS_SKU(t))];
                            case 2:
                                r = o.sent();
                                i.Z.dispatch({
                                    type: "SKU_FETCH_SUCCESS",
                                    sku: n ? r.body : r.body.sku
                                });
                                return [3, 4];
                            case 3:
                                o.sent();
                                i.Z.dispatch({
                                    type: "SKU_FETCH_FAIL",
                                    skuId: t
                                });
                                throw new u.Z("Failed to fetch SKU ".concat(t));
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                return A.apply(this, arguments)
            }

            function A() {
                A = h((function(e) {
                    var t, n, r, o = arguments;
                    return v(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = !(o.length > 1 && void 0 !== o[1]) || o[1];
                                if (!(c.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e)) && t) throw new Error("this should only be used in test mode");
                                return [4, (0, E.Kb)(_.ANM.APPLICATION_SKUS(e))];
                            case 1:
                                n = a.sent();
                                r = n.body;
                                i.Z.dispatch({
                                    type: "SKUS_FETCH_SUCCESS",
                                    skus: r,
                                    applicationId: e
                                });
                                return [2, r]
                        }
                    }))
                }));
                return A.apply(this, arguments)
            }

            function m(e, t, n) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = h((function(e, t, n) {
                    var r, o;
                    return v(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                r = {
                                    payment_source_id: n
                                };
                                (c.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e)) && (r.test_mode = !0);
                                return [4, (0, E.Kb)({
                                    url: _.ANM.STORE_SKU_PURCHASE(t),
                                    query: r,
                                    oldFormErrors: !0
                                })];
                            case 1:
                                o = a.sent();
                                i.Z.dispatch({
                                    type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                                    skuId: t,
                                    paymentSourceId: n,
                                    price: o.body
                                });
                                return [2, o]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(e, t, n) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = h((function(e, t, n) {
                    var a, u, l;
                    return v(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SKU_PURCHASE_START",
                                    applicationId: e,
                                    skuId: n
                                });
                                s.label = 1;
                            case 1:
                                s.trys.push([1, 3, , 4]);
                                return [4, r.ZP.post({
                                    url: _.ANM.CHANNEL_ENTITLEMENT_GRANT(t),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                a = s.sent();
                                i.Z.dispatch({
                                    type: "SKU_PURCHASE_SUCCESS",
                                    skuId: n,
                                    entitlements: a.body,
                                    libraryApplications: []
                                });
                                return [2, a.body];
                            case 3:
                                u = s.sent();
                                l = new o.HF(u);
                                i.Z.dispatch({
                                    type: "SKU_PURCHASE_FAIL",
                                    applicationId: e,
                                    skuId: n,
                                    error: l
                                });
                                throw l;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var M = {
                isGift: !1
            };

            function D(e, t, n) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = h((function(e, t, n) {
                    var u, s, E, S, h, y, b, T, R, A, m, P, N, C, D, w, L, j;
                    return v(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                u = g({}, M, n), s = u.paymentSource, E = u.expectedAmount, S = u.expectedCurrency, h = u.analyticsLoadId, y = u.isGift, b = u.giftStyle, T = u.subscriptionPlanId, R = u.loadId, A = u.recipientId, m = u.customMessage;
                                i.Z.wait((function() {
                                    i.Z.dispatch({
                                        type: "SKU_PURCHASE_START",
                                        applicationId: e,
                                        skuId: t
                                    })
                                }));
                                P = c.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e);
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 9, , 10]);
                                C = {
                                    gift: y,
                                    sku_subscription_plan_id: T
                                };
                                return [4, (0, f.cn)(s)];
                            case 2:
                                N = (C.gateway_checkout_context = v.sent(), C.load_id = R, C);
                                if (!P) return [3, 3];
                                N.test_mode = !0;
                                return [3, 7];
                            case 3:
                                if (null == s) return [3, 6];
                                N.payment_source_id = s.id;
                                return [4, (0, O.Zv)(s)];
                            case 4:
                                N.payment_source_token = v.sent();
                                return _.QL.has(s.type) ? [4, (0, O.EH)(s.type)] : [3, 6];
                            case 5:
                                D = v.sent();
                                N.return_url = r.ZP.getAPIBaseURL() + _.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(s.type, null != D ? D : "", "success");
                                v.label = 6;
                            case 6:
                                null != E && (N.expected_amount = E);
                                null != S && (N.expected_currency = S);
                                null != b && (N.gift_style = b);
                                null != A && (N.recipient_id = A);
                                null != A && (N.custom_message = m);
                                N.purchase_token = (0, p.d)();
                                v.label = 7;
                            case 7:
                                return [4, r.ZP.post({
                                    url: _.ANM.STORE_SKU_PURCHASE(t),
                                    body: N,
                                    context: {
                                        load_id: h
                                    },
                                    oldFormErrors: !0
                                })];
                            case 8:
                                w = v.sent();
                                i.Z.dispatch({
                                    type: "SKU_PURCHASE_SUCCESS",
                                    skuId: t,
                                    libraryApplications: null != w.body.library_applications ? w.body.library_applications.filter(d.lm) : [],
                                    entitlements: w.body.entitlements,
                                    giftCode: w.body.gift_code
                                });
                                return [2, I(g({}, w.body), {
                                    redirectConfirmation: !1
                                })];
                            case 9:
                                L = v.sent();
                                (j = L instanceof o.HF ? L : new o.HF(L)).code !== a.SM.CONFIRMATION_REQUIRED && j.code !== a.SM.AUTHENTICATION_REQUIRED || i.Z.dispatch({
                                    type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                                    skuId: t,
                                    isGift: y
                                });
                                if (j.code !== a.SM.CONFIRMATION_REQUIRED) {
                                    i.Z.dispatch({
                                        type: "SKU_PURCHASE_FAIL",
                                        applicationId: e,
                                        skuId: t,
                                        error: j
                                    });
                                    throw j
                                }
                                if (!L.body.payment_id) throw (0, O.SQ)("payment id cannot be null on redirected confirmations.");
                                return [2, (0, O.sk)(L.body, s)];
                            case 10:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function L() {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = h((function() {
                    var e, t;
                    return v(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                e = {
                                    purchase_token: (0, p.d)()
                                };
                                return [4, r.ZP.post({
                                    url: _.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                                    body: e,
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, g({}, n.sent().body)];
                            case 2:
                                throw (t = n.sent()) instanceof o.HF ? t : new o.HF(t);
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function U() {
                i.Z.dispatch({
                    type: "SKU_PURCHASE_CLEAR_ERROR"
                })
            }

            function Z() {
                i.Z.wait((function() {
                    return i.Z.dispatch({
                        type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
                    })
                }))
            }

            function G(e) {
                i.Z.dispatch({
                    type: "SKU_PURCHASE_UPDATE_IS_GIFT",
                    isGift: e
                })
            }
        },
        396179: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(281110),
                i = n(630631),
                o = n(744564),
                a = n(735885),
                u = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                o.Z.dispatch(s({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, n));
                (0, a.jN)(u.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                d = n(652591),
                p = n(775173),
                E = n(488110),
                O = n(239620),
                _ = n(473708);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
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

            function y(e, t) {
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
            const g = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    c(e, t, n)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    o.Z.dispatch(h({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = f.Z.onClose;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    o.Z.dispatch(h({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var n = this;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var a = e.username,
                        l = e.email,
                        s = e.emailToken,
                        c = e.password,
                        f = e.avatar,
                        S = e.newPassword,
                        g = e.discriminator,
                        I = t.close;
                    return (0, E.Z)((function(e) {
                        var t = y(h({
                                username: a,
                                email: l,
                                email_token: s,
                                password: c,
                                avatar: f,
                                new_password: S
                            }, e), {
                                discriminator: null != g && "" !== g ? g : void 0
                            }),
                            n = i.Z.get(u.JkL),
                            o = (0, O.xJ)();
                        if (null != o && null != n) {
                            t.push_provider = o;
                            t.push_token = n
                        }
                        var d = i.Z.get(u.scU);
                        if (null != O.mv && null != d) {
                            t.push_voip_provider = O.mv;
                            t.push_voip_token = d
                        }
                        return r.ZP.patch({
                            url: u.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: _.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return o.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        d.default.track(u.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, p.xR)(t.avatar)
                        });
                        delete t.token;
                        o.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        o.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != S && o.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: S
                        });
                        null != c && null != S && o.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        I ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        o.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        650332: (e, t, n) => {
            "use strict";
            n.d(t, {
                Fj: () => T,
                BK: () => A,
                ZP: () => P
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(304548),
                l = n(124251),
                s = n(189865),
                c = n(926054),
                f = n(463473),
                d = n(2590),
                p = n(473708),
                E = n(544064),
                O = n.n(E);

            function _(e, t) {
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e) {
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
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }
            var v = function(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var T, R = Object.freeze({
                SMALL: O().small,
                MEDIUM: O().medium,
                LARGE: O().large
            });
            ! function(e) {
                e.MEMBER = "MEMBER";
                e.ROLE = "ROLE";
                e.CHANNEL = "CHANNEL";
                e.GUILD = "GUILD";
                e.USER = "USER"
            }(T || (T = {}));
            var A = function(e) {
                    var t, n, i = e.hasContent,
                        o = e.onClear,
                        l = e.className,
                        d = e.themeOverride,
                        E = e.size,
                        _ = void 0 === E ? R.SMALL : E;
                    return (0, r.jsx)(u.Clickable, {
                        className: a()(l, O().iconLayout, _, (0, f.Q)(d), S({}, O().clear, i)),
                        onClick: function(e) {
                            e.stopPropagation();
                            null != o && o(e)
                        },
                        onMouseDown: function(e) {
                            e.preventDefault();
                            e.stopPropagation()
                        },
                        tabIndex: i ? 0 : -1,
                        "aria-hidden": !i,
                        "aria-label": p.Z.Messages.SEARCH_CLEAR,
                        focusProps: {
                            offset: 4
                        },
                        children: (0, r.jsxs)("div", {
                            className: O().iconContainer,
                            children: [(0, r.jsx)(c.Z, {
                                className: a()((t = {}, S(t, O().icon, !0), S(t, O().visible, !i), t))
                            }), (0, r.jsx)(s.Z, {
                                className: a()((n = {}, S(n, O().icon, !0), S(n, O().visible, i), n))
                            })]
                        })
                    })
                },
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && I(e, t)
                    }(n, e);
                    var t = b(n);

                    function n() {
                        _(this, n);
                        var e;
                        (e = t.apply(this, arguments)).defaultInputProps = {
                            role: "combobox",
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list"
                        };
                        e.ref = i.createRef();
                        e.containerRef = i.createRef();
                        e.handleKeyDown = function(t) {
                            var n = e.props,
                                r = n.onActivate,
                                i = n.onKeyDown,
                                o = n.onQueryChange,
                                a = n.useKeyboardNavigation;
                            null != i && i(t);
                            var u = e.ref.current;
                            if (null != u && null == r)
                                if (t.keyCode === d.yXg.ESCAPE && null != u.value && "" !== u.value && u.value.length > 0) {
                                    u.value = "";
                                    null != o && o("")
                                } else a && (e.props.gridResults ? e.handleKeyDownGrid(t) : e.handleKeyDownList(t));
                            else t.keyCode !== d.yXg.TAB && null != r && r(t)
                        };
                        e.handleChange = function(t) {
                            var n = e.props.onQueryChange;
                            null != n && n(t.currentTarget.value)
                        };
                        e.handleFocus = function(t) {
                            var n = e.props.onFocus;
                            null != n && n(t)
                        };
                        e.handleClear = function() {
                            var t = e.props.onClear,
                                n = e.ref.current;
                            null != t && t();
                            null != n && n.focus()
                        };
                        e.handleRemoveTag = function(t) {
                            var n = e.props.onRemoveTag;
                            null == n || n(t)
                        };
                        e.focus = function() {
                            var t = e.ref.current;
                            null != t && t.focus()
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.focusAfterReady,
                            r = t.isReady;
                        n && !e.isReady && r && this.focus()
                    };
                    o.handleKeyDownGrid = function(e) {
                        var t = this.props,
                            n = t.selectedRow,
                            r = t.selectedColumn,
                            i = t.sections,
                            o = t.query,
                            a = t.tags,
                            u = t.onSelectionChange,
                            l = t.onSelect,
                            s = t.onRemoveTag,
                            c = t.preventEscapePropagation;
                        if (0 !== i.length) {
                            switch (e.keyCode) {
                                case d.yXg.BACKSPACE:
                                    if ((null == o || 0 === o.length) && null != a && a.length > 0) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        null == s || s(a.length - 1)
                                    }
                                    break;
                                case d.yXg.ARROW_DOWN:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (-1 === n) {
                                        n = 0;
                                        r = 0
                                    } else {
                                        (n += 1) >= i.length && (n = i.length - 1);
                                        r >= i[n] && (r = i[n] - 1)
                                    }
                                    break;
                                case d.yXg.ARROW_UP:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if ((n -= 1) < 0) {
                                        n = 0;
                                        r = 0
                                    } else r >= i[n] && (r = i[n] - 1);
                                    break;
                                case d.yXg.ARROW_LEFT:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === n && (n = 0);
                                    if ((r -= 1) < 0)
                                        if ((n -= 1) >= 0) r = i[n] - 1;
                                        else if (n < 0) {
                                        n = 0;
                                        r = 0
                                    }
                                    break;
                                case d.yXg.ARROW_RIGHT:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === n && (n = 0);
                                    if ((r += 1) >= i[n]) {
                                        r = 0;
                                        (n += 1) >= i.length && (r = i[n = i.length - 1] - 1)
                                    }
                                    break;
                                case d.yXg.ENTER:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === n && (n = 0); - 1 === r && (r = 0);
                                    if (n >= i.length || r >= i[n]) return;
                                    null != l && l(n, r, e);
                                    return;
                                case d.yXg.ESCAPE:
                                    e.preventDefault();
                                    c && e.stopPropagation();
                                    null != l && l(null, null, e);
                                    return;
                                default:
                                    return
                            }
                            null != u && u(n, r)
                        }
                    };
                    o.handleKeyDownList = function(e) {
                        var t = this.props,
                            n = t.sections,
                            r = t.selectedSection,
                            i = t.selectedRow,
                            o = t.onSelect,
                            a = t.onSelectionChange,
                            u = t.query,
                            l = t.tags,
                            s = t.preventEscapePropagation,
                            c = this.ref.current;
                        if (null != c) switch (e.keyCode) {
                            case d.yXg.BACKSPACE:
                                if ((null == u || 0 === u.length) && null != l && l.length > 0) {
                                    var f, p;
                                    e.preventDefault();
                                    e.stopPropagation();
                                    null === (p = (f = this.props).onRemoveTag) || void 0 === p || p.call(f, l.length - 1)
                                }
                                break;
                            case d.yXg.ARROW_DOWN:
                                e.preventDefault();
                                e.stopPropagation();
                                if (n.length > r && ++i >= n[r]) {
                                    ++r >= n.length && (r = 0);
                                    i = 0
                                }
                                null == a || a(r, i);
                                break;
                            case d.yXg.ARROW_UP:
                                e.preventDefault();
                                e.stopPropagation();
                                if (--i < 0) {
                                    --r < 0 && (r = n.length - 1);
                                    i = n[r] - 1
                                }
                                null == a || a(r, i);
                                break;
                            case d.yXg.ENTER:
                                e.preventDefault();
                                e.stopPropagation();
                                n.length > r && n[r] > i && (null == o || o(r, i, e));
                                break;
                            case d.yXg.ESCAPE:
                                e.preventDefault();
                                s && e.stopPropagation();
                                null == o || o(null, null, e);
                                c.blur()
                        }
                    };
                    o.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.autoFocus,
                            i = t.query,
                            o = t.placeholder,
                            c = void 0 === o ? p.Z.Messages.DM_SEARCH_PLACEHOLDER : o,
                            d = t.themeOverride,
                            E = t.disabled,
                            _ = t.onClear,
                            h = t.size,
                            g = t.maxHeight,
                            I = t.tags,
                            v = t.onActivate,
                            b = t.className,
                            R = t.inputProps,
                            m = t.focusAfterReady,
                            P = null != i && i.length > 0,
                            N = !1,
                            C = [];
                        if (null != I && I.length > 0)
                            if ("string" == typeof I[0]) {
                                I.forEach((function(t, n) {
                                    return C.push((0, r.jsxs)(u.Anchor, {
                                        focusProps: {
                                            offset: 4
                                        },
                                        className: O().tag,
                                        onClick: e.handleRemoveTag.bind(e, n),
                                        children: [t, (0, r.jsx)(s.Z, {
                                            className: O().close,
                                            "aria-label": p.Z.Messages.REMOVE
                                        })]
                                    }, n))
                                }))
                            } else {
                                N = !0;
                                I.forEach((function(t, n) {
                                    return C.push((0, r.jsxs)(u.Anchor, {
                                        className: a()(O().tag, O().richTag),
                                        onClick: e.handleRemoveTag.bind(e, n),
                                        children: [(t.type === T.MEMBER || t.type === T.USER) && null != t.avatar && (0,
                                            r.jsx)(u.Avatar, {
                                            src: t.avatar,
                                            "aria-hidden": !0,
                                            size: u.AvatarSizes.SIZE_16
                                        }), t.type === T.ROLE && null != t.color && (0, r.jsx)("span", {
                                            className: O().tagRoleColor,
                                            style: {
                                                backgroundColor: t.color
                                            }
                                        }), t.type === T.GUILD && null != t.guild && (0, r.jsx)(l.Z, {
                                            guild: t.guild,
                                            active: !0,
                                            size: l.Z.Sizes.SMOL
                                        }), (0, r.jsx)("span", {
                                            className: O().tagLabel,
                                            children: t.label
                                        }), (0, r.jsx)(s.Z, {
                                            className: O().close,
                                            "aria-label": p.Z.Messages.REMOVE
                                        })]
                                    }, n))
                                }))
                            } return (0, r.jsx)(u.FocusRing, {
                            focusTarget: this.ref,
                            ringTarget: this.containerRef,
                            children: (0, r.jsx)("div", {
                                ref: this.containerRef,
                                className: a()(b, O().container, h, (0, f.Q)(d), S({}, O().disabled, E)),
                                children: (0, r.jsxs)(u.ScrollerThin, {
                                    className: O().inner,
                                    style: {
                                        maxHeight: g
                                    },
                                    children: [C, (0, r.jsx)("input", y({
                                        className: a()(O().input, S({}, O().richTagInput, N)),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: c,
                                        value: i,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: E,
                                        "aria-disabled": E,
                                        autoFocus: !m && n,
                                        onMouseDown: v
                                    }, this.defaultInputProps, R)), null != _ ? (0, r.jsx)(A, {
                                        size: h,
                                        themeOverride: d,
                                        hasContent: P,
                                        onClear: this.handleClear
                                    }) : null]
                                })
                            })
                        })
                    };
                    return n
                }(i.Component);
            m.Sizes = R;
            m.defaultProps = {
                size: R.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            const P = m
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(304548),
                l = n(473708),
                s = n(949095),
                c = n.n(s);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            i = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == i || i(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        o = t.actionText,
                        s = t.children,
                        f = t.error,
                        d = t.isLoading,
                        p = t.maxLength,
                        E = t.transitionState,
                        O = t.helpMessage,
                        _ = t.retryPrompt,
                        S = t.retrySuccessMessage,
                        h = this.state,
                        y = h.code,
                        g = h.errorMessage,
                        I = h.retrySuccess,
                        v = i.Children.count(s) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: c().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: s
                            })
                        }) : null,
                        b = null != _ ? (0, r.jsxs)(u.Text, {
                            className: a()(c().submitText, c().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: a()(c().spacing, c().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: _
                                })
                            })]
                        }) : null,
                        T = I ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: c().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: S
                            })
                        }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != O ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: c().spacing,
                                    children: O
                                }) : null, v, T, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: c().spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: y,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: c().error,
                                        children: null != f ? f : g
                                    }) : null, b]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: d || 0 === y.length,
                                    children: null != o ? o : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            S.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const h = S
        },
        775428: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => s
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function l(e, t) {
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
            var s = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    c = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    O = e.secondaryColor,
                    _ = void 0 === O ? "transparent" : O,
                    S = e.secondaryColorClass,
                    h = void 0 === S ? "" : S,
                    y = l(e, ["width", "height", "color", "colorClass", "secondaryColor", "secondaryColorClass"]);
                return (0, r.jsxs)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0,
                        r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: E
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: h
                    })]
                }))
            }
        },
        597209: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => s
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function l(e, t) {
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
            var s = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    c = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }
        },
        911486: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => s
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function l(e, t) {
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
            var s = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    c = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M3.468 5.19a2.825 2.825 0 0 1 1.095-.972l6.095-3.047a3 3 0 0 1 2.684 0l6.095 3.047A2.828 2.828 0 0 1 21 6.748V9.78a14.167 14.167 0 0 1-1.831 6.972 14.176 14.176 0 0 1-6.593 5.99 1.419 1.419 0 0 1-1.152 0 14.176 14.176 0 0 1-8.422-12.728A14.307 14.307 0 0 1 3 9.781V6.748a2.826 2.826 0 0 1 .468-1.558Zm2.95 10.297A12.179 12.179 0 0 0 12 20.808a12.179 12.179 0 0 0 5.582-5.321A9.49 9.49 0 0 0 12.467 14h-.934a9.489 9.489 0 0 0-5.115 1.487ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = c(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, null != r ? o.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.yXt.STATUS,
                        details: "".concat(r)
                    }) : o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(120415);

            function i(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var a = function(e, t) {
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

            function u(e, t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(e, t) {
                    var i, o, u, l;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(64572), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(45353), n.e(92465), n.e(73727), n.e(10675), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(93420)]).then(n.bind(n, 624501))];
                            case 1:
                                i = a.sent(), o = i.default;
                                if (null != (u = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (l = document.createElement("a")).href = e;
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
        83797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => M,
                JS: () => C,
                hH: () => P,
                AB: () => D,
                ZP: () => Z,
                oG: () => U,
                kO: () => j,
                yw: () => L
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(382060),
                u = n(664625),
                l = n(61209),
                s = n(5544),
                c = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(602351),
                E = n(682776),
                O = n(491260),
                _ = n(563367),
                S = n(715107),
                h = n(464187),
                y = n(407561),
                g = n(652591),
                I = n(563135),
                v = n(671723);
            var b = n(2590),
                T = n(897196);

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        R(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function P(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = u.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = s.ZP.getChannels(e),
                    a = o[s.sH].length,
                    l = o[s.Zb].length,
                    p = y.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: c.Z.getMemberCount(e),
                    guild_num_channels: a + l,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: l,
                    guild_num_roles: m(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = E.Z.getGuildPermissions(t)) && void 0 !== n ? n : I.ZP.NONE),
                    guild_is_vip: t.hasFeature(b.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: m(p)
                }
            }

            function N(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                return null == t ? null : M(t)
            }

            function M(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, b.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(e.type) && null != e.parent_id ? i(l.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = E.Z.getChannelPermissions(e)) && void 0 !== t ? t : I.ZP.NONE),
                    channel_hidden: n
                }
            }

            function D(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                if (null == t) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = _.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, j(t.getGuildId(), t.id, r), {
                    game_name: null != (n = v.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function w(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!g.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== b.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? h.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? S.Z.getChannelId(i) : null,
                        a = l.Z.getChannel(o),
                        u = w(a, i),
                        s = A({}, t, P(u), null != i && null != o && (0, T.AB)(o) ? N(0, o) : M(a));
                    g.default.track(e, s, {
                        flush: n
                    })
                }
            }

            function j(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(y.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== u.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function U(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(y.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != O.Z.findActivity(e.userId, (function(e) {
                        return e.type === b.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const Z = {
                trackWithMetadata: L,
                getVoiceStateMetadata: j
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => a,
                ub: () => u,
                bB: () => l
            });
            var r, i, o, a, u, l;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(o || (o = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(a || (a = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(u || (u = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        175072: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r,
                H: () => i
            });
            var r, i;
            ! function(e) {
                e[e.GAME = 1] = "GAME";
                e[e.TICKETED_EVENTS = 3] = "TICKETED_EVENTS";
                e[e.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS"
            }(r || (r = {}));
            ! function(e) {
                e[e.BOT = 0] = "BOT";
                e[e.SERVER = 1] = "SERVER";
                e[e.SYSTEM_DM = 2] = "SYSTEM_DM";
                e[e.OFFICIAL = 3] = "OFFICIAL";
                e[e.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM";
                e[e.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER";
                e[e.AI = 6] = "AI";
                e[e.REMIX = 7] = "REMIX"
            }(i || (i = {}))
        },
        777158: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(496486),
                i = n.n(r);

            function o(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                    return !0
                };
                return i()(e).map((function(e) {
                    return "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]
                })).flattenDeep().filter(n).value()
            }
        },
        449518: (e, t, n) => {
            "use strict";
            n.d(t, {
                kf: () => g,
                m$: () => p,
                EQ: () => y,
                aC: () => d,
                IG: () => I
            });
            var r = n(396179),
                i = n(785893),
                o = (n(667294), n(304548)),
                a = n(818417),
                u = n(473708),
                l = function(e, t) {
                    return (0, i.jsxs)(o.Text, {
                        color: "text-danger",
                        style: {
                            display: "flex",
                            gap: "4px",
                            margin: "8px 0 4px 0",
                            alignItems: "center"
                        },
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)(a.Z, {
                            width: 14,
                            height: 14
                        }), e]
                    }, t)
                };
            const s = {
                getForumChannelPermissionText: function() {
                    return u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: l
                    })
                }
            };
            var c = function(e, t) {
                return (0, i.jsxs)(o.Text, {
                    color: "text-danger",
                    style: {
                        display: "flex",
                        gap: "4px",
                        margin: "8px 0 4px 0",
                        alignItems: "center"
                    },
                    variant: "text-sm/normal",
                    children: [(0, i.jsx)(a.Z, {
                        width: 14,
                        height: 14
                    }), e]
                }, t)
            };
            const f = {
                getTextInVoiceSendMessageChannelPermissionText: function(e) {
                    return e ? u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: c
                    }) : u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                },
                getTextInVoiceReadMessageHistoryChannelPermissionText: function(e) {
                    return e ? u.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: c
                    }) : u.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            };
            var d, p, E = n(348592),
                O = n(2590);

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.EMPTY_STATE = 0] = "EMPTY_STATE";
                e[e.ADMINISTRATOR = 1] = "ADMINISTRATOR";
                e[e.ROLE = 2] = "ROLE";
                e[e.OWNER = 3] = "OWNER";
                e[e.MEMBER = 4] = "MEMBER";
                e[e.USER = 5] = "USER";
                e[e.GUILD = 6] = "GUILD"
            }(d || (d = {}));
            ! function(e) {
                e[e.ROLES = 0] = "ROLES";
                e[e.MEMBERS = 1] = "MEMBERS";
                e[e.USERS = 2] = "USERS";
                e[e.GUILDS = 3] = "GUILDS"
            }(p || (p = {}));
            var S, h, y = 20,
                g = "channelPermissionSettingsAdvancedModeOn";
            ! function(e) {
                e.SETTINGS_PAGE = "settings-page";
                e.MEMBERS_LIST = "members-list";
                e.EMPTY_STATE = "empty-state";
                e.CREATE_CHANNEL = "create-channel"
            }(S || (S = {}));
            ! function(e) {
                e.BASIC = "basic";
                e.ADVANCED = "advanced"
            }(h || (h = {}));

            function I(e, t, n, i) {
                var o, a = e.type;
                return _(o = {}, O.Plq.VIEW_CHANNEL.toString(), {
                        title: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : u.Z.Messages.VIEW_CHANNEL,
                        description: function() {
                            if (t) switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                                case O.d4z.GUILD_VOICE:
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                            }
                            return a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                        }(),
                        flag: O.Plq.VIEW_CHANNEL
                    }), _(o, O.Plq.MANAGE_CHANNELS.toString(), {
                        title: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.MANAGE_CHANNELS : u.Z.Messages.MANAGE_CHANNEL,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.MANAGE_CHANNELS
                    }), _(o, O.Plq.MANAGE_ROLES.toString(), {
                        title: u.Z.Messages.MANAGE_PERMISSIONS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: O.Plq.MANAGE_ROLES
                    }), _(o, O.Plq.MANAGE_WEBHOOKS.toString(), {
                        title: u.Z.Messages.MANAGE_WEBHOOKS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: O.Plq.MANAGE_WEBHOOKS
                    }),
                    _(o, O.Plq.CREATE_INSTANT_INVITE.toString(), {
                        title: u.Z.Messages.CREATE_INSTANT_INVITE,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_VOICE:
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.CREATE_INSTANT_INVITE
                    }), _(o, O.Plq.SEND_MESSAGES.toString(), {
                        title: O.TPd.GUILD_THREADS_ONLY.has(a) ? u.Z.Messages.CREATE_FORUM_POSTS : n && a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : u.Z.Messages.SEND_MESSAGES,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return n ? u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_FORUM:
                                    return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? s.getForumChannelPermissionText() : u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case O.d4z.GUILD_ANNOUNCEMENT:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: E.Z.getArticleURL(O.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                case O.d4z.GUILD_VOICE:
                                    return f.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.SEND_MESSAGES
                    }), _(o, O.Plq.EMBED_LINKS.toString(), {
                        title: u.Z.Messages.EMBED_LINKS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                        flag: O.Plq.EMBED_LINKS
                    }), _(o, O.Plq.ATTACH_FILES.toString(), {
                        title: u.Z.Messages.ATTACH_FILES,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                        flag: O.Plq.ATTACH_FILES
                    }), _(o, O.Plq.ADD_REACTIONS.toString(), {
                        title: u.Z.Messages.ADD_REACTIONS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.ADD_REACTIONS
                    }), _(o, O.Plq.USE_EXTERNAL_EMOJIS.toString(), {
                        title: u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                        flag: O.Plq.USE_EXTERNAL_EMOJIS
                    }), _(o, O.Plq.USE_EXTERNAL_STICKERS.toString(), {
                        title: u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                        flag: O.Plq.USE_EXTERNAL_STICKERS
                    }), _(o, O.Plq.MENTION_EVERYONE.toString(), {
                        title: a === O.d4z.GUILD_STAGE_VOICE ? u.Z.Messages.MENTION_EVERYONE_STAGE : u.Z.Messages.MENTION_EVERYONE,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : a === O.d4z.GUILD_STAGE_VOICE ? u.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : u.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                        flag: O.Plq.MENTION_EVERYONE
                    }), _(o, O.Plq.MANAGE_MESSAGES.toString(), {
                        title: u.Z.Messages.MANAGE_MESSAGES,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_ANNOUNCEMENT:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: E.Z.getArticleURL(O.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.MANAGE_MESSAGES
                    }), _(o, O.Plq.READ_MESSAGE_HISTORY.toString(), {
                        title: O.TPd.GUILD_THREADS_ONLY.has(a) ? u.Z.Messages.READ_POST_HISTORY : u.Z.Messages.READ_MESSAGE_HISTORY,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_VOICE:
                                    return f.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.READ_MESSAGE_HISTORY
                    }), _(o, O.Plq.SEND_TTS_MESSAGES.toString(), {
                        title: u.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                        flag: O.Plq.SEND_TTS_MESSAGES
                    }), _(o, O.Plq.USE_APPLICATION_COMMANDS.toString(), {
                        title: u.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                        flag: O.Plq.USE_APPLICATION_COMMANDS
                    }), _(o, O.Plq.SEND_VOICE_MESSAGES.toString(), {
                        title: u.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                        flag: O.Plq.SEND_VOICE_MESSAGES
                    }), _(o, O.Plq.USE_CLYDE_AI.toString(), {
                        title: u.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : u.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                        flag: O.Plq.USE_CLYDE_AI
                    }), _(o, O.Plq.CONNECT.toString(), {
                        title: u.Z.Messages.CONNECT,
                        description: function() {
                            if (t) switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                            }
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.CONNECT
                    }), _(o, O.Plq.SPEAK.toString(), {
                        title: u.Z.Messages.SPEAK,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.SPEAK
                    }), _(o, O.Plq.STREAM.toString(), {
                        title: u.Z.Messages.VIDEO,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.STREAM
                    }), _(o, O.Plq.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: u.Z.Messages.USE_EMBEDDED_ACTIVITIES,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: O.Plq.USE_EMBEDDED_ACTIVITIES
                    }), _(o, O.Plq.USE_SOUNDBOARD.toString(), {
                        title: u.Z.Messages.USE_SOUNDBOARD,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                        helpCenterArticle: E.Z.getArticleURL(O.BhN.SOUNDBOARD)
                                    });
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: E.Z.getArticleURL(O.BhN.SOUNDBOARD)
                                    });
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: E.Z.getArticleURL(O.BhN.SOUNDBOARD)
                                    })
                            }
                        }(),
                        flag: O.Plq.USE_SOUNDBOARD
                    }), _(o, O.Plq.USE_EXTERNAL_SOUNDS.toString(), {
                        title: u.Z.Messages.USE_EXTERNAL_SOUNDS,
                        description: u.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: O.Plq.USE_EXTERNAL_SOUNDS
                    }), _(o, O.Plq.USE_VAD.toString(), {
                        title: u.Z.Messages.USE_VAD,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.USE_VAD
                    }), _(o, O.Plq.PRIORITY_SPEAKER.toString(), {
                        title: u.Z.Messages.PRIORITY_SPEAKER,
                        description: function() {
                            0;
                            var e = {
                                keybind: u.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                                onClick: function() {
                                    r.Z.open(O.oAB.KEYBINDS)
                                }
                            };
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                            }
                        }(),
                        flag: O.Plq.PRIORITY_SPEAKER
                    }), _(o, O.Plq.MUTE_MEMBERS.toString(), {
                        title: u.Z.Messages.MUTE_MEMBERS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.MUTE_MEMBERS
                    }), _(o, O.Plq.DEAFEN_MEMBERS.toString(), {
                        title: u.Z.Messages.DEAFEN_MEMBERS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.DEAFEN_MEMBERS
                    }), _(o, O.Plq.MOVE_MEMBERS.toString(), {
                        title: u.Z.Messages.MOVE_MEMBERS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_STAGE_VOICE:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                                case O.d4z.GUILD_TEXT:
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: O.Plq.MOVE_MEMBERS
                    }), _(o, O.Plq.REQUEST_TO_SPEAK.toString(), {
                        title: u.Z.Messages.REQUEST_TO_SPEAK,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                        flag: O.Plq.REQUEST_TO_SPEAK
                    }), _(o, O.Plq.MANAGE_THREADS.toString(), {
                        title: O.TPd.GUILD_THREADS_ONLY.has(a) ? u.Z.Messages.MANAGE_FORUM_POSTS : n && a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : u.Z.Messages.MANAGE_THREADS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return n ? u.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.MANAGE_THREADS
                    }), _(o, O.Plq.CREATE_PUBLIC_THREADS.toString(), {
                        title: u.Z.Messages.CREATE_PUBLIC_THREADS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                        flag: O.Plq.CREATE_PUBLIC_THREADS
                    }), _(o, O.Plq.CREATE_PRIVATE_THREADS.toString(), {
                        title: u.Z.Messages.CREATE_PRIVATE_THREADS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                        flag: O.Plq.CREATE_PRIVATE_THREADS
                    }), _(o, O.Plq.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: O.TPd.GUILD_THREADS_ONLY.has(a) ? u.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : u.Z.Messages.SEND_MESSAGES_IN_THREADS,
                        description: function() {
                            switch (a) {
                                case O.d4z.GUILD_CATEGORY:
                                    return n ? u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                                case O.d4z.GUILD_FORUM:
                                case O.d4z.GUILD_MEDIA:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                                default:
                                    return u.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: O.Plq.SEND_MESSAGES_IN_THREADS
                    }), _(o, O.Plq.MANAGE_EVENTS.toString(), {
                        title: u.Z.Messages.MANAGE_EVENTS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: O.Plq.MANAGE_EVENTS
                    }), _(o, O.Plq.CREATE_EVENTS.toString(), {
                        title: u.Z.Messages.CREATE_EVENTS,
                        description: a === O.d4z.GUILD_CATEGORY ? u.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : u.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: O.Plq.CREATE_EVENTS
                    }),
                    _(o, O.Plq.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: u.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: u.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: O.Plq.SET_VOICE_CHANNEL_STATUS
                    }), o
            }
        },
        276190: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                AddMembersBody: () => k,
                MemberRoleSelector: () => x,
                default: () => F
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(304548),
                u = n(442368),
                l = n(650332),
                s = n(382060),
                c = n(61209),
                f = n(21372),
                d = n(567403),
                p = n(107364),
                E = n(443812),
                O = n(823975),
                _ = n(407558),
                S = n(652591),
                h = n(176758),
                y = n(607556),
                g = n(968696),
                I = n(1477),
                v = n(118442),
                b = n(449518),
                T = n(2590),
                R = n(473708),
                A = n(618719),
                m = n.n(A);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            N(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            N(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function M(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function D(e, t) {
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

            function w(e, t) {
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
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(e) {
                var t = function(e, t) {
                    if ("object" !== j(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== j(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === j(t) ? t : String(t)
            }
            var j = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            var U = function(e, t) {
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
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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
                },
                Z = (0, E.hQ)();

            function G(e, t) {
                return t ? e.slice(1) : e
            }

            function k(e) {
                var t, n = e.guild,
                    a = e.channel,
                    u = e.permission,
                    s = e.pendingAdditions,
                    c = e.setPendingAdditions,
                    d = e.isStageChannel,
                    p = void 0 === d ? null != a && a.isGuildStageVoice() : d,
                    E = e.description,
                    O = function(e) {
                        var t = G(A.trim(), S);
                        return new RegExp("".concat(g.Z.escape(t)), "i").test(e)
                    },
                    _ = w(i.useState(!1), 2),
                    S = _[0],
                    h = _[1],
                    T = w(i.useState(""), 2),
                    A = T[0],
                    m = T[1],
                    P = (0, o.e7)([f.ZP], (function() {
                        return f.ZP.getMemberIds(n.id)
                    }));
                S ? t = [] : p ? t = I.Wx(n, a, u, O) : 0 === (t = I.ik(n, a, u, O)).length && ("" !== A.trim() || I.RD(n) || (t = I.aq()));
                var N = I.iI(P, a, n, u, O),
                    C = {
                        placeholderText: R.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,
                        hintText: R.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,
                        renderEmptyText: function(e) {
                            return R.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                query: e
                            })
                        }
                    },
                    j = C.placeholderText,
                    U = C.hintText,
                    Z = C.renderEmptyText;
                return (0, r.jsx)(x, {
                    pendingAdditions: s,
                    query: A,
                    onQueryChange: function(e) {
                        var t = e.trim(),
                            r = "@" === t.charAt(0);
                        y.Z.requestMembers(n.id, G(t, r), b.EQ);
                        m(e);
                        h(r)
                    },
                    onClickRow: function(e) {
                        var t = (0, v.G)(e);
                        c((function(n) {
                            var r = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        M(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, n);
                            if (t in r) delete r[t];
                            else {
                                var i;
                                e.rowType === b.aC.ROLE || e.rowType === b.aC.ADMINISTRATOR ? i = {
                                    type: l.Fj.ROLE,
                                    label: e.name,
                                    color: e.colorString
                                } : e.rowType !== b.aC.MEMBER && e.rowType !== b.aC.OWNER || (i = {
                                    type: l.Fj.MEMBER,
                                    label: e.name,
                                    avatar: e.avatarURL
                                });
                                null != i && (r[t] = {
                                    display: i,
                                    row: e
                                })
                            }
                            return r
                        }))
                    },
                    onRemovePendingAddition: function(e) {
                        c((function(t) {
                            t[e];
                            return D(t, [e].map(L))
                        }))
                    },
                    roles: t,
                    members: N,
                    placeholderText: j,
                    hintText: U,
                    renderEmptyText: Z,
                    isStageChannel: p,
                    description: E
                })
            }

            function x(e) {
                var t = e.listClassName,
                    n = e.pendingAdditions,
                    i = e.query,
                    o = e.onQueryChange,
                    u = e.onClickRow,
                    l = e.onRemovePendingAddition,
                    s = e.roles,
                    c = e.members,
                    f = e.placeholderText,
                    d = e.hintText,
                    p = e.renderEmptyText,
                    E = e.isStageChannel,
                    O = e.focusSearchAfterReady,
                    _ = e.isReady,
                    S = e.description;
                return (0, r.jsxs)("div", {
                    className: m().content,
                    children: [function() {
                        var e = S;
                        null == e && E && (e = R.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION);
                        return null == e || "" === e ? null : (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            className: m().description,
                            variant: "text-sm/normal",
                            children: e
                        })
                    }(), (0, r.jsx)(v.Z, {
                        listClassName: t,
                        pendingAdditions: n,
                        query: i,
                        onQueryChange: o,
                        onClickRow: u,
                        onRemovePendingAddition: l,
                        roles: s,
                        members: c,
                        placeholderText: f,
                        hintText: d,
                        renderEmptyText: p,
                        disabledText: E ? R.Z.Messages.CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS : null,
                        focusSearchAfterReady: O,
                        isReady: _
                    })]
                })
            }

            function F(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    u = e.channelId,
                    l = e.newChannel,
                    f = e.inSettings,
                    E = w(i.useState(!1), 2),
                    h = E[0],
                    y = E[1],
                    g = w(i.useState({}), 2),
                    I = g[0],
                    v = g[1],
                    b = (0, o.e7)([c.Z], (function() {
                        return c.Z.getChannel(u)
                    }), [u]),
                    A = (0, o.e7)([d.Z], (function() {
                        return d.Z.getGuild(null == b ? void 0 : b.getGuildId())
                    }));
                i.useEffect((function() {
                    S.default.track(T.rMx.OPEN_MODAL, {
                        type: "Grant Channel Access"
                    })
                }), []);
                if (null == b || null == A) return null;
                var P = l && 0 === Object.keys(I).length;

                function N() {
                    return (N = C((function() {
                        return U(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    if (null == b || 0 === Object.keys(I).length) {
                                        n();
                                        return [2]
                                    }
                                    y(!0);
                                    e.label = 1;
                                case 1:
                                    e.trys.push([1, 3, , 4]);
                                    return [4, H(b, I, f)];
                                case 2:
                                    e.sent();
                                    n();
                                    y(!1);
                                    return [3, 4];
                                case 3:
                                    e.sent();
                                    y(!1);
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var M = (0, s.zi)(b.type) ? O.Z : _.Z;
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.SMALL,
                    "aria-labelledby": Z,
                    className: m().modalRoot,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        separator: !1,
                        direction: p.Z.Direction.VERTICAL,
                        align: p.Z.Align.CENTER,
                        className: m().header,
                        children: [(0, r.jsx)(a.Heading, {
                            id: Z,
                            variant: "heading-xl/semibold",
                            children: R.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                        }), (0, r.jsxs)(a.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: m().headerSubtitle,
                            children: [(0, r.jsx)(M, {
                                height: 16,
                                width: 16,
                                className: m().headerSubtitleIcon
                            }), b.name]
                        })]
                    }), (0, r.jsx)(k, {
                        guild: A,
                        channel: b,
                        permission: b.accessPermissions,
                        pendingAdditions: I,
                        setPendingAdditions: v
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [!P && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.Button, {
                                onClick: function() {
                                    return N.apply(this, arguments)
                                },
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.SMALL,
                                className: m().button,
                                submitting: h,
                                children: R.Z.Messages.DONE
                            }), (0, r.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.TRANSPARENT,
                                onClick: n,
                                size: a.Button.Sizes.SMALL,
                                children: R.Z.Messages.CANCEL
                            })]
                        }), P && (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.FILLED,
                            color: a.Button.Colors.PRIMARY,
                            onClick: n,
                            size: a.Button.Sizes.SMALL,
                            children: R.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP
                        })]
                    })]
                })
            }

            function H(e, t, n) {
                var r = [];
                Object.values(t).forEach((function(t) {
                    var n = t.row;
                    null != n.id && "" !== n.id && (n.rowType === b.aC.ROLE ? r.push((0, h.rX)(n.id, e.type)) : n.rowType === b.aC.MEMBER && r.push((0, h.jZ)(n.id, e.type)))
                }));
                return (0, u.hw)(e.id, r, n)
            }
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        270946: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(531441),
                a = n(473708);

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

            function c(e) {
                var t = e.className,
                    n = e.color,
                    c = void 0 === n ? i.Z.unsafe_rawColors.BRAND_500.css : n,
                    f = s(e, ["className", "color"]);
                return (0, r.jsx)(o.IG, l(function(e) {
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
                }({}, f), {
                    text: a.Z.Messages.BETA,
                    color: c,
                    className: t
                }))
            }
        },
        372518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(281110),
                i = n(744564),
                o = n(105783),
                a = n(671293),
                u = n(129586),
                l = n(858519),
                s = n(980204),
                c = n(854602),
                f = n(2590),
                d = n(473708);

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

            function E(e) {
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
            var O = function(e, t) {
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

            function _(e, t, n) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = E((function(e, t, n) {
                    var r, i;
                    return O(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                a.trys.push([0, 2, , 3]);
                                return [4, e()];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                r = a.sent();
                                (null === (i = r.body) || void 0 === i ? void 0 : i.code) === f.evJ.NON_MODERATED_TAG_REQUIRED && o.Z.show({
                                    title: t,
                                    body: n
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            const h = {
                resort: function(e) {
                    i.Z.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: function(e, t) {
                    return r.ZP.post({
                        url: f.ANM.FORUM_TAGS(t),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                            moderated: e.moderated
                        }
                    })
                },
                updateForumTag: function(e, t) {
                    var n = r.ZP.put({
                        url: f.ANM.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    _((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_EDIT_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag: function(e, t) {
                    var n = r.ZP.delete({
                        url: f.ANM.FORUM_TAG(e, t)
                    });
                    _((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_REMOVE_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: function(e, t) {
                    return E((function() {
                        return O(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, a.Z.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    n.sent();
                                    return [2, r.ZP.patch({
                                        url: f.ANM.CHANNEL(e),
                                        body: {
                                            applied_tags: t
                                        }
                                    })]
                            }
                        }))
                    }))()
                },
                hideAdminOnboarding: function(e, t) {
                    i.Z.dispatch({
                        type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                        channelId: e,
                        hide: t
                    })
                },
                markPostAsSeen: function(e, t, n) {
                    (0, u.a8)((0, s.UP)(e), t, n)
                },
                markPostAsUnseen: function(e, t, n) {
                    (0, u.FL)((0, s.UP)(e), t, n)
                },
                flushSeenItems: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
                    (0, u.rS)((0, s.UP)(e), t)
                },
                searchForumPosts: function(e, t, n, r) {
                    return E((function() {
                        var o;
                        return O(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_START",
                                        channelId: t
                                    });
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    return [4, a.Z.searchThreads(e, t, n, r)];
                                case 2:
                                    o = u.sent();
                                    (0, c.Js)({
                                        guildId: e,
                                        channelId: t,
                                        numSearchResults: o.length
                                    });
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_SUCCESS",
                                        channelId: t,
                                        threadIds: o
                                    });
                                    return [3, 4];
                                case 3:
                                    u.sent();
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_FAILURE",
                                        channelId: t
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                updateForumSearchQuery: function(e, t) {
                    i.Z.dispatch({
                        type: "FORUM_SEARCH_QUERY_UPDATED",
                        channelId: e,
                        query: t
                    })
                },
                clearForumSearch: function(e) {
                    i.Z.dispatch({
                        type: "FORUM_SEARCH_CLEAR",
                        channelId: e
                    })
                }
            }
        },
        866893: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => B,
                Z: () => Y
            });
            var r = n(496486),
                i = n.n(r),
                o = n(920883),
                a = n(842227),
                u = n(202351),
                l = n(744564),
                s = n(536945),
                c = n(591684),
                f = n(664625),
                d = n(61209),
                p = n(179913),
                E = n(715107),
                O = n(72580),
                _ = n(474167);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function g(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var R, A = [],
                m = null,
                P = null,
                N = new Set,
                C = o.z.LATEST_ACTIVITY,
                M = 0,
                D = [],
                w = !1,
                L = [],
                j = i().chain(A),
                U = i().chain(A),
                Z = new Set,
                G = new Set;

            function k(e) {
                var t;
                return null !== (t = p.ZP.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function x(e) {
                return function(t, n) {
                    return (0, _.yv)(t) ? -1 : (0, _.yv)(n) ? 1 : e === o.z.LATEST_ACTIVITY ? a.default.compare(k(n), k(t)) : a.default.compare(n, t)
                }
            }

            function F() {
                D = [];
                R = null;
                P = null;
                N = new Set;
                C = o.z.LATEST_ACTIVITY;
                M = 0;
                L = [];
                j = i().chain(A);
                U = i().chain(A);
                G.clear();
                Z.clear()
            }

            function H() {
                var e, t = E.Z.getChannelId();
                if (null == t || !(null === (e = d.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) {
                    F();
                    return !1
                }
                V({
                    refreshThreadIds: !0
                })
            }

            function B(e) {
                var t = d.Z.getChannel(e);
                return null == t ? [] : Object.values(s.Z.getThreadsForParent(t.guild_id, t.id)).map((function(e) {
                    return e.id
                })).sort(x(C))
            }

            function V(e) {
                var t = d.Z.getChannel(P);
                if (null != t) {
                    if (null == e ? void 0 : e.refreshThreadIds) {
                        L = Object.values(s.Z.getThreadsForParent(t.guild_id, t.id)).map((function(e) {
                            return e.id
                        }));
                        M = 0;
                        w = !0
                    }
                    if (0 !== Z.size) {
                        L = L.filter((function(e) {
                            return !Z.has(e)
                        }));
                        Z.clear()
                    }
                    if (0 !== G.size) {
                        L = Array.from(new Set(v(L).concat(v(G))));
                        G.clear()
                    }
                    if ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) {
                        U = i().chain(L).sort(x(o.z.LATEST_ACTIVITY));
                        j = i().chain(L).sort(x(o.z.CREATION_DATE))
                    }
                    var n, r = (C === o.z.LATEST_ACTIVITY ? U : j).value(),
                        a = (D = 0 === N.size ? r : r.filter((n = N, function(e) {
                            var t, r = null === (t = d.Z.getChannel(e)) || void 0 === t ? void 0 : t.appliedTags;
                            return null != r && 0 !== r.length && r.some((function(e) {
                                return n.has(e)
                            }))
                        }))).find((function(e) {
                            return function(e) {
                                var t = c.Z.getCount(e);
                                return null === t || 0 === t
                            }(e)
                        }));
                    R = null == a ? null : a
                }
            }
            var z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && I(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, s.Z, E.Z, p.ZP)
                };
                r.getNewThreadCount = function() {
                    return M
                };
                r.getCanAckThreads = function() {
                    return w
                };
                r.getThreadIds = function(e, t, n) {
                    var r = e !== P,
                        i = !(0, O.OL)(n, N),
                        o = t !== C;
                    P = e;
                    N = n;
                    C = t;
                    r ? V({
                        refreshThreadIds: !0
                    }) : o ? V({
                        sortThreadIds: !0
                    }) : i && V();
                    return D
                };
                r.getCurrentThreadIds = function() {
                    return D
                };
                r.getAndDeleteMostRecentUserCreatedThreadId = function() {
                    var e = m;
                    m = null;
                    return e
                };
                r.getFirstNoReplyThreadId = function() {
                    return R
                };
                return n
            }(u.ZP.Store);
            z.displayName = "ForumActivePostStore";
            const Y = new z(l.Z, {
                CONNECTION_OPEN: H,
                OVERLAY_INITIALIZE: H,
                GUILD_CREATE: H,
                CHANNEL_SELECT: H,
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== P) return !1;
                    F()
                },
                THREAD_LIST_SYNC: function(e) {
                    var t, n = e.guildId;
                    if (null == P) return !1;
                    if (n !== (null === (t = d.Z.getChannel(P)) || void 0 === t ? void 0 : t.guild_id)) return !1;
                    V({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    var t = e.channel,
                        n = e.isNewlyCreated;
                    if (null == t.parent_id || t.parent_id !== P) return !1;
                    if (!n) return !1;
                    t.ownerId !== f.default.getId() ? M++ : m = t.id
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== P) return !1;
                    var n = (0, _.yv)(t.id),
                        r = G.has(t.id);
                    if (n && !r) {
                        G.add(t.id);
                        V({
                            sortThreadIds: !0
                        })
                    } else {
                        if (n || !r) return !1;
                        G.delete(t.id);
                        V({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.parent_id || t.parent_id !== P) return !1;
                    Z.add(t.id);
                    V({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    var t = e.channelId;
                    if (null == t || t !== P) return !1;
                    V({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    var t = e.channelId;
                    if (null == t || t !== P) return !1;
                    w = !1
                }
            })
        },
        980204: (e, t, n) => {
            "use strict";
            n.d(t, {
                UP: () => d,
                rj: () => p,
                Ct: () => E,
                ZP: () => O
            });
            var r = n(129586),
                i = n(858519),
                o = n(854602),
                a = n(734901);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }

            function d(e) {
                return "".concat(i.AT.FORUM_CHANNEL, "_").concat(e)
            }

            function p(e, t, n) {
                (0, r.a8)(d(e), t, n)
            }

            function E(e, t, n) {
                (0, r.FL)(d(e), t, n)
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = f(n);

                function n(e) {
                    var r, i = e.guildId,
                        u = e.channelId,
                        l = e.windowId,
                        s = e.isPaused;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    (r = t.call(this, {
                        windowId: l,
                        isPaused: s,
                        id: d(u)
                    })).createFlushSeenItemsFunction = function(e) {
                        var t = r.trackedFeedItems,
                            n = r.channelId,
                            i = {
                                guildId: r.guildId,
                                channelId: n,
                                sessionId: r.sessionId,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return function() {
                            return function(e) {
                                var t = e.guildId,
                                    n = e.channelId,
                                    r = e.sessionId,
                                    i = e.trackedFeedItems,
                                    a = e.isForcedFlush,
                                    u = [],
                                    l = [],
                                    s = !0,
                                    c = !1,
                                    f = void 0;
                                try {
                                    for (var d, p = Object.keys(i)[Symbol.iterator](); !(s = (d = p.next()).done); s = !0) {
                                        var E = d.value,
                                            O = i[E].computeSeenTimeDestructive(a);
                                        if (O > 0) {
                                            u.push(E);
                                            l.push(O)
                                        }
                                    }
                                } catch (e) {
                                    c = !0;
                                    f = e
                                } finally {
                                    try {
                                        s || null == p.return || p.return()
                                    } finally {
                                        if (c) throw f
                                    }
                                }
                                0 !== u.length && (0, o.qs)({
                                    guildId: t,
                                    channelId: n,
                                    sessionId: r,
                                    postIds: u,
                                    additionalTimes: l
                                })
                            }(i)
                        }
                    };
                    r.guildId = i;
                    r.channelId = u;
                    r.sessionId = (0, a.WW)(u);
                    return r
                }
                return n
            }(i.zQ)
        },
        888236: (e, t, n) => {
            "use strict";
            n.d(t, {
                rj: () => I,
                eM: () => v,
                rK: () => b,
                I1: () => R
            });
            var r = n(281110),
                i = n(744564),
                o = n(396043),
                a = n(664625),
                u = n(21372),
                l = n(567403),
                s = n(652591),
                c = n(661123),
                f = n(404741),
                d = n(322008),
                p = n(2590),
                E = n(589677);

            function O(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            O(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            O(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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

            function h(e) {
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

            function y(e, t) {
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

            function I(e) {
                s.default.track(p.rMx.GUILD_ONBOARDING_LOADED, y(h({}, (0, o.hH)(e)), {
                    has_new_prompts: !1,
                    number_of_prompts: 0
                }))
            }

            function v(e) {
                i.Z.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: e
                });
                return r.ZP.get({
                    url: p.ANM.GUILD_ONBOARDING(e)
                }).then((function(t) {
                    var n = t.body,
                        r = (0, d.cf)(n);
                    return i.Z.dispatch(h({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e
                    }, r)).then((function() {
                        return r.prompts
                    }))
                }), (function(t) {
                    i.Z.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                        guildId: e
                    });
                    return t
                }))
            }

            function b(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = _((function(e) {
                    var t, n, r, i, o, s, d, O;
                    return g(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                n = a.default.getId();
                                i = (0, c.yE)(null !== (r = null === (t = u.ZP.getMember(e, n)) || void 0 === t ? void 0 : t.flags) && void 0 !== r ? r : 0, E.q.COMPLETED_ONBOARDING);
                                if (null == (o = l.Z.getGuild(e)) || !o.hasFeature(p.oNc.GUILD_ONBOARDING)) return [2, Promise.resolve()];
                                s = f.Z.shouldFetchPrompts(e);
                                d = f.Z.getOnboardingPrompts(e);
                                if (!s && d.length > 0) {
                                    if (d.every((function(e) {
                                            return !e.inOnboarding
                                        }))) {
                                        A(e);
                                        return [2, Promise.resolve()]
                                    }
                                    i || R(e);
                                    return [2, Promise.resolve()]
                                }
                                return [4, v(e)];
                            case 1:
                                O = _.sent();
                                if (Array.isArray(O) && O.every((function(e) {
                                        return !e.inOnboarding
                                    }))) {
                                    A(e);
                                    return [2, Promise.resolve()]
                                }
                                i || R(e);
                                return [2, O]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                i.Z.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: e
                })
            }

            function A(e) {
                s.default.track(p.rMx.GUILD_ONBOARDING_STEP_VIEWED, y(h({}, (0, o.hH)(e)), {
                    step: -2,
                    required: !0
                }));
                s.default.track(p.rMx.GUILD_ONBOARDING_STEP_COMPLETED, y(h({}, (0, o.hH)(e)), {
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                }))
            }
        },
        322008: (e, t, n) => {
            "use strict";
            n.d(t, {
                iU: () => c,
                NE: () => f,
                NO: () => d,
                YW: () => p,
                M$: () => E,
                qm: () => O,
                b3: () => _,
                md: () => S,
                X: () => h,
                fY: () => y,
                l7: () => u,
                FN: () => l,
                Un: () => s,
                RF: () => g,
                ae: () => I,
                yZ: () => v,
                dr: () => b,
                cf: () => R,
                Oq: () => A
            });
            var r = n(110251),
                i = n.n(r),
                o = n(473708);

            function a(e, t) {
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
            var u, l, s, c = 100,
                f = 50,
                d = 100,
                p = 15,
                E = 12,
                O = 50,
                _ = 4,
                S = 7,
                h = 5,
                y = 13;
            ! function(e) {
                e[e.CUSTOMIZE = 0] = "CUSTOMIZE";
                e[e.BROWSE = 1] = "BROWSE"
            }(u || (u = {}));
            ! function(e) {
                e[e.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE";
                e[e.DROPDOWN = 1] = "DROPDOWN"
            }(l || (l = {}));
            ! function(e) {
                e[e.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT";
                e[e.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
            }(s || (s = {}));

            function g(e) {
                if (e.options.length > 0) return !1;
                var t = I(),
                    n = (t.id, a(t, ["id"])),
                    r = (e.id, a(e, ["id"]));
                return i()(n, r)
            }

            function I() {
                return {
                    id: String(Date.now()),
                    title: o.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: l.MULTIPLE_CHOICE
                }
            }

            function v(e) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: e,
                    type: l.MULTIPLE_CHOICE
                }
            }

            function b(e) {
                return {
                    id: e.id,
                    options: e.options.map((function(e) {
                        var t, n, r;
                        return {
                            id: e.id,
                            channel_ids: e.channelIds,
                            role_ids: e.roleIds,
                            emoji: e.emoji,
                            emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                            emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
                            emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated,
                            title: e.title,
                            description: e.description
                        }
                    })),
                    title: e.title,
                    single_select: e.singleSelect,
                    disabled: e.disabled,
                    required: e.required,
                    in_onboarding: e.inOnboarding,
                    type: e.type
                }
            }

            function T(e) {
                var t;
                return {
                    id: e.id,
                    options: e.options.map((function(e) {
                        return {
                            id: e.id,
                            channelIds: e.channel_ids,
                            roleIds: e.role_ids,
                            emoji: e.emoji,
                            title: e.title,
                            description: null !== (t = e.description) && void 0 !== t ? t : ""
                        }
                    })),
                    title: e.title,
                    singleSelect: e.single_select,
                    disabled: e.disabled,
                    required: e.required,
                    inOnboarding: e.in_onboarding,
                    type: e.type
                }
            }

            function R(e) {
                var t, n, r;
                return {
                    prompts: e.prompts.map(T),
                    defaultChannelIds: e.default_channel_ids,
                    responses: null !== (t = e.responses) && void 0 !== t ? t : [],
                    mode: e.mode,
                    enabled: e.enabled,
                    onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
                    onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
                    belowRequirements: e.below_requirements
                }
            }

            function A(e) {
                return null == e || null == e.id && null == e.name
            }
        },
        404741: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => L
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                a = n(744564),
                u = n(861426),
                l = n(61209),
                s = n(53452),
                c = n(102921),
                f = n(734260),
                d = n(189827),
                p = n(322008);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
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

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
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

            function y(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var I = function(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var b = {},
                T = {},
                R = {},
                A = !1;

            function m(e, t, n) {
                return e.map((function(e) {
                    return function(e, t, n) {
                        for (var r = !1, i = [], o = 0; o < e.options.length; o++) {
                            var a = e.options[o],
                                u = null == n[a.id];
                            u && (r = !0);
                            i.push(h(S({}, a), {
                                isUnseen: u
                            }))
                        }
                        return h(S({}, e), {
                            options: i,
                            hasNewAnswers: r,
                            isNew: null == t[e.id]
                        })
                    }(e, t, n)
                }))
            }

            function P(e) {
                var t, n, r, i, o, a, u, l, s, c = e.guildId,
                    f = e.updates,
                    d = null !== (o = null !== (i = f.onboardingPromptsSeen) && void 0 !== i ? i : null === (t = b[c]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== o ? o : {},
                    p = null !== (u = null !== (a = f.onboardingResponsesSeen) && void 0 !== a ? a : null === (n = b[c]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== u ? u : {},
                    E = m(null !== (s = null !== (l = f.prompts) && void 0 !== l ? l : null === (r = b[c]) || void 0 === r ? void 0 : r.prompts) && void 0 !== s ? s : [], d, p);
                b[c] = h(S({}, b[c], f), {
                    prompts: E
                })
            }

            function N(e, t) {
                if (null != T[e]) {
                    var n = {};
                    Object.keys(T[e]).forEach((function(r) {
                        !t.includes(r) && T[e][r] ? n[r] = !0 : t.includes(r) && !1 === T[e][r] && (n[r] = !1)
                    }));
                    T[e] = n;
                    var r = t.filter((function(e) {
                        return null == n[e] || !0 === n[e]
                    }));
                    Object.keys(n).forEach((function(e) {
                        !0 !== n[e] || t.includes(e) || r.push(e)
                    }));
                    b[e] = h(S({}, b[e]), {
                        responses: r
                    })
                }
            }
            var C = [],
                M = [],
                D = [],
                w = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && g(e, t)
                    }(n, e);
                    var t = v(n);

                    function n() {
                        E(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(l.Z, d.ZP, u.Z)
                    };
                    r.getOnboardingPromptsForOnboarding = function(e) {
                        var t, n;
                        return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : C
                    };
                    r.getOnboardingPrompts = function(e) {
                        var t, n;
                        return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : C
                    };
                    r.getOnboardingResponses = function(e) {
                        var t, n;
                        if (u.Z.isFullServerPreview(e)) {
                            var r;
                            return Array.from(null !== (r = u.Z.getOnboardingResponses(e)) && void 0 !== r ? r : M)
                        }
                        return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== n ? n : M
                    };
                    r.getSelectedOptions = function(e) {
                        var t = this.getOnboardingResponses(e);
                        return this.getOnboardingPrompts(e).map((function(e) {
                            return e.options
                        })).flat().filter((function(e) {
                            return t.includes(e.id)
                        }))
                    };
                    r.getOnboardingResponsesForPrompt = function(e, t) {
                        var n = b[e];
                        if (null == n) return M;
                        var r = n.prompts.find((function(e) {
                            return e.id === t
                        }));
                        return null == r ? M : i().intersection(r.options.map((function(e) {
                            return e.id
                        })), this.getOnboardingResponses(e))
                    };
                    r.getEnabledOnboardingPrompts = function(e) {
                        var t, n = b[e];
                        if (u.Z.isFullServerPreview(e)) {
                            var r;
                            return null !== (r = null == n ? void 0 : n.prompts) && void 0 !== r ? r : C
                        }
                        return null != n && n.enabled && null !== (t = n.prompts) && void 0 !== t ? t : C
                    };
                    r.getDefaultChannelIds = function(e) {
                        var t, n;
                        return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : D
                    };
                    r.getEnabled = function(e) {
                        var t, n;
                        return u.Z.isFullServerPreview(e) ? null != b[e] : null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
                    };
                    r.getOnboardingPrompt = function(e) {
                        return Object.values(b).map((function(e) {
                            return e.prompts
                        })).flat().find((function(t) {
                            return t.id === e
                        }))
                    };
                    r.isLoading = function() {
                        return A
                    };
                    r.shouldFetchPrompts = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z.Millis.HOUR;
                        if (A) return !1;
                        var n = R[e];
                        return null == n || Date.now() - n > t
                    };
                    r.getPendingResponseOptions = function(e) {
                        return T[e]
                    };
                    r.ackIdForGuild = function(e) {
                        var t = this.getEnabledOnboardingPrompts(e),
                            n = "0";
                        t.forEach((function(e) {
                            e.options.forEach((function(e) {
                                c.Z.compare(e.id, n) > 0 && (n = e.id)
                            }));
                            c.Z.compare(e.id, n) > 0 && (n = e.id)
                        }));
                        return n
                    };
                    r.lastFetchedAt = function(e) {
                        return R[e]
                    };
                    r.isAdvancedMode = function(e) {
                        var t;
                        return null != e && (null === (t = b[e]) || void 0 === t ? void 0 : t.mode) === p.Un.ONBOARDING_ADVANCED
                    };
                    return n
                }(o.ZP.Store);
            w.displayName = "GuildOnboardingPromptsStore";
            const L = new w(a.Z, {
                CONNECTION_OPEN: function() {
                    A = !1;
                    b = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    A = !0
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.prompts,
                        r = e.defaultChannelIds,
                        i = e.enabled,
                        o = e.responses,
                        a = e.onboardingPromptsSeen,
                        u = e.onboardingResponsesSeen,
                        l = e.mode,
                        s = e.belowRequirements;
                    A = !1;
                    var c = d.ZP.getOnboardingStatus(t) === d.uX.READY,
                        p = m(n, a, u);
                    b[t] = {
                        enabled: i,
                        mode: l,
                        belowRequirements: s,
                        prompts: p,
                        onboardingPrompts: p.filter((function(e) {
                            return e.inOnboarding
                        })),
                        defaultChannelIds: r.filter((function(e) {
                            return (0, f.s)(t, e)
                        })),
                        responses: c ? [] : o,
                        onboardingPromptsSeen: a,
                        onboardingResponsesSeen: u
                    };
                    c || N(t, o);
                    R[t] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    A = !1
                },
                GUILD_ONBOARDING_SELECT_OPTION: function(e) {
                    var t = e.guildId,
                        n = e.optionId,
                        r = e.selected,
                        o = e.removedOptionIds;
                    if (u.Z.isFullServerPreview(t)) return !0;
                    if (null == b[t]) return !1;
                    null != o && o.length > 0 && i().pullAll(b[t].responses, o);
                    r ? b[t].responses.push(n) : i().pull(b[t].responses, n);
                    null == T[t] && (T[t] = {});
                    T[t][n] = r;
                    null != o && o.forEach((function(e) {
                        return T[t][e] = !1
                    }));
                    T[t] = S({}, T[t]);
                    return !0
                },
                GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.options,
                        r = e.prompts_seen,
                        i = e.options_seen;
                    N(t, n);
                    var o = b[t];
                    if (null == o) return !1;
                    var a = m(o.prompts, r, i);
                    b[t] = h(S({}, o), {
                        prompts: a,
                        onboardingPrompts: a.filter((function(e) {
                            return e.inOnboarding
                        })),
                        onboardingPromptsSeen: r,
                        onboardingResponsesSeen: i
                    })
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: P,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: P,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.channelIds;
                    b[t] = h(S({}, b[t]), {
                        defaultChannelIds: n
                    })
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
                    var t = e.guildId,
                        n = e.mode,
                        r = b[t];
                    null != r && (r.mode = n)
                }
            })
        },
        189651: (e, t, n) => {
            "use strict";
            n.d(t, {
                iD: () => b,
                Zm: () => T,
                mL: () => R,
                zS: () => m,
                og: () => P,
                aq: () => N
            });
            var r = n(744564),
                i = n(396043),
                o = n(784426),
                a = n(61209),
                u = n(5544),
                l = n(21372),
                s = n(567403),
                c = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                E = n(861426),
                O = n(557177),
                _ = n(2590),
                S = n(897196);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function g(e) {
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

            function I(e, t) {
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

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                p.default.track(_.rMx.VIEW_AS_ROLES_SELECTED, I(g({
                    num_roles: Object.keys(t.roles).length
                }, (0, i.hH)(e)), {
                    is_viewing_as_member: t.type === O.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                });
                A(e)
            }

            function T(e, t) {
                var n = E.Z.getData(e);
                if (null != n && n.type === t.type) {
                    p.default.track(_.rMx.VIEW_AS_ROLES_SELECTED, I(g({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(e)), {
                        is_viewing_as_member: n.type === O.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: g({}, n, t)
                    });
                    A(e)
                }
            }

            function R(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                var t = f.Z.getChannelId(e),
                    n = a.Z.getChannel(t);
                if (!(null != t && (0, S.AB)(t)) && !c.Z.can(_.Plq.VIEW_CHANNEL, n)) {
                    var r = u.ZP.getDefaultChannel(e);
                    null != r && (0, o.uL)(_.Z5c.CHANNEL(e, r.id))
                }
            }

            function m(e, t, n) {
                var r = new Set(d.Z.getOptedInChannels(e));
                t.forEach((function(e) {
                    return r.add(e)
                }));
                n.forEach((function(e) {
                    return r.delete(e)
                }));
                T(e, {
                    type: O.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function P(e, t) {
                var n = s.Z.getGuild(e);
                if (null != n) {
                    ! function(e, t) {
                        var n = v(u.ZP.getSelectableChannelIds(e)).concat(v(u.ZP.getVocalChannelIds(e))),
                            r = Array.from(t);
                        u.ZP.addConditionalChangeListener((function() {
                            var t = l.ZP.getSelfMember(e);
                            if (null == t) return !1;
                            if (r.some((function(e) {
                                    return !t.roles.includes(e)
                                }))) return !0;
                            var i = v(u.ZP.getSelectableChannelIds(e)).concat(v(u.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !n.includes(e)
                            }));
                            i.length > 0 && m(e, i, []);
                            return !1
                        }))
                    }(e, t);
                    var r = {};
                    t.forEach((function(e) {
                        return r[e] = n.roles[e]
                    }));
                    T(e, {
                        type: O.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function N(e, t) {
                T(e, g({
                    type: O.z.NEW_MEMBER
                }, t))
            }
        },
        974771: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ui: () => o,
                p$: () => u
            });
            var r = n(260561),
                i = (0, r.B)({
                    kind: "guild",
                    id: "2023-03_guild_media_channel",
                    label: "Media Channel",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables guild to create a media channel",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function o(e) {
                var t, n = i.useExperiment({
                    guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    location: "96e84c_1"
                }, {
                    autoTrackExposure: !0
                }).enabled;
                return null != (null == e ? void 0 : e.id) && n
            }
            var a = (0, r.B)({
                kind: "user",
                id: "2023-04_guild_media_channel_post_preview_embed_users",
                label: "Guild Role Subscription Users",
                defaultConfig: {
                    enabledForUser: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables for users Guild Media Post Preview Embeds",
                    config: {
                        enabledForUser: !0
                    }
                }]
            });

            function u() {
                return a.useExperiment({
                    location: "96e84c_2"
                }, {
                    autoTrackExposure: !0
                }).enabledForUser
            }
        },
        804808: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => s,
                k$: () => f
            });
            n(940007);
            var r = n(883064),
                i = n(473291),
                o = n(2590);
            var a = new Set([o.hBH.IMAGE, o.hBH.GIFV]),
                u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function l(e, t, n) {
                n.toAST;
                var r = n.hideSimpleEmbedContent,
                    o = void 0 === r || r,
                    u = n.formatInline,
                    l = void 0 !== u && u,
                    s = n.postProcessor,
                    c = !1,
                    f = e(t.content, !0, function(e, t) {
                        return {
                            allowLinks: null != e.webhookId || Boolean(t.allowLinks),
                            allowEmojiLinks: null != e.webhookId,
                            channelId: e.channel_id,
                            messageId: e.id,
                            mentionChannels: e.mentionChannels,
                            isInteracting: !!t.isInteracting,
                            formatInline: Boolean(t.formatInline),
                            noStyleAndInteraction: Boolean(t.noStyleAndInteraction),
                            allowHeading: Boolean(t.allowHeading),
                            allowList: Boolean(t.allowList),
                            previewLinkTarget: Boolean(t.previewLinkTarget),
                            disableAnimatedEmoji: Boolean(t.disableAnimatedEmoji),
                            disableAutoBlockNewlines: !0,
                            muted: !1
                        }
                    }(t, n), (function(e, n) {
                        Array.isArray(e) || (e = [e]);
                        o && (e = function(e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            var n = e[0],
                                r = t[0];
                            if ("link" === n.type && a.has(r.type) && (0, i.dY)(r)) return [];
                            return e
                        }(e, t.embeds));
                        l || (e = function(e, t) {
                            if (t) return d(e);
                            "paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content));
                            return e
                        }(e, n));
                        0;
                        c = function(e, t) {
                            if (t) return p(e);
                            if ("paragraph" === e[0].type && e[0].content instanceof Array) return p(e[0].content);
                            return !1
                        }(e, n);
                        l && (e = E(e));
                        null != s && (e = s(e, n));
                        return e
                    }));
                return {
                    hasSpoilerEmbeds: c,
                    content: f
                }
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? r.Z.parseInlineReply : r.Z.parse;
                return l(n, e, t)
            }

            function c(e, t, n, r) {
                return e(t, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: n,
                    disableAnimatedEmoji: !1,
                    channelId: r,
                    muted: !1
                }, (function(e) {
                    Array.isArray(e) || (e = [e]);
                    return e
                }))
            }

            function f(e, t, n) {
                return c(r.Z.parseAutoModerationSystemMessage, e, t, n)
            }

            function d(e) {
                if (e.some((function(e) {
                        return "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim())
                    }))) return e;
                var t = 0;
                e.forEach((function(e) {
                    "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type || (t += 1);
                    if (t > 30) return !1
                }));
                if (t > 30) return e;
                e.forEach((function(e) {
                    e.jumboable = !0
                }));
                return e
            }

            function p(e) {
                return e.some((function(e) {
                    return "spoiler" === e.type && Array.isArray(e.content) && e.content.some((function(e) {
                        return "link" === e.type
                    }))
                }))
            }

            function E(e) {
                e.forEach((function(e) {
                    u.has(e.type) && null != e.content && (Array.isArray(e.content) ? E(e.content) : e.content = e.content.replace(/\n/g, " "))
                }));
                return e
            }
        },
        239620: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => o,
                xJ: () => a
            });
            var r, i = n(120415),
                o = null;

            function a() {
                return (0, i.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        148318: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l,
                m: () => s
            });
            var r = n(202351),
                i = n(567403),
                o = n(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
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
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                var t, n = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z], 1),
                    r = n[0];
                return Boolean(null === (t = r.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(o.oNc.COMMUNITY))
            }

            function s(e) {
                return (0, r.e7)([i.Z], (function() {
                    return l(e, [i.Z])
                }), [e])
            }
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => le
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                a = n(202351),
                u = n(744564),
                l = n(656793),
                s = n(382060),
                c = n(61209),
                f = n(567403),
                d = n(179913),
                p = n(715107),
                E = n(536945),
                O = n(487685),
                _ = n(102921);

            function S(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = _.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var h = n(897196);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function T(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function R(e, t) {
                R = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return R(e, t)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var P = {},
                N = {},
                C = {},
                M = {},
                D = {},
                w = {},
                L = null,
                j = {};

            function U() {
                P = {};
                D = {};
                N = {};
                C = {};
                M = {};
                L = p.Z.getChannelId();
                for (var e in j) clearTimeout(j[e]);
                j = {};
                E.Z.forEachGuild((function(e) {
                    G(e)
                }));
                k()
            }

            function Z(e) {
                delete P[e];
                delete D[e];
                delete N[e];
                delete C[e];
                delete M[e];
                G(e);
                for (var t in C[e]) F(e, t)
            }

            function G(e) {
                var t = E.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        Q(r);
                        var i = c.Z.getChannel(r);
                        if (null != i) {
                            var o = O.Z.joinTimestamp(r);
                            if (null != o) {
                                var a = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    u = q(i),
                                    l = u.isUnread,
                                    s = u.isRelevant,
                                    f = u.isTimedRelevant;
                                J(P, i, a, !1);
                                J(D, i, s ? a : null, !1);
                                J(N, i, l ? a : null, !1);
                                f && X(i, !0)
                            } else {
                                J(C, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                J(M, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function k() {
                w = {};
                for (var e in C)
                    for (var t in C[e]) F(e, t)
            }

            function x(e) {
                var t = c.Z.getBasicChannel(e);
                null != t && s.uC.has(t.type) && F(t.guild_id, t.id)
            }

            function F(e, t) {
                var n = c.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == w[e] && (w[e] = {});
                    w[e][t] = 0;
                    if (null != C[e] && null != C[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var a = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? a = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (a = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(a)
                            }
                            for (var u in C[e][t]) t === L ? d.ZP.isNewForumThread(u, t, r) && w[e][t]++ : o.default.compare(u, i) > 0 && !d.ZP.hasOpenedThread(u) && w[e][t]++
                        }
                    }
                }
            }

            function H(e, t, n) {
                if (null == t) return !1;
                var r = c.Z.getChannel(n),
                    i = O.Z.joinTimestamp(n);
                if (null != r && E.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            a = q(r),
                            u = a.isUnread,
                            l = a.isRelevant,
                            s = a.isTimedRelevant;
                        J(P, r, o, !0);
                        J(D, r, l ? o : null, !0);
                        J(N, r, u ? o : null, !0);
                        J(C, r, null, !0);
                        J(M, r, null, !0);
                        X(r, s)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        J(P, r, null, !0);
                        J(N, r, null, !0);
                        J(D, r, null, !0);
                        J(C, r, r, !0);
                        J(M, r, f ? r : null, !0);
                        Q(r.id)
                    }
                    F(e, t)
                } else {
                    $(P, e, t, n);
                    $(D, e, t, n);
                    $(N, e, t, n);
                    $(C, e, t, n);
                    $(M, e, t, n);
                    Q(n);
                    F(e, t)
                }
            }

            function B(e) {
                return H(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function V(e, t) {
                if (null == t) return !1;
                var n = P[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = C[e],
                    a = null == o ? null : o[t];
                if (null != a)
                    for (var u in a)
                        if (a[u].isNSFW()) return !0;
                return !1
            }

            function z(e) {
                var t = c.Z.getChannel(e.id);
                return !(null == t || !E.Z.isActive(e.guildId, t.parent_id, e.id)) && H(t.guild_id, t.parent_id, t.id)
            }

            function Y(e) {
                var t = c.Z.getChannel(e.channelId);
                if (null == t) W();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!s.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = w[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            F(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(P, t)) {
                        var o = q(t),
                            a = o.isUnread,
                            u = o.isRelevant;
                        X(t, o.isTimedRelevant);
                        var l = ee(N, t),
                            f = ee(D, t);
                        if (a === l && u === f) return !1;
                        var p = P[n][r][t.id],
                            E = u ? p : null;
                        J(N, t, a ? p : null, !0);
                        J(D, t, E, !0);
                        F(n, r)
                    } else {
                        var O = ee(M, t),
                            _ = d.ZP.isForumPostUnread(t.id);
                        if (_ === O) return !1;
                        J(M, t, _ ? t : null, !0)
                    }
                }
            }

            function W() {
                N = {};
                D = {};
                for (var e in P)
                    for (var t in P[e])
                        for (var n in P[e][t]) {
                            var r = P[e][t][n],
                                i = q(r.channel),
                                o = i.isUnread,
                                a = i.isRelevant,
                                u = i.isTimedRelevant;
                            o && J(N, r.channel, r, !1);
                            a && J(D, r.channel, r, !1);
                            X(r.channel, u)
                        }
                M = {};
                for (var l in C)
                    for (var s in C[l])
                        for (var c in C[l][s]) {
                            var f = C[l][s][c];
                            d.ZP.isForumPostUnread(c) && J(M, f, f, !1)
                        }
                k()
            }

            function K() {
                var e = L;
                if ((L = p.Z.getChannelId()) === e) return !1;
                x(e);
                x(L)
            }

            function q(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!O.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(h.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && S(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function X(e, t) {
                Q(e.id);
                t && function(e) {
                    j[e.id] = setTimeout((function() {
                        var t = c.Z.getChannel(e.id);
                        null != t && u.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), S(e) - Date.now() + 1)
                }(e)
            }

            function Q(e) {
                if (e in j) {
                    clearTimeout(j[e]);
                    delete j[e]
                }
            }

            function J(e, t, n, r) {
                var o = t.guild_id,
                    a = t.parent_id,
                    u = t.id;
                if (null != o && null != a && null != u) {
                    o in e || (e[o] = {});
                    a in e[o] || (e[o][a] = {});
                    r && (e[o] = b(v({}, e[o]), g({}, a, v({}, e[o][a]))));
                    if (null === n) {
                        delete e[o][a][u];
                        i().isEmpty(e[o][a]) && delete e[o][a]
                    } else e[o][a][u] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = b(v({}, e[t]), g({}, n, v({}, e[t][n])));
                    delete e[t][n][r];
                    i().isEmpty(e[t][n]) && delete e[t][n]
                }
            }

            function ee(e, t) {
                return te(e, t.guild_id, t.parent_id, t.id)
            }

            function te(e, t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            var ne = {},
                re = {},
                ie = {},
                oe = {},
                ae = {},
                ue = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && R(e, t)
                    }(n, e);
                    var t = m(n);

                    function n() {
                        y(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(E.Z, c.Z, O.Z, d.ZP);
                        this.syncWith([p.Z], K)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in N && t in N[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in C && null !== (n = C[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in P && null !== (n = P[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = P[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = N[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = D[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = C[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = M[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = w[e]) && void 0 !== t ? t : ae
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in P)
                            if (n === e || null == e)
                                for (var r in P[n])
                                    for (var i in P[n][r]) t.push(P[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = w[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, a;
                        return i().size(null !== (o = null === (n = P[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (a = null === (r = C[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {})
                    };
                    return n
                }(a.ZP.Store);
            ue.displayName = "ActiveJoinedThreadsStore";
            const le = new ue(u.Z, {
                CONNECTION_OPEN: U,
                OVERLAY_INITIALIZE: U,
                THREAD_LIST_SYNC: function(e) {
                    return Z(e.guildId)
                },
                LOAD_THREADS_SUCCESS: U,
                LOAD_ARCHIVED_THREADS_SUCCESS: U,
                SEARCH_FINISH: U,
                GUILD_CREATE: function(e) {
                    return Z(e.guild.id)
                },
                GUILD_DELETE: U,
                CURRENT_USER_UPDATE: U,
                THREAD_CREATE: B,
                THREAD_UPDATE: B,
                THREAD_DELETE: B,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value;
                            if (u.isNSFW() !== V(u.guild_id, u.parent_id)) {
                                U();
                                return
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
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel,
                        n = !1;
                    if (null != t.guild_id && null != t.parent_id) {
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in N && t.parent_id in N[t.guild_id]) {
                            delete N[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in D && t.parent_id in D[t.guild_id]) {
                            Object.keys(D[t.guild_id][t.parent_id]).forEach(Q);
                            delete D[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in M && t.parent_id in M[t.guild_id]) {
                            delete M[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && F(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: z,
                THREAD_MEMBERS_UPDATE: z,
                LOAD_MESSAGES_SUCCESS: Y,
                MESSAGE_CREATE: Y,
                MESSAGE_DELETE: Y,
                MESSAGE_DELETE_BULK: Y,
                MESSAGE_ACK: Y,
                CHANNEL_ACK: Y,
                CHANNEL_LOCAL_ACK: Y,
                CHANNEL_SELECT: function(e) {
                    Y(e);
                    K()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && W()
                },
                WINDOW_FOCUS: W,
                UPDATE_CHANNEL_DIMENSIONS: W,
                DRAWER_OPEN: W,
                DRAWER_CLOSE: W,
                BULK_ACK: W
            })
        },
        879116: (e, t, n) => {
            "use strict";
            n.d(t, {
                lE: () => a,
                WE: () => l
            });
            var r = n(102921),
                i = n(379364),
                o = n(473708),
                a = function(e, t) {
                    if (null == e || e < 0) return "0";
                    var n = function(e) {
                        return r.Z.compare("992549565104128000", e) > -1
                    }(t);
                    return (null == t || n) && e >= i.vw ? "50+" : e >= i.M3 ? "100k+" : "".concat(e)
                },
                u = function(e, t, n) {
                    var r = a(e, n);
                    return "0" === r ? o.Z.Messages.SEE_THREAD : t.format({
                        count: r
                    })
                },
                l = function(e, t) {
                    return u(e, o.Z.Messages.THREAD_MESSAGE_COUNT, t)
                }
        },
        52317: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(496486),
                i = n.n(r),
                o = n(281110),
                a = n(914716),
                u = n(296602),
                l = n(968968),
                s = n(61209),
                c = n(2590);

            function f(e, t, n, r, i, o, a) {
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
                            f(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            f(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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

            function h(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
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
                },
                b = {},
                T = new u.Z("UserGuildSettingsManager"),
                R = 0;

            function A() {
                b = _({}, l.Z.getCollapsedCategories())
            }

            function m() {
                if (!__OVERLAY__) {
                    clearTimeout(R);
                    R = setTimeout((function() {
                        return P()
                    }), 15e3)
                }
            }

            function P(e, t) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = d((function(e, t) {
                    return v(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, C(null != t ? E({}, null != e ? e : c.ME, t) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function C(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = d((function(e) {
                    var t, n, r, a, u, f, d;
                    return v(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(R);
                                t = 0 !== Object.keys(e).length;
                                n = l.Z.getCollapsedCategories();
                                r = D();
                                for (var E in r)
                                    if (null != (a = s.Z.getChannel(E)) && null != a.guild_id) {
                                        a.guild_id in e || (e[a.guild_id] = {});
                                        null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {});
                                        e[a.guild_id].channel_overrides[a.id] = S(_({}, e[a.guild_id].channel_overrides[a.id]), {
                                            collapsed: a.id in n
                                        });
                                        t = !0
                                    } if (!t) return [2];
                                b = _({}, n);
                                u = i().map(e, (function(e, t) {
                                    return {
                                        guildId: t,
                                        updates: e,
                                        attempts: 0
                                    }
                                }));
                                p.label = 1;
                            case 1:
                                if (!(u.length > 0)) return [3, 8];
                                if ((f = u.shift()).guildId === c.I_8) return [3, 1];
                                p.label = 2;
                            case 2:
                                p.trys.push([2, 5, , 7]);
                                return [4, o.ZP.patch({
                                    url: c.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, w(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                T.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && u.push(f);
                                return [4, w(5e3)];
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

            function D() {
                var e = {},
                    t = l.Z.getCollapsedCategories();
                for (var n in t) t[n] !== b[n] && (e[n] = !0);
                for (var r in b) t[r] !== b[r] && (e[r] = !0);
                return e
            }

            function w(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e + Math.ceil(e * Math.random()))
                }))
            }

            function L() {
                b = _({}, l.Z.getCollapsedCategories())
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
                    t && y(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: m,
                        CATEGORY_EXPAND: m,
                        CATEGORY_COLLAPSE_ALL: m,
                        CATEGORY_EXPAND_ALL: m,
                        POST_CONNECTION_OPEN: A,
                        USER_GUILD_SETTINGS_FULL_UPDATE: L
                    };
                    e.saveUserGuildSettings = P;
                    e.saveUserGuildSettingsBulk = C;
                    return e
                }
                return n
            }(a.Z))
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => o,
                dp: () => a,
                X7: () => u,
                E1: () => l,
                f7: () => s,
                HE: () => c,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
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
            var o, a;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(o || (o = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(a || (a = {}));
            var u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                l = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(e, t, n) {
                    return i(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                s = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        424158: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(730381),
                i = n.n(r),
                o = n(169376);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var p = function(e) {
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

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).code = e.code || "";
                    r.temporary = e.temporary || !1;
                    r.revoked = e.revoked || !1;
                    r.uses = e.uses || 0;
                    r.maxUses = e.maxUses || 0;
                    r.maxAge = e.maxAge || 0;
                    r.createdAt = e.createdAt || new Date;
                    r.channel = e.channel;
                    r.guild = e.guild;
                    r.inviter = e.inviter || null;
                    r.targetType = e.targetType || null;
                    r.targetUser = e.targetUser || null;
                    r.targetApplication = e.targetApplication || null;
                    r.type = e.type || null;
                    r.flags = e.flags || 0;
                    return r
                }
                var r = n.prototype;
                r.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (i()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                r.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return i()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                r.toString = function() {
                    return this.code
                };
                n.createFromServer = function(e) {
                    var t;
                    return new n(l(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return n
            }(o.Z)
        },
        968968: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                i = n(744564),
                o = n(72580),
                a = n(61209),
                u = n(837067),
                l = n(5544),
                s = n(2590);

            function c(e, t) {
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
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var S = {},
                h = 0;

            function y() {
                h += 1
            }

            function g(e) {
                if (null == S[e]) return !1;
                delete S[e]
            }
            var I = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(a.Z, u.Z);
                    this.removeChangeListener(y);
                    this.addChangeListener(y);
                    S = null != e ? e : {}
                };
                r.getState = function() {
                    return S
                };
                r.isCollapsed = function(e) {
                    return !(null == e || "null" === e || !S[e]) && S[e]
                };
                r.getCollapsedCategories = function() {
                    return S
                };
                ! function(e, t, n) {
                    t && f(e.prototype, t);
                    n && f(e, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return h
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            I.displayName = "CategoryCollapseStore";
            I.persistKey = "collapsedCategories";
            const v = new I(i.Z, {
                CONNECTION_OPEN: function(e) {
                    e.userGuildSettings.partial || (S = {});
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = e.userGuildSettings.entries[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var a = i.value;
                            if (null != a.channel_overrides) {
                                var u = !0,
                                    l = !1,
                                    s = void 0;
                                try {
                                    for (var c, f = a.channel_overrides[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                                        var d = c.value;
                                        d.collapsed ? S[d.channel_id] = !0 : delete S[d.channel_id]
                                    }
                                } catch (e) {
                                    l = !0;
                                    s = e
                                } finally {
                                    try {
                                        u || null == f.return || f.return()
                                    } finally {
                                        if (l) throw s
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    var t = e.userGuildSettings,
                        n = new Set(t.map((function(e) {
                            return e.guild_id
                        })).filter(o.lm));
                    for (var r in S) {
                        var i = a.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete S[i.id]
                    }
                    var u = !0,
                        l = !1,
                        s = void 0;
                    try {
                        for (var c, f = t[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                            var d = c.value,
                                p = !0,
                                E = !1,
                                O = void 0;
                            try {
                                for (var _, h = d.channel_overrides[Symbol.iterator](); !(p = (_ = h.next()).done); p = !0) {
                                    var y = _.value;
                                    y.collapsed && (S[y.channel_id] = !0)
                                }
                            } catch (e) {
                                E = !0;
                                O = e
                            } finally {
                                try {
                                    p || null == h.return || h.return()
                                } finally {
                                    if (E) throw O
                                }
                            }
                        }
                    } catch (e) {
                        l = !0;
                        s = e
                    } finally {
                        try {
                            u || null == f.return || f.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(e) {
                    var t = e.id;
                    if (S[t]) return !1;
                    S[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    return g(e.id)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    var t = e.guildId;
                    l.ZP.getChannels(t)[s.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var t = e.channel;
                        "null" !== t.id && (S[t.id] = !0)
                    }))
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    var t = e.guildId;
                    l.ZP.getChannels(t)[s.d4z.GUILD_CATEGORY].forEach((function(e) {
                        var t = e.channel;
                        delete S[t.id]
                    }))
                },
                CHANNEL_DELETE: function(e) {
                    return g(e.channel.id)
                }
            })
        },
        877475: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => M
            });
            var r = n(202351),
                i = n(744564),
                o = n(777158),
                a = n(419051),
                u = n(664625),
                l = n(61209),
                s = n(5544),
                c = n(567403),
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

            function E(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
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
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var h = null,
                y = {},
                g = null;
            var I = {
                _categories: [],
                null: []
            };

            function v(e, t) {
                e.index = t
            }

            function b(e) {
                var t = s.ZP.getChannels(e),
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
                t[s.sH].forEach(r);
                t[s.Zb].forEach(r);
                (0, o.Z)(n._categories, n).forEach(v);
                y[e] = n;
                return n
            }

            function T() {
                y = {};
                null != h && b(h)
            }

            function R(e) {
                var t = e.guild.id;
                y[t] = void 0;
                h === t && b(t)
            }

            function A(e) {
                var t = e.channel.guild_id;
                if (null == t) return !1;
                y[t] = void 0;
                h === t && b(t)
            }

            function m(e) {
                var t = e.guildId;
                y[t] = void 0;
                t === h && b(t)
            }

            function P(e, t) {
                g = t;
                if (null == e || null == e.getGuildId()) return !1;
                var n = e.getGuildId();
                if (null == n) return !1;
                y[n] = void 0;
                n === h && b(n);
                return !0
            }

            function N() {
                b(f.I_8)
            }
            var C = function(e) {
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
                var t = S(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.ZP, c.Z, u.default, l.Z, a.Z);
                    this.syncWith([a.Z], N)
                };
                r.getCategories = function(e) {
                    return null != e ? function(e) {
                        var t = y[e];
                        return null != t ? t : b(e)
                    }(e) : I
                };
                return n
            }(r.ZP.Store);
            C.displayName = "GuildCategoryStore";
            const M = new C(i.Z, {
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId;
                    h = null != t ? t : null;
                    if (null == t) return !1;
                    if (null != y[t]) return !1;
                    b(t)
                },
                CONNECTION_OPEN: T,
                OVERLAY_INITIALIZE: T,
                CACHE_LOADED_LAZY: T,
                GUILD_CREATE: R,
                GUILD_UPDATE: R,
                GUILD_DELETE: function(e) {
                    var t = e.guild.id;
                    delete y[t]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var l = a.value.guild_id;
                            if (null != l) {
                                y[l] = void 0;
                                n = !0;
                                h === l && b(l)
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.user;
                    if (u.default.getId() !== n.id) return !1;
                    y[t] = void 0;
                    t === h && b(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == h) return !1;
                    b(h)
                },
                GUILD_ROLE_CREATE: m,
                GUILD_ROLE_UPDATE: m,
                GUILD_ROLE_DELETE: m,
                IMPERSONATE_UPDATE: m,
                IMPERSONATE_STOP: m,
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null == t && null != g ? P(l.Z.getChannel(g), null) : P(l.Z.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.channelId,
                            r = t.sessionId;
                        return u.default.getSessionId() !== r ? e : P(l.Z.getChannel(n), n) || e
                    }), !1)
                }
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => F
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                a = n.n(o),
                u = n(202351),
                l = n(744564),
                s = n(83797),
                c = n(664625),
                f = n(473903),
                d = n(2590);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
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

            function S(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
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

            function y(e, t) {
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
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

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
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var T = Object.freeze([]),
                R = {},
                A = {},
                m = {},
                P = {},
                N = {};

            function C(e, t) {
                var n = R[e];
                return null != n ? n[t] : null
            }
            var M = function(e) {
                switch (e.type) {
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
            var D = function(e) {
                return (0, s.Z)(e) ? 1 : 0
            };

            function w(e, t) {
                return function(e, t) {
                    return M(t) - M(e)
                }(e, t) || function(e, t) {
                    return D(t) - D(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function L(e) {
                delete A[e];
                delete m[e];
                delete P[e];
                if (null != R[e]) {
                    var t = y(a().sortBy(R[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        m[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    } else a().every(R[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete R[e]
                }
            }

            function j(e) {
                var t = R[e];
                if (null != t) {
                    var n = a().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        m[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    }
                }
            }

            function U(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    a = e.activities;
                if (n === c.default.getId()) return !1;
                var u = R[n];
                if (null == u) {
                    if (r === d.Skl.OFFLINE) return !1;
                    u = R[n] = {}
                }
                if (r === d.Skl.OFFLINE) u[t] = {
                    status: r,
                    clientStatus: o,
                    activities: T,
                    timestamp: Date.now()
                };
                else {
                    var l = a.length > 1 ? g(a).sort(w) : a,
                        s = u[t];
                    a = null != s && i()(s.activities, l) ? s.activities : l;
                    u[t] = {
                        status: r,
                        clientStatus: o,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
                L(n);
                return !0
            }

            function Z(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    a = e.timestamp;
                if (n !== c.default.getId()) {
                    var u = R[n];
                    if (null == u) {
                        if (r === d.Skl.OFFLINE) return;
                        u = R[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) u[t] = {
                        status: r,
                        clientStatus: i,
                        activities: T,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? g(o).sort(w) : o;
                        u[t] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: a
                        }
                    }
                }
            }

            function G(e, t) {
                if (t === c.default.getId()) return !1;
                var n = R[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete R[t];
                L(t)
            }

            function k(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(R)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        G(e, i.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var x = function(e) {
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
                var t = b(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    A[c.default.getId()] = e;
                    m[c.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = A[e]) && void 0 !== i ? i : n
                    }
                    var o, a = C(e, t);
                    return null !== (o = null == a ? void 0 : a.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = m[e]) && void 0 !== n ? n : T
                    }
                    var r = C(e, t);
                    return null == r || null == r.activities ? T : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = Object.keys(m)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value,
                                l = m[u],
                                s = !0,
                                c = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(s = (d = p.next()).done); s = !0) {
                                    var E = d.value;
                                    E.application_id === e && t.push({
                                        userId: u,
                                        activity: E
                                    })
                                }
                            } catch (e) {
                                c = !0;
                                f = e
                            } finally {
                                try {
                                    s || null == p.return || p.return()
                                } finally {
                                    if (c) throw f
                                }
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
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return N[e]
                };
                r.getUserIds = function() {
                    return Object.keys(m)
                };
                r.isMobileOnline = function(e) {
                    var t = P[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: R,
                        statuses: A,
                        activities: m,
                        activityMetadata: N,
                        clientStatuses: P
                    }
                };
                return n
            }(u.ZP.Store);
            x.displayName = "PresenceStore";
            const F = new x(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = c.default.getId();
                    R = {};
                    N = {};
                    A = O({}, r, A[r]);
                    m = O({}, r, m[r]);
                    P = O({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                a = t.clientStatus,
                                u = t.activities;
                            Z({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: a,
                                activities: u,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            a = e.activities;
                        if (null != t) {
                            Z({
                                guildId: d.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: a,
                                timestamp: o
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(j)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    R = t.presencesForGuilds;
                    A = t.statuses;
                    m = t.activities;
                    N = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        U({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    k(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return G(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return U({
                            guildId: null != t ? t : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    k(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && U({
                            guildId: d.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    N[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && U({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && U({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = c.default.getId();
                    if (A[t] === e.status && m[t] === e.activities) return !1;
                    A[t] = e.status;
                    m[t] = e.activities;
                    delete N[t]
                }
            })
        },
        539273: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => _,
                Z: () => b
            });
            var r = n(202351),
                i = n(513328),
                o = n(744564),
                a = n(61209),
                u = n(682776),
                l = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var _, S;
            ! function(e) {
                e[e.SendMessage = 0] = "SendMessage";
                e[e.CreateThread = 1] = "CreateThread"
            }(_ || (_ = {}));
            var h = (c(S = {}, _.SendMessage, {}), c(S, _.CreateThread, {}), S);

            function y(e, t, n) {
                ! function(e, t) {
                    if (null != h[t][e.id]) {
                        h[t][e.id].timer.stop();
                        delete h[t][e.id]
                    }
                }(e, t);
                if (!(function(e, t) {
                        return t === _.SendMessage ? u.Z.can(l.Plq.MANAGE_CHANNELS, e) || u.Z.can(l.Plq.MANAGE_MESSAGES, e) : u.Z.can(l.Plq.MANAGE_THREADS, e)
                    }(e, t) || n <= 0)) {
                    var r = n + Date.now();
                    h[t][e.id] = {
                        rateLimitPerUser: e.rateLimitPerUser,
                        cooldownMs: n,
                        cooldownEndTimestamp: r,
                        timer: new i.V7
                    };
                    h[t][e.id].timer.start(1e3, (function() {
                        o.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: t,
                            cooldownMs: Math.max(r - Date.now(), 0)
                        })
                    }), !0)
                }
            }

            function g(e, t) {
                var n = a.Z.getChannel(e);
                if (null == n) return !1;
                y(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function I(e) {
                var t = e.file,
                    n = a.Z.getChannel(t.channelId);
                return null != n && y(n, _.SendMessage, 0)
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z)
                };
                r.getSlowmodeCooldownGuess = function(e, t) {
                    var n = h[null != t ? t : _.SendMessage][e];
                    return null != n ? n.cooldownMs : 0
                };
                return n
            }(r.ZP.Store);
            v.displayName = "SlowmodeStore";
            const b = new v(o.Z, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    return g(e.channelId, e.slowmodeType)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    var t = e.channelId,
                        n = e.slowmodeType,
                        r = e.cooldownMs,
                        i = a.Z.getChannel(t);
                    if (null == i) return !1;
                    y(i, n, 0 === r ? 0 : r + 100)
                },
                UPLOAD_START: function(e) {
                    return g(e.channelId, _.SendMessage)
                },
                UPLOAD_FAIL: I,
                UPLOAD_CANCEL_REQUEST: I,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels;
                    [_.SendMessage, _.CreateThread].forEach((function(e) {
                        var n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var u = o.value,
                                    l = h[e][u.id],
                                    s = u.rateLimitPerUser;
                                if (null != l && l.rateLimitPerUser !== s) {
                                    var c;
                                    y(u, e, Math.min(null !== (c = null == l ? void 0 : l.cooldownMs) && void 0 !== c ? c : 0, 1e3 * s))
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
                    }))
                },
                LOGOUT: function() {
                    [_.SendMessage, _.CreateThread].forEach((function(e) {
                        Object.keys(h[e]).forEach((function(t) {
                            return h[e][t].timer.stop()
                        }));
                        h[e] = {}
                    }))
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                a = n(744564),
                u = n(473903),
                l = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
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
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var h = l.QZA.CLOSED,
                y = null,
                g = null,
                I = {},
                v = {},
                b = {},
                T = null,
                R = null,
                A = !1,
                m = !1,
                P = null,
                N = null,
                C = null,
                M = [],
                D = null,
                w = null;

            function L(e) {
                var t, n, r, i, o, a, s = u.default.getCurrentUser();
                if (null == s) return j();
                g = null !== (t = e.section) && void 0 !== t ? t : g;
                D = null !== (n = e.section) && void 0 !== n ? n : g;
                null != e.subsection && null != g && (I[g] = e.subsection);
                null != e.scrollPosition && null != g && (v[g] = e.scrollPosition);
                m = !!e.openWithoutBackstack;
                h = l.QZA.OPEN;
                b = {};
                T = f({}, l.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                R = p({}, T);
                N = null !== (r = e.onClose) && void 0 !== r ? r : null;
                C = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null;
                M = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [];
                w = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function j() {
                h = l.QZA.CLOSED;
                A = !1;
                T = null;
                D = null;
                R = null;
                y = null;
                g = null;
                I = {};
                v = {};
                N = null;
                C = null;
                M = [];
                w = null
            }

            function U() {
                h = l.QZA.OPEN;
                b = {}
            }
            var Z = function(e) {
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
                var t = S(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != R && null != T && (!(!this.isOpen() && P !== l.cII.USER_SETTINGS) && !i().isEqual(R, T))
                };
                r.isOpen = function() {
                    return A
                };
                r.getPreviousSection = function() {
                    return y
                };
                r.getSection = function() {
                    return g
                };
                r.getSubsection = function() {
                    return null != g ? I[g] : null
                };
                r.getScrollPosition = function() {
                    return null != g ? v[g] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return m
                };
                r.getProps = function() {
                    return {
                        submitting: h === l.QZA.SUBMITTING,
                        section: g,
                        subsection: null != g ? I[g] : null,
                        scrollPosition: null != g ? v[g] : null,
                        settings: R,
                        errors: b,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: m,
                        analyticsLocation: C,
                        analyticsLocations: M,
                        initialSection: D,
                        impressionSource: w
                    }
                };
                ! function(e, t, n) {
                    t && c(e.prototype, t);
                    n && c(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return N
                    }
                }]);
                return n
            }(o.ZP.Store);
            Z.displayName = "UserSettingsModalStore";
            const G = new Z(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    A = !0;
                    L(e)
                },
                USER_SETTINGS_MODAL_INIT: L,
                USER_SETTINGS_MODAL_CLOSE: j,
                LOGOUT: j,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    h = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (h !== l.QZA.SUBMITTING) return !1;
                    h = l.QZA.OPEN;
                    g = l.oAB.ACCOUNT;
                    var t;
                    b = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    y = g;
                    g = e.section;
                    C = null;
                    var t;
                    M = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (I[g] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete I[t] : null != g && delete I[g]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete v[t] : null != g && delete v[g]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == R && (R = {});
                    var n = R[l.oAB.ACCOUNT];
                    R[l.oAB.ACCOUNT] = p({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    U();
                    if (null != e) {
                        T = f({}, l.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        R = p({}, T)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    P = e.tab;
                    return null == g && P === l.cII.USER_SETTINGS && L({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        609853: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(22212),
                u = n(985651),
                l = n(175072),
                s = n(473708),
                c = n(813968),
                f = n.n(c);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
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
            var O = function(e) {
                var t = e.invertColor,
                    n = void 0 !== t && t,
                    i = e.type,
                    c = void 0 === i ? l.H.BOT : i,
                    O = e.className,
                    _ = e.verified,
                    S = e.hideIcon,
                    h = void 0 !== S && S,
                    y = e.useRemSizes,
                    g = void 0 !== y && y,
                    I = e.children,
                    v = void 0 === I ? [] : I,
                    b = null,
                    T = s.Z.Messages.VERIFIED_BOT_TOOLTIP;
                switch (c) {
                    case l.H.SYSTEM_DM:
                    case l.H.OFFICIAL:
                        _ = !0;
                        T = s.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP;
                        b = s.Z.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case l.H.SERVER:
                        b = s.Z.Messages.BOT_TAG_SERVER;
                        break;
                    case l.H.ORIGINAL_POSTER:
                        b = s.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case l.H.STAFF_ONLY_DM:
                        b = s.Z.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case l.H.AI:
                        _ = !0;
                        T = s.Z.Messages.AI_GENERATED_TOOLTIP;
                        b = s.Z.Messages.AI_TAG;
                        break;
                    case l.H.REMIX:
                        _ = !1;
                        b = s.Z.Messages.REMIXING_TAG;
                        break;
                    case l.H.BOT:
                    default:
                        b = s.Z.Messages.BOT_TAG_BOT
                }
                var R, A = c === l.H.ORIGINAL_POSTER,
                    m = c === l.H.REMIX,
                    P = null;
                _ && (P = (0, r.jsx)(a.u, {
                    text: T,
                    align: "center",
                    position: "top",
                    children: function(e) {
                        return (0, r.jsx)(u.Z, E(p({}, e), {
                            className: f().botTagVerified
                        }))
                    }
                }));
                R = c === l.H.AI ? f().botTagAI : n ? f().botTagInvert : f().botTagRegular;
                var N = function(e) {
                    var t;
                    return (0, r.jsxs)("span", E(p({}, e), {
                        className: o()(O, R, g ? f().rem : f().px, (t = {}, d(t, f().botTagOP, A), d(t, f().botTagRemix, m), t)),
                        children: [h ? null : P, v, (0, r.jsx)("span", {
                            className: f().botText,
                            children: b
                        })]
                    }))
                };
                switch (c) {
                    case l.H.REMIX:
                        return (0, r.jsx)(a.u, {
                            text: s.Z.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: function(e) {
                                return N(e)
                            }
                        });
                    case l.H.ORIGINAL_POSTER:
                        return (0, r.jsx)(a.u, {
                            text: s.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return N(e)
                            }
                        });
                    default:
                        return N()
                }
            };
            O.Types = l.H;
            const _ = O
        },
        613677: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => r,
                Z: () => E
            });
            var r, i = n(785893),
                o = (n(667294), n(294184)),
                a = n.n(o),
                u = n(304548),
                l = n(621329),
                s = n(559968),
                c = n(386991),
                f = n(818417),
                d = n(153954),
                p = n.n(d);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(r || (r = {}));
            const E = function(e) {
                var t = e.children,
                    n = e.messageType,
                    o = e.className,
                    d = e.textColor,
                    E = void 0 === d ? "text-normal" : d,
                    O = e.textVariant,
                    _ = void 0 === O ? "text-sm/medium" : O,
                    S = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return f.Z;
                            case r.INFO:
                                return c.Z;
                            case r.ERROR:
                                return s.Z;
                            case r.POSITIVE:
                                return l.Z
                        }
                    }(n),
                    h = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return p().warning;
                            case r.INFO:
                                return p().info;
                            case r.ERROR:
                                return p().error;
                            case r.POSITIVE:
                                return p().positive
                        }
                    }(n);
                return (0, i.jsxs)("div", {
                    className: a()(p().container, h, o),
                    children: [(0, i.jsx)("div", {
                        className: p().iconDiv,
                        children: (0, i.jsx)(S, {
                            className: p().icon
                        })
                    }), (0, i.jsx)(u.Text, {
                        className: p().text,
                        color: E,
                        variant: _,
                        children: t
                    })]
                })
            }
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => a,
                Dt: () => u,
                FG: () => l
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                u = function() {
                    return (0, o.Z)((function() {
                        return a()
                    }))
                },
                l = function(e) {
                    return (0, e.children)(u())
                }
        },
        559968: (e, t, n) => {
            "use strict";
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    p = e.backgroundColor,
                    E = d(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, r.jsxs)("svg", f(function(e) {
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
                }({}, (0, a.Z)(E)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 14 14",
                    children: [null != p ? (0,
                        r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: p
                    }) : null, (0, r.jsx)("path", {
                        fill: l,
                        className: s,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    c = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    O = s(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, a.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }))
        },
        386991: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(775428),
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
            const c = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    o = void 0 === i ? 16 : i,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 12 12",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }), o.d, {}, {
                size: 16
            })
        },
        843508: (e, t, n) => {
            "use strict";
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: l,
                        className: s,
                        d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    c = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    O = s(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, a.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M21.414 5.414a2 2 0 1 0-2.828-2.828l-2 2-4 4-1.749 1.748a.528.528 0 0 1-.574.108 6 6 0 1 0 3.29 3.285.51.51 0 0 1 .105-.556c.189-.19.495-.19.684 0l1.244 1.243a2 2 0 1 0 2.828-2.828l-1.232-1.232a.5.5 0 0 1 0-.708l.464-.464a.5.5 0 0 1 .708 0l1.232 1.232a2 2 0 1 0 2.828-2.828l-1.232-1.232a.5.5 0 0 1 0-.708l.232-.232ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }))
        },
        349491: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(597209),
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
            const c = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    d = e.className,
                    p = e.foreground,
                    E = s(e, ["width", "height", "color", "className", "foreground"]);
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
                }({
                    width: n,
                    height: o,
                    className: d,
                    viewBox: "0 0 24 24"
                }, (0, a.Z)(E)), {
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }), o.m)
        },
        855595: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(911486),
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
            const c = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    i = e.height,
                    o = void 0 === i ? 23 : i,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 20 23",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }), o.l)
        },
        584620: (e, t, n) => {
            "use strict";
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: l,
                        d: "M21.707 13.293l-11-11C10.519 2.105 10.266 2 10 2H3c-.553 0-1 .447-1 1v7c0 .266.105.519.293.707l11 11c.195.195.451.293.707.293s.512-.098.707-.293l7-7c.391-.391.391-1.023 0-1.414zM7 9c-1.106 0-2-.896-2-2 0-1.106.894-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    c = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    O = s(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, a.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12.243 2a3 3 0 0 0-2.122.879l-8.25 8.25a3 3 0 0 0 0 4.242L8.63 22.13a3 3 0 0 0 4.242 0l8.25-8.25A3 3 0 0 0 22 11.757V4a2 2 0 0 0-2-2h-7.757ZM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }))
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => p,
                OV: () => O,
                NG: () => _,
                mA: () => S,
                IG: () => h,
                lB: () => y,
                G2: () => g,
                fW: () => I
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = (n(304548), n(87931)),
                u = (n(473708), n(800624)),
                l = n.n(u);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
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
            var p = {
                ROUND: l().baseShapeRound,
                ROUND_LEFT: l().baseShapeRoundLeft,
                ROUND_RIGHT: l().baseShapeRoundRight,
                SQUARE: ""
            };

            function E(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function O(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function _(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var S = function(e) {
                    var t = e.count,
                        n = e.color,
                        i = void 0 === n ? a.Z.STATUS_DANGER : n,
                        u = e.disableColor,
                        s = void 0 !== u && u,
                        S = e.shape,
                        h = void 0 === S ? p.ROUND : S,
                        y = e.className,
                        g = e.style,
                        I = d(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(c({
                        className: o()(y, l().numberBadge, h),
                        style: c({
                            backgroundColor: s ? void 0 : i,
                            width: O(t),
                            paddingRight: E(t)
                        }, g)
                    }, I), {
                        children: _(t)
                    }))
                },
                h = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        s = e.shape,
                        E = void 0 === s ? p.ROUND : s,
                        O = e.disableColor,
                        _ = void 0 !== O && O,
                        S = e.style,
                        h = d(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(c({
                        className: o()(n, l().textBadge, E),
                        style: c({
                            backgroundColor: _ ? void 0 : u
                        }, S)
                    }, h), {
                        children: t
                    }))
                },
                y = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = d(e, ["text", "className"]);
                    return (0, r.jsx)(h, c({
                        className: o()(l().premiumBadge, n),
                        text: t
                    }, i))
                },
                g = function(e) {
                    var t = e.icon,
                        n = e.className,
                        i = e.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        s = e.shape,
                        f = void 0 === s ? p.ROUND : s,
                        d = e.disableColor,
                        E = void 0 !== d && d,
                        O = e.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, l().iconBadge, f),
                        style: c({
                            backgroundColor: E ? void 0 : u
                        }, O),
                        children: (0, r.jsx)(t, {
                            className: l().icon
                        })
                    })
                },
                I = function(e) {
                    var t = e.className,
                        n = e.color,
                        i = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        u = e.shape,
                        s = void 0 === u ? p.ROUND : u,
                        f = e.disableColor,
                        E = void 0 !== f && f,
                        O = e.style,
                        _ = d(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", c({
                        className: o()(t, l().circleBadge, s),
                        style: c({
                            backgroundColor: E ? void 0 : i
                        }, O)
                    }, _))
                }
        },
        129586: (e, t, n) => {
            "use strict";
            n.d(t, {
                a8: () => i,
                FL: () => o,
                rS: () => a
            });
            var r = n(744564);

            function i(e, t, n) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function o(e, t, n) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        858519: (e, t, n) => {
            "use strict";
            n.d(t, {
                AT: () => s,
                cs: () => c,
                zQ: () => p
            });
            var r = n(441143),
                i = n.n(r),
                o = n(744564);

            function a(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            a(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s, c, f = function(e, t) {
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
            ! function(e) {
                e.GUILD_HOME = "guild_home";
                e.FORUM_CHANNEL = "forum_channel"
            }(s || (s = {}));
            ! function(e) {
                e[e.IMMEDIATE = 0] = "IMMEDIATE";
                e[e.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN";
                e[e.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY"
            }(c || (c = {}));
            var d = function() {
                    function e() {
                        l(this, e);
                        this.seenIntervals = []
                    }
                    var t = e.prototype;
                    t.maybeMarkSeen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        if (null != t && null == t.endTimeMillis) return !1;
                        this.seenIntervals.push({
                            startTimeMillis: e
                        });
                        return !0
                    };
                    t.maybeMarkUnseen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        if (null == t || null != t.endTimeMillis) return !1;
                        t.endTimeMillis = e;
                        return !0
                    };
                    t.isVisible = function() {
                        var e = this.seenIntervals[this.seenIntervals.length - 1];
                        return null != (null == e ? void 0 : e.startTimeMillis) && null == (null == e ? void 0 : e.endTimeMillis)
                    };
                    t.computeSeenTimeDestructive = function(e) {
                        var t = 0,
                            n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var u, l = this.seenIntervals[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) {
                                var s = u.value;
                                if (null == s.endTimeMillis)
                                    if (e) {
                                        var c = Date.now();
                                        t += c - s.startTimeMillis;
                                        n.push({
                                            startTimeMillis: c
                                        })
                                    } else n.push(s);
                                else t += s.endTimeMillis - s.startTimeMillis
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                r || null == l.return || l.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        i()(n.length < 2, "there should only be a single left over data");
                        this.seenIntervals = n;
                        return Math.round(t)
                    };
                    return e
                }(),
                p = function() {
                    function e(t) {
                        var n = t.id,
                            r = t.windowId,
                            i = t.isPaused,
                            a = this;
                        l(this, e);
                        this.initialize = function() {
                            var e, t;
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", a.handleFeedItemSeen);
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", a.handleFeedItemUnseen);
                            o.Z.subscribe("ANALYTICS_FEED_FLUSH", a.handleFeedItemFlush);
                            o.Z.subscribe("APP_STATE_UPDATE", a.handleAppStateUpdate);
                            o.Z.subscribe("DRAWER_OPEN", a.handleDrawerOpen);
                            o.Z.subscribe("DRAWER_CLOSE", a.handleDrawerClose);
                            o.Z.subscribe("WINDOW_FOCUS", a.handleWindowFocus);
                            null === (t = (e = a).onInitialize) || void 0 === t || t.call(e)
                        };
                        this.terminate = function() {
                            var e, t;
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", a.handleFeedItemSeen);
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", a.handleFeedItemUnseen);
                            o.Z.unsubscribe("ANALYTICS_FEED_FLUSH", a.handleFeedItemFlush);
                            o.Z.unsubscribe("APP_STATE_UPDATE", a.handleAppStateUpdate);
                            o.Z.unsubscribe("DRAWER_OPEN", a.handleDrawerOpen);
                            o.Z.unsubscribe("DRAWER_CLOSE", a.handleDrawerClose);
                            o.Z.unsubscribe("WINDOW_FOCUS", a.handleWindowFocus);
                            null === (t = (e = a).onTerminate) || void 0 === t || t.call(e);
                            a.maybeFlushSeenItems(c.IMMEDIATE)
                        };
                        this.handleFeedItemFlush = function(e) {
                            var t = e.id,
                                n = e.force;
                            a._id === t && a.maybeFlushSeenItems(n)
                        };
                        this.handleFeedItemSeen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === a._id)
                                if (a._paused) a._pausedFeedItemIds.add(o);
                                else {
                                    var u = a.getTrackedFeedItem(o).maybeMarkSeen(i);
                                    null === (n = (t = a).onFeedItemSeen) || void 0 === n || n.call(t, o, u)
                                }
                        };
                        this.handleFeedItemUnseen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === a._id) {
                                a._paused && a._pausedFeedItemIds.delete(o);
                                var u = a.getTrackedFeedItem(o).maybeMarkUnseen(i);
                                null === (n = (t = a).onFeedItemUnseen) || void 0 === n || n.call(t, o, u);
                                a.maybeFlushSeenItems()
                            }
                        };
                        this.getTrackedFeedItem = function(e) {
                            null == a.trackedFeedItems[e] && (a.trackedFeedItems[e] = new d);
                            return a.trackedFeedItems[e]
                        };
                        this.getVisibleFeedItemIds = function() {
                            var e = Object.keys(a.trackedFeedItems);
                            return new Set(e.filter((function(e) {
                                var t;
                                return null === (t = a.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                            })))
                        };
                        this.handleDrawerClose = function() {
                            a._isReactNavigationFocused && a.resume()
                        };
                        this.handleDrawerOpen = function() {
                            a._isReactNavigationFocused && a.pause()
                        };
                        this.handleAppStateUpdate = function(e) {
                            var t = e.state;
                            "active" === t && a._isReactNavigationFocused && a.resume();
                            if ("background" === t) {
                                a._isReactNavigationFocused && a.pause();
                                a.maybeFlushSeenItems(c.IMMEDIATE)
                            }
                        };
                        this.clearPausedFeedItemIds = function() {
                            a._pausedFeedItemIds = new Set;
                            a._paused = !1
                        };
                        this.pause = function() {
                            if (!a._paused) {
                                var e = a.getVisibleFeedItemIds();
                                e.forEach((function(e) {
                                    a.handleFeedItemUnseen({
                                        id: a._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                                    })
                                }));
                                a._paused = !0;
                                a._pausedFeedItemIds = e
                            }
                        };
                        this.resume = function() {
                            if (a._paused) {
                                a._paused = !1;
                                a._pausedFeedItemIds.forEach((function(e) {
                                    a.handleFeedItemSeen({
                                        id: a._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_SEEN"
                                    })
                                }));
                                a.clearPausedFeedItemIds()
                            }
                        };
                        this.handleReactNavigationFocus = function(e, t) {
                            a._isReactNavigationFocused = e;
                            a._isReactNavigationFocused && !t ? a.resume() : a.pause()
                        };
                        this.handleWindowFocus = function(e) {
                            a._windowId === e.windowId && (e.focused ? a.resume() : a.pause())
                        };
                        this.trackedFeedItems = {};
                        this._id = n;
                        this._windowId = r;
                        this._pausedFeedItemIds = new Set;
                        this._paused = null != i && i;
                        this._isReactNavigationFocused = !0;
                        this._lastFlushTimeMillis = Date.now()
                    }
                    e.prototype.maybeFlushSeenItems = function(e) {
                        if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4) return Promise.resolve();
                        if (e === c.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                        var t, n = this.createFlushSeenItemsFunction(e);
                        if (null == n) return Promise.resolve();
                        this._lastFlushTimeMillis = Date.now();
                        return e === c.IMMEDIATE || e === c.IMMEDIATE_WITH_COOLDOWN ? new Promise((t = u((function(e) {
                            return f(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        t.sent();
                                        e();
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return t.apply(this, arguments)
                        })) : new Promise((function(e) {
                            setTimeout(u((function() {
                                return f(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n()];
                                        case 1:
                                            t.sent();
                                            e();
                                            return [2]
                                    }
                                }))
                            })), 100)
                        }))
                    };
                    return e
                }()
        },
        607556: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r, i = n(496486),
                o = n.n(i),
                a = n(5387),
                u = n.n(a),
                l = n(327499),
                s = n(567403),
                c = n(473903),
                f = n(749565),
                d = n(473708),
                p = new(u())({
                    maxAge: 6e4
                });

            function E(e, t, n) {
                null != r && clearTimeout(r);
                r = setTimeout((function() {
                    var r = [],
                        i = function(e) {
                            r.push(e.id)
                        };
                    if (null == e) o().forEach(s.Z.getGuilds(), i);
                    else if (Array.isArray(e)) e.forEach((function(e) {
                        var t = s.Z.getGuild(e);
                        null != t && i(t)
                    }));
                    else {
                        var a = s.Z.getGuild(e);
                        null != a && i(a)
                    }
                    r.length > 0 && l.Z.requestMembers(r, t.toLocaleLowerCase(), n)
                }), 200)
            }

            function O(e, t) {
                var n = "".concat(null != e ? e : "", ":").concat(t),
                    r = p.get(n);
                if (null != r) return r;
                p.set(n, !0)
            }
            const _ = {
                getGuildNameSuggestion: function(e) {
                    var t = c.default.getCurrentUser(),
                        n = f.oY(t);
                    return null == n || 0 === n.length ? "" : d.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        r = Array.isArray(e),
                        i = [],
                        o = !1;
                    if (r) e.forEach((function(e) {
                        null == O(e, t) && i.push(e)
                    }));
                    else {
                        var a = O(e, t);
                        null == a && (o = !0)
                    }
                    i.length > 0 && r ? E(i, t, n) : o && E(e, t, n)
                }
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(473903),
                i = n(496486),
                o = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(i)().curry((function(e, t, n) {
                return o(t) ? e(n) : n({})
            }));

            function a(e, t, n) {
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
                        a(e, t, n[t])
                    }))
                }
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
            var c, f, d = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            c = p.showModal;
            d = p.updateModalProps;
            f = n(264817).Mr;

            function E(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.modalProps,
                    o = void 0 === i ? {} : i,
                    a = e.hooks,
                    s = (void 0 === a ? {} : a).onEarlyClose,
                    p = function() {
                        null == s || s()
                    },
                    E = function(e) {
                        f(h);
                        n(e)
                    },
                    _ = function(e) {
                        f(h);
                        r(e)
                    },
                    S = function(e) {
                        var t = e.res;
                        d(h, y, p, l(u({}, o), {
                            error: t.body.message
                        }))
                    };
                if (null != c) var h = c(y, p, o);
                else null == s || s();

                function y(e) {
                    d(h, y, p, l(u({}, o), {
                        isLoading: !0
                    }));
                    return O({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }
            }

            function O(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.code,
                    o = e.mfaCodeHandler,
                    a = void 0 === o ? E : o,
                    l = e.isModalOpen,
                    c = void 0 !== l && l,
                    f = s(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != i ? {
                    code: i
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, c)) return a(u({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function _(e, t) {
                var n, i, a = null != t ? t : {},
                    l = a.checkEnabled,
                    c = void 0 === l ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : l,
                    f = s(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (o(c) ? E : O)(u({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => W,
                WA: () => F,
                f5: () => k,
                Gb: () => w,
                Rs: () => B,
                _2: () => z,
                gL: () => j,
                fG: () => Z
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                a = n.n(o),
                u = n(809784),
                l = n(296602),
                s = n(384411),
                c = n(72580),
                f = n(310126);

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var p = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? i(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const E = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

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

            function S(e) {
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

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t) {
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
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
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
                },
                I = new l.Z("Spellchecker"),
                v = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function b(e) {
                var t;
                e = null !== (t = E[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        a = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                I.error("".concat(e, " is not a valid locale."))
            }
            var T = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = y(s.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var a = this.getAvailableLanguages(t);
                        this.languageDetector = new p(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, u = null !== (o = a[e]) && void 0 !== o ? o : E[i];
                                null != u && n.setLocale(u)
                            }
                        }));
                        v.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        v.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = v.setLocale(e)) || void 0 === t || t.then((function(t) {
                            I.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = y(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        v.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && h(e.prototype, t);
                        n && h(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                R = a().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return R(e, t.target)
                }), !0)
            }

            function m() {
                return (m = S((function() {
                    var e, t, n, r;
                    return g(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, v.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(b).filter(c.lm);
                                A(r = new T(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var P = n(120415);

            function N(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            N(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            N(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var M = function(e, t) {
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

            function D() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function w() {
                return (0, P.nI)() && D()
            }
            var L = w() ? function() {
                return m.apply(this, arguments)
            }() : null;

            function j(e) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(e) {
                return x.apply(this, arguments)
            }

            function x() {
                x = C((function(e) {
                    var t, n, r = arguments;
                    return M(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, L];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return x.apply(this, arguments)
            }

            function F(e) {
                return H.apply(this, arguments)
            }

            function H() {
                H = C((function(e) {
                    var t, n, r, i = arguments;
                    return M(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, L];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function B(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function z(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(e) {
                if (!D()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => i
            });
            var r = n(421281);

            function i(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                var a = i.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    u = "".concat(t).concat(a),
                    l = e[u];
                if (null != l) return l;
                0
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(281110),
                i = n(652591);

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

            function l(e, t, n) {
                var r = t.trackedActionData,
                    o = u(t, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, l, u));
                        n(e)
                    }))
                }))
            }
            const s = {
                get: function(e) {
                    return l(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return l(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return l(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return l(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => l,
                updateModalProps: () => s
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(919244);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = function(e, t, n) {
                return function(i) {
                    return (0, r.jsx)(o.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, i))
                }
            };

            function l(e, t, n) {
                return (0, i.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, i.o)(e, u(t, n, r))
            }
        },
        180735: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        142520: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
        },
        248634: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.MATCH_ALL = "match_all";
                e.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(e) {
                var t = (0, r.useRef)(i);
                t.current === i && (t.current = e());
                return t.current
            }
        }
    }
]);