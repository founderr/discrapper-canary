(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14606], {
        511227: (e, t, n) => {
            e.exports = n.p + "c8f0b54f79a9fd1ef60ad74c73a1ee1a.png"
        },
        699433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                i = n(202351),
                o = n(285991),
                s = n(634698),
                a = n(664625);

            function l(e, t) {
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
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c() {
                var e = u((0, i.Wu)([a.default], (function() {
                        return [a.default.isAuthenticated(), null != a.default.getAnalyticsToken()]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    l = (0, s.Z)(t);
                r.useEffect((function() {
                    l || !t || n || o.k({
                        withAnalyticsToken: !0
                    })
                }), [l, t, n])
            }
        },
        792800: (e, t, n) => {
            "use strict";
            n.d(t, {
                PR: () => E,
                EM: () => O,
                Tt: () => _,
                yY: () => g,
                ZD: () => m
            });
            var r = n(667294),
                i = n(38736);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function a(e, t) {
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
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || c(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || c(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                }
            }
            var f = {
                    base: n(120415).FB ? void 0 : "Discord"
                },
                h = 0,
                d = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                p = (0, i.Z)((function() {
                    return {
                        titles: [f],
                        notificationCount: void 0,
                        flashQueue: []
                    }
                }));

            function E(e) {
                p.setState({
                    notificationCount: e
                })
            }

            function O(e) {
                var t = a(function(e) {
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
                }({}, d, e), {
                    id: h++
                });
                t.count = Math.max(t.count, t.messages.length);
                p.setState((function(e) {
                    return {
                        flashQueue: u(e.flashQueue).concat([t])
                    }
                }));
                return function() {
                    return S(t.id)
                }
            }

            function S(e) {
                p.setState((function(t) {
                    return {
                        flashQueue: t.flashQueue.filter((function(t) {
                            return t.id !== e
                        }))
                    }
                }))
            }

            function _(e) {
                r.useEffect((function() {
                    return function(e) {
                        p.setState((function(t) {
                            return {
                                titles: [e].concat(u(t.titles))
                            }
                        }));
                        return function() {
                            p.setState((function(t) {
                                return {
                                    titles: t.titles.filter((function(t) {
                                        return t !== e
                                    }))
                                }
                            }))
                        }
                    }(e)
                }), u(Object.values(e)))
            }

            function g(e) {
                _(e);
                return null
            }

            function y() {
                var e = l(p((function(e) {
                        var t = e.flashQueue,
                            n = function(e) {
                                var t, n, r, i = !0,
                                    o = !1,
                                    s = void 0;
                                try {
                                    for (var a, l = e.titles[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                                        var u = a.value;
                                        if (null != t && null != n) break;
                                        t = null != t ? t : u.base;
                                        n = null != n ? n : u.location;
                                        r = null != r ? r : u.subsection
                                    }
                                } catch (e) {
                                    o = !0;
                                    s = e
                                } finally {
                                    try {
                                        i || null == l.return || l.return()
                                    } finally {
                                        if (o) throw s
                                    }
                                }
                                return [t, r, n]
                            }(e).filter((function(e) {
                                return null != e
                            })).join(" | "),
                            r = function(e) {
                                var t = e.notificationCount;
                                return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                            }(e);
                        return ["".concat(r).concat(n), t[0]]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    i = l(r.useState(!1), 2),
                    o = i[0],
                    s = i[1],
                    a = r.useRef(0),
                    u = null == n ? void 0 : n.messages[a.current % n.messages.length];
                r.useEffect((function() {
                    if (null != n) {
                        if (!document.hasFocus() || !n.onlyWhenBlurred) {
                            var e = setInterval((function() {
                                if (a.current >= n.count) {
                                    S(n.id);
                                    s(!1)
                                } else s((function(e) {
                                    if (e) {
                                        a.current += 1;
                                        return !1
                                    }
                                    return !0
                                }))
                            }), n.interval);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                        S(n.id);
                        s(!1)
                    } else {
                        a.current = 0;
                        s(!1)
                    }
                }), [n]);
                return o ? u : t
            }

            function v() {
                r.useEffect((function() {
                    var e = function() {
                        p.setState({
                            flashQueue: []
                        })
                    };
                    document.addEventListener("focusin", e, {
                        capture: !0
                    });
                    return function() {
                        return document.removeEventListener("focusin", e, {
                            capture: !0
                        })
                    }
                }), [])
            }

            function m() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).skipsSettingDefaultPageTitle;
                v();
                var t = y();
                r.useEffect((function() {
                    e && t === f.base || (document.title = t)
                }), [e, t])
            }
        },
        505633: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => c,
                y: () => f
            });
            var r = n(517563),
                i = n(940060),
                o = n(61209),
                s = n(464187),
                a = n(563135),
                l = n(234831),
                u = n(520453);

            function c(e) {
                var t = e.filter((function(e) {
                    return !l.up.includes(e)
                }));
                t.includes(u.xV.BOT) && !t.includes(u.xV.APPLICATIONS_COMMANDS) && t.push(u.xV.APPLICATIONS_COMMANDS);
                return t
            }

            function f(e) {
                var t, n = (0, r.parse)(e, {
                        arrayFormat: "bracket"
                    }),
                    l = a.ZP.NONE;
                try {
                    l = i.Z.deserialize(null != n.permissions && "" !== n.permissions ? n.permissions : "0")
                } catch (e) {}
                var u, c, f, h, d, p = n.channel_id,
                    E = null !== (f = null !== (c = null !== (u = n.guild_id) && void 0 !== u ? u : null === (t = o.Z.getChannel(p)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== c ? c : s.Z.getGuildId()) && void 0 !== f ? f : void 0;
                return {
                    clientId: null !== (h = n.client_id) && void 0 !== h ? h : "",
                    scopes: (null !== (d = n.scope) && void 0 !== d ? d : "").split(" ").filter((function(e) {
                        return e.length > 0
                    })),
                    responseType: n.response_type,
                    redirectUri: n.redirect_uri,
                    codeChallenge: n.code_challenge,
                    codeChallengeMethod: n.code_challenge_method,
                    state: n.state,
                    permissions: l,
                    channelId: p,
                    guildId: E,
                    prompt: n.prompt,
                    disableGuildSelect: "true" === n.disable_guild_select
                }
            }
        },
        12212: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => c,
                Iq: () => f,
                Ww: () => d,
                UR: () => E,
                c$: () => S,
                tV: () => _,
                tR: () => y,
                i2: () => m
            });
            var r = n(80783),
                i = n(281110),
                o = n(84441),
                s = n(2590);

            function a(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            a(o, r, i, s, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, i, o, s = {
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
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
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

            function c(e) {
                return i.ZP.post({
                    url: s.ANM.OAUTH2_WHITELIST_ACCEPT,
                    query: {
                        token: e
                    },
                    oldFormErrors: !0
                })
            }

            function f(e) {
                return h.apply(this, arguments)
            }

            function h() {
                h = l((function(e) {
                    var t, n, r, o, a, l, c, f, h, d, p, E;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = e.authorize, n = e.clientId, r = e.scopes, o = e.responseType, a = e.redirectUri, l = e.codeChallenge, c = e.codeChallengeMethod, f = e.state, h = e.permissions, d = e.guildId, p = e.channelId, E = e.mfaCode;
                                return [4, i.ZP.post({
                                    url: s.ANM.OAUTH2_AUTHORIZE,
                                    query: {
                                        client_id: n,
                                        response_type: o,
                                        redirect_uri: a,
                                        code_challenge: l,
                                        code_challenge_method: c,
                                        scope: r.join(" "),
                                        state: f
                                    },
                                    body: {
                                        guild_id: d,
                                        webhook_channel_id: null != d && null != p ? p : void 0,
                                        channel_id: null == d && null != p ? p : void 0,
                                        permissions: h,
                                        authorize: t,
                                        code: E
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, u.sent().body]
                        }
                    }))
                }));
                return h.apply(this, arguments)
            }

            function d(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = l((function(e) {
                    var t, n, r, o, a, l, c;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = e.clientId, n = e.scopes, r = e.responseType, o = e.redirectUri, a = e.codeChallenge, l = e.codeChallengeMethod, c = e.state;
                                return [4, i.ZP.get({
                                    url: s.ANM.OAUTH2_AUTHORIZE,
                                    query: {
                                        client_id: t,
                                        response_type: r,
                                        redirect_uri: o,
                                        code_challenge: a,
                                        code_challenge_method: l,
                                        scope: n.join(" "),
                                        state: c
                                    },
                                    retries: 3,
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, u.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function E(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = l((function(e) {
                    return u(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.ZP.get({
                                    url: s.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
                                    query: {
                                        guild_id: e
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, t.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e) {
                o.Z.logout((0, r.U)(e.pathname + e.search, !1))
            }

            function _(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = l((function(e) {
                    return u(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.ZP.post({
                                    url: s.ANM.OAUTH2_DEVICE_VERIFY,
                                    body: {
                                        user_code: e
                                    }
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e, t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = l((function(e, t) {
                    return u(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, i.ZP.post({
                                    url: s.ANM.OAUTH2_DEVICE_FINISH,
                                    body: {
                                        user_code: e,
                                        result: t
                                    }
                                })];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e, t, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = l((function(e, t, n) {
                    return u(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, i.ZP.post({
                                    url: s.ANM.OAUTH2_DEVICE_FINISH,
                                    body: {
                                        user_code: e,
                                        result: "two_way_link_error",
                                        error_code: t,
                                        error_source: n
                                    }
                                })];
                            case 1:
                                return [2, r.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        721160: (e, t, n) => {
            "use strict";
            n.d(t, {
                VY: () => l,
                _$: () => u,
                wt: () => f
            });
            var r = n(940060),
                i = n(2590),
                o = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a, l = [i.Plq.ADMINISTRATOR, i.Plq.MANAGE_GUILD, i.Plq.MANAGE_ROLES, i.Plq.MANAGE_CHANNELS, i.Plq.KICK_MEMBERS, i.Plq.BAN_MEMBERS, i.Plq.CREATE_INSTANT_INVITE, i.Plq.MANAGE_NICKNAMES, i.Plq.CHANGE_NICKNAME, i.Plq.MANAGE_GUILD_EXPRESSIONS, i.Plq.CREATE_GUILD_EXPRESSIONS, i.Plq.MANAGE_WEBHOOKS, i.Plq.VIEW_AUDIT_LOG, i.Plq.VIEW_CHANNEL, i.Plq.MANAGE_EVENTS, i.Plq.CREATE_EVENTS, i.Plq.MODERATE_MEMBERS, i.Plq.VIEW_GUILD_ANALYTICS, i.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, i.Plq.SEND_MESSAGES, i.Plq.SEND_MESSAGES_IN_THREADS, i.Plq.CREATE_PUBLIC_THREADS, i.Plq.CREATE_PRIVATE_THREADS, i.Plq.SEND_TTS_MESSAGES, i.Plq.MANAGE_MESSAGES, i.Plq.MANAGE_THREADS, i.Plq.EMBED_LINKS, i.Plq.ATTACH_FILES, i.Plq.READ_MESSAGE_HISTORY, i.Plq.MENTION_EVERYONE, i.Plq.ADD_REACTIONS, i.Plq.USE_EXTERNAL_EMOJIS, i.Plq.USE_EXTERNAL_STICKERS, i.Plq.USE_APPLICATION_COMMANDS, i.Plq.SEND_VOICE_MESSAGES, i.Plq.USE_CLYDE_AI, i.Plq.CONNECT, i.Plq.SPEAK, i.Plq.MUTE_MEMBERS, i.Plq.DEAFEN_MEMBERS, i.Plq.MOVE_MEMBERS, i.Plq.USE_VAD, i.Plq.PRIORITY_SPEAKER, i.Plq.REQUEST_TO_SPEAK, i.Plq.STREAM, i.Plq.USE_EMBEDDED_ACTIVITIES, i.Plq.USE_SOUNDBOARD, i.Plq.USE_EXTERNAL_SOUNDS, i.Plq.SET_VOICE_CHANNEL_STATUS];

            function u(e) {
                return Object.values(i.Plq).some((function(t) {
                    return r.Z.has(e, t) && !l.includes(t)
                }))
            }
            var c = (s(a = {}, i.Plq.ADMINISTRATOR.toString(), (function() {
                    return o.Z.Messages.ADMINISTRATOR
                })), s(a, i.Plq.MANAGE_GUILD.toString(), (function() {
                    return o.Z.Messages.MANAGE_SERVER
                })), s(a, i.Plq.MANAGE_ROLES.toString(), (function() {
                    return o.Z.Messages.MANAGE_ROLES
                })), s(a, i.Plq.MANAGE_CHANNELS.toString(), (function() {
                    return o.Z.Messages.MANAGE_CHANNELS
                })), s(a, i.Plq.KICK_MEMBERS.toString(), (function() {
                    return o.Z.Messages.KICK_MEMBERS
                })), s(a, i.Plq.BAN_MEMBERS.toString(), (function() {
                    return o.Z.Messages.BAN_MEMBERS
                })), s(a, i.Plq.CREATE_INSTANT_INVITE.toString(), (function() {
                    return o.Z.Messages.CREATE_INSTANT_INVITE
                })), s(a, i.Plq.MANAGE_NICKNAMES.toString(), (function() {
                    return o.Z.Messages.MANAGE_NICKNAMES
                })), s(a, i.Plq.CHANGE_NICKNAME.toString(), (function() {
                    return o.Z.Messages.CHANGE_NICKNAME
                })), s(a, i.Plq.MANAGE_GUILD_EXPRESSIONS.toString(), (function() {
                    return o.Z.Messages.MANAGE_EXPRESSIONS
                })),
                s(a, i.Plq.CREATE_GUILD_EXPRESSIONS.toString(), (function() {
                    return o.Z.Messages.CREATE_EXPRESSIONS
                })), s(a, i.Plq.MANAGE_WEBHOOKS.toString(), (function() {
                    return o.Z.Messages.MANAGE_WEBHOOKS
                })), s(a, i.Plq.VIEW_AUDIT_LOG.toString(), (function() {
                    return o.Z.Messages.VIEW_AUDIT_LOG
                })), s(a, i.Plq.VIEW_CHANNEL.toString(), (function() {
                    return o.Z.Messages.READ_MESSAGES
                })), s(a, i.Plq.SEND_MESSAGES.toString(), (function() {
                    return o.Z.Messages.SEND_MESSAGES
                })), s(a, i.Plq.SEND_TTS_MESSAGES.toString(), (function() {
                    return o.Z.Messages.SEND_TTS_MESSAGES
                })), s(a, i.Plq.MANAGE_MESSAGES.toString(), (function() {
                    return o.Z.Messages.MANAGE_MESSAGES
                })), s(a, i.Plq.EMBED_LINKS.toString(), (function() {
                    return o.Z.Messages.EMBED_LINKS
                })), s(a, i.Plq.ATTACH_FILES.toString(), (function() {
                    return o.Z.Messages.ATTACH_FILES
                })), s(a, i.Plq.READ_MESSAGE_HISTORY.toString(), (function() {
                    return o.Z.Messages.READ_MESSAGE_HISTORY
                })), s(a, i.Plq.MENTION_EVERYONE.toString(), (function() {
                    return o.Z.Messages.MENTION_EVERYONE
                })),
                s(a, i.Plq.ADD_REACTIONS.toString(), (function() {
                    return o.Z.Messages.ADD_REACTIONS
                })), s(a, i.Plq.USE_EXTERNAL_EMOJIS.toString(), (function() {
                    return o.Z.Messages.USE_EXTERNAL_EMOJIS
                })), s(a, i.Plq.USE_EXTERNAL_STICKERS.toString(), (function() {
                    return o.Z.Messages.USE_EXTERNAL_STICKERS
                })), s(a, i.Plq.USE_APPLICATION_COMMANDS.toString(), (function() {
                    return o.Z.Messages.USE_APPLICATION_COMMANDS
                })), s(a, i.Plq.SEND_VOICE_MESSAGES.toString(), (function() {
                    return o.Z.Messages.SEND_VOICE_MESSAGE
                })), s(a, i.Plq.CONNECT.toString(), (function() {
                    return o.Z.Messages.CONNECT
                })), s(a, i.Plq.SPEAK.toString(), (function() {
                    return o.Z.Messages.SPEAK
                })), s(a, i.Plq.MUTE_MEMBERS.toString(), (function() {
                    return o.Z.Messages.MUTE_MEMBERS
                })), s(a, i.Plq.DEAFEN_MEMBERS.toString(), (function() {
                    return o.Z.Messages.DEAFEN_MEMBERS
                })), s(a, i.Plq.MOVE_MEMBERS.toString(), (function() {
                    return o.Z.Messages.MOVE_MEMBERS
                })), s(a, i.Plq.USE_VAD.toString(), (function() {
                    return o.Z.Messages.USE_VAD
                })), s(a, i.Plq.PRIORITY_SPEAKER.toString(), (function() {
                    return o.Z.Messages.PRIORITY_SPEAKER
                })), s(a, i.Plq.CREATE_PUBLIC_THREADS.toString(), (function() {
                    return o.Z.Messages.CREATE_PUBLIC_THREADS
                })), s(a, i.Plq.CREATE_PRIVATE_THREADS.toString(), (function() {
                    return o.Z.Messages.CREATE_PRIVATE_THREADS
                })), s(a, i.Plq.SEND_MESSAGES_IN_THREADS.toString(), (function() {
                    return o.Z.Messages.SEND_MESSAGES_IN_THREADS
                })), s(a, i.Plq.MANAGE_THREADS.toString(), (function() {
                    return o.Z.Messages.MANAGE_THREADS
                })), s(a, i.Plq.MANAGE_EVENTS.toString(), (function() {
                    return o.Z.Messages.MANAGE_EVENTS
                })), s(a, i.Plq.CREATE_EVENTS.toString(), (function() {
                    return o.Z.Messages.CREATE_EVENTS
                })), s(a, i.Plq.MODERATE_MEMBERS.toString(), (function() {
                    return o.Z.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL
                })), s(a, i.Plq.REQUEST_TO_SPEAK.toString(), (function() {
                    return o.Z.Messages.REQUEST_TO_SPEAK
                })), s(a, i.Plq.VIEW_GUILD_ANALYTICS.toString(), (function() {
                    return o.Z.Messages.VIEW_GUILD_ANALYTICS
                })), s(a, i.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString(), (function() {
                    return o.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS
                })), s(a, i.Plq.STREAM.toString(), (function() {
                    return o.Z.Messages.VIDEO
                })), s(a, i.Plq.USE_EMBEDDED_ACTIVITIES.toString(), (function() {
                    return o.Z.Messages.USE_EMBEDDED_ACTIVITIES
                })), s(a, i.Plq.USE_SOUNDBOARD.toString(), (function() {
                    return o.Z.Messages.USE_SOUNDBOARD
                })), s(a, i.Plq.USE_EXTERNAL_SOUNDS.toString(), (function() {
                    return o.Z.Messages.USE_EXTERNAL_SOUNDS
                })), s(a, i.Plq.USE_CLYDE_AI.toString(), (function() {
                    return o.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI
                })), s(a, i.Plq.SET_VOICE_CHANNEL_STATUS.toString(), (function() {
                    return o.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
                })), a);

            function f(e) {
                var t = e.toString(),
                    n = c[t];
                if (null == n) throw new Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return n()
            }
        },
        234831: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZW: () => o,
                Qe: () => s,
                ak: () => a,
                up: () => l,
                jW: () => u,
                W3: () => c
            });
            var r = n(2590),
                i = n(473708),
                o = [function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_1
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_2
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_3
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_4
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_5
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_6
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_7
                }, function() {
                    return i.Z.Messages.OAUTH2_FAKE_SCOPE_8
                }],
                s = [r.xVR.BOT, r.xVR.IDENTIFY, r.xVR.EMAIL, r.xVR.CONNECTIONS, r.xVR.MESSAGES_READ, r.xVR.GUILDS, r.xVR.GUILDS_JOIN, r.xVR.GUILDS_MEMBERS_READ, r.xVR.GDM_JOIN, r.xVR.RPC, r.xVR.RPC_NOTIFICATIONS_READ, r.xVR.RPC_VOICE_READ, r.xVR.RPC_VOICE_WRITE, r.xVR.RPC_VIDEO_READ, r.xVR.RPC_VIDEO_WRITE, r.xVR.RPC_SCREENSHARE_READ, r.xVR.RPC_SCREENSHARE_WRITE, r.xVR.RPC_ACTIVITIES_WRITE, r.xVR.APPLICATIONS_BUILDS_UPLOAD, r.xVR.APPLICATIONS_BUILDS_READ, r.xVR.APPLICATIONS_COMMANDS, r.xVR.APPLICATIONS_COMMANDS_UPDATE, r.xVR.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, r.xVR.APPLICATIONS_STORE_UPDATE, r.xVR.APPLICATIONS_ENTITLEMENTS, r.xVR.ACTIVITIES_READ, r.xVR.ACTIVITIES_WRITE, r.xVR.RELATIONSHIPS_READ, r.xVR.VOICE, r.xVR.DM_CHANNELS_READ, r.xVR.ROLE_CONNECTIONS_WRITE],
                a = s.concat([r.xVR.WEBHOOK_INCOMING, r.xVR.BOT]),
                l = ["rpc.api"];

            function u(e, t) {
                switch (e) {
                    case r.xVR.IDENTIFY:
                        return i.Z.Messages.SCOPE_IDENTIFY;
                    case r.xVR.EMAIL:
                        return i.Z.Messages.SCOPE_EMAIL;
                    case r.xVR.BOT:
                        return i.Z.Messages.SCOPE_BOT;
                    case r.xVR.CONNECTIONS:
                        return i.Z.Messages.SCOPE_CONNECTIONS;
                    case r.xVR.MESSAGES_READ:
                        return i.Z.Messages.SCOPE_MESSAGES_READ;
                    case r.xVR.GUILDS:
                        return i.Z.Messages.SCOPE_GUILDS;
                    case r.xVR.GUILDS_JOIN:
                        return i.Z.Messages.SCOPE_GUILDS_JOIN;
                    case r.xVR.GUILDS_MEMBERS_READ:
                        return t.includes(r.xVR.VOICE) ? i.Z.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE : i.Z.Messages.SCOPE_GUILDS_MEMBERS_READ;
                    case r.xVR.GDM_JOIN:
                        return i.Z.Messages.SCOPE_GDM_JOIN;
                    case r.xVR.RPC:
                        return i.Z.Messages.SCOPE_RPC;
                    case r.xVR.RPC_NOTIFICATIONS_READ:
                        return i.Z.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
                    case r.xVR.RPC_VOICE_WRITE:
                        return i.Z.Messages.SCOPE_RPC_VOICE_WRITE;
                    case r.xVR.RPC_VIDEO_READ:
                        return i.Z.Messages.SCOPE_RPC_VIDEO_READ;
                    case r.xVR.RPC_VIDEO_WRITE:
                        return i.Z.Messages.SCOPE_RPC_VIDEO_WRITE;
                    case r.xVR.RPC_SCREENSHARE_READ:
                        return i.Z.Messages.SCOPE_RPC_SCREENSHARE_READ;
                    case r.xVR.RPC_SCREENSHARE_WRITE:
                        return i.Z.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
                    case r.xVR.RPC_VOICE_READ:
                        return i.Z.Messages.SCOPE_RPC_VOICE_READ;
                    case r.xVR.RPC_ACTIVITIES_WRITE:
                        return i.Z.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
                    case r.xVR.APPLICATIONS_BUILDS_UPLOAD:
                        return i.Z.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
                    case r.xVR.APPLICATIONS_BUILDS_READ:
                        return i.Z.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
                    case r.xVR.APPLICATIONS_COMMANDS:
                        return i.Z.Messages.SCOPE_APPLICATIONS_COMMANDS;
                    case r.xVR.APPLICATIONS_COMMANDS_UPDATE:
                        return i.Z.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
                    case r.xVR.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                        return i.Z.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
                    case r.xVR.APPLICATIONS_STORE_UPDATE:
                        return i.Z.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
                    case r.xVR.APPLICATIONS_ENTITLEMENTS:
                        return i.Z.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
                    case r.xVR.ACTIVITIES_READ:
                        return i.Z.Messages.SCOPE_ACTIVITIES_READ;
                    case r.xVR.ACTIVITIES_WRITE:
                        return i.Z.Messages.SCOPE_ACTIVITIES_WRITE;
                    case r.xVR.RELATIONSHIPS_READ:
                        return i.Z.Messages.SCOPE_RELATIONSHIPS_READ;
                    case r.xVR.VOICE:
                        return i.Z.Messages.SCOPE_VOICE;
                    case r.xVR.DM_CHANNELS_READ:
                        return i.Z.Messages.SCOPE_DM_CHANNELS_READ;
                    case r.xVR.ROLE_CONNECTIONS_WRITE:
                        return i.Z.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
                    default:
                        return e
                }
            }

            function c(e) {
                return e.includes(r.xVR.MESSAGES_READ) ? i.Z.Messages.OAUTH2_CAN_READ_NOTICE.format() : i.Z.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
            }
        },
        534368: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => r
            });
            var r;
            ! function(e) {
                e.NONE = "none";
                e.CONSENT = "consent"
            }(r || (r = {}))
        },
        514606: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                OAuth2Authorize: () => ke,
                OAuth2AuthorizeModal: () => We,
                OAuth2AuthorizePage: () => Ge,
                getOAuth2AuthorizeProps: () => Ye,
                openOAuth2Modal: () => Fe,
                useOAuth2AuthorizeForm: () => qe
            });
            var r = n(785893),
                i = n(667294),
                o = n(751615),
                s = n(608575),
                a = n(940060),
                l = n(304221),
                u = n(109255),
                c = n(264817),
                f = n(882784),
                h = n(756505),
                d = n(802695),
                p = n(541732),
                E = n(396043),
                O = n(699433),
                S = n(784426),
                _ = n(722406),
                g = n(664625),
                y = n(563135),
                v = n(585622),
                m = n(505633),
                b = n(12212);

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        A(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e, t) {
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
            var T = n(721160),
                N = n(234831),
                R = n(534368),
                M = n(294184),
                C = n.n(M),
                w = n(449401),
                x = n(963881),
                j = n(349491),
                D = n(788137),
                L = n(202469),
                Z = n(661123),
                U = n(102921),
                H = n(473708);

            function V(e) {
                return null != e.privacy_policy_url && null != e.terms_of_service_url ? H.Z.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_LINKS.format({
                    application: e.name,
                    privacyPolicyURL: e.privacy_policy_url,
                    termsOfServiceURL: e.terms_of_service_url
                }) : null != e.privacy_policy_url ? H.Z.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_PRIVACY_POLICY_LINK.format({
                    application: e.name,
                    privacyPolicyURL: e.privacy_policy_url
                }) : null != e.terms_of_service_url ? H.Z.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_TERMS_OF_SERVICE_LINK.format({
                    application: e.name,
                    termsOfServiceURL: e.terms_of_service_url
                }) : H.Z.Messages.OAUTH2_DETAILS_PRIVACY_POLICY.format({
                    application: e.name
                })
            }
            var G = n(2590),
                W = n(520453),
                k = n(14821),
                q = n.n(k);

            function B(e) {
                var t, n, i = e.application,
                    o = e.scopes,
                    s = e.redirectUri,
                    a = e.approximateGuildCount,
                    l = e.isEmbeddedFlow,
                    u = new Date(U.Z.extractTimestamp(i.id)),
                    c = (0, N.W3)(o),
                    f = (0, Z.yE)(null !== (t = i.flags) && void 0 !== t ? t : 0, G.udG.EMBEDDED);
                if (null != s && !f && !l) {
                    var h = new URL(s);
                    n = null != h.host && h.host.length > 0 ? h.origin : h.href
                }
                return (0,
                    r.jsxs)("div", {
                    className: q().applicationDetails,
                    children: [null != n ? (0, r.jsx)(F, {
                        className: q().redirectWarning,
                        icon: x.Z,
                        text: H.Z.Messages.OAUTH2_DETAILS_REDIRECT.format({
                            origin: n
                        })
                    }) : null, (0, r.jsx)(F, {
                        icon: j.Z,
                        text: V(i)
                    }), (0, r.jsx)(F, {
                        icon: w.Z,
                        text: H.Z.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                            date: u
                        })
                    }), o.includes(W.xV.BOT) && null != a ? (0, r.jsx)(F, {
                        icon: D.Z,
                        text: H.Z.Messages.OAUTH2_DETAILS_GUILDS.format({
                            guildCount: a
                        })
                    }) : null, (0, r.jsx)(F, {
                        icon: L.Z,
                        text: c
                    })]
                })
            }

            function F(e) {
                var t = e.icon,
                    n = e.text,
                    i = e.className;
                return (0, r.jsxs)("div", {
                    className: C()(q().entry, i),
                    children: [(0, r.jsx)(t, {
                        className: q().entryIcon
                    }), (0, r.jsx)(d.x, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: q().entryInner,
                        children: n
                    })]
                })
            }
            var Y = n(989824),
                z = n(621329),
                X = n(189865),
                K = n(696789),
                $ = n.n(K);

            function Q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function J(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e) {
                var t = e.application,
                    n = e.accountScopes,
                    i = e.errors,
                    o = e.isTrustedName,
                    s = void 0 !== o && o,
                    a = (0, Y.Z)((function() {
                        return N.ZW[Math.floor(Math.random() * N.ZW.length)]
                    }));
                if (0 === n.length) return null;
                var l, c = n.map((function(e) {
                        var t, o = (0, N.jW)(e, n),
                            s = J(null !== (t = null == i ? void 0 : i[e]) && void 0 !== t ? t : [], 1)[0];
                        return (0, r.jsxs)("div", {
                            className: $().scope,
                            children: [(0, r.jsx)("div", {
                                className: $().scopeCheck,
                                children: (0, r.jsx)(z.Z, {
                                    className: $().icon
                                })
                            }), (0, r.jsxs)("div", {
                                className: $().scopeInner,
                                children: [(0, r.jsx)(d.x, {
                                    variant: "text-md/medium",
                                    children: o
                                }), null != s ? (0, r.jsx)(d.x, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: s
                                }) : null]
                            })]
                        }, e)
                    })),
                    f = (0, r.jsxs)("div", {
                        className: $().scope,
                        children: [(0, r.jsx)("div", {
                            className: $().scopeTimes,
                            children: (0, r.jsx)(X.Z, {
                                className: $().icon
                            })
                        }), (0, r.jsx)("div", {
                            className: $().scopeInner,
                            children: (0, r.jsx)(d.x, {
                                variant: "text-md/normal",
                                className: $().scopeName,
                                children: a()
                            })
                        })]
                    }),
                    h = s ? H.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : H.Z.Messages.OAUTH2_SCOPES_LABEL;
                return (0, r.jsxs)("div", {
                    className: $().scopes,
                    children: [(0, r.jsx)(u.X, {
                        variant: "heading-deprecated-12/semibold",
                        className: $().sectionLabel,
                        children: h.format({
                            application: null !== (l = null == t ? void 0 : t.name) && void 0 !== l ? l : ""
                        })
                    }), c, f]
                })
            }
            var te = n(382587),
                ne = n(225174),
                re = n.n(ne);

            function ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ie(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e) {
                var t = e.application,
                    n = e.permissions,
                    o = e.deniedPermissions,
                    s = e.onPermissionsChange,
                    l = e.guild,
                    u = oe(i.useState(y.ZP.NONE), 2),
                    c = u[0],
                    f = u[1];
                i.useEffect((function() {
                    s(!0, n);
                    f(a.Z.invert(l.permissions));
                    s(!1, a.Z.invert(l.permissions))
                }), [l, s, n]);
                var h = T.VY.filter((function(e) {
                        return a.Z.has(n, e)
                    })),
                    p = h.filter((function(e) {
                        return !a.Z.has(c, e)
                    })).map((function(e) {
                        var t = (0, T.wt)(e),
                            n = !a.Z.has(o, e);
                        return (0, r.jsx)("li", {
                            className: re().permission,
                            children: (0, r.jsx)(te.X, {
                                value: n,
                                onChange: function(t, n) {
                                    return s(n, e)
                                },
                                type: te.X.Types.INVERTED,
                                children: (0, r.jsx)(d.x, {
                                    variant: "text-md/normal",
                                    children: t
                                })
                            })
                        }, String(e))
                    })),
                    E = h.filter((function(e) {
                        return a.Z.has(c, e)
                    })).map((function(e) {
                        var t = (0, T.wt)(e);
                        return (0, r.jsxs)("li", {
                            className: re().permission,
                            children: [(0, r.jsx)("div", {
                                className: re().disabledPermissionIcon,
                                children: (0, r.jsx)(X.Z, {
                                    className: re().icon
                                })
                            }), (0, r.jsx)(d.x, {
                                variant: "text-md/normal",
                                children: t
                            })]
                        }, String(e))
                    }));
                return (0, r.jsxs)("div", {
                    className: re().botPermissions,
                    children: [(0, r.jsx)(d.x, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: re().permissionsLabel,
                        children: H.Z.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                            applicationName: t.name,
                            guildName: l.name
                        })
                    }), (0, r.jsx)("ul", {
                        className: re().permissionsList,
                        children: p
                    }), E.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.x, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: re().disabledPermissionsLabel,
                            children: H.Z.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                                applicationName: t.name
                            })
                        }), (0, r.jsx)("ul", {
                            className: re().permissionsList,
                            children: E
                        })]
                    }) : null]
                })
            }
            var ae = n(965268),
                le = n(146532),
                ue = n.n(le);

            function ce(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function fe(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function he(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            fe(o, r, i, s, a, "next", e)
                        }

                        function a(e) {
                            fe(o, r, i, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function de(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var pe = function(e, t) {
                var n, r, i, o, s = {
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
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
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

            function Ee(e) {
                var t = e.error,
                    n = e.selectedGuildId,
                    i = e.onGuildChange,
                    o = e.guilds,
                    s = e.disabled,
                    l = void 0 !== s && s,
                    c = o.filter((function(e) {
                        return a.Z.has(e.permissions, G.Plq.MANAGE_GUILD)
                    })).map((function(e) {
                        return {
                            value: e.id,
                            label: e.name
                        }
                    }));
                return (0, r.jsxs)("div", {
                    className: ue().selectorGroup,
                    children: [(0, r.jsx)(u.X, {
                        variant: "heading-deprecated-12/semibold",
                        className: ue().sectionLabel,
                        children: H.Z.Messages.OAUTH2_ADD_TO_GUILD
                    }), null != t && "" !== t ? (0, r.jsx)(d.x, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: t
                    }) : null, (0, r.jsx)(ae.V, {
                        wrapperClassName: ue().wrapper,
                        className: ue().select,
                        maxVisibleItems: 5,
                        value: n,
                        placeholder: H.Z.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                        options: c,
                        onChange: function(e) {
                            i(e)
                        },
                        isDisabled: l
                    }), (0, r.jsx)(d.x, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        className: ue().label,
                        children: H.Z.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
                    })]
                })
            }

            function Oe(e) {
                var t = e.selectedGuildId,
                    n = e.selectedChannelId,
                    o = e.onChannelChange,
                    s = e.error,
                    a = de(i.useState(null), 2),
                    l = a[0],
                    c = a[1];
                i.useEffect((function() {
                    function e() {
                        e = he((function() {
                            var e;
                            return pe(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return null == t ? [3, 2] : [4, (0, b.UR)(t)];
                                    case 1:
                                        e = n.sent();
                                        c(e);
                                        n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }));
                        return e.apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [t]);
                i.useEffect((function() {
                    null != l && null != n && null == l.find((function(e) {
                        return e.id === n
                    })) && o(null)
                }), [l, o, n]);
                var f = (null != l ? l : []).map((function(e) {
                    return {
                        value: e.id,
                        label: e.name
                    }
                }));
                return null == t ? null : (0, r.jsxs)("div", {
                    className: ue().selectorGroup,
                    children: [(0, r.jsx)(u.X, {
                        variant: "heading-deprecated-12/semibold",
                        className: ue().sectionLabel,
                        children: H.Z.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
                    }), null != s && "" !== s ? (0, r.jsx)(d.x, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: s
                    }) : null, (0, r.jsx)(ae.V, {
                        wrapperClassName: ue().wrapper,
                        className: ue().select,
                        maxVisibleItems: 5,
                        onChange: function(e) {
                            o(e)
                        },
                        placeholder: H.Z.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                        value: n,
                        options: f
                    }), (0, r.jsx)(d.x, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: ue().label,
                        children: H.Z.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
                    })]
                })
            }
            var Se = n(325290),
                _e = n(47289),
                ge = n(609853),
                ye = n(775173),
                ve = n(56138),
                me = n(148922),
                be = n.n(me);

            function Ae(e) {
                var t = e.id,
                    n = e.user,
                    i = e.application,
                    o = e.bot,
                    s = e.accountScopes,
                    a = e.showLogout,
                    l = e.location,
                    u = e.isTrustedName,
                    c = ye.ZP.getApplicationIconURL({
                        id: i.id,
                        icon: i.icon
                    }),
                    f = ye.ZP.getUserAvatarURL(n);
                return (0, r.jsxs)("header", {
                    id: t,
                    className: be().header,
                    children: [(0, r.jsxs)("div", {
                        className: be().headerIcons,
                        children: [(0, r.jsx)(Se.q, {
                            src: c,
                            size: ve.EF.SIZE_80,
                            "aria-label": i.name
                        }), (0, r.jsxs)("div", {
                            className: be().ellipseGroup,
                            children: [(0, r.jsx)("div", {
                                className: be().ellipse
                            }), (0, r.jsx)("div", {
                                className: be().ellipse
                            }), (0,
                                r.jsx)("div", {
                                className: be().ellipse
                            })]
                        }), (0, r.jsx)(Se.q, {
                            src: f,
                            size: ve.EF.SIZE_80,
                            "aria-label": n.username
                        })]
                    }), !u && (0, r.jsx)(d.x, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: be().label,
                        children: H.Z.Messages.OAUTH2_THIRD_PARTY_APPLICATION
                    }), (0, r.jsxs)(d.x, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: [i.name, null != o ? (0, r.jsx)(ge.Z, {
                            className: be().botTag,
                            verified: null != o.public_flags && (0, Z.yE)(o.public_flags, G.xW$.VERIFIED_BOT)
                        }) : null]
                    }), s.length > 0 ? (0, r.jsx)(d.x, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: be().label,
                        children: H.Z.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
                    }) : (0, r.jsx)(d.x, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: be().label,
                        children: H.Z.Messages.OAUTH2_CONNECT_TO_DISCORD
                    }), a ? (0, r.jsx)("div", {
                        className: be().currentUser,
                        children: (0, r.jsxs)(d.x, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [H.Z.Messages.OAUTH2_SIGNED_IN_AS.format({
                                userHook: function() {
                                    return (0, r.jsxs)(d.x, {
                                        className: be().currentUserTag,
                                        variant: "text-sm/normal",
                                        children: [n.username, !n.isPomelo() && (0, r.jsx)(d.x, {
                                            className: be().currentUserDiscriminator,
                                            variant: "text-sm/normal",
                                            children: "#".concat(n.discriminator)
                                        })]
                                    }, n.id)
                                }
                            }), (0, r.jsx)(_e.P, {
                                tag: "a",
                                className: be().logoutLink,
                                onClick: function() {
                                    return (0, b.c$)(l)
                                },
                                children: H.Z.Messages.OAUTH2_LOGOUT
                            })]
                        })
                    }) : null]
                })
            }
            var Ie = n(177309),
                Pe = n(772068),
                Te = n(898913),
                Ne = n.n(Te);

            function Re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Me(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function Ce(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            Me(o, r, i, s, a, "next", e)
                        }

                        function a(e) {
                            Me(o, r, i, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function we(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        we(e, t, n[t])
                    }))
                }
                return e
            }

            function je(e, t) {
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

            function De(e, t) {
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

            function Le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Re(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Re(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ze, Ue, He = function(e, t) {
                    var n, r, i, o, s = {
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
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2];
                                                s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, s)
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
                Ve = "oauth2-authorize-header-id";
            ! function(e) {
                e[e.NOT_LOADED = 0] = "NOT_LOADED";
                e[e.LOADING = 1] = "LOADING";
                e[e.LOADED = 2] = "LOADED"
            }(Ze || (Ze = {}));
            ! function(e) {
                e[e.AUTHORIZE_SCOPES = 0] = "AUTHORIZE_SCOPES";
                e[e.AUTHORIZE_BOT_PERMISSIONS = 1] = "AUTHORIZE_BOT_PERMISSIONS";
                e[e.AUTHORIZE_MFA = 2] = "AUTHORIZE_MFA"
            }(Ue || (Ue = {}));

            function Ge() {
                var e = (0, o.TH)(),
                    t = i.useMemo((function() {
                        return (0, m.y)(e.search)
                    }), [e.search]);
                (0, O.Z)();
                return (0, r.jsx)(Ie.G, {
                    children: (0, r.jsx)(ke, je(xe({}, t), {
                        showLogout: !0
                    }))
                })
            }

            function We(e) {
                var t = e.transitionState,
                    n = De(e, ["transitionState"]);
                return (0, r.jsx)(Ie.j, {
                    transitionState: t,
                    "aria-labelledby": Ve,
                    children: (0, r.jsx)(ke, je(xe({}, n), {
                        scrollable: !0
                    }))
                })
            }

            function ke(e) {
                var t = e.scrollable,
                    n = qe(De(e, ["scrollable"])),
                    i = n.header,
                    o = n.body,
                    s = n.footer,
                    a = n.nextStep,
                    l = n.appDetails,
                    u = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: Ne().content,
                            children: [i, o, null == a ? l : null]
                        }), s]
                    });
                return t ? (0,
                    r.jsx)("div", {
                    className: Ne().authorize,
                    children: (0, r.jsx)(f.zJ, {
                        orientation: "auto",
                        children: u
                    })
                }) : (0, r.jsx)("div", {
                    className: Ne().authorize,
                    children: (0, r.jsx)("div", {
                        children: u
                    })
                })
            }

            function qe(e) {
                var t, n, c, f, O = e.clientId,
                    A = e.scopes,
                    M = e.responseType,
                    C = e.redirectUri,
                    w = e.codeChallenge,
                    x = e.codeChallengeMethod,
                    j = e.state,
                    D = e.guildId,
                    L = e.channelId,
                    Z = e.permissions,
                    U = e.prompt,
                    V = e.disableGuildSelect,
                    W = e.showLogout,
                    k = void 0 !== W && W,
                    q = e.authorization,
                    F = e.callback,
                    Y = e.callbackWithoutPost,
                    z = e.onClose,
                    X = e.cancelCompletesFlow,
                    K = void 0 === X || X,
                    $ = e.isTrustedName,
                    Q = void 0 !== $ && $,
                    J = e.isEmbeddedFlow,
                    te = void 0 !== J && J,
                    ne = i.useMemo((function() {
                        return (0, m.K)(A)
                    }), [A]),
                    re = (0, o.TH)(),
                    ie = Le(i.useState(Ze.NOT_LOADED), 2),
                    oe = ie[0],
                    ae = ie[1],
                    le = Le(i.useState(null), 2),
                    ue = le[0],
                    ce = le[1],
                    fe = Le(i.useState(null), 2),
                    he = fe[0],
                    de = fe[1],
                    pe = Le(i.useState(y.ZP.NONE), 2),
                    Se = pe[0],
                    _e = pe[1],
                    ge = Le(i.useState(Ue.AUTHORIZE_SCOPES), 2),
                    ye = ge[0],
                    ve = ge[1],
                    me = Le(i.useState(null), 2),
                    be = me[0],
                    Ie = me[1],
                    Te = Le(i.useState(N.Qe.filter((function(e) {
                        return ne.includes(e)
                    }))), 1)[0],
                    Re = Le(i.useState(null != D ? D : null), 2),
                    Me = Re[0],
                    we = Re[1],
                    xe = Le(i.useState(null != L ? L : null), 2),
                    je = xe[0],
                    De = xe[1],
                    Ge = Le(i.useState(null), 2),
                    We = Ge[0],
                    ke = Ge[1],
                    qe = Le(i.useState(!1), 2),
                    Be = qe[0],
                    Fe = qe[1],
                    Ye = i.useMemo((function() {
                        var e;
                        return null == ue || null === (e = ue.guilds) || void 0 === e ? void 0 : e.find((function(e) {
                            return e.id === Me
                        }))
                    }), [null == ue ? void 0 : ue.guilds, Me]),
                    ze = i.useCallback((f = Ce((function(e) {
                        var t, n, r, i, o, l;
                        return He(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    if (null != Y) {
                                        Y(e);
                                        return [2]
                                    }
                                    if (!e && !K) {
                                        if (null != F) {
                                            F({
                                                application: null == ue ? void 0 : ue.application,
                                                guild: Ye
                                            });
                                            null == z || z()
                                        }
                                        return [2]
                                    }
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    Fe(!0);
                                    return [4, (0, b.Iq)({
                                        authorize: e,
                                        clientId: O,
                                        scopes: ne,
                                        responseType: M,
                                        redirectUri: C,
                                        codeChallenge: w,
                                        codeChallengeMethod: x,
                                        state: j,
                                        permissions: a.Z.remove(null != Z ? Z : y.ZP.NONE, Se),
                                        guildId: null != Me ? Me : void 0,
                                        channelId: null != je ? je : void 0,
                                        mfaCode: null != We ? We : void 0
                                    })];
                                case 2:
                                    t = u.sent();
                                    if (null != F) {
                                        F({
                                            application: null == ue ? void 0 : ue.application,
                                            location: t.location,
                                            guild: Ye
                                        });
                                        null == z || z()
                                    } else if (null != t.location) {
                                        n = s.parse(t.location), r = n.host, i = n.path;
                                        v.Z.isDiscordHostname(r) && i === G.Z5c.OAUTH2_AUTHORIZED ? (0, S.uL)(G.Z5c.OAUTH2_AUTHORIZED, {
                                            state: {
                                                application: null == ue ? void 0 : ue.application,
                                                guild: Ye
                                            }
                                        }) : window.location = t.location
                                    } else Fe(!1);
                                    return [3, 4];
                                case 3:
                                    o = u.sent();
                                    l = o.body;
                                    de(l);
                                    if (l.code === G.evJ.MFA_INVALID_CODE) ve(Ue.AUTHORIZE_MFA);
                                    else if (null != l.message && "" !== l.message) {
                                        Ie(new Error(l.message));
                                        ve(Ue.AUTHORIZE_SCOPES)
                                    } else {
                                        Ie(l);
                                        ve(Ue.AUTHORIZE_SCOPES)
                                    }
                                    ae(Ze.LOADED);
                                    Fe(!1);
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return f.apply(this, arguments)
                    }), [F, Y, O, w, x, Se, z, Z, C, M, ne, Me, je, j, K, We, null == ue ? void 0 : ue.application, Ye]),
                    Xe = i.useRef(!1),
                    Ke = i.useCallback(Ce((function() {
                        var e, t, n, r, i;
                        return He(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (oe !== Ze.NOT_LOADED) return [2];
                                    ae(Ze.LOADING);
                                    if (!g.default.isAuthenticated()) {
                                        (0, b.c$)(re);
                                        return [2]
                                    }
                                    if (Xe.current) return [2];
                                    Xe.current = !0;
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 5, 6, 7]);
                                    if (null == q) return [3, 2];
                                    t = q;
                                    return [3, 4];
                                case 2:
                                    return [4, (0, b.Ww)({
                                        clientId: O,
                                        scopes: ne,
                                        responseType: M,
                                        redirectUri: C,
                                        codeChallenge: w,
                                        codeChallengeMethod: x,
                                        state: j
                                    })];
                                case 3:
                                    t = o.sent();
                                    o.label = 4;
                                case 4:
                                    ce(function(e) {
                                        return null == e.guilds ? e : P(I({}, e), {
                                            guilds: (t = e.guilds, t.map((function(e) {
                                                return P(I({}, e), {
                                                    permissions: a.Z.deserialize(e.permissions)
                                                })
                                            })))
                                        });
                                        var t
                                    }(e = t));
                                    U === R.s.NONE && e.authorized ? ze(!0) : ae(Ze.LOADED);
                                    (0, E.yw)(G.rMx.OAUTH2_AUTHORIZE_VIEWED, {
                                        application_id: e.application.id
                                    });
                                    return [3, 7];
                                case 5:
                                    n = o.sent();
                                    r = n.status, i = n.body;
                                    if (401 === r) {
                                        (0, b.c$)(re);
                                        return [2]
                                    }
                                    Ie(new Error(null != i.message ? i.message : "".concat(Object.keys(i)[0], ": ").concat(Object.values(i)[0])));
                                    ae(Ze.LOADED);
                                    return [3, 7];
                                case 6:
                                    Xe.current = !1;
                                    return [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    })), [q, O, w, x, oe, re, U, C, M, ne, ze, j]),
                    $e = i.useCallback((function(e, t) {
                        _e((function(n) {
                            return e ? a.Z.remove(n, t) : a.Z.add(n, t)
                        }))
                    }), []);
                i.useEffect((function() {
                    var e = ne.filter((function(e) {
                        return !N.ak.includes(e)
                    }));
                    if (0 === ne.length) {
                        Ie(new Error("No scopes were provided."));
                        ae(Ze.LOADED)
                    } else if (e.length > 0) {
                        Ie(new Error("Invalid scope: ".concat(e[0])));
                        ae(Ze.LOADED)
                    } else if ((0, T._$)(null != Z ? Z : y.ZP.NONE)) {
                        Ie(new Error("Invalid permission(s) provided."));
                        ae(Ze.LOADED)
                    } else Ke()
                }), [Ke, ne, Z]);
                var Qe = null != je ? null == ue || null === (t = ue.channels) || void 0 === t ? void 0 : t.find((function(e) {
                        return e.id === je
                    })) : null,
                    Je = null != Me ? null == ue || null === (n = ue.guilds) || void 0 === n ? void 0 : n.find((function(e) {
                        return e.id === Me
                    })) : null;
                i.useEffect((function() {
                    if (null != ue)
                        if (null != Qe) we(null);
                        else if (null == Je) {
                        we(null);
                        De(null)
                    }
                }), [ue, Je, Qe]);
                if (be instanceof Error) return {
                    body: (0, r.jsx)(Pe.Lk, {
                        message: be.message
                    })
                };
                if (oe !== Ze.LOADED || null == ue) return {
                    body: (0, r.jsx)(h.$, {})
                };
                var et, tt, nt, rt, it = new _.Z(ue.user),
                    ot = null === (c = ue.bot) || void 0 === c ? void 0 : c.approximate_guild_count,
                    st = !1,
                    at = !0,
                    lt = (null == Je ? void 0 : Je.mfa_level) === G.BpS.ELEVATED;
                switch (ye) {
                    case Ue.AUTHORIZE_SCOPES:
                        var ut, ct, ft, ht, dt = null == be || be instanceof Error ? {} : be,
                            pt = null === (ut = ue.guilds) || void 0 === ut ? void 0 : ut.sort((function(e, t) {
                                return e.name.toLowerCase().localeCompare(t.name.toLowerCase())
                            })),
                            Et = ne.includes(G.xVR.BOT) || ne.includes(G.xVR.WEBHOOK_INCOMING) || ne.includes(G.xVR.APPLICATIONS_COMMANDS);
                        et = (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(ee, {
                                application: ue.application,
                                accountScopes: Te,
                                errors: dt,
                                isTrustedName: Q
                            }), null == Qe && Et ? (0, r.jsx)(Ee, {
                                error: (null !== (ft = null !== (ct = dt[G.xVR.BOT]) && void 0 !== ct ? ct : dt[G.xVR.APPLICATIONS_COMMANDS]) && void 0 !== ft ? ft : [])[0],
                                selectedGuildId: Me,
                                onGuildChange: function(e) {
                                    we(e);
                                    ke(null)
                                },
                                guilds: null != pt ? pt : [],
                                disabled: "" !== Me && !0 === V
                            }) : null, ne.includes(G.xVR.WEBHOOK_INCOMING) ? (0, r.jsx)(Oe, {
                                error: (null !== (ht = dt[G.xVR.WEBHOOK_INCOMING]) && void 0 !== ht ? ht : [])[0],
                                selectedChannelId: je,
                                selectedGuildId: Me,
                                onChannelChange: function(e) {
                                    return De(e)
                                }
                            }) : null]
                        });
                        ne.includes(G.xVR.BOT) && !a.Z.equals(Z, y.ZP.NONE) ? nt = Ue.AUTHORIZE_BOT_PERMISSIONS : lt && (nt = Ue.AUTHORIZE_MFA);
                        var Ot = Et && null == Je && null == Qe,
                            St = null != Je && ne.includes(G.xVR.WEBHOOK_INCOMING) && null == je;
                        st = Ot || St;
                        break;
                    case Ue.AUTHORIZE_BOT_PERMISSIONS:
                        et = (0, r.jsx)(se, {
                            application: ue.application,
                            permissions: null != Z ? Z : y.ZP.NONE,
                            deniedPermissions: Se,
                            onPermissionsChange: $e,
                            guild: Je
                        });
                        lt && (nt = Ue.AUTHORIZE_MFA);
                        tt = Ue.AUTHORIZE_SCOPES;
                        break;
                    case Ue.AUTHORIZE_MFA:
                        et = (0, r.jsxs)("div", {
                            className: Ne().sectionGroup,
                            children: [(0, r.jsx)(u.X, {
                                variant: "heading-deprecated-12/semibold",
                                className: Ne().sectionLabel,
                                children: H.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL
                            }), (0, r.jsx)(p.o, {
                                value: null != We ? We : "",
                                placeholder: "000 000",
                                maxLength: 7,
                                autoComplete: "one-time-code",
                                onChange: function(e) {
                                    return ke(e)
                                }
                            }), null != (null == he ? void 0 : he.message) && (0, r.jsx)(d.x, {
                                variant: "text-sm/medium",
                                color: "text-danger",
                                children: he.message
                            })]
                        });
                        st = null == We || "" === We;
                        at = !1
                }
                var _t = at ? (0, r.jsx)(B, {
                        application: ue.application,
                        scopes: ne,
                        redirectUri: null !== (rt = ue.redirect_uri) && void 0 !== rt ? rt : null,
                        approximateGuildCount: void 0 !== ot ? ot : null,
                        isEmbeddedFlow: te
                    }) : null,
                    gt = (0, r.jsxs)("div", {
                        className: Ne().footer,
                        children: [null != tt ? (0, r.jsx)(l.zx, {
                            look: l.zx.Looks.LINK,
                            color: l.zx.Colors.PRIMARY,
                            onClick: function() {
                                return ve(tt)
                            },
                            children: H.Z.Messages.BACK
                        }) : (0, r.jsx)(l.zx, {
                            look: l.zx.Looks.LINK,
                            color: l.zx.Colors.PRIMARY,
                            onClick: function() {
                                return ze(!1)
                            },
                            children: H.Z.Messages.CANCEL
                        }), null != nt ? (0, r.jsx)(l.zx, {
                            onClick: function() {
                                return ve(nt)
                            },
                            disabled: st,
                            children: H.Z.Messages.CONTINUE
                        }) : (0, r.jsx)(l.zx, {
                            onClick: function() {
                                return ze(!0)
                            },
                            disabled: st,
                            submitting: Be,
                            children: H.Z.Messages.AUTHORIZE
                        })]
                    });
                return {
                    header: (0, r.jsx)(Ae, {
                        id: Ve,
                        user: it,
                        application: ue.application,
                        bot: ue.bot,
                        accountScopes: Te,
                        showLogout: k || !1,
                        location: re,
                        isTrustedName: Q
                    }),
                    body: et,
                    footer: gt,
                    nextStep: nt,
                    appDetails: _t,
                    sendAuthorize: ze
                }
            }

            function Be(e, t) {
                if (null != t.location && (null == e || !e(t))) {
                    var n = s.parse(t.location, !0),
                        i = n.host,
                        o = n.path,
                        a = n.query,
                        l = v.Z.isDiscordHostname(i) || window.location.host === i;
                    if (l && o === G.Z5c.OAUTH2_AUTHORIZED)(0, c.h7)((function(e) {
                        return (0,
                            r.jsx)(Ie.j, je(xe({}, e), {
                            "aria-labelledby": Ve,
                            children: (0, r.jsx)(Pe.Jh, {
                                guild: t.guild,
                                application: t.application,
                                onClose: e.onClose
                            })
                        }))
                    }));
                    else if (l && (null == o ? void 0 : o.startsWith(G.Z5c.OAUTH2_ERROR)))(0, c.h7)((function(e) {
                        var t = a.error_description || a.error || H.Z.Messages.OAUTH2_UNKNOWN_ERROR;
                        Array.isArray(t) && (t = t[0]);
                        return (0, r.jsxs)(Ie.j, je(xe({}, e), {
                            "aria-labelledby": Ve,
                            children: [(0, r.jsx)(Pe.Lk, {
                                message: t,
                                onClose: e.onClose
                            }), ";"]
                        }))
                    }));
                    else {
                        var u;
                        null === (u = window.open(t.location, "_blank")) || void 0 === u || u.focus()
                    }
                }
            }

            function Fe(e, t) {
                (0, c.h7)((function(t) {
                    return (0, r.jsx)(We, je(xe({}, t, e), {
                        cancelCompletesFlow: !1,
                        callback: Be.bind(null, e.callback)
                    }))
                }), {
                    onCloseCallback: t
                })
            }

            function Ye(e) {
                var t = s.parse(e),
                    n = t.hostname,
                    r = void 0 === n ? "" : n,
                    i = t.host,
                    o = t.path,
                    a = t.query;
                return null == o || null == a || !v.Z.isDiscordHostname(r) && i !== window.location.host || !o.startsWith("/api".concat(G.ANM.OAUTH2_AUTHORIZE)) && !o.startsWith(G.Z5c.OAUTH2_AUTHORIZE) ? null : (0, m.y)(a)
            }
        },
        177309: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => b,
                j: () => A
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(883489),
                l = n(882723),
                u = n(792800),
                c = n(630346),
                f = n(130585),
                h = n(463473),
                d = n(2590),
                p = n(79543),
                E = n(473708),
                O = n(752576),
                S = n.n(O);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function v(e, t) {
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

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e) {
                var t = e.children,
                    n = e.wrapperClassName,
                    o = e.embedded,
                    a = m(i.useState(p.hO.INITIAL), 2),
                    O = a[0],
                    _ = a[1],
                    g = i.useCallback((function(e) {
                        _((function(t) {
                            return Math.max(t, e)
                        }))
                    }), []);
                (0, u.Tt)({
                    location: E.Z.Messages.OAUTH2_TITLE
                });
                return (0, r.jsx)(l.ThemeContextProvider, {
                    theme: d.BRd.DARK,
                    children: (0, r.jsx)(c.Z, {
                        embedded: o,
                        className: s()((0, h.Q)(d.BRd.DARK), S().wave),
                        splash: (0, f.gK)(),
                        waveState: O,
                        showLogo: !0,
                        updateWaveState: g,
                        children: (0, r.jsx)("div", {
                            className: s()(S().oauth2Wrapper, n),
                            children: t
                        })
                    })
                })
            }

            function A(e) {
                var t = e.children,
                    n = e.transitionState,
                    i = v(e, ["children", "transitionState"]);
                return (0, r.jsx)(a.Y0, y(function(e) {
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
                }({
                    size: a.Cg.DYNAMIC,
                    transitionState: n,
                    className: S().oauth2Wrapper
                }, i), {
                    children: t
                }))
            }
        },
        772068: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => T,
                c7: () => N,
                Jh: () => R,
                Lk: () => M,
                Xg: () => C,
                j3: () => w
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(517563),
                l = n(751615),
                u = n(608575),
                c = n(883489),
                f = n(756505),
                h = n(802695),
                d = n(882723),
                p = n(792800),
                E = n(784426),
                O = n(934870),
                S = n(652591),
                _ = n(177309),
                g = n(2590),
                y = n(473708),
                v = n(687318),
                m = n.n(v);

            function b(e, t, n) {
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
                        b(e, t, n[t])
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

            function P(e, t) {
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

            function T(e) {
                var t = e.message,
                    n = e.footer,
                    i = e.headerClassName,
                    o = e.showsCloseWindowText,
                    a = e.spinner,
                    l = e.onClose;
                (0, p.Tt)({
                    location: y.Z.Messages.OAUTH2_TITLE
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != l ? (0, r.jsx)(c.ol, {
                        onClick: l,
                        className: m().closeButton
                    }) : null, (0, r.jsxs)("div", {
                        className: m().wrapper,
                        children: [a ? (0, r.jsx)(f.$, {}) : null, (0, r.jsx)("div", {
                            className: s()(m().header, i)
                        }), (0, r.jsx)(h.x, {
                            variant: "text-md/normal",
                            className: m().text,
                            children: t
                        }), null != n ? n : null, o ? (0, r.jsx)(h.x, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: m().cta,
                            children: y.Z.Messages.OAUTH2_MESSAGE_CTA
                        }) : null]
                    })]
                })
            }

            function N(e) {
                return (0, r.jsx)(T, I(A({}, e), {
                    headerClassName: m().headerSuccess
                }))
            }

            function R(e) {
                var t = e.guild,
                    n = e.application,
                    o = P(e, ["guild", "application"]),
                    s = o.onClose,
                    a = y.Z.Messages.AUTHORIZED_SUCCESS,
                    l = i.useCallback((function() {
                        if (null != (null == t ? void 0 : t.id)) {
                            (0, O.X)(null == t ? void 0 : t.id);
                            null == s || s();
                            S.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                                application_id: null == n ? void 0 : n.id,
                                guild_id: null == t ? void 0 : t.id
                            })
                        }
                    }), [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
                    u = i.useCallback((function() {
                        null == s || s();
                        S.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                            application_id: null == n ? void 0 : n.id
                        })
                    }), [s, null == n ? void 0 : n.id]),
                    c = i.useMemo((function() {
                        return null != n ? null != t ? y.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                            installedApplicationName: null == n ? void 0 : n.name,
                            guildName: null == t ? void 0 : t.name
                        }) : y.Z.Messages.AUTHORIZED_APP.format({
                            installedApplicationName: null == n ? void 0 : n.name
                        }) : y.Z.Messages.AUTHORIZED_GENERIC
                    }), [n, t]),
                    f = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.x, {
                            variant: "text-sm/normal",
                            className: m().authorizedSuccessSubtext,
                            children: c
                        }), (null != t || null != s) && (0, r.jsxs)("div", {
                            className: m().buttonsContainer,
                            children: [null != t && (0, r.jsx)(d.Button, {
                                fullWidth: !0,
                                color: d.Button.Colors.BRAND,
                                onClick: l,
                                className: m().button,
                                children: y.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                                    guildName: null == t ? void 0 : t.name
                                })
                            }), null != s && (0, r.jsx)(d.Button, {
                                fullWidth: !0,
                                color: d.Button.Colors.PRIMARY,
                                onClick: u,
                                className: m().button,
                                children: y.Z.Messages.CLOSE
                            })]
                        })]
                    });
                i.useEffect((function() {
                    S.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                        application_id: null == n ? void 0 : n.id
                    })
                }), [null == n ? void 0 : n.id]);
                return (0, r.jsx)("div", {
                    className: m().authorizedSuccessWrapper,
                    children: (0, r.jsx)(N, A({
                        message: a,
                        footer: f
                    }, o))
                })
            }

            function M(e) {
                return (0, r.jsx)(T, I(A({}, e), {
                    headerClassName: m().headerFailure
                }))
            }

            function C() {
                var e, t, n = (0, l.TH)();
                return (0, r.jsx)(_.G, {
                    children: (0, r.jsx)(R, {
                        guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
                        application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
                        showsCloseWindowText: !0
                    })
                })
            }

            function w(e) {
                var t = e.location;
                i.useEffect((function() {
                    if (null != t) {
                        var e = null != document.referrer && "" !== document.referrer ? u.parse(document.referrer) : null;
                        null != e && e.host === window.location.host && e.pathname === g.Z5c.OAUTH2_AUTHORIZE || (0, E.uL)(g.Z5c.INDEX)
                    }
                }), [t]);
                var n, o, s = null != t ? (0,
                        a.parse)(t.search) : {},
                    l = null !== (o = null !== (n = s.error_description) && void 0 !== n ? n : s.error) && void 0 !== o ? o : y.Z.Messages.OAUTH2_UNKNOWN_ERROR;
                return (0, r.jsx)(_.G, {
                    children: (0, r.jsx)(M, {
                        message: l,
                        showsCloseWindowText: !0
                    })
                })
            }
        },
        609853: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                s = n(22212),
                a = n(128181),
                l = n(175072),
                u = n(473708),
                c = n(97194),
                f = n.n(c);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
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

            function p(e, t) {
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
            var E = function(e) {
                var t = e.invertColor,
                    n = void 0 !== t && t,
                    i = e.type,
                    c = void 0 === i ? l.H.BOT : i,
                    E = e.className,
                    O = e.verified,
                    S = e.useRemSizes,
                    _ = void 0 !== S && S,
                    g = null,
                    y = u.Z.Messages.VERIFIED_BOT_TOOLTIP;
                switch (c) {
                    case l.H.SYSTEM_DM:
                    case l.H.OFFICIAL:
                        O = !0;
                        y = u.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP;
                        g = u.Z.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case l.H.SERVER:
                        g = u.Z.Messages.BOT_TAG_SERVER;
                        break;
                    case l.H.ORIGINAL_POSTER:
                        g = u.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case l.H.STAFF_ONLY_DM:
                        g = u.Z.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case l.H.AI:
                        O = !0;
                        y = u.Z.Messages.AI_GENERATED_TOOLTIP;
                        g = u.Z.Messages.AI_TAG;
                        break;
                    case l.H.REMIX:
                        O = !1;
                        g = u.Z.Messages.REMIXING_TAG;
                        break;
                    case l.H.BOT:
                    default:
                        g = u.Z.Messages.BOT_TAG_BOT
                }
                var v, m = c === l.H.ORIGINAL_POSTER,
                    b = c === l.H.REMIX,
                    A = null;
                O && (A = (0, r.jsx)(s.u, {
                    text: y,
                    align: "center",
                    position: "top",
                    children: function(e) {
                        return (0, r.jsx)(a.Z, p(d({}, e), {
                            className: f().botTagVerified
                        }))
                    }
                }));
                v = c === l.H.AI ? f().botTagAI : n ? f().botTagInvert : f().botTagRegular;
                var I = function(e) {
                    var t;
                    return (0, r.jsxs)("span", p(d({}, e), {
                        className: o()(E, v, _ ? f().rem : f().px, (t = {}, h(t, f().botTagOP, m), h(t, f().botTagRemix, b), t)),
                        children: [A, (0, r.jsx)("span", {
                            className: f().botText,
                            children: g
                        })]
                    }))
                };
                switch (c) {
                    case l.H.REMIX:
                        return (0, r.jsx)(s.u, {
                            text: u.Z.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: function(e) {
                                return I(e)
                            }
                        });
                    case l.H.ORIGINAL_POSTER:
                        return (0, r.jsx)(s.u, {
                            text: u.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return I(e)
                            }
                        });
                    default:
                        return I()
                }
            };
            E.Types = l.H;
            const O = E
        },
        48543: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(78025),
                l = n.n(a);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function f(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
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
                    t && p(e, t)
                }(n, e);
                var t = O(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).unmounting = !1;
                    r.state = {
                        loaded: !1
                    };
                    r.initialize();
                    return r
                }
                var i = n.prototype;
                i.componentDidUpdate = function(e) {
                    var t = this;
                    e.src !== this.props.src && this.setState({
                        loaded: !1
                    }, (function() {
                        return t.initialize()
                    }))
                };
                i.initialize = function() {
                    var e, t = this;
                    (e = this.props.src, new Promise((function(t, n) {
                        null == e && n(new Error("No image src passed"));
                        var r = new Image;
                        r.src = e;
                        r.onload = function() {
                            return t(r)
                        };
                        r.onerror = function(e) {
                            return n(e)
                        }
                    }))).then((function() {
                        t.unmounting || t.setState({
                            loaded: !0
                        })
                    }))
                };
                i.componentWillUnmount = function() {
                    this.unmounting = !0
                };
                i.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.src,
                        i = e.alt,
                        o = e.width,
                        a = e.height,
                        c = e.onLoad,
                        d = e.style,
                        p = e.imageClassName,
                        E = this.state.loaded;
                    return (0, r.jsx)("div", {
                        className: t,
                        style: h(f({}, d), {
                            width: o,
                            height: a
                        }),
                        children: (0, r.jsx)("img", {
                            className: s()(l().image, p, u({}, l().loaded, E)),
                            width: o,
                            height: a,
                            src: n,
                            alt: i,
                            onLoad: c
                        })
                    })
                };
                return n
            }(i.PureComponent);
            S.defaultProps = {
                width: 0,
                height: 0,
                alt: ""
            };
            const _ = S
        },
        515510: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(853158),
                l = n(882723),
                u = n(2590),
                c = n(938749),
                f = n.n(c);

            function h(e, t) {
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
                    return p(this, n)
                }
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
                    t && E(e, t)
                }(n, e);
                var t = S(n);

                function n() {
                    h(this, n);
                    var e;
                    (e = t.apply(this, arguments)).anim = new a.Z.Value(0);
                    e.animate = function(t) {
                        a.Z.spring(e.anim, {
                            toValue: t,
                            friction: 10,
                            tension: 100
                        }).start()
                    };
                    return e
                }
                var i = n.prototype;
                i.componentDidMount = function() {
                    this.props.show && this.animate(1)
                };
                i.componentDidUpdate = function(e) {
                    e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
                };
                i.getAnimatedStyle = function() {
                    var e = this.anim;
                    return {
                        opacity: e,
                        transform: this.context.reducedMotion.enabled ? void 0 : [{
                            translateY: e.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-100px", "0px"]
                            })
                        }, {
                            translateZ: 0
                        }]
                    }
                };
                i.render = function() {
                    return (0, r.jsx)(a.Z.a, {
                        href: u.Z5c.INDEX,
                        target: "_blank",
                        rel: "noopener",
                        className: s()(f().logo, this.props.className),
                        style: this.getAnimatedStyle()
                    })
                };
                return n
            }(i.Component);
            _.contextType = l.AccessibilityPreferencesContext
        },
        630346: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => pe,
                Z: () => Oe
            });
            var r = n(785893),
                o = n(667294),
                s = n(294184),
                a = n.n(s),
                l = n(142643),
                u = n(48543),
                c = n(421281),
                f = n(515510),
                h = n(795308),
                d = n(882723),
                p = n(930948);

            function E(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            }

            function O(e, t, n, r) {
                return r.tension * (e - t) - r.friction * n
            }
            var S = n(511227),
                _ = n.n(S);
            var g = 20;
            const y = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.img = null;
                    this.loaded = !1;
                    this.isFilled = !1;
                    this.alpha = 0;
                    this.mx = 0;
                    this.my = 0;
                    this.x = 0;
                    this.y = 0;
                    this.velX = 0;
                    this.velY = 0;
                    this.targetX = 40;
                    this.targetY = 40;
                    this.spring = {
                        friction: 60,
                        tension: 100
                    };
                    this.handleMouseMove = function(e) {
                        var n = e.clientX,
                            r = e.clientY;
                        t.targetX = n / window.innerWidth * g + g;
                        t.targetY = r / window.innerWidth * g + g
                    }
                }
                var t = e.prototype;
                t.initialize = function() {
                    var e = this;
                    this.img = new Image;
                    this.img.onload = function() {
                        e.loaded = !0
                    };
                    this.img.src = _();
                    this.bind()
                };
                t.bind = function() {
                    window.addEventListener("mousemove", this.handleMouseMove, !1)
                };
                t.unbind = function() {
                    window.removeEventListener("mousemove", this.handleMouseMove, !1)
                };
                t.terminate = function() {
                    this.img = null;
                    this.loaded = !1;
                    this.isFilled = !1;
                    this.alpha = 0;
                    this.unbind()
                };
                t.update = function(e) {
                    if (this.loaded) {
                        !this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e));
                        this.velX += O(this.targetX, this.x, this.velX, this.spring) * e;
                        this.velY += O(this.targetY, this.y, this.velY, this.spring) * e;
                        this.x += this.velX * e;
                        this.y += this.velY * e
                    }
                };
                t.render = function(e) {
                    var t = this.img;
                    if (this.loaded && null != t) {
                        e.save();
                        e.globalCompositeOperation = "source-atop";
                        e.globalAlpha = this.alpha;
                        e.drawImage(t, this.x + g, this.y + g);
                        e.restore()
                    }
                };
                t.fill = function() {
                    this.isFilled = !0
                };
                return e
            }();
            var v = n(79543);
            var m = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"];
            const b = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.size = E(2, 3);
                    this.depth = E(1, 4);
                    this.positionMultiplier = this.depth / 4;
                    this.color = m[4 - this.depth];
                    this.offscreenX = v.pg + this.size;
                    this.offscreenY = v.pg + this.size;
                    this.x = E(-this.size, this.offscreenX);
                    this.y = E(-this.size, this.offscreenY)
                }
                var t = e.prototype;
                t.checkBounds = function() {
                    this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
                };
                t.update = function(e, t) {
                    this.checkBounds();
                    this.y += t * this.positionMultiplier;
                    this.x += e * this.positionMultiplier
                };
                t.render = function(e, t) {
                    e.beginPath();
                    e.globalAlpha = t * this.depth / 4;
                    e.arc(this.x, this.y, this.size, 0, v.uo, !0);
                    e.fillStyle = this.color;
                    e.fill();
                    e.globalAlpha = 1
                };
                return e
            }();

            function A(e, t) {
                return Math.max(Math.min((e - t) / 30, 1), -1)
            }
            const I = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.resistance = .98;
                    this.px = 0;
                    this.py = 0;
                    this.x = 0;
                    this.y = 0;
                    this.forceX = 0;
                    this.forceY = 0;
                    this.handleMouseMove = function(e) {
                        var n = e.clientX,
                            r = e.clientY;
                        t.x = n;
                        t.y = r
                    }
                }
                var t = e.prototype;
                t.initialize = function() {
                    window.addEventListener("mousemove", this.handleMouseMove)
                };
                t.terminate = function() {
                    window.removeEventListener("mousemove", this.handleMouseMove)
                };
                t.update = function() {
                    if (this.x !== this.px && this.y !== this.py) {
                        this.forceX += A(this.x, this.px);
                        this.forceY += A(this.y, this.py);
                        this.px = this.x;
                        this.py = this.y
                    }
                    0 !== this.forceX && (this.forceX = this.forceX * this.resistance);
                    0 !== this.forceY && (this.forceY = this.forceY * this.resistance)
                };
                t.render = function() {};
                return e
            }();
            const P = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.particles = [];
                    this.wind = new I;
                    this.alpha = 0;
                    this.isFilled = !1;
                    this.loadInTimer = null
                }
                var t = e.prototype;
                t.initialize = function() {
                    var e = this;
                    this.particles = [];
                    this.wind.initialize();
                    this.loadInTimer = setTimeout((function() {
                        for (var t = 0; t < 75; t++) e.particles.push(new b)
                    }), 250)
                };
                t.terminate = function() {
                    this.particles = [];
                    this.wind.terminate();
                    null != this.loadInTimer && clearTimeout(this.loadInTimer)
                };
                t.update = function(e) {
                    var t = this;
                    if (0 !== this.particles.length) {
                        !this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e));
                        this.wind.update();
                        this.particles.forEach((function(n) {
                            return n.update(10 * t.wind.forceX * e, 10 * Math.min(t.wind.forceY, -.001) * e - .1)
                        }))
                    }
                };
                t.render = function(e) {
                    var t = this;
                    if (0 !== this.particles.length) {
                        e.save();
                        e.globalCompositeOperation = "source-atop";
                        this.particles.forEach((function(n) {
                            return n.render(e, t.alpha)
                        }));
                        e.restore()
                    }
                };
                t.fill = function() {
                    this.isFilled = !0
                };
                return e
            }();
            var T = n(23279),
                N = n.n(T);
            var R = 2.15 * Math.cos(Math.PI);
            const M = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.x = -40;
                    this.y = -40;
                    this.targetX = 0;
                    this.targetY = 0;
                    this.oscillate = !0;
                    this.velX = 0;
                    this.velY = 0;
                    this.angle = 0;
                    this.speedUp = 1.5;
                    this.waveRange = 60;
                    this.spring = {
                        friction: 15,
                        tension: v.O1
                    };
                    this.index = t;
                    this.spring.tension = v.O1 * Math.max(.1, t / 7) + v.O1;
                    this.count = R * t
                }
                var t = e.prototype;
                t.updateStatic = function() {
                    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count);
                    this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count);
                    this.x = this.targetX;
                    this.y = this.targetY
                };
                t.update = function(e) {
                    if (this.speedUp > 0) {
                        this.speedUp = Math.max(0, this.speedUp - e);
                        this.count += e * (10 * Math.min(this.speedUp, 1) + .4)
                    } else this.count += .4 * e;
                    var t, n;
                    t = O(this.targetX, this.x, this.velX, this.spring);
                    n = O(this.targetY, this.y, this.velY, this.spring);
                    this.velX += t * e;
                    this.velY += n * e;
                    if (this.oscillate) {
                        var r = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                            i = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
                        t = O(r, this.x, this.velX, this.spring);
                        n = O(i, this.y, this.velY, this.spring);
                        this.velX += t * e;
                        this.velY += n * e
                    }
                    this.x += this.velX * e;
                    this.y += this.velY * e
                };
                t.render = function(e) {
                    e.fillStyle = "#fff";
                    e.fillRect(this.x, this.y, 4, 4)
                };
                return e
            }();

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                }(e, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var x = 15,
                j = (0, c.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

            function D(e, t, n, r) {
                return t * (n / r) + e
            }

            function L() {
                return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), v.LE), v.pg)
            }
            var Z = 30;
            const U = function() {
                function e(t) {
                    var n, r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.points = [];
                    this.hasEntered = !1;
                    this.isFilling = !1;
                    this._resizeWave = function() {
                        var e = L();
                        r.points.forEach((function(t, n) {
                            var r = e * Math.cos(v.uo * D(0, .25, n, x)) - 40,
                                i = e * Math.sin(v.uo * D(0, .25, n, x)) - 40;
                            0 !== n ? i += E(0, Z) - 15 : r += E(0, Z) - 15;
                            t.targetX = r;
                            t.targetY = i;
                            t.angle = Math.atan2(i, r)
                        }))
                    };
                    this.resizeWave = N()(this._resizeWave, 200);
                    this.updateWaveState = t;
                    this.hasEntered = !1;
                    for (var i = 0; i <= x; i++) this.points.push(new M((n = i, Math.floor(7.5 - Math.floor(Math.abs(n - 7.5))))))
                }
                var t = e.prototype;
                t.initialize = function() {
                    this._resizeWave()
                };
                t.emphasize = function() {
                    this.points.forEach((function(e) {
                        return e.speedUp = 1
                    }))
                };
                t.terminate = function() {
                    this.points = []
                };
                t.update = function(e) {
                    if (0 !== this.points.length) {
                        this.points.forEach((function(t) {
                            return t.update(Math.min(e, .016666666666666666))
                        }));
                        if (!this.hasEntered && this.points[0].x > j) {
                            this.hasEntered = !0;
                            this.updateWaveState(v.hO.ENTERED)
                        }
                        if (this.isFilling && this.points[0].x > this.points[0].targetX) {
                            this.isFilling = !1;
                            this.updateWaveState(v.hO.FILLED)
                        }
                    }
                };
                t.render = function(e) {
                    if (0 !== this.points.length) {
                        var t = w(this.points),
                            n = t[0],
                            r = t.slice(1);
                        e.save();
                        e.beginPath();
                        e.moveTo(n.x, n.y);
                        r.forEach((function(t, n) {
                            if (null == r[n + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                            else {
                                var i = (t.x + r[n + 1].x) / 2,
                                    o = (t.y + r[n + 1].y) / 2;
                                e.quadraticCurveTo(t.x, t.y, i, o)
                            }
                        }));
                        e.lineTo(0, 0);
                        e.closePath();
                        e.fillStyle = "#000";
                        e.globalCompositeOperation = "destination-in";
                        e.fill();
                        e.restore()
                    }
                };
                t.fill = function() {
                    var e = this,
                        t = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                        n = L() - 140,
                        r = function(e, t, n, r) {
                            e.targetX = t * Math.cos(v.uo * D(0, .25, n, x)) - 40;
                            e.targetY = t * Math.sin(v.uo * D(0, .25, n, x)) - 40;
                            if (r) {
                                e.targetX += E(0, Z) - 15;
                                e.targetY += E(0, Z) - 15;
                                e.speedUp = 3;
                                e.spring.tension = v.O1 * Math.random() * .5 + v.O1
                            }
                        };
                    this.points.forEach((function(e, t) {
                        return r(e, n, t, !0)
                    }));
                    setTimeout((function() {
                        e.points.forEach((function(e, n) {
                            r(e, t, n, !1);
                            var i = 1 - e.index / 7.5;
                            e.spring.friction += e.spring.friction + e.spring.friction * i;
                            e.spring.tension = .7 * v.O1 + 80 * Math.random();
                            e.waveRange = 2 * e.waveRange
                        }));
                        e.isFilling = !0;
                        e.updateWaveState(v.hO.FILLING)
                    }), 250)
                };
                return e
            }();
            var H = n(2590),
                V = n(385908),
                G = n.n(V);

            function W(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function q(e) {
                q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return q(e)
            }

            function B(e, t) {
                return !t || "object" !== Y(t) && "function" != typeof t ? W(e) : t
            }

            function F(e, t) {
                F = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return F(e, t)
            }
            var Y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function z(e) {
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
                    var n, r = q(e);
                    if (t) {
                        var i = q(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return B(this, n)
                }
            }
            var X = (0, c.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                K = 1 / 120,
                $ = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && F(e, t)
                    }(n, e);
                    var t = z(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this, e)).width = 0;
                        r.height = 0;
                        r.children = [];
                        r.ratio = 0;
                        r._lastTick = 0;
                        r._isPlaying = !1;
                        r._reqAnimId = null;
                        r.setCanvas = function(e) {
                            if (null != e) {
                                r.canvas = e;
                                r.canvasContext = r.canvas.getContext("2d");
                                var t, n = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
                                    i = r.canvasContext.webkitBackingStorePixelRatio || r.canvasContext.mozBackingStorePixelRatio || r.canvasContext.msBackingStorePixelRatio || r.canvasContext.oBackingStorePixelRatio || r.canvasContext.backingStorePixelRatio || 1;
                                r.ratio = n / i;
                                r.resizeCanvas()
                            }
                        };
                        r.resizeCanvas = function() {
                            r.width = window.innerWidth;
                            r.height = window.innerHeight;
                            var e = W(r),
                                t = e.canvas,
                                n = e.canvasContext,
                                i = e.width,
                                o = e.height,
                                s = e.ratio;
                            if (null != t && null != n) {
                                t.width = i * s;
                                t.height = o * s;
                                t.style.width = i + "px";
                                t.style.height = o + "px";
                                n.scale(s, s)
                            }
                            i <= X ? r.pause() : r.play();
                            r.wave.resizeWave();
                            r.renderAnimation()
                        };
                        r.handleVisibilityChange = function() {
                            document.hidden ? r.delayedPause() : r.play()
                        };
                        r.play = function() {
                            clearTimeout(r._pauseTimeout);
                            if (!r._isPlaying) {
                                r._isPlaying = !0;
                                r.run()
                            }
                        };
                        r.pause = function() {
                            clearTimeout(r._pauseTimeout);
                            r._isPlaying = !1;
                            null != r._reqAnimId && window.cancelAnimationFrame(r._reqAnimId);
                            r._reqAnimId = null;
                            r.advanceTransitionalState()
                        };
                        r.delayedPause = function() {
                            clearTimeout(r._pauseTimeout);
                            r._pauseTimeout = setTimeout(r.pause, 4e3)
                        };
                        r.updateWaveState = function(e) {
                            (0, r.props.updateWaveState)(e)
                        };
                        r.handleWaveEmphasize = function() {
                            r.wave.emphasize()
                        };
                        r.run = function() {
                            if (r._isPlaying)
                                if (0 !== r._lastTick) {
                                    for (var e = Date.now(), t = Math.min((e - r._lastTick) / 1e3, 8 * K); t > 0;) {
                                        var n = t < K ? t : K;
                                        r.updateAnimation(n);
                                        t -= n
                                    }
                                    r.renderAnimation();
                                    r._lastTick = e;
                                    r._reqAnimId = requestAnimationFrame(r.run)
                                } else {
                                    r._lastTick = Date.now();
                                    r._reqAnimId = requestAnimationFrame(r.run)
                                }
                        };
                        r.wave = new U(r.updateWaveState);
                        r.children = [new y, new P, r.wave];
                        return r
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        this.initialize()
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this.props.waveState;
                        t === v.hO.FILLING && t !== e.waveState && this.waveFill()
                    };
                    i.componentWillUnmount = function() {
                        this.terminate()
                    };
                    i.initialize = function() {
                        this.children.forEach((function(e) {
                            return e.initialize()
                        }));
                        this.bindEvents();
                        this.resizeCanvas();
                        document.hidden && this.delayedPause()
                    };
                    i.terminate = function() {
                        this.pause();
                        this.unbindEvents();
                        this.children.forEach((function(e) {
                            return e.terminate()
                        }))
                    };
                    i.bindEvents = function() {
                        window.addEventListener("resize", this.resizeCanvas, !1);
                        window.addEventListener("blur", this.delayedPause, !1);
                        window.addEventListener("focus", this.play, !1);
                        document.addEventListener("visibilitychange", this.handleVisibilityChange, !1);
                        p.S.subscribe(H.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                    };
                    i.unbindEvents = function() {
                        window.removeEventListener("resize", this.resizeCanvas, !1);
                        window.removeEventListener("blur", this.delayedPause, !1);
                        window.removeEventListener("focus", this.play, !1);
                        document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
                        p.S.unsubscribe(H.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                    };
                    i.advanceTransitionalState = function() {
                        var e = this.props.waveState;
                        e !== v.hO.INITIAL && e !== v.hO.FILLING || this.updateWaveState(e + 1)
                    };
                    i.waveFill = function() {
                        this._isPlaying ? this.children.forEach((function(e) {
                            return e.fill()
                        })) : this.updateWaveState(v.hO.FILLED)
                    };
                    i.updateAnimation = function(e) {
                        this.children.forEach((function(t) {
                            return t.update(e)
                        }))
                    };
                    i.renderAnimation = function() {
                        var e = this.props.canvasFillStyle,
                            t = this.canvasContext;
                        if (null != t) {
                            t.fillStyle = e;
                            t.fillRect(0, 0, this.width, this.height);
                            this.children.forEach((function(e) {
                                return e.render(t)
                            }))
                        }
                    };
                    i.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.waveState,
                            i = t.hideFallback,
                            o = t.embedded;
                        return (0, r.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                            children: function(t) {
                                var s;
                                return t.reducedMotion.enabled ? (0, r.jsx)("div", {
                                    className: a()(G().fallbackImage, (s = {}, k(s, G().embedded, o), k(s, G().visible, !i && n >= v.hO.ENTERED), s))
                                }) : (0, r.jsx)("canvas", {
                                    className: a()(G().canvas, k({}, G().embedded, o)),
                                    ref: e.setCanvas
                                })
                            }
                        })
                    };
                    return n
                }(o.Component);
            $.defaultProps = {
                embedded: !1
            };
            const Q = function(e) {
                var t = (0, d.useToken)(h.Z.unsafe_rawColors.PRIMARY_630).hex();
                return (0, r.jsx)($, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            k(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    canvasFillStyle: t
                }, e))
            };
            var J = n(399143),
                ee = n.n(J);

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function re(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ie(e) {
                ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ie(e)
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        re(e, t, n[t])
                    }))
                }
                return e
            }

            function se(e, t) {
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

            function ae(e, t) {
                return !t || "object" !== ce(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function le(e, t) {
                le = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return le(e, t)
            }

            function ue(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ce = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function fe(e) {
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
                    var n, r = ie(e);
                    if (t) {
                        var i = ie(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return ae(this, n)
                }
            }
            var he = (0, c.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

            function de(e, t) {
                var n = window.innerWidth,
                    r = window.innerHeight;
                if (0 === e || 0 === t) return null;
                var i = t / e,
                    o = n,
                    s = Math.round(n * i);
                if (s < r) {
                    s = r;
                    i = e / t;
                    o = Math.round(r * i)
                }
                return {
                    naturalWidth: e,
                    naturalHeight: t,
                    width: o,
                    height: s
                }
            }

            function pe(e) {
                var t = e.splash,
                    n = e.children,
                    i = ue(o.useState({
                        width: 0,
                        height: 0,
                        naturalHeight: 0,
                        naturalWidth: 0
                    }), 2),
                    s = i[0],
                    l = s.width,
                    c = s.height,
                    f = i[1];
                o.useEffect((function() {
                    var e = function() {
                        f((function(e) {
                            var t = de(e.naturalWidth, e.naturalHeight);
                            return null != t ? t : e
                        }))
                    };
                    window.addEventListener("resize", e);
                    return function() {
                        return window.removeEventListener("reslize", e)
                    }
                }), []);
                return (0,
                    r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, {
                        className: a()(ee().rightSplit),
                        onLoad: function(e) {
                            var t = e.currentTarget,
                                n = de(t.naturalWidth, t.naturalHeight);
                            null != n && f(n)
                        },
                        src: t,
                        width: l,
                        height: c
                    }), (0, r.jsx)("div", {
                        className: a()(ee().leftSplit, re({}, ee().nonEmbeddedLeftSplit, !0)),
                        children: n
                    })]
                })
            }
            var Ee = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && le(e, t)
                }(n, e);
                var t = fe(n);

                function n() {
                    ne(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        naturalWidth: 0,
                        naturalHeight: 0,
                        width: 0,
                        height: 0,
                        showWaveAnimation: e.calculateShowWaveAnimation(),
                        splashLoaded: !1
                    };
                    e.handleResize = function() {
                        var t = e.state,
                            n = de(t.naturalWidth, t.naturalHeight),
                            r = e.calculateShowWaveAnimation();
                        null != n ? e.setState(se(oe({}, n), {
                            showWaveAnimation: r
                        })) : e.setState({
                            showWaveAnimation: r
                        })
                    };
                    e.handleLoad = function(t) {
                        var n = t.currentTarget,
                            r = de(n.naturalWidth, n.naturalHeight);
                        null != r && e.setState(r);
                        e.setState({
                            splashLoaded: !0
                        });
                        window.removeEventListener("resize", e.handleResize);
                        window.addEventListener("resize", e.handleResize)
                    };
                    return e
                }
                var i = n.prototype;
                i.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.handleResize)
                };
                i.calculateShowWaveAnimation = function() {
                    return window.innerWidth > he
                };
                i.renderSplashArt = function() {
                    var e = this.props,
                        t = e.splash,
                        n = e.embedded,
                        i = this.state,
                        o = i.width,
                        s = i.height;
                    return null != t ? (0, r.jsx)(u.Z, {
                        className: a()(ee().rightSplit, re({}, ee().embedded, n)),
                        src: t,
                        width: o,
                        height: s,
                        onLoad: this.handleLoad
                    }) : null
                };
                i.renderWave = function() {
                    var e = this.props,
                        t = e.waveState,
                        n = e.updateWaveState,
                        i = e.embedded,
                        o = this.state,
                        s = o.showWaveAnimation,
                        a = o.splashLoaded;
                    return s ? (0, r.jsx)(Q, {
                        embedded: i,
                        waveState: t,
                        updateWaveState: n,
                        hideFallback: !a
                    }) : (0, r.jsx)("div", {
                        className: ee().mobileWave
                    })
                };
                i.renderContent = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.waveState,
                        i = e.showLogo,
                        s = e.logoClassName,
                        l = e.embedded,
                        u = this.state.showWaveAnimation;
                    return (0, r.jsxs)(o.Fragment, {
                        children: [this.renderWave(), (0, r.jsxs)("div", {
                            className: a()(ee().leftSplit, re({}, ee().nonEmbeddedLeftSplit, !l)),
                            children: [i ? (0, r.jsx)(f.Z, {
                                show: !u || n === v.hO.ENTERED && n !== v.hO.FILLING,
                                className: a()(ee().logo, s)
                            }) : null, t]
                        })]
                    })
                };
                i.render = function() {
                    var e = this.props.className;
                    return (0, r.jsxs)("div", {
                        className: a()(e, ee().wrapper),
                        children: [this.renderSplashArt(), this.renderContent()]
                    })
                };
                return n
            }(o.PureComponent);
            Ee.defaultProps = {
                embedded: !1
            };
            const Oe = Ee
        },
        79543: (e, t, n) => {
            "use strict";
            n.d(t, {
                LE: () => r,
                pg: () => i,
                uo: () => o,
                O1: () => s,
                hO: () => a
            });
            var r = 780,
                i = 1e3,
                o = 2 * Math.PI,
                s = 150,
                a = {
                    INITIAL: 0,
                    ENTERED: 1,
                    FILLING: 2,
                    FILLED: 3
                }
        },
        963881: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    h = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, i.Z)(d)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: h,
                            fill: f,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }
        },
        788137: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    u = void 0 === l ? 16 : l,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    h = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, i.Z)(d)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: h,
                        fill: f,
                        d: "M12 2C14.761 2 17 4.238 17 7V9H7V7C7 4.238 9.238 2 12 2ZM10.5 5.5C10.5 6.329 11.172 7 12 7C12.828 7 13.5 6.329 13.5 5.5C13.5 4.671 12.828 4 12 4C11.172 4 10.5 4.671 10.5 5.5ZM23 22H17L19 19V12H17V18C17 18.553 16.552 19 16 19H14L15 22H9L10 19H8C7.448 19 7 18.553 7 18V12H5V19L7 22H1L3 19V12C3 10.896 3.897 10 5 10H19C20.103 10 21 10.896 21 12V19L23 22ZM13 14C13 14.553 13.448 15 14 15C14.552 15 15 14.553 15 14C15 13.447 14.552 13 14 13C13.448 13 13 13.447 13 14Z"
                    })
                }))
            }
        },
        202469: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 18 : t,
                    l = e.height,
                    u = void 0 === l ? 18 : l,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    h = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, i.Z)(d)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: h,
                        fill: f,
                        d: "M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=08430c4a4f4958a7ce8a.js.map