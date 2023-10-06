(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35804, 17586, 93364], {
        737264: r => {
            "use strict";
            r.exports.Q = function(r) {
                var a, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(r);
                if (!e) return null;
                e.shift();
                var t = null,
                    n = [];
                if (e[2]) {
                    t = (a = e[2].split("-")).shift();
                    n = a
                }
                var _ = [];
                e[5] && (_ = e[5].split("-")).shift();
                var o = [];
                if (e[6]) {
                    (a = e[6].split("-")).shift();
                    for (var E, i = []; a.length;) {
                        var R = a.shift();
                        if (1 === R.length)
                            if (E) {
                                o.push({
                                    singleton: E,
                                    extension: i
                                });
                                E = R;
                                i = []
                            } else E = R;
                        else i.push(R)
                    }
                    o.push({
                        singleton: E,
                        extension: i
                    })
                }
                var T = [];
                if (e[7]) {
                    (T = e[7].split("-")).shift();
                    T.shift()
                }
                var N = [];
                e[8] && (N = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: t,
                            extlang: n
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: _,
                        extension: o,
                        privateuse: T
                    },
                    privateuse: N,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        667237: r => {
            "use strict";

            function a(r) {
                this._capacity = n(r);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (e(r)) {
                    for (var a = r.length, t = 0; t < a; ++t) this[t] = r[t];
                    this._length = a
                }
            }
            a.prototype.toArray = function() {
                for (var r = this._length, a = new Array(r), e = this._front, t = this._capacity, n = 0; n < r; ++n) a[n] = this[e + n & t - 1];
                return a
            };
            a.prototype.push = function(r) {
                var a = arguments.length,
                    e = this._length;
                if (a > 1) {
                    var t = this._capacity;
                    if (e + a > t) {
                        for (var n = 0; n < a; ++n) {
                            this._checkCapacity(e + 1);
                            this[_ = this._front + e & this._capacity - 1] = arguments[n];
                            e++;
                            this._length = e
                        }
                        return e
                    }
                    for (var _ = this._front, n = 0; n < a; ++n) {
                        this[_ + e & t - 1] = arguments[n];
                        _++
                    }
                    this._length = e + a;
                    return e + a
                }
                if (0 === a) return e;
                this._checkCapacity(e + 1);
                this[n = this._front + e & this._capacity - 1] = r;
                this._length = e + 1;
                return e + 1
            };
            a.prototype.pop = function() {
                var r = this._length;
                if (0 !== r) {
                    var a = this._front + r - 1 & this._capacity - 1,
                        e = this[a];
                    this[a] = void 0;
                    this._length = r - 1;
                    return e
                }
            };
            a.prototype.shift = function() {
                var r = this._length;
                if (0 !== r) {
                    var a = this._front,
                        e = this[a];
                    this[a] = void 0;
                    this._front = a + 1 & this._capacity - 1;
                    this._length = r - 1;
                    return e
                }
            };
            a.prototype.unshift = function(r) {
                var a = this._length,
                    e = arguments.length;
                if (e > 1) {
                    if (a + e > (n = this._capacity)) {
                        for (var t = e - 1; t >= 0; t--) {
                            this._checkCapacity(a + 1);
                            var n = this._capacity;
                            this[o = (this._front - 1 & n - 1 ^ n) - n] = arguments[t];
                            a++;
                            this._length = a;
                            this._front = o
                        }
                        return a
                    }
                    var _ = this._front;
                    for (t = e - 1; t >= 0; t--) {
                        var o;
                        this[o = (_ - 1 & n - 1 ^ n) - n] = arguments[t];
                        _ = o
                    }
                    this._front = _;
                    this._length = a + e;
                    return a + e
                }
                if (0 === e) return a;
                this._checkCapacity(a + 1);
                n = this._capacity;
                this[t = (this._front - 1 & n - 1 ^ n) - n] = r;
                this._length = a + 1;
                this._front = t;
                return a + 1
            };
            a.prototype.peekBack = function() {
                var r = this._length;
                if (0 !== r) {
                    return this[this._front + r - 1 & this._capacity - 1]
                }
            };
            a.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            a.prototype.get = function(r) {
                var a = r;
                if (a === (0 | a)) {
                    var e = this._length;
                    a < 0 && (a += e);
                    if (!(a < 0 || a >= e)) return this[this._front + a & this._capacity - 1]
                }
            };
            a.prototype.isEmpty = function() {
                return 0 === this._length
            };
            a.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            a.prototype.toString = function() {
                return this.toArray().toString()
            };
            a.prototype.valueOf = a.prototype.toString;
            a.prototype.removeFront = a.prototype.shift;
            a.prototype.removeBack = a.prototype.pop;
            a.prototype.insertFront = a.prototype.unshift;
            a.prototype.insertBack = a.prototype.push;
            a.prototype.enqueue = a.prototype.push;
            a.prototype.dequeue = a.prototype.shift;
            a.prototype.toJSON = a.prototype.toArray;
            Object.defineProperty(a.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            a.prototype._makeCapacity = function() {
                for (var r = this._capacity, a = 0; a < r; ++a) this[a] = void 0
            };
            a.prototype._checkCapacity = function(r) {
                this._capacity < r && this._resizeTo(n(1.5 * this._capacity + 16))
            };
            a.prototype._resizeTo = function(r) {
                var a = this._front,
                    e = this._capacity,
                    n = new Array(e),
                    _ = this._length;
                t(this, 0, n, 0, e);
                this._capacity = r;
                this._makeCapacity();
                this._front = 0;
                if (a + _ <= e) t(n, a, this, 0, _);
                else {
                    var o = _ - (a + _ & e - 1);
                    t(n, a, this, 0, o);
                    t(n, 0, this, o, _ - o)
                }
            };
            var e = Array.isArray;

            function t(r, a, e, t, n) {
                for (var _ = 0; _ < n; ++_) e[_ + t] = r[_ + a]
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
            r.exports = a
        },
        753074: r => {
            "use strict";
            var a = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                e = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                t = "function" == typeof Object.getOwnPropertySymbols;
            r.exports = function(r, n, _) {
                if ("string" != typeof n) {
                    var o = Object.getOwnPropertyNames(n);
                    t && (o = o.concat(Object.getOwnPropertySymbols(n)));
                    for (var E = 0; E < o.length; ++E)
                        if (!(a[o[E]] || e[o[E]] || _ && _[o[E]])) try {
                            r[o[E]] = n[o[E]]
                        } catch (r) {}
                }
                return r
            }
        },
        823493: (r, a, e) => {
            var t = e(23279),
                n = e(513218);
            r.exports = function(r, a, e) {
                var _ = !0,
                    o = !0;
                if ("function" != typeof r) throw new TypeError("Expected a function");
                if (n(e)) {
                    _ = "leading" in e ? !!e.leading : _;
                    o = "trailing" in e ? !!e.trailing : o
                }
                return t(r, a, {
                    leading: _,
                    maxWait: a,
                    trailing: o
                })
            }
        },
        852316: (r, a, e) => {
            "use strict";
            e.d(a, {
                Z: () => t
            });
            const t = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        947592: (r, a, e) => {
            "use strict";
            e.d(a, {
                Z: () => t
            });
            const t = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        517586: (r, a, e) => {
            "use strict";
            e.d(a, {
                Z: () => n
            });
            var t;
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
            }(t || (t = {}));
            const n = t
        },
        180735: (r, a, e) => {
            "use strict";
            e.d(a, {
                h: () => t
            });
            var t;
            ! function(r) {
                r[r.USER = 100] = "USER";
                r[r.STREAM = 18] = "STREAM"
            }(t || (t = {}))
        },
        142520: (r, a, e) => {
            "use strict";
            e.d(a, {
                x: () => t
            });
            var t;
            ! function(r) {
                r.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(t || (t = {}))
        },
        197597: (r, a, e) => {
            "use strict";
            e.d(a, {
                S: () => t,
                M: () => n
            });
            var t;
            ! function(r) {
                r.AC = "AC";
                r.AD = "AD";
                r.AE = "AE";
                r.AF = "AF";
                r.AG = "AG";
                r.AI = "AI";
                r.AL = "AL";
                r.AM = "AM";
                r.AN = "AN";
                r.AO = "AO";
                r.AR = "AR";
                r.AS = "AS";
                r.AT = "AT";
                r.AU = "AU";
                r.AW = "AW";
                r.AX = "AX";
                r.AZ = "AZ";
                r.BA = "BA";
                r.BB = "BB";
                r.BD = "BD";
                r.BE = "BE";
                r.BF = "BF";
                r.BG = "BG";
                r.BH = "BH";
                r.BI = "BI";
                r.BJ = "BJ";
                r.BM = "BM";
                r.BN = "BN";
                r.BO = "BO";
                r.BR = "BR";
                r.BS = "BS";
                r.BT = "BT";
                r.BW = "BW";
                r.BY = "BY";
                r.BZ = "BZ";
                r.CA = "CA";
                r.CC = "CC";
                r.CD = "CD";
                r.CF = "CF";
                r.CG = "CG";
                r.CH = "CH";
                r.CI = "CI";
                r.CK = "CK";
                r.CL = "CL";
                r.CM = "CM";
                r.CN = "CN";
                r.CO = "CO";
                r.CR = "CR";
                r.CU = "CU";
                r.CV = "CV";
                r.CW = "CW";
                r.CX = "CX";
                r.CY = "CY";
                r.CZ = "CZ";
                r.DE = "DE";
                r.DG = "DG";
                r.DJ = "DJ";
                r.DK = "DK";
                r.DM = "DM";
                r.DO = "DO";
                r.DZ = "DZ";
                r.EC = "EC";
                r.EE = "EE";
                r.EG = "EG";
                r.EL = "EL";
                r.ER = "ER";
                r.ES = "ES";
                r.ET = "ET";
                r.FI = "FI";
                r.FJ = "FJ";
                r.FK = "FK";
                r.FM = "FM";
                r.FO = "FO";
                r.FR = "FR";
                r.GA = "GA";
                r.GB = "GB";
                r.GD = "GD";
                r.GE = "GE";
                r.GF = "GF";
                r.GG = "GG";
                r.GH = "GH";
                r.GI = "GI";
                r.GL = "GL";
                r.GM = "GM";
                r.GN = "GN";
                r.GP = "GP";
                r.GQ = "GQ";
                r.GR = "GR";
                r.GS = "GS";
                r.GT = "GT";
                r.GU = "GU";
                r.GW = "GW";
                r.GY = "GY";
                r.HK = "HK";
                r.HM = "HM";
                r.HN = "HN";
                r.HR = "HR";
                r.HT = "HT";
                r.HU = "HU";
                r.IC = "IC";
                r.ID = "ID";
                r.IE = "IE";
                r.IL = "IL";
                r.IM = "IM";
                r.IN = "IN";
                r.IO = "IO";
                r.IQ = "IQ";
                r.IR = "IR";
                r.IS = "IS";
                r.IT = "IT";
                r.JE = "JE";
                r.JM = "JM";
                r.JO = "JO";
                r.JP = "JP";
                r.KE = "KE";
                r.KG = "KG";
                r.KH = "KH";
                r.KI = "KI";
                r.KM = "KM";
                r.KN = "KN";
                r.KP = "KP";
                r.KR = "KR";
                r.KW = "KW";
                r.KY = "KY";
                r.KZ = "KZ";
                r.LA = "LA";
                r.LB = "LB";
                r.LI = "LI";
                r.LK = "LK";
                r.LR = "LR";
                r.LS = "LS";
                r.LT = "LT";
                r.LU = "LU";
                r.LV = "LV";
                r.LY = "LY";
                r.MA = "MA";
                r.MC = "MC";
                r.MD = "MD";
                r.ME = "ME";
                r.MG = "MG";
                r.MH = "MH";
                r.MI = "MI";
                r.MK = "MK";
                r.ML = "ML";
                r.MM = "MM";
                r.MN = "MN";
                r.MO = "MO";
                r.MP = "MP";
                r.MQ = "MQ";
                r.MR = "MR";
                r.MS = "MS";
                r.MT = "MT";
                r.MU = "MU";
                r.MV = "MV";
                r.MW = "MW";
                r.MX = "MX";
                r.MY = "MY";
                r.MZ = "MZ";
                r.NA = "NA";
                r.NC = "NC";
                r.NE = "NE";
                r.NF = "NF";
                r.NG = "NG";
                r.NI = "NI";
                r.NL = "NL";
                r.NO = "NO";
                r.NP = "NP";
                r.NR = "NR";
                r.NU = "NU";
                r.NZ = "NZ";
                r.OM = "OM";
                r.PA = "PA";
                r.PE = "PE";
                r.PF = "PF";
                r.PG = "PG";
                r.PH = "PH";
                r.PK = "PK";
                r.PL = "PL";
                r.PM = "PM";
                r.PR = "PR";
                r.PS = "PS";
                r.PT = "PT";
                r.PW = "PW";
                r.PY = "PY";
                r.QA = "QA";
                r.RE = "RE";
                r.RO = "RO";
                r.RS = "RS";
                r.RU = "RU";
                r.RW = "RW";
                r.SA = "SA";
                r.SB = "SB";
                r.SC = "SC";
                r.SD = "SD";
                r.SE = "SE";
                r.SG = "SG";
                r.SI = "SI";
                r.SJ = "SJ";
                r.SK = "SK";
                r.SL = "SL";
                r.SM = "SM";
                r.SN = "SN";
                r.SO = "SO";
                r.SR = "SR";
                r.SS = "SS";
                r.SV = "SV";
                r.SX = "SX";
                r.SY = "SY";
                r.SZ = "SZ";
                r.TC = "TC";
                r.TD = "TD";
                r.TG = "TG";
                r.TH = "TH";
                r.TJ = "TJ";
                r.TK = "TK";
                r.TL = "TL";
                r.TM = "TM";
                r.TN = "TN";
                r.TO = "TO";
                r.TP = "TP";
                r.TR = "TR";
                r.TT = "TT";
                r.TV = "TV";
                r.TW = "TW";
                r.TZ = "TZ";
                r.UA = "UA";
                r.UG = "UG";
                r.US = "US";
                r.UY = "UY";
                r.UZ = "UZ";
                r.VA = "VA";
                r.VE = "VE";
                r.VG = "VG";
                r.VI = "VI";
                r.VN = "VN";
                r.VU = "VU";
                r.WF = "WF";
                r.WK = "WK";
                r.WS = "WS";
                r.XK = "XK";
                r.YE = "YE";
                r.YT = "YT";
                r.ZA = "ZA";
                r.ZM = "ZM";
                r.ZW = "ZW";
                r.ST = "ST";
                r.BQ = "BQ";
                r.TF = "TF";
                r.VC = "VC";
                r.LC = "LC"
            }(t || (t = {}));
            var n = {
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"])
            }
        },
        482507: (r, a, e) => {
            "use strict";
            e.d(a, {
                J: () => t
            });

            function t(r) {
                var a = document.body;
                if (null == a) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var e = document.createRange(),
                    t = window.getSelection(),
                    n = document.createElement("textarea");
                n.value = r;
                n.contentEditable = "true";
                n.style.visibility = "none";
                a.appendChild(n);
                e.selectNodeContents(n);
                null == t || t.removeAllRanges();
                null == t || t.addRange(e);
                n.focus();
                n.setSelectionRange(0, r.length);
                var _ = document.execCommand("copy");
                a.removeChild(n);
                return _
            }
        },
        989824: (r, a, e) => {
            "use strict";
            e.d(a, {
                Z: () => _
            });
            var t = e(667294),
                n = {};

            function _(r) {
                var a = (0, t.useRef)(n);
                a.current === n && (a.current = r());
                return a.current
            }
        }
    }
]);