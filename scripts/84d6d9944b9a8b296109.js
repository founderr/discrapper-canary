(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2058], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var r, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    i = [];
                if (e[2]) {
                    n = (r = e[2].split("-")).shift();
                    i = r
                }
                var a = [];
                e[5] && (a = e[5].split("-")).shift();
                var o = [];
                if (e[6]) {
                    (r = e[6].split("-")).shift();
                    for (var s, u = []; r.length;) {
                        var f = r.shift();
                        if (1 === f.length)
                            if (s) {
                                o.push({
                                    singleton: s,
                                    extension: u
                                });
                                s = f;
                                u = []
                            } else s = f;
                        else u.push(f)
                    }
                    o.push({
                        singleton: s,
                        extension: u
                    })
                }
                var c = [];
                if (e[7]) {
                    (c = e[7].split("-")).shift();
                    c.shift()
                }
                var l = [];
                e[8] && (l = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: a,
                        extension: o,
                        privateuse: c
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, r) {
                var e = r.length,
                    n = t.length;
                if (n > e) return !1;
                if (n === e) return t === r;
                t: for (var i = 0, a = 0; i < n; i++) {
                    for (var o = t.charCodeAt(i); a < e;)
                        if (r.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        16243: t => {
            if (!r) var r = {
                map: function(t, r) {
                    var e = {};
                    return r ? t.map((function(t, n) {
                        e.index = n;
                        return r.call(e, t)
                    })) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var e = {};
                    return t.reduce(r ? function(t, n, i) {
                        e.index = i;
                        return t + r.call(e, n)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var e = function() {
                function t(t, r, e) {
                    return (t << 10) + (r << 5) + e
                }

                function e(t) {
                    var r = [],
                        e = !1;

                    function n() {
                        r.sort(t);
                        e = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t);
                            e = !1
                        },
                        peek: function(t) {
                            e || n();
                            void 0 === t && (t = r.length - 1);
                            return r[t]
                        },
                        pop: function() {
                            e || n();
                            return r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            e || n();
                            return r
                        }
                    }
                }

                function n(t, r, e, n, i, a, o) {
                    var s = this;
                    s.r1 = t;
                    s.r2 = r;
                    s.g1 = e;
                    s.g2 = n;
                    s.b1 = i;
                    s.b2 = a;
                    s.histo = o
                }
                n.prototype = {
                    volume: function(t) {
                        var r = this;
                        r._volume && !t || (r._volume = (r.r2 - r.r1 + 1) * (r.g2 - r.g1 + 1) * (r.b2 - r.b1 + 1));
                        return r._volume
                    },
                    count: function(r) {
                        var e = this,
                            n = e.histo;
                        if (!e._count_set || r) {
                            var i, a, o, s = 0;
                            for (i = e.r1; i <= e.r2; i++)
                                for (a = e.g1; a <= e.g2; a++)
                                    for (o = e.b1; o <= e.b2; o++) s += n[t(i, a, o)] || 0;
                            e._count = s;
                            e._count_set = !0
                        }
                        return e._count
                    },
                    copy: function() {
                        var t = this;
                        return new n(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
                    },
                    avg: function(r) {
                        var e = this,
                            n = e.histo;
                        if (!e._avg || r) {
                            var i, a, o, s, u = 0,
                                f = 0,
                                c = 0,
                                l = 0;
                            for (a = e.r1; a <= e.r2; a++)
                                for (o = e.g1; o <= e.g2; o++)
                                    for (s = e.b1; s <= e.b2; s++) {
                                        u += i = n[t(a, o, s)] || 0;
                                        f += i * (a + .5) * 8;
                                        c += i * (o + .5) * 8;
                                        l += i * (s + .5) * 8
                                    }
                            e._avg = u ? [~~(f / u), ~~(c / u), ~~(l / u)] : [~~(8 * (e.r1 + e.r2 + 1) / 2), ~~(8 * (e.g1 + e.g2 + 1) / 2), ~~(8 * (e.b1 + e.b2 + 1) / 2)]
                        }
                        return e._avg
                    },
                    contains: function(t) {
                        var r = this,
                            e = t[0] >> 3;
                        gval = t[1] >> 3;
                        bval = t[2] >> 3;
                        return e >= r.r1 && e <= r.r2 && gval >= r.g1 && gval <= r.g2 && bval >= r.b1 && bval <= r.b2
                    }
                };

                function i() {
                    this.vboxes = new e((function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
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
                        for (var r = this.vboxes, e = 0; e < r.size(); e++)
                            if (r.peek(e).vbox.contains(t)) return r.peek(e).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var r, e, n, i = this.vboxes, a = 0; a < i.size(); a++)
                            if ((e = Math.sqrt(Math.pow(t[0] - i.peek(a).color[0], 2) + Math.pow(t[1] - i.peek(a).color[1], 2) + Math.pow(t[2] - i.peek(a).color[2], 2))) < r || void 0 === r) {
                                r = e;
                                n = i.peek(a).color
                            } return n
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort((function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        }));
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                };

                function a(e, n) {
                    if (n.count()) {
                        var i = n.r2 - n.r1 + 1,
                            a = n.g2 - n.g1 + 1,
                            o = n.b2 - n.b1 + 1,
                            s = r.max([i, a, o]);
                        if (1 == n.count()) return [n.copy()];
                        var u, f, c, l, h = 0,
                            g = [],
                            _ = [];
                        if (s == i)
                            for (u = n.r1; u <= n.r2; u++) {
                                l = 0;
                                for (f = n.g1; f <= n.g2; f++)
                                    for (c = n.b1; c <= n.b2; c++) l += e[t(u, f, c)] || 0;
                                h += l;
                                g[u] = h
                            } else if (s == a)
                                for (u = n.g1; u <= n.g2; u++) {
                                    l = 0;
                                    for (f = n.r1; f <= n.r2; f++)
                                        for (c = n.b1; c <= n.b2; c++) l += e[t(f, u, c)] || 0;
                                    h += l;
                                    g[u] = h
                                } else
                                    for (u = n.b1; u <= n.b2; u++) {
                                        l = 0;
                                        for (f = n.r1; f <= n.r2; f++)
                                            for (c = n.g1; c <= n.g2; c++) l += e[t(f, c, u)] || 0;
                                        h += l;
                                        g[u] = h
                                    }
                        g.forEach((function(t, r) {
                            _[r] = h - t
                        }));
                        return d(s == i ? "r" : s == a ? "g" : "b")
                    }

                    function d(t) {
                        var r, e, i, a, o, s = t + "1",
                            f = t + "2",
                            c = 0;
                        for (u = n[s]; u <= n[f]; u++)
                            if (g[u] > h / 2) {
                                i = n.copy();
                                a = n.copy();
                                o = (r = u - n[s]) <= (e = n[f] - u) ? Math.min(n[f] - 1, ~~(u + e / 2)) : Math.max(n[s], ~~(u - 1 - r / 2));
                                for (; !g[o];) o++;
                                c = _[o];
                                for (; !c && g[o - 1];) c = _[--o];
                                i[f] = o;
                                a[s] = i[f] + 1;
                                return [i, a]
                            }
                    }
                }
                return {
                    quantize: function(o, s) {
                        if (!o.length || s < 2 || s > 256) return !1;
                        var u = function(r) {
                            var e, n, i, a, o = new Array(32768);
                            r.forEach((function(r) {
                                n = r[0] >> 3;
                                i = r[1] >> 3;
                                a = r[2] >> 3;
                                e = t(n, i, a);
                                o[e] = (o[e] || 0) + 1
                            }));
                            return o
                        }(o);
                        u.forEach((function() {
                            0
                        }));
                        var f = function(t, r) {
                                var e, i, a, o = 1e6,
                                    s = 0,
                                    u = 1e6,
                                    f = 0,
                                    c = 1e6,
                                    l = 0;
                                t.forEach((function(t) {
                                    e = t[0] >> 3;
                                    i = t[1] >> 3;
                                    a = t[2] >> 3;
                                    e < o ? o = e : e > s && (s = e);
                                    i < u ? u = i : i > f && (f = i);
                                    a < c ? c = a : a > l && (l = a)
                                }));
                                return new n(o, s, u, f, c, l, r)
                            }(o, u),
                            c = new e((function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            }));
                        c.push(f);

                        function l(t, r) {
                            for (var e, n = 1, i = 0; i < 1e3;)
                                if ((e = t.pop()).count()) {
                                    var o = a(u, e),
                                        s = o[0],
                                        f = o[1];
                                    if (!s) return;
                                    t.push(s);
                                    if (f) {
                                        t.push(f);
                                        n++
                                    }
                                    if (n >= r) return;
                                    if (i++ > 1e3) return
                                } else {
                                    t.push(e);
                                    i++
                                }
                        }
                        l(c, .75 * s);
                        for (var h = new e((function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            })); c.size();) h.push(c.pop());
                        l(h, s - h.size());
                        for (var g = new i; h.size();) g.push(h.pop());
                        return g
                    }
                }
            }();
            t.exports = e.quantize
        },
        180735: (t, r, e) => {
            "use strict";
            e.d(r, {
                h: () => n
            });
            var n;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(n || (n = {}))
        },
        16455: (t, r, e) => {
            "use strict";
            e.d(r, {
                j: () => n
            });
            var n;
            ! function(t) {
                t[t.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE";
                t[t.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL";
                t[t.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED";
                t[t.QUARANTINE_USER = 4] = "QUARANTINE_USER"
            }(n || (n = {}))
        },
        813701: (t, r, e) => {
            "use strict";
            e.d(r, {
                J: () => n
            });
            var n;
            ! function(t) {
                t.NICKNAME_UPDATE = "nickname_update";
                t.NICKNAME_RESET = "nickname_reset"
            }(n || (n = {}))
        },
        921354: (t, r, e) => {
            "use strict";
            e.d(r, {
                q: () => n
            });
            var n;
            ! function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN";
                t[t.MESSAGE_SEND = 1] = "MESSAGE_SEND";
                t[t.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
            }(n || (n = {}))
        },
        986468: (t, r, e) => {
            "use strict";
            e.d(r, {
                G: () => n
            });
            var n;
            ! function(t) {
                t.RULE_NAME = "rule_name";
                t.CHANNEL_ID = "channel_id";
                t.DECISION_ID = "decision_id";
                t.KEYWORD = "keyword";
                t.KEYWORD_MATCHED_CONTENT = "keyword_matched_content";
                t.FLAGGED_MESSAGE_ID = "flagged_message_id";
                t.TIMEOUT_DURATION = "timeout_duration";
                t.QUARANTINE_USER = "quarantine_user";
                t.QUARANTINE_USER_ACTION = "quarantine_user_action";
                t.DECISION_REASON = "decision_reason";
                t.ALERT_ACTIONS_EXECUTION = "alert_actions_execution";
                t.QUARANTINE_EVENT = "quarantine_event";
                t.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type";
                t.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"
            }(n || (n = {}))
        },
        901399: (t, r, e) => {
            "use strict";
            e.d(r, {
                D: () => n
            });
            var n;
            ! function(t) {
                t.JOIN_ATTEMPTS = "join_attempts";
                t.RAID_DATETIME = "raid_datetime";
                t.DMS_SENT = "dms_sent";
                t.RAID_TYPE = "raid_type";
                t.RESOLVED_REASON = "resolved_reason"
            }(n || (n = {}))
        },
        945481: (t, r, e) => {
            "use strict";
            e.d(r, {
                B: () => n
            });
            var n;
            ! function(t) {
                t.MESSAGE_SEND = "message_send";
                t.GUILD_JOIN = "guild_join";
                t.USERNAME_UPDATE = "username_update"
            }(n || (n = {}))
        },
        824244: (t, r, e) => {
            "use strict";
            e.d(r, {
                z: () => n
            });
            var n;
            ! function(t) {
                t.BLOCK_PROFILE_UPDATE = "block_profile_update";
                t.QUARANTINE_USER = "quarantine_user";
                t.BLOCK_GUEST_JOIN = "block_guest_join"
            }(n || (n = {}))
        },
        216829: (t, r, e) => {
            "use strict";
            e.d(r, {
                i: () => n
            });
            var n;
            ! function(t) {
                t.BIO = "bio";
                t.USERNAME = "username";
                t.NICKNAME = "nickname";
                t.GLOBAL_NAME = "display_name"
            }(n || (n = {}))
        },
        828153: (t, r, e) => {
            "use strict";
            e.d(r, {
                f: () => n
            });
            var n;
            ! function(t) {
                t[t.KEYWORD = 1] = "KEYWORD";
                t[t.SPAM_LINK = 2] = "SPAM_LINK";
                t[t.ML_SPAM = 3] = "ML_SPAM";
                t[t.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST";
                t[t.MENTION_SPAM = 5] = "MENTION_SPAM";
                t[t.USER_PROFILE = 6] = "USER_PROFILE";
                t[t.SERVER_POLICY = 7] = "SERVER_POLICY"
            }(n || (n = {}))
        },
        284157: (t, r, e) => {
            "use strict";
            e.d(r, {
                n: () => n
            });
            var n;
            ! function(t) {
                t.CONNECT_VOICE = "connect_voice"
            }(n || (n = {}));
            new Set(["connect_voice"])
        },
        349139: (t, r, e) => {
            "use strict";
            e.d(r, {
                o: () => n
            });
            var n;
            ! function(t) {
                t.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                t.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(n || (n = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        482507: (t, r, e) => {
            "use strict";
            e.d(r, {
                J: () => n
            });

            function n(t) {
                var r = document.body;
                if (null == r) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var e = document.createRange(),
                    n = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = t;
                i.contentEditable = "true";
                i.style.visibility = "none";
                r.appendChild(i);
                e.selectNodeContents(i);
                null == n || n.removeAllRanges();
                null == n || n.addRange(e);
                i.focus();
                i.setSelectionRange(0, t.length);
                var a = document.execCommand("copy");
                r.removeChild(i);
                return a
            }
        },
        717621: (t, r, e) => {
            var n;
            ! function(i) {
                var a = /^\s+/,
                    o = /\s+$/,
                    s = 0,
                    u = i.round,
                    f = i.min,
                    c = i.max,
                    l = i.random;

                function h(t, r) {
                    r = r || {};
                    if ((t = t || "") instanceof h) return t;
                    if (!(this instanceof h)) return new h(t, r);
                    var e = function(t) {
                        var r = {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            e = 1,
                            n = null,
                            s = null,
                            u = null,
                            l = !1,
                            h = !1;
                        "string" == typeof t && (t = function(t) {
                            t = t.replace(a, "").replace(o, "").toLowerCase();
                            var r, e = !1;
                            if (C[t]) {
                                t = C[t];
                                e = !0
                            } else if ("transparent" == t) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (r = K.rgb.exec(t)) return {
                                r: r[1],
                                g: r[2],
                                b: r[3]
                            };
                            if (r = K.rgba.exec(t)) return {
                                r: r[1],
                                g: r[2],
                                b: r[3],
                                a: r[4]
                            };
                            if (r = K.hsl.exec(t)) return {
                                h: r[1],
                                s: r[2],
                                l: r[3]
                            };
                            if (r = K.hsla.exec(t)) return {
                                h: r[1],
                                s: r[2],
                                l: r[3],
                                a: r[4]
                            };
                            if (r = K.hsv.exec(t)) return {
                                h: r[1],
                                s: r[2],
                                v: r[3]
                            };
                            if (r = K.hsva.exec(t)) return {
                                h: r[1],
                                s: r[2],
                                v: r[3],
                                a: r[4]
                            };
                            if (r = K.hex8.exec(t)) return {
                                r: U(r[1]),
                                g: U(r[2]),
                                b: U(r[3]),
                                a: H(r[4]),
                                format: e ? "name" : "hex8"
                            };
                            if (r = K.hex6.exec(t)) return {
                                r: U(r[1]),
                                g: U(r[2]),
                                b: U(r[3]),
                                format: e ? "name" : "hex"
                            };
                            if (r = K.hex4.exec(t)) return {
                                r: U(r[1] + "" + r[1]),
                                g: U(r[2] + "" + r[2]),
                                b: U(r[3] + "" + r[3]),
                                a: H(r[4] + "" + r[4]),
                                format: e ? "name" : "hex8"
                            };
                            if (r = K.hex3.exec(t)) return {
                                r: U(r[1] + "" + r[1]),
                                g: U(r[2] + "" + r[2]),
                                b: U(r[3] + "" + r[3]),
                                format: e ? "name" : "hex"
                            };
                            return !1
                        }(t));
                        if ("object" == typeof t) {
                            if (B(t.r) && B(t.g) && B(t.b)) {
                                r = (g = t.r, _ = t.g, d = t.b, {
                                    r: 255 * L(g, 255),
                                    g: 255 * L(_, 255),
                                    b: 255 * L(d, 255)
                                });
                                l = !0;
                                h = "%" === String(t.r).substr(-1) ? "prgb" : "rgb"
                            } else if (B(t.h) && B(t.s) && B(t.v)) {
                                n = F(t.s);
                                s = F(t.v);
                                r = function(t, r, e) {
                                    t = 6 * L(t, 360);
                                    r = L(r, 100);
                                    e = L(e, 100);
                                    var n = i.floor(t),
                                        a = t - n,
                                        o = e * (1 - r),
                                        s = e * (1 - a * r),
                                        u = e * (1 - (1 - a) * r),
                                        f = n % 6;
                                    return {
                                        r: 255 * [e, s, o, o, u, e][f],
                                        g: 255 * [u, e, e, s, o, o][f],
                                        b: 255 * [o, o, u, e, e, s][f]
                                    }
                                }(t.h, n, s);
                                l = !0;
                                h = "hsv"
                            } else if (B(t.h) && B(t.s) && B(t.l)) {
                                n = F(t.s);
                                u = F(t.l);
                                r = function(t, r, e) {
                                    var n, i, a;
                                    t = L(t, 360);
                                    r = L(r, 100);
                                    e = L(e, 100);

                                    function o(t, r, e) {
                                        e < 0 && (e += 1);
                                        e > 1 && (e -= 1);
                                        return e < 1 / 6 ? t + 6 * (r - t) * e : e < .5 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t
                                    }
                                    if (0 === r) n = i = a = e;
                                    else {
                                        var s = e < .5 ? e * (1 + r) : e + r - e * r,
                                            u = 2 * e - s;
                                        n = o(u, s, t + 1 / 3);
                                        i = o(u, s, t);
                                        a = o(u, s, t - 1 / 3)
                                    }
                                    return {
                                        r: 255 * n,
                                        g: 255 * i,
                                        b: 255 * a
                                    }
                                }(t.h, n, u);
                                l = !0;
                                h = "hsl"
                            }
                            t.hasOwnProperty("a") && (e = t.a)
                        }
                        var g, _, d;
                        e = O(e);
                        return {
                            ok: l,
                            format: t.format || h,
                            r: f(255, c(r.r, 0)),
                            g: f(255, c(r.g, 0)),
                            b: f(255, c(r.b, 0)),
                            a: e
                        }
                    }(t);
                    this._originalInput = t, this._r = e.r, this._g = e.g, this._b = e.b, this._a = e.a, this._roundA = u(100 * this._a) / 100, this._format = r.format || e.format;
                    this._gradientType = r.gradientType;
                    this._r < 1 && (this._r = u(this._r));
                    this._g < 1 && (this._g = u(this._g));
                    this._b < 1 && (this._b = u(this._b));
                    this._ok = e.ok;
                    this._tc_id = s++
                }
                h.prototype = {
                    isDark: function() {
                        return this.getBrightness() < 128
                    },
                    isLight: function() {
                        return !this.isDark()
                    },
                    isValid: function() {
                        return this._ok
                    },
                    getOriginalInput: function() {
                        return this._originalInput
                    },
                    getFormat: function() {
                        return this._format
                    },
                    getAlpha: function() {
                        return this._a
                    },
                    getBrightness: function() {
                        var t = this.toRgb();
                        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
                    },
                    getLuminance: function() {
                        var t, r, e, n = this.toRgb();
                        t = n.r / 255;
                        r = n.g / 255;
                        e = n.b / 255;
                        return .2126 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .7152 * (r <= .03928 ? r / 12.92 : i.pow((r + .055) / 1.055, 2.4)) + .0722 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4))
                    },
                    setAlpha: function(t) {
                        this._a = O(t);
                        this._roundA = u(100 * this._a) / 100;
                        return this
                    },
                    toHsv: function() {
                        var t = _(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            v: t.v,
                            a: this._a
                        }
                    },
                    toHsvString: function() {
                        var t = _(this._r, this._g, this._b),
                            r = u(360 * t.h),
                            e = u(100 * t.s),
                            n = u(100 * t.v);
                        return 1 == this._a ? "hsv(" + r + ", " + e + "%, " + n + "%)" : "hsva(" + r + ", " + e + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHsl: function() {
                        var t = g(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            l: t.l,
                            a: this._a
                        }
                    },
                    toHslString: function() {
                        var t = g(this._r, this._g, this._b),
                            r = u(360 * t.h),
                            e = u(100 * t.s),
                            n = u(100 * t.l);
                        return 1 == this._a ? "hsl(" + r + ", " + e + "%, " + n + "%)" : "hsla(" + r + ", " + e + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHex: function(t) {
                        return d(this._r, this._g, this._b, t)
                    },
                    toHexString: function(t) {
                        return "#" + this.toHex(t)
                    },
                    toHex8: function(t) {
                        return function(t, r, e, n, i) {
                            var a = [D(u(t).toString(16)), D(u(r).toString(16)), D(u(e).toString(16)), D(z(n))];
                            if (i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)) return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0);
                            return a.join("")
                        }(this._r, this._g, this._b, this._a, t)
                    },
                    toHex8String: function(t) {
                        return "#" + this.toHex8(t)
                    },
                    toRgb: function() {
                        return {
                            r: u(this._r),
                            g: u(this._g),
                            b: u(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: u(100 * L(this._r, 255)) + "%",
                            g: u(100 * L(this._g, 255)) + "%",
                            b: u(100 * L(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + u(100 * L(this._r, 255)) + "%, " + u(100 * L(this._g, 255)) + "%, " + u(100 * L(this._b, 255)) + "%)" : "rgba(" + u(100 * L(this._r, 255)) + "%, " + u(100 * L(this._g, 255)) + "%, " + u(100 * L(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (T[d(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(t) {
                        var r = "#" + b(this._r, this._g, this._b, this._a),
                            e = r,
                            n = this._gradientType ? "GradientType = 1, " : "";
                        if (t) {
                            var i = h(t);
                            e = "#" + b(i._r, i._g, i._b, i._a)
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + r + ",endColorstr=" + e + ")"
                    },
                    toString: function(t) {
                        var r = !!t;
                        t = t || this._format;
                        var e = !1,
                            n = this._a < 1 && this._a >= 0;
                        if (!r && n && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t)) return "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
                        "rgb" === t && (e = this.toRgbString());
                        "prgb" === t && (e = this.toPercentageRgbString());
                        "hex" !== t && "hex6" !== t || (e = this.toHexString());
                        "hex3" === t && (e = this.toHexString(!0));
                        "hex4" === t && (e = this.toHex8String(!0));
                        "hex8" === t && (e = this.toHex8String());
                        "name" === t && (e = this.toName());
                        "hsl" === t && (e = this.toHslString());
                        "hsv" === t && (e = this.toHsvString());
                        return e || this.toHexString()
                    },
                    clone: function() {
                        return h(this.toString())
                    },
                    _applyModification: function(t, r) {
                        var e = t.apply(null, [this].concat([].slice.call(r)));
                        this._r = e._r;
                        this._g = e._g;
                        this._b = e._b;
                        this.setAlpha(e._a);
                        return this
                    },
                    lighten: function() {
                        return this._applyModification(A, arguments)
                    },
                    brighten: function() {
                        return this._applyModification(E, arguments)
                    },
                    darken: function() {
                        return this._applyModification(S, arguments)
                    },
                    desaturate: function() {
                        return this._applyModification(p, arguments)
                    },
                    saturate: function() {
                        return this._applyModification(v, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(m, arguments)
                    },
                    spin: function() {
                        return this._applyModification(x, arguments)
                    },
                    _applyCombination: function(t, r) {
                        return t.apply(null, [this].concat([].slice.call(r)))
                    },
                    analogous: function() {
                        return this._applyCombination(I, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(y, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(w, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(k, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(R, arguments)
                    },
                    tetrad: function() {
                        return this._applyCombination(N, arguments)
                    }
                };
                h.fromRatio = function(t, r) {
                    if ("object" == typeof t) {
                        var e = {};
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = "a" === n ? t[n] : F(t[n]));
                        t = e
                    }
                    return h(t, r)
                };

                function g(t, r, e) {
                    t = L(t, 255);
                    r = L(r, 255);
                    e = L(e, 255);
                    var n, i, a = c(t, r, e),
                        o = f(t, r, e),
                        s = (a + o) / 2;
                    if (a == o) n = i = 0;
                    else {
                        var u = a - o;
                        i = s > .5 ? u / (2 - a - o) : u / (a + o);
                        switch (a) {
                            case t:
                                n = (r - e) / u + (r < e ? 6 : 0);
                                break;
                            case r:
                                n = (e - t) / u + 2;
                                break;
                            case e:
                                n = (t - r) / u + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: i,
                        l: s
                    }
                }

                function _(t, r, e) {
                    t = L(t, 255);
                    r = L(r, 255);
                    e = L(e, 255);
                    var n, i, a = c(t, r, e),
                        o = f(t, r, e),
                        s = a,
                        u = a - o;
                    i = 0 === a ? 0 : u / a;
                    if (a == o) n = 0;
                    else {
                        switch (a) {
                            case t:
                                n = (r - e) / u + (r < e ? 6 : 0);
                                break;
                            case r:
                                n = (e - t) / u + 2;
                                break;
                            case e:
                                n = (t - r) / u + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: i,
                        v: s
                    }
                }

                function d(t, r, e, n) {
                    var i = [D(u(t).toString(16)), D(u(r).toString(16)), D(u(e).toString(16))];
                    return n && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
                }

                function b(t, r, e, n) {
                    return [D(z(n)), D(u(t).toString(16)), D(u(r).toString(16)), D(u(e).toString(16))].join("")
                }
                h.equals = function(t, r) {
                    return !(!t || !r) && h(t).toRgbString() == h(r).toRgbString()
                };
                h.random = function() {
                    return h.fromRatio({
                        r: l(),
                        g: l(),
                        b: l()
                    })
                };

                function p(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var e = h(t).toHsl();
                    e.s -= r / 100;
                    e.s = M(e.s);
                    return h(e)
                }

                function v(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var e = h(t).toHsl();
                    e.s += r / 100;
                    e.s = M(e.s);
                    return h(e)
                }

                function m(t) {
                    return h(t).desaturate(100)
                }

                function A(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var e = h(t).toHsl();
                    e.l += r / 100;
                    e.l = M(e.l);
                    return h(e)
                }

                function E(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var e = h(t).toRgb();
                    e.r = c(0, f(255, e.r - u(-r / 100 * 255)));
                    e.g = c(0, f(255, e.g - u(-r / 100 * 255)));
                    e.b = c(0, f(255, e.b - u(-r / 100 * 255)));
                    return h(e)
                }

                function S(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var e = h(t).toHsl();
                    e.l -= r / 100;
                    e.l = M(e.l);
                    return h(e)
                }

                function x(t, r) {
                    var e = h(t).toHsl(),
                        n = (e.h + r) % 360;
                    e.h = n < 0 ? 360 + n : n;
                    return h(e)
                }

                function y(t) {
                    var r = h(t).toHsl();
                    r.h = (r.h + 180) % 360;
                    return h(r)
                }

                function R(t) {
                    var r = h(t).toHsl(),
                        e = r.h;
                    return [h(t), h({
                        h: (e + 120) % 360,
                        s: r.s,
                        l: r.l
                    }), h({
                        h: (e + 240) % 360,
                        s: r.s,
                        l: r.l
                    })]
                }

                function N(t) {
                    var r = h(t).toHsl(),
                        e = r.h;
                    return [h(t), h({
                        h: (e + 90) % 360,
                        s: r.s,
                        l: r.l
                    }), h({
                        h: (e + 180) % 360,
                        s: r.s,
                        l: r.l
                    }), h({
                        h: (e + 270) % 360,
                        s: r.s,
                        l: r.l
                    })]
                }

                function k(t) {
                    var r = h(t).toHsl(),
                        e = r.h;
                    return [h(t), h({
                        h: (e + 72) % 360,
                        s: r.s,
                        l: r.l
                    }), h({
                        h: (e + 216) % 360,
                        s: r.s,
                        l: r.l
                    })]
                }

                function I(t, r, e) {
                    r = r || 6;
                    e = e || 30;
                    var n = h(t).toHsl(),
                        i = 360 / e,
                        a = [h(t)];
                    for (n.h = (n.h - (i * r >> 1) + 720) % 360; --r;) {
                        n.h = (n.h + i) % 360;
                        a.push(h(n))
                    }
                    return a
                }

                function w(t, r) {
                    r = r || 6;
                    for (var e = h(t).toHsv(), n = e.h, i = e.s, a = e.v, o = [], s = 1 / r; r--;) {
                        o.push(h({
                            h: n,
                            s: i,
                            v: a
                        }));
                        a = (a + s) % 1
                    }
                    return o
                }
                h.mix = function(t, r, e) {
                    e = 0 === e ? 0 : e || 50;
                    var n = h(t).toRgb(),
                        i = h(r).toRgb(),
                        a = e / 100;
                    return h({
                        r: (i.r - n.r) * a + n.r,
                        g: (i.g - n.g) * a + n.g,
                        b: (i.b - n.b) * a + n.b,
                        a: (i.a - n.a) * a + n.a
                    })
                };
                h.readability = function(t, r) {
                    var e = h(t),
                        n = h(r);
                    return (i.max(e.getLuminance(), n.getLuminance()) + .05) / (i.min(e.getLuminance(), n.getLuminance()) + .05)
                };
                h.isReadable = function(t, r, e) {
                    var n, i, a = h.readability(t, r);
                    i = !1;
                    switch ((n = function(t) {
                            var r, e;
                            r = ((t = t || {
                                level: "AA",
                                size: "small"
                            }).level || "AA").toUpperCase();
                            e = (t.size || "small").toLowerCase();
                            "AA" !== r && "AAA" !== r && (r = "AA");
                            "small" !== e && "large" !== e && (e = "small");
                            return {
                                level: r,
                                size: e
                            }
                        }(e)).level + n.size) {
                        case "AAsmall":
                        case "AAAlarge":
                            i = a >= 4.5;
                            break;
                        case "AAlarge":
                            i = a >= 3;
                            break;
                        case "AAAsmall":
                            i = a >= 7
                    }
                    return i
                };
                h.mostReadable = function(t, r, e) {
                    var n, i, a, o, s = null,
                        u = 0;
                    i = (e = e || {}).includeFallbackColors;
                    a = e.level;
                    o = e.size;
                    for (var f = 0; f < r.length; f++)
                        if ((n = h.readability(t, r[f])) > u) {
                            u = n;
                            s = h(r[f])
                        } if (h.isReadable(t, s, {
                            level: a,
                            size: o
                        }) || !i) return s;
                    e.includeFallbackColors = !1;
                    return h.mostReadable(t, ["#fff", "#000"], e)
                };
                var C = h.names = {
                        aliceblue: "f0f8ff",
                        antiquewhite: "faebd7",
                        aqua: "0ff",
                        aquamarine: "7fffd4",
                        azure: "f0ffff",
                        beige: "f5f5dc",
                        bisque: "ffe4c4",
                        black: "000",
                        blanchedalmond: "ffebcd",
                        blue: "00f",
                        blueviolet: "8a2be2",
                        brown: "a52a2a",
                        burlywood: "deb887",
                        burntsienna: "ea7e5d",
                        cadetblue: "5f9ea0",
                        chartreuse: "7fff00",
                        chocolate: "d2691e",
                        coral: "ff7f50",
                        cornflowerblue: "6495ed",
                        cornsilk: "fff8dc",
                        crimson: "dc143c",
                        cyan: "0ff",
                        darkblue: "00008b",
                        darkcyan: "008b8b",
                        darkgoldenrod: "b8860b",
                        darkgray: "a9a9a9",
                        darkgreen: "006400",
                        darkgrey: "a9a9a9",
                        darkkhaki: "bdb76b",
                        darkmagenta: "8b008b",
                        darkolivegreen: "556b2f",
                        darkorange: "ff8c00",
                        darkorchid: "9932cc",
                        darkred: "8b0000",
                        darksalmon: "e9967a",
                        darkseagreen: "8fbc8f",
                        darkslateblue: "483d8b",
                        darkslategray: "2f4f4f",
                        darkslategrey: "2f4f4f",
                        darkturquoise: "00ced1",
                        darkviolet: "9400d3",
                        deeppink: "ff1493",
                        deepskyblue: "00bfff",
                        dimgray: "696969",
                        dimgrey: "696969",
                        dodgerblue: "1e90ff",
                        firebrick: "b22222",
                        floralwhite: "fffaf0",
                        forestgreen: "228b22",
                        fuchsia: "f0f",
                        gainsboro: "dcdcdc",
                        ghostwhite: "f8f8ff",
                        gold: "ffd700",
                        goldenrod: "daa520",
                        gray: "808080",
                        green: "008000",
                        greenyellow: "adff2f",
                        grey: "808080",
                        honeydew: "f0fff0",
                        hotpink: "ff69b4",
                        indianred: "cd5c5c",
                        indigo: "4b0082",
                        ivory: "fffff0",
                        khaki: "f0e68c",
                        lavender: "e6e6fa",
                        lavenderblush: "fff0f5",
                        lawngreen: "7cfc00",
                        lemonchiffon: "fffacd",
                        lightblue: "add8e6",
                        lightcoral: "f08080",
                        lightcyan: "e0ffff",
                        lightgoldenrodyellow: "fafad2",
                        lightgray: "d3d3d3",
                        lightgreen: "90ee90",
                        lightgrey: "d3d3d3",
                        lightpink: "ffb6c1",
                        lightsalmon: "ffa07a",
                        lightseagreen: "20b2aa",
                        lightskyblue: "87cefa",
                        lightslategray: "789",
                        lightslategrey: "789",
                        lightsteelblue: "b0c4de",
                        lightyellow: "ffffe0",
                        lime: "0f0",
                        limegreen: "32cd32",
                        linen: "faf0e6",
                        magenta: "f0f",
                        maroon: "800000",
                        mediumaquamarine: "66cdaa",
                        mediumblue: "0000cd",
                        mediumorchid: "ba55d3",
                        mediumpurple: "9370db",
                        mediumseagreen: "3cb371",
                        mediumslateblue: "7b68ee",
                        mediumspringgreen: "00fa9a",
                        mediumturquoise: "48d1cc",
                        mediumvioletred: "c71585",
                        midnightblue: "191970",
                        mintcream: "f5fffa",
                        mistyrose: "ffe4e1",
                        moccasin: "ffe4b5",
                        navajowhite: "ffdead",
                        navy: "000080",
                        oldlace: "fdf5e6",
                        olive: "808000",
                        olivedrab: "6b8e23",
                        orange: "ffa500",
                        orangered: "ff4500",
                        orchid: "da70d6",
                        palegoldenrod: "eee8aa",
                        palegreen: "98fb98",
                        paleturquoise: "afeeee",
                        palevioletred: "db7093",
                        papayawhip: "ffefd5",
                        peachpuff: "ffdab9",
                        peru: "cd853f",
                        pink: "ffc0cb",
                        plum: "dda0dd",
                        powderblue: "b0e0e6",
                        purple: "800080",
                        rebeccapurple: "663399",
                        red: "f00",
                        rosybrown: "bc8f8f",
                        royalblue: "4169e1",
                        saddlebrown: "8b4513",
                        salmon: "fa8072",
                        sandybrown: "f4a460",
                        seagreen: "2e8b57",
                        seashell: "fff5ee",
                        sienna: "a0522d",
                        silver: "c0c0c0",
                        skyblue: "87ceeb",
                        slateblue: "6a5acd",
                        slategray: "708090",
                        slategrey: "708090",
                        snow: "fffafa",
                        springgreen: "00ff7f",
                        steelblue: "4682b4",
                        tan: "d2b48c",
                        teal: "008080",
                        thistle: "d8bfd8",
                        tomato: "ff6347",
                        turquoise: "40e0d0",
                        violet: "ee82ee",
                        wheat: "f5deb3",
                        white: "fff",
                        whitesmoke: "f5f5f5",
                        yellow: "ff0",
                        yellowgreen: "9acd32"
                    },
                    T = h.hexNames = function(t) {
                        var r = {};
                        for (var e in t) t.hasOwnProperty(e) && (r[t[e]] = e);
                        return r
                    }(C);

                function O(t) {
                    t = parseFloat(t);
                    (isNaN(t) || t < 0 || t > 1) && (t = 1);
                    return t
                }

                function L(t, r) {
                    (function(t) {
                        return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
                    })(t) && (t = "100%");
                    var e = function(t) {
                        return "string" == typeof t && -1 != t.indexOf("%")
                    }(t);
                    t = f(r, c(0, parseFloat(t)));
                    e && (t = parseInt(t * r, 10) / 100);
                    return i.abs(t - r) < 1e-6 ? 1 : t % r / parseFloat(r)
                }

                function M(t) {
                    return f(1, c(0, t))
                }

                function U(t) {
                    return parseInt(t, 16)
                }

                function D(t) {
                    return 1 == t.length ? "0" + t : "" + t
                }

                function F(t) {
                    t <= 1 && (t = 100 * t + "%");
                    return t
                }

                function z(t) {
                    return i.round(255 * parseFloat(t)).toString(16)
                }

                function H(t) {
                    return U(t) / 255
                }
                var P, G, q, K = (G = "[\\s|\\(]+(" + (P = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")\\s*\\)?", q = "[\\s|\\(]+(" + P + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(P),
                    rgb: new RegExp("rgb" + G),
                    rgba: new RegExp("rgba" + q),
                    hsl: new RegExp("hsl" + G),
                    hsla: new RegExp("hsla" + q),
                    hsv: new RegExp("hsv" + G),
                    hsva: new RegExp("hsva" + q),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function B(t) {
                    return !!K.CSS_UNIT.exec(t)
                }
                if (t.exports) t.exports = h;
                else {
                    void 0 !== (n = function() {
                        return h
                    }.call(r, e, r, t)) && (t.exports = n)
                }
            }(Math)
        }
    }
]);
//# sourceMappingURL=84d6d9944b9a8b296109.js.map