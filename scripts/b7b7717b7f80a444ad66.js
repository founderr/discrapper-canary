(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [34914, 60942, 67145, 96043, 71402], {
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
                    for (var l, u = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (l) {
                                a.push({
                                    singleton: l,
                                    extension: u
                                });
                                l = c;
                                u = []
                            } else l = c;
                        else u.push(c)
                    }
                    a.push({
                        singleton: l,
                        extension: u
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
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
                        privateuse: s
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
        545292: (e, t, n) => {
            e.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        455021: (e, t, n) => {
            e.exports = n.p + "d55a815e67ecc4faaafeb63dd2379a5a.png"
        },
        14636: (e, t, n) => {
            var r = n(422545),
                i = n(135694),
                o = n(701469),
                a = n(578264),
                l = n(565776),
                u = n(936719),
                c = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = o(e),
                    s = !n && i(e),
                    f = !n && !s && a(e),
                    p = !n && !s && !f && u(e),
                    d = n || s || f || p,
                    _ = d ? r(e.length, String) : [],
                    E = _.length;
                for (var O in e) !t && !c.call(e, O) || d && ("length" == O || f && ("offset" == O || "parent" == O) || p && ("buffer" == O || "byteLength" == O || "byteOffset" == O) || l(O, E)) || _.push(O);
                return _
            }
        },
        70151: (e, t, n) => {
            var r = n(200278),
                i = n(173480);
            e.exports = function(e) {
                return i(r(e))
            }
        },
        238749: (e, t, n) => {
            var r = n(644239),
                i = n(541780),
                o = n(637005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0;
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return o(e) && i(e.length) && !!a[r(e)]
            }
        },
        400280: (e, t, n) => {
            var r = n(225726),
                i = n(86916),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        525127: (e, t, n) => {
            var r = n(173480),
                i = n(252628);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        422545: e => {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        307518: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        747415: (e, t, n) => {
            var r = n(829932);
            e.exports = function(e, t) {
                return r(t, (function(t) {
                    return e[t]
                }))
            }
        },
        200278: e => {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                t || (t = Array(r));
                for (; ++n < r;) t[n] = e[n];
                return t
            }
        },
        225726: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var n = e && e.constructor;
                return e === ("function" == typeof n && n.prototype || t)
            }
        },
        86916: (e, t, n) => {
            var r = n(205569)(Object.keys, Object);
            e.exports = r
        },
        531167: (e, t, n) => {
            e = n.nmd(e);
            var r = n(431957),
                i = t && !t.nodeType && t,
                o = i && e && !e.nodeType && e,
                a = o && o.exports === i && r.process,
                l = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        205569: e => {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        173480: (e, t, n) => {
            var r = n(769877);
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length,
                    o = i - 1;
                t = void 0 === t ? i : t;
                for (; ++n < t;) {
                    var a = r(n, o),
                        l = e[a];
                    e[a] = e[n];
                    e[n] = l
                }
                e.length = t;
                return e
            }
        },
        578264: (e, t, n) => {
            e = n.nmd(e);
            var r = n(555639),
                i = n(595062),
                o = t && !t.nodeType && t,
                a = o && e && !e.nodeType && e,
                l = a && a.exports === o ? r.Buffer : void 0,
                u = (l ? l.isBuffer : void 0) || i;
            e.exports = u
        },
        936719: (e, t, n) => {
            var r = n(238749),
                i = n(307518),
                o = n(531167),
                a = o && o.isTypedArray,
                l = a ? i(a) : r;
            e.exports = l
        },
        3674: (e, t, n) => {
            var r = n(14636),
                i = n(400280),
                o = n(498612);
            e.exports = function(e) {
                return o(e) ? r(e) : i(e)
            }
        },
        369983: (e, t, n) => {
            var r = n(70151),
                i = n(525127),
                o = n(701469);
            e.exports = function(e) {
                return (o(e) ? r : i)(e)
            }
        },
        595062: e => {
            e.exports = function() {
                return !1
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
        252628: (e, t, n) => {
            var r = n(747415),
                i = n(3674);
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
            }
        },
        247250: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                i = n(396043),
                o = n(652591),
                a = n(930948),
                l = n(2590);

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
            const s = {
                rebuildRTCActiveChannels: function() {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_ACTIVE_CHANNELS"
                    })
                },
                selectParticipant: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                        channelId: e,
                        id: t
                    })
                },
                updateLayout: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.IlC.APP;
                    o.default.track(l.rMx.VIDEO_LAYOUT_TOGGLED, c({
                        video_layout: t
                    }, (0, i.AB)(e)));
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_LAYOUT",
                        channelId: e,
                        layout: t,
                        appContext: n
                    })
                },
                toggleParticipants: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                        channelId: e,
                        participantsOpen: t
                    })
                },
                toggleVoiceParticipantsHidden: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                        channelId: e,
                        voiceParticipantsHidden: t
                    })
                },
                updateStageStreamSize: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                        channelId: e,
                        large: t
                    })
                },
                updateStageVideoLimitBoostUpsellDismissed: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                        channelId: e,
                        dismissed: t
                    })
                },
                updateChatOpen: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                        channelId: e,
                        chatOpen: t
                    });
                    t ? setTimeout((function() {
                        a.S.dispatch(l.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    }), 0) : a.S.dispatch(l.CkL.FOCUS_CHAT_BUTTON)
                }
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => p,
                jW: () => d
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                a = n(73105),
                l = n(2590);

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

            function s(e) {
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

            function p(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var u, f, p = 0,
                        d = 0;
                    if ("pageX" in e) {
                        p = e.pageX;
                        d = e.pageY
                    }
                    if (0 === p && 0 === d) {
                        var _, E = null === (_ = e.target) || void 0 === _ ? void 0 : _.getBoundingClientRect(),
                            O = null != E ? E : {},
                            h = O.left,
                            I = void 0 === h ? 0 : h,
                            y = O.top,
                            g = void 0 === y ? 0 : y,
                            T = O.width,
                            m = void 0 === T ? 0 : T,
                            b = O.height;
                        p = I + m / 2;
                        d = g + (void 0 === b ? 0 : b) / 2
                    }
                    var v = {
                        render: t,
                        renderLazy: r,
                        target: null !== (u = e.target) && void 0 !== u ? u : e.currentTarget,
                        rect: new DOMRect(p, d, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? l.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : l.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var S = (0, a.RD)((function() {
                        S();
                        s(v)
                    }));
                    else {
                        e.preventDefault();
                        s(v)
                    }
                }
            }

            function d(e, t, n) {
                p(e, void 0, n, t)
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
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => _,
                Gn: () => O,
                Y2: () => h,
                mE: () => I
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                a = n(615796),
                l = n(264628),
                u = n(673679),
                c = n(2590),
                s = n(203600);

            function f(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            f(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            f(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var d = function(e, t) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
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
                        }([o, l])
                    }
                }
            };

            function _(e, t, n, r, i) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = p((function(e, t, n, s, f) {
                    var p, _, E, O;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 5, , 6]);
                                p = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                _ = {};
                                null != t && (_.country_code = t);
                                null != n && (_.payment_source_id = n);
                                null != s && (_.include_unpublished = s);
                                null != f && (_.revenue_surface = f);
                                p.query = _;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, u.GE)()];
                            case 2:
                                d.sent();
                                d.label = 3;
                            case 3:
                                return [4, r.ZP.get(p)];
                            case 4:
                                E = d.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                O = d.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, l.q2)(O);
                                throw new o.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return _(e, t)
                })))
            }

            function h(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return _(r, e, t, void 0, n)
                })))
            }

            function I() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        567867: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(744564);
            const i = {
                popFirstFile: function(e) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_POP_FILE",
                        channelId: e
                    })
                },
                addFiles: function(e) {
                    var t = e.files,
                        n = e.channelId,
                        i = e.showLargeMessageDialog,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_ADD_FILES",
                        channelId: n,
                        files: t,
                        showLargeMessageDialog: i,
                        draftType: o
                    })
                },
                addFile: function(e) {
                    var t = e.file,
                        n = e.channelId,
                        i = e.showLargeMessageDialog,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_ADD_FILES",
                        channelId: n,
                        files: [t],
                        showLargeMessageDialog: i,
                        draftType: o
                    })
                },
                remove: function(e, t, n) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                        channelId: e,
                        id: t,
                        draftType: n
                    })
                },
                removeFiles: function(e, t, n) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                        channelId: e,
                        attachmentIds: t,
                        draftType: n
                    })
                },
                clearAll: function(e, t) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                        channelId: e,
                        draftType: t
                    })
                },
                update: function(e, t, n, i) {
                    var o = i.description,
                        a = i.filename,
                        l = i.spoiler,
                        u = i.thumbnail;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                        channelId: e,
                        id: t,
                        filename: a,
                        description: o,
                        thumbnail: u,
                        spoiler: l,
                        draftType: n
                    })
                },
                setUploads: function(e) {
                    var t = e.uploads,
                        n = e.channelId,
                        i = e.draftType,
                        o = e.resetState;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                        channelId: n,
                        uploads: o ? t.map((function(e) {
                            return e.resetState()
                        })) : t,
                        draftType: i
                    })
                },
                setFile: function(e) {
                    var t = e.file,
                        n = e.channelId,
                        i = e.id,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_SET_FILE",
                        channelId: n,
                        id: i,
                        file: t,
                        draftType: o
                    })
                }
            }
        },
        625091: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(882723),
                i = n(744564),
                o = n(943469),
                a = n(720419),
                l = n(567867),
                u = n(444663),
                c = n(769915),
                s = n(598143),
                f = n(474717),
                p = n(460471),
                d = n(201891),
                _ = n(649536),
                E = n(358624),
                O = n(723029),
                h = n(28862),
                I = n(798808),
                y = n(331055),
                g = n(284610),
                T = n(255592),
                m = n(661123),
                b = n(2590),
                v = n(473708);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
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

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                var t = e.channelId,
                    n = e.uploads,
                    r = e.draftType,
                    s = e.parsedMessage,
                    f = e.options,
                    S = void 0 === f ? {} : f,
                    A = new p.Z(b.ANM.MESSAGES(t)),
                    N = {
                        content: "",
                        nonce: "",
                        channel_id: t,
                        type: b.uaV.DEFAULT,
                        sticker_ids: null == S ? void 0 : S.stickerIds
                    };
                null != s && (N.content = null == s ? void 0 : s.content);
                if (null != I.Z.getPendingReply(t)) {
                    N.type = b.uaV.REPLY;
                    N.message_reference = S.messageReference;
                    N.allowed_mentions = S.allowedMentions;
                    (0, h.A6)(t)
                }
                var C, U = R((0, y.ZP)(N.content), 2),
                    M = U[0],
                    w = U[1];
                if (M) {
                    N.content = w;
                    var D;
                    N.flags = (0,
                        m.pj)(null !== (D = N.flags) && void 0 !== D ? D : 0, b.iLy.SUPPRESS_NOTIFICATIONS)
                }
                var j, G, k = null !== (C = S.nonce) && void 0 !== C ? C : (0, E.rv)(),
                    x = (0, E.ZP)({
                        channelId: t,
                        content: N.content,
                        tts: null !== (j = null == s ? void 0 : s.tts) && void 0 !== j && j,
                        type: N.type,
                        messageReference: N.message_reference,
                        flags: N.flags,
                        nonce: k
                    });
                N.nonce = k;
                A.on("start", (function(e) {
                    G = (0, _.e5)(P(L({}, x), {
                        id: e.id
                    }));
                    i.Z.dispatch({
                        type: "UPLOAD_START",
                        channelId: t,
                        file: e,
                        message: G,
                        uploader: A
                    })
                }));
                A.on("progress", (function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: t,
                        file: e
                    })
                }));
                A.on("error", (function(e, s, f, p) {
                    i.Z.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: t,
                        file: e,
                        messageRecord: G
                    });
                    (0, O.x)({
                        fileItems: e.items,
                        failureCode: s,
                        errorMessage: null == p ? void 0 : p.msg
                    });
                    if (s !== b.evJ.EXPLICIT_CONTENT)
                        if (s !== b.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                            if (s !== b.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                                (0, u.openUploadError)({
                                    title: v.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    help: v.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                                });
                                ! function() {
                                    "" !== N.content && "" === g.Z.getDraft(t, r) && o.Z.saveDraft(t, N.content, r);
                                    0 === T.Z.getUploadCount(t, r) && l.Z.setUploads({
                                        channelId: t,
                                        uploads: n,
                                        draftType: r
                                    })
                                }()
                            }
                        } else {
                            var _ = {
                                    code: s,
                                    message: null == f ? void 0 : f.message
                                },
                                E = null == G ? null : {
                                    type: c.$V.SEND,
                                    message: P(L({}, G), {
                                        channelId: t
                                    })
                                };
                            (0, u.openUploadError)({
                                title: v.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: (0, d.uF)(E, _)
                            })
                        }
                    else a.Z.sendClydeError(t, s)
                }));
                A.on("complete", (function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: t,
                        file: e,
                        aborted: A._aborted
                    })
                }));
                A.uploadFiles(n, N)
            }
            const C = {
                instantBatchUpload: function(e) {
                    var t = e.channelId,
                        n = e.files,
                        r = e.draftType,
                        i = e.isThumbnail,
                        o = void 0 !== i && i,
                        a = e.isClip,
                        l = void 0 !== a && a,
                        u = Array.from(n).map((function(e) {
                            return new s.n({
                                file: e,
                                platform: f.ow.WEB,
                                isThumbnail: o,
                                isClip: l
                            }, t)
                        }));
                    N({
                        channelId: t,
                        uploads: u,
                        draftType: r
                    })
                },
                upload: function e(t) {
                    var n = t.channelId,
                        l = t.file,
                        c = t.draftType,
                        s = t.message,
                        f = {
                            content: "",
                            tts: !1,
                            hasSpoiler: t.hasSpoiler,
                            filename: t.filename
                        };
                    if (null != s) {
                        f.content = s.content;
                        f.tts = s.tts;
                        f.channel_id = s.channel_id;
                        var d = I.Z.getPendingReply(n);
                        if (null != d) {
                            var _ = a.Z.getSendMessageOptionsForReply(d);
                            f.type = b.uaV.REPLY;
                            f.message_reference = _.messageReference;
                            f.allowed_mentions = _.allowedMentions;
                            (0, h.A6)(n)
                        }
                    }
                    var E = new p.Z(b.ANM.MESSAGES(n));
                    E.on("start", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: E
                        })
                    }));
                    E.on("progress", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }));
                    E.on("error", (function(t, p) {
                        i.Z.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: n,
                            file: t
                        });
                        (0, O.x)({
                            fileItems: t.items,
                            failureCode: p
                        });
                        if (p !== b.evJ.EXPLICIT_CONTENT) {
                            (0, u.openUploadError)({
                                title: v.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: v.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                    onClick: function() {
                                        (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY);
                                        e({
                                            channelId: n,
                                            file: l,
                                            draftType: c,
                                            message: s
                                        })
                                    }
                                })
                            });
                            "" !== f.content && "" === g.Z.getDraft(n, c) && o.Z.saveDraft(n, f.content, c)
                        } else a.Z.sendClydeError(n, p)
                    }));
                    E.on("complete", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }));
                    E.upload(l, f)
                },
                uploadFiles: N,
                cancel: function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_CANCEL_REQUEST",
                        file: e
                    });
                    if (null != e.draftContent && null != e.channelId) {
                        "" === g.Z.getDraft(e.channelId, g.d.ChannelMessage) && i.Z.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: g.d.ChannelMessage
                        })
                    }
                }
            }
        },
        949995: (e, t, n) => {
            "use strict";
            n.d(t, {
                bd: () => u,
                J6: () => c,
                pA: () => s
            });
            var r, i, o = n(36627),
                a = n.n(o);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.IMAGE = 0] = "IMAGE";
                e[e.DOCUMENT = 1] = "DOCUMENT";
                e[e.CODE = 2] = "CODE"
            }(r || (r = {}));
            var u = (l(i = {}, r.IMAGE, a().image), l(i, r.DOCUMENT, a().document), l(i, r.CODE, a().code), i),
                c = [r.DOCUMENT, r.IMAGE, r.CODE],
                s = [r.IMAGE, r.IMAGE, r.IMAGE]
        },
        793008: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(949995),
                l = n(36627),
                u = n.n(l);
            const c = function(e) {
                var t = e.icons,
                    n = e.className;
                return (0,
                    r.jsxs)("div", {
                    className: o()(u().icons, n),
                    children: [(0, r.jsx)("div", {
                        className: u().wrapOne,
                        children: (0, r.jsx)("div", {
                            className: o()(u().icon, u().one, a.bd[t[0]])
                        })
                    }), (0, r.jsx)("div", {
                        className: u().wrapThree,
                        children: (0, r.jsx)("div", {
                            className: o()(u().icon, u().three, a.bd[t[2]])
                        })
                    }), (0, r.jsx)("div", {
                        className: u().wrapTwo,
                        children: (0, r.jsx)("div", {
                            className: o()(u().icon, u().two, a.bd[t[1]])
                        })
                    })]
                })
            }
        },
        444663: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                UPLOAD_ERROR_MODAL_KEY: () => U,
                default: () => C,
                openUploadError: () => M
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                l = n(264817),
                u = n(883489),
                c = n(202351),
                s = n(882723),
                f = n(793008),
                p = n(473903),
                d = n(452723),
                _ = n(116094),
                E = n(799066),
                O = n(245325),
                h = n(442212),
                I = n(203600),
                y = n(2590),
                g = n(949995),
                T = n(473708),
                m = n(427479),
                b = n.n(m);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e, t) {
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

            function A(e) {
                var t, n = e.onClose,
                    o = e.fileSize,
                    l = S(e, ["onClose", "fileSize"]),
                    u = null != o && I.Lw < o,
                    m = (0, O.Z)({
                        autoTrackExposure: !u,
                        experiment: E.Z,
                        location: I.cd.UPLOAD_ERROR_UPSELL
                    }),
                    A = m.isLoading,
                    L = m.suggestedPremiumType,
                    P = !u && L === I.p9.TIER_0,
                    R = (0, c.e7)([p.default], (function() {
                        return p.default.getCurrentUser()
                    })),
                    N = (0, r.jsx)(f.Z, {
                        icons: g.J6
                    });
                t = P ? T.Z.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, _.Px)(I.p9.TIER_0),
                    premiumMaxSize: T.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : T.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                var C = i.useMemo((function() {
                        var e = _.ZP.getUserMaxFileSize(R),
                            t = (0, d.BU)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = T.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == R ? void 0 : R.premiumType) {
                            case I.p9.TIER_0:
                                n = T.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case I.p9.TIER_1:
                                n = T.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }), [R]),
                    U = (0, r.jsxs)("div", {
                        className: b().body,
                        children: [(0, r.jsx)("span", {
                            children: C
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(h.Z, function(e) {
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
                    artElement: N,
                    artContainerClassName: a()(b().artContainer),
                    enableArtBoxShadow: !1,
                    type: I.cd.UPLOAD_ERROR_UPSELL,
                    title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: U,
                    context: T.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: T.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: y.jXE.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: P ? I.Si.TIER_0 : I.Si.TIER_2,
                    isLoading: A
                }, l))
            }
            var L = n(443812),
                P = n(36627),
                R = n.n(P);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                var t = e.title,
                    n = e.help,
                    i = e.showPremiumUpsell,
                    o = e.transitionState,
                    l = e.icons,
                    c = e.fileSize,
                    s = e.onClose,
                    p = (0, L.Dt)(),
                    d = null != l ? l : g.J6;
                return i ? (0, r.jsx)(A, {
                    transitionState: o,
                    onClose: s,
                    fileSize: c
                }) : (0, r.jsx)(u.Y0, {
                    size: u.Cg.DYNAMIC,
                    "aria-labelledby": p,
                    transitionState: o,
                    children: (0, r.jsx)("div", {
                        className: a()(R().uploadDropModal, R().error),
                        children: (0, r.jsxs)("div", {
                            className: R().inner,
                            children: [(0, r.jsx)(f.Z, {
                                icons: d
                            }), (0, r.jsx)("div", {
                                id: p,
                                className: R().title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: R().instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            var U = "UPLOAD_ERROR_MODAL_KEY";

            function M(e) {
                (0, l.h7)((function(t) {
                    return (0, r.jsx)(C, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                N(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, t, e))
                }), {
                    modalKey: U
                })
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

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
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
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
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
                    t && u(e, t)
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
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(120415);

            function i(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function l(e) {
                            i(a, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            i(a, r, o, l, u, "throw", e)
                        }
                        l(void 0)
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
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
                        }([o, l])
                    }
                }
            };

            function l(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = o((function(e, t) {
                    var i, o, l, u;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(65091), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(21635)]).then(n.bind(n, 624501))];
                            case 1:
                                i = a.sent(), o = i.default;
                                if (null != (l = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) l(null);
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
        101566: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Y,
                $: () => K
            });
            var r = n(495414),
                i = n(409479),
                o = n(95508),
                a = n(598143),
                l = n(257695),
                u = n(595882),
                c = n(717187),
                s = n.n(c),
                f = n(496486),
                p = n.n(f),
                d = n(296602),
                _ = n(493254);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function y(e) {
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

            function T(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var A = new d.Z("UploaderBase.tsx"),
                L = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && m(e, t)
                    }(n, e);
                    var t = S(n);

                    function n(e) {
                        var r, i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            a = arguments.length > 2 ? arguments[2] : void 0;
                        O(this, n);
                        (r = t.call(this))._token = "";
                        r._lastUpdate = 0;
                        r._loaded = 0;
                        r._aborted = !1;
                        r._errored = !1;
                        r._raiseEndpointErrors = !1;
                        r.alreadyStarted = !1;
                        r._handleStart = function(e) {
                            r._cancel = e;
                            r.alreadyStarted || r.emit("start", r._file);
                            r.alreadyStarted = !0
                        };
                        r._handleProgress = function(e, t, n) {
                            var i = Date.now(),
                                o = (0, u.S)(e, t),
                                a = Math.floor((e - r._loaded) / ((i - r._lastUpdate) / 1e3));
                            if (null != n) {
                                var l;
                                null === (l = r._file.items) || void 0 === l || l.forEach((function(e) {
                                    e.item.progress = n[e.id]
                                }))
                            }
                            r._lastUpdate = i;
                            r._loaded = e;
                            r._file = g(y({}, r._file), {
                                currentSize: t,
                                progress: o,
                                rate: a
                            });
                            r.emit("progress", r._file)
                        };
                        r._handleException = function(e) {
                            r._handleError({
                                reason: {
                                    type: _.xi.ERROR_SOURCE_UNKNOWN,
                                    msg: e.toString()
                                }
                            })
                        };
                        r._handleAborted = function() {
                            r.clearProcessingMessageInterval()
                        };
                        r._handleError = function(e) {
                            var t = e.code,
                                n = e.reason,
                                i = e.body;
                            r.clearProcessingMessageInterval();
                            if (!r._aborted) {
                                r._errored = !0;
                                A.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(r.id));
                                r.emit("error", r._file, t, i, n);
                                r.removeAllListeners()
                            }
                        };
                        r._handleComplete = function(e) {
                            r.clearProcessingMessageInterval();
                            A.log("_handleComplete for ".concat(r.id));
                            r.emit("complete", r._file, e);
                            r.removeAllListeners()
                        };
                        r.id = p().uniqueId("Uploader");
                        r._url = e;
                        r._method = o;
                        r._raiseEndpointErrors = null !== (i = null == a ? void 0 : a.raiseEndpointErrors) && void 0 !== i && i;
                        return r
                    }
                    var r = n.prototype;
                    r._addAttachmentsToPayload = function(e, t, n) {
                        var r = y({}, e),
                            i = b(p().get(r, t, [])).concat(b(n));
                        return p().set(r, t, i)
                    };
                    r.clearProcessingMessageInterval = function() {
                        if (null != this.processingMessageChangeInterval) {
                            clearInterval(this.processingMessageChangeInterval);
                            this.processingMessageChangeInterval = void 0
                        }
                    };
                    r.cancel = function() {
                        A.log("cancel() for ".concat(this.id));
                        this._aborted = !0;
                        null != this._cancel && this._cancel();
                        this._handleComplete()
                    };
                    r.cancelItem = function(e) {
                        throw new Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                    };
                    r.upload = function(e, t, n) {
                        if (null != this._cancel) throw new Error("Uploader.upload(...): An upload is already in progress.");
                        this._lastUpdate = Date.now();
                        this._loaded = 0;
                        this._file = {
                            id: this.id,
                            name: e.name,
                            currentSize: 0,
                            totalPreCompressionSize: 0,
                            compressionProgress: 0,
                            progress: 0,
                            rate: 0,
                            hasImage: !1,
                            hasVideo: !1,
                            attachmentsCount: 0,
                            draftContent: null == t ? void 0 : t.content,
                            channelId: null == t ? void 0 : t.channel_id,
                            items: n
                        }
                    };
                    return n
                }(s()),
                P = n(2590),
                R = n(473708);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function U(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            C(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            C(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function w(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        w(e, t, n[t])
                    }))
                }
                return e
            }

            function G(e, t) {
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

            function k(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function x(e, t) {
                x = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return x(e, t)
            }

            function Z(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function F(e) {
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
                    var n, r = D(e);
                    if (t) {
                        var i = D(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return k(this, n)
                }
            }
            var H = function(e, t) {
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
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
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
                            }([o, l])
                        }
                    }
                },
                V = new r.Z("CloudUploaderBase.tsx"),
                Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && x(e, t)
                    }(n, e);
                    var t = F(n);

                    function n() {
                        M(this, n);
                        var e;
                        (e = t.apply(this, arguments)).files = [];
                        return e
                    }
                    var r = n.prototype;
                    r._fileSize = function() {
                        return this.files.reduce((function(e, t) {
                            var n;
                            return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                        }), 0)
                    };
                    r.compressAndCheckFileSize = function() {
                        var e = this;
                        return U((function() {
                            var t, n, r, i, o, u, c, s, f, p, d, E, O;
                            return H(this, (function(h) {
                                switch (h.label) {
                                    case 0:
                                        r = (0, l.F)(null === (t = e.files[0]) || void 0 === t || null === (n = t.item) || void 0 === n ? void 0 : n.target);
                                        if (e.files.length > r.getMaxAttachmentsCount()) {
                                            V.log("Too many attachments for ".concat(e.id));
                                            e._handleError({
                                                code: P.evJ.TOO_MANY_ATTACHMENTS
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 10];
                                    case 1:
                                        h.trys.push([1, 8, 9, 10]);
                                        c = e.files[Symbol.iterator]();
                                        h.label = 2;
                                    case 2:
                                        if (i = (s = c.next()).done) return [3, 7];
                                        f = s.value;
                                        h.label = 3;
                                    case 3:
                                        h.trys.push([3, 5, , 6]);
                                        return [4, f.reactNativeCompressAndExtractData()];
                                    case 4:
                                        h.sent();
                                        if (f.status === a.m.CANCELED) {
                                            V.log("compressAndCheckFileSize() file has been cancelled for compression - ".concat(f.id));
                                            return [3, 6]
                                        }
                                        if (0 === (null !== (p = f.currentSize) && void 0 !== p ? p : 0)) {
                                            e._handleError({
                                                code: P.evJ.ENTITY_EMPTY
                                            });
                                            return [2, !1]
                                        }
                                        if ((null !== (d = f.currentSize) && void 0 !== d ? d : 0) > r.getMaxFileSize(f.channelId)) {
                                            e._handleError({
                                                code: P.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: _.xi.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE
                                                }
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 6];
                                    case 5:
                                        E = h.sent();
                                        e._handleException(E);
                                        return [2, !1];
                                    case 6:
                                        i = !0;
                                        return [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        O = h.sent();
                                        o = !0;
                                        u = O;
                                        return [3, 10];
                                    case 9:
                                        try {
                                            i || null == c.return || c.return()
                                        } finally {
                                            if (o) throw u
                                        }
                                        return [7];
                                    case 10:
                                        if (e._fileSize() > r.getMaxTotalAttachmentSize()) {
                                            e._handleError({
                                                code: P.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: _.xi.POSTCOMPRESSION_SUM_TOO_LARGE
                                                }
                                            });
                                            return [2, !1]
                                        }
                                        return [2, !0]
                                }
                            }))
                        }))()
                    };
                    r._filesTooLarge = function() {
                        return this.files.some((function(e) {
                            return e.error === P.evJ.ENTITY_TOO_LARGE
                        }))
                    };
                    r.setUploadingTextForUI = function() {
                        var e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : R.Z.Messages.UPLOADING_FILES.format({
                                count: this.files.length
                            }),
                            t = this.files.some((function(e) {
                                return e.isImage
                            })),
                            n = this.files.some((function(e) {
                                return e.isVideo
                            })),
                            r = this._fileSize();
                        V.log("setUploadingTextForUI - total content: ".concat(r, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id));
                        this._file = G(j({}, this._file), {
                            totalPostCompressionSize: r,
                            currentSize: r,
                            name: e,
                            hasVideo: n,
                            hasImage: t,
                            attachmentsCount: this.files.length,
                            items: this.files
                        })
                    };
                    r._recomputeProgress = function() {
                        var e, t = this._recomputeProgressTotal(),
                            n = t.loaded,
                            r = t.total;
                        (0, i.Dn)() && (e = this._recomputeProgressByFile());
                        this._handleProgress(n, r, e)
                    };
                    r._recomputeProgressTotal = function() {
                        var e = this._fileSize();
                        return {
                            loaded: this.files.reduce((function(e, t) {
                                var n;
                                return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                            }), 0),
                            total: e
                        }
                    };
                    r._recomputeProgressByFile = function() {
                        var e = {};
                        this.files.forEach((function(t) {
                            e[t.id] = (0, u.S)(t.loaded, t.currentSize)
                        }));
                        return e
                    };
                    r.cancel = function() {
                        V.log("Cancel called for ".concat(this.id));
                        if (!this._aborted) {
                            this._aborted = !0;
                            null != this._cancel && this._cancel();
                            this.files.forEach((function(e) {
                                return e.cancel()
                            }));
                            this._handleComplete()
                        }
                    };
                    r.cancelItem = function(e) {
                        var t = this;
                        return U((function() {
                            var n, r;
                            return H(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        V.log("Cancel called for ".concat(t.id, " for item ").concat(e));
                                        if (null == (n = t.files.find((function(t) {
                                                return t.id === e
                                            })))) return [2];
                                        if (n.status === a.m.CANCELED) return [2];
                                        r = t.files.indexOf(n);
                                        t.files = Z(t.files.slice(0, r)).concat(Z(t.files.slice(r + 1)));
                                        t._file = G(j({}, t._file), {
                                            items: t.files
                                        });
                                        return [4, (0, o.V)(n)];
                                    case 1:
                                        i.sent();
                                        n.cancel();
                                        t.emit("cancel-upload-item", t._file);
                                        0 === t.files.length && t.cancel();
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    r.failed = function() {
                        return this.files.some((function(e) {
                            return e.status === a.m.ERROR
                        }))
                    };
                    r._remainingUploadCount = function() {
                        var e = this.files;
                        return e.length - e.filter((function(e) {
                            return e.status === a.m.COMPLETED
                        })).length
                    };
                    r.clear = function() {
                        this.cancel();
                        this.files = []
                    };
                    return n
                }(L);

            function K(e) {
                return z.apply(this, arguments)
            }

            function z() {
                z = U((function(e) {
                    var t, n, r, i = arguments;
                    return H(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 ? i[2] : void 0;
                                r = e.map((function(e) {
                                    return new Promise((function(r, i) {
                                        switch (e.status) {
                                            case a.m.NOT_STARTED:
                                                e.upload();
                                                break;
                                            case a.m.COMPLETED:
                                                r("complete");
                                                break;
                                            case a.m.ERROR:
                                                t && e.error !== P.evJ.ENTITY_TOO_LARGE ? e.upload() : i(new Error("File failed to upload"));
                                                break;
                                            case a.m.CANCELED:
                                                i(new Error("Upload is canceled"))
                                        }
                                        e.on("complete", (function() {
                                            r("complete")
                                        }));
                                        e.on("error", (function() {
                                            i(new Error("File ".concat(e.id, " failed to upload")))
                                        }));
                                        e.on("progress", (function(e, t) {
                                            null == n || n(e, t)
                                        }))
                                    }))
                                }));
                                return [4, Promise.all(r)];
                            case 1:
                                o.sent();
                                return [2]
                        }
                    }))
                }));
                return z.apply(this, arguments)
            }
        },
        460471: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(281110),
                i = n(347365),
                o = n(101566),
                a = n(474717),
                l = n(124453),
                u = n(473708);

            function c(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            c(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            c(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function f(e, t) {
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

            function d(e, t, n) {
                d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                };
                return d(e, t, n || e)
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
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
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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
            var y = function(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var T = function(e, t) {
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
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
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
                            }([o, l])
                        }
                    }
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
                    var t = g(n);

                    function n(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        f(this, n);
                        return t.call(this, e, r, i)
                    }
                    var c = n.prototype;
                    c.uploadFiles = function(e, t) {
                        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                            i = this,
                            a = this,
                            l = function() {
                                return d(_(n.prototype), "upload", i)
                            };
                        return s((function() {
                            var n, i, c;
                            return T(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        l().call(a, {
                                            name: u.Z.Messages.ATTACHMENT_PROCESSING
                                        }, t, e);
                                        n = new AbortController;
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 4, , 5]);
                                        a.files = e;
                                        if (a._aborted) return [2];
                                        a._handleStart((function() {
                                            return n.abort()
                                        }));
                                        return [4, a.compressAndCheckFileSize()];
                                    case 2:
                                        if (!s.sent()) return [2];
                                        a.setUploadingTextForUI();
                                        return [4, (0, o.$)(a.files, !0, a._recomputeProgress.bind(a))];
                                    case 3:
                                        s.sent();
                                        return [3, 5];
                                    case 4:
                                        i = s.sent();
                                        a._handleException(i);
                                        return [3, 5];
                                    case 5:
                                        s.trys.push([5, 7, , 8]);
                                        return [4, a._createMessage(n.signal, t, r)];
                                    case 6:
                                        return [2, s.sent()];
                                    case 7:
                                        c = s.sent();
                                        if (a._raiseEndpointErrors) throw c;
                                        a._handleException(c);
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    c._createMessage = function(e, t, n) {
                        var o = this;
                        return s((function() {
                            var u, c, s, f, p, d, _;
                            return T(this, (function(h) {
                                switch (h.label) {
                                    case 0:
                                        u = [];
                                        o.files.forEach((function(e, t) {
                                            var n = (0, l.B)(e, t);
                                            e.item.platform === a.ow.WEB && u.push(E({}, n))
                                        }));
                                        c = null != n && null != t ? o._addAttachmentsToPayload(t, n, u) : O(E({}, t), {
                                            attachments: u
                                        });
                                        s = {
                                            url: o._url,
                                            body: c,
                                            signal: e
                                        };
                                        f = "POST" === o._method ? r.ZP.post : r.ZP.patch;
                                        h.label = 1;
                                    case 1:
                                        h.trys.push([1, 3, , 4]);
                                        return [4, f(s)];
                                    case 2:
                                        p = h.sent();
                                        o._handleComplete(p.body);
                                        return [2, p.body];
                                    case 3:
                                        d = h.sent();
                                        if (o._raiseEndpointErrors) throw new i.Hx(d);
                                        o._handleError({
                                            code: null == d || null === (_ = d.body) || void 0 === _ ? void 0 : _.code,
                                            body: null == d ? void 0 : d.body
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    return n
                }(o.Z)
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
                e.COLLECTIBLES_SHOP_CARD = "collectibles shop card";
                e.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                e.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip";
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
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => C,
                JS: () => N,
                hH: () => P,
                AB: () => U,
                ZP: () => G,
                oG: () => j,
                kO: () => D,
                yw: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(382060),
                l = n(664625),
                u = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                p = n(567403),
                d = n(52467),
                _ = n(682776),
                E = n(491260),
                O = n(563367),
                h = n(715107),
                I = n(464187),
                y = n(407561),
                g = n(652591),
                T = n(563135),
                m = n(671723);
            var b = n(2590),
                v = n(897196);

            function S(e, t, n) {
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
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function L(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function P(e) {
                if (null == e) return null;
                var t = p.Z.getGuild(e);
                if (null == t) return null;
                var n, r = l.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    a = o[c.sH].length,
                    u = o[c.Zb].length,
                    d = y.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: a + u,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: u,
                    guild_num_roles: L(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = _.Z.getGuildPermissions(t)) && void 0 !== n ? n : T.ZP.NONE),
                    guild_is_vip: t.hasFeature(b.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: L(d)
                }
            }

            function R(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function N(e) {
                if (null == e) return null;
                var t = u.Z.getChannel(e);
                return null == t ? null : C(t)
            }

            function C(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, b.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(e.type) && null != e.parent_id ? i(u.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = _.Z.getChannelPermissions(e)) && void 0 !== t ? t : T.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(e) {
                if (null == e) return null;
                var t = u.Z.getChannel(e);
                if (null == t) return null;
                var n, r = d.Z.isVideoEnabled(),
                    i = O.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, D(t.getGuildId(), t.id, r), {
                    game_name: null != (n = m.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function M(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!g.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== b.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? I.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? h.Z.getChannelId(i) : null,
                        a = u.Z.getChannel(o),
                        l = M(a, i),
                        c = A({}, t, P(l), null != i && null != o && (0, v.AB)(o) ? R(0, o) : C(a));
                    g.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function D(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(y.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== l.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function j(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(y.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != E.Z.findActivity(e.userId, (function(e) {
                        return e.type === b.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const G = {
                trackWithMetadata: w,
                getVoiceStateMetadata: D
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => a,
                ub: () => l,
                bB: () => u
            });
            var r, i, o, a, l, u;
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
            }(l || (l = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(u || (u = {}))
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => p,
                no: () => d,
                ND: () => _,
                WC: () => O,
                z8: () => h,
                km: () => y,
                k0: () => g,
                af: () => T
            });
            var r, i, o, a, l = n(2590),
                u = n(203600),
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

            function f(e) {
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

            function p(e) {
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
            var d = (s(a = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(a, o.PRESET_VIDEO, [{
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
                }]), s(a, o.PRESET_CUSTOM, []), a),
                _ = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: u.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: u.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: u.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_1,
                    quality: u.ys.MID_STREAMING_QUALITY
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
                    guildPremiumTier: l.Eu4.TIER_1,
                    quality: u.ys.MID_STREAMING_QUALITY
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

            function E(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var O = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                h = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                I = function(e) {
                    return "".concat(e, "p")
                },
                y = [E(r.RESOLUTION_480, (function() {
                    return I(r.RESOLUTION_480)
                })), E(r.RESOLUTION_720, (function() {
                    return I(r.RESOLUTION_720)
                })), E(r.RESOLUTION_1080, (function() {
                    return I(r.RESOLUTION_1080)
                })), E(r.RESOLUTION_1440, (function() {
                    return I(r.RESOLUTION_1440)
                })), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [E(i.FPS_15), E(i.FPS_30), E(i.FPS_60)],
                T = [E(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), E(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), E(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        897436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jp: () => s,
                Xx: () => f,
                JY: () => d
            });
            var r = n(318715),
                i = n(260561),
                o = n(473903),
                a = n(116094),
                l = n(473708),
                u = (0, i.B)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                c = function(e) {
                    var t = e.user,
                        n = e.config,
                        r = n.desktopViewAndUseAndCollectEnabled,
                        i = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: i,
                        collectEnabled: a.ZP.isPremium(t) ? r : i
                    }
                },
                s = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        r = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: r
                        })
                    })
                },
                f = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = t.expressionSourceGuild,
                        i = void 0 === n ? void 0 : n,
                        a = t.autoTrackExposure,
                        l = void 0 === a || a,
                        s = (0, r.ZP)([o.default], (function() {
                            return o.default.getCurrentUser()
                        })),
                        f = u.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: l
                        }),
                        p = c({
                            user: s,
                            config: f
                        }),
                        d = p.viewAndUseEnabled,
                        _ = p.showTryPacksModalAndV2Copy,
                        E = p.collectEnabled,
                        O = d && E && null != i && !1 !== (null == i || null === (e = i.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: d,
                        collectEnabled: O,
                        showTryPacksModalAndV2Copy: _
                    }
                },
                p = (0, i.B)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: function() {
                            return null
                        }
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }]
                }),
                d = function(e) {
                    var t = p.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: !0
                    });
                    return {
                        showSettingsToggle: t.showSettingsToggle,
                        allowCollection: t.allowCollection,
                        getNewSettingsDescription: t.getNewSettingsDescription
                    }
                }
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => E,
                M0: () => O,
                Qj: () => h,
                Ao: () => I,
                YO: () => y,
                VO: () => g
            });
            var r = n(61209),
                i = n(567403),
                o = n(682776),
                a = n(968696),
                l = n(2590),
                u = n(897196),
                c = Array.from(u.Vg).map((function(e) {
                    return a.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                p = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                d = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                _ = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                E = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(l.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                O = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function h(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(p);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(s);
                if (null != r && r.length > 1) {
                    var i;
                    return {
                        guildId: r[1],
                        channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
                    }
                }
                var o = e.match(d);
                return null != o && o.length > 1 ? {
                    guildId: o[1]
                } : null
            }

            function I(e) {
                if (null == e) return null;
                var t = e.match(_);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function y(e) {
                return !!e.isPrivate() || o.Z.can(l.Plq.VIEW_CHANNEL, e)
            }

            function g(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == i.Z.getGuild(t) && t !== l.ME) return !1;
                if (null == n) return !0;
                var o = r.Z.getChannel(n);
                return null != o && y(o)
            }
        },
        317387: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a
            });
            var r, i, o = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(r || (r = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(i || (i = {}));
            var a = (0, o.B)({
                kind: "user",
                id: r.Global,
                label: "Premium tier 0 (Global)",
                defaultConfig: {
                    enableTier0: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enableTier0: !0,
                        variant: i.VARIANT_1
                    }
                }, {
                    id: 2,
                    label: "Variant 2",
                    config: {
                        enableTier0: !0,
                        variant: i.VARIANT_2
                    }
                }]
            })
        },
        159895: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bc: () => I,
                I6: () => T,
                Z$: () => m
            });
            var r = n(667294),
                i = n(318715),
                o = n(281110),
                a = n(744564),
                l = n(810978),
                u = n(473903),
                c = n(551778),
                s = n(636795),
                f = n(884123),
                p = n(203600),
                d = n(2590);

            function _(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            _(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            _(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
            var h = function(e, t) {
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
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                            }([o, l])
                        }
                    }
                },
                I = "nonSubscriber";

            function y() {
                return (y = E((function() {
                    var e;
                    return h(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                                });
                                return [4, o.ZP.get({
                                    url: d.ANM.USER_PREMIUM_LIKELIHOOD
                                })];
                            case 1:
                                e = t.sent().body;
                                a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                                    premiumLikelihood: g(e)
                                });
                                return [3, 3];
                            case 2:
                                404 === t.sent().status ? a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                                }) : a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e) {
                var t;
                return O(t = {}, I, e.non_subscriber), O(t, p.Si.TIER_0, e[p.Si.TIER_0]), O(t, p.Si.TIER_2, e[p.Si.TIER_2]), t
            }

            function T(e) {
                var t = e.getCurrentConfig({
                        location: "443cca_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    r = t.useExpectedValue,
                    i = f.Z.shouldFetchPremiumLikelihood();
                b(u.default.getCurrentUser(), i, n, r)
            }

            function m(e) {
                var t = e.useExperiment({
                        location: "443cca_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    o = t.useExpectedValue,
                    a = (0, i.ZP)([f.Z], (function() {
                        return f.Z.shouldFetchPremiumLikelihood()
                    })),
                    l = (0, i.ZP)([u.default], (function() {
                        return u.default.getCurrentUser()
                    }));
                r.useEffect((function() {
                    b(l, a, n, o)
                }), [l, a, n, o])
            }

            function b(e, t, n, r) {
                if (null != e && !(0, s.I5)(e) && n) {
                    t && function() {
                        y.apply(this, arguments)
                    }();
                    if (r) {
                        c.Z.isLoadedForSKU(p.Si.TIER_0) || c.Z.isFetchingForSKU(p.Si.TIER_0) || (0, l.GZ)(p.Si.TIER_0);
                        c.Z.isLoadedForSKU(p.Si.TIER_2) || c.Z.isFetchingForSKU(p.Si.TIER_2) || (0, l.GZ)(p.Si.TIER_2)
                    }
                }
            }
        },
        884123: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
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
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var f = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                p = f;
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
                    t && u(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    p = f
                };
                r.getState = function() {
                    return p
                };
                r.shouldFetchPremiumLikelihood = function() {
                    return !p.isFetching && !p.fetched
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: f,
                        state: p
                    }
                };
                return n
            }(r.ZP.Store);
            d.displayName = "UserPremiumLikelihoodStore";
            const _ = new d(i.Z, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    p.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    var t = e.premiumLikelihood;
                    p.premiumLikelihood = t;
                    p.fetched = !0;
                    p.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    p.isFetching = !1
                },
                LOGOUT: function() {
                    p.premiumLikelihood = void 0
                }
            })
        },
        799066: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            })
        },
        245325: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                i = n(473903),
                o = n(551778),
                a = n(116094),
                l = n(317387),
                u = n(159895),
                c = n(884123),
                s = n(203600);
            var f = n(717035);

            function p(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    p = e.location,
                    d = (0, r.e7)([i.default], (function() {
                        return i.default.getCurrentUser()
                    })),
                    _ = (0, f.N)(),
                    E = null != _,
                    O = null != d && (0, a.I5)(d);
                (0, u.Z$)(n);
                var h = l.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    I = n.useExperiment({
                        location: null != p ? p : "1"
                    }, {
                        autoTrackExposure: h && !O && !E && t
                    }),
                    y = I.enabled,
                    g = I.useExpectedValue,
                    T = I.useLikelihood,
                    m = (0, r.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    b = m.premiumLikelihood,
                    v = m.fetched,
                    S = (0, r.e7)([o.Z], (function() {
                        return o.Z.isLoadedForSKUs([s.Si.TIER_0, s.Si.TIER_2])
                    })),
                    A = !O && y && h && !E && (g ? !v || !S : !v),
                    L = s.p9.TIER_2;
                if (h)
                    if (E) {
                        var P = _.subscription_trial;
                        (null == P ? void 0 : P.sku_id) === s.Si.TIER_0 ? L = s.p9.TIER_0 : (null == P ? void 0 : P.sku_id) === s.Si.TIER_2 && (L = s.p9.TIER_2)
                    } else if (!O && !A && y)
                    if (g) {
                        L = function(e, t, n) {
                            return null == e ? s.p9.TIER_2 : e[s.Si.TIER_0] * t > e[s.Si.TIER_2] * n ? s.p9.TIER_0 : s.p9.TIER_2
                        }(b, (0, a.aS)(s.Xh.PREMIUM_MONTH_TIER_0).amount, (0,
                            a.aS)(s.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else T && (L = function(e) {
                        if (null == e) return s.p9.TIER_0;
                        var t = e[u.Bc],
                            n = e[s.Si.TIER_0],
                            r = e[s.Si.TIER_2];
                        return r > n && r > t ? s.p9.TIER_2 : s.p9.TIER_0
                    }(b));
                return {
                    isLoading: A,
                    suggestedPremiumType: L
                }
            }
        },
        970925: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => E
            });
            var r = n(785893),
                i = (n(667294), n(284610)),
                o = n(149258),
                a = n(15084),
                l = n(593166),
                u = n(442212),
                c = n(203600),
                s = n(2590),
                f = n(473708);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function _(e) {
                return null != (null == e ? void 0 : e.getGuildId()) ? s.ZY5.GUILD_CHANNEL : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate()) ? s.ZY5.DM_CHANNEL : null
            }

            function E(e) {
                var t = function() {
                        O();
                        (0, l.z)(!0)
                    },
                    E = e.channel,
                    O = e.onClose,
                    h = e.content,
                    I = d(e, ["channel", "onClose", "content"]);
                return (0, r.jsx)(u.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            p(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artURL: n(455021),
                    type: c.cd.MESSAGE_LENGTH_UPSELL,
                    title: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: s.J6R,
                        onLearnMore: t
                    }),
                    context: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: s.J6R
                    }),
                    glowUp: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: t
                    }),
                    analyticsSource: {
                        page: _(E)
                    },
                    analyticsLocation: {
                        section: s.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: s.qAy.BUTTON_CTA
                    },
                    onClose: O,
                    secondaryCTA: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        O();
                        var e = new Blob([h], {
                            type: "text/plain"
                        });
                        (0, a.d)([(0, o.dp)(e, "message.txt")], E, i.d.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    }
                }, I))
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                l = n(882723),
                u = n(153686),
                c = n(19585),
                s = n(594302),
                f = n(652591),
                p = n(189146),
                d = n(717035),
                _ = n(455706),
                E = n(70535),
                O = n(203600),
                h = n(2590),
                I = n(473708),
                y = n(296024),
                g = n.n(y),
                T = n(545292),
                m = n.n(T);

            function b(e, t) {
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

            function v(e) {
                var t, n, o = e.title,
                    y = e.type,
                    T = e.guildBoostProps,
                    v = e.analyticsSource,
                    S = e.analyticsLocation,
                    A = e.body,
                    L = e.context,
                    P = e.glowUp,
                    R = e.modalClassName,
                    N = e.artContainerClassName,
                    C = e.bodyClassName,
                    U = e.transitionState,
                    M = e.onClose,
                    w = e.onSubscribeClick,
                    D = e.onSecondaryClick,
                    j = e.secondaryCTA,
                    G = e.subscribeButtonText,
                    k = e.showNewBadge,
                    x = void 0 !== k && k,
                    Z = e.enableArtBoxShadow,
                    B = void 0 === Z || Z,
                    F = e.subscriptionTier,
                    H = void 0 === F ? O.Si.TIER_2 : F,
                    V = e.isLoading,
                    Y = void 0 !== V && V,
                    K = e.hideBackButton,
                    z = e.backButtonText,
                    W = b(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    q = null != T,
                    J = (0, d.N)(),
                    X = (null == J || null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H && !q,
                    Q = (0, p.zH)(!X),
                    $ = (0,
                        c.Z)(u.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    Y || (q ? f.default.track(h.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(y, " - Tier ").concat(T.boostedGuildTier),
                        guild_id: T.guild.id,
                        channel_id: T.channelId,
                        location: S,
                        location_stack: $
                    }) : f.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: y,
                        source: v,
                        location_stack: $,
                        sku_id: H
                    }))
                }), [q, H, Y]);
                var ee, te = B ? a()(g().artContainer, g().artContainerBoxShadow, N) : a()(g().artContainer, N),
                    ne = null;
                ne = "artURL" in W ? (0, r.jsx)("img", {
                    className: g().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, r.jsxs)(l.ModalRoot, {
                    className: a()(g().root, R),
                    "aria-label": o,
                    transitionState: U,
                    children: [(0, r.jsxs)("div", {
                        className: te,
                        children: [ne, x ? (0, r.jsx)("img", {
                            className: g().sparkleBadge,
                            alt: "",
                            src: m()
                        }) : null]
                    }), (0, r.jsx)(l.ModalContent, {
                        className: g().content,
                        children: Y ? (0, r.jsx)(l.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: X ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(E.ZP, {
                                    onClose: M,
                                    type: y,
                                    subscriptionTier: null !== (ee = null == J || null === (n = J.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : O.Si.TIER_2,
                                    headingText: o,
                                    context: L,
                                    analyticsLocationObject: S,
                                    children: P
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Heading, {
                                    className: g().header,
                                    variant: "heading-xl/semibold",
                                    children: o
                                }), (0, r.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: a()(C),
                                    children: A
                                })]
                            })
                        })
                    }), (0, r.jsxs)(l.ModalFooter, {
                        className: g().footer,
                        children: [(0, r.jsxs)("div", {
                            className: g().primaryActions,
                            children: [null != j ? (0, r.jsx)(l.Button, {
                                className: g().secondaryAction,
                                onClick: D,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: j
                            }) : null, function() {
                                var e;
                                if (q) return (0, r.jsx)(s.Z, {
                                    analyticsLocation: S,
                                    guild: T.guild,
                                    onClose: M
                                });
                                var t = X ? Q ? I.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == J || null === (e = J.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2 ? I.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : I.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = X ? null == J ? void 0 : J.trial_id : null;
                                return (0, r.jsx)(_.Z, {
                                    premiumModalAnalyticsLocation: S,
                                    subscriptionTier: H,
                                    trialId: n,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == w || w();
                                        M()
                                    },
                                    buttonText: null != G ? G : t
                                })
                            }()]
                        }), !K && (0, r.jsx)(l.Button, {
                            onClick: M,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != z ? z : I.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        798808: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(202351),
                i = n(744564),
                o = n(352980);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var E = {},
                O = {};

            function h(e) {
                if (null == e) return !1;
                var t = O[e];
                if (null == t) return !1;
                var n = o.Z.getMessage(e, t.messageId);
                if (null == n) return !1;
                E[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                };
                delete O[e]
            }

            function I() {
                E = {};
                O = {}
            }
            var y = function(e) {
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
                var t = _(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(o.Z)
                };
                r.getPendingReply = function(e) {
                    return E[e]
                };
                r.__getLocalVars = function() {
                    return {
                        pendingReplies: E,
                        shallowPendingReplies: O,
                        instance: g
                    }
                };
                return n
            }(r.ZP.Store);
            y.displayName = "PendingReplyStore";
            var g = new y(i.Z, {
                CREATE_PENDING_REPLY: function(e) {
                    var t = e.channel,
                        n = e.message,
                        r = e.shouldMention,
                        i = void 0 === r || r,
                        o = e.showMentionToggle,
                        a = void 0 === o || o;
                    E[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: i,
                        showMentionToggle: a
                    }
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    var t = e.channel,
                        n = e.messageId,
                        r = e.shouldMention,
                        i = void 0 === r || r,
                        o = e.showMentionToggle,
                        a = void 0 === o || o;
                    O[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: i,
                        showMentionToggle: a
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    var t = e.channelId,
                        n = e.shouldMention;
                    t in E && (E[t] = s(c({}, E[t]), {
                        shouldMention: n
                    }));
                    t in O && (O[t] = s(c({}, O[t]), {
                        shouldMention: n
                    }))
                },
                DELETE_PENDING_REPLY: function(e) {
                    var t = e.channelId;
                    delete E[t];
                    delete O[t]
                },
                CONNECTION_OPEN: I,
                LOGOUT: I,
                MESSAGE_DELETE: function(e) {
                    var t, n, r, i = e.id,
                        o = e.channelId;
                    if ((null === (t = E[o]) || void 0 === t || null === (n = t.message) || void 0 === n ? void 0 : n.id) === i) delete E[o];
                    else {
                        if ((null === (r = O[o]) || void 0 === r ? void 0 : r.messageId) !== i) return !1;
                        delete O[o]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    h(e.channelId)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    h(e.channelId)
                }
            });
            const T = g
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => o,
                dp: () => a,
                X7: () => l,
                E1: () => u,
                f7: () => c,
                HE: () => s,
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
            var l = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(e, t, n) {
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
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(169376);

            function i(e) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return i(e)
            }

            function o(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
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
                    var n, r = i(e);
                    if (t) {
                        var a = i(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
                }
            }
            const c = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = u(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function u(e, t) {
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

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var d = [];

            function _() {
                d = []
            }
            var E = function(e) {
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
                var t = p(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return d.length > 0
                };
                r.getLayers = function() {
                    return d
                };
                r.__getLocalVars = function() {
                    return {
                        layers: d
                    }
                };
                return n
            }(r.ZP.Store);
            E.displayName = "LayerStore";
            const O = new E(i.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (d.indexOf(t) >= 0) return !1;
                    d = s(d).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === d.length) return !1;
                    d = d.slice(0, -1)
                },
                LAYER_POP_ALL: _,
                LOGOUT: _,
                NOTIFICATION_CLICK: _
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => B
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                a = n.n(o),
                l = n(202351),
                u = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                p = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function h(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
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

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || m(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
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
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var v = Object.freeze([]),
                S = {},
                A = {},
                L = {},
                P = {},
                R = {};

            function N(e, t) {
                var n = S[e];
                return null != n ? n[t] : null
            }
            var C = function(e) {
                switch (e.type) {
                    case p.IIU.CUSTOM_STATUS:
                        return 4;
                    case p.IIU.COMPETING:
                        return 3;
                    case p.IIU.STREAMING:
                        return 2;
                    case p.IIU.PLAYING:
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
                    return C(t) - C(e)
                }(e, t) || function(e, t) {
                    return U(t) - U(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function w(e) {
                delete A[e];
                delete L[e];
                delete P[e];
                if (null != S[e]) {
                    var t = y(a().sortBy(S[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== p.Skl.OFFLINE) {
                        A[e] = n.status;
                        L[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    } else a().every(S[e], (function(e) {
                        return e.status === p.Skl.OFFLINE
                    })) && delete S[e]
                }
            }

            function D(e) {
                var t = S[e];
                if (null != t) {
                    var n = a().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== p.Skl.OFFLINE) {
                        A[e] = n.status;
                        L[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    }
                }
            }

            function j(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    a = e.activities;
                if (n === s.default.getId()) return !1;
                var l = S[n];
                if (null == l) {
                    if (r === p.Skl.OFFLINE) return !1;
                    l = S[n] = {}
                }
                if (r === p.Skl.OFFLINE) l[t] = {
                    status: r,
                    clientStatus: o,
                    activities: v,
                    timestamp: Date.now()
                };
                else {
                    var u = a.length > 1 ? g(a).sort(M) : a,
                        c = l[t];
                    a = null != c && i()(c.activities, u) ? c.activities : u;
                    l[t] = {
                        status: r,
                        clientStatus: o,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete R[n];
                w(n);
                return !0
            }

            function G(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    a = e.timestamp;
                if (n !== s.default.getId()) {
                    var l = S[n];
                    if (null == l) {
                        if (r === p.Skl.OFFLINE) return;
                        l = S[n] = {}
                    }
                    if (r === p.Skl.OFFLINE) l[t] = {
                        status: r,
                        clientStatus: i,
                        activities: v,
                        timestamp: Date.now()
                    };
                    else {
                        var u = o.length > 1 ? g(o).sort(M) : o;
                        l[t] = {
                            status: r,
                            clientStatus: i,
                            activities: u,
                            timestamp: a
                        }
                    }
                }
            }

            function k(e, t) {
                if (t === s.default.getId()) return !1;
                var n = S[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete S[t];
                w(t)
            }

            function x(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(S)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        k(e, i.value)
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
                    t && I(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    A[s.default.getId()] = e;
                    L[s.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(p.xW$.BOT_HTTP_INTERACTIONS) && (n = p.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return p.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = A[e]) && void 0 !== i ? i : n
                    }
                    var o, a = N(e, t);
                    return null !== (o = null == a ? void 0 : a.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = L[e]) && void 0 !== n ? n : v
                    }
                    var r = N(e, t);
                    return null == r || null == r.activities ? v : r.activities
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
                        for (var o, a = Object.keys(L)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var l = o.value,
                                u = L[l],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var p, d = u[Symbol.iterator](); !(c = (p = d.next()).done); c = !0) {
                                    var _ = p.value;
                                    _.application_id === e && t.push({
                                        userId: l,
                                        activity: _
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == d.return || d.return()
                                } finally {
                                    if (s) throw f
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
                    return R[e]
                };
                r.getUserIds = function() {
                    return Object.keys(L)
                };
                r.isMobileOnline = function(e) {
                    var t = P[e];
                    return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: S,
                        statuses: A,
                        activities: L,
                        activityMetadata: R,
                        clientStatuses: P
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: v,
                        presencesForGuilds: S,
                        statuses: A,
                        activities: L,
                        clientStatuses: P,
                        activityMetadata: R,
                        typeScore: C,
                        richnessScore: U
                    }
                };
                return n
            }(l.ZP.Store);
            Z.displayName = "PresenceStore";
            const B = new Z(u.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    S = {};
                    R = {};
                    A = E({}, r, A[r]);
                    L = E({}, r, L[r]);
                    P = E({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                a = t.clientStatus,
                                l = t.activities;
                            G({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: a,
                                activities: l,
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
                            G({
                                guildId: p.ME,
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
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    S = t.presencesForGuilds;
                    A = t.statuses;
                    L = t.activities;
                    R = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        j({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    x(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return k(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return j({
                            guildId: null != t ? t : p.ME,
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
                    x(p.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && j({
                            guildId: p.ME,
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
                    R[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && j({
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
                        null != e.presence && j({
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
                    if (A[t] === e.status && L[t] === e.activities) return !1;
                    A[t] = e.status;
                    L[t] = e.activities;
                    delete R[t]
                }
            })
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => a,
                Dt: () => l,
                FG: () => u
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                l = function() {
                    return (0, o.Z)((function() {
                        return a()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(l())
                }
        },
        406493: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(795308),
                a = n(633878);

            function l(e, t, n) {
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

            function c(e, t) {
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

            function s(e, t, n) {
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

            function p(e, t) {
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
            const d = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    c = e.viewBox,
                    d = void 0 === c ? "0 0 24 24" : c,
                    _ = e.foreground,
                    E = p(e, ["width", "height", "color", "viewBox", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, a.Z)(E)), {
                    width: n,
                    height: o,
                    viewBox: d,
                    children: (0, r.jsx)("path", {
                        className: _,
                        fill: u,
                        d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    _ = void 0 === d ? "" : d,
                    E = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm1.672-6.391a.6.6 0 0 0-.525-.309h-2.294a.6.6 0 0 0-.524.309l-1.167 2.1a.6.6 0 0 0 0 .582l1.166 2.1a.6.6 0 0 0 .525.309h2.294a.6.6 0 0 0 .525-.309l1.166-2.1a.6.6 0 0 0 0-.582l-1.166-2.1ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: _
                    })
                }))
            }))
        },
        939198: (e, t, n) => {
            "use strict";
            n.d(t, {
                mT: () => i,
                Jj: () => o,
                OF: () => a,
                hV: () => r,
                WW: () => l
            });
            var r, i = 550,
                o = 350,
                a = 40;
            ! function(e) {
                e.STATIC = "STATIC";
                e.RESPONSIVE = "RESPONSIVE";
                e.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var l = 20
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => d,
                OV: () => E,
                NG: () => O,
                mA: () => h,
                IG: () => I,
                lB: () => y,
                G2: () => g,
                fW: () => T
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = (n(882723), n(87931)),
                l = (n(473708), n(202427)),
                u = n.n(l);

            function c(e, t, n) {
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
                        c(e, t, n[t])
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

            function p(e, t) {
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
            var d = {
                ROUND: u().baseShapeRound,
                ROUND_LEFT: u().baseShapeRoundLeft,
                ROUND_RIGHT: u().baseShapeRoundRight,
                SQUARE: ""
            };

            function _(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function E(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var h = function(e) {
                    var t = e.count,
                        n = e.color,
                        i = void 0 === n ? a.Z.STATUS_DANGER : n,
                        l = e.disableColor,
                        c = void 0 !== l && l,
                        h = e.shape,
                        I = void 0 === h ? d.ROUND : h,
                        y = e.className,
                        g = e.style,
                        T = p(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(y, u().numberBadge, I),
                        style: s({
                            backgroundColor: c ? void 0 : i,
                            width: E(t),
                            paddingRight: _(t)
                        }, g)
                    }, T), {
                        children: O(t)
                    }))
                },
                I = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.color,
                        l = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = e.shape,
                        _ = void 0 === c ? d.ROUND : c,
                        E = e.disableColor,
                        O = void 0 !== E && E,
                        h = e.style,
                        I = p(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(n, u().textBadge, _),
                        style: s({
                            backgroundColor: O ? void 0 : l
                        }, h)
                    }, I), {
                        children: t
                    }))
                },
                y = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = p(e, ["text", "className"]);
                    return (0, r.jsx)(I, s({
                        className: o()(u().premiumBadge, n),
                        text: t
                    }, i))
                },
                g = function(e) {
                    var t = e.icon,
                        n = e.className,
                        i = e.color,
                        l = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = e.shape,
                        f = void 0 === c ? d.ROUND : c,
                        p = e.disableColor,
                        _ = void 0 !== p && p,
                        E = e.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, u().iconBadge, f),
                        style: s({
                            backgroundColor: _ ? void 0 : l
                        }, E),
                        children: (0, r.jsx)(t, {
                            className: u().icon
                        })
                    })
                },
                T = function(e) {
                    var t = e.className,
                        n = e.color,
                        i = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        l = e.shape,
                        c = void 0 === l ? d.ROUND : l,
                        f = e.disableColor,
                        _ = void 0 !== f && f,
                        E = e.style,
                        O = p(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", s({
                        className: o()(t, u().circleBadge, c),
                        style: s({
                            backgroundColor: _ ? void 0 : i
                        }, E)
                    }, O))
                }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => z,
                WA: () => B,
                f5: () => x,
                Gb: () => M,
                Rs: () => H,
                _2: () => Y,
                gL: () => D,
                fG: () => G
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                a = n.n(o),
                l = n(809784),
                u = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var d = function() {
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
                    t && p(e.prototype, t);
                    n && p(e, n)
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
            const _ = {
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

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            O(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            O(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
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

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
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
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
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
                            }([o, l])
                        }
                    }
                },
                T = new u.Z("Spellchecker"),
                m = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function b(e) {
                var t;
                e = null !== (t = _[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        a = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                T.error("".concat(e, " is not a valid locale."))
            }
            var v = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = y(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var a = this.getAvailableLanguages(t);
                        this.languageDetector = new d(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, l = null !== (o = a[e]) && void 0 !== o ? o : _[i];
                                null != l && n.setLocale(l)
                            }
                        }));
                        m.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        m.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = m.setLocale(e)) || void 0 === t || t.then((function(t) {
                            T.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                        m.replaceMisspelling(e)
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
                S = a().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, l.k)(e, HTMLInputElement) || (0, l.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, l.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return S(e, t.target)
                }), !0)
            }

            function L() {
                return (L = h((function() {
                    var e, t, n, r;
                    return g(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, m.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(b).filter(s.lm);
                                A(r = new v(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var P = n(120415);

            function R(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            R(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            R(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var C = function(e, t) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
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
                        }([o, l])
                    }
                }
            };

            function U() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, P.nI)() && U()
            }
            var w = M() ? function() {
                return L.apply(this, arguments)
            }() : null;

            function D(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function x(e) {
                return Z.apply(this, arguments)
            }

            function Z() {
                Z = N((function(e) {
                    var t, n, r = arguments;
                    return C(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, w];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return Z.apply(this, arguments)
            }

            function B(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = N((function(e) {
                    var t, n, r, i = arguments;
                    return C(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, w];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function H(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function z(e) {
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

            function u(e, t, n) {
                var r = t.trackedActionData,
                    o = l(t, ["trackedActionData"]),
                    u = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, u, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, u, l));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return u(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return u(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return u(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return u(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return u(r.ZP.delete, e, "del")
                }
            }
        },
        15084: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => g,
                d: () => T
            });
            var r = n(247250),
                i = n(567867),
                o = n(625091),
                a = n(444663),
                l = n(474717),
                u = n(396043),
                c = n(566706),
                s = n(255592),
                f = n(473903),
                p = n(652591),
                d = n(149258),
                _ = n(116094),
                E = n(99181),
                O = n(2590),
                h = n(493254),
                I = n(203600),
                y = n(473708);

            function g(e, t) {
                var n = f.default.getCurrentUser(),
                    r = e.getGuildId(),
                    i = d.dg(r),
                    o = [],
                    l = 0,
                    c = 0,
                    s = 0,
                    p = [],
                    g = !0,
                    T = !1,
                    m = void 0;
                try {
                    for (var b, v = t[Symbol.iterator](); !(g = (b = v.next()).done); g = !0) {
                        var S = b.value;
                        s += 1;
                        l += S.size;
                        o.push(S.size);
                        S.size > c && (c = S.size);
                        null != S.type ? p.push(S.type) : p.push("unknown")
                    }
                } catch (e) {
                    T = !0;
                    m = e
                } finally {
                    try {
                        g || null == v.return || v.return()
                    } finally {
                        if (T) throw m
                    }
                }
                if (c > i) {
                    (0, u.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: r,
                        user_individual_file_size_limit: i,
                        pre_compression_file_sizes: o,
                        pre_compression_aggregate_file_size: l,
                        num_attachments: s,
                        error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: p
                    });
                    (0, a.openUploadError)({
                        title: y.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, E.BK)(n, r),
                        showPremiumUpsell: !(0, _.M5)(n, I.p9.TIER_2),
                        fileSize: c
                    })
                } else(0, a.openUploadError)({
                    title: y.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: y.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: d.Ng(d.OC())
                    })
                })
            }

            function T(e, t, n) {
                var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    f = u.requireConfirm,
                    d = void 0 === f || f,
                    _ = u.showLargeMessageDialog,
                    h = void 0 !== _ && _,
                    I = u.isThumbnail,
                    T = void 0 !== I && I,
                    m = u.isClip,
                    b = void 0 !== m && m;
                if (!(e.length < 1)) {
                    var v = t.getGuildId();
                    if ((0, E.Bf)(e, v)) g(t, e);
                    else if (s.Z.getUploadCount(t.id, n) + e.length > O.dN1) {
                        (0, a.openUploadError)({
                            title: y.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            help: y.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: O.dN1
                            })
                        });
                        p.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                            existing_count: s.Z.getUploadCount(t.id, n),
                            new_count: e.length
                        })
                    } else {
                        t.type !== O.d4z.GUILD_VOICE && t.type !== O.d4z.GUILD_STAGE_VOICE || c.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0);
                        if (d) {
                            var S = Array.from(e).map((function(e) {
                                return {
                                    file: e,
                                    platform: l.ow.WEB,
                                    isThumbnail: T,
                                    isClip: b
                                }
                            }));
                            i.Z.addFiles({
                                files: S,
                                channelId: t.id,
                                showLargeMessageDialog: h,
                                draftType: n
                            })
                        } else o.Z.instantBatchUpload({
                            channelId: t.id,
                            files: e,
                            draftType: n,
                            isThumbnail: T,
                            isClip: b
                        })
                    }
                }
            }
        },
        99181: (e, t, n) => {
            "use strict";
            n.d(t, {
                BK: () => u,
                Bf: () => c,
                KZ: () => s
            });
            var r = n(474717),
                i = n(149258),
                o = n(116094),
                a = n(203600),
                l = n(473708);

            function u(e, t) {
                var n = i.Ng(i.dg(t));
                return o.ZP.isPremium(e, a.p9.TIER_2) ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : o.ZP.isPremium(e, a.p9.TIER_1) ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function c(e, t) {
                return i.nA(e, t) || i.vY(e)
            }

            function s(e) {
                return e.reduce((function(e, t) {
                    t.item.platform === r.ow.WEB && e.push(t.item.file);
                    return e
                }), [])
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
        283151: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a() {
                var e = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return e({})
                }), [])
            }
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