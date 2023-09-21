(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [50342], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var i = null,
                    n = [];
                if (r[2]) {
                    i = (e = r[2].split("-")).shift();
                    n = e
                }
                var a = [];
                r[5] && (a = r[5].split("-")).shift();
                var o = [];
                if (r[6]) {
                    (e = r[6].split("-")).shift();
                    for (var s, h = []; e.length;) {
                        var f = e.shift();
                        if (1 === f.length)
                            if (s) {
                                o.push({
                                    singleton: s,
                                    extension: h
                                });
                                s = f;
                                h = []
                            } else s = f;
                        else h.push(f)
                    }
                    o.push({
                        singleton: s,
                        extension: h
                    })
                }
                var u = [];
                if (r[7]) {
                    (u = r[7].split("-")).shift();
                    u.shift()
                }
                var c = [];
                r[8] && (c = r[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: i,
                            extlang: n
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: a,
                        extension: o,
                        privateuse: u
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = n(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (r(t)) {
                    for (var e = t.length, i = 0; i < e; ++i) this[i] = t[i];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), r = this._front, i = this._capacity, n = 0; n < t; ++n) e[n] = this[r + n & i - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    r = this._length;
                if (e > 1) {
                    var i = this._capacity;
                    if (r + e > i) {
                        for (var n = 0; n < e; ++n) {
                            this._checkCapacity(r + 1);
                            this[a = this._front + r & this._capacity - 1] = arguments[n];
                            r++;
                            this._length = r
                        }
                        return r
                    }
                    for (var a = this._front, n = 0; n < e; ++n) {
                        this[a + r & i - 1] = arguments[n];
                        a++
                    }
                    this._length = r + e;
                    return r + e
                }
                if (0 === e) return r;
                this._checkCapacity(r + 1);
                this[n = this._front + r & this._capacity - 1] = t;
                this._length = r + 1;
                return r + 1
            };
            e.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        r = this[e];
                    this[e] = void 0;
                    this._length = t - 1;
                    return r
                }
            };
            e.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        r = this[e];
                    this[e] = void 0;
                    this._front = e + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return r
                }
            };
            e.prototype.unshift = function(t) {
                var e = this._length,
                    r = arguments.length;
                if (r > 1) {
                    if (e + r > (n = this._capacity)) {
                        for (var i = r - 1; i >= 0; i--) {
                            this._checkCapacity(e + 1);
                            var n = this._capacity;
                            this[o = (this._front - 1 & n - 1 ^ n) - n] = arguments[i];
                            e++;
                            this._length = e;
                            this._front = o
                        }
                        return e
                    }
                    var a = this._front;
                    for (i = r - 1; i >= 0; i--) {
                        var o;
                        this[o = (a - 1 & n - 1 ^ n) - n] = arguments[i];
                        a = o
                    }
                    this._front = a;
                    this._length = e + r;
                    return e + r
                }
                if (0 === r) return e;
                this._checkCapacity(e + 1);
                n = this._capacity;
                this[i = (this._front - 1 & n - 1 ^ n) - n] = t;
                this._length = e + 1;
                this._front = i;
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
                    var r = this._length;
                    e < 0 && (e += r);
                    if (!(e < 0 || e >= r)) return this[this._front + e & this._capacity - 1]
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
                this._capacity < t && this._resizeTo(n(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    r = this._capacity,
                    n = new Array(r),
                    a = this._length;
                i(this, 0, n, 0, r);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + a <= r) i(n, e, this, 0, a);
                else {
                    var o = a - (e + a & r - 1);
                    i(n, e, this, 0, o);
                    i(n, 0, this, o, a - o)
                }
            };
            var r = Array.isArray;

            function i(t, e, r, i, n) {
                for (var a = 0; a < n; ++a) r[a + i] = t[a + e]
            }

            function n(t) {
                if ("number" != typeof t) {
                    if (!r(t)) return 16;
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
        824390: t => {
            "use strict";
            t.exports = function(t, e) {
                var r = e.length,
                    i = t.length;
                if (i > r) return !1;
                if (i === r) return t === e;
                t: for (var n = 0, a = 0; n < i; n++) {
                    for (var o = t.charCodeAt(n); a < r;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        823493: (t, e, r) => {
            var i = r(23279),
                n = r(513218);
            t.exports = function(t, e, r) {
                var a = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (n(r)) {
                    a = "leading" in r ? !!r.leading : a;
                    o = "trailing" in r ? !!r.trailing : o
                }
                return i(t, e, {
                    leading: a,
                    maxWait: e,
                    trailing: o
                })
            }
        },
        180735: (t, e, r) => {
            "use strict";
            r.d(e, {
                h: () => i
            });
            var i;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(i || (i = {}))
        },
        16455: (t, e, r) => {
            "use strict";
            r.d(e, {
                j: () => i
            });
            var i;
            ! function(t) {
                t[t.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE";
                t[t.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL";
                t[t.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED";
                t[t.QUARANTINE_USER = 4] = "QUARANTINE_USER"
            }(i || (i = {}))
        },
        813701: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => i
            });
            var i;
            ! function(t) {
                t.NICKNAME_UPDATE = "nickname_update";
                t.NICKNAME_RESET = "nickname_reset"
            }(i || (i = {}))
        },
        921354: (t, e, r) => {
            "use strict";
            r.d(e, {
                q: () => i
            });
            var i;
            ! function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN";
                t[t.MESSAGE_SEND = 1] = "MESSAGE_SEND";
                t[t.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
            }(i || (i = {}))
        },
        986468: (t, e, r) => {
            "use strict";
            r.d(e, {
                G: () => i
            });
            var i;
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
            }(i || (i = {}))
        },
        901399: (t, e, r) => {
            "use strict";
            r.d(e, {
                D: () => i
            });
            var i;
            ! function(t) {
                t.JOIN_ATTEMPTS = "join_attempts";
                t.RAID_DATETIME = "raid_datetime";
                t.DMS_SENT = "dms_sent";
                t.RAID_TYPE = "raid_type";
                t.RESOLVED_REASON = "resolved_reason"
            }(i || (i = {}))
        },
        945481: (t, e, r) => {
            "use strict";
            r.d(e, {
                B: () => i
            });
            var i;
            ! function(t) {
                t.MESSAGE_SEND = "message_send";
                t.GUILD_JOIN = "guild_join";
                t.USERNAME_UPDATE = "username_update"
            }(i || (i = {}))
        },
        824244: (t, e, r) => {
            "use strict";
            r.d(e, {
                z: () => i
            });
            var i;
            ! function(t) {
                t.BLOCK_PROFILE_UPDATE = "block_profile_update";
                t.QUARANTINE_USER = "quarantine_user";
                t.BLOCK_GUEST_JOIN = "block_guest_join"
            }(i || (i = {}))
        },
        216829: (t, e, r) => {
            "use strict";
            r.d(e, {
                i: () => i
            });
            var i;
            ! function(t) {
                t.BIO = "bio";
                t.USERNAME = "username";
                t.NICKNAME = "nickname";
                t.GLOBAL_NAME = "display_name"
            }(i || (i = {}))
        },
        828153: (t, e, r) => {
            "use strict";
            r.d(e, {
                f: () => i
            });
            var i;
            ! function(t) {
                t[t.KEYWORD = 1] = "KEYWORD";
                t[t.SPAM_LINK = 2] = "SPAM_LINK";
                t[t.ML_SPAM = 3] = "ML_SPAM";
                t[t.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST";
                t[t.MENTION_SPAM = 5] = "MENTION_SPAM";
                t[t.USER_PROFILE = 6] = "USER_PROFILE";
                t[t.SERVER_POLICY = 7] = "SERVER_POLICY"
            }(i || (i = {}))
        },
        142520: (t, e, r) => {
            "use strict";
            r.d(e, {
                x: () => i
            });
            var i;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(i || (i = {}))
        },
        482507: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => i
            });

            function i(t) {
                var e = document.body;
                if (null == e) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var r = document.createRange(),
                    i = window.getSelection(),
                    n = document.createElement("textarea");
                n.value = t;
                n.contentEditable = "true";
                n.style.visibility = "none";
                e.appendChild(n);
                r.selectNodeContents(n);
                null == i || i.removeAllRanges();
                null == i || i.addRange(r);
                n.focus();
                n.setSelectionRange(0, t.length);
                var a = document.execCommand("copy");
                e.removeChild(n);
                return a
            }
        },
        717621: (t, e, r) => {
            var i;
            ! function(n) {
                var a = /^\s+/,
                    o = /\s+$/,
                    s = 0,
                    h = n.round,
                    f = n.min,
                    u = n.max,
                    c = n.random;

                function l(t, e) {
                    e = e || {};
                    if ((t = t || "") instanceof l) return t;
                    if (!(this instanceof l)) return new l(t, e);
                    var r = function(t) {
                        var e = {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            r = 1,
                            i = null,
                            s = null,
                            h = null,
                            c = !1,
                            l = !1;
                        "string" == typeof t && (t = function(t) {
                            t = t.replace(a, "").replace(o, "").toLowerCase();
                            var e, r = !1;
                            if (I[t]) {
                                t = I[t];
                                r = !0
                            } else if ("transparent" == t) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (e = K.rgb.exec(t)) return {
                                r: e[1],
                                g: e[2],
                                b: e[3]
                            };
                            if (e = K.rgba.exec(t)) return {
                                r: e[1],
                                g: e[2],
                                b: e[3],
                                a: e[4]
                            };
                            if (e = K.hsl.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                l: e[3]
                            };
                            if (e = K.hsla.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                l: e[3],
                                a: e[4]
                            };
                            if (e = K.hsv.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                v: e[3]
                            };
                            if (e = K.hsva.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                v: e[3],
                                a: e[4]
                            };
                            if (e = K.hex8.exec(t)) return {
                                r: L(e[1]),
                                g: L(e[2]),
                                b: L(e[3]),
                                a: P(e[4]),
                                format: r ? "name" : "hex8"
                            };
                            if (e = K.hex6.exec(t)) return {
                                r: L(e[1]),
                                g: L(e[2]),
                                b: L(e[3]),
                                format: r ? "name" : "hex"
                            };
                            if (e = K.hex4.exec(t)) return {
                                r: L(e[1] + "" + e[1]),
                                g: L(e[2] + "" + e[2]),
                                b: L(e[3] + "" + e[3]),
                                a: P(e[4] + "" + e[4]),
                                format: r ? "name" : "hex8"
                            };
                            if (e = K.hex3.exec(t)) return {
                                r: L(e[1] + "" + e[1]),
                                g: L(e[2] + "" + e[2]),
                                b: L(e[3] + "" + e[3]),
                                format: r ? "name" : "hex"
                            };
                            return !1
                        }(t));
                        if ("object" == typeof t) {
                            if (q(t.r) && q(t.g) && q(t.b)) {
                                e = (_ = t.r, g = t.g, p = t.b, {
                                    r: 255 * M(_, 255),
                                    g: 255 * M(g, 255),
                                    b: 255 * M(p, 255)
                                });
                                c = !0;
                                l = "%" === String(t.r).substr(-1) ? "prgb" : "rgb"
                            } else if (q(t.h) && q(t.s) && q(t.v)) {
                                i = F(t.s);
                                s = F(t.v);
                                e = function(t, e, r) {
                                    t = 6 * M(t, 360);
                                    e = M(e, 100);
                                    r = M(r, 100);
                                    var i = n.floor(t),
                                        a = t - i,
                                        o = r * (1 - e),
                                        s = r * (1 - a * e),
                                        h = r * (1 - (1 - a) * e),
                                        f = i % 6;
                                    return {
                                        r: 255 * [r, s, o, o, h, r][f],
                                        g: 255 * [h, r, r, s, o, o][f],
                                        b: 255 * [o, o, h, r, r, s][f]
                                    }
                                }(t.h, i, s);
                                c = !0;
                                l = "hsv"
                            } else if (q(t.h) && q(t.s) && q(t.l)) {
                                i = F(t.s);
                                h = F(t.l);
                                e = function(t, e, r) {
                                    var i, n, a;
                                    t = M(t, 360);
                                    e = M(e, 100);
                                    r = M(r, 100);

                                    function o(t, e, r) {
                                        r < 0 && (r += 1);
                                        r > 1 && (r -= 1);
                                        return r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                                    }
                                    if (0 === e) i = n = a = r;
                                    else {
                                        var s = r < .5 ? r * (1 + e) : r + e - r * e,
                                            h = 2 * r - s;
                                        i = o(h, s, t + 1 / 3);
                                        n = o(h, s, t);
                                        a = o(h, s, t - 1 / 3)
                                    }
                                    return {
                                        r: 255 * i,
                                        g: 255 * n,
                                        b: 255 * a
                                    }
                                }(t.h, i, h);
                                c = !0;
                                l = "hsl"
                            }
                            t.hasOwnProperty("a") && (r = t.a)
                        }
                        var _, g, p;
                        r = w(r);
                        return {
                            ok: c,
                            format: t.format || l,
                            r: f(255, u(e.r, 0)),
                            g: f(255, u(e.g, 0)),
                            b: f(255, u(e.b, 0)),
                            a: r
                        }
                    }(t);
                    this._originalInput = t, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = h(100 * this._a) / 100, this._format = e.format || r.format;
                    this._gradientType = e.gradientType;
                    this._r < 1 && (this._r = h(this._r));
                    this._g < 1 && (this._g = h(this._g));
                    this._b < 1 && (this._b = h(this._b));
                    this._ok = r.ok;
                    this._tc_id = s++
                }
                l.prototype = {
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
                        var t, e, r, i = this.toRgb();
                        t = i.r / 255;
                        e = i.g / 255;
                        r = i.b / 255;
                        return .2126 * (t <= .03928 ? t / 12.92 : n.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : n.pow((e + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : n.pow((r + .055) / 1.055, 2.4))
                    },
                    setAlpha: function(t) {
                        this._a = w(t);
                        this._roundA = h(100 * this._a) / 100;
                        return this
                    },
                    toHsv: function() {
                        var t = g(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            v: t.v,
                            a: this._a
                        }
                    },
                    toHsvString: function() {
                        var t = g(this._r, this._g, this._b),
                            e = h(360 * t.h),
                            r = h(100 * t.s),
                            i = h(100 * t.v);
                        return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + i + "%)" : "hsva(" + e + ", " + r + "%, " + i + "%, " + this._roundA + ")"
                    },
                    toHsl: function() {
                        var t = _(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            l: t.l,
                            a: this._a
                        }
                    },
                    toHslString: function() {
                        var t = _(this._r, this._g, this._b),
                            e = h(360 * t.h),
                            r = h(100 * t.s),
                            i = h(100 * t.l);
                        return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + i + "%)" : "hsla(" + e + ", " + r + "%, " + i + "%, " + this._roundA + ")"
                    },
                    toHex: function(t) {
                        return p(this._r, this._g, this._b, t)
                    },
                    toHexString: function(t) {
                        return "#" + this.toHex(t)
                    },
                    toHex8: function(t) {
                        return function(t, e, r, i, n) {
                            var a = [D(h(t).toString(16)), D(h(e).toString(16)), D(h(r).toString(16)), D(H(i))];
                            if (n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)) return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0);
                            return a.join("")
                        }(this._r, this._g, this._b, this._a, t)
                    },
                    toHex8String: function(t) {
                        return "#" + this.toHex8(t)
                    },
                    toRgb: function() {
                        return {
                            r: h(this._r),
                            g: h(this._g),
                            b: h(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + h(this._r) + ", " + h(this._g) + ", " + h(this._b) + ")" : "rgba(" + h(this._r) + ", " + h(this._g) + ", " + h(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: h(100 * M(this._r, 255)) + "%",
                            g: h(100 * M(this._g, 255)) + "%",
                            b: h(100 * M(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + h(100 * M(this._r, 255)) + "%, " + h(100 * M(this._g, 255)) + "%, " + h(100 * M(this._b, 255)) + "%)" : "rgba(" + h(100 * M(this._r, 255)) + "%, " + h(100 * M(this._g, 255)) + "%, " + h(100 * M(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (O[p(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(t) {
                        var e = "#" + d(this._r, this._g, this._b, this._a),
                            r = e,
                            i = this._gradientType ? "GradientType = 1, " : "";
                        if (t) {
                            var n = l(t);
                            r = "#" + d(n._r, n._g, n._b, n._a)
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + e + ",endColorstr=" + r + ")"
                    },
                    toString: function(t) {
                        var e = !!t;
                        t = t || this._format;
                        var r = !1,
                            i = this._a < 1 && this._a >= 0;
                        if (!e && i && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t)) return "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
                        "rgb" === t && (r = this.toRgbString());
                        "prgb" === t && (r = this.toPercentageRgbString());
                        "hex" !== t && "hex6" !== t || (r = this.toHexString());
                        "hex3" === t && (r = this.toHexString(!0));
                        "hex4" === t && (r = this.toHex8String(!0));
                        "hex8" === t && (r = this.toHex8String());
                        "name" === t && (r = this.toName());
                        "hsl" === t && (r = this.toHslString());
                        "hsv" === t && (r = this.toHsvString());
                        return r || this.toHexString()
                    },
                    clone: function() {
                        return l(this.toString())
                    },
                    _applyModification: function(t, e) {
                        var r = t.apply(null, [this].concat([].slice.call(e)));
                        this._r = r._r;
                        this._g = r._g;
                        this._b = r._b;
                        this.setAlpha(r._a);
                        return this
                    },
                    lighten: function() {
                        return this._applyModification(m, arguments)
                    },
                    brighten: function() {
                        return this._applyModification(A, arguments)
                    },
                    darken: function() {
                        return this._applyModification(E, arguments)
                    },
                    desaturate: function() {
                        return this._applyModification(b, arguments)
                    },
                    saturate: function() {
                        return this._applyModification(v, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(y, arguments)
                    },
                    spin: function() {
                        return this._applyModification(S, arguments)
                    },
                    _applyCombination: function(t, e) {
                        return t.apply(null, [this].concat([].slice.call(e)))
                    },
                    analogous: function() {
                        return this._applyCombination(C, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(R, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(T, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(N, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(k, arguments)
                    },
                    tetrad: function() {
                        return this._applyCombination(x, arguments)
                    }
                };
                l.fromRatio = function(t, e) {
                    if ("object" == typeof t) {
                        var r = {};
                        for (var i in t) t.hasOwnProperty(i) && (r[i] = "a" === i ? t[i] : F(t[i]));
                        t = r
                    }
                    return l(t, e)
                };

                function _(t, e, r) {
                    t = M(t, 255);
                    e = M(e, 255);
                    r = M(r, 255);
                    var i, n, a = u(t, e, r),
                        o = f(t, e, r),
                        s = (a + o) / 2;
                    if (a == o) i = n = 0;
                    else {
                        var h = a - o;
                        n = s > .5 ? h / (2 - a - o) : h / (a + o);
                        switch (a) {
                            case t:
                                i = (e - r) / h + (e < r ? 6 : 0);
                                break;
                            case e:
                                i = (r - t) / h + 2;
                                break;
                            case r:
                                i = (t - e) / h + 4
                        }
                        i /= 6
                    }
                    return {
                        h: i,
                        s: n,
                        l: s
                    }
                }

                function g(t, e, r) {
                    t = M(t, 255);
                    e = M(e, 255);
                    r = M(r, 255);
                    var i, n, a = u(t, e, r),
                        o = f(t, e, r),
                        s = a,
                        h = a - o;
                    n = 0 === a ? 0 : h / a;
                    if (a == o) i = 0;
                    else {
                        switch (a) {
                            case t:
                                i = (e - r) / h + (e < r ? 6 : 0);
                                break;
                            case e:
                                i = (r - t) / h + 2;
                                break;
                            case r:
                                i = (t - e) / h + 4
                        }
                        i /= 6
                    }
                    return {
                        h: i,
                        s: n,
                        v: s
                    }
                }

                function p(t, e, r, i) {
                    var n = [D(h(t).toString(16)), D(h(e).toString(16)), D(h(r).toString(16))];
                    return i && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("")
                }

                function d(t, e, r, i) {
                    return [D(H(i)), D(h(t).toString(16)), D(h(e).toString(16)), D(h(r).toString(16))].join("")
                }
                l.equals = function(t, e) {
                    return !(!t || !e) && l(t).toRgbString() == l(e).toRgbString()
                };
                l.random = function() {
                    return l.fromRatio({
                        r: c(),
                        g: c(),
                        b: c()
                    })
                };

                function b(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = l(t).toHsl();
                    r.s -= e / 100;
                    r.s = U(r.s);
                    return l(r)
                }

                function v(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = l(t).toHsl();
                    r.s += e / 100;
                    r.s = U(r.s);
                    return l(r)
                }

                function y(t) {
                    return l(t).desaturate(100)
                }

                function m(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = l(t).toHsl();
                    r.l += e / 100;
                    r.l = U(r.l);
                    return l(r)
                }

                function A(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = l(t).toRgb();
                    r.r = u(0, f(255, r.r - h(-e / 100 * 255)));
                    r.g = u(0, f(255, r.g - h(-e / 100 * 255)));
                    r.b = u(0, f(255, r.b - h(-e / 100 * 255)));
                    return l(r)
                }

                function E(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = l(t).toHsl();
                    r.l -= e / 100;
                    r.l = U(r.l);
                    return l(r)
                }

                function S(t, e) {
                    var r = l(t).toHsl(),
                        i = (r.h + e) % 360;
                    r.h = i < 0 ? 360 + i : i;
                    return l(r)
                }

                function R(t) {
                    var e = l(t).toHsl();
                    e.h = (e.h + 180) % 360;
                    return l(e)
                }

                function k(t) {
                    var e = l(t).toHsl(),
                        r = e.h;
                    return [l(t), l({
                        h: (r + 120) % 360,
                        s: e.s,
                        l: e.l
                    }), l({
                        h: (r + 240) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function x(t) {
                    var e = l(t).toHsl(),
                        r = e.h;
                    return [l(t), l({
                        h: (r + 90) % 360,
                        s: e.s,
                        l: e.l
                    }), l({
                        h: (r + 180) % 360,
                        s: e.s,
                        l: e.l
                    }), l({
                        h: (r + 270) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function N(t) {
                    var e = l(t).toHsl(),
                        r = e.h;
                    return [l(t), l({
                        h: (r + 72) % 360,
                        s: e.s,
                        l: e.l
                    }), l({
                        h: (r + 216) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function C(t, e, r) {
                    e = e || 6;
                    r = r || 30;
                    var i = l(t).toHsl(),
                        n = 360 / r,
                        a = [l(t)];
                    for (i.h = (i.h - (n * e >> 1) + 720) % 360; --e;) {
                        i.h = (i.h + n) % 360;
                        a.push(l(i))
                    }
                    return a
                }

                function T(t, e) {
                    e = e || 6;
                    for (var r = l(t).toHsv(), i = r.h, n = r.s, a = r.v, o = [], s = 1 / e; e--;) {
                        o.push(l({
                            h: i,
                            s: n,
                            v: a
                        }));
                        a = (a + s) % 1
                    }
                    return o
                }
                l.mix = function(t, e, r) {
                    r = 0 === r ? 0 : r || 50;
                    var i = l(t).toRgb(),
                        n = l(e).toRgb(),
                        a = r / 100;
                    return l({
                        r: (n.r - i.r) * a + i.r,
                        g: (n.g - i.g) * a + i.g,
                        b: (n.b - i.b) * a + i.b,
                        a: (n.a - i.a) * a + i.a
                    })
                };
                l.readability = function(t, e) {
                    var r = l(t),
                        i = l(e);
                    return (n.max(r.getLuminance(), i.getLuminance()) + .05) / (n.min(r.getLuminance(), i.getLuminance()) + .05)
                };
                l.isReadable = function(t, e, r) {
                    var i, n, a = l.readability(t, e);
                    n = !1;
                    switch ((i = function(t) {
                            var e, r;
                            e = ((t = t || {
                                level: "AA",
                                size: "small"
                            }).level || "AA").toUpperCase();
                            r = (t.size || "small").toLowerCase();
                            "AA" !== e && "AAA" !== e && (e = "AA");
                            "small" !== r && "large" !== r && (r = "small");
                            return {
                                level: e,
                                size: r
                            }
                        }(r)).level + i.size) {
                        case "AAsmall":
                        case "AAAlarge":
                            n = a >= 4.5;
                            break;
                        case "AAlarge":
                            n = a >= 3;
                            break;
                        case "AAAsmall":
                            n = a >= 7
                    }
                    return n
                };
                l.mostReadable = function(t, e, r) {
                    var i, n, a, o, s = null,
                        h = 0;
                    n = (r = r || {}).includeFallbackColors;
                    a = r.level;
                    o = r.size;
                    for (var f = 0; f < e.length; f++)
                        if ((i = l.readability(t, e[f])) > h) {
                            h = i;
                            s = l(e[f])
                        } if (l.isReadable(t, s, {
                            level: a,
                            size: o
                        }) || !n) return s;
                    r.includeFallbackColors = !1;
                    return l.mostReadable(t, ["#fff", "#000"], r)
                };
                var I = l.names = {
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
                    O = l.hexNames = function(t) {
                        var e = {};
                        for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
                        return e
                    }(I);

                function w(t) {
                    t = parseFloat(t);
                    (isNaN(t) || t < 0 || t > 1) && (t = 1);
                    return t
                }

                function M(t, e) {
                    (function(t) {
                        return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
                    })(t) && (t = "100%");
                    var r = function(t) {
                        return "string" == typeof t && -1 != t.indexOf("%")
                    }(t);
                    t = f(e, u(0, parseFloat(t)));
                    r && (t = parseInt(t * e, 10) / 100);
                    return n.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
                }

                function U(t) {
                    return f(1, u(0, t))
                }

                function L(t) {
                    return parseInt(t, 16)
                }

                function D(t) {
                    return 1 == t.length ? "0" + t : "" + t
                }

                function F(t) {
                    t <= 1 && (t = 100 * t + "%");
                    return t
                }

                function H(t) {
                    return n.round(255 * parseFloat(t)).toString(16)
                }

                function P(t) {
                    return L(t) / 255
                }
                var z, B, G, K = (B = "[\\s|\\(]+(" + (z = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")\\s*\\)?", G = "[\\s|\\(]+(" + z + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(z),
                    rgb: new RegExp("rgb" + B),
                    rgba: new RegExp("rgba" + G),
                    hsl: new RegExp("hsl" + B),
                    hsla: new RegExp("hsla" + G),
                    hsv: new RegExp("hsv" + B),
                    hsva: new RegExp("hsva" + G),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function q(t) {
                    return !!K.CSS_UNIT.exec(t)
                }
                if (t.exports) t.exports = l;
                else {
                    void 0 !== (i = function() {
                        return l
                    }.call(e, r, e, t)) && (t.exports = i)
                }
            }(Math)
        }
    }
]);