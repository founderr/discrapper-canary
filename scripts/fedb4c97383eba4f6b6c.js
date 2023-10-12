(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9202, 17586, 99256, 30527], {
        737264: r => {
            "use strict";
            r.exports.Q = function(r) {
                var t, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(r);
                if (!e) return null;
                e.shift();
                var a = null,
                    n = [];
                if (e[2]) {
                    a = (t = e[2].split("-")).shift();
                    n = t
                }
                var o = [];
                e[5] && (o = e[5].split("-")).shift();
                var _ = [];
                if (e[6]) {
                    (t = e[6].split("-")).shift();
                    for (var i, E = []; t.length;) {
                        var R = t.shift();
                        if (1 === R.length)
                            if (i) {
                                _.push({
                                    singleton: i,
                                    extension: E
                                });
                                i = R;
                                E = []
                            } else i = R;
                        else E.push(R)
                    }
                    _.push({
                        singleton: i,
                        extension: E
                    })
                }
                var T = [];
                if (e[7]) {
                    (T = e[7].split("-")).shift();
                    T.shift()
                }
                var O = [];
                e[8] && (O = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: a,
                            extlang: n
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: o,
                        extension: _,
                        privateuse: T
                    },
                    privateuse: O,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        667237: r => {
            "use strict";

            function t(r) {
                this._capacity = n(r);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (e(r)) {
                    for (var t = r.length, a = 0; a < t; ++a) this[a] = r[a];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var r = this._length, t = new Array(r), e = this._front, a = this._capacity, n = 0; n < r; ++n) t[n] = this[e + n & a - 1];
                return t
            };
            t.prototype.push = function(r) {
                var t = arguments.length,
                    e = this._length;
                if (t > 1) {
                    var a = this._capacity;
                    if (e + t > a) {
                        for (var n = 0; n < t; ++n) {
                            this._checkCapacity(e + 1);
                            this[o = this._front + e & this._capacity - 1] = arguments[n];
                            e++;
                            this._length = e
                        }
                        return e
                    }
                    for (var o = this._front, n = 0; n < t; ++n) {
                        this[o + e & a - 1] = arguments[n];
                        o++
                    }
                    this._length = e + t;
                    return e + t
                }
                if (0 === t) return e;
                this._checkCapacity(e + 1);
                this[n = this._front + e & this._capacity - 1] = r;
                this._length = e + 1;
                return e + 1
            };
            t.prototype.pop = function() {
                var r = this._length;
                if (0 !== r) {
                    var t = this._front + r - 1 & this._capacity - 1,
                        e = this[t];
                    this[t] = void 0;
                    this._length = r - 1;
                    return e
                }
            };
            t.prototype.shift = function() {
                var r = this._length;
                if (0 !== r) {
                    var t = this._front,
                        e = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = r - 1;
                    return e
                }
            };
            t.prototype.unshift = function(r) {
                var t = this._length,
                    e = arguments.length;
                if (e > 1) {
                    if (t + e > (n = this._capacity)) {
                        for (var a = e - 1; a >= 0; a--) {
                            this._checkCapacity(t + 1);
                            var n = this._capacity;
                            this[_ = (this._front - 1 & n - 1 ^ n) - n] = arguments[a];
                            t++;
                            this._length = t;
                            this._front = _
                        }
                        return t
                    }
                    var o = this._front;
                    for (a = e - 1; a >= 0; a--) {
                        var _;
                        this[_ = (o - 1 & n - 1 ^ n) - n] = arguments[a];
                        o = _
                    }
                    this._front = o;
                    this._length = t + e;
                    return t + e
                }
                if (0 === e) return t;
                this._checkCapacity(t + 1);
                n = this._capacity;
                this[a = (this._front - 1 & n - 1 ^ n) - n] = r;
                this._length = t + 1;
                this._front = a;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var r = this._length;
                if (0 !== r) {
                    return this[this._front + r - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(r) {
                var t = r;
                if (t === (0 | t)) {
                    var e = this._length;
                    t < 0 && (t += e);
                    if (!(t < 0 || t >= e)) return this[this._front + t & this._capacity - 1]
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
                for (var r = this._capacity, t = 0; t < r; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(r) {
                this._capacity < r && this._resizeTo(n(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(r) {
                var t = this._front,
                    e = this._capacity,
                    n = new Array(e),
                    o = this._length;
                a(this, 0, n, 0, e);
                this._capacity = r;
                this._makeCapacity();
                this._front = 0;
                if (t + o <= e) a(n, t, this, 0, o);
                else {
                    var _ = o - (t + o & e - 1);
                    a(n, t, this, 0, _);
                    a(n, 0, this, _, o - _)
                }
            };
            var e = Array.isArray;

            function a(r, t, e, a, n) {
                for (var o = 0; o < n; ++o) e[o + a] = r[o + t]
            }

            function n(r) {
                if ("number" != typeof r) {
                    if (!e(r)) return 16;
                    r = r.length
                }
                return function(r) {
                    r >>>= 0;
                    r -= 1;
                    r |= r >> 1;
                    r |= r >> 2;
                    r |= r >> 4;
                    r |= r >> 8;
                    return 1 + (r |= r >> 16)
                }(Math.min(Math.max(16, r), 1073741824))
            }
            r.exports = t
        },
        14636: (r, t, e) => {
            var a = e(422545),
                n = e(135694),
                o = e(701469),
                _ = e(578264),
                i = e(565776),
                E = e(936719),
                R = Object.prototype.hasOwnProperty;
            r.exports = function(r, t) {
                var e = o(r),
                    T = !e && n(r),
                    O = !e && !T && _(r),
                    u = !e && !T && !O && E(r),
                    N = e || T || O || u,
                    A = N ? a(r.length, String) : [],
                    c = A.length;
                for (var v in r) !t && !R.call(r, v) || N && ("length" == v || O && ("offset" == v || "parent" == v) || u && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || i(v, c)) || A.push(v);
                return A
            }
        },
        70151: (r, t, e) => {
            var a = e(200278),
                n = e(173480);
            r.exports = function(r) {
                return n(a(r))
            }
        },
        238749: (r, t, e) => {
            var a = e(644239),
                n = e(541780),
                o = e(637005),
                _ = {};
            _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0;
            _["[object Arguments]"] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object Boolean]"] = _["[object DataView]"] = _["[object Date]"] = _["[object Error]"] = _["[object Function]"] = _["[object Map]"] = _["[object Number]"] = _["[object Object]"] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object WeakMap]"] = !1;
            r.exports = function(r) {
                return o(r) && n(r.length) && !!_[a(r)]
            }
        },
        400280: (r, t, e) => {
            var a = e(225726),
                n = e(86916),
                o = Object.prototype.hasOwnProperty;
            r.exports = function(r) {
                if (!a(r)) return n(r);
                var t = [];
                for (var e in Object(r)) o.call(r, e) && "constructor" != e && t.push(e);
                return t
            }
        },
        525127: (r, t, e) => {
            var a = e(173480),
                n = e(252628);
            r.exports = function(r) {
                return a(n(r))
            }
        },
        422545: r => {
            r.exports = function(r, t) {
                for (var e = -1, a = Array(r); ++e < r;) a[e] = t(e);
                return a
            }
        },
        307518: r => {
            r.exports = function(r) {
                return function(t) {
                    return r(t)
                }
            }
        },
        747415: (r, t, e) => {
            var a = e(829932);
            r.exports = function(r, t) {
                return a(t, (function(t) {
                    return r[t]
                }))
            }
        },
        200278: r => {
            r.exports = function(r, t) {
                var e = -1,
                    a = r.length;
                t || (t = Array(a));
                for (; ++e < a;) t[e] = r[e];
                return t
            }
        },
        225726: r => {
            var t = Object.prototype;
            r.exports = function(r) {
                var e = r && r.constructor;
                return r === ("function" == typeof e && e.prototype || t)
            }
        },
        86916: (r, t, e) => {
            var a = e(205569)(Object.keys, Object);
            r.exports = a
        },
        531167: (r, t, e) => {
            r = e.nmd(r);
            var a = e(431957),
                n = t && !t.nodeType && t,
                o = n && r && !r.nodeType && r,
                _ = o && o.exports === n && a.process,
                i = function() {
                    try {
                        var r = o && o.require && o.require("util").types;
                        return r || _ && _.binding && _.binding("util")
                    } catch (r) {}
                }();
            r.exports = i
        },
        205569: r => {
            r.exports = function(r, t) {
                return function(e) {
                    return r(t(e))
                }
            }
        },
        173480: (r, t, e) => {
            var a = e(769877);
            r.exports = function(r, t) {
                var e = -1,
                    n = r.length,
                    o = n - 1;
                t = void 0 === t ? n : t;
                for (; ++e < t;) {
                    var _ = a(e, o),
                        i = r[_];
                    r[_] = r[e];
                    r[e] = i
                }
                r.length = t;
                return r
            }
        },
        578264: (r, t, e) => {
            r = e.nmd(r);
            var a = e(555639),
                n = e(595062),
                o = t && !t.nodeType && t,
                _ = o && r && !r.nodeType && r,
                i = _ && _.exports === o ? a.Buffer : void 0,
                E = (i ? i.isBuffer : void 0) || n;
            r.exports = E
        },
        936719: (r, t, e) => {
            var a = e(238749),
                n = e(307518),
                o = e(531167),
                _ = o && o.isTypedArray,
                i = _ ? n(_) : a;
            r.exports = i
        },
        3674: (r, t, e) => {
            var a = e(14636),
                n = e(400280),
                o = e(498612);
            r.exports = function(r) {
                return o(r) ? a(r) : n(r)
            }
        },
        369983: (r, t, e) => {
            var a = e(70151),
                n = e(525127),
                o = e(701469);
            r.exports = function(r) {
                return (o(r) ? a : n)(r)
            }
        },
        595062: r => {
            r.exports = function() {
                return !1
            }
        },
        823493: (r, t, e) => {
            var a = e(23279),
                n = e(513218);
            r.exports = function(r, t, e) {
                var o = !0,
                    _ = !0;
                if ("function" != typeof r) throw new TypeError("Expected a function");
                if (n(e)) {
                    o = "leading" in e ? !!e.leading : o;
                    _ = "trailing" in e ? !!e.trailing : _
                }
                return a(r, t, {
                    leading: o,
                    maxWait: t,
                    trailing: _
                })
            }
        },
        252628: (r, t, e) => {
            var a = e(747415),
                n = e(3674);
            r.exports = function(r) {
                return null == r ? [] : a(r, n(r))
            }
        },
        517586: (r, t, e) => {
            "use strict";
            e.d(t, {
                Z: () => n
            });
            var a;
            ! function(r) {
                r.ACTIVITY_CARD_BACKGROUND = "var(--activity-card-background)";
                r.ANDROID_NAVIGATION_BAR_BACKGROUND = "var(--android-navigation-bar-background)";
                r.ANDROID_NAVIGATION_SCRIM_BACKGROUND = "var(--android-navigation-scrim-background)";
                r.ANDROID_RIPPLE = "var(--android-ripple)";
                r.BACKGROUND_ACCENT = "var(--background-accent)";
                r.BACKGROUND_FLOATING = "var(--background-floating)";
                r.BACKGROUND_MENTIONED = "var(--background-mentioned)";
                r.BACKGROUND_MENTIONED_HOVER = "var(--background-mentioned-hover)";
                r.BACKGROUND_MESSAGE_AUTOMOD = "var(--background-message-automod)";
                r.BACKGROUND_MESSAGE_AUTOMOD_HOVER = "var(--background-message-automod-hover)";
                r.BACKGROUND_MESSAGE_HIGHLIGHT = "var(--background-message-highlight)";
                r.BACKGROUND_MESSAGE_HIGHLIGHT_HOVER = "var(--background-message-highlight-hover)";
                r.BACKGROUND_MESSAGE_HOVER = "var(--background-message-hover)";
                r.BACKGROUND_MOBILE_PRIMARY = "var(--background-mobile-primary)";
                r.BACKGROUND_MOBILE_SECONDARY = "var(--background-mobile-secondary)";
                r.BACKGROUND_MODIFIER_ACCENT = "var(--background-modifier-accent)";
                r.BACKGROUND_MODIFIER_ACCENT_2 = "var(--background-modifier-accent-2)";
                r.BACKGROUND_MODIFIER_ACTIVE = "var(--background-modifier-active)";
                r.BACKGROUND_MODIFIER_HOVER = "var(--background-modifier-hover)";
                r.BACKGROUND_MODIFIER_SELECTED = "var(--background-modifier-selected)";
                r.BACKGROUND_NESTED_FLOATING = "var(--background-nested-floating)";
                r.BACKGROUND_PRIMARY = "var(--background-primary)";
                r.BACKGROUND_SECONDARY = "var(--background-secondary)";
                r.BACKGROUND_SECONDARY_ALT = "var(--background-secondary-alt)";
                r.BACKGROUND_TERTIARY = "var(--background-tertiary)";
                r.BG_BACKDROP = "var(--bg-backdrop)";
                r.BG_BACKDROP_NO_OPACITY = "var(--bg-backdrop-no-opacity)";
                r.BG_BASE_PRIMARY = "var(--bg-base-primary)";
                r.BG_BASE_SECONDARY = "var(--bg-base-secondary)";
                r.BG_BASE_TERTIARY = "var(--bg-base-tertiary)";
                r.BG_MOD_FAINT = "var(--bg-mod-faint)";
                r.BG_MOD_STRONG = "var(--bg-mod-strong)";
                r.BG_MOD_SUBTLE = "var(--bg-mod-subtle)";
                r.BG_SURFACE_OVERLAY = "var(--bg-surface-overlay)";
                r.BG_SURFACE_OVERLAY_TMP = "var(--bg-surface-overlay-tmp)";
                r.BG_SURFACE_RAISED = "var(--bg-surface-raised)";
                r.BLACK = "var(--black)";
                r.BLUR_FALLBACK = "var(--blur-fallback)";
                r.BLUR_FALLBACK_PRESSED = "var(--blur-fallback-pressed)";
                r.BORDER_FAINT = "var(--border-faint)";
                r.BORDER_STRONG = "var(--border-strong)";
                r.BORDER_SUBTLE = "var(--border-subtle)";
                r.BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND = "var(--bug-reporter-modal-submitting-background)";
                r.BUTTON_CREATOR_REVENUE_BACKGROUND = "var(--button-creator-revenue-background)";
                r.BUTTON_DANGER_BACKGROUND = "var(--button-danger-background)";
                r.BUTTON_DANGER_BACKGROUND_ACTIVE = "var(--button-danger-background-active)";
                r.BUTTON_DANGER_BACKGROUND_DISABLED = "var(--button-danger-background-disabled)";
                r.BUTTON_DANGER_BACKGROUND_HOVER = "var(--button-danger-background-hover)";
                r.BUTTON_OUTLINE_BRAND_BACKGROUND = "var(--button-outline-brand-background)";
                r.BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE = "var(--button-outline-brand-background-active)";
                r.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER = "var(--button-outline-brand-background-hover)";
                r.BUTTON_OUTLINE_BRAND_BORDER = "var(--button-outline-brand-border)";
                r.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE = "var(--button-outline-brand-border-active)";
                r.BUTTON_OUTLINE_BRAND_BORDER_HOVER = "var(--button-outline-brand-border-hover)";
                r.BUTTON_OUTLINE_BRAND_TEXT = "var(--button-outline-brand-text)";
                r.BUTTON_OUTLINE_BRAND_TEXT_ACTIVE = "var(--button-outline-brand-text-active)";
                r.BUTTON_OUTLINE_BRAND_TEXT_HOVER = "var(--button-outline-brand-text-hover)";
                r.BUTTON_OUTLINE_DANGER_BACKGROUND = "var(--button-outline-danger-background)";
                r.BUTTON_OUTLINE_DANGER_BACKGROUND_ACTIVE = "var(--button-outline-danger-background-active)";
                r.BUTTON_OUTLINE_DANGER_BACKGROUND_HOVER = "var(--button-outline-danger-background-hover)";
                r.BUTTON_OUTLINE_DANGER_BORDER = "var(--button-outline-danger-border)";
                r.BUTTON_OUTLINE_DANGER_BORDER_ACTIVE = "var(--button-outline-danger-border-active)";
                r.BUTTON_OUTLINE_DANGER_BORDER_HOVER = "var(--button-outline-danger-border-hover)";
                r.BUTTON_OUTLINE_DANGER_TEXT = "var(--button-outline-danger-text)";
                r.BUTTON_OUTLINE_DANGER_TEXT_ACTIVE = "var(--button-outline-danger-text-active)";
                r.BUTTON_OUTLINE_DANGER_TEXT_HOVER = "var(--button-outline-danger-text-hover)";
                r.BUTTON_OUTLINE_POSITIVE_BACKGROUND = "var(--button-outline-positive-background)";
                r.BUTTON_OUTLINE_POSITIVE_BACKGROUND_ACTIVE = "var(--button-outline-positive-background-active)";
                r.BUTTON_OUTLINE_POSITIVE_BACKGROUND_HOVER = "var(--button-outline-positive-background-hover)";
                r.BUTTON_OUTLINE_POSITIVE_BORDER = "var(--button-outline-positive-border)";
                r.BUTTON_OUTLINE_POSITIVE_BORDER_ACTIVE = "var(--button-outline-positive-border-active)";
                r.BUTTON_OUTLINE_POSITIVE_BORDER_HOVER = "var(--button-outline-positive-border-hover)";
                r.BUTTON_OUTLINE_POSITIVE_TEXT = "var(--button-outline-positive-text)";
                r.BUTTON_OUTLINE_POSITIVE_TEXT_ACTIVE = "var(--button-outline-positive-text-active)";
                r.BUTTON_OUTLINE_POSITIVE_TEXT_HOVER = "var(--button-outline-positive-text-hover)";
                r.BUTTON_OUTLINE_PRIMARY_BACKGROUND = "var(--button-outline-primary-background)";
                r.BUTTON_OUTLINE_PRIMARY_BACKGROUND_ACTIVE = "var(--button-outline-primary-background-active)";
                r.BUTTON_OUTLINE_PRIMARY_BACKGROUND_HOVER = "var(--button-outline-primary-background-hover)";
                r.BUTTON_OUTLINE_PRIMARY_BORDER = "var(--button-outline-primary-border)";
                r.BUTTON_OUTLINE_PRIMARY_BORDER_ACTIVE = "var(--button-outline-primary-border-active)";
                r.BUTTON_OUTLINE_PRIMARY_BORDER_HOVER = "var(--button-outline-primary-border-hover)";
                r.BUTTON_OUTLINE_PRIMARY_TEXT = "var(--button-outline-primary-text)";
                r.BUTTON_OUTLINE_PRIMARY_TEXT_ACTIVE = "var(--button-outline-primary-text-active)";
                r.BUTTON_OUTLINE_PRIMARY_TEXT_HOVER = "var(--button-outline-primary-text-hover)";
                r.BUTTON_POSITIVE_BACKGROUND = "var(--button-positive-background)";
                r.BUTTON_POSITIVE_BACKGROUND_ACTIVE = "var(--button-positive-background-active)";
                r.BUTTON_POSITIVE_BACKGROUND_DISABLED = "var(--button-positive-background-disabled)";
                r.BUTTON_POSITIVE_BACKGROUND_HOVER = "var(--button-positive-background-hover)";
                r.BUTTON_SECONDARY_BACKGROUND = "var(--button-secondary-background)";
                r.BUTTON_SECONDARY_BACKGROUND_ACTIVE = "var(--button-secondary-background-active)";
                r.BUTTON_SECONDARY_BACKGROUND_DISABLED = "var(--button-secondary-background-disabled)";
                r.BUTTON_SECONDARY_BACKGROUND_HOVER = "var(--button-secondary-background-hover)";
                r.CARD_GRADIENT_BG = "var(--card-gradient-bg)";
                r.CARD_GRADIENT_PRESSED_BG = "var(--card-gradient-pressed-bg)";
                r.CARD_PRIMARY_BG = "var(--card-primary-bg)";
                r.CARD_PRIMARY_PRESSED_BG = "var(--card-primary-pressed-bg)";
                r.CARD_SECONDARY_BG = "var(--card-secondary-bg)";
                r.CARD_SECONDARY_PRESSED_BG = "var(--card-secondary-pressed-bg)";
                r.CHANNEL_ICON = "var(--channel-icon)";
                r.CHANNEL_TEXT_AREA_PLACEHOLDER = "var(--channel-text-area-placeholder)";
                r.CHANNELS_DEFAULT = "var(--channels-default)";
                r.CHANNELTEXTAREA_BACKGROUND = "var(--channeltextarea-background)";
                r.CHAT_BACKGROUND = "var(--chat-background)";
                r.CHAT_BORDER = "var(--chat-border)";
                r.CHAT_INPUT_CONTAINER_BACKGROUND = "var(--chat-input-container-background)";
                r.CHAT_SWIPE_TO_REPLY_BACKGROUND = "var(--chat-swipe-to-reply-background)";
                r.CONTROL_BRAND_FOREGROUND = "var(--control-brand-foreground)";
                r.CONTROL_BRAND_FOREGROUND_NEW = "var(--control-brand-foreground-new)";
                r.CREATOR_REVENUE_ICON_GRADIENT_END = "var(--creator-revenue-icon-gradient-end)";
                r.CREATOR_REVENUE_ICON_GRADIENT_START = "var(--creator-revenue-icon-gradient-start)";
                r.CREATOR_REVENUE_INFO_BOX_BACKGROUND = "var(--creator-revenue-info-box-background)";
                r.CREATOR_REVENUE_INFO_BOX_BORDER = "var(--creator-revenue-info-box-border)";
                r.CREATOR_REVENUE_LOCKED_CHANNEL_ICON = "var(--creator-revenue-locked-channel-icon)";
                r.CREATOR_REVENUE_PROGRESS_BAR = "var(--creator-revenue-progress-bar)";
                r.DEPRECATED_CARD_BG = "var(--deprecated-card-bg)";
                r.DEPRECATED_CARD_EDITABLE_BG = "var(--deprecated-card-editable-bg)";
                r.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND = "var(--deprecated-quickswitcher-input-background)";
                r.DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER = "var(--deprecated-quickswitcher-input-placeholder)";
                r.DEPRECATED_STORE_BG = "var(--deprecated-store-bg)";
                r.DEPRECATED_TEXT_INPUT_BG = "var(--deprecated-text-input-bg)";
                r.DEPRECATED_TEXT_INPUT_BORDER = "var(--deprecated-text-input-border)";
                r.DEPRECATED_TEXT_INPUT_BORDER_DISABLED = "var(--deprecated-text-input-border-disabled)";
                r.DEPRECATED_TEXT_INPUT_BORDER_HOVER = "var(--deprecated-text-input-border-hover)";
                r.DEPRECATED_TEXT_INPUT_PREFIX = "var(--deprecated-text-input-prefix)";
                r.DISPLAY_BANNER_OVERFLOW_BACKGROUND = "var(--display-banner-overflow-background)";
                r.DIVIDER_STRONG = "var(--divider-strong)";
                r.DIVIDER_SUBTLE = "var(--divider-subtle)";
                r.FOCUS_PRIMARY = "var(--focus-primary)";
                r.FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND = "var(--forum-post-extra-media-count-container-background)";
                r.FORUM_POST_TAG_BACKGROUND = "var(--forum-post-tag-background)";
                r.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND = "var(--guild-notifications-bottom-sheet-pill-background)";
                r.HEADER_MUTED = "var(--header-muted)";
                r.HEADER_PRIMARY = "var(--header-primary)";
                r.HEADER_SECONDARY = "var(--header-secondary)";
                r.HOME_BACKGROUND = "var(--home-background)";
                r.HOME_CARD_RESTING_BORDER = "var(--home-card-resting-border)";
                r.ICON_MUTED = "var(--icon-muted)";
                r.ICON_PRIMARY = "var(--icon-primary)";
                r.ICON_SECONDARY = "var(--icon-secondary)";
                r.INFO_BOX_BACKGROUND = "var(--info-box-background)";
                r.INFO_DANGER_BACKGROUND = "var(--info-danger-background)";
                r.INFO_DANGER_FOREGROUND = "var(--info-danger-foreground)";
                r.INFO_DANGER_TEXT = "var(--info-danger-text)";
                r.INFO_HELP_BACKGROUND = "var(--info-help-background)";
                r.INFO_HELP_FOREGROUND = "var(--info-help-foreground)";
                r.INFO_HELP_TEXT = "var(--info-help-text)";
                r.INFO_POSITIVE_BACKGROUND = "var(--info-positive-background)";
                r.INFO_POSITIVE_FOREGROUND = "var(--info-positive-foreground)";
                r.INFO_POSITIVE_TEXT = "var(--info-positive-text)";
                r.INFO_WARNING_BACKGROUND = "var(--info-warning-background)";
                r.INFO_WARNING_FOREGROUND = "var(--info-warning-foreground)";
                r.INFO_WARNING_TEXT = "var(--info-warning-text)";
                r.INPUT_BACKGROUND = "var(--input-background)";
                r.INPUT_PLACEHOLDER_TEXT = "var(--input-placeholder-text)";
                r.INTERACTIVE_ACTIVE = "var(--interactive-active)";
                r.INTERACTIVE_HOVER = "var(--interactive-hover)";
                r.INTERACTIVE_MUTED = "var(--interactive-muted)";
                r.INTERACTIVE_NORMAL = "var(--interactive-normal)";
                r.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT = "var(--legacy-android-blur-overlay-default)";
                r.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN = "var(--legacy-android-blur-overlay-ultra-thin)";
                r.LEGACY_BLUR_FALLBACK_DEFAULT = "var(--legacy-blur-fallback-default)";
                r.LEGACY_BLUR_FALLBACK_ULTRA_THIN = "var(--legacy-blur-fallback-ultra-thin)";
                r.LIVE_STAGE_TILE_BORDER = "var(--live-stage-tile-border)";
                r.LOGO_PRIMARY = "var(--logo-primary)";
                r.MENTION_BACKGROUND = "var(--mention-background)";
                r.MENTION_FOREGROUND = "var(--mention-foreground)";
                r.MODAL_BACKGROUND = "var(--modal-background)";
                r.MODAL_FOOTER_BACKGROUND = "var(--modal-footer-background)";
                r.NAVIGATOR_HEADER_TINT = "var(--navigator-header-tint)";
                r.PROFILE_GRADIENT_CARD_BACKGROUND = "var(--profile-gradient-card-background)";
                r.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER = "var(--profile-gradient-message-input-border)";
                r.PROFILE_GRADIENT_NOTE_BACKGROUND = "var(--profile-gradient-note-background)";
                r.PROFILE_GRADIENT_OVERLAY = "var(--profile-gradient-overlay)";
                r.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME = "var(--profile-gradient-overlay-synced-with-user-theme)";
                r.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER = "var(--profile-gradient-profile-body-background-hover)";
                r.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND = "var(--profile-gradient-role-pill-background)";
                r.PROFILE_GRADIENT_ROLE_PILL_BORDER = "var(--profile-gradient-role-pill-border)";
                r.PROFILE_GRADIENT_SECTION_BOX = "var(--profile-gradient-section-box)";
                r.REDESIGN_ACTIVITY_CARD_BACKGROUND = "var(--redesign-activity-card-background)";
                r.REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED = "var(--redesign-activity-card-background-pressed)";
                r.REDESIGN_ACTIVITY_CARD_BADGE_ICON = "var(--redesign-activity-card-badge-icon)";
                r.REDESIGN_ACTIVITY_CARD_BORDER = "var(--redesign-activity-card-border)";
                r.REDESIGN_ACTIVITY_CARD_OVERFLOW_BACKGROUND = "var(--redesign-activity-card-overflow-background)";
                r.REDESIGN_BUTTON_DANGER_BACKGROUND = "var(--redesign-button-danger-background)";
                r.REDESIGN_BUTTON_DANGER_PRESSED_BACKGROUND = "var(--redesign-button-danger-pressed-background)";
                r.REDESIGN_BUTTON_DANGER_TEXT = "var(--redesign-button-danger-text)";
                r.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND = "var(--redesign-button-overlay-alpha-background)";
                r.REDESIGN_BUTTON_OVERLAY_ALPHA_PRESSED_BACKGROUND = "var(--redesign-button-overlay-alpha-pressed-background)";
                r.REDESIGN_BUTTON_OVERLAY_ALPHA_TEXT = "var(--redesign-button-overlay-alpha-text)";
                r.REDESIGN_BUTTON_OVERLAY_BACKGROUND = "var(--redesign-button-overlay-background)";
                r.REDESIGN_BUTTON_OVERLAY_PRESSED_BACKGROUND = "var(--redesign-button-overlay-pressed-background)";
                r.REDESIGN_BUTTON_OVERLAY_TEXT = "var(--redesign-button-overlay-text)";
                r.REDESIGN_BUTTON_POSITIVE_BACKGROUND = "var(--redesign-button-positive-background)";
                r.REDESIGN_BUTTON_POSITIVE_PRESSED_BACKGROUND = "var(--redesign-button-positive-pressed-background)";
                r.REDESIGN_BUTTON_POSITIVE_TEXT = "var(--redesign-button-positive-text)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_BACKGROUND = "var(--redesign-button-primary-alt-background)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_BORDER = "var(--redesign-button-primary-alt-border)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-background)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BORDER = "var(--redesign-button-primary-alt-on-blurple-border)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-pressed-background)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BORDER = "var(--redesign-button-primary-alt-on-blurple-pressed-border)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_TEXT = "var(--redesign-button-primary-alt-on-blurple-text)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-pressed-background)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BORDER = "var(--redesign-button-primary-alt-pressed-border)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_TEXT = "var(--redesign-button-primary-alt-pressed-text)";
                r.REDESIGN_BUTTON_PRIMARY_ALT_TEXT = "var(--redesign-button-primary-alt-text)";
                r.REDESIGN_BUTTON_PRIMARY_BACKGROUND = "var(--redesign-button-primary-background)";
                r.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-on-blurple-background)";
                r.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-on-blurple-pressed-background)";
                r.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT = "var(--redesign-button-primary-on-blurple-pressed-text)";
                r.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_TEXT = "var(--redesign-button-primary-on-blurple-text)";
                r.REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND = "var(--redesign-button-primary-pressed-background)";
                r.REDESIGN_BUTTON_PRIMARY_TEXT = "var(--redesign-button-primary-text)";
                r.REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND = "var(--redesign-button-secondary-alt-background)";
                r.REDESIGN_BUTTON_SECONDARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-secondary-alt-pressed-background)";
                r.REDESIGN_BUTTON_SECONDARY_ALT_PRESSED_TEXT = "var(--redesign-button-secondary-alt-pressed-text)";
                r.REDESIGN_BUTTON_SECONDARY_ALT_TEXT = "var(--redesign-button-secondary-alt-text)";
                r.REDESIGN_BUTTON_SECONDARY_BACKGROUND = "var(--redesign-button-secondary-background)";
                r.REDESIGN_BUTTON_SECONDARY_BORDER = "var(--redesign-button-secondary-border)";
                r.REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND = "var(--redesign-button-secondary-pressed-background)";
                r.REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER = "var(--redesign-button-secondary-pressed-border)";
                r.REDESIGN_BUTTON_SECONDARY_TEXT = "var(--redesign-button-secondary-text)";
                r.REDESIGN_CHANNEL_CATEGORY_NAME_TEXT = "var(--redesign-channel-category-name-text)";
                r.REDESIGN_CHANNEL_MESSAGE_PREVIEW_TEXT = "var(--redesign-channel-message-preview-text)";
                r.REDESIGN_CHANNEL_NAME_MUTED_TEXT = "var(--redesign-channel-name-muted-text)";
                r.REDESIGN_CHANNEL_NAME_TEXT = "var(--redesign-channel-name-text)";
                r.REDESIGN_CHAT_INPUT_BACKGROUND = "var(--redesign-chat-input-background)";
                r.REDESIGN_INPUT_CONTROL_ACTIVE_BG = "var(--redesign-input-control-active-bg)";
                r.REDESIGN_INPUT_CONTROL_SELECTED = "var(--redesign-input-control-selected)";
                r.REDESIGN_ONLY_BACKGROUND_ACTIVE = "var(--redesign-only-background-active)";
                r.REDESIGN_ONLY_BACKGROUND_DEFAULT = "var(--redesign-only-background-default)";
                r.REDESIGN_ONLY_BACKGROUND_OVERLAY = "var(--redesign-only-background-overlay)";
                r.REDESIGN_ONLY_BACKGROUND_RAISED = "var(--redesign-only-background-raised)";
                r.REDESIGN_ONLY_BACKGROUND_SUNKEN = "var(--redesign-only-background-sunken)";
                r.SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB = "var(--scrollbar-auto-scrollbar-color-thumb)";
                r.SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK = "var(--scrollbar-auto-scrollbar-color-track)";
                r.SCROLLBAR_AUTO_THUMB = "var(--scrollbar-auto-thumb)";
                r.SCROLLBAR_AUTO_TRACK = "var(--scrollbar-auto-track)";
                r.SCROLLBAR_THIN_THUMB = "var(--scrollbar-thin-thumb)";
                r.SCROLLBAR_THIN_TRACK = "var(--scrollbar-thin-track)";
                r.SPOILER_HIDDEN_BACKGROUND = "var(--spoiler-hidden-background)";
                r.SPOILER_REVEALED_BACKGROUND = "var(--spoiler-revealed-background)";
                r.STATUS_DANGER = "var(--status-danger)";
                r.STATUS_DANGER_BACKGROUND = "var(--status-danger-background)";
                r.STATUS_DANGER_TEXT = "var(--status-danger-text)";
                r.STATUS_DND = "var(--status-dnd)";
                r.STATUS_IDLE = "var(--status-idle)";
                r.STATUS_OFFLINE = "var(--status-offline)";
                r.STATUS_ONLINE = "var(--status-online)";
                r.STATUS_POSITIVE = "var(--status-positive)";
                r.STATUS_POSITIVE_BACKGROUND = "var(--status-positive-background)";
                r.STATUS_POSITIVE_TEXT = "var(--status-positive-text)";
                r.STATUS_SPEAKING = "var(--status-speaking)";
                r.STATUS_WARNING = "var(--status-warning)";
                r.STATUS_WARNING_BACKGROUND = "var(--status-warning-background)";
                r.STATUS_WARNING_TEXT = "var(--status-warning-text)";
                r.TEXT_BRAND = "var(--text-brand)";
                r.TEXT_DANGER = "var(--text-danger)";
                r.TEXT_LINK = "var(--text-link)";
                r.TEXT_LINK_LOW_SATURATION = "var(--text-link-low-saturation)";
                r.TEXT_LOW_CONTRAST = "var(--text-low-contrast)";
                r.TEXT_MESSAGE_PREVIEW_LOW_SAT = "var(--text-message-preview-low-sat)";
                r.TEXT_MUTED = "var(--text-muted)";
                r.TEXT_MUTED_ON_DEFAULT = "var(--text-muted-on-default)";
                r.TEXT_NORMAL = "var(--text-normal)";
                r.TEXT_POSITIVE = "var(--text-positive)";
                r.TEXT_PRIMARY = "var(--text-primary)";
                r.TEXT_SECONDARY = "var(--text-secondary)";
                r.TEXT_WARNING = "var(--text-warning)";
                r.TEXTBOX_MARKDOWN_SYNTAX = "var(--textbox-markdown-syntax)";
                r.THEME_LOCKED_BLUR_FALLBACK = "var(--theme-locked-blur-fallback)";
                r.USER_PROFILE_HEADER_OVERFLOW_BACKGROUND = "var(--user-profile-header-overflow-background)";
                r.VOICE_VIDEO_TILE_BLUR_FALLBACK = "var(--voice-video-tile-blur-fallback)";
                r.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK = "var(--voice-video-video-tile-blur-fallback)";
                r.WHITE = "var(--white)"
            }(a || (a = {}));
            const n = a
        },
        180735: (r, t, e) => {
            "use strict";
            e.d(t, {
                h: () => a
            });
            var a;
            ! function(r) {
                r[r.USER = 100] = "USER";
                r[r.STREAM = 18] = "STREAM"
            }(a || (a = {}))
        },
        142520: (r, t, e) => {
            "use strict";
            e.d(t, {
                x: () => a
            });
            var a;
            ! function(r) {
                r.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(a || (a = {}))
        },
        248634: (r, t, e) => {
            "use strict";
            e.d(t, {
                z: () => a
            });
            var a;
            ! function(r) {
                r.MATCH_ALL = "match_all";
                r.MATCH_SOME = "match_some"
            }(a || (a = {}));
            new Set(["match_all", "match_some"])
        },
        283151: (r, t, e) => {
            "use strict";
            e.d(t, {
                Z: () => _
            });
            var a = e(667294);

            function n(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var e = 0, a = new Array(t); e < t; e++) a[e] = r[e];
                return a
            }

            function o(r, t) {
                return function(r) {
                    if (Array.isArray(r)) return r
                }(r) || function(r, t) {
                    var e = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != e) {
                        var a, n, o = [],
                            _ = !0,
                            i = !1;
                        try {
                            for (e = e.call(r); !(_ = (a = e.next()).done); _ = !0) {
                                o.push(a.value);
                                if (t && o.length === t) break
                            }
                        } catch (r) {
                            i = !0;
                            n = r
                        } finally {
                            try {
                                _ || null == e.return || e.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        return o
                    }
                }(r, t) || function(r, t) {
                    if (!r) return;
                    if ("string" == typeof r) return n(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    "Object" === e && r.constructor && (e = r.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return n(r, t)
                }(r, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _() {
                var r = o((0, a.useState)({}), 2)[1];
                return (0,
                    a.useCallback)((function() {
                    return r({})
                }), [])
            }
        },
        989824: (r, t, e) => {
            "use strict";
            e.d(t, {
                Z: () => o
            });
            var a = e(667294),
                n = {};

            function o(r) {
                var t = (0, a.useRef)(n);
                t.current === n && (t.current = r());
                return t.current
            }
        },
        204841: (r, t, e) => {
            "use strict";
            e.d(t, {
                UN: () => a,
                Bd: () => n,
                xS: () => o
            });

            function a(r) {
                let t = r[3],
                    e = 128 & r[2],
                    a = 128 & r[4];
                return (a ? e ? 5 : 7 : 7 & t) / (a ? 7 & t : e ? 5 : 7)
            }

            function n(r, t, e) {
                let a = 4 * r + 1,
                    n = 6 + t * (5 + a),
                    o = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, r >> 8, 255 & r, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 73, 68, 65, 84, 120, 1],
                    _ = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    i = 1,
                    E = 0;
                for (let r = 0, n = 0, _ = a - 1; r < t; r++, _ += a - 1) {
                    o.push(r + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0);
                    for (E = (E + i) % 65521; n < _; n++) {
                        let r = 255 & e[n];
                        o.push(r);
                        i = (i + r) % 65521;
                        E = (E + i) % 65521
                    }
                }
                o.push(E >> 8, 255 & E, i >> 8, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
                for (let [r, t] of [
                        [12, 29],
                        [37, 41 + n]
                    ]) {
                    let e = -1;
                    for (let a = r; a < t; a++) {
                        e ^= o[a];
                        e = e >>> 4 ^ _[15 & e];
                        e = e >>> 4 ^ _[15 & e]
                    }
                    e = ~e;
                    o[t++] = e >>> 24;
                    o[t++] = e >> 16 & 255;
                    o[t++] = e >> 8 & 255;
                    o[t++] = 255 & e
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...o))
            }

            function o(r) {
                let t = function(r) {
                    let {
                        PI: t,
                        min: e,
                        max: n,
                        cos: o,
                        round: _
                    } = Math, i = r[0] | r[1] << 8 | r[2] << 16, E = r[3] | r[4] << 8, R = (63 & i) / 63, T = (i >> 6 & 63) / 31.5 - 1, O = (i >> 12 & 63) / 31.5 - 1, u = (i >> 18 & 31) / 31, N = i >> 23, A = (E >> 3 & 63) / 63, c = (E >> 9 & 63) / 63, v = E >> 15, d = n(3, v ? N ? 5 : 7 : 7 & E), s = n(3, v ? 7 & E : N ? 5 : 7), D = N ? (15 & r[5]) / 15 : 1, I = (r[5] >> 4) / 15, b = N ? 6 : 5, l = 0, g = (t, e, a) => {
                        let n = [];
                        for (let o = 0; o < e; o++)
                            for (let _ = o ? 0 : 1; _ * e < t * (e - o); _++) n.push(((r[b + (l >> 1)] >> ((1 & l++) << 2) & 15) / 7.5 - 1) * a);
                        return n
                    }, U = g(d, s, u), p = g(3, 3, 1.25 * A), B = g(3, 3, 1.25 * c), C = N && g(5, 5, I), G = a(r), h = _(G > 1 ? 32 : 32 * G), S = _(G > 1 ? 32 / G : 32), f = new Uint8Array(h * S * 4), L = [], y = [];
                    for (let r = 0, a = 0; r < S; r++)
                        for (let _ = 0; _ < h; _++, a += 4) {
                            let i = R,
                                E = T,
                                u = O,
                                A = D;
                            for (let r = 0, e = n(d, N ? 5 : 3); r < e; r++) L[r] = o(t / h * (_ + .5) * r);
                            for (let e = 0, a = n(s, N ? 5 : 3); e < a; e++) y[e] = o(t / S * (r + .5) * e);
                            for (let r = 0, t = 0; r < s; r++)
                                for (let e = r ? 0 : 1, a = 2 * y[r]; e * s < d * (s - r); e++, t++) i += U[t] * L[e] * a;
                            for (let r = 0, t = 0; r < 3; r++)
                                for (let e = r ? 0 : 1, a = 2 * y[r]; e < 3 - r; e++, t++) {
                                    let r = L[e] * a;
                                    E += p[t] * r;
                                    u += B[t] * r
                                }
                            if (N)
                                for (let r = 0, t = 0; r < 5; r++)
                                    for (let e = r ? 0 : 1, a = 2 * y[r]; e < 5 - r; e++, t++) A += C[t] * L[e] * a;
                            let c = i - 2 / 3 * E,
                                v = (3 * i - c + u) / 2,
                                I = v - u;
                            f[a] = n(0, 255 * e(1, v));
                            f[a + 1] = n(0, 255 * e(1, I));
                            f[a + 2] = n(0, 255 * e(1, c));
                            f[a + 3] = n(0, 255 * e(1, A))
                        }
                    return {
                        w: h,
                        h: S,
                        rgba: f
                    }
                }(r);
                return n(t.w, t.h, t.rgba)
            }
        }
    }
]);