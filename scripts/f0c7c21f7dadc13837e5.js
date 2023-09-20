(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79216], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var n = null,
                    i = [];
                if (r[2]) {
                    n = (e = r[2].split("-")).shift();
                    i = e
                }
                var a = [];
                r[5] && (a = r[5].split("-")).shift();
                var s = [];
                if (r[6]) {
                    (e = r[6].split("-")).shift();
                    for (var o, f = []; e.length;) {
                        var u = e.shift();
                        if (1 === u.length)
                            if (o) {
                                s.push({
                                    singleton: o,
                                    extension: f
                                });
                                o = u;
                                f = []
                            } else o = u;
                        else f.push(u)
                    }
                    s.push({
                        singleton: o,
                        extension: f
                    })
                }
                var l = [];
                if (r[7]) {
                    (l = r[7].split("-")).shift();
                    l.shift()
                }
                var h = [];
                r[8] && (h = r[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: a,
                        extension: s,
                        privateuse: l
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, e) {
                var r = e.length,
                    n = t.length;
                if (n > r) return !1;
                if (n === r) return t === e;
                t: for (var i = 0, a = 0; i < n; i++) {
                    for (var s = t.charCodeAt(i); a < r;)
                        if (e.charCodeAt(a++) === s) continue t;
                    return !1
                }
                return !0
            }
        },
        180735: (t, e, r) => {
            "use strict";
            r.d(e, {
                h: () => n
            });
            var n;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(n || (n = {}))
        },
        16455: (t, e, r) => {
            "use strict";
            r.d(e, {
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
        813701: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => n
            });
            var n;
            ! function(t) {
                t.NICKNAME_UPDATE = "nickname_update";
                t.NICKNAME_RESET = "nickname_reset"
            }(n || (n = {}))
        },
        921354: (t, e, r) => {
            "use strict";
            r.d(e, {
                q: () => n
            });
            var n;
            ! function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN";
                t[t.MESSAGE_SEND = 1] = "MESSAGE_SEND";
                t[t.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
            }(n || (n = {}))
        },
        986468: (t, e, r) => {
            "use strict";
            r.d(e, {
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
        901399: (t, e, r) => {
            "use strict";
            r.d(e, {
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
        945481: (t, e, r) => {
            "use strict";
            r.d(e, {
                B: () => n
            });
            var n;
            ! function(t) {
                t.MESSAGE_SEND = "message_send";
                t.GUILD_JOIN = "guild_join";
                t.USERNAME_UPDATE = "username_update"
            }(n || (n = {}))
        },
        824244: (t, e, r) => {
            "use strict";
            r.d(e, {
                z: () => n
            });
            var n;
            ! function(t) {
                t.BLOCK_PROFILE_UPDATE = "block_profile_update";
                t.QUARANTINE_USER = "quarantine_user";
                t.BLOCK_GUEST_JOIN = "block_guest_join"
            }(n || (n = {}))
        },
        216829: (t, e, r) => {
            "use strict";
            r.d(e, {
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
        828153: (t, e, r) => {
            "use strict";
            r.d(e, {
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
        482507: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => n
            });

            function n(t) {
                var e = document.body;
                if (null == e) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var r = document.createRange(),
                    n = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = t;
                i.contentEditable = "true";
                i.style.visibility = "none";
                e.appendChild(i);
                r.selectNodeContents(i);
                null == n || n.removeAllRanges();
                null == n || n.addRange(r);
                i.focus();
                i.setSelectionRange(0, t.length);
                var a = document.execCommand("copy");
                e.removeChild(i);
                return a
            }
        },
        717621: (t, e, r) => {
            var n;
            ! function(i) {
                var a = /^\s+/,
                    s = /\s+$/,
                    o = 0,
                    f = i.round,
                    u = i.min,
                    l = i.max,
                    h = i.random;

                function c(t, e) {
                    e = e || {};
                    if ((t = t || "") instanceof c) return t;
                    if (!(this instanceof c)) return new c(t, e);
                    var r = function(t) {
                        var e = {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            r = 1,
                            n = null,
                            o = null,
                            f = null,
                            h = !1,
                            c = !1;
                        "string" == typeof t && (t = function(t) {
                            t = t.replace(a, "").replace(s, "").toLowerCase();
                            var e, r = !1;
                            if (T[t]) {
                                t = T[t];
                                r = !0
                            } else if ("transparent" == t) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (e = B.rgb.exec(t)) return {
                                r: e[1],
                                g: e[2],
                                b: e[3]
                            };
                            if (e = B.rgba.exec(t)) return {
                                r: e[1],
                                g: e[2],
                                b: e[3],
                                a: e[4]
                            };
                            if (e = B.hsl.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                l: e[3]
                            };
                            if (e = B.hsla.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                l: e[3],
                                a: e[4]
                            };
                            if (e = B.hsv.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                v: e[3]
                            };
                            if (e = B.hsva.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                v: e[3],
                                a: e[4]
                            };
                            if (e = B.hex8.exec(t)) return {
                                r: L(e[1]),
                                g: L(e[2]),
                                b: L(e[3]),
                                a: P(e[4]),
                                format: r ? "name" : "hex8"
                            };
                            if (e = B.hex6.exec(t)) return {
                                r: L(e[1]),
                                g: L(e[2]),
                                b: L(e[3]),
                                format: r ? "name" : "hex"
                            };
                            if (e = B.hex4.exec(t)) return {
                                r: L(e[1] + "" + e[1]),
                                g: L(e[2] + "" + e[2]),
                                b: L(e[3] + "" + e[3]),
                                a: P(e[4] + "" + e[4]),
                                format: r ? "name" : "hex8"
                            };
                            if (e = B.hex3.exec(t)) return {
                                r: L(e[1] + "" + e[1]),
                                g: L(e[2] + "" + e[2]),
                                b: L(e[3] + "" + e[3]),
                                format: r ? "name" : "hex"
                            };
                            return !1
                        }(t));
                        if ("object" == typeof t) {
                            if (q(t.r) && q(t.g) && q(t.b)) {
                                e = (g = t.r, d = t.g, _ = t.b, {
                                    r: 255 * M(g, 255),
                                    g: 255 * M(d, 255),
                                    b: 255 * M(_, 255)
                                });
                                h = !0;
                                c = "%" === String(t.r).substr(-1) ? "prgb" : "rgb"
                            } else if (q(t.h) && q(t.s) && q(t.v)) {
                                n = H(t.s);
                                o = H(t.v);
                                e = function(t, e, r) {
                                    t = 6 * M(t, 360);
                                    e = M(e, 100);
                                    r = M(r, 100);
                                    var n = i.floor(t),
                                        a = t - n,
                                        s = r * (1 - e),
                                        o = r * (1 - a * e),
                                        f = r * (1 - (1 - a) * e),
                                        u = n % 6;
                                    return {
                                        r: 255 * [r, o, s, s, f, r][u],
                                        g: 255 * [f, r, r, o, s, s][u],
                                        b: 255 * [s, s, f, r, r, o][u]
                                    }
                                }(t.h, n, o);
                                h = !0;
                                c = "hsv"
                            } else if (q(t.h) && q(t.s) && q(t.l)) {
                                n = H(t.s);
                                f = H(t.l);
                                e = function(t, e, r) {
                                    var n, i, a;
                                    t = M(t, 360);
                                    e = M(e, 100);
                                    r = M(r, 100);

                                    function s(t, e, r) {
                                        r < 0 && (r += 1);
                                        r > 1 && (r -= 1);
                                        return r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                                    }
                                    if (0 === e) n = i = a = r;
                                    else {
                                        var o = r < .5 ? r * (1 + e) : r + e - r * e,
                                            f = 2 * r - o;
                                        n = s(f, o, t + 1 / 3);
                                        i = s(f, o, t);
                                        a = s(f, o, t - 1 / 3)
                                    }
                                    return {
                                        r: 255 * n,
                                        g: 255 * i,
                                        b: 255 * a
                                    }
                                }(t.h, n, f);
                                h = !0;
                                c = "hsl"
                            }
                            t.hasOwnProperty("a") && (r = t.a)
                        }
                        var g, d, _;
                        r = w(r);
                        return {
                            ok: h,
                            format: t.format || c,
                            r: u(255, l(e.r, 0)),
                            g: u(255, l(e.g, 0)),
                            b: u(255, l(e.b, 0)),
                            a: r
                        }
                    }(t);
                    this._originalInput = t, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = f(100 * this._a) / 100, this._format = e.format || r.format;
                    this._gradientType = e.gradientType;
                    this._r < 1 && (this._r = f(this._r));
                    this._g < 1 && (this._g = f(this._g));
                    this._b < 1 && (this._b = f(this._b));
                    this._ok = r.ok;
                    this._tc_id = o++
                }
                c.prototype = {
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
                        var t, e, r, n = this.toRgb();
                        t = n.r / 255;
                        e = n.g / 255;
                        r = n.b / 255;
                        return .2126 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : i.pow((r + .055) / 1.055, 2.4))
                    },
                    setAlpha: function(t) {
                        this._a = w(t);
                        this._roundA = f(100 * this._a) / 100;
                        return this
                    },
                    toHsv: function() {
                        var t = d(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            v: t.v,
                            a: this._a
                        }
                    },
                    toHsvString: function() {
                        var t = d(this._r, this._g, this._b),
                            e = f(360 * t.h),
                            r = f(100 * t.s),
                            n = f(100 * t.v);
                        return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)" : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")"
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
                            e = f(360 * t.h),
                            r = f(100 * t.s),
                            n = f(100 * t.l);
                        return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)" : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHex: function(t) {
                        return _(this._r, this._g, this._b, t)
                    },
                    toHexString: function(t) {
                        return "#" + this.toHex(t)
                    },
                    toHex8: function(t) {
                        return function(t, e, r, n, i) {
                            var a = [D(f(t).toString(16)), D(f(e).toString(16)), D(f(r).toString(16)), D(F(n))];
                            if (i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)) return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0);
                            return a.join("")
                        }(this._r, this._g, this._b, this._a, t)
                    },
                    toHex8String: function(t) {
                        return "#" + this.toHex8(t)
                    },
                    toRgb: function() {
                        return {
                            r: f(this._r),
                            g: f(this._g),
                            b: f(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + f(this._r) + ", " + f(this._g) + ", " + f(this._b) + ")" : "rgba(" + f(this._r) + ", " + f(this._g) + ", " + f(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: f(100 * M(this._r, 255)) + "%",
                            g: f(100 * M(this._g, 255)) + "%",
                            b: f(100 * M(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + f(100 * M(this._r, 255)) + "%, " + f(100 * M(this._g, 255)) + "%, " + f(100 * M(this._b, 255)) + "%)" : "rgba(" + f(100 * M(this._r, 255)) + "%, " + f(100 * M(this._g, 255)) + "%, " + f(100 * M(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (C[_(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(t) {
                        var e = "#" + b(this._r, this._g, this._b, this._a),
                            r = e,
                            n = this._gradientType ? "GradientType = 1, " : "";
                        if (t) {
                            var i = c(t);
                            r = "#" + b(i._r, i._g, i._b, i._a)
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + r + ")"
                    },
                    toString: function(t) {
                        var e = !!t;
                        t = t || this._format;
                        var r = !1,
                            n = this._a < 1 && this._a >= 0;
                        if (!e && n && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t)) return "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
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
                        return c(this.toString())
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
                        return this._applyModification(v, arguments)
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
                        return this._applyModification(m, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(A, arguments)
                    },
                    spin: function() {
                        return this._applyModification(y, arguments)
                    },
                    _applyCombination: function(t, e) {
                        return t.apply(null, [this].concat([].slice.call(e)))
                    },
                    analogous: function() {
                        return this._applyCombination(I, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(R, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(O, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(k, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(N, arguments)
                    },
                    tetrad: function() {
                        return this._applyCombination(x, arguments)
                    }
                };
                c.fromRatio = function(t, e) {
                    if ("object" == typeof t) {
                        var r = {};
                        for (var n in t) t.hasOwnProperty(n) && (r[n] = "a" === n ? t[n] : H(t[n]));
                        t = r
                    }
                    return c(t, e)
                };

                function g(t, e, r) {
                    t = M(t, 255);
                    e = M(e, 255);
                    r = M(r, 255);
                    var n, i, a = l(t, e, r),
                        s = u(t, e, r),
                        o = (a + s) / 2;
                    if (a == s) n = i = 0;
                    else {
                        var f = a - s;
                        i = o > .5 ? f / (2 - a - s) : f / (a + s);
                        switch (a) {
                            case t:
                                n = (e - r) / f + (e < r ? 6 : 0);
                                break;
                            case e:
                                n = (r - t) / f + 2;
                                break;
                            case r:
                                n = (t - e) / f + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: i,
                        l: o
                    }
                }

                function d(t, e, r) {
                    t = M(t, 255);
                    e = M(e, 255);
                    r = M(r, 255);
                    var n, i, a = l(t, e, r),
                        s = u(t, e, r),
                        o = a,
                        f = a - s;
                    i = 0 === a ? 0 : f / a;
                    if (a == s) n = 0;
                    else {
                        switch (a) {
                            case t:
                                n = (e - r) / f + (e < r ? 6 : 0);
                                break;
                            case e:
                                n = (r - t) / f + 2;
                                break;
                            case r:
                                n = (t - e) / f + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: i,
                        v: o
                    }
                }

                function _(t, e, r, n) {
                    var i = [D(f(t).toString(16)), D(f(e).toString(16)), D(f(r).toString(16))];
                    return n && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
                }

                function b(t, e, r, n) {
                    return [D(F(n)), D(f(t).toString(16)), D(f(e).toString(16)), D(f(r).toString(16))].join("")
                }
                c.equals = function(t, e) {
                    return !(!t || !e) && c(t).toRgbString() == c(e).toRgbString()
                };
                c.random = function() {
                    return c.fromRatio({
                        r: h(),
                        g: h(),
                        b: h()
                    })
                };

                function p(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = c(t).toHsl();
                    r.s -= e / 100;
                    r.s = U(r.s);
                    return c(r)
                }

                function m(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = c(t).toHsl();
                    r.s += e / 100;
                    r.s = U(r.s);
                    return c(r)
                }

                function A(t) {
                    return c(t).desaturate(100)
                }

                function v(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = c(t).toHsl();
                    r.l += e / 100;
                    r.l = U(r.l);
                    return c(r)
                }

                function E(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = c(t).toRgb();
                    r.r = l(0, u(255, r.r - f(-e / 100 * 255)));
                    r.g = l(0, u(255, r.g - f(-e / 100 * 255)));
                    r.b = l(0, u(255, r.b - f(-e / 100 * 255)));
                    return c(r)
                }

                function S(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = c(t).toHsl();
                    r.l -= e / 100;
                    r.l = U(r.l);
                    return c(r)
                }

                function y(t, e) {
                    var r = c(t).toHsl(),
                        n = (r.h + e) % 360;
                    r.h = n < 0 ? 360 + n : n;
                    return c(r)
                }

                function R(t) {
                    var e = c(t).toHsl();
                    e.h = (e.h + 180) % 360;
                    return c(e)
                }

                function N(t) {
                    var e = c(t).toHsl(),
                        r = e.h;
                    return [c(t), c({
                        h: (r + 120) % 360,
                        s: e.s,
                        l: e.l
                    }), c({
                        h: (r + 240) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function x(t) {
                    var e = c(t).toHsl(),
                        r = e.h;
                    return [c(t), c({
                        h: (r + 90) % 360,
                        s: e.s,
                        l: e.l
                    }), c({
                        h: (r + 180) % 360,
                        s: e.s,
                        l: e.l
                    }), c({
                        h: (r + 270) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function k(t) {
                    var e = c(t).toHsl(),
                        r = e.h;
                    return [c(t), c({
                        h: (r + 72) % 360,
                        s: e.s,
                        l: e.l
                    }), c({
                        h: (r + 216) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function I(t, e, r) {
                    e = e || 6;
                    r = r || 30;
                    var n = c(t).toHsl(),
                        i = 360 / r,
                        a = [c(t)];
                    for (n.h = (n.h - (i * e >> 1) + 720) % 360; --e;) {
                        n.h = (n.h + i) % 360;
                        a.push(c(n))
                    }
                    return a
                }

                function O(t, e) {
                    e = e || 6;
                    for (var r = c(t).toHsv(), n = r.h, i = r.s, a = r.v, s = [], o = 1 / e; e--;) {
                        s.push(c({
                            h: n,
                            s: i,
                            v: a
                        }));
                        a = (a + o) % 1
                    }
                    return s
                }
                c.mix = function(t, e, r) {
                    r = 0 === r ? 0 : r || 50;
                    var n = c(t).toRgb(),
                        i = c(e).toRgb(),
                        a = r / 100;
                    return c({
                        r: (i.r - n.r) * a + n.r,
                        g: (i.g - n.g) * a + n.g,
                        b: (i.b - n.b) * a + n.b,
                        a: (i.a - n.a) * a + n.a
                    })
                };
                c.readability = function(t, e) {
                    var r = c(t),
                        n = c(e);
                    return (i.max(r.getLuminance(), n.getLuminance()) + .05) / (i.min(r.getLuminance(), n.getLuminance()) + .05)
                };
                c.isReadable = function(t, e, r) {
                    var n, i, a = c.readability(t, e);
                    i = !1;
                    switch ((n = function(t) {
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
                        }(r)).level + n.size) {
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
                c.mostReadable = function(t, e, r) {
                    var n, i, a, s, o = null,
                        f = 0;
                    i = (r = r || {}).includeFallbackColors;
                    a = r.level;
                    s = r.size;
                    for (var u = 0; u < e.length; u++)
                        if ((n = c.readability(t, e[u])) > f) {
                            f = n;
                            o = c(e[u])
                        } if (c.isReadable(t, o, {
                            level: a,
                            size: s
                        }) || !i) return o;
                    r.includeFallbackColors = !1;
                    return c.mostReadable(t, ["#fff", "#000"], r)
                };
                var T = c.names = {
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
                    C = c.hexNames = function(t) {
                        var e = {};
                        for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
                        return e
                    }(T);

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
                    t = u(e, l(0, parseFloat(t)));
                    r && (t = parseInt(t * e, 10) / 100);
                    return i.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
                }

                function U(t) {
                    return u(1, l(0, t))
                }

                function L(t) {
                    return parseInt(t, 16)
                }

                function D(t) {
                    return 1 == t.length ? "0" + t : "" + t
                }

                function H(t) {
                    t <= 1 && (t = 100 * t + "%");
                    return t
                }

                function F(t) {
                    return i.round(255 * parseFloat(t)).toString(16)
                }

                function P(t) {
                    return L(t) / 255
                }
                var z, G, K, B = (G = "[\\s|\\(]+(" + (z = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")\\s*\\)?", K = "[\\s|\\(]+(" + z + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(z),
                    rgb: new RegExp("rgb" + G),
                    rgba: new RegExp("rgba" + K),
                    hsl: new RegExp("hsl" + G),
                    hsla: new RegExp("hsla" + K),
                    hsv: new RegExp("hsv" + G),
                    hsva: new RegExp("hsva" + K),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function q(t) {
                    return !!B.CSS_UNIT.exec(t)
                }
                if (t.exports) t.exports = c;
                else {
                    void 0 !== (n = function() {
                        return c
                    }.call(e, r, e, t)) && (t.exports = n)
                }
            }(Math)
        }
    }
]);