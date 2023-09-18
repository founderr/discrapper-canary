"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [55121], {
        320142: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(120415);

            function o(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(t, n);

                        function a(e) {
                            o(l, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            o(l, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, r, o, i, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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

            function a(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = i((function(e, t) {
                    var o, i, a, u;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(68335), n.e(42687), n.e(29342), n.e(84832), n.e(27499), n.e(64466), n.e(79913), n.e(92465), n.e(45353), n.e(73727), n.e(10675), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(91114)]).then(n.bind(n, 624501))];
                            case 1:
                                o = l.sent(), i = o.default;
                                if (null != (a = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (u = document.createElement("a")).href = e;
                                    u.target = "_blank";
                                    u.rel = "noreferrer noopener";
                                    u.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        20146: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(630631),
                i = n(744564),
                l = n(457696),
                a = n(652591),
                u = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
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
            var d = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = "BlockedDomainStore",
                m = "BlockedDomainRevision";
            var b, v = null,
                O = function(e) {
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
                    }(r, e);
                    var t = h(r);

                    function r() {
                        c(this, r);
                        return t.apply(this, arguments)
                    }
                    var i = r.prototype;
                    i.initialize = function() {
                        b = null
                    };
                    i.getCurrentRevision = function() {
                        if (null == b) {
                            var e;
                            b = null !== (e = o.Z.get(m)) && void 0 !== e ? e : null
                        }
                        return b
                    };
                    i.getBlockedDomainList = function() {
                        if (null == v) {
                            var e, t;
                            v = new Set(null !== (t = null === (e = o.Z.get(y)) || void 0 === e ? void 0 : e._state) && void 0 !== t ? t : [])
                        }
                        return v
                    };
                    i.isBlockedDomain = function(e) {
                        var t = n(181757);
                        this.getBlockedDomainList();
                        var r = (0, l.F)(e),
                            o = new t.hash.sha256,
                            i = t.codec.hex.fromBits(o.update(r).finalize()),
                            c = "";
                        v.has(i) && (c = r);
                        for (var s = r.indexOf("."); - 1 !== s && "" === c;) {
                            r = r.substring(s + 1);
                            o.reset();
                            i = t.codec.hex.fromBits(o.update(r).finalize());
                            v.has(i) && (c = r);
                            s = r.indexOf(".")
                        }
                        if ("" !== c) {
                            a.default.track(u.rMx.LINK_SECURITY_CHECK_BLOCKED, {
                                blocked_domain: c
                            });
                            return c
                        }
                        return null
                    };
                    i.__getLocalVars = function() {
                        return {
                            BLOCKED_DOMAIN_LIST_KEY: y,
                            BLOCKED_DOMAIN_REV_KEY: m,
                            blockedDomainHashes: v,
                            currentRevision: b
                        }
                    };
                    return r
                }(r.ZP.Store);
            O.displayName = "BlockedDomainStore";
            O.persistKey = "BlockedDomainStore";
            const g = new O(i.Z, {
                BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
                    var t = e.list,
                        n = e.revision;
                    v = null;
                    b = null;
                    o.Z.set("BlockedDomainStore", {
                        _state: t
                    });
                    o.Z.set("BlockedDomainRevision", n)
                }
            })
        },
        92106: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r, o = n(652591),
                i = n(585622),
                l = n(322500),
                a = n(327930),
                u = n(2590);
            ! function(e) {
                e.MESSAGE = "Discord Message Link";
                e.CHANNEL = "Discord Channel Link";
                e.SERVER_INVITE = "Discord Server Invite";
                e.GIFT = "Discord Gift Link";
                e.UNKNOWN = "Unknown"
            }(r || (r = {}));
            var c = [function(e) {
                return l.Z.isInvite(e) ? r.SERVER_INVITE : null
            }, function(e) {
                var t = i.Z.safeParseWithQuery(e);
                if (null == t) return null;
                var n = (0, a.Qj)(t.path);
                return null == n ? null : s({
                    guildId: n.guildId,
                    channelId: n.channelId,
                    messageId: n.messageId
                })
            }];

            function s(e) {
                return null != e.guildId && null != e.channelId && null != e.messageId ? r.MESSAGE : null != e.guildId && null != e.channelId ? r.CHANNEL : r.UNKNOWN
            }

            function f(e, t) {
                return null == t && null == e ? r.UNKNOWN : null == t ? function(e) {
                    var t = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var i, l = c[Symbol.iterator](); !(t = (i = l.next()).done); t = !0) {
                            var a = (0, i.value)(e);
                            if (null != a) return a
                        }
                    } catch (e) {
                        n = !0;
                        o = e
                    } finally {
                        try {
                            t || null == l.return || l.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r.UNKNOWN
                }(e) : s(t)
            }
            const p = {
                trackDiscordLinkClicked: function(e) {
                    o.default.track(u.rMx.LINK_CLICKED, {
                        is_discord_link: !0,
                        discord_link_type: s(e)
                    })
                },
                trackLinkClicked: function(e, t) {
                    if (null != e || null != t) {
                        var n = i.Z.isDiscordUrl(e, !0) || null != t;
                        o.default.track(u.rMx.LINK_CLICKED, {
                            is_discord_link: n,
                            discord_link_type: n ? f(e, t) : null
                        })
                    }
                },
                trackAnnouncementMessageLinkClicked: function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        r = e.guildId,
                        i = e.sourceChannelId,
                        l = e.sourceGuildId;
                    o.default.track(u.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                        message_id: t,
                        channel_id: n,
                        guild_id: r,
                        source_channel_id: i,
                        source_guild_id: l
                    })
                }
            }
        },
        544194: (e, t, n) => {
            n.d(t, {
                ZP: () => R,
                yw: () => C
            });
            var r, o = n(5387),
                i = n.n(o),
                l = (n(74971), n(120053)),
                a = n.n(l),
                u = n(861323),
                c = n(72580);
            ! function(e) {
                e.TEXT = "text";
                e.STRIKETHROUGH = "s";
                e.UNDERLINE = "u";
                e.STRONG = "strong";
                e.ITALICS = "em";
                e.IMAGE = "image";
                e.EMOJI = "emoji";
                e.CUSTOM_EMOJI = "customEmoji";
                e.LINK = "link";
                e.URL = "url";
                e.AUTOLINK = "autolink";
                e.HIGHLIGHT = "highlight";
                e.PARAGRAPH = "paragraph";
                e.LINE_BREAK = "br";
                e.NEWLINE = "newline";
                e.ESCAPE = "escape";
                e.SPOILER = "spoiler";
                e.BLOCK_QUOTE = "blockQuote";
                e.INLINE_CODE = "inlineCode";
                e.CODE_BLOCK = "codeBlock";
                e.MENTION = "mention";
                e.CHANNEL_MENTION = "channelMention";
                e.CHANNEL = "channel";
                e.GUILD = "guild";
                e.SOUNDBOARD = "soundboard";
                e.STATIC_ROUTE_LINK = "staticRouteLink";
                e.ROLE_MENTION = "roleMention";
                e.COMMAND_MENTION = "commandMention";
                e.TIMESTAMP = "timestamp";
                e.LIST = "list";
                e.HEADING = "heading"
            }(r || (r = {}));
            var s = RegExp("\\p{Cf}|\\p{Zl}|\\p{Zp}|[^\\P{Cc}\\n]|[^\\P{Zs} ]", "gu"),
                f = new RegExp("".concat(s.source, "|").concat(["͏", "឴", "឵", "ᅠ", "ㅤ", "ﾠ"].join("|")), "gu");
            var p = [{
                character: "h",
                matcher: d(["H", "һ", "հ", "Ꮒ", "ℎ", "𝐡", "𝒉", "𝒽", "𝓱", "𝔥", "𝕙", "𝖍", "𝗁", "𝗵", "𝘩", "𝙝", "𝚑", "ｈ"])
            }, {
                character: "t",
                matcher: d(["T", "𝐭", "𝑡", "𝒕", "𝓉", "𝓽", "𝔱", "𝕥", "𝖙", "𝗍", "𝘁", "𝘵", "𝙩", "𝚝"])
            }, {
                character: "p",
                matcher: d(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "𝐩", "𝑝", "𝒑", "𝓅", "𝓹", "𝔭", "𝕡", "𝖕", "𝗉", "𝗽", "𝘱", "𝙥", "𝚙", "𝛒", "𝛠", "𝜌", "𝜚", "𝝆", "𝝔", "𝞀", "𝞎", "𝞺", "𝟈", "ｐ"])
            }, {
                character: "s",
                matcher: d(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "𐑈", "𑣁", "𝐬", "𝑠", "𝒔", "𝓈", "𝓼", "𝔰", "𝕤", "𝖘", "𝗌", "𝘀", "𝘴", "𝙨", "𝚜", "ｓ"])
            }, {
                character: ":",
                matcher: d(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
            }, {
                character: "/",
                matcher: d(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "𝈺"])
            }];

            function d(e) {
                return new RegExp(e.join("|"), "gu")
            }
            var h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

            function y(e) {
                var t = function(e) {
                    if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
                    var t = "";
                    "" !== e.username && (t += e.username);
                    "" !== e.password && (t += ":" + e.password);
                    "" !== t && (t += "@");
                    return "".concat(e.protocol, "//").concat(t).concat(e.host)
                }(e);
                t += m(e.pathname);
                t += m(e.search);
                return t += m(e.hash)
            }

            function m(e) {
                var t;
                try {
                    t = decodeURIComponent(e)
                } catch (t) {
                    return e
                }
                for (var n, r = "", o = e, i = t; o.length > 0;) {
                    var l = o.codePointAt(0),
                        a = i.codePointAt(0);
                    if (l !== a) {
                        var u = String.fromCodePoint(a),
                            c = encodeURIComponent(u),
                            s = c === u ? 3 : c.length;
                        r += ((n = a) >= 0 && n < 128 ? 1 !== h[n] : 8206 === n || 8207 === n || 8234 === n || 8235 === n || 8236 === n || 8237 === n || 8238 === n || 1564 === n || 8294 === n || 8295 === n || 8296 === n || 8297 === n || 128271 === n || 128272 === n || 128274 === n || 128275 === n || 133 === n || 160 === n || 5760 === n || 8192 === n || 8193 === n || 8194 === n || 8195 === n || 8196 === n || 8197 === n || 8198 === n || 8199 === n || 8200 === n || 8201 === n || 8202 === n || 8232 === n || 8233 === n || 8239 === n || 8287 === n || 12288 === n || 10240 === n || 173 === n || 847 === n || n >= 1536 && n <= 1541 || 1757 === n || 1807 === n || 2274 === n || 4447 === n || 4448 === n || 6068 === n || 6069 === n || 6155 === n || 6156 === n || 6157 === n || 6158 === n || 8203 === n || 8204 === n || 8205 === n || 8288 === n || 8289 === n || 8290 === n || 8291 === n || 8292 === n || 8293 === n || n >= 8298 && n <= 8303 || 12644 === n || n >= 65520 && n <= 65528 || n >= 65024 && n <= 65039 || 65279 === n || 65440 === n || 65529 === n || 65530 === n || 65531 === n || 69821 === n || 69837 === n || n >= 78896 && n <= 78904 || n >= 113824 && n <= 113827 || n >= 119155 && n <= 119162 || n >= 917504 && n <= 921599) ? c : u;
                        o = o.substring(s);
                        i = i.substring(u.length)
                    } else {
                        var f = String.fromCodePoint(l);
                        r += f;
                        o = o.substring(f.length);
                        i = i.substring(f.length)
                    }
                }
                return r
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function O(e) {
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

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || E(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                if (e) {
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
                }
            }
            var I = new(i())({
                max: 50
            });

            function _(e) {
                var t = e,
                    n = I.get(t);
                if (null != n) return n;
                var r = function(e) {
                        return e.replace(f, "")
                    }(e),
                    o = function(e) {
                        var t = e;
                        p.forEach((function(e) {
                            t = t.replace(e.matcher, e.character)
                        }));
                        return t
                    }(r),
                    i = {
                        whitespaceSanitized: r,
                        fullySanitized: o
                    };
                I.set(t, i);
                return i
            }
            var S, P = ["http:", "https:", "discord:"],
                k = [r.TEXT, r.UNDERLINE, r.STRONG, r.ITALICS, r.STRIKETHROUGH, r.INLINE_CODE, r.SPOILER, r.LINE_BREAK, r.TIMESTAMP],
                L = (S = k, function(e) {
                    if (Array.isArray(e)) return b(e)
                }(S) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(S) || E(S) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([r.EMOJI, r.CUSTOM_EMOJI]),
                D = [r.TEXT];

            function T(e, t) {
                Array.isArray(e) || (e = [e]);
                var n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var l, a = e[Symbol.iterator](); !(n = (l = a.next()).done); n = !0) {
                        var u = l.value;
                        if (!t.includes(u.type)) return null;
                        if (u.type === r.INLINE_CODE && null == T(u.validationChildContent, t)) return null;
                        if (Array.isArray(u.content) && null == T(u.content, t)) return null
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }

            function N(e) {
                var t = "",
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var l, a = e[Symbol.iterator](); !(n = (l = a.next()).done); n = !0) {
                        var u = l.value;
                        switch (u.type) {
                            case r.TEXT:
                            case r.INLINE_CODE:
                                t += u.content;
                                break;
                            case r.CUSTOM_EMOJI:
                                t += u.name;
                                break;
                            case r.EMOJI:
                                t += u.surrogate;
                                break;
                            case r.LINE_BREAK:
                                t += "\n";
                                break;
                            case r.TIMESTAMP:
                                t += "<timestamp>";
                                break;
                            case r.STRONG:
                            case r.ITALICS:
                            case r.UNDERLINE:
                            case r.STRIKETHROUGH:
                            case r.SPOILER:
                                t += N(u.content);
                                break;
                            default:
                                (0, c.vE)(u.type)
                        }
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return t
            }

            function C(e) {
                try {
                    var t, n = new URL(e),
                        r = null !== (t = n.protocol) && void 0 !== t ? t : "";
                    if (!P.includes(r.toLowerCase())) throw new Error("Provided protocol is not allowed: " + r);
                    if (!("http:" !== r && "https:" !== r || null != n.hostname && 0 !== n.hostname.length)) throw new Error("no hostname");
                    0;
                    var o = y(n);
                    n.username = "";
                    n.password = "";
                    return {
                        target: o,
                        displayTarget: y(n)
                    }
                } catch (e) {
                    return null
                }
            }
            const R = g(O({}, a().defaultRules.link), {
                match: function(e, t, n) {
                    return t.allowLinks ? a().defaultRules.link.match(e, t, n) : null
                },
                parse: function(e, t, n) {
                    var o = w(e, 4),
                        i = o[0],
                        l = o[1],
                        c = o[2],
                        s = o[3],
                        f = function() {
                            return {
                                type: r.TEXT,
                                content: i
                            }
                        },
                        p = _(c),
                        d = _(l),
                        h = _(null != s ? s : ""),
                        y = p.whitespaceSanitized,
                        m = d.fullySanitized,
                        b = h.fullySanitized,
                        v = m.trim();
                    if (0 === y.trim().length || 0 === v.length) return f();
                    var E = C(a().unescapeUrl(c)),
                        I = null == E,
                        S = (0, u.ZP)(l).length > 0 || (0, u.ZP)(s).length > 0;
                    if (I || S) return f();
                    var P = g(O({}, n), {
                            allowEscape: !1,
                            parseInlineCodeChildContent: !0
                        }),
                        R = t(m, P),
                        A = t(b, P),
                        j = T(R, n.allowEmojiLinks ? L : k),
                        x = T(A, D);
                    if (null == j || null == x) return f();
                    if (0 === N(j).trim().length) return f();
                    var M = t(d.whitespaceSanitized, P),
                        U = h.whitespaceSanitized;
                    return {
                        content: M,
                        target: E.target,
                        title: U
                    }
                }
            })
        },
        966334: (e, t, n) => {
            n.d(t, {
                M5: () => u,
                lS: () => c,
                ai: () => s,
                Ps: () => f,
                Hw: () => r,
                kG: () => o,
                SD: () => p,
                C7: () => y
            });
            var r, o, i = n(265688),
                l = n(120415),
                a = n(2590),
                u = "spotify",
                c = "spotify:",
                s = i.Z.get(a.ABu.SPOTIFY).name;

            function f(e) {
                return null != e && e.startsWith(c)
            }! function(e) {
                e.TRACK = "track";
                e.ARTIST = "artist";
                e.ALBUM = "album";
                e.PLAYLIST = "playlist"
            }(r || (r = {}));
            ! function(e) {
                e.USER_ACTIVITY_PLAY = "user_activity_play";
                e.USER_ACTIVITY_SYNC = "user_activity_sync";
                e.EMBED_SYNC = "embed_sync"
            }(o || (o = {}));
            var p = ["open.spotify.com", "www.spotify.com"],
                d = "https://api.spotify.com/v1",
                h = function(e) {
                    return "?utm_source=discord&utm_medium=".concat(e)
                },
                y = Object.freeze({
                    PROFILE: "".concat(d, "/me"),
                    NOTIFICATIONS_PLAYER: "".concat(d, "/me/notifications/player"),
                    PLAYER: "".concat(d, "/me/player"),
                    PLAYER_DEVICES: "".concat(d, "/me/player/devices"),
                    PLAYER_PLAY: "".concat(d, "/me/player/play"),
                    PLAYER_PAUSE: "".concat(d, "/me/player/pause"),
                    PLAYER_REPEAT: "".concat(d, "/me/player/repeat"),
                    WEB_OPEN: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                        return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(h(n))
                    },
                    EMBED: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                        return "https://open.spotify.com/embed".concat(e).concat(h(t))
                    },
                    PLAYER_OPEN: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                        return "".concat(u, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? h(r) : "")
                    },
                    PREMIUM_SITE: "https://www.spotify.com/premium/".concat(h("desktop")),
                    INSTALL_ATTRIBUTION: function(e) {
                        return "https://app.adjust.com/bdyga9?campaign=".concat(e)
                    },
                    APP_STORE: (0, l.Dt)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
                    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
                })
        },
        419198: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function i(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var l = e.apply(t, n);

                        function a(e) {
                            i(l, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            i(l, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

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
            var c = function(e, t) {
                var n, r, o, i, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
            const s = {
                show: function(e) {
                    (0, o.ZD)(l((function() {
                        var t, o;
                        return c(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(74709)]).then(n.bind(n, 674709))];
                                case 1:
                                    t = i.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, r.jsx)(o, u(function(e) {
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
                                        }({}, t), {
                                            href: e
                                        }))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        177729: (e, t, n) => {
            n.d(t, {
                v: () => a
            });
            var r = n(608575);
            const o = JSON.parse('["7z","ade","adp","arj","apk","application","appx","appxbundle","asx","bas","bat","cab","cer","chm","cmd","cnt","cpl","crt","csh","deb","der","diagcab","dll","dmg","docm","dotm","ex","ex_","exe","fxp","gadget","grp","gz","hlp","hpj","hta","htc","inf","ins","ipa","iso","isp","its","jar","jnlp","jse","ksh","lib","lnk","mad","maf","mag","mam","maq","mar","mas","mat","mau","mav","maw","mcf","mda","mdb","mde","mdt","mdw","mdz","msc","msh","msh1","msh1xml","msh2","msh2xml","mshxml","msi","msix","msixbundle","msp","mst","msu","nsh","ops","osd","pcd","pif","pkg","pl","plg","potm","ppam","ppsm","pptm","prf","prg","printerexport","ps1","ps1xml","ps2","ps2xml","psc1","psc2","psd1","psdm1","pst","py","pyc","pyo","pyw","pyz","pyzw","rar","reg","rpm","scf","scr","sct","shb","shs","sldm","sys","theme","tmp","url","vb","vbe","vbp","vbs","vhd","vhdx","vsmacros","vsw","vxd","webpnp","ws","wsc","wsf","wsh","xbap","xlam","xll","xlsm","xltm","xnk","z","zip"]');
            var i = new Set(o),
                l = {
                    "github.com": new RegExp("\\/releases\\S*\\/download"),
                    "bitbucket.org": new RegExp("\\/downloads\\S*\\/[^\\/]*"),
                    "gitlab.com": new RegExp("\\/downloads\\S*\\/[^\\/]*")
                };

            function a(e) {
                var t, n = r.parse(e),
                    o = n.pathname,
                    a = n.hostname;
                if (null == a) return null;
                var u = l[a];
                if (null != u && null != o && !u.test(o)) return null;
                if (null == o) return null;
                var c = o;
                try {
                    c = decodeURIComponent(o)
                } catch (e) {}
                for (var s = c.split("/"), f = null, p = 0, d = s.length - 1; d >= 0; d--) {
                    var h = s[d];
                    if ("" !== h && "." !== h) {
                        if (".." !== h) {
                            if (p > d) break;
                            f = s[d - p];
                            break
                        }
                        p++
                    }
                }
                if (null == f) return null;
                var y = f.split(".");
                if (y.length < 2) return null;
                var m = null === (t = y.pop()) || void 0 === t ? void 0 : t.toLowerCase();
                return null != m && i.has(m) ? m : null
            }
        },
        457696: (e, t, n) => {
            n.d(t, {
                F: () => r,
                E: () => o
            });

            function r(e) {
                var t = document.createElement("a");
                t.href = e;
                return t.hostname
            }

            function o(e) {
                var t = document.createElement("a");
                t.href = e;
                return t.protocol
            }
        },
        955121: (e, t, n) => {
            n.d(t, {
                q: () => ae,
                r: () => le
            });
            var r = n(120053),
                o = n.n(r),
                i = n(105783),
                l = n(744564);

            function a(e) {
                l.Z.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
                    url: e
                })
            }

            function u(e) {
                l.Z.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
                    url: e
                })
            }
            var c = n(320142),
                s = n(785893),
                f = (n(667294), n(882723));

            function p(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            p(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            p(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
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
            var m = function(e, t) {
                var n, r, o, i, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
            const b = function(e) {
                (0, f.openModalLazy)(d((function() {
                    var t, r;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(55201)]).then(n.bind(n, 455201))];
                            case 1:
                                t = o.sent(), r = t.default;
                                return [2, function(t) {
                                    return (0, s.jsx)(r, y(function(e) {
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
                                    }({}, t), {
                                        url: e
                                    }))
                                }]
                        }
                    }))
                })))
            };
            var v = n(20146);
            var O = n(92106),
                g = n(544194);

            function w(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            w(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            w(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t) {
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
            var S = function(e, t) {
                var n, r, o, i, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
            const P = function(e) {
                var t = e.url,
                    r = e.trustUrl,
                    o = e.onConfirm,
                    i = e.isProtocol;
                (0, f.openModalLazy)(E((function() {
                    var e, l;
                    return S(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(62)]).then(n.bind(n, 900062))];
                            case 1:
                                e = a.sent(), l = e.default;
                                return [2, function(e) {
                                    return (0, s.jsx)(l, _(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                I(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        url: t,
                                        isProtocol: i,
                                        trustUrl: r,
                                        onConfirm: o
                                    }))
                                }]
                        }
                    }))
                })))
            };
            var k = n(419198),
                L = n(177729),
                D = n(61209),
                T = n(567403),
                N = n(202351),
                C = n(630631),
                R = n(585622),
                A = n(457696),
                j = n(966334);

            function x(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function U(e, t) {
                return !t || "object" !== K(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Z(e, t) {
                Z = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Z(e, t)
            }
            var B, K = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e) {
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
                    var n, r = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return U(this, n)
                }
            }
            var H = "MaskedLinkStore",
                z = new Set,
                Y = new Set,
                F = null === (B = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === B ? void 0 : B.replace("//", "");

            function V(e) {
                var t = (0, A.F)(e);
                switch (t) {
                    case window.GLOBAL_ENV.CDN_HOST:
                    case window.GLOBAL_ENV.INVITE_HOST:
                    case window.GLOBAL_ENV.GIFT_CODE_HOST:
                    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
                    case F:
                    case location.hostname:
                        return !0;
                    default:
                        return j.SD.includes(t) || R.Z.isDiscordHostname(t) || z.has(t)
                }
            }

            function W(e) {
                var t = (0, A.E)(e);
                return Y.has(t)
            }
            var J = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Z(e, t)
                }(n, e);
                var t = G(n);

                function n() {
                    x(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e, t = null !== (e = C.Z.get(H)) && void 0 !== e ? e : {};
                    if (Array.isArray(t)) {
                        z = new Set(null != t ? Array.from(t) : null);
                        Y = new Set
                    } else {
                        var n = t.trustedDomains,
                            r = t.trustedProtocols;
                        z = new Set(null != n ? Array.from(n) : null);
                        Y = new Set(null != r ? Array.from(r) : null)
                    }
                };
                r.isTrustedDomain = function(e) {
                    return V(e)
                };
                r.isTrustedProtocol = function(e) {
                    return W(e)
                };
                r.__getLocalVars = function() {
                    return {
                        STORAGE_KEY: H,
                        trustedDomains: z,
                        trustedProtocols: Y,
                        MEDIA_PROXY_HOST: F
                    }
                };
                return n
            }(N.ZP.Store);
            J.displayName = "MaskedLinkStore";
            const X = new J(l.Z, {
                MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
                    var t = e.url;
                    if (V(t)) return !1;
                    z.add((0, A.F)(t));
                    C.Z.set(H, {
                        trustedDomains: z,
                        trustedProtocols: Y
                    })
                },
                MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
                    var t = e.url;
                    if (W(t)) return !1;
                    Y.add((0, A.E)(t));
                    C.Z.set(H, {
                        trustedDomains: z,
                        trustedProtocols: Y
                    })
                }
            });
            var Q = n(352980),
                q = n(840922),
                $ = n(715107),
                ee = n(652591),
                te = n(2590),
                ne = n(473708);

            function re(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function oe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            re(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            re(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var ie = function(e, t) {
                var n, r, o, i, l = {
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
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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

            function le(e, t) {
                var n, r = D.Z.getChannel($.Z.getChannelId());
                return !(null != r && r.type === te.d4z.DM && !q.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : "")) && e === t
            }

            function ae(e, t) {
                return ue.apply(this, arguments)
            }

            function ue() {
                ue = oe((function(e, t) {
                    var r, l, s, f, p, d, h, y, m, w, E, I, _, S, N, C, R, j, x, M, U, Z, B, K, G, H, z, Y, F, V, W, J, q, re = arguments;
                    return ie(this, (function(oe) {
                        switch (oe.label) {
                            case 0:
                                r = re.length > 2 && void 0 !== re[2] ? re[2] : [];
                                l = e.trusted, s = e.onClick, f = e.onConfirm, p = e.shouldConfirm, d = e.messageId, h = e.channelId;
                                if (null == (y = o().sanitizeUrl(e.href))) {
                                    null != t && t.preventDefault();
                                    i.Z.show({
                                        title: ne.Z.Messages.HOLD_UP,
                                        body: ne.Z.Messages.MALFORMED_LINK_BODY.format({
                                            url: e.href
                                        }),
                                        isDismissable: !0
                                    });
                                    return [2]
                                }
                                m = null;
                                w = !1;
                                E = d;
                                I = h;
                                _ = null;
                                if (null != d && null != h) {
                                    C = Q.Z.getMessage(h, d);
                                    R = D.Z.getBasicChannel(h);
                                    m = null !== (j = null == R ? void 0 : R.guild_id) && void 0 !== j ? j : null;
                                    x = T.Z.getGuild(m);
                                    if ((M = null != (null == C || null === (S = C.messageReference) || void 0 === S ? void 0 : S.guild_id) && null != (null == C ? void 0 : C.webhookId) && (null == C ? void 0 : C.hasFlag(te.iLy.IS_CROSSPOST)) && null != m) && null != (null == C || null === (N = C.messageReference) || void 0 === N ? void 0 : N.guild_id)) {
                                        E = C.messageReference.message_id;
                                        I = C.messageReference.channel_id;
                                        _ = C.messageReference.guild_id
                                    } else _ = m;
                                    U = (null == R ? void 0 : R.type) === te.d4z.GUILD_ANNOUNCEMENT && !0 === (null == x ? void 0 : x.hasFeature(te.oNc.COMMUNITY));
                                    Z = !0 === (null == C ? void 0 : C.hasFlag(te.iLy.EPHEMERAL));
                                    w = null != C && !Z && (M || U)
                                }
                                B = D.Z.getChannel($.Z.getChannelId());
                                K = T.Z.getGuild(null == B ? void 0 : B.getGuildId());
                                null != B && null != K && K.hasFeature(te.oNc.DISCOVERABLE) && ee.default.track(te.rMx.URL_CLICKED, {
                                    url_domain: (0, A.F)(y),
                                    guild_id: K.id,
                                    channel_id: B.id
                                });
                                O.Z.trackLinkClicked(y);
                                return null == s ? [3, 1] : s(t) ? [2] : [3, 3];
                            case 1:
                                return [4, Promise.all([n.e(40532), n.e(68335), n.e(42687), n.e(29342), n.e(84832), n.e(27499), n.e(64466), n.e(79913), n.e(92465), n.e(45353), n.e(73727), n.e(10675), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(91114)]).then(n.bind(n, 624501))];
                            case 2:
                                G = oe.sent(), H = G.default;
                                if (null != (z = H(y, {
                                        skipExtensionCheck: void 0,
                                        analyticsLocations: r
                                    })) && z(t)) return [2];
                                oe.label = 3;
                            case 3:
                                Y = function() {
                                    w && O.Z.trackAnnouncementMessageLinkClicked({
                                        messageId: E,
                                        channelId: h,
                                        guildId: m,
                                        sourceChannelId: I,
                                        sourceGuildId: _
                                    });
                                    null == f ? (0, c.Z)(y) : f()
                                };
                                if (null !== v.Z.isBlockedDomain(y)) {
                                    null == t || t.preventDefault();
                                    b(y);
                                    return [2]
                                }
                                if (null != (0, L.v)(y)) {
                                    null == t || t.preventDefault();
                                    k.Z.show(y);
                                    return [2]
                                }
                                0;
                                F = "function" == typeof l ? l() : l;
                                V = (0, A.E)(y);
                                if (!(W = !("http:" === V || "https:" === V)) && (F || X.isTrustedDomain(y)) || W && X.isTrustedProtocol(y)) {
                                    null == t || null != p && p ? Y() : w && O.Z.trackAnnouncementMessageLinkClicked({
                                        messageId: E,
                                        channelId: h,
                                        guildId: m,
                                        sourceChannelId: I,
                                        sourceGuildId: _
                                    });
                                    return [2]
                                }
                                null != t && t.preventDefault();
                                if (W) P({
                                    url: y,
                                    trustUrl: u,
                                    onConfirm: Y,
                                    isProtocol: !0
                                });
                                else {
                                    J = (0, g.yw)(y);
                                    q = null != J ? J.displayTarget : y;
                                    P({
                                        url: q,
                                        trustUrl: a,
                                        onConfirm: Y,
                                        isProtocol: !1
                                    })
                                }
                                return [2]
                        }
                    }))
                }));
                return ue.apply(this, arguments)
            }
        }
    }
]);