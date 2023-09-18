(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95327, 81580, 57678, 58621, 96043, 71402, 1459], {
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
                var u = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var a, l = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (a) {
                                u.push({
                                    singleton: a,
                                    extension: l
                                });
                                a = c;
                                l = []
                            } else a = c;
                        else l.push(c)
                    }
                    u.push({
                        singleton: a,
                        extension: l
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var d = [];
                n[8] && (d = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        16243: e => {
            if (!t) var t = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map((function(e, r) {
                        n.index = r;
                        return t.call(n, e)
                    })) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        n.index = i;
                        return e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, n) {
                    return Math.max.apply(null, n ? t.map(e, n) : e)
                }
            };
            var n = function() {
                function e(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e);
                        n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e);
                            n = !1
                        },
                        peek: function(e) {
                            n || r();
                            void 0 === e && (e = t.length - 1);
                            return t[e]
                        },
                        pop: function() {
                            n || r();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            n || r();
                            return t
                        }
                    }
                }

                function r(e, t, n, r, i, o, u) {
                    var a = this;
                    a.r1 = e;
                    a.r2 = t;
                    a.g1 = n;
                    a.g2 = r;
                    a.b1 = i;
                    a.b2 = o;
                    a.histo = u
                }
                r.prototype = {
                    volume: function(e) {
                        var t = this;
                        t._volume && !e || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || t) {
                            var i, o, u, a = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (u = n.b1; u <= n.b2; u++) a += r[e(i, o, u)] || 0;
                            n._count = a;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var e = this;
                        return new r(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || t) {
                            var i, o, u, a, l = 0,
                                c = 0,
                                s = 0,
                                d = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (a = n.b1; a <= n.b2; a++) {
                                        l += i = r[e(o, u, a)] || 0;
                                        c += i * (o + .5) * 8;
                                        s += i * (u + .5) * 8;
                                        d += i * (a + .5) * 8
                                    }
                            n._avg = l ? [~~(c / l), ~~(s / l), ~~(d / l)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(e) {
                        var t = this,
                            n = e[0] >> 3;
                        gval = e[1] >> 3;
                        bval = e[2] >> 3;
                        return n >= t.r1 && n <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                    }
                };

                function i() {
                    this.vboxes = new n((function(e, n) {
                        return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(e) {
                            return e.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++)
                            if ((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = i.peek(o).color
                            } return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, n) {
                            return t.naturalOrder(t.sum(e.color), t.sum(n.color))
                        }));
                        var n = e[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                        var r = e.length - 1,
                            i = e[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                };

                function o(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            o = r.g2 - r.g1 + 1,
                            u = r.b2 - r.b1 + 1,
                            a = t.max([i, o, u]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, d, f = 0,
                            _ = [],
                            E = [];
                        if (a == i)
                            for (l = r.r1; l <= r.r2; l++) {
                                d = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) d += n[e(l, c, s)] || 0;
                                f += d;
                                _[l] = f
                            } else if (a == o)
                                for (l = r.g1; l <= r.g2; l++) {
                                    d = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) d += n[e(c, l, s)] || 0;
                                    f += d;
                                    _[l] = f
                                } else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        d = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) d += n[e(c, s, l)] || 0;
                                        f += d;
                                        _[l] = f
                                    }
                        _.forEach((function(e, t) {
                            E[t] = f - e
                        }));
                        return p(a == i ? "r" : a == o ? "g" : "b")
                    }

                    function p(e) {
                        var t, n, i, o, u, a = e + "1",
                            c = e + "2",
                            s = 0;
                        for (l = r[a]; l <= r[c]; l++)
                            if (_[l] > f / 2) {
                                i = r.copy();
                                o = r.copy();
                                u = (t = l - r[a]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[a], ~~(l - 1 - t / 2));
                                for (; !_[u];) u++;
                                s = E[u];
                                for (; !s && _[u - 1];) s = E[--u];
                                i[c] = u;
                                o[a] = i[c] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var l = function(t) {
                            var n, r, i, o, u = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                i = t[1] >> 3;
                                o = t[2] >> 3;
                                n = e(r, i, o);
                                u[n] = (u[n] || 0) + 1
                            }));
                            return u
                        }(u);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, i, o, u = 1e6,
                                    a = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    d = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    i = e[1] >> 3;
                                    o = e[2] >> 3;
                                    n < u ? u = n : n > a && (a = n);
                                    i < l ? l = i : i > c && (c = i);
                                    o < s ? s = o : o > d && (d = o)
                                }));
                                return new r(u, a, l, c, s, d, t)
                            }(u, l),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function d(e, t) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var u = o(l, n),
                                        a = u[0],
                                        c = u[1];
                                    if (!a) return;
                                    e.push(a);
                                    if (c) {
                                        e.push(c);
                                        r++
                                    }
                                    if (r >= t) return;
                                    if (i++ > 1e3) return
                                } else {
                                    e.push(n);
                                    i++
                                }
                        }
                        d(s, .75 * a);
                        for (var f = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) f.push(s.pop());
                        d(f, a - f.size());
                        for (var _ = new i; f.size();) _.push(f.pop());
                        return _
                    }
                }
            }();
            e.exports = n.quantize
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => d,
                vq: () => f,
                jW: () => _
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                u = n(73105),
                a = n(2590);

            function l(e, t, n) {
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
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function d(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function f(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var l, d, f = 0,
                        _ = 0;
                    if ("pageX" in e) {
                        f = e.pageX;
                        _ = e.pageY
                    }
                    if (0 === f && 0 === _) {
                        var E, p = null === (E = e.target) || void 0 === E ? void 0 : E.getBoundingClientRect(),
                            h = null != p ? p : {},
                            v = h.left,
                            I = void 0 === v ? 0 : v,
                            T = h.top,
                            m = void 0 === T ? 0 : T,
                            g = h.width,
                            O = void 0 === g ? 0 : g,
                            S = h.height;
                        f = I + O / 2;
                        _ = m + (void 0 === S ? 0 : S) / 2
                    }
                    var A = {
                        render: t,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(f, _, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (d = (0, i.GB)()) && void 0 !== d ? d : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var y = (0, u.RD)((function() {
                        y();
                        s(A)
                    }));
                    else {
                        e.preventDefault();
                        s(A)
                    }
                }
            }

            function _(e, t, n) {
                f(e, void 0, n, t)
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => u
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

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        201459: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(730381),
                i = n.n(r),
                o = n(575945),
                u = n(744564),
                a = n(52317),
                l = n(9430),
                c = n(171940),
                s = n(131559),
                d = n(473708);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n) {
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
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const p = {
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
                        i = (0, c.GA)(e),
                        o = (0, c.wK)(e, r);
                    a.Z.saveUserGuildSettings(e, t);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, c.Wq)(e, t, i, n);
                    Object.keys(t.channel_overrides).forEach((function(r) {
                        var i = o.get(r);
                        (0, c.jz)(e, r, t.channel_overrides[r], i, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(e, t) {
                    var n = Object.keys(e),
                        r = (0, c.rU)(n);
                    a.Z.saveUserGuildSettingsBulk(e);
                    Object.entries(e).forEach((function(e) {
                        var n = E(e, 2),
                            i = n[0],
                            o = n[1],
                            a = r.get(i);
                        u.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: o
                        });
                        (0, c.Wq)(i, o, a, t)
                    }))
                },
                updateChannelOverrideSettings: function(e, t, n, r) {
                    var i = (0, c.I)(e, t),
                        l = {
                            channel_overrides: _({}, t, n)
                        };
                    a.Z.saveUserGuildSettings(e, l);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: e,
                        channelId: t,
                        settings: n
                    });
                    o.uv.announce(d.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(e, t, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(e, t, n) {
                    var r = Object.keys(t),
                        i = {
                            channel_overrides: t
                        },
                        o = (0, c.wK)(e, r);
                    a.Z.saveUserGuildSettings(e, i);
                    u.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: t
                    });
                    Object.keys(t).forEach((function(r) {
                        return (0, c.jz)(e, r, t[r], o.get(r), n)
                    }))
                },
                setForumThreadsCreated: function(e, t) {
                    var n = t ? s.ic.NEW_FORUM_THREADS_ON : s.ic.NEW_FORUM_THREADS_OFF,
                        r = t ? s.ic.NEW_FORUM_THREADS_OFF : s.ic.NEW_FORUM_THREADS_ON,
                        i = l.Z.getChannelFlags(e) & ~r | n;
                    this.updateChannelOverrideSettings(e.guild_id, e.id, {
                        flags: i
                    })
                },
                handleCheckboxChange: function(e, t, n, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: _({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(e, t, n, r) {
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: _({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(e, t, n) {
                    var r = {
                        selected_time_window: t,
                        end_time: t > 0 ? i()().add(t, "second").toISOString() : null
                    };
                    u.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: _({}, e, r),
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
            "use strict";
            n.d(t, {
                In: () => _,
                U6: () => E,
                y5: () => p,
                iV: () => h,
                CZ: () => v,
                jT: () => I,
                Ju: () => T,
                FT: () => m
            });
            var r = n(842227),
                i = n(744564),
                o = n(18882),
                u = n(382060),
                a = n(61209),
                l = n(877475),
                c = n(473903),
                s = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
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
                    context: s.e3s,
                    location: o
                })
            }

            function E(e) {
                e.isCategory() ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = a.Z.getChannel(e);
                    if (null != r && null != r.guild_id) {
                        var i = l.Z.getCategories(r.guild_id);
                        if (null != i[e]) {
                            var c = i[e].filter((function(e) {
                                    var t = e.channel;
                                    return (0, u.vc)(t.type)
                                })).map((function(e) {
                                    return e.channel.id
                                })),
                                s = f(c);
                            c.forEach((function(e) {
                                var t = o.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
                                for (var n in t) s.push(n)
                            }));
                            var d = !0,
                                E = !1,
                                p = void 0;
                            try {
                                for (var h, v = s[Symbol.iterator](); !(d = (h = v.next()).done); d = !0) {
                                    _(h.value, t, n)
                                }
                            } catch (e) {
                                E = !0;
                                p = e
                            } finally {
                                try {
                                    d || null == v.return || v.return()
                                } finally {
                                    if (E) throw p
                                }
                            }
                        }
                    }
                }(e.id, !0, !0) : e.isForumLikeChannel() ? _(e.id, !0, !0, r.default.fromTimestamp(Date.now())) : _(e.id, !0, !0)
            }

            function p(e) {
                i.Z.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.e3s
                })
            }

            function h(e) {
                i.Z.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function v(e, t) {
                i.Z.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function I(e, t) {
                i.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function T(e, t, n) {
                i.Z.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function m(e, t) {
                var n;
                null != (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && i.Z.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => E,
                Gn: () => h,
                Y2: () => v,
                mE: () => I
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                u = n(615796),
                a = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function d(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            d(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            d(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var _ = function(e, t) {
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
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };

            function E(e, t, n, r, i) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = f((function(e, t, n, s, d) {
                    var f, E, p, h;
                    return _(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                _.label = 1;
                            case 1:
                                _.trys.push([1, 5, , 6]);
                                f = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                E = {};
                                null != t && (E.country_code = t);
                                null != n && (E.payment_source_id = n);
                                null != s && (E.include_unpublished = s);
                                null != d && (E.revenue_surface = d);
                                f.query = E;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                _.sent();
                                _.label = 3;
                            case 3:
                                return [4, r.ZP.get(f)];
                            case 4:
                                p = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: p.body
                                });
                                return [3, 6];
                            case 5:
                                h = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(h);
                                throw new o.Z(h);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return E(e, t)
                })))
            }

            function v(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return E(r, e, t, void 0, n)
                })))
            }

            function I() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        77413: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => M
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(973935),
                l = n(809784),
                c = n(202351),
                s = n(874049),
                d = n(968449),
                f = n(674482),
                _ = n(330484),
                E = n(775173),
                p = n(38004),
                h = n(771333),
                v = n(936957);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function O(e, t) {
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

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        m(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
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

            function b(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
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

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var P = function(e) {
                O(n, e);
                var t = C(n);

                function n() {
                    T(this, n);
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
                var o = n.prototype;
                o.componentWillUnmount = function() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                };
                o.getSrc = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = e.src,
                        n = e.emojiId,
                        r = e.emojiName,
                        i = e.animated,
                        o = e.shouldAnimate,
                        u = e.isFocused,
                        a = e.isInteracting,
                        l = e.size,
                        c = void 0 === l ? "default" : l,
                        s = this.state.hover;
                    if (null != t) return t;
                    if (null != n) {
                        var d = v.kV[c];
                        return E.ZP.getEmojiURL({
                            id: n,
                            animated: u && !0 === i && (!0 === o || s || !0 === a),
                            size: d
                        })
                    }
                    return null != r ? p.ZP.getURL(r) : void 0
                };
                o.render = function() {
                    var e, t, n = this.props,
                        o = n.emojiName,
                        a = n.animated,
                        l = n.className,
                        c = n.size,
                        s = void 0 === c ? "default" : c,
                        d = n.alt,
                        f = (n.shouldAnimate, n.isFocused, n.emojiId),
                        _ = (n.autoplay, n.isInteracting, y(n, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                        E = this.getSrc();
                    if (null == E || "" === E) return (0, r.jsx)("span", {
                        className: u()("emoji", "emoji-text"),
                        children: o
                    });
                    a && (e = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    });
                    return (0, i.createElement)("img", S(A(S(A(S({}, _), {
                        key: this.key,
                        src: E,
                        alt: null !== (t = null != d ? d : o) && void 0 !== t ? t : void 0,
                        draggable: !1
                    }), e), {
                        className: u()("emoji", l, {
                            jumboable: "jumbo" === s
                        }),
                        onError: this.onError,
                        "data-type": "emoji"
                    }), null != f && "" !== f ? {
                        "data-id": f
                    } : {
                        "data-name": o
                    }))
                };
                return n
            }(i.PureComponent);
            P.defaultProps = {
                isInteracting: !1
            };
            var U = function(e) {
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
                            var n = R(t, 2);
                            n[0];
                            return n[1] === e
                        }));
                        if (-1 !== n) {
                            c.splice(n, 1);
                            if (-1 !== (n = u.indexOf(e))) {
                                u.splice(n, 1);
                                n < o && u.length >= o && u[o - 1].forceUpdate()
                            }
                        } else 0
                    };
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, A(S({}, t), {
                        shouldAnimate: t.animated
                    }))
                };
                var o = 100,
                    u = [],
                    c = [],
                    s = new window.IntersectionObserver((function(e) {
                        e.forEach((function(e) {
                            var t = c.find((function(t) {
                                return R(t, 1)[0] === e.target
                            }));
                            if (null != t) {
                                var n = t[1];
                                if (e.intersectionRatio >= .7) {
                                    var r, i;
                                    if (-1 !== u.indexOf(n)) {
                                        0;
                                        return
                                    }
                                    var a = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                    a ? u.unshift(n) : u.push(n);
                                    n.forceUpdate();
                                    a && u.length > o && u[o].forceUpdate()
                                } else {
                                    var l = u.indexOf(n);
                                    if (-1 !== l) {
                                        u.splice(l, 1);
                                        n.forceUpdate();
                                        l < o && u.length >= o && u[o - 1].forceUpdate()
                                    }
                                }
                            } else 0
                        }))
                    }), {
                        threshold: .7
                    });
                return function(i) {
                    O(l, i);
                    var a = C(l);

                    function l() {
                        T(this, l);
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
                            i = this.shouldAutoplay(this.props);
                        i !== r && (i ? t(this) : n(this))
                    };
                    c.componentWillUnmount = function() {
                        this.shouldAutoplay(this.props) && n(this)
                    };
                    c.render = function() {
                        var t = u.indexOf(this),
                            n = this.props,
                            i = n.autoplay,
                            a = n.allowAnimatedEmoji,
                            l = y(n, ["autoplay", "allowAnimatedEmoji"]);
                        return (0,
                            r.jsx)(_.G.Consumer, {
                            children: function(n) {
                                return (0, r.jsx)(e, A(S({}, l), {
                                    autoplay: i || !1,
                                    shouldAnimate: -1 !== t && t < o && !n.disableAnimations && a
                                }))
                            }
                        })
                    };
                    return l
                }(i.Component)
            }(P);

            function M(e) {
                var t = d.Yk.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, c.e7)([f.Z], (function() {
                        return f.Z.isInstanceFocused()
                    })) : (0, h.n)();
                return (0, r.jsx)(U, A(S({}, e, n), {
                    isFocused: i
                }))
            }
        },
        567678: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
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

            function u(e) {
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

            function a(e, t) {
                return function(n) {
                    var o = (0,
                        i.Z)(t).AnalyticsLocationProvider;
                    return (0, r.jsx)(o, {
                        children: (0, r.jsx)(e, u({}, n))
                    })
                }
            }
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
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
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    return a(this, n)
                }
            }
            var d = function(e) {
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
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
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
        153686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => P,
                JS: () => C,
                hH: () => R,
                AB: () => U,
                ZP: () => Z,
                oG: () => G,
                kO: () => w,
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
                d = n(21372),
                f = n(567403),
                _ = n(525077),
                E = n(682776),
                p = n(491260),
                h = n(563367),
                v = n(715107),
                I = n(464187),
                T = n(407561),
                m = n(652591),
                g = n(563135),
                O = n(671723);
            var S = n(2590),
                A = n(897196);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
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

            function N(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function R(e) {
                if (null == e) return null;
                var t = f.Z.getGuild(e);
                if (null == t) return null;
                var n, r = a.default.getId(),
                    i = d.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    u = o[c.sH].length,
                    l = o[c.Zb].length,
                    _ = T.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: N(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = E.Z.getGuildPermissions(t)) && void 0 !== n ? n : g.ZP.NONE),
                    guild_is_vip: t.hasFeature(S.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(_)
                }
            }

            function L(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                return null == t ? null : P(t)
            }

            function P(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, S.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(e.type) && null != e.parent_id ? i(l.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = E.Z.getChannelPermissions(e)) && void 0 !== t ? t : g.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                if (null == t) return null;
                var n, r = _.Z.isVideoEnabled(),
                    i = h.Z.getMediaSessionId();
                return b({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, w(t.getGuildId(), t.id, r), {
                    game_name: null != (n = O.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function M(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function D(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!m.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== S.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? I.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? v.Z.getChannelId(i) : null,
                        u = l.Z.getChannel(o),
                        a = M(u, i),
                        c = b({}, t, R(a), null != i && null != o && (0, A.AB)(o) ? L(0, o) : P(u));
                    m.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function w(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(T.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== a.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function G(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(T.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != p.Z.findActivity(e.userId, (function(e) {
                        return e.type === S.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const Z = {
                trackWithMetadata: D,
                getVoiceStateMetadata: w
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => u,
                bB: () => a
            });
            var r, i, o, u, a;
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
                e.MJ_CHAT_BAR = "mj_chat_bar"
            }(u || (u = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(a || (a = {}))
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
        728998: (e, t, n) => {
            "use strict";
            n.d(t, {
                _: () => l
            });
            var r = n(409125),
                i = n(379991),
                o = n(664625),
                u = n(567403),
                a = n(407561);

            function l(e) {
                if (i.ZP.disableVoiceChannelChangeAlert) return !1;
                var t = r.Z.getRemoteSessionId();
                if (null != a.Z.getVoiceStateForSession(o.default.getId(), t)) return !1;
                if (!a.Z.isCurrentClientInVoiceChannel()) return !1;
                if (a.Z.isInChannel(e.id)) return !1;
                var n = u.Z.getGuild(e.getGuildId());
                return null == (null == n ? void 0 : n.afkChannelId) || !a.Z.isInChannel(n.afkChannelId)
            }
        },
        14096: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(116404),
                u = n(409125),
                a = n(784426),
                l = n(487685),
                c = n(671293),
                s = n(664625),
                d = n(715107),
                f = n(407561),
                _ = n(728998),
                E = n(2590);

            function p(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            p(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            p(o, r, i, u, a, "throw", e)
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
            var I = function(e, t) {
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
                                            value: o[1],
                                                done: !1
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
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };
            const T = {
                handleVoiceConnect: function(e) {
                    var t = e.channel,
                        p = e.connected,
                        T = e.needSubscriptionToAccess,
                        m = e.locked,
                        g = void 0 !== m && m,
                        O = e.routeDirectlyToChannel,
                        S = void 0 !== O && O,
                        A = e.bypassChangeModal,
                        y = e.bypassGuildIdCheck,
                        b = void 0 !== y && y;
                    return h((function() {
                        var e, m, O, y, N;
                        return I(this, (function(R) {
                            switch (R.label) {
                                case 0:
                                    e = this;
                                    return t.isThread() ? [4, c.Z.unarchiveThreadIfNecessary(t.id)] : [3, 3];
                                case 1:
                                    R.sent();
                                    return l.Z.hasJoined(t.id) ? [3, 3] : [4, c.Z.joinThread(t, "Join Voice")];
                                case 2:
                                    R.sent();
                                    R.label = 3;
                                case 3:
                                    m = u.Z.getRemoteSessionId();
                                    O = f.Z.getVoiceStateForSession(s.default.getId(), m);
                                    y = (null == O ? void 0 : O.channelId) === t.id;
                                    N = y || d.Z.getChannelId() === f.Z.getCurrentClientVoiceChannelId(t.guild_id);
                                    if (!A && !g && (0, _._)(t)) return [2, new Promise((function(o) {
                                        var u = e;
                                        (0, i.openModalLazy)(h((function() {
                                            var e, i;
                                            return I(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, n.e(51562).then(n.bind(n, 851562))];
                                                    case 1:
                                                        e = a.sent(), i = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(i, function(e) {
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
                                                                    return o(u.handleVoiceConnect({
                                                                        channel: t,
                                                                        connected: p,
                                                                        needSubscriptionToAccess: T,
                                                                        routeDirectlyToChannel: S,
                                                                        locked: g,
                                                                        bypassChangeModal: !0
                                                                    }))
                                                                }
                                                            }, e))
                                                        }]
                                                }
                                            }))
                                        })))
                                    }))];
                                    g || p || o.default.selectVoiceChannel(t.id);
                                    !__OVERLAY__ && (p || N || T || S) && function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = e.getGuildId();
                                        if (null == n && !t) throw new Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                        (0, a.uL)(E.Z5c.CHANNEL(n, e.id))
                                    }(t, b);
                                    return [2, !0]
                            }
                        }))
                    })).apply(this)
                }
            }
        },
        881580: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => y
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(971402),
                u = n(567678),
                a = n(153686),
                l = n(112897),
                c = n(13280),
                s = n(281873),
                d = n(422906),
                f = n(576668),
                _ = n(929653),
                E = n(721376),
                p = n(874710),
                h = n(703654),
                v = n(103314),
                I = n(313031),
                T = n(954814),
                m = n(839463),
                g = n(218318),
                O = n(40111),
                S = n(579583),
                A = n(473708);
            const y = (0, u.Z)((function(e) {
                var t = e.channel,
                    n = e.onSelect,
                    u = (0, d.Z)(t),
                    a = (0, _.Z)(t),
                    y = (0, g.Z)(t),
                    b = (0, s.Z)(t),
                    N = (0, v.Z)(t),
                    R = (0, f.Z)(t),
                    L = (0, l.Z)({
                        id: t.id,
                        label: A.Z.Messages.COPY_ID_THREAD
                    }),
                    C = (0, p.Z)(t, "Context Menu"),
                    P = (0, I.Z)(t),
                    U = (0, O.Z)(t),
                    M = (0, T.Z)(t),
                    D = (0, m.Z)(t.id),
                    w = (0, h.Z)(t),
                    G = (0, S.Z)(t),
                    Z = (0, E.Z)(t, {
                        hoist: !0
                    }),
                    F = (0,
                        c.Z)(t);
                return (0, r.jsxs)(i.Menu, {
                    navId: "thread-context",
                    onClose: o.Zy,
                    "aria-label": A.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: a
                    }, "mark-as-read"), (0, r.jsxs)(i.MenuGroup, {
                        children: [C, w, b, N, M, D, u, F]
                    }, "thread-actions"), (0, r.jsxs)(i.MenuGroup, {
                        children: [y, U]
                    }, "notifications"), (0, r.jsxs)(i.MenuGroup, {
                        children: [G, Z, P, R]
                    }, "admin-actions"), (0, r.jsx)(i.MenuGroup, {
                        children: L
                    }, "developer-actions")]
                })
            }), [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU])
        },
        929653: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(882723),
                u = n(496916),
                a = n(358969),
                l = n(536945),
                c = n(487685),
                s = n(382060),
                d = n(877475),
                f = n(179913),
                _ = n(2590),
                E = n(473708);

            function p(e) {
                var t = function(e) {
                    var t = (0, a.n2)(e.guild_id, e.id),
                        n = (0, i.e7)([f.ZP, d.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                            if (e.type === _.d4z.GUILD_CATEGORY) {
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
                    label: E.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.U6)(e)
                    },
                    disabled: !t
                })
            }
        },
        13280: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(882723),
                u = n(5544),
                a = n(419051),
                l = n(963985),
                c = n(790337),
                s = n(2590),
                d = n(473708);

            function f(e, t) {
                return e.type === s.d4z.GROUP_DM ? t ? d.Z.Messages.UNFAVORITE_GDM : d.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? t ? d.Z.Messages.UNFAVORITE_DM : d.Z.Messages.FAVORITE_DM : t ? d.Z.Messages.UNFAVORITE_CHANNEL : d.Z.Messages.FAVORITE_CHANNEL
            }

            function _(e) {
                var t = (0, i.e7)([a.Z], (function() {
                        return a.Z.isFavorite(e.id)
                    })),
                    n = function(e) {
                        var t = function(t) {
                                (0, l.kj)(e.id, t)
                            },
                            n = (0, i.e7)([u.ZP], (function() {
                                return u.ZP.getChannels(s.I_8)
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
                        return (0, r.jsx)(o.MenuItem, {
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
        372518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n(281110),
                i = n(744564),
                o = n(105783),
                u = n(671293),
                a = n(129586),
                l = n(858519),
                c = n(980204),
                s = n(854602),
                d = n(2590),
                f = n(473708);

            function _(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            _(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            _(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(e, t) {
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
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };

            function h(e, t, n) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = E((function(e, t, n) {
                    var r, i;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                u.trys.push([0, 2, , 3]);
                                return [4, e()];
                            case 1:
                                return [2, u.sent()];
                            case 2:
                                r = u.sent();
                                (null === (i = r.body) || void 0 === i ? void 0 : i.code) === d.evJ.NON_MODERATED_TAG_REQUIRED && o.Z.show({
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
            const I = {
                resort: function(e) {
                    i.Z.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: function(e, t) {
                    return r.ZP.post({
                        url: d.ANM.FORUM_TAGS(t),
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
                        url: d.ANM.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    h((function() {
                        return n
                    }), f.Z.Messages.FORUM_TAG_EDIT_ERROR, f.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag: function(e, t) {
                    var n = r.ZP.delete({
                        url: d.ANM.FORUM_TAG(e, t)
                    });
                    h((function() {
                        return n
                    }), f.Z.Messages.FORUM_TAG_REMOVE_ERROR, f.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: function(e, t) {
                    return E((function() {
                        return p(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u.Z.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    n.sent();
                                    return [2, r.ZP.patch({
                                        url: d.ANM.CHANNEL(e),
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
                    (0, a.a8)((0, c.UP)(e), t, n)
                },
                markPostAsUnseen: function(e, t, n) {
                    (0,
                        a.FL)((0, c.UP)(e), t, n)
                },
                flushSeenItems: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
                    (0, a.rS)((0, c.UP)(e), t)
                },
                searchForumPosts: function(e, t, n, r) {
                    return E((function() {
                        var o;
                        return p(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_START",
                                        channelId: t
                                    });
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, u.Z.searchThreads(e, t, n, r)];
                                case 2:
                                    o = a.sent();
                                    (0, s.Js)({
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
                                    a.sent();
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
        980204: (e, t, n) => {
            "use strict";
            n.d(t, {
                UP: () => f,
                rj: () => _,
                Ct: () => E,
                ZP: () => p
            });
            var r = n(129586),
                i = n(858519),
                o = n(854602),
                u = n(734901);

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
            var s = function(e) {
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
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }

            function f(e) {
                return "".concat(i.AT.FORUM_CHANNEL, "_").concat(e)
            }

            function _(e, t, n) {
                (0, r.a8)(f(e), t, n)
            }

            function E(e, t, n) {
                (0, r.FL)(f(e), t, n)
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
                    var r, i = e.guildId,
                        a = e.channelId,
                        l = e.windowId,
                        c = e.isPaused;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    (r = t.call(this, {
                        windowId: l,
                        isPaused: c,
                        id: f(a)
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
                                    u = e.isForcedFlush,
                                    a = [],
                                    l = [],
                                    c = !0,
                                    s = !1,
                                    d = void 0;
                                try {
                                    for (var f, _ = Object.keys(i)[Symbol.iterator](); !(c = (f = _.next()).done); c = !0) {
                                        var E = f.value,
                                            p = i[E].computeSeenTimeDestructive(u);
                                        if (p > 0) {
                                            a.push(E);
                                            l.push(p)
                                        }
                                    }
                                } catch (e) {
                                    s = !0;
                                    d = e
                                } finally {
                                    try {
                                        c || null == _.return || _.return()
                                    } finally {
                                        if (s) throw d
                                    }
                                }
                                0 !== a.length && (0, o.qs)({
                                    guildId: t,
                                    channelId: n,
                                    sessionId: r,
                                    postIds: a,
                                    additionalTimes: l
                                })
                            }(i)
                        }
                    };
                    r.guildId = i;
                    r.channelId = a;
                    r.sessionId = (0, u.WW)(a);
                    return r
                }
                return n
            }(i.zQ)
        },
        774930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(202351),
                i = n(409125);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return null != i.Z.getRemoteSessionId() || null != i.Z.getAwaitingRemoteSessionInfo()
                }))
            }
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => d,
                ws: () => i,
                tI: () => o,
                L9: () => f,
                no: () => _,
                ND: () => E,
                WC: () => h,
                z8: () => v,
                km: () => T,
                k0: () => m,
                af: () => g
            });
            var r, i, o, u, a = n(2590),
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

            function d(e) {
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
            }(i || (i = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function f(e) {
                switch (e) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var _ = (s(u = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(u, o.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }]), s(u, o.PRESET_CUSTOM, []), u),
                E = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_5
                }];

            function p(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var h = [p(r.RESOLUTION_720), p(r.RESOLUTION_1080), p(r.RESOLUTION_1440), p(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                v = [p(r.RESOLUTION_720), p(r.RESOLUTION_1080), p(r.RESOLUTION_1440)],
                I = function(e) {
                    return "".concat(e, "p")
                },
                T = [p(r.RESOLUTION_480, (function() {
                    return I(r.RESOLUTION_480)
                })), p(r.RESOLUTION_720, (function() {
                    return I(r.RESOLUTION_720)
                })), p(r.RESOLUTION_1080, (function() {
                    return I(r.RESOLUTION_1080)
                })), p(r.RESOLUTION_1440, (function() {
                    return I(r.RESOLUTION_1440)
                })), p(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                m = [p(i.FPS_15), p(i.FPS_30), p(i.FPS_60)],
                g = [p(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), p(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), p(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => d,
                YM: () => f,
                Dx: () => _,
                jD: () => E,
                bO: () => p,
                Xp: () => h,
                fV: () => v
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
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

            function d(e) {
                var t = (0,
                    r.e7)([a.ZP, i.Z], (function() {
                    return null != e && s(e.id, a.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function f(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, a.ZP, i.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var _ = (0, o.B)({
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
                E = (0, o.B)({
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
                p = (0, o.B)({
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
                h = ((0, o.B)({
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
                }), (0, o.B)({
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
                }), (0, o.B)({
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
                v = (0, o.B)({
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
            "use strict";
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                u = n(682776),
                a = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, u.Z], (function() {
                    return s(e, o.Z, i.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
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
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => le
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                u = n(202351),
                a = n(744564),
                l = n(656793),
                c = n(382060),
                s = n(61209),
                d = n(567403),
                f = n(179913),
                _ = n(715107),
                E = n(536945),
                p = n(487685),
                h = n(102921);

            function v(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = f.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = h.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var I = n(897196);

            function T(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        m(e, t, n[t])
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

            function A(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
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
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return A(this, n)
                }
            }
            var R = {},
                L = {},
                C = {},
                P = {},
                U = {},
                M = {},
                D = null,
                w = {};

            function G() {
                R = {};
                U = {};
                L = {};
                C = {};
                P = {};
                D = _.Z.getChannelId();
                for (var e in w) clearTimeout(w[e]);
                w = {};
                E.Z.forEachGuild((function(e) {
                    F(e)
                }));
                k()
            }

            function Z(e) {
                delete R[e];
                delete U[e];
                delete L[e];
                delete C[e];
                delete P[e];
                F(e);
                for (var t in C[e]) H(e, t)
            }

            function F(e) {
                var t = E.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        X(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = p.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = q(i),
                                    l = a.isUnread,
                                    c = a.isRelevant,
                                    d = a.isTimedRelevant;
                                Q(R, i, u, !1);
                                Q(U, i, c ? u : null, !1);
                                Q(L, i, l ? u : null, !1);
                                d && J(i, !0)
                            } else {
                                Q(C, i, i, !1);
                                var _ = f.ZP.isForumPostUnread(i.id);
                                Q(P, i, _ ? i : null, !1)
                            }
                        }
                    }
            }

            function k() {
                M = {};
                for (var e in C)
                    for (var t in C[e]) H(e, t)
            }

            function j(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && H(t.guild_id, t.id)
            }

            function H(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == M[e] && (M[e] = {});
                    M[e][t] = 0;
                    if (null != C[e] && null != C[e][t]) {
                        var r = d.Z.getGuild(e);
                        if (null != r) {
                            var i = f.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var a in C[e][t]) t === D ? f.ZP.isNewForumThread(a, t, r) && M[e][t]++ : o.default.compare(a, i) > 0 && !f.ZP.hasOpenedThread(a) && M[e][t]++
                        }
                    }
                }
            }

            function x(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = p.Z.joinTimestamp(n);
                if (null != r && E.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = q(r),
                            a = u.isUnread,
                            l = u.isRelevant,
                            c = u.isTimedRelevant;
                        Q(R, r, o, !0);
                        Q(U, r, l ? o : null, !0);
                        Q(L, r, a ? o : null, !0);
                        Q(C, r, null, !0);
                        Q(P, r, null, !0);
                        J(r, c)
                    } else {
                        var d = f.ZP.isForumPostUnread(r.id);
                        Q(R, r, null, !0);
                        Q(L, r, null, !0);
                        Q(U, r, null, !0);
                        Q(C, r, r, !0);
                        Q(P, r, d ? r : null, !0);
                        X(r.id)
                    }
                    H(e, t)
                } else {
                    $(R, e, t, n);
                    $(U, e, t, n);
                    $(L, e, t, n);
                    $(C, e, t, n);
                    $(P, e, t, n);
                    X(n);
                    H(e, t)
                }
            }

            function B(e) {
                return x(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function V(e, t) {
                if (null == t) return !1;
                var n = R[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = C[e],
                    u = null == o ? null : o[t];
                if (null != u)
                    for (var a in u)
                        if (u[a].isNSFW()) return !0;
                return !1
            }

            function Y(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !E.Z.isActive(e.guildId, t.parent_id, e.id)) && x(t.guild_id, t.parent_id, t.id)
            }

            function W(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) K();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!c.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = M[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            H(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(R, t)) {
                        var o = q(t),
                            u = o.isUnread,
                            a = o.isRelevant;
                        J(t, o.isTimedRelevant);
                        var l = ee(L, t),
                            d = ee(U, t);
                        if (u === l && a === d) return !1;
                        var _ = R[n][r][t.id],
                            E = a ? _ : null;
                        Q(L, t, u ? _ : null, !0);
                        Q(U, t, E, !0);
                        H(n, r)
                    } else {
                        var p = ee(P, t),
                            h = f.ZP.isForumPostUnread(t.id);
                        if (h === p) return !1;
                        Q(P, t, h ? t : null, !0)
                    }
                }
            }

            function K() {
                L = {};
                U = {};
                for (var e in R)
                    for (var t in R[e])
                        for (var n in R[e][t]) {
                            var r = R[e][t][n],
                                i = q(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && Q(L, r.channel, r, !1);
                            u && Q(U, r.channel, r, !1);
                            J(r.channel, a)
                        }
                P = {};
                for (var l in C)
                    for (var c in C[l])
                        for (var s in C[l][c]) {
                            var d = C[l][c][s];
                            f.ZP.isForumPostUnread(s) && Q(P, d, d, !1)
                        }
                k()
            }

            function z() {
                var e = D;
                if ((D = _.Z.getChannelId()) === e) return !1;
                j(e);
                j(D)
            }

            function q(e) {
                var t = f.ZP.getMentionCount(e.id) > 0,
                    n = f.ZP.hasRelevantUnread(e) && (!p.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(I.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && v(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function J(e, t) {
                X(e.id);
                t && function(e) {
                    w[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), v(e) - Date.now() + 1)
                }(e)
            }

            function X(e) {
                if (e in w) {
                    clearTimeout(w[e]);
                    delete w[e]
                }
            }

            function Q(e, t, n, r) {
                var o = t.guild_id,
                    u = t.parent_id,
                    a = t.id;
                if (null != o && null != u && null != a) {
                    o in e || (e[o] = {});
                    u in e[o] || (e[o][u] = {});
                    r && (e[o] = S(O({}, e[o]), m({}, u, O({}, e[o][u]))));
                    if (null === n) {
                        delete e[o][u][a];
                        i().isEmpty(e[o][u]) && delete e[o][u]
                    } else e[o][u][a] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = S(O({}, e[t]), m({}, n, O({}, e[t][n])));
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
                ue = {},
                ae = function(e) {
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
                    var t = N(n);

                    function n() {
                        T(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(E.Z, s.Z, p.Z, f.ZP);
                        this.syncWith([_.Z], z)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in L && t in L[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in C && null !== (n = C[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in R && null !== (n = R[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = L[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = U[e]) && void 0 !== t ? t : ne
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
                        return null !== (t = P[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = M[e]) && void 0 !== t ? t : ue
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in R)
                            if (n === e || null == e)
                                for (var r in R[n])
                                    for (var i in R[n][r]) t.push(R[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = M[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = C[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== u ? u : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: R,
                            activeJoinedUnreadThreads: L,
                            activeUnjoinedThreads: C,
                            activeUnjoinedUnreadThreads: P,
                            activeJoinedRelevantThreads: U,
                            newThreadCounts: M,
                            selectedChannelId: D,
                            timers: w,
                            NO_GUILD_UNJOINED_THREADS: re,
                            NO_JOINED_THREADS: ie,
                            NO_UNJOINED_THREADS: oe,
                            NO_NEW_THREADS: ue
                        }
                    };
                    return n
                }(u.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const le = new ae(a.Z, {
                CONNECTION_OPEN: G,
                OVERLAY_INITIALIZE: G,
                THREAD_LIST_SYNC: function(e) {
                    return Z(e.guildId)
                },
                LOAD_THREADS_SUCCESS: G,
                LOAD_ARCHIVED_THREADS_SUCCESS: G,
                SEARCH_FINISH: G,
                GUILD_CREATE: function(e) {
                    return Z(e.guild.id)
                },
                GUILD_DELETE: G,
                CURRENT_USER_UPDATE: G,
                THREAD_CREATE: B,
                THREAD_UPDATE: B,
                THREAD_DELETE: B,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== V(a.guild_id, a.parent_id)) {
                                G();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
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
                        if (t.guild_id in R && t.parent_id in R[t.guild_id]) {
                            delete R[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in L && t.parent_id in L[t.guild_id]) {
                            delete L[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in U && t.parent_id in U[t.guild_id]) {
                            Object.keys(U[t.guild_id][t.parent_id]).forEach(X);
                            delete U[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && H(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: Y,
                THREAD_MEMBERS_UPDATE: Y,
                LOAD_MESSAGES_SUCCESS: W,
                MESSAGE_CREATE: W,
                MESSAGE_DELETE: W,
                MESSAGE_DELETE_BULK: W,
                MESSAGE_ACK: W,
                CHANNEL_ACK: W,
                CHANNEL_LOCAL_ACK: W,
                CHANNEL_SELECT: function(e) {
                    W(e);
                    z()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && K()
                },
                WINDOW_FOCUS: K,
                UPDATE_CHANNEL_DIMENSIONS: K,
                DRAWER_OPEN: K,
                DRAWER_CLOSE: K,
                BULK_ACK: K
            })
        },
        225386: (e, t, n) => {
            "use strict";
            n.d(t, {
                tM: () => h,
                NE: () => v,
                ki: () => I,
                Xu: () => T,
                cD: () => m,
                Ek: () => O,
                JQ: () => S,
                C7: () => A,
                tc: () => N,
                kn: () => R,
                $R: () => L,
                RG: () => C,
                xl: () => P,
                Xb: () => M,
                Y: () => w,
                Gu: () => G
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(202351),
                a = n(249139),
                l = n(774930),
                c = n(791707),
                s = n(382060),
                d = n(664625),
                f = n(61209),
                _ = n(682776),
                E = n(18882),
                p = n(2590),
                h = (0, a.Z)({
                    id: "2022-07_voice_in_threads",
                    label: "Voice in Threads",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function v(e, t) {
                return g((0, u.e7)([_.Z], (function() {
                    var t = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : o.Z.combine(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
                    return _.Z.can(t, e)
                }), [e]), e, t)
            }

            function I(e, t) {
                var n = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : o.Z.combine(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
                return g(_.Z.can(n, e), e, t)
            }

            function T(e) {
                var t = (0, u.e7)([_.Z], (function() {
                    return _.Z.can(o.Z.combine(p.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === p.d4z.GUILD_TEXT && g(t, e)
            }

            function m(e) {
                var t = v(e),
                    n = T(e);
                return t || n
            }

            function g(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!s.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(p.iLy.HAS_THREAD)) return !1;
                    if ((0, c.Z)(n)) return !1
                }
                return !0
            }

            function O(e) {
                var t = (0, u.e7)([f.Z], (function() {
                    return f.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(p.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, u.e7)([_.Z], (function() {
                    return _.Z.can(p.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function S(e) {
                return (0, u.cj)([E.Z, _.Z], (function() {
                    var t = E.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = E.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = E.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(n).some((function(e) {
                            return _.Z.can(p.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(t).some((function(e) {
                            return !(e.channel.id in n) && _.Z.can(p.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(r).some((function(e) {
                            return _.Z.can(p.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: o || u || a,
                        hasMoreActiveThreads: a || u
                    }
                }))
            }

            function A(e) {
                var t = (0, u.e7)([f.Z], (function() {
                        return f.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    n = (0, u.e7)([_.Z], (function() {
                        return null != t && _.Z.can(p.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, u.e7)([d.default], (function() {
                        return d.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function y(e, t) {
                return null != e && t.can(p.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function b(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function N(e) {
                var t = (0, u.e7)([_.Z], (function() {
                        return y(e, _.Z)
                    })),
                    n = M(e);
                return b(e, t, n)
            }

            function R(e) {
                return b(e, y(e, _.Z), D(e))
            }

            function L(e) {
                var t, n = (0, u.e7)([_.Z], (function() {
                    return null != e && _.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function C(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && _.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function P(e) {
                var t = _.Z.can(p.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function U(e, t) {
                return null != e && t.can(p.Plq.MANAGE_THREADS, e)
            }

            function M(e) {
                return (0, u.e7)([_.Z], (function() {
                    return U(e, _.Z)
                }))
            }

            function D(e) {
                return U(e, _.Z)
            }

            function w(e) {
                var t = (0, l.Z)(),
                    n = (0, u.e7)([_.Z], (function() {
                        return _.Z.can(p.Plq.CONNECT, e)
                    })),
                    r = L(e),
                    i = h.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function G(e) {
                var t = M(e);
                return e.isLockedThread() && !t
            }
        },
        52317: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(281110),
                u = n(914716),
                a = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function d(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            d(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            d(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function _(e, t) {
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e) {
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

            function I(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }
            var m = function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var O = function(e, t) {
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
                                    o = t.call(e, u)
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
                            }([o, a])
                        }
                    }
                },
                S = {},
                A = new a.Z("UserGuildSettingsManager"),
                y = 0;

            function b() {
                S = h({}, l.Z.getCollapsedCategories())
            }

            function N() {
                if (!__OVERLAY__) {
                    clearTimeout(y);
                    y = setTimeout((function() {
                        return R()
                    }), 15e3)
                }
            }

            function R(e, t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = f((function(e, t) {
                    return O(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, C(null != t ? E({}, null != e ? e : s.ME, t) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function C(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = f((function(e) {
                    var t, n, r, u, a, d, f;
                    return O(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                clearTimeout(y);
                                t = 0 !== Object.keys(e).length;
                                n = l.Z.getCollapsedCategories();
                                r = U();
                                for (var E in r)
                                    if (null != (u = c.Z.getChannel(E)) && null != u.guild_id) {
                                        u.guild_id in e || (e[u.guild_id] = {});
                                        null == e[u.guild_id].channel_overrides && (e[u.guild_id].channel_overrides = {});
                                        e[u.guild_id].channel_overrides[u.id] = v(h({}, e[u.guild_id].channel_overrides[u.id]), {
                                            collapsed: u.id in n
                                        });
                                        t = !0
                                    } if (!t) return [2];
                                S = h({}, n);
                                a = i().map(e, (function(e, t) {
                                    return {
                                        guildId: t,
                                        updates: e,
                                        attempts: 0
                                    }
                                }));
                                _.label = 1;
                            case 1:
                                if (!(a.length > 0)) return [3, 8];
                                if ((d = a.shift()).guildId === s.I_8) return [3, 1];
                                _.label = 2;
                            case 2:
                                _.trys.push([2, 5, , 7]);
                                return [4, o.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(d.guildId),
                                    body: d.updates
                                })];
                            case 3:
                                _.sent();
                                return [4, M(1e3)];
                            case 4:
                                _.sent();
                                return [3, 7];
                            case 5:
                                f = _.sent();
                                A.error(f);
                                d.attempts += 1;
                                d.attempts < 3 && a.push(d);
                                return [4, M(5e3)];
                            case 6:
                                _.sent();
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
                var e = {},
                    t = l.Z.getCollapsedCategories();
                for (var n in t) t[n] !== S[n] && (e[n] = !0);
                for (var r in S) t[r] !== S[r] && (e[r] = !0);
                return e
            }

            function M(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e + Math.ceil(e * Math.random()))
                }))
            }

            function D() {
                S = h({}, l.Z.getCollapsedCategories())
            }
            const w = new(function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && T(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    _(this, n);
                    var e;
                    (e = t.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: N,
                        CATEGORY_EXPAND: N,
                        CATEGORY_COLLAPSE_ALL: N,
                        CATEGORY_EXPAND_ALL: N,
                        POST_CONNECTION_OPEN: b,
                        USER_GUILD_SETTINGS_FULL_UPDATE: D
                    };
                    e.saveUserGuildSettings = R;
                    e.saveUserGuildSettingsBulk = C;
                    return e
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        lastSavedCollapsedCategories: S,
                        logger: A,
                        syncTimer: y,
                        SYNC_DELAY_MS: 15e3
                    }
                };
                return n
            }(u.Z))
        },
        968968: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                i = n(744564),
                o = n(72580),
                u = n(61209),
                a = n(837067),
                l = n(5544),
                c = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function _(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    return _(this, n)
                }
            }
            var v = {},
                I = 0;

            function T() {
                I += 1
            }

            function m(e) {
                if (null == v[e]) return !1;
                delete v[e]
            }
            var g = function(e) {
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
                var t = h(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(u.Z, a.Z);
                    this.removeChangeListener(T);
                    this.addChangeListener(T);
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
                r.__getLocalVars = function() {
                    return {
                        collapsedCategories: v,
                        version: I
                    }
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return I
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            g.displayName = "CategoryCollapseStore";
            g.persistKey = "collapsedCategories";
            const O = new g(i.Z, {
                CONNECTION_OPEN: function(e) {
                    e.userGuildSettings.partial || (v = {});
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = e.userGuildSettings.entries[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var u = i.value;
                            if (null != u.channel_overrides) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, d = u.channel_overrides[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
                                        var f = s.value;
                                        f.collapsed ? v[f.channel_id] = !0 : delete v[f.channel_id]
                                    }
                                } catch (e) {
                                    l = !0;
                                    c = e
                                } finally {
                                    try {
                                        a || null == d.return || d.return()
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
                    for (var r in v) {
                        var i = u.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete v[i.id]
                    }
                    var a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, d = t[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) {
                            var f = s.value,
                                _ = !0,
                                E = !1,
                                p = void 0;
                            try {
                                for (var h, I = f.channel_overrides[Symbol.iterator](); !(_ = (h = I.next()).done); _ = !0) {
                                    var T = h.value;
                                    T.collapsed && (v[T.channel_id] = !0)
                                }
                            } catch (e) {
                                E = !0;
                                p = e
                            } finally {
                                try {
                                    _ || null == I.return || I.return()
                                } finally {
                                    if (E) throw p
                                }
                            }
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            a || null == d.return || d.return()
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
                    return m(e.id)
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
                    return m(e.channel.id)
                }
            })
        },
        877475: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => P
            });
            var r = n(202351),
                i = n(744564),
                o = n(777158),
                u = n(419051),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(567403),
                d = n(2590);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function E(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
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
            var h = function(e) {
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
                    return E(this, n)
                }
            }
            var I = null,
                T = {},
                m = null;
            var g = {
                _categories: [],
                null: []
            };

            function O(e, t) {
                e.index = t
            }

            function S(e) {
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
                t[d.d4z.GUILD_CATEGORY].forEach((function(e) {
                    var t = e.channel;
                    n._categories.push({
                        channel: t,
                        index: -1
                    });
                    n[t.id] = []
                }));
                t[c.sH].forEach(r);
                t[c.Zb].forEach(r);
                (0, o.Z)(n._categories, n).forEach(O);
                T[e] = n;
                return n
            }

            function A() {
                T = {};
                null != I && S(I)
            }

            function y(e) {
                var t = e.guild.id;
                T[t] = void 0;
                I === t && S(t)
            }

            function b(e) {
                var t = e.channel.guild_id;
                if (null == t) return !1;
                T[t] = void 0;
                I === t && S(t)
            }

            function N(e) {
                var t = e.guildId;
                T[t] = void 0;
                t === I && S(t)
            }

            function R(e, t) {
                m = t;
                if (null == e || null == e.getGuildId()) return !1;
                var n = e.getGuildId();
                if (null == n) return !1;
                T[n] = void 0;
                n === I && S(n);
                return !0
            }

            function L() {
                S(d.I_8)
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
                    t && p(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.ZP, s.Z, a.default, l.Z, u.Z);
                    this.syncWith([u.Z], L)
                };
                r.getCategories = function(e) {
                    return null != e ? function(e) {
                        var t = T[e];
                        return null != t ? t : S(e)
                    }(e) : g
                };
                r.__getLocalVars = function() {
                    return {
                        selectedGuildId: I,
                        guilds: T,
                        selectedVoiceChannelId: m,
                        EMPTY_CATEGORY_LISTS: g
                    }
                };
                return n
            }(r.ZP.Store);
            C.displayName = "GuildCategoryStore";
            const P = new C(i.Z, {
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId;
                    I = null != t ? t : null;
                    if (null == t) return !1;
                    if (null != T[t]) return !1;
                    S(t)
                },
                CONNECTION_OPEN: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED_LAZY: A,
                GUILD_CREATE: y,
                GUILD_UPDATE: y,
                GUILD_DELETE: function(e) {
                    var t = e.guild.id;
                    delete T[t]
                },
                CHANNEL_CREATE: b,
                CHANNEL_DELETE: b,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var l = u.value.guild_id;
                            if (null != l) {
                                T[l] = void 0;
                                n = !0;
                                I === l && S(l)
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.user;
                    if (a.default.getId() !== n.id) return !1;
                    T[t] = void 0;
                    t === I && S(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == I) return !1;
                    S(I)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null == t && null != m ? R(l.Z.getChannel(m), null) : R(l.Z.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.channelId,
                            r = t.sessionId;
                        return a.default.getSessionId() !== r ? e : R(l.Z.getChannel(n), n) || e
                    }), !1)
                }
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => H
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                d = n(473903),
                f = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function v(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
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

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || O(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || O(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }

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
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var A = Object.freeze([]),
                y = {},
                b = {},
                N = {},
                R = {},
                L = {};

            function C(e, t) {
                var n = y[e];
                return null != n ? n[t] : null
            }
            var P = function(e) {
                switch (e.type) {
                    case f.IIU.CUSTOM_STATUS:
                        return 4;
                    case f.IIU.COMPETING:
                        return 3;
                    case f.IIU.STREAMING:
                        return 2;
                    case f.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var U = function(e) {
                return (0, c.Z)(e) ? 1 : 0
            };

            function M(e, t) {
                return function(e, t) {
                    return P(t) - P(e)
                }(e, t) || function(e, t) {
                    return U(t) - U(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function D(e) {
                delete b[e];
                delete N[e];
                delete R[e];
                if (null != y[e]) {
                    var t = T(u().sortBy(y[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== f.Skl.OFFLINE) {
                        b[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else u().every(y[e], (function(e) {
                        return e.status === f.Skl.OFFLINE
                    })) && delete y[e]
                }
            }

            function w(e) {
                var t = y[e];
                if (null != t) {
                    var n = u().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== f.Skl.OFFLINE) {
                        b[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    }
                }
            }

            function G(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    u = e.activities;
                if (n === s.default.getId()) return !1;
                var a = y[n];
                if (null == a) {
                    if (r === f.Skl.OFFLINE) return !1;
                    a = y[n] = {}
                }
                if (r === f.Skl.OFFLINE) a[t] = {
                    status: r,
                    clientStatus: o,
                    activities: A,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? m(u).sort(M) : u,
                        c = a[t];
                    u = null != c && i()(c.activities, l) ? c.activities : l;
                    a[t] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete L[n];
                D(n);
                return !0
            }

            function Z(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    u = e.timestamp;
                if (n !== s.default.getId()) {
                    var a = y[n];
                    if (null == a) {
                        if (r === f.Skl.OFFLINE) return;
                        a = y[n] = {}
                    }
                    if (r === f.Skl.OFFLINE) a[t] = {
                        status: r,
                        clientStatus: i,
                        activities: A,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? m(o).sort(M) : o;
                        a[t] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function F(e, t) {
                if (t === s.default.getId()) return !1;
                var n = y[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete y[t];
                D(t)
            }

            function k(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(y)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        F(e, i.value)
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
            var j = function(e) {
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
                var t = S(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    b[s.default.getId()] = e;
                    N[s.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Skl.OFFLINE,
                        r = d.default.getUser(e);
                    null != r && r.hasFlag(f.xW$.BOT_HTTP_INTERACTIONS) && (n = f.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return f.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = b[e]) && void 0 !== i ? i : n
                    }
                    var o, u = C(e, t);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = N[e]) && void 0 !== n ? n : A
                    }
                    var r = C(e, t);
                    return null == r || null == r.activities ? A : r.activities
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
                        for (var o, u = Object.keys(N)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = N[a],
                                c = !0,
                                s = !1,
                                d = void 0;
                            try {
                                for (var f, _ = l[Symbol.iterator](); !(c = (f = _.next()).done); c = !0) {
                                    var E = f.value;
                                    E.application_id === e && t.push({
                                        userId: a,
                                        activity: E
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                d = e
                            } finally {
                                try {
                                    c || null == _.return || _.return()
                                } finally {
                                    if (s) throw d
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
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
                    return L[e]
                };
                r.getUserIds = function() {
                    return Object.keys(N)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[f.X5t.MOBILE] === f.Skl.ONLINE && t[f.X5t.DESKTOP] !== f.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: y,
                        statuses: b,
                        activities: N,
                        activityMetadata: L,
                        clientStatuses: R
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: A,
                        presencesForGuilds: y,
                        statuses: b,
                        activities: N,
                        clientStatuses: R,
                        activityMetadata: L,
                        typeScore: P,
                        richnessScore: U
                    }
                };
                return n
            }(a.ZP.Store);
            j.displayName = "PresenceStore";
            const H = new j(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    y = {};
                    L = {};
                    b = p({}, r, b[r]);
                    N = p({}, r, N[r]);
                    R = p({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                u = t.clientStatus,
                                a = t.activities;
                            Z({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            u = e.activities;
                        if (null != t) {
                            Z({
                                guildId: f.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(w)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    y = t.presencesForGuilds;
                    b = t.statuses;
                    N = t.activities;
                    L = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        G({
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
                    return F(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return G({
                            guildId: null != t ? t : f.ME,
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
                    k(f.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && G({
                            guildId: f.ME,
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
                    L[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && G({
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
                        null != e.presence && G({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = s.default.getId();
                    if (b[t] === e.status && N[t] === e.activities) return !1;
                    b[t] = e.status;
                    N[t] = e.activities;
                    delete L[t]
                }
            })
        },
        330484: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => r
            });
            var r = n(667294).createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        129586: (e, t, n) => {
            "use strict";
            n.d(t, {
                a8: () => i,
                FL: () => o,
                rS: () => u
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

            function u(e, t) {
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
                AT: () => c,
                cs: () => s,
                zQ: () => _
            });
            var r = n(441143),
                i = n.n(r),
                o = n(744564);

            function u(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            u(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var c, s, d = function(e, t) {
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
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };
            ! function(e) {
                e.GUILD_HOME = "guild_home";
                e.FORUM_CHANNEL = "forum_channel"
            }(c || (c = {}));
            ! function(e) {
                e[e.IMMEDIATE = 0] = "IMMEDIATE";
                e[e.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN";
                e[e.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY"
            }(s || (s = {}));
            var f = function() {
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
                            u = void 0;
                        try {
                            for (var a, l = this.seenIntervals[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                                var c = a.value;
                                if (null == c.endTimeMillis)
                                    if (e) {
                                        var s = Date.now();
                                        t += s - c.startTimeMillis;
                                        n.push({
                                            startTimeMillis: s
                                        })
                                    } else n.push(c);
                                else t += c.endTimeMillis - c.startTimeMillis
                            }
                        } catch (e) {
                            o = !0;
                            u = e
                        } finally {
                            try {
                                r || null == l.return || l.return()
                            } finally {
                                if (o) throw u
                            }
                        }
                        i()(n.length < 2, "there should only be a single left over data");
                        this.seenIntervals = n;
                        return Math.round(t)
                    };
                    return e
                }(),
                _ = function() {
                    function e(t) {
                        var n = t.id,
                            r = t.windowId,
                            i = t.isPaused,
                            u = this;
                        l(this, e);
                        this.initialize = function() {
                            var e, t;
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", u.handleFeedItemSeen);
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", u.handleFeedItemUnseen);
                            o.Z.subscribe("ANALYTICS_FEED_FLUSH", u.handleFeedItemFlush);
                            o.Z.subscribe("APP_STATE_UPDATE", u.handleAppStateUpdate);
                            o.Z.subscribe("DRAWER_OPEN", u.handleDrawerOpen);
                            o.Z.subscribe("DRAWER_CLOSE", u.handleDrawerClose);
                            o.Z.subscribe("WINDOW_FOCUS", u.handleWindowFocus);
                            null === (t = (e = u).onInitialize) || void 0 === t || t.call(e)
                        };
                        this.terminate = function() {
                            var e, t;
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", u.handleFeedItemSeen);
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", u.handleFeedItemUnseen);
                            o.Z.unsubscribe("ANALYTICS_FEED_FLUSH", u.handleFeedItemFlush);
                            o.Z.unsubscribe("APP_STATE_UPDATE", u.handleAppStateUpdate);
                            o.Z.unsubscribe("DRAWER_OPEN", u.handleDrawerOpen);
                            o.Z.unsubscribe("DRAWER_CLOSE", u.handleDrawerClose);
                            o.Z.unsubscribe("WINDOW_FOCUS", u.handleWindowFocus);
                            null === (t = (e = u).onTerminate) || void 0 === t || t.call(e);
                            u.maybeFlushSeenItems(s.IMMEDIATE)
                        };
                        this.handleFeedItemFlush = function(e) {
                            var t = e.id,
                                n = e.force;
                            u._id === t && u.maybeFlushSeenItems(n)
                        };
                        this.handleFeedItemSeen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === u._id)
                                if (u._paused) u._pausedFeedItemIds.add(o);
                                else {
                                    var a = u.getTrackedFeedItem(o).maybeMarkSeen(i);
                                    null === (n = (t = u).onFeedItemSeen) || void 0 === n || n.call(t, o, a)
                                }
                        };
                        this.handleFeedItemUnseen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === u._id) {
                                u._paused && u._pausedFeedItemIds.delete(o);
                                var a = u.getTrackedFeedItem(o).maybeMarkUnseen(i);
                                null === (n = (t = u).onFeedItemUnseen) || void 0 === n || n.call(t, o, a);
                                u.maybeFlushSeenItems()
                            }
                        };
                        this.getTrackedFeedItem = function(e) {
                            null == u.trackedFeedItems[e] && (u.trackedFeedItems[e] = new f);
                            return u.trackedFeedItems[e]
                        };
                        this.getVisibleFeedItemIds = function() {
                            var e = Object.keys(u.trackedFeedItems);
                            return new Set(e.filter((function(e) {
                                var t;
                                return null === (t = u.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                            })))
                        };
                        this.handleDrawerClose = function() {
                            u._isReactNavigationFocused && u.resume()
                        };
                        this.handleDrawerOpen = function() {
                            u._isReactNavigationFocused && u.pause()
                        };
                        this.handleAppStateUpdate = function(e) {
                            var t = e.state;
                            "active" === t && u._isReactNavigationFocused && u.resume();
                            if ("background" === t) {
                                u._isReactNavigationFocused && u.pause();
                                u.maybeFlushSeenItems(s.IMMEDIATE)
                            }
                        };
                        this.clearPausedFeedItemIds = function() {
                            u._pausedFeedItemIds = new Set;
                            u._paused = !1
                        };
                        this.pause = function() {
                            if (!u._paused) {
                                var e = u.getVisibleFeedItemIds();
                                e.forEach((function(e) {
                                    u.handleFeedItemUnseen({
                                        id: u._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                                    })
                                }));
                                u._paused = !0;
                                u._pausedFeedItemIds = e
                            }
                        };
                        this.resume = function() {
                            if (u._paused) {
                                u._paused = !1;
                                u._pausedFeedItemIds.forEach((function(e) {
                                    u.handleFeedItemSeen({
                                        id: u._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_SEEN"
                                    })
                                }));
                                u.clearPausedFeedItemIds()
                            }
                        };
                        this.handleReactNavigationFocus = function(e, t) {
                            u._isReactNavigationFocused = e;
                            u._isReactNavigationFocused && !t ? u.resume() : u.pause()
                        };
                        this.handleWindowFocus = function(e) {
                            u._windowId === e.windowId && (e.focused ? u.resume() : u.pause())
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
                        if (e === s.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                        var t, n = this.createFlushSeenItemsFunction(e);
                        if (null == n) return Promise.resolve();
                        this._lastFlushTimeMillis = Date.now();
                        return e === s.IMMEDIATE || e === s.IMMEDIATE_WITH_COOLDOWN ? new Promise((t = a((function(e) {
                            return d(this, (function(t) {
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
                            setTimeout(a((function() {
                                return d(this, (function(t) {
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
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => f,
                zp: () => _,
                Dc: () => E,
                rn: () => p,
                rv: () => h,
                XN: () => I,
                OF: () => T,
                fD: () => g,
                QB: () => O,
                Bo: () => S,
                c0: () => b
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(16243),
                l = n.n(a);

            function c(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            c(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            c(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var d = function(e, t) {
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
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };
            0;

            function f(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = e.minWidth,
                    u = void 0 === o ? 0 : o,
                    a = e.minHeight,
                    l = void 0 === a ? 0 : a;
                if (t !== r || n !== i) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), u);
                    var s = (n = Math.max(Math.round(n * c), l)) > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), u);
                    n = Math.max(Math.round(n * s), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function _(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return f({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function E(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = 1;
                t > r && (o = r / t);
                t = Math.round(t * o);
                var u = 1;
                (n = Math.round(n * o)) > i && (u = i / n);
                return Math.min(o * u, 1)
            }

            function p(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight;
                if (t === n) return 1;
                var o = Math.max(r / t, i / n);
                return Math.min(o, 1)
            }

            function h(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var v = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return v;
                var o = r.width = 0 === e.width ? 128 : e.width,
                    u = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, o, u);
                var a = function(e, t, n) {
                        for (var r, i, o, u, a, l = [], c = 0; c < t; c += n) {
                            i = e[0 + (r = 4 * c)];
                            o = e[r + 1];
                            u = e[r + 2];
                            (void 0 === (a = e[r + 3]) || a >= 125) && (i > 250 && o > 250 && u > 250 || l.push([i, o, u]))
                        }
                        return l
                    }(i.getImageData(0, 0, o, u).data, o * u, n),
                    c = l()(a, t);
                return "boolean" == typeof c ? v : c.palette()
            }
            var T = function(e) {
                    return m(e)
                },
                m = u().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(I(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function g(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        i()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function O(e) {
                var t = e.split(";base64,");
                i()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function S(e, t, n) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = s((function(e, t, n) {
                    var r;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, y(e).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function b(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = s((function(e) {
                    var t, n, r;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = i.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => K,
                WA: () => H,
                f5: () => k,
                Gb: () => M,
                Rs: () => B,
                _2: () => Y,
                gL: () => w,
                fG: () => Z
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                u = n.n(o),
                a = n(809784),
                l = n(296602),
                c = n(384411),
                s = n(72580),
                d = n(310126);

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var _ = function() {
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
                                    return d.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = d.ZP.requireModule("discord_spellcheck").cld;
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
                    t && f(e.prototype, t);
                    n && f(e, n)
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

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            h(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            h(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e, t) {
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
                                    o = t.call(e, u)
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
                            }([o, a])
                        }
                    }
                },
                g = new l.Z("Spellchecker"),
                O = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function S(e) {
                var t;
                e = null !== (t = E[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        u = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                g.error("".concat(e, " is not a valid locale."))
            }
            var A = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = T(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var u = this.getAvailableLanguages(t);
                        this.languageDetector = new _(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, a = null !== (o = u[e]) && void 0 !== o ? o : E[i];
                                null != a && n.setLocale(a)
                            }
                        }));
                        O.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        O.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = O.setLocale(e)) || void 0 === t || t.then((function(t) {
                            g.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                            var n, r = T(e.split("-"), 1)[0];
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
                        O.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && I(e.prototype, t);
                        n && I(e, n)
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
                y = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function b(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return y(e, t.target)
                }), !0)
            }

            function N() {
                return (N = v((function() {
                    var e, t, n, r;
                    return m(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, O.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(S).filter(s.lm);
                                b(r = new A(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function L(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            L(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            L(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var P = function(e, t) {
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
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };

            function U() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, R.nI)() && U()
            }
            var D = M() ? function() {
                return N.apply(this, arguments)
            }() : null;

            function w(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = C((function(e) {
                    var t;
                    return P(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = C((function(e) {
                    var t;
                    return P(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(e) {
                return j.apply(this, arguments)
            }

            function j() {
                j = C((function(e) {
                    var t, n, r = arguments;
                    return P(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, D];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return j.apply(this, arguments)
            }

            function H(e) {
                return x.apply(this, arguments)
            }

            function x() {
                x = C((function(e) {
                    var t, n, r, i = arguments;
                    return P(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, D];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return x.apply(this, arguments)
            }

            function B(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = C((function(e) {
                    var t;
                    return P(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = C((function(e) {
                    var t;
                    return P(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function K(e) {
                if (!U()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
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

            function u(e) {
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

            function l(e, t, n) {
                var r = t.trackedActionData,
                    o = a(t, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, l, a));
                        n(e)
                    }))
                }))
            }
            const c = {
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
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                o = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                u = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return i.test(e)
                },
                isPhoneNumber: function(e) {
                    return o.test(e)
                },
                isUserTagLike: function(e) {
                    var t = u.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = a.some((function(e) {
                                return n.includes(e)
                            })),
                            i = l.includes(n);
                        return !r && !i
                    }
                    return !1
                }
            }
        },
        771333: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => a
            });
            var r = n(667294),
                i = n(202351),
                o = n(26468),
                u = n(901654);

            function a() {
                var e = r.useContext(o.ZP).windowId;
                return (0, i.e7)([u.Z], (function() {
                    return u.Z.isFocused(e)
                }), [e])
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
        284157: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => r
            });
            var r;
            ! function(e) {
                e.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => r
            });
            var r;
            ! function(e) {
                e.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                e.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
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
        482507: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
        }
    }
]);